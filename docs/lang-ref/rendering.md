---
sidebar_position: 5
---

# Rendering Specifications
> Note: R, G, B values should be in the range 0.0 to 1.0

## Camera (Status: Up-to-date)

<details><summary>

```
camera id
    projection [NOME_PERSPECTIVE] or [NOME_ORTHOGRAPHIC] or [NOME_FRUTUM]
    frustum [(left right bottom top nearPlane farPlane) for NOME_ORTHOGRAPHIC and NOME_FRUTUM; (fieldOfView aspectRatio nearPlane farPlane) for NOME_PERSPECTIVE]
    ctranslate (tx ty tz)
    crotate (rx ry rz){in degrees}
endcamera
```

</summary>

* `NOME_PERSPECTIVE`, `NOME_ORTHOGRAPHIC`, `NOME_FRUTUM`: if present, specify the type of projection applied.
If none is supplied, the default is  `NOME_PERSPECTIVE`.

</details>

## Lights (Status: Up-to-date)

<details><summary>

```
light id
    type [NOME_DIRECTIONAL] or [NOME_AMBIENT]
    color (R G B)
endlight
```

</summary>

Creates a light that can optionally be colored and a directed or ambient beam.

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
