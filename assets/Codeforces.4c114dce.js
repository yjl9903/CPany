import{P as e,V as t}from"./index.c213ba3a.js";import{i as a,e as s,B as r,C as n,j as o,x as i,o as p,b as c,m as l,d as m,t as d,u,A as f}from"./vendor.5658d620.js";import{l as b}from"./load.8c215a92.js";import{c as T}from"./codeforces.9e4da7d5.js";import{_ as y,h as v,f as h}from"./Contest.9963144a.js";import"./c-table.372c70d5.js";import"./user-link.69187dfa.js";import"./cf-rating-color.553b6e3f.js";import"./at-rating-color.c0c1b896.js";const j=b(T),C=new Map;for(const w of j)w.type.startsWith("codeforces")&&C.set(w.id,w);const g={key:0},I={key:1,class:"divide-y"},A=m("h2",{class:"mb-2"},"错误",-1),S={class:"pt-2"},P=s({setup(s){const b=r(),T=n(),j=o(null),P=o(!1),{start:w,end:x}=function(){const e=a("loading");return{start(){e.value=!0},end(){e.value=!1}}}();return i((()=>b.params),(a=>{if(a.id){const n=(s=+a.id,null!=(r=C.get(+s))?r:null);if(null!==n)j.value=n,(async a=>{var s,r;w();const n=new URL("https://codeforces.com/api/contest.standings");n.searchParams.append("contestId",""+a.id),n.searchParams.append("handles",v.map((({h:e})=>e)).join(";")),n.searchParams.append("showUnofficial","true");const{result:o}=await(await fetch(n.toString())).json();a.problems=o.problems;for(const e of o.problems)e.problemUrl=`https://codeforces.com/contest/${e.contestId}/problem/${e.index}`;a.standings=[];for(const i of o.rows){if(i.party.participantType!==e.CONTESTANT&&i.party.participantType!==e.VIRTUAL&&i.party.participantType!==e.OUT_OF_COMPETITION&&i.party.participantType!==e.PRACTICE)continue;const n=i.problemResults.reduce(((e,t)=>{var a,s;return 0===t.points?e:e+(null!=(a=t.bestSubmissionTimeSeconds)?a:0)+20*(null!=(s=t.rejectedAttemptCount)?s:0)}),0),o=null!=(s=i.party.participantTime)?s:a.startTime;a.standings.push({author:{members:i.party.members.map((e=>e.handle)),teamName:null!=(r=i.party.teamName)?r:h(i.party.members[0].handle),participantTime:o,participantType:i.party.participantType},rank:i.rank,solved:i.problemResults.filter((e=>e.points>0)).length,penalty:n,submissions:i.problemResults.map(((e,a)=>{const s=e.bestSubmissionTimeSeconds+o,r=e.bestSubmissionTimeSeconds;return e.points>0?{id:-1,creationTime:s,relativeTime:r,problemIndex:a,verdict:t.OK,dirty:e.rejectedAttemptCount}:e.rejectedAttemptCount>0?{id:-1,creationTime:s,relativeTime:r,problemIndex:a,dirty:e.rejectedAttemptCount}:null})).filter((e=>null!==e))})}x()})(j.value),document.title=`${n.name} - CPany`;else{P.value=!0;const e=setTimeout((()=>T.replace({name:"Home"})),3e3);f((()=>clearTimeout(e)))}}var s,r}),{immediate:!0}),(e,t)=>(p(),c("div",null,[j.value&&!P.value?(p(),c("div",g,[l(y,{contest:j.value},null,8,["contest"])])):(p(),c("div",I,[A,m("p",S,"未找到 ID 为 "+d(u(b).params.id)+" 的 Codeforces 比赛",1)]))]))}});export{P as default};
