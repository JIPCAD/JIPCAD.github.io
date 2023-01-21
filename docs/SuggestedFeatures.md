---
sidebar_label: Suggested Features & Known Bugs
sidebar_position: 7
---

# Known Bugs:

These errors have been noticed by JIPCAD's development team and plans are underway to address them. Start by reading the known bugs before posting a suggested feature to see if your idea has already been discovered.

#### Loading any file for the first time after creation or an update crashes NOME.

#### Reloading a scene causes files to load in with default colors.

#### Upon reloading a scene, past values of parameters are successfully saved, but they can be changed and will affect the current scene.

#### Attempting to switch between vertex and sharp vertex selection in the UI consistently crashes JIPCAD.

# Suggested Features:

Please submit suggested features in the following format:

Line 1:         Suggested Feature  
Line 2:         &ensp;&ensp;- Current situation  
Line 3:         &ensp;&ensp;- Why feature should be added  
(Line 4):       &ensp;- Any additional notes  



#### Allow values to be typed into sliders:
* Values can be typed in but do not affect actual modeling environment
* Would allow for ease in finding precise values on a slider, for example finding 4427 on a slider from 1-9000 step size 1.
* Typed value could round to the nearest step size to avoid errors.

#### Use ctrl + R to reload a document:
* Other commands, like opening a document, use ctrl functionality but reload does not.
* Allows modelers to easily see the effect of their new code without closing and reopening file.

#### Add a greater number of operators to JIPAD:
* floor division(//), modulo(%), and absolute value(| |) do not work within JIPCAD.
* Increased flexibility when defining points, shapes, or time-varying behavior.

#### Add coordinate axes 
* 3-dimensional navigation tools must be coded and included by the user.
* Improves ease of access to a very helpful tool.
* An on/off toggle would be nice, also some kind of way to find the coordinates of a shape or point in space.

#### Allow `[brep brep-type]` for mobius strips as in sweeps.

#### Allow `[brep brep-type]` for torus knots as in sweeps.

#### Include Rendering (as in SLIDE):
* All instances to be displayed could be placed in a group “assembly.”
* A render statement would then have an instance of “assembly” and also specify camera type, lights, and windows/viewports. Any number of render statements can be specified in a single file, but there must be at least one for anything to be displayed. This flexible matching of viewport, geometry root, and camera makes the render statement very general. Side-by-side viewports in a single window with slightly disparate views can be used to produce stereo viewing. A multiple window setup can provide different views on the same world. This, for example, could be used in the implementation of a driving simulator, with separate camera specifications and viewports corresponding to windshield, rear-view mirror and side-view mirror views.

#### Allow changing background color in UI and NOME language.

#### Allow render option for parallel projection.