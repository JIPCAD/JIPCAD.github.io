---
sidebar_position: 3
---

# Putting It All Together

This is an advanced tutorial which assumes you are familiar with most/all commands in JIPCAD and want to stretch your abilities with a challenging test model. To that end, most implementation details will be hidden; the visible section of the dropdown will give you a hint to get started, while revealing the bottom section will provide the germane code.

We will be making a bell whose clapper swings back and forth, causing lightning to strike outwards whenever it hits the bell's edge.

![bell-side](/img/bell-side.png)

![bell-lightning](/img/Bell-lightning.png)

As an added challenge, the code provided corresponds to the images above, where the yoke lies parallel to the arc of the clapper. In reality, the yoke should lie perpendicular to the clapper, allowing the bell to swing in response to the impact and cause noise. See if you can implement this for yourself.

## Yoke

<details>
<summary>
The yoke is three rectangles, one thinner rectangle lying horizontal and intersecting the two thicker, vertical rectangles towards their tops. The two vertical rectangles lie at the same elevation. The rectangles are colored with Orange, Zinc, and Brown from the Surfaces file in Common Include Files so that top and bottom are orange, front and back are brown, and left and right are zinc.

</summary>

```
##############YOKE###############

point sq1 (-1 1 0) endpoint
point sq2 (-1 -1 0) endpoint
point sq3 (1 -1 0) endpoint
point sq4 (1 1 0) endpoint

mesh cube
face side (sq1 sq2 sq3 sq4 sq1) endface
endmesh

group halfCube
instance sCube cube  rotate (1 0 0) (180) endinstance
instance lid cube translate (0 0 2) endinstance
instance leftSide cube rotate (1 0 0) (90) translate (0 -1 1) surface O endinstance
endgroup

group fullCube
instance sHalfCube halfCube rotate (1 0 1) (180) translate (-1 0 1) surface ZC endinstance
instance otherHalf halfCube surface BR endinstance
endgroup

group rotateYoke
instance topYoke fullCube scale(6 1 1/2) translate(0 1/2 -1/2) rotate(1 0 0) (-90) endinstance
instance leftYoke fullCube scale(1 3 1) translate (-4 -1 -1) rotate(1 0 0) (-90) endinstance
instance rightYoke fullCube scale(1 3 1) translate (4 -1 -1) rotate(1 0 0) (-90)  endinstance
endgroup

instance sRotateYoke rotateYoke rotate(0 0 1) (-90) endinstance
```

</details>

## Bell

<details>
<summary>

The top portion of the bell is an implicit paraboloid, the bottom curve is an implicit hyperboloid, the bottom ring is a torus, and the small cap at the top is a simple cylinder. They are all grey, and fit under the yoke so that a small portion of the bell intersects with all three inner faces of the yoke.

</summary>

```
############BELL##############

genimplicitsurf LibBell func [-(z^2)+((1.25x)^2)+((1.25y)^2)-20] (-10 10 -10 10 0 10  30 30 30) endgenimplicitsurf
instance sBellCup LibBell translate (0 0 3) surface GR endinstance

genimplicitsurf bellTop func [-z+((x/sqrt(4.25))^2)+((y/sqrt(4.25))^2)] (-10 10 -10 10 -3 3 30 30 30) endgenimplicitsurf
instance sBellTop bellTop surface GR endinstance

torus bellLip (8.57904423581 (8.94427191-8.57904423581)*2 360 0 360 30 30) endtorus
instance sBellLip bellLip translate (0 0 13 ) surface GR endinstance

cylinder topCapper (0.75 0.55 360 30 botcap topcap) endcylinder
instance sTopCapper topCapper surface GR endinstance
```

</details>

## Clapper

<details>
<summary>
The clapper is a cylinder with a ball on the end. At the clapper's top, it should connect with the bottom of the bell's cap, while the clapper's bottom should extend below the torus of the bell.

</summary>

```
##############STRIKING CYLINDER#########

cylinder clapperStalk (0.75 15 360 30 botcap topcap) endcylinder
instance sClapperStalk clapperStalk translate(0 0 0.5) rotate(? ? ?) (?) surface GR endinstance

sphere clapperEnd (1.25 360 -90 90 30 30) endsphere
instance sClapperEnd clapperEnd translate(0 0 15.5) rotate(? ? ?) (?) surface GR endinstance
```

</details>

## Clapper Movement

