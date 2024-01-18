
/*
  * Licensed to the Apache Software Foundation (ASF) under one
  * or more contributor license agreements.  See the NOTICE file
  * distributed with this work for additional information
  * regarding copyright ownership.  The ASF licenses this file
  * to you under the Apache License, Version 2.0 (the
  * "License"); you may not use this file except in compliance
  * with the License.  You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

import{aL as ye,v as W,aM as he,aN as ze,V as F,D as S,a7 as ue,aO as Ce,aP as Ge,aQ as ee,aR as X,aS as $e,u,F as U,aT as ie,aU as se,C as O,a3 as Q,o as G,c as B,h as $,a5 as ce,y as R,G as pe,I as de,H as me,M as V,U as Y,K as ae,s as K,r as H,e as D,z as M,g as L,l as fe,ad as j,q as J,aV as re,a8 as te,af as ve,x as oe,av as ke,aW as Se,aw as we,E as ge,L as Ie,P as Te,ao as Re,a1 as Le,ap as Oe}from"./index-buRVmlV9.js";/* empty css              *//* empty css              */import{u as ne}from"./usePlaceholder-08XzY28t.js";import{u as le}from"./usePagination-nbhDV7a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{s as xe,r as _e,a as Ne,g as be,b as Me,c as De,d as Pe,_ as Ae,e as Ee,u as qe,f as je}from"./optimize.service-Mb2FVnx8.js";/* empty css              *//* empty css              */var Fe={small:8,middle:16,large:24},Be=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:ie.oneOf(se("horizontal","vertical")).def("horizontal"),align:ie.oneOf(se("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function Ue(a){return typeof a=="string"?Fe[a]:a||0}var Ve=W({compatConfig:{MODE:3},name:"ASpace",props:Be(),slots:["split"],setup:function(t,e){var _=e.slots,p=he("space",t),b=p.prefixCls,r=p.space,o=p.direction,d=ze(),c=F(function(){var n,g,s;return(n=(g=t.size)!==null&&g!==void 0?g:(s=r.value)===null||s===void 0?void 0:s.size)!==null&&n!==void 0?n:"small"}),l=S(),y=S();ue(c,function(){var n=(Array.isArray(c.value)?c.value:[c.value,c.value]).map(function(s){return Ue(s)}),g=Ce(n,2);l.value=g[0],y.value=g[1]},{immediate:!0});var f=F(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),P=F(function(){var n;return Ge(b.value,"".concat(b.value,"-").concat(t.direction),(n={},ee(n,"".concat(b.value,"-rtl"),o.value==="rtl"),ee(n,"".concat(b.value,"-align-").concat(f.value),f.value),n))}),v=F(function(){return o.value==="rtl"?"marginLeft":"marginRight"}),m=F(function(){var n={};return d.value&&(n.columnGap="".concat(l.value,"px"),n.rowGap="".concat(y.value,"px")),X(X({},n),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-y.value,"px")})});return function(){var n,g,s=t.wrap,z=t.direction,k=z===void 0?"horizontal":z,w=$e((n=_.default)===null||n===void 0?void 0:n.call(_)),C=w.length;if(C===0)return null;var A=(g=_.split)===null||g===void 0?void 0:g.call(_),x="".concat(b.value,"-item"),I=l.value,i=C-1;return u("div",{class:P.value,style:m.value},[w.map(function(h,E){var q={};return d.value||(k==="vertical"?E<i&&(q={marginBottom:"".concat(I/(A?2:1),"px")}):q=X(X({},E<i&&ee({},v.value,"".concat(I/(A?2:1),"px"))),s&&{paddingBottom:"".concat(y.value,"px")})),u(U,null,[u("div",{class:x,style:q},[h]),E<i&&A&&u("span",{class:"".concat(x,"-split"),style:q},[A])])})])}}});const Ke=ye(Ve),Je=W({__name:"ScaleOut",props:{groupRecord:{}},emits:["cancel","refresh"],setup(a,{emit:t}){var l;const e=t,_=a,p=S(!1),b=O(ne()),r=S(),o=O({resourceGroup:((l=_.groupRecord)==null?void 0:l.name)||"",parallelism:1});function d(){r.value.validateFields().then(async()=>{p.value=!0,await xe({optimizerGroup:o.resourceGroup||"",parallelism:Number(o.parallelism)}),r.value.resetFields(),e("cancel"),e("refresh"),p.value=!1}).catch(()=>{p.value=!1})}function c(){r.value.resetFields(),e("cancel")}return Q(()=>{}),(y,f)=>{const P=pe,v=de,m=me,n=V;return G(),B(n,{visible:!0,title:y.$t("scaleOut"),confirmLoading:p.value,closable:!1,onOk:d,onCancel:c},{default:$(()=>[u(m,{ref_key:"formRef",ref:r,model:o,class:"label-120"},{default:$(()=>[u(P,{name:"resourceGroup",label:y.$t("resourceGroup")},{default:$(()=>[ce(R(o.resourceGroup),1)]),_:1},8,["label"]),u(P,{name:"parallelism",label:y.$t("parallelism"),rules:[{required:!0,message:`${b.parallelismPh}`}]},{default:$(()=>[u(v,{value:o.parallelism,"onUpdate:value":f[0]||(f[0]=g=>o.parallelism=g),type:"number",placeholder:b.parallelismPh},null,8,["value","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),We={class:"list-wrap"},He=["title"],Qe=["onClick"],Xe=["onClick"],Ye=["onClick"],Ze=["onClick"],et=W({__name:"List",props:{curGroupName:{},type:{}},emits:["editGroup","refresh"],setup(a,{emit:t}){const{t:e}=Y();ae();const _=a,p=t,b=K({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),r=S(!1),o=S(!1),d=K([{dataIndex:"name",title:e("name"),ellipsis:!0},{dataIndex:"container",title:e("container"),width:"23%",ellipsis:!0},{dataIndex:"resourceOccupation",title:e("resourceOccupation"),width:"23%",ellipsis:!0},{dataIndex:"operationGroup",title:e("operation"),key:"operationGroup",ellipsis:!0,width:230,scopedSlots:{customRender:"operationGroup"}}]),c=K([{dataIndex:"index",title:e("order"),width:80,ellipsis:!0},{dataIndex:"groupName",title:e("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:e("container"),ellipsis:!0},{dataIndex:"jobStatus",title:e("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:e("resourceAllocation"),width:"20%",ellipsis:!0},{dataIndex:"operation",title:e("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operationGroup"}}]),l=O(le()),y=O([]),f=O([]),P=F(()=>_.type==="optimizers"?c:d),v=F(()=>_.type==="optimizers"?y:f);function m(i){i&&(l.current=1),_.type==="optimizers"?s():z()}function n(i){i.container!=="external"&&V.confirm({title:e("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{g(i)}})}async function g(i){try{o.value=!0,await _e({optimizerGroup:i.groupName,jobId:i.jobId}),m(!0),p("refreshCurGroupInfo")}finally{o.value=!1}}async function s(){try{y.length=0,r.value=!0;const i={optimizerGroup:"all",page:l.current,pageSize:l.pageSize},h=await Ne(i),{list:E,total:q}=h;l.total=q,(E||[]).forEach((N,T)=>{N.resourceAllocation=`${N.coreNumber} ${e("core")} ${re(N.memory)}`,N.index=(l.current-1)*l.pageSize+T+1,y.push(N)})}catch{}finally{r.value=!1}}async function z(){try{f.length=0,r.value=!0;const i=await be();l.total=i.length,(i||[]).forEach(h=>{h.name=h.resourceGroup.name,h.container=h.resourceGroup.container,h.resourceOccupation=`${h.occupationCore} ${e("core")} ${re(h.occupationMemory)}`,f.push(h)})}catch{}finally{r.value=!1}}const k=i=>{p("editGroup",i)},w=async i=>{if(await Me({name:i.name})){V.confirm({title:e("deleteGroupModalTitle"),onOk:async()=>{await De({name:i.name}),te.success(`${e("remove")} ${e("success")}`),m()}});return}V.warning({title:e("cannotDeleteGroupModalTitle"),content:e("cannotDeleteGroupModalContent")})},C=S({}),A=S(!1),x=i=>{i.container!=="external"&&(C.value={...i},A.value=!0)};function I({current:i=l.current,pageSize:h=l.pageSize}){l.current=i;const E=h!==l.pageSize;l.pageSize=h,m(E)}return Q(()=>{m()}),(i,h)=>{const E=ve,q=H("u-loading");return G(),D(U,null,[M("div",We,[u(E,{class:"ant-table-common",columns:P.value,"data-source":v.value,pagination:l,loading:r.value,onChange:I},{bodyCell:$(({column:N,record:T})=>[N.dataIndex==="durationDisplay"?(G(),D("span",{key:0,title:T.durationDesc},R(T.durationDisplay),9,He)):L("",!0),N.dataIndex==="optimizeStatus"?(G(),D(U,{key:1},[M("span",{style:fe({"background-color":(j(b)[T.optimizeStatus]||{}).color}),class:"status-icon"},null,4),M("span",null,R(T.optimizeStatus),1)],64)):L("",!0),N.dataIndex==="operation"?(G(),D("span",{key:2,class:J(["primary-link",{disabled:T.container==="external"}]),onClick:Z=>n(T)},R(j(e)("release")),11,Qe)):L("",!0),N.dataIndex==="operationGroup"?(G(),D(U,{key:3},[M("span",{class:J(["primary-link g-mr-12",{disabled:T.container==="external"}]),onClick:Z=>x(T)},R(j(e)("scaleOut")),11,Xe),M("span",{class:"primary-link g-mr-12",onClick:Z=>k(T)},R(j(e)("edit")),9,Ye),M("span",{class:"primary-link",onClick:Z=>w(T)},R(j(e)("remove")),9,Ze)],64)):L("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),A.value?(G(),B(Je,{key:0,groupRecord:C.value,onCancel:h[0]||(h[0]=N=>A.value=!1),onRefresh:m},null,8,["groupRecord"])):L("",!0),o.value?(G(),B(q,{key:1})):L("",!0)],64)}}}),tt=oe(et,[["__scopeId","data-v-46b3e914"]]),at={class:"list-wrap"},ot=["title","onClick"],nt=["title"],lt=["onClick"],it=W({__name:"List",setup(a){const{t}=Y(),e=ae(),_=K({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),p=S(!1),b=S(!1),r=S([]),o=K([{dataIndex:"tableName",title:t("table"),ellipsis:!0,scopedSlots:{customRender:"tableName"}},{dataIndex:"groupName",title:t("optimizerGroup"),width:"16%",ellipsis:!0},{dataIndex:"optimizeStatus",title:t("optimizingStatus"),width:"16%",ellipsis:!0},{dataIndex:"durationDisplay",title:t("duration"),width:"10%",ellipsis:!0},{dataIndex:"fileCount",title:t("fileCount"),width:"10%",ellipsis:!0},{dataIndex:"fileSizeDesc",title:t("fileSize"),width:"10%",ellipsis:!0},{dataIndex:"quota",title:t("quota"),width:"10%",ellipsis:!0},{dataIndex:"quotaOccupationDesc",title:t("occupation"),width:120,ellipsis:!0}]),d=O(le()),c=O([]),l=S(),y=async()=>{const z=(await be()||[]).map(k=>({lable:k.resourceGroup.name,value:k.resourceGroup.name}));r.value=z};function f(s){s&&(d.current=1),P()}async function P(){try{c.length=0,p.value=!0;const s={optimizerGroup:l.value||"all",page:d.current,pageSize:d.pageSize},z=await Pe(s),{list:k,total:w}=z;d.total=w,(k||[]).forEach(C=>{C.quotaOccupationDesc=C.quotaOccupation-5e-4>0?`${(C.quotaOccupation*100).toFixed(1)}%`:"0",C.durationDesc=ke(C.duration||0),C.durationDisplay=Se(C.duration||0),C.fileSizeDesc=we(C.fileSize),c.push(C)})}catch{}finally{p.value=!1}}function v(s){s.container!=="external"&&V.confirm({title:t("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{m(s)}})}async function m(s){try{b.value=!0,await _e({optimizerGroup:s.groupName,jobId:s.jobId}),f(!0)}finally{b.value=!1}}function n({current:s=d.current,pageSize:z=d.pageSize}){d.current=s;const k=z!==d.pageSize;d.pageSize=z,f(k)}function g(s){const{catalog:z,database:k,tableName:w}=s.tableIdentifier;e.push({path:"/tables",query:{catalog:z,db:k,table:w}})}return Q(()=>{f(),y()}),(s,z)=>{const k=ge,w=Ke,C=ve,A=H("u-loading");return G(),D(U,null,[M("div",at,[u(w,{class:"filter-form"},{default:$(()=>[u(k,{allowClear:"",value:l.value,"onUpdate:value":z[0]||(z[0]=x=>l.value=x),placeholder:"Optimizer group",options:r.value,style:{"min-width":"150px"},onChange:f},null,8,["value","options"])]),_:1}),u(C,{class:"ant-table-common",columns:j(o),"data-source":c,pagination:d,loading:p.value,onChange:n},{bodyCell:$(({column:x,record:I})=>[x.dataIndex==="tableName"?(G(),D("span",{key:0,title:I.tableName,class:"primary-link",onClick:i=>g(I)},R(I.tableName),9,ot)):L("",!0),x.dataIndex==="durationDisplay"?(G(),D("span",{key:1,title:I.durationDesc},R(I.durationDisplay),9,nt)):L("",!0),x.dataIndex==="optimizeStatus"?(G(),D(U,{key:2},[M("span",{style:fe({"background-color":(j(_)[I.optimizeStatus]||{}).color}),class:"status-icon"},null,4),M("span",null,R(I.optimizeStatus),1)],64)):L("",!0),x.dataIndex==="operation"?(G(),D("span",{key:3,class:J(["primary-link",{disabled:I.container==="external"}]),onClick:i=>v(I)},R(j(t)("release")),11,lt)):L("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),b.value?(G(),B(A,{key:0})):L("",!0)],64)}}}),st=oe(it,[["__scopeId","data-v-cd107afb"]]),rt=W({__name:"GroupModal",props:{edit:{type:Boolean},editRecord:{}},emits:["cancel","refresh"],setup(a,{emit:t}){const{t:e}=Y(),_=O(ne()),p=a,b=S({containerList:[]});async function r(){const m=(await Ee()||[]).map(n=>({label:n,value:n}));b.value.containerList=m}const o=O({name:"",container:void 0,properties:{}}),d=S(!1),c=t,l=()=>{c("cancel")},y=S(),f=S(),P=()=>{y.value.validateFields().then(async()=>{try{const v=await f.value.getProperties(),m={name:o.name,container:o.container,properties:v};p.edit?await qe(m):await je(m),te.success(`${e("save")} ${e("success")}`),c("refresh")}catch{te.error(`${e("save")} ${e("failed")}`)}})};return Q(()=>{var v,m,n;r(),p.edit&&(o.name=(v=p.editRecord)==null?void 0:v.name,o.container=(m=p.editRecord)==null?void 0:m.container,o.properties=(n=p.editRecord)==null?void 0:n.resourceGroup.properties)}),(v,m)=>{const n=de,g=pe,s=ge,z=me,k=V;return G(),B(k,{visible:!0,title:v.edit?v.$t("editgroup"):v.$t("addgroup"),confirmLoading:d.value,closable:!1,class:"group-modal",onOk:P,onCancel:l},{default:$(()=>[u(z,{ref_key:"formRef",ref:y,model:o,class:"label-120"},{default:$(()=>[u(g,{name:"name",label:v.$t("name"),rules:[{required:!0,message:`${_.groupNamePh}`}]},{default:$(()=>[u(n,{value:o.name,"onUpdate:value":m[0]||(m[0]=w=>o.name=w),placeholder:_.groupNamePh,disabled:v.edit},null,8,["value","placeholder","disabled"])]),_:1},8,["label","rules"]),u(g,{name:"container",label:v.$t("container"),rules:[{required:!0,message:`${_.groupContainer}`}]},{default:$(()=>[u(s,{value:o.container,"onUpdate:value":m[1]||(m[1]=w=>o.container=w),showSearch:!0,options:b.value.containerList,placeholder:_.groupContainer},null,8,["value","options","placeholder"])]),_:1},8,["label","rules"]),u(g,{label:v.$t("properties")},null,8,["label"]),u(g,null,{default:$(()=>[u(Ae,{propertiesObj:o.properties,isEdit:!0,ref_key:"propertiesRef",ref:f},null,8,["propertiesObj"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),ut=W({name:"Resource",components:{List:tt,GroupModal:rt,TableList:st},setup(){const{t:a}=Y(),t=ae(),e=Ie(),_=K([{label:a("optimizergroup"),value:"optimizergroup"},{label:a("optimizers"),value:"optimizers"}]),p=O(ne()),b=O(le()),r=O({activeTab:"optimizergroup",showGroupModal:!1,groupEdit:!1,groupEditRecord:{},groupKeyCount:1,showTab:!1});ue(()=>e.query,c=>{r.activeTab=c.tab||"tables"},{immediate:!0});const o=c=>{c?(r.groupEdit=!0,r.groupEditRecord={...c}):r.groupEdit=!1,r.showGroupModal=!0},d=c=>{const l={...e.query};l.tab=c,t.replace({query:{...l}})};return Q(()=>{r.showTab=!0}),{placeholder:p,pagination:b,...Te(r),tabConfig:_,onChangeTab:d,editGroup:o,t:a}}}),ct={class:"border-wrap"},pt={class:"resource-wrap"},dt={class:"content"};function mt(a,t,e,_,p,b){const r=H("TableList"),o=Re,d=H("List"),c=Le,l=Oe,y=H("GroupModal");return G(),D("div",ct,[M("div",pt,[M("div",dt,[u(l,{activeKey:a.activeTab,"onUpdate:activeKey":t[1]||(t[1]=f=>a.activeTab=f),destroyInactiveTabPane:"",onChange:a.onChangeTab},{default:$(()=>[u(o,{key:"tables",tab:a.t("tables"),class:J([a.activeTab==="tables"?"active":""])},{default:$(()=>[u(r)]),_:1},8,["tab","class"]),u(o,{key:"optimizers",tab:a.t("optimizers"),class:J([a.activeTab==="optimizers"?"active":""])},{default:$(()=>[u(d,{type:"optimizers"})]),_:1},8,["tab","class"]),u(o,{key:"optimizergroup",tab:a.t("optimizergroup"),class:J([a.activeTab==="optimizergroup"?"active":""])},{default:$(()=>[u(c,{type:"primary",class:"g-mb-16",onClick:t[0]||(t[0]=f=>a.editGroup(null))},{default:$(()=>[ce(R(a.t("addgroup")),1)]),_:1}),(G(),B(d,{key:a.groupKeyCount,type:"optimizergroup",onEditGroup:a.editGroup},null,8,["onEditGroup"]))]),_:1},8,["tab","class"])]),_:1},8,["activeKey","onChange"])])]),a.showGroupModal?(G(),B(y,{key:0,edit:a.groupEdit,editRecord:a.groupEditRecord,onCancel:t[2]||(t[2]=f=>a.showGroupModal=!1),onRefresh:t[3]||(t[3]=f=>{a.groupKeyCount++,a.showGroupModal=!1})},null,8,["edit","editRecord"])):L("",!0)])}const St=oe(ut,[["render",mt],["__scopeId","data-v-9dd54e51"]]);export{St as default};
