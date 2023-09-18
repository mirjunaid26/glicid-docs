"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[3702],{3905:(e,t,i)=>{i.d(t,{Zo:()=>a,kt:()=>g});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=r.createContext({}),m=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},a=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),c=m(i),d=o,g=c["".concat(u,".").concat(d)]||c[d]||p[d]||s;return i?r.createElement(g,n(n({ref:t},a),{},{components:i})):r.createElement(g,n({ref:t},a))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,n=new Array(s);n[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var m=2;m<s;m++)n[m]=i[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6264:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=i(7462),o=(i(7294),i(3905));const s={slug:"long-blog-post",title:"Parallel Programming CUDA(Python/C++)",authors:"endi",tags:["hello","docusaurus"]},n=void 0,l={permalink:"/blog/long-blog-post",editUrl:"https://mirjunaid26.github.io/blog/parallel-progamming-blog.md",source:"@site/blog/parallel-progamming-blog.md",title:"Parallel Programming CUDA(Python/C++)",description:"This is the summary of a very long blog post,",date:"2023-09-18T12:17:22.000Z",formattedDate:"September 18, 2023",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:2.05,hasTruncateMarker:!0,authors:[{name:"Endilie Yacop Sucipto",title:"Maintainer of Docusaurus",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"endi"}],frontMatter:{slug:"long-blog-post",title:"Parallel Programming CUDA(Python/C++)",authors:"endi",tags:["hello","docusaurus"]},prevItem:{title:"Harnessing the Power of Clusters",permalink:"/blog/first-blog-post"},nextItem:{title:"High Performance Computing",permalink:"/blog/welcome"}},u={authorsImageUrls:[void 0]},m=[],a={toc:m},c="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the summary of a very long blog post,"),(0,o.kt)("p",null,"Use a ",(0,o.kt)("inlineCode",{parentName:"p"},"\x3c!--")," ",(0,o.kt)("inlineCode",{parentName:"p"},"truncate")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--\x3e")," comment to limit blog post size in the list view."),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,o.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"))}p.isMDXComponent=!0}}]);