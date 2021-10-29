"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[874],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return p}});var r=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=r.createContext({}),a=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=a(t.components);return r.createElement(s.Provider,{value:n},t.children)},f={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,u=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),l=a(e),p=o,_=l["".concat(s,".").concat(p)]||l[p]||f[p]||u;return e?r.createElement(_,i(i({ref:n},d),{},{components:e})):r.createElement(_,i({ref:n},d))}));function p(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var u=e.length,i=new Array(u);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var a=2;a<u;a++)i[a]=e[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}l.displayName="MDXCreateElement"},2478:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return d},default:function(){return l}});var r=e(7462),o=e(3366),u=(e(7294),e(3905)),i=["components"],c={sidebar_position:2},s="Developer Guide",a={unversionedId:"tutorial/developer",id:"tutorial/developer",isDocsHomePage:!1,title:"Developer Guide",description:"Built in C++",source:"@site/docs/tutorial/developer.md",sourceDirName:"tutorial",slug:"/tutorial/developer",permalink:"/docs/tutorial/developer",editUrl:"https://github.com/JIPCAD/NOME3/docs/tutorial/developer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/docs/tutorial/user"},next:{title:"Mac",permalink:"/docs/compiling/mac-compile"}},d=[{value:"Built in C++",id:"built-in-c",children:[],level:2}],f={toc:d};function l(t){var n=t.components,e=(0,o.Z)(t,i);return(0,u.kt)("wrapper",(0,r.Z)({},f,e,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"developer-guide"},"Developer Guide"),(0,u.kt)("h2",{id:"built-in-c"},"Built in C++"),(0,u.kt)("p",null,"Generators in the NOME3 Project are built in C++. A custom implementation of meshes, faces, and points based off of OpenMesh points and faces are used as the underlying data structures, and ANTLR4 is used to define and parse the proprietary NOME Language."),(0,u.kt)("p",null,"An example of a typical Generator File in C++:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cpp"},'DEFINE_META_OBJECT(CMobiusStrip)\n{\n    BindPositionalArgument(&CMobiusStrip::N, 1, 0);\n    BindPositionalArgument(&CMobiusStrip::Radius, 1, 1);\n    BindPositionalArgument(&CMobiusStrip::NumTwists, 1, 2);\n    BindPositionalArgument(&CMobiusStrip::NumCuts, 1, 3);\n}\n\nvoid CMobiusStrip::UpdateEntity()\n{\n    if (!IsDirty())\n        return;\n\n    Super::UpdateEntity();\n\n    // load in arguments to Mobius Strip generator\n    float n = (float)N.GetValue(100.0f); // number of individual points on each band\n    float radius = (float)Radius.GetValue(1.0f); // total radius\n    int numTwists = (int)ceil(NumTwists.GetValue(1.0f)); // number of twists\n    int numCuts = (int)ceil(NumCuts.GetValue(0.0f)); // number of times surface is cut\n    float bandwidth = 2*radius/((numCuts*2) + 1); // radius of each band\n\n    // create vertices\n    float uIncrement = (1.0f/n)*(float)tc::M_PI;\n    int uCounter = 0;\n    for (float u = 0.0f; u < 2.f * (float)tc::M_PI + uIncrement/3; u += uIncrement)\n    { // uIncrement/3 allows n+1 total vertices, accounting for rounding error (n+1th vertex == 0th vertex)\n        int vCounter = 0;\n        for (float v = -1*radius; v <= radius + bandwidth/3; v += bandwidth)\n        { // bandwidth/3 accounts for rounding error\n            float x = (1+(v/2.0f)*cosf((numTwists*u)/2.0f))*cosf(u);\n            float y = (1+(v/2.0f)*cosf((numTwists*u)/2.0f))*sinf(u);\n            float z = (v/2.0f)*sinf((numTwists*u)/2.0f);\n            AddVertex("v_" + std::to_string(uCounter) + "_" + std::to_string(vCounter), // name ex. "v_0_5"\n                      { x, y, z } );\n\n\n            AddVertex("vt_" + std::to_string(uCounter) + "_" + std::to_string(vCounter), // name ex. "vt_0_5"\n                      { x, y, z + (radius/10) } );\n\n            vCounter++;\n        }\n        uCounter++;\n    }\n\n    // add faces\n    for (int uFaceCounter = 0; uFaceCounter + 1 < uCounter; uFaceCounter++)\n    {\n        for (int cut = 0; cut <= numCuts; cut++)\n        {\n            std::vector<std::string> face;\n            face.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut)); //2*cut\n            face.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            face.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1)); //2*cut+1\n            face.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            AddFace("f1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), face);\n\n            std::vector<std::string> facet;\n            facet.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut)); //2*cut\n            facet.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            facet.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1)); //2*cut+1\n            facet.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            AddFace("ft1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), facet);\n\n            std::vector<std::string> faceconnect1;\n            faceconnect1.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut));\n            faceconnect1.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            faceconnect1.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut));\n            faceconnect1.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut));\n            AddFace("fc1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), faceconnect1);\n\n            std::vector<std::string> faceconnect2;\n            faceconnect2.push_back("v_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            faceconnect2.push_back("v_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1));\n            faceconnect2.push_back("vt_" + std::to_string(uFaceCounter + 1) + "_" + std::to_string(2*cut+1));\n            faceconnect2.push_back("vt_" + std::to_string(uFaceCounter) + "_" + std::to_string(2*cut+1));\n            AddFace("fcc1_" + std::to_string(uFaceCounter) + "_" + std::to_string(cut), faceconnect2);\n        }\n    }\n}\n')))}l.isMDXComponent=!0}}]);