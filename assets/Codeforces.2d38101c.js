var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;"undefined"!=typeof require&&require;import{e as s,B as n,k as o,q as i,o as c,b as d,m as f,u,w as g,d as h,t as m,f as v,n as p,h as b}from"./vendor.1d8aaf39.js";import{u as y}from"./users.f02ed2cc.js";import{C as _,a as k}from"./c-table.a8951a44.js";import{_ as C}from"./user-link.6ebf104a.js";import{_ as j}from"./cf-rating-color.c859f74c.js";import{d as w,b as O,h as S,i as q,j as x,k as D}from"./index.1ecc0a69.js";import"./load.8c215a92.js";const R={class:"divide-y"},T=h("h2",{class:"mb-4"},"Codeforces",-1),A={class:"font-600"},P=["href"],B={key:0},E=h("div",{class:"my-4 px-3"},"人捏？",-1),H={class:"mt-4 pt-4"},I={class:"text-gray-400"},M=s({setup(e){var s,M;const W=n(),$=String(null!=(s=W.query.sort)?s:"最近通过"),z=String(null!=(M=W.query.order)?M:"desc"),F=o(O),G=e=>e.startsWith("codeforces"),J=e=>{const s=e.submissions.filter((({type:e})=>G(e))),n=s.length,o=s.filter((({v:e})=>1===e)).length,i=s.filter((({t:e})=>e>=F.value)).length,c=s.filter((({t:e,v:t})=>e>=F.value&&1===t)).length,d=e.contests.filter((({type:e,t:t})=>t>=F.value&&G(e))).length,f=s.filter((({t:e,v:t,d:a})=>e>=F.value&&1===t&&q(a))),u=f.reduce(((e,t)=>{var a;return e+(null!=(a=t.d)?a:0)}),0),g=Math.ceil(f.length>0?u/f.length:0),h=s.filter((({v:e})=>1===e)).sort(((e,t)=>t.t-e.t)),m=h.length>0?h[0].t:0,v=e.handles.filter((e=>G(e.type)));let p=v.length>0?v[0].handle:"",b=!1;return((e,s)=>{for(var n in s||(s={}))a.call(s,n)&&l(e,n,s[n]);if(t)for(var n of t(s))r.call(s,n)&&l(e,n,s[n]);return e})({subCount:n,okCount:o,recentSubCount:i,recentOkCount:c,recentContest:d,recentDiffcult:u,recentAvgDiffcult:g,lastSolveTime:m,rating:v.reduce(((e,t)=>{const a=t;return q(a.codeforces)&&(b=!0),q(a.codeforces)&&a.codeforces.rating>e?(p=a.handle,a.codeforces.rating):e}),0),isRated:b,handle:p},e)},K=i((()=>y.map(J))),L=x((e=>e.rating)),N=x((e=>e.recentOkCount)),Q=x((e=>e.recentContest)),U=x((e=>e.lastSolveTime)),V=x((e=>e.recentAvgDiffcult)),X=x((e=>e.okCount)),Y=x((e=>e.contests.length)),Z=D((e=>e.name));function ee(e){return S(e,L,N,Q,U,V,X,Y,Z)}return(e,t)=>(c(),d("div",R,[T,f(u(_),{data:u(K),cache:"codeforces","default-sort":u($),"default-sort-order":u(z)},{columns:g((({index:e,row:t})=>[f(u(k),{label:"#",width:"3em",align:"center"},{default:g((()=>[h("span",A,m(e+1),1)])),_:2},1024),f(u(k),{label:"姓名"},{default:g((()=>[f(C,{name:t.name},null,8,["name"])])),_:2},1024),f(u(k),{label:"Handle"},{default:g((()=>[h("a",{href:`https://codeforces.com/profile/${t.handle}`,target:"_blank"},[t.isRated?(c(),v(u(j),{key:0,rating:t.rating},{default:g((()=>[p(m(t.handle),1)])),_:2},1032,["rating"])):b("v-if",!0)],8,P)])),_:2},1024),f(u(k),{label:"Rating",sort:ee(u(L)),align:"right"},{default:g((()=>[t.isRated?(c(),v(u(j),{key:0,rating:t.rating,"disable-legendary":""},{default:g((()=>[p(m(t.rating),1)])),_:2},1032,["rating"])):b("v-if",!0)])),_:2},1032,["sort"]),f(u(k),{label:"最近通过",width:"7em",align:"right",sort:ee(u(N))},{default:g((()=>[p(m(t.recentOkCount),1)])),_:2},1032,["sort"]),f(u(k),{label:"最近平均难度",width:"10em",align:"right",sort:ee(u(V))},{default:g((()=>[p(m(t.recentAvgDiffcult),1)])),_:2},1032,["sort"]),f(u(k),{label:"最近比赛",width:"7em",align:"right",sort:ee(u(Q))},{default:g((()=>[p(m(t.recentContest),1)])),_:2},1032,["sort"]),f(u(k),{label:"最新通过",width:"10em",align:"center",sort:ee(u(U))},{default:g((()=>[t.lastSolveTime>0?(c(),d("span",B,m(u(w)(t.lastSolveTime).value),1)):b("v-if",!0)])),_:2},1032,["sort"]),f(u(k),{label:"通过",width:"5em",align:"right",sort:ee(u(X))},{default:g((()=>[p(m(t.okCount),1)])),_:2},1032,["sort"]),f(u(k),{label:"比赛",width:"5em",align:"right",sort:ee(u(Y))},{default:g((()=>[p(m(t.contests.length),1)])),_:2},1032,["sort"])])),empty:g((()=>[E])),_:1},8,["data","default-sort","default-sort-order"]),h("div",H,[h("span",I,"最近开始于 "+m(u(w)(F.value).value),1)])]))}});export{M as default};
