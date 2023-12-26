
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

import{v as j,U as K,s as S,o as $,e as O,u as a,h as d,c as G,g as M,ad as w,ay as J,af as T,x as q,C as b,D as R,a7 as Q,a3 as D,z as g,y as P,F as W,k as X,a5 as V,az as N,H,a1 as A,aA as Y,aB as Z,G as z,I as ee,K as te,L as ae,V as se,aC as oe}from"./index-NKcTwblh.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{q as ne,p as le,u as ie}from"./table.service-Dhop4zsJ.js";import{u as re}from"./usePlaceholder-3jU9SRZX.js";const ce={class:"field-wrap"},de=j({__name:"Field",props:{fields:{},loading:{type:Boolean}},setup(C,{expose:_}){const{t:s}=K(),u=C,p=S([{dataIndex:"field",title:s("field"),ellipsis:!0},{dataIndex:"type",title:s("type"),ellipsis:!0},{dataIndex:"comment",title:s("description"),ellipsis:!0},{dataIndex:"primaryKey",title:s("primaryKey"),scopedSlots:{customRender:"primaryKey"}}]);return _({getPkname(){return u.fields.filter(n=>n.checked).map(n=>({fieldName:n.field||""}))}}),(n,m)=>{const l=J,F=T;return $(),O("div",ce,[a(F,{loading:n.loading,class:"ant-table-common",columns:w(p),"data-source":u.fields,pagination:!1},{bodyCell:d(({column:v,record:k})=>[v.dataIndex==="primaryKey"?($(),G(l,{key:0,checked:k.checked,"onUpdate:checked":x=>k.checked=x},null,8,["checked","onUpdate:checked"])):M("",!0)]),_:1},8,["loading","columns","data-source"])])}}}),pe=q(de,[["__scopeId","data-v-832f53a6"]]),ue={class:"partition-field-wrap"},fe=j({__name:"Partition",props:{partitionFields:{},loading:{type:Boolean}},setup(C){const{t:_}=K(),s=C,u=S([{dataIndex:"field",title:_("field"),ellipsis:!0},{dataIndex:"type",title:_("type"),ellipsis:!0},{dataIndex:"comment",title:_("description"),ellipsis:!0}]);return(p,n)=>{const m=T;return $(),O("div",ue,[a(m,{loading:p.loading,class:"ant-table-common",columns:w(u),"data-source":s.partitionFields,pagination:!1},null,8,["loading","columns","data-source"])])}}}),_e={class:"config-properties"},me={class:"config-header g-flex"},he={class:"td g-flex-ac"},ge={class:"td g-flex-ac bd-left"},ve=j({__name:"Properties",props:{propertiesObj:{}},setup(C,{expose:_}){const s=C,u=b([]),p=R(),n=b([]),m=R(),l=b({data:[]}),F=b(re());Q(()=>s.propertiesObj,()=>{v()},{immediate:!0,deep:!0});function v(){u.length=0,l.data.length=0,Object.keys(s.propertiesObj).forEach(e=>{l.data.push({key:e,value:s.propertiesObj[e],uuid:N()})})}async function k(){n.length=0,p.value=[];const e=await ne();Object.keys(e).forEach(t=>{const y={key:t,label:t,value:t,text:e[t]||""};n.push(y),p.value.push(y)})}function x(e,t){return t.key.toUpperCase().indexOf(e.toUpperCase())>=0}function B(e,t,y){const o=t.key,i=n.find(h=>h.key===o),r=l.data.find(h=>h.uuid===y.uuid);r&&(r.value=i.text||"",r.key=i.key||"")}function L(e){const t=l.data.indexOf(e);t!==-1&&l.data.splice(t,1)}function E(){l.data.push({key:"",value:"",uuid:N()})}return _({getProperties(){return m.value.validateFields().then(()=>{const e={};return l.data.forEach(t=>{e[t.key]=t.value}),Promise.resolve(e)}).catch(()=>!1)}}),D(()=>{k()}),(e,t)=>{const y=Z,o=z,i=ee,r=H,h=A;return $(),O("div",_e,[g("div",me,[g("div",he,P(e.$t("key")),1),g("div",ge,P(e.$t("value")),1)]),a(r,{ref_key:"propertiesFormRef",ref:m,model:l,class:"g-mt-12"},{default:d(()=>[($(!0),O(W,null,X(l.data,(c,U)=>($(),O("div",{class:"config-row",key:c.uuid},[a(o,{name:["data",U,"key"],rules:[{required:!0,message:`${e.$t(F.selectPh)}`}],class:"g-mr-8"},{default:d(()=>[a(y,{value:c.key,"onUpdate:value":f=>c.key=f,options:p.value,onSelect:(f,I)=>B(f,I,c),"filter-option":x,style:{width:"100%"},class:"g-mr-12"},{option:d(({key:f})=>[g("span",null,P(f),1)]),_:2},1032,["value","onUpdate:value","options","onSelect"])]),_:2},1032,["name","rules"]),a(o,{name:["data",U,"value"],rules:[{required:!0,message:`${e.$t(F.inputPh)}`}]},{default:d(()=>[a(i,{value:c.value,"onUpdate:value":f=>c.value=f,maxlength:64,style:{width:"100%"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","rules"]),a(w(Y),{class:"icon-close",onClick:f=>L(c)},null,8,["onClick"])]))),128))]),_:1},8,["model"]),a(h,{class:"config-btn",onClick:E},{default:d(()=>[V("+")]),_:1})])}}}),ye={class:"upgrade-table"},be={class:"nav-bar"},ke={class:"title g-ml-8"},$e={class:"content"},Ce={class:"table-attrs"},Fe={class:"footer-btn"},xe=j({__name:"upgrade",emits:["goBack","refresh"],setup(C,{emit:_}){const s=R(!1),u=b([]),p=b([]),n=b({}),m=b([]),l=_;te();const F=ae(),v=se(()=>({...F.query})),k=R(),x=R();async function B(){try{const{catalog:o,db:i,table:r}=v.value;if(!o||!i||!r)return;s.value=!0,p.length=0,u.length=0;const h=await le({...v.value}),{partitionColumnList:c=[],schema:U,properties:f}=h;(c||[]).forEach(I=>{p.push(I)}),(U||[]).forEach(I=>{u.push(I)}),Object.assign(n,f)}catch{}finally{s.value=!1}}function L(){E()}async function E(){m.length=0,k.value.getPkname().forEach(i=>{m.push(i)}),x.value.getProperties().then(i=>{i&&(Object.assign(n,i),e())})}async function e(){try{const{catalog:o,db:i,table:r}=v.value;if(!o||!i||!r)return;s.value=!0,await ie({...v.value,pkList:m,properties:n}),t(),l("refresh")}catch{t()}finally{s.value=!1}}function t(){l("goBack")}function y(){t()}return D(()=>{B()}),(o,i)=>{const r=z,h=H,c=A;return $(),O("div",ye,[g("div",be,[a(w(oe),{onClick:t}),g("span",ke,P(o.$t("upgradeHiveTable")),1)]),g("div",$e,[g("div",Ce,[a(h,{name:"fields",class:"label-120"},{default:d(()=>[a(r,{label:o.$t("field"),name:"field"},{default:d(()=>[a(pe,{loading:s.value,fields:u,ref_key:"schemaFieldRef",ref:k},null,8,["loading","fields"])]),_:1},8,["label"]),a(r,{label:o.$t("partitonField"),name:"partitonField"},{default:d(()=>[a(fe,{loading:s.value,partitionFields:p},null,8,["loading","partitionFields"])]),_:1},8,["label"]),a(r,{label:o.$t("otherProperties"),name:"otherProperties"},{default:d(()=>[a(ve,{propertiesObj:n,ref_key:"propertiesRef",ref:x},null,8,["propertiesObj"])]),_:1},8,["label"])]),_:1})]),g("div",Fe,[a(c,{type:"primary",onClick:L,loading:s.value,class:"btn g-mr-12"},{default:d(()=>[V(P(o.$t("ok")),1)]),_:1},8,["loading"]),a(c,{type:"ghost",onClick:y,class:"btn"},{default:d(()=>[V(P(o.$t("cancel")),1)]),_:1})])])])}}}),Ve=q(xe,[["__scopeId","data-v-64042654"]]);export{Ve as default};
