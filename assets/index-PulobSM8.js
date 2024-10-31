(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,J=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),nt=new WeakMap;let bt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&nt.set(e,t))}return t}toString(){return this.cssText}};const xt=s=>new bt(typeof s=="string"?s:s+"",void 0,Q),It=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new bt(e,s,Q)},Mt=(s,t)=>{if(J)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=N.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},ot=J?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return xt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nt,defineProperty:Rt,getOwnPropertyDescriptor:Lt,getOwnPropertyNames:Dt,getOwnPropertySymbols:Ht,getPrototypeOf:qt}=Object,g=globalThis,ct=g.trustedTypes,Ft=ct?ct.emptyScript:"",z=g.reactiveElementPolyfillSupport,P=(s,t)=>s,L={toAttribute(s,t){switch(t){case Boolean:s=s?Ft:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},X=(s,t)=>!Nt(s,t),at={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Rt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=Lt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,i=[...Dt(e),...Ht(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(ot(r))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:L;this._$Em=r,this[r]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??X)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,z==null||z({ReactiveElement:w}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,D=C.trustedTypes,lt=D?D.createPolicy("lit-html",{createHTML:s=>s}):void 0,wt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+f,zt=`<${vt}>`,b=document,T=()=>b.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",Z=Array.isArray,kt=s=>Z(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",k=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ht=/>/g,y=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,At=/^(?:script|style|textarea|title)$/i,Bt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),St=Bt(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),mt=new WeakMap,$=b.createTreeWalker(b,129);function Et(s,t){if(!Z(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}const Wt=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=E;for(let a=0;a<e;a++){const c=s[a];let l,h,d=-1,p=0;for(;p<c.length&&(o.lastIndex=p,h=o.exec(c),h!==null);)p=o.lastIndex,o===E?h[1]==="!--"?o=dt:h[1]!==void 0?o=ht:h[2]!==void 0?(At.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=y):h[3]!==void 0&&(o=y):o===y?h[0]===">"?(o=r??E,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?y:h[3]==='"'?pt:ut):o===pt||o===ut?o=y:o===dt||o===ht?o=E:(o=y,r=void 0);const m=o===y&&s[a+1].startsWith("/>")?" ":"";n+=o===E?c+zt:d>=0?(i.push(l),c.slice(0,d)+wt+c.slice(d)+f+m):c+f+(d===-2?a:m)}return[Et(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const a=t.length-1,c=this.parts,[l,h]=Wt(t,e);if(this.el=U.createElement(l,i),$.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=$.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(wt)){const p=h[o++],m=r.getAttribute(d).split(f),I=/([.?@])?(.*)/.exec(p);c.push({type:1,index:n,name:I[2],strings:m,ctor:I[1]==="."?Vt:I[1]==="?"?Gt:I[1]==="@"?Jt:H}),r.removeAttribute(d)}else d.startsWith(f)&&(c.push({type:6,index:n}),r.removeAttribute(d));if(At.test(r.tagName)){const d=r.textContent.split(f),p=d.length-1;if(p>0){r.textContent=D?D.emptyScript:"";for(let m=0;m<p;m++)r.append(d[m],T()),$.nextNode(),c.push({type:2,index:++n});r.append(d[p],T())}}}else if(r.nodeType===8)if(r.data===vt)c.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(f,d+1))!==-1;)c.push({type:7,index:n}),d+=f.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function S(s,t,e=s,i){var o,a;if(t===A)return t;let r=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=S(s,r._$AS(s,t.values),r,i)),t}class Kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??b).importNode(e,!0);$.currentNode=r;let n=$.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new x(n,n.nextSibling,this,t):c.type===1?l=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(l=new Qt(n,this,t)),this._$AV.push(l),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=$.nextNode(),o++)}return $.currentNode=b,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class x{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),O(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(Et(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new Kt(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new U(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new x(this.O(T()),this.O(T()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const a=t;let c,l;for(t=n[0],c=0;c<n.length-1;c++)l=S(this,a[i+c],e,c),l===A&&(l=this._$AH[c]),o||(o=!O(l)||l!==this._$AH[c]),l===u?t=u:t!==u&&(t+=(l??"")+n[c+1]),this._$AH[c]=l}o&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Gt extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Jt extends H{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??u)===A)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Qt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const B=C.litHtmlPolyfillSupport;B==null||B(U,x),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Xt=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new x(t.insertBefore(T(),n),n,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}};var $t;v._$litElement$=!0,v.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:v});const W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:X},Yt=(s=Zt,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=e;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function Y(s){return(t,e)=>typeof e=="object"?Yt(s,t,e):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(s,t){return(e,i,r)=>{const n=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(s))??null};return te(e,i,{get(){return n(this)}})}}const ft=s=>ne(s)||re(s)||ie(s)||se(),se=()=>{throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ie=(s,t=1)=>{if(s){if(typeof s=="string")return V(s,t);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return V(s,t)}},re=s=>{if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)},ne=s=>{if(Array.isArray(s))return V(s)},V=(s,t=1)=>{(t==null||t>s.length)&&(t=s.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=s[e];return i},oe=function(t){t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},ce=function(t){t.code==="KeyF"&&(console.log("launching fullscreen"),oe(document.documentElement))};document.addEventListener("keydown",ce,!1);var ae=Object.defineProperty,le=Object.getOwnPropertyDescriptor,q=(s,t,e,i)=>{for(var r=i>1?void 0:i?le(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ae(t,e,r),r};let j=class extends v{constructor(){super(...arguments),this.title="",this.color="primary",this.disabled=!1}static get styles(){return[It`
        .btn {
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          padding: 0.5rem;
        }

        button[disabled] {
          cursor: not-allowed;
        }

        .primary {
          color: #000;
          background: PapayaWhip;
        }

        .secondary {
          background: rebeccapurple;
        }

        .danger {
          background: tomato;
        }

        .info {
          color: #000;
          background: skyblue;
        }

        .success {
          color: #000;
          background: MediumAquamarine;
        }
      `]}render(){return St`
      <button class="btn ${this.color}" ?disabled="${this.disabled}">
        ${this.title}
      </button>
    `}};q([Y({type:String,attribute:"button-title"})],j.prototype,"title",2);q([Y({type:String,attribute:"button-color"})],j.prototype,"color",2);q([Y({type:Boolean,attribute:"button-disabled"})],j.prototype,"disabled",2);j=q([Pt("x-my-button")],j);const de=500,he=20,ue=300,pe="https://stackblitz.com",gt=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],me=["project","search","ports","settings"],fe=["light","dark"],ge=["editor","preview"],yt={clickToLoad:s=>_("ctl",s),devToolsHeight:s=>_t("devtoolsheight",s),forceEmbedLayout:s=>_("embed",s),hideDevTools:s=>_("hidedevtools",s),hideExplorer:s=>_("hideExplorer",s),hideNavigation:s=>_("hideNavigation",s),openFile:s=>M("file",s),showSidebar:s=>ye("showSidebar",s),sidebarView:s=>K("sidebarView",s,me),startScript:s=>M("startScript",s),terminalHeight:s=>_t("terminalHeight",s),theme:s=>K("theme",s,fe),view:s=>K("view",s,ge),zenMode:s=>_("zenMode",s),organization:s=>`${M("orgName",s==null?void 0:s.name)}&${M("orgProvider",s==null?void 0:s.provider)}`,crossOriginIsolated:s=>_("corp",s)};function Ct(s={}){const t=Object.entries(s).map(([e,i])=>i!=null&&yt.hasOwnProperty(e)?yt[e](i):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function _(s,t){return t===!0?`${s}=1`:""}function ye(s,t){return typeof t=="boolean"?`${s}=${t?"1":"0"}`:""}function _t(s,t){if(typeof t=="number"&&!Number.isNaN(t)){const e=Math.min(100,Math.max(0,t));return`${s}=${encodeURIComponent(Math.round(e))}`}return""}function K(s,t="",e=[]){return e.includes(t)?`${s}=${encodeURIComponent(t)}`:""}function M(s,t){return(Array.isArray(t)?t:[t]).filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`${s}=${encodeURIComponent(i)}`).join("&")}function Tt(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function tt(s,t){return`${Ot(t)}${s}${Ct(t)}`}function et(s,t){const e={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(e,t),`${Ot(e)}${s}${Ct(e)}`}function Ot(s={}){return(typeof s.origin=="string"?s.origin:pe).replace(/\/$/,"")}function st(s,t,e){if(!t||!s||!s.parentNode)throw new Error("Invalid Element");s.id&&(t.id=s.id),s.className&&(t.className=s.className),_e(t,e),$e(s,t,e),s.replaceWith(t)}function it(s){if(typeof s=="string"){const t=document.getElementById(s);if(!t)throw new Error(`Could not find element with id '${s}'`);return t}else if(s instanceof HTMLElement)return s;throw new Error(`Invalid element: ${s}`)}function rt(s){return s&&s.newWindow===!1?"_self":"_blank"}function _e(s,t={}){const e=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${ue}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;s.setAttribute("height",e),i?s.setAttribute("width",i):s.setAttribute("style","width:100%;")}function $e(s,t,e={}){var r,n;const i=((n=(r=s.allow)==null?void 0:r.split(";"))==null?void 0:n.map(o=>o.trim()))??[];e.crossOriginIsolated&&!i.includes("cross-origin-isolated")&&i.push("cross-origin-isolated"),i.length>0&&(t.allow=i.join("; "))}class be{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:e}){return new Promise((i,r)=>{const n=Tt();this.pending[n]={resolve:i,reject:r},this.port.postMessage({type:t,payload:{...e,__reqid:n}})})}messageListener(t){var a;if(typeof((a=t.data.payload)==null?void 0:a.__reqid)!="string")return;const{type:e,payload:i}=t.data,{__reqid:r,__success:n,__error:o}=i;this.pending[r]&&(n?this.pending[r].resolve(this.cleanResult(i)):this.pending[r].reject(o?`${e}: ${o}`:e),delete this.pending[r])}cleanResult(t){const e={...t};return delete e.__reqid,delete e.__success,delete e.__error,Object.keys(e).length?e:null}}class we{constructor(t,e){this.editor={openFile:i=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:i}}),setCurrentFile:i=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:i}}),setTheme:i=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:i}}),setView:i=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:i}}),showSidebar:(i=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:i}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(i=>(i==null?void 0:i.url)??null),setUrl:(i="/")=>{if(typeof i!="string"||!i.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${i}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:i}})}},this._rdc=new be(t),Object.defineProperty(this.preview,"origin",{value:typeof e.previewOrigin=="string"?e.previewOrigin:null,writable:!1})}applyFsDiff(t){const e=i=>i!==null&&typeof i=="object";if(!e(t)||!e(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const R=[];class ve{constructor(t){this.id=Tt(),this.element=t,this.pending=new Promise((e,i)=>{const r=({data:l,ports:h})=>{(l==null?void 0:l.action)==="SDK_INIT_SUCCESS"&&l.id===this.id&&(this.vm=new we(h[0],l.payload),e(this.vm),o())},n=()=>{var l;(l=this.element.contentWindow)==null||l.postMessage({action:"SDK_INIT",id:this.id},"*")};function o(){window.clearInterval(c),window.removeEventListener("message",r)}window.addEventListener("message",r),n();let a=0;const c=window.setInterval(()=>{if(this.vm){o();return}if(a>=he){o(),i("Timeout: Unable to establish a connection with the StackBlitz VM"),R.forEach((l,h)=>{l.id===this.id&&R.splice(h,1)});return}a++,n()},de)}),R.push(this)}}const Ae=s=>{const t=s instanceof Element?"element":"id";return R.find(e=>e[t]===s)??null};function Se(s,t){const e=document.createElement("input");return e.type="hidden",e.name=s,e.value=t,e}function Ee(s){return s.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Ut({template:s,title:t,description:e,dependencies:i,files:r,settings:n}){if(!gt.includes(s)){const l=gt.map(h=>`'${h}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${l}`)}const o=[],a=(l,h,d="")=>{o.push(Se(l,typeof h=="string"?h:d))};a("project[title]",t),typeof e=="string"&&e.length>0&&a("project[description]",e),a("project[template]",s,"javascript"),i&&(s==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(i))),n&&a("project[settings]",JSON.stringify(n)),Object.entries(r).forEach(([l,h])=>{a(`project[files][${Ee(l)}]`,h)});const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...o),c}function Pe(s,t){const e=Ut(s);return e.action=et("/run",t),e.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${e.outerHTML}
  <script>document.getElementById('${e.id}').submit();<\/script>
</body>
</html>`}function Ce(s,t){const e=Ut(s);e.action=tt("/run",t),e.target=rt(t),document.body.appendChild(e),e.submit(),document.body.removeChild(e)}function F(s){return s!=null&&s.contentWindow?(Ae(s)??new ve(s)).pending:Promise.reject("Provided element is not an iframe.")}function Te(s,t){Ce(s,t)}function Oe(s,t){const e=tt(`/edit/${s}`,t),i=rt(t);window.open(e,i)}function Ue(s,t){const e=tt(`/github/${s}`,t),i=rt(t);window.open(e,i)}function je(s,t,e){var o;const i=it(s),r=Pe(t,e),n=document.createElement("iframe");return st(i,n,e),(o=n.contentDocument)==null||o.write(r),F(n)}function xe(s,t,e){const i=it(s),r=document.createElement("iframe");return r.src=et(`/edit/${t}`,e),st(i,r,e),F(r)}function Ie(s,t,e){const i=it(s),r=document.createElement("iframe");return r.src=et(`/github/${t}`,e),st(i,r,e),F(r)}const Me={connect:F,embedGithubProject:Ie,embedProject:je,embedProjectId:xe,openGithubProject:Ue,openProject:Te,openProjectId:Oe};var Ne=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,jt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Re(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Ne(t,e,r),r};let G=class extends v{createRenderRoot(){return this}firstUpdated(s){super.firstUpdated(s),this.initSlideNav(),Me.embedProjectId(this.slide9,"lit-with-complex-preact-signal-state",{forceEmbedLayout:!0,openFile:"src/my-element.ts"})}initSlideNav(){const s=function(n){window.location.hash===""||window.location.hash==="#start"?e(n):i(n)},t=document.querySelectorAll("section").length;document.body.addEventListener("keydown",s,!1);const e=function(n){(n.code==="Space"||n.code==="ArrowRight"||n.code==="Period")&&(window.location.hash="#slide1")},i=r=>{const n=window.location.hash==="#slide1",o=window.location.hash==="#slide"+(t-1),a=document.querySelector('[id^="slide"]:target'),c=parseInt(a.getAttribute("id").substring(5));if(a&&!o&&(r.code==="Space"||r.code==="ArrowRight"||r.code==="PageDown")&&(window.location.hash="slide"+(c+1)),!n&&(r.code==="ArrowLeft"||r.code==="PageUp")&&(window.location.hash="slide"+(c-1)),o&&r.code==="KeyR"&&(window.location.hash="#start"),a&&r.code==="Period"){const l=window.location.hash;if(document.querySelector(l+" .revealable")){const d=ft(document.querySelectorAll(l+" .revealable .fragment"));d[0]&&d[0].classList.remove("fragment")}}if(a&&r.code==="Comma"){const l=window.location.hash;if(document.querySelector(l+" .revealable"))return ft(document.querySelectorAll(l+" .revealable li")).forEach(function(m){m.classList.add("fragment")})}}}render(){return St`
      <section id="slide1">
        <div class="o-wrapper">
          <img src="src/assets/hey-sunglasses.png" alt="hey sunglasses" />

          <h2>About me! Who am I, really?</h2>
          <ul class="about-me-list">
            <li><img src="src/assets/brew-me-icon.png" alt="brew me" /></li>
            <li>
              <img
                src="src/assets/home-assistant-logo.svg"
                alt="home assistant"
              />
            </li>
            <li><img src="src/assets/movies-bitmoji.png" alt="movies" /></li>
            <li><img src="src/assets/wasm.webp" alt="wasm" /></li>
          </ul>
        </div>
      </section>

      <section id="slide2">
        <div class="o-wrapper">
          <div class="logo-wrapper">
            <a href="#slide3">
              <img
                src="src/assets/understanding-component-state.png"
                alt="understanding component state logo"
                class="c-logo-main"
              />
            </a>
            <a href="#slide28">
              <img
                src="src/assets/web-workers.jpg"
                alt="web workers image"
                class="workers"
              />
            </a>
          </div>

          <p>
            Medium:
            <a href="https://twitter.com/quincarter">@quincarter</a>
          </p>
          <p>
            Dev.to:
            <a href="https://dev.to/quincarter">@quincarter</a>
          </p>
          <p>
            Github:
            <a href="https://github.com/quincarter">@quincarter</a>
          </p>
        </div>
      </section>

      <section id="slide3">
        <div class="o-wrapper">
          <h1>What is State?</h1>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*z68I1WKuLbzbwEp0"
          />
        </div>
      </section>

      <section id="slide4">
        <div class="o-wrapper l-flex">
          <h1 class="l-title">Component State</h1>
          <p>
            Component state is the “value of specific properties in your
            component class at any given time in the component lifecycle.”
          </p>
          <div class="content">
            <ol>
              <li>Colors of a button</li>
              <li>Disabled or enabled state of a button</li>
              <li>Hover state, etc.</li>
            </ol>
            <img
              class="component-state-examples"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2p-gjLCAGiDA-JuDT_dx8g.png"
              alt="component state examples"
            />
          </div>
        </div>
      </section>

      <section id="slide5">
        <div class="o-wrapper">
          <h1>Button State!</h1>
          <x-my-button
            button-title="My Button Is Disabled"
            button-color="success"
            button-disabled
          ></x-my-button>

          <x-my-button
            button-title="My Button Is Enabled"
            button-color="secondary"
          ></x-my-button>
        </div>
      </section>

      <section id="slide6">
        <div class="o-wrapper">
          <h1>Lit Element Context API</h1>
          <figure>
            <img
              style="object-fit: contain"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4dUGT19XFJ9u66wiQn6ADQ.png"
              alt="Lit Element DOM Tree"
              class="c-logo-big"
            />
            <figcaption>
              Easy to Understand if you Know that the DOM is a Tree
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="slide7">
        <div class="o-wrapper">
          <h1>Want to mess with Context?</h1>
          <img
            class="qr-code"
            src="src/assets/qr-code-lit-context-demo-github.png"
            alt="qr for lit context"
          />
        </div>
      </section>

      <section id="slide8">
        <div class="o-wrapper">
          <h1>Read the Medium article:</h1>
          <img
            class="qr-code"
            src="src/assets/understanding-component-state-qr-code.png"
            alt="qr for lit context medium article"
          />
        </div>
      </section>
      <section id="slide9">
        <div class="o-wrapper">
          <h1>Lit with Signals</h1>
        </div>
      </section>

      <section id="slide49">
        <div class="o-wrapper">
          <h1>Multi-Threading The Web</h1>
          <img
            class="qr-code"
            src="src/assets/qr-code-multi-threading-the-web.png"
            alt="multi threading the web qr code"
          />
        </div>
      </section>

      <section id="slide50">
        <div class="o-wrapper">
          <img src="src/assets/qanda.jpeg" alt="Q & A" />
        </div>
      </section>

      <section id="start">
        <div class="start-container">
          <img
            class="start-image"
            src="src/assets/computer-reading.png"
            alt="Quin Reading"
          />
          <h1>Welcome! Have a Seat and we will get started shortly!</h1>
        </div>
      </section>
    `}};jt([ee("#slide9 > .o-wrapper")],G.prototype,"slide9",2);G=jt([Pt("presentation-slides")],G);
