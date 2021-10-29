---
sidebar_position: 1
---

# User Guide

## How does JIPCAD work?
The JIPCAD proprietary language is built around specifying meshes, groups, and instances. Meshes and groups can be turned into instances, which are then displayed on the UI.

A mesh is any basic generator that is defined within JIPCAD. These basic generators can be found [here](https://github.com/randyfan/NOME3/wiki/NOME3-Language-Reference), and can be combined in order to create more advanced and geometrically complicated shapes. Basic generators have parameters that further specify their shape and look, which allows for more flexibility in design. A call to a generator takes the form:
```markdown
generator name_of_generator (condition_1 condition_2 ...) endgenerator
```

A group is a number of meshes that have been 'grouped' together into a new mesh, that can then be treated as a singular mesh and have operations performed on. This allows for scalability in the design of more complicated shapes.

An instance of either a mesh or a group is created in order to actually bring an object into the scene. Instances of meshes or groups must be created in order for the mesh or group to be displayed. Multiple instances of the same mesh or group can also be created.

Further operations such as point selection, face deletion, line sweeps, subdivision, screen panning and rotation, etc.) can then be performed once the scene is loaded.

The project must be compiled using CMake, with compilation instructions found [here](https://github.com/randyfan/NOME3/blob/master/README.md). To use the compiled application, open the program and load in a .NOM file. The scene in the .NOM file will be rendered into the crystal-ball interface, which can then be interacted with.

Generators and more-complex shapes (ex. sweeps, combinations of generators, etc.) must be defined and instantiated on the .NOM file prior to rendering in the application, but once a scene is rendered then faces/vertices can be deleted, objects can be subdivided, the time variable can be used to pan the screen, etc.

## NOME Language Example
An example of the interplay between meshes, groups, and instances can be seen here:
```markdown
point p1 (0 2 1) endpoint
point p2 (1 0 1) endpoint
point p3 (-1 0 1) endpoint

mesh triangle
    face f1 (p1 p2 p3) endface
endmesh

group diamond
	instance t0 triangle endinstance
	instance t1 triangle rotate (0 1 0) (90) translate (-1 0 1) endinstance
	instance t2 triangle rotate (0 0 1) (180) endinstance
	instance t3 triangle rotate (0 0 1) (180) rotate (0 1 0) (90) translate (-1 0 1) endinstance
endgroup

instance d1 diamond scale (25 25 25) translate (0 0 -25) endinstance
```