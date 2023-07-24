"use strict";(self.webpackChunkpostgraph_web=self.webpackChunkpostgraph_web||[]).push([[6372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={layout:"default",title:"SKIP",nav_order:13,description:"SKIP defines from which row to start including the rows in the output."},o="SKIP",s={unversionedId:"Clauses/SKIP",id:"Clauses/SKIP",title:"SKIP",description:"SKIP defines from which row to start including the rows in the output.",source:"@site/docs/03-Clauses/12-SKIP.md",sourceDirName:"03-Clauses",slug:"/Clauses/SKIP",permalink:"/docs/Clauses/SKIP",draft:!1,editUrl:"https://github.com/postgraphdb/postgraphdb.github.io/tree/code/docs/03-Clauses/12-SKIP.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{layout:"default",title:"SKIP",nav_order:13,description:"SKIP defines from which row to start including the rows in the output."},sidebar:"tutorialSidebar",previous:{title:"ORDER BY",permalink:"/docs/Clauses/ORDER_BY"},next:{title:"UNWIND",permalink:"/docs/Clauses/UNWIND"}},i={},u=[{value:"Skip first three rows",id:"skip-first-three-rows",level:2},{value:"Query",id:"query",level:3},{value:"Result",id:"result",level:3},{value:"Return middle two rows",id:"return-middle-two-rows",level:2},{value:"Result",id:"result-1",level:3},{value:"Using an expression with SKIP to return a subset of the rows",id:"using-an-expression-with-skip-to-return-a-subset-of-the-rows",level:2},{value:"Query",id:"query-1",level:3},{value:"Result",id:"result-2",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"skip"},"SKIP"),(0,a.kt)("p",null,"By using SKIP, the result set will get trimmed from the top. Please note that no guarantees are made on the order of the result unless the query specifies the ORDER BY clause. SKIP accepts any expression that evaluates to a positive integer and does not refer to nodes or relationships."),(0,a.kt)("h2",{id:"skip-first-three-rows"},"Skip first three rows"),(0,a.kt)("p",null,"To return a subset of the result, starting from the fourth result, use the following syntax:"),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cypher('skip', $$\n    MATCH (n)\n    RETURN n.name\n    ORDER BY n.name\n    SKIP 3\n$$) as (name gtype);\n")),(0,a.kt)("p",null,"The first three nodes are skipped, and only the last two are returned in the result."),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"D"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"E"')))),(0,a.kt)("h2",{id:"return-middle-two-rows"},"Return middle two rows"),(0,a.kt)("p",null,"To return a subset of the result, starting from somewhere in the middle, use this syntax:\nQuery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cypher('skip', $$\n    MATCH (n)\n    RETURN n.name\n    ORDER BY n.name\n    SKIP 1\n    LIMIT 2\n$$) as (name gtype);\n")),(0,a.kt)("p",null,"Two nodes from the middle are returned."),(0,a.kt)("h3",{id:"result-1"},"Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"B"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"C"')))),(0,a.kt)("h2",{id:"using-an-expression-with-skip-to-return-a-subset-of-the-rows"},"Using an expression with SKIP to return a subset of the rows"),(0,a.kt)("p",null,"SKIP accepts any expression that evaluates to a positive integer, as long as it can be statically calculated (i.e. calculated before the query is run)."),(0,a.kt)("h3",{id:"query-1"},"Query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cypher('skip', $$\n    MATCH (n)\n    RETURN n.name\n    ORDER BY n.name\n    SKIP 1 + toInteger(3*rand())\n$$) as (name gtype);\n")),(0,a.kt)("p",null,"Skip the first row plus randomly 0, 1, or 2. So randomly skip 1, 2, or 3 rows."),(0,a.kt)("h3",{id:"result-2"},"Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"B"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"C"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"D"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"E"')))))}c.isMDXComponent=!0}}]);