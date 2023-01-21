---
sidebar_position: 6
---

# Including Files

```nom
include [file_name.nom] endinclude
```

Allows a user to combine frequently used statements, such as specification of surface colors, in files that can then be included with a single-line command. <br />
* Include does not work recursively; no included files can include files.
* Including sliders is dicey; including a bank of useful sliders and referencing them in the outside file will cause a crash, but sliders used only for generators in the file in which they were defined sometimes works and sometimes do not.
* Included files cannot be in a different directory from the model file. <br />

Included code can be thought of as written into the parent file at the point of appearance. This means if multiple files are included, the second included file can reference the first, and so on. This is especially useful when the first included file defines a list of surfaces and additional included files reference these surface.

For a list of common include files, see [the next page.](/docs/common-include-files)