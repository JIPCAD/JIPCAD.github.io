"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[1869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Mac",l={unversionedId:"compiling/mac",id:"compiling/mac",title:"Mac",description:"This is a quick setup for new students working on JIPCAD on Mac. If the below instructions do not work, please also look at the mini guide Toby Chen recently wrote//github.com/cyj0912/Nome3/wiki (which also contains Fedora, Ubuntu, and macOS homebrew commands), or ask an experienced macOS JIPCAD member.",source:"@site/docs/compiling/mac.md",sourceDirName:"compiling",slug:"/compiling/mac",permalink:"/docs/compiling/mac",draft:!1,editUrl:"https://github.com/JIPCAD/JIPCAD/docs/compiling/mac.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/docs/tutorial/developer"},next:{title:"Windows",permalink:"/docs/compiling/windows"}},s={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Compile",id:"compile",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mac"},"Mac"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a quick setup for new students working on JIPCAD on Mac. If the below instructions do not work, please also look at the mini guide Toby Chen recently wrote: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cyj0912/Nome3/wiki"},"https://github.com/cyj0912/Nome3/wiki")," (which also contains Fedora, Ubuntu, and macOS homebrew commands), or ask an experienced macOS JIPCAD member.")),(0,r.kt)("p",null,"Go to your desired repository in your terminal and run the following command to add all the JIPCAD files and required submodules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/JIPCAD/JIPCAD\n")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"JIPCAD requires the most recent version of its dependencies so run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install qt5\nbrew install open-mesh\nbrew install pugixml\nbrew install cmake\nbrew install opensubdiv\n")),(0,r.kt)("p",null,"You'll also need to download: ANTLR parser generator (",(0,r.kt)("a",{parentName:"p",href:"https://www.antlr.org/download/antlr-4.8-complete.jar"},"https://www.antlr.org/download/antlr-4.8-complete.jar"),"). Zachary informed me you can just do ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install antlr"),", and that should work. Make sure to install Java as well."),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("p",null,"To compile JIPCAD, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd JIPCAD\nmkdir build && cd build\ncmake .. && make\n")),(0,r.kt)("p",null,"The above commands will create a build folder, and compile and make JIPCAD. This may take a few minutes so wait until the make has completed. Once it has completed, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"build/Application/Binaries"),". In the Binaries folder there should be a JIPCAD executable. Run this program and it will open up an ",(0,r.kt)("inlineCode",{parentName:"p"},"untitled.nom")," preview. From the menu bar at the top of your screen run ",(0,r.kt)("inlineCode",{parentName:"p"},"File/Open")," and select the .nom file you would like to run. You will now be able to see your .nom instance in a 3-D display!"),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Most likely, CMake is going to complain about 'Could NOT find ANTLR (missing: ANTLR_EXECUTABLE)'. If this happens, you just need to manually set ",(0,r.kt)("inlineCode",{parentName:"p"},"ANTLR_EXECUTABLE=<path to antlr-4.8-complete.jar>"),". You can either manually edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeCache.txt")," file under your build directory, or pass it as a command line argument to CMake. I think the command line argument is just ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake JIPCAD -D ANTLR_EXECUTABLE=<path to antlr-4.8-complete.jar>"),"."),(0,r.kt)("p",null,"If you still get an error related to ANTLR, first make sure the file path is correct. Then, copy paste this file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JIPCAD/JIPCAD/blob/master/CMake/Modules/ExternalAntlr4Cpp.cmake"},"https://github.com/JIPCAD/JIPCAD/blob/master/CMake/Modules/ExternalAntlr4Cpp.cmake")," into your ExternalAntlr4Cpp.cmake."),(0,r.kt)("p",null,"Upon your first run of CMake, it may complain about 'Foundation does not contain a CMakeLists.txt file.' This is because when you clone the repository, git does not by default clone all the submodules, so the Foundation subfolder is empty by default. You can either re-clone the repo with ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone --recursive")," or run ",(0,r.kt)("inlineCode",{parentName:"p"},"git submodule update --init --recursive"),". If you have further questions, read the top portion of this short tutorial on git submodules - ",(0,r.kt)("a",{parentName:"p",href:"https://www.vogella.com/tutorials/GitSubmodules/article.html"},"https://www.vogella.com/tutorials/GitSubmodules/article.html"),"."))}m.isMDXComponent=!0}}]);