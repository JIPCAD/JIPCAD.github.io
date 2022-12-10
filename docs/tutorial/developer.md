---
sidebar_position: 2
---

# Developer Guide

## Understand the Codebase

The purpose of this document is to provide JIPCAD members enough information about the codebase to reduce the amount of time they need to spend reviewing the codebase individually. It is not a comprehensive overview.

I recommend looking at the actual code files as you read through the sections. For example, when I discuss ASTSceneAdapter.cpp, it’d be ideal to have that file open so you can look at which functions are being referenced.

In general, if there’s a function or code section you’re confused by, consider using the C++ debugger or C++ print statements such as std::cout << “hello” << std::endl; and open a simple .nom file to see the output in the terminal. It may take several hours of just stepping through the code to understand a few sections of it, but it’s a great learning experience in my opinion. That being said, **you don’t have to understand all of the codebase or even the majority of it to be able to contribute to JIPCAD.** For example, to add the Torus Knot generator, the only files I touched were Nom.g4, ASTSyntaxAdapter.cpp, and the new TorusKnot.cpp/.h files. Also, we greatly appreciate any JIPCAD bug fixes, which may require just changing a few lines of code.

## Codebase Architecture

The JIPCAD GUI uses event-based programming. We have states and when an event comes (e.g., a user opens a .nom file in the GUI or selects a vertex), the application responds to that event by altering states. The three state elements in the codebase are **Document**, **Scene**, **Renderer**.

The **Document** files (used for parsing .nom file) are found in JIPCAD/Application/Parsing, the main **Scene** files (used to store the geometry data) are found in JIPCAD/Application/Scene, and the **Rendering** files (used to display the scene) are found in JIPCAD/Application/QtFrontend.

The Sourcemanager.cpp file is the main manager for the **Document**. Scene.cpp is the main file for the **Scene**, and Nome3dview.cpp + InteractiveMesh.cpp manages the **Renderer** part. These 3 state elements are opened and connected by this one file called **MainWindow.cpp.** The **MainWindow.cpp** is essentially the center of the codebase. Every state element is linked to it, so I highly recommend starting here when trying to understand the codebase.

So in summary, we have the **Document**, and the document data then flows to the **Scene**, and lastly the scene data flows to the **Renderer** in order to display the scene. The diagram below may help you internalize these relationships.

In the following sections, we’ll briefly discuss each state element and MainWindow.cpp.

