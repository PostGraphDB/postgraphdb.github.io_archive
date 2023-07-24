"use strict";(self.webpackChunkpostgraph_web=self.webpackChunkpostgraph_web||[]).push([[9496],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={layout:"default",title:"Edges",nav_order:2,description:"Edge Datatype for PostGraph"},o="Edge",l={unversionedId:"Datatypes/edge",id:"Datatypes/edge",title:"Edges",description:"Edge Datatype for PostGraph",source:"@site/docs/02-Datatypes/02-edge.md",sourceDirName:"02-Datatypes",slug:"/Datatypes/edge",permalink:"/docs/Datatypes/edge",draft:!1,editUrl:"https://github.com/postgraphdb/postgraphdb.github.io/tree/code/docs/02-Datatypes/02-edge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"Edges",nav_order:2,description:"Edge Datatype for PostGraph"},sidebar:"tutorialSidebar",previous:{title:"Vertex",permalink:"/docs/Datatypes/vertex"},next:{title:"Variable Edge",permalink:"/docs/Datatypes/variable_edge"}},s={},p=[{value:"id",id:"id",level:3},{value:"start id",id:"start-id",level:3},{value:"end id",id:"end-id",level:3},{value:"label",id:"label",level:3},{value:"properties",id:"properties",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"edge"},"Edge"),(0,n.kt)("p",null,"Edges are one of the two basic units in a graph."),(0,n.kt)("p",null,"In Postgraph, Vertices consist of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an id"),(0,n.kt)("li",{parentName:"ul"},"a start id"),(0,n.kt)("li",{parentName:"ul"},"an end id"),(0,n.kt)("li",{parentName:"ul"},"a label"),(0,n.kt)("li",{parentName:"ul"},"a map of properties")),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("p",null,"The id is a 64-byte number that is the unique identifier of the edge in the graph the edge is associated with."),(0,n.kt)("h3",{id:"start-id"},"start id"),(0,n.kt)("p",null,"The start id is a 64-byte number that is the unique identifier of the vertex that represents where the edge begins."),(0,n.kt)("h3",{id:"end-id"},"end id"),(0,n.kt)("p",null,"The start id is a 64-byte number that is the unique identifier of the vertex that represents wh\nere the edge ends."),(0,n.kt)("h3",{id:"label"},"label"),(0,n.kt)("p",null,"The label is a string that categorizes the edge. Edges are required to have a label."),(0,n.kt)("h3",{id:"properties"},"properties"),(0,n.kt)("p",null,"Properties are a map that contains all the data associated with the edge"))}c.isMDXComponent=!0}}]);