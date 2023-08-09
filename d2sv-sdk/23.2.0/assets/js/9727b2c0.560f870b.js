"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[1427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3.03,sidebar_label:"D2SV Custom Dialogs(D2FS) sample"},r="D2SV Custom Dialogs(D2FS) sample",s={unversionedId:"general/samples/3_03_custom_dialog",id:"general/samples/3_03_custom_dialog",title:"D2SV Custom Dialogs(D2FS) sample",description:"D2 Custom Dialog sample provide an option to modify the metadata for a document with any available properties page created in D2-Config.",source:"@site/articles/general/samples/3_03_custom_dialog.md",sourceDirName:"general/samples",slug:"/general/samples/3_03_custom_dialog",permalink:"/d2sv-sdk/23.2.0/general/samples/3_03_custom_dialog",draft:!1,tags:[],version:"current",sidebarPosition:3.03,frontMatter:{sidebar_position:3.03,sidebar_label:"D2SV Custom Dialogs(D2FS) sample"},sidebar:"general",previous:{title:"D2SV client to server logging",permalink:"/d2sv-sdk/23.2.0/general/samples/3_02_client_to_server_logging"},next:{title:"Custom Table Cell View",permalink:"/d2sv-sdk/23.2.0/general/samples/3_04_custom_table_cell"}},l={},d=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:4},{value:"Java Classes",id:"java-classes",level:6},{value:"Dialog form definition",id:"dialog-form-definition",level:6},{value:"Custom dialog menu configuration in back-end",id:"custom-dialog-menu-configuration-in-back-end",level:6},{value:"Dialog state method override",id:"dialog-state-method-override",level:6}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"d2sv-custom-dialogsd2fs-sample"},"D2SV Custom Dialogs(D2FS) sample"),(0,a.kt)("p",null,"D2 Custom Dialog sample provide an option to modify the metadata for a document with any available properties page created in D2-Config.\nAs out of the box, the document metadata can be modified only using the properties page which is resolved after configuration matrix against the context."),(0,a.kt)("p",null,"This sample shows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to define a D2 Dialog service plugin which implements ID2fsPlugin."),(0,a.kt)("li",{parentName:"ul"},"How to define a D2FS state method to make dialog chaining as context less. So that the last step Submit will be performed on OOTB property dialog service instead of original dialog service.")),(0,a.kt)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build the plugin using ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build")," from SDK workspace root."),(0,a.kt)("li",{parentName:"ul"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"D2SV-Custom-Dialogs-1.0.0.jar")," from 'dist' folder in workspace root and paste it inside ",(0,a.kt)("inlineCode",{parentName:"li"},"WEB-INF/lib")," folder of a deployed D2 Smartview application."),(0,a.kt)("li",{parentName:"ul"},"Restart application server on which D2 Smartview is deployed."),(0,a.kt)("li",{parentName:"ul"},"Open D2-Config web application in browser, login and then create few properties page configuration.")),(0,a.kt)("h3",{id:"source-code-structure"},"Source code structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"D2SV-Custom-Dialogs\n|   pom.xml\n|   \n+---src\n|   \\---main\n|       +---java\n|       |   \\---com\n|       |       +---emc\n|       |       |       D2PluginVersion.java\n|       |       |       \n|       |       \\---opentext\n|       |           \\---d2\n|       |               +---rest\n|       |               |   \\---context\n|       |               |       \\---jc\n|       |               |               PluginRestConfig_D2SVDialogs.java\n|       |               |               \n|       |               \\---smartview\n|       |                   \\---d2svdialogs\n|       |                       |   D2SVDialogsPlugin.java\n|       |                       |   \n|       |                       +---api\n|       |                       |       D2SVDialogsVersion.java\n|       |                       |       \n|       |                       +---dialogs\n|       |                       |       SelectivePropertyDisplay.java\n|       |                       |       \n|       |                       +---rest\n|       |                       |       package-info.java\n|       |                       |       \n|       |                       \\---webfs\n|       |                           \\---dialog\n|       |                                   D2DialogServicePlugin.java\n|       |                                   \n|       +---resources\n|       |   |   D2Plugin.properties\n|       |   |   d2svdialogs-version.properties\n|       |   |   \n|       |   +---smartview\n|       |   |       SmartView.properties\n|       |   |       \n|       |   +---strings\n|       |   |   +---dialog\n|       |   |   |   \\---SelectivePropertyDisplay\n|       |   |   |           SelectivePropertyDisplay_en.properties\n|       |   |   |           \n|       |   |   \\---menu\n|       |   |       \\---MenuContext\n|       |   |               MenuContext_en.properties\n|       |   |               \n|       |   \\---xml\n|       |       +---dialog\n|       |       |       SelectivePropertyDisplay.xml\n|       |       |       \n|       |       \\---unitymenu\n|       |               MenuContextDelta.xml\n|       |               \n|       \\---smartview\n|           |   .csslintrc\n|           |   .eslintrc-html.yml\n|           |   .eslintrc.yml\n|           |   .npmrc\n|           |   config-editor.js\n|           |   d2svdialogs.setup.js\n|           |   esmhelper.js\n|           |   Gruntfile.js\n|           |   package.json\n|           |   proxy.js\n|           |   server.conf.js\n|           |   server.js\n|           |   \n|           +---pages\n|           |   |   config-d2.js\n|           |   |   config-dev.js\n|           |   |   favicon.ico\n|           |   |   initialize.js\n|           |   |   loader.css\n|           |   |   otds.html\n|           |   |   \n|           |   +---debug\n|           |   |       app.html\n|           |   |       \n|           |   \\---release\n|           |           app.html\n|           |           \n|           +---src\n|           |   |   component.js\n|           |   |   config-build.js\n|           |   |   d2svdialogs-init.js\n|           |   |   extensions.json\n|           |   |   Gruntfile.js\n|           |   |   \n|           |   +---bundles\n|           |   |       d2svdialogs-bundle.js\n|           |   |       \n|           |   +---dialogs\n|           |   |   \\---d2fs\n|           |   |           context.less.d2fs.state.method.js\n|           |   |           \n|           |   +---extensions\n|           |   |       dialog.state.methods.js\n|           |   |       \n|           |   +---test\n|           |   |       extensions.spec.js\n|           |   |       \n|           |   \\---utils\n|           |       |   startup.js\n|           |       |   \n|           |       \\---theme\n|           |           |   action.icons.js\n|           |           |   \n|           |           \\---action_icons\n|           |                   action_sample_icon.svg\n|           |                   \n|           \\---test\n|                   Gruntfile.js\n|                   karma.js\n|                   test-common.js\n|                   \n\\---target\n")),(0,a.kt)("h4",{id:"files-and-their-purpose"},"Files and their purpose"),(0,a.kt)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,a.kt)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,a.kt)("h6",{id:"java-classes"},"Java Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/dialogs/SelectivePropertyDisplay.java - Dialog class which implements ID2Dialog to serve the dialog for selecting the properties page configuration."),(0,a.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/webfs/dialog/D2DialogServicePlugin.java - Dialog service class which implements ID2fsPlugin interface  for validating the dialog request.")),(0,a.kt)("h6",{id:"dialog-form-definition"},"Dialog form definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'src/main/resources/xml/dialog/SelectivePropertyDisplay.xml - Defines the form structure for rendering "SelectivePropertyDisplay" dialog. The same file will be processed in "src/main/java/com/opentext/d2/smartview/d2svdialogs/dialogs/SelectivePropertyDisplay.java"'),(0,a.kt)("li",{parentName:"ul"},"src/main/resources/strings/dialog/SelectivePropertyDisplay/SelectivePropertyDisplay_en.properties - Label associated with the dialog.")),(0,a.kt)("h6",{id:"custom-dialog-menu-configuration-in-back-end"},"Custom dialog menu configuration in back-end"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src/main/resources/strings/menu/MenuContext/MenuContext_en.properties - Labels associated with the dynamically configured menu."),(0,a.kt)("li",{parentName:"ul"},"src/main/resources/xml/unitymenu/MenuContextDelta.xml - The menu definition file that dynamically adds a new type(MenuContext) of menu for the D2FS ",(0,a.kt)("inlineCode",{parentName:"li"},"D2MenuService")," to discover and return for D2 Smartview.")),(0,a.kt)("h6",{id:"dialog-state-method-override"},"Dialog state method override"),(0,a.kt)("p",null,'As part of dialog state customization added extension for dialog state methods.\nThis state method will be resolved based on "SelectivePropertyDisplay" dialog name.\nIntension of having custom dialog state method to override the default behavior of dialog state.\nWith this override dialog state is decoupled between first form and second form. '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'src/main/smartview/src/dialogs/d2fs/context.less.d2fs.state.method.js - This is a client side JavaScript file extends "d2/sdk/controls/dialogs/generic/d2fs.state.method". Dialog context is decoupled by having dummy override for "setDialogContextForm()" method.'),(0,a.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions/dialog.state.methods.js - This file is having rule for resolving the dialog state method based on dialog name. "),(0,a.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions.json - Adding the rule for dialog.state.method.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "d2/sdk/controls/dialogs/generic/dialog.state.methods": {\n    "extensions": {\n      "d2svdialogs": [\n        "d2svdialogs/extensions/dialog.state.methods"\n      ]\n    }\n  }\n')))}u.isMDXComponent=!0}}]);