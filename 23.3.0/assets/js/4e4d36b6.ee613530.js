"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6943],{3905:(t,l,e)=>{e.d(l,{Zo:()=>k,kt:()=>c});var n=e(7294);function o(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function i(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?i(Object(e),!0).forEach((function(l){o(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function d(t,l){if(null==t)return{};var e,n,o=function(t,l){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],l.indexOf(e)>=0||(o[e]=t[e]);return o}(t,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var u=n.createContext({}),r=function(t){var l=n.useContext(u),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},k=function(t){var l=r(t.components);return n.createElement(u.Provider,{value:l},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},m=n.forwardRef((function(t,l){var e=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),p=r(e),m=o,c=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return e?n.createElement(c,a(a({ref:l},k),{},{components:e})):n.createElement(c,a({ref:l},k))}));function c(t,l){var e=arguments,o=l&&l.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=m;var d={};for(var u in l)hasOwnProperty.call(l,u)&&(d[u]=l[u]);d.originalType=t,d[p]="string"==typeof t?t:o,a[1]=d;for(var r=2;r<i;r++)a[r]=e[r];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},3794:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var n=e(7462),o=(e(7294),e(3905));const i={},a=void 0,d={unversionedId:"api/d2/controls/dialogs/simple.dialog",id:"api/d2/controls/dialogs/simple.dialog",title:"simple.dialog",description:"SimpleDialog : d2/sdk/controls/dialogs/simple.dialog",source:"@site/articles/api/d2/controls/dialogs/simple.dialog.md",sourceDirName:"api/d2/controls/dialogs",slug:"/api/d2/controls/dialogs/simple.dialog",permalink:"/api/d2/controls/dialogs/simple.dialog",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"dialog.state.methods",permalink:"/api/d2/controls/dialogs/generic/dialog.state.methods"},next:{title:"stepper.wizard",permalink:"/api/d2/controls/dialogs/stepper.wizard"}},u={},r=[{value:"SimpleDialog : <code>d2/sdk/controls/dialogs/simple.dialog</code>",id:"simpledialog--d2sdkcontrolsdialogssimpledialog",level:2},{value:"simpleDialog.show() \u21d2 <code>any</code>",id:"simpledialogshow--any",level:3},{value:"simpleDialog.updateButton(id, attributes) \u21d2 <code>void</code>",id:"simpledialogupdatebuttonid-attributes--void",level:3},{value:"simpleDialog.destroy() \u21d2 <code>void</code>",id:"simpledialogdestroy--void",level:3},{value:"&quot;event:shown.binf.modal&quot;",id:"eventshownbinfmodal",level:3},{value:"&quot;event:hidden.binf.modal&quot;",id:"eventhiddenbinfmodal",level:3},{value:"SimpleDialog~SimpleDialog",id:"simpledialogsimpledialog",level:3},{value:"new SimpleDialog(options)",id:"new-simpledialogoptions",level:4},{value:"SimpleDialog~FooterButton : <code>Object</code>",id:"simpledialogfooterbutton--object",level:3},{value:"SimpleDialog~FooterButtonClickCallback : <code>function</code>",id:"simpledialogfooterbuttonclickcallback--function",level:3}],k={toc:r},p="wrapper";function s(t){let{components:l,...e}=t;return(0,o.kt)(p,(0,n.Z)({},k,e,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_SimpleDialog"}),(0,o.kt)("h2",{id:"simpledialog--d2sdkcontrolsdialogssimpledialog"},"SimpleDialog : ",(0,o.kt)("code",null,"d2/sdk/controls/dialogs/simple.dialog")),(0,o.kt)("p",null,"Create a simple modal dialog. Has customizable header, footer and primary content."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},(0,o.kt)("code",null,"Marionette.View")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Emits"),": ",(0,o.kt)("code",null,"event:",'"',"shown.binf.modal",'"'),", ",(0,o.kt)("code",null,"event:",'"',"hidden.binf.modal",'"'),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'd2/sdk/controls/dialogs/simple.dialog'\n], function(SimpleDialog){\n 'use strict';\n\n var dialog = new SimpleDialog({title: 'Greetings', bodyMessage: 'Hello World!'});\n dialog.show(); //Dialog is rendered with a close button at top-right corner of the header.\n\n dialog = new SimpleDialog({title: 'Greetings', bodyMessage: 'Hello World!', buttons: [{label: 'OK'}]});\n dialog.show();//Dialog header does not show a close button anymore, however SimpleDialog automatically adds a 'Cancel' button to close it.\n\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog"},"SimpleDialog")," : ",(0,o.kt)("code",null,"d2/sdk/controls/dialogs/simple.dialog"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog+show"},".show()")," \u21d2 ",(0,o.kt)("code",null,"any")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog+updateButton"},".updateButton(id, [attributes])")," \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog+destroy"},".destroy()")," \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog+event_shown.binf.modal"},'"event:shown.binf.modal"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog+event_hidden.binf.modal"},'"event:hidden.binf.modal"')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"inner"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog..SimpleDialog"},"~SimpleDialog"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new_module_SimpleDialog..SimpleDialog_new"},"new SimpleDialog(options)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog..FooterButton"},"~FooterButton")," : ",(0,o.kt)("code",null,"Object")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_SimpleDialog..FooterButtonClickCallback"},"~FooterButtonClickCallback")," : ",(0,o.kt)("code",null,"function"))))))),(0,o.kt)("a",{name:"module_SimpleDialog+show"}),(0,o.kt)("h3",{id:"simpledialogshow--any"},"simpleDialog.show() \u21d2 ",(0,o.kt)("code",null,"any")),(0,o.kt)("p",null,"Shows the dialog after it has been instantiated"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"any")," - The dialog instance  "),(0,o.kt)("a",{name:"module_SimpleDialog+updateButton"}),(0,o.kt)("h3",{id:"simpledialogupdatebuttonid-attributes--void"},"simpleDialog.updateButton(id, ","[attributes]",") \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"Updates the dialog's footer button state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"id"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Identifier of the button to be updated."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[attributes]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"New button state properties"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[attributes.hidden]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether is button is to be hidden."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[attributes.disabled]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether this button should be disabled."))),"  ")),(0,o.kt)("a",{name:"module_SimpleDialog+destroy"}),(0,o.kt)("h3",{id:"simpledialogdestroy--void"},"simpleDialog.destroy() \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"Hide & close the dialog"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),"  "),(0,o.kt)("a",{name:"module_SimpleDialog+event_shown.binf.modal"}),(0,o.kt)("h3",{id:"eventshownbinfmodal"},'"event:shown.binf.modal"'),(0,o.kt)("p",null,"Triggers on the dialog's HTML element when it is shown."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),"  "),(0,o.kt)("a",{name:"module_SimpleDialog+event_hidden.binf.modal"}),(0,o.kt)("h3",{id:"eventhiddenbinfmodal"},'"event:hidden.binf.modal"'),(0,o.kt)("p",null,"Trigger on the dialog's HTML element when it becomes hidden."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),"  "),(0,o.kt)("a",{name:"module_SimpleDialog..SimpleDialog"}),(0,o.kt)("h3",{id:"simpledialogsimpledialog"},"SimpleDialog~SimpleDialog"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),"  "),(0,o.kt)("a",{name:"new_module_SimpleDialog..SimpleDialog_new"}),(0,o.kt)("h4",{id:"new-simpledialogoptions"},"new SimpleDialog(options)"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Constructor options"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.title"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Title of the dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.fullSize]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether to show a full page dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.largeSize]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Shows a large dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.midSize]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Shows a medium dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.smallSize]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Shows a small dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.bodyMessage]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"A message to be shown at the primary content area."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.buttons]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Array.<FooterButton>")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Buttons to show in the footer if footer is not customized with ",(0,o.kt)("code",null,"footerView")," options.",(0,o.kt)("code",null,"SimpleDialog")," automatically adds an additional button to close the dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.view]"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},"Marionette.View"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Customize the primary content area with this view instance."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.headerView]"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},"Marionette.View"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Customize the dialog's header completely with this view instance."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.footerView]"),(0,o.kt)("td",null,(0,o.kt)("code",null,(0,o.kt)("a",{href:"https://marionettejs.com/docs/v2.4.7/marionette.view.html"},"Marionette.View"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Customize the dialog's footer completely with this view instance."))),"  ")),(0,o.kt)("a",{name:"module_SimpleDialog..FooterButton"}),(0,o.kt)("h3",{id:"simpledialogfooterbutton--object"},"SimpleDialog~FooterButton : ",(0,o.kt)("code",null,"Object")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Properties")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"label"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Text to be displayed on the button"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[toolTip]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Tooltip associated with the button."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[id]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Unique identifier of this button."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[default]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether this button is default button in the footer. Default button is drawn with a visual distinction compared to other buttons."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[separate]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether this button is to be drawn separately."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[click]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"FooterButtonClickCallback")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Callback to handle click event from the button."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[close]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether this button closes the dialog."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[hidden]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Whether this button should be hidden"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[disabled]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Renders a button in disabled state."))),"  ")),(0,o.kt)("a",{name:"module_SimpleDialog..FooterButtonClickCallback"}),(0,o.kt)("h3",{id:"simpledialogfooterbuttonclickcallback--function"},"SimpleDialog~FooterButtonClickCallback : ",(0,o.kt)("code",null,"function")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.kt)("a",{parentName:"p",href:"#module_SimpleDialog"},(0,o.kt)("code",null,"SimpleDialog")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"object")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"dialog"),(0,o.kt)("td",null,(0,o.kt)("code",null,"*")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The dialog itself."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"button"),(0,o.kt)("td",null,(0,o.kt)("code",null,"HTMLElement")),(0,o.kt)("td",null,(0,o.kt)("p",null,"DOM element of the button that is clicked."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"buttonAttributes"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Attributes of the button."))),"  ")))}s.isMDXComponent=!0}}]);