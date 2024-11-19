/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as x}from"@dropins/tools/preact-jsx-runtime.js";import{classes as q,Slot as P}from"@dropins/tools/lib.js";import{Checkbox as H,Button as Q,CartItem as V,Image as W,Header as Z,InLineAlert as D}from"@dropins/tools/components.js";import{u as z,a as U}from"../chunks/OrderCancel.js";import{useState as _,useRef as K,useEffect as T,useCallback as F}from"@dropins/tools/preact-hooks.js";import{events as G}from"@dropins/tools/event-bus.js";import{g as J}from"../chunks/getFormValues.js";import{s as X}from"../chunks/setTaxStatus.js";import{createRef as Y,Fragment as I}from"@dropins/tools/preact.js";import{o as ee,c as te,n as ne,r as re,m as ae}from"../chunks/returnOrdersHelper.js";import{g as se,r as ie}from"../chunks/requestReturn.js";import{g as ce}from"../chunks/getStoreConfig.js";import*as y from"@dropins/tools/preact-compat.js";import{S as ue,C as oe}from"../chunks/CartSummaryItem.js";import{O as le}from"../chunks/OrderLoaders.js";import{useText as de}from"@dropins/tools/i18n.js";import"../chunks/form.types.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-attributes-form.js";import"../chunks/convertCase.js";const pe=a=>y.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},y.createElement("g",{clipPath:"url(#clip0_841_1324)"},y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),y.createElement("defs",null,y.createElement("clipPath",{id:"clip0_841_1324"},y.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),he=a=>y.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),ge=({onSuccess:a,onError:i,handleSetInLineAlert:c,orderData:d})=>{const[u,p]=_(d),[R,f]=_("products"),[O,b]=_(!0),[s,m]=_([]),[S,w]=_([]),[e,L]=_({taxIncluded:!1,taxExcluded:!1}),[t,h]=_([]),k=K([]);k.current.length!==s.length&&(k.current=s.map((n,o)=>k.current[o]||Y())),T(()=>{const n=G.on("order/data",o=>{p(o),h(ee(o)),b(!1)},{eager:!0});return()=>{n==null||n.off()}},[]),T(()=>{ce().then(n=>{if(n){const o=X(n==null?void 0:n.shoppingCartDisplayPrice);L(o)}})},[]),T(()=>{se("RMA_ITEM").then(n=>{n.length&&(w(n),b(!1))})},[]);const N=F(n=>{m(o=>o.findIndex(l=>(l==null?void 0:l.productSku)===(n==null?void 0:n.productSku))>-1?o.filter(l=>(l==null?void 0:l.productSku)!==(n==null?void 0:n.productSku)):[...o,n])},[]),C=F(n=>{f(n),c(),n==="products"&&m([])},[c]),A=F((n,o)=>{const v=s.map(l=>l.productSku===o?{...l,currentReturnOrderQuantity:n}:l);m(v)},[s]),E=F(async(n,o)=>{if(!o)return null;b(!0);const v={orderUid:(u==null?void 0:u.id)??"",contactEmail:(u==null?void 0:u.email)??""},l=[];k.current.length&&k.current.forEach(({current:g})=>{var M;const $=g==null?void 0:g.name.replace(/_\d+$/,""),j=((M=g==null?void 0:g.dataset)==null?void 0:M.quantity)??1,B=te(J(g));l.push({orderItemUid:$,quantityToReturn:+j,...ne(B)})}),ie({...v,items:l}).then(g=>{g&&(a==null||a(g),C("success"),c())}).catch(g=>{i==null||i(g.message),c({type:"error",heading:g.message})}),b(!1)},[C,i,a,c,u]);return{order:u,steps:R,loading:O,formsRef:k,taxConfig:e,attributesList:S,selectedProductList:s,itemsEligibleForReturn:t,handleSelectedProductList:N,handleSetQuantity:A,handleChangeStep:C,onSubmit:E}},me={success:r(he,{}),warning:r(pe,{}),error:r(ue,{})},fe=()=>{const[a,i]=_({type:"success",heading:""}),c=F(d=>{if(!(d!=null&&d.type)){i({type:"success",heading:""});return}const u=me[d.type];i({...d,icon:u})},[]);return{inLineAlertProps:a,handleSetInLineAlert:c}},be=({itemsEligibleForReturn:a,slots:i,loading:c=!1,taxConfig:d,translations:u={},selectedProductList:p,handleSelectedProductList:R,showConfigurableOptions:f,handleSetQuantity:O,handleChangeStep:b})=>x("ul",{className:"order-return-order-product-list",children:[a==null?void 0:a.map((s,m)=>{const S=p.some(e=>(e==null?void 0:e.productSku)===s.productSku&&s.eligibleForReturn&&s.quantityReturned===0),w=s.returnableQuantity===0?1:s.returnableQuantity;return x("li",{className:q(["order-return-order-product-list__item",["order-return-order-product-list__item--blur",!s.eligibleForReturn]]),children:[r(H,{"data-testid":`key_${m}`,name:`key_${m}`,checked:S,disabled:!s.eligibleForReturn||s.quantityReturned!==0,onChange:()=>{R({...s,currentReturnOrderQuantity:1})}}),r(oe,{loading:c,product:{...s,totalQuantity:w},itemType:"",taxConfig:d,translations:u,showConfigurableOptions:f,disabledIncrementer:!S,isReturnProductList:!0,onQuantity:(s==null?void 0:s.returnableQuantity)>1?e=>O(e,s.productSku):void 0}),r(P,{"data-testid":"returnOrderItem",name:"ReturnOrderItem",slot:i==null?void 0:i.ReturnOrderItem})]},m)}),r("li",{className:"order-return-order-product-list__item",children:r(Q,{type:"button",onClick:()=>b("attributes"),disabled:!p.length,children:u.nextStep})})]}),ke=({routeReturnSuccess:a,translations:i,orderData:c})=>{const d=()=>{window.location.href=(a==null?void 0:a(c))??"#"};return x("div",{className:"order-return-order-message",children:[r("p",{className:"order-return-order-message__title",children:i.successTitle}),r("p",{className:"order-return-order-message__subtitle",children:i.successMessage}),r(Q,{onClick:d,type:"button",children:i.backStore})]})},ye=({slots:a,formsRef:i,selectedProductList:c,loading:d,fieldsConfig:u,translations:p,handleChangeStep:R,onSubmit:f})=>{const{formData:O,errors:b,formRef:s,handleChange:m,handleBlur:S,handleSubmit:w}=z({fieldsConfig:re(u,c==null?void 0:c.length),onSubmit:f});return x("form",{className:"order-return-reason-form",ref:s,onSubmit:w,name:"returnReasonForm",children:[c.map((e,L)=>{var E,n,o,v,l;const t=(e==null?void 0:e.giftCard)||{},h=e==null?void 0:e.product,k=ae(u,L),N=`${e==null?void 0:e.id}_${L}`,C=(e==null?void 0:e.currentReturnOrderQuantity)??1,A={...e!=null&&e.currentReturnOrderQuantity?{Quantity:C}:{},..."configurableOptions"in e?e.configurableOptions:{},..."bundleOptions"in e?e.bundleOptions:{},..."senderName"in t?{[p.sender]:t==null?void 0:t.senderName}:{},..."senderEmail"in t&&(t!=null&&t.senderEmail)?{[p.sender]:t==null?void 0:t.senderEmail}:{},..."recipientName"in t&&(t!=null&&t.recipientName)?{[p.recipient]:t==null?void 0:t.recipientName}:{},..."recipientEmail"in t&&(t!=null&&t.recipientEmail)?{[p.recipient]:t==null?void 0:t.recipientEmail}:{},..."message"in t&&(t!=null&&t.message)?{[p.message]:t==null?void 0:t.message}:{},..."downloadableLinks"in e&&(e!=null&&e.downloadableLinks)?{[`${(E=e==null?void 0:e.downloadableLinks)==null?void 0:E.count} ${p.downloadableCount}`]:(n=e==null?void 0:e.downloadableLinks)==null?void 0:n.result}:{}};return x(I,{children:[r(V,{loading:d,title:r("div",{"data-testid":"product-name",children:(o=e==null?void 0:e.product)==null?void 0:o.name}),sku:r("div",{children:h==null?void 0:h.sku}),image:r(W,{src:((v=h==null?void 0:h.thumbnail)==null?void 0:v.url)??"",alt:((l=h==null?void 0:h.thumbnail)==null?void 0:l.label)??"",loading:"lazy",width:"90",height:"120"}),configurations:A}),r("form",{name:N,ref:i==null?void 0:i.current[L],"data-quantity":C,children:r(U,{className:"className",loading:d,fields:k,onChange:m,onBlur:S,errors:b,values:O})})]},L)}),r(P,{"data-testid":"returnFormActions",name:"ReturnFormActions",slot:a==null?void 0:a.ReturnFormActions,context:{handleChangeStep:R},children:x("div",{className:"order-return-reason-form__actions",children:[r(Q,{variant:"secondary",type:"button",onClick:()=>{R("products")},children:p.backStep}),r(Q,{children:p.submit})]})})]})},He=({className:a,orderData:i,slots:c,onSuccess:d,onError:u,routeReturnSuccess:p,showConfigurableOptions:R})=>{const f=de({headerText:"Order.CreateReturn.headerText",successTitle:"Order.CreateReturn.success.title",successMessage:"Order.CreateReturn.success.message",sender:"Order.CreateReturn.giftCard.sender",recipient:"Order.CreateReturn.giftCard.recipient",message:"Order.CreateReturn.giftCard.message",outOfStock:"Order.CreateReturn.stockStatus.outOfStock",nextStep:"Order.CreateReturn.buttons.nextStep",backStep:"Order.CreateReturn.buttons.backStep",submit:"Order.CreateReturn.buttons.submit",backStore:"Order.CreateReturn.buttons.backStore",downloadableCount:"Order.CreateReturn.downloadableCount",returnedItems:"Order.CreateReturn.returnedItems"}),{inLineAlertProps:O,handleSetInLineAlert:b}=fe(),{order:s,itemsEligibleForReturn:m,formsRef:S,taxConfig:w,attributesList:e,steps:L,loading:t,selectedProductList:h,handleSelectedProductList:k,handleSetQuantity:N,handleChangeStep:C,onSubmit:A}=ge({orderData:i,onSuccess:d,onError:u,handleSetInLineAlert:b});if(t)return r("div",{children:r(le,{})});if(!t&&!e.length)return r("div",{});const E={products:r(be,{itemsEligibleForReturn:m,slots:c,translations:f,loading:t,taxConfig:w,selectedProductList:h,handleSelectedProductList:k,showConfigurableOptions:R,handleSetQuantity:N,handleChangeStep:C}),attributes:r(ye,{slots:c,formsRef:S,loading:t,fieldsConfig:e,selectedProductList:h,handleChangeStep:C,translations:f,onSubmit:A}),success:r(ke,{translations:f,routeReturnSuccess:p,orderData:s}),error:null};return x("div",{className:q(["order-create-return",a]),children:[r(Z,{title:f.headerText}),O.heading?r(D,{className:"order-create-return_notification",variant:"secondary","data-testid":"orderCreateReturnNotification",...O}):null,E[L]]})};export{He as CreateReturn,He as default};
