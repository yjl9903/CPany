var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;"undefined"!=typeof require&&require;import{I as n}from"./account.fe497442.js";import{_ as i,I as r,a as d,b as o}from"./c-stastic.8d350e1e.js";import{r as c,u as m,a as u,b as f,c as b,t as p,d as g,e as h,f as v,g as x}from"./index.c213ba3a.js";import{C as y,a as _}from"./c-table.372c70d5.js";import{_ as w}from"./user-link.69187dfa.js";import{e as j,l as O,o as L,b as k,d as I,m as P,u as q,w as C,t as M,h as E,n as F}from"./vendor.5658d620.js";const H={class:"flex <lg:flex-col-reverse"},N={class:"lg:w-3/5 <lg:w-full"},S={class:"box divide-y"},T=I("h3",{class:"mb-4"},"最近比赛",-1),z={class:"flex flex-1 items-center justify-center"},A=F(" "),B=I("div",{class:"my-4 px-3"},"好像都大家没有参加比赛？",-1),D={class:"text-right <md:mt-4 pt-2"},G=F("→ 更多比赛"),J={class:"lg:w-2/5 <lg:w-full"},K={class:"lg:ml-4 <lg:mb-4"},Q={class:"box divide-y"},R={class:"mb-4"},U={key:0},V=F("总览 "),W={class:"py-4 md:flex md:items-center md:justify-around <md:grid <md:grid-cols-2"},X={class:"text-right pt-2"},Y=F("→ 历史"),Z={class:"box mt-4 divide-y"},$={class:"font-600"},ee={class:"text-right pt-2"},te=F("→ 更多"),ae={class:"box mt-4 divide-y"},se={class:"font-600"},le={class:"text-right pt-2"},ne=F("→ 更多"),ie=j({setup(e){const j=" "+(c/86400).toFixed(0)+" 天",ie=m.sort(((e,t)=>t.submissions.length-e.submissions.length)).slice(0,u),re=m.map((e=>((e,n)=>{for(var i in n||(n={}))a.call(n,i)&&l(e,i,n[i]);if(t)for(var i of t(n))s.call(n,i)&&l(e,i,n[i]);return e})({contestsLength:e.contests.filter((({t:e})=>e>=f)).length},e))).sort(((e,t)=>t.contestsLength-e.contestsLength)).slice(0,u);return(e,t)=>{const a=O("router-link");return L(),k("div",H,[I("div",N,[I("div",S,[T,P(q(y),{data:q(b),class:"pt-2"},{columns:C((({row:e})=>[P(q(_),{label:"比赛","mobile-header-class":["min-w-8"]},{default:C((()=>[P(a,{to:e.path},{default:C((()=>[F(M(e.name),1)])),_:2},1032,["to"])])),_:2},1024),P(q(_),{label:"时间",align:"center",width:"10em"},{default:C((()=>[I("span",null,M(q(g)(e.startTime).value),1)])),_:2},1024),P(q(_),{label:"人数",align:"center",width:"5em"},{default:C((()=>[I("div",z,[P(q(n)),A,I("span",null,"x "+M(e.participantNumber),1)])])),_:2},1024)])),empty:C((()=>[B])),_:1},8,["data"]),I("div",D,[P(a,{to:{name:"Contests"},class:"text-gray-400 font-thin hover:underline"},{default:C((()=>[G])),_:1})])])]),I("div",J,[I("div",K,[I("div",Q,[I("h3",R,[""!==q(p)?(L(),k("span",U,M(q(p))+" ",1)):E("v-if",!0),V]),I("div",W,[P(q(i),{title:"用户"},{prefix:C((()=>[P(q(n))])),default:C((()=>[F(M(q(m).length),1)])),_:1}),P(q(i),{title:"参与比赛"},{prefix:C((()=>[P(q(r),{class:"text-blue-400"})])),default:C((()=>[F(M(q(h)),1)])),_:1}),P(q(i),{title:"提交"},{prefix:C((()=>[P(q(d),{class:"text-yellow-400"})])),default:C((()=>[F(M(q(v)),1)])),_:1}),P(q(i),{title:"正确提交"},{prefix:C((()=>[P(q(o),{class:"text-red-400"})])),default:C((()=>[F(M(q(x)),1)])),_:1})]),I("div",X,[P(a,{to:{name:"History"},class:"text-gray-400 font-thin hover:underline"},{default:C((()=>[Y])),_:1})])]),I("div",Z,[I("h3",{class:"mb-4"},"最近"+M(j)+"用户提交数"),P(q(y),{data:q(ie),mobile:0},{columns:C((({row:e,index:t})=>[P(q(_),{label:"#",width:"2em",align:"center"},{default:C((()=>[I("span",$,M(t+1),1)])),_:2},1024),P(q(_),{label:"姓名"},{default:C((()=>[P(w,{name:e.name},null,8,["name"])])),_:2},1024),P(q(_),{label:"提交数",width:"6em",align:"center"},{default:C((()=>[I("span",null,M(e.submissions.length),1)])),_:2},1024)])),_:1},8,["data"]),I("div",ee,[P(a,{to:{name:"Members"},class:"text-gray-400 font-thin hover:underline"},{default:C((()=>[te])),_:1})])]),I("div",ae,[I("h3",{class:"mb-4"},"最近"+M(j)+"用户比赛数"),P(q(y),{data:q(re),mobile:0},{columns:C((({row:e,index:t})=>[P(q(_),{label:"#",width:"2em",align:"center"},{default:C((()=>[I("span",se,M(t+1),1)])),_:2},1024),P(q(_),{label:"姓名"},{default:C((()=>[P(w,{name:e.name},null,8,["name"])])),_:2},1024),P(q(_),{label:"比赛数",width:"6em",align:"center"},{default:C((()=>[I("span",null,M(e.contestsLength),1)])),_:2},1024)])),_:1},8,["data"]),I("div",le,[P(a,{to:{name:"Members"},class:"text-gray-400 font-thin hover:underline"},{default:C((()=>[ne])),_:1})])])])])])}}});export{ie as default};
