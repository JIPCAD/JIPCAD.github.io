---
sidebar_position: 5
---

# Rendering Specifications
> Note: R, G, B values should be in the range 0.0 to 1.0

## Camera (Status: Up-to-date)

<details><summary>

```
camera id
    projection [PERSPECTIVE] or [PARALLEL]
    frustum [({left} {right} {bottom} {top} {nearPlane} {farPlane}) for PARALLEL; ({fieldOfView} {aspectRatio} {nearPlane} {farPlane} 0 0) for PERSPECTIVE]
endcamera
```

</summary>

* `{fieldOfView}`: extent of the observable world that is seen, defined by an angle (0&deg; ~ 360&deg;).
* `{aspectRatio}`: ratio of the width and height of the viewport. 
* `{left}`: Defines the left X axis of the Nearplane and Farplane.
* `{right}`: Defines the Right X axis of the Nearplane and Farplane.
* `{bottom}`: Defines the Bottom Y axis of the Nearplane and Farplane.
* `{top}`: Defines the Top Y axis of the Nearplane and Farplane.
* `{nearPlane}`: Defines the Z axis of the Nearplane.
* `{farPlane}`: Defines the Z axis of the Farplane.

The default Camera is: `PERSPECTIVE`, with 45&deg; `FOV`, 1280x720 `Aspect Ratio`, 0.1 `nearPlane`, and 1000 `farPlane`.

</details>

## Lights (Status: Up-to-date)

<details><summary>

```
light id
    type [DIRECTIONAL] or [AMBIENT]
    color (R G B)
    direction (X Y Z) FOR DIRECTIONAL
endlight
```

</summary>

Creates a light that can optionally be colored and a directed or ambient beam.
For Directional lighting, you can specify the vector direction the light is pointing to.

</details>

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

## Background Color
<details><summary>

```
backgroundcolor (R G B) endbackground
```

</summary>
Sets background color of scene. 
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
