import{d as X,s as Y,v as Z,x as w,e as M,f as m,g as o,w as a,h as e,t as c,b as tt,o as _,M as b,j as d,i as j,k as z,N as S,y as g,z as et,A as st}from"./index-Cc-lLLcQ.js";import{u as nt}from"./users-BpOsUf0P.js";import{C as i,a as at}from"./c-table-B5Gf5T_P.js";import{_ as ot}from"./user-link.vue_vue_type_script_setup_true_lang-D-ZGsYJ_.js";import{_ as k}from"./cf-rating-color.vue_vue_type_script_setup_true_lang-DRbCCW_c.js";import"./load-Bav7-mWT.js";const rt={class:"divide-y"},lt={class:"font-600"},ct=["href"],it={key:0},dt={class:"mt-4 pt-4"},ft={class:"text-gray-400"},vt=X({__name:"Codeforces",setup(ut){const B=Y(),E=String(B.query.sort??"最近通过"),F=String(B.query.order??"desc"),h=Z(tt),p=t=>t.startsWith("codeforces"),L=t=>{const r=t.submissions.filter(({type:s})=>p(s)),y=r.length,n=r.filter(({v:s})=>s===1).length,G=r.filter(({t:s})=>s>=h.value).length,I=r.filter(({t:s,v:l})=>s>=h.value&&l===1).length,J=t.contests.filter(({type:s,t:l})=>l>=h.value&&p(s)).length,v=r.filter(({t:s,v:l,d:u})=>s>=h.value&&l===1&&S(u)),V=v.reduce((s,l)=>s+(l.d??0),0),K=Math.ceil(v.length>0?V/v.length:0),$=r.filter(({v:s})=>s===1).sort((s,l)=>l.t-s.t),P=$.length>0?$[0].t:0,C=t.handles.filter(s=>p(s.type));let q=C.length>0?C[0].handle:"",H=!1;const Q=C.reduce((s,l)=>{const u=l;return S(u.codeforces)&&(H=!0),S(u.codeforces)&&u.codeforces.rating>s?(q=u.handle,u.codeforces.rating):s},0);return{subCount:y,okCount:n,recentSubCount:G,recentOkCount:I,recentContest:J,recentDiffcult:V,recentAvgDiffcult:K,lastSolveTime:P,rating:Q,isRated:H,handle:q,...t}},U=w(()=>nt.map(L)),T=g(t=>t.rating),D=g(t=>t.recentOkCount),x=g(t=>t.recentContest),R=g(t=>t.lastSolveTime),O=g(t=>t.recentAvgDiffcult),N=g(t=>t.okCount),A=g(t=>t.contests.length),W=st(t=>t.name);function f(t){return et(t,T,D,x,R,O,N,A,W)}return(t,r)=>(_(),M("div",rt,[r[1]||(r[1]=m("h2",{class:"mb-4"},"Codeforces",-1)),o(e(at),{data:U.value,cache:"codeforces","default-sort":e(E),"default-sort-order":e(F)},{columns:a(({index:y,row:n})=>[o(e(i),{label:"#",width:"3em",align:"center"},{default:a(()=>[m("span",lt,c(y+1),1)]),_:2},1024),o(e(i),{label:"姓名"},{default:a(()=>[o(ot,{name:n.name},null,8,["name"])]),_:2},1024),o(e(i),{label:"Handle"},{default:a(()=>[m("a",{href:`https://codeforces.com/profile/${n.handle}`,target:"_blank"},[n.isRated?(_(),b(e(k),{key:0,rating:n.rating},{default:a(()=>[d(c(n.handle),1)]),_:2},1032,["rating"])):(_(),b(e(k),{key:1},{default:a(()=>[d(c(n.handle),1)]),_:2},1024))],8,ct)]),_:2},1024),o(e(i),{label:"Rating",sort:f(e(T)),align:"right"},{default:a(()=>[n.isRated?(_(),b(e(k),{key:0,rating:n.rating,"disable-legendary":""},{default:a(()=>[d(c(n.rating),1)]),_:2},1032,["rating"])):j("v-if",!0)]),_:2},1032,["sort"]),o(e(i),{label:"最近通过",width:"7em",align:"right",sort:f(e(D))},{default:a(()=>[d(c(n.recentOkCount),1)]),_:2},1032,["sort"]),o(e(i),{label:"最近平均难度",width:"10em",align:"right",sort:f(e(O))},{default:a(()=>[d(c(n.recentAvgDiffcult),1)]),_:2},1032,["sort"]),o(e(i),{label:"最近比赛",width:"7em",align:"right",sort:f(e(x))},{default:a(()=>[d(c(n.recentContest),1)]),_:2},1032,["sort"]),o(e(i),{label:"最新通过",width:"10em",align:"center",sort:f(e(R))},{default:a(()=>[n.lastSolveTime>0?(_(),M("span",it,c(e(z)(n.lastSolveTime).value),1)):j("v-if",!0)]),_:2},1032,["sort"]),o(e(i),{label:"通过",width:"5em",align:"right",sort:f(e(N))},{default:a(()=>[d(c(n.okCount),1)]),_:2},1032,["sort"]),o(e(i),{label:"比赛",width:"5em",align:"right",sort:f(e(A))},{default:a(()=>[d(c(n.contests.length),1)]),_:2},1032,["sort"])]),empty:a(()=>r[0]||(r[0]=[m("div",{class:"my-4 px-3"},"人捏？",-1)])),_:1},8,["data","default-sort","default-sort-order"]),m("div",dt,[m("span",ft,"最近开始于 "+c(e(z)(h.value).value),1)])]))}});export{vt as default};
