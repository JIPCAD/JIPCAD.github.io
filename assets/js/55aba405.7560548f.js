"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[7301],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=i,m=d["".concat(a,".").concat(p)]||d[p]||f[p]||l;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6777:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(7462),i=t(3366),l=(t(7294),t(3905)),o=["components"],c={sidebar_position:6},a="Including Files",s={unversionedId:"lang-ref/include-files",id:"lang-ref/include-files",isDocsHomePage:!1,title:"Including Files",description:"Allows a user to combine frequently used statements, such as specification of surface colors, in files that can then be included with a single-line command.",source:"@site/docs/lang-ref/include-files.md",sourceDirName:"lang-ref",slug:"/lang-ref/include-files",permalink:"/docs/lang-ref/include-files",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/lang-ref/include-files.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Rendering Specifications",permalink:"/docs/lang-ref/rendering"},next:{title:"Common Include Files",permalink:"/docs/common-include-files"}},u=[],f={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"including-files"},"Including Files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nom"},"include [file_name.nom] endinclude\n")),(0,l.kt)("p",null,"Allows a user to combine frequently used statements, such as specification of surface colors, in files that can then be included with a single-line command. ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Include does not work recursively; no included files can include files."),(0,l.kt)("li",{parentName:"ul"},"Including sliders is dicey; including a bank of useful sliders and referencing them in the outside file will cause a crash, but sliders used only for generators in the file in which they were defined sometimes works and sometimes do not."),(0,l.kt)("li",{parentName:"ul"},"Included files cannot be in a different directory from the model file. ",(0,l.kt)("br",null))),(0,l.kt)("p",null,"Included code can be thought of as written into the parent file at the point of appearance. This means if multiple files are included, the second included file can reference the first, and so on. This is especially useful when the first included file defines a list of surfaces and additional included files reference these surface."),(0,l.kt)("p",null,"For a list of common include files, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/common-include-files"},"the next page.")))}d.isMDXComponent=!0}}]);