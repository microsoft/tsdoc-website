"use strict";(self.webpackChunktsdoc_org=self.webpackChunktsdoc_org||[]).push([[1328],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(6393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,p(p({ref:t},c),{},{components:r})):a.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=r(9122),n=r(2501),o=(r(6393),r(158)),p=["components"],s={title:"@typeParam"},l=void 0,i={unversionedId:"pages/tags/typeparam",id:"pages/tags/typeparam",title:"@typeParam",description:"|    |    |",source:"@site/docs/pages/tags/typeparam.md",sourceDirName:"pages/tags",slug:"/pages/tags/typeparam",permalink:"/pages/tags/typeparam",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/tsdoc.org/docs/pages/tags/typeparam.md",tags:[],version:"current",frontMatter:{title:"@typeParam"},sidebar:"docsSidebar",previous:{title:"@throws",permalink:"/pages/tags/throws"},next:{title:"@virtual",permalink:"/pages/tags/virtual"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}],u={toc:m},d="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standardization:"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/spec/standardization_groups"},"Core"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Syntax kind:"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/spec/tag_kinds"},"Block tag"))))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Used to document a generic parameter. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@typeParam")," tag is followed by a parameter\nname, followed by a hyphen, followed by a description. The TSDoc parser recognizes\nthis syntax and will extract it into a DocParamBlock node."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Alias for array\n *\n * @typeParam T - Type of objects the list contains\n */\ntype List<T> = Array<T>;\n\n/**\n * Wrapper for an HTTP Response\n * @typeParam B - Response body\n * @param <H> - Headers\n */\ninterface HttpResponse<B, H> {\n  body: B;\n  headers: H;\n  statusCode: number;\n}\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/tsdoc/issues/72"},"RFC #72"),":\nSupport for ",(0,o.kt)("inlineCode",{parentName:"li"},"@typeparam")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"@template")," for documenting generic parameters")))}g.isMDXComponent=!0}}]);