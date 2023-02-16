"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[1574],{3905:function(A,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function n(A,e,a){return e in A?Object.defineProperty(A,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):A[e]=a,A}function o(A,e){var a=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),a.push.apply(a,t)}return a}function r(A){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(A,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(a,e))}))}return A}function l(A,e){if(null==A)return{};var a,t,n=function(A,e){if(null==A)return{};var a,t,n={},o=Object.keys(A);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(n[a]=A[a]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(A,a)&&(n[a]=A[a])}return n}var i=t.createContext({}),s=function(A){var e=t.useContext(i),a=e;return A&&(a="function"==typeof A?A(e):r(r({},e),A)),a},p=function(A){var e=s(A.components);return t.createElement(i.Provider,{value:e},A.children)},h={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(A,e){var a=A.components,n=A.mdxType,o=A.originalType,i=A.parentName,p=l(A,["components","mdxType","originalType","parentName"]),c=s(a),m=n,E=c["".concat(i,".").concat(m)]||c[m]||h[m]||o;return a?t.createElement(E,r(r({ref:e},p),{},{components:a})):t.createElement(E,r({ref:e},p))}));function m(A,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=A,l.mdxType="string"==typeof A?A:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4702:function(A,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var t=a(7462),n=a(3366),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:2},i="Basic Shapes",s={unversionedId:"tutorial/basic-shapes",id:"tutorial/basic-shapes",isDocsHomePage:!1,title:"Basic Shapes",description:"In this tutorial, we're going to go through the process of creating Blocky the Snowman; from seeing the source image, to designing the model, to coding and instancing the model itself.",source:"@site/docs/tutorial/basic-shapes.md",sourceDirName:"tutorial",slug:"/tutorial/basic-shapes",permalink:"/docs/tutorial/basic-shapes",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/tutorial/basic-shapes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/tutorial/getting-started"},next:{title:"Putting It All Together",permalink:"/docs/tutorial/putting-together"}},p=[{value:"Design Workflow",id:"design-workflow",children:[],level:2},{value:"Building Shapes",id:"building-shapes",children:[],level:2},{value:"Instance Commands",id:"instance-commands",children:[],level:2}],h={toc:p};function c(A){var e=A.components,l=(0,n.Z)(A,r);return(0,o.kt)("wrapper",(0,t.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-shapes"},"Basic Shapes"),(0,o.kt)("p",null,"In this tutorial, we're going to go through the process of creating Blocky the Snowman; from seeing the source image, to designing the model, to coding and instancing the model itself."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"blocky-front",src:a(5160).Z})),(0,o.kt)("h2",{id:"design-workflow"},"Design Workflow"),(0,o.kt)("p",null,"All JIPCAD modeling starts with an idea, optionally an image, and pencil and paper (or your preferred digital notetaking app). Many JIPCAD designs are inspired by abstract sculpture, and thus rely on publicly-available media to form an idea about what shapes their object can be broken down into. In this case, Blocky the Snowman is made out of a few different generators. See if you can find the right ones on the ",(0,o.kt)("a",{parentName:"p",href:"../lang-ref/generators"},"Generators page")," under the JIPCAD Language Reference."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"What's Blocky made of?")),(0,o.kt)("p",null,"One cylinder, one sphere, one funnel, two circles for eyes, and two polylines for a nose and mouth. However, you could have found different generators for the eyes, nose, and mouth than those listed--that's totally fine. In JIPCAD, there's almost always multiple ways to construct any shape, though some are easier than others.")),(0,o.kt)("h2",{id:"building-shapes"},"Building Shapes"),(0,o.kt)("p",null,"Now that we have a list of shapes, we're going to construct each individually and put them together in the next step. Note that this isn't typical; after gaining a bit more experience, users tend to create and place each generator in their intended locations before moving onto the next one. However, we're hoping to keep shape generation simple and learn a bit about instance commands, so we're going to build each shape with simple dimensions and move and scale them later."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Build a complete sphere with radius 1 and 100 segments. ",(0,o.kt)("br",null),"Starter code:",(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sphere id (radius theta_max phi_min phi_max theta_segs phi_segs) endsphere")," ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"For info on phi and theta, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-the-difference-between-theta-and-phi?share=1"},"this"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sphere s (1 360 0 180 10 10) endsphere\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Build a complete cylinder with radius 1, height 1, and 10 segments. ",(0,o.kt)("br",null),"Starter code:",(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cylinder id (radius height theta_max theta_segs) endcylinder"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cylinder cyl (1 1 360 10) endcylinder\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Build a funnel with a bottom radius of 1, height of 1, 10 segments, and a ratio of top radius to bottom radius of 1.5. ",(0,o.kt)("br",null),"Starter code:",(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"funnel id (radius ratio height segs) endfunnel"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"funnel f (1 1.5 1 10) endfunnel\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Construct one circle with a radius of 1 and 50 segments. ",(0,o.kt)("br",null),"Starter code:",(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"circle id (radius segs) endcircle"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"circle c (1 50) endcircle\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Construct a polyline for the nose and mouth. This will require the creation of three points to form a V shape. Place the points 1 unit apart horizontally and vertically. Starter code: ",(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"point id (x y z) endpoint")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"polyline id ( point_idlist ) endpolyline"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"point p1 (0 1 0) endpoint\npoint p2 (1 0 0) endpoint\npoint p3 (2 1 0) endpoint\n\npolyline ply (p1 p2 p3) endpolyline\n"))),(0,o.kt)("p",null,"Now we've built a pile of shapes at the origin of our scene. But...where are they?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"blank-JIPCAD",src:a(5579).Z})),(0,o.kt)("p",null,"While our shapes now exist in our file, we have to use an instance command to display and organize them. We'll do that in the next and final step."),(0,o.kt)("h2",{id:"instance-commands"},"Instance Commands"),(0,o.kt)("p",null,"With all shapes constructed, we now have to build Blocky the Snowman by moving and scaling our objects. We do this by utilizing commands in the instance of each shape, of which there are three: translate, which moves the shape along the XYZ axes, scale, which can shrink or expand a shape along any or all of its three axes, and rotate, which draws a vector in 3D space and moves the object around the vector a number of degrees. ",(0,o.kt)("br",null),"\nNote that these expressions, like all those in JIPCAD, can take a variety of expressions as an input: any kind of integer or double (-3, 4.55563913), expressions (4/3), and certain mathematical operators (sin/cos primarily).\nThis is an instance command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance name object\n    [rotate (rx ry rz)(degrees)] [scale (sx sy sz)] [translate (tx ty tz)]\n    [surface surface_id]\nendinstance\n")),(0,o.kt)("p",null,"While it looks intimidating, it boils down to a simple set of variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name is the name of the instance you are creating. The name of the instance must be unique from any other generator in the scene."),(0,o.kt)("li",{parentName:"ul"},"object is the single object to be  displayed. A single object can have multiple instances, which can be very useful."),(0,o.kt)("li",{parentName:"ul"},"you can then use any, all, or none of the three commands discussed earlier. You may also use them multiple times, and the changes will occur in the order they are written."),(0,o.kt)("li",{parentName:"ul"},"finally, a surface is an optional generator that colors the instance. Surfaces must be defined at the start of each scene, which is why they are frequently bundled into a single file and included at the start of each model (see the Including Files page under the JIPCAD Language Reference). If not defined, the default color is orange.")),(0,o.kt)("p",null,"In this model, we will be using three colors, white, black, and orange:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"surface W  color  (1   1   1  ) endsurface   # White\nsurface B  color  (0   0   0  ) endsurface   # Black\nsurface O  color  (1   0.6 0  ) endsurface   # Orange\n")),(0,o.kt)("p",null,"Getting a perfect translation and scale is a lot of guess-and-check. Don't get discouraged!"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"The cylinder will form the middle section for Blocky, so we should double all of its dimensions using the scale command and color it white.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance showCyl cyl scale (2 2 2) surface W endinstance\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"Now that our cylinder is in place, we should move our sphere--Blocky's head--to the top of the cylinder through translation.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance shows s translate (0 0 3) surface W endinstance\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"To form Blocky's base, we should scale the funnel up by three times in the z axis, giving it a stretched effect. Then we should translate it so that it's upper ring is centered around the base of the cylinder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance showf f scale (1 1 3) translate (0 0 -3) surface W endinstance\n"))),(0,o.kt)("p",null,"Good job! We've already made the base of our snowman, now we just need to add the face."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"blocky-body",src:a(2549).Z})),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"First, we're going to make Blocky's smile appear. First, we have to scale it down by half in all directions and color it black. Then we need to get it into place. The way we built his smile means that it's laying flat as of now; we have to rotate it to turn it upright. ",(0,o.kt)("br",null),"\nHowever, this is a very simple rotate. Draw a vector straight along the x axis and rotate the smile 90 degrees; it acts the same as any normal rotation about the x axis. Then, translate the smile into position in front of Blocky's head.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance showsmile ply scale (0.5 0.5 0.5) rotate (1 0 0) (90) translate (-0.5 1 2.5) surface B endinstance\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"Now we're going to do something similar for his nose. Here, we want his nose to be longer and sharper than his smile, so we'll want to compress the x and z axes and compress the y axis by half as much. ",(0,o.kt)("br",null),"\nThen, rotate the nose 180 degrees about the x axis, move it to the center of Blocky's face, and color it orange.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance shownose ply scale (0.25 0.5 0.25) rotate (1 0 0) (180) translate (-0.25 1.25 3) surface O endinstance\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"To wrap up, we'll need to make Blocky's eyes. Here we have to do all sorts of manipulation: First, we'll need two instances, one for each eye. We'll have to shrink them to an eighth of their original dimensions, then rotate them so that they turn upright. Finally, we'll need to color them black and move them to the correct location on Blocky's face a half unit apart.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instance showc1 c scale (0.125 0.125 0.125) rotate (1 0 0) (90) translate (-0.25 1 3.5) surface B endinstance\n\ninstance showc2 c scale (0.125 0.125 0.125) rotate (1 0 0) (90) translate (0.25 1 3.5) surface B endinstance\n"))),(0,o.kt)("p",null,"Congrats on your first JIPCAD model! As you can see, even simple commands can quickly turn complicated and produce awesome models."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"blocky-side",src:a(681).Z})),(0,o.kt)("p",null,"Blocky would be proud. The full code is below if you'd like to compare."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"Full code for Blocky.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"######### BLOCKY THE SNOWMAN ############\n\nsurface W  color  (1   1   1  ) endsurface   # White\nsurface B  color  (0   0   0  ) endsurface   # Black\nsurface O  color  (1   0.6 0  ) endsurface   # Orange\n\nsphere s (1 180 0 360 10 10) endsphere\n\ncylinder cyl (1 1 360 10) endcylinder\n\nfunnel f (1 1.5 1 10) endfunnel\n\ncircle c (1 50) endcircle\n\npoint p1 (0 1 0) endpoint\npoint p2 (1 0 0) endpoint\npoint p3 (2 1 0) endpoint\n\npolyline ply (p1 p2 p3) endpolyline\n\ninstance showCyl cyl scale (2 2 2) surface W endinstance\n\ninstance shows s translate (0 0 3) surface W endinstance\n\ninstance showf f scale (1 1 3) translate (0 0 -3) surface W endinstance\n\ninstance showsmile ply scale (0.5 0.5 0.5) rotate (1 0 0) (90) translate (-0.5 1 2.5) surface B endinstance\n\ninstance shownose ply scale (0.25 0.5 0.25) rotate (1 0 0) (180) translate (-0.25 1.25 3) surface O endinstance\n\ninstance showc1 c scale (0.125 0.125 0.125) rotate (1 0 0) (90) translate (-0.25 1 3.5) surface B endinstance\n\ninstance showc2 c scale (0.125 0.125 0.125) rotate (1 0 0) (90) translate (0.25 1 3.5) surface B endinstance\n"))))}c.isMDXComponent=!0},5579:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNUAAAJFCAYAAAD6YMFrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABAFSURBVHhe7dgxEcAwEMCwb/nlwh9NuwRAvEuLOfhZa38DAAAAAFx7TwEAAACAS6YaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAARKYaAAAAAESmGgAAAABEphoAAAAAJDM/mWIGckG7B0QAAAAASUVORK5CYII="},2549:function(A,e,a){e.Z=a.p+"assets/images/blocky-body-e874cb47349fae63788551097c5f02a3.png"},5160:function(A,e,a){e.Z=a.p+"assets/images/blocky-front-733db16b4093e3854254d198e87f9203.png"},681:function(A,e,a){e.Z=a.p+"assets/images/blocky-side-9c5f05750320e026110e8d8b721e8055.png"}}]);