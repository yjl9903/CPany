var s,e,a=Object.defineProperty,n=("undefined"!=typeof require&&require,(s,e,n)=>(((s,e,n)=>{e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n})(s,"symbol"!=typeof e?e+"":e,n),n));import{l as t}from"./load.8c215a92.js";import{s as i}from"./index.c213ba3a.js";import{e as o,l as r,o as l,b as u,d as c,F as d,z as m,u as b,G as p,t as f,m as h,w as y,n as v}from"./vendor.5658d620.js";const w=null!=(s=t(JSON.parse('{"keyMaps":[["name","a"],["newSubmissions","b"],["newContests","c"],["platform","d"],["id","e"],["pid","f"],["verdict","g"],["creationTime","h"]],"stringMaps":[["codeforces","a"],["OK","b"]],"data":{"history":{"user":[{"a":"tourist","b":[],"c":[]},{"a":"Petr","b":[],"c":[]},{"a":"Benq","b":[{"d":"a","e":141757703,"f":"1613D","a":"MEX Sequences","g":"b","h":1641404217},{"d":"a","e":141592705,"f":"1621I","a":"Two Sequences","g":"b","h":1641256442}],"c":[]},{"a":"ksun48","b":[],"c":[]},{"a":"jiangly","b":[],"c":[]}],"contest":[]}}}')).history)?s:{};class g{constructor(){n(this,"submissions",new Map)}mergeSub(s,e){this.submissions.has(s)?this.submissions.get(s).push(e):this.submissions.set(s,[e])}list(){const s=[];for(const[e,a]of this.submissions)s.push({name:e,newSubmissions:a,newContests:[]});return s}}const S=new Map;for(const C of null!=(e=w.user)?e:[])for(const s of C.newSubmissions){const e=i(s.creationTime).value;S.has(e)||S.set(e,new g),S.get(e).mergeSub(C.name,s)}const j=[...S.entries()].map((s=>({day:s[0],record:s[1]})));const q={class:"divide-y"},M=c("h2",{class:"mb-4"},"历史",-1),k={class:"py-4 pl-[8px]"},x={class:"relative timeline"},T={class:"font-bold"},O=o({setup:s=>(s,e)=>{const a=r("router-link");return l(),u("div",q,[M,c("div",k,[c("div",x,[(l(!0),u(d,null,m(b(j),((s,e)=>(l(),u("div",{key:s.day,class:"relative timeline-item pl-4"},[c("div",{class:"py-4 px-4 border",style:p({borderTopWidth:e>0?0:void 0})},[c("span",T,f(s.day),1),(l(!0),u(d,null,m(s.record.list(),(s=>(l(),u("div",null,[h(a,{to:`/user/${s.name}`},{default:y((()=>[v(f(s.name),1)])),_:2},1032,["to"]),c("span",null," 进行了 "+f(s.newSubmissions.length)+" 次提交",1)])))),256))],4)])))),128))])])])}});export{O as default};
