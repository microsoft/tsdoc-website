"use strict";(self.webpackChunktsdoc_org=self.webpackChunktsdoc_org||[]).push([[6971],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(9122),a=n(2501),o=(n(6393),n(158)),i=["components"],s={title:"What is TSDoc?"},l=void 0,p={unversionedId:"index",id:"index",title:"What is TSDoc?",description:"TSDoc is a proposal to standardize the doc comments used in TypeScript code, so that different tools can extract content without getting confused by each other's markup. The TSDoc notation looks pretty familiar:",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/tsdoc.org/docs/index.md",tags:[],version:"current",frontMatter:{title:"What is TSDoc?"},sidebar:"docsSidebar",next:{title:"Approach",permalink:"/pages/intro/approach"}},c={},m=[{value:"Why do we need TSDoc?",id:"why-do-we-need-tsdoc",level:2},{value:"Three requirements",id:"three-requirements",level:2},{value:"Who&#39;s involved?",id:"whos-involved",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:m},h="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TSDoc is a proposal to standardize the doc comments used in ",(0,o.kt)("a",{parentName:"p",href:"http://www.typescriptlang.org/"},"TypeScript")," code, so that different tools can extract content without getting confused by each other's markup. The TSDoc notation looks pretty familiar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Statistics {\n  /**\n   * Returns the average of two numbers.\n   *\n   * @remarks\n   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.\n   *\n   * @param x - The first input number\n   * @param y - The second input number\n   * @returns The arithmetic mean of `x` and `y`\n   *\n   * @beta\n   */\n  public static getAverage(x: number, y: number): number {\n    return (x + y) / 2.0;\n  }\n}\n")),(0,o.kt)("p",null,"We are developing a library package ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@microsoft/tsdoc"},"@microsoft/tsdoc")," that provides an open source reference implementation of a parser. Using this library is an easy way to ensure that your tool is 100% compatible with the standard."),(0,o.kt)("p",null,"\ud83d\udc4b"," ",(0,o.kt)("strong",{parentName:"p"},"*","Give it a try!")," The ",(0,o.kt)("a",{target:"_blank",href:"/play"},"TSDoc Playground")," provides an interactive demo of the parser!","*"),(0,o.kt)("h2",{id:"why-do-we-need-tsdoc"},"Why do we need TSDoc?"),(0,o.kt)("p",null,"A single source file may get analyzed by multiple tools. Here's some examples of popular tools that need to parse doc comments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/typedoc"},"TypeDoc"),": an API reference generator that extracts member documentation from code comments"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dotnet.github.io/docfx/"},"DocFX"),": an integrated pipeline that ingests API reference content for many different programming languages, but then applies its own Markdown renderer and custom tag parsing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor"),": a build tool that tracks TypeScript API review workflows and generates ","*",".d.ts rollups for third-party SDKs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint"),": lint rules might look for tags such as ",(0,o.kt)("inlineCode",{parentName:"li"},"@virtual")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"@override"),", which represent behavioral contracts to be validated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code"),": an editor that supports syntax highlighting and interactive refactoring for TypeScript doc comments"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Your own scripts!")," - Developers often create build scripts that extract documentation or bundling directives from code comments")),(0,o.kt)("p",null,"All these tools recognize a syntax that is loosely based on ",(0,o.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"JSDoc"),", but each with its own flavor of syntax extensions. This can lead to frustrating incompatibilities."),(0,o.kt)("p",null,"Consider a hypothetical input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * @returns true if the specified tag is surrounded with `{`\n * and `}` characters.\n *\n * @example\n * Prints \"true\" for `{@link}` but \"false\" for `@internal`:\n * ```ts\n * console.log(isInlineTag('{@link}'));\n * console.log(isInlineTag('@internal'));\n * ```\n * @see {@link http://example.com/@internal | the @internal tag}\n */\ndeclare function isInlineTag(tagName: string): boolean;\n")),(0,o.kt)("p",null,"Is this ",(0,o.kt)("inlineCode",{parentName:"p"},"isInlineTag()")," function marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"@internal"),'? Well, API Extractor would say "no," because it recognizes many ',(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/"},"CommonMark"),' constructs. But the TypeScript compiler would say "yes" -- even for the ',(0,o.kt)("inlineCode",{parentName:"p"},"@see")," hypertext and URL -- because its parser treats everything as literal text."),(0,o.kt)("p",null,"Is the ",(0,o.kt)("inlineCode",{parentName:"p"},"@see")," block part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@example"),"? Again, different tools behave differently depending on how they handle that tag."),(0,o.kt)("p",null,"In many cases, sloppy parsing mostly works. Occasional malfunctions are no big deal. But when these directives determine professional website content or build output, incorrect parsing can become a serious concern."),(0,o.kt)("h2",{id:"three-requirements"},"Three requirements"),(0,o.kt)("p",null,"TSDoc aims to standardize the doc comment grammar, while carefully balancing several competing design requirements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Extensibility:")," Tools must be able to define their own custom tags to represent domain-specific metadata in a natural way."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Interoperability:")," Custom tags must not prevent other tools from correctly analyzing the comment. In order words, custom tags must use established syntax patterns that can be safely recognized and discarded during parsing."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Familiar syntax:")," As much as possible, TSDoc should preserve the familiar style of JSDoc/Markdown. This also maximizes the likelihood that legacy comments will parse correctly as TSDoc.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Why can't JSDoc be the standard?"))," The JSDoc grammar is not rigorously specified, but rather inferred from the behavior of a particular implementation. The majority of the standard JSDoc tags are preoccupied with providing type annotations for plain JavaScript, which is not a primary concern for a strongly-typed language such as TypeScript."),(0,o.kt)("h2",{id:"whos-involved"},"Who's involved?"),(0,o.kt)("p",null,"Implementation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/octogonz"},"Pete Gonzalez")," created the initial concept and parser API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rbuckton"},"Ron Buckton")," redesigned the declaration reference syntax and has been working on a rewrite of the markdown parser"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iclanton/"},"Ian Clanton-Thuon")," contributed the TSDoc Playground"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bafolts"},"Brian Folts")," contributed the ",(0,o.kt)("strong",{parentName:"li"},"eslint-plugin-tsdoc")," package for ESLint"),(0,o.kt)("li",{parentName:"ul"},"many other contributors who implemented features and bugfixes!")),(0,o.kt)("p",null,"(Should your name appear here? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-websites/edit/main/websites/tsdoc.org/docs/index.md"},"Suggest an update")," to this page.)"),(0,o.kt)("p",null,"Contributing design input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.typescriptlang.org"},"TypeScript")," compiler group at Microsoft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," community"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dotnet.github.io/docfx/"},"DocFX")," maintainers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://typedoc.org"},"TypeDoc")," community"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://simplrjs.com/"},"SimplrJS")," developers, who maintain the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SimplrJS/ts-docs-gen"},"ts-docs-gen")," tool"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tomdale"},"Tom Dale"),", who's working on the documentation engine for ",(0,o.kt)("a",{parentName:"li",href:"https://www.emberjs.com"},"Ember.js"),", ",(0,o.kt)("a",{parentName:"li",href:"https://glimmerjs.com"},"Glimmer.js"),", and other projects"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EisenbergEffect"},"Rob Eisenberg"),", who's working on the documentation engine for ",(0,o.kt)("a",{parentName:"li",href:"http://aurelia.io/"},"Aurelia"),".")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"\ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"/pages/intro/approach"},"Learn more")," -- about the goals and approach"),(0,o.kt)("p",null,"\ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"/pages/intro/using_tsdoc"},"How can I use TSDoc?")," -- learn about tools and resources for developing with TSDoc"))}d.isMDXComponent=!0}}]);