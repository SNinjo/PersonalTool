"use strict";(self.webpackChunkSNinjo_Tool=self.webpackChunkSNinjo_Tool||[]).push([[372],{3838:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return d}});var n=a(7294),c=a(8032),r=a(5785);function s(e,t){return e.substring(0,t).split("\n").length}var o=e=>{let{text:t,onInput:a,onChange:c}=e;const o=(0,n.useRef)(null),{0:l,1:i}=(0,n.useState)(0),d=()=>{const e=o.current;s(e.value,e.selectionStart)===s(e.value,e.selectionEnd)?i(s(e.value,e.selectionStart)):i(0)},{0:u,1:p}=(0,n.useState)(1),m=()=>{const e=o.current.value.split("\n").length;p(e)},f=(0,n.useRef)(null),{0:v,1:w}=(0,n.useState)(0),b=()=>{const e=o.current;w(e.scrollTop)};return(0,n.useEffect)((()=>{f.current.scrollTop=v}),[v]),(0,n.useEffect)((()=>{if(o.current){const e=()=>{(()=>{const e=o.current;a&&a(e.value),c&&c(e.value)})(),m(),b()};return o.current.addEventListener("changeViaScript",e),o.current.addEventListener("focus",e),()=>{var t,a;null===(t=o.current)||void 0===t||t.removeEventListener("changeViaScript",e),null===(a=o.current)||void 0===a||a.removeEventListener("focus",e)}}}),[o]),n.createElement("div",{className:"index-module--div--0dc4b"},n.createElement("textarea",{ref:o,defaultValue:null!=t?t:"",spellCheck:!1,onInput:e=>{a&&a(e.target.value)},onChange:e=>{c&&c(e.target.value)},onKeyDown:e=>{switch(e.key){case"y":case"z":case"Enter":case"Backspace":case"Delete":m();case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":d();break;case"Tab":e.preventDefault(),document.execCommand("insertText",!1,"\t")}},onKeyUp:e=>{switch(e.key){case"y":case"z":case"Enter":case"Backspace":case"Delete":m();case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":d()}},onMouseUp:()=>d(),onSelect:()=>d(),onScroll:()=>b(),onBlur:()=>i(0)}),n.createElement("div",{ref:f,className:"index-module--background--43130",onMouseDown:e=>{e.preventDefault(),o.current.focus()}},(g=1,E=u,(0,r.Z)(Array(E-g+1).keys()).map((e=>e+g))).map((e=>n.createElement("div",{key:"Line"+e,className:"index-module--line--60a9f "+(e===l?"index-module--selected--8cb35":"")},n.createElement("div",{className:"index-module--lineNumber--ba566"},e),n.createElement("div",{className:"index-module--lineText--b28d7"}))))));var g,E},l=a(8579),i=a(2349);var d=()=>{const{0:e,1:t}=(0,n.useState)("");return n.createElement(l.Z,null,n.createElement("div",{className:"index-module--div--51a25"},n.createElement(o,{text:e,onChange:t}),n.createElement("div",{className:"index-module--toolbar--5de09"},n.createElement("button",{onClick:()=>navigator.clipboard.writeText(e)},n.createElement(c.S,{className:"index-module--image--994d8",src:"../../images/copy.png",alt:"copy image",title:"copy image",loading:"eager",__imageData:a(9734)})))))};const u=e=>{let{location:t}=e;return n.createElement(i.Z,{title:"Text Editor",pathname:t.pathname})}},9734:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e4b68e0a62fa15da692250d0d097a3d6/e9fba/copy.png","srcSet":"/static/e4b68e0a62fa15da692250d0d097a3d6/86ee2/copy.png 13w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/88208/copy.png 25w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/e9fba/copy.png 50w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/e4b68e0a62fa15da692250d0d097a3d6/68795/copy.webp 13w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/2fa99/copy.webp 25w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/dbc4a/copy.webp 50w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-text-editor-index-tsx-e5481b71d0567d1e5106.js.map