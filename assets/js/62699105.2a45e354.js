"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9118:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1.03,sidebar_label:"Declare custom types for D2SV landing page shortcuts"},i="Custom shortcut type in D2",l={unversionedId:"general/howto/1_03_custom.widget.type",id:"general/howto/1_03_custom.widget.type",isDocsHomePage:!1,title:"Custom shortcut type in D2",description:"D2-Smartview landing page configuration elements like &lt;tile&gt; requires a type attribute to be",source:"@site/articles/general/howto/1_03_custom.widget.type.md",sourceDirName:"general/howto",slug:"/general/howto/1_03_custom.widget.type",permalink:"/general/howto/1_03_custom.widget.type",tags:[],version:"current",sidebarPosition:1.03,frontMatter:{sidebar_position:1.03,sidebar_label:"Declare custom types for D2SV landing page shortcuts"},sidebar:"general",previous:{title:"Extend/Override D2FS services",permalink:"/general/howto/1_02_d2rest.d2fs.supported.services"},next:{title:"Use Delta Menus",permalink:"/general/howto/1_04_delta_menus"}},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-shortcut-type-in-d2"},"Custom shortcut type in D2"),(0,o.kt)("p",null,"D2-Smartview landing page configuration elements like ",(0,o.kt)("code",null,"<","tile",">")," requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),' attribute to be\nset. By default all "Widget type" found in D2-Config are accepted as valid values. However, while defining new shortcuts for the landing page\ntile one might need to use a value that is not a "Widget type" at all or in other words the value is not pre-defined.\nAdditionally, while defining new application scope perspective one might\nneed to declare a default widget name for the corresponding perspective to use when a direct URL based navigation is taking place in the UI.'),(0,o.kt)("p",null,"To facilitate this, an SDK developer can create\na properties file ",(0,o.kt)("strong",{parentName:"p"},"{Plugin}/resources/string/config/U4landing.properties"),".\nThere are two properties that can be defined in the file - "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"default_widget_tags"),": This allows declaring new valid XML tag names to go under the ",(0,o.kt)("code",null,"<default-widgets>")," section in the D2SV landing page file. Multiple comma separated values could be specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"shortcut_types"),": This allows declaring valid values for `type` attribute of ",(0,o.kt)("code",null,"<tile>"),". Multiple comma separated values could be specified.")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"default_widget_tags=abcd,defg\nshortcut_types=custom1,custom2\n")),(0,o.kt)("p",null,"If this is the content of the ",(0,o.kt)("strong",{parentName:"p"},"U4Landing.properties")," file, then the following hypothetical landing page structure is accepted as valid configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<root>\n    <space>\n        <flow-layout-container>\n            <content>\n                <tile-container size="full">\n                    <tile name="one" type="custom1">\n                        <theme color="shade1" type="stone1"/>\n                    </tile>\n                    <tile name="two" type="custom2">\n                        <theme color="shade1" type="indigo1"/>\n                    </tile>\n                </tile-container>\n            </content>\n        </flow-layout-container>\n    </space>\n    <default-widgets>\n        <abcd>SOME_NAME</abcd>\n        <defg>ANOTHER</defg>\n    </default-widgets>\n</root>\n')))}p.isMDXComponent=!0}}]);