<details>
<summary>

The clapper should constantly swing along one axis--preferrably perpendicular to the yoke--along a pendulum arc, i.e. slow at the end of the swing, fast in the middle. The clapper should strike the bell at the apex of its swing but should not poke through any part of the bell.

</summary>

```
##############STRIKING CYLINDER#########

cylinder clapperStalk (0.75 15 360 30 botcap topcap) endcylinder
instance sClapperStalk clapperStalk translate(0 0 0.5) rotate(1 0 0) (27.5*cos($time)) surface GR endinstance

sphere clapperEnd (1.25 360 -90 90 30 30) endsphere
instance sClapperEnd clapperEnd translate(0 0 15.5) rotate(1 0 0) (27.5*cos($time)) surface GR endinstance
```

</details>

## Building Lightning

<details>
<summary>

We want two lightning bolts, one on either side of the bell at the position where clapper strikes the torus, pointing straight outwards. Lightning bolts should be thin at the tips and thin at the middle. Any construction or design will do; the code provided uses a Sweep Morph. Lightning bolts are yellow.

</summary>

```
#############LIGHTNING BOLTS############

point lb1 (5 0 0) endpoint
point lb2 (-5 0 0) endpoint
point lb3 (0 1 0) endpoint
point lb4 (0 -1 0) endpoint

circle circ (1 {expr par.boltSegs}) endcircle

controlpoint clb1  point lb1  scale (0.05 0.05 0.05) rotate (0 0 0) crosssection circ endcontrolpoint
controlpoint clb2 point lb2 scale(0.05 0.05 0.05) endcontrolpoint
controlpoint clb3 point lb3 scale(0.65 0.5 0.5) endcontrolpoint
controlpoint clb4 point lb4 scale(0.65 0.5 0.5)  endcontrolpoint

polyline lightning (clb2 clb4 clb3 clb1) endpolyline

sweepmorph lightningBolt 
    begincap endcap
    path  lightning mintorsion azimuth 0 twist 0  endpath
endsweepmorph

group oneLB
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(? ? ?) translate (0 -15 13) surface Y  endinstance
endgroup

group flippedLB
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(? ? ?) rotate(1 0 0) (180) translate (0 15 13) surface Y  endinstance
endgroup

#Negative Y (left-hand) bolt
instance lLB1 oneLB  endinstance

#Positive Y (right-hand) bolt
instance rLB1 flippedLB  endinstance
```

</details>

## Lightning Behavior

<details>
<summary>

We want the lightning bolt to very rapidly expand to full size when the clapper nears (and then strikes) the bell, and to shrink to an infintesimally small point when the clapper moves backwards. Hint: what kind of function mimics the movement of the clapper? The blog post on Striking Bell gives nearly the whole answer if you get stuck.

</summary>

```
group oneLB
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(cos(($time)/2)^128 cos(($time)/2)^128 1) translate (0 -15 13) surface Y  endinstance
endgroup

group flippedLB
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(sin(($time)/2)^128 sin(($time)/2)^128 1) rotate(1 0 0) (180) translate (0 15 13) surface Y  endinstance
endgroup
```

</details>

## Accoutrements

<details>
<summary>

Add a speed parameter which makes the clapper swing faster and similarly effects when the lightning bolts appear. Note this requires editing in several places.

</summary>

#1:

```
bank par
set speed 1 0 40 0.1
set boltSegs 4 3 100 1
list(speed)
endbank
```

#2:

```
instance sClapperStalk clapperStalk translate(0 0 0.5) rotate(1 0 0) (27.5*cos($time*{expr par.speed})) surface GR endinstance
```

#3:

```
instance sClapperEnd clapperEnd translate(0 0 15.5) rotate(1 0 0) (27.5*cos($time*{expr par.speed})) surface GR endinstance
```

#4:

```
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(cos(($time*{expr par.speed})/2)^128 cos(($time*{expr par.speed})/2)^128 1) translate (0 -15 13) surface Y  endinstance
```

#5:

```
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(sin(($time*{expr par.speed})/2)^128 sin(($time*{expr par.speed})/2)^128 1) rotate(1 0 0) (180) translate (0 15 13) surface Y  endinstance
```

</details>

Congratulations! Finishing this bell is no small task. The full code of the example is pasted in the dropdown below.

<details>
<summary>

Full code for Striking Bell.

</summary>

