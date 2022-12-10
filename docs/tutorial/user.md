---
sidebar_position: 1
---

# User Guide

## How does JIPCAD work?
The JIPCAD proprietary language is built around specifying meshes, groups, and instances. Meshes and groups can be turned into instances, which are then displayed on the UI.

A mesh is any basic generator that is defined within JIPCAD. These basic generators can be found [here](../lang-ref/generators), and can be combined in order to create more advanced and geometrically complicated shapes. Basic generators have parameters that further specify their shape and look, which allows for more flexibility in design. A call to a generator takes the form:
```markdown
generator name_of_generator (condition_1 condition_2 ...) endgenerator
```

A group is a number of meshes that have been 'grouped' together into a new mesh, that can then be treated as a singular mesh and have operations performed on. This allows for scalability in the design of more complicated shapes.

An instance of either a mesh or a group is created in order to actually bring an object into the scene. Instances of meshes or groups must be created in order for the mesh or group to be displayed. Multiple instances of the same mesh or group can also be created.

Further operations such as point selection, face deletion, line sweeps, subdivision, screen panning and rotation, etc.) can then be performed once the scene is loaded.

The project must be compiled using CMake, with compilation instructions found [here](../compiling/mac). To use the compiled application, open the program and load in a `.NOM` file. The scene in the `.NOM` file will be rendered into the crystal-ball interface, which can then be interacted with.

Generators and more-complex shapes (ex. sweeps, combinations of generators, etc.) must be defined and instantiated on the `.NOM` file prior to rendering in the application, but once a scene is rendered then faces/vertices can be deleted, objects can be subdivided, the time variable can be used to pan the screen, etc.

## JIPCAD Language Example
An example of the interplay between meshes, groups, and instances can be seen here:
```markdown
## JIPCAD Example (scaled open cube)

## 2022/09/03
#################################################################################

surface R color (1 0 0) endsurface     # Red
surface O color (0.9 0.6 0) endsurface # Orange
surface Y color (1 1 0) endsurface     # Yellow
surface L color (0.6 0.8 0) endsurface # Lime
surface G color (0 0.9 0) endsurface   # Green
surface A color (0 0.9 0.7) endsurface # Aqua
surface C color (0 1 1) endsurface     # Cyan
surface U color (0 0.5 1) endsurface   # Uniform
surface B color (0 0 1) endsurface     # Blue
surface P color (0.6 0 1) endsurface   # Purple
surface M color (1 0 1) endsurface     # Magenta
surface Z color (1 0 0.5) endsurface   # Zinnober

###################################################

bank par
  set xscale   0.3  0.1  0.6  0.02
  set yscale   0.3  0.1  0.6  0.02
  list ( xscale yscale )
endbank

point p1 ( 1  1  1) endpoint
point p2 (-1  1  1) endpoint
point p3 (-1 -1  1) endpoint
point p4 ( 1 -1  1) endpoint

mesh quad
    face fz (p1 p2 p3 p4) endface
endmesh

group open_cube
    instance q0 quad  surface Y      endinstance
    instance q1 quad  surface O  rotate (1 0 0) ( 90) endinstance
    instance q2 quad  surface R  rotate (1 0 0) (180) endinstance
    instance q3 quad  surface M  rotate (1 0 0) (-90) endinstance
endgroup

## Instances at the "top" level will be rendered:
instance ioc1  open_cube  scale ( {expr $par.xscale} {expr $par.yscale} 0.3 )     endinstance
instance ioc2  open_cube  scale ( 0.4                {expr $par.yscale} 0.3 )  translate( 1 0 0 )   endinstance

######################   end   ######################
```

Further example files can be found [here](https://github.com/JIPCAD/JIPCAD/tree/master/ExampleFiles).
