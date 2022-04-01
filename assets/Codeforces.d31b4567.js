var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;"undefined"!=typeof require&&require;import{e as s,B as n,j as o,q as i,o as d,b as c,m as u,u as f,w as g,d as h,t as m,f as b,n as p,h as v}from"./vendor.5658d620.js";import{u as y}from"./users.bf5649c7.js";import{C as _,a as j}from"./c-table.556c1199.js";import{_ as k}from"./user-link.69187dfa.js";import{_ as C}from"./cf-rating-color.a1dba581.js";import{d as w,b as O,h as S,i as q,j as x,k as D}from"./index.2cb55131.js";import"./load.8c215a92.js";const R={class:"divide-y"},T=h("h2",{class:"mb-4"},"Codeforces",-1),A={class:"font-600"},P=["href"],B={key:0},E=h("div",{class:"my-4 px-3"},"人捏？",-1),H={class:"mt-4 pt-4"},I={class:"text-gray-400"},M=s({setup(e){var s,M;const W=n(),$=String(null!=(s=W.query.sort)?s:"最近通过"),z=String(null!=(M=W.query.order)?M:"desc"),F=o(O),G=e=>e.startsWith("codeforces"),J=e=>{const s=e.submissions.filter((({type:e})=>G(e))),n=s.length,o=s.filter((({v:e})=>1===e)).length,i=s.filter((({t:e})=>e>=F.value)).length,d=s.filter((({t:e,v:t})=>e>=F.value&&1===t)).length,c=e.contests.filter((({type:e,t:t})=>t>=F.value&&G(e))).length,u=s.filter((({t:e,v:t,d:a})=>e>=F.value&&1===t&&q(a))),f=u.reduce(((e,t)=>{var a;return e+(null!=(a=t.d)?a:0)}),0),g=Math.ceil(u.length>0?f/u.length:0),h=s.filter((({v:e})=>1===e)).sort(((e,t)=>t.t-e.t)),m=h.length>0?h[0].t:0,b=e.handles.filter((e=>G(e.type)));let p=b.length>0?b[0].handle:"",v=!1;return((e,s)=>{for(var n in s||(s={}))a.call(s,n)&&l(e,n,s[n]);if(t)for(var n of t(s))r.call(s,n)&&l(e,n,s[n]);return e})({subCount:n,okCount:o,recentSubCount:i,recentOkCount:d,recentContest:c,recentDiffcult:f,recentAvgDiffcult:g,lastSolveTime:m,rating:b.reduce(((e,t)=>{const a=t;return q(a.codeforces)&&(v=!0),q(a.codeforces)&&a.codeforces.rating>e?(p=a.handle,a.codeforces.rating):e}),0),isRated:v,handle:p},e)},K=i((()=>y.map(J))),L=x((e=>e.rating)),N=x((e=>e.recentOkCount)),Q=x((e=>e.recentContest)),U=x((e=>e.lastSolveTime)),V=x((e=>e.recentAvgDiffcult)),X=x((e=>e.okCount)),Y=x((e=>e.contests.length)),Z=D((e=>e.name));function ee(e){return S(e,L,N,Q,U,V,X,Y,Z)}return(e,t)=>(d(),c("div",R,[T,u(f(_),{data:f(K),cache:"codeforces","default-sort":f($),"default-sort-order":f(z)},{columns:g((({index:e,row:t})=>[u(f(j),{label:"#",width:"3em",align:"center"},{default:g((()=>[h("span",A,m(e+1),1)])),_:2},1024),u(f(j),{label:"姓名"},{default:g((()=>[u(k,{name:t.name},null,8,["name"])])),_:2},1024),u(f(j),{label:"Handle"},{default:g((()=>[h("a",{href:`https://codeforces.com/profile/${t.handle}`,target:"_blank"},[t.isRated?(d(),b(f(C),{key:0,rating:t.rating},{default:g((()=>[p(m(t.handle),1)])),_:2},1032,["rating"])):(d(),b(f(C),{key:1},{default:g((()=>[p(m(t.handle),1)])),_:2},1024))],8,P)])),_:2},1024),u(f(j),{label:"Rating",sort:ee(f(L)),align:"right"},{default:g((()=>[t.isRated?(d(),b(f(C),{key:0,rating:t.rating,"disable-legendary":""},{default:g((()=>[p(m(t.rating),1)])),_:2},1032,["rating"])):v("v-if",!0)])),_:2},1032,["sort"]),u(f(j),{label:"最近通过",width:"7em",align:"right",sort:ee(f(N))},{default:g((()=>[p(m(t.recentOkCount),1)])),_:2},1032,["sort"]),u(f(j),{label:"最近平均难度",width:"10em",align:"right",sort:ee(f(V))},{default:g((()=>[p(m(t.recentAvgDiffcult),1)])),_:2},1032,["sort"]),u(f(j),{label:"最近比赛",width:"7em",align:"right",sort:ee(f(Q))},{default:g((()=>[p(m(t.recentContest),1)])),_:2},1032,["sort"]),u(f(j),{label:"最新通过",width:"10em",align:"center",sort:ee(f(U))},{default:g((()=>[t.lastSolveTime>0?(d(),c("span",B,m(f(w)(t.lastSolveTime).value),1)):v("v-if",!0)])),_:2},1032,["sort"]),u(f(j),{label:"通过",width:"5em",align:"right",sort:ee(f(X))},{default:g((()=>[p(m(t.okCount),1)])),_:2},1032,["sort"]),u(f(j),{label:"比赛",width:"5em",align:"right",sort:ee(f(Y))},{default:g((()=>[p(m(t.contests.length),1)])),_:2},1032,["sort"])])),empty:g((()=>[E])),_:1},8,["data","default-sort","default-sort-order"]),h("div",H,[h("span",I,"最近开始于 "+m(f(w)(F.value).value),1)])]))}});export{M as default};
