---
sidebar_position: 2
---
# Scene & Group Manipulation

As with generators, look at the exemplars under [Exhibition](/blog) or the worked examples under [Tutorials](/docs/tutorial/user) to see these commands used correctly.
## Instance

<details><summary>

```
instance name object
    [rotate (rx ry rz)(degrees)] [scale (sx sy sz)] [translate (tx ty tz)]
    [surface surface_id] [LOD LOD_type] [shading shading_type]
endinstance
```

</summary>

Creates an instance of geometry. One can optionally rotate, scale, translate the instance and specify its color, level-of-detail (LOD), and rendering mode.
* `object`: the name of the primitive, generator, or group that will be instantiated. Note that only upscaling is supported, i.e. each argument must be greater than or equal to 1.
* `rotate`: draws a vector from the origin to the point specified in `(rx ry rz)` and rotates over that axis `(degrees)`.
* `scale`: scales the shape in each included axis by the multiplier given. Ex: scale (1 3 0) will retain the x-axis size, multiply the y-axis size by 3 times, and flattens the z-axis completely.
* `translate`: moves shape along the coordinate axes by the given number of units.
An instance can be translated, rotated, etc. multiple times within the same line: JIPCAD will execute these commands in order of appearance.
* `surface_id`: a specified (RGB) surface color. When multiple surface colors are given for a generator--such as a sphere within a nested groups--JIPCAD will use the first ("deepest") color defined.
* `LOD_type`: defined types:
  *  `NOME_OFF` {not rendered}
  *  `NOME_BOUND` {render only the bounding box of this subtree}
  *  `NOME_EDGES` {render this subtree in wireframe mode}
  *  `NOME_FULL` {fully render this subtree}
* `shading_type`: defined types:
  * `NOME_INHERIT` {Shade this node in the same style as its parent}
  * `NOME_WIRE` {render as a wireframe}
  * `NOME_FLAT` {render with flat shading: one color per polygon}
  * `NOME_GOURAUD` {render with Gouraud shading: interpolate vertex colors across each polygon}
  * `NOME_PHONG` {render with Phong shading:  interpolate vertexnormals across each polygon and recompute lighting at each pixel}

</details>

## Group

<details><summary>

```
group id
    instance id1 object_id1 [instance_parameters] endinstance
    ...
    instance idN object_idN [instance_parameters] endinstance
endgroup
```

</summary>

Defines a collection of instances of primitive objects or other groups. Groups are the most general construct to introduce hierarchy into a model description.
* `id`: the name of the instance.
* `object_id`: the name of the object to be instantiated.
* `[instance_parameters]`: all the optional parameters discussed above.

Note that creating a group does not display the objects instanced inside of it. Another instance statement must be added for the _group_ in order to include it in the scene.

</details>


## Subdivision

<details><summary>

```
subdivision id
    [sd_type sd_flag]
    sd_level
    instance id1 object_id1 [xform & color] endinstance
    ...
    instance idN object_idN [xform & color] endinstance
endsubdivision
```

</summary>

Subdivides a merged mesh into smaller facets. (Alternatively, can perform subdivision in the GUI: `Edit >> Subdivide`.)
* `sd_flag`: the type of subdivision algorithm used.
* `NOME_SD_CatmullClark`:  the plain and simple CC subdivision
* `NOME_SD_CC_sharp`:  CC subdivision respecting “sharp” flags in the mesh.
* `sd_level`: the integer number of iterated subdivision steps.
* `[xform & color]`: the optional parameters relating to transformations and coloring.

</details>


## Offset

<details><summary>

```
offset id
    [offset_type offset_flag]
    height
    width
    instance id1 object_id1 [xform & color] endinstance
    ...
    instance idN object_idN [xform & color] endinstance
endoffset
```

</summary>

Thickens a surface mesh of zero thickness into a thicker B-rep that can be 3D-printed.
* `offset_flag`: the type of thickened surface generated:
  * `NOME_OFFSET_DEFAULT`: This offsets the starting mesh inward and outward symmetrically.  Each facet in the originalmesh maps to two facets in the offset mesh; one of them with reversed orientation.  Each boundary edge of an openpolyhedron will map to a quadrilateral facet.
  * `NOME_OFFSET_GRID`: The edges of the starting mesh are viewed as thin wires which are then thickened into 4-sided prismsegments. This is different from “gridding” the original mesh, where the openings in each facet are a given fraction of the facet geometry.
* `height`: the half-thickness of the generated surface normal to the original facets.
* `width`:  the width of the prismatic beams in the tangential direction of each facet.
* `[xform & color]`:  the optional parameters relating to transformations and coloring.

</details>
