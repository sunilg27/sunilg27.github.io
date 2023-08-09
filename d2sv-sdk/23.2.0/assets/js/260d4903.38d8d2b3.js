"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Understanding D2SV plugin project"},o="Understanding D2SV plugin project",s={unversionedId:"general/understand.d2sv.plugin",id:"general/understand.d2sv.plugin",title:"Understanding D2SV plugin project",description:"Each D2SV plugin project is a hybrid Maven + NodeJS project having some Java, Javascript and a few static resources as part of",source:"@site/articles/general/understand.d2sv.plugin.md",sourceDirName:"general",slug:"/general/understand.d2sv.plugin",permalink:"/d2sv-sdk/23.2.0/general/understand.d2sv.plugin",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Understanding D2SV plugin project"},sidebar:"general",previous:{title:"D2FS REST services developer guide",permalink:"/d2sv-sdk/23.2.0/general/rest.developer.guide"},next:{title:"Where to start?",permalink:"/d2sv-sdk/23.2.0/general/where.to.start"}},l={},p=[{value:"Plugin project layout",id:"plugin-project-layout",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"understanding-d2sv-plugin-project"},"Understanding D2SV plugin project"),(0,a.kt)("p",null,"Each D2SV plugin project is a hybrid Maven + NodeJS project having some Java, Javascript and a few static resources as part of\nits source code. On the outer side, the source code is organized in a Maven project layout and an additional source directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/smartview"),"\nis used to house Javascript source code and directory follows an NPM project structure."),(0,a.kt)("p",null,"Here we list the directories and files found in a bare-minimum project and outline their purpose. For the purpose of listing, we create a new plugin\nproject by following -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")," in the workspace root directory to fire up the ",(0,a.kt)("a",{parentName:"li",href:"./ws_assistant/2_00_ws_overview"},"Workspace Assistant")),(0,a.kt)("li",{parentName:"ul"},"Select option ",(0,a.kt)("strong",{parentName:"li"},"Create a new plugin project")),(0,a.kt)("li",{parentName:"ul"},"Answer the follow-up questions as -",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Directory name to save this plugin project in: ",(0,a.kt)("strong",{parentName:"li"},"plugins")),(0,a.kt)("li",{parentName:"ul"},"Maven group-id of the plugin: ",(0,a.kt)("strong",{parentName:"li"},"com.opentext.d2.smartview")),(0,a.kt)("li",{parentName:"ul"},"Name(maven artifact-id) of the plugin: ",(0,a.kt)("strong",{parentName:"li"},"D2SV-TEST")),(0,a.kt)("li",{parentName:"ul"},"Version of the plugin: ",(0,a.kt)("strong",{parentName:"li"},"1.0.0")),(0,a.kt)("li",{parentName:"ul"},"One liner description of the plugin(shows up everywhere in D2 runtime): ",(0,a.kt)("strong",{parentName:"li"},"D2SV-TEST")),(0,a.kt)("li",{parentName:"ul"},"Enter package namespace for the plugin(used as prefix/suffix to generate Java classes & properties, also its lowercase format is used as base Java package\nname for the plugin & D2SV UI bundle): ",(0,a.kt)("strong",{parentName:"li"},"D2SVTEST")),(0,a.kt)("li",{parentName:"ul"},"Include support for D2SV UI: ",(0,a.kt)("strong",{parentName:"li"},"Yes"))))),(0,a.kt)("p",null,"After the assistant runs successfully, it would create a new plugin project in ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/D2SV-TEST")," directory."),(0,a.kt)("h3",{id:"plugin-project-layout"},"Plugin project layout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"D2SV-TEST\n|\n|   pom.xml\n|   \n+---src\n|   \\---main\n|       +---java\n|       |   \\---com\n|       |       +---emc\n|       |       |       D2PluginVersion.java\n|       |       |       \n|       |       \\---opentext\n|       |           \\---d2\n|       |               +---rest\n|       |               |   \\---context\n|       |               |       \\---jc\n|       |               |               PluginRestConfig_D2SVTEST.java\n|       |               |               \n|       |               \\---smartview\n|       |                   \\---d2svtest\n|       |                       |   D2SVTESTPlugin.java\n|       |                       |   \n|       |                       +---api\n|       |                       |       D2SVTESTVersion.java\n|       |                       |       \n|       |                       \\---rest\n|       |                               package-info.java\n|       |                               \n|       +---resources\n|       |   |   D2Plugin.properties\n|       |   |   d2svtest-version.properties\n|       |   |   \n|       |   \\---smartview\n|       |           SmartView.properties\n|       |           \n|       \\---smartview\n|           |   .csslintrc\n|           |   .eslintrc-html.yml\n|           |   .eslintrc.yml\n|           |   .npmrc\n|           |   config-editor.js\n|           |   d2svtest.setup.js\n|           |   esmhelper.js\n|           |   Gruntfile.js\n|           |   package.json\n|           |   proxy.js\n|           |   server.conf.js\n|           |   server.js\n|           |   \n|           +---lib (shortcut to javascript & java libraries)\n|           +---node_modules (shortcut to NPM based dependencies used to build/serve the Javascript portion of code)\n|           |           \n|           +---pages\n|           |   |   config-d2.js\n|           |   |   config-dev.js\n|           |   |   favicon.ico\n|           |   |   initialize.js\n|           |   |   loader.css\n|           |   |   otds.html\n|           |   |   redirect.html\n|           |   |   \n|           |   +---debug\n|           |   |       app.html\n|           |   |       \n|           |   \\---release\n|           |           app.html\n|           |           \n|           +---src\n|           |   |   component.js\n|           |   |   config-build.js\n|           |   |   d2svtest-init.js\n|           |   |   extensions.json\n|           |   |   Gruntfile.js\n|           |   |   \n|           |   +---bundles\n|           |   |       d2svtest-bundle.js\n|           |   |       \n|           |   +---test\n|           |   |       extensions.spec.js\n|           |   |       \n|           |   \\---utils\n|           |       |   startup.js\n|           |       |   \n|           |       \\---theme\n|           |           |   action.icons.js\n|           |           |   \n|           |           \\---action_icons\n|           |                   action_sample_icon.svg\n|           |                   \n|           \\---test\n|                   Gruntfile.js\n|                   karma.js\n|                   test-common.js\n|                   \n\\---target\n")),(0,a.kt)("h3",{id:"files-and-their-purpose"},"Files and their purpose"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pom.xml - Maven build file. Used to build the plugin from source code to its distributable format."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java/")," - Directory containing all Java source code"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"com/emc/D2PluginVersion.java - Declares identification information for the entire plugin using ",(0,a.kt)("inlineCode",{parentName:"li"},"D2SVTESTVersion")," class."),(0,a.kt)("li",{parentName:"ul"},"com/opentext/d2/rest/context/jc/PluginRestConfig_D2SVTEST.java - Java configuration for spring components like Beans, Interceptor, Filter etc. This class also\ndeclares a component scanner for Spring runtime to automatically load REST Controller and related components."),(0,a.kt)("li",{parentName:"ul"},"com/opentext/d2/smartview/d2svtest/D2SVTESTPlugin.java - Declares a blanket plugin. Additional code could be put inside this class to implement any functional\nservice plugin."),(0,a.kt)("li",{parentName:"ul"},"com/opentext/d2/smartview/d2svtest/api/D2SVTESTVersion.java - Holder for plugin identification information. Loads relevant data from ",(0,a.kt)("inlineCode",{parentName:"li"},"d2svtest-version.properties")," file resource."),(0,a.kt)("li",{parentName:"ul"},"com/opentext/d2/smartview/d2svtest/rest/package-info.java - Declares package metadata for JDK and IDE."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/")," - Directory containing all plugin related metadata and other static resources"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"smartview/SmartView.properties - Descriptor for D2SV UI runtime. Content of this file is read by D2SV UI runtime and appropriate UI artifacts from this plugin are discovered and linked\nto the UI.",(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This file won't be present for the plugins where Smartview UI support is not enabled.")),(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Changing content of this file will bring about runtime incompatibility and the UI artifacts will never get discovered by D2SV UI runtime."))),(0,a.kt)("li",{parentName:"ul"},"D2Plugin.properties - Another descriptor for D2SV plugin system to identify this plugin separately from other plugins deployed in the same runtime. Content of this file is\ninterpreted as a uniqueue namespace identifier.",(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Changing content of this file will lose the namespace convention used throughout the source code and makes this plugin unmanageable by the SDK as well as D2SV runtime."))),(0,a.kt)("li",{parentName:"ul"},"d2svtest-version.properties - Contains name, version and base package for Java classes defined by this plugin. This file is read by ",(0,a.kt)("inlineCode",{parentName:"li"},"D2SVTESTVersion")," class and supplies\nthe metadata information to D2SV plugin system.",(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Changing content of this file may render D2SV runtime to correctly load class files from the deployed plugin jar."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"src/main/smartview/")," - Home of the NPM project that represents the Javascript and related source code for D2SV UI."),(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Even though the source code here is layed out as an NPM project but you should never execute ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command in this\ndirectory. Doing so will completely break the setup as the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder is a softlinked directory and managed by\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," from SDK workspace root.")),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If for some reason an additional NPM based dependency is required for a plugins UI code, the dependency should be added in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," from\nSDK workspace root, subsequently followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command execution in the workspace root directory itself. After that the plugin specific\nJavascript code can refer to it in usual manner.")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lib")," - Shortcut to the ",(0,a.kt)("inlineCode",{parentName:"li"},"lib")," directory from SDK workspace root. The directory hosts all D2SV UI dependency libraries, that are used while running the Javascript only portion through a NodeJS light-server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," - Shortcut to the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory from SDK workspace root. The directory hosts all NPM packages used to test, build the Javascript source code and pack those into distributable format, besides\nserving them through NodeJS server for debugging/testing purposes."),(0,a.kt)("li",{parentName:"ul"},"pages/debug/app.html -  HTML page used to run the application with as-is source code using NodeJS server."),(0,a.kt)("li",{parentName:"ul"},'pages/release/app.html - HTML page used to run the application with "built" source code using NodeJS server.'),(0,a.kt)("li",{parentName:"ul"},"pages/config-d2.js - Primary ",(0,a.kt)("inlineCode",{parentName:"li"},"RequireJS")," configuration used to run the application using NodeJS server."),(0,a.kt)("li",{parentName:"ul"},"pages/config-dev.js - Additional ",(0,a.kt)("inlineCode",{parentName:"li"},"RequireJS")," configuration to run the application using NodeJS server."),(0,a.kt)("li",{parentName:"ul"},"pages/favicon.ico - Tab icon for the browser to use while accessing the application started using NodeJS server."),(0,a.kt)("li",{parentName:"ul"},"pages/initialize.js - Primary Javascript loaded by the HTML pages to kick-off the bootstrapping of application."),(0,a.kt)("li",{parentName:"ul"},"pages/loader.css - Basic styling using during bootstrap phase of the application."),(0,a.kt)("li",{parentName:"ul"},"pages/otds.html - Token capturer page used when the back-end is configured with OTDS for authentication."),(0,a.kt)("li",{parentName:"ul"},"config-editor.js - Temporary RequireJS configuration override file used while building the UI code."),(0,a.kt)("li",{parentName:"ul"},"d2svtest.setup.js - NodeJS module to setup/re-instate the directory softlinks for ",(0,a.kt)("inlineCode",{parentName:"li"},"lib")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),"."),(0,a.kt)("li",{parentName:"ul"},"esmhelper.js - ESM to AMD conversion helper used while running the application using NodeJS server."),(0,a.kt)("li",{parentName:"ul"},"Gruntfile.js - Master task definition file used by ",(0,a.kt)("inlineCode",{parentName:"li"},"Grunt")," while testing/building the source code."),(0,a.kt)("li",{parentName:"ul"},"package.json - NPM package manifest for the UI code."),(0,a.kt)("li",{parentName:"ul"},"proxy.js - Creates local equivalent of a foreign URL through HTTP proxy."),(0,a.kt)("li",{parentName:"ul"},"server.conf.js - Lets configure the remote URL to use as back-end while serving the application through NodeJS."),(0,a.kt)("li",{parentName:"ul"},"server.js - Javascript module to spawn a NodeJS server that supplies D2SV application to the browser."),(0,a.kt)("li",{parentName:"ul"},".csslintrc - Linter rules for CSS files. Used to validate if all CSS source files meet D2SV standard."),(0,a.kt)("li",{parentName:"ul"},".eslintrc.yml - Linter rules for Javascript files. Used to validate if all JS source code meet D2SV standard."),(0,a.kt)("li",{parentName:"ul"},".eslintrc-html.yml - Linter rules for HTML & HBS(Handlebars HTML template) files. Used to validate if matching source files meet D2SV standard."),(0,a.kt)("li",{parentName:"ul"},".npmrc - Local NPM configuration, used by NodeJS engine before running any NPM/NodeJS scripts.",(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All these HTML, JS, JSON, CSS etc files are not part of the actual plugin source code. Some of them facilitate build, test, packaging of the actual\nsource code whereas, others enable serving the entire front-end of D2SV application including this plugin and connects it to a remote back-end\nfor testing/debugging purposes. Any of these files should not be modified."))),(0,a.kt)("li",{parentName:"ul"},"src/bundles/d2svtest-bundle.js - Plugin UI bundle, it must contain direct/indirect reference to all AMD modules defined in this plugin so that they are correctly packaged during build.",(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"AMD modules, that are referred by atleast one other AMD module through ",(0,a.kt)("inlineCode",{parentName:"p"},"define()"),", are called statically referred modules. Dynamically referred AMD modules are\nnever referred by any other module using ",(0,a.kt)("inlineCode",{parentName:"p"},"define()")," rather they are referred only through ",(0,a.kt)("inlineCode",{parentName:"p"},"require()"),". The UI bundle must contain direct reference to all dynamically referred modules.\nIt's very important to know that for an entry, all other statically referred modules from that module are automatically added e.g. suppose, A statically refers to B and that statically refers to C but C dynamically refers to D,\nin this scenario, you should put an entry for A and an entry for C to completely refer all the modules A, B, C, D."))),(0,a.kt)("li",{parentName:"ul"},"src/test/extensions.spec.js - Sample unit test. Shows how to write unit tests for each JS module in this plugin."),(0,a.kt)("li",{parentName:"ul"},"src/utils/theme/action_icons/action_sample_icon.svg - A sample icon resource, could be used to represent a menu action. To know more about\naction icons and how to use them in UI refer to ",(0,a.kt)("a",{parentName:"li",href:"./howto/1_05_use_icons"},"Use icons in D2SV")),(0,a.kt)("li",{parentName:"ul"},"src/utils/theme/action.icons.js - Holder of all the action icons. This file is auto-generated everytime\nthe UI code is being built. ",(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"After adding a new svg file in ",(0,a.kt)("inlineCode",{parentName:"p"},"action_icons")," directory, you need to build the UI code once to re-generate this\nholder file."))),(0,a.kt)("li",{parentName:"ul"},"src/utils/startup.js - Hooks to D2SV application startup phase. Generally used to run additional\ncustom logic that has to happen during the startup i.e before any of the UI components starts to render on the page.\nProvides two hook points, namely ",(0,a.kt)("inlineCode",{parentName:"li"},"beforeStartup()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"afterStartup()")," their purpose is pretty much self explanatory."),(0,a.kt)("li",{parentName:"ul"},"src/component.js - Declares the UI bundles in this plugin. Used while building the UI code as well as used\nby ",(0,a.kt)("inlineCode",{parentName:"li"},"esmhelper.js")," while serving the code through NodeJS server. This file normally wouldn't require any change unless the UI source code\ndeclares a RequireJS plugin.",(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"At this time only one UI bundle per D2SV plugin is supported by the runtime. So you must not try to split the ",(0,a.kt)("inlineCode",{parentName:"p"},"d2svtest-bundle.js")," file into multiple\nsmaller bundles."))),(0,a.kt)("li",{parentName:"ul"},"src/config-build.js - RequireJS configuration used while building the UI code. This file is auto-generated\nevery time the UI code is being built. So any changes done to this file gets automatically discarded."),(0,a.kt)("li",{parentName:"ul"},"src/d2svtest-init.js - Used to supply additional RequireJS configuration to AMD modules in this plugin. Also can be\nused to re-configure any other AMD modules defined by the D2SV UI itself or any of its dependencies.",(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All the plugins deployed on D2 Smartview do not have a mechanism to specify their loading order. So if multiple plugins try to configure the same AMD\nmodule then whichever plugin is loaded last, configuration from that plugin will apply."))),(0,a.kt)("li",{parentName:"ul"},"src/extensions.json - Single file to register all the D2SV UI API extensions defined by this plugin."),(0,a.kt)("li",{parentName:"ul"},"src/Gruntfile.js - Task definition file used to build the source code."),(0,a.kt)("li",{parentName:"ul"},"test/Gruntfile.js - Task definition file used to start karma server to run unit test on source code/build output."),(0,a.kt)("li",{parentName:"ul"},"test/karma.js - Karma configuration file used while running unit tests."),(0,a.kt)("li",{parentName:"ul"},"test/test-common.js - Defines pre-conditions and init configuration used to run unit tests.")))))}c.isMDXComponent=!0}}]);