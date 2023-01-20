---
sidebar_label: Generators
sidebar_position: 1
---

# Commands and  Generators
To troubleshoot generator issues, first look through the information here and then check the Q&A page. The below commands only build shapes; to display them in the scene, they must be instanced using the command under [Scene Graph & Geometric Manipulation](docs/lang-ref/manipulation). <br /> To see examples of properly-used generators, see the exemplars under [Exhibition](/blog) or the worked examples under [Tutorials](/docs/tutorial/user).

## B-Spline

<details>
<summary>

```
bspline id order {order} (point_idlist) segs {segs} endbspline
```

</summary>

Defines a B-spline.

* `{order}`: integer that sets the B-spline's DEGREE to be `{order}-1`.
* `point_idlist`: a list of points of the form `point1` `point2` ...
* `{segs}`: the number of segments into which the B-spline is sampled.
* The number of control points must be greater than or equal to `{order}`
* For closed curves, there must be at least `{order}-1` control points.

</details>

## Bezier Curve
<details>
<summary>

```
beziercurve id ( point_idlist ) segs {segs} endbeziercurve
```

</summary>

Defines a Bezier curve.

* `point_idlist`: a list of points of the form `point1` `point2` ...
* `{segs}`: the number of segments into which the Bezier curve is sampled.

</details>

## Circle
<details>
<summary>

```
circle id (radius segs) endcircle
```

</summary>

Defines a circle.

* `radius`: the radius.
* `segs`: the number of line segments.
`radius` and `segs` cannot be negative.

</details>

## Cone *(this command is not implemented)*
<details>
<summary>

```
cone id (radius height hgt_max theta_max theta_segs [botcap] [topcap] ) endcone
```

</summary>

Defines a (possibly truncated) cone.

* `radius`: the radius at the bottom.
* `height`: the height of a complete cone.
* `hgt_max`: the fraction of the height [0, 1] at which the cone is truncated.
* `theta_max`: the max theta angle (<= 360 degrees), resulting in a partial cone.
* `theta_segs`: the number of segments in the theta direction.
* `“botcap”`: if present, draw the bottom face (with downward normal).
* `“topcap”`: if present, draw the top face on a truncated cone.2

</details>

## Cylinder
<details>
<summary>

```
cylinder id (radius height theta_max theta_segs [botcap] [topcap] ) endcylinder
```

</summary>

Defines a (wedge of a) cylinder.

* `radius`: the radius at the bottom.
* `height`: the height of a complete cone.
* `theta_max`: the max theta angle (<= 360 degrees), resulting in a cylinder wedge.
* `theta_segs`: the number of segments in the theta direction.
* `“botcap”`: if present, draw the bottom face (with downward normal).
* `“topcap”`: if present, draw the top face on the cylinder.
* `Radius`, `height`, `theta_segs` cannot be negative.
* `Theta_max` must be between 0 ~ 360 degrees.

</details>

## Disk
<details>
<summary>

```
Disk id (radius theta_max theta_segs) enddisk
```

</summary>

Defines a (partial) disk.

* `radius`: the radius of the disk.
* `theta_max`: the max theta angle (<= 360 degrees), resulting in a wedge.
* `theta_segs`: the number of segments in the wedge perimeter.
* `radius`,` theta_segs` cannot be negative.
* `Theta_max` must be between 0 ~ 360 degrees.

</details>

## Dupin Cycle
<details>
<summary>

```
dupin id (a b c d u v crosssec) enddupin
```

</summary>

Defines a Dupin with specified number of cross sections
* `a`: Radius (x-y plane) of the donut sphere formed by the dupin
* `b`: Height (x-z plane) of the donut sphere formed by the dupin
* `c`: x to y radius of the donut sphere
* `d`: x to z radius of the donut sphere 
* `u`: x to y sphere angle 
* `v`: x to z sphere angle

</details>

## Ellipsoid
<details>
<summary>

```
ellipsoid id ( radius[o][p]_x radius_y  long_max  latt_min  latt_max  segs_long  segs_latt ) endellipsoid
```

</summary>

Defines a sphere more like a “globe” with its “rotation axis” along the z-axis.

