
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

import{aL as he,v as Q,aM as ze,aN as Ce,O as F,D as w,a7 as ce,aO as Ge,aP as ke,aQ as ee,aR as X,aS as Ie,u,F as U,aT as le,aU as se,C as O,a3 as H,o as G,c as B,h as I,a5 as pe,y as x,G as de,I as me,H as fe,M as V,V as Y,K as ae,s as K,r as W,e as D,z as M,g as L,l as ve,ad as q,q as J,aV as re,ae as ue,a8 as te,af as ge,x as oe,av as $e,aW as we,aw as Se,E as _e,L as Te,Q as Re,ao as xe,a1 as Le,ap as Oe}from"./index-c94beO7w.js";/* empty css              *//* empty css              */import{u as ne}from"./usePlaceholder-GmLNoJj5.js";import{u as ie}from"./usePagination-nbhDV7a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{s as Ne,r as be,a as Me,g as ye,b as De,c as Pe,d as Ae,_ as Ee,e as je,u as qe,f as Fe}from"./optimize.service-O--cmbRI.js";/* empty css              *//* empty css              */var Be={small:8,middle:16,large:24},Ue=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:le.oneOf(se("horizontal","vertical")).def("horizontal"),align:le.oneOf(se("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function Ve(a){return typeof a=="string"?Be[a]:a||0}var Ke=Q({compatConfig:{MODE:3},name:"ASpace",props:Ue(),slots:["split"],setup:function(t,e){var _=e.slots,p=ze("space",t),b=p.prefixCls,r=p.space,o=p.direction,d=Ce(),c=F(function(){var n,g,s;return(n=(g=t.size)!==null&&g!==void 0?g:(s=r.value)===null||s===void 0?void 0:s.size)!==null&&n!==void 0?n:"small"}),i=w(),y=w();ce(c,function(){var n=(Array.isArray(c.value)?c.value:[c.value,c.value]).map(function(s){return Ve(s)}),g=Ge(n,2);i.value=g[0],y.value=g[1]},{immediate:!0});var f=F(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),P=F(function(){var n;return ke(b.value,"".concat(b.value,"-").concat(t.direction),(n={},ee(n,"".concat(b.value,"-rtl"),o.value==="rtl"),ee(n,"".concat(b.value,"-align-").concat(f.value),f.value),n))}),v=F(function(){return o.value==="rtl"?"marginLeft":"marginRight"}),m=F(function(){var n={};return d.value&&(n.columnGap="".concat(i.value,"px"),n.rowGap="".concat(y.value,"px")),X(X({},n),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-y.value,"px")})});return function(){var n,g,s=t.wrap,z=t.direction,$=z===void 0?"horizontal":z,S=Ie((n=_.default)===null||n===void 0?void 0:n.call(_)),C=S.length;if(C===0)return null;var A=(g=_.split)===null||g===void 0?void 0:g.call(_),N="".concat(b.value,"-item"),T=i.value,l=C-1;return u("div",{class:P.value,style:m.value},[S.map(function(h,E){var j={};return d.value||($==="vertical"?E<l&&(j={marginBottom:"".concat(T/(A?2:1),"px")}):j=X(X({},E<l&&ee({},v.value,"".concat(T/(A?2:1),"px"))),s&&{paddingBottom:"".concat(y.value,"px")})),u(U,null,[u("div",{class:N,style:j},[h]),E<l&&A&&u("span",{class:"".concat(N,"-split"),style:j},[A])])})])}}});const Je=he(Ke),Qe=Q({__name:"ScaleOut",props:{groupRecord:{}},emits:["cancel","refresh"],setup(a,{emit:t}){var i;const e=t,_=a,p=w(!1),b=O(ne()),r=w(),o=O({resourceGroup:((i=_.groupRecord)==null?void 0:i.name)||"",parallelism:1});function d(){r.value.validateFields().then(async()=>{p.value=!0,await Ne({optimizerGroup:o.resourceGroup||"",parallelism:Number(o.parallelism)}),r.value.resetFields(),e("cancel"),e("refresh"),p.value=!1}).catch(()=>{p.value=!1})}function c(){r.value.resetFields(),e("cancel")}return H(()=>{}),(y,f)=>{const P=de,v=me,m=fe,n=V;return G(),B(n,{visible:!0,title:y.$t("scaleOut"),confirmLoading:p.value,closable:!1,onOk:d,onCancel:c},{default:I(()=>[u(m,{ref_key:"formRef",ref:r,model:o,class:"label-120"},{default:I(()=>[u(P,{name:"resourceGroup",label:y.$t("resourceGroup")},{default:I(()=>[pe(x(o.resourceGroup),1)]),_:1},8,["label"]),u(P,{name:"parallelism",label:y.$t("parallelism"),rules:[{required:!0,message:`${b.parallelismPh}`}]},{default:I(()=>[u(v,{value:o.parallelism,"onUpdate:value":f[0]||(f[0]=g=>o.parallelism=g),type:"number",placeholder:b.parallelismPh},null,8,["value","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),We={class:"list-wrap"},He=["title"],Xe=["onClick"],Ye=["onClick"],Ze=["onClick"],et=["onClick"],tt=Q({__name:"List",props:{curGroupName:{},type:{}},emits:["editGroup","refresh"],setup(a,{emit:t}){const{t:e}=Y();ae();const _=a,p=t,b=K({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),r=w(!1),o=w(!1),d=K([{dataIndex:"name",title:e("name"),ellipsis:!0},{dataIndex:"container",title:e("container"),width:"23%",ellipsis:!0},{dataIndex:"resourceOccupation",title:e("resourceOccupation"),width:"23%",ellipsis:!0},{dataIndex:"operationGroup",title:e("operation"),key:"operationGroup",ellipsis:!0,width:230,scopedSlots:{customRender:"operationGroup"}}]),c=K([{dataIndex:"index",title:e("order"),width:80,ellipsis:!0},{dataIndex:"jobId",title:e("optimizerId"),width:"15%",ellipsis:!0},{dataIndex:"token",title:e("token"),width:"10%",ellipsis:!0},{dataIndex:"groupName",title:e("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:e("container"),ellipsis:!0},{dataIndex:"jobStatus",title:e("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:e("resourceAllocation"),width:"10%",ellipsis:!0},{dataIndex:"startTime",title:e("startTime"),width:172,ellipsis:!0},{dataIndex:"touchTime",title:e("touchTime"),width:172,ellipsis:!0},{dataIndex:"operation",title:e("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operationGroup"}}]),i=O(ie()),y=O([]),f=O([]),P=F(()=>_.type==="optimizers"?c:d),v=F(()=>_.type==="optimizers"?y:f);function m(l){l&&(i.current=1),_.type==="optimizers"?s():z()}function n(l){l.container!=="external"&&V.confirm({title:e("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{g(l)}})}async function g(l){try{o.value=!0,await be({optimizerGroup:l.groupName,jobId:l.jobId}),m(!0),p("refreshCurGroupInfo")}finally{o.value=!1}}async function s(){try{y.length=0,r.value=!0;const l={optimizerGroup:"all",page:i.current,pageSize:i.pageSize},h=await Me(l),{list:E,total:j}=h;i.total=j,(E||[]).forEach((k,R)=>{k.resourceAllocation=`${k.coreNumber} ${e("core")} ${re(k.memory)}`,k.index=(i.current-1)*i.pageSize+R+1,k.startTime=k.startTime?ue(k.startTime):"-",k.touchTime=k.touchTime?ue(k.touchTime):"-",y.push(k)})}catch{}finally{r.value=!1}}async function z(){try{f.length=0,r.value=!0;const l=await ye();i.total=l.length,(l||[]).forEach(h=>{h.name=h.resourceGroup.name,h.container=h.resourceGroup.container,h.resourceOccupation=`${h.occupationCore} ${e("core")} ${re(h.occupationMemory)}`,f.push(h)})}catch{}finally{r.value=!1}}const $=l=>{p("editGroup",l)},S=async l=>{if(await De({name:l.name})){V.confirm({title:e("deleteGroupModalTitle"),onOk:async()=>{await Pe({name:l.name}),te.success(`${e("remove")} ${e("success")}`),m()}});return}V.warning({title:e("cannotDeleteGroupModalTitle"),content:e("cannotDeleteGroupModalContent")})},C=w({}),A=w(!1),N=l=>{l.container!=="external"&&(C.value={...l},A.value=!0)};function T({current:l=i.current,pageSize:h=i.pageSize}){i.current=l;const E=h!==i.pageSize;i.pageSize=h,m(E)}return H(()=>{m()}),(l,h)=>{const E=ge,j=W("u-loading");return G(),D(U,null,[M("div",We,[u(E,{class:"ant-table-common",columns:P.value,"data-source":v.value,pagination:i,loading:r.value,onChange:T},{bodyCell:I(({column:k,record:R})=>[k.dataIndex==="durationDisplay"?(G(),D("span",{key:0,title:R.durationDesc},x(R.durationDisplay),9,He)):L("",!0),k.dataIndex==="optimizeStatus"?(G(),D(U,{key:1},[M("span",{style:ve({"background-color":(q(b)[R.optimizeStatus]||{}).color}),class:"status-icon"},null,4),M("span",null,x(R.optimizeStatus),1)],64)):L("",!0),k.dataIndex==="operation"?(G(),D("span",{key:2,class:J(["primary-link",{disabled:R.container==="external"}]),onClick:Z=>n(R)},x(q(e)("release")),11,Xe)):L("",!0),k.dataIndex==="operationGroup"?(G(),D(U,{key:3},[M("span",{class:J(["primary-link g-mr-12",{disabled:R.container==="external"}]),onClick:Z=>N(R)},x(q(e)("scaleOut")),11,Ye),M("span",{class:"primary-link g-mr-12",onClick:Z=>$(R)},x(q(e)("edit")),9,Ze),M("span",{class:"primary-link",onClick:Z=>S(R)},x(q(e)("remove")),9,et)],64)):L("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),A.value?(G(),B(Qe,{key:0,groupRecord:C.value,onCancel:h[0]||(h[0]=k=>A.value=!1),onRefresh:m},null,8,["groupRecord"])):L("",!0),o.value?(G(),B(j,{key:1})):L("",!0)],64)}}}),at=oe(tt,[["__scopeId","data-v-561bd2ac"]]),ot={class:"list-wrap"},nt=["title","onClick"],it=["title"],lt=["onClick"],st=Q({__name:"List",setup(a){const{t}=Y(),e=ae(),_=K({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),p=w(!1),b=w(!1),r=w([]),o=K([{dataIndex:"tableName",title:t("table"),ellipsis:!0,scopedSlots:{customRender:"tableName"}},{dataIndex:"groupName",title:t("optimizerGroup"),width:"16%",ellipsis:!0},{dataIndex:"optimizeStatus",title:t("optimizingStatus"),width:"16%",ellipsis:!0},{dataIndex:"durationDisplay",title:t("duration"),width:"10%",ellipsis:!0},{dataIndex:"fileCount",title:t("fileCount"),width:"10%",ellipsis:!0},{dataIndex:"fileSizeDesc",title:t("fileSize"),width:"10%",ellipsis:!0},{dataIndex:"quota",title:t("quota"),width:"10%",ellipsis:!0},{dataIndex:"quotaOccupationDesc",title:t("occupation"),width:120,ellipsis:!0}]),d=O(ie()),c=O([]),i=w(),y=async()=>{const z=(await ye()||[]).map($=>({lable:$.resourceGroup.name,value:$.resourceGroup.name}));r.value=z};function f(s){s&&(d.current=1),P()}async function P(){try{c.length=0,p.value=!0;const s={optimizerGroup:i.value||"all",page:d.current,pageSize:d.pageSize},z=await Ae(s),{list:$,total:S}=z;d.total=S,($||[]).forEach(C=>{C.quotaOccupationDesc=C.quotaOccupation-5e-4>0?`${(C.quotaOccupation*100).toFixed(1)}%`:"0",C.durationDesc=$e(C.duration||0),C.durationDisplay=we(C.duration||0),C.fileSizeDesc=Se(C.fileSize),c.push(C)})}catch{}finally{p.value=!1}}function v(s){s.container!=="external"&&V.confirm({title:t("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{m(s)}})}async function m(s){try{b.value=!0,await be({optimizerGroup:s.groupName,jobId:s.jobId}),f(!0)}finally{b.value=!1}}function n({current:s=d.current,pageSize:z=d.pageSize}){d.current=s;const $=z!==d.pageSize;d.pageSize=z,f($)}function g(s){const{catalog:z,database:$,tableName:S}=s.tableIdentifier;e.push({path:"/tables",query:{catalog:z,db:$,table:S}})}return H(()=>{f(),y()}),(s,z)=>{const $=_e,S=Je,C=ge,A=W("u-loading");return G(),D(U,null,[M("div",ot,[u(S,{class:"filter-form"},{default:I(()=>[u($,{allowClear:"",value:i.value,"onUpdate:value":z[0]||(z[0]=N=>i.value=N),placeholder:"Optimizer group",options:r.value,style:{"min-width":"150px"},onChange:f},null,8,["value","options"])]),_:1}),u(C,{class:"ant-table-common",columns:q(o),"data-source":c,pagination:d,loading:p.value,onChange:n},{bodyCell:I(({column:N,record:T})=>[N.dataIndex==="tableName"?(G(),D("span",{key:0,title:T.tableName,class:"primary-link",onClick:l=>g(T)},x(T.tableName),9,nt)):L("",!0),N.dataIndex==="durationDisplay"?(G(),D("span",{key:1,title:T.durationDesc},x(T.durationDisplay),9,it)):L("",!0),N.dataIndex==="optimizeStatus"?(G(),D(U,{key:2},[M("span",{style:ve({"background-color":(q(_)[T.optimizeStatus]||{}).color}),class:"status-icon"},null,4),M("span",null,x(T.optimizeStatus),1)],64)):L("",!0),N.dataIndex==="operation"?(G(),D("span",{key:3,class:J(["primary-link",{disabled:T.container==="external"}]),onClick:l=>v(T)},x(q(t)("release")),11,lt)):L("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),b.value?(G(),B(A,{key:0})):L("",!0)],64)}}}),rt=oe(st,[["__scopeId","data-v-cd107afb"]]),ut=Q({__name:"GroupModal",props:{edit:{type:Boolean},editRecord:{}},emits:["cancel","refresh"],setup(a,{emit:t}){const{t:e}=Y(),_=O(ne()),p=a,b=w({containerList:[]});async function r(){const m=(await je()||[]).map(n=>({label:n,value:n}));b.value.containerList=m}const o=O({name:"",container:void 0,properties:{}}),d=w(!1),c=t,i=()=>{c("cancel")},y=w(),f=w(),P=()=>{y.value.validateFields().then(async()=>{try{const v=await f.value.getProperties(),m={name:o.name,container:o.container,properties:v};p.edit?await qe(m):await Fe(m),te.success(`${e("save")} ${e("success")}`),c("refresh")}catch{te.error(`${e("save")} ${e("failed")}`)}})};return H(()=>{var v,m,n;r(),p.edit&&(o.name=(v=p.editRecord)==null?void 0:v.name,o.container=(m=p.editRecord)==null?void 0:m.container,o.properties=(n=p.editRecord)==null?void 0:n.resourceGroup.properties)}),(v,m)=>{const n=me,g=de,s=_e,z=fe,$=V;return G(),B($,{visible:!0,title:v.edit?v.$t("editgroup"):v.$t("addgroup"),confirmLoading:d.value,closable:!1,class:"group-modal",onOk:P,onCancel:i},{default:I(()=>[u(z,{ref_key:"formRef",ref:y,model:o,class:"label-120"},{default:I(()=>[u(g,{name:"name",label:v.$t("name"),rules:[{required:!0,message:`${_.groupNamePh}`}]},{default:I(()=>[u(n,{value:o.name,"onUpdate:value":m[0]||(m[0]=S=>o.name=S),placeholder:_.groupNamePh,disabled:v.edit},null,8,["value","placeholder","disabled"])]),_:1},8,["label","rules"]),u(g,{name:"container",label:v.$t("container"),rules:[{required:!0,message:`${_.groupContainer}`}]},{default:I(()=>[u(s,{value:o.container,"onUpdate:value":m[1]||(m[1]=S=>o.container=S),showSearch:!0,options:b.value.containerList,placeholder:_.groupContainer},null,8,["value","options","placeholder"])]),_:1},8,["label","rules"]),u(g,{label:v.$t("properties")},null,8,["label"]),u(g,null,{default:I(()=>[u(Ee,{propertiesObj:o.properties,isEdit:!0,ref_key:"propertiesRef",ref:f},null,8,["propertiesObj"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),ct=Q({name:"Resource",components:{List:at,GroupModal:ut,TableList:rt},setup(){const{t:a}=Y(),t=ae(),e=Te(),_=K([{label:a("optimizergroup"),value:"optimizergroup"},{label:a("optimizers"),value:"optimizers"}]),p=O(ne()),b=O(ie()),r=O({activeTab:"optimizergroup",showGroupModal:!1,groupEdit:!1,groupEditRecord:{},groupKeyCount:1,showTab:!1});ce(()=>e.query,c=>{r.activeTab=c.tab||"tables"},{immediate:!0});const o=c=>{c?(r.groupEdit=!0,r.groupEditRecord={...c}):r.groupEdit=!1,r.showGroupModal=!0},d=c=>{const i={...e.query};i.tab=c,t.replace({query:{...i}})};return H(()=>{r.showTab=!0}),{placeholder:p,pagination:b,...Re(r),tabConfig:_,onChangeTab:d,editGroup:o,t:a}}}),pt={class:"border-wrap"},dt={class:"resource-wrap"},mt={class:"content"};function ft(a,t,e,_,p,b){const r=W("TableList"),o=xe,d=W("List"),c=Le,i=Oe,y=W("GroupModal");return G(),D("div",pt,[M("div",dt,[M("div",mt,[u(i,{activeKey:a.activeTab,"onUpdate:activeKey":t[1]||(t[1]=f=>a.activeTab=f),destroyInactiveTabPane:"",onChange:a.onChangeTab},{default:I(()=>[u(o,{key:"tables",tab:a.t("tables"),class:J([a.activeTab==="tables"?"active":""])},{default:I(()=>[u(r)]),_:1},8,["tab","class"]),u(o,{key:"optimizers",tab:a.t("optimizers"),class:J([a.activeTab==="optimizers"?"active":""])},{default:I(()=>[u(d,{type:"optimizers"})]),_:1},8,["tab","class"]),u(o,{key:"optimizergroup",tab:a.t("optimizergroup"),class:J([a.activeTab==="optimizergroup"?"active":""])},{default:I(()=>[u(c,{type:"primary",class:"g-mb-16",onClick:t[0]||(t[0]=f=>a.editGroup(null))},{default:I(()=>[pe(x(a.t("addgroup")),1)]),_:1}),(G(),B(d,{key:a.groupKeyCount,type:"optimizergroup",onEditGroup:a.editGroup},null,8,["onEditGroup"]))]),_:1},8,["tab","class"])]),_:1},8,["activeKey","onChange"])])]),a.showGroupModal?(G(),B(y,{key:0,edit:a.groupEdit,editRecord:a.groupEditRecord,onCancel:t[2]||(t[2]=f=>a.showGroupModal=!1),onRefresh:t[3]||(t[3]=f=>{a.groupKeyCount++,a.showGroupModal=!1})},null,8,["edit","editRecord"])):L("",!0)])}const wt=oe(ct,[["render",ft],["__scopeId","data-v-9dd54e51"]]);export{wt as default};
