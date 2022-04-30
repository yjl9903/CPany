import{o as e,b as t,d as a,e as r,p as n,q as l,u as s,s as o,t as i,F as u,z as c,f as p,m,w as d,n as h,h as f}from"./vendor.5658d620.js";import{i as v,V as y,o as g,P as b,p as k,d as w,q as x}from"./index.8a180274.js";import{a as _,C as M}from"./c-table.6ab21aac.js";import{_ as N}from"./user-link.69187dfa.js";import{_ as T}from"./cf-rating-color.ac50b81a.js";import{l as C}from"./load.8c215a92.js";import{_ as q,a as A}from"./nc-rating-color.c8ba69d7.js";const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},j=[a("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",fill:"currentColor"},null,-1)];var B={name:"mdi-refresh",render:function(a,r){return e(),t("svg",O,j)}};const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},E=[a("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z",fill:"currentColor"},null,-1)];var U={name:"mdi-star",render:function(a,r){return e(),t("svg",L,E)}};const I={class:"space-left"},$={key:1},F=r({props:{author:{type:null,required:!0}},setup(r){const m=r,{author:d}=n(m),h=l((()=>{var e,t;return null!=(t=null==(e=null==d?void 0:d.value)?void 0:e.teamUrl)?t:""})),f=()=>{""!==h.value&&window.open(h.value,"_blank")};return(r,n)=>s(v)(s(d).teamName)?(e(),t(u,{key:0},[a("div",null,[a("span",{class:o(""!==s(h)&&"cursor-pointer"),onClick:f},i(s(d).teamName),3)]),a("div",I,[(e(!0),t(u,null,c(s(d).members,((t,a)=>(e(),p(N,{class:o(a>0&&"ml-2"),key:t,name:t},null,8,["class","name"])))),128))])],64)):(e(),t("span",$,i(s(d).members[0]),1))}});const R=C(JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["Petr","b"],["Benq","c"],["ksun48","d"],["jiangly","e"]],"data":[{"n":"a","h":"a","r":3911},{"n":"b","h":"b","r":3296},{"n":"c","h":"c","r":3583},{"n":"d","h":"d","r":3334},{"n":"e","h":"e","r":3125}]}')),S=new Map(R.map((e=>[e.h,e.n]))),K=new Map(R.map((e=>[e.h,e.r])));function P(e){var t;return null!=(t=S.get(e))?t:e}function z(e){return K.get(e)}const J={class:"space-left"},W=["href"],V={class:"space-left"},Y=["href"],D={key:2},G=r({props:{author:{type:null,required:!0}},setup:r=>(n,l)=>s(v)(r.author.teamName)&&r.author.members.length<=1?(e(),t(u,{key:0},[m(N,{name:r.author.teamName},null,8,["name"]),a("span",J,[(e(!0),t(u,null,c(r.author.members,((a,r)=>(e(),t("a",{key:r,class:"ml-2",href:`https://codeforces.com/profile/${a}`,target:"_blank"},[m(s(T),{rating:s(z)(a)},{default:d((()=>[h(i(a),1)])),_:2},1032,["rating"])],8,W)))),128))])],64)):s(v)(r.author.teamName)?(e(),t(u,{key:1},[a("div",null,[m(N,{name:r.author.teamName},null,8,["name"])]),a("div",V,[(e(!0),t(u,null,c(r.author.members,((a,r)=>(e(),t("a",{key:r,class:o(r>0&&"ml-2"),href:`https://codeforces.com/profile/${a}`,target:"_blank"},[m(s(T),{rating:s(z)(a)},{default:d((()=>[h(i(a),1)])),_:2},1032,["rating"])],10,Y)))),128))])],64)):(e(),t("span",D,i(r.author.members[0]),1))});const H=C(JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["jiangly","b"]],"data":[{"n":"a","h":"a","r":3969},{"n":"b","h":"b","r":3343}]}'));new Map(H.map((e=>[e.h,e.n])));const Q=new Map(H.map((e=>[e.h,e.r])));function X(e){return Q.get(e)}const Z={class:"space-left"},ee=["href"],te={key:1},ae=r({props:{author:{type:null,required:!0}},setup:r=>(n,l)=>s(v)(r.author.teamName)?(e(),t(u,{key:0},[m(N,{name:r.author.teamName},null,8,["name"]),a("span",Z,[(e(!0),t(u,null,c(r.author.members,((a,r)=>(e(),t("a",{key:r,class:"ml-2 font-bold",href:`https://atcoder.jp/users/${a}`,target:"_blank"},[m(s(q),{rating:s(X)(a)},{default:d((()=>[h(i(a),1)])),_:2},1032,["rating"])],8,ee)))),128))])],64)):(e(),t("span",te,i(r.author.members[0]),1))});const re=C(JSON.parse('{"keyMaps":[],"stringMaps":[],"data":[]}'));new Map(re.map((e=>[e.hn,e.n])));const ne=new Map(re.map((e=>[e.hn,e.r])));function le(e){return ne.get(e)}const se=["href"],oe={class:"space-left"},ie=["href"],ue={key:1},ce=r({props:{author:{type:null,required:!0}},setup:r=>(n,l)=>s(v)(r.author.teamName)?(e(),t(u,{key:0},[a("div",null,[a("a",{href:r.author.teamUrl},[m(s(A),{rating:s(le)(r.author.teamName)},{default:d((()=>[h(i(r.author.teamName),1)])),_:1},8,["rating"])],8,se)]),a("div",oe,[(e(!0),t(u,null,c(r.author.members,((a,r)=>(e(),t("span",{key:a,class:o(r>0&&"ml-2")},[/^\d+$/.test(a)?(e(),t("a",{key:0,href:`https://ac.nowcoder.com/acm/contest/profile/${a}`},i(a),9,ie)):(e(),p(N,{key:1,name:a},null,8,["name"]))],2)))),128))])],64)):(e(),t("span",ue,i(r.author.members[0]),1))}),pe=a("span",null,"+",-1),me={key:0},de={key:0,class:"text-sm text-gray-400"},he={key:1},fe={class:"text-center font-bold text-red-500"},ve=a("span",null,"-",-1),ye=r({props:{result:{type:null,required:!1},practice:{type:Boolean,required:!1}},setup(r){const c=r,{result:p}=n(c),m=l((()=>{var e,t;return null!=(t=null==(e=null==p?void 0:p.value)?void 0:e.submissionUrl)?t:""})),d=()=>{""!==m.value&&window.open(m.value,"_blank")};function h(e){const t=Math.floor(e/3600),a=Math.floor(e%3600/60);return`${t}:${r=a,(r<10?"0":"")+r}`;var r}return(n,l)=>s(p)?(e(),t(u,{key:0},[s(p).verdict===s(y).OK?(e(),t("div",{key:0,class:o(""!==s(m)&&"cursor-pointer"),onClick:d},[a("div",{class:o(["text-center","font-bold",r.practice?"text-blue-500":"text-green-500"])},[pe,s(p).dirty?(e(),t("span",me,i(s(p).dirty),1)):f("v-if",!0)],2),r.practice?f("v-if",!0):(e(),t("div",de,[a("span",null,i(h(s(p).relativeTime)),1)]))],2)):s(p).dirty?(e(),t("div",he,[a("div",fe,[ve,a("span",null,i(s(p).dirty),1)])])):f("v-if",!0)],2112)):f("v-if",!0)}}),ge={key:0,class:"mt-4 box"},be={key:0,class:"font-600"},ke={key:1,class:"font-600"},we={class:"flex items-center"},xe={key:0},_e=r({props:{contest:{type:null,required:!0}},setup(r){const h=r,{contest:w}=n(h),x=l((()=>w.value.type.startsWith("codeforces"))),N=l((()=>w.value.type.startsWith("atcoder"))),T=l((()=>w.value.type.startsWith("nowcoder"))),C=e=>e.author.participantType===b.PRACTICE,q=e=>"string"==typeof e?e:String.fromCharCode(65+e),A=l((()=>{var e,t;return null!=(t=null==(e=w.value.problems)?void 0:e.sort(((e,t)=>("string"==typeof e.index?e.index.charCodeAt(0)-65:e.index)-("string"==typeof t.index?t.index.charCodeAt(0)-65:t.index))))?t:[]})),O=l((()=>{var e,t,a;if(g(w.value.problems))return{standings:[],firstBlood:[]};if(g(w.value.standings))return{standings:[],firstBlood:[]};const r=Array(null==(e=w.value.problems)?void 0:e.length);for(const n of w.value.standings){const e=Array(null==(t=w.value.problems)?void 0:t.length);for(const t of n.submissions){const l=t.problemIndex;if(t.verdict===y.OK&&!C(n))if(g(r[l]))r[l]=t;else{r[l].relativeTime>t.relativeTime&&(r[l]=t)}if(g(e[l]))e[l]=t;else{const r=e[l];(null!=(a=null==r?void 0:r.verdict)?a:y.FAILED)!==y.OK&&(e[l]=t)}}Reflect.set(n,"result",e)}return{standings:w.value.standings,firstBlood:r}}));return(r,n)=>s(w).standings?(e(),t("div",ge,[m(s(M),{data:s(O).standings,mobile:1023},{columns:d((({row:r})=>[m(s(_),{label:"#",align:"center",width:"4em"},{default:d((()=>[C(r)?(e(),t("span",ke,"-")):(e(),t("span",be,i(r.rank),1))])),_:2},1024),m(s(_),{label:s(x)?"Handle":""},{default:d((()=>{return[a("div",we,[(t=r,t.author.participantType===b.OUT_OF_COMPETITION?(e(),p(s(U),{key:0,class:"mr-1 text-sm text-yellow-300 inline-block"})):f("v-if",!0)),a("div",null,[s(x)?(e(),p(G,{key:0,author:r.author},null,8,["author"])):s(N)?(e(),p(ae,{key:1,author:r.author},null,8,["author"])):s(T)?(e(),p(ce,{key:2,author:r.author},null,8,["author"])):(e(),p(F,{key:3,author:r.author},null,8,["author"]))])])];var t})),_:2},1032,["label"]),m(s(_),{label:"解决",align:"center",width:"4em"},{default:d((()=>[a("span",null,i(r.solved),1)])),_:2},1024),m(s(_),{label:"罚时",align:"center",width:"4em"},{default:d((()=>[C(r)?f("v-if",!0):(e(),t("span",xe,i(s(k)(r.penalty).value),1))])),_:2},1024),(e(!0),t(u,null,c(s(A),((t,a)=>{var n,l;return e(),p(s(_),{key:t.index,label:q(t.index),center:"",class:o(s(v)(r)&&s(v)(s(O).firstBlood[a])&&s(v)(r.result[a])&&r.result[a].verdict===s(y).OK&&r.result[a].relativeTime<=(null!=(l=null==(n=s(O).firstBlood[a])?void 0:n.relativeTime)?l:Number.MIN_SAFE_INTEGER)&&"bg-[#E0FFE4]")},{default:d((()=>[m(ye,{result:r.result[a],practice:C(r)},null,8,["result","practice"])])),_:2},1032,["label","class"])})),128))])),_:1},8,["data"])])):f("v-if",!0)}}),Me={class:"mb-4 flex items-center"},Ne={class:"info-box border-left"},Te={key:0},Ce=["href"],qe=["href"],Ae=r({props:{contest:{type:null,required:!0},dynamic:{type:Boolean,required:!1}},emits:["refresh"],setup:(r,{emit:n})=>(l,o)=>(e(),t("div",null,[a("h2",Me,[a("span",null,i(r.contest.name),1),r.dynamic?(e(),p(s(B),{key:0,class:"ml-4 h-8 w-8 p-1 border rounded-full cursor-pointer hover:bg-light-700",onClick:o[0]||(o[0]=e=>n("refresh"))})):f("v-if",!0)]),a("div",Ne,[a("p",null," 时间："+i(s(w)(r.contest.startTime).value)+" 至 "+i(s(w)(r.contest.startTime+r.contest.duration).value),1),a("p",null,"时长："+i(s(x)(r.contest.duration).value),1),a("p",null,"人数："+i(r.contest.participantNumber)+" 人",1),r.contest.contestUrl||r.contest.standingsUrl?(e(),t("p",Te,[a("a",{href:r.contest.contestUrl,target:"_blank"},"比赛主页",8,Ce),a("a",{href:r.contest.standingsUrl,target:"_blank",class:"ml-2"},"完整榜单",8,qe)])):f("v-if",!0)]),m(_e,{contest:r.contest},null,8,["contest"])]))});export{Ae as _,P as f,R as h};
