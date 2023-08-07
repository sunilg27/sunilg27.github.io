"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3.01,sidebar_label:"D2SV Custom Widget Type Tile"},s="D2SV Custom Widget Type Tile",a={unversionedId:"general/samples/3_05_custom_widget_tile",id:"general/samples/3_05_custom_widget_tile",title:"D2SV Custom Widget Type Tile",description:"D2SV custom widget type tile plugin will help the developer in solving the following scenarios",source:"@site/articles/general/samples/3_05_custom_widget_tile.md",sourceDirName:"general/samples",slug:"/general/samples/3_05_custom_widget_tile",permalink:"/23.4.0/23.4.0/general/samples/3_05_custom_widget_tile",draft:!1,tags:[],version:"current",sidebarPosition:3.01,frontMatter:{sidebar_position:3.01,sidebar_label:"D2SV Custom Widget Type Tile"},sidebar:"general",previous:{title:"D2SV Read-Only Permission View Sample",permalink:"/23.4.0/23.4.0/general/samples/3_04_read_only_permission"},next:{title:"D2SV client to server logging",permalink:"/23.4.0/23.4.0/general/samples/3_02_client_to_server_logging"}},l={},u=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:3},{value:"REST Implementations",id:"rest-implementations",level:3},{value:"Custom widget type references needed for the D2-Config widget configuration and D2 Smartview landing page configuration",id:"custom-widget-type-references-needed-for-the-d2-config-widget-configuration-and-d2-smartview-landing-page-configuration",level:3},{value:"D2 Smartview UI changes for the plugin",id:"d2-smartview-ui-changes-for-the-plugin",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"d2sv-custom-widget-type-tile"},"D2SV Custom Widget Type Tile"),(0,r.kt)("p",null,"D2SV custom widget type tile plugin will help the developer in solving the following scenarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define a custom widget type"),(0,r.kt)("li",{parentName:"ul"},"Define a custom widget type parameter"),(0,r.kt)("li",{parentName:"ul"},"Define a custom widget type in the landing pange"),(0,r.kt)("li",{parentName:"ul"},"Define a shortcut tile with behavior to access the custom widget type parameter.")),(0,r.kt)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,r.kt)("p",null,"Developer can extract the sample and build it using the workspace assistant. Once built, the distribution is collected in 'dist' folder as ",(0,r.kt)("strong",{parentName:"p"},"D2SV-ReadOnlyPermission-View-1.0.0.jar"),"\nwhich can placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB-INF/lib")," directory of a deployed D2 Smartview. In the case of D2-Config, it has to be placed in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"WEB-INF/CustomWidgetType"),". Also update the plugin details in the ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB-INF/classes/D2-Config.properties"),"\nThe application server needs to be restarted post deployment."),(0,r.kt)("p",null,"As result of deploying this plugin, it will introduce a new widget type in the D2-Config widget types.  "),(0,r.kt)("h3",{id:"source-code-structure"},"Source code structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\---D2SV-Custom-Widget-Type\n    |   pom.xml\n    |   \n    +---src\n    |   \\---main\n    |       +---java\n    |       |   \\---com\n    |       |       +---emc\n    |       |       |       D2PluginVersion.java\n    |       |       |       \n    |       |       \\---opentext\n    |       |           \\---d2\n    |       |               +---rest\n    |       |               |   \\---context\n    |       |               |       \\---jc\n    |       |               |               PluginRestConfig_CustomWidgetType.java\n    |       |               |               \n    |       |               \\---smartview\n    |       |                   \\---customwidgettype\n    |       |                       |   CustomWidgetTypePlugin.java\n    |       |                       |   \n    |       |                       +---api\n    |       |                       |       CustomWidgetTypeVersion.java\n    |       |                       |       \n    |       |                       \\---rest\n    |       |                               package-info.java\n    |       |                               \n    |       +---resources\n    |       |   |   customwidgettype-version.properties\n    |       |   |   D2Plugin.properties\n    |       |   |   \n    |       |   +---smartview\n    |       |   |       SmartView.properties\n    |       |   |       \n    |       |   \\---strings\n    |       |       +---actions\n    |       |       |   \\---config\n    |       |       |       \\---modules\n    |       |       |           \\---widget\n    |       |       |               \\---WidgetDialog\n    |       |       |                       WidgetDialog_en.properties\n    |       |       |                       \n    |       |       \\---config\n    |       |               U4Landing.properties\n    |       |               WidgetSubtype.properties\n    |       |               WidgetSubtypelist.properties\n    |       |               \n    |       \\---smartview\n    |           |   .csslintrc\n    |           |   .eslintrc-html.yml\n    |           |   .eslintrc.yml\n    |           |   .npmrc\n    |           |   config-editor.js\n    |           |   customwidgettype.setup.js\n    |           |   esmhelper.js\n    |           |   Gruntfile.js\n    |           |   package.json\n    |           |   proxy.js\n    |           |   server.conf.js\n    |           |   server.js\n    |           |   \n    \n    |           +---pages\n    |           |   |   config-d2.js\n    |           |   |   config-dev.js\n    |           |   |   favicon.ico\n    |           |   |   initialize.js\n    |           |   |   loader.css\n    |           |   |   otds.html\n    |           |   |   \n    |           |   +---debug\n    |           |   |       app.html\n    |           |   |       \n    |           |   \\---release\n    |           |           app.html\n    |           |           \n    |           +---src\n    |           |   |   component.js\n    |           |   |   config-build.js\n    |           |   |   customwidgettype-init.js\n    |           |   |   extensions.json\n    |           |   |   Gruntfile.js\n    |           |   |   \n    |           |   +---bundles\n    |           |   |       customwidgettype-bundle.js\n    |           |   |       \n    |           |   +---extensions\n    |           |   |       custom.type.tile.behaviors.js\n    |           |   |       custom.type.tiles.js\n    |           |   |       \n    |           |   +---test\n    |           |   |       extensions.spec.js\n    |           |   |       \n    |           |   +---utils\n    |           |   |   |   startup.js\n    |           |   |   |   \n    |           |   |   \\---theme\n    |           |   |       |   action.icons.js\n    |           |   |       |   \n    |           |   |       \\---action_icons\n    |           |   |               action_sample_icon.svg\n    |           |   |               \n    |           |   \\---widgets\n    |           |       \\---shortcut.tile\n    |           |               custom.type.shortcut.behavior.js\n    |           |               \n    |           \\---test\n    |                   Gruntfile.js\n    |                   karma.js\n    |                   test-common.js\n    |                   \n    \\---target\n        \\---antrun\n                build-main.xml\n\n\n")),(0,r.kt)("h3",{id:"files-and-their-purpose"},"Files and their purpose"),(0,r.kt)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,r.kt)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,r.kt)("h3",{id:"rest-implementations"},"REST Implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pom.xml - Defines the maven project for this plugin."),(0,r.kt)("li",{parentName:"ul"},"src/main/java/com/emc/D2PluginVersion.java - Declares identification information for the entire plugin using ",(0,r.kt)("inlineCode",{parentName:"li"},"D2SVROPViewVersion")," class"),(0,r.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/rest/context/jc/PluginRestConfig_CustomWidgetType.java - Java configuration for spring components like REST controller, Beans etc."),(0,r.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/customwidgettype/CustomWidgetTypePlugin.java - Declares a plugin component for D2FS."),(0,r.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/customwidgettype/api/CustomWidgetTypeVersion.java - Holder for plugin identification information. Loads relevant data from ",(0,r.kt)("inlineCode",{parentName:"li"},"d2svropview-version.properties")," file resource."),(0,r.kt)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/customwidgettype/rest/package-info.java - Declares package metadata for JDK and IDE.")),(0,r.kt)("h3",{id:"custom-widget-type-references-needed-for-the-d2-config-widget-configuration-and-d2-smartview-landing-page-configuration"},"Custom widget type references needed for the D2-Config widget configuration and D2 Smartview landing page configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/resources/strings/config/U4Landing.properties - Defines the custom widget type which are supported")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shortcut_types=CustomType\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/resources/strings/config/WidgetSubtypelist.properties - Defines the custom widget type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CustomType=true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/resources/strings/config/WidgetSubtype.properties - Defines the custom widget type parameter for the custom widget types mentioned which are supported\nHere the default value for the paramter can also be provided which can be changed in the D2 Config widget configuration ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CustomType.sample1 = Hello World\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/resources/strings/actions/config/modules/widget/WidgetDialog/WidgetDialog_en.properties - This properties file will contain the labels used for parameters for the custom type ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"label_sample1 = Sample text field 1\n")),(0,r.kt)("h3",{id:"d2-smartview-ui-changes-for-the-plugin"},"D2 Smartview UI changes for the plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/bundles/customwidgettype-bundle.js - A portion of this file is used to refer to key RequireJS modules that define the extensions shortcut behavior API and click of the widget tile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"define([\n    'customwidgettype/utils/theme/action.icons',\n    'customwidgettype/utils/startup',\n    'customwidgettype/extensions/custom.type.tiles',\n    'customwidgettype/extensions/custom.type.tile.behaviors'\n], {});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/utils/theme/action.icons.js - Defines the default icon for the widgets"),(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/utils/startup.js - Runs as part of D2 Smartview client-side startup flow. This flow is executed everytime end users reload the D2 Smartview application in their internet browser."),(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions.json - A portion of this file registers extensions to enable the custom shortcut tile for the widget configuration and also to have custom shortcut tile behavior.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  {\n  "d2/sdk/models/module.collection": {\n    "modules": {\n      "customwidgettype": {\n        "title": "D2SV-Custom-Dialogs",\n        "version": "1.0.0"\n      }\n    }\n  },\n  "d2/sdk/controls/action.icons/action.icons": {\n    "extensions": {\n      "customwidgettype": [\n        "customwidgettype/utils/theme/action.icons"\n      ]\n    }\n  },\n  "d2/sdk/utils/landingpage/tiles": {\n    "extensions": {\n      "customwidgettype": [\n        "customwidgettype/extensions/custom.type.tiles"\n      ]\n    }\n  },\n  "d2/sdk/widgets/shortcut.tile/shortcut.tile.behaviors": {\n    "extensions": {\n      "customwidgettype": [\n        "customwidgettype/extensions/custom.type.tile.behaviors"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions/custom.type.tiles.js - This will define the custom widget type to the tile containers in the UI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"define(['d2/sdk/utils/widget.constants'], function(widgetConstants) {\n    'use strict';\n\n    function validateConfigCustomType0() {\n        var validation = {\n            status: true\n        };\n        // TODO: Validates widgetConfig. Set validation.status = false if the validation should fail.\n        return validation;\n    }\n    // List of landing tile definitions\n    return [{\n        type: 'CustomType',\n        icon: 'custom-widget-type',\n        isShortcut: true,\n        tileConfigType: widgetConstants.TileConfigTypes.WIDGET,\n        validateConfig: validateConfigCustomType0\n    }];\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/extensions/custom.type.tile.behaviors.js - This will define the custom shortcut behavior to  the custom widget type ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomType"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"define(['customwidgettype/widgets/shortcut.tile/custom.type.shortcut.behavior'], function(CustomTypeShortcutBehavior) {\n    'use strict';\n    return [{\n        type: 'CustomType',\n        behaviorClass: CustomTypeShortcutBehavior\n    }];\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src/main/smartview/src/widgets/shortcut.tile/custom.type.shortcut.behavior.js -Define custom shortcut behavior with the onclick action to perform. This will prompt the user with the default parameter\nvalue configured for the ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomType")," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"define([\n    'd2/sdk/widgets/shortcut.tile/shortcut.tile.behavior'\n], function(ShortcutTileBehaviorImpl){\n    'use strict';\n\n    var CustomTypeShortcutBehavior = ShortcutTileBehaviorImpl.extend({\n        constructor: function CustomTypeShortcutBehavior() {\n            CustomTypeShortcutBehavior.__super__.constructor.apply(this, arguments);\n        },\n        onClick: function() {\n            alert('custom parameter sample1 : '+this.options.widgetParams.sample1);\n        }\n    });\n\n    return CustomTypeShortcutBehavior;\n});\n")))}d.isMDXComponent=!0}}]);