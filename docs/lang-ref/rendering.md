---
sidebar_position: 4
---

# Rendering Specifications
R, G, B should be set from 0-1;
## Camera (Status: Up-to-date)
```
camera id  
 Projection [NOME_PERSPECTIVE] or [NOME_ORTHOGRAPHIC] or [NOME_FRUTUM] 
 frustum [(left right bottom top nearPlane farPlane) for NOME_ORTHOGRAPHIC and NOME_FRUTUM; (fieldOfView aspectRatio nearPlane farPlane) for NOME_PERSPECTIVE
 ctranslate (tx ty tz)
 crotate (rx ry rz){in degrees}
endcamera
```

* “NOME_PERSPECTIVE” or “`NOME_ORTHOGRAPHIC`” or “`NOME_FRUTUM`”:  if present, specify the type of projection applied.
If none is supplied, the default is  `NOME_PERSPECTIVE`.

## Lights (Status: Up-to-date)
Scece Light Control
```
light id
    Type [NOME_DIRECTIONAL] or [NOME_AMBIENT]
    Color (R G B)
endlight
```

## Viewports 
Single or multiple viewports setting.
```
Viewport id
  cameraID [camid]
  (left top width height)
endviewport
```

## Global Frontface Color
Set global frontface color, can't use slider to interatively change this.
```
frontcolor (0.7   0.0 0.7  ) endfrontcolor
```

## Local Frontface Color
```
surface id (R G B) endsurface
```
Defines a surface color by its RGB values in the range [0, 1].


## Global Backface Color
Set global backface color, can't use slider to interatively change this.
```
backcolor (0   0.5 0.5  ) endbackcolor
```

## Local Backface Color 
Set the backface color for each individual backface. 
```
backface id color (R G B) endbackface   # Magenta
```

## **Rendering (as in SLIDE):** (Status: Not available.)
All instances to be displayed could be placed in a group “assembly.”
A render statement would then have an instance of “assembly” and also specify camera type, lights, and windows/viewports. Any number of render statements can be specified in a single file, but there must be at least one for anything to be displayed. This flexible matching of viewport, geometry root, and camera makes the render statement very general. Side-by-side viewports in a single window with slightly disparate views can be used to produce stereo viewing. A multiple window setup can provide different views on the same world. This, for example, could be used in the implementation of a driving simulator, with separate camera specifications and viewports corresponding to windshield, rear-view mirror and side-view mirror views.


