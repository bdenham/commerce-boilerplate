import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import*as c from"@dropins/tools/preact-compat.js";import{useState as m,useEffect as f}from"@dropins/tools/preact-compat.js";import{events as a}from"@dropins/tools/event-bus.js";import{AlertBanner as u,Icon as g}from"@dropins/tools/components.js";import{useText as p}from"@dropins/tools/i18n.js";const h=r=>c.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},c.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),x=r=>{const[i,s]=m(!1),t=p({message:"Checkout.ErrorBanner.genericMessage"});f(()=>{const n=a.on("error",e=>{(e==null?void 0:e.source)==="checkout"&&(e==null?void 0:e.type)==="network"&&s(!0)});return()=>{n==null||n.off()}},[]);const l=()=>{s(!1)};return i?o(u,{...r,className:"checkout__banner","data-testid":"error-banner",icon:o(g,{source:h}),message:o("span",{children:t.message}),"aria-label":t.message,onDismiss:l,variant:"warning"}):null};export{x as E};
