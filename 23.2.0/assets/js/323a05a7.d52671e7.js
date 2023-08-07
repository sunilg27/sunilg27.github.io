"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(r),p=l,b=k["".concat(s,".").concat(p)]||k[p]||d[p]||a;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={sidebar_position:1.02,sidebar_label:"Extend/Override D2FS services"},o="Extending/Overriding D2FS service through Service Plugin",i={unversionedId:"general/howto/1_02_d2rest.d2fs.supported.services",id:"general/howto/1_02_d2rest.d2fs.supported.services",title:"Extending/Overriding D2FS service through Service Plugin",description:"If developer wants to create a customization which needs to override/extend the existing functionality of a D2FS service, the developer can create custom class",source:"@site/articles/general/howto/1_02_d2rest.d2fs.supported.services.md",sourceDirName:"general/howto",slug:"/general/howto/1_02_d2rest.d2fs.supported.services",permalink:"/23.2.0/next/general/howto/1_02_d2rest.d2fs.supported.services",draft:!1,tags:[],version:"current",sidebarPosition:1.02,frontMatter:{sidebar_position:1.02,sidebar_label:"Extend/Override D2FS services"},sidebar:"general",previous:{title:"Debug Smartview code",permalink:"/23.2.0/next/general/howto/1_01_debug_sv_ui"},next:{title:"Declare custom widget types for D2SV",permalink:"/23.2.0/next/general/howto/1_03_custom.widget.type"}},s={},u=[],c={toc:u},k="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(k,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"extendingoverriding-d2fs-service-through-service-plugin"},"Extending/Overriding D2FS service through Service Plugin"),(0,l.kt)("p",null,"If developer wants to create a customization which needs to override/extend the existing functionality of a D2FS service, the developer can create custom class\nwith the ",(0,l.kt)("b",null,"\"(D2FS Services Name)Plugin.java'")," which extends the D2FS service class and implements ",(0,l.kt)("strong",{parentName:"p"},"ID2fsPlugin")," class. For an example -"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"package com.opentext.d2.smartview.d2svdialogs.webfs.dialog;\n\nimport com.emc.d2fs.dctm.web.services.ID2fsPlugin;\nimport com.emc.d2fs.dctm.web.services.dialog.D2DialogService;\nimport com.emc.d2fs.models.context.Context;\nimport com.emc.d2fs.models.attribute.Attribute;\nimport com.emc.d2fs.models.dialog.Dialog;\nimport java.util.List;\n\npublic class D2DialogServicePlugin extends D2DialogService implements ID2fsPlugin {\n    ...\n    public Dialog validDialog(Context context, String id, String dialogName, List<Attribute> parameters) throws Exception {\n        //custom logic\n        \n        //If the following line is executed during an invocation then it becomes an extension, otherwise it becomes an override.\n        return super.validDialog(context, id, dialogName, parameters);\n    }\n    ...\n}\n")),(0,l.kt)("p",null,"Following services can only be extended/overriden for the supported methods. Below table lists both overidable\nand non-overridable methods for D2-Smartview "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Services"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Overridable Methods"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Non-Overridable  Methods"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2CreationService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"applyVdTemplate",(0,l.kt)("br",null),"getVDTemplates",(0,l.kt)("br",null),"setTemplate",(0,l.kt)("br",null),"getTemplates",(0,l.kt)("br",null),"getTemplates",(0,l.kt)("br",null),"updateTemplatesListwithFilter",(0,l.kt)("br",null),"getConvertStructureConfig",(0,l.kt)("br",null),"createTemplateFromServer",(0,l.kt)("br",null),"createProperties",(0,l.kt)("br",null),"getRecentlyUsedVDTemplates",(0,l.kt)("br",null),"getImportStructureConfigs",(0,l.kt)("br",null),"getRecentlyUsedTemplates"),(0,l.kt)("td",{parentName:"tr",align:"right"},"hasAnyAttachments",(0,l.kt)("br",null),"removeAttachments",(0,l.kt)("br",null),"getUIMaxSize",(0,l.kt)("br",null),"hasAttachments",(0,l.kt)("br",null),"hasAttachments",(0,l.kt)("br",null),"getFilteredTemplates",(0,l.kt)("br",null),"isAFolderOrACabinet",(0,l.kt)("br",null),"getTemplateFilterOptions",(0,l.kt)("br",null),"isNoCreationProfile",(0,l.kt)("br",null),"isNoContentAuthorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2DialogService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"getOptions",(0,l.kt)("br",null),"getDialog",(0,l.kt)("br",null),"validDialog",(0,l.kt)("br",null),"cancelDialog"),(0,l.kt)("td",{parentName:"tr",align:"right"},"getTaxonomy",(0,l.kt)("br",null),"getLabels",(0,l.kt)("br",null),"isMemberOfGroup",(0,l.kt)("br",null),"getImportValuesUrl",(0,l.kt)("br",null),"getSubforms",(0,l.kt)("br",null),"getExportValuesUrl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2PropertyService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"dump",(0,l.kt)("br",null),"saveProperties",(0,l.kt)("br",null),"saveProperties"),(0,l.kt)("td",{parentName:"tr",align:"right"},"getProperties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2WorkflowService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"rerunAutoActivity",(0,l.kt)("br",null),"resumeTask",(0,l.kt)("br",null),"pauseTask",(0,l.kt)("br",null),"setTaskPriority",(0,l.kt)("br",null),"updateWorkflowSupervisor",(0,l.kt)("br",null),"getWorkflowTemplatesByWidgetName",(0,l.kt)("br",null),"removeWorkflowSupportingDocuments",(0,l.kt)("br",null),"isTaskQueueItemRead",(0,l.kt)("br",null),"addWorkflowSupportingDocuments",(0,l.kt)("br",null),"getWorkflowUsersByWidgetName",(0,l.kt)("br",null),"getWorkflowWorkingDocumentsCount",(0,l.kt)("br",null),"getWorkflowSupportingDocumentsCount",(0,l.kt)("br",null),"completeAutoActivity",(0,l.kt)("br",null),"getWorkflowAttachments",(0,l.kt)("br",null),"checkLifeCycle",(0,l.kt)("br",null),"pauseWorkflow",(0,l.kt)("br",null),"processTask",(0,l.kt)("br",null),"addNoteToTask",(0,l.kt)("br",null),"launchWorkflow",(0,l.kt)("br",null),"abortWorkflow",(0,l.kt)("br",null),"canAddTaskNote",(0,l.kt)("br",null),"delegateTask",(0,l.kt)("br",null),"setTaskReadState",(0,l.kt)("br",null),"resumeWorkflow",(0,l.kt)("br",null),"updatePerformer",(0,l.kt)("br",null),"fetchWorkflowConfig",(0,l.kt)("br",null),"checkAttachmentLockState",(0,l.kt)("br",null),"getWorkflowStatusSummary",(0,l.kt)("br",null),"verifyEntryCriterias",(0,l.kt)("br",null),"verifyEntryCriteria",(0,l.kt)("br",null),"launchScheduledWorkflow",(0,l.kt)("br",null),"acquireTaskAndGetState",(0,l.kt)("br",null),"getUnreadTasks",(0,l.kt)("br",null),"delegateTaskEx",(0,l.kt)("br",null),"addNoteToWorkflow",(0,l.kt)("br",null),"doAutoTaskAction"),(0,l.kt)("td",{parentName:"tr",align:"right"},"isTaskAcquired",(0,l.kt)("br",null),"getTaskMode",(0,l.kt)("br",null),"acquireTask",(0,l.kt)("br",null),"getTaskPermissions",(0,l.kt)("br",null),"canRejectTask",(0,l.kt)("br",null),"canForwardTask",(0,l.kt)("br",null),"canDelegateTask",(0,l.kt)("br",null),"checkPropertyPage",(0,l.kt)("br",null),"checkPropertyPage",(0,l.kt)("br",null),"getTaskFolderLabel",(0,l.kt)("br",null),"canAbortWorkflow",(0,l.kt)("br",null),"getConfigurationsNames",(0,l.kt)("br",null),"getWorkflowDisplayName",(0,l.kt)("br",null),"checkWorkflowAliases",(0,l.kt)("br",null),"delegateTaskOnError",(0,l.kt)("br",null),"isManualAcquisitionTask")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2CheckoutService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"checkout",(0,l.kt)("br",null),"cancelCheckout",(0,l.kt)("br",null),"testCheckout",(0,l.kt)("br",null),"testControlledPrint"),(0,l.kt)("td",{parentName:"tr",align:"right"},"cancelCheckoutAll",(0,l.kt)("br",null),"checkoutAsNew",(0,l.kt)("br",null),"getNumberOfCheckoutDocument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2CheckinService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"getCheckinConfig"),(0,l.kt)("td",{parentName:"tr",align:"right"},"checkin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D2DownloadService"),(0,l.kt)("td",{parentName:"tr",align:"center"},"checkin",(0,l.kt)("br",null),"getUploadUrls",(0,l.kt)("br",null),"getUploadUrls",(0,l.kt)("br",null),"getUploadUrls",(0,l.kt)("br",null),"getPageServingUrl",(0,l.kt)("br",null),"getCheckinUrls",(0,l.kt)("br",null),"getDownloadUrls",(0,l.kt)("br",null),"getExtractUrls",(0,l.kt)("br",null),"getFile",(0,l.kt)("br",null),"setFile",(0,l.kt)("br",null),"hasAnyValidC2ExportAndRenditionConfig",(0,l.kt)("br",null),"getDefaultServerInfo",(0,l.kt)("br",null),"checkinAndLifeCycle",(0,l.kt)("br",null),"extractDcoumentProperty",(0,l.kt)("br",null),"getImportStructureUrls",(0,l.kt)("br",null),"setDocumentProperty",(0,l.kt)("br",null),"extractProperties",(0,l.kt)("br",null),"getDownloadObjectId"),(0,l.kt)("td",{parentName:"tr",align:"right"},"getFileInfo",(0,l.kt)("br",null),"getObjectsDownloadUrls",(0,l.kt)("br",null),"canPrintControlledView",(0,l.kt)("br",null),"getDispatchDownloadUrl",(0,l.kt)("br",null),"getDownloadFileDetails",(0,l.kt)("br",null),"isProtectedInControlledView",(0,l.kt)("br",null),"addRendition")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"In case any unsupported methods are overriden by a plugin, it will be shown as warning in ",(0,l.kt)("inlineCode",{parentName:"p"},"D2-Smartview.log")," during startup of the application")))}d.isMDXComponent=!0}}]);