import{jsx as o,Fragment as U,jsxs as L}from"@dropins/tools/preact-jsx-runtime.js";import{d as ke,A as b,f as B,e as Le,D as oe,g as Ze,M as Fe,h as Ee,p as Me,i as Ke,s as Xe,a as Je,b as Ye,c as Qe}from"./setShippingMethods.js";import{events as ee}from"@dropins/tools/event-bus.js";import{A as Z,y as O,n as T,V as z,w as be,z as et,m as Ie,o as ue,v as Se,k as tt,B as K,E as Q}from"./getCart.graphql.js";import{useState as H,useCallback as j,useEffect as R,useRef as nt,useMemo as ot}from"@dropins/tools/preact-hooks.js";import{classes as $,getFormErrors as rt,Slot as de,VComponent as I}from"@dropins/tools/lib.js";import{Text as q,useText as J}from"@dropins/tools/i18n.js";import{Field as re,Input as me,Picker as it,Skeleton as he,SkeletonRow as A,IllustratedMessage as Ae,Icon as Ne,ProgressSpinner as ge,Button as st,Divider as X,RadioButton as we,Price as at}from"@dropins/tools/components.js";import{w as Y,c as lt}from"./BillToShippingAddress.js";import{s as Pe}from"./setBillingAddress.js";import*as x from"@dropins/tools/preact-compat.js";import{forwardRef as ct,useRef as $e,useImperativeHandle as dt,useState as G,useEffect as V,useMemo as xe,useCallback as te}from"@dropins/tools/preact-compat.js";import{E as ut}from"./ErrorBanner.js";import{M as mt}from"./MergedCartBanner.js";const ht=e=>({countryCode:e.country_id,postCode:e.postcode||"",...e.region_id?{regionId:Number(e.region_id)}:{...e.region?{region:e.region}:{}}}),gt=e=>({carrierCode:e.carrier.code||"",methodCode:e.code||"",amount:e.amount,amountExclTax:e.amountExclTax,amountInclTax:e.amountInclTax}),pe={firstname:"given-name",lastname:"family-name",company:"organization",country:"country",region:"address-level1",city:"address-level2",postcode:"postal-code",telephone:"tel",street:"address-line1",email:"email",middlename:"additional-name",prefix:"honorific-prefix",suffix:"honorific-suffix"};function Re(e){return Object.keys(e).length===0&&e.constructor===Object}const pt=e=>e.map(t=>{var r;const n=((r=t==null?void 0:t.id)==null?void 0:r.toString())||t.code;return{text:t.name,value:n}}),ft=e=>e?e.map(t=>({text:t.label,value:t.value})):[];function vt({address:e,addressType:t,availableCountries:n,availableRegions:r,config:i,dismissError:a,errors:s,fields:l,onBlur:d,onChange:h,onInvalid:c,onSelection:p,setAddress:u}){const E=()=>{u(m=>({...m,[b.Region]:"",[b.RegionId]:""})),a(b.Region)},f=m=>{u(w=>({...w,[b.RegionId]:m}))};return l.map(m=>{var C;let w,F=m.frontendInput,k=p,v=h,M=m.isDisabled,P=m.isRequired,N=[],S;return F===Z.Multiline?(S=ke(m.code,e),w=ke(m.code,s)):(S=e[m.code],w=s[m.code]||""),m.code===b.Country&&(N=ft(n),t===B.SHIPPING&&(O.value.country=S,k=g=>{const y=g.target,{value:_}=y;_&&le({country_code:_}),p(g),E()})),m.code===b.RegionId&&t===B.SHIPPING&&(O.value.selectedRegionId=S),m.code===b.Region&&(t===O.value.addressType&&(M=O.value.pending),P=i.countriesWithRequiredRegion.includes(e==null?void 0:e.country_id),N=pt(r),!P&&!i.displayStateIfOptional&&(F=Z.Undefined),F=N.length>0?Z.Select:Z.Text,F===Z.Select?t===B.SHIPPING?(O.value.selectedRegion=S,k=g=>{const _=g.target.value;le({country_code:O.value.country,region_id:_}),p(g),f(_)}):k=g=>{p(g);const _=g.target.value;f(_)}:F===Z.Text&&t===B.SHIPPING&&(O.value.selectedRegion=S,v=g=>{const y=g.target,{value:_}=y;O.value.country&&le({country_code:O.value.country,region_name:_}),h(g)}),S=N.length>0?((C=N.find(g=>g.value===S))==null?void 0:C.value)||"":S),m.code===b.PostCode&&(P=!i.countriesWithOptionalZipCode.includes(e==null?void 0:e.country_id)),{...m,error:w,frontendInput:F,handleSelect:k,isDisabled:M,isRequired:P,onBlur:d,onChange:v,onInvalid:c,options:N,value:S}})}let Ce;function le(e){var a;const t=T.value.data,n=!!t,r=(a=t==null?void 0:t.shippingAddresses)==null?void 0:a[0],i=r==null?void 0:r.availableShippingMethods;n&&!i&&(clearTimeout(Ce),Ce=setTimeout(()=>{Le({criteria:e})},oe))}const ie=({addressType:e,code:t,index:n})=>n?`${e}-${t}-${n}`:`${e}-${t}`,se=e=>`checkout-address-form__${e}`,kt=({addressType:e,element:t})=>{const{code:n,value:r,defaultValue:i}=t;return o("input",{className:se(n),id:ie({addressType:e,code:n}),name:n,type:"hidden",value:r||i},n)},Ft=({addressType:e,element:t})=>{const{code:n,error:r,isDisabled:i,label:a,onBlur:s,onChange:l,onInvalid:d,validateRules:h,value:c}=t,p=Be(h);return o(re,{disabled:i,error:r,children:o(me,{"aria-label":a,autocomplete:pe[n]||"off",className:se(n),floatingLabel:`${a} ${t.isRequired?"*":""}`,id:ie({addressType:e,code:n}),onBlur:s,onChange:l,onInvalid:d,placeholder:a,required:t.isRequired||!1,type:"text",name:n,value:c??void 0,...p})})},Et=({addressType:e,element:t})=>{const{code:n,error:r,isDisabled:i,isRequired:a,label:s,multilineCount:l,onBlur:d,onChange:h,onInvalid:c,validateRules:p,value:u}=t,E=l??0,f=Be(p);return o(U,{children:Array.from(Array(E).keys()).map(m=>o(re,{disabled:i,error:(r==null?void 0:r[m])||"",className:"dropin-field--multiline",children:o(me,{id:ie({addressType:e,code:n,index:m}),className:se(n),floatingLabel:`${s} ${m!=0?m:""} ${a&&m===0?"*":""}`,autocomplete:m===0?pe[n]:"off","aria-label":s,placeholder:`${s} ${m!=0?m:""}`,type:"text",required:a&&m===0,onChange:h,onBlur:d,onInvalid:c,name:`${n}-${m}`,value:(u==null?void 0:u[m])||void 0,...f})},`${n}-${m}`))})},Ct=({addressType:e,element:t})=>{const{code:n,error:r,handleSelect:i,isDisabled:a,isRequired:s,label:l,onBlur:d,onInvalid:h,options:c,value:p}=t,u=i?{handleSelect:i}:{};return o(re,{disabled:a,error:r,children:o(it,{id:ie({addressType:e,code:n}),className:se(n),name:n,floatingLabel:`${l} ${s?"*":""}`,required:s,placeholder:l,"aria-label":l,options:c,value:p,autocomplete:pe[n]||"off",onBlur:d,onInvalid:h,...u},n)})},yt=({addressType:e,element:t})=>{switch(t.frontendInput){case"BOOLEAN":case"DATE":case"DATETIME":case"FILE":case"GALLERY":case"IMAGE":case"MEDIA_IMAGE":case"MULTISELECT":case"PRICE":case"TEXTAREA":case"UNDEFINED":case"WEIGHT":return null;case"HIDDEN":return kt({addressType:e,element:t});case"TEXT":return Ft({addressType:e,element:t});case"MULTILINE":return Et({addressType:e,element:t});case"SELECT":return Ct({addressType:e,element:t});default:return null}},Be=e=>e?e.reduce((t,n)=>{switch(n.name){case z.DateRangeMax:return{...t,max:n.value};case z.DateRangeMin:return{...t,min:n.value};case z.FileExtensions:return{...t,accept:n.value};case z.InputValidation:return{...t,pattern:_t(n.value)};case z.MaxFileSize:case z.MaxImageHeight:case z.MaxImageWidth:return t;case z.MaxTextLength:return{...t,maxLength:n.value};case z.MinTextLength:return{...t,minLength:n.value};default:throw new Error(`Unknown rule: ${n.name}`)}},{}):{},D={alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/,"alphanumeric-w-space":/^[a-zA-Z0-9 ]+$/,"alphanum-with-spaces":/^[a-zA-Z0-9 ]+$/,email:/^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,numeric:/^[0-9]+$/,url:/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/},_t=e=>{switch(e){case"alpha":return D.alpha.source;case"alphanumeric":return D.alphanumeric.source;case"alphanumeric-w-space":return D["alphanumeric-w-space"].source;case"alphanum-with-spaces":return D["alphanum-with-spaces"].source;case"url":return D.url.source;case"numeric":return D.numeric.source;case"email":return D.email.source;default:throw new Error(`Unknown validation type: ${e}`)}},Lt=e=>L(he,{...e,children:[o(A,{variant:"heading",size:"medium"}),o(A,{variant:"empty",size:"medium"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large",fullWidth:!0}),o(A,{size:"large",fullWidth:!0,lines:3}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"})]}),Mt=({addressType:e,className:t,fields:n,formRef:r,headingId:i,name:a,...s})=>L("div",{...s,className:$(["checkout-fields-form",t]),children:[o(ne,{level:2,children:o(q,{id:i}),className:"checkout-fields-form__title"}),o("form",{name:a,ref:r,className:$(["checkout-fields-form__form",t]),noValidate:!0,children:n.sort((l,d)=>!l.sortOrder||!d.sortOrder?l.code<d.code?-1:1:l.sortOrder-d.sortOrder).map(l=>yt({element:l,addressType:e}))})]}),bt=e=>{const t=new FormData(e),n=Object.fromEntries(t);return Object.entries(n).reduce((i,[a])=>{const s=e.elements[a];return s!=null&&s.validationMessage?{...i,[a]:s.validationMessage}:{...i}},{})};function It(e){const[t,n]=G({});return V(()=>{e&&n(r=>({...r,country_id:e}))},[e]),{defaultValues:t}}function St({country:e,addressType:t}){const[n,r]=G([]);return V(()=>{if(!e){r([]);return}Ze(e,t).then(i=>{r(i||[])}).catch(i=>{console.error(i)})},[r,e,t]),{availableRegions:n}}function At({autoFill:e,addressType:t,dismissError:n,loadAutoFill:r}){const[i,a]=G(!1),s=ue.value.data,l=!!s,d=T.value.data,h=!!d;V(()=>{var w;if(!e||!h||i)return;let c,p=!1;c=Gt({addressType:t,cart:d}),!c&&l&&(c=Dt({addressType:t,customer:s}),p=!0);const u=F=>F?F.split(Ee).length>1:!1;if(!c)return;a(!0);const E={[b.City]:c.city,[b.Company]:c.company||"",[b.Country]:c.country.value,[b.FirstName]:c.firstName,[b.LastName]:c.lastName,[b.PostCode]:c.postCode||"",[b.Telephone]:c.telephone||"",[b.Vat]:c.vatId||""},f=c.region;if(f){const F=(w=f==null?void 0:f.id)==null?void 0:w.toString();F?(E[b.Region]=F,E[b.RegionId]=F):E[b.Region]=f.code}c!=null&&c.street&&c.street.length>0&&c.street.forEach((F,k)=>{E[`${b.Street}${Fe}${k}`]=F}),((c==null?void 0:c.customAttributes)||[]).forEach(F=>{u(F.code)?F.value.split(Ee).forEach((v,M)=>{E[`${F.code}${Fe}${M}`]=v}):E[F.code]=F.value}),r({values:E,triggerAutoSave:p})},[t,e,d,s,i,h,l,r,n])}const Oe=ct(({addressType:e,autoFill:t=!0,children:n,headingId:r,name:i,preselectedFields:a,saveAddressHandler:s,onCheckoutDataUpdate:l,...d},h)=>{const{data:c,pending:p}=be.value,u=et.value.data,E=u===void 0,f=c===void 0||p,m=Ie.value.data,w=m===void 0,{defaultValues:F}=It(m==null?void 0:m.defaultCountry),k=Wt({fields:c,preselectedFields:a}),v=$e(null),{address:M,errors:P,loadAutoFill:N,onBlur:S,dismissError:C,onChange:g,onInvalid:y,onSelection:_,setAddress:W}=zt({defaultValues:F,formRef:v,onCheckoutDataUpdate:l,preselection:k,saveAddressHandler:s,type:e}),{availableRegions:ae}=St({country:M.country_id,addressType:e});if(dt(h,()=>({triggerSaveAddress:qe=>{if(!v.current)return;const Ue=bt(v.current);if(Re(Ue))return s({signal:qe,address:M})}})),At({addressType:e,autoFill:t,loadAutoFill:N,dismissError:C}),f||E||w)return o(Lt,{"data-testid":`${e}-skeleton`});const je=vt({address:M,addressType:e,availableCountries:u,availableRegions:ae,config:m,dismissError:C,errors:P,fields:c,onBlur:S,onChange:g,onInvalid:y,onSelection:_,setAddress:W}),ve={[B.SHIPPING]:"shipping",[B.BILLING]:"billing"};return o(Mt,{...d,name:i,addressType:e,className:`checkout-${ve[e]}-form`,"data-testid":`${ve[e]}-form`,fields:je,formRef:v,headingId:r})}),Nt="DROPIN__CHECKOUT",fe=e=>`${Nt}__${e.toUpperCase()}`,wt=(e,t)=>{window.localStorage.setItem(fe(e),JSON.stringify(t))},Pt=e=>{const t=window.localStorage.getItem(fe(e));return t?JSON.parse(t):null},$t=e=>{window.localStorage.removeItem(fe(e))};function xt(e){const[t,n]=H(null),r=j(a=>setTimeout(()=>{wt(e,a)},oe),[e]),i=j(()=>{$t(e)},[e]);return R(()=>{const a=Pt(e);a&&n(a)},[e]),R(()=>{const a=ee.on("checkout/order",()=>{i()});return()=>{a==null||a.off()}},[i]),{addressBackup:t,backupAddress:r,removeAddressBackup:i}}const Rt={[B.BILLING]:"billing",[B.SHIPPING]:"shipping"};function Bt({address:e,type:t,isValid:n}){R(()=>{const r=setTimeout(()=>{ee.emit("checkout/address",{type:Rt[t],address:e,isValid:n()})},oe);return()=>{clearTimeout(r)}},[e,n,t])}const Ot={badInput:"aria-label",patternMismatch:"aria-label",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength",tooShort:"minlength",typeMismatch:"aria-label",valueMissing:"aria-label"},Ht=["badInput","patternMismatch","rangeOverflow","rangeUnderflow","tooLong","tooShort","typeMismatch","valueMissing"],Tt=e=>{const[t,n]=H({}),r=j(s=>{const{name:l,validity:d,validationMessage:h}=s;let c=d.valid?"":h;Ht.forEach(p=>{if(!d[p])return;const u=e[p];if(!u)return;const E=Ot[p];c=u.replace("{field}",s.getAttribute(E)||"")}),n(p=>({...p,[l]:c}))},[e]);return{errors:t,dismissError:s=>{t[s]&&n(l=>{const{[s]:d,...h}=l;return h})},validateFormElement:r,resetErrors:()=>{n({})}}},ye=e=>{const t=e.current;if(!t)return!1;const n=rt(t);return Re(n)},zt=({defaultValues:e={},formRef:t,onCheckoutDataUpdate:n,preselection:r={},saveAddressHandler:i,type:a})=>{const s=J({badInput:"Checkout.AddressForm.Validity.badInput",patternMismatch:"Checkout.AddressForm.Validity.patternMismatch",rangeUnderflow:"Checkout.AddressForm.Validity.rangeUnderflow",tooLong:"Checkout.AddressForm.Validity.tooLong",tooShort:"Checkout.AddressForm.Validity.tooShort",typeMismatch:"Checkout.AddressForm.Validity.typeMismatch",valueMissing:"Checkout.AddressForm.Validity.valueMissing"}),l=nt(!1),[d,h]=H({});Bt({address:d,type:a,isValid:j(()=>ye(t),[t])});const{addressBackup:c,backupAddress:p,removeAddressBackup:u}=xt(a),{errors:E,validateFormElement:f,dismissError:m,resetErrors:w}=Tt(s),F=j(C=>{l.current=!1,i(C).then(()=>{u(),n==null||n()}).catch(g=>{l.current=!0,console.error("Saving address form failed:",g)})},[u,i,n]),k=(C,g)=>{h(y=>({...y,[C]:g})),l.current=!0},v=({values:C,triggerAutoSave:g=!1})=>{w(),h(y=>({...y,...C})),g&&(l.current=!0)},M=C=>{const g=C.target,{name:y,value:_}=g;k(y,_),f(g)},P=C=>{const g=C.target;f(g)},N=C=>{const g=C.target,{name:y,value:_}=g;k(y,_),f(g)},S=C=>{C.target.checkValidity()};return R(()=>{h(C=>({...e,...r,...c,...C}))},[e,r,c]),R(()=>{if(!l.current)return;const C=p(d);return()=>{clearTimeout(C)}},[d,p]),R(()=>{if(!l.current||!ye(t))return;const C=new AbortController,g=C.signal,y=setTimeout(()=>{F({signal:g,address:d})},oe);return()=>{clearTimeout(y),C.abort()}},[d,t,F]),{address:d,errors:E,loadAutoFill:v,dismissError:m,onChange:M,onSelection:N,onBlur:S,onInvalid:P,setAddress:h}},Vt={countryCode:b.Country,region:b.Region,postCode:b.PostCode};function Wt({fields:e,preselectedFields:t}){return ot(()=>!(!!e&&e.length>0)||!!!t?{}:Object.keys(t).reduce((i,a)=>{const s=Vt[a];return!s||!e.some(d=>d.code===s)?i:{...i,[s]:t[a]}},{}),[e,t])}const Dt=({addressType:e,customer:t})=>e===B.BILLING?t.defaultBillingAddress:t.defaultShippingAddress,Gt=({addressType:e,cart:t})=>{if(e===B.BILLING)return t.billingAddress;const n=t.shippingAddresses;if(!(!n||n.length===0))return n[0]},He=e=>{var E;const t=$e(null),n=be.value.data,r=ue.value.data,i=r==null?void 0:r.defaultBillingAddress,a=T.value.data,s=a==null?void 0:a.billingAddress,l=(E=a==null?void 0:a.shippingAddresses)==null?void 0:E[0],{checked:d,setByUser:h}=Se.value,c=!d,p=xe(()=>!n||!c?!1:s?!lt(n,s,l):!!i,[c,n,s,l,i]),u=te(f=>Pe({signal:f.signal,input:{address:d?void 0:Me(f.address),same_as_shipping:d}}),[d]);return V(()=>{if(!h)return;const f=new AbortController;return d||t.current.triggerSaveAddress(f.signal),()=>{f.abort()}},[d,h]),o(Oe,{...e,addressType:B.BILLING,autoFill:p,"data-testid":"billing-form",headingId:"Checkout.BillingAddress.title",name:jt,ref:t,saveAddressHandler:u,style:{display:c?"block":"none"}})};He.displayName="BillingFormContainer";const On=Y(He),jt="billing_address",qt=e=>x.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.35 11.64H14.04V14.81H19.35V11.64Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.9304 11.64V8.25H15.1504",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),Ut=e=>x.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.47266 4.90002H15.1851V10.9645H21.2495L23 12.715V17.6124H20.073",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M15.1758 5.87573H19.0019L21.0394 10.7636",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76151 16.7898C9.76151 18.0525 8.72845 19.076 7.46582 19.076C6.20318 19.076 5.17969 18.0429 5.17969 16.7803C5.17969 15.5176 6.20318 14.4941 7.46582 14.4941C8.72845 14.4941 9.75195 15.5176 9.76151 16.7803C9.76151 16.7803 9.76151 16.7803 9.76151 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.8726 16.7898C19.8726 18.062 18.8491 19.0855 17.5769 19.0855C16.3047 19.0855 15.2812 18.062 15.2812 16.7898C15.2812 15.5176 16.3047 14.4941 17.5769 14.4941C18.8491 14.4941 19.8726 15.5176 19.8726 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M8.08792 7.63574H1.69824",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.11229 10.3619H1",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M5.16084 13.0402H1.92773",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76172 16.7611H15.2809",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.38672 16.7611H5.17025",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),Te="login-form",Zt=({value:e,error:t,hint:n,onChange:r,onBlur:i,onInvalid:a})=>{const s=J({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return o(re,{size:"medium",error:t,hint:n,children:o(me,{id:"customer-email",name:"customer-email",type:"email",value:e,autocomplete:"email",placeholder:s.LoginFormPlaceholder,floatingLabel:s.LoginFormFloatingLabel,onChange:r,onBlur:i,onInvalid:a,required:!0,"aria-label":s.LoginFormLabel,"aria-required":!0})})},Kt=({onSignInClick:e,email:t})=>L("div",{className:"checkout-login-form__sign-in",children:[o(q,{id:"Checkout.LoginForm.account"}),o("a",{"data-testid":"sign-in-link",className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:n=>{n.preventDefault(),e==null||e(t)},children:o(q,{id:"Checkout.LoginForm.signIn"})})]}),Xt=({name:e,className:t,currentEmail:n,hint:r,error:i=null,onEmailChange:a,onEmailBlur:s,onEmailInvalid:l,onSignInClick:d,onSignOutClick:h,customer:c,...p})=>{const u=J({Title:"Checkout.LoginForm.title"}),E=!!c;return L("div",{...p,className:$(["checkout-login-form",t]),"data-testid":"checkout-login-form",children:[L("div",{className:"checkout-login-form__heading",children:[o(ne,{level:2,className:"checkout-login-form__title",children:u.Title}),E?o(Jt,{onSignOutClick:h}):o(Kt,{onSignInClick:d,email:n})]}),c?L("div",{className:"checkout-login-form__customer-details",children:[o("div",{className:"checkout-login-form__customer-name",children:`${c==null?void 0:c.firstName} ${c==null?void 0:c.lastName}`}),o("div",{className:"checkout-login-form__customer-email",children:c==null?void 0:c.email})]}):o("div",{className:"checkout-login-form__content",children:L("form",{className:$(["dropin-login-form__form",t]),name:e,noValidate:!0,children:[o("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),o(Zt,{value:n||void 0,error:i||"",hint:r,onChange:a,onBlur:s,onInvalid:l})]})})]})},Jt=({onSignOutClick:e})=>L("p",{className:"checkout-login-form__sign-out",children:[o(q,{id:"Checkout.LoginForm.switch"}),o("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:t=>{t.preventDefault(),e==null||e()},children:o(q,{id:"Checkout.LoginForm.signOut"})})]}),Yt=e=>D.email.test(e),Qt=1e3,ze=({className:e,email:t=null,onSignInClick:n,onSignOutClick:r,...i})=>{const a=J({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExistsAlreadyHaveAccount:"Checkout.LoginForm.emailExists.alreadyHaveAccount",LoginFormEmailExistsSignInButton:"Checkout.LoginForm.emailExists.signInButton",LoginFormEmailExistsForFasterCheckout:"Checkout.LoginForm.emailExists.forFasterCheckout"}),{data:s}=T.value,l=(s==null?void 0:s.id)||"",d=!!s,h=(s==null?void 0:s.email)||"",[c,p]=H(!1),[u,E]=H(t),[f,m]=H(null),[w,F]=H(!0),k=g=>g.valid?null:g.valueMissing?a.LoginFormMissingEmailError:a.LoginFormInvalidEmailError,v=ue.value.data,M=g=>{const{value:y}=g.target;E(y),m(null),F(!0)},P=g=>{const{validity:y}=g.target;m(k(y))},N=g=>{const{validity:y}=g.target;m(k(y))};!c&&d&&(p(!0),E((s==null?void 0:s.email)||t)),R(()=>{if(f!==null&&f!==""||u===null||u===""||tt.authenticated)return;const g=setTimeout(()=>{Ke(u).then(y=>{F(y),h!==u&&Xe(u).catch(console.error)}).catch(y=>{console.log(y),m(a.LoginFormInvalidEmailError),F(!0)})},Qt);return()=>{g&&clearTimeout(g)}},[h,l,u,f,a.LoginFormInvalidEmailError]);const S=w?"":L(U,{children:[a.LoginFormEmailExistsAlreadyHaveAccount," ",o("a",{href:"#",onClick:g=>{g.preventDefault(),n==null||n(u)},children:a.LoginFormEmailExistsSignInButton})," ",a.LoginFormEmailExistsForFasterCheckout]});return o(Xt,{className:e,currentEmail:u,error:f,hint:S,name:Te,onEmailBlur:P,onEmailChange:M,onEmailInvalid:N,onSignInClick:g=>{const y=u?Yt(u):!1;n==null||n(y?g:null)},onSignOutClick:r,customer:v,...i})};ze.displayName="LoginFormContainer";const Hn=Y(ze),en=()=>L(he,{"data-testid":"payment-methods-skeleton",children:[o(A,{variant:"heading",size:"medium"}),o(A,{variant:"empty",size:"medium"}),o(A,{size:"xlarge",fullWidth:!0}),o(A,{size:"xlarge",fullWidth:!0})]}),tn=({code:e,isLoading:t,isSelected:n,onChange:r,title:i})=>o(kn,{className:"checkout-payment-methods__method",label:i,name:"payment-method",value:e,selected:n,onChange:r,radioButtonProps:{"aria-busy":t}}),nn=({className:e,paymentMethodContent:t,isLoading:n,onChange:r=()=>{},options:i,selection:a})=>{const s=J({Title:"Checkout.PaymentMethods.title",EmptyState:"Checkout.PaymentMethods.emptyState"});return i===void 0?o(en,{}):L("div",{className:$(["checkout-payment-methods",e]),children:[o(ne,{level:2,className:"checkout-payment-methods__title",children:s.Title}),!n&&i.length===0&&o(Ae,{icon:o(Ne,{source:qt}),message:o("p",{children:s.EmptyState})}),L("div",{className:$(["checkout-payment-methods__wrapper"]),children:[n&&o(ge,{className:"checkout-payment-methods__spinner"}),o("div",{className:$(["checkout-payment-methods__methods",["checkout-payment-methods--loading",n],["checkout-payment-methods--full-width",i.length%2!==0]]),children:i==null?void 0:i.map(l=>o(tn,{code:l.code,onChange:r,isSelected:l.code===a,title:l.title},l.code))}),t&&o("div",{className:"checkout-payment-methods__content",children:t})]})]})},_e={free:{render:e=>{const t=document.createElement("div");t.innerText="",e.replaceHTML(t)}},checkmo:{render:e=>{const t=document.createElement("div");t.innerText="",e.replaceHTML(t)}}};function on(e){var y;const{onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r}=e,[i,a]=G(),[s,l]=G(),[d,h]=G(_e),[c,p]=G(!0),{data:u}=T.value,E=(u==null?void 0:u.id)??"",f=!!u,m=!!((y=u==null?void 0:u.shippingAddresses)!=null&&y[0]),F=!((u==null?void 0:u.isVirtual)??!1),k=u==null?void 0:u.availablePaymentMethods,v=u==null?void 0:u.selectedPaymentMethod,M=te(async _=>{try{if(a(_),!m&&F||_===(v==null?void 0:v.code))return;await Je(_)}catch(W){console.error("setting payment method failed:",W)}},[m,F,v]);V(()=>{f&&(v!=null&&v.code?(k==null?void 0:k.some(W=>W.code===v.code))?a(v.code):k!=null&&k.length?M(k[0].code):a(void 0):k[0]&&M(s||k[0].code))},[k,f,v,M,s]);const P=async _=>{t(),await M(_),v!=null&&v.code||l(_)},N=te((_,W)=>{if(!_){console.warn("Payment method handler is ignored because it has no code");return}if(!W){console.warn("Payment method handler is ignored because it is empty");return}h(ae=>({...ae,[_]:W}))},[]),S=r?o(de,{name:"PaymentMethods",slot:r,context:{addPaymentMethodHandler:N,replaceHTML(_){this.replaceWith(_),p(!1)}}}):null,C=i?d[i]:null,g=C?o(de,{name:"PaymentMethodContent",slot:C.render,context:{cartId:E,onPlaceOrder:t,handleServerError:n,replaceHTML(_){this.replaceWith(_)}}},C):void 0;return V(()=>{!c&&d!=_e&&console.warn("Payment method handlers you have added are ignored because the default content has been replaced")},[c,d]),{availablePaymentMethods:k,selectedPaymentMethod:i,onPaymentMethodChange:P,paymentMethodContent:g,mainSlotContent:S,isDefaultContentUsed:c}}const Ve=e=>{const{onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r}=e,{availablePaymentMethods:i,selectedPaymentMethod:a,onPaymentMethodChange:s,paymentMethodContent:l,mainSlotContent:d,isDefaultContentUsed:h}=on({onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r});return L(U,{children:[d&&o(d.type,{ref:d.ref,...d.props}),h&&o(nn,{options:i,selection:a,onChange:s,paymentMethodContent:l,isLoading:T.value.pending})]})};Ve.displayName="PaymentMethodsContainer";const Tn=Y(Ve),rn=({className:e,onClick:t=()=>{},disabled:n=!1})=>o("div",{className:$(["checkout-place-order",e]),children:o(st,{className:$(["checkout-place-order__button",e]),"data-testid":"place-order-button",disabled:n,onClick:t,size:"medium",type:"submit",variant:"primary",children:o(q,{id:"Checkout.PlaceOrder.button"})},"placeOrder")}),sn=[Te,"shipping_address","billing_address"],an=e=>{const t=e.querySelector(":invalid");t&&(t.scrollIntoView({behavior:"smooth"}),t.focus())},ln=()=>{const t=(Array.from(document.forms)||[]).filter(r=>sn.includes(r.name)).filter(r=>r.offsetParent!==null).filter(r=>!r.checkValidity()),n=t.length===0;if(!n){const r=t[0];an(r)}return n},cn=({onClick:e,handleServerError:t})=>{const[n,r]=G(!1),i=T.value.pending,a=async()=>{if(ln())try{await e()}catch(s){t(s)}};return V(()=>{const s=ee.on("cart/initialized",l=>{const d=(l==null?void 0:l.items)||[];r(d.some(h=>h.outOfStock||h.insufficientQuantity))},{eager:!0});return()=>{s==null||s.off()}},[]),o(rn,{onClick:a,disabled:i||n})},zn=Y(cn),We=({onCheckoutDataUpdate:e,preselectedFields:t,...n})=>{const r=Se.value.checked,i=te(a=>Ye({signal:a.signal,address:Me(a.address)}).then(()=>{if(r)return Pe({input:{same_as_shipping:!0}})}),[r]);return o(Oe,{...n,addressType:B.SHIPPING,headingId:"Checkout.ShippingAddress.title",name:dn,onCheckoutDataUpdate:e,preselectedFields:t,saveAddressHandler:i})};We.displayName="ShippingFormContainer";const Vn=Y(We),dn="shipping_address",un=()=>{const e=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[t,n]=H(e());return R(()=>{let r;const i=()=>{r&&clearTimeout(r),r=setTimeout(()=>n(e()),50)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i),r&&clearTimeout(r)}},[]),t},mn=()=>{const e=j(()=>{document.body.style.overflow="hidden"},[]),t=j(()=>{document.body.style.overflow=""},[]);return{lockScroll:e,unlockScroll:t}},De=()=>L("div",{className:"checkout-heading",children:[o(ne,{level:1,className:"checkout-heading__title",children:o(q,{id:"Checkout.title"})}),o(X,{variant:"primary",className:"checkout-heading__divider-primary"})]}),hn=({billingAddress:e,billToShippingAddress:t,cartSummaryList:n,emptyCart:r,login:i,orderSummary:a,outOfStock:s,paymentMethods:l,placeOrder:d,shippingAddress:h,shippingMethods:c})=>L(U,{children:[o(De,{}),n&&o(I,{node:n}),o(I,{node:r}),o(I,{node:s}),o(I,{node:i}),o(X,{variant:"primary"}),o(I,{node:h}),o(I,{node:t}),c&&o(I,{node:c}),o(X,{variant:"primary"}),o(I,{node:l}),o(I,{node:e}),a&&o(I,{node:a}),o(I,{node:s}),o(I,{node:d})]}),gn=({billingAddress:e,billToShippingAddress:t,cartSummaryList:n,emptyCart:r,login:i,orderSummary:a,outOfStock:s,paymentMethods:l,placeOrder:d,shippingAddress:h,shippingMethods:c})=>L(U,{children:[L("div",{className:"checkout__main",children:[o(De,{}),o(I,{node:r}),o(I,{node:s}),o(I,{node:i}),o(X,{variant:"primary"}),o(I,{node:h}),o(I,{node:t}),c&&o(I,{node:c}),o(X,{variant:"primary"}),o(I,{node:e}),o(I,{node:l}),o(X,{variant:"primary"}),o(I,{node:d})]}),L("div",{className:"checkout__aside",children:[a&&o(I,{node:a}),n&&o(I,{node:n})]})]}),pn=({blocks:e})=>un()==="small"?o(hn,{...e}):o(gn,{...e}),fn=({children:e,className:t,isLoading:n=!1,...r})=>L("div",{"data-testid":"checkout",className:$(["checkout",t]),...r,children:[n&&o(vn,{}),o(ut,{}),o(mt,{}),o("div",{className:"checkout__content",children:e})]});fn.Main=pn;const ne=({className:e,children:t,level:n=2})=>{const r=n>=1&&n<=6?`h${n}`:"h2";return o(r,{className:e,children:t})},vn=({className:e})=>{const{lockScroll:t,unlockScroll:n}=mn();return R(()=>(t(),n),[t,n]),o("div",{"data-testid":"checkout-overlay-loader",className:$(["checkout-overlay-loader",e]),children:o(ge,{})})},kn=({label:e,name:t,value:n,icon:r,selected:i,onChange:a,className:s,children:l,radioButtonProps:d,...h})=>o("div",{className:$(["checkout-toggle-button",s,["checkout-toggle-button__selected",i]]),...h,children:L("label",{className:"checkout-toggle-button__actionButton",children:[o(we,{...d,label:"",name:t,value:n,checked:i,onChange:()=>a(n),"aria-label":e,className:$([s,"checkout-toggle-button__radioButton"])}),L("div",{className:"checkout-toggle-button__content",children:[r&&o(r.type,{...r==null?void 0:r.props,className:"checkout-toggle-button__icon"}),e]})]})}),Fn=({className:e,isLoading:t=!1,onSelectionChange:n=()=>{},options:r,selection:i,...a})=>{const s=J({Title:"Checkout.ShippingMethods.title",EmptyState:"Checkout.ShippingMethods.emptyState"});return r===void 0?o(En,{}):L("div",{...a,className:$(["checkout-shipping-methods",e]),children:[o(ne,{level:3,className:"checkout-shipping-methods__title",children:s.Title}),!t&&r.length===0&&o(Ae,{icon:o(Ne,{source:Ut}),message:o("p",{children:s.EmptyState})}),L("div",{className:$(["checkout-shipping-methods__content"]),children:[t&&o(ge,{className:"checkout-shipping-methods__spinner"}),o("div",{className:$(["checkout-shipping-methods__options",["checkout-shipping-methods__options--loading",t]]),children:r.map(l=>o(we,{"data-testid":"shipping-method-radiobutton","aria-busy":t,id:l.value,name:"shipping-method",className:"checkout-shipping-methods__method",label:L(U,{children:[o(at,{amount:l.amount.value,currency:l.amount.currency})," ",o("span",{children:l.carrier.title})]}),description:l.title,value:l.value,checked:(i==null?void 0:i.value)===l.value,onChange:()=>n(l)},l.value))})]})]})},En=()=>L(he,{"data-testid":"shipping-methods-skeleton",children:[o(A,{variant:"heading",size:"small"}),o(A,{variant:"empty",size:"small"}),o(A,{size:"medium",fullWidth:!0}),o(A,{size:"medium",fullWidth:!0})]});function Cn(){var u;const[e,t]=H(),[n,r]=H();R(()=>{ee.on("checkout/address",({address:E,type:f,isValid:m})=>{f==="shipping"&&t({address:E,isValid:m})})},[]),R(()=>{r(K.value)},[K.value]),R(()=>{Q.value.pending?r(void 0):r(K.value)},[Q.value.pending]);const{country_id:i,region_id:a,region:s,postcode:l}=(e==null?void 0:e.address)||{},d=!!e,h=T.value.data,c=!!((u=h==null?void 0:h.shippingAddresses)!=null&&u[0]),p=e==null?void 0:e.isValid;R(()=>{c||p||!n||!d||ee.emit("shipping/estimate",{address:ht({country_id:i,region_id:a,region:s,postcode:l}),shippingMethod:gt(n)})},[n,i,a,s,l,d,c,p])}const ce=(e,t)=>e.code===t.code&&e.carrier.code===t.carrier.code;function yn({onCheckoutDataUpdate:e,preSelectedMethod:t}){const n=Ie.value.data,r=!n,i=T.value.data,a=T.value.pending,s=Q.value.data,l=Q.value.pending,d=K.value,h=i==null?void 0:i.id,c=i==null?void 0:i.shippingAddresses,p=c==null?void 0:c[0],u=!!p,E=p==null?void 0:p.availableShippingMethods,f=p==null?void 0:p.selectedShippingMethod,m=E||s,w=te(v=>{if(!u)return;const M={method_code:v.code,carrier_code:v.carrier.code};Qe([M]).then(()=>{e==null||e()}).catch(P=>{console.error("setting shipping methods on cart failed:",P)})},[u,e]),F=v=>{K.value=v},k=xe(()=>{if(!(m!=null&&m.length))return;const v=m[0],M=d||f;return M?m.some(N=>ce(N,M))?M:v:m.find(S=>S.carrier.code===(t==null?void 0:t.carrierCode)&&S.code===(t==null?void 0:t.methodCode))||v},[d,f,m,t]);return V(()=>{k&&((!d||!ce(k,d))&&(K.value=k),(!f||!ce(k,f))&&w(k))},[k,d,f,w]),V(()=>{if(!h||E)return;const{country:v,selectedRegion:M,selectedRegionId:P}=O.value,N=v||(n==null?void 0:n.defaultCountry);N&&Le({criteria:{country_code:N,region_name:M,region_id:P}}).catch(C=>{Q.value={pending:!1,data:[]},console.error("shipping methods estimation failed:",C)})},[h,E,n]),{isLoading:a||r||l,options:m,selection:k,onSelectionChange:F}}const Ge=({preSelectedMethod:e,onCheckoutDataUpdate:t,shippingMethodsSlot:n,...r})=>{const{isLoading:i,options:a,selection:s,onSelectionChange:l}=yn({preSelectedMethod:e,onCheckoutDataUpdate:t});return Cn(),L(U,{children:[o(Fn,{...r,className:"checkout-shipping-methods",isLoading:i,onSelectionChange:l,options:a,selection:s}),!i&&o(de,{name:"ShippingMethods",slot:n})]})};Ge.displayName="ShippingMethodsContainer";const Wn=Y(Ge);export{On as B,fn as C,Hn as L,zn as P,Wn as S,Vn as a,dn as b,Tn as c,Te as d,jt as e};