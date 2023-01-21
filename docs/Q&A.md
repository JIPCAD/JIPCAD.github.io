---
sidebar_position: 6
---
# Q&A
Here are some frequently encountered problems for beginners of JIPCAD.

## Downloading, Launching, Running NOME

### Does NOME have an interactive text editor?
Unfortunately, we do not have an text editor for the NOME Language. However, we do have a language extension for NOME on Visual Studio Code, which can be downloaded [here](https://marketplace.visualstudio.com/items?itemName=AaronZheng.nome)

Visual Studio Code itself can be downloaded [here](https://code.visualstudio.com/)

### How do I comment on my NOME files?

Use `#` for single-line comments and `(*` `*)` for multi-line.


### NOME crashes the first time I load any file!

This is a known bug of the current version of JIPCAD. This happens for most files regardless of if it is constructed correctly. The crash does not cause any file damage or additional issues and we plan to address this in an upcoming release.

### How does error reporting work?
Error reporting comes along with the NOME3 executable itself. The command line window pop-up from the NOME3 executable file will display the error reporting right before crash. 

## Generators
For any issues with generators, check the Language Reference first and then try the solutions below.

### My unspecified generator is crashing and I don't know why!

Check if its name is spelled correctly or uses special characters.
If the generator is named after an object, i.e. "rect", be sure the name is spelled correctly in its instance; this can occur often, as JIPCAD has no spelling correction feature. <br />
Numerals and some special characters (especially ()) in generator names will cause the program to crash.

### My B-spline is causing crashes!

B-splines can be quite finicky. Check if you have:

* at least one segment per point plus one (to close the loop),
* at absolute minimum 4 segments,
* and no points repeated more than three times in a row.

This can especially be an issue if a parameter is used to set the b-spline's segments; check that the initial value is greater than the minimum segments needed.

## Scene Rendering

## Adding Generators, Editing JIPCAD
Questions specific to editing the website itself should be directed to the editor's wiki for JIPCAD.github.io [here.](https://github.com/JIPCAD/JIPCAD.github.io/wiki)