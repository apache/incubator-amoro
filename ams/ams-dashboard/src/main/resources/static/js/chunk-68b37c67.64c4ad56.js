(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68b37c67"],{"0f2c":function(e,t,r){},1148:function(e,t,r){"use strict";var n=r("da84"),a=r("5926"),o=r("577e"),c=r("1d80"),i=n.RangeError;e.exports=function(e){var t=o(c(this)),r="",n=a(e);if(n<0||n==1/0)throw i("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},"25f0":function(e,t,r){"use strict";var n=r("e330"),a=r("5e77").PROPER,o=r("6eeb"),c=r("825a"),i=r("3a9b"),u=r("577e"),l=r("d039"),s=r("ad6d"),p="toString",f=RegExp.prototype,b=f[p],d=n(s),m=l((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),h=a&&b.name!=p;(m||h)&&o(RegExp.prototype,p,(function(){var e=c(this),t=u(e.source),r=e.flags,n=u(void 0===r&&i(f,e)&&!("flags"in f)?d(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"2c3e":function(e,t,r){var n=r("da84"),a=r("83ab"),o=r("9f7f").MISSED_STICKY,c=r("c6b6"),i=r("9bf2").f,u=r("69f3").get,l=RegExp.prototype,s=n.TypeError;a&&o&&i(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===c(this))return!!u(this).sticky;throw s("Incompatible receiver, RegExp required")}}})},"345e":function(e,t,r){"use strict";r("592a")},"408a":function(e,t,r){var n=r("e330");e.exports=n(1..valueOf)},"4d63":function(e,t,r){var n=r("83ab"),a=r("da84"),o=r("e330"),c=r("94ca"),i=r("7156"),u=r("9112"),l=r("9bf2").f,s=r("241c").f,p=r("3a9b"),f=r("44e7"),b=r("577e"),d=r("ad6d"),m=r("9f7f"),h=r("6eeb"),v=r("d039"),O=r("1a2d"),g=r("69f3").enforce,j=r("2626"),w=r("b622"),y=r("fce3"),x=r("107c"),N=w("match"),z=a.RegExp,S=z.prototype,G=a.SyntaxError,k=o(d),E=o(S.exec),C=o("".charAt),I=o("".replace),P=o("".indexOf),R=o("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,V=/a/g,B=new z(T)!==T,D=m.MISSED_STICKY,F=m.UNSUPPORTED_Y,_=n&&(!B||D||y||x||v((function(){return V[N]=!1,z(T)!=T||z(V)==V||"/a/i"!=z(T,"i")}))),A=function(e){for(var t,r=e.length,n=0,a="",o=!1;n<=r;n++)t=C(e,n),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),a+=t):a+="[\\s\\S]":a+=t+C(e,++n);return a},q=function(e){for(var t,r=e.length,n=0,a="",o=[],c={},i=!1,u=!1,l=0,s="";n<=r;n++){if(t=C(e,n),"\\"===t)t+=C(e,++n);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:E(M,R(e,n+1))&&(n+=2,u=!0),a+=t,l++;continue;case">"===t&&u:if(""===s||O(c,s))throw new G("Invalid capture group name");c[s]=!0,o[o.length]=[s,l],u=!1,s="";continue}u?s+=t:a+=t}return[a,o]};if(c("RegExp",_)){for(var L=function(e,t){var r,n,a,o,c,l,s=p(S,this),d=f(e),m=void 0===t,h=[],v=e;if(!s&&d&&m&&e.constructor===L)return e;if((d||p(S,e))&&(e=e.source,m&&(t="flags"in v?v.flags:k(v))),e=void 0===e?"":b(e),t=void 0===t?"":b(t),v=e,y&&"dotAll"in T&&(n=!!t&&P(t,"s")>-1,n&&(t=I(t,/s/g,""))),r=t,D&&"sticky"in T&&(a=!!t&&P(t,"y")>-1,a&&F&&(t=I(t,/y/g,""))),x&&(o=q(e),e=o[0],h=o[1]),c=i(z(e,t),s?this:S,L),(n||a||h.length)&&(l=g(c),n&&(l.dotAll=!0,l.raw=L(A(e),r)),a&&(l.sticky=!0),h.length&&(l.groups=h)),e!==v)try{u(c,"source",""===v?"(?:)":v)}catch(O){}return c},U=function(e){e in L||l(L,e,{configurable:!0,get:function(){return z[e]},set:function(t){z[e]=t}})},$=s(z),K=0;$.length>K;)U($[K++]);S.constructor=L,L.prototype=S,h(a,"RegExp",L)}j("RegExp")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("e330"),a=r("1d80"),o=r("577e"),c=r("5899"),i=n("".replace),u="["+c+"]",l=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),p=function(e){return function(t){var r=o(a(t));return 1&e&&(r=i(r,l,"")),2&e&&(r=i(r,s,"")),r}};e.exports={start:p(1),end:p(2),trim:p(3)}},"592a":function(e,t,r){},8552:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("7a23"),a=r("47e2");function o(){var e=Object(a["b"])(),t=e.t,r=Object(n["computed"])((function(){return t("catalog")})).value,o=Object(n["computed"])((function(){return t("databaseName")})).value,c=Object(n["computed"])((function(){return t("tableName")})).value,i=Object(n["computed"])((function(){return t("optimzerGroup")})).value,u=Object(n["computed"])((function(){return t("resourceGroup")})).value,l=Object(n["computed"])((function(){return t("parallelism")})).value,s=Object(n["computed"])((function(){return t("username")})).value,p=Object(n["computed"])((function(){return t("password")})).value,f=Object(n["computed"])((function(){return t("database",2)})).value,b=Object(n["computed"])((function(){return t("table",2)})).value;return{selectClPh:t("selectPlaceholder",{selectPh:r}),selectDBPh:t("selectPlaceholder",{selectPh:o}),inputDBPh:t("inputPlaceholder",{inputPh:o}),inputClPh:t("inputPlaceholder",{inputPh:r}),inputTNPh:t("inputPlaceholder",{inputPh:c}),selectOptGroupPh:t("inputPlaceholder",{inputPh:i}),resourceGroupPh:t("inputPlaceholder",{inputPh:u}),parallelismPh:t("inputPlaceholder",{inputPh:l}),usernamePh:t("inputPlaceholder",{inputPh:s}),passwordPh:t("inputPlaceholder",{inputPh:p}),filterDBPh:t("filterPlaceholder",{inputPh:f}),filterTablePh:t("filterPlaceholder",{inputPh:b})}}},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("e330"),o=r("44ad"),c=r("fc6a"),i=r("a640"),u=a([].join),l=o!=Object,s=i("join",",");n({target:"Array",proto:!0,forced:l||!s},{join:function(e){return u(c(this),void 0===e?",":e)}})},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("e330"),c=r("94ca"),i=r("6eeb"),u=r("1a2d"),l=r("7156"),s=r("3a9b"),p=r("d9b5"),f=r("c04e"),b=r("d039"),d=r("241c").f,m=r("06cf").f,h=r("9bf2").f,v=r("408a"),O=r("58a8").trim,g="Number",j=a[g],w=j.prototype,y=a.TypeError,x=o("".slice),N=o("".charCodeAt),z=function(e){var t=f(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,r,n,a,o,c,i,u,l=f(e,"number");if(p(l))throw y("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=O(l),t=N(l,0),43===t||45===t){if(r=N(l,2),88===r||120===r)return NaN}else if(48===t){switch(N(l,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(o=x(l,2),c=o.length,i=0;i<c;i++)if(u=N(o,i),u<48||u>a)return NaN;return parseInt(o,n)}return+l};if(c(g,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var G,k=function(e){var t=arguments.length<1?0:j(z(e)),r=this;return s(w,r)&&b((function(){v(r)}))?l(Object(t),r,k):t},E=n?d(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;E.length>C;C++)u(j,G=E[C])&&!u(k,G)&&h(k,G,m(j,G));k.prototype=w,w.constructor=k,i(a,g,k)}},b356:function(e,t,r){"use strict";function n(){var e=0,t=1,r=["25","50","100"],n=25;return{total:e,current:t,pageSize:n,pageSizeOptions:r,showQuickJumper:!0,showSizeChanger:!0,hideOnSinglePage:!1}}r.d(t,"a",(function(){return n}))},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("e330"),c=r("5926"),i=r("408a"),u=r("1148"),l=r("d039"),s=a.RangeError,p=a.String,f=Math.floor,b=o(u),d=o("".slice),m=o(1..toFixed),h=function(e,t,r){return 0===t?r:t%2===1?h(e,t-1,r*e):h(e*e,t/2,r)},v=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},O=function(e,t,r){var n=-1,a=r;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=f(a/1e7)},g=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=f(n/t),n=n%t*1e7},j=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=p(e[t]);r=""===r?n:r+b("0",7-n.length)+n}return r},w=l((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!l((function(){m({})}));n({target:"Number",proto:!0,forced:w},{toFixed:function(e){var t,r,n,a,o=i(this),u=c(e),l=[0,0,0,0,0,0],f="",m="0";if(u<0||u>20)throw s("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return p(o);if(o<0&&(f="-",o=-o),o>1e-21)if(t=v(o*h(2,69,1))-69,r=t<0?o*h(2,-t,1):o/h(2,t,1),r*=4503599627370496,t=52-t,t>0){O(l,0,r),n=u;while(n>=7)O(l,1e7,0),n-=7;O(l,h(10,n,1),0),n=t-1;while(n>=23)g(l,1<<23),n-=23;g(l,1<<n),O(l,1,1),g(l,2),m=j(l)}else O(l,0,r),O(l,1<<-t,0),m=j(l)+b("0",u);return u>0?(a=m.length,m=f+(a<=u?"0."+b("0",u-a)+m:d(m,0,a-u)+"."+d(m,a-u))):m=f+m,m}})},c607:function(e,t,r){var n=r("da84"),a=r("83ab"),o=r("fce3"),c=r("c6b6"),i=r("9bf2").f,u=r("69f3").get,l=RegExp.prototype,s=n.TypeError;a&&o&&i(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===c(this))return!!u(this).dotAll;throw s("Incompatible receiver, RegExp required")}}})},c74a:function(e,t,r){"use strict";r("0f2c")},cac2:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"optimize-wrap"},o={class:"optimize-group g-flex-ac"},c={class:"left-group"},i={class:"g-mr-16"},u={class:"btn-wrap"},l={class:"g-ml-16 f-shink-0"},s={class:"text-color"},p={class:"text-color"},f=Object(n["createTextVNode"])(" G "),b={class:"content"};function d(e,t,r,d,m,h){var v=Object(n["resolveComponent"])("a-select"),O=Object(n["resolveComponent"])("a-button"),g=Object(n["resolveComponent"])("List"),j=Object(n["resolveComponent"])("a-tab-pane"),w=Object(n["resolveComponent"])("a-tabs"),y=Object(n["resolveComponent"])("scale-out-modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("span",i,Object(n["toDisplayString"])(e.$t("optimzerGroup")),1),Object(n["createVNode"])(v,{value:e.curGroupName,"onUpdate:value":t[0]||(t[0]=function(t){return e.curGroupName=t}),showSearch:!0,options:e.groupList,placeholder:e.placeholder.selectOptGroupPh,onChange:e.onChangeGroup,style:{width:"240px"}},null,8,["value","options","placeholder","onChange"])]),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("span",l,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("resourceOccupation"))+" ",1),Object(n["createElementVNode"])("span",s,Object(n["toDisplayString"])(e.groupInfo.occupationCore),1),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.$t("core"))+" ",1),Object(n["createElementVNode"])("span",p,Object(n["toDisplayString"])(e.groupInfo.occupationMemory),1),f]),Object(n["createVNode"])(O,{type:"primary",onClick:e.expansionJob,class:"g-ml-8"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("scaleOut")),1)]})),_:1},8,["onClick"])])]),Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(w,{activeKey:e.activeTab,"onUpdate:activeKey":t[1]||(t[1]=function(t){return e.activeTab=t}),destroyInactiveTabPane:""},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.tabConfig,(function(t){return Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:t.value,tab:t.label,class:Object(n["normalizeClass"])([e.activeTab===t.value?"active":""])},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{curGroupName:e.curGroupName,type:t.value,needFresh:e.needFresh},null,8,["curGroupName","type","needFresh"])]})),_:2},1032,["tab","class"])})),128))]})),_:1},8,["activeKey"])])]),e.showScaleOutModal?(Object(n["openBlock"])(),Object(n["createBlock"])(y,{key:0,visible:e.showScaleOutModal,resourceGroup:"all"===e.curGroupName?"":e.curGroupName,onCancel:t[2]||(t[2]=function(t){return e.showScaleOutModal=!1}),onRefreshOptimizersTab:e.refreshOptimizersTab},null,8,["visible","resourceGroup","onRefreshOptimizersTab"])):Object(n["createCommentVNode"])("",!0)],64)}var m=r("5530"),h=r("1da1"),v=(r("96cf"),r("d3b7"),r("159b"),r("47e2")),O=r("8552"),g=r("b356"),j=(r("99af"),r("b32d"));function w(){return j["a"].get("ams/v1/optimize/optimizerGroups")}function y(e){var t=e.optimizerGroup,r=e.page,n=e.pageSize;return j["a"].get("ams/v1/optimize/optimizerGroups/".concat(t,"/tables"),{params:{page:r,pageSize:n}})}function x(e){var t=e.optimizerGroup,r=e.page,n=e.pageSize;return j["a"].get("ams/v1/optimize/optimizerGroups/".concat(t,"/optimizers"),{params:{page:r,pageSize:n}})}function N(e){return j["a"].get("ams/v1/optimize/optimizerGroups/".concat(e,"/info"))}function z(e){var t=e.optimizerGroup,r=e.parallelism;return j["a"].post("ams/v1/optimize/optimizerGroups/".concat(t,"/optimizers"),{parallelism:r})}function S(e){var t=e.optimizerGroup,r=e.jobId;return j["a"].delete("ams/v1/optimize/optimizerGroups/".concat(t,"/optimizers/").concat(r))}r("3b18");var G=r("f64c"),k=(r("a9e3"),Object(n["defineComponent"])({props:{visible:{type:Boolean},resourceGroup:null},emits:["cancel","refreshOptimizersTab"],setup:function(e,t){var r=t.emit,a=e,o=Object(n["reactive"])(Object(O["a"])()),c=Object(n["ref"])(),i=Object(n["reactive"])({resourceGroup:a.resourceGroup||void 0,parallelism:1}),u=Object(n["reactive"])([]);function l(){return s.apply(this,arguments)}function s(){return s=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,u.length=0,(t||[]).forEach((function(e){u.push(Object(m["a"])(Object(m["a"])({},e),{},{label:e.optimizerGroupName,value:e.optimizerGroupName}))}));case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function p(){c.value.validateFields().then(Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z({optimizerGroup:i.resourceGroup||"",parallelism:Number(i.parallelism)});case 2:c.value.resetFields(),r("cancel"),r("refreshOptimizersTab");case 5:case"end":return e.stop()}}),e)})))).catch((function(e){G["a"].error(e.message)}))}function f(){c.value.resetFields(),r("cancel")}return Object(n["onMounted"])((function(){l()})),function(e,t){var r=Object(n["resolveComponent"])("a-select"),l=Object(n["resolveComponent"])("a-form-item"),s=Object(n["resolveComponent"])("a-input"),b=Object(n["resolveComponent"])("a-form"),d=Object(n["resolveComponent"])("a-modal");return Object(n["openBlock"])(),Object(n["createBlock"])(d,{visible:a.visible,title:e.$t("scaleOut"),onOk:p,onCancel:f},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{ref_key:"formRef",ref:c,model:Object(n["unref"])(i),class:"label-120"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{name:"resourceGroup",label:e.$t("resourceGroup"),rules:[{required:!0,message:"".concat(Object(n["unref"])(o).resourceGroupPh)}]},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,{value:Object(n["unref"])(i).resourceGroup,"onUpdate:value":t[0]||(t[0]=function(e){return Object(n["unref"])(i).resourceGroup=e}),showSearch:!0,options:Object(n["unref"])(u),placeholder:Object(n["unref"])(o).resourceGroupPh},null,8,["value","options","placeholder"])]})),_:1},8,["label","rules"]),Object(n["createVNode"])(l,{name:"parallelism",label:e.$t("parallelism"),rules:[{required:!0,message:"".concat(Object(n["unref"])(o).parallelismPh)}]},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{value:Object(n["unref"])(i).parallelism,"onUpdate:value":t[1]||(t[1]=function(e){return Object(n["unref"])(i).parallelism=e}),type:"number",placeholder:Object(n["unref"])(o).parallelismPh},null,8,["value","placeholder"])]})),_:1},8,["label","rules"])]})),_:1},8,["model"])]})),_:1},8,["visible","title"])}}}));const E=k;var C=E,I=(r("cd17"),r("ed3b")),P=r("d257"),R=r("6c02"),M={class:"list-wrap"},T=["onClick"],V=["title"],B=["onClick"],D=Object(n["defineComponent"])({props:{curGroupName:null,type:null,needFresh:{type:Boolean}},setup:function(e){var t=e,r=Object(v["b"])(),a=r.t,o=Object(R["d"])(),c=Object(n["ref"])(!1),i=Object(n["shallowReactive"])([{dataIndex:"tableName",title:a("table"),ellipsis:!0,scopedSlots:{customRender:"tableName"}},{dataIndex:"optimizeStatus",title:a("status"),width:"10%",ellipsis:!0},{dataIndex:"durationDisplay",title:a("duration"),width:"10%",ellipsis:!0},{dataIndex:"fileCount",title:a("fileCount"),width:"10%",ellipsis:!0},{dataIndex:"fileSizeDesc",title:a("fileSize"),width:"10%",ellipsis:!0},{dataIndex:"quota",title:a("quota"),width:"10%",ellipsis:!0},{dataIndex:"quotaOccupationDesc",title:a("quotaOccupation"),width:160,ellipsis:!0}]),u=Object(n["shallowReactive"])([{dataIndex:"index",title:a("order"),width:80,ellipsis:!0},{dataIndex:"groupName",title:a("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:a("container"),ellipsis:!0},{dataIndex:"jobStatus",title:a("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:a("resourceAllocation"),width:"20%",ellipsis:!0},{dataIndex:"operation",title:a("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operation"}}]),l=Object(n["reactive"])(Object(g["a"])()),s=Object(n["reactive"])([]),p=Object(n["reactive"])([]),f=Object(n["computed"])((function(){return"optimizers"===t.type?u:i})),b=Object(n["computed"])((function(){return"optimizers"===t.type?s:p}));function d(e){e&&(l.current=1),"optimizers"===t.type?m():j()}function m(){return O.apply(this,arguments)}function O(){return O=Object(h["a"])(regeneratorRuntime.mark((function e(){var r,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s.length=0,c.value=!0,r={optimizerGroup:t.curGroupName,page:l.current,pageSize:l.pageSize},e.next=6,x(r);case 6:n=e.sent,o=n.list,i=n.total,l.total=i,(o||[]).forEach((function(e,t){e.resourceAllocation="".concat(e.coreNumber).concat(a("core")," ").concat(Object(P["f"])(e.memory)),e.index=(l.current-1)*l.pageSize+t+1,s.push(e)})),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:return e.prev=14,c.value=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])}))),O.apply(this,arguments)}function j(){return w.apply(this,arguments)}function w(){return w=Object(h["a"])(regeneratorRuntime.mark((function e(){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,p.length=0,c.value=!0,r={optimizerGroup:t.curGroupName||"",page:l.current,pageSize:l.pageSize},e.next=6,y(r);case 6:n=e.sent,a=n.list,o=n.total,l.total=o,(a||[]).forEach((function(e){e.quotaOccupationDesc=e.quotaOccupation?"".concat(100*e.quotaOccupation,"%"):"0",e.durationDesc=Object(P["e"])(e.duration||0),e.durationDisplay=Object(P["d"])(e.duration||0),e.fileSizeDesc=Object(P["a"])(e.fileSize),p.push(e)})),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:return e.prev=14,c.value=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])}))),w.apply(this,arguments)}function N(e){I["a"].confirm({title:a("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:function(){z(e)}})}function z(e){return G.apply(this,arguments)}function G(){return G=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({optimizerGroup:t.groupName,jobId:t.jobId});case 2:d(!0);case 3:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function k(e){var t=e.current,r=void 0===t?l.current:t,n=e.pageSize,a=void 0===n?l.pageSize:n;l.current=r;var o=a!==l.pageSize;l.pageSize=a,d(o)}function E(e){var t=e.tableIdentifier,r=t.catalog,n=t.database,a=t.tableName;o.push({path:"/tables",query:{catalog:r,db:n,table:a}})}return Object(n["watch"])((function(){return t.curGroupName}),(function(e){e&&d()})),Object(n["watch"])((function(){return t.needFresh}),(function(e){e&&d(!0)})),Object(n["onMounted"])((function(){d()})),function(e,t){var r=Object(n["resolveComponent"])("a-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",M,[Object(n["createVNode"])(r,{class:"ant-table-common",columns:Object(n["unref"])(f),"data-source":Object(n["unref"])(b),pagination:Object(n["unref"])(l),loading:c.value,onChange:k},{bodyCell:Object(n["withCtx"])((function(e){var t=e.column,r=e.record;return["tableName"===t.dataIndex?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:0,class:"primary-link",onClick:function(e){return E(r)}},Object(n["toDisplayString"])(r.tableName),9,T)):Object(n["createCommentVNode"])("",!0),"durationDisplay"===t.dataIndex?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:1,title:r.durationDesc},Object(n["toDisplayString"])(r.durationDisplay),9,V)):Object(n["createCommentVNode"])("",!0),"operation"===t.dataIndex?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:2,class:"primary-link",onClick:function(e){return N(r)}},Object(n["toDisplayString"])(Object(n["unref"])(a)("release")),9,B)):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["columns","data-source","pagination","loading"])])}}}),F=(r("345e"),r("6b0d")),_=r.n(F);const A=_()(D,[["__scopeId","data-v-51ceebc9"]]);var q=A,L=Object(n["defineComponent"])({name:"Optimize",components:{List:q,ScaleOutModal:C},setup:function(){var e=Object(v["b"])(),t=e.t,r=Object(n["shallowReactive"])([{label:t("optimizers"),value:"optimizers"},{label:t("tables"),value:"tables"}]),a=Object(n["reactive"])(Object(O["a"])()),o=Object(n["reactive"])(Object(g["a"])()),c=Object(n["reactive"])({curGroupName:"all",groupList:[{label:t("allGroups"),value:"all"}],groupInfo:{occupationCore:0,occupationMemory:0},activeTab:"tables",showScaleOutModal:!1,needFresh:!1}),i=Object(n["computed"])((function(){return"tables"===c.activeTab})),u=function(){s()},l=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,(t||[]).forEach((function(e){c.groupList.push({label:e.optimizerGroupName,value:e.optimizerGroupName})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N(c.curGroupName||"");case 2:t=e.sent,c.groupInfo=Object(m["a"])({},t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){c.showScaleOutModal=!0},f=function(){c.activeTab="optimizers",c.needFresh=!0};return Object(n["onMounted"])((function(){l(),s()})),Object(m["a"])(Object(m["a"])({isTableTab:i,placeholder:a,pagination:o},Object(n["toRefs"])(c)),{},{tabConfig:r,onChangeGroup:u,expansionJob:p,refreshOptimizersTab:f})}});r("c74a");const U=_()(L,[["render",d],["__scopeId","data-v-4c12ad7c"]]);t["default"]=U},d257:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u}));r("b680"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("a15b"),r("b64b"),r("5319");var n=function(e){if(0===e)return"0";if(null===e||void 0===e)return"未知";var t=1024;return e<t?e+"B":e<Math.pow(t,2)?(e/t).toFixed(2)+"KB":e<Math.pow(t,3)?(e/Math.pow(t,2)).toFixed(2)+"MB":e<Math.pow(t,4)?(e/Math.pow(t,3)).toFixed(2)+"G":(e/Math.pow(t,4)).toFixed(2)+"T"},a=function(e){if(0===e)return"0";var t=1024;return e<t?e+"MB":e<Math.pow(t,2)?(e/t).toFixed(2)+"G":(e/Math.pow(t,2)).toFixed(2)+"T"},o=function e(t,r){if(null===t||void 0===t||isNaN(t))return"";var n=1e3,a=60*n,o=60*a,c=24*o;if(0===t)return"0 ms";if(t<n)return(r?"0 min ":"")+"".concat(t," ms");if(t>=n&&t<a){var i=Math.floor(t/n);return(r?"0 min ":"")+(i?i+" s":"")}if(t>=a&&t<o){var u=Math.floor(t/a),l=Math.floor((t-u*a)/n);return t%a===0?t/a+" min":u+" min "+(l?l+" s":"")}if(t%o===0)return t/o+" h";if(t>=o&&t<c){var s=Math.floor(t/o);return s+" h "+e(t-s*o,!0)}if(t%c===0)return t/c+" d";var p=Math.floor(t/c);return p+" d "+e(t-p*c,!0)},c=function(e){if(null===e||void 0===e||isNaN(e))return"";var t=1e3,r=60*t,n=60*r,a=24*n;return 0===e?"0 ms":e<=n?"".concat(Math.floor(e/t)," s"):e>n&&e<=a?"".concat(Math.floor(e/r)," min"):e>a&&e<=30*a?"".concat(Math.floor(e/n)," h"):">30 d"},i=function(){var e=function(e){var t=e||"";return t.length<2?"0".concat(t):t},t={yyyy:function(e){return e.getFullYear()},MM:function(t){return e(String(t.getMonth()+1))},dd:function(t){return e(String(t.getDate()))},HH:function(t){return e(String(t.getHours()))},mm:function(t){return e(String(t.getMinutes()))},ss:function(t){return e(String(t.getSeconds()))}},r=new RegExp(Object.keys(t).join("|"),"g");return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd  HH:mm:ss";if(!e)return"";var a=+e;return a=new Date(a),n.replace(r,(function(e){return t[e](a)}))}}();function u(e){var t,r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];clearTimeout(t),t=setTimeout((function(){e.apply(r,o)}),n)}}}}]);