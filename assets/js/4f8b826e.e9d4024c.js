"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[510],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>c});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(i),c=a,w=u["".concat(d,".").concat(c)]||u[c]||p[c]||r;return i?n.createElement(w,l(l({ref:t},m),{},{components:i})):n.createElement(w,l({ref:t},m))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5651:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const r={},l=void 0,o={unversionedId:"api/d2/controls/mixins/widget.view.state.mixin",id:"api/d2/controls/mixins/widget.view.state.mixin",isDocsHomePage:!1,title:"widget.view.state.mixin",description:"WidgetViewStateMixin : d2/sdk/controls/mixins/widget.view.state.mixin",source:"@site/articles/api/d2/controls/mixins/widget.view.state.mixin.md",sourceDirName:"api/d2/controls/mixins",slug:"/api/d2/controls/mixins/widget.view.state.mixin",permalink:"/api/d2/controls/mixins/widget.view.state.mixin",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"layoutview.events.propagation.mixin",permalink:"/api/d2/controls/mixins/layoutview.events.propagation.mixin"},next:{title:"non-emptying.region",permalink:"/api/d2/controls/regions/non-emptying.region"}},d=[{value:"WidgetViewStateMixin : <code>d2/sdk/controls/mixins/widget.view.state.mixin</code>",id:"widgetviewstatemixin--d2sdkcontrolsmixinswidgetviewstatemixin",children:[{value:"widgetViewStateMixin.setViewStateWidgetName(widgetName) \u21d2 <code>void</code>",id:"widgetviewstatemixinsetviewstatewidgetnamewidgetname--void",children:[]},{value:"widgetViewStateMixin.getViewStateWidgetName() \u21d2 <code>string</code> | <code>undefined</code>",id:"widgetviewstatemixingetviewstatewidgetname--string--undefined",children:[]},{value:"widgetViewStateMixin.getInitialUrlParamsList() \u21d2 <code>Array.&lt;string&gt;</code>",id:"widgetviewstatemixingetinitialurlparamslist--arraystring",children:[]},{value:"WidgetViewStateMixin.mixin(prototype) \u21d2 <code>*</code>",id:"widgetviewstatemixinmixinprototype--",children:[]}]}],s={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_WidgetViewStateMixin"}),(0,a.kt)("h2",{id:"widgetviewstatemixin--d2sdkcontrolsmixinswidgetviewstatemixin"},"WidgetViewStateMixin : ",(0,a.kt)("code",null,"d2/sdk/controls/mixins/widget.view.state.mixin")),(0,a.kt)("p",null,"Mixin to faciliate storage and retrieval of view specific parameters especially for those views that are backed by a widget configuration."),(0,a.kt)("p",null,"To be mixed on the ",(0,a.kt)("inlineCode",{parentName:"p"},"prototype")," of a view."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("code",null,"Object"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/marionette',\n 'd2/sdk/controls/mixins/widget.view.state.mixin',\n 'd2/sdk/utils/contexts/context.utils'\n], function(Marionette, WidgetViewStateMixin, contextUtil){\n 'use strict';\n\n var MyView = Marionette.ItemView.extend({\n   constructor: function MyView(options) {\n     options = options || {};\n     this.context = contextUtil.getPerspectiveContext(); //A context reference on self object is required for WidgetViewStateMixin to work.\n     MyView.__super__.constructor.call(this, options);\n   },\n\n   onRender: function() {\n     this.$el.text('My widget name is: ' + this.getViewStateWidgetName());\n   }\n });\n\n WidgetViewStateMixin.mixin(MyView.prototype);\n\n var view = new MyView();\n view.setViewStateWidgetName('hello world'); //Also, the view itself could call it to set the value\n\n new Marionette.Region({el: '.host-el'}).show(view); //Shows the widget name in view element's text.\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_WidgetViewStateMixin"},"WidgetViewStateMixin")," : ",(0,a.kt)("code",null,"d2/sdk/controls/mixins/widget.view.state.mixin"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"instance"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_WidgetViewStateMixin+setViewStateWidgetName"},".setViewStateWidgetName(widgetName)")," \u21d2 ",(0,a.kt)("code",null,"void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_WidgetViewStateMixin+getViewStateWidgetName"},".getViewStateWidgetName()")," \u21d2 ",(0,a.kt)("code",null,"string")," ","|"," ",(0,a.kt)("code",null,"undefined")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_WidgetViewStateMixin+getInitialUrlParamsList"},".getInitialUrlParamsList()")," \u21d2 ",(0,a.kt)("code",null,"Array.","<","string",">")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"static"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_WidgetViewStateMixin.mixin"},".mixin(prototype)")," \u21d2 ",(0,a.kt)("code",null,"*"))))))),(0,a.kt)("a",{name:"module_WidgetViewStateMixin+setViewStateWidgetName"}),(0,a.kt)("h3",{id:"widgetviewstatemixinsetviewstatewidgetnamewidgetname--void"},"widgetViewStateMixin.setViewStateWidgetName(widgetName) \u21d2 ",(0,a.kt)("code",null,"void")),(0,a.kt)("p",null,"Set the widget configuration name to be associated with this ",(0,a.kt)("inlineCode",{parentName:"p"},"widget.view")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_WidgetViewStateMixin"},(0,a.kt)("code",null,"WidgetViewStateMixin")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"widgetName"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,(0,a.kt)("p",null,"Stores the supplied value against key ",(0,a.kt)("code",null,"widget-name")," in the ",(0,a.kt)("code",null,"ViewStateModel")))),"  ")),(0,a.kt)("a",{name:"module_WidgetViewStateMixin+getViewStateWidgetName"}),(0,a.kt)("h3",{id:"widgetviewstatemixingetviewstatewidgetname--string--undefined"},"widgetViewStateMixin.getViewStateWidgetName() \u21d2 ",(0,a.kt)("code",null,"string")," ","|"," ",(0,a.kt)("code",null,"undefined")),(0,a.kt)("p",null,"Get the widget configuration name associated with this ",(0,a.kt)("inlineCode",{parentName:"p"},"widget.view")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_WidgetViewStateMixin"},(0,a.kt)("code",null,"WidgetViewStateMixin")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"string")," ","|"," ",(0,a.kt)("code",null,"undefined")," - previously stored widget name from ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStateModel"),"  "),(0,a.kt)("a",{name:"module_WidgetViewStateMixin+getInitialUrlParamsList"}),(0,a.kt)("h3",{id:"widgetviewstatemixingetinitialurlparamslist--arraystring"},"widgetViewStateMixin.getInitialUrlParamsList() \u21d2 ",(0,a.kt)("code",null,"Array.","<","string",">")),(0,a.kt)("p",null,"Get the initial list of parameters to be serialized/deserialized from the HTML document location"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_WidgetViewStateMixin"},(0,a.kt)("code",null,"WidgetViewStateMixin")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Array.","<","string",">")," - should return name of the parameter to (de)serialize from the HTML page URL  "),(0,a.kt)("a",{name:"module_WidgetViewStateMixin.mixin"}),(0,a.kt)("h3",{id:"widgetviewstatemixinmixinprototype--"},"WidgetViewStateMixin.mixin(prototype) \u21d2 ",(0,a.kt)("code",null,"*")),(0,a.kt)("p",null,"Mix function from this mixin into supplied prototype."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#module_WidgetViewStateMixin"},(0,a.kt)("code",null,"WidgetViewStateMixin")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"*")," - The same prototype  "),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"prototype"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any")),(0,a.kt)("td",null,(0,a.kt)("p",null,"A view prototype."))),"  ")))}m.isMDXComponent=!0}}]);