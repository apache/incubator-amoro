
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

import{v as K,V as R,s as D,o as n,e as k,z as r,y as v,u as f,ad as q,g as _,af as U,x as L,c as T,h as B,M as V,D as G,K as H,L as O,O as E,C as j,a7 as z,ak as F,a3 as Q,Q as A,r as S,a5 as J,a1 as P,ao as W,ap as X}from"./index-VAF7-_iX.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as g}from"./common.type-LfySSiiQ.js";import{o as Y,p as Z}from"./table.service-b5bGQVd9.js";const x={class:"hive-table-detail g-flex"},tt={class:"left-content"},et={key:0,class:"table-attrs"},at={class:"attr-title"},st={class:"table-attrs"},ot={class:"attr-title"},nt=K({__name:"Details",props:{schema:{},partitionColumnList:{}},setup(t){const{t:e}=R(),i=D([{title:e("field"),dataIndex:"field",width:"30%"},{title:e("type"),dataIndex:"type",width:"30%"},{title:e("description"),dataIndex:"comment",ellipsis:!0}]),s=D([{title:e("field"),dataIndex:"field",width:"30%"},{title:e("type"),dataIndex:"type",width:"30%"},{title:e("description"),dataIndex:"comment",ellipsis:!0}]),o=t;return(l,a)=>{const u=U;return n(),k("div",x,[r("div",tt,[o.partitionColumnList&&o.partitionColumnList.length?(n(),k("div",et,[r("p",at,v(l.$t("partitionKey")),1),f(u,{rowKey:"field",columns:q(s),"data-source":o.partitionColumnList,pagination:!1},null,8,["columns","data-source"])])):_("",!0),r("div",st,[r("p",ot,v(l.$t("schema")),1),f(u,{rowKey:"field",columns:q(i),"data-source":o.schema,pagination:!1},null,8,["columns","data-source"])])])])}}}),rt=L(nt,[["__scopeId","data-v-da53acfb"]]),it={class:"msg"},lt=K({__name:"ErrorMsg",props:{msg:{}},emits:["cancle"],setup(t,{emit:e}){const i=t,s=e;return(o,l)=>{const a=V;return n(),T(a,{visible:!0,width:560,title:`${o.$t("errorMessage")}`,footer:null,onCancel:l[0]||(l[0]=u=>s("cancle")),class:"upgrade-error"},{default:B(()=>[r("p",it,v(i.msg),1)]),_:1},8,["title"])}}}),ct=L(lt,[["__scopeId","data-v-1ba381f3"]]),ut=K({name:"Tables",components:{UDetails:rt,errorMsg:ct},setup(){const t=g,e=G(),i=H(),s=O(),{t:o}=R(),l=E(()=>s.path.indexOf("upgrade")>-1),a=j({loading:!1,showErrorMsg:!1,activeKey:"Details",status:"",displayStatus:"",errorMessage:"",tableName:"tableName",partitionColumnList:[],schema:[]}),u=()=>{i.back()},m=E(()=>({...s.query})),M=async(d=!1)=>{try{e.value&&clearTimeout(e.value);const{catalog:p,db:b,table:C}=m.value;if(!p||!b||!C)return;!d&&(a.loading=!0);const w=await Y({...m.value}),{status:c,errorMessage:$}=w;a.status=c,a.displayStatus=c===g.upgrading?o("upgrading"):o("upgrade"),a.errorMessage=$||"",c===g.upgrading?e.value=setTimeout(()=>{M(!0)},1500):c===g.none?N():c===g.success?i.replace({path:"/tables",query:{...s.query}}):c===g.failed&&N()}finally{!d&&(a.loading=!1)}},N=async()=>{try{const{catalog:d,db:p,table:b}=m.value;if(!d||!p||!b)return;a.loading=!0;const C=await Z({...m.value}),{partitionColumnList:w=[],schema:c,tableIdentifier:$}=C;a.tableName=($==null?void 0:$.tableName)||"",a.partitionColumnList=w||[],a.schema=c||[]}catch{}finally{a.loading=!1}},h=async()=>{await M()},I=()=>{i.push({path:"/hive-tables/upgrade",query:{...s.query}})},y=()=>{h()};return z(()=>s.query,(d,p)=>{const{catalog:b,db:C,table:w}=d;s.path==="/hive-tables"&&(b!==p.catalog||C!==p.db||w!==p.table)&&h()}),F(()=>{clearTimeout(e.value)}),Q(()=>{h()}),{...A(a),isSecondaryNav:l,upgradeStatus:t,upgradeTable:I,goBack:u,refresh:y}}}),dt={class:"hive-tables-wrap"},pt={key:0,class:"tables-content"},mt={class:"g-flex-jsb table-top"},gt=["title"],_t={class:"right-btn"},ft={class:"content"};function vt(t,e,i,s,o,l){const a=P,u=S("u-details"),m=W,M=X,N=S("u-loading"),h=S("router-view"),I=S("error-msg");return n(),k("div",dt,[t.isSecondaryNav?_("",!0):(n(),k("div",pt,[r("div",mt,[r("span",{title:t.tableName,class:"table-name g-text-nowrap"},v(t.tableName),9,gt),r("div",_t,[f(a,{type:"primary",disabled:t.status===t.upgradeStatus.upgrading,onClick:t.upgradeTable},{default:B(()=>[J(v(t.displayStatus),1)]),_:1},8,["disabled","onClick"]),t.status===t.upgradeStatus.failed?(n(),k("p",{key:0,onClick:e[0]||(e[0]=y=>t.showErrorMsg=!0),class:"fail-msg"},v(t.$t("lastUpgradingFailed")),1)):_("",!0)])]),r("div",ft,[f(M,{activeKey:t.activeKey,"onUpdate:activeKey":e[1]||(e[1]=y=>t.activeKey=y)},{default:B(()=>[f(m,{key:"Details",tab:"Details"},{default:B(()=>[f(u,{partitionColumnList:t.partitionColumnList,schema:t.schema},null,8,["partitionColumnList","schema"])]),_:1})]),_:1},8,["activeKey"])])])),t.loading?(n(),T(N,{key:1})):_("",!0),t.isSecondaryNav?(n(),T(h,{key:2,onGoBack:t.goBack,onRefresh:t.refresh},null,8,["onGoBack","onRefresh"])):_("",!0),t.showErrorMsg?(n(),T(I,{key:3,msg:t.errorMessage,onCancle:e[2]||(e[2]=y=>t.showErrorMsg=!1)},null,8,["msg"])):_("",!0)])}const St=L(ut,[["render",vt],["__scopeId","data-v-c9782a1f"]]);export{St as default};
