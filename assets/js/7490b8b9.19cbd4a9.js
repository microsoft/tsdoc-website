"use strict";(self.webpackChunktsdoc_org=self.webpackChunktsdoc_org||[]).push([[700],{158:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(6393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,m=u["".concat(p,".").concat(g)]||u[g]||l[g]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(9122),o=r(2501),a=(r(6393),r(158)),i=["components"],s={title:"Standardization groups"},p=void 0,c={unversionedId:"pages/spec/standardization_groups",id:"pages/spec/standardization_groups",title:"Standardization groups",description:'Three "standardization groups" are used to classify the standard TSDoc tags, according to the',source:"@site/docs/pages/spec/standardization_groups.md",sourceDirName:"pages/spec",slug:"/pages/spec/standardization_groups",permalink:"/pages/spec/standardization_groups",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/tsdoc.org/docs/pages/spec/standardization_groups.md",tags:[],version:"current",frontMatter:{title:"Standardization groups"},sidebar:"docsSidebar",previous:{title:"Tag kinds",permalink:"/pages/spec/tag_kinds"},next:{title:"@alpha",permalink:"/pages/tags/alpha"}},d={},u=[{value:"&quot;Core&quot; group",id:"core-group",level:2},{value:"&quot;Extended&quot; group",id:"extended-group",level:2},{value:"&quot;Discretionary&quot; group",id:"discretionary-group",level:2}],l={toc:u},g="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(g,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Three "standardization groups" are used to classify the standard TSDoc tags, according to the\nthe level of support expected from compatible documentation tools. They correspond to the\n',(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/main/tsdoc/src/details/Standardization.ts"},"Standardization enum"),"\nin the parser API."),(0,a.kt)("h2",{id:"core-group"},'"Core" group'),(0,a.kt)("p",null,"Enum value: ",(0,a.kt)("inlineCode",{parentName:"p"},"Standardization.Core")),(0,a.kt)("p",null,'TSDoc tags in the "Core" standardization group are considered essential. Their meaning is standardized, and\nevery documentation tool is expected to recognize them. The TSDoc parser library typically provides dedicated\nAPIs for accessing these tags.'),(0,a.kt)("h2",{id:"extended-group"},'"Extended" group'),(0,a.kt)("p",null,"Enum value: ",(0,a.kt)("inlineCode",{parentName:"p"},"Standardization.Extended")),(0,a.kt)("p",null,'TSDoc tags in the "Extended" standardization group are optional. Documentation tools may or may not support them.\nIf they do, the syntax and semantics should conform to the TSDoc standard definitions.'),(0,a.kt)("h2",{id:"discretionary-group"},'"Discretionary" group'),(0,a.kt)("p",null,"Enum value: ",(0,a.kt)("inlineCode",{parentName:"p"},"Standardization.Discretionary")),(0,a.kt)("p",null,'TSDoc tags in the "Discretionary" standardization group are optional. Although the syntax is specified,\nthe semantics for these tags are implementation-specific (and sometimes difficult to describe completely without\nreferring to a specific implementation). Discretionary tags are included in the TSDoc standard to ensure that\nif two different popular tools use the same tag name, developers can expect the syntax to be the same, and\nthe semantics to be somewhat similar.'))}m.isMDXComponent=!0}}]);