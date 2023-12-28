
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

import{v as U,a7 as oe,ak as le,a3 as ue,n as $e,aF as Le,aG as J,aH as ne,o as a,f as d,u as B,x as A,V as ae,z as l,b as y,ad as E,aI as ie,h as b,J as W,aJ as re,y as S,q as z,F as I,l as D,D as f,a2 as R,C as V,s as Oe,a8 as N,r as M,c as q,i as F,e as Ie,Y as Re,E as Me,B as De,a6 as He,a5 as Te,a1 as Ee}from"./index-Cv3Z2rcY.js";/* empty css              *//* empty css              *//* empty css              */import{d as ce}from"./common.type-LfySSiiQ.js";import{g as Fe}from"./table.service-ipbR45ZP.js";import{u as Be}from"./usePlaceholder-3EuNseZp.js";const Ve={theme:"arcticSql",language:"sql",fontSize:12,lineHeight:24,fontFamily:'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',folding:!0,suggestLineHeight:20,autoIndent:!0,renderLineHighlight:"all",scrollBeyondLastLine:!1,contextmenu:!1,readOnly:!0,fixedOverflowWidgets:!0},Ne=Object.assign({},Ve,{theme:"arcticSql",language:"sql",readOnly:!1,lineHeight:24,fontSize:12,fontFamily:'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',lineNumbersMinChars:3,wordWrap:"on",renderLineHighlight:"all",minimap:{enabled:!1},contextmenu:!1,automaticLayout:!0,scrollBeyondLastLine:!1}),ze=U({__name:"index",props:{sqlValue:{},options:{},readOnly:{type:Boolean}},emits:["save","update:value","change"],setup(e,{expose:s,emit:g}){let n;const r=e;let h="";const v={},o=g;oe(()=>r.sqlValue,i=>{i&&h!==i&&n&&n.setValue(i)}),window.addEventListener("resize",c);function c(){n&&n.layout()}s({executeCommand(i){const p=v[i],w=n;p&&w&&w._commandService.executeCommand(p)},updateOptions(i={}){n&&n.updateOptions(i)}}),le(()=>{window.removeEventListener("resize",c),n&&n.dispose()}),ue(()=>{const i=document.getElementsByClassName("m-sql-editor")[0];$e(()=>{const p=n=Le.create(i,{...Ne,...r.options});_(),p.setValue(r.sqlValue||""),p.onDidChangeModelContent(w=>{const C=n.getValue();o("update:value",C),o("change",C),h=C})})});function _(){if(n){const i=n.addCommand(J.CtrlCmd|ne.KEY_S,()=>{o("save")});v.save=i;const p=n.addCommand(J.Alt|J.Shift|ne.KEY_F,()=>{O()});v.format=p}}function O(){const i=n&&n.getAction("editor.action.formatDocument");i&&i.run()}return(i,p)=>(a(),d("div",{class:B(["m-sql-editor",{disabled:i.readOnly}]),style:{height:"100%",width:"100%"}},null,2))}}),de=A(ze,[["__scopeId","data-v-02d7d6cc"]]),Ue={class:"sql-result-wrap"},Ae={class:"g-ml-8"},Pe={key:0,class:"empty"},Ke={key:1,class:"result-wrap"},Ye={class:"ant-table sql-result-table",style:{width:"100%"}},je={class:"ant-table-thead"},Je={class:"ant-table-tbody"},We=["title"],Ge=U({__name:"sql-result",props:{info:{}},setup(e){const s=e,g=ae(()=>{var r;return!s.info||!((r=s.info)!=null&&r.columns)}),n=ae(()=>{var r;return(r=s.info)==null?void 0:r.status});return(r,h)=>(a(),d("div",Ue,[l("div",{class:"result-status",style:z({background:E(ce)[n.value]})},[n.value==="Running"?(a(),y(E(ie),{key:0,style:{color:"#1890ff"}})):b("",!0),n.value==="Canceled"||n.value==="Failed"?(a(),y(E(W),{key:1,style:{color:"#ff4d4f"}})):b("",!0),n.value==="Finished"?(a(),y(E(re),{key:2,style:{color:"#52c41a"}})):b("",!0),n.value==="Created"?(a(),y(E(W),{key:3,style:{color:"#333"}})):b("",!0),l("span",Ae,S(n.value),1)],4),g.value?(a(),d("div",Pe,S(r.$t("noResult")),1)):(a(),d("div",Ke,[l("table",Ye,[l("thead",je,[l("tr",null,[(a(!0),d(I,null,D(s.info.columns,v=>(a(),d("th",{key:v},S(v),1))),128))])]),l("tbody",Je,[(a(!0),d(I,null,D(s.info.rowData,(v,o)=>(a(),d("tr",{key:o+1},[(a(!0),d(I,null,D(v,(c,_)=>(a(),d("td",{key:o+c+_},[l("span",{class:"td-val",title:c},S(c),9,We)]))),128))]))),128))])])]))]))}}),Qe=A(Ge,[["__scopeId","data-v-b9506e1e"]]),Xe={class:"sql-log"},Ze=["innerHTML"],xe=U({__name:"sql-log",setup(e,{expose:s}){const g=f("");return s({initData(n){g.value=n}}),(n,r)=>(a(),d("div",Xe,[l("div",{innerHTML:g.value,style:{"white-space":"pre-wrap","font-size":"12px"}},null,8,Ze)]))}}),et=A(xe,[["__scopeId","data-v-8ca0e67b"]]);function tt(e){return R.get(`ams/v1/terminal/${e}/result`)}function st(){return R.get("ams/v1/terminal/examples")}function nt(e){return R.get(`ams/v1/terminal/examples/${e}`)}function at(e){const{catalog:s,sql:g}=e;return R.post(`ams/v1/terminal/catalogs/${s}/execute`,{sql:g})}function ot(e){return R.put(`ams/v1/terminal/${e}/stop`)}function lt(e){return R.get(`ams/v1/terminal/${e}/logs`)}function ut(){return R.get("ams/v1/terminal/latestInfos")}const it=U({name:"Terminal",components:{SqlEditor:de,SqlResult:Qe,SqlLog:et,CheckCircleOutlined:re,CloseCircleOutlined:W,LoadingOutlined:ie},setup(){const e=V(Be()),s=f(!1),g=f(null),n=f(null),r=f(!1),h=f(""),v=f(!1),o=f(""),c=f(),_=f(!1),O=f(!1),i=f("log"),p=V([]),w=V([]),C=f(""),k=f(),$=V([]),u=f(476),P=Oe(ce),G="easylake-sql-source",Q="easylake-use-catalog";oe(()=>r,()=>{g.value.updateOptions({readOnly:r})});const ge=t=>{if(t==="debug"){ye();return}if(t==="format"){g.value&&g.value.executeCommand("format");return}t==="pause"&&_e()},ve=async()=>{if((await Fe()||[]).forEach(m=>{p.push({value:m.catalogName,label:m.catalogName})}),p.length){const m=se(Q),L=p.findIndex(j=>j.value===m);C.value=L>-1?m:p[0].value}},pe=async()=>{const t=await st();w.push(...t||[])},me=()=>{te(Q,C.value)},fe=()=>{_.value=!_.value},he=()=>{O.value=!O.value},K=()=>{$.length=0,n.value.initData("")},ye=async()=>{try{if(!C.value){N.error(e.selectClPh);return}v.value=!0,K(),o.value="Running";const t=await at({catalog:C.value,sql:h.value});c.value=t.sessionId||"0",Y()}catch(t){o.value="Failed",N.error(t.message||"error")}},_e=async()=>{c.value&&(i.value="log",k.value&&clearTimeout(k.value),v.value=!1,o.value="Canceling",K(),r.value=!0,await ot(c.value).then(()=>{o.value="Canceled"}).catch(()=>{o.value="Failed"}).finally(()=>{r.value=!1}))},Ce=async()=>{try{$.length=0;const t=await tt(c.value||"0");t&&t.length&&$.push(...t)}catch{}},Y=async()=>{if(k.value&&clearTimeout(k.value),o.value==="Running"&&c.value){const t=await lt(c.value);i.value="log";const{logStatus:m,logs:L}=t||{};if(L!=null&&L.length&&n.value.initData(L.join(`
`)),o.value!=="Canceled"&&(o.value=m),await Ce(),m==="Finished"||m==="Canceled")$.length&&(i.value=$[0].id);else{if(o.value==="Canceled")return;k.value=setTimeout(()=>{Y()},1500)}}},be=async t=>{try{if(i.value="log",o.value==="Running")return;clearTimeout(k.value),s.value=!0;const m=await nt(t);h.value=h.value+`
-- SQL shortcut generated
`+m,v.value=!1,o.value="",K()}catch(m){N.error(m.message)}finally{s.value=!1}},qe=()=>document.body,Se=async()=>{try{g.value&&(h.value=se(G)),s.value=!0;const t=await ut();c.value=t.sessionId,t.sessionId>"0"&&(g.value&&!h.value&&(h.value=t.sql||""),o.value="Running",v.value=!0,Y())}catch(t){N.error(t.message)}finally{s.value=!1}},H={topbarHeight:48,optionHeight:44,resultTabHeight:40,runStatusHeight:32,gap:48};let X=0,Z=0;const ke=t=>{X=t.clientY,Z=u.value,window.addEventListener("mousemove",x),window.addEventListener("mouseup",ee)},x=t=>{const L=t.clientY-X,j=_.value?0:H.topbarHeight,we=o.value?H.runStatusHeight:0;let T=Z+L;T=Math.max(T,H.optionHeight+we),T=Math.min(T,window.innerHeight-j-(_.value?0:H.gap)-H.optionHeight-4),u.value=T},ee=()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",ee)},te=(t,m)=>{localStorage.setItem(t,m)},se=t=>localStorage.getItem(t)||"";return le(()=>{clearTimeout(k.value),te(G,h.value),console.log("onBeforeUnmount",h.value)}),ue(()=>{Se(),pe(),ve()}),{loading:s,bgcMap:P,sqlLogRef:n,sqlEditorRef:g,fullscreen:_,resultFullscreen:O,operationActive:i,resultTabList:$,runStatus:o,shortcuts:w,curCatalog:C,catalogOptions:p,handleIconClick:ge,handleFull:fe,resultFull:he,showDebug:v,sqlSource:h,readOnly:r,generateCode:be,getPopupContainer:qe,sqlResultHeight:u,dragMounseDown:ke,changeUseCatalog:me}}}),rt={class:"console-wrap"},ct={class:"sql-block"},dt={class:"top-ops g-flex-jsb"},gt={class:"title-left g-flex-ac"},vt={class:"select-catalog g-mr-12"},pt={class:"label"},mt={class:"title-right"},ft={class:"sql-content"},ht={class:"sql-raw"},yt={class:"g-ml-12"},_t={class:"sql-shortcuts"},Ct={class:"shortcuts"},bt={class:"tab-operation"},qt={class:"tab"},St=["onClick"],kt={class:"debug-result"};function wt(e,s,g,n,r,h){const v=Me,o=De,c=He,_=de,O=M("loading-outlined"),i=M("close-circle-outlined"),p=M("check-circle-outlined"),w=Ee,C=M("sql-log"),k=M("sql-result"),$=M("u-loading");return a(),d("div",rt,[l("div",{class:B(["console-content",{fullscreen:e.fullscreen}])},[l("div",{style:z({height:`${e.sqlResultHeight}px`}),class:"sql-wrap"},[l("div",ct,[l("div",dt,[l("div",gt,[l("div",vt,[l("span",pt,S(e.$t("use")),1),q(v,{value:e.curCatalog,"onUpdate:value":s[0]||(s[0]=u=>e.curCatalog=u),style:{width:"200px"},options:e.catalogOptions,onChange:e.changeUseCatalog},null,8,["value","options","onChange"])]),e.runStatus==="Running"?(a(),y(c,{key:0,title:e.$t("pause"),placement:"bottom"},{default:F(()=>[q(o,{className:"icon-svg","icon-class":"sqlpause",onClick:s[1]||(s[1]=u=>e.handleIconClick("pause")),class:"g-mr-12",disabled:e.readOnly},null,8,["disabled"])]),_:1},8,["title"])):(a(),y(c,{key:1,title:e.$t("run"),placement:"bottom"},{default:F(()=>[q(o,{className:"icon-svg","icon-class":"sqldebug",onClick:s[2]||(s[2]=u=>e.handleIconClick("debug")),class:"g-mr-12",disabled:e.readOnly},null,8,["disabled"])]),_:1},8,["title"])),q(c,{title:e.$t("format"),placement:"bottom"},{default:F(()=>[q(o,{className:"icon-svg",isStroke:!0,"icon-class":"format",onClick:s[3]||(s[3]=u=>e.handleIconClick("format")),disabled:e.readOnly},null,8,["disabled"])]),_:1},8,["title"])]),l("div",mt,[q(c,{title:e.fullscreen?e.$t("recovery"):e.$t("fullscreen"),placement:"bottom",getPopupContainer:e.getPopupContainer},{default:F(()=>[q(o,{className:"icon-svg",isStroke:!0,"icon-class":e.fullscreen?"sqlinit":"sqlmax",onClick:e.handleFull,disabled:!1,class:"g-ml-12"},null,8,["icon-class","onClick"])]),_:1},8,["title","getPopupContainer"])])]),l("div",ft,[l("div",ht,[q(_,{ref:"sqlEditorRef",sqlValue:e.sqlSource,value:e.sqlSource,"onUpdate:value":s[4]||(s[4]=u=>e.sqlSource=u),readOnly:e.readOnly,options:{readOnly:e.readOnly,minimap:{enabled:!1}}},null,8,["sqlValue","value","readOnly","options"])]),e.runStatus?(a(),d("div",{key:0,class:"run-status",style:z({background:e.bgcMap[e.runStatus]})},[e.runStatus==="Running"||e.runStatus==="Canceling"?(a(),y(O,{key:0,style:{color:"#1890ff"}})):b("",!0),e.runStatus==="Canceled"||e.runStatus==="Failed"?(a(),y(i,{key:1,style:{color:"#ff4d4f"}})):b("",!0),e.runStatus==="Finished"?(a(),y(p,{key:2,style:{color:"#52c41a"}})):b("",!0),e.runStatus==="Created"?(a(),y(i,{key:3,style:{color:"#333"}})):b("",!0),l("span",yt,S(e.$t(e.runStatus)),1)],4)):b("",!0)])]),l("div",_t,[l("div",Ct,S(e.$t("sqlShortcuts")),1),(a(!0),d(I,null,D(e.shortcuts,u=>(a(),y(w,{key:u,type:"link",disabled:e.runStatus==="Running"||e.runStatus==="Canceling",onClick:P=>e.generateCode(u),class:"code"},{default:F(()=>[Te(S(u),1)]),_:2},1032,["disabled","onClick"]))),128))])],4),l("div",{class:B(["sql-result",e.resultFullscreen?"result-full":""]),style:z({height:`calc(100% - ${e.sqlResultHeight}px)`})},[l("span",{class:"drag-line",onMousedown:s[5]||(s[5]=(...u)=>e.dragMounseDown&&e.dragMounseDown(...u))},[q(o,{class:"icon","icon-class":"slide"})],32),l("div",bt,[l("div",qt,[l("span",{class:B([{active:e.operationActive==="log"},"tab-item"]),onClick:s[6]||(s[6]=u=>e.operationActive="log")},S(e.$t("log")),3),(a(!0),d(I,null,D(e.resultTabList,u=>(a(),d("span",{key:u.id,class:B([{active:e.operationActive===u.id},"tab-item"]),onClick:P=>e.operationActive=u.id},S(u.id),11,St))),128))])]),l("div",kt,[Ie(q(C,{ref:"sqlLogRef"},null,512),[[Re,e.operationActive==="log"]]),(a(!0),d(I,null,D(e.resultTabList,u=>(a(),d(I,{key:u.id},[e.operationActive===u.id?(a(),y(k,{key:0,info:u},null,8,["info"])):b("",!0)],64))),128))])],6)],2),e.loading?(a(),y($,{key:0})):b("",!0)])}const Ht=A(it,[["render",wt],["__scopeId","data-v-636c83e0"]]);export{Ht as default};
