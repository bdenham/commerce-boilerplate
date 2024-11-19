import{jsxs as l,jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import{classes as R}from"@dropins/tools/lib.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{r as p}from"./requestPasswordResetEmail.js";import{g as b,c as w,u as _,F as h,B as g}from"./useInLineAlert.js";import{useState as x,useCallback as y}from"@dropins/tools/preact-hooks.js";import{useText as P}from"@dropins/tools/i18n.js";import{Header as v,InLineAlert as N}from"@dropins/tools/components.js";import{s as E,D as T}from"./simplifyTransformAttributesForm.js";import*as F from"@dropins/tools/preact-compat.js";const D=t=>F.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},F.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),L=({routeSignIn:t,onErrorCallback:a,setActiveComponent:i,handleSetInLineAlertProps:s})=>{const c=P({successPasswordResetEmailNotification:"Auth.Notification.successPasswordResetEmailNotification"}),[m,e]=x(!1),d=y(async u=>{u.preventDefault(),e(!0);const r=b(u.target);if(r&&r.email){const f=await p(r.email);f.success?s==null||s({type:"success",text:c.successPasswordResetEmailNotification.replace("{email}",r.email)}):(a==null||a(f),s==null||s({type:"error",text:f.message}))}e(!1)},[s,a,c.successPasswordResetEmailNotification]),n=y(()=>{if(w(i)){i("signInForm");return}w(t)&&(window.location.href=t())},[i,t]);return{isLoading:m,submitResetPassword:d,redirectToSignInPage:n}},z=({formSize:t="default",routeSignIn:a,setActiveComponent:i,onErrorCallback:s,...c})=>{const m=P({title:"Auth.ResetPasswordForm.title",buttonPrimary:"Auth.ResetPasswordForm.buttonPrimary",buttonSecondary:"Auth.ResetPasswordForm.buttonSecondary"}),{inLineAlertProps:e,handleSetInLineAlertProps:d}=_(),{isLoading:n,submitResetPassword:u,redirectToSignInPage:r}=L({routeSignIn:a,setActiveComponent:i,onErrorCallback:s,handleSetInLineAlertProps:d});return l("div",{...c,className:R(["auth-resetPasswordForm",t]),"data-testid":"resetPasswordForm",children:[o(v,{title:m.title,divider:!1,className:"auth-resetPasswordForm__title"}),e.text?o(N,{className:"auth-resetPasswordForm__notification",type:e.type,variant:"secondary",heading:e.text,icon:e.icon}):null,o(h,{name:"resetPassword_form",className:"auth-resetPasswordForm__form",submitCallback:u,isLoading:n,fieldsConfig:E(T),children:l("div",{className:"auth-resetPasswordForm__buttons",children:[o(g,{type:"button",variant:"tertiary",style:{padding:"0"},icon:o(D,{style:{transform:"rotate(90deg)"}}),buttonText:m.buttonSecondary,enableLoader:!1,onClick:r}),o(g,{type:"submit",buttonText:m.buttonPrimary,variant:"primary",enableLoader:n})]})}),o("div",{id:"requestPasswordResetEmail"})]})};export{z as R};
