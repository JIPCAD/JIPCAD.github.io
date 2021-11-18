---
sidebar_position: 5
---
# Geometric Manipulation

## Sweeps
A sweep describes the result of sweeping a crosssection along a path. 
```
sweep id  
  crosssection id [reverse] [begincap] [endcap]  endcrosssection
  path  id [mintorsion] [azimuth a_angle] [twist t_angle]  endpath
  [brep brep-type]
endsweep
```

* a crosssection - can be a polyline, circle, beziercurve, or bspline.
* “reverse”:  if present, flips the orientation of the crosssection, turning the generated brep-surface inside out.
* “begincap”:  if present, draw the starting face (with outward normal).
* “endcap”:  if present, draw the ending face (with outward normal
* a path - can be a polyline, circle, beziercurve, or bspline.
* Each path has a set of Frenet frames (tangents, normals, & binormals) that are used to determine how the crosssectiwill twist along the path. The user can control the twist in four ways and these options are additive in the order givbelow:
* 1) mintorsion - minimizes the twisting of the intrinsic Frenet frame.
* 2) azimuth - angle about the tangent that all Frenet frames will be rotated by.
* 3) twist - angle about the tangent that specifies the overall amount of twist from the first Frenet frame to the last.
* 4) warp - sets each twist angle explicitly at specified controlpoints in the path.
* These controlpoints also permit rotating and non-uniformly scaling of the crosssection at these locations.  Regular papoints act like control points with no additional transformations.  At any sample points between adjacent controlpointthe transformation variables are interpolated in the same way that the x, y, and z-coordinates are being interpolated g. by a cubic polynomial for the cubic Bspline
* brep_type - can be either TRIANGLES (=default) or QUADRILATERALS.


Scene Graph
Instance
instance name object [rotate (rx ry rz){in degrees} ] [scale (sx sy sz)]   [translate (tx ty tz)] [surface surface_id] [LOD LOD_type] [shading shading_type] endinstance
Creates an instance of geometry. One can optionally rotate, scale, translate the instance and specify its color, level-of-detail (LOD), and rendering mode.
* object: the name of the primitive, generator, or group that will be instantiated.
* surface_id: a specified (RGB) surface color.
* LOD_type: defined types: “NOME_OFF” {not rendered}; NOME_BOUND” {render only the bounding box of this subtree}; “NOME_EDGES” {render this subtree in wireframe mode};  “NOME_FULL” {fully render this subtree).
* shading_type: defined types: “NOME_INHERIT” {Shade this node in the same style as its parent};   “NOME_WIRE” {renderas a wireframe};  “NOME_FLAT” {render with flat shading: one color per polygon};  “NOME_GOURAUD” render with Gouraudshading: interpolate vertex colors across each polygon};   “NOME_PHONG” {render with Phong shading:  interpolate vertexnormals across each polygon and recompute lighting at each pixel}.


## Group
```
group id
   instance id1 object_id1 [instance_parameters] endinstance
   ...
   instance idN object_idN [instance_parameters] endinstance
endgroup
```

Defines a collection of instances of primitive objects or other groups. Groups are the most general construct to introduce hierarchy into a model description.
* id: the name of the instance.
* object_id: the name of the object to be instantiated.
* [instance_parameters]: all the optional parameters discussed above.


## Subdivision
```
subdivision id
        [sd_type sd_flag]
sd_level
instance id1 object_id1 [xform & color] endinstance
   ...
   instance idN object_idN [xform & color] endinstance
endsubdivision
```

Subdivides a merged mesh into smaller facets..
* sd_flag: the type of subdivision algorithm used.
* NOME_SD_CatmullClark:  the plain and simple CC subdivision
* NOME_SD_CC_sharp:  CC subdivision respecting “sharp” flags in the mesh.
* sd_level: the integer number of iterated subdivision steps.
* [xform & color]: the optional parameters relating to transformations and coloring.


## Offset
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

Offset thickens a surface mesh of zero thickness into a thicker B-rep that can be 3D-printed
* offset_flag: the type of thickened surface generated:
* NOME_OFFSET_DEFAULT: This offsets the starting mesh inward and outward symmetrically.  Each facet in the originalmesh maps to two facets in the offset mesh; one of them with reversed orientation.  Each boundary edge of an openpolyhedron will map to a quadrilateral facet.
* NOME_OFFSET_GRID: The edges of the starting mesh are viewed as thin wires which are then thickened into 4-sided prismsegments. This is different from “gridding” the original mesh, where the openings in each facet are a given fraction ofthe facet geometry.
* height: the half-thickness of the generated surface normal to the original facets.
* width:  the width of the prismatic beams in the tangential direction of each facet.
* [xform & color]:  the optional parameters relating to transformations and coloring.