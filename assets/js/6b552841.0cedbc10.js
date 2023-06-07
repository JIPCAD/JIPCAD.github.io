"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[8874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},s="Developer Guide",i={unversionedId:"tutorial/developer",id:"tutorial/developer",title:"Developer Guide",description:"Understand the Codebase",source:"@site/docs/tutorial/developer.md",sourceDirName:"tutorial",slug:"/tutorial/developer",permalink:"/docs/tutorial/developer",draft:!1,editUrl:"https://github.com/JIPCAD/JIPCAD/docs/tutorial/developer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Putting It All Together",permalink:"/docs/tutorial/putting-together"},next:{title:"Mac",permalink:"/docs/compiling/mac"}},c={},d=[{value:"Understand the Codebase",id:"understand-the-codebase",level:2},{value:"Codebase Architecture",id:"codebase-architecture",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Between Document and Scene",id:"between-document-and-scene",level:2},{value:"Scene",id:"scene",level:2},{value:"Render",id:"render",level:2},{value:"MainWindow.cpp",id:"mainwindowcpp",level:2},{value:"Generators",id:"generators",level:2},{value:"Error Reporting Module",id:"error-reporting-module",level:2},{value:"Video Tutorial",id:"video-tutorial",level:3},{value:"Important Variables:",id:"important-variables",level:3},{value:"Building Instance Syntax Checkers:",id:"building-instance-syntax-checkers",level:3}],l={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-guide"},"Developer Guide"),(0,o.kt)("h2",{id:"understand-the-codebase"},"Understand the Codebase"),(0,o.kt)("p",null,"The purpose of this document is to provide JIPCAD members enough information about the codebase to reduce the amount of time they need to spend reviewing the codebase individually. It is not a comprehensive overview."),(0,o.kt)("p",null,"I recommend looking at the actual code files as you read through the sections. For example, when I discuss ASTSceneAdapter.cpp, it\u2019d be ideal to have that file open so you can look at which functions are being referenced."),(0,o.kt)("p",null,"In general, if there\u2019s a function or code section you\u2019re confused by, consider using the C++ debugger or C++ print statements such as std::cout << \u201chello\u201d << std::endl; and open a simple .nom file to see the output in the terminal. It may take several hours of just stepping through the code to understand a few sections of it, but it\u2019s a great learning experience in my opinion. That being said, ",(0,o.kt)("strong",{parentName:"p"},"you don\u2019t have to understand all of the codebase or even the majority of it to be able to contribute to JIPCAD.")," For example, to add the Torus Knot generator, the only files I touched were Nom.g4, ASTSyntaxAdapter.cpp, and the new TorusKnot.cpp/.h files. Also, we greatly appreciate any JIPCAD bug fixes, which may require just changing a few lines of code."),(0,o.kt)("h2",{id:"codebase-architecture"},"Codebase Architecture"),(0,o.kt)("p",null,"The JIPCAD GUI uses event-based programming. We have states and when an event comes (e.g., a user opens a .nom file in the GUI or selects a vertex), the application responds to that event by altering states. The three state elements in the codebase are ",(0,o.kt)("strong",{parentName:"p"},"Document"),", ",(0,o.kt)("strong",{parentName:"p"},"Scene"),", ",(0,o.kt)("strong",{parentName:"p"},"Renderer"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Document")," files (used for parsing .nom file) are found in JIPCAD/Application/Parsing, the main ",(0,o.kt)("strong",{parentName:"p"},"Scene")," files (used to store the geometry data) are found in JIPCAD/Application/Scene, and the ",(0,o.kt)("strong",{parentName:"p"},"Rendering")," files (used to display the scene) are found in JIPCAD/Application/QtFrontend."),(0,o.kt)("p",null,"The Sourcemanager.cpp file is the main manager for the ",(0,o.kt)("strong",{parentName:"p"},"Document"),". Scene.cpp is the main file for the ",(0,o.kt)("strong",{parentName:"p"},"Scene"),", and Nome3dview.cpp + InteractiveMesh.cpp manages the ",(0,o.kt)("strong",{parentName:"p"},"Renderer")," part. These 3 state elements are opened and connected by this one file called ",(0,o.kt)("strong",{parentName:"p"},"MainWindow.cpp.")," The ",(0,o.kt)("strong",{parentName:"p"},"MainWindow.cpp")," is essentially the center of the codebase. Every state element is linked to it, so I highly recommend starting here when trying to understand the codebase."),(0,o.kt)("p",null,"So in summary, we have the ",(0,o.kt)("strong",{parentName:"p"},"Document"),", and the document data then flows to the ",(0,o.kt)("strong",{parentName:"p"},"Scene"),", and lastly the scene data flows to the ",(0,o.kt)("strong",{parentName:"p"},"Renderer")," in order to display the scene. The diagram below may help you internalize these relationships."),(0,o.kt)("p",null,"In the following sections, we\u2019ll briefly discuss each state element and MainWindow.cpp."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/UMP3Jtj9YKDqgWdQWyY3B14SUBWVSQXZQ3sGw_LocplJxk38jWmeWJCkylelWaNkYlGC__cb3hIjd6SnyXdz0Dgifa03p4QSlkApfPpm60qTJJ2J4r0SoHHP6uIsFFzWGPojtMR_m56_JHzC9Q",alt:"img"})),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Below is a simple AST example for the \u201c1 + 2\u201d expression. In \u201c1 + 2\u201d, 1 and 2 would be Anum, and + would be ABinaryOp. They all inherit from AExpr. AExpr will be the general thing you\u2019d use to represent any expression, such as \u201c1 + 2\u201d or any expressions in a JIPCAD command. If you look at the children class of AExpr, AIdent is an expression, ANumber is an expression, AUnaryOp is also an expression. ABinary and Avector, ACall , AWrapperExpr, are all expressions. AWrapperExpr deals with the ${expr \u2026}."),(0,o.kt)("p",null,"If you\u2019re interested in expanding JIPCAD language (e.g. adding for loops) or modifying the document retroactively (e.g. making a change in the scene and saving the scene into the file), understanding these ",(0,o.kt)("strong",{parentName:"p"},"Document")," files, and particularly SourceManager.cpp, will be useful."),(0,o.kt)("p",null,"Unfortunately, many of the files in this ",(0,o.kt)("strong",{parentName:"p"},"Document")," section are quite convoluted. If you look into Sourcemanager.cpp, we have 300 lines of code just to do line number tracking. We have things like RemoveToken() that are also convoluted. Thus, this section of the codebase is quite cumbersome, but can be understood."),(0,o.kt)("p",null,"Fortunately, if you just want to add a new shape generator, such as a sphere generator, all you need to modify in this ",(0,o.kt)("strong",{parentName:"p"},"Document")," section is the Nom.g4 file. The Nom.g4 file is very intuitive thanks to the ANTLR library we\u2019re using, so definitely take a look at that file."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/eC16P0ndzZ_yJJRnBo9LCdjtdNwB7T7hgS5pZXBZA6ShYImaS1v7YyXyk11Ibe8X_0lBkLTPakSs6YsLfoQkAtrxIthxICC6KvjEB0UOMiXjawPZgH2Y3rEil1J88SD2KkypG5_w9aUPibD7hA",alt:"img"})),(0,o.kt)("h2",{id:"between-document-and-scene"},"Between Document and Scene"),(0,o.kt)("p",null,"After we have constructed the AST using the ",(0,o.kt)("strong",{parentName:"p"},"Document")," files, we can construct the scene using the AST. The code for this AST-to-Scene conversion is implemented in ASTSceneAdapter.cpp. Understanding this particular file will give you a very good understanding of how the data flows from ",(0,o.kt)("strong",{parentName:"p"},"Document")," to ",(0,o.kt)("strong",{parentName:"p"},"Scene")," and how the scene is set up."),(0,o.kt)("p",null,"When you call TraverseFile() in AstSceneAdapter.cpp, it translates whatever is in the AST into the scene. Specifically, TraverseFile() in AstSceneAdapter.cpp loops over all the commands in that file. It actually visits all the bank and sets first to create all the sliders. After it creates all the sliders, it goes through all the commands. For each command, it calls VisitCommandSyncScene(). This function classifies the command into the following 4 types and syncs it with the scene:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dummy (not handled \u2013 just a placeholder)"),(0,o.kt)("li",{parentName:"ol"},"Entity (basically the Shape Generators, including \u201cmesh\u201d)"),(0,o.kt)("li",{parentName:"ol"},"Instance (Group or Instance)"),(0,o.kt)("li",{parentName:"ol"},"BankSet (Slider)")),(0,o.kt)("p",null,"Here\u2019s a screenshot of the command type of the various commands (found in ASTSceneAdapter.cpp):"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/9k3a1WHum3FudrEf2iWsjvb0WDdPXOShh-nyrZ93ixnf89mNHvk7Fnhmm3na_iLQ0R7oV1rMi4DKrhoTiQNFpk72gjoZ8m_xkMW02_sHbd5CNkBPA0LXwKmSn4bv2vDxLd6Oty793WEoHaNqjw",alt:"img"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it\u2019s a Dummy command, VisitCommandandSync() returns a warning message because that means the command has not been implemented yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it\u2019s an Entity command, we call MakeEntity(), which returns the corresponding entity object. For example, if the entity is a polyline and we call MakeEntity(), it returns a new polyline object that has the entity name specified. Then, the code does all the stuff needed to store the polyline into the scene, such as adding it into the scene with GEnv.Scene->AddEntity(entity) and connecting faces if needed (such as for Meshes and Torus Knots). Whenever we AddEntity(), what we\u2019re actually doing is putting the entity object into the EntityLibrary dictionary for future reference. The dictionary key is the entity\u2019s name and the value is the entity object. EntityLibrary is useful when we need to retrieve vertex data from certain entities, such as when we call FindPointOutput() in Polyline.cpp and Face.cpp. More importantly, the dictionary is very crucial when we instanciate the entity and need to attach the entity to a scene node; this occurs when we need to find the entity from the dictionary and then set the scene node\u2019s entity to be it, as shown below."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/f7ZDa24MzvAQSVZ_0Fklnef-yfmKdj4DyOaCpe1cPPcQI5BnBcw0UzINZ_J6VuI2sQpfJJrebw1-g2wwNEcUllc0rqCJq5XNfB6rI5kyniamdKzZX4ShARxiii7vVTfwfS_BEPpDlllkeoc65Q",alt:"img"})),(0,o.kt)("p",{parentName:"li"},"As a side note, the \u201cmesh\u201d command is kind of a special type of entity because it is allowed to have subcommands. It is similar to \u201cgroup\u201d; the key difference being \u201cgroup\u201d is a collection of instances while \u201cmesh\u201d is a collection of entities, specifically faces. Thus, \u201cgroup\u201d is considered an Instance command, while \u201cmesh\u201d is considered an Entity command."),(0,o.kt)("p",{parentName:"li"},"For the \u201cmesh\u201d command, we visit its subcommands (the faces) as well using:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto* sub : cmd->GetSubCommands())\n{\n    VisitCommandSyncScene(sub, scene, true);\n}\n")),(0,o.kt)("p",{parentName:"li"},"Also, the difference between a \u201cmesh\u201d command and a \u201cCMesh object\u201d is confusing but needs to be understood. A polyline, a circle, torus, mesh, etc. all inherit from\u201cCMesh\u201d, but only \u201cmesh\u201d is actually the \u201cmesh\u201d command of course.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it\u2019s an Instance command, we make a scene node because every instance needs to have a scene node that is part of the scene graph (and the scene tree)."),(0,o.kt)("p",{parentName:"li"},"Wait\u2026 you may be wondering what the heck is a scene tree? How is it different from a scene graph? The difference will be described later, in the Scene section. For now, pretend I did not mention it and we just have some scene graph representing the scene."),(0,o.kt)("p",{parentName:"li"},"Anyways, the instance can be either an instance of an entity or an instance of a group. To determine if it\u2019s an entity vs group, the code grabs the second identifier name and tries to find an entity. If it finds the entity in the EntityLibrary dictionary, it calls sceneNode->SetEntity(",(0,o.kt)("em",{parentName:"p"},"entity"),"), storing the ",(0,o.kt)("em",{parentName:"p"},"entity")," as an InstanceEntity attribute for the scene node (specifically, within each of the scene node\u2019s corresponding scene tree nodes actually. Once again, don\u2019t worry, the difference between screen node vs scene tree node will be discussed in the Scene section). If it doesn\u2019t find an entity with the name, it tries to find a group. If it finds a group, then it makes the instance scene node a parent of the existing group scene node.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it\u2019s a Group command, as mentioned briefly above, it will create a scene node for group through the CreateGroup function: GEnv.Scene->CreateGroup(cmd->GetName()). Importantly, this scene node is created, but not connected to the actual scene graph yet. In order for it to be added into the scene graph, you need to make an instance of the group (simulator to how you had to make an instance of an entity in order for the entity to be attached to a scene node). When you make instance of the group (e.g. instance instofG1 G1 endinstance), you find the group called G1 in the Group dictionary and then you make the instance scene node (named instofG1) its parent, and then make SceneRoot the parent of instofG1. So now G1 is linked into the scene graph directly."),(0,o.kt)("p",{parentName:"li"},"Whenever we create a group scene node, what we\u2019re actually doing is putting a group scene node into the Groups dictionary. Then, we visit each of the group\u2019s subcommands. For example, in the below example, there are two subcommands (that are both instance commands). Those two subcommands would each create an instance scene node which would be InstanciateUnder this group scene node."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"group G1:\n    instance mesh1 mesh0 endinstance\n    instance polyline1 polyline0 endinstance\nendgroup\n")))),(0,o.kt)("h2",{id:"scene"},"Scene"),(0,o.kt)("p",null,"In the Between ",(0,o.kt)("em",{parentName:"p"},"Document")," and ",(0,o.kt)("em",{parentName:"p"},"Scene")," section, we frequently discussed scene nodes. We assumed these nodes were just a part of Scene Graph. But in reality, we are, on the fly, using these scene nodes to create scene tree nodes that form a more useful Scene Tree data structure. This Scene Tree is then fed into the Rendering files to display the scene."),(0,o.kt)("p",null,"Wait... why do we actually need a Scene Tree and how are we creating these scene tree nodes?"),(0,o.kt)("p",null,"Why we need a Scene Tree:"),(0,o.kt)("p",null,"Recall, the ",(0,o.kt)("strong",{parentName:"p"},"Scene")," files are in charge of handling and storing geometry data to represent a scene. The geometry data is stored in two data structures: Scene Graph and Scene Tree."),(0,o.kt)("p",null,"To illustrate the difference between these two data structures, let\u2019s define an instance of a group called G1, and this group contains a mesh and polyline instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"group G1:\n    instance mesh1 mesh0 endinstance\n    inststance polyline1 polyline0 endinstance\nendgroup\ninstance instOfG1 G1 endinstance\ninstance differentlocation G1 endinstance\n")),(0,o.kt)("p",null,"Then, the left image below would be the corresponding Scene Graph built (which contains scene nodes) and the right would be the Scene Tree (which contains scene tree nodes). As you can see the Scene Tree allows each mesh (e.g. polyline1) to have a unique path for each time it\u2019s been instanciated. This is not the case with the Scene Graph. The Scene Graph does not have two unique paths to polyline1 for example. There is just one. So what happens if we use a slider to change the parameters of one instance of a mesh? Then, this becomes problematic for the Scene Graph as you can imagine the renderer would not be able to figure out what objects to alter in the scene. For example, using just a Scene Graph"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/TWFfhW0t3GVeBB9rQl8pa7EVRvcMEDXVxkT84f71bvaPKK_A_dLDyY6pqsnd5A7KOOlG8X377L7tq5IvZRjlaQU0F7J-nmuG7xAPHlnbiV2cb0d7wc2oFbsQtjX-M0_wHARA-L2AspQnO-Pucw",alt:"img"})),(0,o.kt)("p",null,"representation, would the slider alter just instOFG1\u2019s polyline1 or another instance of G1\u2019s polyline1? It would incorrectly alter both. This is why we need to construct a Scene Tree and use it for rendering."),(0,o.kt)("p",null,"To summarize, Scene Tree has a unique path to each object in the scene, and this is the key difference between the Scene Graph and the Scene Tree; the unique path allows us to reuse the same objects without confusing the renderer."),(0,o.kt)("p",null,"Once we have this Scene Tree all set up, we will be checking for changes in the tree nodes (for example, if a slider causes a mesh parameter to change) with the below function:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/X8qy153EDiFH-smFBOxtl85AbZ72VRdYAhdMQ7Td3ktZkD5ULiQVtQSDjfVpErgBZ4YTojiaBaCjUcmEVDP0HINEMSorIUYB54v3wWvZEngKmA-3nDPpyToFifH3ZU8O5oeHoxvXHwl2Y2dmsA",alt:"img"})),(0,o.kt)("p",null,"How are these scene tree nodes being created?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/zy9sbfMtshUxLwq8Y6buuQpGi4ChG2Z8-btux6XMJ4rkmHgK0yjdZ7mNdPRTaDCQSOIrOmrtlWxs1Vk3SfxoLZ1kCf28q8Dl5x43BQXAVHdm989qJMCkqbuNLwVyiSNfsAoCmzPTjvt9qfrdCQ",alt:"img"})),(0,o.kt)("p",null,"If you look inside SceneGraph.cpp, there is a specific function to create these Scene Tree Node:"),(0,o.kt)("p",null,"CreateTree() is then called by AddParent():"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/UWhFcHWC04pabiaxj8t7bP1GuQnIk4ZbZzor2Ua6nb0dm8vqwNwQQITYMGrdjzEG1ao3VRo-c1NkHgZGZPwQ1R-vtcZaw_cQEwZJG7439wI-F0Sf6Xs86AFAg4Pp3D7jMq1AzaV6YZrN3k36qQ",alt:"img"})),(0,o.kt)("p",null,"AddParent() is called by CreateChildNode():"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/2ZzUSRL314Y8V0K9JgXQJI_2aLybL2hLL9B8X4drrFjWkkO2SPthnF30hiaT5nQyF-5706SterjlsC4TDhex7Iur3OGf4xv70k0Yu_7sJaHqCJ-G_cZDSNqVPLF3XG9BayjMfsgCXoIcu19PCg",alt:"img"})),(0,o.kt)("p",null,"And CreateChildNode() is called when we are visiting an instance command. Notice also group->AddParent(sceneNode) would create a scene tree node but for a group, with the group scene tree node\u2019s parent being the instance scene node\u2019s tree nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/UpJ6luBin5dB9l31PQpqQimgnNjxQyXWA5lW9jdr5OFQc-T2lGXo_1elJDvIVMeWOFph-6QpzMvJNqqbJf-MPgQ0hE2BVWHRH7luz0fPMbRY8dn3QCtjltbCFLoj1-iDg6tqpq9pvUhSErHOag",alt:"img"})),(0,o.kt)("p",null,"You can think of the Scene Tree and Scene Graph as being connected to the Scene state element the following way (image credit goes to Toby Chen)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/mUbqurBoV1ShdsmYZF81s19oc7aVe_xNAVyFLxUxmqf6mgBnLtB2HPudbF47L4XADSIC2hRLYd5sH1T2KOW9-BmGDkIqgGSfxF-c7WiPEouCF-n_XJSXsyE_X3XhbueUYz5n3GK5HofCwyhDIA",alt:"img"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Scene")," files are the core part of JIPCAD and where you may be spending the majority of your time on; it is where all the fancy geometry logic is stored (e.g. TorusKnot.cpp). If you\u2019re interested in creating new shape generators or doing complex geometry stuff with vertices, the scene files + a few files within ",(0,o.kt)("strong",{parentName:"p"},"Document")," are basically the only sections you need to get familiar with."),(0,o.kt)("p",null,"As a side note, each mesh is, behind the scenes, represented as an OpenMesh (graphics library) mesh called CMeshImpl, which keeps track of the mesh\u2019s half-edge data structure and other topological information."),(0,o.kt)("h2",{id:"render"},"Render"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Rendering")," files are used for creating the GUI and rendering, aka the Qtfrontend files used for drawing stuff onto the screen. The main files are Nome3dview.cpp and Interactivemesh.cpp. This state element is not as important as ",(0,o.kt)("strong",{parentName:"p"},"Document")," and ",(0,o.kt)("strong",{parentName:"p"},"Scene")," as we care more about the parsing the .nom file and the object topology than the shading/lighting of the object on the screen. For the sake of time, I\u2019ll not be describing this section in depth. The one key thing that is worth mentioning is that each InteractiveMesh object is associated with an entity\u2019s SceneTreeNode. This association/linking can be scene here:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/rwEbLJ10SG9LU_R86IiNzaZz6sbUhpxHPh8DAxqaI82nOGYoAB5DDcibTBxKBqBSVUR7aPscySnqROsHzV8DdvB9dO_pBg3QBS7PlJWMMm4feJTQ84MQbU1r1jZPhSXpiCmdoyxcpL00Qn5yJg",alt:"img"})),(0,o.kt)("p",null,"The InteractiveMesh contain a reference to the associated entity through a SceneTreeNode and has additional attributes such as material property, vertex selection interaction, etc. I think UpdateGeometry() is the final call used to add the interactive meshes into the display."),(0,o.kt)("h2",{id:"mainwindowcpp"},"MainWindow.cpp"),(0,o.kt)("p",null,"Let\u2019s now take a look at a few of the key functions within ",(0,o.kt)("strong",{parentName:"p"},"MainWindow.cpp"),", the center of the codebase. Starting at the very top of the file, inside the CMainWindow constructor, we setup the UI and load an empty JIPCAD file into the scene. Then, we have a bunch of on_action triggers. As their name suggests, these functions get ran when the button gets triggered. If you\u2019re curious how these are tracked or represented in the UI, look at the MainWindow.ui file. If you want to improve our user interface design or add new buttons, this UI file is important."),(0,o.kt)("p",null,"After the the on_action functions, we see the functions that were used to set up the UI when you open nome3.exe, such as SetupUI() and LoadEmptyNomeFile(). In LoadNomeFile(), notice we are first calling functions from ",(0,o.kt)("strong",{parentName:"p"},"Document")," to parse the .nom file, then we create a ",(0,o.kt)("strong",{parentName:"p"},"Scene")," with \u201cnew Scene::CScene\u201d and then calling PostloadSetup() at the very end to ",(0,o.kt)("strong",{parentName:"p"},"Render")," the scene. This chain of functions is exactly in the order as described in the beginning: ",(0,o.kt)("strong",{parentName:"p"},"Document")," -> ",(0,o.kt)("strong",{parentName:"p"},"Scene")," -> ",(0,o.kt)("strong",{parentName:"p"},"Render"),"."),(0,o.kt)("p",null,"PostloadSetup() is an important function. After we have set up the UI and loaded the JIPCAD file, here we set up the clock to keep track of any scene updates. Specifically, every 100 milliseconds, we literally check to see if the Scene has any updates by performing a DFS on the Scene Tree (note: not the Scene Graph!). The Scene Tree nodes are capable of being marked \u201cdirty\u201d when its value changes, so the DFS would be able to identify the \u201cdirty\u201d nodes and update the display accordingly."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/YChxTcmPjnWyvid6fyZdKNOUM8BMuUOYuRPRoatPcsc-FgZ_nEjBqwVb4FMgxIEanvwmVUQ1jbPPCKKW_VnqsMyM4ZuBrJCvdcCGAO8hvuN9vJDEhkiYEVc57nlsBTguIYo7z3uLNPfbSU1NIA",alt:"img"})),(0,o.kt)("p",null,"Specifically, Scene->Update() calls this DFSTreeNodeUpdate shown below. PostSceneUpdate(), which is not shown here, updates the InteractiveMeshes if the corresponding entity (mesh) was updated."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/wudTEtSLDThuiZeCanGEViK0caM4AvBJ7Jt-ejkrM4eBk1ILBzuxP1exM7HjNCx1kW3W6fzOOcn6NbChFhj9-yiC18Y1Zth09NDPsb8SYL-u4DcFtVsqWaXS2bhhcV0Q2A8wnS6qDwj0XaT3Kw",alt:"img"})),(0,o.kt)("h2",{id:"generators"},"Generators"),(0,o.kt)("p",null,"Generators in the JIPCAD Project are built in C++. A custom implementation of meshes, faces, and points based off of OpenMesh points and faces are used as the underlying data structures, and ANTLR4 is used to define and parse the proprietary JIPCAD Language."),(0,o.kt)("p",null,"An example of a typical Generator File in C++:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'DEFINE_META_OBJECT(CMobiusStrip)\n{\n    BindPositionalArgument(&CMobiusStrip::N, 1, 0);\n    BindPositionalArgument(&CMobiusStrip::Radius, 1, 1);\n    BindPositionalArgument(&CMobiusStrip::NumTwists, 1, 2);\n    BindPositionalArgument(&CMobiusStrip::NumCuts, 1, 3);\n}\n\nvoid CMobiusStrip::UpdateEntity()\n{\n    if (!IsDirty())\n        return;\n\n    Super::UpdateEntity();\n\n    // load in arguments to Mobius Strip generator\n    float n = (float)N.GetValue(100.0f); // number of individual points on each band\n    float radius = (float)Radius.GetValue(1.0f); // total radius\n    int numTwists = (int)ceil(NumTwists.GetValue(1.0f)); // number of twists\n    int numCuts = (int)ceil(NumCuts.GetValue(0.0f)); // number of times surface is cut\n    float bandwidth = 2*radius/((numCuts*2) + 1); // radius of each band\n\n    // create vertices\n    float uIncrement = (1.0f/n)*(float)tc::M_PI;\n    int uCounter = 0;\n    for (float u = 0.0f; u < 2.f * (float)tc::M_PI + uIncrement/3; u += uIncrement)\n    { // uIncrement/3 allows n+1 total vertices, accounting for rounding error (n+1th vertex == 0th vertex)\n        int vCounter = 0;\n        for (float v = -1*radius; v <= radius + bandwidth/3; v += bandwidth)\n        { // bandwidth/3 accounts for rounding error\n            float x = (1+(v/2.0f)*cosf((numTwists*u)/2.0f))*cosf(u);\n            float y = (1+(v/2.0f)*cosf((numTwists*u)/2.0f))*sinf(u);\n            float z = (v/2.0f)*sinf((numTwists*u)/2.0f);\n            AddVertex("v_" + std::to_string(uCounter) + "_" + std::to_string(vCounter), // name ex. "v_0_5"\n                      { x, y, z } );\n\n\n            AddVertex("vt_" + std::to_string(uCounter) + "_" + std::to_string(vCounter), // name ex. "vt_0_5"\n                      { x, y, z + (radius/10) } );\n\n            vCounter++;\n        }\n        uCounter++;\n    }\n\n    // add faces\n    for (int uFaceCounter = 0; uFaceCounter + 1 < uCounter; uFaceCounter++)\n    {\n        for (int cut = 0; cut <= numCuts; cut++)\n        {\n            std::vector<std::string> face;\n            face.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut)); //2*cut\n            face.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            face.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1)); //2*cut+1\n            face.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            AddFace("f1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), face);\n\n            std::vector<std::string> facet;\n            facet.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut)); //2*cut\n            facet.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            facet.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1)); //2*cut+1\n            facet.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            AddFace("ft1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), facet);\n\n            std::vector<std::string> faceconnect1;\n            faceconnect1.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut));\n            faceconnect1.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            faceconnect1.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            faceconnect1.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut));\n            AddFace("fc1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), faceconnect1);\n\n            std::vector<std::string> faceconnect2;\n            faceconnect2.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            faceconnect2.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1));\n            faceconnect2.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1));\n            faceconnect2.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            AddFace("fcc1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), faceconnect2);\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"error-reporting-module"},"Error Reporting Module"),(0,o.kt)("p",null,"(Go to JIPCAD/Application/Parsing/SourceManager.CPP). There, you will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReportErrors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckStatement")," Methods, the two key methods in building an instance checker."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ReportErrors")," Method parses the nom.g4 file, and tokenizes the code so it can be parsed by the CheckStatement Methods"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CheckStatement")," Method goes through, line-by-line, the code looking for key phrases. If it finds an illegal phrase before it finds a legal phrase, it immediately errors."),(0,o.kt)("h3",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("p",null,"Checkout the error reporting ",(0,o.kt)("a",{parentName:"p",href:"/tutorial_videos"},"video tutorial")," for developers."),(0,o.kt)("h3",{id:"important-variables"},"Important Variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<std::vector<std::string>> parsedcode -> 2d Vector which contains each word for the code by line numbers.\nstd::unordered_map<std::string, std::string> shapemap -> Hashmap that maps each phrase to its endphrase (circle -> endcircle)\nstd::unordered_map<std::string, std::string> idmap; -> Map of IDs\nstd::unordered_map<std::string, std::string> referencemap; -> Map of References (store anything you have to remember other than ids)\n")),(0,o.kt)("h3",{id:"building-instance-syntax-checkers"},"Building Instance Syntax Checkers:"),(0,o.kt)("p",null," Starting at line 212, There is a place where you can call your instance syntax checkers. Each checker takes in the parsed code, idmap, referencemap, the ith and jth location of where you are currently checking, and the shapemap.\nYour function should either return {error} or a vector of the ith and jth location of where your syntax checker found the endphrases. There are already a lot of syntax checkers implemented, you can use things like CheckInstance() to check an instance if your syntax checker comes up to an instance for example.\nThese functions are implemented for you"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"balancedbracket(std::string)\nisNumber(std::string)\ncheckcount(std::string, char) -> counts instances of char in string\nCheckSubdivision(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)\nCheckInstance(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)\nCheckBank(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &referencemap, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)\nCheckGroup(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)\n")),(0,o.kt)("p",null,"In your function, you should be checking for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Correct Number of phrases"),(0,o.kt)("li",{parentName:"ul"},"Valid IDs (use idmap)"),(0,o.kt)("li",{parentName:"ul"},"Appropriate use of optional phrases"),(0,o.kt)("li",{parentName:"ul"},"No reserved characters"),(0,o.kt)("li",{parentName:"ul"},"No illegal phrases (only expected ones)"),(0,o.kt)("li",{parentName:"ul"},"Balanced Brackets")))}h.isMDXComponent=!0}}]);