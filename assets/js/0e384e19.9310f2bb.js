"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,g=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:1,slug:"/"},c="Introduction",l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"The JIPCAD project is supervised by UC Berkeley professor Carlo Sequin and developed by JIPCAD group.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"User Guide",permalink:"/docs/tutorial/user"}},d=[{value:"Why JIPCAD",id:"why-jipcad",children:[],level:2},{value:"The Current JIPCAD",id:"the-current-jipcad",children:[],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The JIPCAD project is supervised by UC Berkeley professor Carlo Sequin and developed by JIPCAD group.\nLet's discover ",(0,i.kt)("strong",{parentName:"p"},"JIPCAD")," and empower your creativity with this tool."),(0,i.kt)("p",null,"JIPCAD (Joint-Interactive-Procedural CAD) is a 3D procedural CAD tool used for programmatically creating geometries with a shape description language. Users can interactively modify the scene in a graphical user interface and save modifications back into the corresponding file as reusable code; a reopening of the enhanced file will reproduce the latest graphical state, and the user can continue in either a graphical manner or by textual changes in the .nom file."),(0,i.kt)("p",null,"JIPCAD combines procedural and interactive modeling, making it easier for users to model 2-manifold free-form surfaces of high complexity and inherent regularity. In this report, we will discuss JIPCAD and the development of its shape description language and graphical editing capabilities over the past year. Key contributions include generalized progressive sweeps along arbitrary 3D space curves, dynamic scenes, advanced shape generators for tori, error catching, graphical editing and saving capabilities, and advanced rendering options."),(0,i.kt)("h2",{id:"why-jipcad"},"Why JIPCAD"),(0,i.kt)("p",null,"There are many existing 3D modeling tools out there in the market, such as Blender, OpenSCAD, and Maya; however, these tools do not strike a good balance between procedural shape creation and interactive graphical editing capabilities."),(0,i.kt)("p",null,"Berkeley SLIDE (Scene Language for Interactive Dynamic Environments) is a CAD tool originally developed in the early 2000\u2019s and can be used to construct abstract geometrical sculptures with a shape description language. However, it has not been maintained for over a decade and is not compatible with recent versions of operating systems. Implementation-wise, SLIDE represents meshes as two-sided surfaces, so it is limited in its ability to subdivide and offset single-sided surfaces, such as M\xf6bius bands and Klein bottles."),(0,i.kt)("p",null,"In 2018, NOME (Non-Orientable Manifold Editor) was introduced to handle singled-side, non-orientable surfaces and to add interactive graphical editing capabilities. The initial version of NOME offered only a few of the procedural shape generators that were available in SLIDE, and it was difficult to save the changes that were made graphically in a form compatible with the procedural scene description file. Also, its implementation code was rather \u201cad-hoc\u201d and made it difficult to enhance NOME\u2019s capabilities."),(0,i.kt)("p",null,"The past efforts and related tools have not found a good balance between procedural mesh generation and interactive GUI modifications. Thus, we have developed a new modeling tool, called JIPCAD (JointInteractive-Procedural CAD), that extends NOME by re-implementing it on a more robust, well-structured code base and by enhancing the library of predefined shape generators. Many additional modification modes were added to the graphical user interface, and the means of saving those changes and appending it to the original procedural JIPCAD file were improved. The challenges involved are not only generating the shapes and preserving their hierarchical relationships, but also saving interactive changes back into the code for reuse. We decided to rebrand NOME as JIPCAD since the tool\u2019s ability to handle non-orientable surfaces is no longer its distinguishing feature."),(0,i.kt)("h2",{id:"the-current-jipcad"},"The Current JIPCAD"),(0,i.kt)("p",null,"JIPCAD has been made the tool for robustness and with features such as generalized progressive sweeps along arbitrary 3D space curves, dynamic scenes, advanced shape generators for tori, graphical editing and saving capabilities, error catching, a user-friendly crystal ball interface, advanced rendering options, and more. We have also fixed the mesh data structure to handle various non-orientable surfaces while being compatible with our newly added features. JIPCAD users can generate topologically complex 2-manifolds through an iterative workflow, which may start with procedurally generated B-spline curves, to which discrete surface facets are added through a graphical user interface. This is demonstrated in the construction of the \u201c3-2-1\u201d Sculpture by Tord Tengstrand."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Sculpture by Tord Tengstrand"),(0,i.kt)("th",{parentName:"tr",align:"center"},"B-splines added"),(0,i.kt)("th",{parentName:"tr",align:"center"},"intermediate construction step"),(0,i.kt)("th",{parentName:"tr",align:"center"},"completed construction"),(0,i.kt)("th",{parentName:"tr",align:"center"},"sharp subdivision applied"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:"/img/docpic/im1.jpg",alt:"drawing",width:"200"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:"/img/docpic/im2.jpg",alt:"drawing",width:"230"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:"/img/docpic/im3.jpg",alt:"drawing",width:"150"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:"/img/docpic/im4.jpg",alt:"drawing",width:"200"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:"/img/docpic/im5.jpg",alt:"drawing",width:"200"}))))))}u.isMDXComponent=!0}}]);