```
include z_inclSurfaces.nom endinclude

bank par
set speed 1 0 40 0.1
set boltSegs 4 3 100 1
list(speed)
endbank

##############YOKE###############

point sq1 (-1 1 0) endpoint
point sq2 (-1 -1 0) endpoint
point sq3 (1 -1 0) endpoint
point sq4 (1 1 0) endpoint

mesh cube
face side (sq1 sq2 sq3 sq4 sq1) endface
endmesh

group halfCube
instance sCube cube  rotate (1 0 0) (180) endinstance
instance lid cube translate (0 0 2) endinstance
instance leftSide cube rotate (1 0 0) (90) translate (0 -1 1) surface O endinstance
endgroup

group fullCube
instance sHalfCube halfCube rotate (1 0 1) (180) translate (-1 0 1) surface ZC endinstance
instance otherHalf halfCube surface BR endinstance
endgroup

group rotateYoke
instance topYoke fullCube scale(6 1 1/2) translate(0 1/2 -1/2) rotate(1 0 0) (-90) endinstance
instance leftYoke fullCube scale(1 3 1) translate (-4 -1 -1) rotate(1 0 0) (-90) endinstance
instance rightYoke fullCube scale(1 3 1) translate (4 -1 -1) rotate(1 0 0) (-90)  endinstance
endgroup

instance sRotateYoke rotateYoke rotate(0 0 1) (-90) endinstance

############BELL##############

genimplicitsurf LibBell func [-(z^2)+((1.25x)^2)+((1.25y)^2)-20] (-10 10 -10 10 0 10  30 30 30) endgenimplicitsurf
instance sBellCup LibBell translate (0 0 3) surface GR endinstance

genimplicitsurf bellTop func [-z+((x/sqrt(4.25))^2)+((y/sqrt(4.25))^2)] (-10 10 -10 10 -3 3 30 30 30) endgenimplicitsurf
instance sBellTop bellTop surface GR endinstance

torus bellLip (8.57904423581 (8.94427191-8.57904423581)*2 360 0 360 30 30) endtorus
instance sBellLip bellLip translate (0 0 13 ) surface GR endinstance

cylinder topCapper (0.75 0.55 360 30 botcap topcap) endcylinder
instance sTopCapper topCapper surface GR endinstance

##############STRIKING CYLINDER#########

cylinder clapperStalk (0.75 15 360 30 botcap topcap) endcylinder
instance sClapperStalk clapperStalk translate(0 0 0.5) rotate(1 0 0) (27.5*cos($time*{expr par.speed})) surface GR endinstance

sphere clapperEnd (1.25 360 -90 90 30 30) endsphere
instance sClapperEnd clapperEnd translate(0 0 15.5) rotate(1 0 0) (27.5*cos($time*{expr par.speed})) surface GR endinstance

#############LIGHTNING BOLTS############

point lb1 (5 0 0) endpoint
point lb2 (-5 0 0) endpoint
point lb3 (0 1 0) endpoint
point lb4 (0 -1 0) endpoint

circle circ (1 {expr par.boltSegs}) endcircle

controlpoint clb1  point lb1  scale (0.05 0.05 0.05) rotate (0 0 0) crosssection circ endcontrolpoint
controlpoint clb2 point lb2 scale(0.05 0.05 0.05) endcontrolpoint
controlpoint clb3 point lb3 scale(0.65 0.5 0.5) endcontrolpoint
controlpoint clb4 point lb4 scale(0.65 0.5 0.5)  endcontrolpoint

polyline lightning (clb2 clb4 clb3 clb1) endpolyline

sweepmorph lightningBolt 
    begincap endcap
    path  lightning mintorsion azimuth 0 twist 0  endpath
endsweepmorph

group oneLB
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(cos(($time*{expr par.speed})/2)^128 cos(($time*{expr par.speed})/2)^128 1) translate (0 -15 13) surface Y  endinstance
endgroup

group flippedLB
instance sLightningBolt lightningBolt rotate(0 0 1) (90) scale(sin(($time*{expr par.speed})/2)^128 sin(($time*{expr par.speed})/2)^128 1) rotate(1 0 0) (180) translate (0 15 13) surface Y  endinstance
endgroup

#Negative Y (left-hand) group 
instance lLB1 oneLB  endinstance

#Positive Y (right-hand) group 
instance rLB1 flippedLB  endinstance
```

</details>