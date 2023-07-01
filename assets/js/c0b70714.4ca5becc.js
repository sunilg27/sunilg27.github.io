"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6781],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},l="PageLeavingBlocker",o={unversionedId:"api/nuc/utils/page.leaving.blocker",id:"api/nuc/utils/page.leaving.blocker",isDocsHomePage:!1,title:"PageLeavingBlocker",description:"Prevents the user from leaving the current page without being warned, that",source:"@site/articles/api/nuc/utils/page.leaving.blocker.md",sourceDirName:"api/nuc/utils",slug:"/api/nuc/utils/page.leaving.blocker",permalink:"/api/nuc/utils/page.leaving.blocker",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Log",permalink:"/api/nuc/utils/log"},next:{title:"Date Parsing and Formatting",permalink:"/api/nuc/utils/types/date"}},s=[{value:"Examples",id:"examples",children:[]},{value:"Methods",id:"methods",children:[{value:"isEnabled() : boolean",id:"isenabled--boolean",children:[]},{value:"enabled(message) : void",id:"enabledmessage--void",children:[]},{value:"disable() : void",id:"disable--void",children:[]}]}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageleavingblocker"},"PageLeavingBlocker"),(0,a.kt)("p",null,"Prevents the user from leaving the current page without being warned, that\nsome running operation would be interrupted and pending items would not be\nprocessed.  If the blocker is enabled, the web browser is supposed to show\na confirmation dialog with the specified message and a question if the user\nis really sure, when the user tries to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"navigate to other page."),(0,a.kt)("li",{parentName:"ul"},"reload the current page."),(0,a.kt)("li",{parentName:"ul"},"close the current window or tab."),(0,a.kt)("li",{parentName:"ul"},"quit the web browser application.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," Mobile browsers may not support the page-leave warning.\nNeither of Safari, Chrome and Firefox on iOS supports it today.  The page\nwill be left as soon as the user attempts it."),(0,a.kt)("p",null,"The blocker should be enabled providing the warning message before a\nlong-running multiple-item processing operation starts and disabled, when\nall items have been processed.  Calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"enable")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"disable")," methods\nhave to be paired, otherwise the warning would be shown any time later,\nwhen the user would try to leave the page."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Processing multiple items ",(0,a.kt)("em",{parentName:"p"},"without")," the page-leaving blocker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"require(['nuc/lib/jquery', 'nuc/utils/page.leaving.blocker',\n  'nuc/lib/jquery.when.all'\n], function ($, PageLeavingBlocker) {\n\n  // Returns a promise for all items and works in the background\n  function processItems(items) {\n    var promises = items.map(processItem);\n    return $.whenAll.apply($, promises);\n  }\n\n  // Returns a promise for the single item and works in the background\n  function processItem(item) {\n    ...\n  }\n\n  processItems(...);\n\n});\n")),(0,a.kt)("p",null,"Processing multiple items ",(0,a.kt)("em",{parentName:"p"},"with")," the page-leaving blocker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"require(['nuc/lib/jquery', 'nuc/utils/page.leaving.blocker',\n  'nuc/lib/jquery.when.all'\n], function ($, PageLeavingBlocker) {\n\n  // Returns a promise for all items and works in the background\n  function processItems(items) {\n    // Enable the blocker before processing of the first item begins\n    PageLeavingBlocker.enable(\n      'If you leave the page now, pending items will not be processed.');\n    var promises = items.map(processItem);\n    return $.whenAll\n        .apply($, promises)\n        // Disable the blocker after processing of the last item ends\n        .always(PageLeavingBlocker.disable);\n  }\n\n  // Returns a promise for the single item and works in the background\n  function processItem(item) {\n  }\n\n  processItems(...);\n\n});\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"isenabled--boolean"},"isEnabled() : boolean"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the page-leaving blocker is enabled, otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"enabledmessage--void"},"enabled(message) : void"),(0,a.kt)("p",null,"Enables the page-leaving blocker.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," string will be displayed, if the user tries to leave the current page.  The message passed the the most recent call to ",(0,a.kt)("inlineCode",{parentName:"p"},"enable")," will be displayed.  Every call to ",(0,a.kt)("inlineCode",{parentName:"p"},"enable")," has to be paired with a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"disable"),"."),(0,a.kt)("h3",{id:"disable--void"},"disable() : void"),(0,a.kt)("p",null,"Cancels the previous ",(0,a.kt)("inlineCode",{parentName:"p"},"enable")," call and if it was the last one, it isables the page-leaving blocker.  Every call to ",(0,a.kt)("inlineCode",{parentName:"p"},"enable")," has to be paired with a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"disable"),"."))}c.isMDXComponent=!0}}]);