(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,Z=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),ce=new WeakMap;let Ae=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Z&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ce.set(t,e))}return e}toString(){return this.cssText}};const Me=s=>new Ae(typeof s=="string"?s:s+"",void 0,Q),Ne=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Ae(t,s,Q)},Re=(s,e)=>{if(Z)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=R.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},le=Z?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Me(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Le,defineProperty:He,getOwnPropertyDescriptor:qe,getOwnPropertyNames:De,getOwnPropertySymbols:ke,getPrototypeOf:ze}=Object,f=globalThis,de=f.trustedTypes,Fe=de?de.emptyScript:"",B=f.reactiveElementPolyfillSupport,P=(s,e)=>s,H={toAttribute(s,e){switch(e){case Boolean:s=s?Fe:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},X=(s,e)=>!Le(s,e),he={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&He(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=qe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,i=[...De(t),...ke(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(le(r))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:H).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:H;this._$Em=r,this[r]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??X)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,B==null||B({ReactiveElement:w}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,q=C.trustedTypes,pe=q?q.createPolicy("lit-html",{createHTML:s=>s}):void 0,Se="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+g,Be=`<${Ee}>`,b=document,T=()=>b.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",ee=Array.isArray,We=s=>ee(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",W=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,me=/>/g,y=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,fe=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Ke=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),Ce=Ke(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ye=new WeakMap,$=b.createTreeWalker(b,129);function Te(s,e){if(!ee(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return pe!==void 0?pe.createHTML(e):e}const Ve=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=E;for(let c=0;c<t;c++){const a=s[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===E?h[1]==="!--"?o=ue:h[1]!==void 0?o=me:h[2]!==void 0?(Pe.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=y):h[3]!==void 0&&(o=y):o===y?h[0]===">"?(o=r??E,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?y:h[3]==='"'?fe:ge):o===fe||o===ge?o=y:o===ue||o===me?o=E:(o=y,r=void 0);const m=o===y&&s[c+1].startsWith("/>")?" ":"";n+=o===E?a+Be:d>=0?(i.push(l),a.slice(0,d)+Se+a.slice(d)+g+m):a+g+(d===-2?c:m)}return[Te(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class x{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Ve(e,t);if(this.el=x.createElement(l,i),$.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=$.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Se)){const u=h[o++],m=r.getAttribute(d).split(g),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:M[2],strings:m,ctor:M[1]==="."?Ye:M[1]==="?"?Je:M[1]==="@"?Ze:D}),r.removeAttribute(d)}else d.startsWith(g)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(Pe.test(r.tagName)){const d=r.textContent.split(g),u=d.length-1;if(u>0){r.textContent=q?q.emptyScript:"";for(let m=0;m<u;m++)r.append(d[m],T()),$.nextNode(),a.push({type:2,index:++n});r.append(d[u],T())}}}else if(r.nodeType===8)if(r.data===Ee)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:n}),d+=g.length-1}n++}}static createElement(e,t){const i=b.createElement("template");return i.innerHTML=e,i}}function S(s,e,t=s,i){var o,c;if(e===A)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=O(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=S(s,r._$AS(s,e.values),r,i)),e}class Ge{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??b).importNode(t,!0);$.currentNode=r;let n=$.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new I(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Qe(n,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=$.nextNode(),o++)}return $.currentNode=b,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),O(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):We(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=x.createElement(Te(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Ge(r,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new x(e)),t}k(e){ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new I(this.O(T()),this.O(T()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=S(this,e,t,0),o=!O(e)||e!==this._$AH&&e!==A,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=S(this,c[i+a],t,a),l===A&&(l=this._$AH[a]),o||(o=!O(l)||l!==this._$AH[a]),l===p?e=p:e!==p&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ye extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Je extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ze extends D{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??p)===A)return;const i=this._$AH,r=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Qe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const K=C.litHtmlPolyfillSupport;K==null||K(x,I),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Xe=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new I(e.insertBefore(T(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}};var ve;v._$litElement$=!0,v.finalized=!0,(ve=globalThis.litElementHydrateSupport)==null||ve.call(globalThis,{LitElement:v});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:X},tt=(s=et,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,s)},init(c){return c!==void 0&&this.P(o,void 0,s),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function te(s){return(e,t)=>typeof t=="object"?tt(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(s,e){return(t,i,r)=>{const n=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(s))??null};return st(t,i,{get(){return n(this)}})}}const _e=s=>ot(s)||nt(s)||rt(s)||it(),it=()=>{throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},rt=(s,e=1)=>{if(s){if(typeof s=="string")return J(s,e);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(s,e)}},nt=s=>{if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)},ot=s=>{if(Array.isArray(s))return J(s)},J=(s,e=1)=>{(e==null||e>s.length)&&(e=s.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=s[t];return i},at=function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},ct=function(e){e.code==="KeyF"&&(console.log("launching fullscreen"),at(document.documentElement))};document.addEventListener("keydown",ct,!1);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,k=(s,e,t,i)=>{for(var r=i>1?void 0:i?dt(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&lt(e,t,r),r};let U=class extends v{constructor(){super(...arguments),this.title="",this.color="primary",this.disabled=!1}static get styles(){return[Ne`
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
      `]}render(){return Ce`
      <button class="btn ${this.color}" ?disabled="${this.disabled}">
        ${this.title}
      </button>
    `}};k([te({type:String,attribute:"button-title"})],U.prototype,"title",2);k([te({type:String,attribute:"button-color"})],U.prototype,"color",2);k([te({type:Boolean,attribute:"button-disabled"})],U.prototype,"disabled",2);U=k([Oe("x-my-button")],U);const ht=500,pt=20,ut=300,mt="https://stackblitz.com",$e=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],gt=["project","search","ports","settings"],ft=["light","dark"],yt=["editor","preview"],be={clickToLoad:s=>_("ctl",s),devToolsHeight:s=>we("devtoolsheight",s),forceEmbedLayout:s=>_("embed",s),hideDevTools:s=>_("hidedevtools",s),hideExplorer:s=>_("hideExplorer",s),hideNavigation:s=>_("hideNavigation",s),openFile:s=>N("file",s),showSidebar:s=>_t("showSidebar",s),sidebarView:s=>G("sidebarView",s,gt),startScript:s=>N("startScript",s),terminalHeight:s=>we("terminalHeight",s),theme:s=>G("theme",s,ft),view:s=>G("view",s,yt),zenMode:s=>_("zenMode",s),organization:s=>`${N("orgName",s==null?void 0:s.name)}&${N("orgProvider",s==null?void 0:s.provider)}`,crossOriginIsolated:s=>_("corp",s)};function xe(s={}){const e=Object.entries(s).map(([t,i])=>i!=null&&be.hasOwnProperty(t)?be[t](i):"").filter(Boolean);return e.length?`?${e.join("&")}`:""}function _(s,e){return e===!0?`${s}=1`:""}function _t(s,e){return typeof e=="boolean"?`${s}=${e?"1":"0"}`:""}function we(s,e){if(typeof e=="number"&&!Number.isNaN(e)){const t=Math.min(100,Math.max(0,e));return`${s}=${encodeURIComponent(Math.round(t))}`}return""}function G(s,e="",t=[]){return t.includes(e)?`${s}=${encodeURIComponent(e)}`:""}function N(s,e){return(Array.isArray(e)?e:[e]).filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`${s}=${encodeURIComponent(i)}`).join("&")}function Ue(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ie(s,e){return`${je(e)}${s}${xe(e)}`}function re(s,e){const t={forceEmbedLayout:!0};return e&&typeof e=="object"&&Object.assign(t,e),`${je(t)}${s}${xe(t)}`}function je(s={}){return(typeof s.origin=="string"?s.origin:mt).replace(/\/$/,"")}function ne(s,e,t){if(!e||!s||!s.parentNode)throw new Error("Invalid Element");s.id&&(e.id=s.id),s.className&&(e.className=s.className),$t(e,t),bt(s,e,t),s.replaceWith(e)}function oe(s){if(typeof s=="string"){const e=document.getElementById(s);if(!e)throw new Error(`Could not find element with id '${s}'`);return e}else if(s instanceof HTMLElement)return s;throw new Error(`Invalid element: ${s}`)}function ae(s){return s&&s.newWindow===!1?"_self":"_blank"}function $t(s,e={}){const t=Object.hasOwnProperty.call(e,"height")?`${e.height}`:`${ut}`,i=Object.hasOwnProperty.call(e,"width")?`${e.width}`:void 0;s.setAttribute("height",t),i?s.setAttribute("width",i):s.setAttribute("style","width:100%;")}function bt(s,e,t={}){var r,n;const i=((n=(r=s.allow)==null?void 0:r.split(";"))==null?void 0:n.map(o=>o.trim()))??[];t.crossOriginIsolated&&!i.includes("cross-origin-isolated")&&i.push("cross-origin-isolated"),i.length>0&&(e.allow=i.join("; "))}class wt{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise((i,r)=>{const n=Ue();this.pending[n]={resolve:i,reject:r},this.port.postMessage({type:e,payload:{...t,__reqid:n}})})}messageListener(e){var c;if(typeof((c=e.data.payload)==null?void 0:c.__reqid)!="string")return;const{type:t,payload:i}=e.data,{__reqid:r,__success:n,__error:o}=i;this.pending[r]&&(n?this.pending[r].resolve(this.cleanResult(i)):this.pending[r].reject(o?`${t}: ${o}`:t),delete this.pending[r])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class vt{constructor(e,t){this.editor={openFile:i=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:i}}),setCurrentFile:i=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:i}}),setTheme:i=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:i}}),setView:i=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:i}}),showSidebar:(i=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:i}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(i=>(i==null?void 0:i.url)??null),setUrl:(i="/")=>{if(typeof i!="string"||!i.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${i}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:i}})}},this._rdc=new wt(e),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin=="string"?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=i=>i!==null&&typeof i=="object";if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const L=[];class At{constructor(e){this.id=Ue(),this.element=e,this.pending=new Promise((t,i)=>{const r=({data:l,ports:h})=>{(l==null?void 0:l.action)==="SDK_INIT_SUCCESS"&&l.id===this.id&&(this.vm=new vt(h[0],l.payload),t(this.vm),o())},n=()=>{var l;(l=this.element.contentWindow)==null||l.postMessage({action:"SDK_INIT",id:this.id},"*")};function o(){window.clearInterval(a),window.removeEventListener("message",r)}window.addEventListener("message",r),n();let c=0;const a=window.setInterval(()=>{if(this.vm){o();return}if(c>=pt){o(),i("Timeout: Unable to establish a connection with the StackBlitz VM"),L.forEach((l,h)=>{l.id===this.id&&L.splice(h,1)});return}c++,n()},ht)}),L.push(this)}}const St=s=>{const e=s instanceof Element?"element":"id";return L.find(t=>t[e]===s)??null};function Et(s,e){const t=document.createElement("input");return t.type="hidden",t.name=s,t.value=e,t}function Pt(s){return s.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Ie({template:s,title:e,description:t,dependencies:i,files:r,settings:n}){if(!$e.includes(s)){const l=$e.map(h=>`'${h}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${l}`)}const o=[],c=(l,h,d="")=>{o.push(Et(l,typeof h=="string"?h:d))};c("project[title]",e),typeof t=="string"&&t.length>0&&c("project[description]",t),c("project[template]",s,"javascript"),i&&(s==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),n&&c("project[settings]",JSON.stringify(n)),Object.entries(r).forEach(([l,h])=>{c(`project[files][${Pt(l)}]`,h)});const a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.append(...o),a}function Ct(s,e){const t=Ie(s);return t.action=re("/run",e),t.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${t.outerHTML}
  <script>document.getElementById('${t.id}').submit();<\/script>
</body>
</html>`}function Tt(s,e){const t=Ie(s);t.action=ie("/run",e),t.target=ae(e),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}function z(s){return s!=null&&s.contentWindow?(St(s)??new At(s)).pending:Promise.reject("Provided element is not an iframe.")}function Ot(s,e){Tt(s,e)}function xt(s,e){const t=ie(`/edit/${s}`,e),i=ae(e);window.open(t,i)}function Ut(s,e){const t=ie(`/github/${s}`,e),i=ae(e);window.open(t,i)}function jt(s,e,t){var o;const i=oe(s),r=Ct(e,t),n=document.createElement("iframe");return ne(i,n,t),(o=n.contentDocument)==null||o.write(r),z(n)}function It(s,e,t){const i=oe(s),r=document.createElement("iframe");return r.src=re(`/edit/${e}`,t),ne(i,r,t),z(r)}function Mt(s,e,t){const i=oe(s),r=document.createElement("iframe");return r.src=re(`/github/${e}`,t),ne(i,r,t),z(r)}const Y={connect:z,embedGithubProject:Mt,embedProject:jt,embedProjectId:It,openGithubProject:Ut,openProject:Ot,openProjectId:xt};var Nt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,F=(s,e,t,i)=>{for(var r=i>1?void 0:i?Rt(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Nt(e,t,r),r};let j=class extends v{createRenderRoot(){return this}firstUpdated(s){super.firstUpdated(s),this.initSlideNav(),Y.embedProjectId(this.stackBlitzAngularEmbed,"angular-with-signals",{forceEmbedLayout:!0,openFile:"src/counter.ts"}),Y.embedProjectId(this.stackBlitzLitEmbed,"lit-with-complex-preact-signal-state",{forceEmbedLayout:!0,openFile:"src/my-element.ts"}),Y.embedProjectId(this.stackBlitzReactEmbed,"react-signals-counter",{forceEmbedLayout:!0,openFile:"src/SignalCounter.tsx"})}initSlideNav(){const s=function(n){window.location.hash===""||window.location.hash==="#start"?t(n):i(n)},e=document.querySelectorAll("section").length;document.body.addEventListener("keydown",s,!1);const t=function(n){(n.code==="Space"||n.code==="ArrowRight"||n.code==="Period")&&(window.location.hash="#slide1")},i=r=>{const n=window.location.hash==="#slide1",o=window.location.hash==="#slide"+(e-1),c=document.querySelector('[id^="slide"]:target'),a=parseInt(c.getAttribute("id").substring(5));if(c&&!o&&(r.code==="Space"||r.code==="ArrowRight"||r.code==="PageDown")&&(window.location.hash="slide"+(a+1)),!n&&(r.code==="ArrowLeft"||r.code==="PageUp")&&(window.location.hash="slide"+(a-1)),o&&r.code==="KeyR"&&(window.location.hash="#start"),c&&r.code==="Period"){const l=window.location.hash;if(document.querySelector(l+" .revealable")){const d=_e(document.querySelectorAll(l+" .revealable .fragment"));d[0]&&d[0].classList.remove("fragment")}}if(c&&r.code==="Comma"){const l=window.location.hash;if(document.querySelector(l+" .revealable"))return _e(document.querySelectorAll(l+" .revealable li")).forEach(function(m){m.classList.add("fragment")})}}}render(){return Ce`
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
            <a href="#slide9">
              <img
                src="src/assets/javascript-signals.png"
                alt="javascript signals image"
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
          <h1>JavaScript Signals</h1>
          <img
            src="src/assets/javascript-signals.png"
            alt="javascript signals image"
            class="workers"
          />
        </div>
      </section>

      <section id="slide10">
        <div class="o-wrapper">
          <h1>So what are they?</h1>
        </div>
      </section>

      <section id="slide11">
        <div class="o-wrapper">
          <h1>So what are they?</h1>
          <p>Signals are data structures for managing observable state.</p>
        </div>
      </section>

      <section id="slide12">
        <div class="o-wrapper">
          <h1>What Can I Store in Signals?</h1>
          <ul>
            <li>Single Value</li>
            <li>Computed Value</li>
          </ul>
        </div>
      </section>

      <section id="slide13">
        <div class="o-wrapper">
          <h1>TC39 Proposal</h1>
          <img src="" alt="tc39" />
        </div>
      </section>

      <section id="slide14">
        <div class="o-wrapper">
          <h1>Why should I Care about TC39?</h1>
          <img
            src="https://media.tenor.com/5SKA5XuifgoAAAAM/swedish-chef-baking.gif"
            alt="swedish chef"
          />
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHplYjUwNWk0Yms5NXdqN2p2NzdiMzBqeGN5MzR1eWo0YWU1eTZnNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YtBXZvSRdgqq7m/giphy.gif"
            alt="bake off chef"
          />
        </div>
      </section>
      <section id="slide15">
        <div class="o-wrapper">
          <h1>How Do they work?</h1>
          <p>
            What is the first thing that comes to mind when you think about a
            signal?
          </p>
        </div>
      </section>
      <section id="slide16">
        <div class="o-wrapper">
          <h1>Pub/Sub?</h1>
          <img src="src/assets/signals/pubsub-diagram.png" alt="pub sub" />
        </div>
      </section>
      <section id="slide17">
        <div class="o-wrapper">
          <img
            src="https://media.tenor.com/Bw7zUTWpZtgAAAAM/pissed.gif"
            alt="john c reilly"
          />
          <h1>How do they work, really?</h1>
          There are only two main units:

          <ol>
            <li>Publishers — Components that triggered the events.</li>
            <li>
              Subscribers — Components that listen for specific signals and
              react accordingly.
            </li>
          </ol>

          <img
            src="src/assets/signals/amazon-example.png"
            alt="amazon example"
          />
        </div>
      </section>
      <section id="slide18">
        <div class="o-wrapper">
          <h1>When Should I Use Signals?</h1>
          <ol>
            <li>
              You need direct communication between components without the
              complexity of an intermediary event bus.
            </li>
            <li>
              Efficiency, modularity, and scalability are priorities in your
              application architecture.
            </li>
          </ol>
          <img
            src="https://media.tenor.com/h38lEyHLgcMAAAAM/radio-national-radio-day.gif"
            alt="radio tune in"
          />
        </div>
      </section>

      <section id="slide19">
        <div class="o-wrapper">
          <h1>Basic Implementation Examples</h1>
          <img
            src="https://media.tenor.com/drKuhgBblzcAAAAM/anton-hacker.gif"
            alt="nerd hacking"
          />
        </div>
      </section>
      <section id="slide20">
        <div class="o-wrapper">
          <h1>Creating a new Signal</h1>
          <img src="src/assets/signals/new-signal.png" alt="new signal" />
        </div>
      </section>
      <section id="slide21">
        <div class="o-wrapper">
          <h1>New Computed Signal</h1>
          <img
            src="src/assets/signals/new-computed-signal.png"
            alt="new computed signal"
          />
        </div>
      </section>
      <section id="slide22">
        <div class="o-wrapper">
          <h1>New Watcher</h1>
          <img src="src/assets/signals/new-watcher.png" alt="new watcher" />
        </div>
      </section>
      <section id="slide23">
        <div class="o-wrapper">
          <h1>Getting a computed signal</h1>
          <img
            src="src/assets/signals/computed-signal-get.png"
            alt="getting a computed signal"
          />
        </div>
      </section>

      <section id="slide24">
        <div class="o-wrapper">
          <h1>Angular Example</h1>
          <img
            src="src/assets/signals/angular-signals.png"
            alt="angular signals"
          />
        </div>
      </section>

      <section id="slide25">
        <div class="o-wrapper">
          <h1>Angular with Signals</h1>
        </div>
      </section>

      <section id="slide26">
        <div class="o-wrapper">
          <h1>React Example</h1>
          <img src="src/assets/signals/react-signals.png" alt="react signals" />
        </div>
      </section>

      <section id="slide27">
        <div class="o-wrapper">
          <h1>React Example</h1>
        </div>
      </section>

      <section id="slide28">
        <div class="o-wrapper">
          <h1>More Complex - Lit Example</h1>
          <img src="src/assets/signals/lit-signals.png" alt="lit signals" />
        </div>
      </section>

      <section id="slide29">
        <div class="o-wrapper">
          <h1>Lit with Signals</h1>
        </div>
      </section>

      <section id="slide30">
        <div class="o-wrapper">
          <h1>Plugging my other articles:</h1>
          <img
            class="qr-code"
            src="src/assets/qr-code-multi-threading-the-web.png"
            alt="multi threading the web qr code"
          />
        </div>
      </section>

      <section id="slide31">
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
    `}};F([se("#slide25 > .o-wrapper")],j.prototype,"stackBlitzAngularEmbed",2);F([se("#slide27 > .o-wrapper")],j.prototype,"stackBlitzReactEmbed",2);F([se("#slide29 > .o-wrapper")],j.prototype,"stackBlitzLitEmbed",2);j=F([Oe("presentation-slides")],j);
