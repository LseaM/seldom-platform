import{d as a,r as s,o as r,c}from"./index.24059398.js";import{_ as d}from"./_plugin-vue_export-helper.3df3813b.js";import{_ as p}from"./DataTable.677d5b72.js";import"./Tag.37583d94.js";import"./light.9d5e7374.js";import"./Icon.1e1350dc.js";import"./light.92a7a94d.js";import"./Select.8d42d711.js";import"./Input.b88c9ca8.js";const i=Array.from({length:46}).map((e,o)=>({name:`Edward King ${o}`,age:32,address:`London, Park Lane no. ${o}`,key:o})),m=()=>[{type:"selection",multiple:!1,disabled(e){return e.name==="Edward King 3"}},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],l=a({setup(){return{checkedRowKeys:s([4,1]),data:i,pagination:{pageSize:6},columns:m()}}});function k(e,o,u,f,y,g){const n=p;return r(),c(n,{"checked-row-keys":e.checkedRowKeys,"onUpdate:checked-row-keys":o[0]||(o[0]=t=>e.checkedRowKeys=t),columns:e.columns,data:e.data,pagination:e.pagination},null,8,["checked-row-keys","columns","data","pagination"])}const C=d(l,[["render",k]]);export{C as default};