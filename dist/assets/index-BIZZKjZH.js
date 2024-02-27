function wx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ix=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nT={exports:{}},Ad={},rT={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu=Symbol.for("react.element"),Ex=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),Sx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Px=Symbol.for("react.context"),Cx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),xx=Symbol.for("react.memo"),bx=Symbol.for("react.lazy"),f0=Symbol.iterator;function Nx(t){return t===null||typeof t!="object"?null:(t=f0&&t[f0]||t["@@iterator"],typeof t=="function"?t:null)}var iT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sT=Object.assign,oT={};function ca(t,e,n){this.props=t,this.context=e,this.refs=oT,this.updater=n||iT}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function aT(){}aT.prototype=ca.prototype;function ay(t,e,n){this.props=t,this.context=e,this.refs=oT,this.updater=n||iT}var ly=ay.prototype=new aT;ly.constructor=ay;sT(ly,ca.prototype);ly.isPureReactComponent=!0;var p0=Array.isArray,lT=Object.prototype.hasOwnProperty,uy={current:null},uT={key:!0,ref:!0,__self:!0,__source:!0};function cT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lT.call(e,r)&&!uT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nu,type:t,key:s,ref:o,props:i,_owner:uy.current}}function Dx(t,e){return{$$typeof:Nu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cy(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nu}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var m0=/\/+/g;function ep(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Kc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nu:case Ex:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ep(o,0):r,p0(i)?(n="",t!=null&&(n=t.replace(m0,"$&/")+"/"),Kc(i,e,n,"",function(u){return u})):i!=null&&(cy(i)&&(i=Dx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(m0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",p0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ep(s,a);o+=Kc(s,e,n,l,i)}else if(l=Nx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ep(s,a++),o+=Kc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dc(t,e,n){if(t==null)return t;var r=[],i=0;return Kc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},Hc={transition:null},Lx={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Hc,ReactCurrentOwner:uy};ne.Children={map:dc,forEach:function(t,e,n){dc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dc(t,function(){e++}),e},toArray:function(t){return dc(t,function(e){return e})||[]},only:function(t){if(!cy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ca;ne.Fragment=Tx;ne.Profiler=Ax;ne.PureComponent=ay;ne.StrictMode=Sx;ne.Suspense=kx;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lT.call(e,l)&&!uT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Nu,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:Px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rx,_context:t},t.Consumer=t};ne.createElement=cT;ne.createFactory=function(t){var e=cT.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:Cx,render:t}};ne.isValidElement=cy;ne.lazy=function(t){return{$$typeof:bx,_payload:{_status:-1,_result:t},_init:Vx}};ne.memo=function(t,e){return{$$typeof:xx,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Hc.transition;Hc.transition={};try{t()}finally{Hc.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return zt.current.useCallback(t,e)};ne.useContext=function(t){return zt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return zt.current.useEffect(t,e)};ne.useId=function(){return zt.current.useId()};ne.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return zt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};ne.useRef=function(t){return zt.current.useRef(t)};ne.useState=function(t){return zt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return zt.current.useTransition()};ne.version="18.2.0";rT.exports=ne;var x=rT.exports;const ie=tT(x),Mx=wx({__proto__:null,default:ie},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=x,$x=Symbol.for("react.element"),Ux=Symbol.for("react.fragment"),Bx=Object.prototype.hasOwnProperty,jx=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function hT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bx.call(e,r)&&!zx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$x,type:t,key:s,ref:o,props:i,_owner:jx.current}}Ad.Fragment=Ux;Ad.jsx=hT;Ad.jsxs=hT;nT.exports=Ad;var I=nT.exports,om={},dT={exports:{}},mn={},fT={exports:{}},pT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var G=V.length;V.push(B);e:for(;0<G;){var X=G-1>>>1,K=V[X];if(0<i(K,B))V[X]=B,V[G]=K,G=X;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var B=V[0],G=V.pop();if(G!==B){V[0]=G;e:for(var X=0,K=V.length,ue=K>>>1;X<ue;){var ke=2*(X+1)-1,tt=V[ke],Ge=ke+1,Nt=V[Ge];if(0>i(tt,G))Ge<K&&0>i(Nt,tt)?(V[X]=Nt,V[Ge]=G,X=Ge):(V[X]=tt,V[ke]=G,X=ke);else if(Ge<K&&0>i(Nt,G))V[X]=Nt,V[Ge]=G,X=Ge;else break e}}return B}function i(V,B){var G=V.sortIndex-B.sortIndex;return G!==0?G:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(V){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=V)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function w(V){if(_=!1,m(V),!y)if(n(l)!==null)y=!0,Ve(C);else{var B=n(u);B!==null&&me(w,B.startTime-V)}}function C(V,B){y=!1,_&&(_=!1,g(S),S=-1),f=!0;var G=d;try{for(m(B),h=n(l);h!==null&&(!(h.expirationTime>B)||V&&!W());){var X=h.callback;if(typeof X=="function"){h.callback=null,d=h.priorityLevel;var K=X(h.expirationTime<=B);B=t.unstable_now(),typeof K=="function"?h.callback=K:h===n(l)&&r(l),m(B)}else r(l);h=n(l)}if(h!==null)var ue=!0;else{var ke=n(u);ke!==null&&me(w,ke.startTime-B),ue=!1}return ue}finally{h=null,d=G,f=!1}}var T=!1,E=null,S=-1,A=5,k=-1;function W(){return!(t.unstable_now()-k<A)}function le(){if(E!==null){var V=t.unstable_now();k=V;var B=!0;try{B=E(!0,V)}finally{B?ge():(T=!1,E=null)}}else T=!1}var ge;if(typeof p=="function")ge=function(){p(le)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,We=Oe.port2;Oe.port1.onmessage=le,ge=function(){We.postMessage(null)}}else ge=function(){v(le,0)};function Ve(V){E=V,T||(T=!0,ge())}function me(V,B){S=v(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,Ve(C))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return V()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=d;d=V;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(V,B,G){var X=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?X+G:X):G=X,V){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=G+K,V={id:c++,callback:B,priorityLevel:V,startTime:G,expirationTime:K,sortIndex:-1},G>X?(V.sortIndex=G,e(u,V),n(l)===null&&V===n(u)&&(_?(g(S),S=-1):_=!0,me(w,G-X))):(V.sortIndex=K,e(l,V),y||f||(y=!0,Ve(C))),V},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(V){var B=d;return function(){var G=d;d=B;try{return V.apply(this,arguments)}finally{d=G}}}})(pT);fT.exports=pT;var qx=fT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mT=x,dn=qx;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gT=new Set,Ol={};function Os(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(Ol[t]=e,t=0;t<e.length;t++)gT.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),am=Object.prototype.hasOwnProperty,Wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g0={},y0={};function Gx(t){return am.call(y0,t)?!0:am.call(g0,t)?!1:Wx.test(t)?y0[t]=!0:(g0[t]=!0,!1)}function Kx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hx(t,e,n,r){if(e===null||typeof e>"u"||Kx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hy=/[\-:]([a-z])/g;function dy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hy,dy);Tt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hy,dy);Tt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hy,dy);Tt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fy(t,e,n,r){var i=Tt.hasOwnProperty(e)?Tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hx(e,n,i,r)&&(n=null),r||i===null?Gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=mT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fc=Symbol.for("react.element"),io=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),py=Symbol.for("react.strict_mode"),lm=Symbol.for("react.profiler"),yT=Symbol.for("react.provider"),_T=Symbol.for("react.context"),my=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),cm=Symbol.for("react.suspense_list"),gy=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),vT=Symbol.for("react.offscreen"),_0=Symbol.iterator;function Oa(t){return t===null||typeof t!="object"?null:(t=_0&&t[_0]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,tp;function Za(t){if(tp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tp=e&&e[1]||""}return`
`+tp+t}var np=!1;function rp(t,e){if(!t||np)return"";np=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{np=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Za(t):""}function Qx(t){switch(t.tag){case 5:return Za(t.type);case 16:return Za("Lazy");case 13:return Za("Suspense");case 19:return Za("SuspenseList");case 0:case 2:case 15:return t=rp(t.type,!1),t;case 11:return t=rp(t.type.render,!1),t;case 1:return t=rp(t.type,!0),t;default:return""}}function hm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case so:return"Fragment";case io:return"Portal";case lm:return"Profiler";case py:return"StrictMode";case um:return"Suspense";case cm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _T:return(t.displayName||"Context")+".Consumer";case yT:return(t._context.displayName||"Context")+".Provider";case my:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gy:return e=t.displayName||null,e!==null?e:hm(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return hm(t(e))}catch{}}return null}function Yx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hm(e);case 8:return e===py?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xx(t){var e=wT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pc(t){t._valueTracker||(t._valueTracker=Xx(t))}function IT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Th(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dm(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function v0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ET(t,e){e=e.checked,e!=null&&fy(t,"checked",e,!1)}function fm(t,e){ET(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pm(t,e.type,n):e.hasOwnProperty("defaultValue")&&pm(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function w0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pm(t,e,n){(e!=="number"||Th(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var el=Array.isArray;function wo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function I0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(el(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function TT(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function E0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ST(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ST(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mc,AT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mc=mc||document.createElement("div"),mc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jx=["Webkit","ms","Moz","O"];Object.keys(dl).forEach(function(t){Jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),dl[e]=dl[t]})});function RT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||dl.hasOwnProperty(t)&&dl[t]?(""+e).trim():e+"px"}function PT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=RT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zx=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ym(t,e){if(e){if(Zx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function _m(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vm=null;function yy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wm=null,Io=null,Eo=null;function T0(t){if(t=Vu(t)){if(typeof wm!="function")throw Error(D(280));var e=t.stateNode;e&&(e=xd(e),wm(t.stateNode,t.type,e))}}function CT(t){Io?Eo?Eo.push(t):Eo=[t]:Io=t}function kT(){if(Io){var t=Io,e=Eo;if(Eo=Io=null,T0(t),e)for(t=0;t<e.length;t++)T0(e[t])}}function xT(t,e){return t(e)}function bT(){}var ip=!1;function NT(t,e,n){if(ip)return t(e,n);ip=!0;try{return xT(t,e,n)}finally{ip=!1,(Io!==null||Eo!==null)&&(bT(),kT())}}function Ll(t,e){var n=t.stateNode;if(n===null)return null;var r=xd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Im=!1;if(wr)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Im=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Im=!1}function eb(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fl=!1,Sh=null,Ah=!1,Em=null,tb={onError:function(t){fl=!0,Sh=t}};function nb(t,e,n,r,i,s,o,a,l){fl=!1,Sh=null,eb.apply(tb,arguments)}function rb(t,e,n,r,i,s,o,a,l){if(nb.apply(this,arguments),fl){if(fl){var u=Sh;fl=!1,Sh=null}else throw Error(D(198));Ah||(Ah=!0,Em=u)}}function Vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function DT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S0(t){if(Vs(t)!==t)throw Error(D(188))}function ib(t){var e=t.alternate;if(!e){if(e=Vs(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return S0(i),t;if(s===r)return S0(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function OT(t){return t=ib(t),t!==null?VT(t):null}function VT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=VT(t);if(e!==null)return e;t=t.sibling}return null}var LT=dn.unstable_scheduleCallback,A0=dn.unstable_cancelCallback,sb=dn.unstable_shouldYield,ob=dn.unstable_requestPaint,Ke=dn.unstable_now,ab=dn.unstable_getCurrentPriorityLevel,_y=dn.unstable_ImmediatePriority,MT=dn.unstable_UserBlockingPriority,Rh=dn.unstable_NormalPriority,lb=dn.unstable_LowPriority,FT=dn.unstable_IdlePriority,Rd=null,nr=null;function ub(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Rd,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:db,cb=Math.log,hb=Math.LN2;function db(t){return t>>>=0,t===0?32:31-(cb(t)/hb|0)|0}var gc=64,yc=4194304;function tl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ph(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=tl(a):(s&=o,s!==0&&(r=tl(s)))}else o=n&~i,o!==0?r=tl(o):s!==0&&(r=tl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function fb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=fb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $T(){var t=gc;return gc<<=1,!(gc&4194240)&&(gc=64),t}function sp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Du(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function mb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function UT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var BT,wy,jT,zT,qT,Sm=!1,_c=[],ni=null,ri=null,ii=null,Ml=new Map,Fl=new Map,Wr=[],gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function R0(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":Ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(e.pointerId)}}function La(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vu(e),e!==null&&wy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yb(t,e,n,r,i){switch(e){case"focusin":return ni=La(ni,t,e,n,r,i),!0;case"dragenter":return ri=La(ri,t,e,n,r,i),!0;case"mouseover":return ii=La(ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ml.set(s,La(Ml.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fl.set(s,La(Fl.get(s)||null,t,e,n,r,i)),!0}return!1}function WT(t){var e=Xi(t.target);if(e!==null){var n=Vs(e);if(n!==null){if(e=n.tag,e===13){if(e=DT(n),e!==null){t.blockedOn=e,qT(t.priority,function(){jT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Am(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vm=r,n.target.dispatchEvent(r),vm=null}else return e=Vu(n),e!==null&&wy(e),t.blockedOn=n,!1;e.shift()}return!0}function P0(t,e,n){Qc(t)&&n.delete(e)}function _b(){Sm=!1,ni!==null&&Qc(ni)&&(ni=null),ri!==null&&Qc(ri)&&(ri=null),ii!==null&&Qc(ii)&&(ii=null),Ml.forEach(P0),Fl.forEach(P0)}function Ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Sm||(Sm=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,_b)))}function $l(t){function e(i){return Ma(i,t)}if(0<_c.length){Ma(_c[0],t);for(var n=1;n<_c.length;n++){var r=_c[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&Ma(ni,t),ri!==null&&Ma(ri,t),ii!==null&&Ma(ii,t),Ml.forEach(e),Fl.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)WT(n),n.blockedOn===null&&Wr.shift()}var To=Cr.ReactCurrentBatchConfig,Ch=!0;function vb(t,e,n,r){var i=de,s=To.transition;To.transition=null;try{de=1,Iy(t,e,n,r)}finally{de=i,To.transition=s}}function wb(t,e,n,r){var i=de,s=To.transition;To.transition=null;try{de=4,Iy(t,e,n,r)}finally{de=i,To.transition=s}}function Iy(t,e,n,r){if(Ch){var i=Am(t,e,n,r);if(i===null)mp(t,e,r,kh,n),R0(t,r);else if(yb(i,t,e,n,r))r.stopPropagation();else if(R0(t,r),e&4&&-1<gb.indexOf(t)){for(;i!==null;){var s=Vu(i);if(s!==null&&BT(s),s=Am(t,e,n,r),s===null&&mp(t,e,r,kh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mp(t,e,r,null,n)}}var kh=null;function Am(t,e,n,r){if(kh=null,t=yy(r),t=Xi(t),t!==null)if(e=Vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=DT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kh=t,null}function GT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ab()){case _y:return 1;case MT:return 4;case Rh:case lb:return 16;case FT:return 536870912;default:return 16}default:return 16}}var Yr=null,Ey=null,Yc=null;function KT(){if(Yc)return Yc;var t,e=Ey,n=e.length,r,i="value"in Yr?Yr.value:Yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yc=i.slice(t,1<r?1-r:void 0)}function Xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vc(){return!0}function C0(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vc:C0,this.isPropagationStopped=C0,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vc)},persist:function(){},isPersistent:vc}),e}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ty=gn(ha),Ou=De({},ha,{view:0,detail:0}),Ib=gn(Ou),op,ap,Fa,Pd=De({},Ou,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(op=t.screenX-Fa.screenX,ap=t.screenY-Fa.screenY):ap=op=0,Fa=t),op)},movementY:function(t){return"movementY"in t?t.movementY:ap}}),k0=gn(Pd),Eb=De({},Pd,{dataTransfer:0}),Tb=gn(Eb),Sb=De({},Ou,{relatedTarget:0}),lp=gn(Sb),Ab=De({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=gn(Ab),Pb=De({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cb=gn(Pb),kb=De({},ha,{data:0}),x0=gn(kb),xb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Db(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nb[t])?!!e[t]:!1}function Sy(){return Db}var Ob=De({},Ou,{key:function(t){if(t.key){var e=xb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sy,charCode:function(t){return t.type==="keypress"?Xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vb=gn(Ob),Lb=De({},Pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=gn(Lb),Mb=De({},Ou,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sy}),Fb=gn(Mb),$b=De({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=gn($b),Bb=De({},Pd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jb=gn(Bb),zb=[9,13,27,32],Ay=wr&&"CompositionEvent"in window,pl=null;wr&&"documentMode"in document&&(pl=document.documentMode);var qb=wr&&"TextEvent"in window&&!pl,HT=wr&&(!Ay||pl&&8<pl&&11>=pl),N0=" ",D0=!1;function QT(t,e){switch(t){case"keyup":return zb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function YT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oo=!1;function Wb(t,e){switch(t){case"compositionend":return YT(e);case"keypress":return e.which!==32?null:(D0=!0,N0);case"textInput":return t=e.data,t===N0&&D0?null:t;default:return null}}function Gb(t,e){if(oo)return t==="compositionend"||!Ay&&QT(t,e)?(t=KT(),Yc=Ey=Yr=null,oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return HT&&e.locale!=="ko"?null:e.data;default:return null}}var Kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kb[t.type]:e==="textarea"}function XT(t,e,n,r){CT(r),e=xh(e,"onChange"),0<e.length&&(n=new Ty("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ml=null,Ul=null;function Hb(t){l1(t,0)}function Cd(t){var e=uo(t);if(IT(e))return t}function Qb(t,e){if(t==="change")return e}var JT=!1;if(wr){var up;if(wr){var cp="oninput"in document;if(!cp){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),cp=typeof V0.oninput=="function"}up=cp}else up=!1;JT=up&&(!document.documentMode||9<document.documentMode)}function L0(){ml&&(ml.detachEvent("onpropertychange",ZT),Ul=ml=null)}function ZT(t){if(t.propertyName==="value"&&Cd(Ul)){var e=[];XT(e,Ul,t,yy(t)),NT(Hb,e)}}function Yb(t,e,n){t==="focusin"?(L0(),ml=e,Ul=n,ml.attachEvent("onpropertychange",ZT)):t==="focusout"&&L0()}function Xb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cd(Ul)}function Jb(t,e){if(t==="click")return Cd(e)}function Zb(t,e){if(t==="input"||t==="change")return Cd(e)}function eN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mn=typeof Object.is=="function"?Object.is:eN;function Bl(t,e){if(Mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!am.call(e,i)||!Mn(t[i],e[i]))return!1}return!0}function M0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function F0(t,e){var n=M0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=M0(n)}}function e1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t1(){for(var t=window,e=Th();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Th(t.document)}return e}function Ry(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tN(t){var e=t1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e1(n.ownerDocument.documentElement,n)){if(r!==null&&Ry(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=F0(n,s);var o=F0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nN=wr&&"documentMode"in document&&11>=document.documentMode,ao=null,Rm=null,gl=null,Pm=!1;function $0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pm||ao==null||ao!==Th(r)||(r=ao,"selectionStart"in r&&Ry(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gl&&Bl(gl,r)||(gl=r,r=xh(Rm,"onSelect"),0<r.length&&(e=new Ty("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ao)))}function wc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var lo={animationend:wc("Animation","AnimationEnd"),animationiteration:wc("Animation","AnimationIteration"),animationstart:wc("Animation","AnimationStart"),transitionend:wc("Transition","TransitionEnd")},hp={},n1={};wr&&(n1=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function kd(t){if(hp[t])return hp[t];if(!lo[t])return t;var e=lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n1)return hp[t]=e[n];return t}var r1=kd("animationend"),i1=kd("animationiteration"),s1=kd("animationstart"),o1=kd("transitionend"),a1=new Map,U0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(t,e){a1.set(t,e),Os(e,[t])}for(var dp=0;dp<U0.length;dp++){var fp=U0[dp],rN=fp.toLowerCase(),iN=fp[0].toUpperCase()+fp.slice(1);Pi(rN,"on"+iN)}Pi(r1,"onAnimationEnd");Pi(i1,"onAnimationIteration");Pi(s1,"onAnimationStart");Pi("dblclick","onDoubleClick");Pi("focusin","onFocus");Pi("focusout","onBlur");Pi(o1,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sN=new Set("cancel close invalid load scroll toggle".split(" ").concat(nl));function B0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rb(r,e,void 0,t),t.currentTarget=null}function l1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;B0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;B0(i,a,u),s=l}}}if(Ah)throw t=Em,Ah=!1,Em=null,t}function ve(t,e){var n=e[Nm];n===void 0&&(n=e[Nm]=new Set);var r=t+"__bubble";n.has(r)||(u1(e,t,2,!1),n.add(r))}function pp(t,e,n){var r=0;e&&(r|=4),u1(n,t,r,e)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function jl(t){if(!t[Ic]){t[Ic]=!0,gT.forEach(function(n){n!=="selectionchange"&&(sN.has(n)||pp(n,!1,t),pp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ic]||(e[Ic]=!0,pp("selectionchange",!1,e))}}function u1(t,e,n,r){switch(GT(e)){case 1:var i=vb;break;case 4:i=wb;break;default:i=Iy}n=i.bind(null,e,n,t),i=void 0,!Im||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}NT(function(){var u=s,c=yy(n),h=[];e:{var d=a1.get(t);if(d!==void 0){var f=Ty,y=t;switch(t){case"keypress":if(Xc(n)===0)break e;case"keydown":case"keyup":f=Vb;break;case"focusin":y="focus",f=lp;break;case"focusout":y="blur",f=lp;break;case"beforeblur":case"afterblur":f=lp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=k0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Fb;break;case r1:case i1:case s1:f=Rb;break;case o1:f=Ub;break;case"scroll":f=Ib;break;case"wheel":f=jb;break;case"copy":case"cut":case"paste":f=Cb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=b0}var _=(e&4)!==0,v=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Ll(p,g),w!=null&&_.push(zl(p,w,m)))),v)break;p=p.return}0<_.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==vm&&(y=n.relatedTarget||n.fromElement)&&(Xi(y)||y[Ir]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?Xi(y):null,y!==null&&(v=Vs(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=k0,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=b0,w="onPointerLeave",g="onPointerEnter",p="pointer"),v=f==null?d:uo(f),m=y==null?d:uo(y),d=new _(w,p+"leave",f,n,c),d.target=v,d.relatedTarget=m,w=null,Xi(c)===u&&(_=new _(g,p+"enter",y,n,c),_.target=m,_.relatedTarget=v,w=_),v=w,f&&y)t:{for(_=f,g=y,p=0,m=_;m;m=Ws(m))p++;for(m=0,w=g;w;w=Ws(w))m++;for(;0<p-m;)_=Ws(_),p--;for(;0<m-p;)g=Ws(g),m--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=Ws(_),g=Ws(g)}_=null}else _=null;f!==null&&j0(h,d,f,_,!1),y!==null&&v!==null&&j0(h,v,y,_,!0)}}e:{if(d=u?uo(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=Qb;else if(O0(d))if(JT)C=Zb;else{C=Xb;var T=Yb}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Jb);if(C&&(C=C(t,u))){XT(h,C,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&pm(d,"number",d.value)}switch(T=u?uo(u):window,t){case"focusin":(O0(T)||T.contentEditable==="true")&&(ao=T,Rm=u,gl=null);break;case"focusout":gl=Rm=ao=null;break;case"mousedown":Pm=!0;break;case"contextmenu":case"mouseup":case"dragend":Pm=!1,$0(h,n,c);break;case"selectionchange":if(nN)break;case"keydown":case"keyup":$0(h,n,c)}var E;if(Ay)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else oo?QT(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(HT&&n.locale!=="ko"&&(oo||S!=="onCompositionStart"?S==="onCompositionEnd"&&oo&&(E=KT()):(Yr=c,Ey="value"in Yr?Yr.value:Yr.textContent,oo=!0)),T=xh(u,S),0<T.length&&(S=new x0(S,t,null,n,c),h.push({event:S,listeners:T}),E?S.data=E:(E=YT(n),E!==null&&(S.data=E)))),(E=qb?Wb(t,n):Gb(t,n))&&(u=xh(u,"onBeforeInput"),0<u.length&&(c=new x0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=E))}l1(h,e)})}function zl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ll(t,n),s!=null&&r.unshift(zl(t,s,i)),s=Ll(t,e),s!=null&&r.push(zl(t,s,i))),t=t.return}return r}function Ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function j0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ll(n,s),l!=null&&o.unshift(zl(n,l,a))):i||(l=Ll(n,s),l!=null&&o.push(zl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oN=/\r\n?/g,aN=/\u0000|\uFFFD/g;function z0(t){return(typeof t=="string"?t:""+t).replace(oN,`
`).replace(aN,"")}function Ec(t,e,n){if(e=z0(e),z0(t)!==e&&n)throw Error(D(425))}function bh(){}var Cm=null,km=null;function xm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bm=typeof setTimeout=="function"?setTimeout:void 0,lN=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,uN=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(cN)}:bm;function cN(t){setTimeout(function(){throw t})}function gp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$l(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$l(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function W0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),Wn="__reactFiber$"+da,ql="__reactProps$"+da,Ir="__reactContainer$"+da,Nm="__reactEvents$"+da,hN="__reactListeners$"+da,dN="__reactHandles$"+da;function Xi(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=W0(t);t!==null;){if(n=t[Wn])return n;t=W0(t)}return e}t=n,n=t.parentNode}return null}function Vu(t){return t=t[Wn]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function xd(t){return t[ql]||null}var Dm=[],co=-1;function Ci(t){return{current:t}}function Te(t){0>co||(t.current=Dm[co],Dm[co]=null,co--)}function ye(t,e){co++,Dm[co]=t.current,t.current=e}var pi={},bt=Ci(pi),Zt=Ci(!1),gs=pi;function Oo(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Nh(){Te(Zt),Te(bt)}function G0(t,e,n){if(bt.current!==pi)throw Error(D(168));ye(bt,e),ye(Zt,n)}function c1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,Yx(t)||"Unknown",i));return De({},n,r)}function Dh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,gs=bt.current,ye(bt,t),ye(Zt,Zt.current),!0}function K0(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=c1(t,e,gs),r.__reactInternalMemoizedMergedChildContext=t,Te(Zt),Te(bt),ye(bt,t)):Te(Zt),ye(Zt,n)}var cr=null,bd=!1,yp=!1;function h1(t){cr===null?cr=[t]:cr.push(t)}function fN(t){bd=!0,h1(t)}function ki(){if(!yp&&cr!==null){yp=!0;var t=0,e=de;try{var n=cr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,bd=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),LT(_y,ki),i}finally{de=e,yp=!1}}return null}var ho=[],fo=0,Oh=null,Vh=0,yn=[],_n=0,ys=null,hr=1,dr="";function Bi(t,e){ho[fo++]=Vh,ho[fo++]=Oh,Oh=t,Vh=e}function d1(t,e,n){yn[_n++]=hr,yn[_n++]=dr,yn[_n++]=ys,ys=t;var r=hr;t=dr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-On(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function Py(t){t.return!==null&&(Bi(t,1),d1(t,1,0))}function Cy(t){for(;t===Oh;)Oh=ho[--fo],ho[fo]=null,Vh=ho[--fo],ho[fo]=null;for(;t===ys;)ys=yn[--_n],yn[_n]=null,dr=yn[--_n],yn[_n]=null,hr=yn[--_n],yn[_n]=null}var cn=null,on=null,Se=!1,Nn=null;function f1(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function H0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,on=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,on=null,!0):!1;default:return!1}}function Om(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vm(t){if(Se){var e=on;if(e){var n=e;if(!H0(t,e)){if(Om(t))throw Error(D(418));e=si(n.nextSibling);var r=cn;e&&H0(t,e)?f1(r,n):(t.flags=t.flags&-4097|2,Se=!1,cn=t)}}else{if(Om(t))throw Error(D(418));t.flags=t.flags&-4097|2,Se=!1,cn=t}}}function Q0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Tc(t){if(t!==cn)return!1;if(!Se)return Q0(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xm(t.type,t.memoizedProps)),e&&(e=on)){if(Om(t))throw p1(),Error(D(418));for(;e;)f1(t,e),e=si(e.nextSibling)}if(Q0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=cn?si(t.stateNode.nextSibling):null;return!0}function p1(){for(var t=on;t;)t=si(t.nextSibling)}function Vo(){on=cn=null,Se=!1}function ky(t){Nn===null?Nn=[t]:Nn.push(t)}var pN=Cr.ReactCurrentBatchConfig;function xn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Lh=Ci(null),Mh=null,po=null,xy=null;function by(){xy=po=Mh=null}function Ny(t){var e=Lh.current;Te(Lh),t._currentValue=e}function Lm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function So(t,e){Mh=t,xy=po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ht=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(xy!==t)if(t={context:t,memoizedValue:e,next:null},po===null){if(Mh===null)throw Error(D(308));po=t,Mh.dependencies={lanes:0,firstContext:t}}else po=po.next=t;return e}var Ji=null;function Dy(t){Ji===null?Ji=[t]:Ji.push(t)}function m1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function Oy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,Dy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function Jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vy(t,n)}}function Y0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fh(t,e,n,r){var i=t.updateQueue;qr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,f=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=De({},h,d);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=h}}function X0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var y1=new mT.Component().refs;function Mm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nd={isMounted:function(t){return(t=t._reactInternals)?Vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=li(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Vn(e,t,i,r),Jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=li(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Vn(e,t,i,r),Jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=li(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(Vn(e,t,r,n),Jc(e,t,r))}};function J0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bl(n,r)||!Bl(i,s):!0}function _1(t,e,n){var r=!1,i=pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(i=en(e)?gs:bt.current,r=e.contextTypes,s=(r=r!=null)?Oo(t,i):pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Z0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nd.enqueueReplaceState(e,e.state,null)}function Fm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=y1,Oy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Sn(s):(s=en(e)?gs:bt.current,i.context=Oo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nd.enqueueReplaceState(i,i.state,null),Fh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===y1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Sc(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ew(t){var e=t._init;return e(t._payload)}function v1(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=ui(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,w){return p===null||p.tag!==6?(p=Sp(m,g.mode,w),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,w){var C=m.type;return C===so?c(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&ew(C)===p.type)?(w=i(p,m.props),w.ref=$a(g,p,m),w.return=g,w):(w=ih(m.type,m.key,m.props,null,g.mode,w),w.ref=$a(g,p,m),w.return=g,w)}function u(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ap(m,g.mode,w),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,w,C){return p===null||p.tag!==7?(p=as(m,g.mode,w,C),p.return=g,p):(p=i(p,m),p.return=g,p)}function h(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sp(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fc:return m=ih(p.type,p.key,p.props,null,g.mode,m),m.ref=$a(g,null,p),m.return=g,m;case io:return p=Ap(p,g.mode,m),p.return=g,p;case zr:var w=p._init;return h(g,w(p._payload),m)}if(el(p)||Oa(p))return p=as(p,g.mode,m,null),p.return=g,p;Sc(g,p)}return null}function d(g,p,m,w){var C=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fc:return m.key===C?l(g,p,m,w):null;case io:return m.key===C?u(g,p,m,w):null;case zr:return C=m._init,d(g,p,C(m._payload),w)}if(el(m)||Oa(m))return C!==null?null:c(g,p,m,w,null);Sc(g,m)}return null}function f(g,p,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(p,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fc:return g=g.get(w.key===null?m:w.key)||null,l(p,g,w,C);case io:return g=g.get(w.key===null?m:w.key)||null,u(p,g,w,C);case zr:var T=w._init;return f(g,p,m,T(w._payload),C)}if(el(w)||Oa(w))return g=g.get(m)||null,c(p,g,w,C,null);Sc(p,w)}return null}function y(g,p,m,w){for(var C=null,T=null,E=p,S=p=0,A=null;E!==null&&S<m.length;S++){E.index>S?(A=E,E=null):A=E.sibling;var k=d(g,E,m[S],w);if(k===null){E===null&&(E=A);break}t&&E&&k.alternate===null&&e(g,E),p=s(k,p,S),T===null?C=k:T.sibling=k,T=k,E=A}if(S===m.length)return n(g,E),Se&&Bi(g,S),C;if(E===null){for(;S<m.length;S++)E=h(g,m[S],w),E!==null&&(p=s(E,p,S),T===null?C=E:T.sibling=E,T=E);return Se&&Bi(g,S),C}for(E=r(g,E);S<m.length;S++)A=f(E,g,S,m[S],w),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?S:A.key),p=s(A,p,S),T===null?C=A:T.sibling=A,T=A);return t&&E.forEach(function(W){return e(g,W)}),Se&&Bi(g,S),C}function _(g,p,m,w){var C=Oa(m);if(typeof C!="function")throw Error(D(150));if(m=C.call(m),m==null)throw Error(D(151));for(var T=C=null,E=p,S=p=0,A=null,k=m.next();E!==null&&!k.done;S++,k=m.next()){E.index>S?(A=E,E=null):A=E.sibling;var W=d(g,E,k.value,w);if(W===null){E===null&&(E=A);break}t&&E&&W.alternate===null&&e(g,E),p=s(W,p,S),T===null?C=W:T.sibling=W,T=W,E=A}if(k.done)return n(g,E),Se&&Bi(g,S),C;if(E===null){for(;!k.done;S++,k=m.next())k=h(g,k.value,w),k!==null&&(p=s(k,p,S),T===null?C=k:T.sibling=k,T=k);return Se&&Bi(g,S),C}for(E=r(g,E);!k.done;S++,k=m.next())k=f(E,g,S,k.value,w),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?S:k.key),p=s(k,p,S),T===null?C=k:T.sibling=k,T=k);return t&&E.forEach(function(le){return e(g,le)}),Se&&Bi(g,S),C}function v(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===so&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fc:e:{for(var C=m.key,T=p;T!==null;){if(T.key===C){if(C=m.type,C===so){if(T.tag===7){n(g,T.sibling),p=i(T,m.props.children),p.return=g,g=p;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&ew(C)===T.type){n(g,T.sibling),p=i(T,m.props),p.ref=$a(g,T,m),p.return=g,g=p;break e}n(g,T);break}else e(g,T);T=T.sibling}m.type===so?(p=as(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=ih(m.type,m.key,m.props,null,g.mode,w),w.ref=$a(g,p,m),w.return=g,g=w)}return o(g);case io:e:{for(T=m.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Ap(m,g.mode,w),p.return=g,g=p}return o(g);case zr:return T=m._init,v(g,p,T(m._payload),w)}if(el(m))return y(g,p,m,w);if(Oa(m))return _(g,p,m,w);Sc(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Sp(m,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return v}var Lo=v1(!0),w1=v1(!1),Lu={},rr=Ci(Lu),Wl=Ci(Lu),Gl=Ci(Lu);function Zi(t){if(t===Lu)throw Error(D(174));return t}function Vy(t,e){switch(ye(Gl,e),ye(Wl,t),ye(rr,Lu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gm(e,t)}Te(rr),ye(rr,e)}function Mo(){Te(rr),Te(Wl),Te(Gl)}function I1(t){Zi(Gl.current);var e=Zi(rr.current),n=gm(e,t.type);e!==n&&(ye(Wl,t),ye(rr,n))}function Ly(t){Wl.current===t&&(Te(rr),Te(Wl))}var xe=Ci(0);function $h(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _p=[];function My(){for(var t=0;t<_p.length;t++)_p[t]._workInProgressVersionPrimary=null;_p.length=0}var Zc=Cr.ReactCurrentDispatcher,vp=Cr.ReactCurrentBatchConfig,_s=0,be=null,nt=null,ot=null,Uh=!1,yl=!1,Kl=0,mN=0;function St(){throw Error(D(321))}function Fy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mn(t[n],e[n]))return!1;return!0}function $y(t,e,n,r,i,s){if(_s=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zc.current=t===null||t.memoizedState===null?vN:wN,t=n(r,i),yl){s=0;do{if(yl=!1,Kl=0,25<=s)throw Error(D(301));s+=1,ot=nt=null,e.updateQueue=null,Zc.current=IN,t=n(r,i)}while(yl)}if(Zc.current=Bh,e=nt!==null&&nt.next!==null,_s=0,ot=nt=be=null,Uh=!1,e)throw Error(D(300));return t}function Uy(){var t=Kl!==0;return Kl=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?be.memoizedState=ot=t:ot=ot.next=t,ot}function An(){if(nt===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=ot===null?be.memoizedState:ot.next;if(e!==null)ot=e,nt=t;else{if(t===null)throw Error(D(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ot===null?be.memoizedState=ot=t:ot=ot.next=t}return ot}function Hl(t,e){return typeof e=="function"?e(t):e}function wp(t){var e=An(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((_s&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,be.lanes|=c,vs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,vs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ip(t){var e=An(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mn(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function E1(){}function T1(t,e){var n=be,r=An(),i=e(),s=!Mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ht=!0),r=r.queue,By(R1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Ql(9,A1.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(D(349));_s&30||S1(n,e,i)}return i}function S1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A1(t,e,n,r){e.value=n,e.getSnapshot=r,P1(e)&&C1(t)}function R1(t,e,n){return n(function(){P1(e)&&C1(t)})}function P1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mn(t,n)}catch{return!0}}function C1(t){var e=Er(t,1);e!==null&&Vn(e,t,1,-1)}function tw(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:t},e.queue=t,t=t.dispatch=_N.bind(null,be,t),[e.memoizedState,t]}function Ql(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function k1(){return An().memoizedState}function eh(t,e,n,r){var i=zn();be.flags|=t,i.memoizedState=Ql(1|e,n,void 0,r===void 0?null:r)}function Dd(t,e,n,r){var i=An();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&Fy(r,o.deps)){i.memoizedState=Ql(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ql(1|e,n,s,r)}function nw(t,e){return eh(8390656,8,t,e)}function By(t,e){return Dd(2048,8,t,e)}function x1(t,e){return Dd(4,2,t,e)}function b1(t,e){return Dd(4,4,t,e)}function N1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D1(t,e,n){return n=n!=null?n.concat([t]):null,Dd(4,4,N1.bind(null,e,t),n)}function jy(){}function O1(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function V1(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function L1(t,e,n){return _s&21?(Mn(n,e)||(n=$T(),be.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n)}function gN(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=vp.transition;vp.transition={};try{t(!1),e()}finally{de=n,vp.transition=r}}function M1(){return An().memoizedState}function yN(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F1(t))$1(e,n);else if(n=m1(t,e,n,r),n!==null){var i=$t();Vn(n,t,r,i),U1(n,e,r)}}function _N(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F1(t))$1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mn(a,o)){var l=e.interleaved;l===null?(i.next=i,Dy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=m1(t,e,i,r),n!==null&&(i=$t(),Vn(n,t,r,i),U1(n,e,r))}}function F1(t){var e=t.alternate;return t===be||e!==null&&e===be}function $1(t,e){yl=Uh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vy(t,n)}}var Bh={readContext:Sn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},vN={readContext:Sn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:nw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eh(4194308,4,N1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eh(4194308,4,t,e)},useInsertionEffect:function(t,e){return eh(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yN.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:tw,useDebugValue:jy,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=tw(!1),e=t[0];return t=gN.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=zn();if(Se){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),ut===null)throw Error(D(349));_s&30||S1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,nw(R1.bind(null,r,s,t),[t]),r.flags|=2048,Ql(9,A1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=ut.identifierPrefix;if(Se){var n=dr,r=hr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Kl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wN={readContext:Sn,useCallback:O1,useContext:Sn,useEffect:By,useImperativeHandle:D1,useInsertionEffect:x1,useLayoutEffect:b1,useMemo:V1,useReducer:wp,useRef:k1,useState:function(){return wp(Hl)},useDebugValue:jy,useDeferredValue:function(t){var e=An();return L1(e,nt.memoizedState,t)},useTransition:function(){var t=wp(Hl)[0],e=An().memoizedState;return[t,e]},useMutableSource:E1,useSyncExternalStore:T1,useId:M1,unstable_isNewReconciler:!1},IN={readContext:Sn,useCallback:O1,useContext:Sn,useEffect:By,useImperativeHandle:D1,useInsertionEffect:x1,useLayoutEffect:b1,useMemo:V1,useReducer:Ip,useRef:k1,useState:function(){return Ip(Hl)},useDebugValue:jy,useDeferredValue:function(t){var e=An();return nt===null?e.memoizedState=t:L1(e,nt.memoizedState,t)},useTransition:function(){var t=Ip(Hl)[0],e=An().memoizedState;return[t,e]},useMutableSource:E1,useSyncExternalStore:T1,useId:M1,unstable_isNewReconciler:!1};function Fo(t,e){try{var n="",r=e;do n+=Qx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ep(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $m(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EN=typeof WeakMap=="function"?WeakMap:Map;function B1(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zh||(zh=!0,Qm=r),$m(t,e)},n}function j1(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$m(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$m(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LN.bind(null,t,e,n),e.then(t,t))}function iw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var TN=Cr.ReactCurrentOwner,Ht=!1;function Ot(t,e,n,r){e.child=t===null?w1(e,null,n,r):Lo(e,t.child,n,r)}function ow(t,e,n,r,i){n=n.render;var s=e.ref;return So(e,i),r=$y(t,e,n,r,s,i),n=Uy(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Se&&n&&Py(e),e.flags|=1,Ot(t,e,r,i),e.child)}function aw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z1(t,e,s,r,i)):(t=ih(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(o,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=ui(s,r),t.ref=e.ref,t.return=e,e.child=t}function z1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bl(s,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ht=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return Um(t,e,n,r,i)}function q1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(go,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(go,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(go,rn),rn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(go,rn),rn|=r;return Ot(t,e,i,n),e.child}function W1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Um(t,e,n,r,i){var s=en(n)?gs:bt.current;return s=Oo(e,s),So(e,i),n=$y(t,e,n,r,s,i),r=Uy(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Se&&r&&Py(e),e.flags|=1,Ot(t,e,n,i),e.child)}function lw(t,e,n,r,i){if(en(n)){var s=!0;Dh(e)}else s=!1;if(So(e,i),e.stateNode===null)th(t,e),_1(e,n,r),Fm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=en(n)?gs:bt.current,u=Oo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Z0(e,o,r,u),qr=!1;var d=e.memoizedState;o.state=d,Fh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Zt.current||qr?(typeof c=="function"&&(Mm(e,n,c,r),l=e.memoizedState),(a=qr||J0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:xn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=en(n)?gs:bt.current,l=Oo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Z0(e,o,r,l),qr=!1,d=e.memoizedState,o.state=d,Fh(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Zt.current||qr?(typeof f=="function"&&(Mm(e,n,f,r),y=e.memoizedState),(u=qr||J0(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Bm(t,e,n,r,s,i)}function Bm(t,e,n,r,i,s){W1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&K0(e,n,!1),Tr(t,e,s);r=e.stateNode,TN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lo(e,t.child,null,s),e.child=Lo(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&K0(e,n,!0),e.child}function G1(t){var e=t.stateNode;e.pendingContext?G0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&G0(t,e.context,!1),Vy(t,e.containerInfo)}function uw(t,e,n,r,i){return Vo(),ky(i),e.flags|=256,Ot(t,e,n,r),e.child}var jm={dehydrated:null,treeContext:null,retryLane:0};function zm(t){return{baseLanes:t,cachePool:null,transitions:null}}function K1(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(xe,i&1),t===null)return Vm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ld(o,r,0,null),t=as(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zm(n),e.memoizedState=jm,t):zy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ui(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ui(a,s):(s=as(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jm,r}return s=t.child,t=s.sibling,r=ui(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zy(t,e){return e=Ld({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ac(t,e,n,r){return r!==null&&ky(r),Lo(e,t.child,null,n),t=zy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ep(Error(D(422))),Ac(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ld({mode:"visible",children:r.children},i,0,null),s=as(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Lo(e,t.child,null,o),e.child.memoizedState=zm(o),e.memoizedState=jm,s);if(!(e.mode&1))return Ac(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Ep(s,r,void 0),Ac(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ht||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),Vn(r,t,i,-1))}return Qy(),r=Ep(Error(D(421))),Ac(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=si(i.nextSibling),cn=e,Se=!0,Nn=null,t!==null&&(yn[_n++]=hr,yn[_n++]=dr,yn[_n++]=ys,hr=t.id,dr=t.overflow,ys=e),e=zy(e,r.children),e.flags|=4096,e)}function cw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lm(t.return,e,n)}function Tp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function H1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cw(t,n,e);else if(t.tag===19)cw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$h(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$h(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tp(e,!0,n,null,s);break;case"together":Tp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function th(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AN(t,e,n){switch(e.tag){case 3:G1(e),Vo();break;case 5:I1(e);break;case 1:en(e.type)&&Dh(e);break;case 4:Vy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Lh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?K1(t,e,n):(ye(xe,xe.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);ye(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,q1(t,e,n)}return Tr(t,e,n)}var Q1,qm,Y1,X1;Q1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qm=function(){};Y1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zi(rr.current);var s=null;switch(n){case"input":i=dm(t,i),r=dm(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=mm(t,i),r=mm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bh)}ym(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ol.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ol.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};X1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ua(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RN(t,e,n){var r=e.pendingProps;switch(Cy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return en(e.type)&&Nh(),At(e),null;case 3:return r=e.stateNode,Mo(),Te(Zt),Te(bt),My(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Jm(Nn),Nn=null))),qm(t,e),At(e),null;case 5:Ly(e);var i=Zi(Gl.current);if(n=e.type,t!==null&&e.stateNode!=null)Y1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return At(e),null}if(t=Zi(rr.current),Tc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[ql]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<nl.length;i++)ve(nl[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":v0(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":I0(r,s),ve("invalid",r)}ym(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ec(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ec(r.textContent,a,t),i=["children",""+a]):Ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":pc(r),w0(r,s,!0);break;case"textarea":pc(r),E0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ST(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wn]=e,t[ql]=r,Q1(t,e,!1,!1),e.stateNode=t;e:{switch(o=_m(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<nl.length;i++)ve(nl[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":v0(t,r),i=dm(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),ve("invalid",t);break;case"textarea":I0(t,r),i=mm(t,r),ve("invalid",t);break;default:i=r}ym(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?PT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vl(t,l):typeof l=="number"&&Vl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ol.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&fy(t,s,l,o))}switch(n){case"input":pc(t),w0(t,r,!1);break;case"textarea":pc(t),E0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wo(t,!!r.multiple,s,!1):r.defaultValue!=null&&wo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)X1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Zi(Gl.current),Zi(rr.current),Tc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Ec(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ec(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return At(e),null;case 13:if(Te(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&on!==null&&e.mode&1&&!(e.flags&128))p1(),Vo(),e.flags|=98560,s=!1;else if(s=Tc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Wn]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Nn!==null&&(Jm(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?rt===0&&(rt=3):Qy())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return Mo(),qm(t,e),t===null&&jl(e.stateNode.containerInfo),At(e),null;case 10:return Ny(e.type._context),At(e),null;case 17:return en(e.type)&&Nh(),At(e),null;case 19:if(Te(xe),s=e.memoizedState,s===null)return At(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ua(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$h(t),o!==null){for(e.flags|=128,Ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>$o&&(e.flags|=128,r=!0,Ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=$h(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return At(e),null}else 2*Ke()-s.renderingStartTime>$o&&n!==1073741824&&(e.flags|=128,r=!0,Ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=xe.current,ye(xe,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return Hy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function PN(t,e){switch(Cy(e),e.tag){case 1:return en(e.type)&&Nh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),Te(Zt),Te(bt),My(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ly(e),null;case 13:if(Te(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(xe),null;case 4:return Mo(),null;case 10:return Ny(e.type._context),null;case 22:case 23:return Hy(),null;case 24:return null;default:return null}}var Rc=!1,Pt=!1,CN=typeof WeakSet=="function"?WeakSet:Set,U=null;function mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Wm(t,e,n){try{n()}catch(r){Le(t,e,r)}}var hw=!1;function kN(t,e){if(Cm=Ch,t=t1(),Ry(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(km={focusedElem:t,selectionRange:n},Ch=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:xn(e.type,_),v);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(w){Le(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return y=hw,hw=!1,y}function _l(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wm(e,n,s)}i=i.next}while(i!==r)}}function Od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J1(t){var e=t.alternate;e!==null&&(t.alternate=null,J1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ql],delete e[Nm],delete e[hN],delete e[dN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z1(t){return t.tag===5||t.tag===3||t.tag===4}function dw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Km(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bh));else if(r!==4&&(t=t.child,t!==null))for(Km(t,e,n),t=t.sibling;t!==null;)Km(t,e,n),t=t.sibling}function Hm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hm(t,e,n),t=t.sibling;t!==null;)Hm(t,e,n),t=t.sibling}var gt=null,bn=!1;function Mr(t,e,n){for(n=n.child;n!==null;)eS(t,e,n),n=n.sibling}function eS(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Rd,n)}catch{}switch(n.tag){case 5:Pt||mo(n,e);case 6:var r=gt,i=bn;gt=null,Mr(t,e,n),gt=r,bn=i,gt!==null&&(bn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(bn?(t=gt,n=n.stateNode,t.nodeType===8?gp(t.parentNode,n):t.nodeType===1&&gp(t,n),$l(t)):gp(gt,n.stateNode));break;case 4:r=gt,i=bn,gt=n.stateNode.containerInfo,bn=!0,Mr(t,e,n),gt=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wm(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!Pt&&(mo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Mr(t,e,n),Pt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function fw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CN),e.forEach(function(r){var i=FN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,bn=!1;break e;case 3:gt=a.stateNode.containerInfo,bn=!0;break e;case 4:gt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(gt===null)throw Error(D(160));eS(s,o,i),gt=null,bn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tS(e,t),e=e.sibling}function tS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),jn(t),r&4){try{_l(3,t,t.return),Od(3,t)}catch(_){Le(t,t.return,_)}try{_l(5,t,t.return)}catch(_){Le(t,t.return,_)}}break;case 1:Cn(e,t),jn(t),r&512&&n!==null&&mo(n,n.return);break;case 5:if(Cn(e,t),jn(t),r&512&&n!==null&&mo(n,n.return),t.flags&32){var i=t.stateNode;try{Vl(i,"")}catch(_){Le(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ET(i,s),_m(a,o);var u=_m(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?PT(i,h):c==="dangerouslySetInnerHTML"?AT(i,h):c==="children"?Vl(i,h):fy(i,c,h,u)}switch(a){case"input":fm(i,s);break;case"textarea":TT(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?wo(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?wo(i,!!s.multiple,s.defaultValue,!0):wo(i,!!s.multiple,s.multiple?[]:"",!1))}i[ql]=s}catch(_){Le(t,t.return,_)}}break;case 6:if(Cn(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Le(t,t.return,_)}}break;case 3:if(Cn(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch(_){Le(t,t.return,_)}break;case 4:Cn(e,t),jn(t);break;case 13:Cn(e,t),jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gy=Ke())),r&4&&fw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(u=Pt)||c,Cn(e,t),Pt=u):Cn(e,t),jn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,f=d.child,d.tag){case 0:case 11:case 14:case 15:_l(4,d,d.return);break;case 1:mo(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Le(r,n,_)}}break;case 5:mo(d,d.return);break;case 22:if(d.memoizedState!==null){mw(h);continue}}f!==null?(f.return=d,U=f):mw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=RT("display",o))}catch(_){Le(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Le(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),jn(t),r&4&&fw(t);break;case 21:break;default:Cn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z1(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vl(i,""),r.flags&=-33);var s=dw(t);Hm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dw(t);Km(t,a,o);break;default:throw Error(D(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xN(t,e,n){U=t,nS(t)}function nS(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=Rc;var u=Pt;if(Rc=o,(Pt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?gw(i):l!==null?(l.return=o,U=l):gw(i);for(;s!==null;)U=s,nS(s),s=s.sibling;U=i,Rc=a,Pt=u}pw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):pw(t)}}function pw(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||Od(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&X0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}X0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&$l(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Pt||e.flags&512&&Gm(e)}catch(d){Le(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function mw(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function gw(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Od(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Gm(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Gm(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var bN=Math.ceil,jh=Cr.ReactCurrentDispatcher,qy=Cr.ReactCurrentOwner,Tn=Cr.ReactCurrentBatchConfig,oe=0,ut=null,et=null,wt=0,rn=0,go=Ci(0),rt=0,Yl=null,vs=0,Vd=0,Wy=0,vl=null,Kt=null,Gy=0,$o=1/0,lr=null,zh=!1,Qm=null,ai=null,Pc=!1,Xr=null,qh=0,wl=0,Ym=null,nh=-1,rh=0;function $t(){return oe&6?Ke():nh!==-1?nh:nh=Ke()}function li(t){return t.mode&1?oe&2&&wt!==0?wt&-wt:pN.transition!==null?(rh===0&&(rh=$T()),rh):(t=de,t!==0||(t=window.event,t=t===void 0?16:GT(t.type)),t):1}function Vn(t,e,n,r){if(50<wl)throw wl=0,Ym=null,Error(D(185));Du(t,n,r),(!(oe&2)||t!==ut)&&(t===ut&&(!(oe&2)&&(Vd|=n),rt===4&&Gr(t,wt)),tn(t,r),n===1&&oe===0&&!(e.mode&1)&&($o=Ke()+500,bd&&ki()))}function tn(t,e){var n=t.callbackNode;pb(t,e);var r=Ph(t,t===ut?wt:0);if(r===0)n!==null&&A0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&A0(n),e===1)t.tag===0?fN(yw.bind(null,t)):h1(yw.bind(null,t)),uN(function(){!(oe&6)&&ki()}),n=null;else{switch(UT(r)){case 1:n=_y;break;case 4:n=MT;break;case 16:n=Rh;break;case 536870912:n=FT;break;default:n=Rh}n=cS(n,rS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rS(t,e){if(nh=-1,rh=0,oe&6)throw Error(D(327));var n=t.callbackNode;if(Ao()&&t.callbackNode!==n)return null;var r=Ph(t,t===ut?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wh(t,r);else{e=r;var i=oe;oe|=2;var s=sS();(ut!==t||wt!==e)&&(lr=null,$o=Ke()+500,os(t,e));do try{ON();break}catch(a){iS(t,a)}while(!0);by(),jh.current=s,oe=i,et!==null?e=0:(ut=null,wt=0,e=rt)}if(e!==0){if(e===2&&(i=Tm(t),i!==0&&(r=i,e=Xm(t,i))),e===1)throw n=Yl,os(t,0),Gr(t,r),tn(t,Ke()),n;if(e===6)Gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!NN(i)&&(e=Wh(t,r),e===2&&(s=Tm(t),s!==0&&(r=s,e=Xm(t,s))),e===1))throw n=Yl,os(t,0),Gr(t,r),tn(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:ji(t,Kt,lr);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=Gy+500-Ke(),10<e)){if(Ph(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bm(ji.bind(null,t,Kt,lr),e);break}ji(t,Kt,lr);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bN(r/1960))-r,10<r){t.timeoutHandle=bm(ji.bind(null,t,Kt,lr),r);break}ji(t,Kt,lr);break;case 5:ji(t,Kt,lr);break;default:throw Error(D(329))}}}return tn(t,Ke()),t.callbackNode===n?rS.bind(null,t):null}function Xm(t,e){var n=vl;return t.current.memoizedState.isDehydrated&&(os(t,e).flags|=256),t=Wh(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Jm(e)),t}function Jm(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function NN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~Wy,e&=~Vd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function yw(t){if(oe&6)throw Error(D(327));Ao();var e=Ph(t,0);if(!(e&1))return tn(t,Ke()),null;var n=Wh(t,e);if(t.tag!==0&&n===2){var r=Tm(t);r!==0&&(e=r,n=Xm(t,r))}if(n===1)throw n=Yl,os(t,0),Gr(t,e),tn(t,Ke()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ji(t,Kt,lr),tn(t,Ke()),null}function Ky(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&($o=Ke()+500,bd&&ki())}}function ws(t){Xr!==null&&Xr.tag===0&&!(oe&6)&&Ao();var e=oe;oe|=1;var n=Tn.transition,r=de;try{if(Tn.transition=null,de=1,t)return t()}finally{de=r,Tn.transition=n,oe=e,!(oe&6)&&ki()}}function Hy(){rn=go.current,Te(go)}function os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lN(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Cy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nh();break;case 3:Mo(),Te(Zt),Te(bt),My();break;case 5:Ly(r);break;case 4:Mo();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:Ny(r.type._context);break;case 22:case 23:Hy()}n=n.return}if(ut=t,et=t=ui(t.current,null),wt=rn=e,rt=0,Yl=null,Wy=Vd=vs=0,Kt=vl=null,Ji!==null){for(e=0;e<Ji.length;e++)if(n=Ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ji=null}return t}function iS(t,e){do{var n=et;try{if(by(),Zc.current=Bh,Uh){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uh=!1}if(_s=0,ot=nt=be=null,yl=!1,Kl=0,qy.current=null,n===null||n.return===null){rt=1,Yl=e,et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=iw(o);if(f!==null){f.flags&=-257,sw(f,o,a,s,e),f.mode&1&&rw(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){rw(s,u,e),Qy();break e}l=Error(D(426))}}else if(Se&&a.mode&1){var v=iw(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),sw(v,o,a,s,e),ky(Fo(l,a));break e}}s=l=Fo(l,a),rt!==4&&(rt=2),vl===null?vl=[s]:vl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=B1(s,l,e);Y0(s,g);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ai===null||!ai.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=j1(s,a,e);Y0(s,w);break e}}s=s.return}while(s!==null)}aS(n)}catch(C){e=C,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function sS(){var t=jh.current;return jh.current=Bh,t===null?Bh:t}function Qy(){(rt===0||rt===3||rt===2)&&(rt=4),ut===null||!(vs&268435455)&&!(Vd&268435455)||Gr(ut,wt)}function Wh(t,e){var n=oe;oe|=2;var r=sS();(ut!==t||wt!==e)&&(lr=null,os(t,e));do try{DN();break}catch(i){iS(t,i)}while(!0);if(by(),oe=n,jh.current=r,et!==null)throw Error(D(261));return ut=null,wt=0,rt}function DN(){for(;et!==null;)oS(et)}function ON(){for(;et!==null&&!sb();)oS(et)}function oS(t){var e=uS(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?aS(t):et=e,qy.current=null}function aS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PN(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,et=null;return}}else if(n=RN(n,e,rn),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);rt===0&&(rt=5)}function ji(t,e,n){var r=de,i=Tn.transition;try{Tn.transition=null,de=1,VN(t,e,n,r)}finally{Tn.transition=i,de=r}return null}function VN(t,e,n,r){do Ao();while(Xr!==null);if(oe&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mb(t,s),t===ut&&(et=ut=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pc||(Pc=!0,cS(Rh,function(){return Ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=de;de=1;var a=oe;oe|=4,qy.current=null,kN(t,n),tS(n,t),tN(km),Ch=!!Cm,km=Cm=null,t.current=n,xN(n),ob(),oe=a,de=o,Tn.transition=s}else t.current=n;if(Pc&&(Pc=!1,Xr=t,qh=i),s=t.pendingLanes,s===0&&(ai=null),ub(n.stateNode),tn(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zh)throw zh=!1,t=Qm,Qm=null,t;return qh&1&&t.tag!==0&&Ao(),s=t.pendingLanes,s&1?t===Ym?wl++:(wl=0,Ym=t):wl=0,ki(),null}function Ao(){if(Xr!==null){var t=UT(qh),e=Tn.transition,n=de;try{if(Tn.transition=null,de=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,qh=0,oe&6)throw Error(D(331));var i=oe;for(oe|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:_l(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,f=c.return;if(J1(c),c===u){U=null;break}if(d!==null){d.return=f,U=d;break}U=f}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_l(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var p=t.current;for(U=p;U!==null;){o=U;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,U=m;else e:for(o=p;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Od(9,a)}}catch(C){Le(a,a.return,C)}if(a===o){U=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,U=w;break e}U=a.return}}if(oe=i,ki(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Rd,t)}catch{}r=!0}return r}finally{de=n,Tn.transition=e}}return!1}function _w(t,e,n){e=Fo(n,e),e=B1(t,e,1),t=oi(t,e,1),e=$t(),t!==null&&(Du(t,1,e),tn(t,e))}function Le(t,e,n){if(t.tag===3)_w(t,t,n);else for(;e!==null;){if(e.tag===3){_w(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=Fo(n,t),t=j1(e,t,1),e=oi(e,t,1),t=$t(),e!==null&&(Du(e,1,t),tn(e,t));break}}e=e.return}}function LN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(wt&n)===n&&(rt===4||rt===3&&(wt&130023424)===wt&&500>Ke()-Gy?os(t,0):Wy|=n),tn(t,e)}function lS(t,e){e===0&&(t.mode&1?(e=yc,yc<<=1,!(yc&130023424)&&(yc=4194304)):e=1);var n=$t();t=Er(t,e),t!==null&&(Du(t,e,n),tn(t,n))}function MN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lS(t,n)}function FN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),lS(t,n)}var uS;uS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ht=!1,AN(t,e,n);Ht=!!(t.flags&131072)}else Ht=!1,Se&&e.flags&1048576&&d1(e,Vh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;th(t,e),t=e.pendingProps;var i=Oo(e,bt.current);So(e,n),i=$y(null,e,r,t,i,n);var s=Uy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(s=!0,Dh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oy(e),i.updater=Nd,e.stateNode=i,i._reactInternals=e,Fm(e,r,t,n),e=Bm(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Py(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(th(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UN(r),t=xn(r,t),i){case 0:e=Um(null,e,r,t,n);break e;case 1:e=lw(null,e,r,t,n);break e;case 11:e=ow(null,e,r,t,n);break e;case 14:e=aw(null,e,r,xn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Um(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),lw(t,e,r,i,n);case 3:e:{if(G1(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g1(t,e),Fh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fo(Error(D(423)),e),e=uw(t,e,r,n,i);break e}else if(r!==i){i=Fo(Error(D(424)),e),e=uw(t,e,r,n,i);break e}else for(on=si(e.stateNode.containerInfo.firstChild),cn=e,Se=!0,Nn=null,n=w1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),r===i){e=Tr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return I1(e),t===null&&Vm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xm(r,i)?o=null:s!==null&&xm(r,s)&&(e.flags|=32),W1(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&Vm(e),null;case 13:return K1(t,e,n);case 4:return Vy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lo(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),ow(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Lh,r._currentValue),r._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===i.children&&!Zt.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,So(e,n),i=Sn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=xn(r,e.pendingProps),i=xn(r.type,i),aw(t,e,r,i,n);case 15:return z1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),th(t,e),e.tag=1,en(r)?(t=!0,Dh(e)):t=!1,So(e,n),_1(e,r,i),Fm(e,r,i,n),Bm(null,e,r,!0,t,n);case 19:return H1(t,e,n);case 22:return q1(t,e,n)}throw Error(D(156,e.tag))};function cS(t,e){return LT(t,e)}function $N(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new $N(t,e,n,r)}function Yy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UN(t){if(typeof t=="function")return Yy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===my)return 11;if(t===gy)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ih(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case so:return as(n.children,i,s,e);case py:o=8,i|=8;break;case lm:return t=wn(12,n,e,i|2),t.elementType=lm,t.lanes=s,t;case um:return t=wn(13,n,e,i),t.elementType=um,t.lanes=s,t;case cm:return t=wn(19,n,e,i),t.elementType=cm,t.lanes=s,t;case vT:return Ld(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yT:o=10;break e;case _T:o=9;break e;case my:o=11;break e;case gy:o=14;break e;case zr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=wn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function as(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function Ld(t,e,n,r){return t=wn(22,t,r,e),t.elementType=vT,t.lanes=n,t.stateNode={isHidden:!1},t}function Sp(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Ap(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sp(0),this.expirationTimes=sp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xy(t,e,n,r,i,s,o,a,l){return t=new BN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oy(s),t}function jN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hS(t){if(!t)return pi;t=t._reactInternals;e:{if(Vs(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(en(n))return c1(t,n,e)}return e}function dS(t,e,n,r,i,s,o,a,l){return t=Xy(n,r,!0,t,i,s,o,a,l),t.context=hS(null),n=t.current,r=$t(),i=li(n),s=yr(r,i),s.callback=e??null,oi(n,s,i),t.current.lanes=i,Du(t,i,r),tn(t,r),t}function Md(t,e,n,r){var i=e.current,s=$t(),o=li(i);return n=hS(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(Vn(t,i,o,s),Jc(t,i,o)),o}function Gh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jy(t,e){vw(t,e),(t=t.alternate)&&vw(t,e)}function zN(){return null}var fS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zy(t){this._internalRoot=t}Fd.prototype.render=Zy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));Md(t,e,null,null)};Fd.prototype.unmount=Zy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){Md(null,t,null,null)}),e[Ir]=null}};function Fd(t){this._internalRoot=t}Fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=zT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&WT(t)}};function e_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ww(){}function qN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Gh(o);s.call(u)}}var o=dS(e,r,t,0,null,!1,!1,"",ww);return t._reactRootContainer=o,t[Ir]=o.current,jl(t.nodeType===8?t.parentNode:t),ws(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Gh(l);a.call(u)}}var l=Xy(t,0,!1,null,null,!1,!1,"",ww);return t._reactRootContainer=l,t[Ir]=l.current,jl(t.nodeType===8?t.parentNode:t),ws(function(){Md(e,l,n,r)}),l}function Ud(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gh(o);a.call(l)}}Md(e,o,t,i)}else o=qN(n,e,t,i,r);return Gh(o)}BT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=tl(e.pendingLanes);n!==0&&(vy(e,n|1),tn(e,Ke()),!(oe&6)&&($o=Ke()+500,ki()))}break;case 13:ws(function(){var r=Er(t,1);if(r!==null){var i=$t();Vn(r,t,1,i)}}),Jy(t,1)}};wy=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=$t();Vn(e,t,134217728,n)}Jy(t,134217728)}};jT=function(t){if(t.tag===13){var e=li(t),n=Er(t,e);if(n!==null){var r=$t();Vn(n,t,e,r)}Jy(t,e)}};zT=function(){return de};qT=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};wm=function(t,e,n){switch(e){case"input":if(fm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xd(r);if(!i)throw Error(D(90));IT(r),fm(r,i)}}}break;case"textarea":TT(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};xT=Ky;bT=ws;var WN={usingClientEntryPoint:!1,Events:[Vu,uo,xd,CT,kT,Ky]},Ba={findFiberByHostInstance:Xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},GN={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=OT(t),t===null?null:t.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||zN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Rd=Cc.inject(GN),nr=Cc}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WN;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e_(e))throw Error(D(200));return jN(t,e,null,n)};mn.createRoot=function(t,e){if(!e_(t))throw Error(D(299));var n=!1,r="",i=fS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xy(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,jl(t.nodeType===8?t.parentNode:t),new Zy(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=OT(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return ws(t)};mn.hydrate=function(t,e,n){if(!$d(e))throw Error(D(200));return Ud(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!e_(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dS(e,null,t,1,n??null,i,!1,s,o),t[Ir]=e.current,jl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fd(e)};mn.render=function(t,e,n){if(!$d(e))throw Error(D(200));return Ud(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!$d(t))throw Error(D(40));return t._reactRootContainer?(ws(function(){Ud(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};mn.unstable_batchedUpdates=Ky;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$d(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Ud(t,e,n,!1,r)};mn.version="18.2.0-next-9e3b772b8-20220608";function pS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pS)}catch(t){console.error(t)}}pS(),dT.exports=mn;var KN=dT.exports,Iw=KN;om.createRoot=Iw.createRoot,om.hydrateRoot=Iw.hydrateRoot;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}var Jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jr||(Jr={}));const Ew="popstate";function HN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Zm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kh(i)}return YN(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QN(){return Math.random().toString(36).substr(2,8)}function Tw(t,e){return{usr:t.state,key:t.key,idx:e}}function Zm(t,e,n,r){return n===void 0&&(n=null),Xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fa(e):e,{state:n,key:e&&e.key||r||QN()})}function Kh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Jr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Jr.Pop;let v=c(),g=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:g})}function d(v,g){a=Jr.Push;let p=Zm(_.location,v,g);n&&n(p,v),u=c()+1;let m=Tw(p,u),w=_.createHref(p);try{o.pushState(m,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function f(v,g){a=Jr.Replace;let p=Zm(_.location,v,g);n&&n(p,v),u=c();let m=Tw(p,u),w=_.createHref(p);o.replaceState(m,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof v=="string"?v:Kh(v);return p=p.replace(/ $/,"%20"),Qe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ew,h),l=v,()=>{i.removeEventListener(Ew,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let g=y(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:f,go(v){return o.go(v)}};return _}var Sw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sw||(Sw={}));function XN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fa(e):e,i=t_(r.pathname||"/",n);if(i==null)return null;let s=gS(t);JN(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=cD(i);o=aD(s[a],l)}return o}function gS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ci([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:sD(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of yS(s.path))i(s,o,l)}),e}function yS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function JN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZN=/^:[\w-]+$/,eD=3,tD=2,nD=1,rD=10,iD=-2,Aw=t=>t==="*";function sD(t,e){let n=t.split("/"),r=n.length;return n.some(Aw)&&(r+=iD),e&&(r+=tD),n.filter(i=>!Aw(i)).reduce((i,s)=>i+(ZN.test(s)?eD:s===""?nD:rD),r)}function oD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ci([i,c.pathname]),pathnameBase:pD(ci([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ci([i,c.pathnameBase]))}return s}function lD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:f}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[h];return f&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function t_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fa(t):t;return{pathname:n?n.startsWith("/")?n:dD(n,e):e,search:mD(r),hash:gD(i)}}function dD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function n_(t,e){let n=fD(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function r_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fa(t):(i=Xl({},t),Qe(!i.pathname||!i.pathname.includes("?"),Rp("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Rp("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Rp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=hD(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ci=t=>t.join("/").replace(/\/\/+/g,"/"),pD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _S=["post","put","patch","delete"];new Set(_S);const _D=["get",..._S];new Set(_D);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jl.apply(this,arguments)}const i_=x.createContext(null),vD=x.createContext(null),xi=x.createContext(null),Bd=x.createContext(null),kr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),vS=x.createContext(null);function wD(t,e){let{relative:n}=e===void 0?{}:e;pa()||Qe(!1);let{basename:r,navigator:i}=x.useContext(xi),{hash:s,pathname:o,search:a}=IS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ci([r,o])),i.createHref({pathname:l,search:a,hash:s})}function pa(){return x.useContext(Bd)!=null}function ma(){return pa()||Qe(!1),x.useContext(Bd).location}function wS(t){x.useContext(xi).static||x.useLayoutEffect(t)}function ga(){let{isDataRoute:t}=x.useContext(kr);return t?OD():ID()}function ID(){pa()||Qe(!1);let t=x.useContext(i_),{basename:e,future:n,navigator:r}=x.useContext(xi),{matches:i}=x.useContext(kr),{pathname:s}=ma(),o=JSON.stringify(n_(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return wS(()=>{a.current=!0}),x.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=r_(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ci([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function ED(){let{matches:t}=x.useContext(kr),e=t[t.length-1];return e?e.params:{}}function IS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=x.useContext(xi),{matches:i}=x.useContext(kr),{pathname:s}=ma(),o=JSON.stringify(n_(i,r.v7_relativeSplatPath));return x.useMemo(()=>r_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function TD(t,e){return SD(t,e)}function SD(t,e,n,r){pa()||Qe(!1);let{navigator:i}=x.useContext(xi),{matches:s}=x.useContext(kr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ma(),c;if(e){var h;let v=typeof e=="string"?fa(e):e;l==="/"||(h=v.pathname)!=null&&h.startsWith(l)||Qe(!1),c=v}else c=u;let d=c.pathname||"/",f=d;if(l!=="/"){let v=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=XN(t,{pathname:f}),_=kD(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:ci([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:ci([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&_?x.createElement(Bd.Provider,{value:{location:Jl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Jr.Pop}},_):_}function AD(){let t=DD(),e=yD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const RD=x.createElement(AD,null);class PD extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(kr.Provider,{value:this.props.routeContext},x.createElement(vS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CD(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(i_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(kr.Provider,{value:e},r)}function kD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Qe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:f}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let f,y=!1,_=null,v=null;n&&(f=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||RD,l&&(u<0&&d===0?(VD("route-fallback",!1),y=!0,v=null):u===d&&(y=!0,v=h.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,d+1)),p=()=>{let m;return f?m=_:y?m=v:h.route.Component?m=x.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=c,x.createElement(CD,{match:h,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?x.createElement(PD,{location:n.location,revalidation:n.revalidation,component:_,error:f,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var ES=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ES||{}),Hh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hh||{});function xD(t){let e=x.useContext(i_);return e||Qe(!1),e}function bD(t){let e=x.useContext(vD);return e||Qe(!1),e}function ND(t){let e=x.useContext(kr);return e||Qe(!1),e}function TS(t){let e=ND(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function DD(){var t;let e=x.useContext(vS),n=bD(Hh.UseRouteError),r=TS(Hh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function OD(){let{router:t}=xD(ES.UseNavigateStable),e=TS(Hh.UseNavigateStable),n=x.useRef(!1);return wS(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Jl({fromRouteId:e},s)))},[t,e])}const Rw={};function VD(t,e,n){!e&&!Rw[t]&&(Rw[t]=!0)}function Pw(t){let{to:e,replace:n,state:r,relative:i}=t;pa()||Qe(!1);let{future:s,static:o}=x.useContext(xi),{matches:a}=x.useContext(kr),{pathname:l}=ma(),u=ga(),c=r_(e,n_(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(c);return x.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function zi(t){Qe(!1)}function LD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jr.Pop,navigator:s,static:o=!1,future:a}=t;pa()&&Qe(!1);let l=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:s,static:o,future:Jl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=fa(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:y="default"}=r,_=x.useMemo(()=>{let v=t_(c,l);return v==null?null:{location:{pathname:v,search:h,hash:d,state:f,key:y},navigationType:i}},[l,c,h,d,f,y,i]);return _==null?null:x.createElement(xi.Provider,{value:u},x.createElement(Bd.Provider,{children:n,value:_}))}function MD(t){let{children:e,location:n}=t;return TD(eg(e),n)}new Promise(()=>{});function eg(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,eg(r.props.children,s));return}r.type!==zi&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=eg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tg(){return tg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tg.apply(this,arguments)}function FD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $D(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function UD(t,e){return t.button===0&&(!e||e==="_self")&&!$D(t)}const BD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],jD="6";try{window.__reactRouterVersion=jD}catch{}const zD="startTransition",Cw=Mx[zD];function qD(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=HN({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=x.useCallback(h=>{u&&Cw?Cw(()=>l(h)):l(h)},[l,u]);return x.useLayoutEffect(()=>o.listen(c),[o,c]),x.createElement(LD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const WD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fr=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=FD(e,BD),{basename:f}=x.useContext(xi),y,_=!1;if(typeof u=="string"&&GD.test(u)&&(y=u,WD))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=t_(w.pathname,f);w.origin===m.origin&&C!=null?u=C+w.search+w.hash:_=!0}catch{}let v=wD(u,{relative:i}),g=KD(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(m){r&&r(m),m.defaultPrevented||g(m)}return x.createElement("a",tg({},d,{href:y||v,onClick:_||s?r:p,ref:n,target:l}))});var kw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kw||(kw={}));var xw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xw||(xw={}));function KD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=ga(),u=ma(),c=IS(t,{relative:o});return x.useCallback(h=>{if(UD(h,n)){h.preventDefault();let d=r!==void 0?r:Kh(u)===Kh(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var bw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new QD;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YD=function(t){const e=SS(t);return AS.encodeByteArray(e,!0)},Qh=function(t){return YD(t).replace(/\./g,"")},RS=function(t){try{return AS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Yh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XD(n)||(t[n]=Yh(t[n],e[n]));return t}function XD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=()=>JD().__FIREBASE_DEFAULTS__,e2=()=>{if(typeof process>"u"||typeof bw>"u")return;const t=bw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},t2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&RS(t[1]);return e&&JSON.parse(e)},jd=()=>{try{return ZD()||e2()||t2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PS=t=>{var e,n;return(n=(e=jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CS=t=>{const e=PS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kS=()=>{var t;return(t=jd())===null||t===void 0?void 0:t.config},xS=t=>{var e;return(e=jd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qh(JSON.stringify(n)),Qh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function s_(){var t;const e=(t=jd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i2(){return typeof self=="object"&&self.self===self}function NS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function o_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DS(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OS(){return!s_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zl(){try{return typeof indexedDB=="object"}catch{return!1}}function s2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o2,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?a2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function a2(t,e){return t.replace(l2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const l2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function u2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dw(s)&&Dw(o)){if(!Uo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function rl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VS(t,e){const n=new c2(t,e);return n.subscribe.bind(n)}class c2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");h2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pp),i.error===void 0&&(i.error=Pp),i.complete===void 0&&(i.complete=Pp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new n2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p2(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f2(t){return t===qi?void 0:t}function p2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new d2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=[];var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const LS={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},g2=Z.INFO,y2={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},_2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=y2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zd{constructor(e){this.name=e,this._logLevel=g2,this._logHandler=_2,this._userLogHandler=null,a_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function v2(t){a_.forEach(e=>{e.setLogLevel(t)})}function w2(t,e){for(const n of a_){let r=null;e&&e.level&&(r=LS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Z[s].toLowerCase(),message:a,args:o,type:i.name})}}}const I2=(t,e)=>e.some(n=>t instanceof n);let Ow,Vw;function E2(){return Ow||(Ow=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T2(){return Vw||(Vw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MS=new WeakMap,ng=new WeakMap,FS=new WeakMap,Cp=new WeakMap,l_=new WeakMap;function S2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&MS.set(n,t)}).catch(()=>{}),l_.set(e,t),e}function A2(t){if(ng.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ng.set(t,e)}let rg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ng.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R2(t){rg=t(rg)}function P2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kp(this),e,...n);return FS.set(r,e.sort?e.sort():[e]),hi(r)}:T2().includes(t)?function(...e){return t.apply(kp(this),e),hi(MS.get(this))}:function(...e){return hi(t.apply(kp(this),e))}}function C2(t){return typeof t=="function"?P2(t):(t instanceof IDBTransaction&&A2(t),I2(t,E2())?new Proxy(t,rg):t)}function hi(t){if(t instanceof IDBRequest)return S2(t);if(Cp.has(t))return Cp.get(t);const e=C2(t);return e!==t&&(Cp.set(t,e),l_.set(e,t)),e}const kp=t=>l_.get(t);function k2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hi(o.result),l.oldVersion,l.newVersion,hi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const x2=["get","getKey","getAll","getAllKeys","count"],b2=["put","add","delete","clear"],xp=new Map;function Lw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xp.get(e))return xp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xp.set(e,s),s}R2(t=>({...t,get:(e,n,r)=>Lw(e,n)||t.get(e,n,r),has:(e,n)=>!!Lw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function D2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ig="@firebase/app",Mw="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new zd("@firebase/app"),O2="@firebase/app-compat",V2="@firebase/analytics-compat",L2="@firebase/analytics",M2="@firebase/app-check-compat",F2="@firebase/app-check",$2="@firebase/auth",U2="@firebase/auth-compat",B2="@firebase/database",j2="@firebase/database-compat",z2="@firebase/functions",q2="@firebase/functions-compat",W2="@firebase/installations",G2="@firebase/installations-compat",K2="@firebase/messaging",H2="@firebase/messaging-compat",Q2="@firebase/performance",Y2="@firebase/performance-compat",X2="@firebase/remote-config",J2="@firebase/remote-config-compat",Z2="@firebase/storage",eO="@firebase/storage-compat",tO="@firebase/firestore",nO="@firebase/firestore-compat",rO="firebase",iO="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="[DEFAULT]",sO={[ig]:"fire-core",[O2]:"fire-core-compat",[L2]:"fire-analytics",[V2]:"fire-analytics-compat",[F2]:"fire-app-check",[M2]:"fire-app-check-compat",[$2]:"fire-auth",[U2]:"fire-auth-compat",[B2]:"fire-rtdb",[j2]:"fire-rtdb-compat",[z2]:"fire-fn",[q2]:"fire-fn-compat",[W2]:"fire-iid",[G2]:"fire-iid-compat",[K2]:"fire-fcm",[H2]:"fire-fcm-compat",[Q2]:"fire-perf",[Y2]:"fire-perf-compat",[X2]:"fire-rc",[J2]:"fire-rc-compat",[Z2]:"fire-gcs",[eO]:"fire-gcs-compat",[tO]:"fire-fst",[nO]:"fire-fst-compat","fire-js":"fire-js",[rO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map,eu=new Map;function Xh(t,e){try{t.container.addComponent(e)}catch(n){Is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $S(t,e){t.container.addOrOverwriteComponent(e)}function Sr(t){const e=t.name;if(eu.has(e))return Is.debug(`There were multiple attempts to register component ${e}.`),!1;eu.set(e,t);for(const n of gi.values())Xh(n,t);return!0}function _a(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function oO(t,e,n=mi){_a(t,e).clearInstance(n)}function aO(){eu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new Ls("app","Firebase",lO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uO=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=iO;function qd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=kS()),!n)throw _r.create("no-options");const s=gi.get(i);if(s){if(Uo(n,s.options)&&Uo(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new m2(i);for(const l of eu.values())o.addComponent(l);const a=new uO(n,r,o);return gi.set(i,a),a}function Wd(t=mi){const e=gi.get(t);if(!e&&t===mi&&kS())return qd();if(!e)throw _r.create("no-app",{appName:t});return e}function cO(){return Array.from(gi.values())}async function US(t){const e=t.name;gi.has(e)&&(gi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function hn(t,e,n){var r;let i=(r=sO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Is.warn(a.join(" "));return}Sr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function BS(t,e){if(t!==null&&typeof t!="function")throw _r.create("invalid-log-argument");w2(t,e)}function jS(t){v2(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="firebase-heartbeat-database",dO=1,tu="firebase-heartbeat-store";let bp=null;function zS(){return bp||(bp=k2(hO,dO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tu)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),bp}async function fO(t){try{const n=(await zS()).transaction(tu),r=await n.objectStore(tu).get(qS(t));return await n.done,r}catch(e){if(e instanceof Ct)Is.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Is.warn(n.message)}}}async function Fw(t,e){try{const r=(await zS()).transaction(tu,"readwrite");await r.objectStore(tu).put(e,qS(t)),await r.done}catch(n){if(n instanceof Ct)Is.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Is.warn(r.message)}}}function qS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=1024,mO=30*24*60*60*1e3;class gO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _O(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$w();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$w(),{heartbeatsToSend:r,unsentEntries:i}=yO(this._heartbeatsCache.heartbeats),s=Qh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function $w(){return new Date().toISOString().substring(0,10)}function yO(t,e=pO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zl()?s2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uw(t){return Qh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){Sr(new Fn("platform-logger",e=>new N2(e),"PRIVATE")),Sr(new Fn("heartbeat",e=>new gO(e),"PRIVATE")),hn(ig,Mw,t),hn(ig,Mw,"esm2017"),hn("fire-js","")}vO("");const wO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ct,SDK_VERSION:xr,_DEFAULT_ENTRY_NAME:mi,_addComponent:Xh,_addOrOverwriteComponent:$S,_apps:gi,_clearComponents:aO,_components:eu,_getProvider:_a,_registerComponent:Sr,_removeServiceInstance:oO,deleteApp:US,getApp:Wd,getApps:cO,initializeApp:qd,onLog:BS,registerVersion:hn,setLogLevel:jS},Symbol.toStringTag,{value:"Module"}));function u_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ja={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Gs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function WS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EO=IO,TO=WS,GS=new Ls("auth","Firebase",WS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new zd("@firebase/auth");function SO(t,...e){Jh.logLevel<=Z.WARN&&Jh.warn(`Auth (${xr}): ${t}`,...e)}function sh(t,...e){Jh.logLevel<=Z.ERROR&&Jh.error(`Auth (${xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw c_(t,...e)}function It(t,...e){return c_(t,...e)}function KS(t,e,n){const r=Object.assign(Object.assign({},TO()),{[e]:n});return new Ls("auth","Firebase",r).create(e,{appName:t.name})}function va(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),KS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function c_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GS.create(t,...e)}function O(t,e,...n){if(!t)throw c_(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sh(e),new Error(e)}function $n(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h_(){return Bw()==="http:"||Bw()==="https:"}function Bw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h_()||NS()||"connection"in navigator)?navigator.onLine:!0}function RO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=r2()||o_()}get(){return AO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=new Mu(3e4,6e4);function je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ze(t,e,n,r,i={}){return QS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ya(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HS.fetch()(YS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function QS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PO),e);try{const i=new xO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw il(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw KS(t,c,u);ht(t,c)}}catch(i){if(i instanceof Ct)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function br(t,e,n,r,i={}){const s=await ze(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function YS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?d_(t.config,i):`${t.config.apiScheme}://${i}`}function kO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),CO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){return t!==void 0&&t.getResponse!==void 0}function zw(t){return t!==void 0&&t.enterprise!==void 0}class bO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t){return(await ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function DO(t,e){return ze(t,"GET","/v2/recaptchaConfig",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e){return ze(t,"POST","/v1/accounts:delete",e)}async function VO(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function LO(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MO(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=Gd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Il(Np(i.auth_time)),issuedAtTime:Il(Np(i.iat)),expirationTime:Il(Np(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Np(t){return Number(t)*1e3}function Gd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sh("JWT malformed, contained fewer than 3 sections"),null;try{const i=RS(n);return i?JSON.parse(i):(sh("Failed to decode base64 JWT payload"),null)}catch(i){return sh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function FO(t){const e=Gd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&$O(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $O({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Il(this.lastLoginAt),this.creationTime=Il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ar(t,LO(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zO(s.providerUserInfo):[],a=jO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new XS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function BO(t){const e=j(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zO(t){return t.map(e=>{var{providerId:n}=e,r=u_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qO(t,e){const n=await QS(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=YS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WO(t,e){return ze(t,"POST","/v2/accounts:revokeToken",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new iu;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new iu,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ls{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=u_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new XS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MO(this,e)}reload(){return BO(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ar(this,OO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:C,providerData:T,stsTokenManager:E}=n;O(m&&E,e,"internal-error");const S=iu.fromJSON(this.name,E);O(typeof m=="string",e,"internal-error"),Fr(h,e.name),Fr(d,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),Fr(f,e.name),Fr(y,e.name),Fr(_,e.name),Fr(v,e.name),Fr(g,e.name),Fr(p,e.name);const A=new ls({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:C,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:S,createdAt:g,lastLoginAt:p});return T&&Array.isArray(T)&&(A.providerData=T.map(k=>Object.assign({},k))),v&&(A._redirectEventId=v),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new iu;i.updateFromServerResponse(n);const s=new ls({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ru(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new Map;function an(t){$n(t instanceof Function,"Expected a class definition");let e=qw.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JS.type="NONE";const Bo=JS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t,e,n){return`firebase:${t}:${e}:${n}`}class Ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=us(this.userKey,i.apiKey,s),this.fullPersistenceKey=us("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ro(an(Bo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||an(Bo);const o=us(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ls._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ro(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ro(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nA(e))return"Blackberry";if(rA(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||eA(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ZS(t=Ce()){return/firefox\//i.test(t)}function f_(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eA(t=Ce()){return/crios\//i.test(t)}function tA(t=Ce()){return/iemobile/i.test(t)}function Fu(t=Ce()){return/android/i.test(t)}function nA(t=Ce()){return/blackberry/i.test(t)}function rA(t=Ce()){return/webos/i.test(t)}function wa(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GO(t=Ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function KO(t=Ce()){var e;return wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HO(){return DS()&&document.documentMode===10}function iA(t=Ce()){return wa(t)||Fu(t)||rA(t)||nA(t)||/windows phone/i.test(t)||tA(t)}function QO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t,e=[]){let n;switch(t){case"Browser":n=Ww(Ce());break;case"Worker":n=`${Ww(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e={}){return ze(t,"GET","/v2/passwordPolicy",je(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=6;class ZO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gw(this),this.idTokenSubscription=new Gw(this),this.beforeStateQueue=new YO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XO(this),n=new ZO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fe(t){return j(t)}class Gw{constructor(e){this.auth=e,this.observer=null,this.addObserver=VS(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tV(t){$u=t}function p_(t){return $u.loadJS(t)}function nV(){return $u.recaptchaV2Script}function rV(){return $u.recaptchaEnterpriseScript}function iV(){return $u.gapiScript}function oA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sV="recaptcha-enterprise",oV="NO_RECAPTCHA";class aV{constructor(e){this.type=sV,this.auth=Fe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{DO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bO(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;zw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(oV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&zw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=rV();l.length!==0&&(l+=a),p_(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Kw(t,e,n,r=!1){const i=new aV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function su(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t,e){const n=_a(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Uo(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function uV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aA(t,e,n){const r=Fe(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=lA(e),{host:o,port:a}=cV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hV()}function lA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cV(t){const e=lA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hw(o)}}}function Hw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return ze(t,"POST","/v1/accounts:resetPassword",je(t,e))}async function dV(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function fV(t,e){return ze(t,"POST","/v1/accounts:signUp",e)}async function pV(t,e){return ze(t,"POST","/v1/accounts:update",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(t,e){return br(t,"POST","/v1/accounts:signInWithPassword",je(t,e))}async function Kd(t,e){return ze(t,"POST","/v1/accounts:sendOobCode",je(t,e))}async function gV(t,e){return Kd(t,e)}async function yV(t,e){return Kd(t,e)}async function _V(t,e){return Kd(t,e)}async function vV(t,e){return Kd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}async function IV(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Ia{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ou(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ou(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(e,n,"signInWithPassword",mV);case"emailLink":return wV(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(e,r,"signUpPassword",fV);case"emailLink":return IV(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e){return br(t,"POST","/v1/accounts:signInWithIdp",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="http://localhost";class sr extends Ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=u_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vr(e,n)}buildRequest(){const e={requestUri:EV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TV(t,e){return ze(t,"POST","/v1/accounts:sendVerificationCode",je(t,e))}async function SV(t,e){return br(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e))}async function AV(t,e){const n=await br(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e));if(n.temporaryProof)throw il(t,"account-exists-with-different-credential",n);return n}const RV={USER_NOT_FOUND:"user-not-found"};async function PV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return br(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,n),RV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Ia{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new cs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new cs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return SV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return AV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return PV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new cs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kV(t){const e=yo(rl(t)).link,n=e?yo(rl(e)).deep_link_id:null,r=yo(rl(t)).deep_link_id;return(r?yo(rl(r)).link:null)||r||n||e||t}class Hd{constructor(e){var n,r,i,s,o,a;const l=yo(rl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=CV((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kV(e);try{return new Hd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return ou._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hd.parseLink(n);return O(r,"argument-error"),ou._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Po extends Ea{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),sr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),sr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Po.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Po.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Po(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ea{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ea{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV="http://localhost";class jo extends Ia{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new jo(r,s)}static _create(e,n){return new jo(e,n)}buildRequest(){return{requestUri:xV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV="saml.";class Zh extends Nr{constructor(e){O(e.startsWith(bV),"argument-error"),super(e)}static credentialFromResult(e){return Zh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Zh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=jo.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return jo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ea{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e){return br(t,"POST","/v1/accounts:signUp",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ls._fromIdTokenResponse(e,r,i),o=Qw(r);return new Rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qw(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NV(t){var e;const n=Fe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await cA(n,{returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ed.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ed(e,n,r,i)}}function hA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ed._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DV(t,e){const n=j(t);await Qd(!0,n,e);const{providerUserInfo:r}=await VO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=dA(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function m_(t,e,n=!1){const r=await Ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rn._forOperation(t,"link",r)}async function Qd(t,e,n){await ru(e);const r=dA(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ar(t,hA(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Gd(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e,n=!1){const r="signIn",i=await hA(t,r,e),s=await Rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Yd(t,e){return pA(Fe(t),e)}async function mA(t,e){const n=j(t);return await Qd(!1,n,e.providerId),m_(n,e)}async function gA(t,e){return fA(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OV(t,e){return br(t,"POST","/v1/accounts:signInWithCustomToken",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VV(t,e){const n=Fe(t),r=await OV(n,{token:e,returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?g_._fromServerResponse(e,n):"totpInfo"in n?y_._fromServerResponse(e,n):ht(e,"internal-error")}}class g_ extends Uu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new g_(n)}}class y_ extends Uu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new y_(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t){const e=Fe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LV(t,e,n){const r=Fe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Xd(r,i,n),await su(r,i,"getOobCode",yV)}async function MV(t,e,n){await uA(j(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&__(t),r})}async function FV(t,e){await pV(j(t),{oobCode:e})}async function yA(t,e){const n=j(t),r=await uA(n,{oobCode:e}),i=r.requestType;switch(O(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Uu._fromServerResponse(Fe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function $V(t,e){const{data:n}=await yA(j(t),e);return n.email}async function _A(t,e,n){const r=Fe(t),o=await su(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&__(t),l}),a=await Rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function vA(t,e,n){return Yd(j(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&__(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UV(t,e,n){const r=Fe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){O(a.handleCodeInApp,r,"argument-error"),a&&Xd(r,o,a)}s(i,n),await su(r,i,"getOobCode",_V)}function BV(t,e){const n=Hd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function jV(t,e,n){const r=j(t),i=bi.credentialWithLink(e,n||nu());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Yd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zV(t,e){return ze(t,"POST","/v1/accounts:createAuthUri",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV(t,e){const n=h_()?nu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await zV(j(t),r);return i||[]}async function WV(t,e){const n=j(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Xd(n.auth,i,e);const{email:s}=await gV(n.auth,i);s!==t.email&&await t.reload()}async function GV(t,e,n){const r=j(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Xd(r.auth,s,n);const{email:o}=await vV(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KV(t,e){return ze(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ar(r,KV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HV(t,e){return wA(j(t),e,null)}function QV(t,e){return wA(j(t),null,e)}async function wA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ar(t,dV(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Gd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Co(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new XV(s,i);case"github.com":return new JV(s,i);case"google.com":return new ZV(s,i);case"twitter.com":return new eL(s,i,t.screenName||null);case"custom":case"anonymous":return new Co(s,null);default:return new Co(s,r,i)}}class Co{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class IA extends Co{constructor(e,n,r,i){super(e,n,r),this.username=i}}class XV extends Co{constructor(e,n){super(e,"facebook.com",n)}}class JV extends IA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ZV extends Co{constructor(e,n){super(e,"google.com",n)}}class eL extends IA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function tL(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:YV(n)}function nL(t,e,n,r){return j(t).onIdTokenChanged(e,n,r)}function rL(t,e,n){return j(t).beforeAuthStateChanged(e,n)}function iL(t,e,n,r){return j(t).onAuthStateChanged(e,n,r)}function sL(t){return j(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new es("enroll",e,n)}static _fromMfaPendingCredential(e){return new es("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return es._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return es._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Fe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Uu._fromServerResponse(r,a));O(i.mfaPendingCredential,r,"internal-error");const o=es._fromMfaPendingCredential(i.mfaPendingCredential);return new w_(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Rn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return O(n.user,r,"internal-error"),Rn._forOperation(n.user,n.operationType,u);default:ht(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function oL(t,e){var n;const r=j(t),i=e;return O(e.customData.operationType,r,"argument-error"),O((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),w_._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:start",je(t,e))}function lL(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",je(t,e))}function uL(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",je(t,e))}class I_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Uu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new I_(e)}async getSession(){return es._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Ar(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Ar(this.user,uL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Dp=new WeakMap;function cL(t){const e=j(t);return Dp.has(e)||Dp.set(e,I_._fromUser(e)),Dp.get(e)}const td="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(td,"1"),this.storage.removeItem(td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(){const t=Ce();return f_(t)||wa(t)}const dL=1e3,fL=10;class TA extends EA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hL()&&QO(),this.fallbackToPolling=iA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TA.type="LOCAL";const Jd=TA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA extends EA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SA.type="SESSION";const yi=SA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Bu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function gL(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function yL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _L(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vL(){return E_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="firebaseLocalStorageDb",wL=1,nd="firebaseLocalStorage",RA="fbase_key";class ju{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ef(t,e){return t.transaction([nd],e?"readwrite":"readonly").objectStore(nd)}function IL(){const t=indexedDB.deleteDatabase(AA);return new ju(t).toPromise()}function sg(){const t=indexedDB.open(AA,wL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nd,{keyPath:RA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nd)?e(r):(r.close(),await IL(),e(await sg()))})})}async function Yw(t,e,n){const r=ef(t,!0).put({[RA]:e,value:n});return new ju(r).toPromise()}async function EL(t,e){const n=ef(t,!1).get(e),r=await new ju(n).toPromise();return r===void 0?null:r.value}function Xw(t,e){const n=ef(t,!0).delete(e);return new ju(n).toPromise()}const TL=800,SL=3;class PA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zd._getInstance(vL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yL(),!this.activeServiceWorker)return;this.sender=new mL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_L()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sg();return await Yw(e,td,"1"),await Xw(e,td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ef(i,!1).getAll();return new ju(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PA.type="LOCAL";const zo=PA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:start",je(t,e))}function RL(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:finalize",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=500,CL=6e4,kc=1e12;class kL{constructor(e){this.auth=e,this.counter=kc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new xL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||kc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||kc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||kc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class xL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},CL)},PL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function bL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=oA("rcb"),NL=new Mu(3e4,6e4);class DL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Je().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(OL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&jw(Je().grecaptcha)?Promise.resolve(Je().grecaptcha):new Promise((r,i)=>{const s=Je().setTimeout(()=>{i(It(e,"network-request-failed"))},NL.get());Je()[Op]=()=>{Je().clearTimeout(s),delete Je()[Op];const a=Je().grecaptcha;if(!a||!jw(a)){i(It(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${nV()}?${ya({onload:Op,render:"explicit",hl:n})}`;p_(o).catch(()=>{clearTimeout(s),i(It(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Je().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function OL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class VL{async load(e){return new kL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="recaptcha",LL={theme:"light",type:"image"};let ML=class{constructor(e,n,r=Object.assign({},LL)){this.parameters=r,this.type=CA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new VL:new DL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Je()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(h_()&&!E_(),this.auth,"internal-error"),await FL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await NO(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function FL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=cs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function $L(t,e,n){const r=Fe(t),i=await tf(r,e,j(n));return new T_(i,s=>Yd(r,s))}async function UL(t,e,n){const r=j(t);await Qd(!1,r,"phone");const i=await tf(r.auth,e,j(n));return new T_(i,s=>mA(r,s))}async function BL(t,e,n){const r=j(t),i=await tf(r.auth,e,j(n));return new T_(i,s=>gA(r,s))}async function tf(t,e,n){var r;const i=await n.verify();try{O(typeof i=="string",t,"argument-error"),O(n.type===CA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return O(o.type==="enroll",t,"internal-error"),(await aL(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await AL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await TV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function jL(t,e){await m_(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es=class oh{constructor(e){this.providerId=oh.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,n){return tf(this.auth,e,j(n))}static credential(e,n){return cs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return oh.credentialFromTaggedObject(n)}static credentialFromError(e){return oh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?cs._fromTokenResponse(n,r):null}};Es.PROVIDER_ID="phone";Es.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e){return e?an(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends Ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zL(t){return pA(t.auth,new S_(t),t.bypassAuthState)}function qL(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),fA(n,new S_(t),t.bypassAuthState)}async function WL(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),m_(n,new S_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zL;case"linkViaPopup":case"linkViaRedirect":return WL;case"reauthViaPopup":case"reauthViaRedirect":return qL;default:ht(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=new Mu(2e3,1e4);async function xA(t,e,n){const r=Fe(t);va(t,e,Nr);const i=Ms(r,n);return new pr(r,"signInViaPopup",e,i).executeNotNull()}async function KL(t,e,n){const r=j(t);va(r.auth,e,Nr);const i=Ms(r.auth,n);return new pr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function HL(t,e,n){const r=j(t);va(r.auth,e,Nr);const i=Ms(r.auth,n);return new pr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class pr extends kA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GL.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL="pendingRedirect",El=new Map;class YL extends kA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const r=await XL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XL(t,e){const n=NA(e),r=bA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function A_(t,e){return bA(t)._set(NA(e),"true")}function JL(){El.clear()}function R_(t,e){El.set(t._key(),e)}function bA(t){return an(t._redirectPersistence)}function NA(t){return us(QL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(t,e,n){return eM(t,e,n)}async function eM(t,e,n){const r=Fe(t);va(t,e,Nr),await r._initializationPromise;const i=Ms(r,n);return await A_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function tM(t,e,n){return nM(t,e,n)}async function nM(t,e,n){const r=j(t);va(r.auth,e,Nr),await r.auth._initializationPromise;const i=Ms(r.auth,n);await A_(i,r.auth);const s=await DA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function rM(t,e,n){return iM(t,e,n)}async function iM(t,e,n){const r=j(t);va(r.auth,e,Nr),await r.auth._initializationPromise;const i=Ms(r.auth,n);await Qd(!1,r,e.providerId),await A_(i,r.auth);const s=await DA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function sM(t,e){return await Fe(t)._initializationPromise,nf(t,e,!1)}async function nf(t,e,n=!1){const r=Fe(t),i=Ms(r,e),o=await new YL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function DA(t){const e=Bu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=10*60*1e3;class OA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jw(e))}saveEventToCache(e){this.cachedEventUids.add(Jw(e)),this.lastProcessedEventTime=Date.now()}}function Jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e={}){return ze(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uM=/^https?/;async function cM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LA(t);for(const n of e)try{if(hM(n))return}catch{}ht(t,"unauthorized-domain")}function hM(t){const e=nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uM.test(n))return!1;if(lM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=new Mu(3e4,6e4);function Zw(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fM(t){return new Promise((e,n)=>{var r,i,s;function o(){Zw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zw(),n(It(t,"network-request-failed"))},timeout:dM.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=oA("iframefcb");return Je()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},p_(`${iV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ah=null,e})}let ah=null;function pM(t){return ah=ah||fM(t),ah}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=new Mu(5e3,15e3),gM="__/auth/iframe",yM="emulator/auth/iframe",_M={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wM(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?d_(e,yM):`https://${t.config.authDomain}/${gM}`,r={apiKey:e.apiKey,appName:t.name,v:xr},i=vM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ya(r).slice(1)}`}async function IM(t){const e=await pM(t),n=Je().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:wM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_M,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},mM.get());function l(){Je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TM=500,SM=600,AM="_blank",RM="http://localhost";class eI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PM(t,e,n,r=TM,i=SM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},EM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ce().toLowerCase();n&&(a=eA(u)?AM:n),ZS(u)&&(e=e||RM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(KO(u)&&a!=="_self")return CM(e||"",a),new eI(null);const h=window.open(e||"",a,c);O(h,t,"popup-blocked");try{h.focus()}catch{}return new eI(h)}function CM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM="__/auth/handler",xM="emulator/auth/handler",bM=encodeURIComponent("fac");async function og(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(e instanceof Nr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ea){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${bM}=${encodeURIComponent(l)}`:"";return`${NM(t)}?${ya(a).slice(1)}${u}`}function NM({config:t}){return t.emulator?d_(t,xM):`https://${t.authDomain}/${kM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="webStorageSupport";class DM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=nf,this._overrideRedirectResult=R_}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await og(e,n,r,nu(),i);return PM(e,o,Bu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await og(e,n,r,nu(),i);return gL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IM(e),r=new OA(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vp,{type:Vp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vp];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iA()||f_()||wa()}}const MA=DM;class OM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Yn("unexpected MultiFactorSessionType")}}}class P_ extends OM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new P_(e)}_finalizeEnroll(e,n,r){return lL(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return RL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class FA{constructor(){}static assertion(e){return P_._fromCredential(e)}}FA.FACTOR_ID="phone";var tI="@firebase/auth",nI="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MM(t){Sr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sA(t)},u=new eV(r,i,s,l);return uV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sr(new Fn("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(r=>new VM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(tI,nI,LM(t)),hn(tI,nI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=5*60,$M=xS("authIdTokenMaxAge")||FM;let rI=null;const UM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$M)return;const i=n==null?void 0:n.token;rI!==i&&(rI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $A(t=Wd()){const e=_a(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lV(t,{popupRedirectResolver:MA,persistence:[zo,Jd,yi]}),r=xS("authTokenSyncURL");if(r){const s=UM(r);rL(n,s,()=>s(n.currentUser)),nL(n,o=>s(o))}const i=PS("auth");return i&&aA(n,`http://${i}`),n}function BM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MM("Browser");var jM="firebase",zM="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(jM,zM,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n){this._delegate=e,this.firebase=n,Xh(e,new Fn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),US(this._delegate)))}_getService(e,n=mi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=mi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Xh(this._delegate,e)}_addOrOverwriteComponent(e){$S(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},iI=new Ls("app-compat","Firebase",WM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:hn,setLogLevel:jS,onLog:BS,apps:null,SDK_VERSION:xr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:wO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||mi,!Nw(e,u))throw iI.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=qd(u,c);if(Nw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(Sr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw iI.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&Yh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){const t=GM(qM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:UA,extendNamespace:e,createSubscribe:VS,ErrorFactory:Ls,deepExtend:Yh});function e(n){Yh(t,n)}return t}const KM=UA();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new zd("@firebase/app-compat"),HM="@firebase/app-compat",QM="0.2.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){hn(HM,QM,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(i2()&&self.firebase!==void 0){sI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&sI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const rf=KM;YM();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=2e3;async function JM(t,e,n){var r;const{BuildInfo:i}=Ts();$n(e.sessionId,"AuthEvent did not contain a session ID");const s=await rF(e.sessionId),o={};return wa()?o.ibi=i.packageName:Fu()?o.apn=i.packageName:ht(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,og(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function ZM(t){const{BuildInfo:e}=Ts(),n={};wa()?n.iosBundleId=e.packageName:Fu()?n.androidPackageName=e.packageName:ht(t,"operation-not-supported-in-this-environment"),await LA(t,n)}function eF(t){const{cordova:e}=Ts();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,GO()?"_blank":"_system","location=yes"),n(i)})})}async function tF(t,e,n){const{cordova:r}=Ts();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(It(t,"redirect-cancelled-by-user"))},XM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Fu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function nF(t){var e,n,r,i,s,o,a,l,u,c;const h=Ts();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rF(t){const e=iF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function iF(t){if($n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF=20;class oF extends OA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function aF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:cF(),postBody:null,tenantId:t.tenantId,error:It(t,"no-auth-event")}}function lF(t,e){return ag()._set(lg(t),e)}async function oI(t){const e=await ag()._get(lg(t));return e&&await ag()._remove(lg(t)),e}function uF(t,e){var n,r;const i=dF(e);if(i.includes("/__/auth/callback")){const s=lh(i),o=s.firebaseError?hF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?It(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function cF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<sF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function ag(){return an(Jd)}function lg(t){return us("authEvent",t.config.apiKey,t.name)}function hF(t){try{return JSON.parse(t)}catch{return null}}function dF(t){const e=lh(t),n=e.link?decodeURIComponent(e.link):void 0,r=lh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return lh(i).link||i||r||n||t}function lh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return yo(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=500;class pF{constructor(){this._redirectPersistence=yi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=nf,this._overrideRedirectResult=R_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new oF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){nF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),JL(),await this._originValidation(e);const o=aF(e,r,i);await lF(e,o);const a=await JM(e,o,n),l=await eF(a);return tF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ts(),o=setTimeout(async()=>{await oI(e),n.onEvent(aI())},fF),a=async c=>{clearTimeout(o);const h=await oI(e);let d=null;h&&(c!=null&&c.url)&&(d=uF(h,c.url)),n.onEvent(d||aI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Ts().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const mF=pF;function aI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:It("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(t,e){Fe(t)._logFramework(e)}var yF="@firebase/auth-compat",_F="0.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=1e3;function Tl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function wF(){return Tl()==="http:"||Tl()==="https:"}function BA(t=Ce()){return!!((Tl()==="file:"||Tl()==="ionic:"||Tl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function IF(){return o_()||s_()}function EF(){return DS()&&(document==null?void 0:document.documentMode)===11}function TF(t=Ce()){return/Edge\/\d+/.test(t)}function SF(t=Ce()){return EF()||TF(t)}function jA(){try{const t=self.localStorage,e=Bu();if(t)return t.setItem(e,"1"),t.removeItem(e),SF()?Zl():!0}catch{return C_()&&Zl()}return!1}function C_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Lp(){return(wF()||NS()||BA())&&!IF()&&jA()&&!C_()}function zA(){return BA()&&typeof document<"u"}async function AF(){return zA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},vF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function RF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={LOCAL:"local",NONE:"none",SESSION:"session"},za=O,qA="persistence";function PF(t,e){if(za(Object.values(sn).includes(e),t,"invalid-persistence-type"),o_()){za(e!==sn.SESSION,t,"unsupported-persistence-type");return}if(s_()){za(e===sn.NONE,t,"unsupported-persistence-type");return}if(C_()){za(e===sn.NONE||e===sn.LOCAL&&Zl(),t,"unsupported-persistence-type");return}za(e===sn.NONE||jA(),t,"unsupported-persistence-type")}async function ug(t){await t._initializationPromise;const e=WA(),n=us(qA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function CF(t,e){const n=WA();if(!n)return[];const r=us(qA,t,e);switch(n.getItem(r)){case sn.NONE:return[Bo];case sn.LOCAL:return[zo,yi];case sn.SESSION:return[yi];default:return[]}}function WA(){var t;try{return((t=RF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=O;class Zr{constructor(){this.browserResolver=an(MA),this.cordovaResolver=an(mF),this.underlyingResolver=null,this._redirectPersistence=yi,this._completeRedirectFn=nf,this._overrideRedirectResult=R_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return zA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return kF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await AF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return t.unwrap()}function xF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bF(t){return KA(t)}function NF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new DF(t,oL(t,e))}else if(r){const i=KA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function KA(t){const{_tokenResponse:e}=t instanceof Ct?t.customData:t;if(!e)return null;if(!(t instanceof Ct)&&"temporaryProof"in e&&"phoneNumber"in e)return Es.credentialFromResult(t);const n=e.providerId;if(!n||n===ja.PASSWORD)return null;let r;switch(n){case ja.GOOGLE:r=Dn;break;case ja.FACEBOOK:r=Gn;break;case ja.GITHUB:r=Kn;break;case ja.TWITTER:r=Hn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?jo._create(n,a):sr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Po(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Ct?r.credentialFromError(t):r.credentialFromResult(t)}function Wt(t,e){return e.catch(n=>{throw n instanceof Ct&&NF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:bF(n),additionalUserInfo:tL(n),user:sf.getOrCreate(i)}})}async function cg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Wt(t,n.confirm(r))}}class DF{constructor(e,n){this.resolver=n,this.auth=xF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Wt(GA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf=class sl{constructor(e){this._delegate=e,this.multiFactor=cL(e)}static getOrCreate(e){return sl.USER_MAP.has(e)||sl.USER_MAP.set(e,new sl(e)),sl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Wt(this.auth,mA(this._delegate,e))}async linkWithPhoneNumber(e,n){return cg(this.auth,UL(this._delegate,e,n))}async linkWithPopup(e){return Wt(this.auth,HL(this._delegate,e,Zr))}async linkWithRedirect(e){return await ug(Fe(this.auth)),rM(this._delegate,e,Zr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Wt(this.auth,gA(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return cg(this.auth,BL(this._delegate,e,n))}reauthenticateWithPopup(e){return Wt(this.auth,KL(this._delegate,e,Zr))}async reauthenticateWithRedirect(e){return await ug(Fe(this.auth)),tM(this._delegate,e,Zr)}sendEmailVerification(e){return WV(this._delegate,e)}async unlink(e){return await DV(this._delegate,e),this}updateEmail(e){return HV(this._delegate,e)}updatePassword(e){return QV(this._delegate,e)}updatePhoneNumber(e){return jL(this._delegate,e)}updateProfile(e){return v_(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return GV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};sf.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=O;let hg=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;qa(r,"invalid-api-key",{appName:e.name}),qa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Zr:void 0;this._delegate=n.initialize({options:{persistence:OF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(EO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){aA(this._delegate,e,n)}applyActionCode(e){return FV(this._delegate,e)}checkActionCode(e){return yA(this._delegate,e)}confirmPasswordReset(e,n){return MV(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Wt(this._delegate,_A(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return qV(this._delegate,e)}isSignInWithEmailLink(e){return BV(this._delegate,e)}async getRedirectResult(){qa(Lp(),this._delegate,"operation-not-supported-in-this-environment");const e=await sM(this._delegate,Zr);return e?Wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){gF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=lI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=lI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return UV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return LV(this._delegate,e,n||void 0)}async setPersistence(e){PF(this._delegate,e);let n;switch(e){case sn.SESSION:n=yi;break;case sn.LOCAL:n=await an(zo)._isAvailable()?zo:Jd;break;case sn.NONE:n=Bo;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Wt(this._delegate,NV(this._delegate))}signInWithCredential(e){return Wt(this._delegate,Yd(this._delegate,e))}signInWithCustomToken(e){return Wt(this._delegate,VV(this._delegate,e))}signInWithEmailAndPassword(e,n){return Wt(this._delegate,vA(this._delegate,e,n))}signInWithEmailLink(e,n){return Wt(this._delegate,jV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return cg(this._delegate,$L(this._delegate,e,n))}async signInWithPopup(e){return qa(Lp(),this._delegate,"operation-not-supported-in-this-environment"),Wt(this._delegate,xA(this._delegate,e,Zr))}async signInWithRedirect(e){return qa(Lp(),this._delegate,"operation-not-supported-in-this-environment"),await ug(this._delegate),ZL(this._delegate,e,Zr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $V(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};hg.Persistence=sn;function lI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&sf.getOrCreate(o)),error:e,complete:n}}function OF(t,e){const n=CF(t,e);if(typeof self<"u"&&!n.includes(zo)&&n.push(zo),typeof window<"u")for(const r of[Jd,yi])n.includes(r)||n.push(r);return n.includes(Bo)||n.push(Bo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.providerId="phone",this._delegate=new Es(GA(rf.auth()))}static credential(e,n){return Es.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}k_.PHONE_SIGN_IN_METHOD=Es.PHONE_SIGN_IN_METHOD;k_.PROVIDER_ID=Es.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF=O;class LF{constructor(e,n,r=rf.app()){var i;VF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ML(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF="auth-compat";function FF(t){t.INTERNAL.registerComponent(new Fn(MF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Gs.EMAIL_SIGNIN,PASSWORD_RESET:Gs.PASSWORD_RESET,RECOVER_EMAIL:Gs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Gs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Gs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Gs.VERIFY_EMAIL}},EmailAuthProvider:bi,FacebookAuthProvider:Gn,GithubAuthProvider:Kn,GoogleAuthProvider:Dn,OAuthProvider:Po,SAMLAuthProvider:Zh,PhoneAuthProvider:k_,PhoneMultiFactorGenerator:FA,RecaptchaVerifier:LF,TwitterAuthProvider:Hn,Auth:hg,AuthCredential:Ia,Error:Ct}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(yF,_F)}FF(rf);var $F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,x_=x_||{},H=$F||self;function of(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UF(t){return Object.prototype.hasOwnProperty.call(t,Mp)&&t[Mp]||(t[Mp]=++BF)}var Mp="closure_uid_"+(1e9*Math.random()>>>0),BF=0;function jF(t,e,n){return t.call.apply(t.bind,arguments)}function zF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=jF:kt=zF,kt.apply(null,arguments)}function xc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ft(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ni(){this.s=this.s,this.o=this.o}var qF=0;Ni.prototype.s=!1;Ni.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qF!=0)&&UF(this)};Ni.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const HA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function b_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function uI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(of(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var WF=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};H.addEventListener("test",n,e),H.removeEventListener("test",n,e)}catch{}return t}();function au(t){return/^[\s\xa0]*$/.test(t)}function af(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function Qn(t){return af().indexOf(t)!=-1}function N_(t){return N_[" "](t),t}N_[" "]=function(){};function GF(t,e){var n=F4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var KF=Qn("Opera"),qo=Qn("Trident")||Qn("MSIE"),QA=Qn("Edge"),dg=QA||qo,YA=Qn("Gecko")&&!(af().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),HF=af().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge");function XA(){var t=H.document;return t?t.documentMode:void 0}var fg;e:{var Fp="",$p=function(){var t=af();if(YA)return/rv:([^\);]+)(\)|;)/.exec(t);if(QA)return/Edge\/([\d\.]+)/.exec(t);if(qo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(HF)return/WebKit\/(\S+)/.exec(t);if(KF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($p&&(Fp=$p?$p[1]:""),qo){var Up=XA();if(Up!=null&&Up>parseFloat(Fp)){fg=String(Up);break e}}fg=Fp}var pg;if(H.document&&qo){var cI=XA();pg=cI||parseInt(fg,10)||void 0}else pg=void 0;var QF=pg;function lu(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(YA){e:{try{N_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lu.$.h.call(this)}}ft(lu,xt);var YF={2:"touch",3:"pen",4:"mouse"};lu.prototype.h=function(){lu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qu="closure_listenable_"+(1e6*Math.random()|0),XF=0;function JF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++XF,this.fa=this.ia=!1}function lf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function D_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ZF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function JA(t){const e={};for(const n in t)e[n]=t[n];return e}const hI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ZA(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<hI.length;s++)n=hI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function uf(t){this.src=t,this.g={},this.h=0}uf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new JF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function mg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=HA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var O_="closure_lm_"+(1e6*Math.random()|0),Bp={};function eR(t,e,n,r,i){if(r&&r.once)return nR(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)eR(t,e[s],n,r,i);return null}return n=M_(n),t&&t[qu]?t.O(e,n,zu(r)?!!r.capture:!!r,i):tR(t,e,n,!1,r,i)}function tR(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=zu(i)?!!i.capture:!!i,a=L_(t);if(a||(t[O_]=a=new uf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=e4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)WF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(iR(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function e4(){function t(n){return e.call(t.src,t.listener,n)}const e=t4;return t}function nR(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)nR(t,e[s],n,r,i);return null}return n=M_(n),t&&t[qu]?t.P(e,n,zu(r)?!!r.capture:!!r,i):tR(t,e,n,!0,r,i)}function rR(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)rR(t,e[s],n,r,i);else r=zu(r)?!!r.capture:!!r,n=M_(n),t&&t[qu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gg(s,n,r,i),-1<n&&(lf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=L_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gg(e,n,r,i)),(n=-1<t?e[t]:null)&&V_(n))}function V_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[qu])mg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(iR(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=L_(e))?(mg(n,t),n.h==0&&(n.src=null,e[O_]=null)):lf(t)}}}function iR(t){return t in Bp?Bp[t]:Bp[t]="on"+t}function t4(t,e){if(t.fa)t=!0;else{e=new lu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&V_(t),t=n.call(r,e)}return t}function L_(t){return t=t[O_],t instanceof uf?t:null}var jp="__closure_events_fn_"+(1e9*Math.random()>>>0);function M_(t){return typeof t=="function"?t:(t[jp]||(t[jp]=function(e){return t.handleEvent(e)}),t[jp])}function dt(){Ni.call(this),this.i=new uf(this),this.S=this,this.J=null}ft(dt,Ni);dt.prototype[qu]=!0;dt.prototype.removeEventListener=function(t,e,n,r){rR(this,t,e,n,r)};function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),ZA(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=bc(o,r,!0,e)&&i}if(o=e.g=t,i=bc(o,r,!0,e)&&i,i=bc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=bc(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lf(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&mg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var F_=H.JSON.stringify;class n4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function r4(){var t=$_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class i4{constructor(){this.h=this.g=null}add(e,n){const r=sR.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var sR=new n4(()=>new s4,t=>t.reset());class s4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function o4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function a4(t){H.setTimeout(()=>{throw t},0)}let uu,cu=!1,$_=new i4,oR=()=>{const t=H.Promise.resolve(void 0);uu=()=>{t.then(l4)}};var l4=()=>{for(var t;t=r4();){try{t.h.call(t.g)}catch(n){a4(n)}var e=sR;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cu=!1};function cf(t,e){dt.call(this),this.h=t||1,this.g=e||H,this.j=kt(this.qb,this),this.l=Date.now()}ft(cf,dt);F=cf.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(U_(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function U_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){cf.$.N.call(this),U_(this),delete this.g};function B_(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function aR(t){t.g=B_(()=>{t.g=null,t.i&&(t.i=!1,aR(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class u4 extends Ni{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:aR(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hu(t){Ni.call(this),this.h=t,this.g={}}ft(hu,Ni);var dI=[];function lR(t,e,n,r){Array.isArray(n)||(n&&(dI[0]=n.toString()),n=dI);for(var i=0;i<n.length;i++){var s=eR(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function uR(t){D_(t.g,function(e,n){this.g.hasOwnProperty(n)&&V_(e)},t),t.g={}}hu.prototype.N=function(){hu.$.N.call(this),uR(this)};hu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hf(){this.g=!0}hf.prototype.Ea=function(){this.g=!1};function c4(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function h4(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _o(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+f4(t,n)+(r?" "+r:"")})}function d4(t,e){t.info(function(){return"TIMEOUT: "+e})}hf.prototype.info=function(){};function f4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return F_(n)}catch{return e}}var Fs={},fI=null;function df(){return fI=fI||new dt}Fs.Ta="serverreachability";function cR(t){xt.call(this,Fs.Ta,t)}ft(cR,xt);function du(t){const e=df();Et(e,new cR(e))}Fs.STAT_EVENT="statevent";function hR(t,e){xt.call(this,Fs.STAT_EVENT,t),this.stat=e}ft(hR,xt);function Ft(t){const e=df();Et(e,new hR(e,t))}Fs.Ua="timingevent";function dR(t,e){xt.call(this,Fs.Ua,t),this.size=e}ft(dR,xt);function Wu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var ff={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function j_(){}j_.prototype.h=null;function pI(t){return t.h||(t.h=t.i())}function pR(){}var Gu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function z_(){xt.call(this,"d")}ft(z_,xt);function q_(){xt.call(this,"c")}ft(q_,xt);var yg;function pf(){}ft(pf,j_);pf.prototype.g=function(){return new XMLHttpRequest};pf.prototype.i=function(){return{}};yg=new pf;function Ku(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new hu(this),this.P=p4,t=dg?125:void 0,this.V=new cf(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mR}function mR(){this.i=null,this.g="",this.h=!1}var p4=45e3,gR={},_g={};F=Ku.prototype;F.setTimeout=function(t){this.P=t};function vg(t,e,n){t.L=1,t.A=gf(Rr(e)),t.u=n,t.S=!0,yR(t,null)}function yR(t,e){t.G=Date.now(),Hu(t),t.B=Rr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),AR(n.i,"t",r),t.o=0,n=t.l.J,t.h=new mR,t.g=GR(t.l,n?e:null,!t.u),0<t.O&&(t.M=new u4(kt(t.Pa,t,t.g),t.O)),lR(t.U,t.g,"readystatechange",t.nb),e=t.I?JA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),du(),c4(t.j,t.v,t.B,t.m,t.W,t.u)}F.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=Xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||dg||this.g&&(this.h.h||this.g.ja()||_I(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?du(3):du(2)),mf(this);var n=this.g.da();this.ca=n;t:if(_R(this)){var r=_I(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),Sl(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,h4(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!au(a)){var u=a;break t}}u=null}if(n=u)_o(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wg(this,n);else{this.i=!1,this.s=3,Ft(12),ts(this),Sl(this);break e}}this.S?(vR(this,c,o),dg&&this.i&&c==3&&(lR(this.U,this.V,"tick",this.mb),this.V.start())):(_o(this.j,this.m,o,null),wg(this,o)),c==4&&ts(this),this.i&&!this.J&&(c==4?jR(this.l,this):(this.i=!1,Hu(this)))}else V4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),ts(this),Sl(this)}}}catch{}finally{}};function _R(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function vR(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=m4(t,n),i==_g){e==4&&(t.s=4,Ft(14),r=!1),_o(t.j,t.m,null,"[Incomplete Response]");break}else if(i==gR){t.s=4,Ft(15),_o(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _o(t.j,t.m,i,null),wg(t,i);_R(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Y_(e),e.M=!0,Ft(11))):(_o(t.j,t.m,n,"[Invalid Chunked Response]"),ts(t),Sl(t))}F.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.o<e.length&&(mf(this),vR(this,t,e),this.i&&t!=4&&Hu(this))}};function m4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?_g:(n=Number(e.substring(n,r)),isNaN(n)?gR:(r+=1,r+n>e.length?_g:(e=e.slice(r,r+n),t.o=r+n,e)))}F.cancel=function(){this.J=!0,ts(this)};function Hu(t){t.Y=Date.now()+t.P,wR(t,t.P)}function wR(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Wu(kt(t.lb,t),e)}function mf(t){t.C&&(H.clearTimeout(t.C),t.C=null)}F.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(d4(this.j,this.B),this.L!=2&&(du(),Ft(17)),ts(this),this.s=2,Sl(this)):wR(this,this.Y-t)};function Sl(t){t.l.H==0||t.J||jR(t.l,t)}function ts(t){mf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,U_(t.V),uR(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function wg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ig(n.i,t))){if(!t.K&&Ig(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sd(n),wf(n);else break e;Q_(n),Ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wu(kt(n.ib,n),6e3));if(1>=CR(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ns(n,11)}else if((t.K||n.g==t)&&sd(n),!au(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(W_(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ie(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=WR(r,r.J?r.pa:null,r.Y),o.K){kR(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(mf(a),Hu(a)),r.g=o}else UR(r);0<n.j.length&&If(n)}else u[0]!="stop"&&u[0]!="close"||ns(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ns(n,7):H_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}du(4)}catch{}}function g4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(of(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function y4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(of(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function IR(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(of(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=y4(t),r=g4(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ER=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hs){this.h=t.h,rd(this,t.j),this.s=t.s,this.g=t.g,id(this,t.m),this.l=t.l;var e=t.i,n=new fu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mI(this,n),this.o=t.o}else t&&(e=String(t).match(ER))?(this.h=!1,rd(this,e[1]||"",!0),this.s=ol(e[2]||""),this.g=ol(e[3]||"",!0),id(this,e[4]),this.l=ol(e[5]||"",!0),mI(this,e[6]||"",!0),this.o=ol(e[7]||"")):(this.h=!1,this.i=new fu(null,this.h))}hs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(al(e,gI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(al(e,gI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(al(n,n.charAt(0)=="/"?I4:w4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",al(n,T4)),t.join("")};function Rr(t){return new hs(t)}function rd(t,e,n){t.j=n?ol(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function id(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mI(t,e,n){e instanceof fu?(t.i=e,S4(t.i,t.h)):(n||(e=al(e,E4)),t.i=new fu(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function gf(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ol(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function al(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,v4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function v4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gI=/[#\/\?@]/g,w4=/[#\?:]/g,I4=/[#\?]/g,E4=/[#\?@]/g,T4=/#/g;function fu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Di(t){t.g||(t.g=new Map,t.h=0,t.i&&_4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=fu.prototype;F.add=function(t,e){Di(this),this.i=null,t=Ta(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function TR(t,e){Di(t),e=Ta(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function SR(t,e){return Di(t),e=Ta(t,e),t.g.has(e)}F.forEach=function(t,e){Di(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){Di(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){Di(this);let e=[];if(typeof t=="string")SR(this,t)&&(e=e.concat(this.g.get(Ta(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Di(this),this.i=null,t=Ta(this,t),SR(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function AR(t,e,n){TR(t,e),0<n.length&&(t.i=null,t.g.set(Ta(t,e),b_(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ta(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function S4(t,e){e&&!t.j&&(Di(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(TR(this,r),AR(this,i,n))},t)),t.j=e}var A4=class{constructor(t,e){this.g=t,this.map=e}};function RR(t){this.l=t||R4,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var R4=10;function PR(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function CR(t){return t.h?1:t.g?t.g.size:0}function Ig(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function W_(t,e){t.g?t.g.add(e):t.h=e}function kR(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RR.prototype.cancel=function(){if(this.i=xR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xR(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return b_(t.i)}var P4=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function C4(){this.g=new P4}function k4(t,e,n){const r=n||"";try{IR(t,function(i,s){let o=i;zu(i)&&(o=F_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function x4(t,e){const n=new hf;if(H.Image){const r=new Image;r.onload=xc(Nc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xc(Nc,n,r,"TestLoadImage: error",!1,e),r.onabort=xc(Nc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xc(Nc,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Nc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function yf(t){this.l=t.ec||null,this.j=t.ob||!1}ft(yf,j_);yf.prototype.g=function(){return new _f(this.l,this.j)};yf.prototype.i=function(t){return function(){return t}}({});function _f(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=G_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(_f,dt);var G_=0;F=_f.prototype;F.open=function(t,e){if(this.readyState!=G_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pu(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qu(this)),this.readyState=G_};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pu(this)),this.g&&(this.readyState=3,pu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bR(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bR(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qu(this):pu(this),this.readyState==3&&bR(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Qu(this))};F.Ya=function(t){this.g&&(this.response=t,Qu(this))};F.ka=function(){this.g&&Qu(this)};function Qu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pu(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_f.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var b4=H.JSON.parse;function $e(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=NR,this.L=this.M=!1}ft($e,dt);var NR="",N4=/^https?$/i,D4=["POST","PUT"];F=$e.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yg.g(),this.C=this.u?pI(this.u):pI(yg),this.g.onreadystatechange=kt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){yI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=HA(D4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{VR(this),0<this.B&&((this.L=O4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.ua,this)):this.A=B_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yI(this,s)}};function O4(t){return qo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof x_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function yI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DR(t),vf(t)}function DR(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),vf(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vf(this,!0)),$e.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?OR(this):this.kb())};F.kb=function(){OR(this)};function OR(t){if(t.h&&typeof x_<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)B_(t.La,0,t);else if(Et(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(ER)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!N4.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",DR(t)}}finally{vf(t)}}}}function vf(t,e){if(t.g){VR(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function VR(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Xn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),b4(e)}};function _I(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case NR:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function V4(t){const e={};t=(t.g&&2<=Xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(au(t[r]))continue;var n=o4(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}ZF(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function LR(t){let e="";return D_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function K_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=LR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Wa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function MR(t){this.Ga=0,this.j=[],this.l=new hf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wa("baseRetryDelayMs",5e3,t),this.hb=Wa("retryDelaySeedMs",1e4,t),this.eb=Wa("forwardChannelMaxRetries",2,t),this.xa=Wa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RR(t&&t.concurrentRequestLimit),this.Ja=new C4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=MR.prototype;F.ra=8;F.H=1;function H_(t){if(FR(t),t.H==3){var e=t.W++,n=Rr(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Yu(t,n),e=new Ku(t,t.l,e),e.L=2,e.A=gf(Rr(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.A,n=!0),n||(e.g=GR(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Hu(e)}qR(t)}function wf(t){t.g&&(Y_(t),t.g.cancel(),t.g=null)}function FR(t){wf(t),t.u&&(H.clearTimeout(t.u),t.u=null),sd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function If(t){if(!PR(t.i)&&!t.m){t.m=!0;var e=t.Na;uu||oR(),cu||(uu(),cu=!0),$_.add(e,t),t.C=0}}function L4(t,e){return CR(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wu(kt(t.Na,t,e),zR(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ku(this,this.l,t);let s=this.s;if(this.U&&(s?(s=JA(s),ZA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$R(this,i,e),n=Rr(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Yu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(LR(s)))+"&"+e:this.o&&K_(n,this.o,s)),W_(this.i,i),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),i.aa=!0,vg(i,n,null)):vg(i,n,e),this.H=2}}else this.H==3&&(t?vI(this,t):this.j.length==0||PR(this.i)||vI(this))};function vI(t,e){var n;e?n=e.m:n=t.W++;const r=Rr(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.V),Yu(t,r),t.o&&t.s&&K_(r,t.o,t.s),n=new Ku(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$R(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),W_(t.i,n),vg(n,r,e)}function Yu(t,e){t.na&&D_(t.na,function(n,r){Ie(e,r,n)}),t.h&&IR({},function(n,r){Ie(e,r,n)})}function $R(t,e,n){n=Math.min(t.j.length,n);var r=t.h?kt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{k4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function UR(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;uu||oR(),cu||(uu(),cu=!0),$_.add(e,t),t.A=0}}function Q_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wu(kt(t.Ma,t),zR(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,BR(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wu(kt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ft(10),wf(this),BR(this))};function Y_(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function BR(t){t.g=new Ku(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rr(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),Yu(t,e),t.o&&t.s&&K_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=gf(Rr(e)),n.u=null,n.S=!0,yR(n,t)}F.ib=function(){this.v!=null&&(this.v=null,wf(this),Q_(this),Ft(19))};function sd(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function jR(t,e){var n=null;if(t.g==e){sd(t),Y_(t),t.g=null;var r=2}else if(Ig(t.i,e))n=e.F,kR(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=df(),Et(r,new dR(r,n)),If(t)}else UR(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&L4(t,e)||r==2&&Q_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ns(t,5);break;case 4:ns(t,10);break;case 3:ns(t,6);break;default:ns(t,2)}}}function zR(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ns(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=kt(t.pb,t);n||(n=new hs("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||rd(n,"https"),gf(n)),x4(n.toString(),r)}else Ft(2);t.H=0,t.h&&t.h.za(e),qR(t),FR(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ft(2)):(this.l.info("Failed to ping google.com"),Ft(1))};function qR(t){if(t.H=0,t.ma=[],t.h){const e=xR(t.i);(e.length!=0||t.j.length!=0)&&(uI(t.ma,e),uI(t.ma,t.j),t.i.i.length=0,b_(t.j),t.j.length=0),t.h.ya()}}function WR(t,e,n){var r=n instanceof hs?Rr(n):new hs(n);if(r.g!="")e&&(r.g=e+"."+r.g),id(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new hs(null);r&&rd(s,r),e&&(s.g=e),i&&id(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ra),Yu(t,r),r}function GR(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new $e(new yf({ob:n})):new $e(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function KR(){}F=KR.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function od(){if(qo&&!(10<=Number(QF)))throw Error("Environmental error: no available transport.")}od.prototype.g=function(t,e){return new fn(t,e)};function fn(t,e){dt.call(this),this.g=new MR(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!au(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!au(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sa(this)}ft(fn,dt);fn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=WR(t,null,t.Y),If(t)};fn.prototype.close=function(){H_(this.g)};fn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=F_(t),t=n);e.j.push(new A4(e.fb++,t)),e.H==3&&If(e)};fn.prototype.N=function(){this.g.h=null,delete this.j,H_(this.g),delete this.g,fn.$.N.call(this)};function HR(t){z_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ft(HR,z_);function QR(){q_.call(this),this.status=1}ft(QR,q_);function Sa(t){this.g=t}ft(Sa,KR);Sa.prototype.Ba=function(){Et(this.g,"a")};Sa.prototype.Aa=function(t){Et(this.g,new HR(t))};Sa.prototype.za=function(t){Et(this.g,new QR)};Sa.prototype.ya=function(){Et(this.g,"b")};function M4(){this.blockSize=-1}function Un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(Un,M4);Un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Un.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)zp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){zp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){zp(this,r),i=0;break}}this.h=i,this.i+=e};Un.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var F4={};function X_(t){return-128<=t&&128>t?GF(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return ko;if(0>t)return _t(Jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Eg;return new fe(e,0)}function YR(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return _t(YR(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(e,8)),r=ko,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jn(Math.pow(e,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var Eg=4294967296,ko=X_(0),Tg=X_(1),wI=X_(16777216);F=fe.prototype;F.ea=function(){if(vn(this))return-_t(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Eg+r)*e,e*=Eg}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mr(this))return"0";if(vn(this))return"-"+_t(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,r="";;){var i=ld(n,e).g;n=ad(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,mr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vn(t){return t.h==-1}F.X=function(t){return t=ad(this,t),vn(t)?-1:mr(t)?0:1};function _t(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Tg)}F.abs=function(){return vn(this)?_t(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function ad(t,e){return t.add(_t(e))}F.R=function(t){if(mr(this)||mr(t))return ko;if(vn(this))return vn(t)?_t(this).R(_t(t)):_t(_t(this).R(t));if(vn(t))return _t(this.R(_t(t)));if(0>this.X(wI)&&0>t.X(wI))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Dc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Dc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Dc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Dc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function Dc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ga(t,e){this.g=t,this.h=e}function ld(t,e){if(mr(e))throw Error("division by zero");if(mr(t))return new Ga(ko,ko);if(vn(t))return e=ld(_t(t),e),new Ga(_t(e.g),_t(e.h));if(vn(e))return e=ld(t,_t(e)),new Ga(_t(e.g),e.h);if(30<t.g.length){if(vn(t)||vn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Tg,r=e;0>=r.X(t);)n=II(n),r=II(r);var i=Ks(n,1),s=Ks(r,1);for(r=Ks(r,2),n=Ks(n,2);!mr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ks(r,1),n=Ks(n,1)}return e=ad(t,i.R(e)),new Ga(i,e)}for(i=ko;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(e);vn(o)||0<o.X(t);)n-=r,s=Jn(n),o=s.R(e);mr(s)&&(s=Tg),i=i.add(s),t=ad(t,o)}return new Ga(i,t)}F.gb=function(t){return ld(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function II(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Ks(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new fe(i,t.h)}od.prototype.createWebChannel=od.prototype.g;fn.prototype.send=fn.prototype.u;fn.prototype.open=fn.prototype.m;fn.prototype.close=fn.prototype.close;ff.NO_ERROR=0;ff.TIMEOUT=8;ff.HTTP_ERROR=6;fR.COMPLETE="complete";pR.EventType=Gu;Gu.OPEN="a";Gu.CLOSE="b";Gu.ERROR="c";Gu.MESSAGE="d";dt.prototype.listen=dt.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;Un.prototype.digest=Un.prototype.l;Un.prototype.reset=Un.prototype.reset;Un.prototype.update=Un.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Jn;fe.fromString=YR;var $4=function(){return new od},U4=function(){return df()},qp=ff,B4=fR,j4=Fs,EI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Oc=pR,z4=$e,q4=Un,xo=fe;const TI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new zd("@firebase/firestore");function Zs(){return _i.logLevel}function W4(t){_i.setLogLevel(t)}function N(t,...e){if(_i.logLevel<=Z.DEBUG){const n=e.map(J_);_i.debug(`Firestore (${Aa}): ${t}`,...n)}}function He(t,...e){if(_i.logLevel<=Z.ERROR){const n=e.map(J_);_i.error(`Firestore (${Aa}): ${t}`,...n)}}function Bn(t,...e){if(_i.logLevel<=Z.WARN){const n=e.map(J_);_i.warn(`Firestore (${Aa}): ${t}`,...n)}}function J_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Aa}) INTERNAL ASSERTION FAILED: `+t;throw He(e),new Error(e)}function z(t,e){t||$()}function G4(t,e){t||$()}function M(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class H4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Q4{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new XR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new at(e)}}class Y4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Y4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.R=n.token,new J4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=e$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Wo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ZR(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Pe(0,0))}static max(){return new q(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends mu{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const t$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends mu{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return t$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ee.fromString(e))}static fromName(e){return new L(ee.fromString(e).popFirst(5))}static empty(){return new L(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Sg(t){return t.fields.find(e=>e.kind===2)}function Wi(t){return t.fields.filter(e=>e.kind!==2)}ud.UNKNOWN_ID=-1;class uh{constructor(e,n){this.fieldPath=e,this.kind=n}}class gu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new gu(0,pn.min())}}function eP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new pn(i,L.empty(),e)}function tP(t){return new pn(t.readTime,t.key,-1)}class pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pn(q.min(),L.empty(),-1)}static max(){return new pn(q.max(),L.empty(),-1)}}function Z_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==nP)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ct,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Al(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ev(r.target.error);this.V.reject(new Al(e,i))}}static open(e,n,r,i){try{return new Ef(n,e.transaction(i,r))}catch(s){throw new Al(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new r$(n)}}class In{constructor(e,n,r){this.name=e,this.version=n,this.p=r,In.S(Ce())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Gi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Zl())return!1;if(In.C())return!0;const e=Ce(),n=In.S(e),r=0<n&&n<10,i=In.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Al(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new b(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new b(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Al(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Ef.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),R.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class n${constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Gi(this.k.delete())}}class Al extends b{constructor(e,n){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Vi(t){return t.name==="IndexedDbTransactionError"}class r${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Gi(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Gi(this.store.add(e))}get(e){return Gi(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Gi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Gi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new R((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new R((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new R((r,i)=>{n.onerror=s=>{const o=ev(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new R((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new n$(a),u=n(a.primaryKey,a.value,l);if(u instanceof R){const c=u.catch(h=>(l.done(),R.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>R.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Gi(t){return new R((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ev(r.target.error);n(i)}})}let SI=!1;function ev(t){const e=In.S(Ce());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return SI||(SI=!0,setTimeout(()=>{throw r},0)),r}}return t}class i${constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){N("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){Vi(n)?N("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Oi(n)}await this.ee(6e4)})}}class s${constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return R.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(N("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=tP(s);Z_(o,r)>0&&(r=o)}),new pn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Qt._e=-1;function Xu(t){return t==null}function yu(t){return t===0&&1/t==-1/0}function iP(t){return typeof t=="number"&&Number.isInteger(t)&&!yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=AI(e)),e=o$(t.get(n),e);return AI(e)}function o$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function AI(t){return t+""}function Zn(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),ee.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new ee(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){return[t,Ut(e)]}function sP(t,e,n){return[t,Ut(e),n]}const a$={},l$=["prefixPath","collectionGroup","readTime","documentId"],u$=["prefixPath","collectionGroup","documentId"],c$=["collectionGroup","readTime","prefixPath","documentId"],h$=["canonicalId","targetId"],d$=["targetId","path"],f$=["path","targetId"],p$=["collectionId","parent"],m$=["indexId","uid"],g$=["uid","sequenceNumber"],y$=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_$=["indexId","uid","orderedDocumentKey"],v$=["userId","collectionPath","documentId"],w$=["userId","collectionPath","largestBatchId"],I$=["userId","collectionGroup","largestBatchId"],oP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],E$=[...oP,"documentOverlays"],aP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lP=aP,T$=[...lP,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends rP{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function pt(t,e){const n=M(t);return In.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vc(this.root,e,this.comparator,!0)}}class Vc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=s??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new CI(this.data.getIterator())}getIteratorFrom(e){return new CI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class CI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Hs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new pe(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cP("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const A$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(t){if(z(!!t),typeof t=="string"){let e=0;const n=A$.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tv(t){const e=t.mapValue.fields.__previous_value__;return Tf(e)?tv(e):e}function _u(t){const e=vi(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},hh={nullValue:"NULL_VALUE"};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tf(t)?4:hP(t)?9007199254740991:10:$()}function or(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _u(t).isEqual(_u(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vi(i.timestampValue),a=vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wi(i.bytesValue).isEqual(wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?yu(o)===yu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Wo(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(PI(o)!==PI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!or(o[l],a[l])))return!1;return!0}(t,e);default:return $()}}function vu(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return kI(t.timestampValue,e.timestampValue);case 4:return kI(_u(t),_u(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=wi(s),l=wi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(Me(s.latitude),Me(o.latitude));return a!==0?a:Q(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ei(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ei.mapValue&&o===ei.mapValue)return 0;if(s===ei.mapValue)return 1;if(o===ei.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const f=Ei(a[l[h]],u[c[h]]);if(f!==0)return f}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw $()}}function kI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=vi(t),r=vi(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Go(t){return Rg(t)}function Rg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rg(n.fields[o])}`;return i+"}"}(t.mapValue):$()}function As(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pg(t){return!!t&&"integerValue"in t}function wu(t){return!!t&&"arrayValue"in t}function xI(t){return!!t&&"nullValue"in t}function bI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dh(t){return!!t&&"mapValue"in t}function Rl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Rl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function P$(t){return"nullValue"in t?hh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?As(Ii.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function C$(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?As(Ii.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ei:$()}function NI(t,e){const n=Ei(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function DI(t,e){const n=Ei(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rl(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Rl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$s(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Rl(this.value))}}function dP(t){const e=[];return $s(t.fields,(n,r)=>{const i=new Ae([n]);if(dh(r)){const s=dP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,q.min(),q.min(),q.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,q.min(),q.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,q.min(),q.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.position=e,this.inclusive=n}}function OI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ei(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function VI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function k$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{}class te extends fP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x$(e,n,r):n==="array-contains"?new D$(e,r):n==="in"?new vP(e,r):n==="not-in"?new O$(e,r):n==="array-contains-any"?new V$(e,r):new te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new b$(e,r):new N$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ei(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends fP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new he(e,n)}matches(e){return Ko(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ko(t){return t.op==="and"}function Cg(t){return t.op==="or"}function nv(t){return pP(t)&&Ko(t)}function pP(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function kg(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+Go(t.value);if(nv(t))return t.filters.map(e=>kg(e)).join(",");{const e=t.filters.map(n=>kg(n)).join(",");return`${t.op}(${e})`}}function mP(t,e){return t instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&mP(o,i.filters[a]),!0):!1}(t,e):void $()}function gP(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function yP(t){return t instanceof te?function(n){return`${n.field.canonicalString()} ${n.op} ${Go(n.value)}`}(t):t instanceof he?function(n){return n.op.toString()+" {"+n.getFilters().map(yP).join(" ,")+"}"}(t):"Filter"}class x$ extends te{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class b$ extends te{constructor(e,n){super(e,"in",n),this.keys=_P("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N$ extends te{constructor(e,n){super(e,"not-in",n),this.keys=_P("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _P(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class D$ extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wu(n)&&vu(n.arrayValue,this.value)}}class vP extends te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vu(this.value.arrayValue,n)}}class O$ extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vu(this.value.arrayValue,n)}}class V$ extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function xg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new L$(t,e,n,r,i,s,o)}function Rs(t){const e=M(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Go(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Go(r)).join(",")),e.ce=n}return e.ce}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!k$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!VI(t.startAt,e.startAt)&&VI(t.endAt,e.endAt)}function cd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function hd(t,e){return t.filters.filter(n=>n instanceof te&&n.field.isEqual(e))}function LI(t,e,n){let r=hh,i=!0;for(const s of hd(t,e)){let o=hh,a=!0;switch(s.op){case"<":case"<=":o=P$(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=hh}NI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];NI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function MI(t,e,n){let r=ei,i=!0;for(const s of hd(t,e)){let o=ei,a=!0;switch(s.op){case">=":case">":o=C$(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ei}DI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];DI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function wP(t,e,n,r,i,s,o,a){return new Dr(t,e,n,r,i,s,o,a)}function Ra(t){return new Dr(t)}function FI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rv(t){return t.collectionGroup!==null}function bo(t){const e=M(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pe(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Iu(s,r))}),n.has(Ae.keyField().canonicalString())||e.le.push(new Iu(Ae.keyField(),r))}return e.le}function Bt(t){const e=M(t);return e.he||(e.he=M$(e,bo(t))),e.he}function M$(t,e){if(t.limitType==="F")return xg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Iu(i.field,s)});const n=t.endAt?new Ti(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ti(t.startAt.position,t.startAt.inclusive):null;return xg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bg(t,e){const n=t.filters.concat([e]);return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dd(t,e,n){return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zu(t,e){return Ju(Bt(t),Bt(e))&&t.limitType===e.limitType}function IP(t){return`${Rs(Bt(t))}|lt:${t.limitType}`}function eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yP(i)).join(", ")}]`),Xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Go(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Go(i)).join(",")),`Target(${r})`}(Bt(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=OI(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,bo(r),i)||r.endAt&&!function(o,a,l){const u=OI(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,bo(r),i))}(t,e)}function EP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TP(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=F$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function F$(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ei(l,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $$=new _e(L.comparator);function Xt(){return $$}const SP=new _e(L.comparator);function ll(...t){let e=SP;for(const n of t)e=e.insert(n.key,n);return e}function AP(t){let e=SP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function er(){return Pl()}function RP(){return Pl()}function Pl(){return new Li(t=>t.toString(),(t,e)=>t.isEqual(e))}const U$=new _e(L.comparator),B$=new pe(L.comparator);function Y(...t){let e=B$;for(const n of t)e=e.add(n);return e}const j$=new pe(Q);function iv(){return j$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function CP(t){return{integerValue:""+t}}function kP(t,e){return iP(e)?CP(e):PP(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this._=void 0}}function z$(t,e,n){return t instanceof Ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Tf(s)&&(s=tv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ps?bP(t,e):t instanceof Cs?NP(t,e):function(i,s){const o=xP(i,s),a=$I(o)+$I(i.Ie);return Pg(o)&&Pg(i.Ie)?CP(a):PP(i.serializer,a)}(t,e)}function q$(t,e,n){return t instanceof Ps?bP(t,e):t instanceof Cs?NP(t,e):n}function xP(t,e){return t instanceof Qo?function(r){return Pg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ho extends Sf{}class Ps extends Sf{constructor(e){super(),this.elements=e}}function bP(t,e){const n=DP(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cs extends Sf{constructor(e){super(),this.elements=e}}function NP(t,e){let n=DP(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class Qo extends Sf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function $I(t){return Me(t.integerValue||t.doubleValue)}function DP(t){return wu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.field=e,this.transform=n}}function W$(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ps&&i instanceof Ps||r instanceof Cs&&i instanceof Cs?Wo(r.elements,i.elements,or):r instanceof Qo&&i instanceof Qo?or(r.Ie,i.Ie):r instanceof Ho&&i instanceof Ho}(t.transform,e.transform)}class G${constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Af{}function OP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ca(t.key,Re.none()):new Pa(t.key,t.data,Re.none());{const n=t.data,r=vt.empty();let i=new pe(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new Yt(i.toArray()),Re.none())}}function K$(t,e,n){t instanceof Pa?function(i,s,o){const a=i.value.clone(),l=BI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!fh(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=BI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(VP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Cl(t,e,n,r){return t instanceof Pa?function(s,o,a,l){if(!fh(s.precondition,o))return a;const u=s.value.clone(),c=jI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,a,l){if(!fh(s.precondition,o))return a;const u=jI(s.fieldTransforms,l,o),c=o.data;return c.setAll(VP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return fh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function H$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xP(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function UI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wo(r,i,(s,o)=>W$(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends Af{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Af{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function BI(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,q$(o,a,n[i]))}return r}function jI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,z$(s,o,e))}return r}class Ca extends Af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sv extends Af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&K$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=OP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(n,r)=>UI(n,r))&&Wo(this.baseMutations,e.baseMutations,(n,r)=>UI(n,r))}}class av{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=function(){return U$}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new av(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,se;function LP(t){switch(t){default:return $();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function MP(t){if(t===void 0)return He("GRPC error has no .code"),P.UNKNOWN;switch(t){case Xe.OK:return P.OK;case Xe.CANCELLED:return P.CANCELLED;case Xe.UNKNOWN:return P.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return P.INTERNAL;case Xe.UNAVAILABLE:return P.UNAVAILABLE;case Xe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Xe.NOT_FOUND:return P.NOT_FOUND;case Xe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Xe.ABORTED:return P.ABORTED;case Xe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Xe.DATA_LOSS:return P.DATA_LOSS;default:return $()}}(se=Xe||(Xe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y$=new xo([4294967295,4294967295],0);function zI(t){const e=FP().encode(t),n=new q4;return n.update(e),new Uint8Array(n.digest())}function qI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xo([n,r],0),new xo([i,s],0)]}class uv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ul(`Invalid padding: ${n}`);if(r<0)throw new ul(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ul(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ul(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=xo.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(xo.fromNumber(r)));return i.compare(Y$)===1&&(i=new xo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=zI(e),[r,i]=qI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=zI(e),[r,i]=qI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,rc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(q.min(),i,new _e(Q),Xt(),Y())}}class rc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rc(r,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class $P{constructor(e,n){this.targetId=e,this.fe=n}}class UP{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class WI{constructor(){this.ge=0,this.pe=KI(),this.ye=it.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Y(),n=Y(),r=Y();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new rc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=KI()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,z(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class X${constructor(e){this.Le=e,this.ke=new Map,this.qe=Xt(),this.Qe=GI(),this.Ke=new _e(Q)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(cd(s))if(r===0){const o=new L(s.path);this.We(n,o,Ee.newNoDocument(o,q.min()))}else z(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=wi(r).toUint8Array()}catch(l){if(l instanceof cP)return Bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new uv(o,i,s)}catch(l){return Bn(l instanceof ul?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&cd(a.target)){const l=new L(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ee.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Y();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new nc(e,n,this.Ke,this.qe,r);return this.qe=Xt(),this.Qe=GI(),this.Ke=new _e(Q),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new WI,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new pe(Q),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new WI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function GI(){return new _e(L.comparator)}function KI(){return new _e(L.comparator)}const J$={asc:"ASCENDING",desc:"DESCENDING"},Z$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eU={and:"AND",or:"OR"};class tU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ng(t,e){return t.useProto3Json||Xu(e)?e:{value:e}}function Yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nU(t,e){return Yo(t,e.toTimestamp())}function Ye(t){return z(!!t),q.fromTimestamp(function(n){const r=vi(n);return new Pe(r.seconds,r.nanos)}(t))}function cv(t,e){return Dg(t,e).canonicalString()}function Dg(t,e){const n=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jP(t){const e=ee.fromString(t);return z(JP(e)),e}function Eu(t,e){return cv(t.databaseId,e.path)}function ir(t,e){const n=jP(e);if(n.get(1)!==t.databaseId.projectId)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(WP(n))}function zP(t,e){return cv(t.databaseId,e)}function qP(t){const e=jP(t);return e.length===4?ee.emptyPath():WP(e)}function Og(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WP(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function HI(t,e,n){return{name:Eu(t,e),fields:n.value.mapValue.fields}}function GP(t,e,n){const r=ir(t,e.name),i=Ye(e.updateTime),s=e.createTime?Ye(e.createTime):q.min(),o=new vt({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function rU(t,e){return"found"in e?function(r,i){z(!!i.found),i.found.name,i.found.updateTime;const s=ir(r,i.found.name),o=Ye(i.found.updateTime),a=i.found.createTime?Ye(i.found.createTime):q.min(),l=new vt({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){z(!!i.missing),z(!!i.readTime);const s=ir(r,i.missing),o=Ye(i.readTime);return Ee.newNoDocument(s,o)}(t,e):$()}function iU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(z(c===void 0||typeof c=="string"),it.fromBase64String(c||"")):(z(c===void 0||c instanceof Uint8Array),it.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?P.UNKNOWN:MP(u.code);return new b(c,u.message||"")}(o);n=new UP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ir(t,r.document.name),s=Ye(r.document.updateTime),o=r.document.createTime?Ye(r.document.createTime):q.min(),a=new vt({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ph(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ir(t,r.document),s=r.readTime?Ye(r.readTime):q.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ph([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ir(t,r.document),s=r.removedTargetIds||[];n=new ph([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Q$(i,s),a=r.targetId;n=new $P(a,o)}}return n}function Tu(t,e){let n;if(e instanceof Pa)n={update:HI(t,e.key,e.value)};else if(e instanceof Ca)n={delete:Eu(t,e.key)};else if(e instanceof Or)n={update:HI(t,e.key,e.data),updateMask:cU(e.fieldMask)};else{if(!(e instanceof sv))return $();n={verify:Eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ps)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nU(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(t,e.precondition)),n}function Vg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Re.updateTime(Ye(s.updateTime)):s.exists!==void 0?Re.exists(s.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)z(a.setToServerValue==="REQUEST_TIME"),l=new Ho;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Ps(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Cs(c)}else"increment"in a?l=new Qo(o,a.increment):$();const u=Ae.fromServerFormat(a.fieldPath);return new tc(u,l)}(t,i)):[];if(e.update){e.update.name;const i=ir(t,e.update.name),s=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Yt(u.map(c=>Ae.fromServerFormat(c)))}(e.updateMask);return new Or(i,s,o,n,r)}return new Pa(i,s,n,r)}if(e.delete){const i=ir(t,e.delete);return new Ca(i,n)}if(e.verify){const i=ir(t,e.verify);return new sv(i,n)}return $()}function sU(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ye(i.updateTime):Ye(s);return o.isEqual(q.min())&&(o=Ye(s)),new G$(o,i.transformResults||[])}(n,e))):[]}function KP(t,e){return{documents:[zP(t,e.path)]}}function HP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zP(t,i);const s=function(u){if(u.length!==0)return XP(he.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:to(d.field),direction:aU(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ng(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function QP(t){let e=qP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=YP(h);return d instanceof he&&nv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Iu(no(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Xu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ti(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Ti(f,d)}(n.endAt)),wP(e,i,o,s,a,"F",l,u)}function oU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=no(n.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=no(n.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=no(n.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=no(n.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return te.create(no(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return he.create(n.compositeFilter.filters.map(r=>YP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function aU(t){return J$[t]}function lU(t){return Z$[t]}function uU(t){return eU[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return Ae.fromServerFormat(t.fieldPath)}function XP(t){return t instanceof te?function(n){if(n.op==="=="){if(bI(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(xI(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bI(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(xI(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:lU(n.op),value:n.value}}}(t):t instanceof he?function(n){const r=n.getFilters().map(i=>XP(i));return r.length===1?r[0]:{compositeFilter:{op:uU(n.op),filters:r}}}(t):$()}function cU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.ct=e}}function hU(t,e){let n;if(e.document)n=GP(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=xs(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=L.fromSegments(e.unknownDocument.path),i=xs(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Pe(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),n}function QI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:fd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Eu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Yo(s,o.version.toTimestamp()),createTime:Yo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ks(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:ks(e.version)}}return r}function fd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ks(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xs(t){const e=new Pe(t.seconds,t.nanoseconds);return q.fromTimestamp(e)}function Ki(t,e){const n=(e.baseMutations||[]).map(s=>Vg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Vg(t.ct,s)),i=Pe.fromMillis(e.localWriteTimeMs);return new ov(e.batchId,i,n,r)}function cl(t){const e=xs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?xs(t.lastLimboFreeSnapshotVersion):q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return z(s.documents.length===1),Bt(Ra(qP(s.documents[0])))}(t.query):function(s){return Bt(QP(s))}(t.query),new gr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,it.fromBase64String(t.resumeToken))}function eC(t,e){const n=ks(e.snapshotVersion),r=ks(e.lastLimboFreeSnapshotVersion);let i;i=cd(e.target)?KP(t.ct,e.target):HP(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function hv(t){const e=QP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dd(e,e.limit,"L"):e}function Wp(t,e){return new lv(e.largestBatchId,Vg(t.ct,e.overlayMutation))}function YI(t,e){const n=e.path.lastSegment();return[t,Ut(e.path.popLast()),n]}function XI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ks(r.readTime),documentKey:Ut(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{getBundleMetadata(e,n){return JI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:xs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return JI(e).put(function(i){return{bundleId:i.id,createTime:ks(Ye(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return ZI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:hv(s.bundledQuery),readTime:xs(s.readTime)}}(r)})}saveNamedQuery(e,n){return ZI(e).put(function(i){return{name:i.name,readTime:ks(Ye(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function JI(t){return pt(t,"bundles")}function ZI(t){return pt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Rf(e,r)}getOverlay(e,n){return Ka(e).get(YI(this.userId,n)).next(r=>r?Wp(this.serializer,r):null)}getOverlays(e,n){const r=er();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new lv(n,o);i.push(this.ht(e,a))}),R.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ut(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ka(e).H("collectionPathOverlayIndex",a))}),R.waitFor(s)}getOverlaysForCollection(e,n,r){const i=er(),s=Ut(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ka(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Wp(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=er();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ka(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=Wp(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return Ka(e).put(function(i,s,o){const[a,l,u]=YI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Tu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ka(t){return pt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),yu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(wi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?hP(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):$()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),L.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Hi.bt=new Hi;function fU(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function eE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=fU(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class pU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=eE(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=eE(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class mU{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class gU{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ha{constructor(){this.Gt=new pU,this.zt=new mU(this.Gt),this.jt=new gU(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Qi(this.indexId,this.documentKey,this.arrayValue,r)}}function $r(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=tE(t.arrayValue,e.arrayValue),n!==0?n:(n=tE(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function tE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.Yt=new pe((n,r)=>Ae.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(z(e.collectionGroup===this.collectionId),this.en)return!1;const n=Sg(e);if(n!==void 0&&!this.nn(n))return!1;const r=Wi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new pe(Ae.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new uh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new uh(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new uh(r.field,r.dir==="asc"?0:1)));return new ud(ud.UNKNOWN_ID,this.collectionId,n,gu.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){var e,n;if(z(t instanceof te||t instanceof he),t instanceof te){if(t instanceof vP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>te.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const r=t.filters.map(i=>tC(i));return he.create(r,t.op)}function yU(t){if(t.getFilters().length===0)return[];const e=Fg(tC(t));return z(nC(e)),Lg(e)||Mg(e)?[e]:e.getFilters()}function Lg(t){return t instanceof te}function Mg(t){return t instanceof he&&nv(t)}function nC(t){return Lg(t)||Mg(t)||function(n){if(n instanceof he&&Cg(n)){for(const r of n.getFilters())if(!Lg(r)&&!Mg(r))return!1;return!0}return!1}(t)}function Fg(t){if(z(t instanceof te||t instanceof he),t instanceof te)return t;if(t.filters.length===1)return Fg(t.filters[0]);const e=t.filters.map(r=>Fg(r));let n=he.create(e,t.op);return n=pd(n),nC(n)?n:(z(n instanceof he),z(Ko(n)),z(n.filters.length>1),n.filters.reduce((r,i)=>dv(r,i)))}function dv(t,e){let n;return z(t instanceof te||t instanceof he),z(e instanceof te||e instanceof he),n=t instanceof te?e instanceof te?function(i,s){return he.create([i,s],"and")}(t,e):rE(t,e):e instanceof te?rE(e,t):function(i,s){if(z(i.filters.length>0&&s.filters.length>0),Ko(i)&&Ko(s))return gP(i,s.getFilters());const o=Cg(i)?i:s,a=Cg(i)?s:i,l=o.filters.map(u=>dv(u,a));return he.create(l,"or")}(t,e),pd(n)}function rE(t,e){if(Ko(e))return gP(e,t.getFilters());{const n=e.filters.map(r=>dv(t,r));return he.create(n,"or")}}function pd(t){if(z(t instanceof te||t instanceof he),t instanceof te)return t;const e=t.getFilters();if(e.length===1)return pd(e[0]);if(pP(t))return t;const n=e.map(i=>pd(i)),r=[];return n.forEach(i=>{i instanceof te?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(){this._n=new fv}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(pn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class fv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Uint8Array(0);class vU{constructor(e,n){this.databaseId=n,this.an=new fv,this.un=new Li(r=>Rs(r),(r,i)=>Ju(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Ut(i)};return iE(e).put(s)}return R.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ZR(n),""],!1,!0);return iE(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Zn(o.parent))}return r})}addFieldIndex(e,n){const r=Qa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ys(e);return s.next(a=>{o.put(XI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Qa(e),i=Ys(e),s=Qs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Qa(e),r=Qs(e),i=Ys(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return R.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new nE(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Qs(e);let i=!0;const s=new Map;return R.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Y();const a=[];return R.forEach(s,(l,u)=>{N("IndexedDbIndexManager",`Using index ${function(m){return`id=${m.indexId}|cg=${m.collectionGroup}|f=${m.fields.map(w=>`${w.fieldPath}:${w.kind}`).join(",")}`}(l)} to execute ${Rs(n)}`);const c=function(m,w){const C=Sg(w);if(C===void 0)return null;for(const T of hd(m,C.fieldPath))switch(T.op){case"array-contains-any":return T.value.arrayValue.values||[];case"array-contains":return[T.value]}return null}(u,l),h=function(m,w){const C=new Map;for(const T of Wi(w))for(const E of hd(m,T.fieldPath))switch(E.op){case"==":case"in":C.set(T.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return C.set(T.fieldPath.canonicalString(),E.value),Array.from(C.values())}return null}(u,l),d=function(m,w){const C=[];let T=!0;for(const E of Wi(w)){const S=E.kind===0?LI(m,E.fieldPath,m.startAt):MI(m,E.fieldPath,m.startAt);C.push(S.value),T&&(T=S.inclusive)}return new Ti(C,T)}(u,l),f=function(m,w){const C=[];let T=!0;for(const E of Wi(w)){const S=E.kind===0?MI(m,E.fieldPath,m.endAt):LI(m,E.fieldPath,m.endAt);C.push(S.value),T&&(T=S.inclusive)}return new Ti(C,T)}(u,l),y=this.hn(l,u,d),_=this.hn(l,u,f),v=this.Pn(l,u,h),g=this.In(l.indexId,c,y,d.inclusive,_,f.inclusive,v);return R.forEach(g,p=>r.j(p,n.limit).next(m=>{m.forEach(w=>{const C=L.fromSegments(w.documentKey);o.has(C)||(o=o.add(C),a.push(C))})}))}).next(()=>a)}return R.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=yU(he.create(e.filters,"and")).map(r=>xg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.Tn(n[h/u]):Lc,f=this.En(e,d,r[h%u],i),y=this.dn(e,d,s[h%u],o),_=a.map(v=>this.En(e,d,v,!0));c.push(...this.createRange(f,y,_))}return c}En(e,n,r,i){const s=new Qi(e,L.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Qi(e,L.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new nE(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return R.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new pe(Ae.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Ha;for(const i of Wi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Hi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Ha;return Hi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Ha;return Hi.bt.Pt(As(this.databaseId,n),r.Ht(function(s){const o=Wi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Ha);let s=0;for(const o of Wi(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&wu(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);Hi.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ha;l.seed(a.Wt()),Hi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Qa(e),i=Ys(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return R.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new gu(h.sequenceNumber,new pn(xs(h.readTime),new L(Zn(h.documentKey)),h.largestBatchId)):gu.empty(),f=c.fields.map(([y,_])=>new uh(Ae.fromServerFormat(y),_));return new ud(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Q(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Qa(e),s=Ys(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>R.forEach(a,l=>s.put(XI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return R.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),R.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?R.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return Qs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Qs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Qs(e);let s=new pe($r);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Qi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new pe($r);const i=this.An(n,e);if(i==null)return r;const s=Sg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(wu(o))for(const a of o.arrayValue.values||[])r=r.add(new Qi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Qi(n.indexId,e.key,Lc,i));return r}wn(e,n,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),y=u.getIterator();let _=Hs(f),v=Hs(y);for(;_||v;){let g=!1,p=!1;if(_&&v){const m=c(_,v);m<0?p=!0:m>0&&(g=!0)}else _!=null?p=!0:g=!0;g?(h(v),v=Hs(y)):p?(d(_),_=Hs(f)):(_=Hs(f),v=Hs(y))}}(i,s,$r,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),R.waitFor(o)}gn(e){let n=1;return Ys(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>$r(o,a)).filter((o,a,l)=>!a||$r(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=$r(o,e),l=$r(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Lc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Lc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return $r(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(sE)}getMinOffset(e,n){return R.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||$())).next(sE)}}function iE(t){return pt(t,"collectionParents")}function Qs(t){return pt(t,"indexEntries")}function Qa(t){return pt(t,"indexConfiguration")}function Ys(t){return pt(t,"indexState")}function sE(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Z_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new pn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Gt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{z(a===1)}));const u=[];for(const c of n.mutations){const h=sP(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return R.waitFor(s).next(()=>u)}function md(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(41943040,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);class Pf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Pf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ro(e),o=Ur(e);return o.add({}).next(a=>{z(typeof a=="number");const l=new ov(a,n,r,i),u=function(f,y,_){const v=_.baseMutations.map(p=>Tu(f.ct,p)),g=_.mutations.map(p=>Tu(f.ct,p));return{userId:y,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:v,mutations:g}}(this.serializer,this.userId,l),c=[];let h=new pe((d,f)=>Q(d.canonicalString(),f.canonicalString()));for(const d of i){const f=sP(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,a$))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),R.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return Ur(e).get(n).next(r=>r?(z(r.userId===this.userId),Ki(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?R.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ur(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(z(a.batchId>=r),s=Ki(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ur(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).W("userMutationsIndex",n).next(r=>r.map(i=>Ki(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ch(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ro(e).Y({range:i},(o,a,l)=>{const[u,c,h]=o,d=Zn(c);if(u===this.userId&&n.path.isEqual(d))return Ur(e).get(h).next(f=>{if(!f)throw $();z(f.userId===this.userId),s.push(Ki(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Q);const i=[];return n.forEach(s=>{const o=ch(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ro(e).Y({range:a},(u,c,h)=>{const[d,f,y]=u,_=Zn(f);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(l)}),R.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ch(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(Q);return ro(e).Y({range:o},(l,u,c)=>{const[h,d,f]=l,y=Zn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ur(e).get(s).next(o=>{if(o===null)throw $();z(o.userId===this.userId),r.push(Ki(this.serializer,o))}))}),R.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return rC(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),R.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ro(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Zn(s[1]);i.push(l)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return iC(e,this.userId,n)}xn(e){return sC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iC(t,e,n){const r=ch(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ro(t).Y({range:s,J:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Ur(t){return pt(t,"mutations")}function ro(t){return pt(t,"documentMutations")}function sC(t){return pt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new bs(0)}static Bn(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new bs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>q.fromTimestamp(new Pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Xs(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Xs(e).Y((o,a)=>{const l=cl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Xs(e).Y((r,i)=>{const s=cl(i);n(s)})}Ln(e){return aE(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}kn(e,n){return aE(e).put("targetGlobalKey",n)}qn(e,n){return Xs(e).put(eC(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Rs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Xs(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=cl(a);Ju(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Kr(e);return n.forEach(o=>{const a=Ut(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(i)}removeMatchingKeys(e,n,r){const i=Kr(e);return R.forEach(n,s=>{const o=Ut(s.path);return R.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Kr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Kr(e);let s=Y();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Zn(o[1]),c=new L(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ut(n.path),i=IDBKeyRange.bound([r],[ZR(r)],!1,!0);let s=0;return Kr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return Xs(e).get(n).next(r=>r?cl(r):null)}}function Xs(t){return pt(t,"targets")}function aE(t){return pt(t,"targetGlobal")}function Kr(t){return pt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE([t,e],[n,r]){const i=Q(t,n);return i===0?Q(e,r):i}class IU{constructor(e){this.Kn=e,this.buffer=new pe(lE),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();lE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class EU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vi(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Oi(n)}await this.zn(3e5)})}}class TU{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return R.resolve(Qt._e);const r=new IU(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(oE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oE):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Zs()<=Z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function SU(t,e){return new TU(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e,n){this.db=e,this.garbageCollector=SU(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Mc(e,r)}removeReference(e,n,r){return Mc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Mc(e,n)}er(e,n){return function(i,s){let o=!1;return sC(i).Z(a=>iC(i,a,s).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),Kr(e).delete(function(h){return[0,Ut(h.path)]}(o))))});i.push(l)}}).next(()=>R.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Mc(e,n)}Xn(e,n){const r=Kr(e);let i,s=Qt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Qt._e&&n(new L(Zn(i)),s),s=u,i=l):s=Qt._e}).next(()=>{s!==Qt._e&&n(new L(Zn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Mc(t,e){return Kr(t).put(function(r,i){return{targetId:0,path:Ut(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.changes=new Li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ui(e).put(r)}removeEntry(e,n,r){return Ui(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],fd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return Ui(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Ya(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return Ui(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Ya(n))},(i,s)=>{r={document:this.nr(n,s),size:md(s)}}).next(()=>r)}getEntries(e,n){let r=Xt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Xt(),i=new _e(L.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,md(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return R.resolve();let i=new pe(hE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ya(i.first()),Ya(i.last())),o=i.getIterator();let a=o.getNext();return Ui(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&hE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(Ya(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),fd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ui(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Xt();for(const h of u){const d=this.nr(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(ec(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Xt();const o=cE(n,r),a=cE(n,pn.max());return Ui(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.nr(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new PU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return uE(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}tr(e,n){return uE(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=hU(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return Ee.newInvalidDocument(e)}}function aC(t){return new RU(t)}class PU extends oC{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Li(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,o)=>Q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=QI(this.ar.serializer,o);i=i.add(s.path.popLast());const u=md(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=QI(this.ar.serializer,o.convertToNoDocument(q.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),R.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function uE(t){return pt(t,"remoteDocumentGlobal")}function Ui(t){return pt(t,"remoteDocumentsV14")}function Ya(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function cE(t,e){const n=e.documentKey.path.toArray();return[t,fd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function hE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Q(n[s],r[s]),i)return i;return i=Q(n.length,r.length),i||(i=Q(n[n.length-2],r[r.length-2]),i||Q(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Cl(r.mutation,i,Yt.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=er();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ll();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xt();const o=Pl(),a=function(){return Pl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Or)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Cl(c.mutation,u,c.mutation.getFieldMask(),Pe.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new CU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pl();let i=new _e((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Yt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=RP();c.forEach(d=>{if(!s.has(d)){const f=OP(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(er());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:AP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=ll();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ll();return this.indexManager.getCollectionParents(e,s).next(a=>R.forEach(a,l=>{const u=function(h,d){return new Dr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ee.newInvalidDocument(c)))});let a=ll();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Cl(c.mutation,u,Yt.empty(),Pe.now()),ec(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ye(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:hv(i.bundledQuery),readTime:Ye(i.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(){this.overlays=new _e(L.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=er();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=er(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=er(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=er(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lv(n,r));let s=this.hr.get(n);s===void 0&&(s=Y(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.Pr=new pe(st.Ir),this.Tr=new pe(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new st(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new L(new ee([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new L(new ee([])),r=new st(n,e),i=new st(n,e+1);let s=Y();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return L.comparator(e.key,n.key)||Q(e.pr,n.pr)}static Er(e,n){return Q(e.pr,n.pr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new pe(st.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ov(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Q);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new st(new L(s),0);let a=new pe(Q);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new st(n,0),i=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e){this.vr=e,this.docs=function(){return new _e(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=Xt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xt();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Z_(tP(c),r)<=0||(i.has(c.key)||ec(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DU(this)}getSize(e){return R.resolve(this.size)}}class DU extends oC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e){this.persistence=e,this.Mr=new Li(n=>Rs(n),Ju),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pv,this.targetCount=0,this.Br=bs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Qt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new OU(this),this.indexManager=new _U,this.remoteDocumentCache=function(i){return new NU(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ZP(n),this.$r=new kU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new bU(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new VU(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class VU extends rP{constructor(e){super(),this.currentSequenceNumber=e}}class Cf{constructor(e){this.persistence=e,this.zr=new pv,this.jr=null}static Hr(e){return new Cf(e)}get Jr(){if(this.jr)return this.jr;throw $()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const i=L.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e){this.serializer=e}N(e,n,r,i){const s=new Ef("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",RI,{unique:!0}),l.createObjectStore("documentMutations")}(e),dE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),dE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",RI,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return R.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:v$});u.createIndex("collectionPathOverlayIndex",w$,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",I$,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:l$});u.createIndex("documentKeyIndex",u$),u.createIndex("collectionGroupIndex",c$)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:m$}).createIndex("sequenceNumberIndex",g$,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:y$}).createIndex("documentKeyIndex",_$,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=md(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>R.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>R.forEach(a,l=>{z(l.userId===s.userId);const u=Ki(this.serializer,l);return rC(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new ee(o),u=function(h){return[0,Ut(h)]}(l);s.push(n.get(u).next(c=>c?R.resolve():(h=>n.put({targetId:0,path:Ut(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:p$});const r=n.store("collectionParents"),i=new fv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ut(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new ee(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Zn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=cl(i),o=eC(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new L(ee.fromString(h.document.name).popFirst(5)):h.noDocument?L.fromSegments(h.noDocument.path):h.unknownDocument?L.fromSegments(h.unknownDocument.path):$()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>R.waitFor(i))}si(e,n){const r=n.store("mutations"),i=aC(this.serializer),s=new uC(Cf.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:Y();Ki(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),R.forEach(a,(l,u)=>{const c=new at(u),h=Rf.lt(this.serializer,c),d=s.getIndexManager(c),f=Pf.lt(c,this.serializer,d,s.referenceDelegate);return new lC(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ag(n,Qt._e),l).next()})})}}function dE(t){t.createObjectStore("targetDocuments",{keyPath:d$}).createIndex("documentTargetsIndex",f$,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",h$,{unique:!0}),t.createObjectStore("targetGlobal")}const Gp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class mv{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=d=>Promise.resolve(),!mv.D())throw new b(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new AU(this,i),this.Ti=n+"main",this.serializer=new ZP(l),this.Ei=new In(this.Ti,this.ui,new LU(this.serializer)),this.Qr=new wU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=aC(this.serializer),this.$r=new dU,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&He("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new b(P.FAILED_PRECONDITION,Gp);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Qt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Fc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Vi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Xa(e).get("owner").next(n=>R.resolve(this.Si(n)))}bi(e){return Fc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=pt(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return R.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?R.resolve(!0):Xa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new b(P.FAILED_PRECONDITION,Gp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fc(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Ag(e,Qt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>Fc(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return Pf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new vU(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Rf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?T$:l===14?lP:l===13?aP:l===12?E$:l===11?oP:void $()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Ag(a,this.kr?this.kr.next():Qt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new b(P.FAILED_PRECONDITION,nP);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Xa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new b(P.FAILED_PRECONDITION,Gp)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xa(e).put("owner",n)}static D(){return In.D()}yi(e){const n=Xa(e);return n.get("owner").next(r=>this.Si(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):R.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;OS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return He("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xa(t){return pt(t,"owner")}function Fc(t){return pt(t,"clientMetadata")}function gv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return OS()?8:In.v(Ce())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MU;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Zs()<=Z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Zs()<=Z.DEBUG&&N("QueryEngine","Query:",eo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Zs()<=Z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bt(n))):R.resolve())}ji(e,n){if(FI(n))return R.resolve(null);let r=Bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dd(n,null,"F"),r=Bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,dd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return FI(n)||i.isEqual(q.min())?R.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?R.resolve(null):(Zs()<=Z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eo(n)),this.es(e,o,n,eP(i,-1)).next(a=>a))})}Zi(e,n){let r=new pe(TP(e));return n.forEach((i,s)=>{ec(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Zs()<=Z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",eo(n)),this.zi.getDocumentsMatchingQuery(e,n,pn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new _e(Q),this.rs=new Li(s=>Rs(s),Ju),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function hC(t,e,n,r){return new FU(t,e,n,r)}async function dC(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function $U(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=R.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);z(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Y();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fC(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function UU(t,e){const n=M(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(it.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,v,g){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,c)&&a.push(n.Qr.updateTargetData(s,f))});let l=Xt(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(pC(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(q.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function pC(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function BU(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xo(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Jo(t,e,n){const r=M(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function gd(t,e,n){const r=M(t);let i=q.min(),s=Y();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=M(l),d=h.rs.get(c);return d!==void 0?R.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,Bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Y())).next(a=>(yC(r,EP(e),a),{documents:a,hs:s})))}function mC(t,e){const n=M(t),r=M(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function gC(t,e){const n=M(t),r=n.ss.get(e)||q.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,eP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(yC(n,e,i),i))}function yC(t,e,n){let r=t.ss.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function jU(t,e,n,r){const i=M(t);let s=Y(),o=Xt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const h=e.Is(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,h)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Xo(i,function(c){return Bt(Ra(ee.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>pC(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function zU(t,e,n=Y()){const r=await Xo(t,Bt(hv(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ye(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function fE(t,e){return`firestore_clients_${t}_${e}`}function pE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Kp(t,e){return`firestore_targets_${t}_${e}`}class yd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new b(i.error.code,i.error.message))),o?new yd(e,n,i.state,s):(He("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new b(r.error.code,r.error.message))),s?new kl(e,r.state,i):(He("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _d{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=iv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=iP(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new _d(e,s):(He("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class _v{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new _v(n.clientId,n.onlineState):(He("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $g{constructor(){this.activeTargetIds=iv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new _e(Q),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=fE(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new $g),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(fE(this.persistenceKey,r));if(i){const s=_d.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,n,r){this.Bs(e,n,r),this.Ls(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Kp(this.persistenceKey,e));if(r){const i=kl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Kp(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void He("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Qt._e;if(s!=null)try{const a=JSON.parse(s);z(typeof a=="number"),o=a}catch(a){He("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Qt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,n,r){const i=new yd(this.currentUser,e,n,r),s=pE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const n=pE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Kp(this.persistenceKey,e),s=new kl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return _d.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return yd.Es(new at(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return kl.Es(i,n)}xs(e){return _v.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=iv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class _C{constructor(){this.no=new $g,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c=null;function Qp(){return $c===null?$c=function(){return 268435456+Math.round(2147483648*Math.random())}():$c++,"0x"+$c.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class KU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Qp(),l=this.bo(n,r.toUriEncodedString());N("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(N("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Bn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Aa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=WU[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Qp();return new Promise((o,a)=>{const l=new z4;l.setWithCredentials(!0),l.listenOnce(B4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qp.NO_ERROR:const c=l.getResponseJson();N(Rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case qp.TIMEOUT:N(Rt,`RPC '${e}' ${s} timed out`),a(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case qp.HTTP_ERROR:const h=l.getStatus();if(N(Rt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const g=v.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(g)>=0?g:P.UNKNOWN}(f.status);a(new b(y,f.message))}else a(new b(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(P.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{N(Rt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);N(Rt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Qp(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$4(),a=U4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");N(Rt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new GU({lo:v=>{f?N(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(N(Rt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),N(Rt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},ho:()=>h.close()}),_=(v,g,p)=>{v.listen(g,m=>{try{p(m)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,Oc.EventType.OPEN,()=>{f||N(Rt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Oc.EventType.CLOSE,()=>{f||(f=!0,N(Rt,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),_(h,Oc.EventType.ERROR,v=>{f||(f=!0,Bn(Rt,`RPC '${e}' stream ${i} transport errored:`,v),y.Vo(new b(P.UNAVAILABLE,"The operation could not be completed")))}),_(h,Oc.EventType.MESSAGE,v=>{var g;if(!f){const p=v.data[0];z(!!p);const m=p,w=m.error||((g=m[0])===null||g===void 0?void 0:g.error);if(w){N(Rt,`RPC '${e}' stream ${i} received error:`,w);const C=w.status;let T=function(A){const k=Xe[A];if(k!==void 0)return MP(k)}(C),E=w.message;T===void 0&&(T=P.INTERNAL,E="Unknown error status: "+C+" with message "+w.message),f=!0,y.Vo(new b(T,E)),h.close()}else N(Rt,`RPC '${e}' stream ${i} received:`,p),y.mo(p)}}),_(a,j4.STAT_EVENT,v=>{v.stat===EI.PROXY?N(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===EI.NOPROXY&&N(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof window<"u"?window:null}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new tU(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new vv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(He(n.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new b(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HU extends wC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=iU(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Ye(o.readTime):q.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Og(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=cd(l)?{documents:KP(s,l)}:{query:HP(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BP(s,o.resumeToken);const u=Ng(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=Yo(s,o.snapshotVersion.toTimestamp());const u=Ng(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=oU(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Og(this.serializer),n.removeTarget=e,this.t_(n)}}class QU extends wC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=sU(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.T_(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Og(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tu(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Dg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(P.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Dg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(P.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class XU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(He(n),this.g_=!1):N("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Mi(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=M(l);u.v_.add(4),await ka(u),u.x_.set("Unknown"),u.v_.delete(4),await sc(u)}(this))})}),this.x_=new XU(r,i)}}async function sc(t){if(Mi(t))for(const e of t.F_)await e(!0)}async function ka(t){for(const e of t.F_)await e(!1)}function kf(t,e){const n=M(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Ev(n)?Iv(n):ba(n).Jo()&&wv(n,e))}function Su(t,e){const n=M(t),r=ba(n);n.C_.delete(e),r.Jo()&&IC(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Mi(n)&&n.x_.set("Unknown"))}function wv(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ba(t).c_(e)}function IC(t,e){t.O_.Oe(e),ba(t).l_(e)}function Iv(t){t.O_=new X$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ba(t).start(),t.x_.p_()}function Ev(t){return Mi(t)&&!ba(t).Ho()&&t.C_.size>0}function Mi(t){return M(t).v_.size===0}function EC(t){t.O_=void 0}async function ZU(t){t.C_.forEach((e,n)=>{wv(t,e)})}async function e3(t,e){EC(t),Ev(t)?(t.x_.S_(e),Iv(t)):t.x_.set("Unknown")}async function t3(t,e,n){if(t.x_.set("Online"),e instanceof UP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vd(t,r)}else if(e instanceof ph?t.O_.$e(e):e instanceof $P?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(q.min()))try{const r=await fC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),IC(s,l);const h=new gr(c.target,l,u,c.sequenceNumber);wv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await vd(t,r)}}async function vd(t,e,n){if(!Vi(e))throw e;t.v_.add(1),await ka(t),t.x_.set("Offline"),n||(n=()=>fC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await sc(t)})}function TC(t,e){return e().catch(n=>vd(t,n,e))}async function xa(t){const e=M(t),n=Si(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;n3(e);)try{const i=await BU(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,r3(e,i)}catch(i){await vd(e,i)}SC(e)&&AC(e)}function n3(t){return Mi(t)&&t.D_.length<10}function r3(t,e){t.D_.push(e);const n=Si(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function SC(t){return Mi(t)&&!Si(t).Ho()&&t.D_.length>0}function AC(t){Si(t).start()}async function i3(t){Si(t).d_()}async function s3(t){const e=Si(t);for(const n of t.D_)e.I_(n.mutations)}async function o3(t,e,n){const r=t.D_.shift(),i=av.from(r,e,n);await TC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xa(t)}async function a3(t,e){e&&Si(t).P_&&await async function(r,i){if(function(o){return LP(o)&&o!==P.ABORTED}(i.code)){const s=r.D_.shift();Si(r).Zo(),await TC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xa(r)}}(t,e),SC(t)&&AC(t)}async function gE(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Mi(n);n.v_.add(3),await ka(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await sc(n)}async function Ug(t,e){const n=M(t);e?(n.v_.delete(2),await sc(n)):e||(n.v_.add(2),await ka(n),n.x_.set("Unknown"))}function ba(t){return t.N_||(t.N_=function(n,r,i){const s=M(n);return s.R_(),new HU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:ZU.bind(null,t),To:e3.bind(null,t),u_:t3.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Ev(t)?Iv(t):t.x_.set("Unknown")):(await t.N_.stop(),EC(t))})),t.N_}function Si(t){return t.B_||(t.B_=function(n,r,i){const s=M(n);return s.R_(),new QU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:i3.bind(null,t),To:a3.bind(null,t),E_:s3.bind(null,t),T_:o3.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await xa(t)):(await t.B_.stop(),t.D_.length>0&&(N("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Tv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Na(t,e){if(He("AsyncQueue",`${e}: ${t}`),Vi(t))return new b(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=ll(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new No(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new No;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.L_=new _e(L.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):$():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zo(e,n,No.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(){this.q_=void 0,this.Q_=[]}}class u3{constructor(){this.queries=new Li(e=>IP(e),Zu),this.onlineState="Unknown",this.K_=new Set}}async function Sv(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new l3),i)try{s.q_=await n.onListen(r)}catch(o){const a=Na(o,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&Rv(n)}async function Av(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function c3(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Rv(n)}function h3(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Rv(t){t.K_.forEach(e=>{e.next()})}class Pv{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.serializer=e}Ps(e){return ir(this.serializer,e)}Is(e){return e.metadata.exists?GP(this.serializer,e.document,!1):Ee.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Ye(e)}}class f3{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=RC(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=ee.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new _E(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Y()).add(s);n.set(o,a)}}return n}async complete(){const e=await jU(this.localStore,new _E(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await zU(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function RC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.key=e}}class CC{constructor(e){this.key=e}}class kC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Y(),this.mutatedKeys=Y(),this.ua=TP(e),this.ca=new No(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new yE,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=ec(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),v=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this.ua(f,l)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,h)=>function(f,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return _(f)-_(y)}(c.type,h.type)||this.ua(c.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Zo(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new yE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=Y(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new CC(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new PC(r))}),n}Ra(e){this.oa=e.hs,this.aa=Y();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Zo.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class p3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class m3{constructor(e){this.key=e,this.ma=!1}}class g3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Li(a=>IP(a),Zu),this.pa=new Map,this.ya=new Set,this.wa=new _e(L.comparator),this.Sa=new Map,this.ba=new pv,this.Da={},this.Ca=new Map,this.va=bs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function y3(t,e){const n=Nv(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Xo(n.localStore,Bt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Cv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&kf(n.remoteStore,o)}return i}async function Cv(t,e,n,r,i){t.Ma=(h,d,f)=>async function(_,v,g,p){let m=v.view.ha(g);m.Xi&&(m=await gd(_.localStore,v.query,!1).then(({documents:E})=>v.view.ha(E,m)));const w=p&&p.targetChanges.get(v.targetId),C=p&&p.targetMismatches.get(v.targetId)!=null,T=v.view.applyChanges(m,_.isPrimaryClient,w,C);return Bg(_,v.targetId,T.da),T.snapshot}(t,h,d,f);const s=await gd(t.localStore,e,!0),o=new kC(e,s.hs),a=o.ha(s.documents),l=rc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Bg(t,n,u.da);const c=new p3(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function _3(t,e){const n=M(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Zu(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Jo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Su(n.remoteStore,r.targetId),ea(n,r.targetId)}).catch(Oi)):(ea(n,r.targetId),await Jo(n.localStore,r.targetId,!0))}async function v3(t,e,n){const r=Dv(t);try{const i=await function(o,a){const l=M(o),u=Pe.now(),c=a.reduce((f,y)=>f.add(y.key),Y());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Xt(),_=Y();return l.os.getEntries(f,c).next(v=>{y=v,y.forEach((g,p)=>{p.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(v=>{h=v;const g=[];for(const p of a){const m=H$(p,h.get(p.key).overlayedDocument);m!=null&&g.push(new Or(p.key,m,dP(m.value.mapValue),Re.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,g,a)}).next(v=>{d=v;const g=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,g)})}).then(()=>({batchId:d.batchId,changes:AP(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new _e(Q)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Vr(r,i.changes),await xa(r.remoteStore)}catch(i){const s=Na(i,"Failed to persist write");n.reject(s)}}async function xC(t,e){const n=M(t);try{const r=await UU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?z(o.ma):i.removedDocuments.size>0&&(z(o.ma),o.ma=!1))}),await Vr(n,r,e)}catch(r){await Oi(r)}}function vE(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=M(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&Rv(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function w3(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new _e(L.comparator);o=o.insert(s,Ee.newNoDocument(s,q.min()));const a=Y().add(s),l=new nc(q.min(),new Map,new _e(Q),o,a);await xC(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),bv(r)}else await Jo(r.localStore,e,!1).then(()=>ea(r,e,n)).catch(Oi)}async function I3(t,e){const n=M(t),r=e.batch.batchId;try{const i=await $U(n.localStore,e);xv(n,r,null),kv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vr(n,i)}catch(i){await Oi(i)}}async function E3(t,e,n){const r=M(t);try{const i=await function(o,a){const l=M(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(z(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);xv(r,e,n),kv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vr(r,i)}catch(i){await Oi(i)}}async function T3(t,e){const n=M(t);Mi(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=M(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=Na(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function kv(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function xv(t,e,n){const r=M(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function ea(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||bC(t,r)})}function bC(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Su(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),bv(t))}function Bg(t,e,n){for(const r of n)r instanceof PC?(t.ba.addReference(r.key,e),S3(t,r)):r instanceof CC?(N("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||bC(t,r.key)):$()}function S3(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(N("SyncEngine","New document in limbo: "+n),t.ya.add(r),bv(t))}function bv(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new L(ee.fromString(e)),r=t.va.next();t.Sa.set(r,new m3(n)),t.wa=t.wa.insert(n,r),kf(t.remoteStore,new gr(Bt(Ra(n.path)),r,"TargetPurposeLimboResolution",Qt._e))}}async function Vr(t,e,n){const r=M(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=yv.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=M(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,d=>R.forEach(d.qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>R.forEach(d.Qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Vi(h))throw h;N("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ns.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(d,_)}}}(r.localStore,s))}async function A3(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await dC(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new b(P.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vr(n,r.us)}}function R3(t,e){const n=M(t),r=n.Sa.get(e);if(r&&r.ma)return Y().add(r.key);{let i=Y();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function P3(t,e){const n=M(t),r=await gd(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&Bg(n,e.targetId,i.da),i}async function C3(t,e){const n=M(t);return gC(n.localStore,e).then(r=>Vr(n,r))}async function k3(t,e,n,r){const i=M(t),s=await function(a,l){const u=M(a),c=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.vn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):R.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await xa(i.remoteStore):n==="acknowledged"||n==="rejected"?(xv(i,e,r||null),kv(i,e),function(a,l){M(M(a).mutationQueue).Mn(l)}(i.localStore,e)):$(),await Vr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function x3(t,e){const n=M(t);if(Nv(n),Dv(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await wE(n,r.toArray());n.Fa=!0,await Ug(n.remoteStore,!0);for(const s of i)kf(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ea(n,o),Jo(n.localStore,o,!0))),Su(n.remoteStore,o)}),await i,await wE(n,r),function(o){const a=M(o);a.Sa.forEach((l,u)=>{Su(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new _e(L.comparator)}(n),n.Fa=!1,await Ug(n.remoteStore,!1)}}async function wE(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await Xo(r.localStore,Bt(l[0]));for(const u of l){const c=r.ga.get(u),h=await P3(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await mC(r.localStore,o);a=await Xo(r.localStore,u),await Cv(r,NC(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function NC(t){return wP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function b3(t){return function(n){return M(M(n).persistence).Li()}(M(t).localStore)}async function N3(t,e,n,r){const i=M(t);if(i.Fa)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await gC(i.localStore,EP(s[0])),a=nc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",it.EMPTY_BYTE_STRING);await Vr(i,o,a);break}case"rejected":await Jo(i.localStore,e,!0),ea(i,e,r);break;default:$()}}async function D3(t,e,n){const r=Nv(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await mC(r.localStore,i),o=await Xo(r.localStore,s);await Cv(r,NC(s),o.targetId,!1,o.resumeToken),kf(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await Jo(r.localStore,i,!1).then(()=>{Su(r.remoteStore,i),ea(r,i)}).catch(Oi)}}function Nv(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w3.bind(null,e),e.fa.u_=c3.bind(null,e.eventManager),e.fa.xa=h3.bind(null,e.eventManager),e}function Dv(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E3.bind(null,e),e}function O3(t,e,n){const r=M(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,y){const _=M(f),v=Ye(y.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",g=>_.$r.getBundleMetadata(g,y.id)).then(g=>!!g&&g.createTime.compareTo(v)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(RC(l));const u=new f3(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const d=await u.na(c);d&&a._updateProgress(d),c=await o.Oa()}const h=await u.complete();return await Vr(s,h.sa,void 0),await function(f,y){const _=M(f);return _.persistence.runTransaction("Save bundle","readwrite",v=>_.$r.saveBundleMetadata(v,y))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(l){return Bn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class jg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hC(this.persistence,new cC,e.initialUser,this.serializer)}createPersistence(e){return new uC(Cf.Hr,this.serializer)}createSharedClientState(e){return new _C}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DC extends jg{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await Dv(this.Na.syncEngine),await xa(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return hC(this.persistence,new cC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new EU(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new s$(n,this.persistence);return new i$(e.asyncQueue,r)}createPersistence(e){const n=gv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new mv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,vC(),mh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new _C}}class V3 extends DC{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Hp&&(this.sharedClientState.syncEngine={Zs:k3.bind(null,n),Xs:N3.bind(null,n),eo:D3.bind(null,n),Li:b3.bind(null,n),Ys:C3.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await x3(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=vC();if(!Hp.D(n))throw new b(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Hp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ov{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A3.bind(null,this.syncEngine),await Ug(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new u3}()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=function(s){return new KU(s)}(e.databaseInfo);return function(s,o,a,l){return new YU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new JU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vE(this.syncEngine,n,0),function(){return mE.D()?new mE:new qU}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new g3(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=M(r);N("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ka(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new ct,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new d3(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new b(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=M(i),a={documents:s.map(h=>Eu(o.serializer,h))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,ee.emptyPath(),a,s.length),u=new Map;l.forEach(h=>{const d=rU(o.serializer,h);u.set(d.key.toString(),d)});const c=[];return s.forEach(h=>{const d=u.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ca(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new sv(i,this.precondition(i)))}),await async function(r,i){const s=M(r),o={writes:i.map(a=>Tu(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,ee.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new b(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(q.min())?Re.exists(!1):Re.updateTime(n):Re.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(q.min()))throw new b(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(n)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new vv(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new M3(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const n=this.updateFunction(e);return!Xu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!LP(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=JR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Na(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vv(t);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gE(e.remoteStore,i)),t._onlineComponents=e}function OC(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Vv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OC(n))throw n;Bn("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new jg)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await gh(t,new jg);return t._offlineComponents}async function bf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await zg(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await zg(t,new Ov))),t._onlineComponents}function VC(t){return Vv(t).then(e=>e.persistence)}function Lv(t){return Vv(t).then(e=>e.localStore)}function LC(t){return bf(t).then(e=>e.remoteStore)}function Mv(t){return bf(t).then(e=>e.syncEngine)}function U3(t){return bf(t).then(e=>e.datastore)}async function ta(t){const e=await bf(t),n=e.eventManager;return n.onListen=y3.bind(null,e.syncEngine),n.onUnlisten=_3.bind(null,e.syncEngine),n}function B3(t){return t.asyncQueue.enqueue(async()=>{const e=await VC(t),n=await LC(t);return e.setNetworkEnabled(!0),function(i){const s=M(i);return s.v_.delete(0),sc(s)}(n)})}function j3(t){return t.asyncQueue.enqueue(async()=>{const e=await VC(t),n=await LC(t);return e.setNetworkEnabled(!1),async function(i){const s=M(i);s.v_.add(0),await ka(s),s.x_.set("Offline")}(n)})}function z3(t,e){const n=new ct;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=M(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new b(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Na(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Lv(t),e,n)),n.promise}function MC(t,e,n={}){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new xf({next:d=>{o.enqueueAndForget(()=>Av(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new b(P.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new b(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Pv(Ra(a.path),c,{includeMetadataChanges:!0,Z_:!0});return Sv(s,h)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function q3(t,e){const n=new ct;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await gd(i,s,!0),l=new kC(s,a.hs),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Na(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Lv(t),e,n)),n.promise}function FC(t,e,n={}){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new xf({next:d=>{o.enqueueAndForget(()=>Av(s,h)),d.fromCache&&l.source==="server"?u.reject(new b(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Pv(a,c,{includeMetadataChanges:!0,Z_:!0});return Sv(s,h)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function W3(t,e){const n=new xf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).K_.add(s),s.next()}(await ta(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).K_.delete(s)}(await ta(t),n))}}function G3(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?FP().encode(o):o,function(c,h){return new L3(c,h)}(function(c,h){if(c instanceof Uint8Array)return IE(c,h);if(c instanceof ArrayBuffer)return IE(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,ic(e));t.asyncQueue.enqueueAndForget(async()=>{O3(await Mv(t),i,r)})}function K3(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=M(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Lv(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e,n){if(!n)throw new b(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UC(t,e,n,r){if(e===!0&&r===!0)throw new b(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function TE(t){if(!L.isDocumentKey(t))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function SE(t){if(L.isDocumentKey(t))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new b(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function BC(t,e){if(e<=0)throw new b(P.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$C((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new AE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new AE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new K4;switch(r.type){case"firstParty":return new X4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=EE.get(n);r&&(N("ComponentProvider","Removing Datastore"),EE.delete(n),r.terminate())}(this),Promise.resolve()}}function jC(t,e,n,r={}){var i;const s=(t=ae(t,oc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=bS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(u)}t._authCredentials=new H4(new XR(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=class zC{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zC(this.firestore,e,this._query)}},Ne=class qC{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qC(this.firestore,e,this._key)}},di=class WC extends jt{constructor(e,n,r){super(e,n,Ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new L(e))}withConverter(e){return new WC(this.firestore,e,this._path)}};function Df(t,e,...n){if(t=j(t),Fv("collection","path",e),t instanceof oc){const r=ee.fromString(e,...n);return SE(r),new di(t,null,r)}{if(!(t instanceof Ne||t instanceof di))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return SE(r),new di(t.firestore,null,r)}}function H3(t,e){if(t=ae(t,oc),Fv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new jt(t,null,function(r){return new Dr(ee.emptyPath(),r)}(e))}function na(t,e,...n){if(t=j(t),arguments.length===1&&(e=JR.newId()),Fv("doc","path",e),t instanceof oc){const r=ee.fromString(e,...n);return TE(r),new Ne(t,null,new L(r))}{if(!(t instanceof Ne||t instanceof di))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return TE(r),new Ne(t.firestore,t instanceof di?t.converter:null,new L(r))}}function GC(t,e){return t=j(t),e=j(e),(t instanceof Ne||t instanceof di)&&(e instanceof Ne||e instanceof di)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function KC(t,e){return t=j(t),e=j(e),t instanceof jt&&e instanceof jt&&t.firestore===e.firestore&&Zu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new vv(this,"async_queue_retry"),this._u=()=>{const n=mh();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new ct;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Vi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw He("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=Tv.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&$()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function qg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Y3{constructor(){this._progressObserver={},this._taskCompletionResolver=new ct,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=-1;let Ue=class extends oc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Q3}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HC(this),this._firestoreClient.terminate()}};function J3(t,e){const n=typeof t=="object"?t:Wd(),r=typeof t=="string"?t:e||"(default)",i=_a(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CS("firestore");s&&jC(i,...s)}return i}function mt(t){return t._firestoreClient||HC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function HC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new R$(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$C(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Z3(t,e){YC(t=ae(t,Ue));const n=mt(t);if(n._uninitializedComponentsProvider)throw new b(P.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Ov;return QC(n,i,new DC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function e5(t){YC(t=ae(t,Ue));const e=mt(t);if(e._uninitializedComponentsProvider)throw new b(P.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Ov;return QC(e,r,new V3(r,n.cacheSizeBytes))}function QC(t,e,n){const r=new ct;return t.asyncQueue.enqueue(async()=>{try{await gh(t,n),await zg(t,e),r.resolve()}catch(i){const s=i;if(!OC(s))throw s;Bn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function t5(t){if(t._initialized&&!t._terminated)throw new b(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ct;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!In.D())return Promise.resolve();const i=r+"main";await In.delete(i)}(gv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function n5(t){return function(n){const r=new ct;return n.asyncQueue.enqueueAndForget(async()=>T3(await Mv(n),r)),r.promise}(mt(t=ae(t,Ue)))}function r5(t){return B3(mt(t=ae(t,Ue)))}function i5(t){return j3(mt(t=ae(t,Ue)))}function s5(t,e){const n=mt(t=ae(t,Ue)),r=new Y3;return G3(n,t._databaseId,e,r),r}function o5(t,e){return K3(mt(t=ae(t,Ue)),e).then(n=>n?new jt(t,null,n.query):null)}function YC(t){if(t._initialized||t._terminated)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(it.fromBase64String(e))}catch(n){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ar(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a5=/^__.*__$/;class l5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}class XC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return wd(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(JC(this.du)&&a5.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class u5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}Su(e,n,r,i=!1){return new Vf({du:e,methodName:n,wu:r,path:Ae.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bs(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new u5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lf(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);Wv("Data must be an object, but it was:",o,r);const a=tk(r,o);let l,u;if(s.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Wg(e,h,n);if(!o.contains(d))throw new b(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rk(c,d)||c.push(d)}l=new Yt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new l5(new vt(a),l,u)}class ac extends Us{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}function ZC(t,e,n){return new Vf({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class $v extends Us{_toFieldTransform(e){return new tc(e.path,new Ho)}isEqual(e){return e instanceof $v}}class Uv extends Us{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=ZC(this,e,!0),r=this.bu.map(s=>js(s,n)),i=new Ps(r);return new tc(e.path,i)}isEqual(e){return e instanceof Uv&&Uo(this.bu,e.bu)}}class Bv extends Us{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=ZC(this,e,!0),r=this.bu.map(s=>js(s,n)),i=new Cs(r);return new tc(e.path,i)}isEqual(e){return e instanceof Bv&&Uo(this.bu,e.bu)}}class jv extends Us{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new Qo(e.serializer,kP(e.serializer,this.Du));return new tc(e.path,n)}isEqual(e){return e instanceof jv&&this.Du===e.Du}}function zv(t,e,n,r){const i=t.Su(1,e,n);Wv("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();$s(r,(l,u)=>{const c=Gv(e,l,n);u=j(u);const h=i.fu(c);if(u instanceof ac)s.push(c);else{const d=js(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Yt(s);return new XC(o,a,i.fieldTransforms)}function qv(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Wg(e,r,n)],l=[i];if(s.length%2!=0)throw new b(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Wg(e,s[d])),l.push(s[d+1]);const u=[],c=vt.empty();for(let d=a.length-1;d>=0;--d)if(!rk(u,a[d])){const f=a[d];let y=l[d];y=j(y);const _=o.fu(f);if(y instanceof ac)u.push(f);else{const v=js(y,_);v!=null&&(u.push(f),c.set(f,v))}}const h=new Yt(u);return new XC(c,h,o.fieldTransforms)}function ek(t,e,n,r=!1){return js(n,t.Su(r?4:3,e))}function js(t,e){if(nk(t=j(t)))return Wv("Unsupported field value:",e,t),tk(t,e);if(t instanceof Us)return function(r,i){if(!JC(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=js(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=j(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Pe.fromDate(r);return{timestampValue:Yo(i.serializer,s)}}if(r instanceof Pe){const s=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yo(i.serializer,s)}}if(r instanceof Of)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:BP(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Nf(r)}`)}(t,e)}function tk(t,e){const n={};return uP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(r,i)=>{const s=js(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Of||t instanceof ar||t instanceof Ne||t instanceof Us)}function Wv(t,e,n){if(!nk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Nf(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Wg(t,e,n){if((e=j(e))instanceof Ai)return e._internalPath;if(typeof e=="string")return Gv(t,e);throw wd("Field path arguments must be of type string or ",t,!1,void 0,n)}const c5=new RegExp("[~\\*/\\[\\]]");function Gv(t,e,n){if(e.search(c5)>=0)throw wd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ai(...e.split("."))._internalPath}catch{throw wd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(P.INVALID_ARGUMENT,a+t+l)}function rk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class h5 extends Au{data(){return super.data()}}function Mf(t,e){return typeof e=="string"?Gv(t,e):e instanceof Ai?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kv{}class lc extends Kv{}function Br(t,e,...n){let r=[];e instanceof Kv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Hv).length,a=s.filter(l=>l instanceof Ff).length;if(o>1||o>0&&a>0)throw new b(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ff extends lc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ff(e,n,r)}_apply(e){const n=this._parse(e);return ok(e._query,n),new jt(e.firestore,e.converter,bg(e._query,n))}_parse(e){const n=Bs(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){PE(h,c);const f=[];for(const y of h)f.push(RE(l,s,y));d={arrayValue:{values:f}}}else d=RE(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||PE(h,c),d=ek(a,o,h,c==="in"||c==="not-in");return te.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function d5(t,e,n){const r=e,i=Mf("where",t);return Ff._create(i,r,n)}class Hv extends Kv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ok(o,l),o=bg(o,l)}(e._query,n),new jt(e.firestore,e.converter,bg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qv extends lc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qv(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Iu(s,o)}(e._query,this._field,this._direction);return new jt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Dr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function f5(t,e="asc"){const n=e,r=Mf("orderBy",t);return Qv._create(r,n)}class $f extends lc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new $f(e,n,r)}_apply(e){return new jt(e.firestore,e.converter,dd(e._query,this._limit,this._limitType))}}function p5(t){return BC("limit",t),$f._create("limit",t,"F")}function m5(t){return BC("limitToLast",t),$f._create("limitToLast",t,"L")}class Uf extends lc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Uf(e,n,r)}_apply(e){const n=sk(e,this.type,this._docOrFields,this._inclusive);return new jt(e.firestore,e.converter,function(i,s){return new Dr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function g5(...t){return Uf._create("startAt",t,!0)}function y5(...t){return Uf._create("startAfter",t,!1)}class Bf extends lc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=sk(e,this.type,this._docOrFields,this._inclusive);return new jt(e.firestore,e.converter,function(i,s){return new Dr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function _5(...t){return Bf._create("endBefore",t,!1)}function v5(...t){return Bf._create("endAt",t,!0)}function sk(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof Au)return function(s,o,a,l,u){if(!l)throw new b(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of bo(s))if(h.field.isKeyField())c.push(As(o,l.key));else{const d=l.data.field(h.field);if(Tf(d))throw new b(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new b(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new Ti(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Bs(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new b(P.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<c.length;y++){const _=c[y];if(d[y].field.isKeyField()){if(typeof _!="string")throw new b(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!rv(o)&&_.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const v=o.path.child(ee.fromString(_));if(!L.isDocumentKey(v))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const g=new L(v);f.push(As(a,g))}else{const v=ek(l,u,_);f.push(v)}}return new Ti(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function RE(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new b(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rv(e)&&n.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!L.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return As(t,new L(r))}if(n instanceof Ne)return As(t,n._key);throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nf(n)}.`)}function PE(t,e){if(!Array.isArray(t)||t.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ok(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Yv{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $s(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Of(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_u(e));default:return null}}convertTimestamp(e){const n=vi(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);z(JP(r));const i=new Ii(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||He(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class w5 extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Pr=class extends Au{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},xl=class extends Pr{data(e={}){return super.data(e)}},Ri=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new xl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new rs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new xl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new rs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:I5(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function I5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function ak(t,e){return t instanceof Pr&&e instanceof Pr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ri&&e instanceof Ri&&t._firestore===e._firestore&&KC(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){t=ae(t,Ne);const e=ae(t.firestore,Ue);return MC(mt(e),t._key).then(n=>Xv(e,t,n))}class zs extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function E5(t){t=ae(t,Ne);const e=ae(t.firestore,Ue),n=mt(e),r=new zs(e);return z3(n,t._key).then(i=>new Pr(e,r,t._key,i,new rs(i!==null&&i.hasLocalMutations,!0),t.converter))}function T5(t){t=ae(t,Ne);const e=ae(t.firestore,Ue);return MC(mt(e),t._key,{source:"server"}).then(n=>Xv(e,t,n))}function uk(t){t=ae(t,jt);const e=ae(t.firestore,Ue),n=mt(e),r=new zs(e);return ik(t._query),FC(n,t._query).then(i=>new Ri(e,r,t,i))}function S5(t){t=ae(t,jt);const e=ae(t.firestore,Ue),n=mt(e),r=new zs(e);return q3(n,t._query).then(i=>new Ri(e,r,t,i))}function A5(t){t=ae(t,jt);const e=ae(t.firestore,Ue),n=mt(e),r=new zs(e);return FC(n,t._query,{source:"server"}).then(i=>new Ri(e,r,t,i))}function CE(t,e,n){t=ae(t,Ne);const r=ae(t.firestore,Ue),i=jf(t.converter,e,n);return uc(r,[Lf(Bs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function kE(t,e,n,...r){t=ae(t,Ne);const i=ae(t.firestore,Ue),s=Bs(i);let o;return o=typeof(e=j(e))=="string"||e instanceof Ai?qv(s,"updateDoc",t._key,e,n,r):zv(s,"updateDoc",t._key,e),uc(i,[o.toMutation(t._key,Re.exists(!0))])}function ck(t){return uc(ae(t.firestore,Ue),[new Ca(t._key,Re.none())])}function hk(t,e){const n=ae(t.firestore,Ue),r=na(t),i=jf(t.converter,e);return uc(n,[Lf(Bs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function dk(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||qg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(qg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ne)u=ae(t.firestore,Ue),c=Ra(t._key.path),l={next:h=>{e[o]&&e[o](Xv(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ae(t,jt);u=ae(h.firestore,Ue),c=h._query;const d=new zs(u);l={next:f=>{e[o]&&e[o](new Ri(u,d,h,f))},error:e[o+1],complete:e[o+2]},ik(t._query)}return function(d,f,y,_){const v=new xf(_),g=new Pv(f,v,y);return d.asyncQueue.enqueueAndForget(async()=>Sv(await ta(d),g)),()=>{v.La(),d.asyncQueue.enqueueAndForget(async()=>Av(await ta(d),g))}}(mt(u),c,a,l)}function R5(t,e){return W3(mt(t=ae(t,Ue)),qg(e)?e:{next:e})}function uc(t,e){return function(r,i){const s=new ct;return r.asyncQueue.enqueueAndForget(async()=>v3(await Mv(r),i,s)),s.promise}(mt(t),e)}function Xv(t,e,n){const r=n.docs.get(e._key),i=new zs(t);return new Pr(t,i,e._key,r,new rs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P5={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C5=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bs(e)}set(e,n,r){this._verifyNotCommitted();const i=Hr(e,this._firestore),s=jf(i.converter,n,r),o=Lf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Hr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof Ai?qv(this._dataReader,"WriteBatch.update",s._key,n,r,i):zv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Hr(e,this._firestore);return this._mutations=this._mutations.concat(new Ca(n._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Hr(t,e){if((t=j(t)).firestore!==e)throw new b(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k5=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Bs(n)}get(n){const r=Hr(n,this._firestore),i=new w5(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return $();const o=s[0];if(o.isFoundDocument())return new Au(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Au(this._firestore,i,r._key,null,r.converter);throw $()})}set(n,r,i){const s=Hr(n,this._firestore),o=jf(s.converter,r,i),a=Lf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Hr(n,this._firestore);let a;return a=typeof(r=j(r))=="string"||r instanceof Ai?qv(this._dataReader,"Transaction.update",o._key,r,i,s):zv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Hr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Hr(e,this._firestore),r=new zs(this._firestore);return super.get(e).then(i=>new Pr(this._firestore,r,n._key,i._document,new rs(!1,!1),n.converter))}};function x5(t,e,n){t=ae(t,Ue);const r=Object.assign(Object.assign({},P5),n);return function(s){if(s.maxAttempts<1)throw new b(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new ct;return s.asyncQueue.enqueueAndForget(async()=>{const u=await U3(s);new F3(s.asyncQueue,u,a,o,l).ja()}),l.promise}(mt(t),i=>e(new k5(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b5(){return new ac("deleteField")}function fk(){return new $v("serverTimestamp")}function N5(...t){return new Uv("arrayUnion",t)}function D5(...t){return new Bv("arrayRemove",t)}function O5(t){return new jv("increment",t)}(function(e,n=!0){(function(i){Aa=i})(xr),Sr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ue(new Q4(r.getProvider("auth-internal")),new Z4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),hn(TI,"4.4.2",e),hn(TI,"4.4.2","esm2017")})();const V5="@firebase/firestore-compat",L5="0.3.25";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new b("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){if(typeof Uint8Array>"u")throw new b("unimplemented","Uint8Arrays are not available in this environment.")}function bE(){if(!S$())throw new b("unimplemented","Blobs are unavailable in Firestore in this environment.")}let pk=class Gg{constructor(e){this._delegate=e}static fromBase64String(e){return bE(),new Gg(ar.fromBase64String(e))}static fromUint8Array(e){return xE(),new Gg(ar.fromUint8Array(e))}toBase64(){return bE(),this._delegate.toBase64()}toUint8Array(){return xE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){return M5(t,["next","error","complete"])}function M5(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{enableIndexedDbPersistence(e,n){return Z3(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return e5(e._delegate)}clearIndexedDbPersistence(e){return t5(e._delegate)}}class mk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ii||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Bn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){jC(this._delegate,e,n,r)}enableNetwork(){return r5(this._delegate)}disableNetwork(){return i5(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,UC("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return n5(this._delegate)}onSnapshotsInSync(e){return R5(this._delegate,e)}get app(){if(!this._appCompat)throw new b("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ra(this,Df(this._delegate,e))}catch(n){throw Lt(n,"collection()","Firestore.collection()")}}doc(e){try{return new En(this,na(this._delegate,e))}catch(n){throw Lt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Vt(this,H3(this._delegate,e))}catch(n){throw Lt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return x5(this._delegate,n=>e(new gk(this,n)))}batch(){return mt(this._delegate),new yk(new C5(this._delegate,e=>uc(this._delegate,e)))}loadBundle(e){return s5(this._delegate,e)}namedQuery(e){return o5(this._delegate,e).then(n=>n?new Vt(this,n):null)}}class zf extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new pk(new ar(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return En.forKey(n,this.firestore,null)}}function $5(t){W4(t)}class gk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new zf(e)}get(e){const n=is(e);return this._delegate.get(n).then(r=>new Ru(this._firestore,new Pr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=is(e);return r?(Jv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=is(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=is(e);return this._delegate.delete(n),this}}class yk{constructor(e){this._delegate=e}set(e,n,r){const i=is(e);return r?(Jv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=is(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=is(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ns{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new xl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Pu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ns.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ns(e,new zf(e),n),i.set(n,s)),s}}Ns.INSTANCES=new WeakMap;class En{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new zf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new b("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new En(n,new Ne(n._delegate,r,new L(e)))}static forKey(e,n,r){return new En(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ra(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ra(this.firestore,Df(this._delegate,e))}catch(n){throw Lt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof Ne?GC(this._delegate,e):!1}set(e,n){n=Jv("DocumentReference.set",n);try{return n?CE(this._delegate,e,n):CE(this._delegate,e)}catch(r){throw Lt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?kE(this._delegate,e):kE(this._delegate,e,n,...r)}catch(i){throw Lt(i,"updateDoc()","DocumentReference.update()")}}delete(){return ck(this._delegate)}onSnapshot(...e){const n=_k(e),r=vk(e,i=>new Ru(this.firestore,new Pr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return dk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=E5(this._delegate):(e==null?void 0:e.source)==="server"?n=T5(this._delegate):n=lk(this._delegate),n.then(r=>new Ru(this.firestore,new Pr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new En(this.firestore,e?this._delegate.withConverter(Ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Lt(t,e,n){return t.message=t.message.replace(e,n),t}function _k(t){for(const e of t)if(typeof e=="object"&&!Kg(e))return e;return{}}function vk(t,e){var n,r;let i;return Kg(t[0])?i=t[0]:Kg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ru{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new En(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ak(this._delegate,e._delegate)}}class Pu extends Ru{data(e){const n=this._delegate.data(e);return this._delegate._converter||G4(n!==void 0),n}}class Vt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new zf(e)}where(e,n,r){try{return new Vt(this.firestore,Br(this._delegate,d5(e,n,r)))}catch(i){throw Lt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Vt(this.firestore,Br(this._delegate,f5(e,n)))}catch(r){throw Lt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Vt(this.firestore,Br(this._delegate,p5(e)))}catch(n){throw Lt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Vt(this.firestore,Br(this._delegate,m5(e)))}catch(n){throw Lt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Vt(this.firestore,Br(this._delegate,g5(...e)))}catch(n){throw Lt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Vt(this.firestore,Br(this._delegate,y5(...e)))}catch(n){throw Lt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Vt(this.firestore,Br(this._delegate,_5(...e)))}catch(n){throw Lt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Vt(this.firestore,Br(this._delegate,v5(...e)))}catch(n){throw Lt(n,"endAt()","Query.endAt()")}}isEqual(e){return KC(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=S5(this._delegate):(e==null?void 0:e.source)==="server"?n=A5(this._delegate):n=uk(this._delegate),n.then(r=>new Hg(this.firestore,new Ri(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=_k(e),r=vk(e,i=>new Hg(this.firestore,new Ri(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return dk(this._delegate,n,r)}withConverter(e){return new Vt(this.firestore,e?this._delegate.withConverter(Ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class U5{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Pu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Hg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Vt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Pu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new U5(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Pu(this._firestore,r))})}isEqual(e){return ak(this._delegate,e._delegate)}}class ra extends Vt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new En(this.firestore,e):null}doc(e){try{return e===void 0?new En(this.firestore,na(this._delegate)):new En(this.firestore,na(this._delegate,e))}catch(n){throw Lt(n,"doc()","CollectionReference.doc()")}}add(e){return hk(this._delegate,e).then(n=>new En(this.firestore,n))}isEqual(e){return GC(this._delegate,e._delegate)}withConverter(e){return new ra(this.firestore,e?this._delegate.withConverter(Ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function is(t){return ae(t,Ne)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(...e){this._delegate=new Ai(...e)}static documentId(){return new Zv(Ae.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof Ai?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._delegate=e}static serverTimestamp(){const e=fk();return e._methodName="FieldValue.serverTimestamp",new Yi(e)}static delete(){const e=b5();return e._methodName="FieldValue.delete",new Yi(e)}static arrayUnion(...e){const n=N5(...e);return n._methodName="FieldValue.arrayUnion",new Yi(n)}static arrayRemove(...e){const n=D5(...e);return n._methodName="FieldValue.arrayRemove",new Yi(n)}static increment(e){const n=O5(e);return n._methodName="FieldValue.increment",new Yi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B5={Firestore:mk,GeoPoint:Of,Timestamp:Pe,Blob:pk,Transaction:gk,WriteBatch:yk,DocumentReference:En,DocumentSnapshot:Ru,Query:Vt,QueryDocumentSnapshot:Pu,QuerySnapshot:Hg,CollectionReference:ra,FieldPath:Zv,FieldValue:Yi,setLogLevel:$5,CACHE_SIZE_UNLIMITED:X3};function j5(t,e){t.INTERNAL.registerComponent(new Fn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},B5)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z5(t){j5(t,(e,n)=>new mk(e,n,new F5)),t.registerVersion(V5,L5)}z5(rf);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="firebasestorage.googleapis.com",Ik="storageBucket",q5=2*60*1e3,W5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Ct{constructor(e,n,r=0){super(Yp(e),`Firebase Storage: ${n} (${Yp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function Yp(t){return"storage/"+t}function e0(){const t="An unknown error occurred, please check the error payload for server response.";return new qe(Be.UNKNOWN,t)}function G5(t){return new qe(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function K5(t){return new qe(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function H5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe(Be.UNAUTHENTICATED,t)}function Q5(){return new qe(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Y5(t){return new qe(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function X5(){return new qe(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function J5(){return new qe(Be.CANCELED,"User canceled the upload/download.")}function Z5(t){return new qe(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function eB(t){return new qe(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tB(){return new qe(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ik+"' property when initializing the app?")}function nB(){return new qe(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rB(){return new qe(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iB(t){return new qe(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qg(t){return new qe(Be.INVALID_ARGUMENT,t)}function Ek(){return new qe(Be.APP_DELETED,"The Firebase app was deleted.")}function sB(t){return new qe(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bl(t,e){return new qe(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ja(t){throw new qe(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(r.path==="")return r;throw eB(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===wk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${v}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:f,indices:y,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<m.length;w++){const C=m[w],T=C.regex.exec(e);if(T){const E=T[C.indices.bucket];let S=T[C.indices.path];S||(S=""),r=new ln(E,S),C.postModify(r);break}}if(r==null)throw Z5(e);return r}}class oB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aB(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...v){u||(u=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){s&&clearTimeout(s)}function f(v,...g){if(u){d();return}if(v){d(),c.call(null,v,...g);return}if(l()||o){d(),c.call(null,v,...g);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let y=!1;function _(v){y||(y=!0,d(),!u&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function lB(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uB(t){return t!==void 0}function cB(t){return typeof t=="object"&&!Array.isArray(t)}function t0(t){return typeof t=="string"||t instanceof String}function NE(t){return n0()&&t instanceof Blob}function n0(){return typeof Blob<"u"}function DE(t,e,n,r){if(r<e)throw Qg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Tk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ds||(ds={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hB(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Uc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ds.NO_ERROR,l=s.getStatus();if(!a||hB(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ds.ABORT;r(!1,new Uc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Uc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uB(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=e0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ek():J5();o(l)}else{const l=X5();o(l)}};this.canceled_?n(!1,new Uc(!1,null,!0)):this.backoffId_=aB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yB(t,e,n,r,i,s,o=!0){const a=Tk(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return mB(u,e),fB(u,n),pB(u,s),gB(u,r),new dB(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _B(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vB(...t){const e=_B();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(n0())return new Blob(t);throw new qe(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wB(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IB(t){if(typeof atob>"u")throw iB("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xp{constructor(e,n){this.data=e,this.contentType=n||null}}function EB(t,e){switch(t){case tr.RAW:return new Xp(Sk(e));case tr.BASE64:case tr.BASE64URL:return new Xp(Ak(t,e));case tr.DATA_URL:return new Xp(SB(e),AB(e))}throw e0()}function Sk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TB(t){let e;try{e=decodeURIComponent(t)}catch{throw bl(tr.DATA_URL,"Malformed data URL.")}return Sk(e)}function Ak(t,e){switch(t){case tr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw bl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw bl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IB(e)}catch(i){throw i.message.includes("polyfill")?i:bl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Rk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bl(tr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=RB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function SB(t){const e=new Rk(t);return e.base64?Ak(tr.BASE64,e.rest):TB(e.rest)}function AB(t){return new Rk(t).contentType}function RB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){let r=0,i="";NE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(NE(this.data_)){const r=this.data_,i=wB(r,e,n);return i===null?null:new Qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qr(r,!0)}}static getBlob(...e){if(n0()){const n=e.map(r=>r instanceof Qr?r.data_:r);return new Qr(vB.apply(null,n))}else{const n=e.map(o=>t0(o)?EB(tr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){let e;try{e=JSON.parse(t)}catch{return null}return cB(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ck(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kB(t,e){return e}class Dt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||kB}}let Bc=null;function xB(t){return!t0(t)||t.length<2?t:Ck(t)}function kk(){if(Bc)return Bc;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(s,o){return xB(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Dt("size");return i.xform=r,t.push(i),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),Bc=t,Bc}function bB(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ln(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function NB(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return bB(r,t),r}function xk(t,e,n){const r=Pk(e);return r===null?null:NB(t,r,n)}function DB(t,e,n,r){const i=Pk(e);if(i===null||!t0(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=r0(d,n,r),y=Tk({alt:"media",token:u});return f+y})[0]}function OB(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class bk{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){if(!t)throw e0()}function VB(t,e){function n(r,i){const s=xk(t,i,e);return Nk(s!==null),s}return n}function LB(t,e){function n(r,i){const s=xk(t,i,e);return Nk(s!==null),DB(s,i,t.host,t._protocol)}return n}function Dk(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Q5():i=H5():n.getStatus()===402?i=K5(t.bucket):n.getStatus()===403?i=Y5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function MB(t){const e=Dk(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=G5(t.path)),s.serverResponse=i.serverResponse,s}return n}function FB(t,e,n){const r=e.fullServerUrl(),i=r0(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new bk(i,s,LB(t,n),o);return a.errorHandler=MB(e),a}function $B(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function UB(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$B(null,e)),r}function BB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let w=0;w<2;w++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=UB(e,r,i),c=OB(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Qr.getBlob(h,r,d);if(f===null)throw nB();const y={name:u.fullPath},_=r0(s,t.host,t._protocol),v="POST",g=t.maxUploadRetryTime,p=new bk(_,v,VB(t,n),g);return p.urlParams=y,p.headers=o,p.body=f.uploadData(),p.errorHandler=Dk(e),p}class jB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zB extends jB{initXhr(){this.xhr_.responseType="text"}}function Ok(){return new zB}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ds(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ck(this._location.path)}get storage(){return this._service}get parent(){const e=PB(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new Ds(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sB(e)}}function qB(t,e,n){t._throwIfRoot("uploadBytes");const r=BB(t.storage,t._location,kk(),new Qr(e,!0),n);return t.storage.makeRequestWithTokens(r,Ok).then(i=>({metadata:i,ref:t}))}function WB(t){t._throwIfRoot("getDownloadURL");const e=FB(t.storage,t._location,kk());return t.storage.makeRequestWithTokens(e,Ok).then(n=>{if(n===null)throw rB();return n})}function GB(t,e){const n=CB(t._location.path,e),r=new ln(t._location.bucket,n);return new Ds(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KB(t){return/^[A-Za-z]+:\/\//.test(t)}function HB(t,e){return new Ds(t,e)}function Vk(t,e){if(t instanceof i0){const n=t;if(n._bucket==null)throw tB();const r=new Ds(n,n._bucket);return e!=null?Vk(r,e):r}else return e!==void 0?GB(t,e):t}function QB(t,e){if(e&&KB(e)){if(t instanceof i0)return HB(t,e);throw Qg("To use ref(service, url), the first argument must be a Storage instance.")}else return Vk(t,e)}function OE(t,e){const n=e==null?void 0:e[Ik];return n==null?null:ln.makeFromBucketSpec(n,t)}function YB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bS(i,t.app.options.projectId))}class i0{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=wk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q5,this._maxUploadRetryTime=W5,this._requests=new Set,i!=null?this._bucket=ln.makeFromBucketSpec(i,this._host):this._bucket=OE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=OE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){DE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){DE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ds(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new oB(Ek());{const o=yB(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const VE="@firebase/storage",LE="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="storage";function Mk(t,e,n){return t=j(t),qB(t,e,n)}function Fk(t){return t=j(t),WB(t)}function $k(t,e){return t=j(t),QB(t,e)}function XB(t=Wd(),e){t=j(t);const r=_a(t,Lk).getImmediate({identifier:e}),i=CS("storage");return i&&JB(r,...i),r}function JB(t,e,n,r={}){YB(t,e,n,r)}function ZB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new i0(n,r,i,e,xr)}function ej(){Sr(new Fn(Lk,ZB,"PUBLIC").setMultipleInstances(!0)),hn(VE,LE,""),hn(VE,LE,"esm2017")}ej();const tj={apiKey:"AIzaSyAWiNMc2wbynG9pr1q4PCKLY97fFqXcXAs",authDomain:"highfiblog-6a516.firebaseapp.com",projectId:"highfiblog-6a516",storageBucket:"highfiblog-6a516.appspot.com",messagingSenderId:"483793649917",appId:"1:483793649917:web:07b329624a79b2fc5e3e94"},s0=qd(tj),ia=$A(s0),Id=J3(s0),Uk=XB(s0),nj=new Dn;function Bk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Bk(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function ti(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Bk(t))&&(r&&(r+=" "),r+=e);return r}const Cu=t=>typeof t=="number"&&!isNaN(t),fs=t=>typeof t=="string",un=t=>typeof t=="function",yh=t=>fs(t)||un(t)?t:null,Yg=t=>x.isValidElement(t)||fs(t)||un(t)||Cu(t);function rj(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function qf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d,playToast:f}=o;const y=r?`${e}--${l}`:e,_=r?`${n}--${l}`:n,v=x.useRef(0);return x.useLayoutEffect(()=>{const g=h.current,p=y.split(" "),m=w=>{w.target===h.current&&(f(),g.removeEventListener("animationend",m),g.removeEventListener("animationcancel",m),v.current===0&&w.type!=="animationcancel"&&g.classList.remove(...p))};g.classList.add(...p),g.addEventListener("animationend",m),g.addEventListener("animationcancel",m)},[]),x.useEffect(()=>{const g=h.current,p=()=>{g.removeEventListener("animationend",p),i?rj(g,c,s):c()};d||(u?p():(v.current=1,g.className+=` ${_}`,g.addEventListener("animationend",p)))},[d]),ie.createElement(ie.Fragment,null,a)}}function ME(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Mt=new Map;let ku=[];const Xg=new Set,ij=t=>Xg.forEach(e=>e(t)),jk=()=>Mt.size>0;function zk(t,e){var n;if(e)return!((n=Mt.get(e))==null||!n.isToastActive(t));let r=!1;return Mt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function qk(t,e){Yg(t)&&(jk()||ku.push({content:t,options:e}),Mt.forEach(n=>{n.buildToast(t,e)}))}function FE(t,e){Mt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function sj(t){const{subscribe:e,getSnapshot:n,setProps:r}=x.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(c,h,d){let f=1,y=0,_=[],v=[],g=[],p=h;const m=new Map,w=new Set,C=()=>{g=Array.from(m.values()),w.forEach(S=>S())},T=S=>{v=S==null?[]:v.filter(A=>A!==S),C()},E=S=>{const{toastId:A,onOpen:k,updateId:W,children:le}=S.props,ge=W==null;S.staleId&&m.delete(S.staleId),m.set(A,S),v=[...v,S.props.toastId].filter(Oe=>Oe!==S.staleId),C(),d(ME(S,ge?"added":"updated")),ge&&un(k)&&k(x.isValidElement(le)&&le.props)};return{id:c,props:p,observe:S=>(w.add(S),()=>w.delete(S)),toggle:(S,A)=>{m.forEach(k=>{A!=null&&A!==k.props.toastId||un(k.toggle)&&k.toggle(S)})},removeToast:T,toasts:m,clearQueue:()=>{y-=_.length,_=[]},buildToast:(S,A)=>{if((K=>{let{containerId:ue,toastId:ke,updateId:tt}=K;const Ge=ue?ue!==c:c!==1,Nt=m.has(ke)&&tt==null;return Ge||Nt})(A))return;const{toastId:k,updateId:W,data:le,staleId:ge,delay:Oe}=A,We=()=>{T(k)},Ve=W==null;Ve&&y++;const me={...p,style:p.toastStyle,key:f++,...Object.fromEntries(Object.entries(A).filter(K=>{let[ue,ke]=K;return ke!=null})),toastId:k,updateId:W,data:le,closeToast:We,isIn:!1,className:yh(A.className||p.toastClassName),bodyClassName:yh(A.bodyClassName||p.bodyClassName),progressClassName:yh(A.progressClassName||p.progressClassName),autoClose:!A.isLoading&&(V=A.autoClose,B=p.autoClose,V===!1||Cu(V)&&V>0?V:B),deleteToast(){const K=m.get(k),{onClose:ue,children:ke}=K.props;un(ue)&&ue(x.isValidElement(ke)&&ke.props),d(ME(K,"removed")),m.delete(k),y--,y<0&&(y=0),_.length>0?E(_.shift()):C()}};var V,B;me.closeButton=p.closeButton,A.closeButton===!1||Yg(A.closeButton)?me.closeButton=A.closeButton:A.closeButton===!0&&(me.closeButton=!Yg(p.closeButton)||p.closeButton);let G=S;x.isValidElement(S)&&!fs(S.type)?G=x.cloneElement(S,{closeToast:We,toastProps:me,data:le}):un(S)&&(G=S({closeToast:We,toastProps:me,data:le}));const X={content:G,props:me,staleId:ge};p.limit&&p.limit>0&&y>p.limit&&Ve?_.push(X):Cu(Oe)?setTimeout(()=>{E(X)},Oe):E(X)},setProps(S){p=S},setToggle:(S,A)=>{m.get(S).toggle=A},isToastActive:S=>v.some(A=>A===S),getSnapshot:()=>p.newestOnTop?g.reverse():g}}(o,s,ij);Mt.set(o,l);const u=l.observe(a);return ku.forEach(c=>qk(c.content,c.options)),ku=[],()=>{u(),Mt.delete(o)}},setProps(a){var l;(l=Mt.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=Mt.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=x.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:zk,count:i==null?void 0:i.length}}function oj(t){const[e,n]=x.useState(!1),[r,i]=x.useState(!1),s=x.useRef(null),o=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:h}=t;var d,f;function y(){n(!0)}function _(){n(!1)}function v(m){const w=s.current;o.canDrag&&w&&(o.didMove=!0,e&&_(),o.delta=t.draggableDirection==="x"?m.clientX-o.start:m.clientY-o.start,o.start!==m.clientX&&(o.canCloseOnClick=!1),w.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function g(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",g);const m=s.current;if(o.canDrag&&o.didMove&&m){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity")}}(f=Mt.get((d={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||f.setToggle(d.id,d.fn),x.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||_(),window.addEventListener("focus",y),window.addEventListener("blur",_),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",_)}},[t.pauseOnFocusLoss]);const p={onPointerDown:function(m){if(t.draggable===!0||t.draggable===m.pointerType){o.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",g);const w=s.current;o.canCloseOnClick=!0,o.canDrag=!0,w.style.transition="none",t.draggableDirection==="x"?(o.start=m.clientX,o.removalDistance=w.offsetWidth*(t.draggablePercent/100)):(o.start=m.clientY,o.removalDistance=w.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(m){const{top:w,bottom:C,left:T,right:E}=s.current.getBoundingClientRect();m.nativeEvent.type!=="touchend"&&t.pauseOnHover&&m.clientX>=T&&m.clientX<=E&&m.clientY>=w&&m.clientY<=C?_():y()}};return a&&l&&(p.onMouseEnter=_,t.stacked||(p.onMouseLeave=y)),h&&(p.onClick=m=>{c&&c(m),o.canCloseOnClick&&u()}),{playToast:y,pauseToast:_,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:p}}function aj(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const f=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};l&&(y.transform=`scaleX(${u})`);const _=ti("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),v=un(o)?o({rtl:c,type:i,defaultClassName:_}):ti(_,o),g={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}};return ie.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},ie.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${i}`}),ie.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:v,style:y,...g}))}let lj=1;const Wk=()=>""+lj++;function uj(t){return t&&(fs(t.toastId)||Cu(t.toastId))?t.toastId:Wk()}function Nl(t,e){return qk(t,e),e.toastId}function Ed(t,e){return{...e,type:e&&e.type||t,toastId:uj(e)}}function jc(t){return(e,n)=>Nl(e,Ed(t,n))}function re(t,e){return Nl(t,Ed("default",e))}re.loading=(t,e)=>Nl(t,Ed("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),re.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=fs(i)?re.loading(i,n):re.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,d)=>{if(h==null)return void re.dismiss(r);const f={type:c,...a,...n,data:d},y=fs(h)?{render:h}:h;return r?re.update(r,{...f,...y}):re(y.render,{...f,...y}),d},u=un(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},re.success=jc("success"),re.info=jc("info"),re.error=jc("error"),re.warning=jc("warning"),re.warn=re.warning,re.dark=(t,e)=>Nl(t,Ed("default",{theme:"dark",...e})),re.dismiss=function(t){(function(e){var n;if(jk()){if(e==null||fs(n=e)||Cu(n))Mt.forEach(i=>{i.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var r;(r=Mt.get(e.containerId))!=null&&r.removeToast(e.id)||Mt.forEach(i=>{i.removeToast(e.id)})}}else ku=ku.filter(i=>e!=null&&i.options.toastId!==e)})(t)},re.clearWaitingQueue=function(t){t===void 0&&(t={}),Mt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},re.isActive=zk,re.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=Mt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Wk()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Nl(o,s)}},re.done=t=>{re.update(t,{progress:1})},re.onChange=function(t){return Xg.add(t),()=>{Xg.delete(t)}},re.play=t=>FE(!0,t),re.pause=t=>FE(!1,t);const cj=typeof window<"u"?x.useLayoutEffect:x.useEffect,zc=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ie.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Jp={info:function(t){return ie.createElement(zc,{...t},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ie.createElement(zc,{...t},ie.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ie.createElement(zc,{...t},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ie.createElement(zc,{...t},ie.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ie.createElement("div",{className:"Toastify__spinner"})}},hj=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=oj(t),{closeButton:o,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:h,closeToast:d,transition:f,position:y,className:_,style:v,bodyClassName:g,bodyStyle:p,progressClassName:m,progressStyle:w,updateId:C,role:T,progress:E,rtl:S,toastId:A,deleteToast:k,isIn:W,isLoading:le,closeOnClick:ge,theme:Oe}=t,We=ti("Toastify__toast",`Toastify__toast-theme--${Oe}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":ge}),Ve=un(_)?_({rtl:S,position:y,type:c,defaultClassName:We}):ti(We,_),me=function(X){let{theme:K,type:ue,isLoading:ke,icon:tt}=X,Ge=null;const Nt={theme:K,type:ue};return tt===!1||(un(tt)?Ge=tt({...Nt,isLoading:ke}):x.isValidElement(tt)?Ge=x.cloneElement(tt,Nt):ke?Ge=Jp.spinner():(Fi=>Fi in Jp)(ue)&&(Ge=Jp[ue](Nt))),Ge}(t),V=!!E||!l,B={closeToast:d,type:c,theme:Oe};let G=null;return o===!1||(G=un(o)?o(B):x.isValidElement(o)?x.cloneElement(o,B):function(X){let{closeToast:K,theme:ue,ariaLabel:ke="close"}=X;return ie.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ue}`,type:"button",onClick:tt=>{tt.stopPropagation(),K(tt)},"aria-label":ke},ie.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ie.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(B)),ie.createElement(f,{isIn:W,done:k,position:y,preventExitTransition:n,nodeRef:r,playToast:s},ie.createElement("div",{id:A,onClick:u,"data-in":W,className:Ve,...i,style:v,ref:r},ie.createElement("div",{...W&&{role:T},className:un(g)?g({type:c}):ti("Toastify__toast-body",g),style:p},me!=null&&ie.createElement("div",{className:ti("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!le})},me),ie.createElement("div",null,a)),G,ie.createElement(aj,{...C&&!V?{key:`pb-${C}`}:{},rtl:S,theme:Oe,delay:l,isRunning:e,isIn:W,closeToast:d,hide:h,type:c,style:w,className:m,controlledProgress:V,progress:E||0})))},Wf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},dj=qf(Wf("bounce",!0));qf(Wf("slide",!0));qf(Wf("zoom"));qf(Wf("flip"));const fj={position:"top-right",transition:dj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function pj(t){let e={...fj,...t};const n=t.stacked,[r,i]=x.useState(!0),s=x.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=sj(e),{className:u,style:c,rtl:h,containerId:d}=e;function f(_){const v=ti("Toastify__toast-container",`Toastify__toast-container--${_}`,{"Toastify__toast-container--rtl":h});return un(u)?u({position:_,rtl:h,defaultClassName:v}):ti(v,yh(u))}function y(){n&&(i(!0),re.play())}return cj(()=>{if(n){var _;const v=s.current.querySelectorAll('[data-in="true"]'),g=12,p=(_=e.position)==null?void 0:_.includes("top");let m=0,w=0;Array.from(v).reverse().forEach((C,T)=>{const E=C;E.classList.add("Toastify__toast--stacked"),T>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=p?"top":"bot");const S=m*(r?.2:1)+(r?0:g*T);E.style.setProperty("--y",`${p?S:-1*S}px`),E.style.setProperty("--g",`${g}`),E.style.setProperty("--s",""+(1-(r?w:0))),m+=E.offsetHeight,w+=.025})}},[r,l,n]),ie.createElement("div",{ref:s,className:"Toastify",id:d,onMouseEnter:()=>{n&&(i(!1),re.pause())},onMouseLeave:y},o((_,v)=>{const g=v.length?{...c}:{...c,pointerEvents:"none"};return ie.createElement("div",{className:f(_),style:g,key:`container-${_}`},v.map(p=>{let{content:m,props:w}=p;return ie.createElement(hj,{...w,stacked:n,collapseAll:y,isIn:a(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},m)}))}))}const mj={email:"",password:""},gj=({setUser:t})=>{const[e,n]=x.useState(mj),{email:r,password:i}=e,s=l=>{n({...e,[l.target.name]:l.target.value})},o=async l=>{if(l.preventDefault(),r&&i)try{const{user:u}=await vA(ia,r,i);await t(u)}catch(u){u.code==="auth/invalid-credential"?re.error("Incorrect password entered."):u.code==="auth/user-not-found"?re.error("No user found with this email."):console.error("An error occurred:",u.message)}else return re.error("All fields are mandatory to fill")},a=async()=>{try{const{user:l}=await xA(ia,nj);await t(l)}catch(l){return console.log(l)}};return I.jsx("div",{children:I.jsxs("div",{className:"flex flex-wrap",children:[I.jsx("div",{className:"flex w-full flex-col md:w-1/2",children:I.jsxs("div",{className:"lg:w-[28rem] mx-auto lg:my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 mt-10 md:pt-0",children:[I.jsx("p",{className:"text-left text-3xl font-bold",children:"Welcome,"}),I.jsx("p",{className:"mt-2 text-left text-gray-500",children:"Please enter your details to Login."}),I.jsxs("button",{onClick:a,className:"-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",children:[I.jsx("img",{className:"mr-2 h-5",src:"https://static.cdnlogo.com/logos/g/35/google-icon.svg"})," Log in with Google"]}),I.jsx("div",{className:"relative mt-8 flex h-px place-items-center bg-gray-200",children:I.jsx("div",{className:"absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500",children:"or"})}),I.jsxs("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:o,children:[I.jsx("div",{className:"flex flex-col pt-4",children:I.jsx("div",{className:"focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition",children:I.jsx("input",{type:"email",name:"email",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Email",value:r,onChange:s})})}),I.jsx("div",{className:"mb-12 flex flex-col pt-4",children:I.jsx("div",{className:"focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition",children:I.jsx("input",{type:"password",name:"password",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Password",value:i,onChange:s})})}),I.jsx("button",{type:"submit",className:"w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",children:"Log in"})]}),I.jsx("div",{className:"py-12 text-center",children:I.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Don't have an account?",I.jsx(fr,{to:"/signup",className:"underline-offset-4 font-semibold text-gray-900 underline",children:"Sign up for free."})]})})]})}),I.jsx("div",{className:"pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2",children:I.jsx("img",{className:"-z-1 absolute top-0 h-full w-full object-cover opacity-90",src:"https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})})]})})},yj="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20stroke='rgb(37%2099%20235)'%20stroke-width='1.5'/%3e%3cpath%20d='M7.5%2017C9.8317%2014.5578%2014.1432%2014.4428%2016.5%2017M14.4951%209.5C14.4951%2010.8807%2013.3742%2012%2011.9915%2012C10.6089%2012%209.48797%2010.8807%209.48797%209.5C9.48797%208.11929%2010.6089%207%2011.9915%207C13.3742%207%2014.4951%208.11929%2014.4951%209.5Z'%20stroke='rgb(37%2099%20235)'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",Gf=()=>{const t=ma(),e=ia.currentUser;return I.jsx("div",{children:I.jsx("header",{className:"mb-2 px-4 shadow",children:I.jsxs("div",{className:"relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between",children:[I.jsxs("div",{className:"flex items-center flex-1",children:[" ",I.jsxs(fr,{to:"/",className:"flex items-center text-2xl font-black",children:[I.jsx("span",{className:"mr-2 text-3xl text-blue-600",children:I.jsx("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:I.jsx("path",{fill:"currentColor",d:"M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"})})}),I.jsx("span",{children:"HighFiii"})]})]}),I.jsx("input",{className:"peer hidden",type:"checkbox",id:"navbar-open"}),I.jsxs("label",{className:"absolute right-0 mt-1 cursor-pointer text-xl sm:hidden",htmlFor:"navbar-open",children:[I.jsx("span",{className:"sr-only",children:"Toggle Navigation"}),I.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.88em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 448 512",children:I.jsx("path",{fill:"currentColor",d:"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"})})]}),I.jsx("nav",{"aria-label":"Header Navigation",className:"peer-checked:block hidden pl-2 py-6 sm:block sm:py-0",children:I.jsxs("ul",{className:"flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8",children:[I.jsx("li",{children:I.jsx(fr,{className:` hover:text-blue-600 ${t.pathname==="/home"||t.pathname==="/show:#"?"text-blue-600 font-bold":"text-gray-600"}`,to:"/home",children:"Blogs"})}),I.jsx("li",{children:I.jsx(fr,{className:` hover:text-blue-600 ${t.pathname==="/create"?" text-blue-600 font-bold":"text-gray-600"}`,to:"/create",children:"Create Blog"})}),I.jsx("li",{children:I.jsx(fr,{className:" hover:text-blue-600 ",to:"/about",children:I.jsxs("div",{className:"flex w-auto mx-4 items-center overflow-hidden rounded-xl bg-white border-2 text-blue-600 border-blue-600 p-2   shadow hover:shadow-xl",children:[I.jsx("img",{className:"shrink-0  w-8  rounded-full",src:e.photoURL?e.photoURL:yj,referrerPolicy:"no-referrer"}),I.jsx("div",{className:"",children:I.jsx("p",{className:"font-medium px-3",children:e.displayName})})]})})})]})})]})})})};var Jt=function(){return Jt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Jt.apply(this,arguments)};function xu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",Dl="-moz-",ce="-webkit-",Gk="comm",Kf="rule",o0="decl",_j="@import",Kk="@keyframes",vj="@layer",Hk=Math.abs,a0=String.fromCharCode,Jg=Object.assign;function wj(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function Qk(t){return t.trim()}function ur(t,e){return(t=e.exec(t))?t[0]:t}function J(t,e,n){return t.replace(e,n)}function _h(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function sa(t,e,n){return t.slice(e,n)}function qn(t){return t.length}function Yk(t){return t.length}function hl(t,e){return e.push(t),t}function Ij(t,e){return t.map(e).join("")}function $E(t,e){return t.filter(function(n){return!ur(n,e)})}var Hf=1,oa=1,Xk=0,Pn=0,Ze=0,Da="";function Qf(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Hf,column:oa,length:o,return:"",siblings:a}}function jr(t,e){return Jg(Qf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Js(t){for(;t.root;)t=jr(t.root,{children:[t]});hl(t,t.siblings)}function Ej(){return Ze}function Tj(){return Ze=Pn>0?lt(Da,--Pn):0,oa--,Ze===10&&(oa=1,Hf--),Ze}function Ln(){return Ze=Pn<Xk?lt(Da,Pn++):0,oa++,Ze===10&&(oa=1,Hf++),Ze}function ps(){return lt(Da,Pn)}function vh(){return Pn}function Yf(t,e){return sa(Da,t,e)}function Zg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sj(t){return Hf=oa=1,Xk=qn(Da=t),Pn=0,[]}function Aj(t){return Da="",t}function Zp(t){return Qk(Yf(Pn-1,ey(t===91?t+2:t===40?t+1:t)))}function Rj(t){for(;(Ze=ps())&&Ze<33;)Ln();return Zg(t)>2||Zg(Ze)>3?"":" "}function Pj(t,e){for(;--e&&Ln()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return Yf(t,vh()+(e<6&&ps()==32&&Ln()==32))}function ey(t){for(;Ln();)switch(Ze){case t:return Pn;case 34:case 39:t!==34&&t!==39&&ey(Ze);break;case 40:t===41&&ey(t);break;case 92:Ln();break}return Pn}function Cj(t,e){for(;Ln()&&t+Ze!==57;)if(t+Ze===84&&ps()===47)break;return"/*"+Yf(e,Pn-1)+"*"+a0(t===47?t:Ln())}function kj(t){for(;!Zg(ps());)Ln();return Yf(t,Pn)}function xj(t){return Aj(wh("",null,null,null,[""],t=Sj(t),0,[0],t))}function wh(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,f=0,y=0,_=1,v=1,g=1,p=0,m="",w=i,C=s,T=r,E=m;v;)switch(y=p,p=Ln()){case 40:if(y!=108&&lt(E,h-1)==58){_h(E+=J(Zp(p),"&","&\f"),"&\f",Hk(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Zp(p);break;case 9:case 10:case 13:case 32:E+=Rj(y);break;case 92:E+=Pj(vh()-1,7);continue;case 47:switch(ps()){case 42:case 47:hl(bj(Cj(Ln(),vh()),e,n,l),l);break;default:E+="/"}break;case 123*_:a[u++]=qn(E)*g;case 125*_:case 59:case 0:switch(p){case 0:case 125:v=0;case 59+c:g==-1&&(E=J(E,/\f/g,"")),f>0&&qn(E)-h&&hl(f>32?BE(E+";",r,n,h-1,l):BE(J(E," ","")+";",r,n,h-2,l),l);break;case 59:E+=";";default:if(hl(T=UE(E,e,n,u,c,i,a,m,w=[],C=[],h,s),s),p===123)if(c===0)wh(E,e,T,T,w,s,h,a,C);else switch(d===99&&lt(E,3)===110?100:d){case 100:case 108:case 109:case 115:wh(t,T,T,r&&hl(UE(t,T,T,0,0,i,a,m,i,w=[],h,C),C),i,C,h,a,r?w:C);break;default:wh(E,T,T,T,[""],C,0,a,C)}}u=c=f=0,_=g=1,m=E="",h=o;break;case 58:h=1+qn(E),f=y;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&Tj()==125)continue}switch(E+=a0(p),p*_){case 38:g=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(qn(E)-1)*g,g=1;break;case 64:ps()===45&&(E+=Zp(Ln())),d=ps(),c=h=qn(m=E+=kj(vh())),p++;break;case 45:y===45&&qn(E)==2&&(_=0)}}return s}function UE(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,f=i===0?s:[""],y=Yk(f),_=0,v=0,g=0;_<r;++_)for(var p=0,m=sa(t,d+1,d=Hk(v=o[_])),w=t;p<y;++p)(w=Qk(v>0?f[p]+" "+m:J(m,/&\f/g,f[p])))&&(l[g++]=w);return Qf(t,e,n,i===0?Kf:a,l,u,c,h)}function bj(t,e,n,r){return Qf(t,e,n,Gk,a0(Ej()),sa(t,2,-2),0,r)}function BE(t,e,n,r,i){return Qf(t,e,n,o0,sa(t,0,r),sa(t,r+1,-1),r,i)}function Jk(t,e,n){switch(wj(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return Dl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+Dl+t+we+t+t;case 5936:switch(lt(t,e+11)){case 114:return ce+t+we+J(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+J(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+J(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+J(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+J(t,/flex-|-self/g,"")+(ur(t,/flex-|baseline/)?"":we+"grid-row-"+J(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+J(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+J(t,"shrink","negative")+t;case 5292:return ce+t+we+J(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+J(t,"-grow","")+ce+t+we+J(t,"grow","positive")+t;case 4554:return ce+J(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return J(J(J(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return J(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return J(J(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!ur(t,/flex-|baseline/))return we+"grid-column-align"+sa(t,e)+t;break;case 2592:case 3360:return we+J(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ur(r.props,/grid-\w+-end/)})?~_h(t+(n=n[e].value),"span",0)?t:we+J(t,"-start","")+t+we+"grid-row-span:"+(~_h(n,"span",0)?ur(n,/\d+/):+ur(n,/\d+/)-+ur(t,/\d+/))+";":we+J(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ur(r.props,/grid-\w+-start/)})?t:we+J(J(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return J(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return J(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Dl+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_h(t,"stretch",0)?Jk(J(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return J(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(lt(t,e+6)===121)return J(t,":",":"+ce)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return J(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(lt(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return J(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(t,"scroll-","scroll-snap-")+t}return t}function Td(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Nj(t,e,n,r){switch(t.type){case vj:if(t.children.length)break;case _j:case o0:return t.return=t.return||t.value;case Gk:return"";case Kk:return t.return=t.value+"{"+Td(t.children,r)+"}";case Kf:if(!qn(t.value=t.props.join(",")))return""}return qn(n=Td(t.children,r))?t.return=t.value+"{"+n+"}":""}function Dj(t){var e=Yk(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Oj(t){return function(e){e.root||(e=e.return)&&t(e)}}function Vj(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case o0:t.return=Jk(t.value,t.length,n);return;case Kk:return Td([jr(t,{value:J(t.value,"@","@"+ce)})],r);case Kf:if(t.length)return Ij(n=t.props,function(i){switch(ur(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Js(jr(t,{props:[J(i,/:(read-\w+)/,":"+Dl+"$1")]})),Js(jr(t,{props:[i]})),Jg(t,{props:$E(n,r)});break;case"::placeholder":Js(jr(t,{props:[J(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Js(jr(t,{props:[J(i,/:(plac\w+)/,":"+Dl+"$1")]})),Js(jr(t,{props:[J(i,/:(plac\w+)/,we+"input-$1")]})),Js(jr(t,{props:[i]})),Jg(t,{props:$E(n,r)});break}return""})}}var Lj={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nn={},aa=typeof process<"u"&&nn!==void 0&&(nn.REACT_APP_SC_ATTR||nn.SC_ATTR)||"data-styled",Zk="active",ex="data-styled-version",Xf="6.1.8",l0=`/*!sc*/
`,u0=typeof window<"u"&&"HTMLElement"in window,Mj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&nn!==void 0&&nn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&nn.REACT_APP_SC_DISABLE_SPEEDY!==""?nn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&nn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&nn!==void 0&&nn.SC_DISABLE_SPEEDY!==void 0&&nn.SC_DISABLE_SPEEDY!==""&&nn.SC_DISABLE_SPEEDY!=="false"&&nn.SC_DISABLE_SPEEDY),Jf=Object.freeze([]),la=Object.freeze({});function Fj(t,e,n){return n===void 0&&(n=la),t.theme!==n.theme&&t.theme||e||n.theme}var tx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$j=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uj=/(^-|-$)/g;function jE(t){return t.replace($j,"-").replace(Uj,"")}var Bj=/(a)(d)/gi,qc=52,zE=function(t){return String.fromCharCode(t+(t>25?39:97))};function ty(t){var e,n="";for(e=Math.abs(t);e>qc;e=e/qc|0)n=zE(e%qc)+n;return(zE(e%qc)+n).replace(Bj,"$1-$2")}var em,nx=5381,vo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},rx=function(t){return vo(nx,t)};function ix(t){return ty(rx(t)>>>0)}function jj(t){return t.displayName||t.name||"Component"}function tm(t){return typeof t=="string"&&!0}var sx=typeof Symbol=="function"&&Symbol.for,ox=sx?Symbol.for("react.memo"):60115,zj=sx?Symbol.for("react.forward_ref"):60112,qj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Wj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ax={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gj=((em={})[zj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},em[ox]=ax,em);function qE(t){return("type"in(e=t)&&e.type.$$typeof)===ox?ax:"$$typeof"in t?Gj[t.$$typeof]:qj;var e}var Kj=Object.defineProperty,Hj=Object.getOwnPropertyNames,WE=Object.getOwnPropertySymbols,Qj=Object.getOwnPropertyDescriptor,Yj=Object.getPrototypeOf,GE=Object.prototype;function lx(t,e,n){if(typeof e!="string"){if(GE){var r=Yj(e);r&&r!==GE&&lx(t,r,n)}var i=Hj(e);WE&&(i=i.concat(WE(e)));for(var s=qE(t),o=qE(e),a=0;a<i.length;++a){var l=i[a];if(!(l in Wj||n&&n[l]||o&&l in o||s&&l in s)){var u=Qj(e,l);try{Kj(t,l,u)}catch{}}}}return t}function ua(t){return typeof t=="function"}function c0(t){return typeof t=="object"&&"styledComponentId"in t}function ss(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ny(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function bu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ry(t,e,n){if(n===void 0&&(n=!1),!n&&!bu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ry(t[r],e[r]);else if(bu(e))for(var r in e)t[r]=ry(t[r],e[r]);return t}function h0(t,e){Object.defineProperty(t,"toString",{value:e})}function cc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Xj=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw cc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(l0);return n},t}(),Ih=new Map,Sd=new Map,Eh=1,Wc=function(t){if(Ih.has(t))return Ih.get(t);for(;Sd.has(Eh);)Eh++;var e=Eh++;return Ih.set(t,e),Sd.set(e,t),e},Jj=function(t,e){Eh=e+1,Ih.set(t,e),Sd.set(e,t)},Zj="style[".concat(aa,"][").concat(ex,'="').concat(Xf,'"]'),e6=new RegExp("^".concat(aa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t6=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},n6=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(l0),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(e6);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Jj(c,u),t6(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function r6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ux=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(aa,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(aa,Zk),r.setAttribute(ex,Xf);var o=r6();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},i6=function(){function t(e){this.element=ux(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw cc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),s6=function(){function t(e){this.element=ux(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),o6=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),KE=u0,a6={isServer:!u0,useCSSOMInjection:!Mj},cx=function(){function t(e,n,r){e===void 0&&(e=la),n===void 0&&(n={});var i=this;this.options=Jt(Jt({},a6),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&u0&&KE&&(KE=!1,function(s){for(var o=document.querySelectorAll(Zj),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(aa)!==Zk&&(n6(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),h0(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return Sd.get(g)}(h);if(d===void 0)return"continue";var f=s.names.get(d),y=o.getGroup(h);if(f===void 0||y.length===0)return"continue";var _="".concat(aa,".g").concat(h,'[id="').concat(d,'"]'),v="";f!==void 0&&f.forEach(function(g){g.length>0&&(v+="".concat(g,","))}),l+="".concat(y).concat(_,'{content:"').concat(v,'"}').concat(l0)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Wc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Jt(Jt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new o6(i):r?new i6(i):new s6(i)}(this.options),new Xj(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Wc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Wc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Wc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),l6=/&/g,u6=/^\s*\/\/.*$/gm;function hx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hx(n.children,e)),n})}function c6(t){var e,n,r,i=t===void 0?la:t,s=i.options,o=s===void 0?la:s,a=i.plugins,l=a===void 0?Jf:a,u=function(d,f,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Kf&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(l6,n).replace(r,u))}),o.prefix&&c.push(Vj),c.push(Nj);var h=function(d,f,y,_){f===void 0&&(f=""),y===void 0&&(y=""),_===void 0&&(_="&"),e=_,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var v=d.replace(u6,""),g=xj(y||f?"".concat(y," ").concat(f," { ").concat(v," }"):v);o.namespace&&(g=hx(g,o.namespace));var p=[];return Td(g,Dj(c.concat(Oj(function(m){return p.push(m)})))),p};return h.hash=l.length?l.reduce(function(d,f){return f.name||cc(15),vo(d,f.name)},nx).toString():"",h}var h6=new cx,iy=c6(),dx=ie.createContext({shouldForwardProp:void 0,styleSheet:h6,stylis:iy});dx.Consumer;ie.createContext(void 0);function HE(){return x.useContext(dx)}var fx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=iy);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,h0(this,function(){throw cc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=iy),this.name+e.hash},t}(),d6=function(t){return t>="A"&&t<="Z"};function QE(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;d6(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var px=function(t){return t==null||t===!1||t===""},mx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!px(s)&&(Array.isArray(s)&&s.isCss||ua(s)?r.push("".concat(QE(i),":"),s,";"):bu(s)?r.push.apply(r,xu(xu(["".concat(i," {")],mx(s),!1),["}"],!1)):r.push("".concat(QE(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Lj||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ms(t,e,n,r){if(px(t))return[];if(c0(t))return[".".concat(t.styledComponentId)];if(ua(t)){if(!ua(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ms(i,e,n,r)}var s;return t instanceof fx?n?(t.inject(n,r),[t.getName(r)]):[t]:bu(t)?mx(t):Array.isArray(t)?Array.prototype.concat.apply(Jf,t.map(function(o){return ms(o,e,n,r)})):[t.toString()]}function f6(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ua(n)&&!c0(n))return!1}return!0}var p6=rx(Xf),m6=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f6(e),this.componentId=n,this.baseHash=vo(p6,n),this.baseStyle=r,cx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ss(i,this.staticRulesId);else{var s=ny(ms(this.rules,e,n,r)),o=ty(vo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ss(i,o),this.staticRulesId=o}else{for(var l=vo(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=ny(ms(h,e,n,r));l=vo(l,d+c),u+=d}}if(u){var f=ty(l>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(u,".".concat(f),void 0,this.componentId)),i=ss(i,f)}}return i},t}(),gx=ie.createContext(void 0);gx.Consumer;var nm={};function g6(t,e,n){var r=c0(t),i=t,s=!tm(t),o=e.attrs,a=o===void 0?Jf:o,l=e.componentId,u=l===void 0?function(w,C){var T=typeof w!="string"?"sc":jE(w);nm[T]=(nm[T]||0)+1;var E="".concat(T,"-").concat(ix(Xf+T+nm[T]));return C?"".concat(C,"-").concat(E):E}(e.displayName,e.parentComponentId):l,c=e.displayName,h=c===void 0?function(w){return tm(w)?"styled.".concat(w):"Styled(".concat(jj(w),")")}(t):c,d=e.displayName&&e.componentId?"".concat(jE(e.displayName),"-").concat(e.componentId):e.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;y=function(w,C){return _(w,C)&&v(w,C)}}else y=_}var g=new m6(n,d,r?i.componentStyle:void 0);function p(w,C){return function(T,E,S){var A=T.attrs,k=T.componentStyle,W=T.defaultProps,le=T.foldedComponentIds,ge=T.styledComponentId,Oe=T.target,We=ie.useContext(gx),Ve=HE(),me=T.shouldForwardProp||Ve.shouldForwardProp,V=Fj(E,We,W)||la,B=function(tt,Ge,Nt){for(var Fi,$i=Jt(Jt({},Ge),{className:void 0,theme:Nt}),Zf=0;Zf<tt.length;Zf+=1){var hc=ua(Fi=tt[Zf])?Fi($i):Fi;for(var Lr in hc)$i[Lr]=Lr==="className"?ss($i[Lr],hc[Lr]):Lr==="style"?Jt(Jt({},$i[Lr]),hc[Lr]):hc[Lr]}return Ge.className&&($i.className=ss($i.className,Ge.className)),$i}(A,E,V),G=B.as||Oe,X={};for(var K in B)B[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&B.theme===V||(K==="forwardedAs"?X.as=B.forwardedAs:me&&!me(K,G)||(X[K]=B[K]));var ue=function(tt,Ge){var Nt=HE(),Fi=tt.generateAndInjectStyles(Ge,Nt.styleSheet,Nt.stylis);return Fi}(k,B),ke=ss(le,ge);return ue&&(ke+=" "+ue),B.className&&(ke+=" "+B.className),X[tm(G)&&!tx.has(G)?"class":"className"]=ke,X.ref=S,x.createElement(G,X)}(m,w,C)}p.displayName=h;var m=ie.forwardRef(p);return m.attrs=f,m.componentStyle=g,m.displayName=h,m.shouldForwardProp=y,m.foldedComponentIds=r?ss(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=d,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var T=[],E=1;E<arguments.length;E++)T[E-1]=arguments[E];for(var S=0,A=T;S<A.length;S++)ry(C,A[S],!0);return C}({},i.defaultProps,w):w}}),h0(m,function(){return".".concat(m.styledComponentId)}),s&&lx(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function YE(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var XE=function(t){return Object.assign(t,{isCss:!0})};function yx(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ua(t)||bu(t))return XE(ms(YE(Jf,xu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ms(r):XE(ms(YE(r,e)))}function sy(t,e,n){if(n===void 0&&(n=la),!e)throw cc(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,yx.apply(void 0,xu([i],s,!1)))};return r.attrs=function(i){return sy(t,e,Jt(Jt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return sy(t,e,Jt(Jt({},n),i))},r}var _x=function(t){return sy(g6,t)},qs=_x;tx.forEach(function(t){qs[t]=_x(t)});function d0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ny(yx.apply(void 0,xu([t],e,!1))),i=ix(r);return new fx(i,r)}const y6="#4fa94d",_6={"aria-busy":!0,role:"progressbar"},v6=qs.div`
  display: ${t=>t.$visible?"flex":"none"};
`,w6="http://www.w3.org/2000/svg",vx=({height:t=100,width:e=100,radius:n=5,color:r=y6,ariaLabel:i="ball-triangle-loading",wrapperClass:s,wrapperStyle:o,visible:a=!0})=>I.jsx(v6,{style:{...o},$visible:a,className:s,"data-testid":"ball-triangle-loading","aria-label":i,..._6,children:I.jsxs("svg",{height:t,width:e,stroke:r,viewBox:"0 0 57 57",xmlns:w6,"data-testid":"ball-triangle-svg",children:[I.jsx("title",{children:"Ball Triangle"}),I.jsx("desc",{children:"Animated representation of three balls"}),I.jsx("g",{fill:"none",fillRule:"evenodd",children:I.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[I.jsxs("circle",{cx:"5",cy:"50",r:n,children:[I.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),I.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),I.jsxs("circle",{cx:"27",cy:"5",r:n,children:[I.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),I.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),I.jsxs("circle",{cx:"49",cy:"50",r:n,children:[I.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),I.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),kn=242.776657104492,I6=1.6,E6=d0`
12.5% {
  stroke-dasharray: ${kn*.14}px, ${kn}px;
  stroke-dashoffset: -${kn*.11}px;
}
43.75% {
  stroke-dasharray: ${kn*.35}px, ${kn}px;
  stroke-dashoffset: -${kn*.35}px;
}
100% {
  stroke-dasharray: ${kn*.01}px, ${kn}px;
  stroke-dashoffset: -${kn*.99}px;
}
`;qs.path`
  stroke-dasharray: ${kn*.01}px, ${kn};
  stroke-dashoffset: 0;
  animation: ${E6} ${I6}s linear infinite;
`;const T6=d0`
to {
   transform: rotate(360deg);
 }
`;qs.svg`
  animation: ${T6} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;qs.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const S6=d0`
to {
   stroke-dashoffset: 136;
 }
`;qs.polygon`
  stroke-dasharray: 17;
  animation: ${S6} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;qs.svg`
  transform-origin: 50% 65%;
`;const A6=(t,e)=>{if(!t)return"";const n=t.split(" ");return n.length>e?n.slice(0,e).join(" ")+"...":t},R6=({blog:t})=>{const e=A6(t.body,20);return I.jsx("article",{className:"mx-auto my-4 w-full md:w-[90%] flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg",children:I.jsxs("div",{children:[I.jsx("img",{src:t.imageUrl?t.imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",className:"h-56 w-full object-cover",alt:""}),I.jsxs("div",{className:"flex-auto px-6 py-5",children:[I.jsx("span",{className:"mb-2 flex items-center text-sm font-semibold",children:t.tags&&t.tags.slice(0,3).map((n,r)=>I.jsxs(ie.Fragment,{children:[I.jsxs("span",{children:["@",n]}),r<t.tags.slice(0,3).length-1&&I.jsx("span",{className:"px-1",children:"|"})]},r))}),I.jsx("h3",{className:"mt-4 mb-3 text-xl font-semibold xl:text-2xl",children:t.title}),I.jsx("p",{className:"mb-4 text-base font-light",children:e}),I.jsx(fr,{to:`/show/${t.id}`,className:"inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm",children:"Read Now"})]},t.id)]})})},P6=()=>{const[t,e]=x.useState(!0),[n,r]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const o=(await uk(Df(Id,"blogs"))).docs.map(a=>({id:a.id,...a.data()}));r(o),e(!1)}catch(s){console.error("Error fetching blogs: ",s),e(!1)}})()},[]),I.jsx("div",{children:t?I.jsx("div",{className:"grid h-screen place-items-center",children:I.jsx(vx,{height:100,width:100,radius:5,color:"rgb(37 99 235)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):I.jsxs(I.Fragment,{children:[I.jsx(Gf,{}),I.jsxs("aside",{"aria-label":"Related Articles",className:"mx-auto mt-10 max-w-screen-xl py-20",children:[I.jsx("h2",{className:"mb-8 text-center text-5xl font-bold text-gray-900",children:"All Blogs"}),I.jsx("div",{className:"mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3",children:n.map(i=>I.jsx(R6,{blog:i},i.id))})]})]})})},C6={name:"",email:"",password:"",confirmPassword:""},k6=()=>{const[t,e]=x.useState(C6),{email:n,password:r,name:i,confirmPassword:s}=t,o=ga(),a=u=>{e({...t,[u.target.name]:u.target.value})},l=async u=>{if(u.preventDefault(),r!==s)return re.error("Passwords Does Not Match");if(i&&n&&r)await _A(ia,n,r).then(c=>{re.error("Success"),o("/login")}).catch(c=>{const h=c.message;return console.error(h)}),await v_(ia.currentUser,{displayName:i}).catch(c=>console.log(c));else return re.error("All fields are mandatory to fill")};return I.jsx("div",{children:I.jsxs("div",{className:"flex flex-wrap",children:[I.jsx("div",{className:"flex w-full flex-col md:w-1/2",children:I.jsxs("div",{className:"lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0",children:[I.jsx("p",{className:"text-left text-3xl font-bold",children:"Welcome,"}),I.jsx("p",{className:"mt-2 text-left text-gray-500",children:"Please enter your details."}),I.jsxs("form",{className:"flex flex-col pt-3 md:pt-8",children:[I.jsx("div",{className:"flex flex-col pt-4",children:I.jsx("div",{className:"focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition",children:I.jsx("input",{type:"text",name:"name",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Name",value:i,onChange:a})})}),I.jsx("div",{className:"flex flex-col pt-4",children:I.jsx("div",{className:"focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition",children:I.jsx("input",{type:"email",name:"email",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Email",value:n,onChange:a})})}),I.jsx("div",{className:" flex flex-col pt-4",children:I.jsx("div",{className:"focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition",children:I.jsx("input",{type:"password",name:"password",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Password",value:r,onChange:a})})}),I.jsx("div",{className:"mb-12 flex flex-col pt-4",children:I.jsx("div",{className:"focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition",children:I.jsx("input",{type:"password",name:"confirmPassword",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Confirm Password",value:s,onChange:a})})}),I.jsx("button",{type:"submit",onClick:l,className:"w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",children:"Sign up"})]}),I.jsx("div",{className:"py-12 text-center",children:I.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Already have an account?",I.jsx(fr,{to:"/",className:"underline-offset-4 font-semibold text-gray-900 underline",children:"  Sign in."})]})})]})}),I.jsx("div",{className:"pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2",children:I.jsx("img",{className:"-z-1 absolute top-0 h-full w-full object-cover opacity-90",src:"https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})})]})})};var oy={exports:{}},rm={exports:{}},im,JE;function x6(){if(JE)return im;JE=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return im=t,im}var sm,ZE;function b6(){if(ZE)return sm;ZE=1;var t=x6();function e(){}function n(){}return n.resetWarningCache=e,sm=function(){function r(o,a,l,u,c,h){if(h!==t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}r.isRequired=r;function i(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},sm}var eT;function N6(){return eT||(eT=1,rm.exports=b6()()),rm.exports}(function(t,e){(function(n,r){r(e,x,N6())})(Ix,function(n,r,i){Object.defineProperty(n,"__esModule",{value:!0});var s=o(r);o(i);function o(T){return T&&T.__esModule?T:{default:T}}function a(T,E,S){return E in T?Object.defineProperty(T,E,{value:S,enumerable:!0,configurable:!0,writable:!0}):T[E]=S,T}function l(T,E){if(!(T instanceof E))throw new TypeError("Cannot call a class as a function")}var u=function(){function T(E,S){for(var A=0;A<S.length;A++){var k=S[A];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(E,k.key,k)}}return function(E,S,A){return S&&T(E.prototype,S),A&&T(E,A),E}}();function c(T,E){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:T}function h(T,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);T.prototype=Object.create(E&&E.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(T,E):T.__proto__=E)}var d=Object.assign||function(T){for(var E=1;E<arguments.length;E++){var S=arguments[E];for(var A in S)Object.prototype.hasOwnProperty.call(S,A)&&(T[A]=S[A])}return T};function f(T,E){var S={};for(var A in T)E.indexOf(A)>=0||Object.prototype.hasOwnProperty.call(T,A)&&(S[A]=T[A]);return S}function y(T){for(var E=[],S=0;S<T.length;S++)E.indexOf(T[S])===-1&&E.push(typeof T[S]=="string"?T[S].trim():T[S]);return E}function _(T){return window.clipboardData?window.clipboardData.getData("Text"):T.clipboardData?T.clipboardData.getData("text/plain"):""}function v(T){var E=T.tag,S=T.key,A=T.disabled,k=T.onRemove,W=T.classNameRemove,le=T.getTagDisplayValue,ge=f(T,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return s.default.createElement("span",d({key:S},ge),le(E),!A&&s.default.createElement("a",{className:W,onClick:function(We){return k(S)}}))}function g(T){T.addTag;var E=f(T,["addTag"]),S=E.onChange,A=E.value,k=f(E,["onChange","value"]);return s.default.createElement("input",d({type:"text",onChange:S,value:A},k))}function p(T,E){return s.default.createElement("span",null,T,E)}function m(T){return T.split(" ").map(function(E){return E.trim()})}var w={className:"react-tagsinput-input",placeholder:"Add a tag"},C=function(T){h(E,T);function E(){l(this,E);var S=c(this,(E.__proto__||Object.getPrototypeOf(E)).call(this));return S.state={tag:"",isFocused:!1},S.focus=S.focus.bind(S),S.blur=S.blur.bind(S),S.accept=S.accept.bind(S),S}return u(E,[{key:"_getTagDisplayValue",value:function(A){var k=this.props.tagDisplayProp;return k?A[k]:A}},{key:"_makeTag",value:function(A){var k=this.props.tagDisplayProp;return k?a({},k,A):A}},{key:"_removeTag",value:function(A){var k=this.props.value.concat([]);if(A>-1&&A<k.length){var W=k.splice(A,1);this.props.onChange(k,W,[A])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(A){var k=this,W=this.props,le=W.onChange,ge=W.onValidationReject,Oe=W.onlyUnique,We=W.maxTags,Ve=W.value;Oe&&(A=y(A),A=A.filter(function(K){return Ve.every(function(ue){return k._getTagDisplayValue(ue)!==k._getTagDisplayValue(K)})}));var me=A.filter(function(K){return!k._validate(k._getTagDisplayValue(K))});if(A=A.filter(function(K){return k._validate(k._getTagDisplayValue(K))}),A=A.filter(function(K){var ue=k._getTagDisplayValue(K);return typeof ue.trim=="function"?ue.trim().length>=0:ue}),We>=0){var V=Math.max(We-Ve.length,0);A=A.slice(0,V)}if(ge&&me.length>0&&ge(me),A.length>0){for(var B=Ve.concat(A),G=[],X=0;X<A.length;X++)G.push(Ve.length+X);return le(B,A,G),this._clearInput(),!0}return me.length>0||this._clearInput(),!1}},{key:"_validate",value:function(A){var k=this.props,W=k.validate,le=k.validationRegex;return W(A)&&le.test(A)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(A,k,W){return A?!0:W==="Enter"?this.props.preventSubmit||!this.props.preventSubmit&&!k:!1}},{key:"focus",value:function(){this.input&&typeof this.input.focus=="function"&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&typeof this.input.blur=="function"&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var A=this.props.preventSubmit,k=this._tag();return k!==""||!A?(k=this._makeTag(k),this._addTags([k])):!1}},{key:"addTag",value:function(A){return this._addTags([A])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(A){var k=this,W=this.props,le=W.addOnPaste,ge=W.pasteSplit;if(le){A.preventDefault();var Oe=_(A),We=ge(Oe).map(function(Ve){return k._makeTag(Ve)});this._addTags(We)}}},{key:"handleKeyDown",value:function(A){if(!A.defaultPrevented){var k=this.props,W=k.value,le=k.removeKeys,ge=k.addKeys,Oe=this._tag(),We=Oe==="",Ve=A.keyCode,me=A.key,V=ge.indexOf(Ve)!==-1||ge.indexOf(me)!==-1,B=le.indexOf(Ve)!==-1||le.indexOf(me)!==-1;if(V){var G=this.accept();this._shouldPreventDefaultEventOnAdd(G,We,me)&&A.preventDefault()}B&&W.length>0&&We&&(A.preventDefault(),this._removeTag(W.length-1))}}},{key:"handleClick",value:function(A){var k=A.target,W=A.target&&A.target.parentElement;(k===this.div||W===this.div)&&this.focus()}},{key:"handleChange",value:function(A){var k=this.props.onChangeInput,W=this.props.inputProps.onChange,le=A.target.value;W&&W(A),this.hasControlledInput()?k(le):this.setState({tag:le})}},{key:"handleOnFocus",value:function(A){var k=this.props.inputProps.onFocus;k&&k(A),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(A){var k=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),A!=null&&(k&&k(A),this.props.addOnBlur&&A.target.value)){var W=this._makeTag(A.target.value);this._addTags([W])}}},{key:"handleRemove",value:function(A){this._removeTag(A)}},{key:"inputProps",value:function(){var A=this.props.inputProps;A.onChange,A.onFocus,A.onBlur;var k=f(A,["onChange","onFocus","onBlur"]),W=d({},w,k);return this.props.disabled&&(W.disabled=!0),W}},{key:"inputValue",value:function(A){return A.currentValue||A.inputValue||""}},{key:"hasControlledInput",value:function(){var A=this.props,k=A.inputValue,W=A.onChangeInput;return typeof W=="function"&&typeof k=="string"}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentDidUpdate",value:function(A){this.hasControlledInput()||this.inputValue(this.props)&&this.inputValue(A)!==this.inputValue(this.props)&&this.setState({tag:this.inputValue(this.props)})}},{key:"render",value:function(){var A=this,k=this.props,W=k.value,le=k.tagProps,ge=k.renderLayout,Oe=k.renderTag,We=k.renderInput,Ve=k.className,me=k.focusedClassName,V=k.disabled,B=this.state.isFocused,G=W.map(function(K,ue){return Oe(d({key:ue,tag:K,onRemove:A.handleRemove.bind(A),disabled:V,getTagDisplayValue:A._getTagDisplayValue.bind(A)},le))}),X=We(d({ref:function(ue){A.input=ue},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return s.default.createElement("div",{ref:function(ue){A.div=ue},onClick:this.handleClick.bind(this),className:Ve+(B?" "+me:"")},ge(G,X))}}]),E}(s.default.Component);C.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:["Tab","Enter"],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:["Backspace"],renderInput:g,renderTag:v,renderLayout:p,pasteSplit:m,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validate:function(){return!0},validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},n.default=C,t.exports=n.default})})(oy,oy.exports);var D6=oy.exports;const O6=tT(D6),Gc=({label:t,type:e,value:n,onChange:r,name:i})=>I.jsxs("div",{children:[I.jsx("label",{children:t}),e==="textarea"?I.jsx("textarea",{placeholder:t,className:"resize-y mt-2 h-24 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring",value:n,onChange:r,name:i}):e==="tags"?I.jsx(O6,{inputFieldPosition:"bottom",className:"mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring cursor-default",value:n,addKeys:"32, 13, 188",placeholder:"Add a tag",onChange:r}):e==="file"?I.jsx("input",{type:"file",className:"text-sm text-grey-500 file:mr-5 file:py-2 w-full mt-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-600 hover:file:cursor-pointer hover:file:bg-blue-600 hover:file:text-white",onChange:r}):I.jsx("input",{type:"text",placeholder:t,className:"mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring",value:n,onChange:r,name:i})]}),V6=Df(Id,"blogs"),L6=({user:t})=>{const e=ga(),[n,r]=x.useState({title:"",tags:[],body:""}),[i,s]=x.useState(null),{title:o,tags:a,body:l}=n,u=f=>{r({...n,[f.target.name]:f.target.value})},c=f=>{r({...n,tags:f})},h=async f=>{f.preventDefault();try{if(!o||!l){re("Please fill in all required fields");return}let y=null;if(i){const _=$k(Uk,i.name);await Mk(_,i),y=await Fk(_)}await hk(V6,{...n,timestamp:fk(),author:t.displayName,userId:t.uid,imageUrl:y}),r({title:"",tags:[],body:""}),e("/")}catch(y){console.error("Error creating blog: ",y)}},d=f=>{s(f.target.files[0])};return I.jsxs("div",{children:[I.jsx(Gf,{}),I.jsxs("form",{onSubmit:h,className:"relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10 h-max",children:[I.jsx("h1",{className:"text-xl font-semibold lg:text-2xl",children:"Create Blog"}),I.jsx("p",{className:"pb-4 text-gray-500",children:"Write your own Blog"}),I.jsx(Gc,{label:"Title",type:"text",value:o,onChange:u,name:"title"}),I.jsx(Gc,{label:"Description",type:"textarea",value:l,onChange:u,name:"body"}),I.jsx(Gc,{label:"Tags",type:"tags",value:a,onChange:c}),I.jsx(Gc,{label:"Image",type:"file",accept:"image/*",onChange:d}),I.jsx("div",{className:"flex justify-center cursor-pointer",children:I.jsx("button",{className:"rounded-xl border-2 my-10 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white",children:"Submit"})})]})]})},M6=()=>{const{id:t}=ED(),[e,n]=x.useState(null),r=ga();x.useEffect(()=>{t&&s()},[t]);const i=async()=>{try{await ck(na(Id,"blogs",t)),r("/")}catch(o){console.error("Error deleting blog:",o)}},s=async()=>{const o=na(Id,"blogs",t),a=await lk(o);a.exists()?n(a.data()):console.log("Blog not found")};return I.jsx("div",{children:e&&I.jsxs("main",{children:[I.jsx(Gf,{}),I.jsxs("article",{className:"flex flex-col items-center",children:[I.jsxs("header",{className:"mx-auto max-w-screen-xl pt-28 text-center",children:[I.jsx("p",{className:"text-gray-500",children:e.timestamp?e.timestamp.toDate().toDateString():"Unknown Date"}),I.jsx("h1",{className:"mt-2 text-3xl font-bold text-gray-900 sm:text-5xl",children:e.title}),I.jsx("div",{className:"mt-6 flex flex-wrap justify-center gap-2","aria-label":"Tags",children:e.tags&&e.tags.slice(0,3).map((o,a)=>I.jsx("button",{className:"rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200",children:o},a))}),I.jsx("img",{className:"sm:h-[34rem] mt-10 w-full object-contain",src:e.imageUrl?e.imageUrl:"https://images.unsplash.com/photo-1708876954270-8fad10609e53?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Featured Image"})]}),I.jsx("div",{className:"mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700",children:I.jsx("strong",{className:"text-2xl font-medium",children:e.body})}),I.jsx("button",{onClick:i,className:"rounded-lg w-32 mb-20 bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",children:"Delete Blog"})]})]})})},F6="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eprofile%20[%231335]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-420.000000,%20-2159.000000)'%20fill='%23000000'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M374,2009%20C371.794,2009%20370,2007.206%20370,2005%20C370,2002.794%20371.794,2001%20374,2001%20C376.206,2001%20378,2002.794%20378,2005%20C378,2007.206%20376.206,2009%20374,2009%20M377.758,2009.673%20C379.124,2008.574%20380,2006.89%20380,2005%20C380,2001.686%20377.314,1999%20374,1999%20C370.686,1999%20368,2001.686%20368,2005%20C368,2006.89%20368.876,2008.574%20370.242,2009.673%20C366.583,2011.048%20364,2014.445%20364,2019%20L366,2019%20C366,2014%20369.589,2011%20374,2011%20C378.411,2011%20382,2014%20382,2019%20L384,2019%20C384,2014.445%20381.417,2011.048%20377.758,2009.673'%20id='profile-[%231335]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",$6={name:"",email:""},U6=()=>{const t=$A(),e=t.currentUser,n=ga(),[r,i]=x.useState(null),[s,o]=x.useState($6),{email:a,name:l}=s,u=f=>{o({...s,[f.target.name]:f.target.value})},c=async()=>{try{await sL(t).then(()=>{n("/")}).catch(f=>{console.error("Logout Error: ",f)})}catch(f){console.log(f)}},h=async f=>{f.preventDefault();try{if(!l&&!a&&!r){re("At least one field is required");return}const y={};if(l&&(y.displayName=l),a&&(y.email=a),r){const _=$k(Uk,r.name);await Mk(_,r);const v=await Fk(_);y.photoURL=v}await v_(t.currentUser,y),n("/"),re("Profile updated successfully")}catch(y){console.error("Profile update error: ",y),re("Failed to update profile")}},d=f=>{i(f.target.files[0])};return I.jsxs("div",{children:[I.jsx(Gf,{}),I.jsx("div",{className:"my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 mt-16 sm:py-4 md:mx-auto",children:I.jsxs("form",{children:[I.jsxs("div",{className:"flex flex-col border-b py-4 sm:flex-row sm:items-start",children:[I.jsxs("div",{className:"shrink-0 mr-auto sm:py-3",children:[I.jsx("p",{className:"font-medium",children:"Account Details"}),I.jsx("p",{className:"text-sm text-gray-600",children:"Edit your account details"})]}),I.jsx(fr,{to:"/",className:"mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200",children:"Cancel"}),I.jsx("button",{onClick:h,className:"hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700",children:"Save"})]}),I.jsxs("div",{className:"flex flex-col gap-4 border-b py-4 sm:flex-row",children:[I.jsx("p",{className:"shrink-0 w-32 font-medium",children:"Name"}),I.jsx("input",{placeholder:e.displayName,className:"mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1",value:l,name:"name",onChange:u})]}),I.jsxs("div",{className:"flex flex-col gap-4 border-b py-4 sm:flex-row",children:[I.jsx("p",{className:"shrink-0 w-32 font-medium",children:"Email"}),I.jsx("input",{placeholder:e.email,className:"w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1",value:a,name:"email",onChange:u})]}),I.jsxs("div",{className:"flex flex-col gap-4 py-4  lg:flex-row",children:[I.jsxs("div",{className:"shrink-0 w-32  sm:py-4",children:[I.jsx("p",{className:"mb-auto font-medium",children:"Avatar"}),I.jsx("p",{className:"text-sm text-gray-600",children:"Change your avatar"})]}),I.jsxs("div",{className:"flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center",children:[I.jsx("img",{src:e.photoURL?e.photoURL:F6,referrerPolicy:"no-referrer",className:"h-16 w-16 rounded-full"}),I.jsx("p",{className:"text-sm text-gray-600",children:"Drop your desired image file here to start the upload"}),I.jsx("input",{type:"file",name:"profilepic",className:"max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1",onChange:d})]})]}),I.jsxs("div",{className:"flex justify-end py-4 sm:hidden",children:[I.jsx(fr,{to:"/",className:"mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200",children:"Cancel"}),I.jsx("button",{onClick:h,className:"rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700",children:"Save"})]}),I.jsx("div",{className:"flex justify-center cursor-pointer my-5",children:I.jsxs("a",{className:"rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white",onClick:c,children:["Logout ",e.displayName]})})]})})]})};function B6(){const[t,e]=x.useState(null),[n,r]=x.useState(!0);return x.useEffect(()=>{const i=iL(ia,s=>{e(s),r(!1)});return()=>i()},[]),I.jsxs(I.Fragment,{children:[I.jsx(pj,{position:"top-center"}),n?I.jsx("div",{className:"grid h-screen place-items-center",children:I.jsx(vx,{height:100,width:100,radius:5,color:"rgb(37 99 235)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):I.jsxs(MD,{children:[I.jsx(zi,{path:"/",element:t?I.jsx(Pw,{to:"/home"}):I.jsx(gj,{setUser:e})}),I.jsx(zi,{path:"/signup",element:t?I.jsx(Pw,{to:"/home"}):I.jsx(k6,{setUser:e})}),t&&I.jsxs(I.Fragment,{children:[I.jsx(zi,{exact:!0,path:"/home",element:I.jsx(P6,{setUser:t})}),I.jsx(zi,{path:"/create",element:I.jsx(L6,{setUser:t})}),I.jsx(zi,{path:"/show/:id",element:I.jsx(M6,{setUser:t})}),I.jsx(zi,{path:"/about",element:I.jsx(U6,{setUser:t})})]})]})]})}om.createRoot(document.getElementById("root")).render(I.jsx(ie.StrictMode,{children:I.jsx(qD,{children:I.jsx(B6,{})})}));
