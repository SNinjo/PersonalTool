"use strict";(self.webpackChunkSNinjo_Tool=self.webpackChunkSNinjo_Tool||[]).push([[97],{8190:function(e,t,a){a.d(t,{Z:function(){return r}});var c=a(7294),n=a(3252),i="index-module--show--38579",s="index-module--transparent--7ad46";var r=e=>{let{width:t,height:a,onChange:r}=e;const l=(0,c.useRef)(null),d=(0,c.useRef)(null),{0:o,1:f}=(0,c.useState)(!1),{0:w,1:b}=(0,c.useState)(),{0:g,1:p}=(0,c.useState)("");return(0,c.useEffect)((()=>{(async()=>{w&&p(await(0,n.$k)(w))})()}),[w]),c.createElement("div",{className:"index-module--div--cd131 "+(o?"index-module--dragging--09847":""),style:{width:t,height:a},tabIndex:0,onDragEnter:()=>f(!0),onDragLeave:()=>f(!1),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),f(!1),b(e.dataTransfer.files[0])},onKeyDown:e=>{e.ctrlKey&&"c"===e.key&&w&&(0,n.cy)(w)},onPaste:e=>{const t=e.clipboardData.getData("Text");""===t?b(e.clipboardData.files[0]):(0,n.pZ)(t)?b((0,n.hn)(t)):alert("Failed to parse data in the clipboard...")}},c.createElement("input",{ref:l,type:"file",accept:"image/*",onChange:e=>{const t=e.target.files;t&&0!==t.length&&b(t[0])}}),c.createElement("label",{className:g?"":i},c.createElement("span",null,"> Paste or drop image here <")),c.createElement("img",{ref:d,className:(g?i:"")+" "+(o?s:""),src:g,onLoad:()=>{w&&r&&r({type:w.type,width:d.current.naturalWidth,height:d.current.naturalHeight,dataUrl:g,file:w})}}),c.createElement("button",{className:g?s:"",onClick:()=>l.current.click()},"Upload"))}},9313:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return u}});var c=a(7294),n=a(7830),i=a(8032),s=a(412);function r(e,t,a){void 0===a&&(a="Arial"),""===e&&(e="T h j g 0");const c=document.createElement("div");c.innerText=e,c.setAttribute("style","\n\t\tposition: fixed;\n\t\tright: -10px;\n\t\ttop: 0;\n\n\t\tdisplay: block;\n\t\tfont-size: "+t+"px;\n\t\tfont-family: "+a+";\n\t"),document.body.append(c);const{height:n}=c.getBoundingClientRect();return c.remove(),n}var l=a(3252),d=a(8190),o=a(6672),f=a(8579),w=a(2349),b="index-module--image--ac411",g="index-module--picker--fde63",p="index-module--selected--15500";var u=()=>{const{0:e,1:t}=(0,c.useState)(new s.$u(0,0));(0,c.useEffect)((()=>{"undefined"!=typeof window&&t(new s.$u(window.innerWidth,window.innerHeight));const e=()=>t(new s.$u(window.innerWidth,window.innerHeight));return window.addEventListener("resize",(()=>e)),()=>window.removeEventListener("resize",(()=>e))}),[]);const w=(0,c.useRef)(null),u=(0,c.useRef)(null),m=(0,c.useRef)(null),{0:h,1:x}=(0,c.useState)(""),{0:y,1:S}=(0,c.useState)("");(0,c.useEffect)((()=>{if(y){const e=new Image;e.setAttribute("src",y),e.addEventListener("load",(()=>{const t=m.current;t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0)})),m.current.getContext("2d").drawImage(e,0,0),u.current.focus()}}),[y]);const{0:v,1:E}=(0,c.useState)(!1),{0:k,1:N}=(0,c.useState)(new s.Ly),{0:C,1:D}=(0,c.useState)(new s.Ly),{0:L,1:z}=(0,c.useState)(new s.$u),{0:_,1:P}=(0,c.useState)(new s.Ly);(0,c.useEffect)((()=>{w.current&&(w.current.scrollLeft=_.x,w.current.scrollTop=_.y)}),[_]);const{0:T,1:I}=(0,c.useState)(!1),{0:R,1:$}=(0,c.useState)(new s.Ly);(0,c.useEffect)((()=>{if(v&&T){const e=R.add(C.add(k.multiply(-1)).multiply(-1));P(s.Ly.getPositive(e))}}),[k,C,v,T]);const{0:O,1:J}=(0,c.useState)("cursor"),{0:A,1:M}=(0,c.useState)(!1),{0:U,1:F}=(0,c.useState)(10),{0:K,1:W}=(0,c.useState)("#FF0000"),{0:Z,1:H}=(0,c.useState)(!1),{0:X,1:Y}=(0,c.useState)(!1),j=(0,c.useRef)(null),{0:B,1:q}=(0,c.useState)(""),{0:G,1:Q}=(0,c.useState)(0),{0:V,1:ee}=(0,c.useState)(new s.Ly),{0:te,1:ae}=(0,c.useState)(new s.$u);(0,c.useEffect)((()=>{Q(0),ee(new s.Ly),ae(new s.$u),""!==O&&I(!1)}),[O]),(0,c.useEffect)((()=>{if(m.current&&!A){const{left:e,top:t}=m.current.getBoundingClientRect(),a=m.current.getContext("2d");switch(O){case"line":a.strokeStyle=K,a.lineWidth=U,a.moveTo(k.x-e,k.y-t),a.lineTo(C.x-e,C.y-t),a.stroke();break;case"rectangle":a.strokeStyle=K,a.lineWidth=U,a.strokeRect(V.x-e+U/2,V.y-t+U/2,te.width-U,te.height-U);break;case"text":a.fillStyle=K,a.font=U+"px Arial",a.fillText(B,V.x-e,V.y-t),q(""),j.current.innerText=""}S(m.current.toDataURL((0,l.cL)(y))),m.current.focus()}}),[A]),(0,c.useEffect)((()=>{switch(O){case"line":const e=s.Ly.getCenter(k,C),t=s.Ly.getDistance(k,C);Q(s.Ly.getAngel(k,C)),ee(e.add(new s.Ly(t/2,U/2).multiply(-1))),ae(new s.$u(t,U));break;case"rectangle":ee(new s.Ly(k.x<C.x?k.x:C.x,k.y<C.y?k.y:C.y)),ae(new s.$u(Math.abs(k.x-C.x),Math.abs(k.y-C.y)))}}),[k,C]);const{0:ce,1:ne}=(0,c.useState)("auto");return(0,c.useEffect)((()=>{if(T)ne(v?"grabbing":"grab");else if(""!==O)switch(O){case"rectangle":case"line":ne("cell");break;case"text":ne("text")}else ne("auto")}),[v,A,T,O]),c.createElement(f.Z,null,c.createElement("div",{className:"index-module--div--e2983"},c.createElement("div",{ref:w,className:"index-module--screen--cd222"},y?c.createElement(c.Fragment,null,c.createElement("div",{ref:u,tabIndex:0,style:{width:2*e.width+L.width,height:2*e.width+L.height,cursor:ce},className:"index-module--editArea--3d69b",onKeyDown:e=>{switch(e.key){case"c":e.ctrlKey&&(0,l.cy)((0,l.hn)(y,"image"));break;case"Control":I(!0)}},onKeyUp:e=>{"Control"===e.key&&I(!1)},onMouseDown:e=>{E(!0),N(new s.Ly(e.clientX,e.clientY)),D(new s.Ly(e.clientX,e.clientY)),T?$(_):A?M(!1):("text"===O&&(e.preventDefault(),e.stopPropagation()),M(!0),ee(new s.Ly(e.clientX,e.clientY)),ae(new s.$u))},onMouseMove:e=>{(T||A)&&D(new s.Ly(e.clientX,e.clientY))},onMouseUp:()=>{E(!1),"text"===O?j.current.focus():M(!1)}},c.createElement("canvas",{ref:m,style:{left:e.width,top:e.height}}),c.createElement("div",{style:{left:V.x+.5,top:V.y+.5,width:te.width,height:te.height,borderWidth:U,borderColor:K,display:A&&"rectangle"===O?"block":"none",zIndex:A&&"rectangle"===O?1:0},className:"index-module--previewRectangle--10e9d"}),c.createElement("div",{style:{left:V.x+.5,top:V.y+.5,width:te.width,height:te.height,backgroundColor:K,transform:"rotate("+G+"deg)",display:A&&"line"===O?"block":"none",zIndex:A&&"line"===O?1:0},className:"index-module--previewLine--61209"}),c.createElement("div",{ref:j,style:{left:V.x+.5,top:V.y-r(B,U)+U/4.5+1.5,color:K,fontSize:U,display:A&&"text"===O?"block":"none",zIndex:A&&"text"===O?1:0},className:"index-module--previewText--3ddc8",contentEditable:!0,onBlur:()=>M(!1),onKeyDown:e=>{"Enter"===e.key&&M(!1)},onInput:e=>{const t=e.target;q(t.innerText)}}),c.createElement("div",{className:"index-module--toolbar--c2e90",onMouseDown:e=>e.stopPropagation()},c.createElement("div",null,c.createElement("button",{className:"cursor"===O?p:"",onClick:()=>J("cursor")},c.createElement(i.S,{className:b,src:"../../images/cursor.png",alt:"cursor",title:"cursor",loading:"eager",__imageData:a(3788)})),c.createElement("button",{className:"rectangle"===O?p:"",onClick:()=>J("rectangle")},c.createElement(i.S,{className:b,src:"../../images/rectangle.png",alt:"draw rectangle",title:"draw rectangle",loading:"eager",__imageData:a(3879)})),c.createElement("button",{className:"line"===O?p:"",onClick:()=>J("line")},c.createElement(i.S,{className:b,src:"../../images/line.png",alt:"draw line",title:"draw line",loading:"eager",__imageData:a(1785)})),c.createElement("button",{className:"text"===O?p:"",onClick:()=>J("text")},c.createElement(i.S,{className:b,src:"../../images/text.png",alt:"type text",title:"type text",loading:"eager",__imageData:a(7803)})),c.createElement("button",{className:T?p:"",onClick:()=>{J(""),I(!0)}},c.createElement(i.S,{className:b,src:"../../images/moving.png",alt:"move screen",title:"move screen",loading:"eager",__imageData:a(3843)}))),c.createElement("div",null,Z?c.createElement(o.Z,{className:g,text:"width",number:U,onChange:e=>F(e)}):c.createElement(c.Fragment,null),c.createElement("button",{className:Z?p:"",onClick:()=>H((e=>!e))},c.createElement(i.S,{className:b,src:"../../images/width.png",alt:"pick width",title:"pick width",loading:"eager",__imageData:a(7964)})),X?c.createElement(n.AI,{className:g,color:K,onChange:e=>{W(e.hex)}}):c.createElement(c.Fragment,null),c.createElement("button",{className:X?p:"",onClick:()=>Y((e=>!e))},c.createElement(i.S,{className:b,src:"../../images/colorPalette.png",alt:"pick color",title:"pick color",loading:"eager",__imageData:a(3074)}))),c.createElement("div",null,c.createElement("button",{onClick:()=>(0,l.cy)((0,l.hn)(y,"image"))},c.createElement(i.S,{className:b,src:"../../images/copy.png",alt:"copy image",title:"copy image",loading:"eager",__imageData:a(8390)})),c.createElement("button",{onClick:()=>S(h)},c.createElement(i.S,{className:b,src:"../../images/ashcan.png",alt:"clear image",title:"clear image",loading:"eager",__imageData:a(7451)})))))):c.createElement(d.Z,{onChange:t=>{x(t.dataUrl),S(t.dataUrl),z(new s.$u(t.width,t.height)),P(new s.Ly(e.width-50,e.height-50))}}))))};const m=e=>{let{location:t}=e;return c.createElement(w.Z,{title:"Image Editor",pathname:t.pathname})}},7451:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/86e74ad235b280104379fbae16feef84/e9fba/ashcan.png","srcSet":"/static/86e74ad235b280104379fbae16feef84/86ee2/ashcan.png 13w,\\n/static/86e74ad235b280104379fbae16feef84/88208/ashcan.png 25w,\\n/static/86e74ad235b280104379fbae16feef84/e9fba/ashcan.png 50w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/86e74ad235b280104379fbae16feef84/68795/ashcan.webp 13w,\\n/static/86e74ad235b280104379fbae16feef84/2fa99/ashcan.webp 25w,\\n/static/86e74ad235b280104379fbae16feef84/dbc4a/ashcan.webp 50w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},1785:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0220a4a48628f5aa54071a0315ec5646/ccc41/line.png","srcSet":"/static/0220a4a48628f5aa54071a0315ec5646/bf8e1/line.png 128w,\\n/static/0220a4a48628f5aa54071a0315ec5646/acb7c/line.png 256w,\\n/static/0220a4a48628f5aa54071a0315ec5646/ccc41/line.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/0220a4a48628f5aa54071a0315ec5646/6766a/line.webp 128w,\\n/static/0220a4a48628f5aa54071a0315ec5646/22bfc/line.webp 256w,\\n/static/0220a4a48628f5aa54071a0315ec5646/d689f/line.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},8390:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e4b68e0a62fa15da692250d0d097a3d6/e9fba/copy.png","srcSet":"/static/e4b68e0a62fa15da692250d0d097a3d6/86ee2/copy.png 13w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/88208/copy.png 25w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/e9fba/copy.png 50w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/e4b68e0a62fa15da692250d0d097a3d6/68795/copy.webp 13w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/2fa99/copy.webp 25w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/dbc4a/copy.webp 50w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},3879:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9ad1e863d9d35bb39d370c04bf7ac8de/ccc41/rectangle.png","srcSet":"/static/9ad1e863d9d35bb39d370c04bf7ac8de/bf8e1/rectangle.png 128w,\\n/static/9ad1e863d9d35bb39d370c04bf7ac8de/acb7c/rectangle.png 256w,\\n/static/9ad1e863d9d35bb39d370c04bf7ac8de/ccc41/rectangle.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/9ad1e863d9d35bb39d370c04bf7ac8de/6766a/rectangle.webp 128w,\\n/static/9ad1e863d9d35bb39d370c04bf7ac8de/22bfc/rectangle.webp 256w,\\n/static/9ad1e863d9d35bb39d370c04bf7ac8de/d689f/rectangle.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},7803:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/44f928f8173b7998c5289959fc76ab43/ccc41/text.png","srcSet":"/static/44f928f8173b7998c5289959fc76ab43/bf8e1/text.png 128w,\\n/static/44f928f8173b7998c5289959fc76ab43/acb7c/text.png 256w,\\n/static/44f928f8173b7998c5289959fc76ab43/ccc41/text.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/44f928f8173b7998c5289959fc76ab43/6766a/text.webp 128w,\\n/static/44f928f8173b7998c5289959fc76ab43/22bfc/text.webp 256w,\\n/static/44f928f8173b7998c5289959fc76ab43/d689f/text.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},3843:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/45f922370e5e49c72418a6eabe1be2f9/ccc41/moving.png","srcSet":"/static/45f922370e5e49c72418a6eabe1be2f9/bf8e1/moving.png 128w,\\n/static/45f922370e5e49c72418a6eabe1be2f9/acb7c/moving.png 256w,\\n/static/45f922370e5e49c72418a6eabe1be2f9/ccc41/moving.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/45f922370e5e49c72418a6eabe1be2f9/6766a/moving.webp 128w,\\n/static/45f922370e5e49c72418a6eabe1be2f9/22bfc/moving.webp 256w,\\n/static/45f922370e5e49c72418a6eabe1be2f9/d689f/moving.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},3788:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/64a693a73154457faadd4e67bcc16686/ccc41/cursor.png","srcSet":"/static/64a693a73154457faadd4e67bcc16686/bf8e1/cursor.png 128w,\\n/static/64a693a73154457faadd4e67bcc16686/acb7c/cursor.png 256w,\\n/static/64a693a73154457faadd4e67bcc16686/ccc41/cursor.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/64a693a73154457faadd4e67bcc16686/6766a/cursor.webp 128w,\\n/static/64a693a73154457faadd4e67bcc16686/22bfc/cursor.webp 256w,\\n/static/64a693a73154457faadd4e67bcc16686/d689f/cursor.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},3074:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a3af3baf70147bd28d32839d81c5835a/ccc41/colorPalette.png","srcSet":"/static/a3af3baf70147bd28d32839d81c5835a/bf8e1/colorPalette.png 128w,\\n/static/a3af3baf70147bd28d32839d81c5835a/acb7c/colorPalette.png 256w,\\n/static/a3af3baf70147bd28d32839d81c5835a/ccc41/colorPalette.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/a3af3baf70147bd28d32839d81c5835a/6766a/colorPalette.webp 128w,\\n/static/a3af3baf70147bd28d32839d81c5835a/22bfc/colorPalette.webp 256w,\\n/static/a3af3baf70147bd28d32839d81c5835a/d689f/colorPalette.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},7964:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/adbf2d342a05d96368500ce8e6ef64e6/ccc41/width.png","srcSet":"/static/adbf2d342a05d96368500ce8e6ef64e6/bf8e1/width.png 128w,\\n/static/adbf2d342a05d96368500ce8e6ef64e6/acb7c/width.png 256w,\\n/static/adbf2d342a05d96368500ce8e6ef64e6/ccc41/width.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/adbf2d342a05d96368500ce8e6ef64e6/6766a/width.webp 128w,\\n/static/adbf2d342a05d96368500ce8e6ef64e6/22bfc/width.webp 256w,\\n/static/adbf2d342a05d96368500ce8e6ef64e6/d689f/width.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-pages-image-editor-index-tsx-fb12ba4e3a567855d1db.js.map