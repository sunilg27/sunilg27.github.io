"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=s(n),c=o,m=v["".concat(p,".").concat(c)]||v[c]||d[c]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8099:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={},r=void 0,l={unversionedId:"api/d2/controls/mixins/layoutview.events.propagation.mixin",id:"api/d2/controls/mixins/layoutview.events.propagation.mixin",isDocsHomePage:!1,title:"layoutview.events.propagation.mixin",description:"LayoutViewEventPropagationMixin : d2/sdk/controls/mixins/layoutview.events.propagation.mixin",source:"@site/articles/api/d2/controls/mixins/layoutview.events.propagation.mixin.md",sourceDirName:"api/d2/controls/mixins",slug:"/api/d2/controls/mixins/layoutview.events.propagation.mixin",permalink:"/api/d2/controls/mixins/layoutview.events.propagation.mixin",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"sortable.list.view",permalink:"/api/d2/controls/list/sortable.list.view"},next:{title:"widget.view.state.mixin",permalink:"/api/d2/controls/mixins/widget.view.state.mixin"}},p=[{value:"LayoutViewEventPropagationMixin : <code>d2/sdk/controls/mixins/layoutview.events.propagation.mixin</code>",id:"layoutvieweventpropagationmixin--d2sdkcontrolsmixinslayoutvieweventspropagationmixin",children:[{value:"layoutViewEventPropagationMixin._eventsToPropagateToRegions : <code>Array.&lt;string&gt;</code>",id:"layoutvieweventpropagationmixin_eventstopropagatetoregions--arraystring",children:[]},{value:"layoutViewEventPropagationMixin.propagateEventsToRegions() \u21d2 <code>void</code>",id:"layoutvieweventpropagationmixinpropagateeventstoregions--void",children:[]},{value:"LayoutViewEventPropagationMixin.mixin(prototype) \u21d2 <code>void</code>",id:"layoutvieweventpropagationmixinmixinprototype--void",children:[]}]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_LayoutViewEventPropagationMixin"}),(0,o.kt)("h2",{id:"layoutvieweventpropagationmixin--d2sdkcontrolsmixinslayoutvieweventspropagationmixin"},"LayoutViewEventPropagationMixin : ",(0,o.kt)("code",null,"d2/sdk/controls/mixins/layoutview.events.propagation.mixin")),(0,o.kt)("p",null,"Event propagation mixin for Marionette LayoutView. Marionette Layout view fails to propagate view-lifecycle events to different\nchild views that it hosts in its regions.\nThis mixin makes it possible to establish the broken chain in a declarative style."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"Object"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(To use the mixin in a layout view)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/marionette',\n 'd2/sdk/controls/mixins/layoutview.events.propagation.mixin',\n], function(Marionette, LayoutViewEventsPropagationMixin){\n 'use strict';\n\n var MyView = Marionette.LayoutView.extend({\n   regions: {\n     header: '.header',\n     footer: '.footer'\n   },\n   constructor: function MyView(options) {\n     options = options || {};\n     MyView.__super__.constructor.call(this, options);\n\n     this.propagateEventsToRegions();\n   }\n });\n\n LayoutViewEventsPropagationMixin.mixin(MyView.prototype);\n\n var view = new MyView();\n new Marionette.Region({el: '.host-element'}).show(view); // With this default setup, whenever MyView instance receives 'dom:refresh' event, it is also relayed to views hosted in regions 'header' & 'footer'.\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_LayoutViewEventPropagationMixin"},"LayoutViewEventPropagationMixin")," : ",(0,o.kt)("code",null,"d2/sdk/controls/mixins/layoutview.events.propagation.mixin"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_LayoutViewEventPropagationMixin+_eventsToPropagateToRegions"},"._eventsToPropagateToRegions")," : ",(0,o.kt)("code",null,"Array.","<","string",">")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_LayoutViewEventPropagationMixin+propagateEventsToRegions"},".propagateEventsToRegions()")," \u21d2 ",(0,o.kt)("code",null,"void")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"static"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_LayoutViewEventPropagationMixin.mixin"},".mixin(prototype)")," \u21d2 ",(0,o.kt)("code",null,"void"))))))),(0,o.kt)("a",{name:"module_LayoutViewEventPropagationMixin+_eventsToPropagateToRegions"}),(0,o.kt)("h3",{id:"layoutvieweventpropagationmixin_eventstopropagatetoregions--arraystring"},"layoutViewEventPropagationMixin.","_","eventsToPropagateToRegions : ",(0,o.kt)("code",null,"Array.","<","string",">")),(0,o.kt)("p",null,"This property gets mixed with the view prototype. It should contain a list of Marionette view lifecycle events that are desired to\nbe propagated to each hosted child view when those events occur at the LayoutView level."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,o.kt)("a",{parentName:"p",href:"#module_LayoutViewEventPropagationMixin"},(0,o.kt)("code",null,"LayoutViewEventPropagationMixin")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Default"),": ",(0,o.kt)("code",null,"['","dom:refresh","']"),"  "),(0,o.kt)("a",{name:"module_LayoutViewEventPropagationMixin+propagateEventsToRegions"}),(0,o.kt)("h3",{id:"layoutvieweventpropagationmixinpropagateeventstoregions--void"},"layoutViewEventPropagationMixin.propagateEventsToRegions() \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"This method gets mixed with any Marionette.View prototype. This method should be called from within a view instance post construction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_LayoutViewEventPropagationMixin"},(0,o.kt)("code",null,"LayoutViewEventPropagationMixin")),"  "),(0,o.kt)("a",{name:"module_LayoutViewEventPropagationMixin.mixin"}),(0,o.kt)("h3",{id:"layoutvieweventpropagationmixinmixinprototype--void"},"LayoutViewEventPropagationMixin.mixin(prototype) \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"Method to add this mixin to a view prototype."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_LayoutViewEventPropagationMixin"},(0,o.kt)("code",null,"LayoutViewEventPropagationMixin")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"prototype"),(0,o.kt)("td",null,(0,o.kt)("code",null,"any")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The view prototype where is mixin is to be merged."))),"  ")))}u.isMDXComponent=!0}}]);