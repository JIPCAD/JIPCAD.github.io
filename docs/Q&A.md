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
<details><summary> 

Use `#` for single-line comments and `(*` `*)` for multi-line.

</summary>

* Anything included behind the `#` will be commented out on a single line.
* Anything written beyond a `(*` will be commented out until a `*)` is included.

</details>

### NOME crashes the first time I load any file!
<details><summary> This is a known bug of the current version of JIPCAD.
</summary>
This happens for any file regardless of if it is constructed correctly. The crash does not cause any file damage or additional issues and we plan to address this in an upcoming release.
</details>

### How does error reporting work?
Error reporting comes along with the NOME3 executable itself. The command line window pop-up from the NOME3 executable file will display the error reporting right before crash. 

## Generators
For any issues with generators, check the Language Reference first and then try the solutions below.

### My unspecified generator is crashing and I don't know why!
<details><summary> Check if its name is spelled correctly or uses special characters.
</summary>
If the generator is named after an object, i.e. "rect", be sure the name is spelled correctly; this can occur often, as JIPCAD has no spelling correction feature. <br />
Numerals and some special characters (especially ()) will cause the program to crash.
</details>

### My B-spline is causing crashes!
<details><summary> B-splines can be quite finicky: check if you have at least a segment for each point plus one and no points are repeated more than three times in a row.
</summary>

* B-splines require minimum one segment for each point with one additional to close the loop, with a absolute minimum of 4 segments. This can especially be an issue if a parameter is used to set the b-spline's segments; check that the initial value is greater than the minimum segments needed.
* While a point can be repeated multiple times in a row to extend and/or smooth the B-spline, doing this more than three times in a row will cause a crash. Ex: `(p0 p1 p1 p1 p2 p2 p2)` will display but `(p0 p1 p1 p1 p1 p1)` will crash.

</details>

## Scene Rendering

## Adding Generators, Editing JIPCAD
Questions specific to editing the website itself should be directed to the editor's wiki for JIPCAD.github.io [here.](https://github.com/JIPCAD/JIPCAD.github.io/wiki)