* `radius[q][r]_x`:  the radius of the ellipsoid in the x direction
* `radius_y`:  the radius of the ellipsoid in the y direction
* `long_max`: {<= 360}: the max longitude at any latitude, resulting in a sliced “orange.” 
* `latt_min`: {>= -90}:   the min latitude, cutting off the South pole.
* `latt_max`: {<=  90}:   the max latitude, cutting off the North pole.
* `segs_long`:  {>= 3}:    the number of segments in the longitudinal direction.
* `segs_latt`:  {>= 2}:    the number of segments in the latitudinal direction.

</details>

## Face
<details>
<summary>

```
face id (point_idlist) [surface surface_id] endface
```

</summary>

Defines a face from a list of points. Front face uses counter-clockwise winding.

* `point_idlist`: a list of points of the form `point1` `point2` ...

A face cannot be included in an instance and displayed; it must be made into a mesh and the mesh displayed. Additionally, two faces cannot occupy the exact same space (i.e. same number of points with identical coordinates) but they may overlap.

</details>

## Mesh
<details>
<summary>

```
mesh id 
	point pointId1 id1 (x y z) endpoint 
	…
	point pointIdN (x y z) endpoint
	
	face faceId1 ( point_idlist1 ) [surface surface_id] endface 
	... 
	face faceIdN ( point_idlistN) [surface surface_id] endface
endmesh
```

</summary>

Creates a collection of faces, which can optionally be colored. Faces in a mesh can then be referred to in the rest of the program via a hierarchical name: id.faceId. Variable names must be unique within a mesh.

* `faceId`: the name of the face
* `point_idlist`: a list of points of the form `point1` `point2` ...
* `pointId`: the name of the point

Faces within a mesh cannot be rotated, translated, etc.: this is reserved for an instance of the mesh.
</details>

## Funnel
<details>
<summary>

```
funnel id (radius ratio height segs) endfunnel
```

</summary>

Defines a funnel, i.e. the mantle of a truncated cone.

* `radius`: the radius of the “bottom” ring.
* `ratio`: the ratio of the radii of the top ring and the bottom ring.
* `height`: the height of the truncated cone.
* `segs`: the number of segments around the equator.
* `radius`, `ratio`,` height`, `segs` cannot be negative.

</details>

## Tunnel
<details>
<summary>

```
tunnel id (radius ratio height segs) endtunnel
```

</summary>

Defines a tunnel made from two Funnels, glued bottom-to-bottom.

* `radius`: the radius of the “middle” ring.
* `ratio`: the ratio of the radii of the two outer rings and the middle ring.
* `height`: the heights of each of the truncated cones.
* `segs`: the number of segments around the equator.
* `radius`,` ratio`, `height`, `segs` cannot be negative.

</details>

## General Cartesian Surface
<details>
<summary>

```
gencartesiansurf id func func_string (x_min x_max y_min y_max x_segs y_segs) endgencartesiansurf
```

</summary>

Defines a general surface based on a cartesian equation z = f(x,y) evaluated over specified axis bounds and number of segments.

* `x_min`: Lower bound of range in x-plane
* `x_max`: Upper bound of range in x-plane
* `y_min`: Lower bound of range in y-plane
* `y_max`: Upper bound of range in y-plane
* `x_segs`: Number of segments in x dimension.
* `y_segs`: Number of segments in y dimension.
* `func`: Keyword `func` is necessary to tell parser to parse `func_string`.
* `func_string`: Supplied function of form z = f(x,y). See necessary formatting below.

Passed in `func_string` formatting:

* Surrounded by open and close brackets and without spaces
* Many operations are included, for example:
	* Basic operators are supported: +, -, \*, /, %, ^
	* Mathematical functions are supported: avg(), max(), abs(), exp(), log(), sin(), cosh(), etc.
	* If and nested-if statements are also supported and take the form z = f(x,y) = if(condition,true_expression,false_expression)
	* See https://github.com/ArashPartow/exprtk readme.txt Section 01 and Section 08 for more information on what operations/functions/etc. are supported
* See https://github.com/randyfan/NOME3/blob/master/ExampleNOMEFiles/genCartesianSurfExample.nom for example usage

</details>

## General Implicit Surface
<details>
<summary>

```
genimplicitsurf id func func_string (x_min x_max y_min y_max z_min z_max x_segs y_segs z_segs) endgenimplicitsurf
```

</summary>

