---
sidebar_position: 3
---

# Parameters and Sliders

## **Bank** **(Status: Up-to-date)**

<details><summary>

```
bank bankID
 set setID1 init1 min1 max1 step_size1
 ...
 set setIDN initN minN maxN step_sizeN
 list (slider_idlist)
endbank
```

</summary>

Allows the user to change any numerical value in the `.NOM` file through an interactive slider in the GUI.

* `setID`: the variable to be parameterized.
* `init`: the initial value of the slider.
* `min`: the lower bound of the slider.
* `max`: the upper bound of the slider.
* `step_size`: the incremental step size of the slider.
* `slider_idlist`: the list of sliders to be displayed.

To use a user-defined parameter to define part of a generator, use this notation: {expr bankName.varName}. Ex: if a bank has been named `bank par` with one slider `set rad 10 3 100 1`, the slider could be used in a circle with `circle circ ({expr par.rad} 40)` to create a circle with a variable radius and 40 segments.  

</details>

## **Time-Varying Models**

<details><summary>

```
$frame
$time
```

</summary>


* These are two global variables that can be used in any expression that evaluates a numerical value in JIPCAD.
* `$frame`: An integer value that gets incremented by +1 after every rendering of the scene. All expressions that include  $frame are updated before the scene is rendered again. This means that $frame can be significantly faster or slower than $time based on the behavior of geometry included: a simple static cube may mean that variables affected by $frame never change, while a scene that includes variable forms such as sin functions may update $frame rapidly.
*  `$time`: A real value that keeps track of elapsed time (in seconds). After a rendering, the system-clock is interrogated and compared to the remembered system clock value after the previous rendering. The time difference is then added to the $time variable, and all expressions comprising $time get updated before the scene is rendered again.
Ex: `circle circ (10/$time 40)` will create a circle with 40 segments and a radius that begins at 10 and shrinks every second following the sequence 10/1...10/2...10/3...etc.

</details>
