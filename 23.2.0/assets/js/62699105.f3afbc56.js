"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1.03,sidebar_label:"Declare custom widget types for D2SV"},o="Custom Widget Type",l={unversionedId:"general/howto/1_03_custom.widget.type",id:"general/howto/1_03_custom.widget.type",title:"Custom Widget Type",description:"Developers can define custom widget types if the default set of widgets provided from OOTB D2.",source:"@site/articles/general/howto/1_03_custom.widget.type.md",sourceDirName:"general/howto",slug:"/general/howto/1_03_custom.widget.type",permalink:"/23.2.0/general/howto/1_03_custom.widget.type",draft:!1,tags:[],version:"current",sidebarPosition:1.03,frontMatter:{sidebar_position:1.03,sidebar_label:"Declare custom widget types for D2SV"},sidebar:"general",previous:{title:"Extend/Override D2FS services",permalink:"/23.2.0/general/howto/1_02_d2rest.d2fs.supported.services"},next:{title:"Use Delta Menus",permalink:"/23.2.0/general/howto/1_04_delta_menus"}},p={},s=[{value:"Custom shortcut type in D2",id:"custom-shortcut-type-in-d2",level:2},{value:"Example",id:"example",level:4},{value:"Example",id:"example-1",level:4},{value:"Example",id:"example-2",level:4},{value:"Example",id:"example-3",level:4},{value:"Example",id:"example-4",level:4}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-widget-type"},"Custom Widget Type"),(0,a.kt)("p",null,"Developers can define custom widget types if the default set of widgets provided from OOTB D2.\nThis helps in developing custom views and business operation to perform "),(0,a.kt)("h2",{id:"custom-shortcut-type-in-d2"},"Custom shortcut type in D2"),(0,a.kt)("p",null,"D2-Smartview landing page configuration elements like ",(0,a.kt)("code",null,"<","tile",">")," requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),' attribute to be\nset. By default all "Widget type" found in D2-Config are accepted as valid values. However, while defining new shortcuts for the landing page\ntile one might need to use a value that is not a "Widget type" at all or in other words the value is not pre-defined.\nAdditionally, while defining new application scope perspective one might\nneed to declare a default widget name for the corresponding perspective to use when a direct URL based navigation is taking place in the UI.'),(0,a.kt)("p",null,"To facilitate this, an SDK developer can create\na properties file ",(0,a.kt)("strong",{parentName:"p"},"{Plugin}/resources/strings/config/U4Landing.properties"),".\nThere are two properties that can be defined in the file - "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("i",null,"default_widget_tags"),": This allows declaring new valid XML tag names to go under the ",(0,a.kt)("code",null,"<default-widgets>")," section in the D2SV landing page file. Multiple comma separated values could be specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("i",null,"shortcut_types"),": This allows declaring valid values for `type` attribute of ",(0,a.kt)("code",null,"<tile>"),". Multiple comma separated values could be specified.")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default_widget_tags=abcd,defg\nshortcut_types=custom1,custom2\n")),(0,a.kt)("p",null,"If this is the content of the ",(0,a.kt)("strong",{parentName:"p"},"U4Landing.properties")," file, then the following hypothetical landing page structure is accepted as valid configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<root>\n    <space>\n        <flow-layout-container>\n            <content>\n                <tile-container size="full">\n                    <tile name="one" type="custom1">\n                        <theme color="shade1" type="stone1"/>\n                    </tile>\n                    <tile name="two" type="custom2">\n                        <theme color="shade1" type="indigo1"/>\n                    </tile>\n                </tile-container>\n            </content>\n        </flow-layout-container>\n    </space>\n    <default-widgets>\n        <abcd>SOME_NAME</abcd>\n        <defg>ANOTHER</defg>\n    </default-widgets>\n</root>\n')),(0,a.kt)("p",null,"The developer needs to register the custom widget type if needed to create widgets which can driven through the D2-Config context matrix evaluation.\nTo do this, developer needs to create a properties file  ",(0,a.kt)("strong",{parentName:"p"},"{Plugin}/resources/strings/config/WidgetSubtypelist.properties"),".\nThis will include all the widget type created in the format ",(0,a.kt)("strong",{parentName:"p"},"{Widget Type Name}=true")),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CustomWidgetType=true\n")),(0,a.kt)("p",null," If developer wants the widget to inherit the properties of some other OOTB D2 widget types, then developer\nneeds to prefix the parent widget type name in the format ",(0,a.kt)("strong",{parentName:"p"},"{Parent Widget Type Name}.{Widget Type Name}=true")),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DocListWidget.CustomWidgetType=true\n")),(0,a.kt)("p",null,"If the developer want to have custom parameters as part of the custom widget type, developer needs to add those in the\nproperties file ",(0,a.kt)("strong",{parentName:"p"},"{Plugin}/resources/strings/config/WidgetSubtype.properties"),". This will include the parameters for all the widget type\ncreated for plugin in the format  ",(0,a.kt)("strong",{parentName:"p"},"{Widget type Name}.{{Parameter name}={Default value}"),"."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CustomerCustomType.sample1 = Text1\nCustomerCustomType.sample2 = Text2\n")),(0,a.kt)("p",null,"In order to provide custom labels for the custom parameters which are created needs to be add in the properties file\n",(0,a.kt)("strong",{parentName:"p"},"{Plugin}/resources/strings/actions/config/modules/widget/WidgetDialog/WidgetDialog_en.properties"),". Entries will be in the format\n",(0,a.kt)("strong",{parentName:"p"},"label_{parameter name}={display label}"),"."),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"label_sample1 = Sample text field 1\nlabel_sample2 = Sample text field 2\n")))}c.isMDXComponent=!0}}]);