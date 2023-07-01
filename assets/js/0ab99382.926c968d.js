"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4076],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>p});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=r.createContext({}),m=function(e){var t=r.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},u=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=m(l),p=n,f=k["".concat(d,".").concat(p)]||k[p]||c[p]||o;return l?r.createElement(f,a(a({ref:t},u),{},{components:l})):r.createElement(f,a({ref:t},u))}));function p(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,a=new Array(o);a[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var m=2;m<o;m++)a[m]=l[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}k.displayName="MDXCreateElement"},6727:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=l(7462),n=(l(7294),l(3905));const o={},a=void 0,i={unversionedId:"api/d2/controls/form/form.view",id:"api/d2/controls/form/form.view",isDocsHomePage:!1,title:"form.view",description:"FormView : d2/sdk/controls/form/form.view",source:"@site/articles/api/d2/controls/form/form.view.md",sourceDirName:"api/d2/controls/form",slug:"/api/d2/controls/form/form.view",permalink:"/api/d2/controls/form/form.view",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"form.model",permalink:"/api/d2/controls/form/form.model"},next:{title:"globalmessage",permalink:"/api/d2/controls/globalmessage/globalmessage"}},d=[{value:"FormView : <code>d2/sdk/controls/form/form.view</code>",id:"formview--d2sdkcontrolsformformview",children:[{value:"formView.resetForm() \u21d2 <code>void</code>",id:"formviewresetform--void",children:[]},{value:"formView.validateForm(refreshState, validateOnlyRequiredFields) \u21d2 <code>jQyery.Promise</code>",id:"formviewvalidateformrefreshstate-validateonlyrequiredfields--jqyerypromise",children:[]},{value:"formView.getValues() \u21d2 <code>object</code>",id:"formviewgetvalues--object",children:[]},{value:"formView.getFlatFormValueMap(valueMap) \u21d2 <code>object</code>",id:"formviewgetflatformvaluemapvaluemap--object",children:[]},{value:"&quot;d2:change:formValidation&quot;",id:"d2changeformvalidation",children:[]},{value:"&quot;change:field&quot;",id:"changefield",children:[]},{value:"&quot;valid:field&quot;",id:"validfield",children:[]},{value:"&quot;invalid:field&quot;",id:"invalidfield",children:[]},{value:"&quot;form:changed&quot;",id:"formchanged",children:[]},{value:"&quot;render:form&quot;",id:"renderform",children:[]},{value:"FormView~FormView",id:"formviewformview",children:[]},{value:"FormView~FormValidationCallback : <code>function</code>",id:"formviewformvalidationcallback--function",children:[]}]}],m={toc:d};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_FormView"}),(0,n.kt)("h2",{id:"formview--d2sdkcontrolsformformview"},"FormView : ",(0,n.kt)("code",null,"d2/sdk/controls/form/form.view")),(0,n.kt)("p",null,"FormView. Create and render an arbitrary HTML form using JSON schema. Form also provides manage API to validate & collect form data."),(0,n.kt)("p",null,"Uses ",(0,n.kt)("inlineCode",{parentName:"p"},"FormModel")," to hold the JSON schema that drives the form rendering. See ",(0,n.kt)("a",{parentName:"p",href:"./form.model"},"FormModel")," for examples of how to\ncreate a ",(0,n.kt)("inlineCode",{parentName:"p"},"FormModel")," from literal JSON data and dialog-like D2-REST API response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends"),": ",(0,n.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.itemview.html"},(0,n.kt)("code",null,"Marionette.ItemView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Emits"),": ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView+event_d2_change_formValidation"},(0,n.kt)("code",null,"d2:change:formValidation")),", ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView+change_field"},(0,n.kt)("code",null,"change:field")),", ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView+valid_field"},(0,n.kt)("code",null,"valid:field")),", ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView+invalid_field"},(0,n.kt)("code",null,"invalid:field")),", ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView+form_changed"},(0,n.kt)("code",null,"form:changed")),", ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView+render_form"},(0,n.kt)("code",null,"render:form")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(To create a form view)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'd2/sdk/controls/form/form.view',\n 'd2/sdk/controls/form/form.model'\n], function(FormView, FormModel){\n 'use strict';\n\n var formOptions = {\n   topAlignedLabel: true,\n   mode: 'create',\n   layoutMode: 'singleCol',\n   model: createFormModel()\n };\n\n function createFormModel() {\n   var formSchema;\n\n   // populate form schema\n\n   return new FormModel(formSchema);\n }\n\n var formView = new FormView(formOptions); //For controlling any business specific, behavior FormView could be extended to attach business specific logic\n\n formView.on('render:form', function(){\n   console.log('Form is rendered');\n });\n\n new Marionette.Region({el: '.my-form-container'}).show(formView);\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView"},"FormView")," : ",(0,n.kt)("code",null,"d2/sdk/controls/form/form.view"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"instance"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+resetForm"},".resetForm()")," \u21d2 ",(0,n.kt)("code",null,"void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+validateForm"},".validateForm(refreshState, validateOnlyRequiredFields)")," \u21d2 ",(0,n.kt)("code",null,"jQyery.Promise")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+getValues"},".getValues()")," \u21d2 ",(0,n.kt)("code",null,"object")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+getFlatFormValueMap"},".getFlatFormValueMap(valueMap)")," \u21d2 ",(0,n.kt)("code",null,"object")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+event_d2_change_formValidation"},'"d2:change:formValidation"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+change_field"},'"change:field"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+valid_field"},'"valid:field"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+invalid_field"},'"invalid:field"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+form_changed"},'"form:changed"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView+render_form"},'"render:form"')))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"inner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView..FormView"},"~FormView"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_FormView..FormView_new"},"new FormView(options)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_FormView..FormValidationCallback"},"~FormValidationCallback")," : ",(0,n.kt)("code",null,"function"))))))),(0,n.kt)("a",{name:"module_FormView+resetForm"}),(0,n.kt)("h3",{id:"formviewresetform--void"},"formView.resetForm() \u21d2 ",(0,n.kt)("code",null,"void")),(0,n.kt)("p",null,"Reset the current form removing all user inputs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView+validateForm"}),(0,n.kt)("h3",{id:"formviewvalidateformrefreshstate-validateonlyrequiredfields--jqyerypromise"},"formView.validateForm(refreshState, validateOnlyRequiredFields) \u21d2 ",(0,n.kt)("code",null,"jQyery.Promise")),(0,n.kt)("p",null,"Validate current form values and ensure form contraints are met."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"jQyery.Promise")," - - Promise is resolved with validation status. A ",(0,n.kt)("inlineCode",{parentName:"p"},"FormValidationDone")," callback could be invoked with the validation result.  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"refreshState"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to clear previous validation status before running this one."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"validateOnlyRequiredFields"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to perform only a required field validation or all other contraints as well."))),"  ")),(0,n.kt)("a",{name:"module_FormView+getValues"}),(0,n.kt)("h3",{id:"formviewgetvalues--object"},"formView.getValues() \u21d2 ",(0,n.kt)("code",null,"object")),(0,n.kt)("p",null,"Get current field values"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"object")," - A JSON in the same structure as the form's field layout definition, it contains key-value pairs at each level where key corresponds\nto form field name and value corresponds to the data collected from the field.  "),(0,n.kt)("a",{name:"module_FormView+getFlatFormValueMap"}),(0,n.kt)("h3",{id:"formviewgetflatformvaluemapvaluemap--object"},"formView.getFlatFormValueMap(valueMap) \u21d2 ",(0,n.kt)("code",null,"object")),(0,n.kt)("p",null,"Get current field values formatted as a flattened single level key-value hash."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"object")," - Flattened key-value map.  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"valueMap"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"The hierarchical form value map. Basically the return value of ",(0,n.kt)("code",null,"getValues()")," could be passed as this parameter."))),"  ")),(0,n.kt)("a",{name:"module_FormView+event_d2_change_formValidation"}),(0,n.kt)("h3",{id:"d2changeformvalidation"},'"d2:change:formValidation"'),(0,n.kt)("p",null,"Indicates form validation status has changed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView+change_field"}),(0,n.kt)("h3",{id:"changefield"},'"change:field"'),(0,n.kt)("p",null,"Indicates a field value has been updated."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView+valid_field"}),(0,n.kt)("h3",{id:"validfield"},'"valid:field"'),(0,n.kt)("p",null,"Indicates a field cotains a valid value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView+invalid_field"}),(0,n.kt)("h3",{id:"invalidfield"},'"invalid:field"'),(0,n.kt)("p",null,"Indicates a field contains an invalid value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView+form_changed"}),(0,n.kt)("h3",{id:"formchanged"},'"form:changed"'),(0,n.kt)("p",null,"Indicates that form data has changed somehow."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView+render_form"}),(0,n.kt)("h3",{id:"renderform"},'"render:form"'),(0,n.kt)("p",null,"Indicates that form has been fully rendered in UI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"module_FormView..FormView"}),(0,n.kt)("h3",{id:"formviewformview"},"FormView~FormView"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("a",{name:"new_module_FormView..FormView_new"}),(0,n.kt)("h4",{id:"new-formviewoptions"},"new FormView(options)"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"options"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Constructor options"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"options.model"),(0,n.kt)("td",null,(0,n.kt)("code",null,(0,n.kt)("a",{href:"./form.model"},"FormModel"))),(0,n.kt)("td",null,(0,n.kt)("p",null,"The data holder having schema definition for this form instance."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"options.context"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Context")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Reference to the application context."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.topAlignedLabel]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to place label at the top of form field or side-by-side fashion. Defaults to ",(0,n.kt)("code",null,"false"),"."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.mode]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Controls rendering of the form. Possible values are ",(0,n.kt)("code",null,"'create', 'read', 'update'"),". Defaults to ",(0,n.kt)("code",null,"update"),". The",(0,n.kt)("code",null,"read")," mode renders a readonly form. Whereas, the ",(0,n.kt)("code",null,"update")," & ",(0,n.kt)("code",null,"create")," mode are equivalent and allows form field value modification. The difference between ",(0,n.kt)("code",null,"update")," and ",(0,n.kt)("code",null,"create")," is that form is initially not validated for required values and other conditions for ",(0,n.kt)("code",null,"create")," mode until user starts to interact with the form."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.layoutMode]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to layout the form in a single or double column fashion. Supported values are ",(0,n.kt)("code",null,"'singleCol', 'doubleCol'"),". Defaults to ",(0,n.kt)("code",null,"singleCol"),"."))),"  ")),(0,n.kt)("a",{name:"module_FormView..FormValidationCallback"}),(0,n.kt)("h3",{id:"formviewformvalidationcallback--function"},"FormView~FormValidationCallback : ",(0,n.kt)("code",null,"function")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,n.kt)("a",{parentName:"p",href:"#module_FormView"},(0,n.kt)("code",null,"FormView")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"isValid"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether the form is valid."))),"  ")))}u.isMDXComponent=!0}}]);