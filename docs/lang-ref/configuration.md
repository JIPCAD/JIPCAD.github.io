---
sidebar_position: 1
---

# Configuration

## **Include Files** (Status: Up-to-date, but doesnt use quotes)

```nom
include “file_name.nom” endinclude
```

Allows to combine frequently used statements, such as specification of surface colors or generally useful geometry, such as a triplet of coordinate axes, in special files that can then be included with a single-line command. Another example is: a collection of camera, light, and window/viewport specifications for the rendering process.

## **Surface** **(Status: Up-to-date)**

```
surface id (R G B) endsurface
```

Defines a surface color by its RGB values in the range [0, 1].

