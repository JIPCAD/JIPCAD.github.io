"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[3650],{7731:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>r,toc:()=>s,default:()=>c});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:2},l="Windows",r={unversionedId:"compiling/windows",id:"compiling/windows",isDocsHomePage:!1,title:"Windows",description:"NOME can be downloaded as a simple zip file instead of compiling the codebase on Windows! here",source:"@site/docs/compiling/windows.md",sourceDirName:"compiling",slug:"/compiling/windows",permalink:"/docs/compiling/windows",editUrl:"https://github.com/JIPCAD/JIPCAD/docs/compiling/windows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mac",permalink:"/docs/compiling/mac"},next:{title:"Linux",permalink:"/docs/compiling/linux"}},s=[{value:"NOME can be downloaded as a simple zip file instead of compiling the codebase on Windows! here",id:"nome-can-be-downloaded-as-a-simple-zip-file-instead-of-compiling-the-codebase-on-windows-here",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[{value:"Qt Installation",id:"qt-installation",children:[],level:3}],level:2},{value:"Compile",id:"compile",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],p={toc:s};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows"},"Windows"),(0,a.kt)("h3",{id:"nome-can-be-downloaded-as-a-simple-zip-file-instead-of-compiling-the-codebase-on-windows-here"},"NOME can be downloaded as a simple zip file instead of compiling the codebase on Windows! ",(0,a.kt)("a",{parentName:"h3",href:"/download"},"here")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"This section will walk you through the steps for setting up a build environment for JIPCAD on Windows. Here is a list of the required dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visual Studio 2019 (",(0,a.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"https://visualstudio.microsoft.com/"),")"),(0,a.kt)("li",{parentName:"ul"},"CMake"),(0,a.kt)("li",{parentName:"ul"},"Qt 5"),(0,a.kt)("li",{parentName:"ul"},"OpenMesh"),(0,a.kt)("li",{parentName:"ul"},"ANTLR parser generator (",(0,a.kt)("a",{parentName:"li",href:"https://www.antlr.org/download/antlr-4.8-complete.jar"},"https://www.antlr.org/download/antlr-4.8-complete.jar"),")"),(0,a.kt)("li",{parentName:"ul"},"Java")),(0,a.kt)("p",null,"To make your life easier, there are a few package management software on Windows that I would personally recommend:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scoop (We need this for cmake)"),(0,a.kt)("li",{parentName:"ul"},"Vcpkg (We need this for OpenMesh and Qt5)")),(0,a.kt)("p",null,"Please install ",(0,a.kt)("strong",{parentName:"p"},"Visual Studio")," first, as it is necessary for any C++ development work on Windows. Then you can install ",(0,a.kt)("strong",{parentName:"p"},"scoop")," and ",(0,a.kt)("strong",{parentName:"p"},"vcpkg"),"; Scoop installation instructions are here: ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"https://scoop.sh/"),", and vcpkg instructions are here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg"},"https://github.com/microsoft/vcpkg")," (just run git clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg"},"https://github.com/microsoft/vcpkg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".\\vcpkg\\bootstrap-vcpkg.bat")," first. You'll install the needed packages below). It should be straightforward. Go ahead and spend a few minutes playing with each package management tool. Please read this: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cpp/build/vcpkg?view=msvc-160"},"https://docs.microsoft.com/en-us/cpp/build/vcpkg?view=msvc-160"),". They will save you tons of time trying to pull together different C++ libraries, potentially in the future. Now you might be wondering why we need two different package managers. So I will explain: ",(0,a.kt)("strong",{parentName:"p"},"scoop")," deals with applications, such as CMake and Python; ",(0,a.kt)("strong",{parentName:"p"},"vcpkg")," is a C++ dependency manager from Microsoft that goes together with Visual Studio, and it concerns with libraries that we can ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," from our own code."),(0,a.kt)("p",null,"Now hopefully you are familiar with those package managers. Run the following commands (potentially in different directories depending on where you installed each package manager) to install what we need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install cmake\nvcpkg --triplet x64-windows install openmesh\nvcpkg --triplet x64-windows install opensubdiv\nvcpkg --triplet x64-windows install pugixml\ngit clone --recursive https://github.com/JIPCAD/JIPCAD\n")),(0,a.kt)("p",null,(0,a.kt)("del",{parentName:"p"},"vcpkg --triplet x64-windows install qt5-base qt5-3d")," (Update 12/21/2020: the most recent qt5 package, 5.15 as of 12/21, is no longer compatible with JIPCAD. Please read Qt installation below.)"),(0,a.kt)("h3",{id:"qt-installation"},"Qt Installation"),(0,a.kt)("p",null,"Unfortunately, the more recent qt5 packages are not compatible with JIPCAD on Windows (Qt 5.15 is confirmed to not work, and I assume the newer ones, if any, may not work also). Vcpkg essentially forces users to install the most recent version of any package (there is a way to bypass this, but it is a bit of a headache), so we can't use vcpkg to install qt5. Thus, as a temporary solution, let's download Qt directly from the Qt website."),(0,a.kt)("p",null,"To fix this, please download Qt directly:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.qt.io/download"},"https://www.qt.io/download")),(0,a.kt)("li",{parentName:"ol"},'Click on "Go open source" , which leads to: ',(0,a.kt)("a",{parentName:"li",href:"https://www.qt.io/download-open-source?hsCtaTracking=9f6a2170-a938-42df-a8e2-a9f0b1d6cdce%7C6cb0de4f-9bb5-4778-ab02-bfb62735f3e5"},"https://www.qt.io/download-open-source?hsCtaTracking=9f6a2170-a938-42df-a8e2-a9f0b1d6cdce%7C6cb0de4f-9bb5-4778-ab02-bfb62735f3e5")),(0,a.kt)("li",{parentName:"ol"},'Scroll down and click "Download the Qt Online Installer"'),(0,a.kt)("li",{parentName:"ol"},"Download the installer and run it"),(0,a.kt)("li",{parentName:"ol"},'Follow the setup instructions,  which will require you to create a Qt account if I recall correctly. When you to "Select Components" page, please select the following. We choose to install Qt 5.12.5 since it works w/ JIPCAD (',(0,a.kt)("strong",{parentName:"li"},"this is a very important step"),"):")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"very important",src:o(4944).Z})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Click next and complete installation. Qt should be ~40gb, so make sure you have enough storage space."),(0,a.kt)("li",{parentName:"ol"},"Done, move on to compilation")),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("p",null,"Open up the CMake GUI, and set it up like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7234).Z})),(0,a.kt)("p",null,'Then click on "Add Entry" to add the following variables so that CMake can find all those libraries:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"CMAKE_TOOLCHAIN_FILE = <Vcpkg dir>/scripts/buildsystems/vcpkg.cmake\nCMAKE_INSTALL_PREFIX = <Qt cmake filepath>\n")),(0,a.kt)("p",null,"For the Qt CMake filepath, in my case it is ",(0,a.kt)("inlineCode",{parentName:"p"},"C:/Qt/5.12.5/msvc2017_64/lib/cmake")," to give you an example. This environment variable CMAKE_PREFIX_PATH is needed so that CMake knows where to look for Qt"),(0,a.kt)("p",null,'Now you can click on "Configure" and "Generate" to generate a Visual Studio solution file and open it with Visual Studio. Then, click Build Solution, and a NOME3.exe should appear in the Build directory.'),(0,a.kt)("p",null,"This an example of running a simple cube .nom instance after following the steps above:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5525).Z})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you get an error involving ANTLR, first make sure the file path is correct. Then, copy paste this file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JIPCAD/JIPCAD/blob/master/CMake/Modules/ExternalAntlr4Cpp.cmake"},"https://github.com/JIPCAD/JIPCAD/blob/master/CMake/Modules/ExternalAntlr4Cpp.cmake")," into your ExternalAntlr4Cpp.cmake."),(0,a.kt)("p",null,"If you run into an issue with windeployqt.exe, make sure CMake was able to find it. Try providing the path manually."),(0,a.kt)("p",null,"Upon your first run of CMake, it may complain about Foundation does not contain a CMakeLists.txt file. This is because when you clone the repository, git does not by default clone all the submodules, so the Foundation subfolder is empty by default. You can either re-clone the repo with ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone --recursive")," or run ",(0,a.kt)("inlineCode",{parentName:"p"},"git submodule update --init --recursive"),". If you have further questions, read the top portion of this short tutorial on git submodules - ",(0,a.kt)("a",{parentName:"p",href:"https://www.vogella.com/tutorials/GitSubmodules/article.html"},"https://www.vogella.com/tutorials/GitSubmodules/article.html"),"."),(0,a.kt)("p",null,"If you receive  /bigobj error message due to exprtk.hpp, please follow the following instructions: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/ms173499(v=vs.90)"},"https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/ms173499(v=vs.90)")))}c.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7234:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/NomeConfig-17c8fc62096aefcb263bad038ae3ec15.jpg"},4944:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/QtSetupSnip-e5e5713556fd34ecddb9c3c11f4a8241.png"},5525:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hellocube-70cd218803ac8f0e55ee6ea7e7ef84b3.png"}}]);