Defines a general surface based on an implicit equation f(x,y,z) = b, where b is a given isolevel. It is evaluated over the specified axis bounds and number of segments.
* `x_min`: Lower bound of range in x-plane
* `x_max`: Upper bound of range in x-plane
* `y_min`: Lower bound of range in y-plane
* `y_max`: Upper bound of range in y-plane
* `z_min`: Lower bound of range in z-plane
* `z_max`: Upper bound of range in z-plane
* `x_segs`: Number of segments in x dimension
* `y_segs`: Number of segments in y dimension
* `z_segs`: Number of segments in z dimension
* `func`: Keyword `func` is necessary to tell parser to parse `func_string`.
* `func_string`: Supplied function of form f(x,y,z) - b, where b is the isolevel (`func_string` is assuming user has modified input expression so that f(x,y,z) = b is rewritten as f(x,y,z) - b = 0, with “= 0” omitted from `func_string`). See necessary formatting below.

Passed in `func_string` formatting:
* Surrounded by opened and closed brackets and without spaces
* Many operations are included, for example:
	* Basic operators are supported: +, -, \*, /, %, ^
	* Mathematical functions are supported: avg(), max(), abs(), exp(), log(), sin(), cosh(), etc.
	* If and nested-if statements are also supported and take the form z = f(x,y) = if(condition,true_expression,false_expression)
	* See https://github.com/ArashPartow/exprtk readme.txt Section 01 and Section 08 for more information on what operations/functions/etc. are supported
* See https://github.com/randyfan/NOME3/blob/master/ExampleNOMEFiles/genImplicitSurfExample.nom for example usage

</details>

## General Parametric Surface
<details>
<summary>

```
genparametricsurf id funcX funcX_string_x funcY funcY_string funcZ funcZ_string (u_min u_max v_min v_max u_segs v_segs) endgenparametricsurf
```

</summary>

Defines a general surface based on parametric equations x(u,v), y(u,v), and z(u,v) evaluated over specified axis bounds and number of segments in u and v.

* `u_min`: Lower bound of range in u-plane
* `u_max`: Upper bound of range in u-plane
* `v_min`: Lower bound of range in v-plane
* `v_max`: Upper bound of range in v-plane
* `u_segs`: Number of segments in u dimension
* `v_segs`: Number of segments in v dimension
* `funcX`: Keyword `funcX` is necessary to tell parser to parse `funcX_string`.
* `funcY`: Keyword `funcY` is necessary to tell parser to parse `funcY_string`.
* `funcZ`: Keyword `funcZ` is necessary to tell parser to parse `funcZ_string`.
* `funcX_string`: Function x(u,v). See necessary formatting below.
* `funcY_string`: Function y(u,v). See necessary formatting below.
* `funcZ_string`: Function z(u,v). See necessary formatting below.

Passed in `funcX_string`, `funcY_string`, and `funcZ_string` formatting:

* Surrounded by opened and closed brackets and without spaces
* `funcX_string`, `funcY_string`, and `funcZ_string` take the form x(u,v), y(u,v), and z(u,v) respectively, where x, y, and z are each defined by a parametric function dependant on variables u and v.
* Many operations are included, for example:
	* Basic operators are supported: +, -, \*, /, %, ^
	* Mathematical functions are supported: avg(), max(), abs(), exp(), log(), sin(), cosh(), etc.
	* If and nested-if statements are also supported and take the form z = f(x,y) = if(condition,true_expression,false_expression)
	* See https://github.com/ArashPartow/exprtk readme.txt Section 01 and Section 08 for more information on what operations/functions/etc. are supported
* See https://github.com/randyfan/NOME3/blob/master/ExampleNOMEFiles/genParametricSurfExample.nom  for example usage

</details>

## Mobius Strip  *(Status: current implementation does not use thickness. uses radius, twists, cuts, and segs)*
<details>
<summary>

```
mobiusstrip id (radius twists cuts segs) endmobiusstrip
```

</summary>

Defines a mobius strip with a specified number of twists and cuts.

* radius: the width of the band. If there are multiple cuts, then radius = width of all sub-bands + width of all gaps between sub-bands.
* twists: the number of twists in the mobius strip.
* cuts: the number of cuts in the mobius strip band (cuts go parallel to the edges of the band). Gaps and sub-bands will all be of the same width. Sum of widths = radius.
* segs: the number of segments around the band.

> should we also allow: `[brep brep-type]` -- as in sweeps, etc

</details>

## Point
<details>
<summary>

```
point id (x y z) endpoint
```

