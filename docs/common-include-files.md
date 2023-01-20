---
sidebar_position: 5
---

# Common Include Files

Here's some files you might find useful to frequently include in your JIPCAD projects. Feel free to add your own! At the moment, they are included as walls of text which can be copied into a .nom file to produce the detailed result.

### Surfaces

<details>
<summary>
Includes a list of surfaces you can use to color your generators.
</summary>

```
######## Some Surface colors #############################
surface M  color  (0.9 0.1 1  ) endsurface   # Magenta
surface Z  color  (1   0   0.6) endsurface   # Zinnober
surface R  color  (0.9 0.1 0  ) endsurface   # Red
surface O  color  (1   0.6 0  ) endsurface   # Orange
surface Y  color  (0.8 0.8 0  ) endsurface   # Yellow
surface L  color  (0.5 0.8 0  ) endsurface   # Lime
surface G  color  (0.1 0.8 0  ) endsurface   # Green
surface A  color  (0   0.9 0.6) endsurface   # Aqua
surface C  color  (0   0.8 0.9) endsurface   # Cyan
surface U  color  (0   0.6 1  ) endsurface   # Uniform
surface B  color  (0   0.3 1  ) endsurface   # Blue
surface V  color  (0.5 0.1 1  ) endsurface   # Violet
surface P  color  (0.7 0   0.9) endsurface   # Purple
surface LR color (240/255 128/255 128/255) endsurface #Light Red
surface BR color (139/255 69/255 19/255) endsurface #Brown
surface GR color (105/255 105/255 105/255) endsurface #Gray
surface CPR color (184/255 134/255 11/255) endsurface #Copper
surface ZC color (218/255 165/255 32/255) endsurface #Zinc
surface LG color (204/255 255/255 204/255) endsurface #Light Green

surface W  color  (1   1   1  ) endsurface   # White
surface D  color  (0.7 0.7 0.7) endsurface   # Dark
surface K  color  (0   0   0  ) endsurface   # blacK

```

</details>

### Coordinate Axes

<details>
<summary>
A set of three coordinate axes from -10 to 10 units. <br/>
Lengths can be adjusted by editing the endpoints of the lines.  <br/>
For colors to load in properly, the above file must be included before this one. <br/>
</summary>


```
############ Coordinate Axes ####

#X-axis:
point xaa (-10 0 0) endpoint
point xaO (0 0 0) endpoint
point xab (10 0 0) endpoint
polyline xaxisPos (xaO xab) endpolyline
polyline xaxisNeg (xaa xaO) endpolyline

#Y-axis:
point yaa (0 -10 0) endpoint
point yaO (0 0 0) endpoint
point yab (0 10 0) endpoint
polyline yaxisPos (yaO yab) endpolyline
polyline yaxisNeg (yaa yaO) endpolyline

#Z-axis:
point zaa (0 0 -10) endpoint
point zaO (0 0 0) endpoint
point zab (0 0 10) endpoint
polyline zaxisPos (zaO zab) endpolyline
polyline zaxisNeg (zaa zaO) endpolyline

group coord_axes
instance showxaxisPoz xaxisPos surface R endinstance
instance showxaxisNeg xaxisNeg surface LR endinstance
instance showyaxisPoz yaxisPos surface B endinstance
instance showyaxisNeg yaxisNeg surface C endinstance
instance showzaxisPoz zaxisPos surface G endinstance
instance showzaxisNeg zaxisNeg surface LG endinstance
endgroup

instance icoord coord_axes endinstance
```

</details>