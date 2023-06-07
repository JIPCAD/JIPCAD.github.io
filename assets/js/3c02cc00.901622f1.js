"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[1459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},l="Parameters and Sliders",s={unversionedId:"lang-ref/sliders-and-parameters",id:"lang-ref/sliders-and-parameters",title:"Parameters and Sliders",description:"Bank (Status: Up-to-date)",source:"@site/docs/lang-ref/sliders-and-parameters.md",sourceDirName:"lang-ref",slug:"/lang-ref/sliders-and-parameters",permalink:"/docs/lang-ref/sliders-and-parameters",draft:!1,editUrl:"https://github.com/JIPCAD/JIPCAD/docs/lang-ref/sliders-and-parameters.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scene & Group Manipulation",permalink:"/docs/lang-ref/manipulation"},next:{title:"UI Controls",permalink:"/docs/lang-ref/UIControls"}},o={},d=[{value:"<strong>Bank</strong> <strong>(Status: Up-to-date)</strong>",id:"bank-status-up-to-date",level:2},{value:"<strong>Time-Varying Models</strong>",id:"time-varying-models",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parameters-and-sliders"},"Parameters and Sliders"),(0,a.kt)("h2",{id:"bank-status-up-to-date"},(0,a.kt)("strong",{parentName:"h2"},"Bank")," ",(0,a.kt)("strong",{parentName:"h2"},"(Status: Up-to-date)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bank bankID\n set setID1 init1 min1 max1 step_size1\n ...\n set setIDN initN minN maxN step_sizeN\n list (slider_idlist)\nendbank\n"))),(0,a.kt)("p",null,"Allows the user to change any numerical value in the ",(0,a.kt)("inlineCode",{parentName:"p"},".NOM")," file through an interactive slider in the GUI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setID"),": the variable to be parameterized."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"init"),": the initial value of the slider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min"),": the lower bound of the slider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max"),": the upper bound of the slider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"step_size"),": the incremental step size of the slider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slider_idlist"),": the list of sliders to be displayed.")),(0,a.kt)("p",null,"To use a user-defined parameter to define part of a generator, use this notation: {expr bankName.varName}. Ex: if a bank has been named ",(0,a.kt)("inlineCode",{parentName:"p"},"bank par")," with one slider ",(0,a.kt)("inlineCode",{parentName:"p"},"set rad 10 3 100 1"),", the slider could be used in a circle with ",(0,a.kt)("inlineCode",{parentName:"p"},"circle circ ({expr par.rad} 40)")," to create a circle with a variable radius and 40 segments.  ")),(0,a.kt)("h2",{id:"time-varying-models"},(0,a.kt)("strong",{parentName:"h2"},"Time-Varying Models")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$frame\n$time\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These are two global variables that can be used in any expression that evaluates a numerical value in JIPCAD."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$frame"),": An integer value that gets incremented by +1 after every rendering of the scene. All expressions that include  $frame are updated before the scene is rendered again. This means that $frame can be significantly faster or slower than $time based on the behavior of geometry included: a simple static cube may mean that variables affected by $frame never change, while a scene that includes variable forms such as sin functions may update $frame rapidly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$time"),": A real value that keeps track of elapsed time (in seconds). After a rendering, the system-clock is interrogated and compared to the remembered system clock value after the previous rendering. The time difference is then added to the $time variable, and all expressions comprising $time get updated before the scene is rendered again.\nEx: ",(0,a.kt)("inlineCode",{parentName:"li"},"circle circ (10/$time 40)")," will create a circle with 40 segments and a radius that begins at 10 and shrinks every second following the sequence 10/1...10/2...10/3...etc."))))}m.isMDXComponent=!0}}]);