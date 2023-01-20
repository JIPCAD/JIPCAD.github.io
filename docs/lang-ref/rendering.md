---
sidebar_position: 5
---

# Rendering Specifications
> Note: R, G, B values should be in the range 0.0 to 1.0

## Rendering (as in SLIDE): (Status: Not available.)
All instances to be displayed could be placed in a group “assembly.”
A render statement would then have an instance of “assembly” and also specify camera type, lights, and windows/viewports. Any number of render statements can be specified in a single file, but there must be at least one for anything to be displayed. This flexible matching of viewport, geometry root, and camera makes the render statement very general. Side-by-side viewports in a single window with slightly disparate views can be used to produce stereo viewing. A multiple window setup can provide different views on the same world. This, for example, could be used in the implementation of a driving simulator, with separate camera specifications and viewports corresponding to windshield, rear-view mirror and side-view mirror views.

## Camera (Status: Up-to-date)

<details><summary>

```
camera id
    projection [NOME_PERSPECTIVE] or [NOME_ORTHOGRAPHIC] or [NOME_FRUTUM]
    frustum [(left right bottom top nearPlane farPlane) for NOME_ORTHOGRAPHIC and NOME_FRUTUM; (fieldOfView aspectRatio nearPlane farPlane) for NOME_PERSPECTIVE
    ctranslate (tx ty tz)
    crotate (rx ry rz){in degrees}
endcamera
```

</summary>

* `NOME_PERSPECTIVE`, `NOME_ORTHOGRAPHIC`, `NOME_FRUTUM`: if present, specify the type of projection applied.
If none is supplied, the default is  `NOME_PERSPECTIVE`.

</details>

## Lights (Status: Up-to-date)

```
light id
    type [NOME_DIRECTIONAL] or [NOME_AMBIENT]
    color (R G B)
endlight
```

## Viewports

<details><summary>

```
Viewport id
    cameraID [camid]
    (left top width height)
endviewport
```

</summary>

Single or multiple viewport setting.

</details>

## Global Frontface Color

<details><summary>

```
frontcolor (R G B) endfrontcolor
```

</summary>

Set global frontface color, can't use slider to interactively change this.

</details>

## Local Frontface Color

<details><summary>

```
surface id (R G B) endsurface
```

</summary>

Defines a surface color by its RGB values in the range [0, 1].

</details>


## Global Backface Color

<details><summary>

```
backcolor (R G B) endbackcolor
```

</summary>

Set global backface color, can't use slider to interactively change this.

</details>

## Local Backface Color

<details><summary>

```
backface id color (R G B) endbackface
```

</summary>

Set the backface color for each individual backface.

</details>