![img](https://lh6.googleusercontent.com/UMP3Jtj9YKDqgWdQWyY3B14SUBWVSQXZQ3sGw_LocplJxk38jWmeWJCkylelWaNkYlGC__cb3hIjd6SnyXdz0Dgifa03p4QSlkApfPpm60qTJJ2J4r0SoHHP6uIsFFzWGPojtMR_m56_JHzC9Q)

## Documentation

Below is a simple AST example for the “1 + 2” expression. In “1 + 2”, 1 and 2 would be Anum, and + would be ABinaryOp. They all inherit from AExpr. AExpr will be the general thing you’d use to represent any expression, such as “1 + 2” or any expressions in a JIPCAD command. If you look at the children class of AExpr, AIdent is an expression, ANumber is an expression, AUnaryOp is also an expression. ABinary and Avector, ACall , AWrapperExpr, are all expressions. AWrapperExpr deals with the ${expr …}.

If you’re interested in expanding JIPCAD language (e.g. adding for loops) or modifying the document retroactively (e.g. making a change in the scene and saving the scene into the file), understanding these **Document** files, and particularly SourceManager.cpp, will be useful.

Unfortunately, many of the files in this **Document** section are quite convoluted. If you look into Sourcemanager.cpp, we have 300 lines of code just to do line number tracking. We have things like RemoveToken() that are also convoluted. Thus, this section of the codebase is quite cumbersome, but can be understood.

Fortunately, if you just want to add a new shape generator, such as a sphere generator, all you need to modify in this **Document** section is the Nom.g4 file. The Nom.g4 file is very intuitive thanks to the ANTLR library we’re using, so definitely take a look at that file.

![img](https://lh3.googleusercontent.com/eC16P0ndzZ_yJJRnBo9LCdjtdNwB7T7hgS5pZXBZA6ShYImaS1v7YyXyk11Ibe8X_0lBkLTPakSs6YsLfoQkAtrxIthxICC6KvjEB0UOMiXjawPZgH2Y3rEil1J88SD2KkypG5_w9aUPibD7hA)

## Between Document and Scene

After we have constructed the AST using the **Document** files, we can construct the scene using the AST. The code for this AST-to-Scene conversion is implemented in ASTSceneAdapter.cpp. Understanding this particular file will give you a very good understanding of how the data flows from **Document** to **Scene** and how the scene is set up.

When you call TraverseFile() in AstSceneAdapter.cpp, it translates whatever is in the AST into the scene. Specifically, TraverseFile() in AstSceneAdapter.cpp loops over all the commands in that file. It actually visits all the bank and sets first to create all the sliders. After it creates all the sliders, it goes through all the commands. For each command, it calls VisitCommandSyncScene(). This function classifies the command into the following 4 types and syncs it with the scene:

1. Dummy (not handled – just a placeholder)
2. Entity (basically the Shape Generators, including “mesh”)
3. Instance (Group or Instance)
4. BankSet (Slider)

Here’s a screenshot of the command type of the various commands (found in ASTSceneAdapter.cpp):

![img](https://lh6.googleusercontent.com/9k3a1WHum3FudrEf2iWsjvb0WDdPXOShh-nyrZ93ixnf89mNHvk7Fnhmm3na_iLQ0R7oV1rMi4DKrhoTiQNFpk72gjoZ8m_xkMW02_sHbd5CNkBPA0LXwKmSn4bv2vDxLd6Oty793WEoHaNqjw)

1. If it’s a Dummy command, VisitCommandandSync() returns a warning message because that means the command has not been implemented yet.

2. If it’s an Entity command, we call MakeEntity(), which returns the corresponding entity object. For example, if the entity is a polyline and we call MakeEntity(), it returns a new polyline object that has the entity name specified. Then, the code does all the stuff needed to store the polyline into the scene, such as adding it into the scene with GEnv.Scene->AddEntity(entity) and connecting faces if needed (such as for Meshes and Torus Knots). Whenever we AddEntity(), what we’re actually doing is putting the entity object into the EntityLibrary dictionary for future reference. The dictionary key is the entity’s name and the value is the entity object. EntityLibrary is useful when we need to retrieve vertex data from certain entities, such as when we call FindPointOutput() in Polyline.cpp and Face.cpp. More importantly, the dictionary is very crucial when we instanciate the entity and need to attach the entity to a scene node; this occurs when we need to find the entity from the dictionary and then set the scene node’s entity to be it, as shown below.

   ![img](https://lh3.googleusercontent.com/f7ZDa24MzvAQSVZ_0Fklnef-yfmKdj4DyOaCpe1cPPcQI5BnBcw0UzINZ_J6VuI2sQpfJJrebw1-g2wwNEcUllc0rqCJq5XNfB6rI5kyniamdKzZX4ShARxiii7vVTfwfS_BEPpDlllkeoc65Q)

   As a side note, the “mesh” command is kind of a special type of entity because it is allowed to have subcommands. It is similar to “group”; the key difference being “group” is a collection of instances while “mesh” is a collection of entities, specifically faces. Thus, “group” is considered an Instance command, while “mesh” is considered an Entity command.

   For the “mesh” command, we visit its subcommands (the faces) as well using:

   ```cpp
   for (auto* sub : cmd->GetSubCommands())
   {
       VisitCommandSyncScene(sub, scene, true);
   }
   ```

   Also, the difference between a “mesh” command and a “CMesh object” is confusing but needs to be understood. A polyline, a circle, torus, mesh, etc. all inherit from“CMesh”, but only “mesh” is actually the “mesh” command of course.

3. If it’s an Instance command, we make a scene node because every instance needs to have a scene node that is part of the scene graph (and the scene tree).

   Wait… you may be wondering what the heck is a scene tree? How is it different from a scene graph? The difference will be described later, in the Scene section. For now, pretend I did not mention it and we just have some scene graph representing the scene.

   Anyways, the instance can be either an instance of an entity or an instance of a group. To determine if it’s an entity vs group, the code grabs the second identifier name and tries to find an entity. If it finds the entity in the EntityLibrary dictionary, it calls sceneNode->SetEntity(*entity*), storing the *entity* as an InstanceEntity attribute for the scene node (specifically, within each of the scene node’s corresponding scene tree nodes actually. Once again, don’t worry, the difference between screen node vs scene tree node will be discussed in the Scene section). If it doesn’t find an entity with the name, it tries to find a group. If it finds a group, then it makes the instance scene node a parent of the existing group scene node.

4. If it’s a Group command, as mentioned briefly above, it will create a scene node for group through the CreateGroup function: GEnv.Scene->CreateGroup(cmd->GetName()). Importantly, this scene node is created, but not connected to the actual scene graph yet. In order for it to be added into the scene graph, you need to make an instance of the group (simulator to how you had to make an instance of an entity in order for the entity to be attached to a scene node). When you make instance of the group (e.g. instance instofG1 G1 endinstance), you find the group called G1 in the Group dictionary and then you make the instance scene node (named instofG1) its parent, and then make SceneRoot the parent of instofG1. So now G1 is linked into the scene graph directly.

   Whenever we create a group scene node, what we’re actually doing is putting a group scene node into the Groups dictionary. Then, we visit each of the group’s subcommands. For example, in the below example, there are two subcommands (that are both instance commands). Those two subcommands would each create an instance scene node which would be InstanciateUnder this group scene node.

   ```
   group G1:
   	instance mesh1 mesh0 endinstance
   	instance polyline1 polyline0 endinstance
   endgroup
   ```

## Scene

In the Between *Document* and *Scene* section, we frequently discussed scene nodes. We assumed these nodes were just a part of Scene Graph. But in reality, we are, on the fly, using these scene nodes to create scene tree nodes that form a more useful Scene Tree data structure. This Scene Tree is then fed into the Rendering files to display the scene.

Wait... why do we actually need a Scene Tree and how are we creating these scene tree nodes?

Why we need a Scene Tree:

Recall, the **Scene** files are in charge of handling and storing geometry data to represent a scene. The geometry data is stored in two data structures: Scene Graph and Scene Tree.

To illustrate the difference between these two data structures, let’s define an instance of a group called G1, and this group contains a mesh and polyline instance:

```
group G1:
	instance mesh1 mesh0 endinstance
	inststance polyline1 polyline0 endinstance
endgroup
instance instOfG1 G1 endinstance
instance differentlocation G1 endinstance
```

Then, the left image below would be the corresponding Scene Graph built (which contains scene nodes) and the right would be the Scene Tree (which contains scene tree nodes). As you can see the Scene Tree allows each mesh (e.g. polyline1) to have a unique path for each time it’s been instanciated. This is not the case with the Scene Graph. The Scene Graph does not have two unique paths to polyline1 for example. There is just one. So what happens if we use a slider to change the parameters of one instance of a mesh? Then, this becomes problematic for the Scene Graph as you can imagine the renderer would not be able to figure out what objects to alter in the scene. For example, using just a Scene Graph

![img](https://lh6.googleusercontent.com/TWFfhW0t3GVeBB9rQl8pa7EVRvcMEDXVxkT84f71bvaPKK_A_dLDyY6pqsnd5A7KOOlG8X377L7tq5IvZRjlaQU0F7J-nmuG7xAPHlnbiV2cb0d7wc2oFbsQtjX-M0_wHARA-L2AspQnO-Pucw)

representation, would the slider alter just instOFG1’s polyline1 or another instance of G1’s polyline1? It would incorrectly alter both. This is why we need to construct a Scene Tree and use it for rendering.

To summarize, Scene Tree has a unique path to each object in the scene, and this is the key difference between the Scene Graph and the Scene Tree; the unique path allows us to reuse the same objects without confusing the renderer.

Once we have this Scene Tree all set up, we will be checking for changes in the tree nodes (for example, if a slider causes a mesh parameter to change) with the below function:

![img](https://lh3.googleusercontent.com/X8qy153EDiFH-smFBOxtl85AbZ72VRdYAhdMQ7Td3ktZkD5ULiQVtQSDjfVpErgBZ4YTojiaBaCjUcmEVDP0HINEMSorIUYB54v3wWvZEngKmA-3nDPpyToFifH3ZU8O5oeHoxvXHwl2Y2dmsA)

How are these scene tree nodes being created?

![img](https://lh4.googleusercontent.com/zy9sbfMtshUxLwq8Y6buuQpGi4ChG2Z8-btux6XMJ4rkmHgK0yjdZ7mNdPRTaDCQSOIrOmrtlWxs1Vk3SfxoLZ1kCf28q8Dl5x43BQXAVHdm989qJMCkqbuNLwVyiSNfsAoCmzPTjvt9qfrdCQ)

If you look inside SceneGraph.cpp, there is a specific function to create these Scene Tree Node:

CreateTree() is then called by AddParent():

![img](https://lh5.googleusercontent.com/UWhFcHWC04pabiaxj8t7bP1GuQnIk4ZbZzor2Ua6nb0dm8vqwNwQQITYMGrdjzEG1ao3VRo-c1NkHgZGZPwQ1R-vtcZaw_cQEwZJG7439wI-F0Sf6Xs86AFAg4Pp3D7jMq1AzaV6YZrN3k36qQ)

AddParent() is called by CreateChildNode():

![img](https://lh5.googleusercontent.com/2ZzUSRL314Y8V0K9JgXQJI_2aLybL2hLL9B8X4drrFjWkkO2SPthnF30hiaT5nQyF-5706SterjlsC4TDhex7Iur3OGf4xv70k0Yu_7sJaHqCJ-G_cZDSNqVPLF3XG9BayjMfsgCXoIcu19PCg)

And CreateChildNode() is called when we are visiting an instance command. Notice also group->AddParent(sceneNode) would create a scene tree node but for a group, with the group scene tree node’s parent being the instance scene node’s tree nodes.

![img](https://lh3.googleusercontent.com/UpJ6luBin5dB9l31PQpqQimgnNjxQyXWA5lW9jdr5OFQc-T2lGXo_1elJDvIVMeWOFph-6QpzMvJNqqbJf-MPgQ0hE2BVWHRH7luz0fPMbRY8dn3QCtjltbCFLoj1-iDg6tqpq9pvUhSErHOag)

You can think of the Scene Tree and Scene Graph as being connected to the Scene state element the following way (image credit goes to Toby Chen)

![img](https://lh6.googleusercontent.com/mUbqurBoV1ShdsmYZF81s19oc7aVe_xNAVyFLxUxmqf6mgBnLtB2HPudbF47L4XADSIC2hRLYd5sH1T2KOW9-BmGDkIqgGSfxF-c7WiPEouCF-n_XJSXsyE_X3XhbueUYz5n3GK5HofCwyhDIA)

The **Scene** files are the core part of JIPCAD and where you may be spending the majority of your time on; it is where all the fancy geometry logic is stored (e.g. TorusKnot.cpp). If you’re interested in creating new shape generators or doing complex geometry stuff with vertices, the scene files + a few files within **Document** are basically the only sections you need to get familiar with.

As a side note, each mesh is, behind the scenes, represented as an OpenMesh (graphics library) mesh called CMeshImpl, which keeps track of the mesh’s half-edge data structure and other topological information.

## Render

The **Rendering** files are used for creating the GUI and rendering, aka the Qtfrontend files used for drawing stuff onto the screen. The main files are Nome3dview.cpp and Interactivemesh.cpp. This state element is not as important as **Document** and **Scene** as we care more about the parsing the .nom file and the object topology than the shading/lighting of the object on the screen. For the sake of time, I’ll not be describing this section in depth. The one key thing that is worth mentioning is that each InteractiveMesh object is associated with an entity’s SceneTreeNode. This association/linking can be scene here:

![img](https://lh3.googleusercontent.com/rwEbLJ10SG9LU_R86IiNzaZz6sbUhpxHPh8DAxqaI82nOGYoAB5DDcibTBxKBqBSVUR7aPscySnqROsHzV8DdvB9dO_pBg3QBS7PlJWMMm4feJTQ84MQbU1r1jZPhSXpiCmdoyxcpL00Qn5yJg)

The InteractiveMesh contain a reference to the associated entity through a SceneTreeNode and has additional attributes such as material property, vertex selection interaction, etc. I think UpdateGeometry() is the final call used to add the interactive meshes into the display.

## MainWindow.cpp

Let’s now take a look at a few of the key functions within **MainWindow.cpp**, the center of the codebase. Starting at the very top of the file, inside the CMainWindow constructor, we setup the UI and load an empty JIPCAD file into the scene. Then, we have a bunch of on_action triggers. As their name suggests, these functions get ran when the button gets triggered. If you’re curious how these are tracked or represented in the UI, look at the MainWindow.ui file. If you want to improve our user interface design or add new buttons, this UI file is important.

After the the on_action functions, we see the functions that were used to set up the UI when you open nome3.exe, such as SetupUI() and LoadEmptyNomeFile(). In LoadNomeFile(), notice we are first calling functions from **Document** to parse the .nom file, then we create a **Scene** with “new Scene::CScene” and then calling PostloadSetup() at the very end to **Render** the scene. This chain of functions is exactly in the order as described in the beginning: **Document** -> **Scene** -> **Render**.

PostloadSetup() is an important function. After we have set up the UI and loaded the JIPCAD file, here we set up the clock to keep track of any scene updates. Specifically, every 100 milliseconds, we literally check to see if the Scene has any updates by performing a DFS on the Scene Tree (note: not the Scene Graph!). The Scene Tree nodes are capable of being marked “dirty” when its value changes, so the DFS would be able to identify the “dirty” nodes and update the display accordingly.

![img](https://lh6.googleusercontent.com/YChxTcmPjnWyvid6fyZdKNOUM8BMuUOYuRPRoatPcsc-FgZ_nEjBqwVb4FMgxIEanvwmVUQ1jbPPCKKW_VnqsMyM4ZuBrJCvdcCGAO8hvuN9vJDEhkiYEVc57nlsBTguIYo7z3uLNPfbSU1NIA)

Specifically, Scene->Update() calls this DFSTreeNodeUpdate shown below. PostSceneUpdate(), which is not shown here, updates the InteractiveMeshes if the corresponding entity (mesh) was updated.

![img](https://lh5.googleusercontent.com/wudTEtSLDThuiZeCanGEViK0caM4AvBJ7Jt-ejkrM4eBk1ILBzuxP1exM7HjNCx1kW3W6fzOOcn6NbChFhj9-yiC18Y1Zth09NDPsb8SYL-u4DcFtVsqWaXS2bhhcV0Q2A8wnS6qDwj0XaT3Kw)

## Generators

Generators in the JIPCAD Project are built in C++. A custom implementation of meshes, faces, and points based off of OpenMesh points and faces are used as the underlying data structures, and ANTLR4 is used to define and parse the proprietary JIPCAD Language.

An example of a typical Generator File in C++:
```cpp
DEFINE_META_OBJECT(CMobiusStrip)
{
    BindPositionalArgument(&CMobiusStrip::N, 1, 0);
    BindPositionalArgument(&CMobiusStrip::Radius, 1, 1);
    BindPositionalArgument(&CMobiusStrip::NumTwists, 1, 2);
    BindPositionalArgument(&CMobiusStrip::NumCuts, 1, 3);
}

void CMobiusStrip::UpdateEntity()
{
    if (!IsDirty())
        return;

    Super::UpdateEntity();

    // load in arguments to Mobius Strip generator
    float n = (float)N.GetValue(100.0f); // number of individual points on each band
    float radius = (float)Radius.GetValue(1.0f); // total radius
    int numTwists = (int)ceil(NumTwists.GetValue(1.0f)); // number of twists
    int numCuts = (int)ceil(NumCuts.GetValue(0.0f)); // number of times surface is cut
    float bandwidth = 2*radius/((numCuts*2) + 1); // radius of each band

    // create vertices
    float uIncrement = (1.0f/n)*(float)tc::M_PI;
    int uCounter = 0;
    for (float u = 0.0f; u < 2.f * (float)tc::M_PI + uIncrement/3; u += uIncrement)
    { // uIncrement/3 allows n+1 total vertices, accounting for rounding error (n+1th vertex == 0th vertex)
        int vCounter = 0;
        for (float v = -1*radius; v <= radius + bandwidth/3; v += bandwidth)
        { // bandwidth/3 accounts for rounding error
            float x = (1+(v/2.0f)*cosf((numTwists*u)/2.0f))*cosf(u);
            float y = (1+(v/2.0f)*cosf((numTwists*u)/2.0f))*sinf(u);
            float z = (v/2.0f)*sinf((numTwists*u)/2.0f);
            AddVertex("v_" + std::to_string(uCounter) + "_" + std::to_string(vCounter), // name ex. "v_0_5"
                      { x, y, z } );


            AddVertex("vt_" + std::to_string(uCounter) + "_" + std::to_string(vCounter), // name ex. "vt_0_5"
                      { x, y, z + (radius/10) } );

            vCounter++;
        }
        uCounter++;
    }

    // add faces
    for (int uFaceCounter = 0; uFaceCounter + 1 < uCounter; uFaceCounter++)
    {
        for (int cut = 0; cut <= numCuts; cut++)
        {
            std::vector<std::string> face;
            face.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut)); //2*cut
            face.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));
            face.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1)); //2*cut+1
            face.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));
            AddFace("f1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), face);

            std::vector<std::string> facet;
            facet.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut)); //2*cut
            facet.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));
            facet.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1)); //2*cut+1
            facet.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));
            AddFace("ft1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), facet);

            std::vector<std::string> faceconnect1;
            faceconnect1.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut));
            faceconnect1.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));
            faceconnect1.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));
            faceconnect1.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut));
            AddFace("fc1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), faceconnect1);

            std::vector<std::string> faceconnect2;
            faceconnect2.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));
            faceconnect2.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1));
            faceconnect2.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1));
            faceconnect2.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));
            AddFace("fcc1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), faceconnect2);
        }
    }
}
```

## Error Reporting Module

(Go to JIPCAD/Application/Parsing/SourceManager.CPP). There, you will find the `ReportErrors` and `CheckStatement` Methods, the two key methods in building an instance checker.

`ReportErrors` Method parses the nom.g4 file, and tokenizes the code so it can be parsed by the CheckStatement Methods

`CheckStatement` Method goes through, line-by-line, the code looking for key phrases. If it finds an illegal phrase before it finds a legal phrase, it immediately errors.

### Video Tutorial
Checkout the error reporting [video tutorial](/tutorial_videos) for developers.

### Important Variables:
```cpp
std::vector<std::vector<std::string>> parsedcode -> 2d Vector which contains each word for the code by line numbers.
std::unordered_map<std::string, std::string> shapemap -> Hashmap that maps each phrase to its endphrase (circle -> endcircle)
std::unordered_map<std::string, std::string> idmap; -> Map of IDs
std::unordered_map<std::string, std::string> referencemap; -> Map of References (store anything you have to remember other than ids)
```

### Building Instance Syntax Checkers:

 Starting at line 212, There is a place where you can call your instance syntax checkers. Each checker takes in the parsed code, idmap, referencemap, the ith and jth location of where you are currently checking, and the shapemap.
Your function should either return {error} or a vector of the ith and jth location of where your syntax checker found the endphrases. There are already a lot of syntax checkers implemented, you can use things like CheckInstance() to check an instance if your syntax checker comes up to an instance for example.
These functions are implemented for you

```cpp
balancedbracket(std::string)
isNumber(std::string)
checkcount(std::string, char) -> counts instances of char in string
CheckSubdivision(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
CheckInstance(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
CheckBank(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &referencemap, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
CheckGroup(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
```

In your function, you should be checking for
* Correct Number of phrases
* Valid IDs (use idmap)
* Appropriate use of optional phrases
* No reserved characters
* No illegal phrases (only expected ones)
* Balanced Brackets