---
sidebar_position: 2
---

# Numerical Parameters and Sliders

## **Bank** **(Status: Up-to-date)**

```
bank bankID  
 set setID1 value1 start1 end1 step_size1
 ...  
 set setIDN valueN startN endN step_sizeN
 list (slider_idlist)
endbank
```

Allows the user to change any numerical value in the NOME file through an interactive slider in the GUI.

* `setID`: the variable to be parameterized.
* `value`: the initial value of the slider.
* `start`: the lower bound of the slider.
* `end`: the upper bound of the slider.
* `step_size`: the incremental step size of the slider.
* `slider_idlist`: the list of sliders to be displayed.

## **Time-Varying Models**

```
$frame
$time 
```

* These are two global variables that can be used in any expression that evaluates a numerical value in NOME3.
* `$frame`: An integer value that gets incremented by +1 after every rendering of the scene. All expressions comprising frame get updated before the scene is rendered again.
*  `$time`: A real value that keeps track of elapsed time (in seconds). After a rendering, the system-clock is interrogated and compared to the remembered system clock value after the previous rendering. The time difference is then added to the $time variable, and all expressions comprising $time get updated before the scene is rendered again.
