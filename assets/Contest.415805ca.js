import{o as t,c as o,e as l,d as M,z as V,x as F,g as e,S as T,t as u,F as _,C as E,E as B,B as $,f as p,w as y,i as D,h as k,V as w,T as Q,R as z,U as I,k as K,W as X}from"./index.a3efe635.js";import{C as O,a as Y}from"./c-table.273e4302.js";import{_ as H}from"./user-link.8b188fd8.js";import{_ as W}from"./cf-rating-color.ad1560bf.js";import{l as P}from"./load.be0a3c09.js";import{_ as Z,a as x}from"./nc-rating-color.8f59d0af.js";const ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=l("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"},null,-1),se=[te];function ae(a,r){return t(),o("svg",ee,[...se])}var ne={name:"mdi-refresh",render:ae};const re={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},oe=l("path",{fill:"currentColor",d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"},null,-1),le=[oe];function ie(a,r){return t(),o("svg",re,[...le])}var ue={name:"mdi-star",render:ie};const ce={class:"space-left"},me={key:1},de=M({__name:"TeamName",props:{author:{}},setup(a){const r=a,{author:n}=V(r),s=F(()=>{var C,d;return(d=(C=n==null?void 0:n.value)==null?void 0:C.teamUrl)!=null?d:""}),c=()=>{s.value!==""&&window.open(s.value,"_blank")};return(C,d)=>e(B)(e(n).teamName)?(t(),o(_,{key:0},[l("div",null,[l("span",{class:T(s.value!==""&&"cursor-pointer"),onClick:c},u(e(n).teamName),3)]),l("div",ce,[(t(!0),o(_,null,E(e(n).members,(h,U)=>(t(),$(H,{class:T(U>0&&"ml-2"),key:h,name:h},null,8,["class","name"]))),128))])],64)):(t(),o("span",me,u(e(n).members[0]),1))}});var pe=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["Petr","b"],["Benq","c"],["ksun48","d"],["jiangly","e"]],"data":[{"n":"a","h":"a","r":3911},{"n":"b","h":"b","r":3296},{"n":"c","h":"c","r":3583},{"n":"d","h":"d","r":3334},{"n":"e","h":"e","r":3125}]}');const J=P(pe),he=new Map(J.map(a=>[a.h,a.n])),fe=new Map(J.map(a=>[a.h,a.r]));function lt(a){var r;return(r=he.get(a))!=null?r:a}function j(a){return fe.get(a)}const _e={class:"space-left"},ve=["href"],ge={class:"space-left"},ye=["href"],be={key:2},$e=M({__name:"CfHandles",props:{author:{}},setup(a){return(r,n)=>e(B)(r.author.teamName)&&r.author.members.length<=1?(t(),o(_,{key:0},[p(H,{name:r.author.teamName},null,8,["name"]),l("span",_e,[(t(!0),o(_,null,E(r.author.members,(s,c)=>(t(),o("a",{key:c,class:"ml-2",href:`https://codeforces.com/profile/${s}`,target:"_blank"},[p(e(W),{rating:e(j)(s)},{default:y(()=>[D(u(s),1)]),_:2},1032,["rating"])],8,ve))),128))])],64)):e(B)(r.author.teamName)?(t(),o(_,{key:1},[l("div",null,[p(H,{name:r.author.teamName},null,8,["name"])]),l("div",ge,[(t(!0),o(_,null,E(r.author.members,(s,c)=>(t(),o("a",{key:c,class:T(c>0&&"ml-2"),href:`https://codeforces.com/profile/${s}`,target:"_blank"},[p(e(W),{rating:e(j)(s)},{default:y(()=>[D(u(s),1)]),_:2},1032,["rating"])],10,ye))),128))])],64)):(t(),o("span",be,u(r.author.members[0]),1))}});var ke=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["jiangly","b"]],"data":[{"n":"a","h":"a","r":3969},{"n":"b","h":"b","r":3343}]}');const q=P(ke);new Map(q.map(a=>[a.h,a.n]));const Ce=new Map(q.map(a=>[a.h,a.r]));function Ne(a){return Ce.get(a)}const Be={class:"space-left"},Fe=["href"],Te={key:1},Me=M({__name:"AtHandles",props:{author:{}},setup(a){return(r,n)=>e(B)(r.author.teamName)?(t(),o(_,{key:0},[p(H,{name:r.author.teamName},null,8,["name"]),l("span",Be,[(t(!0),o(_,null,E(r.author.members,(s,c)=>(t(),o("a",{key:c,class:"ml-2 font-bold",href:`https://atcoder.jp/users/${s}`,target:"_blank"},[p(e(Z),{rating:e(Ne)(s)},{default:y(()=>[D(u(s),1)]),_:2},1032,["rating"])],8,Fe))),128))])],64)):(t(),o("span",Te,u(r.author.members[0]),1))}});var Ae=JSON.parse('{"keyMaps":[],"stringMaps":[],"data":[]}');const G=P(Ae);new Map(G.map(a=>[a.hn,a.n]));const Re=new Map(G.map(a=>[a.hn,a.r]));function Ee(a){return Re.get(a)}const Ue=["href"],Oe={class:"space-left"},we=["href"],He={key:1},Se=M({__name:"NcHandles",props:{author:{}},setup(a){return(r,n)=>e(B)(r.author.teamName)?(t(),o(_,{key:0},[l("div",null,[l("a",{href:r.author.teamUrl},[p(e(x),{rating:e(Ee)(r.author.teamName)},{default:y(()=>[D(u(r.author.teamName),1)]),_:1},8,["rating"])],8,Ue)]),l("div",Oe,[(t(!0),o(_,null,E(r.author.members,(s,c)=>(t(),o("span",{key:s,class:T(c>0&&"ml-2")},[/^\d+$/.test(s)?(t(),o("a",{key:0,href:`https://ac.nowcoder.com/acm/contest/profile/${s}`},u(s),9,we)):(t(),$(H,{key:1,name:s},null,8,["name"]))],2))),128))])],64)):(t(),o("span",He,u(r.author.members[0]),1))}}),Ie=l("span",null,"+",-1),De={key:0},Le={key:0,class:"text-sm text-gray-400"},Ve={key:1},Pe={class:"text-center font-bold text-red-500"},ze=l("span",null,"-",-1),Ke=M({__name:"StandingResult",props:{result:{},practice:{type:Boolean}},setup(a){const r=a,{result:n}=V(r),s=F(()=>{var d,h;return(h=(d=n==null?void 0:n.value)==null?void 0:d.submissionUrl)!=null?h:""}),c=()=>{s.value!==""&&window.open(s.value,"_blank")};function C(d){function h(A){return(A<10?"0":"")+A}const U=Math.floor(d/3600),L=Math.floor(d%3600/60);return`${U}:${h(L)}`}return(d,h)=>e(n)?(t(),o(_,{key:0},[e(n).verdict===e(w).OK?(t(),o("div",{key:0,class:T(s.value!==""&&"cursor-pointer"),onClick:c},[l("div",{class:T(["text-center","font-bold",d.practice?"text-blue-500":"text-green-500"])},[Ie,e(n).dirty?(t(),o("span",De,u(e(n).dirty),1)):k("v-if",!0)],2),d.practice?k("v-if",!0):(t(),o("div",Le,[l("span",null,u(C(e(n).relativeTime)),1)]))],2)):e(n).dirty?(t(),o("div",Ve,[l("div",Pe,[ze,l("span",null,u(e(n).dirty),1)])])):k("v-if",!0)],64)):k("v-if",!0)}}),We={key:0,class:"mt-4 box"},je={key:0,class:"font-600"},Je={key:1,class:"font-600"},qe={class:"flex items-center"},Ge={key:0},Qe=M({__name:"ContestStandings",props:{contest:{}},setup(a){const r=a,{contest:n}=V(r),s=F(()=>n.value.type.startsWith("codeforces")),c=F(()=>n.value.type.startsWith("atcoder")),C=F(()=>n.value.type.startsWith("nowcoder")),d=m=>m.author.participantType===z.OUT_OF_COMPETITION,h=m=>m.author.participantType===z.PRACTICE,U=m=>typeof m=="string"?m:String.fromCharCode(65+m),L=F(()=>{var m,R;return(R=(m=n.value.problems)==null?void 0:m.sort((i,b)=>{const f=typeof i.index=="string"?i.index.charCodeAt(0)-65:i.index,v=typeof b.index=="string"?b.index.charCodeAt(0)-65:b.index;return f-v}))!=null?R:[]}),A=F(()=>{var R,i,b;if(I(n.value.problems))return{standings:[],firstBlood:[]};if(I(n.value.standings))return{standings:[],firstBlood:[]};const m=Array((R=n.value.problems)==null?void 0:R.length);for(const f of n.value.standings){const v=Array((i=n.value.problems)==null?void 0:i.length);for(const g of f.submissions){const N=g.problemIndex;if(g.verdict===w.OK&&!h(f)&&(I(m[N])||m[N].relativeTime>g.relativeTime)&&(m[N]=g),I(v[N]))v[N]=g;else{const S=v[N];((b=S==null?void 0:S.verdict)!=null?b:w.FAILED)!==w.OK&&(v[N]=g)}}Reflect.set(f,"result",v)}return{standings:n.value.standings,firstBlood:m}});return(m,R)=>e(n).standings?(t(),o("div",We,[p(e(Y),{data:A.value.standings,mobile:1023},{columns:y(({row:i})=>[p(e(O),{label:"#",align:"center",width:"4em"},{default:y(()=>[h(i)?(t(),o("span",Je,"-")):(t(),o("span",je,u(i.rank),1))]),_:2},1024),p(e(O),{label:s.value?"Handle":""},{default:y(()=>[l("div",qe,[d(i)?(t(),$(e(ue),{key:0,class:"mr-1 text-sm text-yellow-300 inline-block"})):k("v-if",!0),l("div",null,[s.value?(t(),$($e,{key:0,author:i.author},null,8,["author"])):c.value?(t(),$(Me,{key:1,author:i.author},null,8,["author"])):C.value?(t(),$(Se,{key:2,author:i.author},null,8,["author"])):(t(),$(de,{key:3,author:i.author},null,8,["author"]))])])]),_:2},1032,["label"]),p(e(O),{label:"\u89E3\u51B3",align:"center",width:"4em"},{default:y(()=>[l("span",null,u(i.solved),1)]),_:2},1024),p(e(O),{label:"\u7F5A\u65F6",align:"center",width:"4em"},{default:y(()=>[h(i)?k("v-if",!0):(t(),o("span",Ge,u(e(Q)(i.penalty).value),1))]),_:2},1024),(t(!0),o(_,null,E(L.value,(b,f)=>{var v,g;return t(),$(e(O),{key:b.index,label:U(b.index),center:"",class:T(e(B)(i)&&e(B)(A.value.firstBlood[f])&&e(B)(i.result[f])&&i.result[f].verdict===e(w).OK&&i.result[f].relativeTime<=((g=(v=A.value.firstBlood[f])==null?void 0:v.relativeTime)!=null?g:Number.MIN_SAFE_INTEGER)&&"bg-[#E0FFE4]")},{default:y(()=>[p(Ke,{result:i.result[f],practice:h(i)},null,8,["result","practice"])]),_:2},1032,["label","class"])}),128))]),_:1},8,["data"])])):k("v-if",!0)}}),Xe={class:"mb-4 flex items-center"},Ye={class:"info-box border-left"},Ze={key:0},xe=["href"],et=["href"],it=M({__name:"Contest",props:{contest:{},dynamic:{type:Boolean}},emits:["refresh"],setup(a,{emit:r}){const n=r;return(s,c)=>(t(),o("div",null,[l("h2",Xe,[l("span",null,u(s.contest.name),1),s.dynamic?(t(),$(e(ne),{key:0,class:"ml-4 h-8 w-8 p-1 border rounded-full cursor-pointer hover:bg-light-700",onClick:c[0]||(c[0]=C=>n("refresh"))})):k("v-if",!0)]),l("div",Ye,[l("p",null," \u65F6\u95F4\uFF1A"+u(e(K)(s.contest.startTime).value)+" \u81F3 "+u(e(K)(s.contest.startTime+s.contest.duration).value),1),l("p",null,"\u65F6\u957F\uFF1A"+u(e(X)(s.contest.duration).value),1),l("p",null,"\u4EBA\u6570\uFF1A"+u(s.contest.participantNumber)+" \u4EBA",1),s.contest.contestUrl||s.contest.standingsUrl?(t(),o("p",Ze,[l("a",{href:s.contest.contestUrl,target:"_blank"},"\u6BD4\u8D5B\u4E3B\u9875",8,xe),l("a",{href:s.contest.standingsUrl,target:"_blank",class:"ml-2"},"\u5B8C\u6574\u699C\u5355",8,et)])):k("v-if",!0)]),p(Qe,{contest:s.contest},null,8,["contest"])]))}});export{it as _,lt as f,J as h};
