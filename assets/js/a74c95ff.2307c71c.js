"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5534],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>v});var t=i(7294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,s=function(e,n){if(null==e)return{};var i,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=t.createContext({}),m=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},p=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=m(i),u=s,v=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return i?t.createElement(v,r(r({ref:n},p),{},{components:i})):t.createElement(v,r({ref:n},p))}));function v(e,n){var i=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=i.length,r=new Array(o);r[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:s,r[1]=a;for(var m=2;m<o;m++)r[m]=i[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var t=i(7462),s=(i(7294),i(3905));const o={sidebar_position:3.01,sidebar_label:"D2SV Read-Only Permission View Sample"},r="D2SV Read-Only Permission View Sample",a={unversionedId:"general/samples/3_04_read_only_permission",id:"version-23.2.0/general/samples/3_04_read_only_permission",title:"D2SV Read-Only Permission View Sample",description:"D2 Read-Only permission view sample plugin fills-in the gap functionally and serves as a complete example of how to use SDK to",source:"@site/versioned_docs/version-23.2.0/general/samples/3_04_read_only_permission.md",sourceDirName:"general/samples",slug:"/general/samples/3_04_read_only_permission",permalink:"/general/samples/3_04_read_only_permission",draft:!1,tags:[],version:"23.2.0",sidebarPosition:3.01,frontMatter:{sidebar_position:3.01,sidebar_label:"D2SV Read-Only Permission View Sample"}},l={},m=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:3},{value:"REST Implementations",id:"rest-implementations",level:3},{value:"View permission menu configuration in back-end and its display &amp; execution on the front-end",id:"view-permission-menu-configuration-in-back-end-and-its-display--execution-on-the-front-end",level:3},{value:"The side-panel dialog that displays permissions",id:"the-side-panel-dialog-that-displays-permissions",level:3}],p={toc:m},c="wrapper";function d(e){let{components:n,...i}=e;return(0,s.kt)(c,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"d2sv-read-only-permission-view-sample"},"D2SV Read-Only Permission View Sample"),(0,s.kt)("p",null,"D2 Read-Only permission view sample plugin fills-in the gap functionally and serves as a complete example of how to use SDK to"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Define a custom action services "),(0,s.kt)("li",{parentName:"ul"},"Define a custom menu by default and initiate a dialog"),(0,s.kt)("li",{parentName:"ul"},"Define a custom dialog view to display the information and show the form view of the data")),(0,s.kt)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,s.kt)("p",null,"Developer can extract the sample and build it using the workspace assistant. Once built, the distribution is collected in 'dist' folder as ",(0,s.kt)("strong",{parentName:"p"},"D2SV-ReadOnlyPermission-View-1.0.0.jar"),"\nwhich can placed in ",(0,s.kt)("inlineCode",{parentName:"p"},"WEB-INF/lib")," directory of a deployed D2 Smartview. The application server needs to be restarted post deployment."),(0,s.kt)("p",null,"As result of deploying this plugin, it will introduce a new menu in ",(0,s.kt)("inlineCode",{parentName:"p"},"Doclist")," widget as ",(0,s.kt)("inlineCode",{parentName:"p"},"View Permission")," "),(0,s.kt)("h3",{id:"source-code-structure"},"Source code structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"D2SV-ReadOnlyPermission-View\n    |   pom.xml\n    |   \n    +---src\n    |   \\---main\n    |       +---java\n    |       |   \\---com\n    |       |       +---emc\n    |       |       |       D2PluginVersion.java\n    |       |       |       \n    |       |       \\---opentext\n    |       |           \\---d2\n    |       |               +---rest\n    |       |               |   \\---context\n    |       |               |       \\---jc\n    |       |               |               PluginRestConfig_D2SVROPView.java\n    |       |               |               \n    |       |               \\---smartview\n    |       |                   \\---d2svropview\n    |       |                       |   D2SVROPViewPlugin.java\n    |       |                       |   \n    |       |                       +---api\n    |       |                       |       D2SVROPViewVersion.java\n    |       |                       |       \n    |       |                       +---rest\n    |       |                       |       package-info.java\n    |       |                       |       \n    |       |                       \\---webfs\n    |       |                           \\---custom\n    |       |                                   PermissionActionService.java\n    |       |                                   \n    |       +---resources\n    |       |   |   D2Plugin.properties\n    |       |   |   d2svropview-version.properties\n    |       |   |   \n    |       |   +---smartview\n    |       |   |       SmartView.properties\n    |       |   |       \n    |       |   +---strings\n    |       |   |   \\---menu\n    |       |   |       \\---MenuContext\n    |       |   |               MenuContext_en.properties\n    |       |   |               \n    |       |   \\---xml\n    |       |       \\---unitymenu\n    |       |               MenuContextDelta.xml\n    |       |               \n    |       \\---smartview\n    |           |   .csslintrc\n    |           |   .eslintrc-html.yml\n    |           |   .eslintrc.yml\n    |           |   .npmrc\n    |           |   config-editor.js\n    |           |   d2svropview.setup.js\n    |           |   esmhelper.js\n    |           |   Gruntfile.js\n    |           |   package.json\n    |           |   proxy.js\n    |           |   server.conf.js\n    |           |   server.js\n    |           |   \n    |           +---pages\n    |           |   |   config-d2.js\n    |           |   |   config-dev.js\n    |           |   |   favicon.ico\n    |           |   |   initialize.js\n    |           |   |   loader.css\n    |           |   |   otds.html\n    |           |   |   \n    |           |   +---debug\n    |           |   |       app.html\n    |           |   |       \n    |           |   \\---release\n    |           |           app.html\n    |           |           \n    |           +---src\n    |           |   |   component.js\n    |           |   |   config-build.js\n    |           |   |   d2svropview-init.js\n    |           |   |   extensions.json\n    |           |   |   Gruntfile.js\n    |           |   |   \n    |           |   +---bundles\n    |           |   |       d2svropview-bundle.js\n    |           |   |       \n    |           |   +---commands\n    |           |   |   |   node.actions.rules.js\n    |           |   |   |   view.permission.js\n    |           |   |   |   \n    |           |   |   \\---impl\n    |           |   |       \\---nls\n    |           |   |           |   lang.js\n    |           |   |           |   \n    |           |   |           \\---root\n    |           |   |                   lang.js\n    |           |   |                   \n    |           |   +---dialogs\n    |           |   |   \\---permissions\n    |           |   |       |   permissions.dialog.js\n    |           |   |       |   permissions.view.js\n    |           |   |       |   \n    |           |   |       \\---impl\n    |           |   |           |   permission.collection.js\n    |           |   |           |   permissions.css\n    |           |   |           |   permissions.hbs\n    |           |   |           |   table.columns.js\n    |           |   |           |   \n    |           |   |           \\---nls\n    |           |   |               |   lang.js\n    |           |   |               |   \n    |           |   |               \\---root\n    |           |   |                       lang.js\n    |           |   |                       \n    |           |   +---test\n    |           |   |       extensions.spec.js\n    |           |   |       \n    |           |   \\---utils\n    |           |       |   startup.js\n    |           |       |   \n    |           |       \\---theme\n    |           |           |   action.icons.js\n    |           |           |   \n    |           |           \\---action_icons\n    |           |                   action_sample_icon.svg\n    |           |                   action_view_perms32.svg\n    |           |                   \n    |           \\---test\n    |                   Gruntfile.js\n    |                   karma.js\n    |                   test-common.js\n    |                   \n    \\---target\n\n\n")),(0,s.kt)("h3",{id:"files-and-their-purpose"},"Files and their purpose"),(0,s.kt)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,s.kt)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,s.kt)("h3",{id:"rest-implementations"},"REST Implementations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"pom.xml - Defines the maven project for this plugin."),(0,s.kt)("li",{parentName:"ul"},"src/main/java/com/emc/D2PluginVersion.java - Declares identification information for the entire plugin using ",(0,s.kt)("inlineCode",{parentName:"li"},"D2SVROPViewVersion")," class"),(0,s.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/rest/context/jc/PluginRestConfig_D2SVROPView.java - Java configuration for spring components like REST controller, Beans etc."),(0,s.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svropview/D2SVROPViewPlugin.java - Declares a plugin component for D2FS."),(0,s.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svropview/api/D2SVROPViewVersion.java - Holder for plugin identification information. Loads relevant data from ",(0,s.kt)("inlineCode",{parentName:"li"},"d2svropview-version.properties")," file resource."),(0,s.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svropview/rest/package-info.java - Declares package metadata for JDK and IDE."),(0,s.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svropview/rest/webfs.custom/PermissionActionService.java - Defines a custom service to fetch the basic permissions for the given object id.\nSo the menu will have reference to the method 'getPermissions' which will triggered from the menu action.")),(0,s.kt)("h3",{id:"view-permission-menu-configuration-in-back-end-and-its-display--execution-on-the-front-end"},"View permission menu configuration in back-end and its display & execution on the front-end"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/resources/strings/menu/MenuContext/MenuContext_en.properties - Labels associated with the dynamically configured menu."),(0,s.kt)("li",{parentName:"ul"},"src/main/resources/xml/unitymenu/MenuContextDelta.xml - This delta menu will be used to dynamically load the custom OOTB menu to view permissions in the D2 Smartview for the default MenuContext.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<delta>\n  <insert position-before="menuToolsMassUpdate">\n    <menuitem id="menuContextViewPermission">\n      <dynamic-action class="com.emc.d2fs.dctm.ui.dynamicactions.actions.U4Generic" eMethod="getPermissions" eMode="SINGLE" eService="PermissionActionService" rAction="d2svropview/dialogs/permissions/permissions.dialog:showPermissions" rType="JS"/>\n      <condition class="com.emc.d2fs.dctm.ui.conditions.interfaces.IsMultipleSelection" equals="false"/>\n      <condition class="com.emc.d2fs.dctm.ui.conditions.options.IsPluginActivated" value="D2SV-ReadOnlyPermission-View"/>\n    </menuitem>\n  </insert>\n  <insert position-before="menuToolsMassUpdate">\n    <separator/>\n  </insert>\n</delta>\n')),(0,s.kt)("p",null,"Here the ",(0,s.kt)("inlineCode",{parentName:"p"},"dynamic-action")," is used to map the method ",(0,s.kt)("inlineCode",{parentName:"p"},"getPermissions")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"PermissionActionService")," when the menuAction is triggered from UI.\n",(0,s.kt)("inlineCode",{parentName:"p"},"dynamic-action")," will also have reference to the target UI action to perform using the ",(0,s.kt)("inlineCode",{parentName:"p"},"rAction")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/bundles/d2svropview-bundle.js - A portion of this file is used to refer to key RequireJS modules that define the extensions to the toolbar and menu related D2SV UI API.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"define([\n    'd2svropview/utils/theme/action.icons',\n    'd2svropview/utils/startup',\n    'd2svropview/commands/node.actions.rules',\n    'd2svropview/commands/view.permission',\n], {});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/commands/view.permission.js - A ",(0,s.kt)("inlineCode",{parentName:"li"},"CommandModel")," that implements the executable logic when a user clicks the ",(0,s.kt)("inlineCode",{parentName:"li"},"View Permission")," menu on the UI.\nIt is an extension of ",(0,s.kt)("inlineCode",{parentName:"li"},"CallServiceCommand")," which is used to take care of the forming the service method request"),(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/commands/node.actions.rules.js - Defines client side filtering and association logic to attach the above ",(0,s.kt)("inlineCode",{parentName:"li"},"view.permission.js")," command model implementaion to a UI toolbar item."),(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/utils/startup.js - Runs as part of D2 Smartview client-side startup flow. This flow is executed everytime endusers reload the D2 Smartview application in their internet browser."),(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions.json - A portion of this file registers extensions to the toolbar and menu related D2SV UI API. The corresponding portion is highlighted below")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  "d2/sdk/controls/action.icons/action.icons": {\n    "extensions": {\n      "d2svropview": [\n        "d2svropview/utils/theme/action.icons"\n      ]\n    }\n  },\n  "d2/sdk/commands/node.actions.rules": {\n    "extensions": {\n      "d2svropview": [\n        "d2svropview/commands/node.actions.rules"\n      ]\n    }\n  },\n  "d2/sdk/utils/commands": {\n    "extensions": {\n      "d2svropview": [\n        "d2svropview/commands/view.permission"\n      ]\n    }\n  }\n')),(0,s.kt)("h3",{id:"the-side-panel-dialog-that-displays-permissions"},"The side-panel dialog that displays permissions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/bundles/d2svropview-bundle.js - A portion of this file is used to refer to key RequireJS modules that define the extensions to dialog used for the side panel as part of the response from the menu action.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"define([\n    ...\n    'd2svropview/dialogs/permissions/permissions.dialog'\n], {});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/dialogs/permissions/permissions.dialog.js - This dialog will be used to show a stepper wizard view.\nThe stepper wizard will be a single step having ",(0,s.kt)("inlineCode",{parentName:"li"},"permissions.view"),". "),(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/dialogs/permissions/permissions.view.js - The view will be used to render data as table view. Data returned\nas part fo the response from the ",(0,s.kt)("inlineCode",{parentName:"li"},"PermissionActionService")," be managed by a ",(0,s.kt)("inlineCode",{parentName:"li"},"MarionetteJS")," ",(0,s.kt)("inlineCode",{parentName:"li"},"Collection")," ",(0,s.kt)("inlineCode",{parentName:"li"},"permission.collection.js"),"."),(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/dialogs/permissions/impl/table.columns.js -  Its a ",(0,s.kt)("inlineCode",{parentName:"li"},"Backbone JS")," collection which is used to map the columns\ninformation such as the key,title etc")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n      key: 'base_permission',\n      column_key: 'base_permission',\n      sequence: 3,\n      sort: false,\n      definitions_order: 3,\n      title: lang.colNameBasePermissions,\n      type: -1,\n      widthFactor: 0.7,\n      permanentColumn: true // don't wrap column due to responsiveness into details row\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions.json - A portion of this file registers extensions toward collections used in handling the list of permissions. The corresponding portion is highlighted below")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"d2/sdk/models/module.collection": {\n    "modules": {\n      "d2svropview": {\n        "title": "D2SV-ReadOnlyPermission-View",\n        "version": "1.0.0"\n      }\n    }\n  }\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"src/main/smartview/src/dialogs/permissions/impl/permissions.collection.js - Collection is used to parse the unformatted response data from the\n",(0,s.kt)("inlineCode",{parentName:"li"},"PermissionActionService")," to collection of models. This collection is included in ",(0,s.kt)("inlineCode",{parentName:"li"},"BrowsableMixin")," to have filter and sorting capability of the result set.")))}d.isMDXComponent=!0}}]);