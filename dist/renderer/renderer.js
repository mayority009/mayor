/*! For license information please see renderer.js.LICENSE.txt */
!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(()=>(()=>{var e,n,t={703:(e,n,t)=>{"use strict";var r=t(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},697:(e,n,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},448:(e,n,t)=>{"use strict";var r=t(294),a=t(840);function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,n){u(e,n),u(e+"Capture",n)}function u(e,n){for(l[e]=n,e=0;e<n.length;e++)i.add(n[e])}var c=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,n,t,r,a,o,i){this.acceptsBooleans=2===n||3===n||4===n,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var n=e[0];g[n]=new m(n,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,n,t,r){var a=g.hasOwnProperty(n)?g[n]:null;(null!==a?0!==a.type:r||!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&(function(e,n,t,r){if(null==n||function(e,n,t,r){if(null!==t&&0===t.type)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==t?!t.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,n,t,r))return!0;if(r)return!1;if(null!==t)switch(t.type){case 3:return!n;case 4:return!1===n;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}(n,t,a,r)&&(t=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(n)&&(null===t?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=null===t?3!==a.type&&"":t:(n=a.attributeName,r=a.attributeNamespace,null===t?e.removeAttribute(n):(t=3===(a=a.type)||4===a&&!0===t?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var n=e.replace(v,b);g[n]=new m(n,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var n=e.replace(v,b);g[n]=new m(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var n=e.replace(v,b);g[n]=new m(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function O(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=L&&e[L]||e["@@iterator"])?e:null}var $,F=Object.assign;function A(e){if(void 0===$)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);$=n&&n[1]||""}return"\n"+$+e}var D=!1;function M(e,n){if(!e||D)return"";D=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(n){if(n&&r&&"string"==typeof n.stack){for(var a=n.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{D=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?A(e):""}function U(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case j:return"StrictMode";case _:return"Suspense";case z:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var n=e.render;return(e=e.displayName)||(e=""!==(e=n.displayName||n.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(n=e.displayName||null)?n:W(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return W(e(n))}catch(e){}}return null}function B(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=n.render).displayName||e.name||"",n.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(n);case 8:return n===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof n)return n.displayName||n.name||null;if("string"==typeof n)return n}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var n=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===n||"radio"===n)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var n=V(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&void 0!==t&&"function"==typeof t.get&&"function"==typeof t.set){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}(e))}function q(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==t&&(n.setValue(e),!0)}function K(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(n){return e.body}}function G(e,n){var t=n.checked;return F({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=t?t:e._wrapperState.initialChecked})}function Y(e,n){var t=null==n.defaultValue?"":n.defaultValue,r=null!=n.checked?n.checked:n.defaultChecked;t=H(null!=n.value?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:"checkbox"===n.type||"radio"===n.type?null!=n.checked:null!=n.value}}function X(e,n){null!=(n=n.checked)&&y(e,"checked",n,!1)}function J(e,n){X(e,n);var t=H(n.value),r=n.type;if(null!=t)"number"===r?(0===t&&""===e.value||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");n.hasOwnProperty("value")?ee(e,n.type,t):n.hasOwnProperty("defaultValue")&&ee(e,n.type,H(n.defaultValue)),null==n.checked&&null!=n.defaultChecked&&(e.defaultChecked=!!n.defaultChecked)}function Z(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!("submit"!==r&&"reset"!==r||void 0!==n.value&&null!==n.value))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}""!==(t=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==t&&(e.name=t)}function ee(e,n,t){"number"===n&&K(e.ownerDocument)===e||(null==t?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ne=Array.isArray;function te(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+H(t),n=null,a=0;a<e.length;a++){if(e[a].value===t)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==n||e[a].disabled||(n=e[a])}null!==n&&(n.selected=!0)}}function re(e,n){if(null!=n.dangerouslySetInnerHTML)throw Error(o(91));return F({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,n){var t=n.value;if(null==t){if(t=n.children,n=n.defaultValue,null!=t){if(null!=n)throw Error(o(92));if(ne(t)){if(1<t.length)throw Error(o(93));t=t[0]}n=t}null==n&&(n=""),t=n}e._wrapperState={initialValue:H(t)}}function oe(e,n){var t=H(n.value),r=H(n.defaultValue);null!=t&&((t=""+t)!==e.value&&(e.value=t),null==n.defaultValue&&e.defaultValue!==t&&(e.defaultValue=t)),null!=r&&(e.defaultValue=""+r)}function ie(e){var n=e.textContent;n===e._wrapperState.initialValue&&""!==n&&null!==n&&(e.value=n)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,n){return null==e||"http://www.w3.org/1999/xhtml"===e?le(n):"http://www.w3.org/2000/svg"===e&&"foreignObject"===n?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,n){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=n;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,n,t,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,n)}))}:ce);function fe(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&3===t.nodeType)return void(t.nodeValue=n)}e.textContent=n}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,n,t){return null==n||"boolean"==typeof n||""===n?"":t||"number"!=typeof n||0===n||pe.hasOwnProperty(e)&&pe[e]?(""+n).trim():n+"px"}function ge(e,n){for(var t in e=e.style,n)if(n.hasOwnProperty(t)){var r=0===t.indexOf("--"),a=me(t,n[t],r);"float"===t&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),pe[n]=pe[e]}))}));var ve=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,n){if(n){if(ve[e]&&(null!=n.children||null!=n.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=n.dangerouslySetInnerHTML){if(null!=n.children)throw Error(o(60));if("object"!=typeof n.dangerouslySetInnerHTML||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=n.style&&"object"!=typeof n.style)throw Error(o(62))}}function ye(e,n){if(-1===e.indexOf("-"))return"string"==typeof n.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ee(e){if(e=ya(e)){if("function"!=typeof ke)throw Error(o(280));var n=e.stateNode;n&&(n=wa(n),ke(e.stateNode,e.type,n))}}function Ce(e){Se?je?je.push(e):je=[e]:Se=e}function Ne(){if(Se){var e=Se,n=je;if(je=Se=null,Ee(e),n)for(e=0;e<n.length;e++)Ee(n[e])}}function Pe(e,n){return e(n)}function _e(){}var ze=!1;function Re(e,n,t){if(ze)return e(n,t);ze=!0;try{return Pe(e,n,t)}finally{ze=!1,(null!==Se||null!==je)&&(_e(),Ne())}}function Te(e,n){var t=e.stateNode;if(null===t)return null;var r=wa(t);if(null===r)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(t&&"function"!=typeof t)throw Error(o(231,n,typeof t));return t}var Ie=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Ie=!1}function Oe(e,n,t,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(e){this.onError(e)}}var $e=!1,Fe=null,Ae=!1,De=null,Me={onError:function(e){$e=!0,Fe=e}};function Ue(e,n,t,r,a,o,i,l,s){$e=!1,Fe=null,Oe.apply(Me,arguments)}function We(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do{0!=(4098&(n=e).flags)&&(t=n.return),e=n.return}while(e)}return 3===n.tag?t:null}function Be(e){if(13===e.tag){var n=e.memoizedState;if(null===n&&(null!==(e=e.alternate)&&(n=e.memoizedState)),null!==n)return n.dehydrated}return null}function He(e){if(We(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var n=e.alternate;if(!n){if(null===(n=We(e)))throw Error(o(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return He(a),e;if(i===r)return He(a),n;i=i.sibling}throw Error(o(188))}if(t.return!==r.return)t=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===t){l=!0,t=a,r=i;break}if(s===r){l=!0,r=a,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=a;break}if(s===r){l=!0,r=i,t=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(t.alternate!==r)throw Error(o(190))}if(3!==t.tag)throw Error(o(188));return t.stateNode.current===t?e:n}(e))?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var n=Qe(e);if(null!==n)return n;e=e.sibling}return null}var qe=a.unstable_scheduleCallback,Ke=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,Ye=a.unstable_requestPaint,Xe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,en=a.unstable_UserBlockingPriority,nn=a.unstable_NormalPriority,tn=a.unstable_LowPriority,rn=a.unstable_IdlePriority,an=null,on=null;var ln=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(sn(e)/un|0)|0},sn=Math.log,un=Math.LN2;var cn=64,dn=4194304;function fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pn(e,n){var t=e.pendingLanes;if(0===t)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&t;if(0!==i){var l=i&~a;0!==l?r=fn(l):0!==(o&=i)&&(r=fn(o))}else 0!==(i=t&~a)?r=fn(i):0!==o&&(r=fn(o));if(0===r)return 0;if(0!==n&&n!==r&&0==(n&a)&&((a=r&-r)>=(o=n&-n)||16===a&&0!=(4194240&o)))return n;if(0!=(4&r)&&(r|=16&t),0!==(n=e.entangledLanes))for(e=e.entanglements,n&=r;0<n;)a=1<<(t=31-ln(n)),r|=e[t],n&=~a;return r}function hn(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;default:return-1}}function mn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gn(){var e=cn;return 0==(4194240&(cn<<=1))&&(cn=64),e}function vn(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function bn(e,n,t){e.pendingLanes|=n,536870912!==n&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[n=31-ln(n)]=t}function yn(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ln(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var xn=0;function wn(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var kn,Sn,jn,En,Cn,Nn=!1,Pn=[],_n=null,zn=null,Rn=null,Tn=new Map,In=new Map,Ln=[],On="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $n(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Tn.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(n.pointerId)}}function Fn(e,n,t,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==n&&(null!==(n=ya(n))&&Sn(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,null!==a&&-1===n.indexOf(a)&&n.push(a),e)}function An(e){var n=ba(e.target);if(null!==n){var t=We(n);if(null!==t)if(13===(n=t.tag)){if(null!==(n=Be(t)))return e.blockedOn=n,void Cn(e.priority,(function(){jn(t)}))}else if(3===n&&t.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===t.tag?t.stateNode.containerInfo:null)}e.blockedOn=null}function Dn(e){if(null!==e.blockedOn)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yn(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(null!==t)return null!==(n=ya(t))&&Sn(n),e.blockedOn=t,!1;var r=new(t=e.nativeEvent).constructor(t.type,t);xe=r,t.target.dispatchEvent(r),xe=null,n.shift()}return!0}function Mn(e,n,t){Dn(e)&&t.delete(n)}function Un(){Nn=!1,null!==_n&&Dn(_n)&&(_n=null),null!==zn&&Dn(zn)&&(zn=null),null!==Rn&&Dn(Rn)&&(Rn=null),Tn.forEach(Mn),In.forEach(Mn)}function Wn(e,n){e.blockedOn===n&&(e.blockedOn=null,Nn||(Nn=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Un)))}function Bn(e){function n(n){return Wn(n,e)}if(0<Pn.length){Wn(Pn[0],e);for(var t=1;t<Pn.length;t++){var r=Pn[t];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_n&&Wn(_n,e),null!==zn&&Wn(zn,e),null!==Rn&&Wn(Rn,e),Tn.forEach(n),In.forEach(n),t=0;t<Ln.length;t++)(r=Ln[t]).blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&null===(t=Ln[0]).blockedOn;)An(t),null===t.blockedOn&&Ln.shift()}var Hn=x.ReactCurrentBatchConfig,Vn=!0;function Qn(e,n,t,r){var a=xn,o=Hn.transition;Hn.transition=null;try{xn=1,Kn(e,n,t,r)}finally{xn=a,Hn.transition=o}}function qn(e,n,t,r){var a=xn,o=Hn.transition;Hn.transition=null;try{xn=4,Kn(e,n,t,r)}finally{xn=a,Hn.transition=o}}function Kn(e,n,t,r){if(Vn){var a=Yn(e,n,t,r);if(null===a)Hr(e,n,r,Gn,t),$n(e,r);else if(function(e,n,t,r,a){switch(n){case"focusin":return _n=Fn(_n,e,n,t,r,a),!0;case"dragenter":return zn=Fn(zn,e,n,t,r,a),!0;case"mouseover":return Rn=Fn(Rn,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return Tn.set(o,Fn(Tn.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,In.set(o,Fn(In.get(o)||null,e,n,t,r,a)),!0}return!1}(a,e,n,t,r))r.stopPropagation();else if($n(e,r),4&n&&-1<On.indexOf(e)){for(;null!==a;){var o=ya(a);if(null!==o&&kn(o),null===(o=Yn(e,n,t,r))&&Hr(e,n,r,Gn,t),o===a)break;a=o}null!==a&&r.stopPropagation()}else Hr(e,n,r,null,t)}}var Gn=null;function Yn(e,n,t,r){if(Gn=null,null!==(e=ba(e=we(r))))if(null===(n=We(e)))e=null;else if(13===(t=n.tag)){if(null!==(e=Be(n)))return e;e=null}else if(3===t){if(n.stateNode.current.memoizedState.isDehydrated)return 3===n.tag?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Gn=e,null}function Xn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case en:return 4;case nn:case tn:return 16;case rn:return 536870912;default:return 16}default:return 16}}var Jn=null,Zn=null,et=null;function nt(){if(et)return et;var e,n,t=Zn,r=t.length,a="value"in Jn?Jn.value:Jn.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return et=a.slice(e,1<n?1-n:void 0)}function tt(e){var n=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===n&&(e=13):e=n,10===e&&(e=13),32<=e||13===e?e:0}function rt(){return!0}function at(){return!1}function ot(e){function n(n,t,r,a,o){for(var i in this._reactName=n,this._targetInst=r,this.type=t,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?rt:at,this.isPropagationStopped=at,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rt)},persist:function(){},isPersistent:rt}),n}var it,lt,st,ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ct=ot(ut),dt=F({},ut,{view:0,detail:0}),ft=ot(dt),pt=F({},dt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Et,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==st&&(st&&"mousemove"===e.type?(it=e.screenX-st.screenX,lt=e.screenY-st.screenY):lt=it=0,st=e),it)},movementY:function(e){return"movementY"in e?e.movementY:lt}}),ht=ot(pt),mt=ot(F({},pt,{dataTransfer:0})),gt=ot(F({},dt,{relatedTarget:0})),vt=ot(F({},ut,{animationName:0,elapsedTime:0,pseudoElement:0})),bt=F({},ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yt=ot(bt),xt=ot(F({},ut,{data:0})),wt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},St={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jt(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):!!(e=St[e])&&!!n[e]}function Et(){return jt}var Ct=F({},dt,{key:function(e){if(e.key){var n=wt[e.key]||e.key;if("Unidentified"!==n)return n}return"keypress"===e.type?13===(e=tt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Et,charCode:function(e){return"keypress"===e.type?tt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nt=ot(Ct),Pt=ot(F({},pt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_t=ot(F({},dt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Et})),zt=ot(F({},ut,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rt=F({},pt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tt=ot(Rt),It=[9,13,27,32],Lt=c&&"CompositionEvent"in window,Ot=null;c&&"documentMode"in document&&(Ot=document.documentMode);var $t=c&&"TextEvent"in window&&!Ot,Ft=c&&(!Lt||Ot&&8<Ot&&11>=Ot),At=String.fromCharCode(32),Dt=!1;function Mt(e,n){switch(e){case"keyup":return-1!==It.indexOf(n.keyCode);case"keydown":return 229!==n.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ut(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Wt=!1;var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ht(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===n?!!Bt[e.type]:"textarea"===n}function Vt(e,n,t,r){Ce(r),0<(n=Qr(n,"onChange")).length&&(t=new ct("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Qt=null,qt=null;function Kt(e){Ar(e,0)}function Gt(e){if(q(xa(e)))return e}function Yt(e,n){if("change"===e)return n}var Xt=!1;if(c){var Jt;if(c){var Zt="oninput"in document;if(!Zt){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zt="function"==typeof er.oninput}Jt=Zt}else Jt=!1;Xt=Jt&&(!document.documentMode||9<document.documentMode)}function nr(){Qt&&(Qt.detachEvent("onpropertychange",tr),qt=Qt=null)}function tr(e){if("value"===e.propertyName&&Gt(qt)){var n=[];Vt(n,qt,e,we(e)),Re(Kt,n)}}function rr(e,n,t){"focusin"===e?(nr(),qt=t,(Qt=n).attachEvent("onpropertychange",tr)):"focusout"===e&&nr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gt(qt)}function or(e,n){if("click"===e)return Gt(n)}function ir(e,n){if("input"===e||"change"===e)return Gt(n)}var lr="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n};function sr(e,n){if(lr(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!d.call(n,a)||!lr(e[a],n[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,n){var t,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,n){return!(!e||!n)&&(e===n||(!e||3!==e.nodeType)&&(n&&3===n.nodeType?dr(e,n.parentNode):"contains"in e?e.contains(n):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(n))))}function fr(){for(var e=window,n=K();n instanceof e.HTMLIFrameElement;){try{var t="string"==typeof n.contentWindow.location.href}catch(e){t=!1}if(!t)break;n=K((e=n.contentWindow).document)}return n}function pr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&("input"===n&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===n||"true"===e.contentEditable)}function hr(e){var n=fr(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&dr(t.ownerDocument.documentElement,t)){if(null!==r&&pr(t))if(n=r.start,void 0===(e=r.end)&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if((e=(n=t.ownerDocument||document)&&n.defaultView||window).getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(t,o);var i=cr(t,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((n=n.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}for(n=[],e=t;e=e.parentNode;)1===e.nodeType&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof t.focus&&t.focus(),t=0;t<n.length;t++)(e=n[t]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,br=null,yr=!1;function xr(e,n,t){var r=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;yr||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=Qr(vr,"onSelect")).length&&(n=new ct("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gr)))}function wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var n,t=kr[e];for(n in t)if(t.hasOwnProperty(n)&&n in jr)return Sr[e]=t[n];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=Er("animationend"),Nr=Er("animationiteration"),Pr=Er("animationstart"),_r=Er("transitionend"),zr=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,n){zr.set(e,n),s(n,[e])}for(var Ir=0;Ir<Rr.length;Ir++){var Lr=Rr[Ir];Tr(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Tr(Cr,"onAnimationEnd"),Tr(Nr,"onAnimationIteration"),Tr(Pr,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(_r,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$r=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Fr(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,function(e,n,t,r,a,i,l,s,u){if(Ue.apply(this,arguments),$e){if(!$e)throw Error(o(198));var c=Fe;$e=!1,Fe=null,Ae||(Ae=!0,De=c)}}(r,n,void 0,e),e.currentTarget=null}function Ar(e,n){n=0!=(4&n);for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,l,u),o=s}}}if(Ae)throw e=De,Ae=!1,De=null,e}function Dr(e,n){var t=n[ma];void 0===t&&(t=n[ma]=new Set);var r=e+"__bubble";t.has(r)||(Br(n,e,2,!1),t.add(r))}function Mr(e,n,t){var r=0;n&&(r|=4),Br(t,e,r,n)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ur]){e[Ur]=!0,i.forEach((function(n){"selectionchange"!==n&&($r.has(n)||Mr(n,!1,e),Mr(n,!0,e))}));var n=9===e.nodeType?e:e.ownerDocument;null===n||n[Ur]||(n[Ur]=!0,Mr("selectionchange",!1,n))}}function Br(e,n,t,r){switch(Xn(n)){case 1:var a=Qn;break;case 4:a=qn;break;default:a=Kn}t=a.bind(null,n,t,e),a=void 0,!Ie||"touchstart"!==n&&"touchmove"!==n&&"wheel"!==n||(a=!0),r?void 0!==a?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):void 0!==a?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Hr(e,n,t,r,a){var o=r;if(0==(1&n)&&0==(2&n)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ba(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Re((function(){var r=o,a=we(t),i=[];e:{var l=zr.get(e);if(void 0!==l){var s=ct,u=e;switch(e){case"keypress":if(0===tt(t))break e;case"keydown":case"keyup":s=Nt;break;case"focusin":u="focus",s=gt;break;case"focusout":u="blur",s=gt;break;case"beforeblur":case"afterblur":s=gt;break;case"click":if(2===t.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=ht;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mt;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=_t;break;case Cr:case Nr:case Pr:s=vt;break;case _r:s=zt;break;case"scroll":s=ft;break;case"wheel":s=Tt;break;case"copy":case"cut":case"paste":s=yt;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pt}var c=0!=(4&n),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Te(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,t,a),i.push({event:l,listeners:c}))}}if(0==(7&n)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||t===xe||!(u=t.relatedTarget||t.fromElement)||!ba(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=t.relatedTarget||t.toElement)?ba(u):null)&&(u!==(d=We(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=ht,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pt,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(m,h+"leave",s,t,a)).target=d,l.relatedTarget=p,m=null,ba(a)===r&&((c=new c(f,h+"enter",u,t,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=qr(p))h++;for(p=0,m=f;m;m=qr(m))p++;for(;0<h-p;)c=qr(c),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=qr(c),f=qr(f)}c=null}else c=null;null!==s&&Kr(i,l,s,c,!1),null!==u&&null!==d&&Kr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Yt;else if(Ht(l))if(Xt)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vt(i,g,t,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Ht(v)||"true"===v.contentEditable)&&(gr=v,vr=r,br=null);break;case"focusout":br=vr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(i,t,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,t,a)}var b;if(Lt)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Wt?Mt(e,t)&&(y="onCompositionEnd"):"keydown"===e&&229===t.keyCode&&(y="onCompositionStart");y&&(Ft&&"ko"!==t.locale&&(Wt||"onCompositionStart"!==y?"onCompositionEnd"===y&&Wt&&(b=nt()):(Zn="value"in(Jn=a)?Jn.value:Jn.textContent,Wt=!0)),0<(v=Qr(r,y)).length&&(y=new xt(y,e,null,t,a),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=Ut(t))&&(y.data=b))),(b=$t?function(e,n){switch(e){case"compositionend":return Ut(n);case"keypress":return 32!==n.which?null:(Dt=!0,At);case"textInput":return(e=n.data)===At&&Dt?null:e;default:return null}}(e,t):function(e,n){if(Wt)return"compositionend"===e||!Lt&&Mt(e,n)?(e=nt(),et=Zn=Jn=null,Wt=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ft&&"ko"!==n.locale?null:n.data}}(e,t))&&(0<(r=Qr(r,"onBeforeInput")).length&&(a=new xt("onBeforeInput","beforeinput",null,t,a),i.push({event:a,listeners:r}),a.data=b))}Ar(i,n)}))}function Vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qr(e,n){for(var t=n+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Te(e,t))&&r.unshift(Vr(e,o,a)),null!=(o=Te(e,n))&&r.push(Vr(e,o,a))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,n,t,r,a){for(var o=n._reactName,i=[];null!==t&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Te(t,o))&&i.unshift(Vr(t,s,l)):a||null!=(s=Te(t,o))&&i.push(Vr(t,s,l))),t=t.return}0!==i.length&&e.push({event:n,listeners:i})}var Gr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Xr(e){return("string"==typeof e?e:""+e).replace(Gr,"\n").replace(Yr,"")}function Jr(e,n,t){if(n=Xr(n),Xr(e)!==n&&t)throw Error(o(425))}function Zr(){}var ea=null,na=null;function ta(e,n){return"textarea"===e||"noscript"===e||"string"==typeof n.children||"number"==typeof n.children||"object"==typeof n.dangerouslySetInnerHTML&&null!==n.dangerouslySetInnerHTML&&null!=n.dangerouslySetInnerHTML.__html}var ra="function"==typeof setTimeout?setTimeout:void 0,aa="function"==typeof clearTimeout?clearTimeout:void 0,oa="function"==typeof Promise?Promise:void 0,ia="function"==typeof queueMicrotask?queueMicrotask:void 0!==oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&8===a.nodeType)if("/$"===(t=a.data)){if(0===r)return e.removeChild(a),void Bn(n);r--}else"$"!==t&&"$?"!==t&&"$!"!==t||r++;t=a}while(t);Bn(n)}function ua(e){for(;null!=e;e=e.nextSibling){var n=e.nodeType;if(1===n||3===n)break;if(8===n){if("$"===(n=e.data)||"$!"===n||"$?"===n)break;if("/$"===n)return null}}return e}function ca(e){e=e.previousSibling;for(var n=0;e;){if(8===e.nodeType){var t=e.data;if("$"===t||"$!"===t||"$?"===t){if(0===n)return e;n--}else"/$"===t&&n++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ba(e){var n=e[fa];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ha]||t[fa]){if(t=n.alternate,null!==n.child||null!==t&&null!==t.child)for(e=ca(e);null!==e;){if(t=e[fa])return t;e=ca(e)}return n}t=(e=t).parentNode}return null}function ya(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ea(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ca(e,n){Sa++,ka[Sa]=e.current,e.current=n}var Na={},Pa=ja(Na),_a=ja(!1),za=Na;function Ra(e,n){var t=e.type.contextTypes;if(!t)return Na;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in t)o[a]=n[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ta(e){return null!=(e=e.childContextTypes)}function Ia(){Ea(_a),Ea(Pa)}function La(e,n,t){if(Pa.current!==Na)throw Error(o(168));Ca(Pa,n),Ca(_a,t)}function Oa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,"function"!=typeof r.getChildContext)return t;for(var a in r=r.getChildContext())if(!(a in n))throw Error(o(108,B(e)||"Unknown",a));return F({},t,r)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Na,za=Pa.current,Ca(Pa,e),Ca(_a,_a.current),!0}function Fa(e,n,t){var r=e.stateNode;if(!r)throw Error(o(169));t?(e=Oa(e,n,za),r.__reactInternalMemoizedMergedChildContext=e,Ea(_a),Ea(Pa),Ca(Pa,e)):Ea(_a),Ca(_a,t)}var Aa=null,Da=!1,Ma=!1;function Ua(e){null===Aa?Aa=[e]:Aa.push(e)}function Wa(){if(!Ma&&null!==Aa){Ma=!0;var e=0,n=xn;try{var t=Aa;for(xn=1;e<t.length;e++){var r=t[e];do{r=r(!0)}while(null!==r)}Aa=null,Da=!1}catch(n){throw null!==Aa&&(Aa=Aa.slice(e+1)),qe(Ze,Wa),n}finally{xn=n,Ma=!1}}return null}var Ba=[],Ha=0,Va=null,Qa=0,qa=[],Ka=0,Ga=null,Ya=1,Xa="";function Ja(e,n){Ba[Ha++]=Qa,Ba[Ha++]=Va,Va=e,Qa=n}function Za(e,n,t){qa[Ka++]=Ya,qa[Ka++]=Xa,qa[Ka++]=Ga,Ga=e;var r=Ya;e=Xa;var a=32-ln(r)-1;r&=~(1<<a),t+=1;var o=32-ln(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ya=1<<32-ln(n)+a|t<<a|r,Xa=o+e}else Ya=1<<o|t<<a|r,Xa=e}function eo(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function no(e){for(;e===Va;)Va=Ba[--Ha],Ba[Ha]=null,Qa=Ba[--Ha],Ba[Ha]=null;for(;e===Ga;)Ga=qa[--Ka],qa[Ka]=null,Xa=qa[--Ka],qa[Ka]=null,Ya=qa[--Ka],qa[Ka]=null}var to=null,ro=null,ao=!1,oo=null;function io(e,n){var t=Tu(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,null===(n=e.deletions)?(e.deletions=[t],e.flags|=16):n.push(t)}function lo(e,n){switch(e.tag){case 5:var t=e.type;return null!==(n=1!==n.nodeType||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n)&&(e.stateNode=n,to=e,ro=ua(n.firstChild),!0);case 6:return null!==(n=""===e.pendingProps||3!==n.nodeType?null:n)&&(e.stateNode=n,to=e,ro=null,!0);case 13:return null!==(n=8!==n.nodeType?null:n)&&(t=null!==Ga?{id:Ya,overflow:Xa}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},(t=Tu(18,null,null,0)).stateNode=n,t.return=e,e.child=t,to=e,ro=null,!0);default:return!1}}function so(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function uo(e){if(ao){var n=ro;if(n){var t=n;if(!lo(e,n)){if(so(e))throw Error(o(418));n=ua(t.nextSibling);var r=to;n&&lo(e,n)?io(r,t):(e.flags=-4097&e.flags|2,ao=!1,to=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,to=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;to=e}function fo(e){if(e!==to)return!1;if(!ao)return co(e),ao=!0,!1;var n;if((n=3!==e.tag)&&!(n=5!==e.tag)&&(n="head"!==(n=e.type)&&"body"!==n&&!ta(e.type,e.memoizedProps)),n&&(n=ro)){if(so(e))throw po(),Error(o(418));for(;n;)io(e,n),n=ua(n.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType){var t=e.data;if("/$"===t){if(0===n){ro=ua(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++}e=e.nextSibling}ro=null}}else ro=to?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=to=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,n){if(e&&e.defaultProps){for(var t in n=F({},n),e=e.defaultProps)void 0===n[t]&&(n[t]=e[t]);return n}return n}var bo=ja(null),yo=null,xo=null,wo=null;function ko(){wo=xo=yo=null}function So(e){var n=bo.current;Ea(bo),e._currentValue=n}function jo(e,n,t){for(;null!==e;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,null!==r&&(r.childLanes|=n)):null!==r&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Eo(e,n){yo=e,wo=xo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&n)&&(xl=!0),e.firstContext=null)}function Co(e){var n=e._currentValue;if(wo!==e)if(e={context:e,memoizedValue:n,next:null},null===xo){if(null===yo)throw Error(o(308));xo=e,yo.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return n}var No=null;function Po(e){null===No?No=[e]:No.push(e)}function _o(e,n,t,r){var a=n.interleaved;return null===a?(t.next=t,Po(n)):(t.next=a.next,a.next=t),n.interleaved=t,zo(e,r)}function zo(e,n){e.lanes|=n;var t=e.alternate;for(null!==t&&(t.lanes|=n),t=e,e=e.return;null!==e;)e.childLanes|=n,null!==(t=e.alternate)&&(t.childLanes|=n),t=e,e=e.return;return 3===t.tag?t.stateNode:null}var Ro=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lo(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Oo(e,n,t){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&_s)){var a=r.pending;return null===a?n.next=n:(n.next=a.next,a.next=n),r.pending=n,zo(e,t)}return null===(a=r.interleaved)?(n.next=n,Po(r)):(n.next=a.next,a.next=n),r.interleaved=n,zo(e,t)}function $o(e,n,t){if(null!==(n=n.updateQueue)&&(n=n.shared,0!=(4194240&t))){var r=n.lanes;t|=r&=e.pendingLanes,n.lanes=t,yn(e,t)}}function Fo(e,n){var t=e.updateQueue,r=e.alternate;if(null!==r&&t===(r=r.updateQueue)){var a=null,o=null;if(null!==(t=t.firstBaseUpdate)){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};null===o?a=o=i:o=o.next=i,t=t.next}while(null!==t);null===o?a=o=n:o=o.next=n}else a=o=n;return t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=t)}null===(e=t.lastBaseUpdate)?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ao(e,n,t,r){var a=e.updateQueue;Ro=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=n,p=t,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=F({},d,f);break e;case 2:Ro=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(n=a.shared.interleaved)){a=n;do{i|=a.lane,a=a.next}while(a!==n)}else null===o&&(a.shared.lanes=0);Fs|=i,e.lanes=i,e.memoizedState=d}}function Do(e,n,t){if(e=n.effects,n.effects=null,null!==e)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(null!==a){if(r.callback=null,r=t,"function"!=typeof a)throw Error(o(191,a));a.call(r)}}}var Mo=(new r.Component).refs;function Uo(e,n,t,r){t=null==(t=t(r,n=e.memoizedState))?n:F({},n,t),e.memoizedState=t,0===e.lanes&&(e.updateQueue.baseState=t)}var Wo={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=nu(),a=tu(e),o=Lo(r,a);o.payload=n,null!=t&&(o.callback=t),null!==(n=Oo(e,o,a))&&(ru(n,e,a,r),$o(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=nu(),a=tu(e),o=Lo(r,a);o.tag=1,o.payload=n,null!=t&&(o.callback=t),null!==(n=Oo(e,o,a))&&(ru(n,e,a,r),$o(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nu(),r=tu(e),a=Lo(t,r);a.tag=2,null!=n&&(a.callback=n),null!==(n=Oo(e,a,r))&&(ru(n,e,r,t),$o(n,e,r))}};function Bo(e,n,t,r,a,o,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!n.prototype||!n.prototype.isPureReactComponent||(!sr(t,r)||!sr(a,o))}function Ho(e,n,t){var r=!1,a=Na,o=n.contextType;return"object"==typeof o&&null!==o?o=Co(o):(a=Ta(n)?za:Pa.current,o=(r=null!=(r=n.contextTypes))?Ra(e,a):Na),n=new n(t,o),e.memoizedState=null!==n.state&&void 0!==n.state?n.state:null,n.updater=Wo,e.stateNode=n,n._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Vo(e,n,t,r){e=n.state,"function"==typeof n.componentWillReceiveProps&&n.componentWillReceiveProps(t,r),"function"==typeof n.UNSAFE_componentWillReceiveProps&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Wo.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=Mo,To(e);var o=n.contextType;"object"==typeof o&&null!==o?a.context=Co(o):(o=Ta(n)?za:Pa.current,a.context=Ra(e,o)),a.state=e.memoizedState,"function"==typeof(o=n.getDerivedStateFromProps)&&(Uo(e,n,o,t),a.state=e.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(n=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),n!==a.state&&Wo.enqueueReplaceState(a,a.state,null),Ao(e,t,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function qo(e,n,t){if(null!==(e=t.ref)&&"function"!=typeof e&&"object"!=typeof e){if(t._owner){if(t=t._owner){if(1!==t.tag)throw Error(o(309));var r=t.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==n&&null!==n.ref&&"function"==typeof n.ref&&n.ref._stringRef===i?n.ref:(n=function(e){var n=a.refs;n===Mo&&(n=a.refs={}),null===e?delete n[i]:n[i]=e},n._stringRef=i,n)}if("string"!=typeof e)throw Error(o(284));if(!t._owner)throw Error(o(290,e))}return e}function Ko(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Go(e){return(0,e._init)(e._payload)}function Yo(e){function n(n,t){if(e){var r=n.deletions;null===r?(n.deletions=[t],n.flags|=16):r.push(t)}}function t(t,r){if(!e)return null;for(;null!==r;)n(t,r),r=r.sibling;return null}function r(e,n){for(e=new Map;null!==n;)null!==n.key?e.set(n.key,n):e.set(n.index,n),n=n.sibling;return e}function a(e,n){return(e=Lu(e,n)).index=0,e.sibling=null,e}function i(n,t,r){return n.index=r,e?null!==(r=n.alternate)?(r=r.index)<t?(n.flags|=2,t):r:(n.flags|=2,t):(n.flags|=1048576,t)}function l(n){return e&&null===n.alternate&&(n.flags|=2),n}function s(e,n,t,r){return null===n||6!==n.tag?((n=Au(t,e.mode,r)).return=e,n):((n=a(n,t)).return=e,n)}function u(e,n,t,r){var o=t.type;return o===S?d(e,n,t.props.children,r,t.key):null!==n&&(n.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===T&&Go(o)===n.type)?((r=a(n,t.props)).ref=qo(e,n,t),r.return=e,r):((r=Ou(t.type,t.key,t.props,null,e.mode,r)).ref=qo(e,n,t),r.return=e,r)}function c(e,n,t,r){return null===n||4!==n.tag||n.stateNode.containerInfo!==t.containerInfo||n.stateNode.implementation!==t.implementation?((n=Du(t,e.mode,r)).return=e,n):((n=a(n,t.children||[])).return=e,n)}function d(e,n,t,r,o){return null===n||7!==n.tag?((n=$u(t,e.mode,r,o)).return=e,n):((n=a(n,t)).return=e,n)}function f(e,n,t){if("string"==typeof n&&""!==n||"number"==typeof n)return(n=Au(""+n,e.mode,t)).return=e,n;if("object"==typeof n&&null!==n){switch(n.$$typeof){case w:return(t=Ou(n.type,n.key,n.props,null,e.mode,t)).ref=qo(e,null,n),t.return=e,t;case k:return(n=Du(n,e.mode,t)).return=e,n;case T:return f(e,(0,n._init)(n._payload),t)}if(ne(n)||O(n))return(n=$u(n,e.mode,t,null)).return=e,n;Ko(e,n)}return null}function p(e,n,t,r){var a=null!==n?n.key:null;if("string"==typeof t&&""!==t||"number"==typeof t)return null!==a?null:s(e,n,""+t,r);if("object"==typeof t&&null!==t){switch(t.$$typeof){case w:return t.key===a?u(e,n,t,r):null;case k:return t.key===a?c(e,n,t,r):null;case T:return p(e,n,(a=t._init)(t._payload),r)}if(ne(t)||O(t))return null!==a?null:d(e,n,t,r,null);Ko(e,t)}return null}function h(e,n,t,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return s(n,e=e.get(t)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case w:return u(n,e=e.get(null===r.key?t:r.key)||null,r,a);case k:return c(n,e=e.get(null===r.key?t:r.key)||null,r,a);case T:return h(e,n,t,(0,r._init)(r._payload),a)}if(ne(r)||O(r))return d(n,e=e.get(t)||null,r,a,null);Ko(n,r)}return null}function m(a,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&n(a,d),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return t(a,d),ao&&Ja(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===c?u=d:c.sibling=d,c=d);return ao&&Ja(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return n(a,e)})),ao&&Ja(a,m),u}function g(a,l,s,u){var c=O(s);if("function"!=typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,b=s.next();null!==m&&!b.done;g++,b=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var y=p(a,m,b.value,u);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&n(a,m),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y,m=v}if(b.done)return t(a,m),ao&&Ja(a,g),c;if(null===m){for(;!b.done;g++,b=s.next())null!==(b=f(a,b.value,u))&&(l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return ao&&Ja(a,g),c}for(m=r(a,m);!b.done;g++,b=s.next())null!==(b=h(m,a,g,b.value,u))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return e&&m.forEach((function(e){return n(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,s){if("object"==typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"==typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){t(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===T&&Go(u)===c.type){t(r,c.sibling),(o=a(c,i.props)).ref=qo(r,c,i),o.return=r,r=o;break e}t(r,c);break}n(r,c),c=c.sibling}i.type===S?((o=$u(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Ou(i.type,i.key,i.props,null,r.mode,s)).ref=qo(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){t(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}t(r,o);break}n(r,o),o=o.sibling}(o=Du(i,r.mode,s)).return=r,r=o}return l(r);case T:return e(r,o,(c=i._init)(i._payload),s)}if(ne(i))return m(r,o,i,s);if(O(i))return g(r,o,i,s);Ko(r,i)}return"string"==typeof i&&""!==i||"number"==typeof i?(i=""+i,null!==o&&6===o.tag?(t(r,o.sibling),(o=a(o,i)).return=r,r=o):(t(r,o),(o=Au(i,r.mode,s)).return=r,r=o),l(r)):t(r,o)}}var Xo=Yo(!0),Jo=Yo(!1),Zo={},ei=ja(Zo),ni=ja(Zo),ti=ja(Zo);function ri(e){if(e===Zo)throw Error(o(174));return e}function ai(e,n){switch(Ca(ti,n),Ca(ni,e),Ca(ei,Zo),e=n.nodeType){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:se(null,"");break;default:n=se(n=(e=8===e?n.parentNode:n).namespaceURI||null,e=e.tagName)}Ea(ei),Ca(ei,n)}function oi(){Ea(ei),Ea(ni),Ea(ti)}function ii(e){ri(ti.current);var n=ri(ei.current),t=se(n,e.type);n!==t&&(Ca(ni,e),Ca(ei,t))}function li(e){ni.current===e&&(Ea(ei),Ea(ni))}var si=ja(0);function ui(e){for(var n=e;null!==n;){if(13===n.tag){var t=n.memoizedState;if(null!==t&&(null===(t=t.dehydrated)||"$?"===t.data||"$!"===t.data))return n}else if(19===n.tag&&void 0!==n.memoizedProps.revealOrder){if(0!=(128&n.flags))return n}else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ci=[];function di(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var fi=x.ReactCurrentDispatcher,pi=x.ReactCurrentBatchConfig,hi=0,mi=null,gi=null,vi=null,bi=!1,yi=!1,xi=0,wi=0;function ki(){throw Error(o(321))}function Si(e,n){if(null===n)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!lr(e[t],n[t]))return!1;return!0}function ji(e,n,t,r,a,i){if(hi=i,mi=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fi.current=null===e||null===e.memoizedState?ll:sl,e=t(r,a),yi){i=0;do{if(yi=!1,xi=0,25<=i)throw Error(o(301));i+=1,vi=gi=null,n.updateQueue=null,fi.current=ul,e=t(r,a)}while(yi)}if(fi.current=il,n=null!==gi&&null!==gi.next,hi=0,vi=gi=mi=null,bi=!1,n)throw Error(o(300));return e}function Ei(){var e=0!==xi;return xi=0,e}function Ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===vi?mi.memoizedState=vi=e:vi=vi.next=e,vi}function Ni(){if(null===gi){var e=mi.alternate;e=null!==e?e.memoizedState:null}else e=gi.next;var n=null===vi?mi.memoizedState:vi.next;if(null!==n)vi=n,gi=e;else{if(null===e)throw Error(o(310));e={memoizedState:(gi=e).memoizedState,baseState:gi.baseState,baseQueue:gi.baseQueue,queue:gi.queue,next:null},null===vi?mi.memoizedState=vi=e:vi=vi.next=e}return vi}function Pi(e,n){return"function"==typeof n?n(e):n}function _i(e){var n=Ni(),t=n.queue;if(null===t)throw Error(o(311));t.lastRenderedReducer=e;var r=gi,a=r.baseQueue,i=t.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,t.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((hi&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,mi.lanes|=d,Fs|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,n.memoizedState)||(xl=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(null!==(e=t.interleaved)){a=e;do{i=a.lane,mi.lanes|=i,Fs|=i,a=a.next}while(a!==e)}else null===a&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function zi(e){var n=Ni(),t=n.queue;if(null===t)throw Error(o(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(null!==a){t.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,n.memoizedState)||(xl=!0),n.memoizedState=i,null===n.baseQueue&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Ri(){}function Ti(e,n){var t=mi,r=Ni(),a=n(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,xl=!0),r=r.queue,Hi(Oi.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||null!==vi&&1&vi.memoizedState.tag){if(t.flags|=2048,Di(9,Li.bind(null,t,r,a,n),void 0,null),null===zs)throw Error(o(349));0!=(30&hi)||Ii(t,n,a)}return a}function Ii(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},null===(n=mi.updateQueue)?(n={lastEffect:null,stores:null},mi.updateQueue=n,n.stores=[e]):null===(t=n.stores)?n.stores=[e]:t.push(e)}function Li(e,n,t,r){n.value=t,n.getSnapshot=r,$i(n)&&Fi(e)}function Oi(e,n,t){return t((function(){$i(n)&&Fi(e)}))}function $i(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!lr(e,t)}catch(e){return!0}}function Fi(e){var n=zo(e,1);null!==n&&ru(n,e,1,-1)}function Ai(e){var n=Ci();return"function"==typeof e&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},n.queue=e,e=e.dispatch=tl.bind(null,mi,e),[n.memoizedState,e]}function Di(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},null===(n=mi.updateQueue)?(n={lastEffect:null,stores:null},mi.updateQueue=n,n.lastEffect=e.next=e):null===(t=n.lastEffect)?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Mi(){return Ni().memoizedState}function Ui(e,n,t,r){var a=Ci();mi.flags|=e,a.memoizedState=Di(1|n,t,void 0,void 0===r?null:r)}function Wi(e,n,t,r){var a=Ni();r=void 0===r?null:r;var o=void 0;if(null!==gi){var i=gi.memoizedState;if(o=i.destroy,null!==r&&Si(r,i.deps))return void(a.memoizedState=Di(n,t,o,r))}mi.flags|=e,a.memoizedState=Di(1|n,t,o,r)}function Bi(e,n){return Ui(8390656,8,e,n)}function Hi(e,n){return Wi(2048,8,e,n)}function Vi(e,n){return Wi(4,2,e,n)}function Qi(e,n){return Wi(4,4,e,n)}function qi(e,n){return"function"==typeof n?(e=e(),n(e),function(){n(null)}):null!=n?(e=e(),n.current=e,function(){n.current=null}):void 0}function Ki(e,n,t){return t=null!=t?t.concat([e]):null,Wi(4,4,qi.bind(null,n,e),t)}function Gi(){}function Yi(e,n){var t=Ni();n=void 0===n?null:n;var r=t.memoizedState;return null!==r&&null!==n&&Si(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Xi(e,n){var t=Ni();n=void 0===n?null:n;var r=t.memoizedState;return null!==r&&null!==n&&Si(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ji(e,n,t){return 0==(21&hi)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=t):(lr(t,n)||(t=gn(),mi.lanes|=t,Fs|=t,e.baseState=!0),n)}function Zi(e,n){var t=xn;xn=0!==t&&4>t?t:4,e(!0);var r=pi.transition;pi.transition={};try{e(!1),n()}finally{xn=t,pi.transition=r}}function el(){return Ni().memoizedState}function nl(e,n,t){var r=tu(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},rl(e))al(n,t);else if(null!==(t=_o(e,n,t,r))){ru(t,e,r,nu()),ol(t,n,r)}}function tl(e,n,t){var r=tu(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(rl(e))al(n,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=n.lastRenderedReducer))try{var i=n.lastRenderedState,l=o(i,t);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=n.interleaved;return null===s?(a.next=a,Po(n)):(a.next=s.next,s.next=a),void(n.interleaved=a)}}catch(e){}null!==(t=_o(e,n,a,r))&&(ru(t,e,r,a=nu()),ol(t,n,r))}}function rl(e){var n=e.alternate;return e===mi||null!==n&&n===mi}function al(e,n){yi=bi=!0;var t=e.pending;null===t?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ol(e,n,t){if(0!=(4194240&t)){var r=n.lanes;t|=r&=e.pendingLanes,n.lanes=t,yn(e,t)}}var il={readContext:Co,useCallback:ki,useContext:ki,useEffect:ki,useImperativeHandle:ki,useInsertionEffect:ki,useLayoutEffect:ki,useMemo:ki,useReducer:ki,useRef:ki,useState:ki,useDebugValue:ki,useDeferredValue:ki,useTransition:ki,useMutableSource:ki,useSyncExternalStore:ki,useId:ki,unstable_isNewReconciler:!1},ll={readContext:Co,useCallback:function(e,n){return Ci().memoizedState=[e,void 0===n?null:n],e},useContext:Co,useEffect:Bi,useImperativeHandle:function(e,n,t){return t=null!=t?t.concat([e]):null,Ui(4194308,4,qi.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ui(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ui(4,2,e,n)},useMemo:function(e,n){var t=Ci();return n=void 0===n?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ci();return n=void 0!==t?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=nl.bind(null,mi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ci().memoizedState=e},useState:Ai,useDebugValue:Gi,useDeferredValue:function(e){return Ci().memoizedState=e},useTransition:function(){var e=Ai(!1),n=e[0];return e=Zi.bind(null,e[1]),Ci().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=mi,a=Ci();if(ao){if(void 0===t)throw Error(o(407));t=t()}else{if(t=n(),null===zs)throw Error(o(349));0!=(30&hi)||Ii(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Bi(Oi.bind(null,r,i,e),[e]),r.flags|=2048,Di(9,Li.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ci(),n=zs.identifierPrefix;if(ao){var t=Xa;n=":"+n+"R"+(t=(Ya&~(1<<32-ln(Ya)-1)).toString(32)+t),0<(t=xi++)&&(n+="H"+t.toString(32)),n+=":"}else n=":"+n+"r"+(t=wi++).toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sl={readContext:Co,useCallback:Yi,useContext:Co,useEffect:Hi,useImperativeHandle:Ki,useInsertionEffect:Vi,useLayoutEffect:Qi,useMemo:Xi,useReducer:_i,useRef:Mi,useState:function(){return _i(Pi)},useDebugValue:Gi,useDeferredValue:function(e){return Ji(Ni(),gi.memoizedState,e)},useTransition:function(){return[_i(Pi)[0],Ni().memoizedState]},useMutableSource:Ri,useSyncExternalStore:Ti,useId:el,unstable_isNewReconciler:!1},ul={readContext:Co,useCallback:Yi,useContext:Co,useEffect:Hi,useImperativeHandle:Ki,useInsertionEffect:Vi,useLayoutEffect:Qi,useMemo:Xi,useReducer:zi,useRef:Mi,useState:function(){return zi(Pi)},useDebugValue:Gi,useDeferredValue:function(e){var n=Ni();return null===gi?n.memoizedState=e:Ji(n,gi.memoizedState,e)},useTransition:function(){return[zi(Pi)[0],Ni().memoizedState]},useMutableSource:Ri,useSyncExternalStore:Ti,useId:el,unstable_isNewReconciler:!1};function cl(e,n){try{var t="",r=n;do{t+=U(r),r=r.return}while(r);var a=t}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:n,stack:a,digest:null}}function dl(e,n,t){return{value:e,source:null,stack:null!=t?t:null,digest:null!=n?n:null}}function fl(e,n){try{console.error(n.value)}catch(e){setTimeout((function(){throw e}))}}var pl="function"==typeof WeakMap?WeakMap:Map;function hl(e,n,t){(t=Lo(-1,t)).tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Vs||(Vs=!0,Qs=r),fl(0,n)},t}function ml(e,n,t){(t=Lo(-1,t)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){fl(0,n)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(t.callback=function(){fl(0,n),"function"!=typeof r&&(null===qs?qs=new Set([this]):qs.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})}),t}function gl(e,n,t){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(n,a)}else void 0===(a=r.get(n))&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Cu.bind(null,e,n,t),n.then(e,e))}function vl(e){do{var n;if((n=13===e.tag)&&(n=null===(n=e.memoizedState)||null!==n.dehydrated),n)return e;e=e.return}while(null!==e);return null}function bl(e,n,t,r,a){return 0==(1&e.mode)?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,1===t.tag&&(null===t.alternate?t.tag=17:((n=Lo(-1,1)).tag=2,Oo(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=x.ReactCurrentOwner,xl=!1;function wl(e,n,t,r){n.child=null===e?Jo(n,null,t,r):Xo(n,e.child,t,r)}function kl(e,n,t,r,a){t=t.render;var o=n.ref;return Eo(n,a),r=ji(e,n,t,r,o,a),t=Ei(),null===e||xl?(ao&&t&&eo(n),n.flags|=1,wl(e,n,r,a),n.child):(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Vl(e,n,a))}function Sl(e,n,t,r,a){if(null===e){var o=t.type;return"function"!=typeof o||Iu(o)||void 0!==o.defaultProps||null!==t.compare||void 0!==t.defaultProps?((e=Ou(t.type,null,r,n,n.mode,a)).ref=n.ref,e.return=n,n.child=e):(n.tag=15,n.type=o,jl(e,n,o,r,a))}if(o=e.child,0==(e.lanes&a)){var i=o.memoizedProps;if((t=null!==(t=t.compare)?t:sr)(i,r)&&e.ref===n.ref)return Vl(e,n,a)}return n.flags|=1,(e=Lu(o,r)).ref=n.ref,e.return=n,n.child=e}function jl(e,n,t,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===n.ref){if(xl=!1,n.pendingProps=r=o,0==(e.lanes&a))return n.lanes=e.lanes,Vl(e,n,a);0!=(131072&e.flags)&&(xl=!0)}}return Nl(e,n,t,r,a)}function El(e,n,t){var r=n.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&n.mode))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Ls,Is),Is|=t;else{if(0==(1073741824&t))return e=null!==o?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ca(Ls,Is),Is|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:t,Ca(Ls,Is),Is|=r}else null!==o?(r=o.baseLanes|t,n.memoizedState=null):r=t,Ca(Ls,Is),Is|=r;return wl(e,n,a,t),n.child}function Cl(e,n){var t=n.ref;(null===e&&null!==t||null!==e&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Nl(e,n,t,r,a){var o=Ta(t)?za:Pa.current;return o=Ra(n,o),Eo(n,a),t=ji(e,n,t,r,o,a),r=Ei(),null===e||xl?(ao&&r&&eo(n),n.flags|=1,wl(e,n,t,a),n.child):(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Vl(e,n,a))}function Pl(e,n,t,r,a){if(Ta(t)){var o=!0;$a(n)}else o=!1;if(Eo(n,a),null===n.stateNode)Hl(e,n),Ho(n,t,r),Qo(n,t,r,a),r=!0;else if(null===e){var i=n.stateNode,l=n.memoizedProps;i.props=l;var s=i.context,u=t.contextType;"object"==typeof u&&null!==u?u=Co(u):u=Ra(n,u=Ta(t)?za:Pa.current);var c=t.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof i.getSnapshotBeforeUpdate;d||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==r||s!==u)&&Vo(n,i,r,u),Ro=!1;var f=n.memoizedState;i.state=f,Ao(n,r,i,a),s=n.memoizedState,l!==r||f!==s||_a.current||Ro?("function"==typeof c&&(Uo(n,t,c,r),s=n.memoizedState),(l=Ro||Bo(n,t,l,r,f,s,u))?(d||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(n.flags|=4194308)):("function"==typeof i.componentDidMount&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"==typeof i.componentDidMount&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Io(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:vo(n.type,l),i.props=u,d=n.pendingProps,f=i.context,"object"==typeof(s=t.contextType)&&null!==s?s=Co(s):s=Ra(n,s=Ta(t)?za:Pa.current);var p=t.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==d||f!==s)&&Vo(n,i,r,s),Ro=!1,f=n.memoizedState,i.state=f,Ao(n,r,i,a);var h=n.memoizedState;l!==d||f!==h||_a.current||Ro?("function"==typeof p&&(Uo(n,t,p,r),h=n.memoizedState),(u=Ro||Bo(n,t,u,r,f,h,s)||!1)?(c||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"==typeof i.componentDidUpdate&&(n.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(n.flags|=1024)):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return _l(e,n,t,r,o,a)}function _l(e,n,t,r,a,o){Cl(e,n);var i=0!=(128&n.flags);if(!r&&!i)return a&&Fa(n,t,!1),Vl(e,n,o);r=n.stateNode,yl.current=n;var l=i&&"function"!=typeof t.getDerivedStateFromError?null:r.render();return n.flags|=1,null!==e&&i?(n.child=Xo(n,e.child,null,o),n.child=Xo(n,null,l,o)):wl(e,n,l,o),n.memoizedState=r.state,a&&Fa(n,t,!0),n.child}function zl(e){var n=e.stateNode;n.pendingContext?La(0,n.pendingContext,n.pendingContext!==n.context):n.context&&La(0,n.context,!1),ai(e,n.containerInfo)}function Rl(e,n,t,r,a){return ho(),mo(a),n.flags|=256,wl(e,n,t,r),n.child}var Tl,Il,Ll,Ol,$l={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Al(e,n,t){var r,a=n.pendingProps,i=si.current,l=!1,s=0!=(128&n.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(l=!0,n.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(si,1&i),null===e)return uo(n),null!==(e=n.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&n.mode)?n.lanes=1:"$!"===e.data?n.lanes=8:n.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=n.mode,l=n.child,s={mode:"hidden",children:s},0==(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Fu(s,a,0,null),e=$u(e,a,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Fl(t),n.memoizedState=$l,e):Dl(n,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,n,t,r,a,i,l){if(t)return 256&n.flags?(n.flags&=-257,Ml(e,n,l,r=dl(Error(o(422))))):null!==n.memoizedState?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Fu({mode:"visible",children:r.children},a,0,null),(i=$u(i,a,l,null)).flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,0!=(1&n.mode)&&Xo(n,e.child,null,l),n.child.memoizedState=Fl(l),n.memoizedState=$l,i);if(0==(1&n.mode))return Ml(e,n,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ml(e,n,l,r=dl(i=Error(o(419)),r,void 0))}if(s=0!=(l&e.childLanes),xl||s){if(null!==(r=zs)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,zo(e,a),ru(r,e,a,-1))}return gu(),Ml(e,n,l,r=dl(Error(o(421))))}return"$?"===a.data?(n.flags|=128,n.child=e.child,n=Pu.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,ro=ua(a.nextSibling),to=n,ao=!0,oo=null,null!==e&&(qa[Ka++]=Ya,qa[Ka++]=Xa,qa[Ka++]=Ga,Ya=e.id,Xa=e.overflow,Ga=n),n=Dl(n,r.children),n.flags|=4096,n)}(e,n,s,a,r,i,t);if(l){l=a.fallback,s=n.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0==(1&s)&&n.child!==i?((a=n.child).childLanes=0,a.pendingProps=u,n.deletions=null):(a=Lu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Lu(r,l):(l=$u(l,s,t,null)).flags|=2,l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,s=null===(s=e.child.memoizedState)?Fl(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~t,n.memoizedState=$l,a}return e=(l=e.child).sibling,a=Lu(l,{mode:"visible",children:a.children}),0==(1&n.mode)&&(a.lanes=t),a.return=n,a.sibling=null,null!==e&&(null===(t=n.deletions)?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Dl(e,n){return(n=Fu({mode:"visible",children:n},e.mode,0,null)).return=e,e.child=n}function Ml(e,n,t,r){return null!==r&&mo(r),Xo(n,e.child,null,t),(e=Dl(n,n.pendingProps.children)).flags|=2,n.memoizedState=null,e}function Ul(e,n,t){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n),jo(e.return,n,t)}function Wl(e,n,t,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function Bl(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(wl(e,n,r.children,t),0!=(2&(r=si.current)))r=1&r|2,n.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=n.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ul(e,t,n);else if(19===e.tag)Ul(e,t,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(si,r),0==(1&n.mode))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;null!==t;)null!==(e=t.alternate)&&null===ui(e)&&(a=t),t=t.sibling;null===(t=a)?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Wl(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ui(e)){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Wl(n,!0,t,null,o);break;case"together":Wl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hl(e,n){0==(1&n.mode)&&null!==e&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Vl(e,n,t){if(null!==e&&(n.dependencies=e.dependencies),Fs|=n.lanes,0==(t&n.childLanes))return null;if(null!==e&&n.child!==e.child)throw Error(o(153));if(null!==n.child){for(t=Lu(e=n.child,e.pendingProps),n.child=t,t.return=n;null!==e.sibling;)e=e.sibling,(t=t.sibling=Lu(e,e.pendingProps)).return=n;t.sibling=null}return n.child}function Ql(e,n){if(!ao)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;null!==n;)null!==n.alternate&&(t=n),n=n.sibling;null===t?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?n||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var n=null!==e.alternate&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;null!==a;)t|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Kl(e,n,t){var r=n.pendingProps;switch(no(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(n),null;case 1:case 17:return Ta(n.type)&&Ia(),ql(n),null;case 3:return r=n.stateNode,oi(),Ea(_a),Ea(Pa),di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(n)?n.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&n.flags)||(n.flags|=1024,null!==oo&&(lu(oo),oo=null))),Il(e,n),ql(n),null;case 5:li(n);var a=ri(ti.current);if(t=n.type,null!==e&&null!=n.stateNode)Ll(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(null===n.stateNode)throw Error(o(166));return ql(n),null}if(e=ri(ei.current),fo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[fa]=n,r[pa]=i,e=0!=(1&n.mode),t){case"dialog":Dr("cancel",r),Dr("close",r);break;case"iframe":case"object":case"embed":Dr("load",r);break;case"video":case"audio":for(a=0;a<Or.length;a++)Dr(Or[a],r);break;case"source":Dr("error",r);break;case"img":case"image":case"link":Dr("error",r),Dr("load",r);break;case"details":Dr("toggle",r);break;case"input":Y(r,i),Dr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Dr("invalid",r);break;case"textarea":ae(r,i),Dr("invalid",r)}for(var s in be(t,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"==typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",u]):"number"==typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Dr("scroll",r)}switch(t){case"input":Q(r),Z(r,i,!0);break;case"textarea":Q(r),ie(r);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(r.onclick=Zr)}r=a,n.updateQueue=r,null!==r&&(n.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(t)),"http://www.w3.org/1999/xhtml"===e?"script"===t?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),"select"===t&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[fa]=n,e[pa]=r,Tl(e,n,!1,!1),n.stateNode=e;e:{switch(s=ye(t,r),t){case"dialog":Dr("cancel",e),Dr("close",e),a=r;break;case"iframe":case"object":case"embed":Dr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Or.length;a++)Dr(Or[a],e);a=r;break;case"source":Dr("error",e),a=r;break;case"img":case"image":case"link":Dr("error",e),Dr("load",e),a=r;break;case"details":Dr("toggle",e),a=r;break;case"input":Y(e,r),a=G(e,r),Dr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),Dr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Dr("invalid",e)}for(i in be(t,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"==typeof c?("textarea"!==t||""!==c)&&fe(e,c):"number"==typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Dr("scroll",e):null!=c&&y(e,i,c,s))}switch(t){case"input":Q(e),Z(e,r,!1);break;case"textarea":Q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?te(e,!!r.multiple,i,!1):null!=r.defaultValue&&te(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=Zr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}null!==n.ref&&(n.flags|=512,n.flags|=2097152)}return ql(n),null;case 6:if(e&&null!=n.stateNode)Ol(e,n,e.memoizedProps,r);else{if("string"!=typeof r&&null===n.stateNode)throw Error(o(166));if(t=ri(ti.current),ri(ei.current),fo(n)){if(r=n.stateNode,t=n.memoizedProps,r[fa]=n,(i=r.nodeValue!==t)&&null!==(e=to))switch(e.tag){case 3:Jr(r.nodeValue,t,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,t,0!=(1&e.mode))}i&&(n.flags|=4)}else(r=(9===t.nodeType?t:t.ownerDocument).createTextNode(r))[fa]=n,n.stateNode=r}return ql(n),null;case 13:if(Ea(si),r=n.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!=(1&n.mode)&&0==(128&n.flags))po(),ho(),n.flags|=98560,i=!1;else if(i=fo(n),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=n.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=n}else ho(),0==(128&n.flags)&&(n.memoizedState=null),n.flags|=4;ql(n),i=!1}else null!==oo&&(lu(oo),oo=null),i=!0;if(!i)return 65536&n.flags?n:null}return 0!=(128&n.flags)?(n.lanes=t,n):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(n.child.flags|=8192,0!=(1&n.mode)&&(null===e||0!=(1&si.current)?0===Os&&(Os=3):gu())),null!==n.updateQueue&&(n.flags|=4),ql(n),null);case 4:return oi(),Il(e,n),null===e&&Wr(n.stateNode.containerInfo),ql(n),null;case 10:return So(n.type._context),ql(n),null;case 19:if(Ea(si),null===(i=n.memoizedState))return ql(n),null;if(r=0!=(128&n.flags),null===(s=i.rendering))if(r)Ql(i,!1);else{if(0!==Os||null!==e&&0!=(128&e.flags))for(e=n.child;null!==e;){if(null!==(s=ui(e))){for(n.flags|=128,Ql(i,!1),null!==(r=s.updateQueue)&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;null!==t;)e=r,(i=t).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ca(si,1&si.current|2),n.child}e=e.sibling}null!==i.tail&&Xe()>Bs&&(n.flags|=128,r=!0,Ql(i,!1),n.lanes=4194304)}else{if(!r)if(null!==(e=ui(s))){if(n.flags|=128,r=!0,null!==(t=e.updateQueue)&&(n.updateQueue=t,n.flags|=4),Ql(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return ql(n),null}else 2*Xe()-i.renderingStartTime>Bs&&1073741824!==t&&(n.flags|=128,r=!0,Ql(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(null!==(t=i.last)?t.sibling=s:n.child=s,i.last=s)}return null!==i.tail?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Xe(),n.sibling=null,t=si.current,Ca(si,r?1&t|2:1&t),n):(ql(n),null);case 22:case 23:return fu(),r=null!==n.memoizedState,null!==e&&null!==e.memoizedState!==r&&(n.flags|=8192),r&&0!=(1&n.mode)?0!=(1073741824&Is)&&(ql(n),6&n.subtreeFlags&&(n.flags|=8192)):ql(n),null;case 24:case 25:return null}throw Error(o(156,n.tag))}function Gl(e,n){switch(no(n),n.tag){case 1:return Ta(n.type)&&Ia(),65536&(e=n.flags)?(n.flags=-65537&e|128,n):null;case 3:return oi(),Ea(_a),Ea(Pa),di(),0!=(65536&(e=n.flags))&&0==(128&e)?(n.flags=-65537&e|128,n):null;case 5:return li(n),null;case 13:if(Ea(si),null!==(e=n.memoizedState)&&null!==e.dehydrated){if(null===n.alternate)throw Error(o(340));ho()}return 65536&(e=n.flags)?(n.flags=-65537&e|128,n):null;case 19:return Ea(si),null;case 4:return oi(),null;case 10:return So(n.type._context),null;case 22:case 23:return fu(),null;default:return null}}Tl=function(e,n){for(var t=n.child;null!==t;){if(5===t.tag||6===t.tag)e.appendChild(t.stateNode);else if(4!==t.tag&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===n)break;for(;null===t.sibling;){if(null===t.return||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Il=function(){},Ll=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,ri(ei.current);var o,i=null;switch(t){case"input":a=G(e,a),r=G(e,r),i=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=Zr)}for(c in be(t,r),t=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Dr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}},Ol=function(e,n,t,r){t!==r&&(n.flags|=4)};var Yl=!1,Xl=!1,Jl="function"==typeof WeakSet?WeakSet:Set,Zl=null;function es(e,n){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Eu(e,n,t)}else t.current=null}function ns(e,n,t){try{t()}catch(t){Eu(e,n,t)}}var ts=!1;function rs(e,n,t){var r=n.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&ns(n,t,o)}a=a.next}while(a!==r)}}function as(e,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function os(e){var n=e.ref;if(null!==n){var t=e.stateNode;e.tag,e=t,"function"==typeof n?n(e):n.current=e}}function is(e){var n=e.alternate;null!==n&&(e.alternate=null,is(n)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(n=e.stateNode)&&(delete n[fa],delete n[pa],delete n[ma],delete n[ga],delete n[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ls(e){return 5===e.tag||3===e.tag||4===e.tag}function ss(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function us(e,n,t){var r=e.tag;if(5===r||6===r)e=e.stateNode,n?8===t.nodeType?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(8===t.nodeType?(n=t.parentNode).insertBefore(e,t):(n=t).appendChild(e),null!=(t=t._reactRootContainer)||null!==n.onclick||(n.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(us(e,n,t),e=e.sibling;null!==e;)us(e,n,t),e=e.sibling}function cs(e,n,t){var r=e.tag;if(5===r||6===r)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,n,t),e=e.sibling;null!==e;)cs(e,n,t),e=e.sibling}var ds=null,fs=!1;function ps(e,n,t){for(t=t.child;null!==t;)hs(e,n,t),t=t.sibling}function hs(e,n,t){if(on&&"function"==typeof on.onCommitFiberUnmount)try{on.onCommitFiberUnmount(an,t)}catch(e){}switch(t.tag){case 5:Xl||es(t,n);case 6:var r=ds,a=fs;ds=null,ps(e,n,t),fs=a,null!==(ds=r)&&(fs?(e=ds,t=t.stateNode,8===e.nodeType?e.parentNode.removeChild(t):e.removeChild(t)):ds.removeChild(t.stateNode));break;case 18:null!==ds&&(fs?(e=ds,t=t.stateNode,8===e.nodeType?sa(e.parentNode,t):1===e.nodeType&&sa(e,t),Bn(e)):sa(ds,t.stateNode));break;case 4:r=ds,a=fs,ds=t.stateNode.containerInfo,fs=!0,ps(e,n,t),ds=r,fs=a;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(r=t.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!=(2&o)||0!=(4&o))&&ns(t,n,i),a=a.next}while(a!==r)}ps(e,n,t);break;case 1:if(!Xl&&(es(t,n),"function"==typeof(r=t.stateNode).componentWillUnmount))try{r.props=t.memoizedProps,r.state=moizedState,r.componentWillUnmount()}catch(e){Eu(t,n,e)}ps(e,n,t);break;case 21:ps(e,n,t);break;case 22:1&t.mode?(Xl=(r=Xl)||null!==t.memoizedState,ps(e,n,t),Xl=r):ps(e,n,t);break;default:ps(e,n,t)}}function ms(e){var n=e.updateQueue;if(null!==n){e.updateQueue=null;var t=e.stateNode;null===t&&(t=e.stateNode=new Jl),n.forEach((function(n){var r=_u.bind(null,e,n);t.has(n)||(t.add(n),n.then(r,r))}))}}function gs(e,n){var t=n.deletions;if(null!==t)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,l=n,s=l;e:for(;null!==s;){switch(s.tag){case 5:ds=s.stateNode,fs=!1;break e;case 3:case 4:ds=s.stateNode.containerInfo,fs=!0;break e}s=s.return}if(null===ds)throw Error(o(160));hs(i,l,a),ds=null,fs=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(e){Eu(a,n,e)}}if(12854&n.subtreeFlags)for(n=n.child;null!==n;)vs(n,e),n=n.sibling}function vs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(n,e),bs(e),4&r){try{rs(3,e,e.return),as(3,e)}catch(n){Eu(e,e.return,n)}try{rs(5,e,e.return)}catch(n){Eu(e,e.return,n)}}break;case 1:gs(n,e),bs(e),512&r&&null!==t&&es(t,t.return);break;case 5:if(gs(n,e),bs(e),512&r&&null!==t&&es(t,t.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(n){Eu(e,e.return,n)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==t?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(a,i),ye(s,l);var c=ye(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,c)}switch(s){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?te(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?te(a,!!i.multiple,i.defaultValue,!0):te(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(n){Eu(e,e.return,n)}}break;case 6:if(gs(n,e),bs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(n){Eu(e,e.return,n)}}break;case 3:if(gs(n,e),bs(e),4&r&&null!==t&&t.memoizedState.isDehydrated)try{Bn(n.containerInfo)}catch(n){Eu(e,e.return,n)}break;case 4:default:gs(n,e),bs(e);break;case 13:gs(n,e),bs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Ws=Xe())),4&r&&ms(e);break;case 22:if(d=null!==t&&null!==t.memoizedState,1&e.mode?(Xl=(c=Xl)||d,gs(n,e),Xl=c):gs(n,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!=(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:rs(4,p,p.return);break;case 1:es(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,t=p.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(e){Eu(r,t,e)}}break;case 5:es(p,p.return);break;case 22:if(null!==p.memoizedState){ks(f);continue}}null!==h?(h.return=p,Zl=h):ks(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"==typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=null!=(u=f.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(n){Eu(e,e.return,n)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(n){Eu(e,e.return,n)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(n,e),bs(e),4&r&&ms(e);case 21:}}function bs(e){var n=e.flags;if(2&n){try{e:{for(var t=e.return;null!==t;){if(ls(t)){var r=t;break e}t=t.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),cs(e,ss(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;us(e,ss(e),i);break;default:throw Error(o(161))}}catch(n){Eu(e,e.return,n)}e.flags&=-3}4096&n&&(e.flags&=-4097)}function ys(e,n,t){Zl=e,xs(e,n,t)}function xs(e,n,t){for(var r=0!=(1&e.mode);null!==Zl;){var a=Zl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Yl;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Xl;l=Yl;var u=Xl;if(Yl=i,(Xl=s)&&!u)for(Zl=a;null!==Zl;)s=(i=Zl).child,22===i.tag&&null!==i.memoizedState?Ss(a):null!==s?(s.return=i,Zl=s):Ss(a);for(;null!==o;)Zl=o,xs(o,n,t),o=o.sibling;Zl=a,Yl=l,Xl=u}ws(e)}else 0!=(8772&a.subtreeFlags)&&null!==o?(o.return=a,Zl=o):ws(e)}}function ws(e){for(;null!==Zl;){var n=Zl;if(0!=(8772&n.flags)){var t=n.alternate;try{if(0!=(8772&n.flags))switch(n.tag){case 0:case 11:case 15:Xl||as(5,n);break;case 1:var r=n.stateNode;if(4&n.flags&&!Xl)if(null===t)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:vo(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;null!==i&&Do(n,i,r);break;case 3:var l=n.updateQueue;if(null!==l){if(t=null,null!==n.child)switch(n.child.tag){case 5:case 1:t=n.child.stateNode}Do(n,l,t)}break;case 5:var s=n.stateNode;if(null===t&&4&n.flags){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===n.memoizedState){var c=n.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bn(f)}}}break;default:throw Error(o(163))}Xl||512&n.flags&&os(n)}catch(e){Eu(n,n.return,e)}}if(n===e){Zl=null;break}if(null!==(t=n.sibling)){t.return=n.return,Zl=t;break}Zl=n.return}}function ks(e){for(;null!==Zl;){var n=Zl;if(n===e){Zl=null;break}var t=n.sibling;if(null!==t){t.return=n.return,Zl=t;break}Zl=n.return}}function Ss(e){for(;null!==Zl;){var n=Zl;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{as(4,n)}catch(e){Eu(n,t,e)}break;case 1:var r=n.stateNode;if("function"==typeof r.componentDidMount){var a=n.return;try{r.componentDidMount()}catch(e){Eu(n,a,e)}}var o=n.return;try{os(n)}catch(e){Eu(n,o,e)}break;case 5:var i=n.return;try{os(n)}catch(e){Eu(n,i,e)}}}catch(e){Eu(n,n.return,e)}if(n===e){Zl=null;break}var l=n.sibling;if(null!==l){l.return=n.return,Zl=l;break}Zl=n.return}}var js,Es=Math.ceil,Cs=x.ReactCurrentDispatcher,Ns=x.ReactCurrentOwner,Ps=x.ReactCurrentBatchConfig,_s=0,zs=null,Rs=null,Ts=0,Is=0,Ls=ja(0),Os=0,$s=null,Fs=0,As=0,Ds=0,Ms=null,Us=null,Ws=0,Bs=1/0,Hs=null,Vs=!1,Qs=null,qs=null,Ks=!1,Gs=null,Ys=0,Xs=0,Js=null,Zs=-1,eu=0;function nu(){return 0!=(6&_s)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0==(1&e.mode)?1:0!=(2&_s)&&0!==Ts?Ts&-Ts:null!==go.transition?(0===eu&&(eu=gn()),eu):0!==(e=xn)?e:e=void 0===(e=window.event)?16:Xn(e.type)}function ru(e,n,t,r){if(50<Xs)throw Xs=0,Js=null,Error(o(185));bn(e,t,r),0!=(2&_s)&&e===zs||(e===zs&&(0==(2&_s)&&(As|=t),4===Os&&su(e,Ts)),au(e,r),1===t&&0===_s&&0==(1&n.mode)&&(Bs=Xe()+500,Da&&Wa()))}function au(e,n){var t=e.callbackNode;!function(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ln(o),l=1<<i,s=a[i];-1===s?0!=(l&t)&&0==(l&r)||(a[i]=hn(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}(e,n);var r=pn(e,e===zs?Ts:0);if(0===r)null!==t&&Ke(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(null!=t&&Ke(t),1===n)0===e.tag?function(e){Da=!0,Ua(e)}(uu.bind(null,e)):Ua(uu.bind(null,e)),ia((function(){0==(6&_s)&&Wa()})),t=null;else{switch(wn(r)){case 1:t=Ze;break;case 4:t=en;break;case 16:default:t=nn;break;case 536870912:t=rn}t=zu(t,ou.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ou(e,n){if(Zs=-1,eu=0,0!=(6&_s))throw Error(o(327));var t=e.callbackNode;if(Su()&&e.callbackNode!==t)return null;var r=pn(e,e===zs?Ts:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||n)n=vu(e,r);else{n=r;var a=_s;_s|=2;var i=mu();for(zs===e&&Ts===n||(Hs=null,Bs=Xe()+500,pu(e,n));;)try{yu();break}catch(n){hu(e,n)}ko(),Cs.current=i,_s=a,null!==Rs?n=0:(zs=null,Ts=0,n=Os)}if(0!==n){if(2===n&&(0!==(a=mn(e))&&(r=a,n=iu(e,a))),1===n)throw t=$s,pu(e,0),su(e,r),au(e,Xe()),t;if(6===n)su(e,r);else{if(a=e.current.alternate,0==(30&r)&&!function(e){for(var n=e;;){if(16384&n.flags){var t=n.updateQueue;if(null!==t&&null!==(t=t.stores))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(e){return!1}}}if(t=n.child,16384&n.subtreeFlags&&null!==t)t.return=n,n=t;else{if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}(a)&&(2===(n=vu(e,r))&&(0!==(i=mn(e))&&(r=i,n=iu(e,i))),1===n))throw t=$s,pu(e,0),su(e,r),au(e,Xe()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(o(345));case 2:case 5:ku(e,Us,Hs);break;case 3:if(su(e,r),(130023424&r)===r&&10<(n=Ws+500-Xe())){if(0!==pn(e,0))break;if(((a=e.suspendedLanes)&r)!==r){nu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(ku.bind(null,e,Us,Hs),n);break}ku(e,Us,Hs);break;case 4:if(su(e,r),(4194240&r)===r)break;for(n=e.eventTimes,a=-1;0<r;){var l=31-ln(r);i=1<<l,(l=n[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(ku.bind(null,e,Us,Hs),r);break}ku(e,Us,Hs);break;default:throw Error(o(329))}}}return au(e,Xe()),e.callbackNode===t?ou.bind(null,e):null}function iu(e,n){var t=Ms;return e.current.memoizedState.isDehydrated&&(pu(e,n).flags|=256),2!==(e=vu(e,n))&&(n=Us,Us=t,null!==n&&lu(n)),e}function lu(e){null===Us?Us=e:Us.push.apply(Us,e)}function su(e,n){for(n&=~Ds,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ln(n),r=1<<t;e[t]=-1,n&=~r}}function uu(e){if(0!=(6&_s))throw Error(o(327));Su();var n=pn(e,0);if(0==(1&n))return au(e,Xe()),null;var t=vu(e,n);if(0!==e.tag&&2===t){var r=mn(e);0!==r&&(n=r,t=iu(e,r))}if(1===t)throw t=$s,pu(e,0),su(e,n),au(e,Xe()),t;if(6===t)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ku(e,Us,Hs),au(e,Xe()),null}function cu(e,n){var t=_s;_s|=1;try{return e(n)}finally{0===(_s=t)&&(Bs=Xe()+500,Da&&Wa())}}function du(e){null!==Gs&&0===Gs.tag&&0==(6&_s)&&Su();var n=_s;_s|=1;var t=Ps.transition,r=xn;try{if(Ps.transition=null,xn=1,e)return e()}finally{xn=r,Ps.transition=t,0==(6&(_s=n))&&Wa()}}function fu(){Is=Ls.current,Ea(Ls)}function pu(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(-1!==t&&(e.timeoutHandle=-1,aa(t)),null!==Rs)for(t=Rs.return;null!==t;){var r=t;switch(no(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ia();break;case 3:oi(),Ea(_a),Ea(Pa),di();break;case 5:li(r);break;case 4:oi();break;case 13:case 19:Ea(si);break;case 10:So(r.type._context);break;case 22:case 23:fu()}t=t.return}if(zs=e,Rs=e=Lu(e.current,null),Ts=Is=n,Os=0,$s=null,Ds=As=Fs=0,Us=Ms=null,null!==No){for(n=0;n<No.length;n++)if(null!==(r=(t=No[n]).interleaved)){t.interleaved=null;var a=r.next,o=t.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}t.pending=r}No=null}return e}function hu(e,n){for(;;){var t=Rs;try{if(ko(),fi.current=il,bi){for(var r=mi.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}bi=!1}if(hi=0,vi=gi=mi=null,yi=!1,xi=0,Ns.current=null,null===t||null===t.return){Os=1,$s=n,Rs=null;break}e:{var i=e,l=t.return,s=t,u=n;if(n=Ts,s.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=s,f=d.tag;if(0==(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=vl(l);if(null!==h){h.flags&=-257,bl(h,l,s,0,n),1&h.mode&&gl(i,c,n),u=c;var m=(n=h).updateQueue;if(null===m){var g=new Set;g.add(u),n.updateQueue=g}else m.add(u);break e}if(0==(1&n)){gl(i,c,n),gu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=vl(l);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),bl(v,l,s,0,n),mo(cl(u,s));break e}}i=u=cl(u,s),4!==Os&&(Os=2),null===Ms?Ms=[i]:Ms.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n,Fo(i,hl(0,u,n));break e;case 1:s=u;var b=i.type,y=i.stateNode;if(0==(128&i.flags)&&("function"==typeof b.getDerivedStateFromError||null!==y&&"function"==typeof y.componentDidCatch&&(null===qs||!qs.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n,Fo(i,ml(i,s,n));break e}}i=i.return}while(null!==i)}wu(t)}catch(e){n=e,Rs===t&&null!==t&&(Rs=t=t.return);continue}break}}function mu(){var e=Cs.current;return Cs.current=il,null===e?il:e}function gu(){0!==Os&&3!==Os&&2!==Os||(Os=4),null===zs||0==(268435455&Fs)&&0==(268435455&As)||su(zs,Ts)}function vu(e,n){var t=_s;_s|=2;var r=mu();for(zs===e&&Ts===n||(Hs=null,pu(e,n));;)try{bu();break}catch(n){hu(e,n)}if(ko(),_s=t,Cs.current=r,null!==Rs)throw Error(o(261));return zs=null,Ts=0,Os}function bu(){for(;null!==Rs;)xu(Rs)}function yu(){for(;null!==Rs&&!Ge();)xu(Rs)}function xu(e){var n=js(e.alternate,e,Is);e.memoizedProps=e.pendingProps,null===n?wu(e):Rs=n,Ns.current=null}function wu(e){var n=e;do{var t=n.alternate;if(e=n.return,0==(32768&n.flags)){if(null!==(t=Kl(t,n,Is)))return void(Rs=t)}else{if(null!==(t=Gl(t,n)))return t.flags&=32767,void(Rs=t);if(null===e)return Os=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(n=n.sibling))return void(Rs=n);Rs=n=e}while(null!==n);0===Os&&(Os=5)}function ku(e,n,t){var r=xn,a=Ps.transition;try{Ps.transition=null,xn=1,function(e,n,t,r){do{Su()}while(null!==Gs);if(0!=(6&_s))throw Error(o(327));t=e.finishedWork;var a=e.finishedLanes;if(null===t)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(function(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-ln(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}(e,i),e===zs&&(Rs=zs=null,Ts=0),0==(2064&t.subtreeFlags)&&0==(2064&t.flags)||Ks||(Ks=!0,zu(nn,(function(){return Su(),null}))),i=0!=(15990&t.flags),0!=(15990&t.subtreeFlags)||i){i=Ps.transition,Ps.transition=null;var l=xn;xn=1;var s=_s;_s|=4,Ns.current=null,function(e,n){if(ea=Vn,pr(e=fr())){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(r&&0!==r.rangeCount){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch(e){t=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;n:for(;;){for(var h;f!==t||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break n;if(p===t&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}t=-1===s||-1===u?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(na={focusedElem:e,selectionRange:t},Vn=!1,Zl=n;null!==Zl;)if(e=(n=Zl).child,0!=(1028&n.subtreeFlags)&&null!==e)e.return=n,Zl=e;else for(;null!==Zl;){n=Zl;try{var m=n.alternate;if(0!=(1024&n.flags))switch(n.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,b=n.stateNode,y=b.getSnapshotBeforeUpdate(n.elementType===n.type?g:vo(n.type,g),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=n.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(e){Eu(n,n.return,e)}if(null!==(e=n.sibling)){e.return=n.return,Zl=e;break}Zl=n.return}m=ts,ts=!1}(e,t),vs(t,e),hr(na),Vn=!!ea,na=ea=null,e.current=t,ys(t,e,a),Ye(),_s=s,xn=l,Ps.transition=i}else e.current=t;if(Ks&&(Ks=!1,Gs=e,Ys=a),i=e.pendingLanes,0===i&&(qs=null),function(e){if(on&&"function"==typeof on.onCommitFiberRoot)try{on.onCommitFiberRoot(an,e,void 0,128==(128&e.current.flags))}catch(e){}}(t.stateNode),au(e,Xe()),null!==n)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Vs)throw Vs=!1,e=Qs,Qs=null,e;0!=(1&Ys)&&0!==e.tag&&Su(),i=e.pendingLanes,0!=(1&i)?e===Js?Xs++:(Xs=0,Js=e):Xs=0,Wa()}(e,n,t,r)}finally{Ps.transition=a,xn=r}return null}function Su(){if(null!==Gs){var e=wn(Ys),n=Ps.transition,t=xn;try{if(Ps.transition=null,xn=16>e?16:e,null===Gs)var r=!1;else{if(e=Gs,Gs=null,Ys=0,0!=(6&_s))throw Error(o(331));var a=_s;for(_s|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!=(16&Zl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:rs(8,d,i)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(is(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zl=i}}if(0!=(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!=(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:rs(9,i,i.return)}var b=i.sibling;if(null!==b){b.return=i.return,Zl=b;break e}Zl=i.return}}var y=e.current;for(Zl=y;null!==Zl;){var x=(l=Zl).child;if(0!=(2064&l.subtreeFlags)&&null!==x)x.return=l,Zl=x;else e:for(l=y;null!==Zl;){if(0!=(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:as(9,s)}}catch(e){Eu(s,s.return,e)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(_s=a,Wa(),on&&"function"==typeof on.onPostCommitFiberRoot)try{on.onPostCommitFiberRoot(an,e)}catch(e){}r=!0}return r}finally{xn=t,Ps.transition=n}}return!1}function ju(e,n,t){e=Oo(e,n=hl(0,n=cl(t,n),1),1),n=nu(),null!==e&&(bn(e,1,n),au(e,n))}function Eu(e,n,t){if(3===e.tag)ju(e,e,t);else for(;null!==n;){if(3===n.tag){ju(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===qs||!qs.has(r))){n=Oo(n,e=ml(n,e=cl(t,e),1),1),e=nu(),null!==n&&(bn(n,1,e),au(n,e));break}}n=n.return}}function Cu(e,n,t){var r=e.pingCache;null!==r&&r.delete(n),n=nu(),e.pingedLanes|=e.suspendedLanes&t,zs===e&&(Ts&t)===t&&(4===Os||3===Os&&(130023424&Ts)===Ts&&500>Xe()-Ws?pu(e,0):Ds|=t),au(e,n)}function Nu(e,n){0===n&&(0==(1&e.mode)?n=1:(n=dn,0==(130023424&(dn<<=1))&&(dn=4194304)));var t=nu();null!==(e=zo(e,n))&&(bn(e,n,t),au(e,t))}function Pu(e){var n=e.memoizedState,t=0;null!==n&&(t=n.retryLane),Nu(e,t)}function _u(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(n),Nu(e,t)}function zu(e,n){return qe(e,n)}function Ru(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tu(e,n,t,r){return new Ru(e,n,t,r)}function Iu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,n){var t=e.alternate;return null===t?((t=Tu(e.tag,n,e.key,e.mode)).elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=14680064&e.flags,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=null===n?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ou(e,n,t,r,a,i){var l=2;if(r=e,"function"==typeof e)Iu(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case S:return $u(t.children,a,i,n);case j:l=8,a|=8;break;case E:return(e=Tu(12,t,n,2|a)).elementType=E,e.lanes=i,e;case _:return(e=Tu(13,t,n,a)).elementType=_,e.lanes=i,e;case z:return(e=Tu(19,t,n,a)).elementType=z,e.lanes=i,e;case I:return Fu(t,a,i,n);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case N:l=9;break e;case P:l=11;break e;case R:l=14;break e;case T:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(n=Tu(l,t,n,a)).elementType=e,n.type=r,n.lanes=i,n}function $u(e,n,t,r){return(e=Tu(7,e,r,n)).lanes=t,e}function Fu(e,n,t,r){return(e=Tu(22,e,r,n)).elementType=I,e.lanes=t,e.stateNode={isHidden:!1},e}function Au(e,n,t){return(e=Tu(6,e,null,n)).lanes=t,e}function Du(e,n,t){return(n=Tu(4,null!==e.children?e.children:[],e.key,n)).lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Mu(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Uu(e,n,t,r,a,o,i,l,s){return e=new Mu(e,n,t,l,s),1===n?(n=1,!0===o&&(n|=8)):n=0,o=Tu(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},To(o),e}function Wu(e){if(!e)return Na;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ta(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(null!==n);throw Error(o(171))}if(1===e.tag){var t=e.type;if(Ta(t))return Oa(e,t,n)}return n}function Bu(e,n,t,r,a,o,i,l,s){return(e=Uu(t,r,!0,e,0,o,0,l,s)).context=Wu(null),t=e.current,(o=Lo(r=nu(),a=tu(t))).callback=null!=n?n:null,Oo(t,o,a),e.current.lanes=a,bn(e,a,r),au(e,r),e}function Hu(e,n,t,r){var a=n.current,o=nu(),i=tu(a);return t=Wu(t),null===n.context?n.context=t:n.pendingContext=t,(n=Lo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(n.callback=r),null!==(e=Oo(a,n,i))&&(ru(e,a,i,o),$o(e,a,i)),i}function Vu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Qu(e,n){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var t=e.retryLane;e.retryLane=0!==t&&t<n?t:n}}function qu(e,n){Qu(e,n),(e=e.alternate)&&Qu(e,n)}js=function(e,n,t){if(null!==e)if(e.memoizedProps!==n.pendingProps||_a.current)xl=!0;else{if(0==(e.lanes&t)&&0==(128&n.flags))return xl=!1,function(e,n,t){switch(n.tag){case 3:zl(n),ho();break;case 5:ii(n);break;case 1:Ta(n.type)&&$a(n);break;case 4:ai(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;Ca(bo,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=n.memoizedState))return null!==r.dehydrated?(Ca(si,1&si.current),n.flags|=128,null):0!=(t&n.child.childLanes)?Al(e,n,t):(Ca(si,1&si.current),null!==(e=Vl(e,n,t))?e.sibling:null);Ca(si,1&si.current);break;case 19:if(r=0!=(t&n.childLanes),0!=(128&e.flags)){if(r)return Bl(e,n,t);n.flags|=128}if(null!==(a=n.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(si,si.current),r)break;return null;case 22:case 23:return n.lanes=0,El(e,n,t)}return Vl(e,n,t)}(e,n,t);xl=0!=(131072&e.flags)}else xl=!1,ao&&0!=(1048576&n.flags)&&Za(n,Qa,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Hl(e,n),e=n.pendingProps;var a=Ra(n,Pa.current);Eo(n,t),a=ji(null,n,r,e,a,t);var i=Ei();return n.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ta(r)?(i=!0,$a(n)):i=!1,n.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,To(n),a.updater=Wo,n.stateNode=a,a._reactInternals=n,Qo(n,r,e,t),n=_l(null,n,r,!0,i,t)):(n.tag=0,ao&&i&&eo(n),wl(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Hl(e,n),e=n.pendingProps,r=(a=r._init)(r._payload),n.type=r,a=n.tag=function(e){if("function"==typeof e)return Iu(e)?1:0;if(null!=e){if((e=e.$$typeof)===P)return 11;if(e===R)return 14}return 2}(r),e=vo(r,e),a){case 0:n=Nl(null,n,r,e,t);break e;case 1:n=Pl(null,n,r,e,t);break e;case 11:n=kl(null,n,r,e,t);break e;case 14:n=Sl(null,n,r,vo(r.type,e),t);break e}throw Error(o(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,Nl(e,n,r,a=n.elementType===r?a:vo(r,a),t);case 1:return r=n.type,a=n.pendingProps,Pl(e,n,r,a=n.elementType===r?a:vo(r,a),t);case 3:e:{if(zl(n),null===e)throw Error(o(387));r=n.pendingProps,a=(i=n.memoizedState).element,Io(e,n),Ao(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,256&n.flags){n=Rl(e,n,r,t,a=cl(Error(o(423)),n));break e}if(r!==a){n=Rl(e,n,r,t,a=cl(Error(o(424)),n));break e}for(ro=ua(n.stateNode.containerInfo.firstChild),to=n,ao=!0,oo=null,t=Jo(n,null,r,t),n.child=t;t;)t.flags=-3&t.flags|4096,t=t.sibling}else{if(ho(),r===a){n=Vl(e,n,t);break e}wl(e,n,r,t)}n=n.child}return n;case 5:return ii(n),null===e&&uo(n),r=n.type,a=n.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,ta(r,a)?l=null:null!==i&&ta(r,i)&&(n.flags|=32),Cl(e,n),wl(e,n,l,t),n.child;case 6:return null===e&&uo(n),null;case 13:return Al(e,n,t);case 4:return ai(n,n.stateNode.containerInfo),r=n.pendingProps,null===e?n.child=Xo(n,null,r,t):wl(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,kl(e,n,r,a=n.elementType===r?a:vo(r,a),t);case 7:return wl(e,n,n.pendingProps,t),n.child;case 8:case 12:return wl(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,l=a.value,Ca(bo,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!_a.current){n=Vl(e,n,t);break e}}else for(null!==(i=n.child)&&(i.return=n);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Lo(-1,t&-t)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=t,null!==(u=i.alternate)&&(u.lanes|=t),jo(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(10===i.tag)l=i.type===n.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=t,null!==(s=l.alternate)&&(s.lanes|=t),jo(l,t,n),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===n){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}wl(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Eo(n,t),r=r(a=Co(a)),n.flags|=1,wl(e,n,r,t),n.child;case 14:return a=vo(r=n.type,n.pendingProps),Sl(e,n,r,a=vo(r.type,a),t);case 15:return jl(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:vo(r,a),Hl(e,n),n.tag=1,Ta(r)?(e=!0,$a(n)):e=!1,Eo(n,t),Ho(n,r,a),Qo(n,r,a,t),_l(null,n,r,!0,e,t);case 19:return Bl(e,n,t);case 22:return El(e,n,t)}throw Error(o(156,n.tag))};var Ku="function"==typeof reportError?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function ec(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if("function"==typeof a){var l=a;a=function(){var e=Vu(i);l.call(e)}}Hu(n,i,e,a)}else i=function(e,n,t,r,a){if(a){if("function"==typeof r){var o=r;r=function(){var e=Vu(i);o.call(e)}}var i=Bu(n,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=i,e[ha]=i.current,Wr(8===e.nodeType?e.parentNode:e),du(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var l=r;r=function(){var e=Vu(s);l.call(e)}}var s=Uu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,Wr(8===e.nodeType?e.parentNode:e),du((function(){Hu(n,s,t,r)})),s}(t,n,e,a,r);return Vu(i)}Yu.prototype.render=Gu.prototype.render=function(e){var n=this._internalRoot;if(null===n)throw Error(o(409));Hu(e,n,null,null)},Yu.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var n=e.containerInfo;du((function(){Hu(null,e,null,null)})),n[ha]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var n=En();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&0!==n&&n<Ln[t].priority;t++);Ln.splice(t,0,e),0===t&&An(e)}},kn=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=fn(n.pendingLanes);0!==t&&(yn(n,1|t),au(n,Xe()),0==(6&_s)&&(Bs=Xe()+500,Wa()))}break;case 13:du((function(){var n=zo(e,1);if(null!==n){var t=nu();ru(n,e,1,t)}})),qu(e,1)}},Sn=function(e){if(13===e.tag){var n=zo(e,134217728);if(null!==n)ru(n,e,134217728,nu());qu(e,134217728)}},jn=function(e){if(13===e.tag){var n=tu(e),t=zo(e,n);if(null!==t)ru(t,e,n,nu());qu(e,n)}},En=function(){return xn},Cn=function(e,n){var t=xn;try{return xn=e,n()}finally{xn=t}},ke=function(e,n,t){switch(n){case"input":if(J(e,t),n=t.name,"radio"===t.type&&null!=n){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));q(r),J(r,a)}}}break;case"textarea":oe(e,t);break;case"select":null!=(n=t.value)&&te(e,!!t.multiple,n,!1)}},Pe=cu,_e=du;var nc={usingClientEntryPoint:!1,Events:[ya,xa,wa,Ce,Ne,cu]},tc={findFiberByHostInstance:ba,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{an=ac.inject(rc),on=ac}catch(ce){}}n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nc,n.createPortal=function(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(n))throw Error(o(200));return function(e,n,t){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:n,implementation:t}}(e,n,null,t)},n.createRoot=function(e,n){if(!Xu(e))throw Error(o(299));var t=!1,r="",a=Ku;return null!=n&&(!0===n.unstable_strictMode&&(t=!0),void 0!==n.identifierPrefix&&(r=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),n=Uu(e,1,!1,null,0,t,0,r,a),e[ha]=n.current,Wr(8===e.nodeType?e.parentNode:e),new Gu(n)},n.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var n=e._reactInternals;if(void 0===n){if("function"==typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(n))?null:e.stateNode},n.flushSync=function(e){return du(e)},n.hydrate=function(e,n,t){if(!Ju(n))throw Error(o(200));return ec(null,e,n,!0,t)},n.hydrateRoot=function(e,n,t){if(!Xu(e))throw Error(o(405));var r=null!=t&&t.hydratedSources||null,a=!1,i="",l=Ku;if(null!=t&&(!0===t.unstable_strictMode&&(a=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(l=t.onRecoverableError)),n=Bu(n,null,e,1,null!=t?t:null,a,0,i,l),e[ha]=n.current,Wr(e),r)for(e=0;e<r.length;e++)a=(a=(t=r[e])._getVersion)(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Yu(n)},n.render=function(e,n,t){if(!Ju(n))throw Error(o(200));return ec(null,e,n,!1,t)},n.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(o(40));return!!e._reactRootContainer&&(du((function(){ec(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},n.unstable_batchedUpdates=cu,n.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ju(t))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return ec(e,n,t,!1,r)},n.version="18.2.0-next-9e3b772b8-20220608"},745:(e,n,t)=>{"use strict";var r=t(935);n.s=r.createRoot,r.hydrateRoot},935:(e,n,t)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=t(448)},251:(e,n,t)=>{"use strict";var r=t(294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,o={},u=null,c=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!s.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}n.Fragment=o,n.jsx=u,n.jsxs=u},408:(e,n)=>{"use strict";var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}function b(){}function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var a,o={},i=null,l=null;if(null!=n)for(a in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)k.call(n,a)&&!j.hasOwnProperty(a)&&(o[a]=n[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:t,type:e,key:i,ref:l,props:o,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var N=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function _(e,n,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+P(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),_(i,n,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),n.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+P(l=e[u],u);s+=_(l,n,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=_(l=l.value,n,a,c=o+P(l,u++),i);else if("object"===l)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,n,t){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function R(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},L={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};n.Children={map:z,forEach:function(e,n,t){z(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return z(e,(function(){n++})),n},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=a,n.Profiler=i,n.PureComponent=y,n.StrictMode=o,n.Suspense=c,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,l=S.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)k.call(n,u)&&!j.hasOwnProperty(u)&&(a[u]=void 0===n[u]&&void 0!==s?s[u]:n[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:t,type:e.type,key:o,ref:i,props:a,_owner:l}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return T.current.useCallback(e,n)},n.useContext=function(e){return T.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return T.current.useDeferredValue(e)},n.useEffect=function(e,n){return T.current.useEffect(e,n)},n.useId=function(){return T.current.useId()},n.useImperativeHandle=function(e,n,t){return T.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return T.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return T.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return T.current.useMemo(e,n)},n.useReducer=function(e,n,t){return T.current.useReducer(e,n,t)},n.useRef=function(e){return T.current.useRef(e)},n.useState=function(e){return T.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return T.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return T.current.useTransition()},n.version="18.2.0"},294:(e,n,t)=>{"use strict";e.exports=t(408)},893:(e,n,t)=>{"use strict";e.exports=t(251)},53:(e,n)=>{"use strict";function t(e,n){var t=e.length;e.push(n);e:for(;0<t;){var r=t-1>>>1,a=e[r];if(!(0<o(a,n)))break e;e[r]=n,e[t]=a,t=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,t))u<a&&0>o(c,s)?(e[r]=c,e[u]=t,r=u):(e[r]=s,e[l]=t,r=l);else{if(!(u<a&&0>o(c,t)))break e;e[r]=c,e[u]=t,r=u}}}return n}function o(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();n.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"==typeof setTimeout?setTimeout:null,b="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var n=r(c);null!==n;){if(null===n.callback)a(c);else{if(!(n.startTime<=e))break;a(c),n.sortIndex=n.expirationTime,t(u,n)}n=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,I(k);else{var n=r(c);null!==n&&L(w,n.startTime-e)}}function k(e,t){m=!1,g&&(g=!1,b(C),C=-1),h=!0;var o=p;try{for(x(t),f=r(u);null!==f&&(!(f.expirationTime>t)||e&&!_());){var i=f.callback;if("function"==typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=t);t=n.unstable_now(),"function"==typeof l?f.callback=l:f===r(u)&&a(u),x(t)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&L(w,d.startTime-t),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,E=null,C=-1,N=5,P=-1;function _(){return!(n.unstable_now()-P<N)}function z(){if(null!==E){var e=n.unstable_now();P=e;var t=!0;try{t=E(!0,e)}finally{t?S():(j=!1,E=null)}}else j=!1}if("function"==typeof y)S=function(){y(z)};else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,T=R.port2;R.port1.onmessage=z,S=function(){T.postMessage(null)}}else S=function(){v(z,0)};function I(e){E=e,j||(j=!0,S())}function L(e,t){C=v((function(){e(n.unstable_now())}),t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){m||h||(m=!0,I(k))},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return r(u)},n.unstable_next=function(e){switch(p){case 1:case 2:case 3:var n=3;break;default:n=p}var t=p;p=n;try{return e()}finally{p=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=p;p=e;try{return n()}finally{p=t}},n.unstable_scheduleCallback=function(e,a,o){var i=n.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,t(c,e),null===r(u)&&e===r(c)&&(g?(b(C),C=-1):g=!0,L(w,o-i))):(e.sortIndex=l,t(u,e),m||h||(m=!0,I(k))),e},n.unstable_shouldYield=_,n.unstable_wrapCallback=function(e){var n=p;return function(){var t=p;p=n;try{return e.apply(this,arguments)}finally{p=t}}}},840:(e,n,t)=>{"use strict";e.exports=t(53)},774:e=>{e.exports=function(e,n,t,r){var a=t?t.call(r,e,n):void 0;if(void 0!==a)return!!a;if(e===n)return!0;if("object"!=typeof e||!e||"object"!=typeof n||!n)return!1;var o=Object.keys(e),i=Object.keys(n);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=n[u];if(!1===(a=t?t.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},473:e=>{"use strict";var n=function(){};e.exports=n},967:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=i(e,o(t)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)r.call(e,t)&&e[t]&&(n=i(n,t));return n}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null);a.r(o);var i={};e=e||[null,n({}),n([]),n(n)];for(var l=2&r&&t;"object"==typeof l&&!~e.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,a.d(o,i),o},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="./",a.nc=void 0;var o={};return(()=>{"use strict";a.r(o);var e=a(893),n=a(745),t=a(294),r=a.t(t,2);const i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let l;const s=new Uint8Array(16);function u(){if(!l&&(l="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(s)}const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function d(e,n=0){return c[e[n+0]]+c[e[n+1]]+c[e[n+2]]+c[e[n+3]]+"-"+c[e[n+4]]+c[e[n+5]]+"-"+c[e[n+6]]+c[e[n+7]]+"-"+c[e[n+8]]+c[e[n+9]]+"-"+c[e[n+10]]+c[e[n+11]]+c[e[n+12]]+c[e[n+13]]+c[e[n+14]]+c[e[n+15]]}const f=function(e,n,t){if(i.randomUUID&&!n&&!e)return i.randomUUID();const r=(e=e||{}).random||(e.rng||u)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=r[e];return n}return d(r)};function p(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`positive integer expected, not ${e}`)}function h(e,...n){if(!((t=e)instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name))throw new Error("Uint8Array expected");var t;if(n.length>0&&!n.includes(e.length))throw new Error(`Uint8Array expected of length ${n}, not of length=${e.length}`)}function m(e,n=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(n&&e.finished)throw new Error("Hash#digest() has already been called")}function g(e,n){h(e);const t=n.outputLen;if(e.length<t)throw new Error(`digestInto() expects output buffer of length at least ${t}`)}const v="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;const b=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),y=(e,n)=>e<<32-n|e>>>n;new Uint8Array(new Uint32Array([287454020]).buffer)[0];function x(e){return"string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),h(e),e}class w{clone(){return this._cloneInto()}}function k(e){const n=n=>e().update(x(n)).digest(),t=e();return n.outputLen=t.outputLen,n.blockLen=t.blockLen,n.create=()=>e(),n}const S=(e,n,t)=>e&n^~e&t,j=(e,n,t)=>e&n^e&t^n&t;class E extends w{constructor(e,n,t,r){super(),this.blockLen=e,this.outputLen=n,this.padOffset=t,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=b(this.buffer)}update(e){m(this);const{view:n,buffer:t,blockLen:r}=this,a=(e=x(e)).length;for(let o=0;o<a;){const i=Math.min(r-this.pos,a-o);if(i!==r)t.set(e.subarray(o,o+i),this.pos),this.pos+=i,o+=i,this.pos===r&&(this.process(n,0),this.pos=0);else{const n=b(e);for(;r<=a-o;o+=r)this.process(n,o)}}return this.length+=e.length,this.roundClean(),this}digestInto(e){m(this),g(e,this),this.finished=!0;const{buffer:n,view:t,blockLen:r,isLE:a}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(t,0),o=0);for(let e=o;e<r;e++)n[e]=0;!function(e,n,t,r){if("function"==typeof e.setBigUint64)return e.setBigUint64(n,t,r);const a=BigInt(32),o=BigInt(4294967295),i=Number(t>>a&o),l=Number(t&o),s=r?4:0,u=r?0:4;e.setUint32(n+s,i,r),e.setUint32(n+u,l,r)}(t,r-8,BigInt(8*this.length),a),this.process(t,0);const i=b(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const s=l/4,u=this.get();if(s>u.length)throw new Error("_sha2: outputLen bigger than state");for(let e=0;e<s;e++)i.setUint32(4*e,u[e],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const t=e.slice(0,n);return this.destroy(),t}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:t,length:r,finished:a,destroyed:o,pos:i}=this;return e.length=r,e.pos=i,e.finished=a,e.destroyed=o,r%n&&e.buffer.set(t),e}}const C=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),N=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),P=new Uint32Array(64);class _ extends E{constructor(){super(64,32,8,!1),this.A=0|N[0],this.B=0|N[1],this.C=0|N[2],this.D=0|N[3],this.E=0|N[4],this.F=0|N[5],this.G=0|N[6],this.H=0|N[7]}get(){const{A:e,B:n,C:t,D:r,E:a,F:o,G:i,H:l}=this;return[e,n,t,r,a,o,i,l]}set(e,n,t,r,a,o,i,l){this.A=0|e,this.B=0|n,this.C=0|t,this.D=0|r,this.E=0|a,this.F=0|o,this.G=0|i,this.H=0|l}process(e,n){for(let t=0;t<16;t++,n+=4)P[t]=e.getUint32(n,!1);for(let e=16;e<64;e++){const n=P[e-15],t=P[e-2],r=y(n,7)^y(n,18)^n>>>3,a=y(t,17)^y(t,19)^t>>>10;P[e]=a+P[e-7]+r+P[e-16]|0}let{A:t,B:r,C:a,D:o,E:i,F:l,G:s,H:u}=this;for(let e=0;e<64;e++){const n=u+(y(i,6)^y(i,11)^y(i,25))+S(i,l,s)+C[e]+P[e]|0,c=(y(t,2)^y(t,13)^y(t,22))+j(t,r,a)|0;u=s,s=l,l=i,i=o+n|0,o=a,a=r,r=t,t=n+c|0}t=t+this.A|0,r=r+this.B|0,a=a+this.C|0,o=o+this.D|0,i=i+this.E|0,l=l+this.F|0,s=s+this.G|0,u=u+this.H|0,this.set(t,r,a,o,i,l,s,u)}roundClean(){P.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const z=k((()=>new _));function R(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function T(e){return e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name}function I(...e){const n=e=>e,t=(e,n)=>t=>e(n(t)),r=e.map((e=>e.encode)).reduceRight(t,n),a=e.map((e=>e.decode)).reduce(t,n);return{encode:r,decode:a}}function L(e){return{encode:n=>{if(!Array.isArray(n)||n.length&&"number"!=typeof n[0])throw new Error("alphabet.encode input should be an array of numbers");return n.map((n=>{if(R(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]}))},decode:n=>{if(!Array.isArray(n)||n.length&&"string"!=typeof n[0])throw new Error("alphabet.decode input should be array of strings");return n.map((n=>{if("string"!=typeof n)throw new Error(`alphabet.decode: not string element=${n}`);const t=e.indexOf(n);if(-1===t)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return t}))}}}function O(e=""){if("string"!=typeof e)throw new Error("join separator should be string");return{encode:n=>{if(!Array.isArray(n)||n.length&&"string"!=typeof n[0])throw new Error("join.encode input should be array of strings");for(let e of n)if("string"!=typeof e)throw new Error(`join.encode: non-string input=${e}`);return n.join(e)},decode:n=>{if("string"!=typeof n)throw new Error("join.decode input should be string");return n.split(e)}}}function $(e,n="="){if(R(e),"string"!=typeof n)throw new Error("padding chr should be string");return{encode(t){if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw new Error("padding.encode input should be array of strings");for(let e of t)if("string"!=typeof e)throw new Error(`padding.encode: non-string input=${e}`);for(;t.length*e%8;)t.push(n);return t},decode(t){if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw new Error("padding.encode input should be array of strings");for(let e of t)if("string"!=typeof e)throw new Error(`padding.decode: non-string input=${e}`);let r=t.length;if(r*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&t[r-1]===n;r--)if(!((r-1)*e%8))throw new Error("Invalid padding: string has too much padding");return t.slice(0,r)}}}function F(e){if("function"!=typeof e)throw new Error("normalize fn should be function");return{encode:e=>e,decode:n=>e(n)}}function A(e,n,t){if(n<2)throw new Error(`convertRadix: wrong from=${n}, base cannot be less than 2`);if(t<2)throw new Error(`convertRadix: wrong to=${t}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const a=[],o=Array.from(e);for(o.forEach((e=>{if(R(e),e<0||e>=n)throw new Error(`Wrong integer: ${e}`)}));;){let e=0,i=!0;for(let a=r;a<o.length;a++){const l=o[a],s=n*e+l;if(!Number.isSafeInteger(s)||n*e/n!==e||s-l!=n*e)throw new Error("convertRadix: carry overflow");e=s%t;const u=Math.floor(s/t);if(o[a]=u,!Number.isSafeInteger(u)||u*t+e!==s)throw new Error("convertRadix: carry overflow");i&&(u?i=!1:r=a)}if(a.push(e),i)break}for(let n=0;n<e.length-1&&0===e[n];n++)a.push(0);return a.reverse()}const D=(e,n)=>n?D(n,e%n):e,M=(e,n)=>e+(n-D(e,n));function U(e,n,t,r){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(n<=0||n>32)throw new Error(`convertRadix2: wrong from=${n}`);if(t<=0||t>32)throw new Error(`convertRadix2: wrong to=${t}`);if(M(n,t)>32)throw new Error(`convertRadix2: carry overflow from=${n} to=${t} carryBits=${M(n,t)}`);let a=0,o=0;const i=2**t-1,l=[];for(const r of e){if(R(r),r>=2**n)throw new Error(`convertRadix2: invalid data word=${r} from=${n}`);if(a=a<<n|r,o+n>32)throw new Error(`convertRadix2: carry overflow pos=${o} from=${n}`);for(o+=n;o>=t;o-=t)l.push((a>>o-t&i)>>>0);a&=2**o-1}if(a=a<<t-o&i,!r&&o>=n)throw new Error("Excess padding");if(!r&&a)throw new Error(`Non-zero padding: ${a}`);return r&&o>0&&l.push(a>>>0),l}function W(e){return R(e),{encode:n=>{if(!T(n))throw new Error("radix.encode input should be Uint8Array");return A(Array.from(n),256,e)},decode:n=>{if(!Array.isArray(n)||n.length&&"number"!=typeof n[0])throw new Error("radix.decode input should be array of numbers");return Uint8Array.from(A(n,e,256))}}}function B(e,n=!1){if(R(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(M(8,e)>32||M(e,8)>32)throw new Error("radix2: carry overflow");return{encode:t=>{if(!T(t))throw new Error("radix2.encode input should be Uint8Array");return U(Array.from(t),8,e,!n)},decode:t=>{if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw new Error("radix2.decode input should be array of numbers");return Uint8Array.from(U(t,e,8,n))}}}function H(e,n){if(R(e),"function"!=typeof n)throw new Error("checksum fn should be function");return{encode(t){if(!T(t))throw new Error("checksum.encode: input should be Uint8Array");const r=n(t).slice(0,e),a=new Uint8Array(t.length+e);return a.set(t),a.set(r,t.length),a},decode(t){if(!T(t))throw new Error("checksum.decode: input should be Uint8Array");const r=t.slice(0,-e),a=n(r).slice(0,e),o=t.slice(-e);for(let n=0;n<e;n++)if(a[n]!==o[n])throw new Error("Invalid checksum");return r}}}const V={alphabet:L,chain:I,checksum:H,convertRadix:A,convertRadix2:U,radix:W,radix2:B,join:O,padding:$},Q=I(B(4),L("0123456789ABCDEF"),O("")),q=I(B(5),L("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),$(5),O("")),K=(B(5),L("0123456789ABCDEFGHIJKLMNOPQRSTUV"),$(5),O(""),B(5),L("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),O(""),F((e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),I(B(6),L("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),$(6),O(""))),G=(B(6),L("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),O(""),I(B(6),L("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),$(6),O(""))),Y=(B(6),L("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),O(""),e=>I(W(58),L(e),O(""))),X=Y("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),J=[0,2,3,5,6,7,9,10,11],Z={encode(e){let n="";for(let t=0;t<e.length;t+=8){const r=e.subarray(t,t+8);n+=X.encode(r).padStart(J[r.length],"1")}return n},decode(e){let n=[];for(let t=0;t<e.length;t+=11){const r=e.slice(t,t+11),a=J.indexOf(r.length),o=X.decode(r);for(let e=0;e<o.length-a;e++)if(0!==o[e])throw new Error("base58xmr: wrong padding");n=n.concat(Array.from(o.slice(o.length-a)))}return Uint8Array.from(n)}};L("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),O("");const ee={encode:e=>(new TextDecoder).decode(e),decode:e=>(new TextEncoder).encode(e)},ne=(B(4),L("0123456789abcdef"),O(""),F((e=>{if("string"!=typeof e||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),e=>"あいこくしん"===e[0]);function te(e){h(e,16,20,24,28,32)}function re(e,n=128){if(p(n),n%32!=0||n>256)throw new TypeError("Invalid entropy");return function(e,n){te(e);const t=oe(n).encode(e);return t.join(ne(n)?"　":" ")}(function(e=32){if(v&&"function"==typeof v.getRandomValues)return v.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}(n/8),e)}const ae=e=>{const n=8-e.length/4;return new Uint8Array([z(e)[0]>>n<<n])};function oe(e){if(!Array.isArray(e)||2048!==e.length||"string"!=typeof e[0])throw new Error("Wordlist: expected array of 2048 strings");return e.forEach((e=>{if("string"!=typeof e)throw new Error(`Wordlist: non-string element: ${e}`)})),V.chain(V.checksum(1,ae),V.radix2(11,!0),V.alphabet(e))}const ie="abandon\nability\nable\nabout\nabove\nabsent\nabsorb\nabstract\nabsurd\nabuse\naccess\naccident\naccount\naccuse\nachieve\nacid\nacoustic\nacquire\nacross\nact\naction\nactor\nactress\nactual\nadapt\nadd\naddict\naddress\nadjust\nadmit\nadult\nadvance\nadvice\naerobic\naffair\nafford\nafraid\nagain\nage\nagent\nagree\nahead\naim\nair\nairport\naisle\nalarm\nalbum\nalcohol\nalert\nalien\nall\nalley\nallow\nalmost\nalone\nalpha\nalready\nalso\nalter\nalways\namateur\namazing\namong\namount\namused\nanalyst\nanchor\nancient\nanger\nangle\nangry\nanimal\nankle\nannounce\nannual\nanother\nanswer\nantenna\nantique\nanxiety\nany\napart\napology\nappear\napple\napprove\napril\narch\narctic\narea\narena\nargue\narm\narmed\narmor\narmy\naround\narrange\narrest\narrive\narrow\nart\nartefact\nartist\nartwork\nask\naspect\nassault\nasset\nassist\nassume\nasthma\nathlete\natom\nattack\nattend\nattitude\nattract\nauction\naudit\naugust\naunt\nauthor\nauto\nautumn\naverage\navocado\navoid\nawake\naware\naway\nawesome\nawful\nawkward\naxis\nbaby\nbachelor\nbacon\nbadge\nbag\nbalance\nbalcony\nball\nbamboo\nbanana\nbanner\nbar\nbarely\nbargain\nbarrel\nbase\nbasic\nbasket\nbattle\nbeach\nbean\nbeauty\nbecause\nbecome\nbeef\nbefore\nbegin\nbehave\nbehind\nbelieve\nbelow\nbelt\nbench\nbenefit\nbest\nbetray\nbetter\nbetween\nbeyond\nbicycle\nbid\nbike\nbind\nbiology\nbird\nbirth\nbitter\nblack\nblade\nblame\nblanket\nblast\nbleak\nbless\nblind\nblood\nblossom\nblouse\nblue\nblur\nblush\nboard\nboat\nbody\nboil\nbomb\nbone\nbonus\nbook\nboost\nborder\nboring\nborrow\nboss\nbottom\nbounce\nbox\nboy\nbracket\nbrain\nbrand\nbrass\nbrave\nbread\nbreeze\nbrick\nbridge\nbrief\nbright\nbring\nbrisk\nbroccoli\nbroken\nbronze\nbroom\nbrother\nbrown\nbrush\nbubble\nbuddy\nbudget\nbuffalo\nbuild\nbulb\nbulk\nbullet\nbundle\nbunker\nburden\nburger\nburst\nbus\nbusiness\nbusy\nbutter\nbuyer\nbuzz\ncabbage\ncabin\ncable\ncactus\ncage\ncake\ncall\ncalm\ncamera\ncamp\ncan\ncanal\ncancel\ncandy\ncannon\ncanoe\ncanvas\ncanyon\ncapable\ncapital\ncaptain\ncar\ncarbon\ncard\ncargo\ncarpet\ncarry\ncart\ncase\ncash\ncasino\ncastle\ncasual\ncat\ncatalog\ncatch\ncategory\ncattle\ncaught\ncause\ncaution\ncave\nceiling\ncelery\ncement\ncensus\ncentury\ncereal\ncertain\nchair\nchalk\nchampion\nchange\nchaos\nchapter\ncharge\nchase\nchat\ncheap\ncheck\ncheese\nchef\ncherry\nchest\nchicken\nchief\nchild\nchimney\nchoice\nchoose\nchronic\nchuckle\nchunk\nchurn\ncigar\ncinnamon\ncircle\ncitizen\ncity\ncivil\nclaim\nclap\nclarify\nclaw\nclay\nclean\nclerk\nclever\nclick\nclient\ncliff\nclimb\nclinic\nclip\nclock\nclog\nclose\ncloth\ncloud\nclown\nclub\nclump\ncluster\nclutch\ncoach\ncoast\ncoconut\ncode\ncoffee\ncoil\ncoin\ncollect\ncolor\ncolumn\ncombine\ncome\ncomfort\ncomic\ncommon\ncompany\nconcert\nconduct\nconfirm\ncongress\nconnect\nconsider\ncontrol\nconvince\ncook\ncool\ncopper\ncopy\ncoral\ncore\ncorn\ncorrect\ncost\ncotton\ncouch\ncountry\ncouple\ncourse\ncousin\ncover\ncoyote\ncrack\ncradle\ncraft\ncram\ncrane\ncrash\ncrater\ncrawl\ncrazy\ncream\ncredit\ncreek\ncrew\ncricket\ncrime\ncrisp\ncritic\ncrop\ncross\ncrouch\ncrowd\ncrucial\ncruel\ncruise\ncrumble\ncrunch\ncrush\ncry\ncrystal\ncube\nculture\ncup\ncupboard\ncurious\ncurrent\ncurtain\ncurve\ncushion\ncustom\ncute\ncycle\ndad\ndamage\ndamp\ndance\ndanger\ndaring\ndash\ndaughter\ndawn\nday\ndeal\ndebate\ndebris\ndecade\ndecember\ndecide\ndecline\ndecorate\ndecrease\ndeer\ndefense\ndefine\ndefy\ndegree\ndelay\ndeliver\ndemand\ndemise\ndenial\ndentist\ndeny\ndepart\ndepend\ndeposit\ndepth\ndeputy\nderive\ndescribe\ndesert\ndesign\ndesk\ndespair\ndestroy\ndetail\ndetect\ndevelop\ndevice\ndevote\ndiagram\ndial\ndiamond\ndiary\ndice\ndiesel\ndiet\ndiffer\ndigital\ndignity\ndilemma\ndinner\ndinosaur\ndirect\ndirt\ndisagree\ndiscover\ndisease\ndish\ndismiss\ndisorder\ndisplay\ndistance\ndivert\ndivide\ndivorce\ndizzy\ndoctor\ndocument\ndog\ndoll\ndolphin\ndomain\ndonate\ndonkey\ndonor\ndoor\ndose\ndouble\ndove\ndraft\ndragon\ndrama\ndrastic\ndraw\ndream\ndress\ndrift\ndrill\ndrink\ndrip\ndrive\ndrop\ndrum\ndry\nduck\ndumb\ndune\nduring\ndust\ndutch\nduty\ndwarf\ndynamic\neager\neagle\nearly\nearn\nearth\neasily\neast\neasy\necho\necology\neconomy\nedge\nedit\neducate\neffort\negg\neight\neither\nelbow\nelder\nelectric\nelegant\nelement\nelephant\nelevator\nelite\nelse\nembark\nembody\nembrace\nemerge\nemotion\nemploy\nempower\nempty\nenable\nenact\nend\nendless\nendorse\nenemy\nenergy\nenforce\nengage\nengine\nenhance\nenjoy\nenlist\nenough\nenrich\nenroll\nensure\nenter\nentire\nentry\nenvelope\nepisode\nequal\nequip\nera\nerase\nerode\nerosion\nerror\nerupt\nescape\nessay\nessence\nestate\neternal\nethics\nevidence\nevil\nevoke\nevolve\nexact\nexample\nexcess\nexchange\nexcite\nexclude\nexcuse\nexecute\nexercise\nexhaust\nexhibit\nexile\nexist\nexit\nexotic\nexpand\nexpect\nexpire\nexplain\nexpose\nexpress\nextend\nextra\neye\neyebrow\nfabric\nface\nfaculty\nfade\nfaint\nfaith\nfall\nfalse\nfame\nfamily\nfamous\nfan\nfancy\nfantasy\nfarm\nfashion\nfat\nfatal\nfather\nfatigue\nfault\nfavorite\nfeature\nfebruary\nfederal\nfee\nfeed\nfeel\nfemale\nfence\nfestival\nfetch\nfever\nfew\nfiber\nfiction\nfield\nfigure\nfile\nfilm\nfilter\nfinal\nfind\nfine\nfinger\nfinish\nfire\nfirm\nfirst\nfiscal\nfish\nfit\nfitness\nfix\nflag\nflame\nflash\nflat\nflavor\nflee\nflight\nflip\nfloat\nflock\nfloor\nflower\nfluid\nflush\nfly\nfoam\nfocus\nfog\nfoil\nfold\nfollow\nfood\nfoot\nforce\nforest\nforget\nfork\nfortune\nforum\nforward\nfossil\nfoster\nfound\nfox\nfragile\nframe\nfrequent\nfresh\nfriend\nfringe\nfrog\nfront\nfrost\nfrown\nfrozen\nfruit\nfuel\nfun\nfunny\nfurnace\nfury\nfuture\ngadget\ngain\ngalaxy\ngallery\ngame\ngap\ngarage\ngarbage\ngarden\ngarlic\ngarment\ngas\ngasp\ngate\ngather\ngauge\ngaze\ngeneral\ngenius\ngenre\ngentle\ngenuine\ngesture\nghost\ngiant\ngift\ngiggle\nginger\ngiraffe\ngirl\ngive\nglad\nglance\nglare\nglass\nglide\nglimpse\nglobe\ngloom\nglory\nglove\nglow\nglue\ngoat\ngoddess\ngold\ngood\ngoose\ngorilla\ngospel\ngossip\ngovern\ngown\ngrab\ngrace\ngrain\ngrant\ngrape\ngrass\ngravity\ngreat\ngreen\ngrid\ngrief\ngrit\ngrocery\ngroup\ngrow\ngrunt\nguard\nguess\nguide\nguilt\nguitar\ngun\ngym\nhabit\nhair\nhalf\nhammer\nhamster\nhand\nhappy\nharbor\nhard\nharsh\nharvest\nhat\nhave\nhawk\nhazard\nhead\nhealth\nheart\nheavy\nhedgehog\nheight\nhello\nhelmet\nhelp\nhen\nhero\nhidden\nhigh\nhill\nhint\nhip\nhire\nhistory\nhobby\nhockey\nhold\nhole\nholiday\nhollow\nhome\nhoney\nhood\nhope\nhorn\nhorror\nhorse\nhospital\nhost\nhotel\nhour\nhover\nhub\nhuge\nhuman\nhumble\nhumor\nhundred\nhungry\nhunt\nhurdle\nhurry\nhurt\nhusband\nhybrid\nice\nicon\nidea\nidentify\nidle\nignore\nill\nillegal\nillness\nimage\nimitate\nimmense\nimmune\nimpact\nimpose\nimprove\nimpulse\ninch\ninclude\nincome\nincrease\nindex\nindicate\nindoor\nindustry\ninfant\ninflict\ninform\ninhale\ninherit\ninitial\ninject\ninjury\ninmate\ninner\ninnocent\ninput\ninquiry\ninsane\ninsect\ninside\ninspire\ninstall\nintact\ninterest\ninto\ninvest\ninvite\ninvolve\niron\nisland\nisolate\nissue\nitem\nivory\njacket\njaguar\njar\njazz\njealous\njeans\njelly\njewel\njob\njoin\njoke\njourney\njoy\njudge\njuice\njump\njungle\njunior\njunk\njust\nkangaroo\nkeen\nkeep\nketchup\nkey\nkick\nkid\nkidney\nkind\nkingdom\nkiss\nkit\nkitchen\nkite\nkitten\nkiwi\nknee\nknife\nknock\nknow\nlab\nlabel\nlabor\nladder\nlady\nlake\nlamp\nlanguage\nlaptop\nlarge\nlater\nlatin\nlaugh\nlaundry\nlava\nlaw\nlawn\nlawsuit\nlayer\nlazy\nleader\nleaf\nlearn\nleave\nlecture\nleft\nleg\nlegal\nlegend\nleisure\nlemon\nlend\nlength\nlens\nleopard\nlesson\nletter\nlevel\nliar\nliberty\nlibrary\nlicense\nlife\nlift\nlight\nlike\nlimb\nlimit\nlink\nlion\nliquid\nlist\nlittle\nlive\nlizard\nload\nloan\nlobster\nlocal\nlock\nlogic\nlonely\nlong\nloop\nlottery\nloud\nlounge\nlove\nloyal\nlucky\nluggage\nlumber\nlunar\nlunch\nluxury\nlyrics\nmachine\nmad\nmagic\nmagnet\nmaid\nmail\nmain\nmajor\nmake\nmammal\nman\nmanage\nmandate\nmango\nmansion\nmanual\nmaple\nmarble\nmarch\nmargin\nmarine\nmarket\nmarriage\nmask\nmass\nmaster\nmatch\nmaterial\nmath\nmatrix\nmatter\nmaximum\nmaze\nmeadow\nmean\nmeasure\nmeat\nmechanic\nmedal\nmedia\nmelody\nmelt\nmember\nmemory\nmention\nmenu\nmercy\nmerge\nmerit\nmerry\nmesh\nmessage\nmetal\nmethod\nmiddle\nmidnight\nmilk\nmillion\nmimic\nmind\nminimum\nminor\nminute\nmiracle\nmirror\nmisery\nmiss\nmistake\nmix\nmixed\nmixture\nmobile\nmodel\nmodify\nmom\nmoment\nmonitor\nmonkey\nmonster\nmonth\nmoon\nmoral\nmore\nmorning\nmosquito\nmother\nmotion\nmotor\nmountain\nmouse\nmove\nmovie\nmuch\nmuffin\nmule\nmultiply\nmuscle\nmuseum\nmushroom\nmusic\nmust\nmutual\nmyself\nmystery\nmyth\nnaive\nname\nnapkin\nnarrow\nnasty\nnation\nnature\nnear\nneck\nneed\nnegative\nneglect\nneither\nnephew\nnerve\nnest\nnet\nnetwork\nneutral\nnever\nnews\nnext\nnice\nnight\nnoble\nnoise\nnominee\nnoodle\nnormal\nnorth\nnose\nnotable\nnote\nnothing\nnotice\nnovel\nnow\nnuclear\nnumber\nnurse\nnut\noak\nobey\nobject\noblige\nobscure\nobserve\nobtain\nobvious\noccur\nocean\noctober\nodor\noff\noffer\noffice\noften\noil\nokay\nold\nolive\nolympic\nomit\nonce\none\nonion\nonline\nonly\nopen\nopera\nopinion\noppose\noption\norange\norbit\norchard\norder\nordinary\norgan\norient\noriginal\norphan\nostrich\nother\noutdoor\nouter\noutput\noutside\noval\noven\nover\nown\nowner\noxygen\noyster\nozone\npact\npaddle\npage\npair\npalace\npalm\npanda\npanel\npanic\npanther\npaper\nparade\nparent\npark\nparrot\nparty\npass\npatch\npath\npatient\npatrol\npattern\npause\npave\npayment\npeace\npeanut\npear\npeasant\npelican\npen\npenalty\npencil\npeople\npepper\nperfect\npermit\nperson\npet\nphone\nphoto\nphrase\nphysical\npiano\npicnic\npicture\npiece\npig\npigeon\npill\npilot\npink\npioneer\npipe\npistol\npitch\npizza\nplace\nplanet\nplastic\nplate\nplay\nplease\npledge\npluck\nplug\nplunge\npoem\npoet\npoint\npolar\npole\npolice\npond\npony\npool\npopular\nportion\nposition\npossible\npost\npotato\npottery\npoverty\npowder\npower\npractice\npraise\npredict\nprefer\nprepare\npresent\npretty\nprevent\nprice\npride\nprimary\nprint\npriority\nprison\nprivate\nprize\nproblem\nprocess\nproduce\nprofit\nprogram\nproject\npromote\nproof\nproperty\nprosper\nprotect\nproud\nprovide\npublic\npudding\npull\npulp\npulse\npumpkin\npunch\npupil\npuppy\npurchase\npurity\npurpose\npurse\npush\nput\npuzzle\npyramid\nquality\nquantum\nquarter\nquestion\nquick\nquit\nquiz\nquote\nrabbit\nraccoon\nrace\nrack\nradar\nradio\nrail\nrain\nraise\nrally\nramp\nranch\nrandom\nrange\nrapid\nrare\nrate\nrather\nraven\nraw\nrazor\nready\nreal\nreason\nrebel\nrebuild\nrecall\nreceive\nrecipe\nrecord\nrecycle\nreduce\nreflect\nreform\nrefuse\nregion\nregret\nregular\nreject\nrelax\nrelease\nrelief\nrely\nremain\nremember\nremind\nremove\nrender\nrenew\nrent\nreopen\nrepair\nrepeat\nreplace\nreport\nrequire\nrescue\nresemble\nresist\nresource\nresponse\nresult\nretire\nretreat\nreturn\nreunion\nreveal\nreview\nreward\nrhythm\nrib\nribbon\nrice\nrich\nride\nridge\nrifle\nright\nrigid\nring\nriot\nripple\nrisk\nritual\nrival\nriver\nroad\nroast\nrobot\nrobust\nrocket\nromance\nroof\nrookie\nroom\nrose\nrotate\nrough\nround\nroute\nroyal\nrubber\nrude\nrug\nrule\nrun\nrunway\nrural\nsad\nsaddle\nsadness\nsafe\nsail\nsalad\nsalmon\nsalon\nsalt\nsalute\nsame\nsample\nsand\nsatisfy\nsatoshi\nsauce\nsausage\nsave\nsay\nscale\nscan\nscare\nscatter\nscene\nscheme\nschool\nscience\nscissors\nscorpion\nscout\nscrap\nscreen\nscript\nscrub\nsea\nsearch\nseason\nseat\nsecond\nsecret\nsection\nsecurity\nseed\nseek\nsegment\nselect\nsell\nseminar\nsenior\nsense\nsentence\nseries\nservice\nsession\nsettle\nsetup\nseven\nshadow\nshaft\nshallow\nshare\nshed\nshell\nsheriff\nshield\nshift\nshine\nship\nshiver\nshock\nshoe\nshoot\nshop\nshort\nshoulder\nshove\nshrimp\nshrug\nshuffle\nshy\nsibling\nsick\nside\nsiege\nsight\nsign\nsilent\nsilk\nsilly\nsilver\nsimilar\nsimple\nsince\nsing\nsiren\nsister\nsituate\nsix\nsize\nskate\nsketch\nski\nskill\nskin\nskirt\nskull\nslab\nslam\nsleep\nslender\nslice\nslide\nslight\nslim\nslogan\nslot\nslow\nslush\nsmall\nsmart\nsmile\nsmoke\nsmooth\nsnack\nsnake\nsnap\nsniff\nsnow\nsoap\nsoccer\nsocial\nsock\nsoda\nsoft\nsolar\nsoldier\nsolid\nsolution\nsolve\nsomeone\nsong\nsoon\nsorry\nsort\nsoul\nsound\nsoup\nsource\nsouth\nspace\nspare\nspatial\nspawn\nspeak\nspecial\nspeed\nspell\nspend\nsphere\nspice\nspider\nspike\nspin\nspirit\nsplit\nspoil\nsponsor\nspoon\nsport\nspot\nspray\nspread\nspring\nspy\nsquare\nsqueeze\nsquirrel\nstable\nstadium\nstaff\nstage\nstairs\nstamp\nstand\nstart\nstate\nstay\nsteak\nsteel\nstem\nstep\nstereo\nstick\nstill\nsting\nstock\nstomach\nstone\nstool\nstory\nstove\nstrategy\nstreet\nstrike\nstrong\nstruggle\nstudent\nstuff\nstumble\nstyle\nsubject\nsubmit\nsubway\nsuccess\nsuch\nsudden\nsuffer\nsugar\nsuggest\nsuit\nsummer\nsun\nsunny\nsunset\nsuper\nsupply\nsupreme\nsure\nsurface\nsurge\nsurprise\nsurround\nsurvey\nsuspect\nsustain\nswallow\nswamp\nswap\nswarm\nswear\nsweet\nswift\nswim\nswing\nswitch\nsword\nsymbol\nsymptom\nsyrup\nsystem\ntable\ntackle\ntag\ntail\ntalent\ntalk\ntank\ntape\ntarget\ntask\ntaste\ntattoo\ntaxi\nteach\nteam\ntell\nten\ntenant\ntennis\ntent\nterm\ntest\ntext\nthank\nthat\ntheme\nthen\ntheory\nthere\nthey\nthing\nthis\nthought\nthree\nthrive\nthrow\nthumb\nthunder\nticket\ntide\ntiger\ntilt\ntimber\ntime\ntiny\ntip\ntired\ntissue\ntitle\ntoast\ntobacco\ntoday\ntoddler\ntoe\ntogether\ntoilet\ntoken\ntomato\ntomorrow\ntone\ntongue\ntonight\ntool\ntooth\ntop\ntopic\ntopple\ntorch\ntornado\ntortoise\ntoss\ntotal\ntourist\ntoward\ntower\ntown\ntoy\ntrack\ntrade\ntraffic\ntragic\ntrain\ntransfer\ntrap\ntrash\ntravel\ntray\ntreat\ntree\ntrend\ntrial\ntribe\ntrick\ntrigger\ntrim\ntrip\ntrophy\ntrouble\ntruck\ntrue\ntruly\ntrumpet\ntrust\ntruth\ntry\ntube\ntuition\ntumble\ntuna\ntunnel\nturkey\nturn\nturtle\ntwelve\ntwenty\ntwice\ntwin\ntwist\ntwo\ntype\ntypical\nugly\numbrella\nunable\nunaware\nuncle\nuncover\nunder\nundo\nunfair\nunfold\nunhappy\nuniform\nunique\nunit\nuniverse\nunknown\nunlock\nuntil\nunusual\nunveil\nupdate\nupgrade\nuphold\nupon\nupper\nupset\nurban\nurge\nusage\nuse\nused\nuseful\nuseless\nusual\nutility\nvacant\nvacuum\nvague\nvalid\nvalley\nvalve\nvan\nvanish\nvapor\nvarious\nvast\nvault\nvehicle\nvelvet\nvendor\nventure\nvenue\nverb\nverify\nversion\nvery\nvessel\nveteran\nviable\nvibrant\nvicious\nvictory\nvideo\nview\nvillage\nvintage\nviolin\nvirtual\nvirus\nvisa\nvisit\nvisual\nvital\nvivid\nvocal\nvoice\nvoid\nvolcano\nvolume\nvote\nvoyage\nwage\nwagon\nwait\nwalk\nwall\nwalnut\nwant\nwarfare\nwarm\nwarrior\nwash\nwasp\nwaste\nwater\nwave\nway\nwealth\nweapon\nwear\nweasel\nweather\nweb\nwedding\nweekend\nweird\nwelcome\nwest\nwet\nwhale\nwhat\nwheat\nwheel\nwhen\nwhere\nwhip\nwhisper\nwide\nwidth\nwife\nwild\nwill\nwin\nwindow\nwine\nwing\nwink\nwinner\nwinter\nwire\nwisdom\nwise\nwish\nwitness\nwolf\nwoman\nwonder\nwood\nwool\nword\nwork\nworld\nworry\nworth\nwrap\nwreck\nwrestle\nwrist\nwrite\nwrong\nyard\nyear\nyellow\nyou\nyoung\nyouth\nzebra\nzero\nzone\nzoo".split("\n"),le=()=>re(ie),se="https://t.me/DanielGrantMining",ue="https://t.me/DanielGrantMining",ce={btc:{min:.0043,max:.018},eth:{min:.08,max:.44},bnb:{min:.48,max:1.88}},de={btc:{title:"BTC",color:"#F06E25"},eth:{title:"ETH",color:"#36ABFF"},bnb:{title:"BNB",color:"#F0DC25"},sol:{title:"SOL",color:"#F261FF"},trx:{title:"TRX",color:"#FF4141"},xrp:{title:"XRP",color:"#A2A2A2"},doge:{title:"DOGE",color:"#FFED91"},ltc:{title:"LTC",color:"#91CDCD"},ton:{title:"TON",color:"#5DB9FC"}},fe=Object.keys(de),pe=Object.keys(de).map((e=>e.toUpperCase())),he=(e,n)=>`${e.substring(0,n??25)}...`,me=(e,n)=>{const t=e.reduce(((e,t)=>{const r=n[t.coinKey]??0;return e+Number(r)*Number(t.amount)}),0);return t.toFixed(2)};function ge(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(4).toString().replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,"")}const ve=(e,n)=>{const t=1e3*e,r=1e3*n;return Math.floor(Math.random()*(r-t+1))+t},be=()=>Math.floor(48001*Math.random())+24e3,ye=e=>{if(0===e.length)throw new Error("Array cannot be empty");return e[Math.floor(Math.random()*e.length)]},xe=(e,n)=>{if(e>n)throw new Error("min must be less than max");const t=Math.random()*(n-e)+e;return parseFloat(t.toFixed(3))},we={btc:null,eth:null,bnb:null,sol:null,trx:null,xrp:null,doge:null,ltc:null,ton:null},ke={foundTotal:0,foundLastMonth:0,foundCoins:{btc:0,eth:0,bnb:0,sol:0,trx:0,xrp:0,doge:0,ltc:0,ton:0},searchEnabledFor:{btc:!0,eth:!0,bnb:!0,sol:!1,trx:!1,xrp:!1,doge:!1,ltc:!1,ton:!1},checkedTotal:0,foundWallets:[],plannedWallets:[],isDemo:!0,isAdmin:!1,exchangeRate:we,licenceExpiresAt:null,isFakeDashboard:!1,dropRandomWalletAt:null,logs:[],isSearchEnabled:!0},Se=e=>{localStorage.setItem("state",JSON.stringify(e))},je=()=>{const e=localStorage.getItem("state");if(!e){const e=be(),n={...ke,dropRandomWalletAt:e};return Se(n),n}return JSON.parse(e)},Ee=(0,t.createContext)({state:je(),updateState:()=>{},resetState:()=>{},addPlannedWallet:()=>{},addFoundWallet:()=>{},removePlannedWallet:()=>{},removeFoundWallet:()=>{},updateExchangeRate:()=>Promise.resolve(we),search:{logs:[],count:0,isRunning:!1,handleStart:()=>{},handleStop:()=>{}}}),Ce=({children:n})=>{const[r,a]=(0,t.useState)(je()),[o,i]=(0,t.useState)(!1);(0,t.useEffect)((()=>{const e=()=>{i(!1)};return window.addEventListener("offline",e),()=>{window.removeEventListener("offline",e)}}),[]),(0,t.useEffect)((()=>{Se(r)}),[r]);const l=(0,t.useCallback)(((e,n)=>{a((t=>({...t,[e]:n})))}),[a]),s=(0,t.useCallback)((()=>{const e=be(),n={...ke,dropRandomWalletAt:e};a((()=>(Se(n),n)))}),[]),u=async()=>{const e=await(async()=>{const e=await fetch("https://api.coinlore.net/api/tickers/").then((e=>e.json())).catch((e=>console.log(e)));if(e?.data){const n=e.data.filter((e=>pe.includes(e.symbol))),t={...we};return n.forEach((e=>{t[e.symbol.toLowerCase()]=e.price_usd})),t}return null})();return e&&(l("exchangeRate",e),console.log("Rates updated:",e)),e};(0,t.useEffect)((()=>{let e=null;return o&&(e=setInterval((()=>{const e=le(),n=`Balance: # | Wallet: ${he(e,40)}`;a((e=>{const t=(()=>{if(e.dropRandomWalletAt&&Number(e.dropRandomWalletAt)!==e.checkedTotal)return e.foundWallets;const n=Object.entries(e.searchEnabledFor).filter((([,e])=>e)).map((([e])=>e));if(0===n.length)return e.foundWallets;const t=ye(n),{min:r,max:a}=ce[t],o=xe(r,a),i=[...e.foundWallets,{id:f(),coinKey:t,amount:o,phrase:le()}];return u(),i})();let r=[...e.logs,n];return r.length>12&&(r=r.slice(r.length-12)),{...e,checkedTotal:e.checkedTotal+1,foundWallets:t,logs:r}}))}),50)),()=>{e&&clearInterval(e)}}),[o]);const c={state:r,updateState:l,resetState:s,addPlannedWallet:e=>{const n=[...r.plannedWallets,{id:f(),coinKey:e.coinKey,amount:e.amount,trigger:e.trigger}];l("plannedWallets",n)},addFoundWallet:e=>{const n=[...r.foundWallets,{id:f(),coinKey:e.coinKey,amount:e.amount,phrase:le()}];l("foundWallets",n)},removePlannedWallet:e=>{const n=[...r.plannedWallets.filter((n=>n.id!==e))];l("plannedWallets",n)},removeFoundWallet:e=>{const n=[...r.foundWallets.filter((n=>n.id!==e))];l("foundWallets",n)},updateExchangeRate:u,search:{logs:r.logs,count:r.checkedTotal,isRunning:o,handleStart:()=>i(!0),handleStop:()=>i(!1)}};return(0,e.jsx)(Ee.Provider,{value:c,children:n})},Ne=()=>(0,t.useContext)(Ee);function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pe.apply(this,arguments)}var _e;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(_e||(_e={}));function ze(e,n){if(!1===e||null==e)throw new Error(n)}function Re(e,n){if(!e){"undefined"!=typeof console&&console.warn(n);try{throw new Error(n)}catch(e){}}}function Te(e,n,t,r){return void 0===t&&(t=null),Pe({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof n?Le(n):n,{state:t,key:n&&n.key||r||Math.random().toString(36).substr(2,8)})}function Ie(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&"?"!==t&&(n+="?"===t.charAt(0)?t:"?"+t),r&&"#"!==r&&(n+="#"===r.charAt(0)?r:"#"+r),n}function Le(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}var Oe;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Oe||(Oe={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function $e(e,n,t){void 0===t&&(t="/");let r=Ye(("string"==typeof n?Le(n):n).pathname||"/",t);if(null==r)return null;let a=Fe(e);!function(e){e.sort(((e,n)=>e.score!==n.score?n.score-e.score:function(e,n){let t=e.length===n.length&&e.slice(0,-1).every(((e,t)=>e===n[t]));return t?e[e.length-1]-n[n.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),n.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=qe(a[e],Ge(r));return o}function Fe(e,n,t,r){void 0===n&&(n=[]),void 0===t&&(t=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(ze(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=en([r,i.relativePath]),s=t.concat(i);e.children&&e.children.length>0&&(ze(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),Fe(e.children,n,s,l)),(null!=e.path||e.index)&&n.push({path:l,score:Qe(l,e.index),routesMeta:s})};return e.forEach(((e,n)=>{var t;if(""!==e.path&&null!=(t=e.path)&&t.includes("?"))for(let t of Ae(e.path))a(e,n,t);else a(e,n)})),n}function Ae(e){let n=e.split("/");if(0===n.length)return[];let[t,...r]=n,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=Ae(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((n=>e.startsWith("/")&&""===n?"/":n))}const De=/^:\w+$/,Me=3,Ue=2,We=1,Be=10,He=-2,Ve=e=>"*"===e;function Qe(e,n){let t=e.split("/"),r=t.length;return t.some(Ve)&&(r+=He),n&&(r+=Ue),t.filter((e=>!Ve(e))).reduce(((e,n)=>e+(De.test(n)?Me:""===n?We:Be)),r)}function qe(e,n){let{routesMeta:t}=e,r={},a="/",o=[];for(let e=0;e<t.length;++e){let i=t[e],l=e===t.length-1,s="/"===a?n:n.slice(a.length)||"/",u=Ke({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!u)return null;Object.assign(r,u.params);let c=i.route;o.push({params:r,pathname:en([a,u.pathname]),pathnameBase:nn(en([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=en([a,u.pathnameBase]))}return o}function Ke(e,n){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=function(e,n,t){void 0===n&&(n=!1);void 0===t&&(t=!0);Re("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,n)=>(r.push(n),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,n?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,n,t)=>{if("*"===n){let e=l[t]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[n]=function(e,n){try{return decodeURIComponent(e)}catch(t){return Re(!1,'The value for the URL param "'+n+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(l[t]||"",n),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function Ge(e){try{return decodeURI(e)}catch(n){return Re(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}function Ye(e,n){if("/"===n)return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&"/"!==r?null:e.slice(t)||"/"}function Xe(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified `to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+t+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Je(e){return e.filter(((e,n)=>0===n||e.route.path&&e.route.path.length>0))}function Ze(e,n,t,r){let a;void 0===r&&(r=!1),"string"==typeof e?a=Le(e):(a=Pe({},e),ze(!a.pathname||!a.pathname.includes("?"),Xe("?","pathname","search",a)),ze(!a.pathname||!a.pathname.includes("#"),Xe("#","pathname","hash",a)),ze(!a.search||!a.search.includes("#"),Xe("#","search","hash",a)));let o,i=""===e||""===a.pathname,l=i?"/":a.pathname;if(r||null==l)o=t;else{let e=n.length-1;if(l.startsWith("..")){let n=l.split("/");for(;".."===n[0];)n.shift(),e-=1;a.pathname=n.join("/")}o=e>=0?n[e]:"/"}let s=function(e,n){void 0===n&&(n="/");let{pathname:t,search:r="",hash:a=""}="string"==typeof e?Le(e):e,o=t?t.startsWith("/")?t:function(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?t.length>1&&t.pop():"."!==e&&t.push(e)})),t.length>1?t.join("/"):"/"}(t,n):n;return{pathname:o,search:tn(r),hash:rn(a)}}(a,o),u=l&&"/"!==l&&l.endsWith("/"),c=(i||"."===l)&&t.endsWith("/");return s.pathname.endsWith("/")||!u&&!c||(s.pathname+="/"),s}const en=e=>e.join("/").replace(/\/\/+/g,"/"),nn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",rn=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function an(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const on=["post","put","patch","delete"],ln=(new Set(on),["get",...on]);new Set(ln),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function sn(){return sn=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sn.apply(this,arguments)}const un=t.createContext(null);const cn=t.createContext(null);const dn=t.createContext(null);const fn=t.createContext(null);const pn=t.createContext({outlet:null,matches:[],isDataRoute:!1});const hn=t.createContext(null);function mn(){return null!=t.useContext(fn)}function gn(){return mn()||ze(!1),t.useContext(fn).location}function vn(e){t.useContext(dn).static||t.useLayoutEffect(e)}function bn(){let{isDataRoute:e}=t.useContext(pn);return e?function(){let{router:e}=Nn(En.UseNavigateStable),n=_n(Cn.UseNavigateStable),r=t.useRef(!1);return vn((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"==typeof t?e.navigate(t):e.navigate(t,sn({fromRouteId:n},a)))}),[e,n])}():function(){mn()||ze(!1);let e=t.useContext(un),{basename:n,navigator:r}=t.useContext(dn),{matches:a}=t.useContext(pn),{pathname:o}=gn(),i=JSON.stringify(Je(a).map((e=>e.pathnameBase))),l=t.useRef(!1);return vn((()=>{l.current=!0})),t.useCallback((function(t,a){if(void 0===a&&(a={}),!l.current)return;if("number"==typeof t)return void r.go(t);let s=Ze(t,JSON.parse(i),o,"path"===a.relative);null==e&&"/"!==n&&(s.pathname="/"===s.pathname?n:en([n,s.pathname])),(a.replace?r.replace:r.push)(s,a.state,a)}),[n,r,i,o,e])}()}function yn(e,n,r){mn()||ze(!1);let{navigator:a}=t.useContext(dn),{matches:o}=t.useContext(pn),i=o[o.length-1],l=i?i.params:{},s=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let u,c=gn();if(n){var d;let e="string"==typeof n?Le(n):n;"/"===s||(null==(d=e.pathname)?void 0:d.startsWith(s))||ze(!1),u=e}else u=c;let f=u.pathname||"/",p=$e(e,{pathname:"/"===s?f:f.slice(s.length)||"/"});let h=jn(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:en([s,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?s:en([s,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,r);return n&&h?t.createElement(fn.Provider,{value:{location:sn({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:_e.Pop}},h):h}function xn(){let e=function(){var e;let n=t.useContext(hn),r=Pn(Cn.UseRouteError),a=_n(Cn.UseRouteError);if(n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=an(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const wn=t.createElement(xn,null);class kn extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||"idle"!==n.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?t.createElement(pn.Provider,{value:this.props.routeContext},t.createElement(hn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sn(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(un);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(pn.Provider,{value:n},a)}function jn(e,n,r){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),null==e){var o;if(null==(o=r)||!o.errors)return null;e=r.matches}let i=e,l=null==(a=r)?void 0:a.errors;if(null!=l){let e=i.findIndex((e=>e.route.id&&(null==l?void 0:l[e.route.id])));e>=0||ze(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,a,o)=>{let s=a.route.id?null==l?void 0:l[a.route.id]:null,u=null;r&&(u=a.route.errorElement||wn);let c=n.concat(i.slice(0,o+1)),d=()=>{let n;return n=s?u:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(Sn,{match:a,routeContext:{outlet:e,matches:c,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(kn,{location:r.location,revalidation:r.revalidation,component:u,error:s,children:d(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):d()}),null)}var En=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(En||{}),Cn=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cn||{});function Nn(e){let n=t.useContext(un);return n||ze(!1),n}function Pn(e){let n=t.useContext(cn);return n||ze(!1),n}function _n(e){let n=function(e){let n=t.useContext(pn);return n||ze(!1),n}(),r=n.matches[n.matches.length-1];return r.route.id||ze(!1),r.route.id}const zn=r.startTransition;function Rn(e){let{basename:n,children:r,initialEntries:a,initialIndex:o,future:i}=e,l=t.useRef();null==l.current&&(l.current=function(e){void 0===e&&(e={});let n,{initialEntries:t=["/"],initialIndex:r,v5Compat:a=!1}=e;n=t.map(((e,n)=>c(e,"string"==typeof e?null:e.state,0===n?"default":void 0)));let o=s(null==r?n.length-1:r),i=_e.Pop,l=null;function s(e){return Math.min(Math.max(e,0),n.length-1)}function u(){return n[o]}function c(e,t,r){void 0===t&&(t=null);let a=Te(n?u().pathname:"/",e,t,r);return Re("/"===a.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(e)),a}function d(e){return"string"==typeof e?e:Ie(e)}return{get index(){return o},get action(){return i},get location(){return u()},createHref:d,createURL:e=>new URL(d(e),"http://localhost"),encodeLocation(e){let n="string"==typeof e?Le(e):e;return{pathname:n.pathname||"",search:n.search||"",hash:n.hash||""}},push(e,t){i=_e.Push;let r=c(e,t);o+=1,n.splice(o,n.length,r),a&&l&&l({action:i,location:r,delta:1})},replace(e,t){i=_e.Replace;let r=c(e,t);n[o]=r,a&&l&&l({action:i,location:r,delta:0})},go(e){i=_e.Pop;let t=s(o+e),r=n[t];o=t,l&&l({action:i,location:r,delta:e})},listen:e=>(l=e,()=>{l=null})}}({initialEntries:a,initialIndex:o,v5Compat:!0}));let s=l.current,[u,c]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=i||{},f=t.useCallback((e=>{d&&zn?zn((()=>c(e))):c(e)}),[c,d]);return t.useLayoutEffect((()=>s.listen(f)),[s,f]),t.createElement(In,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s})}function Tn(e){ze(!1)}function In(e){let{basename:n="/",children:r=null,location:a,navigationType:o=_e.Pop,navigator:i,static:l=!1}=e;mn()&&ze(!1);let s=n.replace(/^\/*/,"/"),u=t.useMemo((()=>({basename:s,navigator:i,static:l})),[s,i,l]);"string"==typeof a&&(a=Le(a));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:h="default"}=a,m=t.useMemo((()=>{let e=Ye(c,s);return null==e?null:{location:{pathname:e,search:d,hash:f,state:p,key:h},navigationType:o}}),[s,c,d,f,p,h,o]);return null==m?null:t.createElement(dn.Provider,{value:u},t.createElement(fn.Provider,{children:r,value:m}))}function Ln(e){let{children:n,location:t}=e;return function(e,n){return yn(e,n)}(On(n),t)}new Promise((()=>{}));t.Component;function On(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,On(e.props.children,o));e.type!==Tn&&ze(!1),e.props.index&&e.props.children&&ze(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=On(e.props.children,o)),r.push(i)})),r}const $n=()=>{const e=Ne(),n=(0,t.useRef)(null),[r,a]=(0,t.useState)(!0),[o,i]=(0,t.useState)(navigator.onLine),[l,s]=(0,t.useState)(!1),[u,c]=(0,t.useState)(0);return(0,t.useEffect)((()=>()=>{n.current&&clearTimeout(n.current)}),[]),(0,t.useEffect)((()=>{o&&((()=>{const e=ve(3,6);c(e),a(!0),n.current&&clearTimeout(n.current),n.current=setTimeout((()=>{a(!1)}),e)})(),e.updateExchangeRate().then((()=>{console.log("RATES FETCHED")})).catch((()=>{console.log("FAILED TO FETCH RATES")})).finally((()=>{s(!0)})))}),[o]),(0,t.useEffect)((()=>{const e=()=>i(!0),n=()=>i(!1);return window.addEventListener("online",e),window.addEventListener("offline",n),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}}),[]),{isLoading:r,isOnline:o,isRatesFetched:l,randomDelay:u}};var Fn=a(967),An=a.n(Fn);const Dn=["xxl","xl","lg","md","sm","xs"],Mn=t.createContext({prefixes:{},breakpoints:Dn,minBreakpoint:"xs"}),{Consumer:Un,Provider:Wn}=Mn;function Bn(e,n){const{prefixes:r}=(0,t.useContext)(Mn);return e||r[n]||n}function Hn(){const{breakpoints:e}=(0,t.useContext)(Mn);return e}function Vn(){const{minBreakpoint:e}=(0,t.useContext)(Mn);return e}const Qn=t.forwardRef((({bsPrefix:n,className:t,as:r="div",...a},o)=>{const i=Bn(n,"row"),l=Hn(),s=Vn(),u=`${i}-cols`,c=[];return l.forEach((e=>{const n=a[e];let t;delete a[e],null!=n&&"object"==typeof n?({cols:t}=n):t=n;const r=e!==s?`-${e}`:"";null!=t&&c.push(`${u}${r}-${t}`)})),(0,e.jsx)(r,{ref:o,...a,className:An()(t,i,...c)})}));Qn.displayName="Row";const qn=Qn;const Kn=t.forwardRef(((n,t)=>{const[{className:r,...a},{as:o="div",bsPrefix:i,spans:l}]=function({as:e,bsPrefix:n,className:t,...r}){n=Bn(n,"col");const a=Hn(),o=Vn(),i=[],l=[];return a.forEach((e=>{const t=r[e];let a,s,u;delete r[e],"object"==typeof t&&null!=t?({span:a,offset:s,order:u}=t):a=t;const c=e!==o?`-${e}`:"";a&&i.push(!0===a?`${n}${c}`:`${n}${c}-${a}`),null!=u&&l.push(`order${c}-${u}`),null!=s&&l.push(`offset${c}-${s}`)})),[{...r,className:An()(t,...i,...l)},{as:e,bsPrefix:n,spans:i}]}(n);return(0,e.jsx)(o,{...a,ref:t,className:An()(r,!l.length&&i)})}));Kn.displayName="Col";const Gn=Kn;var Yn=function(){return Yn=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},Yn.apply(this,arguments)};Object.create;function Xn(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}Object.create;var Jn=a(774),Zn=a.n(Jn),et="-ms-",nt="-moz-",tt="-webkit-",rt="comm",at="rule",ot="decl",it="@import",lt="@keyframes",st="@layer",ut=Math.abs,ct=String.fromCharCode,dt=Object.assign;function ft(e){return e.trim()}function pt(e,n){return(e=n.exec(e))?e[0]:e}function ht(e,n,t){return e.replace(n,t)}function mt(e,n,t){return e.indexOf(n,t)}function gt(e,n){return 0|e.charCodeAt(n)}function vt(e,n,t){return e.slice(n,t)}function bt(e){return e.length}function yt(e){return e.length}function xt(e,n){return n.push(e),e}function wt(e,n){return e.filter((function(e){return!pt(e,n)}))}var kt=1,St=1,jt=0,Et=0,Ct=0,Nt="";function Pt(e,n,t,r,a,o,i,l){return{value:e,root:n,parent:t,type:r,props:a,children:o,line:kt,column:St,length:i,return:"",siblings:l}}function _t(e,n){return dt(Pt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function zt(e){for(;e.root;)e=_t(e.root,{children:[e]});xt(e,e.siblings)}function Rt(){return Ct=Et>0?gt(Nt,--Et):0,St--,10===Ct&&(St=1,kt--),Ct}function Tt(){return Ct=Et<jt?gt(Nt,Et++):0,St++,10===Ct&&(St=1,kt++),Ct}function It(){return gt(Nt,Et)}function Lt(){return Et}function Ot(e,n){return vt(Nt,e,n)}function $t(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ft(e){return kt=St=1,jt=bt(Nt=e),Et=0,[]}function At(e){return Nt="",e}function Dt(e){return ft(Ot(Et-1,Wt(91===e?e+2:40===e?e+1:e)))}function Mt(e){for(;(Ct=It())&&Ct<33;)Tt();return $t(e)>2||$t(Ct)>3?"":" "}function Ut(e,n){for(;--n&&Tt()&&!(Ct<48||Ct>102||Ct>57&&Ct<65||Ct>70&&Ct<97););return Ot(e,Lt()+(n<6&&32==It()&&32==Tt()))}function Wt(e){for(;Tt();)switch(Ct){case e:return Et;case 34:case 39:34!==e&&39!==e&&Wt(Ct);break;case 40:41===e&&Wt(e);break;case 92:Tt()}return Et}function Bt(e,n){for(;Tt()&&e+Ct!==57&&(e+Ct!==84||47!==It()););return"/*"+Ot(n,Et-1)+"*"+ct(47===e?e:Tt())}function Ht(e){for(;!$t(It());)Tt();return Ot(e,Et)}function Vt(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function Qt(e,n,t,r){switch(e.type){case st:if(e.children.length)break;case it:case ot:return e.return=e.return||e.value;case rt:return"";case lt:return e.return=e.value+"{"+Vt(e.children,r)+"}";case at:if(!bt(e.value=e.props.join(",")))return""}return bt(t=Vt(e.children,r))?e.return=e.value+"{"+t+"}":""}function qt(e,n,t){switch(function(e,n){return 45^gt(e,0)?(((n<<2^gt(e,0))<<2^gt(e,1))<<2^gt(e,2))<<2^gt(e,3):0}(e,n)){case 5103:return tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+e+e;case 4789:return nt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+e+nt+e+et+e+e;case 5936:switch(gt(e,n+11)){case 114:return tt+e+et+ht(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return tt+e+et+ht(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return tt+e+et+ht(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return tt+e+et+e+e;case 6165:return tt+e+et+"flex-"+e+e;case 5187:return tt+e+ht(e,/(\w+).+(:[^]+)/,tt+"box-$1$2"+et+"flex-$1$2")+e;case 5443:return tt+e+et+"flex-item-"+ht(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":et+"grid-row-"+ht(e,/flex-|-self/g,""))+e;case 4675:return tt+e+et+"flex-line-pack"+ht(e,/align-content|flex-|-self/g,"")+e;case 5548:return tt+e+et+ht(e,"shrink","negative")+e;case 5292:return tt+e+et+ht(e,"basis","preferred-size")+e;case 6060:return tt+"box-"+ht(e,"-grow","")+tt+e+et+ht(e,"grow","positive")+e;case 4554:return tt+ht(e,/([^-])(transform)/g,"$1"+tt+"$2")+e;case 6187:return ht(ht(ht(e,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),e,"")+e;case 5495:case 3959:return ht(e,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return ht(ht(e,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+e+e;case 4200:if(!pt(e,/flex-|baseline/))return et+"grid-column-align"+vt(e,n)+e;break;case 2592:case 3360:return et+ht(e,"template-","")+e;case 4384:case 3616:return t&&t.some((function(e,t){return n=t,pt(e.props,/grid-\w+-end/)}))?~mt(e+(t=t[n].value),"span",0)?e:et+ht(e,"-start","")+e+et+"grid-row-span:"+(~mt(t,"span",0)?pt(t,/\d+/):+pt(t,/\d+/)-+pt(e,/\d+/))+";":et+ht(e,"-start","")+e;case 4896:case 4128:return t&&t.some((function(e){return pt(e.props,/grid-\w+-start/)}))?e:et+ht(ht(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ht(e,/(.+)-inline(.+)/,tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-n>6)switch(gt(e,n+1)){case 109:if(45!==gt(e,n+4))break;case 102:return ht(e,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+nt+(108==gt(e,n+3)?"$3":"$2-$3"))+e;case 115:return~mt(e,"stretch",0)?qt(ht(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return ht(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(n,t,r,a,o,i,l){return et+t+":"+r+l+(a?et+t+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===gt(e,n+6))return ht(e,":",":"+tt)+e;break;case 6444:switch(gt(e,45===gt(e,14)?18:11)){case 120:return ht(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(45===gt(e,14)?"inline-":"")+"box$3$1"+tt+"$2$3$1"+et+"$2box$3")+e;case 100:return ht(e,":",":"+et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ht(e,"scroll-","scroll-snap-")+e}return e}function Kt(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case ot:return void(e.return=qt(e.value,e.length,t));case lt:return Vt([_t(e,{value:ht(e.value,"@","@"+tt)})],r);case at:if(e.length)return function(e,n){return e.map(n).join("")}(t=e.props,(function(n){switch(pt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zt(_t(e,{props:[ht(n,/:(read-\w+)/,":"+nt+"$1")]})),zt(_t(e,{props:[n]})),dt(e,{props:wt(t,r)});break;case"::placeholder":zt(_t(e,{props:[ht(n,/:(plac\w+)/,":"+tt+"input-$1")]})),zt(_t(e,{props:[ht(n,/:(plac\w+)/,":"+nt+"$1")]})),zt(_t(e,{props:[ht(n,/:(plac\w+)/,et+"input-$1")]})),zt(_t(e,{props:[n]})),dt(e,{props:wt(t,r)})}return""}))}}function Gt(e){return At(Yt("",null,null,null,[""],e=Ft(e),0,[0],e))}function Yt(e,n,t,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,b=0,y="",x=a,w=o,k=r,S=y;g;)switch(h=b,b=Tt()){case 40:if(108!=h&&58==gt(S,d-1)){-1!=mt(S+=ht(Dt(b),"&","&\f"),"&\f",ut(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=Dt(b);break;case 9:case 10:case 13:case 32:S+=Mt(h);break;case 92:S+=Ut(Lt()-1,7);continue;case 47:switch(It()){case 42:case 47:xt(Jt(Bt(Tt(),Lt()),n,t,s),s);break;default:S+="/"}break;case 123*m:l[u++]=bt(S)*v;case 125*m:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+c:-1==v&&(S=ht(S,/\f/g,"")),p>0&&bt(S)-d&&xt(p>32?Zt(S+";",r,t,d-1,s):Zt(ht(S," ","")+";",r,t,d-2,s),s);break;case 59:S+=";";default:if(xt(k=Xt(S,n,t,u,c,a,l,y,x=[],w=[],d,o),o),123===b)if(0===c)Yt(S,n,k,k,x,o,d,l,w);else switch(99===f&&110===gt(S,3)?100:f){case 100:case 108:case 109:case 115:Yt(e,k,k,r&&xt(Xt(e,k,k,0,0,a,l,y,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:Yt(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,m=v=1,y=S="",d=i;break;case 58:d=1+bt(S),p=h;default:if(m<1)if(123==b)--m;else if(125==b&&0==m++&&125==Rt())continue;switch(S+=ct(b),b*m){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(bt(S)-1)*v,v=1;break;case 64:45===It()&&(S+=Dt(Tt())),f=It(),c=d=bt(y=S+=Ht(Lt())),b++;break;case 45:45===h&&2==bt(S)&&(m=0)}}return o}function Xt(e,n,t,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=yt(p),m=0,g=0,v=0;m<r;++m)for(var b=0,y=vt(e,f+1,f=ut(g=i[m])),x=e;b<h;++b)(x=ft(g>0?p[b]+" "+y:ht(y,/&\f/g,p[b])))&&(s[v++]=x);return Pt(e,n,t,0===a?at:l,s,u,c,d)}function Jt(e,n,t,r){return Pt(e,n,t,rt,ct(Ct),vt(e,2,-2),0,r)}function Zt(e,n,t,r,a){return Pt(e,n,t,ot,vt(e,0,r),vt(e,r+1,-1),r,a)}const er={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var nr="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",tr="active",rr="data-styled-version",ar="6.1.8",or="/*!sc*/\n",ir="undefined"!=typeof window&&"HTMLElement"in window,lr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&("false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY)),sr=(new Set,Object.freeze([])),ur=Object.freeze({});function cr(e,n,t){return void 0===t&&(t=ur),e.theme!==t.theme&&e.theme||n||t.theme}var dr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pr=/(^-|-$)/g;function hr(e){return e.replace(fr,"-").replace(pr,"")}var mr=/(a)(d)/gi,gr=52,vr=function(e){return String.fromCharCode(e+(e>25?39:97))};function br(e){var n,t="";for(n=Math.abs(e);n>gr;n=n/gr|0)t=vr(n%gr)+t;return(vr(n%gr)+t).replace(mr,"$1-$2")}var yr,xr=5381,wr=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},kr=function(e){return wr(xr,e)};function Sr(e){return br(kr(e)>>>0)}function jr(e){return e.displayName||e.name||"Component"}function Er(e){return"string"==typeof e&&!0}var Cr="function"==typeof Symbol&&Symbol.for,Nr=Cr?Symbol.for("react.memo"):60115,Pr=Cr?Symbol.for("react.forward_ref"):60112,_r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Rr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tr=((yr={})[Pr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yr[Nr]=Rr,yr);function Ir(e){return("type"in(n=e)&&n.type.$$typeof)===Nr?Rr:"$$typeof"in e?Tr[e.$$typeof]:_r;var n}var Lr=Object.defineProperty,Or=Object.getOwnPropertyNames,$r=Object.getOwnPropertySymbols,Fr=Object.getOwnPropertyDescriptor,Ar=Object.getPrototypeOf,Dr=Object.prototype;function Mr(e,n,t){if("string"!=typeof n){if(Dr){var r=Ar(n);r&&r!==Dr&&Mr(e,r,t)}var a=Or(n);$r&&(a=a.concat($r(n)));for(var o=Ir(e),i=Ir(n),l=0;l<a.length;++l){var s=a[l];if(!(s in zr||t&&t[s]||i&&s in i||o&&s in o)){var u=Fr(n,s);try{Lr(e,s,u)}catch(e){}}}}return e}function Ur(e){return"function"==typeof e}function Wr(e){return"object"==typeof e&&"styledComponentId"in e}function Br(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Hr(e,n){if(0===e.length)return"";for(var t=e[0],r=1;r<e.length;r++)t+=n?n+e[r]:e[r];return t}function Vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qr(e,n,t){if(void 0===t&&(t=!1),!t&&!Vr(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)e[r]=Qr(e[r],n[r]);else if(Vr(n))for(var r in n)e[r]=Qr(e[r],n[r]);return e}function qr(e,n){Object.defineProperty(e,"toString",{value:n})}function Kr(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Gr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var n=0,t=0;t<e;t++)n+=this.groupSizes[t];return n},e.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var t=this.groupSizes,r=t.length,a=r;e>=a;)if((a<<=1)<0)throw Kr(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(t),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(i,n[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],t=this.indexOfGroup(e),r=t+n;this.groupSizes[e]=0;for(var a=t;a<r;a++)this.tag.deleteRule(t)}},e.prototype.getGroup=function(e){var n="";if(e>=this.length||0===this.groupSizes[e])return n;for(var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t,o=r;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(or);return n},e}(),Yr=new Map,Xr=new Map,Jr=1,Zr=function(e){if(Yr.has(e))return Yr.get(e);for(;Xr.has(Jr);)Jr++;var n=Jr++;return Yr.set(e,n),Xr.set(n,e),n},ea=function(e,n){Jr=n+1,Yr.set(e,n),Xr.set(n,e)},na="style[".concat(nr,"][").concat(rr,'="').concat(ar,'"]'),ta=new RegExp("^".concat(nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ra=function(e,n,t){for(var r,a=t.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(n,r)},aa=function(e,n){for(var t,r=(null!==(t=n.textContent)&&void 0!==t?t:"").split(or),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(ta);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(ea(c,u),ra(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}};function oa(){return a.nc}var ia=function(e){var n=document.head,t=e||n,r=document.createElement("style"),a=function(e){var n=Array.from(e.querySelectorAll("style[".concat(nr,"]")));return n[n.length-1]}(t),o=void 0!==a?a.nextSibling:null;r.setAttribute(nr,tr),r.setAttribute(rr,ar);var i=oa();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},la=function(){function e(e){this.element=ia(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var n=document.styleSheets,t=0,r=n.length;t<r;t++){var a=n[t];if(a.ownerNode===e)return a}throw Kr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},e}(),sa=function(){function e(e){this.element=ia(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var t=document.createTextNode(n);return this.element.insertBefore(t,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ua=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ca=ir,da={isServer:!ir,useCSSOMInjection:!lr},fa=function(){function e(e,n,t){void 0===e&&(e=ur),void 0===n&&(n={});var r=this;this.options=Yn(Yn({},da),e),this.gs=n,this.names=new Map(t),this.server=!!e.isServer,!this.server&&ir&&ca&&(ca=!1,function(e){for(var n=document.querySelectorAll(na),t=0,r=n.length;t<r;t++){var a=n[t];a&&a.getAttribute(nr)!==tr&&(aa(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this)),qr(this,(function(){return function(e){for(var n=e.getTag(),t=n.length,r="",a=function(t){var a=function(e){return Xr.get(e)}(t);if(void 0===a)return"continue";var o=e.names.get(a),i=n.getGroup(t);if(void 0===o||0===i.length)return"continue";var l="".concat(nr,".g").concat(t,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(or)},o=0;o<t;o++)a(o);return r}(r)}))}return e.registerId=function(e){return Zr(e)},e.prototype.reconstructWithOptions=function(n,t){return void 0===t&&(t=!0),new e(Yn(Yn({},this.options),n),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var n=e.useCSSOMInjection,t=e.target;return e.isServer?new ua(t):n?new la(t):new sa(t)}(this.options),new Gr(e)));var e},e.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},e.prototype.registerName=function(e,n){if(Zr(e),this.names.has(e))this.names.get(e).add(n);else{var t=new Set;t.add(n),this.names.set(e,t)}},e.prototype.insertRules=function(e,n,t){this.registerName(e,n),this.getTag().insertRules(Zr(e),t)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Zr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pa=/&/g,ha=/^\s*\/\/.*$/gm;function ma(e,n){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(n," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(n," ")),e.props=e.props.map((function(e){return"".concat(n," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ma(e.children,n)),e}))}function ga(e){var n,t,r,a=void 0===e?ur:e,o=a.options,i=void 0===o?ur:o,l=a.plugins,s=void 0===l?sr:l,u=function(e,r,a){return a.startsWith(t)&&a.endsWith(t)&&a.replaceAll(t,"").length>0?".".concat(n):e},c=s.slice();c.push((function(e){e.type===at&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(pa,t).replace(r,u))})),i.prefix&&c.push(Kt),c.push(Qt);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),n=l,t=a,r=new RegExp("\\".concat(t,"\\b"),"g");var s=e.replace(ha,""),u=Gt(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=ma(u,i.namespace));var d,f,p,h=[];return Vt(u,(d=c.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=yt(d),function(e,n,t,r){for(var a="",o=0;o<f;o++)a+=d[o](e,n,t,r)||"";return a})),h};return d.hash=s.length?s.reduce((function(e,n){return n.name||Kr(15),wr(e,n.name)}),xr).toString():"",d}var va=new fa,ba=ga(),ya=t.createContext({shouldForwardProp:void 0,styleSheet:va,stylis:ba}),xa=(ya.Consumer,t.createContext(void 0));function wa(){return(0,t.useContext)(ya)}function ka(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=wa().styleSheet,i=(0,t.useMemo)((function(){var n=o;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return ga({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Zn()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(ya.Provider,{value:s},t.createElement(xa.Provider,{value:l},e.children))}var Sa=function(){function e(e,n){var t=this;this.inject=function(e,n){void 0===n&&(n=ba);var r=t.name+n.hash;e.hasNameForId(t.id,r)||e.insertRules(t.id,r,n(t.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,qr(this,(function(){throw Kr(12,String(t.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=ba),this.name+e.hash},e}(),ja=function(e){return e>="A"&&e<="Z"};function Ea(e){for(var n="",t=0;t<e.length;t++){var r=e[t];if(1===t&&"-"===r&&"-"===e[0])return e;ja(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var Ca=function(e){return null==e||!1===e||""===e},Na=function(e){var n,t,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Ca(o)&&(Array.isArray(o)&&o.isCss||Ur(o)?r.push("".concat(Ea(a),":"),o,";"):Vr(o)?r.push.apply(r,Xn(Xn(["".concat(a," {")],Na(o),!1),["}"],!1)):r.push("".concat(Ea(a),": ").concat((n=a,null==(t=o)||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||n in er||n.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Pa(e,n,t,r){return Ca(e)?[]:Wr(e)?[".".concat(e.styledComponentId)]:Ur(e)?!Ur(a=e)||a.prototype&&a.prototype.isReactComponent||!n?[e]:Pa(e(n),n,t,r):e instanceof Sa?t?(e.inject(t,r),[e.getName(r)]):[e]:Vr(e)?Na(e):Array.isArray(e)?Array.prototype.concat.apply(sr,e.map((function(e){return Pa(e,n,t,r)}))):[e.toString()];var a}function _a(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(Ur(t)&&!Wr(t))return!1}return!0}var za=kr(ar),Ra=function(){function e(e,n,t){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===t||t.isStatic)&&_a(e),this.componentId=n,this.baseHash=wr(za,n),this.baseStyle=t,fa.registerId(n)}return e.prototype.generateAndInjectStyles=function(e,n,t){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,t):"";if(this.isStatic&&!t.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Br(r,this.staticRulesId);else{var a=Hr(Pa(this.rules,e,n,t)),o=br(wr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var i=t(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,i)}r=Br(r,o),this.staticRulesId=o}else{for(var l=wr(this.baseHash,t.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Hr(Pa(c,e,n,t));l=wr(l,d+u),s+=d}}if(s){var f=br(l>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,t(s,".".concat(f),void 0,this.componentId)),r=Br(r,f)}}return r},e}(),Ta=t.createContext(void 0);Ta.Consumer;var Ia={};new Set;function La(e,n,r){var a=Wr(e),o=e,i=!Er(e),l=n.attrs,s=void 0===l?sr:l,u=n.componentId,c=void 0===u?function(e,n){var t="string"!=typeof e?"sc":hr(e);Ia[t]=(Ia[t]||0)+1;var r="".concat(t,"-").concat(Sr(ar+t+Ia[t]));return n?"".concat(n,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Er(e)?"styled.".concat(e):"Styled(".concat(jr(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(hr(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,n){return g(e,n)&&v(e,n)}}else m=g}var b=new Ra(r,p,a?o.componentStyle:void 0);function y(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(Ta),d=wa(),f=e.shouldForwardProp||d.shouldForwardProp,p=cr(n,c,i)||ur,h=function(e,n,t){for(var r,a=Yn(Yn({},n),{className:void 0,theme:t}),o=0;o<e.length;o+=1){var i=Ur(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?Br(a[l],i[l]):"style"===l?Yn(Yn({},a[l]),i[l]):i[l]}return n.className&&(a.className=Br(a.className,n.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var b=function(e,n){var t=wa();return e.generateAndInjectStyles(n,t.styleSheet,t.stylis)}(o,h),y=Br(l,s);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),g[Er(m)&&!dr.has(m)?"class":"className"]=y,g.ref=r,(0,t.createElement)(m,g)}(x,e,n)}y.displayName=f;var x=t.forwardRef(y);return x.attrs=h,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=a?Br(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];for(var r=0,a=n;r<a.length;r++)Qr(e,a[r],!0);return e}({},o.defaultProps,e):e}}),qr(x,(function(){return".".concat(x.styledComponentId)})),i&&Mr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Oa(e,n){for(var t=[e[0]],r=0,a=n.length;r<a;r+=1)t.push(n[r],e[r+1]);return t}var $a=function(e){return Object.assign(e,{isCss:!0})};function Fa(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(Ur(e)||Vr(e))return $a(Pa(Oa(sr,Xn([e],n,!0))));var r=e;return 0===n.length&&1===r.length&&"string"==typeof r[0]?Pa(r):$a(Pa(Oa(r,n)))}function Aa(e,n,t){if(void 0===t&&(t=ur),!n)throw Kr(1,n);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(n,t,Fa.apply(void 0,Xn([r],a,!1)))};return r.attrs=function(r){return Aa(e,n,Yn(Yn({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Aa(e,n,Yn(Yn({},t),r))},r}var Da=function(e){return Aa(La,e)},Ma=Da;dr.forEach((function(e){Ma[e]=Da(e)}));!function(){function e(e,n){this.rules=e,this.componentId=n,this.isStatic=_a(e),fa.registerId(this.componentId+1)}e.prototype.createStyles=function(e,n,t,r){var a=r(Hr(Pa(this.rules,n,t,r)),""),o=this.componentId+e;t.insertRules(o,o,a)},e.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,n,t,r){e>2&&fa.registerId(this.componentId+e),this.removeStyles(e,t),this.createStyles(e,n,t,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var n=e.instance.toString(),t=oa(),r=Hr([t&&'nonce="'.concat(t,'"'),"".concat(nr,'="true"'),"".concat(rr,'="').concat(ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(n,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Kr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Kr(2);var r=((n={})[nr]="",n[rr]=ar,n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),a=oa();return a&&(r.nonce=a),[t.createElement("style",Yn({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new fa({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Kr(2);return t.createElement(ka,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Kr(3)}})(),"__sc-".concat(nr,"__");const Ua="#121423",Wa="#1E202E",Ba="#017EF6",Ha="#23509E",Va="#424662",Qa="#888991",qa="#1c3734",Ka="#57FF90",Ga="#4B4D58",Ya=Ma.div`
  margin-bottom: 30px;
`,Xa=Ma.div`
  .title {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .subtitle {
    color: ${Qa};
  }
`,Ja=Ma.div``,Za=Ma.div`
  position: relative;
  margin-top: 20px;
  background: ${Wa};
  padding: 10px 20px;
  border-radius: 15px;

  .total {
    user-select: text;
    font-size: 30px;
  }
  .desc {
    color: ${Qa};
  }
  .icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`,eo=Ma.div`
  position: relative;
`,no=Ma.div`
  margin-top: 8px;
  background: ${Wa};
  padding: 10px 20px;
  border-radius: 15px;

  .total {
    user-select: text;
    font-size: 30px;
  }
  .currency {
    margin-left: 5px;
    display: inline-block;
    color: ${e=>e.color};
  }
  .desc {
    color: ${Qa};
  }
`,to=Ma.div`
  display: block;
  width: 10px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span {
    display: block;
    width: 2px;
    background: #57ff90;
  }

  span:nth-child(1) {
    height: 10px;
  }

  span:nth-child(2) {
    height: 15px;
  }

  span:nth-child(3) {
    height: 20px;
  }
`,ro=()=>(0,e.jsxs)(to,{children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}),ao=Ma.span`
  font-size: 9px;
  font-weight: 700;
  background: #ffc700;
  color: #000000;
  padding: 2px 12px;
  height: 18px;
  border-radius: 10px;
  vertical-align: center;
  margin-left: 10px;
`,oo=()=>{return null},io=Ma.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -10px;
  left: 0;
  width: calc(100% + 30px);
  height: 200px;
  background: rgba(18, 20, 35, 0.6);
  transform: translateX(-15px);
`,lo=Ma.div`
  width: 300px;
  height: 76px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: ${Ua};
  background: linear-gradient(to right, rgba(18, 20, 35, 0.5), #121423);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 15px;
    padding: 1px; /* control the border thickness */
    background: linear-gradient(to left, #1e202e, #2c2532, #8e4950);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .title {
    width: 300px;
    height: 76px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      text-align: center;
      color: ${"#8e4950"};
      letter-spacing: 2px;
      font-weight: 900;
      text-transform: uppercase;
    }
  }





// ... [keeping all the existing imports and code until the main component] ...

// Add login validation constants
const validKeys = {
  "B507KjL90wEMgqvHnTyC3rM5XaQ2DbfT8": 0,
  "Vn30pW84dXKoheTZsR9yBm2GaL7JqCt6": 1,
  "R50MkX72vNHpjqYLzE1cWa6UbF3DsnG9": 2,
  "X80QwP63aJVmztBNuL0yCh8KrT2EdgMo": 3,
  "M99ZnR75eOLvpxAWtK3dFy6HbCJguT8Y": 4
};

// Login Page Component
const LoginPage = () => {
  const [activationKey, setActivationKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('checking');

  // Check internet connectivity
  const checkInternetConnection = async () => {
    try {
      const response = await fetch('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache'
      });
      return true;
    } catch (error) {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache'
        });
        return true;
      } catch (error2) {
        return false;
      }
    }
  };

  // Monitor connection status
  const monitorConnection = async () => {
    const online = await checkInternetConnection();
    setIsOnline(online);
    setConnectionStatus(online ? 'online' : 'offline');
  };

  // Handle activation
  const handleActivation = async () => {
    setError('');
    
    if (!isOnline) {
      setError("Internet connection required for activation");
      return;
    }

    const inputKey = activationKey.trim();
    setIsLoading(true);

    // Simulate server verification delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Double-check connection
    const stillOnline = await checkInternetConnection();
    if (!stillOnline) {
      setError("Connection lost during verification. Please try again.");
      setIsLoading(false);
      setIsOnline(false);
      setConnectionStatus('offline');
      return;
    }

    if (inputKey in validKeys) {
      localStorage.setItem('activationKey', inputKey);
      localStorage.setItem('lastOnlineCheck', Date.now().toString());
      localStorage.setItem('isAuthenticated', 'true');
      
      // Trigger app reload to show main interface
      window.location.reload();
    } else {
      setError("Invalid activation key");
      setIsLoading(false);
    }
  };

  // Initialize connection monitoring
  useEffect(() => {
    monitorConnection();
    
    const interval = setInterval(monitorConnection, 5000);
    
    const handleOnline = () => monitorConnection();
    const handleOffline = () => {
      setIsOnline(false);
      setConnectionStatus('offline');
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isOnline && !isLoading) {
      handleActivation();
    }
  };

  return (
    <div style={{
      margin: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      fontFamily: "'Courier New', monospace",
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(90deg, rgba(26, 26, 46, 0.3) 0.5px, transparent 0.5px),
          linear-gradient(0deg, rgba(26, 26, 46, 0.3) 0.5px, transparent 0.5px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(1000px) rotateX(75deg) scale(2.5)',
        transformOrigin: 'center 30%',
        zIndex: -3
      }} />

      {/* Horizon Glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '300px',
        background: `linear-gradient(0deg, 
          rgba(26, 26, 46, 0.6) 0%, 
          rgba(26, 26, 46, 0.3) 40%, 
          transparent 100%)`,
        zIndex: -2
      }} />

      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-10%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(65, 105, 255, 0.08) 0%, rgba(65, 105, 255, 0) 70%)',
        pointerEvents: 'none',
        zIndex: -1
      }} />

      {/* Connection Status */}
      <div style={{
        position: 'fixed',
        top: '25px',
        right: '25px',
        padding: '10px 16px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backdropFilter: 'blur(15px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        opacity: 0.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: connectionStatus === 'online' 
          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))'
          : connectionStatus === 'offline'
          ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15))'
          : 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.15))',
        color: connectionStatus === 'online' ? '#10b981' : connectionStatus === 'offline' ? '#ef4444' : '#f59e0b',
        borderColor: connectionStatus === 'online' 
          ? 'rgba(16, 185, 129, 0.4)' 
          : connectionStatus === 'offline' 
          ? 'rgba(239, 68, 68, 0.4)' 
          : 'rgba(245, 158, 11, 0.4)'
      }}>
        <div style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: connectionStatus === 'online' ? '#10b981' : connectionStatus === 'offline' ? '#ef4444' : '#f59e0b',
          boxShadow: connectionStatus === 'online' 
            ? '0 0 10px rgba(16, 185, 129, 0.6)' 
            : connectionStatus === 'offline' 
            ? '0 0 10px rgba(239, 68, 68, 0.6)' 
            : '0 0 8px rgba(245, 158, 11, 0.6)'
        }} />
        <div style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {connectionStatus === 'online' ? 'Online' : connectionStatus === 'offline' ? 'Offline' : 'Connecting'}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        textAlign: 'center',
        zIndex: 1,
        width: '90%',
        maxWidth: '450px',
        padding: '40px 30px',
        background: 'rgba(16, 16, 24, 0.3)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '30px',
          fontSize: '20px'
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <img src="logo/icon.png" alt="CryptoFactory Logo" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} />
          </div>
          <span style={{
            color: '#4169ff',
            fontWeight: 'bold',
            fontSize: '24px'
          }}>
            CryptoFactory
          </span>
        </div>

        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '8px',
          letterSpacing: '1px',
          color: '#ffffff'
        }}>
          Login to CryptoFactory
        </h1>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '14px',
          marginBottom: '30px',
          fontWeight: 400
        }}>
          Enter your activation key to continue
        </p>

        <input
          type="text"
          value={activationKey}
          onChange={(e) => setActivationKey(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your activation key"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'rgba(26, 26, 46, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            color: 'white',
            fontFamily: "'Courier New', monospace",
            marginBottom: '8px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            boxSizing: 'border-box',
            backdropFilter: 'blur(10px)',
            opacity: isLoading ? 0.6 : 1,
            cursor: isLoading ? 'not-allowed' : 'text'
          }}
        />

        {error && (
          <div style={{
            color: '#ef4444',
            fontSize: '12px',
            fontWeight: '500',
            marginBottom: '20px',
            textAlign: 'center',
            padding: '8px',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            {error}
          </div>
        )}

        <button
          onClick={handleActivation}
          disabled={isLoading || !isOnline}
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '12px',
            border: 'none',
            marginBottom: '12px',
            cursor: (isLoading || !isOnline) ? 'not-allowed' : 'pointer',
            fontFamily: "'Courier New', monospace",
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            position: 'relative',
            zIndex: 10,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: 'linear-gradient(135deg, #4169ff, #3b5bdb)',
            color: 'white',
            opacity: (isLoading || !isOnline) ? 0.6 : 1,
            transform: 'none'
          }}
        >
          {isLoading ? (
            <>
              <span style={{
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '






`,so=()=>(0,e.jsx)(io,{children:(0,e.jsx)(lo,{children:(0,e.jsx)("div",{className:"title",children:(0,e.jsx)("div",{className:"text",children:"Unavailable"})})})}),uo=()=>{const{state:n}=Ne(),{isFakeDashboard:t,foundWallets:r,exchangeRate:a}=n,o=e=>t?n.foundCoins[e]:((e,n)=>{const t=n.filter((n=>n.coinKey===e)),r=t.reduce(((e,n)=>e+n.amount),0);return ge(Number(r))})(e,r);return(0,e.jsxs)("div",{children:[(0,e.jsxs)(Ya,{children:[(0,e.jsxs)(Xa,{children:[(0,e.jsxs)("p",{className:"title",children:[(0,e.jsx)("span",{children:"Dashboard"})," ",(0,e.jsx)(oo,{})]}),(0,e.jsx)("p",{className:"subtitle",children:"Statistics on blockchain discovered"})]}),(0,e.jsx)(Ja,{children:(0,e.jsxs)(qn,{children:[(0,e.jsx)(Gn,{sm:6,children:(0,e.jsxs)(Za,{children:[(0,e.jsxs)("div",{className:"total",children:["$",t?n.foundTotal:me(r,a)]}),(0,e.jsx)("div",{className:"desc",children:"in all the time"}),(0,e.jsx)("div",{className:"icon",children:(0,e.jsx)(ro,{})})]})}),(0,e.jsx)(Gn,{sm:6,children:(0,e.jsxs)(Za,{children:[(0,e.jsxs)("div",{className:"total",children:["$",t?n.foundLastMonth:me(r,a)]}),(0,e.jsx)("div",{className:"desc",children:"in the last 30 days"}),(0,e.jsx)("div",{className:"icon",children:(0,e.jsx)(ro,{})})]})})]})})]}),(0,e.jsxs)(Ya,{children:[(0,e.jsxs)(Xa,{children:[(0,e.jsxs)("p",{className:"title",children:[(0,e.jsx)("span",{children:"Blockchain"})," ",(0,e.jsx)(oo,{})]}),(0,e.jsx)("p",{className:"subtitle",children:"Statistics on specific blockchain"})]}),(0,e.jsxs)(eo,{children:[(0,e.jsx)(qn,{children:Object.entries(de).map((([n,t])=>(0,e.jsx)(Gn,{sm:4,children:(0,e.jsxs)(no,{color:t.color,children:[(0,e.jsxs)("div",{className:"sum-block",children:[(0,e.jsx)("span",{className:"total",children:o(n)||"0.0"}),(0,e.jsx)("span",{className:"currency",children:t.title})]}),(0,e.jsx)("div",{className:"desc",children:"in the last 30 days"})]})},n)))}),]})]})]})},co=Ma.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 30px);
  border-right: 1px solid ${Va};
`,fo=Ma.div`
  padding: 20px;
  background: ${Wa};
  border-bottom: 1px solid ${Va};
  flex: 1;
`,po=Ma.div`
  cursor: pointer;
  margin-bottom: 5px;
  padding: 10px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
    display: block;
    width: 20px;
    height: 20px;
  }

  ${e=>e.active&&`background: ${Ha};`}
`,ho=Ma.div`
  padding: 20px 15px 30px 15px;
`,mo=Ma.div`
  padding: 10px 20px;
  border-radius: 10px;
  background: ${Wa};
  .licence {
    font-weight: 300;
    font-size: 14px;
  }
`,go=Ma.div`
  cursor: pointer;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 15px;
  background: ${Ba};
  color: white;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;const vo=a.p+"883fce7696763c0d0334d6804a8bba75.svg";const bo=a.p+"bd801372d3f6655ab4cbba003160e87d.svg";const yo=a.p+"6503e73945e44b035991e89169bbd591.svg";const xo=a.p+"2290a7db3e269437154ac70840ad88e3.svg",wo=Ma.div`
  position: relative;
  background: linear-gradient(to right, #856c14, rgba(255, 255, 255, 0.05));
  border-radius: 10px;
  padding: 12px 10px;
  font-size: 12px;

  .title {
    margin-bottom: 0px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &::after {
    content: '!';
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    font-family: Arial;
  }
`,ko=()=>(0,e.jsxs)(wo,{children:[(0,e.jsx)("div",{className:"title",children:"Premium Version"}),(0,e.jsxs)("div",{className:"note",children:["Designed & Developed","\n","by ",(0,e.jsx)("strong",{children:"MiningSupreme 2025"})]})]}),So=[{title:"Dashboard",path:"/",icon:(0,e.jsx)("img",{src:vo})},{title:"Search",path:"/search",icon:(0,e.jsx)("img",{src:bo})},{title:"Settings",path:"/settings",icon:(0,e.jsx)("img",{src:yo})},{title:"Support",path:"/support",icon:(0,e.jsx)("img",{src:xo})}],jo=()=>{const{state:n}=Ne(),t=gn(),r=bn();return(0,e.jsxs)(co,{children:[(0,e.jsx)(fo,{children:So.map((n=>(0,e.jsxs)(po,{onClick:()=>r(n.path),active:t.pathname===n.path?1:0,children:[n.icon,(0,e.jsx)("div",{children:n.title})]},n.title)))}),(0,e.jsxs)(ho,{children:[n.isDemo?(0,e.jsx)(ko,{}):(0,e.jsxs)(mo,{children:[(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:n.licenceExpiresAt})}),(0,e.jsx)("p",{className:"licence",children:"licence expires"})]}),(0,e.jsx)(go,{onClick:()=>r("/license"),children:(0,e.jsx)("p",{children:"Upgrade Software"})})]})]})},Eo=Ma.div`
  display: flex;
  border-top: 1px solid ${Va};
`,Co=Ma.div`
  width: 30%;
  max-width: 250px;
  min-width: 200px;
`,No=Ma.div`
  width: 70%;
  flex: 1;
  padding: 20px;
`,Po=({children:n})=>(0,e.jsxs)(Eo,{children:[(0,e.jsx)(Co,{children:(0,e.jsx)(jo,{})}),(0,e.jsx)(No,{children:n})]});const _o=a.p+"0e98f23ea1191699df6d.png",zo=Ma.div`
  position: relative;
  border-top: 1px solid ${Va};
  background: url(${_o});
  width: 100vw;
  height: 100vh;
`,Ro=Ma.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,To=Ma.div`
  font-size: 28px;
  text-align: center;
`,Io=Ma.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 200px;

  .link {
    cursor: pointer;
    text-decoration: underline;
    color: #017ef6;
  }
`,Lo=Ma.div`
  margin-top: 20px;
  padding: 10px 15px;
  background: #3d3e4b;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  font-weight: 300;

  .main {
    font-weight: 700;
  }
`,Oo=Ma.a`
  cursor: pointer;
  padding: 10px 20px 10px 15px;
  background: #29b6f660;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;

  img {
    display: block;
    margin-right: 5px;
    width: 25px;
  }
`,$o=Ma.div`
  margin-top: 15px;
  position: relative;
  background: #42151f;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 300;

  strong {
    font-weight: 700;
  }

  &::after {
    content: '!';
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    font-family: Arial;
  }
`,Fo=Ma.div`
  margin-top: 50px;
  padding: 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ao=Ma.div`
  width: 100%;
`,Do=Ma.input`
  width: 100%;
  padding: 10px 90px;
  font-size: 30px;
  border: 1px solid #41424e;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-weight: 300;
  font-family: monospace;
  background: #88899130;
  backdrop-filter: blur(5px);
  color: #ffffff;

  &:focus {
    outline: none;
    // border-color: #007bff;
    // box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    color: #757575;
  }
`,Mo=Ma.div`
  margin-top: 15px;
  padding: 20px 15px;
  border-radius: 15px;
  font-size: 16px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  cursor: ${e=>e.isDisabled||e.isLoading?"default":"pointer"};
  background: ${e=>e.isDisabled?"#4e4f5a":Ba};
  color: ${e=>e.isDisabled?"#979797":"#ffffff"};

  img {
    margin-left: 10px;
    display: inline-block;
    width: 18px;
  }

  .spinner {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid #fff; /* Light border */
    border-top: 2px solid rgba(0, 0, 0, 0); /* Darker border to show spinning */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Uo=Ma.div`
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  opacity: ${e=>e.isDisabled?.3:1};
  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2a2c39;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: ' ';
    height: 25px;
    width: 2px;
    background-color: #94959d;
  }
  &::before {
    transform: translateY(-50%) translateX(-50%) rotate(45deg);
  }
  &::after {
    transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  }
`;const Wo=a.p+"cd06109ca369ce9ae6831fda1d697dda.svg",Bo=Ma.div`
  position: fixed;
  bottom: ${e=>e.visible?"0":"-100px"}; /* Adjust the hide position */
  left: 0;
  width: 100%;
  background-color: #e34234;
  color: #fff;
  padding: 16px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  transition: bottom 0.3s ease-in-out; /* Smooth sliding transition */
  z-index: 1000; /* Ensure it is above other content */
`,Ho=({visible:n})=>(0,e.jsxs)(Bo,{visible:n,children:[(0,e.jsx)("strong",{children:"Invalid license key. "})," Ensure the key is entered correctly. If the problem persists, contact support."]}),Vo=()=>{const n=bn(),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1),u=19!==r.length,c=async()=>{i(!0);const e=ve(4,7);await new Promise((n=>setTimeout(n,e))),i(!1),a(""),s(!0),setTimeout((()=>{s(!1)}),5e3)};return(0,e.jsxs)(zo,{children:[(0,e.jsx)(Uo,{onClick:()=>{o||n(-1)},isDisabled:o}),(0,e.jsxs)(Ro,{children:[(0,e.jsx)(To,{children:"Set Up License Key"}),(0,e.jsxs)(Io,{children:[(0,e.jsxs)(Lo,{children:[(0,e.jsxs)("div",{className:"text",children:[(0,e.jsx)("p",{className:"main",children:"To BUY the upgrade license key follow the link:"}),(0,e.jsxs)("p",{children:[(0,e.jsx)("a",{className:"link",href:ue,target:"_blank",rel:"noopener noreferrer",children:se})," ","or click on the redirect button."]})]}),(0,e.jsxs)(Oo,{href:ue,target:"_blank",rel:"noopener noreferrer",children:[(0,e.jsx)("img",{src:Wo})," ",(0,e.jsx)("div",{children:"Open Telegram"})]})]}),(0,e.jsxs)($o,{children:[(0,e.jsx)("strong",{children:"Our project is not responsible for any payments made to third-party services or interactions"})," ","with unofficial pages. Please use only our verified channel for communication at"," ",(0,e.jsx)("a",{className:"link",href:ue,target:"_blank",rel:"noopener noreferrer",children:se}),"."]})]}),(0,e.jsxs)(Fo,{children:[(0,e.jsx)(Ao,{children:(0,e.jsx)(Do,{type:"text",value:r,onChange:e=>{if(o)return;const n=(e=>{const n=e.replace(/[^a-zA-Z0-9]/g,"").match(/.{1,4}/g);return n?n.join("-"):""})(e.target.value);a(n)},placeholder:"xxxx-xxxx-xxxx-xxxx",maxLength:19,spellCheck:"false",disabled:o})}),(0,e.jsxs)(Mo,{isDisabled:u,isLoading:o,onClick:()=>{o||u||c()},children:[(0,e.jsx)("span",{children:"Activate License Key"}),o&&(0,e.jsx)("span",{className:"spinner"})]})]})]}),(0,e.jsx)(Ho,{visible:l})]})},Qo=()=>(0,e.jsx)(Vo,{}),qo=a.p+"b070e4e1d92f56a8f024.png",Ko=a.p+"b33d26633681e8503076.png",Go=a.p+"20d18318b730d1abeb7b.png",Yo=a.p+"adc2a72fb3e868bf5bc8.png",Xo=a.p+"b8e349782657d94b0794.png",Jo=a.p+"f384b3eb718c45f54609.png",Zo=a.p+"3b0047c675e42b83b99c.png",ei=a.p+"7b6e2e04263b758df702.png",ni=a.p+"caf833e802b9c2ae2c4b.png",ti=Ma.div`
  position: relative;
`,ri=Ma.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`,ai=Ma.div`
  display: flex;
  flex-wrap: nowrap;
`,oi=Ma.div`
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0 15px 0;
  min-width: 120px;
  margin-right: 10px;
  background: ${e=>e.active?qa:Wa};
  border-radius: 10px;

  .title {
    margin-top: 10px;
    color: ${e=>e.active?Ka:Ga};
  }

  .marker {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e=>e.active?"#4a5f5d":"#4b4d58"};

    span {
      display: block;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      background: ${e=>e.active?Ka:"#363636"};
    }
  }
`,ii=Ma.img`
  display: block;
  width: 36px;
  height: 36px;
`,li=Ma.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 50px;
  background: ${Ua};
  z-index: 4;

  &::after {
    content: '';
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-left: 0;
    border-bottom: 0;
    z-index: 5;
  }

  @media (min-width: 1550px) {
    display: none;
  }
`,si=Ma(li)`
  right: 0;

  // for disabled button
  cursor: ${e=>e.disabled?"default":"pointer"};

  &::after {
    transform: translate(-50%, 50%) rotate(45deg);

    // for disabled button
    opacity: ${e=>e.disabled?"0.3":"1"};
  }

  // to fill space for unavailable banner
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;
    width: 20px;
    height: 100%;
    background-color: ${Ua};
  }
`,ui=Ma(li)`
  left: 0;

  &::after {
    transform: translate(-50%, 50%) rotate(-135deg);
  }
`,ci=Ma.div`
  position: absolute;
  top: 0;
  right: -390px;
  width: 100%;
  height: 100px;
  z-index: 3;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    rgba(18, 20, 35, 0.5),
    #121423,
    #121423,
    #121423
  );

  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 1px; /* control the border thickness */
    background: linear-gradient(to left, #1e202e, #2c2532, #2c2532, #8e4950);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .text {
    text-align: center;
    color: #8e4950;
    letter-spacing: 2px;
    font-weight: 900;
    text-transform: uppercase;
  }
`,di=()=>(0,e.jsx)(ci,{children:(0,e.jsx)("div",{className:"text",children:"Unavailable"})}),fi={btc:qo,bnb:Ko,doge:Go,eth:Yo,ltc:Xo,sol:Jo,ton:Zo,trx:ei,xrp:ni},pi=()=>{const n=(0,t.useRef)(null),[r,a]=(0,t.useState)(!1),{state:o,updateState:i,search:{isRunning:l}}=Ne(),{isDemo:s}=o;return(0,e.jsxs)(ti,{children:[r&&(0,e.jsx)(ui,{onClick:()=>{s||n.current&&(n.current.scrollTo({left:0,behavior:"smooth"}),a(!1))}}),!r&&(0,e.jsx)(si,{onClick:()=>{s||n.current&&(n.current.scrollTo({left:n.current.scrollWidth,behavior:"smooth"}),a(!0))},disabled:s}),(0,e.jsx)(ri,{ref:n,children:(0,e.jsx)(ai,{children:Object.entries(de).map((([n,t])=>{const r=o.searchEnabledFor[n]?1:0;return(0,e.jsxs)(oi,{active:r,disabled:l,onClick:()=>(e=>{if(l)return;const n={...o.searchEnabledFor,[e]:!o.searchEnabledFor[e]};i("searchEnabledFor",n)})(n),children:[(0,e.jsx)(ii,{src:fi[n]}),(0,e.jsx)("p",{className:"title",children:t.title}),(0,e.jsx)("div",{className:"marker",children:(0,e.jsx)("span",{})})]},n)}))})})]})},hi=Ma.div``,mi=Ma.div`
  background: ${Wa};
  padding: 12px;
  border-radius: 15px;
`,gi=Ma.div`
  font-size: 18px;
  margin-bottom: 10px;
`,vi=Ma.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`,bi=Ma.button`
  margin-top: 10px;
  height: 45px;
  font-size: 18px;
  text-transform: uppercase;
  flex: 1;
  border: none;
  border-radius: 5px;
  color: #fff;

  &:disabled {
    opacity: 0.5;
    color: #d4d4d4;
  }

  &.stop {
    background: #8f1017;
  }

  &.search {
    background: #089aa6;
  }

  &.withdraw {
    background: #0072e4;
  }
`,yi=Ma.div`
  position: relative;
  height: 300px;
  background: ${Ua};
  font-family: monospace;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 10px;

  .terminal-body {
    padding: 10px;
    overflow: hidden;
  }

  .terminal-log {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    padding: 1px 0;
    color: #bb77ff; /* Change the color to your liking */
  }
`,xi=Ma.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: content-box;
  border-radius: 10px;

  .text {
    margin-left: 10px;
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.1;
    z-index: 1;
    box-sizing: border-box;
  }
`,wi=Ma.img`
  display: block;
  width: 25px;
  height: 25px;
  z-index: 2;
`,ki=Ma.div`
  height: 300px;
  background: ${Ua};
  font-family: monospace;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
`,Si=Ma.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #12142370;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`,ji=Ma.div`
  position: relative;
  background-color: #ffffff20;
  padding: 30px 20px;
  width: 250px;
  border-radius: 10px;
  text-align: center;

  .title {
    font-size: 18px;
    font-weight: 700;
  }

  .upgrade {
    margin-top: 15px;

    span {
      cursor: pointer;
      text-decoration: underline;
      color: #017ef6;
    }
  }

  &::after {
    content: '!';
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    font-family: Arial;
  }
`,Ei=()=>{return null},Ci=({onModalOpen:n})=>{const{state:r,search:a}=Ne(),{logs:o,count:i,handleStart:l,handleStop:s,isRunning:u}=a,c=(0,t.useRef)(null),[d,f]=(0,t.useState)(null),p=Object.values(r.searchEnabledFor).some((e=>e));(0,t.useEffect)((()=>{r.foundWallets.length>0&&s(),!d&&r.foundWallets.length>0&&f(r.foundWallets[0].id)}),[r.foundWallets]);const h=r.foundWallets.length>0;return(0,e.jsx)(hi,{children:(0,e.jsxs)(qn,{children:[(0,e.jsx)(Gn,{sm:6,style:{paddingRight:"5px"},children:(0,e.jsxs)(mi,{children:[(0,e.jsxs)(gi,{children:["Checked: ",i]}),(0,e.jsxs)(yi,{children:[(0,e.jsxs)("div",{className:"terminal-body",children:[o.map((n=>(0,e.jsx)("div",{className:"terminal-log",children:n},n))),(0,e.jsx)("div",{ref:c})]})]}),(0,e.jsxs)(vi,{children:[(0,e.jsx)(bi,{className:"stop",disabled:!u,onClick:s,children:"Stop"}),(0,e.jsx)(bi,{className:"search",disabled:u||!p||h,onClick:l,children:"Search"})]})]})}),(0,e.jsx)(Gn,{sm:6,style:{paddingLeft:"5px"},children:(0,e.jsxs)(mi,{children:[(0,e.jsxs)(gi,{children:["Found: ",r.foundWallets.length]}),(0,e.jsx)(ki,{children:r.foundWallets.map((n=>{const t=n.id===d,a=de[n.coinKey],o=((e,n,t)=>{const r=e[n];return r?`≈ ${(Number(r)*Number(t)).toFixed(2)}$`:""})(r.exchangeRate,n.coinKey,n.amount);return(0,e.jsxs)(xi,{onClick:()=>{return e=n.id,void f(e);var e},style:{...t?{border:`1px solid ${a.color}80`}:{}},children:[(0,e.jsx)(wi,{src:fi[n.coinKey]}),(0,e.jsx)("p",{className:"text",style:{color:a.color},children:`${ge(n.amount)} ${a.title} ${o} | ${he(n.phrase)}`}),(0,e.jsx)("div",{className:"bg",style:{background:a.color}})]},n.id)}))}),(0,e.jsx)(vi,{children:(0,e.jsx)(bi,{className:"withdraw",disabled:!d,onClick:()=>{d&&n(d)},children:"Withdraw"})})]})})]})})},Ni=Ma.div`
  position: relative;
`,Pi=Ma.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 30px);
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(18, 20, 35, 0.75);
  z-index: 25;
  transform: translate(-15px, -15px);
  display: flex;
  justify-content: center;
  align-items: center;
`,_i=({children:n})=>(0,e.jsx)(Pi,{children:n}),zi=Ma.div`
  position: relative;
  background: ${Wa};
  border-radius: 15px;
  width: 650px;
  padding: 30px 30px;
  margin-bottom: 60px;
`,Ri=Ma.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`,Ti=Ma.div``,Ii=Ma.div`
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px;
  background: #2f3443;

  ${e=>e.isHidden?"filter: blur(5px);":""}

  .order {
    display: inline-block;
    font-size: 14px;
    margin-right: 10px;
    user-select: ${e=>e.isHidden?"none":"text"};
  }

  .word {
    user-select: text;
    font-weight: 700;
    user-select: ${e=>e.isHidden?"none":"text"};
  }
`,Li=Ma.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 15px;
  width: 25px;
  height: 25px;

  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 26px;
    width: 2px;
    background-color: #4b4d58;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`,Oi=Ma.div`
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  background: #017ef6;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  img {
    margin-left: 10px;
    display: inline-block;
    width: 18px;
  }

  // disabled styles
  background: #4e4f5a;
  color: #979797;
`,$i=Ma.div`
  margin-top: 20px;
  position: relative;
  background: #3b3628;
  border-radius: 10px;
  padding: 12px 10px;
  font-size: 14px;

  .title {
    margin-bottom: 0px;
    font-weight: 700;

    img {
      display: inline-block;
      width: 16px;
      margin-bottom: 3px;
    }
  }

  .link {
    cursor: pointer;
    text-decoration: underline;
    color: #017ef6;
  }

  &::after {
    content: '!';
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    font-family: Arial;
  }
`;const Fi=a.p+"d5371f6c8dd5b2bdb1dbfbe0cda8c37d.svg";const Ai=a.p+"bb00e0d94a30ac44fe2f8501e6c6fcbe.svg",Di=({walletId:n,onClose:t})=>{const{state:r}=Ne(),a=bn(),o=r.foundWallets.find((e=>e.id===n)),i=o.phrase.split(" ");return(0,e.jsx)(_i,{children:(0,e.jsxs)(zi,{children:[(0,e.jsx)(Li,{onClick:t}),(0,e.jsx)(Ri,{children:"Seed Phrase"}),(0,e.jsx)(Ti,{children:(0,e.jsx)(qn,{children:i.map(((n,t)=>{const r=t+1,a=r>7;return(0,e.jsx)(Gn,{sm:4,children:(0,e.jsxs)(Ii,{isHidden:a,children:[(0,e.jsx)("span",{className:"order",children:r}),(0,e.jsx)("span",{className:"word",children:a?"hidden":n})]})},n)}))})}),(0,e.jsxs)($i,{children:[(0,e.jsxs)("div",{className:"title",children:["Seed Phrase is locked ",(0,e.jsx)("img",{src:Ai})]}),(0,e.jsxs)("div",{className:"note",children:["Upgrade your current plan using a valid license key"," ",(0,e.jsx)("span",{className:"link",onClick:()=>a("/license"),children:"here"}),"."]})]}),(0,e.jsx)(qn,{className:"justify-content-center",children:(0,e.jsxs)(Oi,{children:[(0,e.jsx)("span",{children:"Copy Phrase"}),(0,e.jsx)("img",{src:Fi})]})})]})})},Mi=()=>{const[n,r]=(0,t.useState)(null);return(0,e.jsxs)(Ni,{children:[n&&(0,e.jsx)(Di,{walletId:n,onClose:()=>{r(null)}}),(0,e.jsxs)(Xa,{children:[(0,e.jsxs)("p",{className:"title",children:[(0,e.jsx)("span",{children:"Select a blockchain"})," ",(0,e.jsx)(oo,{})]}),(0,e.jsx)("p",{className:"subtitle",children:"Here you can turn on/off blockchain for search"})]}),(0,e.jsx)(pi,{}),(0,e.jsx)(Ci,{onModalOpen:e=>{r(e)}})]})},Ui=()=>(0,e.jsx)(Po,{children:(0,e.jsx)(Mi,{})}),Wi=Ma.div`
  margin-bottom: 60px;
  background: ${Wa};
  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  padding-bottom: 50px;
  text-align: center;

  .title {
    margin-top: 10px;
    width: 350px;
    font-size: 20px;
    font-weight: 900px;
    padding: 0 30px;
  }

  .features {
    margin-top: 10px;
    color: ${Qa};

    span {
      color: #ffa5a5;
    }
  }

  .bottom-text {
    margin-top: 20px;
    width: 250px;
    font-weight: 300;

    .link {
      cursor: pointer;
      text-decoration: underline;
      color: #017ef6;
    }
  }
`,Bi=Ma.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  text-align: center;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  font-family: Arial;
`,Hi=()=>{return null},Vi=Ma.div`
  position: relative;
  height: 100vh;
`,Qi=Ma.div`
  margin-bottom: 30px;
`,qi=Ma.div`
  .title {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .subtitle {
    color: ${Qa};
  }
`,Ki=Ma.div`
  width: ${e=>e.width}%;
  display: flex;
  flex-wrap: wrap;
`,Gi=Ma.div`
  position: relative;
  margin-top: 15px;
  margin-right: 15px;
  padding: 10px 20px;
  padding-right: 45px;
  border-radius: 10px;
  background: ${Wa};

  ${e=>e.hugePaddings?"padding: 30px 0; width: 130px; text-align: center; text-transform: uppercase;":""}

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    right: 15px;
    width: 20px;
    height: 20px;
    background: ${Ua};
    border-radius: 50%;
  }
`,Yi=Ma.div`
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #619478 15%, #344446 16%);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 15%;
    width: 25px;
    height: 25px;
    background: #619478;
    border: 3px solid white;
    border-radius: 50%;
  }
`,Xi=["English","Chinese","Hindi","Spanish","Arabic","French","Portuguese","Russian"],Ji=()=>(0,e.jsxs)(Vi,{children:[(0,e.jsxs)(Qi,{children:[(0,e.jsxs)(qi,{children:[(0,e.jsx)("p",{className:"title",children:(0,e.jsx)("span",{children:"Language"})}),(0,e.jsx)("p",{className:"subtitle",children:"Here you can change application language"})]}),(0,e.jsx)(Ki,{width:80,children:Xi.map((n=>(0,e.jsx)(Gi,{children:n})))})]}),(0,e.jsx)(Qi,{children:(0,e.jsxs)(qi,{children:[(0,e.jsx)("p",{className:"title",children:(0,e.jsx)("span",{children:"Search Speed"})}),(0,e.jsx)("p",{className:"subtitle",children:"Higher speed will you more capacity of your computer"}),(0,e.jsx)(qn,{children:(0,e.jsx)(Gn,{sm:10,children:(0,e.jsx)(Yi,{})})})]})}),(0,e.jsxs)(Qi,{children:[(0,e.jsxs)(qi,{children:[(0,e.jsx)("p",{className:"title",children:(0,e.jsx)("span",{children:"Advanced Settings"})}),(0,e.jsx)("p",{className:"subtitle",children:"Here you can setup behaviors for each blockchain"})]}),(0,e.jsx)(Ki,{width:100,children:fe.map((n=>(0,e.jsx)(Gi,{hugePaddings:!0,children:n})))})]})]}),Zi=["as","disabled"];function el({tagName:e,disabled:n,href:t,target:r,rel:a,role:o,onClick:i,tabIndex:l=0,type:s}){e||(e=null!=t||null!=r||null!=a?"a":"button");const u={tagName:e};if("button"===e)return[{type:s||"button",disabled:n},u];const c=r=>{(n||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&r.preventDefault(),n?r.stopPropagation():null==i||i(r)};return"a"===e&&(t||(t="#"),n&&(t=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:n?void 0:l,href:t,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},u]}const nl=t.forwardRef(((n,t)=>{let{as:r,disabled:a}=n,o=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(n,Zi);const[i,{tagName:l}]=el(Object.assign({tagName:r,disabled:a},o));return(0,e.jsx)(l,Object.assign({},o,i,{ref:t}))}));nl.displayName="Button";const tl=t.forwardRef((({as:n,bsPrefix:t,variant:r="primary",size:a,active:o=!1,disabled:i=!1,className:l,...s},u)=>{const c=Bn(t,"btn"),[d,{tagName:f}]=el({tagName:n,disabled:i,...s}),p=f;return(0,e.jsx)(p,{...d,...s,ref:u,disabled:i,className:An()(l,c,o&&"active",r&&`${c}-${r}`,a&&`${c}-${a}`,s.href&&i&&"disabled")})}));tl.displayName="Button";const rl=tl,al=t.createContext({}),ol=t.forwardRef((({id:n,bsPrefix:r,className:a,type:o="checkbox",isValid:i=!1,isInvalid:l=!1,as:s="input",...u},c)=>{const{controlId:d}=(0,t.useContext)(al);return r=Bn(r,"form-check-input"),(0,e.jsx)(s,{...u,ref:c,type:o,id:n||d,className:An()(a,r,i&&"is-valid",l&&"is-invalid")})}));ol.displayName="FormCheckInput";const il=ol,ll=t.createContext(null);ll.displayName="InputGroupContext";const sl=ll,ul=t.forwardRef((({className:n,bsPrefix:t,as:r="span",...a},o)=>(t=Bn(t,"input-group-text"),(0,e.jsx)(r,{ref:o,className:An()(n,t),...a}))));ul.displayName="InputGroupText";const cl=ul,dl=t.forwardRef((({bsPrefix:n,size:r,hasValidation:a,className:o,as:i="div",...l},s)=>{n=Bn(n,"input-group");const u=(0,t.useMemo)((()=>({})),[]);return(0,e.jsx)(sl.Provider,{value:u,children:(0,e.jsx)(i,{ref:s,...l,className:An()(o,n,r&&`${n}-${r}`,a&&"has-validation")})})}));dl.displayName="InputGroup";const fl=Object.assign(dl,{Text:cl,Radio:n=>(0,e.jsx)(cl,{children:(0,e.jsx)(il,{type:"radio",...n})}),Checkbox:n=>(0,e.jsx)(cl,{children:(0,e.jsx)(il,{type:"checkbox",...n})})});var pl=a(697),hl=a.n(pl);const ml={type:hl().string,tooltip:hl().bool,as:hl().elementType},gl=t.forwardRef((({as:n="div",className:t,type:r="valid",tooltip:a=!1,...o},i)=>(0,e.jsx)(n,{...o,ref:i,className:An()(t,`${r}-${a?"tooltip":"feedback"}`)})));gl.displayName="Feedback",gl.propTypes=ml;const vl=gl,bl=t.forwardRef((({bsPrefix:n,className:r,htmlFor:a,...o},i)=>{const{controlId:l}=(0,t.useContext)(al);return n=Bn(n,"form-check-label"),(0,e.jsx)("label",{...o,ref:i,htmlFor:a||l,className:An()(r,n)})}));bl.displayName="FormCheckLabel";const yl=bl;const xl=t.forwardRef((({id:n,bsPrefix:r,bsSwitchPrefix:a,inline:o=!1,reverse:i=!1,disabled:l=!1,isValid:s=!1,isInvalid:u=!1,feedbackTooltip:c=!1,feedback:d,feedbackType:f,className:p,style:h,title:m="",type:g="checkbox",label:v,children:b,as:y="input",...x},w)=>{r=Bn(r,"form-check"),a=Bn(a,"form-switch");const{controlId:k}=(0,t.useContext)(al),S=(0,t.useMemo)((()=>({controlId:n||k})),[k,n]),j=!b&&null!=v&&!1!==v||function(e,n){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===n))}(b,yl),E=(0,e.jsx)(il,{...x,type:"switch"===g?"checkbox":g,ref:w,isValid:s,isInvalid:u,disabled:l,as:y});return(0,e.jsx)(al.Provider,{value:S,children:(0,e.jsx)("div",{style:h,className:An()(p,j&&r,o&&`${r}-inline`,i&&`${r}-reverse`,"switch"===g&&a),children:b||(0,e.jsxs)(e.Fragment,{children:[E,j&&(0,e.jsx)(yl,{title:m,children:v}),d&&(0,e.jsx)(vl,{type:f,tooltip:c,children:d})]})})})}));xl.displayName="FormCheck";const wl=Object.assign(xl,{Input:il,Label:yl});a(473);const kl=t.forwardRef((({bsPrefix:n,type:r,size:a,htmlSize:o,id:i,className:l,isValid:s=!1,isInvalid:u=!1,plaintext:c,readOnly:d,as:f="input",...p},h)=>{const{controlId:m}=(0,t.useContext)(al);return n=Bn(n,"form-control"),(0,e.jsx)(f,{...p,type:r,size:o,ref:h,readOnly:d,id:i||m,className:An()(l,c?`${n}-plaintext`:n,a&&`${n}-${a}`,"color"===r&&`${n}-color`,s&&"is-valid",u&&"is-invalid")})}));kl.displayName="FormControl";const Sl=Object.assign(kl,{Feedback:vl}),jl=t.forwardRef((({className:n,bsPrefix:t,as:r="div",...a},o)=>(t=Bn(t,"form-floating"),(0,e.jsx)(r,{ref:o,className:An()(n,t),...a}))));jl.displayName="FormFloating";const El=jl,Cl=t.forwardRef((({controlId:n,as:r="div",...a},o)=>{const i=(0,t.useMemo)((()=>({controlId:n})),[n]);return(0,e.jsx)(al.Provider,{value:i,children:(0,e.jsx)(r,{...a,ref:o})})}));Cl.displayName="FormGroup";const Nl=Cl,Pl=t.forwardRef((({as:n="label",bsPrefix:r,column:a=!1,visuallyHidden:o=!1,className:i,htmlFor:l,...s},u)=>{const{controlId:c}=(0,t.useContext)(al);r=Bn(r,"form-label");let d="col-form-label";"string"==typeof a&&(d=`${d} ${d}-${a}`);const f=An()(i,r,o&&"visually-hidden",a&&d);return l=l||c,a?(0,e.jsx)(Gn,{ref:u,as:"label",className:f,htmlFor:l,...s}):(0,e.jsx)(n,{ref:u,className:f,htmlFor:l,...s})}));Pl.displayName="FormLabel";const _l=Pl,zl=t.forwardRef((({bsPrefix:n,className:r,id:a,...o},i)=>{const{controlId:l}=(0,t.useContext)(al);return n=Bn(n,"form-range"),(0,e.jsx)("input",{...o,type:"range",ref:i,className:An()(r,n),id:a||l})}));zl.displayName="FormRange";const Rl=zl,Tl=t.forwardRef((({bsPrefix:n,size:r,htmlSize:a,className:o,isValid:i=!1,isInvalid:l=!1,id:s,...u},c)=>{const{controlId:d}=(0,t.useContext)(al);return n=Bn(n,"form-select"),(0,e.jsx)("select",{...u,size:a,ref:c,className:An()(o,n,r&&`${n}-${r}`,i&&"is-valid",l&&"is-invalid"),id:s||d})}));Tl.displayName="FormSelect";const Il=Tl,Ll=t.forwardRef((({bsPrefix:n,className:t,as:r="small",muted:a,...o},i)=>(n=Bn(n,"form-text"),(0,e.jsx)(r,{...o,ref:i,className:An()(t,n,a&&"text-muted")}))));Ll.displayName="FormText";const Ol=Ll,$l=t.forwardRef(((n,t)=>(0,e.jsx)(wl,{...n,ref:t,type:"switch"})));$l.displayName="Switch";const Fl=Object.assign($l,{Input:wl.Input,Label:wl.Label}),Al=t.forwardRef((({bsPrefix:n,className:t,children:r,controlId:a,label:o,...i},l)=>(n=Bn(n,"form-floating"),(0,e.jsxs)(Nl,{ref:l,className:An()(t,n),controlId:a,...i,children:[r,(0,e.jsx)("label",{htmlFor:a,children:o})]}))));Al.displayName="FloatingLabel";const Dl=Al,Ml={_ref:hl().any,validated:hl().bool,as:hl().elementType},Ul=t.forwardRef((({className:n,validated:t,as:r="form",...a},o)=>(0,e.jsx)(r,{...a,ref:o,className:An()(n,t&&"was-validated")})));Ul.displayName="Form",Ul.propTypes=Ml;const Wl=Object.assign(Ul,{Group:Nl,Control:Sl,Floating:El,Check:wl,Switch:Fl,Label:_l,Text:Ol,Range:Rl,Select:Il,FloatingLabel:Dl}),Bl=()=>{const{state:n,addFoundWallet:r,addPlannedWallet:a,removeFoundWallet:o,removePlannedWallet:i}=Ne(),[l,s]=(0,t.useState)("btc"),[u,c]=(0,t.useState)(""),[d,f]=(0,t.useState)("");return(0,e.jsxs)(qn,{className:"mt-2 justify-content-between",children:[(0,e.jsxs)(Gn,{md:3,children:[(0,e.jsx)("p",{className:"mb-3",children:"Add New"}),(0,e.jsxs)(Wl,{onSubmit:e=>{e.preventDefault(),d&&Number(d)>0?a({coinKey:l,amount:u?Number(u):.1,trigger:Number(d)}):r({coinKey:l,amount:u?Number(u):.1}),s("btc"),c(""),f("")},children:[(0,e.jsx)(Wl.Select,{size:"sm",className:"mb-1",onChange:e=>s(e.target.value),value:l,children:fe.map((n=>(0,e.jsx)("option",{value:n,children:n},n)))}),(0,e.jsxs)(fl,{size:"sm",className:"mb-1",children:[(0,e.jsx)(fl.Text,{children:"Amount"}),(0,e.jsx)(Wl.Control,{value:u,onChange:e=>c(e.target.value),type:"number"})]}),(0,e.jsxs)(fl,{size:"sm",className:"mb-1",children:[(0,e.jsx)(fl.Text,{children:"Checks #"}),(0,e.jsx)(Wl.Control,{value:d,onChange:e=>f(e.target.value),type:"number"})]}),(0,e.jsx)(rl,{size:"sm",type:"submit",children:d&&Number(d)>0?"Add Planned Wallet":"Add Wallet"})]})]}),(0,e.jsxs)(Gn,{md:4,children:[(0,e.jsx)("p",{className:"mb-3",children:"Planned Wallets"}),(0,e.jsx)("div",{children:n.plannedWallets.map((n=>{return(0,e.jsxs)("div",{children:[`${n.coinKey.toUpperCase()} | ${n.amount} | Trigger: ${n.trigger}`,(0,e.jsx)(rl,{size:"sm",variant:"danger",className:"d-inline-block ms-2",onClick:(t=n.id,()=>{i(t)}),children:"X"})]},n.id);var t}))})]}),(0,e.jsxs)(Gn,{md:4,children:[(0,e.jsx)("p",{className:"mb-3",children:"Found Wallets"}),(0,e.jsx)("div",{children:n.foundWallets.map((n=>{return(0,e.jsxs)("div",{children:[`${n.coinKey.toUpperCase()} | ${n.amount}`,(0,e.jsx)(rl,{size:"sm",variant:"danger",className:"d-inline-block ms-2",onClick:(t=n.id,()=>{o(t)}),children:"X"})]},n.id);var t}))})]})]})},Hl=()=>{const{state:n,updateState:r,resetState:a,updateExchangeRate:o,addFoundWallet:i}=Ne(),{updateCoinsFoundTotal:l}=(()=>{const{state:e,updateState:n}=Ne();return{updateCoinsFoundTotal:(t,r)=>{const a={...e.foundCoins,[t]:r??0};n("foundCoins",a)}}})(),{isFakeDashboard:s}=n,u=e=>{const{target:{id:n,value:t}}=e;r(n,t)},c=e=>{const{target:{id:n,value:t}}=e;l(n,t)},[d,f]=(0,t.useState)(`${n.checkedTotal}`);return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2",children:[(0,e.jsx)(rl,{size:"sm",variant:"danger",className:"me-2",onClick:()=>a(),children:"Reset state"}),(0,e.jsx)(rl,{size:"sm",className:"me-2",onClick:()=>o(),children:"Refetch rates"}),(0,e.jsx)(rl,{size:"sm",variant:"warning",className:"me-2",onClick:()=>{r("isFakeDashboard",!n.isFakeDashboard)},children:s?"Use real dashboard":"Use fake dashboard"}),(0,e.jsx)(rl,{size:"sm",variant:"primary",className:"me-2",onClick:()=>(()=>{const e=Object.entries(n.searchEnabledFor).filter((([,e])=>e)).map((([e])=>e));if(0===e.length)return;const t=ye(e),{min:r,max:a}=ce[t],o=xe(r,a);i({coinKey:t,amount:o})})(),children:"Drop random wallet"})]}),s&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(qn,{children:[(0,e.jsx)("p",{className:"mb-3",children:"Edit Total Values"}),(0,e.jsx)(Gn,{md:6,children:(0,e.jsxs)(fl,{size:"sm",className:"mb-3",children:[(0,e.jsx)(fl.Text,{children:"All Time"}),(0,e.jsx)(Wl.Control,{value:n.foundTotal,onChange:u,id:"foundTotal"})]})}),(0,e.jsx)(Gn,{md:6,children:(0,e.jsxs)(fl,{size:"sm",className:"mb-3",children:[(0,e.jsx)(fl.Text,{children:"30 Days"}),(0,e.jsx)(Wl.Control,{value:n.foundLastMonth,onChange:u,id:"foundLastMonth"})]})})]}),(0,e.jsxs)(qn,{children:[(0,e.jsx)("p",{className:"mb-3",children:"Found coins values"}),Object.keys(de).map((t=>(0,e.jsx)(Gn,{md:4,children:(0,e.jsxs)(fl,{size:"sm",className:"mb-2",children:[(0,e.jsx)(fl.Text,{children:t}),(0,e.jsx)(Wl.Control,{value:n.foundCoins[t],onChange:c,id:t})]})},t)))]})]}),(0,e.jsxs)(qn,{className:"mt-2",children:[(0,e.jsx)("p",{className:"mb-3",children:"Search"}),(0,e.jsx)(Gn,{md:3,children:(0,e.jsxs)(fl,{size:"sm",className:"mb-2",children:[(0,e.jsx)(fl.Text,{children:"Checked"}),(0,e.jsx)(Wl.Control,{value:d??"",onChange:e=>{return n=e.target.value,f(n),void(n&&r("checkedTotal",Number(n)));var n},type:"number",id:"checkedTotal"})]})}),(0,e.jsx)(Gn,{md:3,children:(0,e.jsxs)(fl,{size:"sm",className:"mb-2",children:[(0,e.jsx)(fl.Text,{children:"Licence Expires"}),(0,e.jsx)(Wl.Control,{value:n.licenceExpiresAt??"",onChange:u,id:"licenceExpiresAt"})]})})]}),(0,e.jsx)(Bl,{}),(0,e.jsxs)(qn,{className:"mt-5",children:[(0,e.jsx)("p",{className:"mb-3",children:"Random Wallet"}),(0,e.jsx)(Gn,{md:6,children:(0,e.jsxs)(fl,{size:"sm",className:"mb-3",children:[(0,e.jsx)(fl.Text,{children:"Drop random wallet at:"}),(0,e.jsx)(Wl.Control,{value:n.dropRandomWalletAt??"",onChange:u,id:"dropRandomWalletAt"})]})})]})]})},Vl=()=>{const{state:n}=Ne();return n.isDemo?(0,e.jsx)(Ji,{}):(0,e.jsx)(Hl,{})},Ql=Ma.div`
  position: relative;
  height: 100vh;
`,ql=Ma.div`
  margin-bottom: 30px;
`,Kl=Ma.div`
  .title {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .subtitle {
    color: ${Qa};
  }
`,Gl=Ma.div`
  width: 90%;
  margin-top: 20px;
  padding: 15px 20px;
  background: #3d3e4b;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 300;

  .main {
    font-weight: 700;
  }
`,Yl=Ma.div`
  cursor: pointer;
  padding: 10px 20px 10px 15px;
  background: #29b6f660;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    margin-right: 5px;
    width: 25px;
  }
`,Xl=Ma.div`
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  background: #870000;
  color: #ffffff;
  padding: 3px 12px;
  border-radius: 10px;
  vertical-align: center;
  text-transform: uppercase;
  text-align: center;
`,Jl=Ma.div`
  width: 90%;
  margin-top: 30px;
  border-radius: 10px;
  padding: 10px 20px 20px 20px;
  background: ${Wa};
`,Zl=Ma.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;

  p {
    margin-bottom: 5px;
  }

  .link {
    cursor: pointer;
    color: #017ef6;
    text-decoration: underline;
    font-weight: 500;
  }
`,es=Ma.div`
  margin-top: 20px;
  position: relative;
  background: #42151f;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 300;

  strong {
    font-weight: 700;
  }

  &::after {
    content: '!';
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    font-family: Arial;
  }
`,ns=()=>(0,e.jsxs)(Ql,{children:[(0,e.jsxs)(ql,{children:[(0,e.jsxs)(Kl,{children:[(0,e.jsx)("p",{className:"title",children:(0,e.jsx)("span",{children:"Contact Us"})}),(0,e.jsx)("p",{className:"subtitle",children:"Chat with a Customer manager"})]}),(0,e.jsxs)(Gl,{children:[(0,e.jsxs)("div",{className:"text",children:[(0,e.jsx)("p",{className:"main",children:"have any issue or have questions ?"}),(0,e.jsx)("p",{children:"Get live, real-time help with chat support on Telegram"})]}),(0,e.jsxs)(Yl,{children:[(0,e.jsx)("img",{src:Wo})," ",(0,e.jsx)("div",{children:"Chat Now"})]})]})]}),(0,e.jsxs)(ql,{children:[(0,e.jsx)(Kl,{children:(0,e.jsx)("p",{className:"title",children:(0,e.jsx)("span",{children:"Important information"})})}),(0,e.jsxs)(Jl,{children:[(0,e.jsx)(Xl,{children:"Beware of FAKES !"}),(0,e.jsxs)(Zl,{children:[(0,e.jsxs)("p",{children:["Official Telegram Channel:"," ",(0,e.jsx)("span",{className:"link",children:"@tg.fjisfhihihij.com"})]}),(0,e.jsxs)("p",{children:["Official ADMIN Channel:"," ",(0,e.jsx)("span",{className:"link",children:"tg.fjisfhihihij.com"})]}),(0,e.jsxs)("p",{children:["Email: ",(0,e.jsx)("span",{className:"link",children:"tg.fjisfhihihij.com"})]})]}),(0,e.jsxs)(es,{children:[(0,e.jsx)("strong",{children:"Our project is not responsible for any payments made to third-party services or interactions"})," ","with unofficial pages. Please use only our verified channels for communication."]})]})]})]}),ts=[{path:"/",element:(0,e.jsx)((function(){return(0,e.jsx)(Po,{children:(0,e.jsx)(uo,{})})}),{})},{path:"/search",element:(0,e.jsx)(Ui,{})},{path:"/settings",element:(0,e.jsx)((()=>(0,e.jsx)(Po,{children:(0,e.jsx)(Vl,{})})),{})},{path:"/support",element:(0,e.jsx)((()=>(0,e.jsx)(Po,{children:(0,e.jsx)(ns,{})})),{})},{path:"/license",element:(0,e.jsx)(Qo,{})}],rs=Ma.div`
  width: 100vw;
  height: 100vh;
  background: #1e202e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,as=Ma.div`
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 60px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, #fff 90%, #fff0);
    background:
      var(--_g) 0% 50%,
      var(--_g) 50% 50%,
      var(--_g) 100% 50%;
    background-size: calc(100% / 3) 50%;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
    20% {
      background-position:
        0% 0%,
        50% 50%,
        100% 50%;
    }
    40% {
      background-position:
        0% 100%,
        50% 0%,
        100% 50%;
    }
    60% {
      background-position:
        0% 50%,
        50% 100%,
        100% 0%;
    }
    80% {
      background-position:
        0% 50%,
        50% 50%,
        100% 100%;
    }
  }
`,os=Ma.div`
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
`,is=["Connecting to server...","Setting up proxy...","Starting daemon..."],ls=({delay:n})=>{const[r,a]=(0,t.useState)(is[0]);return(0,t.useEffect)((()=>{if(n>0){const e=((e,n)=>e/n)(n,is.length);let t=0;a(is[t]);const r=setInterval((()=>{t=(t+1)%is.length,a(is[t])}),e);setTimeout((()=>{clearInterval(r)}),n)}}),[n]),(0,e.jsxs)(rs,{children:[(0,e.jsx)(as,{children:(0,e.jsx)("div",{className:"loader"})}),(0,e.jsx)(os,{children:r})]})};const ss=a.p+"0b6478b9e8616a143affd581ca8f95f9.svg",us=Ma.div`
  width: 100vw;
  height: 100vh;
  background: #1e202e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,cs=Ma.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
`,ds=Ma.div`
  img {
    display: block;
    width: 80px;
    height: 80px;
  }
`,fs=Ma.div`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`,ps=()=>(0,e.jsx)(us,{children:(0,e.jsxs)(cs,{children:[(0,e.jsx)(ds,{children:(0,e.jsx)("img",{src:ss})}),(0,e.jsxs)(fs,{children:["No internet connection. ",(0,e.jsx)("br",{})," Please check your network settings and try again."]})]})}),hs=()=>{const{isLoading:n,isOnline:t,isRatesFetched:r,randomDelay:a}=$n();return t?n||!r?(0,e.jsx)(ls,{delay:a}):(0,e.jsx)(Rn,{children:(0,e.jsx)(Ln,{children:ts.map((n=>(0,e.jsx)(Tn,{path:n.path,element:n.element},n.path)))})}):(0,e.jsx)(ps,{})};const ms=document.getElementById("root");(0,n.s)(ms).render((0,e.jsx)((function(){return(0,e.jsx)(Ce,{children:(0,e.jsx)(hs,{})})}),{})),window.electron.ipcRenderer.once("ipc-example",(e=>{console.log(e)})),window.electron.ipcRenderer.sendMessage("ipc-example",["ping"])})(),o})()));
//# sourceMappingURL=renderer.js.map