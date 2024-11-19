import{jsx as e,jsxs as v,Fragment as yt}from"@dropins/tools/preact-jsx-runtime.js";import{useState as z,Children as it,useEffect as K,useCallback as f,useMemo as St}from"@dropins/tools/preact-compat.js";import{VComponent as u,classes as N,Slot as b,toLanguageTag as at}from"@dropins/tools/lib.js";import{Incrementer as Nt,Breadcrumbs as dt,Button as ot,Icon as ct,Image as _t}from"@dropins/tools/components.js";/* empty css             */import{Z as vt,C as g,O as It}from"../chunks/Zoom.js";import{useText as L}from"@dropins/tools/i18n.js";import{P as mt}from"../chunks/PriceRange.js";import{S as Ot}from"../chunks/Swatches.js";import"@dropins/tools/preact.js";import{c as Dt,h as At,p as ut,j as wt,e as Vt}from"../chunks/fetchPDPData.js";import{g as kt,s as Bt}from"../chunks/getProductConfigurationValues.js";import{s as Ut}from"../chunks/isProductConfigurationValid.js";import{events as bt}from"@dropins/tools/event-bus.js";import{i as Lt,t as Mt}from"../chunks/date.js";import"@dropins/tools/fetch-graphql.js";const Rt=({title:i,breadcrumbs:y,galleryContent:M,infoContent:R,productContent:s,sku:T,outOfStock:w,shortDescription:V,description:r,attributes:C,images:d,options:h,price:A,specialPrice:G,className:H,children:lt,quantity:F,actions:J,carouselConfig:n,zoomType:tt="overlay",closeButton:et=!0,...I})=>{var j,m,Q,q,$,W,X,B,Y;const nt=L("PDP.Product.RegularPrice.label").label,rt=L("PDP.Product.SpecialPrice.label").label,pt=L("PDP.Product.OutOfStock.label").label,t=L("PDP.Product.Image.label").label,[E,S]=z(null),O=d!=null&&d.length?d.map((x,P)=>{var Z;const D=((Z=i==null?void 0:i.props)==null?void 0:Z.children)&&(t==null?void 0:t.replace("{product}",i.props.children.toString()).replace("{key}",String(P+1)).replace("{total}",String(d.length)));return tt==="zoom"?e(vt,{closeButton:et,children:e(u,{node:x,loading:P===0?"eager":"lazy",alt:D},P)}):e(u,{node:x,loading:P===0?"eager":"lazy",alt:D,onClick:()=>S(P)},P)}):e("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0}),k=(j=n==null?void 0:n.thumbnails)!=null&&j.length?n.thumbnails.map((x,P)=>{var D;return e(u,{node:x,loading:(n==null?void 0:n.thumbnailsLoadingMode)||"lazy",alt:((D=i==null?void 0:i.props)==null?void 0:D.children)&&(t==null?void 0:t.replace("{product}",i.props.children.toString()).replace("{key}",String(P+1)).replace("{total}",String(d.length)))},P)}):e("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0});return v("div",{...I,className:N(["pdp-product",H]),children:[y&&e(u,{node:y,className:"pdp-product__breadcrumbs"}),v("div",{className:"pdp-product__column-container pdp-product__gallery-column",children:[e("div",{className:"pdp-product__column-body",children:(m=n==null?void 0:n.controls)!=null&&m.desktop?e(g,{className:"pdp-product__overlay__carousel",arrows:(d==null?void 0:d.length)>1,controls:(d==null?void 0:d.length)>1?n.controls.desktop:"dots",arrowsOnMainImage:n==null?void 0:n.arrowsOnMainImage,loop:(n==null?void 0:n.loopable)&&(d==null?void 0:d.length)>1,peak:((Q=n==null?void 0:n.thumbnails)==null?void 0:Q.length)>1&&((q=n==null?void 0:n.peak)==null?void 0:q.desktop)||!1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"100%",defaultIndex:E||0,thumbnails:k,children:O}):e(st,{className:"pdp-product__images",gap:"small",children:O})}),M&&e(u,{node:M,className:"pdp-product__gallery-content"})]}),v("div",{className:"pdp-product__column-container pdp-product__content-column",children:[v("div",{className:"pdp-product__column-body",children:[v("div",{className:"pdp-product__header",children:[i&&e(u,{node:i,className:"pdp-product__title"}),T&&e(u,{node:T,className:"pdp-product__sku"})]}),v("div",{className:"pdp-product__prices",children:[G&&e(u,{node:G,className:N(["pdp-product__price-special","pdp-product__price"]),"aria-label":rt,role:"text"}),A&&e(u,{node:A,className:N(["pdp-product__price-regular","pdp-product__price--grey"]),"aria-label":nt,role:"text"})]}),($=n==null?void 0:n.controls)!=null&&$.mobile&&((W=n==null?void 0:n.controls)==null?void 0:W.mobile)==="thumbnailsRow"?e(g,{className:"pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",width:"100%",height:"auto",arrows:(d==null?void 0:d.length)>1,controls:(d==null?void 0:d.length)>1?"thumbnailsRow":null,loop:(n==null?void 0:n.loopable)&&(d==null?void 0:d.length)>1,peak:((X=n==null?void 0:n.thumbnails)==null?void 0:X.length)>1&&((B=n==null?void 0:n.peak)==null?void 0:B.mobile)||!1,gap:(n==null?void 0:n.gap)||null,thumbnails:k,children:O}):e(g,{className:"pdp-product__images pdp-product__images--carousel",peak:((Y=n==null?void 0:n.peak)==null?void 0:Y.mobile)&&(d==null?void 0:d.length)>1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"auto",arrows:(d==null?void 0:d.length)>1,controls:(d==null?void 0:d.length)>1?"dots":null,loop:(n==null?void 0:n.loopable)&&(d==null?void 0:d.length)>1,children:O}),v("div",{className:N(["pdp-product__actions",["pdp-product__actions--out-of-stock",w]]),children:[w&&e("div",{className:"pdp-product__out-of-stock__text",children:pt}),h&&e(u,{node:h,className:N(["pdp-product__options"])}),F&&e("div",{className:"pdp-product__quantity",children:e(u,{node:F})}),J&&e(u,{node:J,className:N(["pdp-product__buttons"])})]}),V&&e(u,{node:V,className:N(["pdp-product__short_description"])}),r&&e(u,{node:r,className:N(["pdp-product__description"])}),C?e("div",{className:"pdp-product__attributes",children:C}):null]}),R&&e(u,{node:R,className:"pdp-product__info-content"})]}),s&&e(u,{node:s,className:"pdp-product__content"}),E===null?null:e(It,{className:"pdp-product__overlay",onClose:()=>S(null),centered:!0,children:e(g,{className:"pdp-product__overlay__carousel",arrows:(d==null?void 0:d.length)>1,width:"100%",height:"100%",defaultIndex:E||0,loop:(n==null?void 0:n.loopable)&&(d==null?void 0:d.length)>1,controls:(d==null?void 0:d.length)>1?"dots":null,isZoomed:!0,children:O})})]})},st=({children:i,gap:y=null,className:M,style:R,...s})=>{const T=it.count(i);return e("div",{...s,className:N(["pdp-gallery-grid",M]),style:{"--gap":y?`var(--spacing-${y})`:"0px",...R},children:it.map(i,(w,V)=>e("div",{className:"pdp-gallery-grid__item",children:e(u,{node:w,loading:V===0?"eager":"lazy"},w.props.src)},T+V))})},Tt=({sku:i,hideSku:y,hideQuantity:M,hideShortDescription:R,hideDescription:s,hideAttributes:T,hideURLParams:w,hideSelectedOptionValue:V,slots:r,children:C,initialData:d,carousel:h,optionsConfig:A,useACDL:G,onAddToCart:H,zoomType:lt,closeButton:F=!0,...J})=>{var P,D,Z,ht;const n=L("PDP.Product.AddToCart.label").label,tt=L("PDP.Product.Incrementer.label").label,et=L("PDP.Product.Details.label").label,[I,nt]=z(Dt.getConfig().defaultLocale||"en-US"),[rt,pt]=z(),[t=null,E]=z(d),[S,O]=z(()=>{const p=kt()??{sku:i,quantity:1};return t!=null&&t.optionUIDs&&(p.optionsUIDs=t.optionUIDs),p}),[k,j]=z(()=>{var p,c;return!(t!=null&&t.options&&((p=t==null?void 0:t.options)==null?void 0:p.length)>0&&((c=t==null?void 0:t.optionUIDs)==null?void 0:c.length)!==(t==null?void 0:t.options.length))}),m={data:t,values:S,valid:k};function Q(p){return p==null?void 0:p.some(c=>(c==null?void 0:c.typename)==="ProductViewOptionValueProduct")}K(()=>{const p=bt.on("pdp/setValues",c=>{O(l=>({...l,...c}))});return()=>{p==null||p.off()}},[]),K(()=>{const p=bt.on("locale",c=>{c!==I&&(nt(c),At(i,{anchors:A==null?void 0:A.anchorOptions}).then(E))});return()=>{p==null||p.off()}},[I,i]),K(()=>{G&&d&&Object.keys(d).length>0&&ut(d)},[d]);const q=f(p=>{O(c=>({...c,...p}))},[]);K(()=>{Bt(()=>S)},[JSON.stringify(S)]),K(()=>{Ut(()=>k)},[k]);const $=f(p=>{var o,_;let c=Object.keys(p).map(a=>p[a].value).filter(a=>a!==void 0);!w&&(t!=null&&t.options)&&!Q(t.options)&&wt({optionsUIDs:c.join(",")}),q({optionsUIDs:c}),j((c==null?void 0:c.length)===((o=t==null?void 0:t.options)==null?void 0:o.length));const l=(_=t==null?void 0:t.options)==null?void 0:_.some(a=>Q([a]));Vt(i,c,A==null?void 0:A.anchorOptions,l).then(a=>{var U;E(a),(U=A==null?void 0:A.anchorOptions)!=null&&U.length&&W(a,c),G&&(a==null?void 0:a.variantSku)!==i&&ut(a)})},[i]),W=f((p,c)=>{var _;const l=(p==null?void 0:p.optionUIDs)??[];c.every(a=>l.includes(a))||(pt(p==null?void 0:p.options),q({optionsUIDs:l}),j((l==null?void 0:l.length)===((_=p==null?void 0:p.options)==null?void 0:_.length)))},[i]),X=f(p=>{Object.keys(p).length!==0&&j(!1)},[]),B=St(()=>{var p;return(p=t==null?void 0:t.attributes)==null?void 0:p.map(({label:c,value:l},o)=>{const _=Lt(l)?Mt(l,I):l.toString();return v("li",{children:[c,": ",e("span",{dangerouslySetInnerHTML:{__html:_}})]},o)})},[t==null?void 0:t.attributes,I]),Y=!M&&(t!=null&&t.inStock)?e(b,{name:"Quantity",slot:r==null?void 0:r.Quantity,context:{...m},children:e(Nt,{name:"quantity",defaultValue:S.quantity.toString(),value:S.quantity.toString(),min:1,"aria-label":tt,className:"pdp-product__quantity",onValue:p=>{q({quantity:Number(p)})}},"quantity")}):void 0,x=()=>{if(t!=null&&t.options)return e(b,{name:"Options",slot:r==null?void 0:r.Options,context:{...m},children:e(Ot,{selectedUIDs:S.optionsUIDs,options:t.options,defaultOptions:S.optionsUIDs,selectionsToUpdate:rt,hideSelectedValue:V,onValues:$,onErrors:X})})};return e("div",{...J,children:e(Rt,{title:e(b,{name:"Title",slot:r==null?void 0:r.Title,context:{...m},children:t==null?void 0:t.name}),sku:y?void 0:e(b,{name:"SKU",slot:r==null?void 0:r.SKU,context:{...m},children:t==null?void 0:t.sku}),options:x(),breadcrumbs:(r==null?void 0:r.Breadcrumbs)&&e(b,{name:"Breadcrumbs",slot:r==null?void 0:r.Breadcrumbs,context:{...m,setSeparator(p){this._registerMethod((...c)=>{const l=p(...c),o=l&&e(ct,{source:l});this._setProps(_=>({..._,separator:o,children:[e(dt,{separator:o,categories:_.categories})]}))})},appendLink(p){this._registerMethod((...c)=>{const{text:l,...o}=p(...c),_=e("a",{...o,children:l});this._setProps(a=>{const U=[...a.categories||[],_];return{...a,categories:U,children:[e(dt,{separator:a.separator,categories:U})]}})})},appendHTMLElement(p){this._registerMethod((...c)=>{const l=p(...c),o=this._htmlElementToVNode(l);this._setProps(_=>{const a=[..._.categories||[],o];return{..._,categories:a,children:[e(dt,{separator:_.separator,categories:a})]}})})}}}),quantity:Y,actions:e(b,{name:"Actions",slot:r==null?void 0:r.Actions,context:{...m,appendButton(p){this._registerMethod((...c)=>{const l=p(...c);if(!l)return;const{text:o,icon:_,...a}=l,U=e(ot,{type:"button",...a,icon:_&&e(ct,{source:_}),children:o});this._setProps(Pt=>({children:[...Pt.children||[],U]}))})}},children:!(r!=null&&r.Actions)&&e(ot,{size:"medium",type:"submit",icon:e(ct,{source:"Cart"}),disabled:!(t!=null&&t.inStock)||!k,"aria-label":n,onClick:()=>H==null?void 0:H(S),children:n})}),shortDescription:R?void 0:e(b,{name:"ShortDescription",slot:r==null?void 0:r.ShortDescription,context:{...m},children:e("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.shortDescription)??""}})}),description:s?void 0:e(b,{name:"Description",slot:r==null?void 0:r.Description,context:{...m},children:e("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.description)??""}})}),images:((P=t==null?void 0:t.images)==null?void 0:P.map(({label:p,url:c})=>{var l,o;return e(_t,{title:p,alt:p,src:c,width:((l=h==null?void 0:h.imageParams)==null?void 0:l.width)??960,height:((o=h==null?void 0:h.imageParams)==null?void 0:o.height)??1191,params:(h==null?void 0:h.imageParams)??{width:960}},c)}))??[],specialPrice:(D=t==null?void 0:t.prices)!=null&&D.visible?e(b,{name:"SpecialPrice",slot:r==null?void 0:r.SpecialPrice,context:{...m},children:e(mt,{...t.prices.final,locale:at(I)})}):void 0,price:(Z=t==null?void 0:t.prices)!=null&&Z.visible&&t.prices.regular&&t.prices.final.amount!==(t==null?void 0:t.prices.regular.amount)?e(b,{name:"RegularPrice",slot:r==null?void 0:r.RegularPrice,context:{...m},children:e(mt,{...t.prices.regular,locale:at(I)})}):void 0,zoomType:lt,closeButton:F,carouselConfig:{...h,thumbnails:h&&Object.keys(h).length?((ht=t==null?void 0:t.images)==null?void 0:ht.map(({label:p,url:c})=>{var l,o;return e(_t,{title:p,alt:p,src:c,width:((l=h==null?void 0:h.thumbnailParams)==null?void 0:l.width)??200,height:((o=h==null?void 0:h.thumbnailParams)==null?void 0:o.height)??248,params:(h==null?void 0:h.thumbnailParams)??{width:200}},c)}))??[]:[]},outOfStock:!(t!=null&&t.inStock),attributes:T?void 0:e(b,{name:"Attributes",slot:r==null?void 0:r.Attributes,context:{...m},children:B!=null&&B.length?v(yt,{children:[et,e("ul",{children:B})]}):null}),galleryContent:(r==null?void 0:r.GalleryContent)&&e(b,{name:"GalleryContent",slot:r.GalleryContent,context:{...m}}),infoContent:(r==null?void 0:r.InfoContent)&&e(b,{name:"InfoContent",slot:r.InfoContent,context:{...m}}),productContent:(r==null?void 0:r.Content)&&e(b,{name:"Content",slot:r.Content,context:{...m}})})})};Tt.getInitialData=async function({sku:i,optionsConfig:y}){return await At(i,{anchors:y==null?void 0:y.anchorOptions})};export{Tt as ProductDetails,Tt as default};
