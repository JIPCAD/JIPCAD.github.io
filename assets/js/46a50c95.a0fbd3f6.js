"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[5101],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),l=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=t,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||a;return r?o.createElement(m,i(i({ref:n},u),{},{components:r})):o.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),t=(r(7294),r(3905));const a={sidebar_position:5},i="Common Include Files",c={unversionedId:"common-include-files",id:"common-include-files",title:"Common Include Files",description:"These are some files you might find useful to frequently include in your JIPCAD projects. Feel free to add your own! At the moment, they are included as walls of text which can be copied into a .nom file to produce the detailed result.",source:"@site/docs/common-include-files.md",sourceDirName:".",slug:"/common-include-files",permalink:"/docs/common-include-files",draft:!1,editUrl:"https://github.com/JIPCAD/JIPCAD/docs/common-include-files.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Including Files",permalink:"/docs/lang-ref/include-files"},next:{title:"Q&A",permalink:"/docs/Q&A"}},s={},l=[{value:"Surfaces",id:"surfaces",level:3},{value:"Coordinate Axes",id:"coordinate-axes",level:3}],u={toc:l},d="wrapper";function f(e){let{components:n,...r}=e;return(0,t.kt)(d,(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"common-include-files"},"Common Include Files"),(0,t.kt)("p",null,"These are some files you might find useful to frequently include in your JIPCAD projects. Feel free to add your own! At the moment, they are included as walls of text which can be copied into a .nom file to produce the detailed result."),(0,t.kt)("h3",{id:"surfaces"},"Surfaces"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"A list of surfaces you can use to color your generators."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"######## Some Surface colors #############################\nsurface M  color  (0.9 0.1 1  ) endsurface   # Magenta\nsurface Z  color  (1   0   0.6) endsurface   # Zinnober\nsurface R  color  (0.9 0.1 0  ) endsurface   # Red\nsurface O  color  (1   0.6 0  ) endsurface   # Orange\nsurface Y  color  (0.8 0.8 0  ) endsurface   # Yellow\nsurface L  color  (0.5 0.8 0  ) endsurface   # Lime\nsurface G  color  (0.1 0.8 0  ) endsurface   # Green\nsurface A  color  (0   0.9 0.6) endsurface   # Aqua\nsurface C  color  (0   0.8 0.9) endsurface   # Cyan\nsurface U  color  (0   0.6 1  ) endsurface   # Uniform\nsurface B  color  (0   0.3 1  ) endsurface   # Blue\nsurface V  color  (0.5 0.1 1  ) endsurface   # Violet\nsurface P  color  (0.7 0   0.9) endsurface   # Purple\nsurface LR color (240/255 128/255 128/255) endsurface #Light Red\nsurface BR color (139/255 69/255 19/255) endsurface #Brown\nsurface GR color (105/255 105/255 105/255) endsurface #Gray\nsurface CPR color (184/255 134/255 11/255) endsurface #Copper\nsurface ZC color (218/255 165/255 32/255) endsurface #Zinc\nsurface LG color (204/255 255/255 204/255) endsurface #Light Green\n\nsurface W  color  (1   1   1  ) endsurface   # White\nsurface D  color  (0.7 0.7 0.7) endsurface   # Dark\nsurface K  color  (0   0   0  ) endsurface   # blacK\n\n"))),(0,t.kt)("h3",{id:"coordinate-axes"},"Coordinate Axes"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"A set of three coordinate axes from -10 to 10 units. ",(0,t.kt)("br",null),"Lengths can be adjusted by editing the endpoints of the lines.  ",(0,t.kt)("br",null),"For colors to load in properly, the above file must be included before this one. ",(0,t.kt)("br",null)),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"############ Coordinate Axes ####\n\n#X-axis:\npoint xaa (-10 0 0) endpoint\npoint xaO (0 0 0) endpoint\npoint xab (10 0 0) endpoint\npolyline xaxisPos (xaO xab) endpolyline\npolyline xaxisNeg (xaa xaO) endpolyline\n\n#Y-axis:\npoint yaa (0 -10 0) endpoint\npoint yaO (0 0 0) endpoint\npoint yab (0 10 0) endpoint\npolyline yaxisPos (yaO yab) endpolyline\npolyline yaxisNeg (yaa yaO) endpolyline\n\n#Z-axis:\npoint zaa (0 0 -10) endpoint\npoint zaO (0 0 0) endpoint\npoint zab (0 0 10) endpoint\npolyline zaxisPos (zaO zab) endpolyline\npolyline zaxisNeg (zaa zaO) endpolyline\n\ngroup coord_axes\ninstance showxaxisPoz xaxisPos surface R endinstance\ninstance showxaxisNeg xaxisNeg surface LR endinstance\ninstance showyaxisPoz yaxisPos surface B endinstance\ninstance showyaxisNeg yaxisNeg surface C endinstance\ninstance showzaxisPoz zaxisPos surface G endinstance\ninstance showzaxisNeg zaxisNeg surface LG endinstance\nendgroup\n\ninstance icoord coord_axes endinstance\n"))))}f.isMDXComponent=!0}}]);