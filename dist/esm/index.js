import{jsx as e,jsxs as n,Fragment as t}from"react/jsx-runtime";import{useState as r,useRef as o,useEffect as i}from"react";const s=(e,n,t)=>(1-t)*e+t*n,d=(e=0,n)=>{const[t,d]=r(n),l=o(0),u=o(n);return i((()=>{const n=n=>{u.current={x:n.clientX,y:n.clientY},0===e&&d(u.current)};return window.addEventListener("mousemove",n),()=>{window.removeEventListener("mousemove",n)}}),[e]),i((()=>{if(0===e)return;const n=()=>{const r=1-.09*e,o=s(t.x,u.current.x,r),i=s(t.y,u.current.y,r);d({x:o,y:i}),l.current=requestAnimationFrame(n)};return l.current=requestAnimationFrame(n),()=>{cancelAnimationFrame(l.current)}}),[t,e]),{position:t}},l=({delay:n,size:t=20,bgColor:o="white",useMixBlendDifference:s=!0})=>{const[l,u]=r(!1),{position:c}=d(n,{x:0,y:0});i((()=>{const e=e=>{const n=document.elementFromPoint(e.clientX,e.clientY);u(!!n&&["A","BUTTON","INPUT","TEXTAREA"].includes(n.tagName))};return document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)}),[]);const a={width:`${t}px`,height:`${t}px`,borderRadius:"50%",position:"fixed",left:`${c.x}px`,top:`${c.y}px`,pointerEvents:"none",transform:"translate(-50%, -50%)"+(l?" scale(5)":""),transition:"transform 0.2s ease",backgroundColor:o,mixBlendMode:s?"difference":"normal",zIndex:9999};return e("div",{style:a})},u=({delay:r,size:s,sizeDot:l=s||10,sizeOutline:u=s||45,bgColorDot:c="white",bgColorOutline:a="white",useMixBlendDifference:x=!0})=>{const m=o(null),p=o(null),{position:f}=d(r,{x:0,y:0});i((()=>{const e=e=>{m.current&&(m.current.style.left=`${e.clientX}px`,m.current.style.top=`${e.clientY}px`,m.current.style.transform="translate(-50%, -50%)")};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}),[]),i((()=>{p.current&&(p.current.style.left=`${f.x}px`,p.current.style.top=`${f.y}px`,p.current.style.transform="translate(-50%, -50%)")}),[f]);const y=x?"difference":"normal";return n(t,{children:[e("div",{ref:m,style:{width:`${l}px`,height:`${l}px`,position:"fixed",pointerEvents:"none",zIndex:9999,backgroundColor:c,borderRadius:"50%",mixBlendMode:y}}),e("div",{ref:p,style:{width:`${u}px`,height:`${u}px`,borderRadius:"50%",border:`2px solid ${a}`,pointerEvents:"none",mixBlendMode:y,zIndex:9998,backgroundColor:"transparent",position:"fixed"}})]})},c={position:"fixed",width:"20px",height:"20px",backgroundColor:"white",borderRadius:"50%",pointerEvents:"none",mixBlendMode:"difference",cursor:"none",transition:"transform 0.2s ease",zIndex:2147483647},a=({delay:n,size:t=35,bgColor:r="white",useMixBlendDifference:o=!0})=>{const{position:i}=d(n,{x:0,y:0});return e("div",{style:{...c,position:"fixed",left:`${i.x}px`,top:`${i.y}px`,borderRadius:"50%",border:`2px solid ${r}`,transform:"translate(-50%, -50%)",pointerEvents:"none",width:`${t}px`,height:`${t}px`,mixBlendMode:o?"difference":"normal",zIndex:9999,backgroundColor:"transparent"}})},x=({type:n,delay:t=0,size:r,sizeDot:o,sizeOutline:i,bgColor:s,bgColorDot:d,bgColorOutline:c,useMixBlendDifference:x})=>{const m=Math.max(0,Math.min(t,1e3));switch(n){case"one":return e(l,{delay:m,size:r,bgColor:s,useMixBlendDifference:x});case"two":return e(u,{delay:m,sizeDot:o,sizeOutline:i,bgColorDot:d,bgColorOutline:c,useMixBlendDifference:x});case"three":return e(a,{delay:m,size:r,bgColor:s,useMixBlendDifference:x});default:return null}};export{l as CursorOne,a as CursorThree,u as CursorTwo,x as CustomCursor};
//# sourceMappingURL=index.js.map
