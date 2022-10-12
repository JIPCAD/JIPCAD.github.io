"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[17],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7590:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>o,metadata:()=>l,toc:()=>s,default:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},o="Scene Graph & Geometric Manipulation",l={unversionedId:"lang-ref/manipulation",id:"lang-ref/manipulation",isDocsHomePage:!1,title:"Scene Graph & Geometric Manipulation",description:"Instance",source:"@site/docs/lang-ref/manipulation.md",sourceDirName:"lang-ref",slug:"/lang-ref/manipulation",permalink:"/docs/lang-ref/manipulation",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/lang-ref/manipulation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Rendering Specifications",permalink:"/docs/lang-ref/rendering"},next:{title:"Q&A",permalink:"/docs/Q&A"}},s=[{value:"Instance",id:"instance",children:[],level:2},{value:"Group",id:"group",children:[],level:2},{value:"Subdivision",id:"subdivision",children:[],level:2},{value:"Offset",id:"offset",children:[],level:2}],p={toc:s};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scene-graph--geometric-manipulation"},"Scene Graph & Geometric Manipulation"),(0,a.kt)("h2",{id:"instance"},"Instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"instance name object \n    [rotate (rx ry rz){in degrees} ] [scale (sx sy sz)] [translate (tx ty tz)]\n    [surface surface_id] [LOD LOD_type] [shading shading_type]\nendinstance\n")),(0,a.kt)("p",null,"Creates an instance of geometry. One can optionally rotate, scale, translate the instance and specify its color, level-of-detail (LOD), and rendering mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object"),": the name of the primitive, generator, or group that will be instantiated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"surface_id"),": a specified (RGB) surface color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOD_type"),": defined types:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_OFF")," {not rendered}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_BOUND")," {render only the bounding box of this subtree}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_EDGES")," {render this subtree in wireframe mode} "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_FULL")," {fully render this subtree)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shading_type"),": defined types: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_INHERIT")," {Shade this node in the same style as its parent}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_WIRE")," {render as a wireframe}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_FLAT")," {render with flat shading: one color per polygon}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_GOURAUD")," {render with Gouraud shading: interpolate vertex colors across each polygon}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_PHONG")," {render with Phong shading:  interpolate vertexnormals across each polygon and recompute lighting at each pixel}")))),(0,a.kt)("h2",{id:"group"},"Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"group id\n    instance id1 object_id1 [instance_parameters] endinstance\n    ...\n    instance idN object_idN [instance_parameters] endinstance\nendgroup\n")),(0,a.kt)("p",null,"Defines a collection of instances of primitive objects or other groups. Groups are the most general construct to introduce hierarchy into a model description."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": the name of the instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object_id"),": the name of the object to be instantiated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[instance_parameters]"),": all the optional parameters discussed above.")),(0,a.kt)("h2",{id:"subdivision"},"Subdivision"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subdivision id\n    [sd_type sd_flag]\n    sd_level\n    instance id1 object_id1 [xform & color] endinstance\n    ...\n    instance idN object_idN [xform & color] endinstance\nendsubdivision\n")),(0,a.kt)("p",null,"Subdivides a merged mesh into smaller facets. (Alternatively, can perform subdivision in the GUI: ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit >> Subdivide"),".)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sd_flag"),": the type of subdivision algorithm used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_SD_CatmullClark"),":  the plain and simple CC subdivision"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_SD_CC_sharp"),":  CC subdivision respecting \u201csharp\u201d flags in the mesh."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sd_level"),": the integer number of iterated subdivision steps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[xform & color]"),": the optional parameters relating to transformations and coloring.")),(0,a.kt)("h2",{id:"offset"},"Offset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"offset id\n    [offset_type offset_flag]\n    height\n    width\n    instance id1 object_id1 [xform & color] endinstance\n    ...\n    instance idN object_idN [xform & color] endinstance\nendoffset\n")),(0,a.kt)("p",null,"Thickens a surface mesh of zero thickness into a thicker B-rep that can be 3D-printed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"offset_flag"),": the type of thickened surface generated:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_OFFSET_DEFAULT"),": This offsets the starting mesh inward and outward symmetrically.  Each facet in the originalmesh maps to two facets in the offset mesh; one of them with reversed orientation.  Each boundary edge of an openpolyhedron will map to a quadrilateral facet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOME_OFFSET_GRID"),": The edges of the starting mesh are viewed as thin wires which are then thickened into 4-sided prismsegments. This is different from \u201cgridding\u201d the original mesh, where the openings in each facet are a given fraction ofthe facet geometry."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height"),": the half-thickness of the generated surface normal to the original facets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width"),":  the width of the prismatic beams in the tangential direction of each facet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[xform & color]"),":  the optional parameters relating to transformations and coloring.")))}d.isMDXComponent=!0}}]);