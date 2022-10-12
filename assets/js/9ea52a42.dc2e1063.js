"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[96],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5112:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>p});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="User Guide",s={unversionedId:"tutorial/user",id:"tutorial/user",isDocsHomePage:!1,title:"User Guide",description:"How does JIPCAD work?",source:"@site/docs/tutorial/user.md",sourceDirName:"tutorial",slug:"/tutorial/user",permalink:"/docs/tutorial/user",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/tutorial/user.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Developer Guide",permalink:"/docs/tutorial/developer"}},c=[{value:"How does JIPCAD work?",id:"how-does-jipcad-work",children:[],level:2},{value:"JIPCAD Language Example",id:"jipcad-language-example",children:[],level:2}],l={toc:c};function p({components:e,...n}){return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-guide"},"User Guide"),(0,a.kt)("h2",{id:"how-does-jipcad-work"},"How does JIPCAD work?"),(0,a.kt)("p",null,"The JIPCAD proprietary language is built around specifying meshes, groups, and instances. Meshes and groups can be turned into instances, which are then displayed on the UI."),(0,a.kt)("p",null,"A mesh is any basic generator that is defined within JIPCAD. These basic generators can be found ",(0,a.kt)("a",{parentName:"p",href:"../lang-ref/generators"},"here"),", and can be combined in order to create more advanced and geometrically complicated shapes. Basic generators have parameters that further specify their shape and look, which allows for more flexibility in design. A call to a generator takes the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"generator name_of_generator (condition_1 condition_2 ...) endgenerator\n")),(0,a.kt)("p",null,"A group is a number of meshes that have been 'grouped' together into a new mesh, that can then be treated as a singular mesh and have operations performed on. This allows for scalability in the design of more complicated shapes."),(0,a.kt)("p",null,"An instance of either a mesh or a group is created in order to actually bring an object into the scene. Instances of meshes or groups must be created in order for the mesh or group to be displayed. Multiple instances of the same mesh or group can also be created."),(0,a.kt)("p",null,"Further operations such as point selection, face deletion, line sweeps, subdivision, screen panning and rotation, etc.) can then be performed once the scene is loaded."),(0,a.kt)("p",null,"The project must be compiled using CMake, with compilation instructions found ",(0,a.kt)("a",{parentName:"p",href:"../compiling/mac"},"here"),". To use the compiled application, open the program and load in a ",(0,a.kt)("inlineCode",{parentName:"p"},".NOM")," file. The scene in the ",(0,a.kt)("inlineCode",{parentName:"p"},".NOM")," file will be rendered into the crystal-ball interface, which can then be interacted with."),(0,a.kt)("p",null,"Generators and more-complex shapes (ex. sweeps, combinations of generators, etc.) must be defined and instantiated on the ",(0,a.kt)("inlineCode",{parentName:"p"},".NOM")," file prior to rendering in the application, but once a scene is rendered then faces/vertices can be deleted, objects can be subdivided, the time variable can be used to pan the screen, etc."),(0,a.kt)("h2",{id:"jipcad-language-example"},"JIPCAD Language Example"),(0,a.kt)("p",null,"An example of the interplay between meshes, groups, and instances can be seen here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'## JIPCAD Example (scaled open cube)\n\n## 2022/09/03\n#################################################################################\n\nsurface R color (1 0 0) endsurface     # Red\nsurface O color (0.9 0.6 0) endsurface # Orange\nsurface Y color (1 1 0) endsurface     # Yellow\nsurface L color (0.6 0.8 0) endsurface # Lime\nsurface G color (0 0.9 0) endsurface   # Green\nsurface A color (0 0.9 0.7) endsurface # Aqua\nsurface C color (0 1 1) endsurface     # Cyan\nsurface U color (0 0.5 1) endsurface   # Uniform\nsurface B color (0 0 1) endsurface     # Blue\nsurface P color (0.6 0 1) endsurface   # Purple\nsurface M color (1 0 1) endsurface     # Magenta\nsurface Z color (1 0 0.5) endsurface   # Zinnober\n\n###################################################\n\nbank par\n  set xscale   0.3  0.1  0.6  0.02\n  set yscale   0.3  0.1  0.6  0.02\n  list ( xscale yscale )\nendbank\n\npoint p1 ( 1  1  1) endpoint\npoint p2 (-1  1  1) endpoint\npoint p3 (-1 -1  1) endpoint\npoint p4 ( 1 -1  1) endpoint\n\nmesh quad\n    face fz (p1 p2 p3 p4) endface\nendmesh\n\ngroup open_cube\n    instance q0 quad  surface Y      endinstance\n    instance q1 quad  surface O  rotate (1 0 0) ( 90) endinstance\n    instance q2 quad  surface R  rotate (1 0 0) (180) endinstance\n    instance q3 quad  surface M  rotate (1 0 0) (-90) endinstance\nendgroup\n\n## Instances at the "top" level will be rendered:\ninstance ioc1  open_cube  scale ( {expr $par.xscale} {expr $par.yscale} 0.3 )     endinstance\ninstance ioc2  open_cube  scale ( 0.4                {expr $par.yscale} 0.3 )  translate( 1 0 0 )   endinstance\n\n######################   end   ######################\n')),(0,a.kt)("p",null,"Further example files can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JIPCAD/JIPCAD/tree/master/ExampleFiles"},"here"),"."))}p.isMDXComponent=!0}}]);