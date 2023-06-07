"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[6648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,g=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Suggested Features & Known Bugs",sidebar_position:7},i="Known Bugs:",s={unversionedId:"SuggestedFeatures",id:"SuggestedFeatures",title:"Known Bugs:",description:"These errors have been noticed by JIPCAD's development team and plans are underway to address them. Start by reading the known bugs before posting a suggested feature to see if your idea has already been discovered.",source:"@site/docs/SuggestedFeatures.md",sourceDirName:".",slug:"/SuggestedFeatures",permalink:"/docs/SuggestedFeatures",draft:!1,editUrl:"https://github.com/JIPCAD/JIPCAD/docs/SuggestedFeatures.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Suggested Features & Known Bugs",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Q&A",permalink:"/docs/Q&A"}},l={},d=[{value:"Loading any file for the first time after creation or an update crashes NOME.",id:"loading-any-file-for-the-first-time-after-creation-or-an-update-crashes-nome",level:4},{value:"Reloading a scene causes files to load in with default colors.",id:"reloading-a-scene-causes-files-to-load-in-with-default-colors",level:4},{value:"Upon reloading a scene, past values of parameters are successfully saved, but they can be changed and will affect the current scene.",id:"upon-reloading-a-scene-past-values-of-parameters-are-successfully-saved-but-they-can-be-changed-and-will-affect-the-current-scene",level:4},{value:"Attempting to switch between vertex and sharp vertex selection in the UI consistently crashes JIPCAD.",id:"attempting-to-switch-between-vertex-and-sharp-vertex-selection-in-the-ui-consistently-crashes-jipcad",level:4},{value:"Allow values to be typed into sliders:",id:"allow-values-to-be-typed-into-sliders",level:4},{value:"Use ctrl + R to reload a document:",id:"use-ctrl--r-to-reload-a-document",level:4},{value:"Add a greater number of operators to JIPAD:",id:"add-a-greater-number-of-operators-to-jipad",level:4},{value:"Add coordinate axes",id:"add-coordinate-axes",level:4},{value:"Allow <code>[brep brep-type]</code> for mobius strips as in sweeps.",id:"allow-brep-brep-type-for-mobius-strips-as-in-sweeps",level:4},{value:"Allow <code>[brep brep-type]</code> for torus knots as in sweeps.",id:"allow-brep-brep-type-for-torus-knots-as-in-sweeps",level:4},{value:"Include Rendering (as in SLIDE):",id:"include-rendering-as-in-slide",level:4},{value:"Allow changing background color in UI and NOME language.",id:"allow-changing-background-color-in-ui-and-nome-language",level:4},{value:"Allow render option for parallel projection.",id:"allow-render-option-for-parallel-projection",level:4}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"known-bugs"},"Known Bugs:"),(0,r.kt)("p",null,"These errors have been noticed by JIPCAD's development team and plans are underway to address them. Start by reading the known bugs before posting a suggested feature to see if your idea has already been discovered."),(0,r.kt)("h4",{id:"loading-any-file-for-the-first-time-after-creation-or-an-update-crashes-nome"},"Loading any file for the first time after creation or an update crashes NOME."),(0,r.kt)("h4",{id:"reloading-a-scene-causes-files-to-load-in-with-default-colors"},"Reloading a scene causes files to load in with default colors."),(0,r.kt)("h4",{id:"upon-reloading-a-scene-past-values-of-parameters-are-successfully-saved-but-they-can-be-changed-and-will-affect-the-current-scene"},"Upon reloading a scene, past values of parameters are successfully saved, but they can be changed and will affect the current scene."),(0,r.kt)("h4",{id:"attempting-to-switch-between-vertex-and-sharp-vertex-selection-in-the-ui-consistently-crashes-jipcad"},"Attempting to switch between vertex and sharp vertex selection in the UI consistently crashes JIPCAD."),(0,r.kt)("h1",{id:"suggested-features"},"Suggested Features:"),(0,r.kt)("p",null,"Please submit suggested features in the following format:"),(0,r.kt)("p",null,"Line 1:         Suggested Feature",(0,r.kt)("br",{parentName:"p"}),"\n","Line 2:         ","\u2002","\u2002","- Current situation",(0,r.kt)("br",{parentName:"p"}),"\n","Line 3:         ","\u2002","\u2002","- Why feature should be added",(0,r.kt)("br",{parentName:"p"}),"\n","(Line 4):       ","\u2002","- Any additional notes  "),(0,r.kt)("h4",{id:"allow-values-to-be-typed-into-sliders"},"Allow values to be typed into sliders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Values can be typed in but do not affect actual modeling environment"),(0,r.kt)("li",{parentName:"ul"},"Would allow for ease in finding precise values on a slider, for example finding 4427 on a slider from 1-9000 step size 1."),(0,r.kt)("li",{parentName:"ul"},"Typed value could round to the nearest step size to avoid errors.")),(0,r.kt)("h4",{id:"use-ctrl--r-to-reload-a-document"},"Use ctrl + R to reload a document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other commands, like opening a document, use ctrl functionality but reload does not."),(0,r.kt)("li",{parentName:"ul"},"Allows modelers to easily see the effect of their new code without closing and reopening file.")),(0,r.kt)("h4",{id:"add-a-greater-number-of-operators-to-jipad"},"Add a greater number of operators to JIPAD:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"floor division(//), modulo(%), and absolute value(| |) do not work within JIPCAD."),(0,r.kt)("li",{parentName:"ul"},"Increased flexibility when defining points, shapes, or time-varying behavior.")),(0,r.kt)("h4",{id:"add-coordinate-axes"},"Add coordinate axes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3-dimensional navigation tools must be coded and included by the user."),(0,r.kt)("li",{parentName:"ul"},"Improves ease of access to a very helpful tool."),(0,r.kt)("li",{parentName:"ul"},"An on/off toggle would be nice, also some kind of way to find the coordinates of a shape or point in space.")),(0,r.kt)("h4",{id:"allow-brep-brep-type-for-mobius-strips-as-in-sweeps"},"Allow ",(0,r.kt)("inlineCode",{parentName:"h4"},"[brep brep-type]")," for mobius strips as in sweeps."),(0,r.kt)("h4",{id:"allow-brep-brep-type-for-torus-knots-as-in-sweeps"},"Allow ",(0,r.kt)("inlineCode",{parentName:"h4"},"[brep brep-type]")," for torus knots as in sweeps."),(0,r.kt)("h4",{id:"include-rendering-as-in-slide"},"Include Rendering (as in SLIDE):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All instances to be displayed could be placed in a group \u201cassembly.\u201d"),(0,r.kt)("li",{parentName:"ul"},"A render statement would then have an instance of \u201cassembly\u201d and also specify camera type, lights, and windows/viewports. Any number of render statements can be specified in a single file, but there must be at least one for anything to be displayed. This flexible matching of viewport, geometry root, and camera makes the render statement very general. Side-by-side viewports in a single window with slightly disparate views can be used to produce stereo viewing. A multiple window setup can provide different views on the same world. This, for example, could be used in the implementation of a driving simulator, with separate camera specifications and viewports corresponding to windshield, rear-view mirror and side-view mirror views.")),(0,r.kt)("h4",{id:"allow-changing-background-color-in-ui-and-nome-language"},"Allow changing background color in UI and NOME language."),(0,r.kt)("h4",{id:"allow-render-option-for-parallel-projection"},"Allow render option for parallel projection."))}p.isMDXComponent=!0}}]);