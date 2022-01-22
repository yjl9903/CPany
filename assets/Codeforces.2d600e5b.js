var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;"undefined"!=typeof require&&require;import{e as s,B as n,j as o,q as i,o as d,b as c,m as f,u,w as g,d as h,t as m,f as p,n as v,h as b}from"./vendor.5658d620.js";import{u as y}from"./users.bf5649c7.js";import{C as _,a as j}from"./c-table.c214b6f3.js";import{_ as k}from"./user-link.69187dfa.js";import{_ as C}from"./cf-rating-color.492668ad.js";import{d as w,b as O,h as S,i as q,j as x,k as D}from"./index.d421526c.js";import"./load.8c215a92.js";const R={class:"divide-y"},T=h("h2",{class:"mb-4"},"Codeforces",-1),A={class:"font-600"},P=["href"],B={key:0},E=h("div",{class:"my-4 px-3"},"人捏？",-1),H={class:"mt-4 pt-4"},I={class:"text-gray-400"},M=s({setup(e){var s,M;const W=n(),$=String(null!=(s=W.query.sort)?s:"最近通过"),z=String(null!=(M=W.query.order)?M:"desc"),F=o(O),G=e=>e.startsWith("codeforces"),J=e=>{const s=e.submissions.filter((({type:e})=>G(e))),n=s.length,o=s.filter((({v:e})=>1===e)).length,i=s.filter((({t:e})=>e>=F.value)).length,d=s.filter((({t:e,v:t})=>e>=F.value&&1===t)).length,c=e.contests.filter((({type:e,t:t})=>t>=F.value&&G(e))).length,f=s.filter((({t:e,v:t,d:a})=>e>=F.value&&1===t&&q(a))),u=f.reduce(((e,t)=>{var a;return e+(null!=(a=t.d)?a:0)}),0),g=Math.ceil(f.length>0?u/f.length:0),h=s.filter((({v:e})=>1===e)).sort(((e,t)=>t.t-e.t)),m=h.length>0?h[0].t:0,p=e.handles.filter((e=>G(e.type)));let v=p.length>0?p[0].handle:"",b=!1;return((e,s)=>{for(var n in s||(s={}))a.call(s,n)&&l(e,n,s[n]);if(t)for(var n of t(s))r.call(s,n)&&l(e,n,s[n]);return e})({subCount:n,okCount:o,recentSubCount:i,recentOkCount:d,recentContest:c,recentDiffcult:u,recentAvgDiffcult:g,lastSolveTime:m,rating:p.reduce(((e,t)=>{const a=t;return q(a.codeforces)&&(b=!0),q(a.codeforces)&&a.codeforces.rating>e?(v=a.handle,a.codeforces.rating):e}),0),isRated:b,handle:v},e)},K=i((()=>y.map(J))),L=x((e=>e.rating)),N=x((e=>e.recentOkCount)),Q=x((e=>e.recentContest)),U=x((e=>e.lastSolveTime)),V=x((e=>e.recentAvgDiffcult)),X=x((e=>e.okCount)),Y=x((e=>e.contests.length)),Z=D((e=>e.name));function ee(e){return S(e,L,N,Q,U,V,X,Y,Z)}return(e,t)=>(d(),c("div",R,[T,f(u(_),{data:u(K),cache:"codeforces","default-sort":u($),"default-sort-order":u(z)},{columns:g((({index:e,row:t})=>[f(u(j),{label:"#",width:"3em",align:"center"},{default:g((()=>[h("span",A,m(e+1),1)])),_:2},1024),f(u(j),{label:"姓名"},{default:g((()=>[f(k,{name:t.name},null,8,["name"])])),_:2},1024),f(u(j),{label:"Handle"},{default:g((()=>[h("a",{href:`https://codeforces.com/profile/${t.handle}`,target:"_blank"},[t.isRated?(d(),p(u(C),{key:0,rating:t.rating},{default:g((()=>[v(m(t.handle),1)])),_:2},1032,["rating"])):(d(),p(u(C),{key:1},{default:g((()=>[v(m(t.handle),1)])),_:2},1024))],8,P)])),_:2},1024),f(u(j),{label:"Rating",sort:ee(u(L)),align:"right"},{default:g((()=>[t.isRated?(d(),p(u(C),{key:0,rating:t.rating,"disable-legendary":""},{default:g((()=>[v(m(t.rating),1)])),_:2},1032,["rating"])):b("v-if",!0)])),_:2},1032,["sort"]),f(u(j),{label:"最近通过",width:"7em",align:"right",sort:ee(u(N))},{default:g((()=>[v(m(t.recentOkCount),1)])),_:2},1032,["sort"]),f(u(j),{label:"最近平均难度",width:"10em",align:"right",sort:ee(u(V))},{default:g((()=>[v(m(t.recentAvgDiffcult),1)])),_:2},1032,["sort"]),f(u(j),{label:"最近比赛",width:"7em",align:"right",sort:ee(u(Q))},{default:g((()=>[v(m(t.recentContest),1)])),_:2},1032,["sort"]),f(u(j),{label:"最新通过",width:"10em",align:"center",sort:ee(u(U))},{default:g((()=>[t.lastSolveTime>0?(d(),c("span",B,m(u(w)(t.lastSolveTime).value),1)):b("v-if",!0)])),_:2},1032,["sort"]),f(u(j),{label:"通过",width:"5em",align:"right",sort:ee(u(X))},{default:g((()=>[v(m(t.okCount),1)])),_:2},1032,["sort"]),f(u(j),{label:"比赛",width:"5em",align:"right",sort:ee(u(Y))},{default:g((()=>[v(m(t.contests.length),1)])),_:2},1032,["sort"])])),empty:g((()=>[E])),_:1},8,["data","default-sort","default-sort-order"]),h("div",H,[h("span",I,"最近开始于 "+m(u(w)(F.value).value),1)])]))}});export{M as default};
