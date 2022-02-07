"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[96],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5112:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},c="User Guide",l={unversionedId:"tutorial/user",id:"tutorial/user",isDocsHomePage:!1,title:"User Guide",description:"How does JIPCAD work?",source:"@site/docs/tutorial/user.md",sourceDirName:"tutorial",slug:"/tutorial/user",permalink:"/docs/tutorial/user",editUrl:"https://github.com/JIPCAD/NOME3/docs/tutorial/user.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Developer Guide",permalink:"/docs/tutorial/developer"}},p=[{value:"How does JIPCAD work?",id:"how-does-jipcad-work",children:[],level:2},{value:"NOME Language Example",id:"nome-language-example",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-guide"},"User Guide"),(0,o.kt)("h2",{id:"how-does-jipcad-work"},"How does JIPCAD work?"),(0,o.kt)("p",null,"The JIPCAD proprietary language is built around specifying meshes, groups, and instances. Meshes and groups can be turned into instances, which are then displayed on the UI."),(0,o.kt)("p",null,"A mesh is any basic generator that is defined within JIPCAD. These basic generators can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/randyfan/NOME3/wiki/NOME3-Language-Reference"},"here"),", and can be combined in order to create more advanced and geometrically complicated shapes. Basic generators have parameters that further specify their shape and look, which allows for more flexibility in design. A call to a generator takes the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"generator name_of_generator (condition_1 condition_2 ...) endgenerator\n")),(0,o.kt)("p",null,"A group is a number of meshes that have been 'grouped' together into a new mesh, that can then be treated as a singular mesh and have operations performed on. This allows for scalability in the design of more complicated shapes."),(0,o.kt)("p",null,"An instance of either a mesh or a group is created in order to actually bring an object into the scene. Instances of meshes or groups must be created in order for the mesh or group to be displayed. Multiple instances of the same mesh or group can also be created."),(0,o.kt)("p",null,"Further operations such as point selection, face deletion, line sweeps, subdivision, screen panning and rotation, etc.) can then be performed once the scene is loaded."),(0,o.kt)("p",null,"The project must be compiled using CMake, with compilation instructions found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/randyfan/NOME3/blob/master/README.md"},"here"),". To use the compiled application, open the program and load in a .NOM file. The scene in the .NOM file will be rendered into the crystal-ball interface, which can then be interacted with."),(0,o.kt)("p",null,"Generators and more-complex shapes (ex. sweeps, combinations of generators, etc.) must be defined and instantiated on the .NOM file prior to rendering in the application, but once a scene is rendered then faces/vertices can be deleted, objects can be subdivided, the time variable can be used to pan the screen, etc."),(0,o.kt)("h2",{id:"nome-language-example"},"NOME Language Example"),(0,o.kt)("p",null,"An example of the interplay between meshes, groups, and instances can be seen here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"point p1 (0 2 1) endpoint\npoint p2 (1 0 1) endpoint\npoint p3 (-1 0 1) endpoint\n\nmesh triangle\n    face f1 (p1 p2 p3) endface\nendmesh\n\ngroup diamond\n    instance t0 triangle endinstance\n    instance t1 triangle rotate (0 1 0) (90) translate (-1 0 1) endinstance\n    instance t2 triangle rotate (0 0 1) (180) endinstance\n    instance t3 triangle rotate (0 0 1) (180) rotate (0 1 0) (90) translate (-1 0 1) endinstance\nendgroup\n\ninstance d1 diamond scale (25 25 25) translate (0 0 -25) endinstance\n")))}d.isMDXComponent=!0}}]);