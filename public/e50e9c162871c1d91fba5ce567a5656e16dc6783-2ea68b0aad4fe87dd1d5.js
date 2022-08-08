"use strict";(self.webpackChunkjlennie_uk=self.webpackChunkjlennie_uk||[]).push([[61],{9552:function(A,e,n){var t=(0,n(8790).Z)();e.Z=t},8348:function(A,e,n){n.d(e,{ZP:function(){return f},FO:function(){return Q}});var t=n(2982),r=n(885),o=n(7462),c=n(3366),i=n(8306),a=n(3409),g=n(6550),l=["variant"];function u(A){return 0===A.length}function E(A){var e=A.variant,n=(0,c.Z)(A,l),t=e||"";return Object.keys(n).sort().forEach((function(e){t+="color"===e?u(t)?A[e]:(0,g.Z)(A[e]):"".concat(u(t)?e:(0,g.Z)(e)).concat((0,g.Z)(A[e].toString()))})),t}var B=n(2037),C=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],m=["theme"],I=["theme"];function w(A){return 0===Object.keys(A).length}var s=function(A,e){return e.components&&e.components[A]&&e.components[A].styleOverrides?e.components[A].styleOverrides:null},D=function(A,e){var n=[];e&&e.components&&e.components[A]&&e.components[A].variants&&(n=e.components[A].variants);var t={};return n.forEach((function(A){var e=E(A.props);t[e]=A.style})),t},h=function(A,e,n,t){var r,o,c=A.ownerState,i=void 0===c?{}:c,a=[],g=null==n||null==(r=n.components)||null==(o=r[t])?void 0:o.variants;return g&&g.forEach((function(n){var t=!0;Object.keys(n.props).forEach((function(e){i[e]!==n.props[e]&&A[e]!==n.props[e]&&(t=!1)})),t&&a.push(e[E(n.props)])})),a};function p(A){return"ownerState"!==A&&"theme"!==A&&"sx"!==A&&"as"!==A}var v=(0,a.Z)();var d=n(9552),Q=function(A){return p(A)&&"classes"!==A},O=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=A.defaultTheme,n=void 0===e?v:e,a=A.rootShouldForwardProp,g=void 0===a?p:a,l=A.slotShouldForwardProp,u=void 0===l?p:l,E=A.styleFunctionSx,d=void 0===E?B.Z:E;return function(A){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.name,E=a.slot,B=a.skipVariantsResolver,v=a.skipSx,Q=a.overridesResolver,O=(0,c.Z)(a,C),f=void 0!==B?B:E&&"Root"!==E||!1,M=v||!1;var x=p;"Root"===E?x=g:E&&(x=u);var H=(0,i.ZP)(A,(0,o.Z)({shouldForwardProp:x,label:e},O)),Z=function(A){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var g=i?i.map((function(A){return"function"==typeof A&&A.__emotion_real!==A?function(e){var t=e.theme,r=(0,c.Z)(e,m);return A((0,o.Z)({theme:w(t)?n:t},r))}:A})):[],u=A;l&&Q&&g.push((function(A){var e=w(A.theme)?n:A.theme,t=s(l,e);if(t){var c={};return Object.entries(t).forEach((function(n){var t=(0,r.Z)(n,2),i=t[0],a=t[1];c[i]="function"==typeof a?a((0,o.Z)({},A,{theme:e})):a})),Q(A,c)}return null})),l&&!f&&g.push((function(A){var e=w(A.theme)?n:A.theme;return h(A,D(l,e),e,l)})),M||g.push((function(A){var e=w(A.theme)?n:A.theme;return d((0,o.Z)({},A,{theme:e}))}));var E=g.length-i.length;if(Array.isArray(A)&&E>0){var B=new Array(E).fill("");(u=[].concat((0,t.Z)(A),(0,t.Z)(B))).raw=[].concat((0,t.Z)(A.raw),(0,t.Z)(B))}else"function"==typeof A&&A.__emotion_real!==A&&(u=function(e){var t=e.theme,r=(0,c.Z)(e,I);return A((0,o.Z)({theme:w(t)?n:t},r))});var C=H.apply(void 0,[u].concat((0,t.Z)(g)));return C};return H.withConfig&&(Z.withConfig=H.withConfig),Z}}({defaultTheme:d.Z,rootShouldForwardProp:Q}),f=O},2371:function(A,e,n){n.d(e,{Z:function(){return i}});var t=n(6193);var r=n(7120);function o(A){var e=A.props,n=A.name,o=A.defaultTheme,c=function(A){var e=A.theme,n=A.name,r=A.props;return e&&e.components&&e.components[n]&&e.components[n].defaultProps?(0,t.Z)(e.components[n].defaultProps,r):r}({theme:(0,r.Z)(o),name:n,props:e});return c}var c=n(9552);function i(A){return o({props:A.props,name:A.name,defaultTheme:c.Z})}},9240:function(A,e,n){var t=n(6550);e.Z=t.Z},9236:function(A,e,n){function t(A,e,n){var t={};return Object.keys(A).forEach((function(r){t[r]=A[r].reduce((function(A,t){return t&&(n&&n[t]&&A.push(n[t]),A.push(e(t))),A}),[]).join(" ")})),t}n.d(e,{Z:function(){return t}})},1351:function(A,e,n){n.d(e,{Z:function(){return o}});var t=n(9742),r={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function o(A,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o=r[e];return o?"".concat(n,"-").concat(o):"".concat(t.Z.generate(A),"-").concat(e)}},9508:function(A,e,n){n.d(e,{Z:function(){return r}});var t=n(1351);function r(A,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",r={};return e.forEach((function(e){r[e]=(0,t.Z)(A,e,n)})),r}},6193:function(A,e,n){n.d(e,{Z:function(){return r}});var t=n(7462);function r(A,e){var n=(0,t.Z)({},e);return Object.keys(A).forEach((function(e){void 0===n[e]&&(n[e]=A[e])})),n}},2772:function(A,e,n){n.d(e,{bs:function(){return d},Ee:function(){return v},xv:function(){return p}});var t=n(8348),r=n(3366),o=n(7462),c=n(7294),i=n(5505),a=n(8297),g=n(9236),l=n(2371),u=n(9240),E=n(1351);function B(A){return(0,E.Z)("MuiTypography",A)}(0,n(9508).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var C=n(5893),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],I=(0,t.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(A,e){var n=A.ownerState;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat((0,u.Z)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((function(A){var e=A.theme,n=A.ownerState;return(0,o.Z)({margin:0},n.variant&&e.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},s={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},D=c.forwardRef((function(A,e){var n=(0,l.Z)({props:A,name:"MuiTypography"}),t=function(A){return s[A]||A}(n.color),c=(0,a.Z)((0,o.Z)({},n,{color:t})),E=c.align,D=void 0===E?"inherit":E,h=c.className,p=c.component,v=c.gutterBottom,d=void 0!==v&&v,Q=c.noWrap,O=void 0!==Q&&Q,f=c.paragraph,M=void 0!==f&&f,x=c.variant,H=void 0===x?"body1":x,Z=c.variantMapping,b=void 0===Z?w:Z,j=(0,r.Z)(c,m),G=(0,o.Z)({},c,{align:D,color:t,className:h,component:p,gutterBottom:d,noWrap:O,paragraph:M,variant:H,variantMapping:b}),k=p||(M?"p":b[H]||w[H])||"span",J=function(A){var e=A.align,n=A.gutterBottom,t=A.noWrap,r=A.paragraph,o=A.variant,c=A.classes,i={root:["root",o,"inherit"!==A.align&&"align".concat((0,u.Z)(e)),n&&"gutterBottom",t&&"noWrap",r&&"paragraph"]};return(0,g.Z)(i,B,c)}(G);return(0,C.jsx)(I,(0,o.Z)({as:k,ref:e,ownerState:G,className:(0,i.Z)(J.root,h)},j))})),h=n(9211),p=(0,t.ZP)(D)({padding:10,fontSize:"larger",fontWeight:"bold",color:"#E5E5E5"}),v=function(A){var e=A.alt,n=A.src;return c.createElement("img",{alt:e,src:n,style:{width:"auto",maxHeight:40,margin:5}})},d=(0,t.ZP)(h.Z)({display:"flex",flexDirection:"row",margin:"auto"})},2706:function(A,e,n){n.d(e,{Z:function(){return D}});var t,r=n(7294),o=n(8348),c=n(9211),i=n(1597),a=n.p+"static/Alt-Logo-778c5177245ae68dfcf5c06e1bd0beed.png",g=n.p+"static/GitHub-Mark-3dc40513a52b83611f7c582c2d988bab.png",l=n(2772);function u(){return r.createElement(l.bs,null,r.createElement(i.Link,{to:"#about"},r.createElement(l.xv,null,"About")),r.createElement(i.Link,{to:"#projects"},r.createElement(l.xv,null,"Projects")),r.createElement(i.Link,{to:"#work"},r.createElement(l.xv,null,"Work")),r.createElement(i.Link,{to:"#contact"},r.createElement(l.xv,null,"Contact")))}function E(){return r.createElement(l.bs,null,r.createElement(i.Link,{to:"/#home"},r.createElement(l.Ee,{src:a,alt:"logo"})))}function B(){return r.createElement(l.bs,null,r.createElement(i.Link,{to:"https://github.com/JonasLennie",sx:{maxHeight:"1vh"}},r.createElement(l.Ee,{src:g,alt:"Github Logo"})),r.createElement(i.Link,{to:"https://www.linkedin.com/in/jlennie/"},r.createElement(l.Ee,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAEtWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTQwIgogICB0aWZmOkltYWdlV2lkdGg9IjU0MCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iMzAwLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjMwMC4wIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNTQwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNTQwIgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIw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",alt:"Linked In Logo"})),r.createElement(i.Link,{to:"cv"},r.createElement(l.xv,null,"CV")))}var C=function(){return r.createElement(m,null,r.createElement(E,{sx:{flexGrow:1}}),r.createElement(u,{sx:{flexGrow:8}}),r.createElement(B,{sx:{flexGrow:1}}))},m=(0,o.ZP)(l.bs)(((t={backgroundColor:"#242F40",alignItems:"center",paddingTop:5,paddingBottom:5,justifyContent:"center",alignText:"center",width:"100%",position:"-webkit-sticky"}).position="sticky",t.overflow="hidden",t.top=0,t)),I=n.p+"static/up-arrow-0661b573a44b186f8ed607d6ef1721e2.png",w=function(){return r.createElement(s,null,r.createElement("a",{href:"mailto:contact@jlennie.uk"},r.createElement(l.xv,null,"contact@jlennie.uk")),r.createElement(B,null),r.createElement(l.xv,null,"© Jonas Lennie"),r.createElement("a",{href:"/#home"},r.createElement(l.Ee,{src:I,alt:"Link To Top Of Page"})))};var s=(0,o.ZP)(c.Z)({display:"Flex",flexDirection:"column",backgroundColor:"#242F40",padding:50}),D=function(A){return r.createElement(p,{id:"home"},function(A){return r.createElement(r.Fragment,null,r.createElement(h,null,A.children),r.createElement(w,null))}(A))};function h(A){return r.createElement(d,null,r.createElement(C,null),r.createElement(v,null,A.children))}var p=(0,o.ZP)(c.Z)({color:"#E5E5E5",backgroundColor:"#0C1821",textAlign:"center",height:"100%"}),v=(0,o.ZP)(c.Z)({width:"80vw",maxWidth:"1000px",textAlign:"left",margin:"auto"}),d=(0,o.ZP)(c.Z)({minHeight:"100vh"})}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-2ea68b0aad4fe87dd1d5.js.map