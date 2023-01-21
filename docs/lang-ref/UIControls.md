---
sidebar_label: UI Controls
sidebar_position: 4
---

# UI Controls

UI controls are reset when JIPCAD is closed but remain constant across files if multiple are opened within the same JIPCAD window. <br />
Also note many UI controls are currently unstable and prone to crashing JIPCAD.

## Export as STL

Exports a standard STL file for 3D printing. May require Merging beforehand, which closes any small openings between shapes and changes the model from a hollow tube with an infinitely thin wall thickness to a solid object.
* Merging can crash with circular or spherical generators, as well as with general cartesian/implicit/parametric surfaces; the causes of these errors will be reported on the terminal.

## Render Config Options

* No Front Face turns off the "outside surfaces" of all generators, meaning whichever side of each shape in the scene is colored orange or by surface definitions. Turning off just Front Face will make all shapes appear black but will keep their structure.
* No Back Face will do the opposite, removing the black sides of all generators in the scene but keeping their structures and colors.

Turning off both Front and Back Face will cause all generators to disappear completely, as neither face is displayed.
* Wireframe will draw a cage around every shape; either a wireframe line will be drawn on each sharp edge of generators whose segments cannot be changed (e.g. rects) or, for generators where the segments can be defined (e.g. circles, sweeps), a wireframe line will be drawn around each segment of the generator.

Turning on Wireframe and No Front Face can produce quite interesting visual effects and can be helpful in understanding how generators work.

## Selection Config
Allows the user to select various parts of their model. Importantly, when selection options are turned on, Modify Selected and Add Face/Polyline are also enabled.
* Sharp vertex selection enables the same points as ordinary vertex selection, but the user can additionally define sharpness of the points they pick.
* Points selected will remain such until deselected; in essence, the default behavior is the same as ctrl + click.<br />
Choose either vertex or sharp vertex selection for a model; attempting to switch between them appears to consistently crash JIPCAD.

### Modify Selected
Allows deletion of faces in the mesh.

### Add Face, Polyline
* Add Face requires at least 3 points to selected and creates a face across the selection. Points do not need to be coplanar.
* Add Polyline necesitates at least 2 points selected and draws a piecewise line across the selection.

## Add Point Config

By enabling Add Point, the user can--while no selection options are in use--select spots on a generator and add them to the model.

## Commit Changes

No work done in the UI is saved until changes are committed with this button.