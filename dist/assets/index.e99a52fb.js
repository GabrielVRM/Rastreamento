import{j as d,m as u,G as n,T as p,r as h,B as f,a as m,b as x,c as g,d as y,C as b,R as v,e as T}from"./vendor.ada5633f.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};j();const t=d.exports.jsx,c=d.exports.jsxs,F=d.exports.Fragment,R=u(o=>({root:{color:"#0077b6",fontSize:"100px",textAlign:"center"}}));function S(){const o=R();return t("div",{children:t(n,{container:!0,xs:12,children:t(n,{item:!0,xs:12,children:t(p,{variant:"h6",color:"primary",classes:{root:o.root},children:"Rastreamento"})})})})}const O=u(()=>({root:{marginTop:"130px",textAlign:"center"},TextField:{width:"300px"},button:{borderRadius:"30px",height:"30px",width:"200px"},p:{display:"flex"}}));function k(){const o=O(),[s,a]=h.exports.useState();var i={method:"GET",redirect:"follow"};return fetch(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${a}`,i).then(e=>e.json()).then(e=>a(e)).catch(e=>console.log("error",e)),t(f,{children:c(n,{container:!0,spacing:2,justifyContent:"center",className:o.root,children:[t(n,{item:!0,xs:12,className:o.TextField,children:t(m,{id:"standard-basic",label:"Cod\xEDgo",variant:"standard",value:s,classes:{root:o.TextField}})}),c(n,{item:!0,xs:12,classes:o.button,children:[t(x,{variant:"outlined",size:"large",color:"primary",classes:{root:o.button},children:"Rastear"}),s&&s.eventos&&s.eventos.map((e,r)=>t("div",{children:t(n,{container:!0,xs:12,spacing:4,children:t(n,{item:!0,xs:12,children:c(p,{paragraph:!0,children:[e.status,t("br",{}),e.data,t("br",{}),e.local,t("br",{}),e.hora]})})})}))]})]})})}function B(){const o=g({palette:{primary:{main:"#94d2bd"}}});return t(F,{children:c(y,{theme:o,children:[t(b,{}),t(S,{}),t(k,{})]})})}v.render(t(T.StrictMode,{children:t(B,{})}),document.getElementById("root"));