</summary>

Defines a point at the specified x, y, and z coordinates.

</details>

## Controlpoint
<details>
<summary>

```
controlpoint id  point p_id  [scale (sx sy sz)] [rotate (rx ry rz)] [crosssection crosssection_id] [reverse] endcontrolpoint
```

</summary>

Enhances a point (`p_id`) with additional parameters controlling the non-uniform scaling (`sx`, `sy`) and rotation (`rz`) and tilting (`rx`, `ry`) of the cross section swept along a path. (See **Sweep**)

* `(sx sy sz)`: scales the cross-section located at the controlpoint by a factor of `sx` and `sy`. (Note: `sz` is irrelevant)
* `(rx ry rz)`: 
	* `rz`: angle about which the cross section located at the controlpoint is rotated
	* `rx`, `ry`: angles about which the cross section located at the controlpoint is tilted
* `crosssection_id`: the cross section to be defined at this controlpoint 
* `"reverse"`: reverses the sweep at the controlpoint

**Note:** Interpolation rules for scaling and rotation of cross sections are determined by the path type's interpolation rules. See **Sweep** `warp`.  
**Note:** the `crosssection` parameter should be used in a path for the **Sweep Morph** generator.

</details>

## Polyline 
<details>
<summary>

```
polyline id ( point_idlist ) [closed] [surface surface_id] endpolyline
```

</summary>

Defines a polyline, a chain of piecewise linear segments. You can optionally make it closed, i.e., the last point connects back to the first.

* `point_idlist`: a list of points of the form `point1` `point2` ...

</details>

## Sphere
<details>
<summary>

```
sphere id (radius theta_max phi_min phi_max theta_segs phi_segs) endsphere
```

</summary>

Defines a sphere.

* `radius`: the radius of the sphere.
* `theta_max`: the max theta of any latitude, resulting in a sliced sphere.
* `phi_min`: min phi that determines cutoff at the SOUTH pole of the sphere (phi=-90)
* `phi_max`: max phi that determined cutoff at the NORTH pole of the sphere (phi=90)
* `theta_segs`: the number of segments in the longitudinal direction.
* `phi_segs`: the number of segments in the latitudinal direction.
* ` -90 <= phi_min < phi_max <= 90 (degrees).` 
* `radius, theta_segs, phi_segs > 0`
* `0 <= theta_max <= 360`

</details>

## newSphere *(this command is not implemented)*
<details>
<summary>

```
sphere 
	id ( radius  long_max  latt_min  latt_max  segs_long  segs_latt  [brep  brep-type] ) 
endsphere 
```

</summary>

Defines a sphere more like a “globe” with its “rotation axis” along the z-axis.

* `radius`:  the radius of the sphere  {put most important geometrical parameters first}.
* `long_max[e][f]: {<= 360}`: the max longitude at any latitude, resulting in a sliced “orange.” 
* `latt_min[g][h]: {>= -90}`:   the min latitude, cutting off the South pole.
* `latt_max[i][j]: {<=  90}`:   the max latitude, cutting off theNorth pole.
* `segs_long[k][l]:  {>= 3}`:    the number of segments in the longitudinal direction.
* `segs_latt[m][n]:  {>= 2}`:    the number of segments in the latitudinal direction.
* `[brep  brep-type]`:   specify  NOME_TRIAS  or  NOME_QUADS  as in sweeps, etc.

</details>

## Sweep
<details>
<summary>

A sweep describes the result of sweeping a `crosssection` along a `path`. 
```
sweep id  
  crosssection  id [reverse] [begincap] [endcap]  endcrosssection
  path  id [mintorsion] [azimuth a_angle] [twist t_angle] [cutbegin] [cutend]  endpath
  [brep brep-type]
endsweep
```

</summary>

**crosssection** - can be a polyline, circle, beziercurve, or bspline.
* `“reverse”`:  if present, flips the orientation of the crosssection, turning the generated brep-surface inside out.
* `“begincap”`:  if present, draw the starting face (with outward normal).
* `“endcap”`:  if present, draw the ending face (with outward normal)
Begincap and endcap are helpful in prepare the model for 3d printing, as instead of a hollow tube the sweep is now a cylinder closed at each segment on the bspline.

