(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4d29046"],{"0014":function(e,t,n){},"3f25":function(e,t,n){},5738:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"m",(function(){return r})),n.d(t,"l",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"p",(function(){return i})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"k",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return v})),n.d(t,"q",(function(){return m})),n.d(t,"o",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j})),n.d(t,"n",(function(){return h}));n("99af");var a=n("b32d");function c(){return a["a"].get("ams/v1/catalogs")}function o(e){var t=e.catalog,n=e.keywords;return a["a"].get("ams/v1/catalogs/".concat(t,"/databases"),{params:{keywords:n}})}function r(e){var t=e.catalog,n=e.db,c=e.keywords;return a["a"].get("ams/v1/catalogs/".concat(t,"/databases/").concat(n,"/tables"),{params:{keywords:c}})}function l(e){var t=e.catalog,n=void 0===t?"":t,c=e.db,o=void 0===c?"":c,r=e.table,l=void 0===r?"":r,u=e.token,i=void 0===u?"":u;return a["a"].get("ams/v1/tables/catalogs/".concat(n,"/dbs/").concat(o,"/tables/").concat(l,"/details"),{params:{token:i}})}function u(e){var t=e.catalog,n=void 0===t?"":t,c=e.db,o=void 0===c?"":c,r=e.table,l=void 0===r?"":r;return a["a"].get("ams/v1/tables/catalogs/".concat(n,"/dbs/").concat(o,"/tables/").concat(l,"/hive/details"))}function i(e){var t=e.catalog,n=void 0===t?"":t,c=e.db,o=void 0===c?"":c,r=e.table,l=void 0===r?"":r;return a["a"].get("ams/v1/tables/catalogs/".concat(n,"/dbs/").concat(o,"/tables/").concat(l,"/upgrade/status"))}function s(e){var t=e.catalog,n=e.db,c=e.table,o=e.page,r=e.pageSize,l=e.token;return a["a"].get("ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/partitions"),{params:{page:o,pageSize:r,token:l}})}function d(e){var t=e.catalog,n=e.db,c=e.table,o=e.partition,r=e.specId,l=e.page,u=e.pageSize,i=e.token;return a["a"].get("ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/partitions/").concat(o,"/files"),{params:{specId:r,page:l,pageSize:u,token:i}})}function b(e){var t=e.catalog,n=e.db,c=e.table,o=e.page,r=e.pageSize,l=e.token,u=e.ref,i=e.operation;return a["a"].get("ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/snapshots"),{params:{page:o,pageSize:r,token:l,ref:u,operation:i}})}function p(e){var t=e.catalog,n=e.db,c=e.table,o=e.snapshotId,r=e.page,l=e.pageSize,u=e.token;return a["a"].get("ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/snapshots/").concat(o,"/detail"),{params:{page:r,pageSize:l,token:u}})}function f(e){var t=e.catalog,n=e.db,c=e.table,o=e.page,r=e.pageSize,l=e.token;return a["a"].get("ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/operations"),{params:{page:o,pageSize:r,token:l}})}function v(e){var t=e.catalog,n=e.db,c=e.table,o=e.page,r=e.pageSize,l=e.token;return a["a"].get("ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/optimizing-processes"),{params:{page:o,pageSize:r,token:l}})}function m(e){var t=e.catalog,n=void 0===t?"":t,c=e.db,o=void 0===c?"":c,r=e.table,l=void 0===r?"":r,u=e.properties,i=void 0===u?{}:u,s=e.pkList,d=void 0===s?[]:s;return a["a"].post("ams/v1/tables/catalogs/".concat(n,"/dbs/").concat(o,"/tables/").concat(l,"/upgrade"),{properties:i,pkList:d})}function g(){return a["a"].get("ams/v1/upgrade/properties")}function O(e){var t=e.catalog,n=void 0===t?"":t,c=e.db,o=void 0===c?"":c,r=e.table,l=void 0===r?"":r,u=e.processId,i=void 0===u?"":u;return a["a"].post("ams/v1/tables/catalogs/".concat(n,"/dbs/").concat(o,"/tables/").concat(l,"/optimizing-processes/").concat(i,"/cancel"))}function j(e){var t=e.catalog,n=e.db,c=e.table;return a["a"].get("/ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/branches"))}function h(e){var t=e.catalog,n=e.db,c=e.table;return a["a"].get("/ams/v1/tables/catalogs/".concat(t,"/dbs/").concat(n,"/tables/").concat(c,"/tags"))}},8552:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("7a23"),c=n("47e2");function o(){var e=Object(c["b"])(),t=e.t,n=Object(a["computed"])((function(){return t("catalog")})).value,o=Object(a["computed"])((function(){return t("databaseName")})).value,r=Object(a["computed"])((function(){return t("tableName")})).value,l=Object(a["computed"])((function(){return t("optimzerGroup")})).value,u=Object(a["computed"])((function(){return t("resourceGroup")})).value,i=Object(a["computed"])((function(){return t("parallelism")})).value,s=Object(a["computed"])((function(){return t("username")})).value,d=Object(a["computed"])((function(){return t("password")})).value,b=Object(a["computed"])((function(){return t("database",2)})).value,p=Object(a["computed"])((function(){return t("table",2)})).value,f=Object(a["computed"])((function(){return t("name")})).value,v=Object(a["computed"])((function(){return t("container")})).value;return{selectPh:t("selectPlaceholder"),inputPh:t("inputPlaceholder"),selectClPh:t("selectPlaceholder",{selectPh:n}),selectDBPh:t("selectPlaceholder",{selectPh:o}),inputDBPh:t("inputPlaceholder",{inputPh:o}),inputClPh:t("inputPlaceholder",{inputPh:n}),inputTNPh:t("inputPlaceholder",{inputPh:r}),selectOptGroupPh:t("inputPlaceholder",{inputPh:l}),resourceGroupPh:t("inputPlaceholder",{inputPh:u}),parallelismPh:t("inputPlaceholder",{inputPh:i}),usernamePh:t("inputPlaceholder",{inputPh:s}),passwordPh:t("inputPlaceholder",{inputPh:d}),filterDBPh:t("filterPlaceholder",{inputPh:b}),filterTablePh:t("filterPlaceholder",{inputPh:p}),groupNamePh:t("inputPlaceholder",{inputPh:f}),groupContainer:t("selectPlaceholder",{selectPh:v})}}},9065:function(e,t,n){"use strict";n("0014")},b0b0:function(e,t,n){"use strict";n("d9da")},b7af:function(e,t,n){"use strict";n("3f25")},d323:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"console-wrap"},o={class:"sql-block"},r={class:"top-ops g-flex-jsb"},l={class:"title-left g-flex-ac"},u={class:"select-catalog g-mr-12"},i={class:"label"},s={class:"title-right"},d={class:"sql-content"},b={class:"sql-raw"},p={class:"g-ml-12"},f={class:"sql-shortcuts"},v={class:"shortcuts"},m={class:"tab-operation"},g={class:"tab"},O=["onClick"],j={class:"debug-result"};function h(e,t,n,h,k,C){var y=Object(a["resolveComponent"])("a-select"),w=Object(a["resolveComponent"])("svg-icon"),B=Object(a["resolveComponent"])("a-tooltip"),N=Object(a["resolveComponent"])("sql-editor"),S=Object(a["resolveComponent"])("loading-outlined"),E=Object(a["resolveComponent"])("close-circle-outlined"),V=Object(a["resolveComponent"])("check-circle-outlined"),x=Object(a["resolveComponent"])("a-button"),P=Object(a["resolveComponent"])("sql-log"),q=Object(a["resolveComponent"])("sql-result"),R=Object(a["resolveComponent"])("u-loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["console-content",{fullscreen:e.fullscreen}])},[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])({height:"".concat(e.sqlResultHeight,"px")}),class:"sql-wrap"},[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("span",i,Object(a["toDisplayString"])(e.$t("use")),1),Object(a["createVNode"])(y,{value:e.curCatalog,"onUpdate:value":t[0]||(t[0]=function(t){return e.curCatalog=t}),style:{width:"200px"},options:e.catalogOptions,onChange:e.changeUseCatalog},null,8,["value","options","onChange"])]),"Running"===e.runStatus?(Object(a["openBlock"])(),Object(a["createBlock"])(B,{key:0,title:e.$t("pause"),placement:"bottom"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{className:"icon-svg","icon-class":"sqlpause",onClick:t[1]||(t[1]=function(t){return e.handleIconClick("pause")}),class:"g-mr-12",disabled:e.readOnly},null,8,["disabled"])]})),_:1},8,["title"])):(Object(a["openBlock"])(),Object(a["createBlock"])(B,{key:1,title:e.$t("run"),placement:"bottom"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{className:"icon-svg","icon-class":"sqldebug",onClick:t[2]||(t[2]=function(t){return e.handleIconClick("debug")}),class:"g-mr-12",disabled:e.readOnly},null,8,["disabled"])]})),_:1},8,["title"])),Object(a["createVNode"])(B,{title:e.$t("format"),placement:"bottom"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{className:"icon-svg",isStroke:!0,"icon-class":"format",onClick:t[3]||(t[3]=function(t){return e.handleIconClick("format")}),disabled:e.readOnly},null,8,["disabled"])]})),_:1},8,["title"])]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(B,{title:e.fullscreen?e.$t("recovery"):e.$t("fullscreen"),placement:"bottom",getPopupContainer:e.getPopupContainer},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{className:"icon-svg",isStroke:!0,"icon-class":e.fullscreen?"sqlinit":"sqlmax",onClick:e.handleFull,disabled:!1,class:"g-ml-12"},null,8,["icon-class","onClick"])]})),_:1},8,["title","getPopupContainer"])])]),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(N,{ref:"sqlEditorRef",sqlValue:e.sqlSource,value:e.sqlSource,"onUpdate:value":t[4]||(t[4]=function(t){return e.sqlSource=t}),readOnly:e.readOnly,options:{readOnly:e.readOnly,minimap:{enabled:!1}}},null,8,["sqlValue","value","readOnly","options"])]),e.runStatus?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,class:"run-status",style:Object(a["normalizeStyle"])({background:e.bgcMap[e.runStatus]})},["Running"===e.runStatus||"Canceling"===e.runStatus?(Object(a["openBlock"])(),Object(a["createBlock"])(S,{key:0,style:{color:"#1890ff"}})):Object(a["createCommentVNode"])("",!0),"Canceled"===e.runStatus||"Failed"===e.runStatus?(Object(a["openBlock"])(),Object(a["createBlock"])(E,{key:1,style:{color:"#ff4d4f"}})):Object(a["createCommentVNode"])("",!0),"Finished"===e.runStatus?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:2,style:{color:"#52c41a"}})):Object(a["createCommentVNode"])("",!0),"Created"===e.runStatus?(Object(a["openBlock"])(),Object(a["createBlock"])(E,{key:3,style:{color:"#333"}})):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",p,Object(a["toDisplayString"])(e.$t(e.runStatus)),1)],4)):Object(a["createCommentVNode"])("",!0)])]),Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("div",v,Object(a["toDisplayString"])(e.$t("sqlShortcuts")),1),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.shortcuts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(x,{key:t,type:"link",disabled:"Running"===e.runStatus||"Canceling"===e.runStatus,onClick:function(n){return e.generateCode(t)},class:"code"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t),1)]})),_:2},1032,["disabled","onClick"])})),128))])],4),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["sql-result",e.resultFullscreen?"result-full":""]),style:Object(a["normalizeStyle"])({height:"calc(100% - ".concat(e.sqlResultHeight,"px)")})},[Object(a["createElementVNode"])("span",{class:"drag-line",onMousedown:t[5]||(t[5]=function(){return e.dragMounseDown&&e.dragMounseDown.apply(e,arguments)})},[Object(a["createVNode"])(w,{class:"icon","icon-class":"slide"})],32),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])([{active:"log"===e.operationActive},"tab-item"]),onClick:t[6]||(t[6]=function(t){return e.operationActive="log"})},Object(a["toDisplayString"])(e.$t("log")),3),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.resultTabList,(function(t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{key:t.id,class:Object(a["normalizeClass"])([{active:e.operationActive===t.id},"tab-item"]),onClick:function(n){return e.operationActive=t.id}},Object(a["toDisplayString"])(t.id),11,O)})),128))])]),Object(a["createElementVNode"])("div",j,[Object(a["withDirectives"])(Object(a["createVNode"])(P,{ref:"sqlLogRef"},null,512),[[a["vShow"],"log"===e.operationActive]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.resultTabList,(function(t){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:t.id},[e.operationActive===t.id?(Object(a["openBlock"])(),Object(a["createBlock"])(q,{key:0,info:t},null,8,["info"])):Object(a["createCommentVNode"])("",!0)],64)})),128))])],6)],2),e.loading?(Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:0})):Object(a["createCommentVNode"])("",!0)])}n("3b18");var k=n("f64c"),C=n("2909"),y=n("1da1"),w=(n("96cf"),n("d3b7"),n("159b"),n("c740"),n("a15b"),n("5530")),B=n("c2c6"),N={theme:"arcticSql",language:"sql",fontSize:12,lineHeight:24,fontFamily:'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',folding:!0,suggestLineHeight:20,autoIndent:!0,renderLineHighlight:"all",scrollBeyondLastLine:!1,contextmenu:!1,readOnly:!0,fixedOverflowWidgets:!0},S=Object.assign({},N,{theme:"arcticSql",language:"sql",readOnly:!1,lineHeight:24,fontSize:12,fontFamily:'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',lineNumbersMinChars:3,wordWrap:"on",renderLineHighlight:"all",minimap:{enabled:!1},contextmenu:!1,automaticLayout:!0,scrollBeyondLastLine:!1}),E=Object(a["defineComponent"])({props:{sqlValue:null,options:null,readOnly:{type:Boolean}},emits:["save","update:value","change"],setup:function(e,t){var n,c=t.expose,o=t.emit,r=e,l="",u={};function i(){n&&n.layout()}function s(){if(n){var e=n.addCommand(B["KeyMod"].CtrlCmd|B["KeyCode"].KEY_S,(function(){o("save")}));u.save=e;var t=n.addCommand(B["KeyMod"].Alt|B["KeyMod"].Shift|B["KeyCode"].KEY_F,(function(){d()}));u.format=t}}function d(){var e=n&&n.getAction("editor.action.formatDocument");e&&e.run()}return Object(a["watch"])((function(){return r.sqlValue}),(function(e){e&&l!==e&&n&&n.setValue(e)})),window.addEventListener("resize",i),c({executeCommand:function(e){var t=u[e],a=n;t&&a&&a._commandService.executeCommand(t)},updateOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n&&n.updateOptions(e)}}),Object(a["onBeforeUnmount"])((function(){window.removeEventListener("resize",i),n&&n.dispose()})),Object(a["onMounted"])((function(){var e=document.getElementsByClassName("m-sql-editor")[0];Object(a["nextTick"])((function(){var t=n=B["editor"].create(e,Object(w["a"])(Object(w["a"])({},S),r.options));s(),t.setValue(r.sqlValue||""),t.onDidChangeModelContent((function(e){var t=n.getValue();o("update:value",t),o("change",t),l=t}))}))})),function(t,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["m-sql-editor",{disabled:e.readOnly}]),style:{height:"100%",width:"100%"}},null,2)}}}),V=(n("fea2"),n("6b0d")),x=n.n(V);const P=x()(E,[["__scopeId","data-v-13c652ee"]]);var q=P,R=n("f38b"),L=n("8fe6"),I=n("411c"),z=n("d34f"),D={class:"sql-result-wrap"},M={class:"g-ml-8"},F={key:0,class:"empty"},H={key:1,class:"result-wrap"},T={class:"ant-table sql-result-table",style:{width:"100%"}},A={class:"ant-table-thead"},_={class:"ant-table-tbody"},G=["title"],U=Object(a["defineComponent"])({props:{info:null},setup:function(e){var t=e,n=Object(a["computed"])((function(){var e;return!t.info||!(null!==(e=t.info)&&void 0!==e&&e.columns)})),c=Object(a["computed"])((function(){var e;return null===(e=t.info)||void 0===e?void 0:e.status}));return function(e,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",D,[Object(a["createElementVNode"])("div",{class:"result-status",style:Object(a["normalizeStyle"])({background:Object(a["unref"])(R["b"])[Object(a["unref"])(c)]})},["Running"===Object(a["unref"])(c)?(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["unref"])(L["a"]),{key:0,style:{color:"#1890ff"}})):Object(a["createCommentVNode"])("",!0),"Canceled"===Object(a["unref"])(c)||"Failed"===Object(a["unref"])(c)?(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["unref"])(I["a"]),{key:1,style:{color:"#ff4d4f"}})):Object(a["createCommentVNode"])("",!0),"Finished"===Object(a["unref"])(c)?(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["unref"])(z["a"]),{key:2,style:{color:"#52c41a"}})):Object(a["createCommentVNode"])("",!0),"Created"===Object(a["unref"])(c)?(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["unref"])(I["a"]),{key:3,style:{color:"#333"}})):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",M,Object(a["toDisplayString"])(Object(a["unref"])(c)),1)],4),Object(a["unref"])(n)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",F,Object(a["toDisplayString"])(e.$t("noResult")),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",H,[Object(a["createElementVNode"])("table",T,[Object(a["createElementVNode"])("thead",A,[Object(a["createElementVNode"])("tr",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.info.columns,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("th",{key:e},Object(a["toDisplayString"])(e),1)})),128))])]),Object(a["createElementVNode"])("tbody",_,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.info.rowData,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:t+1},[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e,(function(e,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("td",{key:t+e+n},[Object(a["createElementVNode"])("span",{class:"td-val",title:e},Object(a["toDisplayString"])(e),9,G)])})),128))])})),128))])])]))])}}});n("9065");const $=x()(U,[["__scopeId","data-v-5e56b470"]]);var K=$,Y={class:"sql-log"},J=["innerHTML"],W=Object(a["defineComponent"])({setup:function(e,t){var n=t.expose,c=Object(a["ref"])("");return n({initData:function(e){c.value=e}}),function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Y,[Object(a["createElementVNode"])("div",{innerHTML:c.value,style:{"white-space":"pre-wrap","font-size":"12px"}},null,8,J)])}}});n("b0b0");const Z=x()(W,[["__scopeId","data-v-d5f228ba"]]);var Q=Z,X=n("b32d");function ee(e){return X["a"].get("ams/v1/terminal/".concat(e,"/result"))}function te(){return X["a"].get("ams/v1/terminal/examples")}function ne(e){return X["a"].get("ams/v1/terminal/examples/".concat(e))}function ae(e){var t=e.catalog,n=e.sql;return X["a"].post("ams/v1/terminal/catalogs/".concat(t,"/execute"),{sql:n})}function ce(e){return X["a"].put("ams/v1/terminal/".concat(e,"/stop"))}function oe(e){return X["a"].get("ams/v1/terminal/".concat(e,"/logs"))}function re(){return X["a"].get("ams/v1/terminal/latestInfos")}var le=n("5738"),ue=n("8552"),ie=Object(a["defineComponent"])({name:"Terminal",components:{SqlEditor:q,SqlResult:K,SqlLog:Q,CheckCircleOutlined:z["a"],CloseCircleOutlined:I["a"],LoadingOutlined:L["a"]},setup:function(){var e=Object(a["reactive"])(Object(ue["a"])()),t=Object(a["ref"])(!1),n=Object(a["ref"])(null),c=Object(a["ref"])(null),o=Object(a["ref"])(!1),r=Object(a["ref"])(""),l=Object(a["ref"])(!1),u=Object(a["ref"])(""),i=Object(a["ref"])(),s=Object(a["ref"])(!1),d=Object(a["ref"])(!1),b=Object(a["ref"])("log"),p=Object(a["reactive"])([]),f=Object(a["reactive"])([]),v=Object(a["ref"])(""),m=Object(a["ref"])(),g=Object(a["reactive"])([]),O=Object(a["ref"])(476),j=Object(a["shallowReactive"])(R["b"]),h="easylake-sql-source",w="easylake-use-catalog";Object(a["watch"])((function(){return o}),(function(){n.value.updateOptions({readOnly:o})}));var B=function(e){"debug"!==e?"format"!==e?"pause"===e&&L():n.value&&n.value.executeCommand("format"):q()},N=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(le["c"])();case 2:t=e.sent,(t||[]).forEach((function(e){p.push({value:e.catalogName,label:e.catalogName})})),p.length&&(n=K(w),a=p.findIndex((function(e){return e.value===n})),v.value=a>-1?n:p[0].value);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:t=e.sent,f.push.apply(f,Object(C["a"])(t||[]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){$(w,v.value)},V=function(){s.value=!s.value},x=function(){d.value=!d.value},P=function(){g.length=0,c.value.initData("")},q=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,v.value){t.next=4;break}return k["a"].error(e.selectClPh),t.abrupt("return");case 4:return l.value=!0,P(),u.value="Running",t.next=9,ae({catalog:v.value,sql:r.value});case 9:n=t.sent,i.value=n.sessionId||"0",z(),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),u.value="Failed",k["a"].error(t.t0.message||"error");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.value){e.next=9;break}return b.value="log",m.value&&clearTimeout(m.value),l.value=!1,u.value="Canceling",P(),o.value=!0,e.next=9,ce(i.value).then((function(){u.value="Canceled"})).catch((function(){u.value="Failed"})).finally((function(){o.value=!1}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,g.length=0,e.next=4,ee(i.value||"0");case 4:t=e.sent,t&&t.length&&g.push.apply(g,Object(C["a"])(t)),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(m.value&&clearTimeout(m.value),"Running"===u.value){e.next=3;break}return e.abrupt("return");case 3:if(!i.value){e.next=20;break}return e.next=6,oe(i.value);case 6:return t=e.sent,b.value="log",n=t||{},a=n.logStatus,o=n.logs,null!==o&&void 0!==o&&o.length&&c.value.initData(o.join("\n")),"Canceled"!==u.value&&(u.value=a),e.next=13,I();case 13:if("Finished"!==a&&"Canceled"!==a){e.next=17;break}g.length&&(b.value=g[0].id),e.next=20;break;case 17:if("Canceled"!==u.value){e.next=19;break}return e.abrupt("return");case 19:m.value=setTimeout((function(){z()}),1500);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,b.value="log","Running"!==u.value){e.next=4;break}return e.abrupt("return");case 4:return clearTimeout(m.value),t.value=!0,e.next=8,ne(n);case 8:a=e.sent,r.value=r.value+"\n-- SQL shortcut generated\n"+a,l.value=!1,u.value="",P(),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),k["a"].error(e.t0.message);case 18:return e.prev=18,t.value=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){return document.body},F=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n.value&&(r.value=K(h)),t.value=!0,e.next=5,re();case 5:a=e.sent,i.value=a.sessionId,a.sessionId>"0"&&(n.value&&!r.value&&(r.value=a.sql||""),u.value="Running",l.value=!0,z()),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),k["a"].error(e.t0.message);case 13:return e.prev=13,t.value=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),H={topbarHeight:48,optionHeight:44,resultTabHeight:40,runStatusHeight:32,gap:48},T=0,A=0,_=function(e){T=e.clientY,A=O.value,window.addEventListener("mousemove",G),window.addEventListener("mouseup",U)},G=function(e){var t=e.clientY,n=t-T,a=s.value?0:H.topbarHeight,c=u.value?H.runStatusHeight:0,o=A+n;o=Math.max(o,H.optionHeight+c),o=Math.min(o,window.innerHeight-a-(s.value?0:H.gap)-H.optionHeight-4),O.value=o},U=function e(){window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",e)},$=function(e,t){localStorage.setItem(e,t)},K=function(e){return localStorage.getItem(e)||""};return Object(a["onBeforeUnmount"])((function(){clearTimeout(m.value),$(h,r.value)})),Object(a["onMounted"])((function(){F(),S(),N()})),{loading:t,bgcMap:j,sqlLogRef:c,sqlEditorRef:n,fullscreen:s,resultFullscreen:d,operationActive:b,resultTabList:g,runStatus:u,shortcuts:f,curCatalog:v,catalogOptions:p,handleIconClick:B,handleFull:V,resultFull:x,showDebug:l,sqlSource:r,readOnly:o,generateCode:D,getPopupContainer:M,sqlResultHeight:O,dragMounseDown:_,changeUseCatalog:E}}});n("b7af");const se=x()(ie,[["render",h],["__scopeId","data-v-63042b65"]]);t["default"]=se},d9da:function(e,t,n){},ec5b:function(e,t,n){},f38b:function(e,t,n){"use strict";var a,c,o,r,l;n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return l})),function(e){e["Created"]="#f5f5f5",e["Failed"]="#fff2f0",e["Finished"]="#f6ffed",e["Canceled"]="#f5f5f5"}(a||(a={})),function(e){e["failed"]="FAILED",e["upgrading"]="UPGRADING",e["success"]="SUCCESS",e["none"]="NONE"}(c||(c={})),function(e){e["ICEBERG"]="iceberg",e["ARCTIC"]="amoro",e["HIVE"]="hive",e["PAIMON"]="paimon"}(o||(o={})),function(e){e["BRANCH"]="branch",e["TAG"]="tag"}(r||(r={})),function(e){e["ALL"]="all",e["OPTIMIZING"]="optimizing",e["NONOPTIMIZING"]="non-optimizing"}(l||(l={}))},fea2:function(e,t,n){"use strict";n("ec5b")}}]);