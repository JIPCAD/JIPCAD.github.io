"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Rendering Specifications",l={unversionedId:"lang-ref/rendering",id:"lang-ref/rendering",isDocsHomePage:!1,title:"Rendering Specifications",description:"R, G, B should be set from 0-1;",source:"@site/docs/lang-ref/rendering.md",sourceDirName:"lang-ref",slug:"/lang-ref/rendering",permalink:"/docs/lang-ref/rendering",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/lang-ref/rendering.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Generators",permalink:"/docs/lang-ref/generators"},next:{title:"Scene Graph & Geometric Manipulation",permalink:"/docs/lang-ref/manipulation"}},c=[{value:"Camera (Status: Up-to-date)",id:"camera-status-up-to-date",children:[],level:2},{value:"Lights (Status: Up-to-date)",id:"lights-status-up-to-date",children:[],level:2},{value:"Viewports",id:"viewports",children:[],level:2},{value:"Global Frontface Color",id:"global-frontface-color",children:[],level:2},{value:"Local Frontface Color",id:"local-frontface-color",children:[],level:2},{value:"Global Backface Color",id:"global-backface-color",children:[],level:2},{value:"Local Backface Color",id:"local-backface-color",children:[],level:2},{value:"<strong>Rendering (as in SLIDE):</strong> (Status: Not available.)",id:"rendering-as-in-slide-status-not-available",children:[],level:2}],s={toc:c};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rendering-specifications"},"Rendering Specifications"),(0,a.kt)("p",null,"R, G, B should be set from 0-1;"),(0,a.kt)("h2",{id:"camera-status-up-to-date"},"Camera (Status: Up-to-date)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"camera id  \n Projection [NOME_PERSPECTIVE] or [NOME_ORTHOGRAPHIC] or [NOME_FRUTUM] \n frustum [(left right bottom top nearPlane farPlane) for NOME_ORTHOGRAPHIC and NOME_FRUTUM; (fieldOfView aspectRatio nearPlane farPlane) for NOME_PERSPECTIVE\n ctranslate (tx ty tz)\n crotate (rx ry rz){in degrees}\nendcamera\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u201cNOME_PERSPECTIVE\u201d or \u201c",(0,a.kt)("inlineCode",{parentName:"li"},"NOME_ORTHOGRAPHIC"),"\u201d or \u201c",(0,a.kt)("inlineCode",{parentName:"li"},"NOME_FRUTUM"),"\u201d:  if present, specify the type of projection applied.\nIf none is supplied, the default is  ",(0,a.kt)("inlineCode",{parentName:"li"},"NOME_PERSPECTIVE"),".")),(0,a.kt)("h2",{id:"lights-status-up-to-date"},"Lights (Status: Up-to-date)"),(0,a.kt)("p",null,"Scece Light Control"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"light id\n    Type [NOME_DIRECTIONAL] or [NOME_AMBIENT]\n    Color (R G B)\nendlight\n")),(0,a.kt)("h2",{id:"viewports"},"Viewports"),(0,a.kt)("p",null,"Single or multiple viewports setting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Viewport id\n  cameraID [camid]\n  (left top width height)\nendviewport\n")),(0,a.kt)("h2",{id:"global-frontface-color"},"Global Frontface Color"),(0,a.kt)("p",null,"Set global frontface color, can't use slider to interatively change this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"frontcolor (0.7   0.0 0.7  ) endfrontcolor\n")),(0,a.kt)("h2",{id:"local-frontface-color"},"Local Frontface Color"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"surface id (R G B) endsurface\n")),(0,a.kt)("p",null,"Defines a surface color by its RGB values in the range ","[0, 1]","."),(0,a.kt)("h2",{id:"global-backface-color"},"Global Backface Color"),(0,a.kt)("p",null,"Set global backface color, can't use slider to interatively change this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"backcolor (0   0.5 0.5  ) endbackcolor\n")),(0,a.kt)("h2",{id:"local-backface-color"},"Local Backface Color"),(0,a.kt)("p",null,"Set the backface color for each individual backface. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"backface id color (R G B) endbackface   # Magenta\n")),(0,a.kt)("h2",{id:"rendering-as-in-slide-status-not-available"},(0,a.kt)("strong",{parentName:"h2"},"Rendering (as in SLIDE):")," (Status: Not available.)"),(0,a.kt)("p",null,"All instances to be displayed could be placed in a group \u201cassembly.\u201d\nA render statement would then have an instance of \u201cassembly\u201d and also specify camera type, lights, and windows/viewports. Any number of render statements can be specified in a single file, but there must be at least one for anything to be displayed. This flexible matching of viewport, geometry root, and camera makes the render statement very general. Side-by-side viewports in a single window with slightly disparate views can be used to produce stereo viewing. A multiple window setup can provide different views on the same world. This, for example, could be used in the implementation of a driving simulator, with separate camera specifications and viewports corresponding to windshield, rear-view mirror and side-view mirror views."))}d.isMDXComponent=!0}}]);