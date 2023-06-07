"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[6430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5},o="Rendering Specifications",i={unversionedId:"lang-ref/rendering",id:"lang-ref/rendering",title:"Rendering Specifications",description:"Note: R, G, B values should be in the range 0.0 to 1.0",source:"@site/docs/lang-ref/rendering.md",sourceDirName:"lang-ref",slug:"/lang-ref/rendering",permalink:"/docs/lang-ref/rendering",draft:!1,editUrl:"https://github.com/JIPCAD/JIPCAD/docs/lang-ref/rendering.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"UI Controls",permalink:"/docs/lang-ref/UIControls"},next:{title:"Including Files",permalink:"/docs/lang-ref/include-files"}},c={},p=[{value:"Camera (Status: Up-to-date)",id:"camera-status-up-to-date",level:2},{value:"Lights (Status: Up-to-date)",id:"lights-status-up-to-date",level:2},{value:"Viewports",id:"viewports",level:2},{value:"Global Frontface Color",id:"global-frontface-color",level:2},{value:"Local Frontface Color",id:"local-frontface-color",level:2},{value:"Global Backface Color",id:"global-backface-color",level:2},{value:"Local Backface Color",id:"local-backface-color",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rendering-specifications"},"Rendering Specifications"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: R, G, B values should be in the range 0.0 to 1.0")),(0,r.kt)("h2",{id:"camera-status-up-to-date"},"Camera (Status: Up-to-date)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"camera id\n    projection [PERSPECTIVE] or [PARALLEL]\n    frustum [({left} {right} {bottom} {top} {nearPlane} {farPlane}) for PARALLEL; ({fieldOfView} {aspectRatio} {nearPlane} {farPlane}) for PERSPECTIVE]\n    ctranslate (tx ty tz) (Not Yet Implemented!)\n    crotate (rx ry rz){in degrees} (Not Yet Implemented!)\nendcamera\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{fieldOfView}"),": extent of the observable world that is seen, defined by an angle (0","\xb0"," ~ 360","\xb0",")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{aspectRatio}"),": ratio of the width and height of the viewport. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{left}"),": Defines the left X axis of the Nearplane and Farplane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{right}"),": Defines the Right X axis of the Nearplane and Farplane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{bottom}"),": Defines the Bottom Y axis of the Nearplane and Farplane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{top}"),": Defines the Top Y axis of the Nearplane and Farplane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{nearPlane}"),": Defines the Z axis of the Nearplane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{farPlane}"),": Defines the Z axis of the Farplane.")),(0,r.kt)("p",null,"The default Camera is: ",(0,r.kt)("inlineCode",{parentName:"p"},"PERSPECTIVE"),", with 45","\xb0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FOV"),", 1280x720 ",(0,r.kt)("inlineCode",{parentName:"p"},"Aspect Ratio"),", 0.1 ",(0,r.kt)("inlineCode",{parentName:"p"},"nearPlane"),", and 1000 ",(0,r.kt)("inlineCode",{parentName:"p"},"farPlane"),".")),(0,r.kt)("h2",{id:"lights-status-up-to-date"},"Lights (Status: Up-to-date)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"light id\n    type [NOME_DIRECTIONAL] or [NOME_AMBIENT]\n    color (R G B)\nendlight\n"))),(0,r.kt)("p",null,"Creates a light that can optionally be colored and a directed or ambient beam.")),(0,r.kt)("h2",{id:"viewports"},"Viewports"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Viewport id\n    cameraID [camid]\n    (left top width height)\nendviewport\n"))),(0,r.kt)("p",null,"Single or multiple viewport setting.")),(0,r.kt)("h2",{id:"global-frontface-color"},"Global Frontface Color"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"frontcolor (R G B) endfrontcolor\n"))),(0,r.kt)("p",null,"Set global frontface color, can't use slider to interactively change this.")),(0,r.kt)("h2",{id:"local-frontface-color"},"Local Frontface Color"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"surface id (R G B) endsurface\n"))),(0,r.kt)("p",null,"Defines a surface color by its RGB values in the range ","[0, 1]",".")),(0,r.kt)("h2",{id:"global-backface-color"},"Global Backface Color"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backcolor (R G B) endbackcolor\n"))),(0,r.kt)("p",null,"Set global backface color, can't use slider to interactively change this.")),(0,r.kt)("h2",{id:"local-backface-color"},"Local Backface Color"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backface id color (R G B) endbackface\n"))),(0,r.kt)("p",null,"Set the backface color for each individual backface.")))}u.isMDXComponent=!0}}]);