**path** - can be a polyline, circle, beziercurve, or bspline.
* Each path has a set of Frenet frames (tangents, normals, & binormals) that are used to determine how the crosssection will twist along the path. The user can control the twist in four ways and these options are additive in the order given below:
	* `mintorsion`: minimizes the twisting of the intrinsic Frenet frame.
	* `azimuth`: angle=`a_angle` about the tangent that all Frenet frames will be rotated by.
	* `twist`: angle=`t_angle` about the tangent that specifies the overall amount of twist from the first Frenet frame to the last.
	* `warp`: sets each twist angle explicitly at specified controlpoints in the path. (See **Controlpoint**)
		* These controlpoints also permit rotating and non-uniformly scaling of the crosssection at these locations.  Regular points act like control points with no additional transformations.  At any sample points between adjacent controlpoint, the transformation variables are interpolated in the same way that the x, y, and z-coordinates are being interpolated. (e.g. by a cubic polynomial for the cubic Bspline)
* `cutbegin`: if present, does not draw the first segment of the sweep
* `cutend`: if present, does not draw the last segment of the sweep

`brep_type`: can be either TRIANGLES (=default) or QUADRILATERALS.

In order to see the sweep's color, define the sweep path counterclockwise. If the path is defined clockwise the outside color of the shape will be displayed on the its inside due to the orientation flipping.

</details>

## Sweep Morph
<details>
<summary>

```
sweepmorph id 
    [begincap] [endcap]
    path  id [mintorsion] [azimuth a_angle] [twist t_angle] [cutbegin] [cutend]  endpath
endsweepmorph
```

</summary>

Linearly interpolates between cross sections that are specified at [control points](#controlpoint).

* See [**Sweep**](#sweep) for information on the flags.
* If a `crosssection` is defined at only one control point, the result will be a generic Sweep with that `crosssection`.
* Linear interpolations of cross sections are performed between subsequent control points where cross sections are specified.
* Points without `crosssection` specifications and are...
    * before the first control point with a specified `crosssection` will adopt this first `crosssection`.
    * after the last control point with a specified `crosssection` will adopt this last `crosssection`.
   
</details>

## Sweep Morph Visualizer
<details>
<summary>

```
morphvisualizer id 
    sweep sweep_id
    index (seg_index)
endmorphvisualizer
```

</summary>

Displays the cross section of a Sweep at index `seg_index`.

* `sweep_id`: the sweep.
* `seg_index`: the index of the cross section to display.

**Note**: `sweep_id` need not be a Sweep Morph. The visualizer works for any sweep and will display cross sections with scales and cross section morphs applied. Rotations, twists, and azimuth changes in a sweep are *not* reflected in the morph visualizer.

</details>

## Torus
<details>
<summary>

```
torus id (rad_maj rad_min theta_max  phi_min  phi_max  segs_theta  segs_phi) endtorus
```

</summary>

Defines a torus.

* `rad_maj`: the major radius
* `rad_min`: the minor radius of the outer ring.
* `theta_max`: specified in degrees. The minor cross-section circle is swept starting at the x-axis and circles the z-axis by the angle theta until thetamax is reached (=< 360).
* `phi_min`: starting angle in degrees around the minor circle. 
* `phi_max`: terminating angle in degrees around the minor circle.
* `0 <= phi_min < phi_max <= 360` (degrees).
* `segs_theta`: the number of segments along the major radius.
* `segs_phi`: the number of segments around the minor radius.

> should we also allow:` [brep brep-type] `-- as in sweeps, etc

</details>

## Torus Knot
<details>
<summary>

```
torusknot id (symm turns rad_maj rad_min rad_tube segs_circ segs_sweep) endtorusknot
```

</summary>

Defines a torus knot.

* `symm`: sweeps through the donut hole = rotational symmetry of knot (+/- OK)
* `turns`: turns around the donut hole (+/- to reverse chirality.
* `rad_maj`: the major radius of the donut.
* `rad_min`: the minor donut radius (tube radius).
* `rad_tube`: radius of swept circle.  For rad_tube := 0, only the sweep path is output.
* `segs_circ`: the number of segments on the circular cross section.
* `segs_sweep`: the number of segments along the sweep path.

It can be helpful to use the wireframe viewing option when attempting to visualize torus knots: this is found under Render Config in the UI (more info on the UI in [UI Controls page](/docs/lang-ref/UIControls)).

> should we also allow: `[brep brep-type]` -- as in sweeps, etc

</details>
