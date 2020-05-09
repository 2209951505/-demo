/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-flexbox-flexboxlegacy-multiplebgs-opacity-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-canvas-shiv-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return H("flexWrap")},r.flexboxlegacy=function(){return H("boxDirection")},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return H("backgroundSize")},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return H("animationName")},r.csscolumns=function(){return H("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.cssreflections=function(){return H("boxReflect")},r.csstransforms=function(){return!!H("transform")},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var I in r)A(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);;if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++)
        {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};!function(d){function g(){return new Date(Date.UTC.apply(Date,arguments))}function b(){var h=new Date();return g(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),0)}var f=function(j,i){var l=this;this.element=d(j);this.container=i.container||"body";this.language=i.language||this.element.data("date-language")||"en";this.language=this.language in e?this.language:"en";this.isRTL=e[this.language].rtl||false;this.formatType=i.formatType||this.element.data("format-type")||"standard";this.format=c.parseFormat(i.format||this.element.data("date-format")||e[this.language].format||c.getDefaultFormat(this.formatType,"input"),this.formatType);this.isInline=false;this.isVisible=false;this.isInput=this.element.is("input");this.fontAwesome=i.fontAwesome||this.element.data("font-awesome")||false;this.bootcssVer=i.bootcssVer||(this.isInput?(this.element.is(".form-control")?3:2):(this.bootcssVer=this.element.is(".input-group")?3:2));this.component=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent():this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o").parent()):false;this.componentReset=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent():this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.linkField=i.linkField||this.element.data("link-field")||false;this.linkFormat=c.parseFormat(i.linkFormat||this.element.data("link-format")||c.getDefaultFormat(this.formatType,"link"),this.formatType);this.minuteStep=i.minuteStep||this.element.data("minute-step")||5;this.pickerPosition=i.pickerPosition||this.element.data("picker-position")||"bottom-right";this.showMeridian=i.showMeridian||this.element.data("show-meridian")||false;this.initialDate=i.initialDate||new Date();this.zIndex=i.zIndex||this.element.data("z-index")||undefined;this.icons={leftArrow:this.fontAwesome?"fa-arrow-left":(this.bootcssVer===3?"glyphicon-arrow-left":"icon-arrow-left"),rightArrow:this.fontAwesome?"fa-arrow-right":(this.bootcssVer===3?"glyphicon-arrow-right":"icon-arrow-right")};this.icontype=this.fontAwesome?"fa":"glyphicon";this._attachEvents();this.formatViewType="datetime";if("formatViewType" in i){this.formatViewType=i.formatViewType}else{if("formatViewType" in this.element.data()){this.formatViewType=this.element.data("formatViewType")}}this.minView=0;if("minView" in i){this.minView=i.minView}else{if("minView" in this.element.data()){this.minView=this.element.data("min-view")}}this.minView=c.convertViewMode(this.minView);this.maxView=c.modes.length-1;if("maxView" in i){this.maxView=i.maxView}else{if("maxView" in this.element.data()){this.maxView=this.element.data("max-view")}}this.maxView=c.convertViewMode(this.maxView);this.wheelViewModeNavigation=false;if("wheelViewModeNavigation" in i){this.wheelViewModeNavigation=i.wheelViewModeNavigation}else{if("wheelViewModeNavigation" in this.element.data()){this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation")}}this.wheelViewModeNavigationInverseDirection=false;if("wheelViewModeNavigationInverseDirection" in i){this.wheelViewModeNavigationInverseDirection=i.wheelViewModeNavigationInverseDirection}else{if("wheelViewModeNavigationInverseDirection" in this.element.data()){this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir")}}this.wheelViewModeNavigationDelay=100;if("wheelViewModeNavigationDelay" in i){this.wheelViewModeNavigationDelay=i.wheelViewModeNavigationDelay}else{if("wheelViewModeNavigationDelay" in this.element.data()){this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay")}}this.startViewMode=2;if("startView" in i){this.startViewMode=i.startView}else{if("startView" in this.element.data()){this.startViewMode=this.element.data("start-view")}}this.startViewMode=c.convertViewMode(this.startViewMode);this.viewMode=this.startViewMode;this.viewSelect=this.minView;if("viewSelect" in i){this.viewSelect=i.viewSelect}else{if("viewSelect" in this.element.data()){this.viewSelect=this.element.data("view-select")}}this.viewSelect=c.convertViewMode(this.viewSelect);this.forceParse=true;if("forceParse" in i){this.forceParse=i.forceParse}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse")}}var k=this.bootcssVer===3?c.templateV3:c.template;while(k.indexOf("{iconType}")!==-1){k=k.replace("{iconType}",this.icontype)}while(k.indexOf("{leftArrow}")!==-1){k=k.replace("{leftArrow}",this.icons.leftArrow)}while(k.indexOf("{rightArrow}")!==-1){k=k.replace("{rightArrow}",this.icons.rightArrow)}this.picker=d(k).appendTo(this.isInline?this.element:this.container).on({click:d.proxy(this.click,this),mousedown:d.proxy(this.mousedown,this)});if(this.wheelViewModeNavigation){if(d.fn.mousewheel){this.picker.on({mousewheel:d.proxy(this.mousewheel,this)})}else{console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")}}if(this.isInline){this.picker.addClass("datetimepicker-inline")}else{this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu")}if(this.isRTL){this.picker.addClass("datetimepicker-rtl");var h=this.bootcssVer===3?".prev span, .next span":".prev i, .next i";this.picker.find(h).toggleClass(this.icons.leftArrow+" "+this.icons.rightArrow)}d(document).on("mousedown",function(m){if(d(m.target).closest(".datetimepicker").length===0){l.hide()}});this.autoclose=false;if("autoclose" in i){this.autoclose=i.autoclose}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")}}this.keyboardNavigation=true;if("keyboardNavigation" in i){this.keyboardNavigation=i.keyboardNavigation}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")}}this.todayBtn=(i.todayBtn||this.element.data("date-today-btn")||false);this.todayHighlight=(i.todayHighlight||this.element.data("date-today-highlight")||false);this.weekStart=((i.weekStart||this.element.data("date-weekstart")||e[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.daysOfWeekDisabled=[];this.setStartDate(i.startDate||this.element.data("date-startdate"));this.setEndDate(i.endDate||this.element.data("date-enddate"));this.setDaysOfWeekDisabled(i.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));this.setMinutesDisabled(i.minutesDisabled||this.element.data("date-minute-disabled"));this.setHoursDisabled(i.hoursDisabled||this.element.data("date-hour-disabled"));this.fillDow();this.fillMonths();this.update();this.showMode();if(this.isInline){this.show()}};f.prototype={constructor:f,_events:[],_attachEvents:function(){this._detachEvents();if(this.isInput){this._events=[[this.element,{focus:d.proxy(this.show,this),keyup:d.proxy(this.update,this),keydown:d.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:d.proxy(this.show,this),keyup:d.proxy(this.update,this),keydown:d.proxy(this.keydown,this)}],[this.component,{click:d.proxy(this.show,this)}]];if(this.componentReset){this._events.push([this.componentReset,{click:d.proxy(this.reset,this)}])}}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:d.proxy(this.show,this)}]]}}}for(var h=0,j,k;h<this._events.length;h++){j=this._events[h][0];k=this._events[h][1];j.on(k)}},_detachEvents:function(){for(var h=0,j,k;h<this._events.length;h++){j=this._events[h][0];k=this._events[h][1];j.off(k)}this._events=[]},show:function(h){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();if(this.forceParse){this.update()}this.place();d(window).on("resize",d.proxy(this.place,this));if(h){h.stopPropagation();h.preventDefault()}this.isVisible=true;this.element.trigger({type:"show",date:this.date})},hide:function(h){if(!this.isVisible){return}if(this.isInline){return}this.picker.hide();d(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){d(document).off("mousedown",this.hide)}if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this.isVisible=false;this.element.trigger({type:"hide",date:this.date})},remove:function(){this._detachEvents();this.picker.remove();delete this.picker;delete this.element.data().datetimepicker},getDate:function(){var h=this.getUTCDate();return new Date(h.getTime()+(h.getTimezoneOffset()*60000))},getUTCDate:function(){return this.date},setDate:function(h){this.setUTCDate(new Date(h.getTime()-(h.getTimezoneOffset()*60000)))},setUTCDate:function(h){if(h>=this.startDate&&h<=this.endDate){this.date=h;this.setValue();this.viewDate=this.date;this.fill()}else{this.element.trigger({type:"outOfRange",date:h,startDate:this.startDate,endDate:this.endDate})}},setFormat:function(i){this.format=c.parseFormat(i,this.formatType);var h;if(this.isInput){h=this.element}else{if(this.component){h=this.element.find("input")}}if(h&&h.val()){this.setValue()}},setValue:function(){var h=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(h)}this.element.data("date",h)}else{this.element.val(h)}if(this.linkField){d("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))}},getFormattedDate:function(h){if(h==undefined){h=this.format}return c.formatDate(this.date,h,this.language,this.formatType)},setStartDate:function(h){this.startDate=h||-Infinity;if(this.startDate!==-Infinity){this.startDate=c.parseDate(this.startDate,this.format,this.language,this.formatType)}this.update();this.updateNavArrows()},setEndDate:function(h){this.endDate=h||Infinity;if(this.endDate!==Infinity){this.endDate=c.parseDate(this.endDate,this.format,this.language,this.formatType)}this.update();this.updateNavArrows()},setDaysOfWeekDisabled:function(h){this.daysOfWeekDisabled=h||[];if(!d.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)}this.daysOfWeekDisabled=d.map(this.daysOfWeekDisabled,function(i){return parseInt(i,10)});this.update();this.updateNavArrows()},setMinutesDisabled:function(h){this.minutesDisabled=h||[];if(!d.isArray(this.minutesDisabled)){this.minutesDisabled=this.minutesDisabled.split(/,\s*/)}this.minutesDisabled=d.map(this.minutesDisabled,function(i){return parseInt(i,10)});this.update();this.updateNavArrows()},setHoursDisabled:function(h){this.hoursDisabled=h||[];if(!d.isArray(this.hoursDisabled)){this.hoursDisabled=this.hoursDisabled.split(/,\s*/)}this.hoursDisabled=d.map(this.hoursDisabled,function(i){return parseInt(i,10)});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}if(!this.zIndex){var h=0;d("div").each(function(){var m=parseInt(d(this).css("zIndex"),10);if(m>h){h=m}});this.zIndex=h+10}var l,k,j,i;if(this.container instanceof d){i=this.container.offset()}else{i=d(this.container).offset()}if(this.component){l=this.component.offset();j=l.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){j+=this.component.outerWidth()-this.picker.outerWidth()}}else{l=this.element.offset();j=l.left}if(j+220>document.body.clientWidth){j=document.body.clientWidth-220}if(this.pickerPosition=="top-left"||this.pickerPosition=="top-right"){k=l.top-this.picker.outerHeight()}else{k=l.top+this.height}k=k-i.top;j=j-i.left;if(this.container!="body"){k=k+document.body.scrollTop}this.picker.css({top:k,left:j,zIndex:this.zIndex})},update:function(){var h,i=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){h=arguments[0];i=true}else{h=(this.isInput?this.element.val():this.element.find("input").val())||this.element.data("date")||this.initialDate;if(typeof h=="string"||h instanceof String){h=h.replace(/^\s+|\s+$/g,"")}}if(!h){h=new Date();i=false}this.date=c.parseDate(h,this.format,this.language,this.formatType);if(i){this.setValue()}if(this.date<this.startDate){this.viewDate=new Date(this.startDate)}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)}else{this.viewDate=new Date(this.date)}}this.fill()},fillDow:function(){var h=this.weekStart,i="<tr>";while(h<this.weekStart+7){i+='<th class="dow">'+e[this.language].daysMin[(h++)%7]+"</th>"}i+="</tr>";this.picker.find(".datetimepicker-days thead").append(i)},fillMonths:function(){var j="",h=0;while(h<12){j+='<span class="month">'+e[this.language].monthsShort[h++]+"</span>"}this.picker.find(".datetimepicker-months td").html(j)},fill:function(){if(this.date==null||this.viewDate==null){return}var F=new Date(this.viewDate),s=F.getUTCFullYear(),G=F.getUTCMonth(),m=F.getUTCDate(),B=F.getUTCHours(),w=F.getUTCMinutes(),x=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,C=this.startDate!==-Infinity?this.startDate.getUTCMonth()+1:-Infinity,o=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,y=this.endDate!==Infinity?this.endDate.getUTCMonth()+1:Infinity,p=(new g(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate())).valueOf(),E=new Date();this.picker.find(".datetimepicker-days thead th:eq(1)").text(e[this.language].months[G]+" "+s);if(this.formatViewType=="time"){var j=this.getFormattedDate();this.picker.find(".datetimepicker-hours thead th:eq(1)").text(j);this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(j)}else{this.picker.find(".datetimepicker-hours thead th:eq(1)").text(m+" "+e[this.language].months[G]+" "+s);this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(m+" "+e[this.language].months[G]+" "+s)}this.picker.find("tfoot th.today").text(e[this.language].today).toggle(this.todayBtn!==false);this.updateNavArrows();this.fillMonths();var I=g(s,G-1,28,0,0,0,0),A=c.getDaysInMonth(I.getUTCFullYear(),I.getUTCMonth());I.setUTCDate(A);I.setUTCDate(A-(I.getUTCDay()-this.weekStart+7)%7);var h=new Date(I);h.setUTCDate(h.getUTCDate()+42);h=h.valueOf();var q=[];var t;while(I.valueOf()<h){if(I.getUTCDay()==this.weekStart){q.push("<tr>")}t="";if(I.getUTCFullYear()<s||(I.getUTCFullYear()==s&&I.getUTCMonth()<G)){t+=" old"}else{if(I.getUTCFullYear()>s||(I.getUTCFullYear()==s&&I.getUTCMonth()>G)){t+=" new"}}if(this.todayHighlight&&I.getUTCFullYear()==E.getFullYear()&&I.getUTCMonth()==E.getMonth()&&I.getUTCDate()==E.getDate()){t+=" today"}if(I.valueOf()==p){t+=" active"}if((I.valueOf()+86400000)<=this.startDate||I.valueOf()>this.endDate||d.inArray(I.getUTCDay(),this.daysOfWeekDisabled)!==-1){t+=" disabled"}q.push('<td class="day'+t+'">'+I.getUTCDate()+"</td>");if(I.getUTCDay()==this.weekEnd){q.push("</tr>")}I.setUTCDate(I.getUTCDate()+1)}this.picker.find(".datetimepicker-days tbody").empty().append(q.join(""));q=[];var u="",D="",r="";var k=this.hoursDisabled||[];for(var z=0;z<24;z++){if(k.indexOf(z)!==-1){continue}var v=g(s,G,m,z);t="";if((v.valueOf()+3600000)<=this.startDate||v.valueOf()>this.endDate){t+=" disabled"}else{if(B==z){t+=" active"}}if(this.showMeridian&&e[this.language].meridiem.length==2){D=(z<12?e[this.language].meridiem[0]:e[this.language].meridiem[1]);if(D!=r){if(r!=""){q.push("</fieldset>")}q.push('<fieldset class="hour"><legend>'+D.toUpperCase()+"</legend>")}r=D;u=(z%12?z%12:12);q.push('<span class="hour'+t+" hour_"+(z<12?"am":"pm")+'">'+u+"</span>");if(z==23){q.push("</fieldset>")}}else{u=z+":00";q.push('<span class="hour'+t+'">'+u+"</span>")}}this.picker.find(".datetimepicker-hours td").html(q.join(""));q=[];u="",D="",r="";var l=this.minutesDisabled||[];for(var z=0;z<60;z+=this.minuteStep){if(l.indexOf(z)!==-1){continue}var v=g(s,G,m,B,z,0);t="";if(v.valueOf()<this.startDate||v.valueOf()>this.endDate){t+=" disabled"}else{if(Math.floor(w/this.minuteStep)==Math.floor(z/this.minuteStep)){t+=" active"}}if(this.showMeridian&&e[this.language].meridiem.length==2){D=(B<12?e[this.language].meridiem[0]:e[this.language].meridiem[1]);if(D!=r){if(r!=""){q.push("</fieldset>")}q.push('<fieldset class="minute"><legend>'+D.toUpperCase()+"</legend>")}r=D;u=(B%12?B%12:12);q.push('<span class="minute'+t+'">'+u+":"+(z<10?"0"+z:z)+"</span>");if(z==59){q.push("</fieldset>")}}else{u=z+":00";q.push('<span class="minute'+t+'">'+B+":"+(z<10?"0"+z:z)+"</span>")}}this.picker.find(".datetimepicker-minutes td").html(q.join(""));var J=this.date.getUTCFullYear();var n=this.picker.find(".datetimepicker-months").find("th:eq(1)").text(s).end().find("span").removeClass("active");if(J==s){n.eq(this.date.getUTCMonth()+2).addClass("active")}if(s<x||s>o){n.addClass("disabled")}if(s==x){n.slice(0,C+1).addClass("disabled")}if(s==o){n.slice(y).addClass("disabled")}q="";s=parseInt(s/10,10)*10;var H=this.picker.find(".datetimepicker-years").find("th:eq(1)").text(s+"-"+(s+9)).end().find("td");s-=1;for(var z=-1;z<11;z++){q+='<span class="year'+(z==-1||z==10?" old":"")+(J==s?" active":"")+(s<x||s>o?" disabled":"")+'">'+s+"</span>";s+=1}H.html(q);this.place()},updateNavArrows:function(){var l=new Date(this.viewDate),j=l.getUTCFullYear(),k=l.getUTCMonth(),i=l.getUTCDate(),h=l.getUTCHours();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&j<=this.startDate.getUTCFullYear()&&k<=this.startDate.getUTCMonth()&&i<=this.startDate.getUTCDate()&&h<=this.startDate.getUTCHours()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&j>=this.endDate.getUTCFullYear()&&k>=this.endDate.getUTCMonth()&&i>=this.endDate.getUTCDate()&&h>=this.endDate.getUTCHours()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:if(this.startDate!==-Infinity&&j<=this.startDate.getUTCFullYear()&&k<=this.startDate.getUTCMonth()&&i<=this.startDate.getUTCDate()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&j>=this.endDate.getUTCFullYear()&&k>=this.endDate.getUTCMonth()&&i>=this.endDate.getUTCDate()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 2:if(this.startDate!==-Infinity&&j<=this.startDate.getUTCFullYear()&&k<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&j>=this.endDate.getUTCFullYear()&&k>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 3:case 4:if(this.startDate!==-Infinity&&j<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&j>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},mousewheel:function(i){i.preventDefault();i.stopPropagation();if(this.wheelPause){return}this.wheelPause=true;var h=i.originalEvent;var k=h.wheelDelta;var j=k>0?1:(k===0)?0:-1;if(this.wheelViewModeNavigationInverseDirection){j=-j}this.showMode(j);setTimeout(d.proxy(function(){this.wheelPause=false},this),this.wheelViewModeNavigationDelay)},click:function(l){l.stopPropagation();l.preventDefault();var m=d(l.target).closest("span, td, th, legend");if(m.is("."+this.icontype)){m=d(m).parent().closest("span, td, th, legend")}if(m.length==1){if(m.is(".disabled")){this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});return}switch(m[0].nodeName.toLowerCase()){case"th":switch(m[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var h=c.modes[this.viewMode].navStep*(m[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,h);break;case 1:this.viewDate=this.moveDate(this.viewDate,h);break;case 2:this.viewDate=this.moveMonth(this.viewDate,h);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,h);break}this.fill();this.element.trigger({type:m[0].className+":"+this.convertViewModeText(this.viewMode),date:this.viewDate,startDate:this.startDate,endDate:this.endDate});break;case"today":var i=new Date();i=g(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),0);if(i<this.startDate){i=this.startDate}else{if(i>this.endDate){i=this.endDate}}this.viewMode=this.startViewMode;this.showMode(0);this._setDate(i);this.fill();if(this.autoclose){this.hide()}break}break;case"span":if(!m.is(".disabled")){var o=this.viewDate.getUTCFullYear(),n=this.viewDate.getUTCMonth(),p=this.viewDate.getUTCDate(),q=this.viewDate.getUTCHours(),j=this.viewDate.getUTCMinutes(),r=this.viewDate.getUTCSeconds();if(m.is(".month")){this.viewDate.setUTCDate(1);n=m.parent().find("span").index(m);p=this.viewDate.getUTCDate();this.viewDate.setUTCMonth(n);this.element.trigger({type:"changeMonth",date:this.viewDate});if(this.viewSelect>=3){this._setDate(g(o,n,p,q,j,r,0))}}else{if(m.is(".year")){this.viewDate.setUTCDate(1);o=parseInt(m.text(),10)||0;this.viewDate.setUTCFullYear(o);this.element.trigger({type:"changeYear",date:this.viewDate});if(this.viewSelect>=4){this._setDate(g(o,n,p,q,j,r,0))}}else{if(m.is(".hour")){q=parseInt(m.text(),10)||0;if(m.hasClass("hour_am")||m.hasClass("hour_pm")){if(q==12&&m.hasClass("hour_am")){q=0}else{if(q!=12&&m.hasClass("hour_pm")){q+=12}}}this.viewDate.setUTCHours(q);this.element.trigger({type:"changeHour",date:this.viewDate});if(this.viewSelect>=1){this._setDate(g(o,n,p,q,j,r,0))}}else{if(m.is(".minute")){j=parseInt(m.text().substr(m.text().indexOf(":")+1),10)||0;this.viewDate.setUTCMinutes(j);this.element.trigger({type:"changeMinute",date:this.viewDate});if(this.viewSelect>=0){this._setDate(g(o,n,p,q,j,r,0))}}}}}if(this.viewMode!=0){var k=this.viewMode;this.showMode(-1);this.fill();if(k==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}}break;case"td":if(m.is(".day")&&!m.is(".disabled")){var p=parseInt(m.text(),10)||1;var o=this.viewDate.getUTCFullYear(),n=this.viewDate.getUTCMonth(),q=this.viewDate.getUTCHours(),j=this.viewDate.getUTCMinutes(),r=this.viewDate.getUTCSeconds();if(m.is(".old")){if(n===0){n=11;o-=1}else{n-=1}}else{if(m.is(".new")){if(n==11){n=0;o+=1}else{n+=1}}}this.viewDate.setUTCFullYear(o);this.viewDate.setUTCMonth(n,p);this.element.trigger({type:"changeDay",date:this.viewDate});if(this.viewSelect>=2){this._setDate(g(o,n,p,q,j,r,0))}}var k=this.viewMode;this.showMode(-1);this.fill();if(k==this.viewMode&&this.autoclose){this.hide()}break}}},_setDate:function(h,j){if(!j||j=="date"){this.date=h}if(!j||j=="view"){this.viewDate=h}this.fill();this.setValue();var i;if(this.isInput){i=this.element}else{if(this.component){i=this.element.find("input")}}if(i){i.change();if(this.autoclose&&(!j||j=="date")){}}this.element.trigger({type:"changeDate",date:this.date})},moveMinute:function(i,h){if(!h){return i}var j=new Date(i.valueOf());j.setUTCMinutes(j.getUTCMinutes()+(h*this.minuteStep));return j},moveHour:function(i,h){if(!h){return i}var j=new Date(i.valueOf());j.setUTCHours(j.getUTCHours()+h);return j},moveDate:function(i,h){if(!h){return i}var j=new Date(i.valueOf());j.setUTCDate(j.getUTCDate()+h);return j},moveMonth:function(h,j){if(!j){return h}var m=new Date(h.valueOf()),q=m.getUTCDate(),n=m.getUTCMonth(),l=Math.abs(j),p,o;j=j>0?1:-1;if(l==1){o=j==-1?function(){return m.getUTCMonth()==n}:function(){return m.getUTCMonth()!=p};p=n+j;m.setUTCMonth(p);if(p<0||p>11){p=(p+12)%12}}else{for(var k=0;k<l;k++){m=this.moveMonth(m,j)}p=m.getUTCMonth();m.setUTCDate(q);o=function(){return p!=m.getUTCMonth()}}while(o()){m.setUTCDate(--q);m.setUTCMonth(p)}return m},moveYear:function(i,h){return this.moveMonth(i,h*12)},dateWithinRange:function(h){return h>=this.startDate&&h<=this.endDate},keydown:function(l){if(this.picker.is(":not(:visible)")){if(l.keyCode==27){this.show()}return}var n=false,i,o,m,p,h;switch(l.keyCode){case 27:this.hide();l.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation){break}i=l.keyCode==37?-1:1;viewMode=this.viewMode;if(l.ctrlKey){viewMode+=2}else{if(l.shiftKey){viewMode+=1}}if(viewMode==4){p=this.moveYear(this.date,i);h=this.moveYear(this.viewDate,i)}else{if(viewMode==3){p=this.moveMonth(this.date,i);h=this.moveMonth(this.viewDate,i)}else{if(viewMode==2){p=this.moveDate(this.date,i);h=this.moveDate(this.viewDate,i)}else{if(viewMode==1){p=this.moveHour(this.date,i);h=this.moveHour(this.viewDate,i)}else{if(viewMode==0){p=this.moveMinute(this.date,i);h=this.moveMinute(this.viewDate,i)}}}}}if(this.dateWithinRange(p)){this.date=p;this.viewDate=h;this.setValue();this.update();l.preventDefault();n=true}break;case 38:case 40:if(!this.keyboardNavigation){break}i=l.keyCode==38?-1:1;viewMode=this.viewMode;if(l.ctrlKey){viewMode+=2}else{if(l.shiftKey){viewMode+=1}}if(viewMode==4){p=this.moveYear(this.date,i);h=this.moveYear(this.viewDate,i)}else{if(viewMode==3){p=this.moveMonth(this.date,i);h=this.moveMonth(this.viewDate,i)}else{if(viewMode==2){p=this.moveDate(this.date,i*7);h=this.moveDate(this.viewDate,i*7)}else{if(viewMode==1){if(this.showMeridian){p=this.moveHour(this.date,i*6);h=this.moveHour(this.viewDate,i*6)}else{p=this.moveHour(this.date,i*4);h=this.moveHour(this.viewDate,i*4)}}else{if(viewMode==0){p=this.moveMinute(this.date,i*4);h=this.moveMinute(this.viewDate,i*4)}}}}}if(this.dateWithinRange(p)){this.date=p;this.viewDate=h;this.setValue();this.update();l.preventDefault();n=true}break;case 13:if(this.viewMode!=0){var k=this.viewMode;this.showMode(-1);this.fill();if(k==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}l.preventDefault();break;case 9:this.hide();break}if(n){var j;if(this.isInput){j=this.element}else{if(this.component){j=this.element.find("input")}}if(j){j.change()}this.element.trigger({type:"changeDate",date:this.date})}},showMode:function(h){if(h){var i=Math.max(0,Math.min(c.modes.length-1,this.viewMode+h));if(i>=this.minView&&i<=this.maxView){this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:i});this.viewMode=i}}this.picker.find(">div").hide().filter(".datetimepicker-"+c.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()},reset:function(h){this._setDate(null,"date")},convertViewModeText:function(h){switch(h){case 4:return"decade";case 3:return"year";case 2:return"month";case 1:return"day";case 0:return"hour"}}};var a=d.fn.datetimepicker;d.fn.datetimepicker=function(j){var h=Array.apply(null,arguments);h.shift();var i;this.each(function(){var m=d(this),l=m.data("datetimepicker"),k=typeof j=="object"&&j;if(!l){m.data("datetimepicker",(l=new f(this,d.extend({},d.fn.datetimepicker.defaults,k))))}if(typeof j=="string"&&typeof l[j]=="function"){i=l[j].apply(l,h);if(i!==undefined){return false}}});if(i!==undefined){return i}else{return this}};d.fn.datetimepicker.defaults={};d.fn.datetimepicker.Constructor=f;var e=d.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today"}};var c={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(h){return(((h%4===0)&&(h%100!==0))||(h%400===0))},getDaysInMonth:function(h,i){return[31,(c.isLeapYear(h)?29:28),31,30,31,30,31,31,30,31,30,31][i]},getDefaultFormat:function(h,i){if(h=="standard"){if(i=="input"){return"yyyy-mm-dd hh:ii"}else{return"yyyy-mm-dd hh:ii:ss"}}else{if(h=="php"){if(i=="input"){return"Y-m-d H:i"}else{return"Y-m-d H:i:s"}}else{throw new Error("Invalid format type.")}}},validParts:function(h){if(h=="standard"){return/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g}else{if(h=="php"){return/[dDjlNwzFmMnStyYaABgGhHis]/g}else{throw new Error("Invalid format type.")}}},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(k,i){var h=k.replace(this.validParts(i),"\0").split("\0"),j=k.match(this.validParts(i));if(!h||!h.length||!j||j.length==0){throw new Error("Invalid date format.")}return{separators:h,parts:j}},parseDate:function(m,v,p,t){if(m instanceof Date){var x=new Date(m.valueOf()-m.getTimezoneOffset()*60000);x.setMilliseconds(0);return x}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(m)){v=this.parseFormat("yyyy-mm-dd",t)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(m)){v=this.parseFormat("yyyy-mm-dd hh:ii",t)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(m)){v=this.parseFormat("yyyy-mm-dd hh:ii:ss",t)}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(m)){var y=/([-+]\d+)([dmwy])/,n=m.match(/([-+]\d+)([dmwy])/g),h,l;m=new Date();for(var o=0;o<n.length;o++){h=y.exec(n[o]);l=parseInt(h[1]);switch(h[2]){case"d":m.setUTCDate(m.getUTCDate()+l);break;case"m":m=f.prototype.moveMonth.call(f.prototype,m,l);break;case"w":m.setUTCDate(m.getUTCDate()+l*7);break;case"y":m=f.prototype.moveYear.call(f.prototype,m,l);break}}return g(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),0)}var n=m&&m.toString().match(this.nonpunctuation)||[],m=new Date(0,0,0,0,0,0,0),r={},u=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P"],w={hh:function(s,i){return s.setUTCHours(i)},h:function(s,i){return s.setUTCHours(i)},HH:function(s,i){return s.setUTCHours(i==12?0:i)},H:function(s,i){return s.setUTCHours(i==12?0:i)},ii:function(s,i){return s.setUTCMinutes(i)},i:function(s,i){return s.setUTCMinutes(i)},ss:function(s,i){return s.setUTCSeconds(i)},s:function(s,i){return s.setUTCSeconds(i)},yyyy:function(s,i){return s.setUTCFullYear(i)},yy:function(s,i){return s.setUTCFullYear(2000+i)},m:function(s,i){i-=1;while(i<0){i+=12}i%=12;s.setUTCMonth(i);while(s.getUTCMonth()!=i){if(isNaN(s.getUTCMonth())){return s}else{s.setUTCDate(s.getUTCDate()-1)}}return s},d:function(s,i){return s.setUTCDate(i)},p:function(s,i){return s.setUTCHours(i==1?s.getUTCHours()+12:s.getUTCHours())}},k,q,h;w.M=w.MM=w.mm=w.m;w.dd=w.d;w.P=w.p;m=g(m.getFullYear(),m.getMonth(),m.getDate(),m.getHours(),m.getMinutes(),m.getSeconds());if(n.length==v.parts.length){for(var o=0,j=v.parts.length;o<j;o++){k=parseInt(n[o],10);h=v.parts[o];if(isNaN(k)){switch(h){case"MM":q=d(e[p].months).filter(function(){var i=this.slice(0,n[o].length),s=n[o].slice(0,i.length);return i==s});k=d.inArray(q[0],e[p].months)+1;break;case"M":q=d(e[p].monthsShort).filter(function(){var i=this.slice(0,n[o].length),s=n[o].slice(0,i.length);return i.toLowerCase()==s.toLowerCase()});k=d.inArray(q[0],e[p].monthsShort)+1;break;case"p":case"P":k=d.inArray(n[o].toLowerCase(),e[p].meridiem);break}}r[h]=k}for(var o=0,z;o<u.length;o++){z=u[o];if(z in r&&!isNaN(r[z])){w[z](m,r[z])}}}return m},formatDate:function(h,n,p,l){if(h==null){return""}var o;if(l=="standard"){o={yy:h.getUTCFullYear().toString().substring(2),yyyy:h.getUTCFullYear(),m:h.getUTCMonth()+1,M:e[p].monthsShort[h.getUTCMonth()],MM:e[p].months[h.getUTCMonth()],d:h.getUTCDate(),D:e[p].daysShort[h.getUTCDay()],DD:e[p].days[h.getUTCDay()],p:(e[p].meridiem.length==2?e[p].meridiem[h.getUTCHours()<12?0:1]:""),h:h.getUTCHours(),i:h.getUTCMinutes(),s:h.getUTCSeconds()};if(e[p].meridiem.length==2){o.H=(o.h%12==0?12:o.h%12)}else{o.H=o.h}o.HH=(o.H<10?"0":"")+o.H;o.P=o.p.toUpperCase();o.hh=(o.h<10?"0":"")+o.h;o.ii=(o.i<10?"0":"")+o.i;o.ss=(o.s<10?"0":"")+o.s;o.dd=(o.d<10?"0":"")+o.d;o.mm=(o.m<10?"0":"")+o.m}else{if(l=="php"){o={y:h.getUTCFullYear().toString().substring(2),Y:h.getUTCFullYear(),F:e[p].months[h.getUTCMonth()],M:e[p].monthsShort[h.getUTCMonth()],n:h.getUTCMonth()+1,t:c.getDaysInMonth(h.getUTCFullYear(),h.getUTCMonth()),j:h.getUTCDate(),l:e[p].days[h.getUTCDay()],D:e[p].daysShort[h.getUTCDay()],w:h.getUTCDay(),N:(h.getUTCDay()==0?7:h.getUTCDay()),S:(h.getUTCDate()%10<=e[p].suffix.length?e[p].suffix[h.getUTCDate()%10-1]:""),a:(e[p].meridiem.length==2?e[p].meridiem[h.getUTCHours()<12?0:1]:""),g:(h.getUTCHours()%12==0?12:h.getUTCHours()%12),G:h.getUTCHours(),i:h.getUTCMinutes(),s:h.getUTCSeconds()};o.m=(o.n<10?"0":"")+o.n;o.d=(o.j<10?"0":"")+o.j;o.A=o.a.toString().toUpperCase();o.h=(o.g<10?"0":"")+o.g;o.H=(o.G<10?"0":"")+o.G;o.i=(o.i<10?"0":"")+o.i;o.s=(o.s<10?"0":"")+o.s}else{throw new Error("Invalid format type.")}}var h=[],m=d.extend([],n.separators);for(var k=0,j=n.parts.length;k<j;k++){if(m.length){h.push(m.shift())}h.push(o[n.parts[k]])}if(m.length){h.push(m.shift())}return h.join("")},convertViewMode:function(h){switch(h){case 4:case"decade":h=4;break;case 3:case"year":h=3;break;case 2:case"month":h=2;break;case 1:case"day":h=1;break;case 0:case"hour":h=0;break}return h},headTemplate:'<thead><tr><th class="prev"><i class="{leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{rightArrow}"/></th></tr></thead>',headTemplateV3:'<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};c.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+c.headTemplate+"<tbody></tbody>"+c.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+"</table></div></div>";c.templateV3='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+c.headTemplateV3+c.contTemplate+c.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+c.headTemplateV3+c.contTemplate+c.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+c.headTemplateV3+"<tbody></tbody>"+c.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+c.headTemplateV3+c.contTemplate+c.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+c.headTemplateV3+c.contTemplate+c.footTemplate+"</table></div></div>";d.fn.datetimepicker.DPGlobal=c;d.fn.datetimepicker.noConflict=function(){d.fn.datetimepicker=a;return this};d(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(i){var h=d(this);if(h.data("datetimepicker")){return}i.preventDefault();h.datetimepicker("show")});d(function(){d('[data-provide="datetimepicker-inline"]').datetimepicker()})}(window.jQuery);
;(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var t={},n=Math.max,r=Math.min;t.c={};t.c.d=e(document);t.c.t=function(e){return e.originalEvent.touches.length-1};t.o=function(){var n=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.w=0;this.h=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.scale=1;this.relative=false;this.relativeWidth=false;this.relativeHeight=false;this.$div=null;this.run=function(){var t=function(e,t){var r;for(r in t){n.o[r]=t[r]}n._carve().init();n._configure()._draw()};if(this.$.data("kontroled"))return;this.$.data("kontroled",true);this.extend();this.o=e.extend({min:this.$.data("min")!==undefined?this.$.data("min"):0,max:this.$.data("max")!==undefined?this.$.data("max"):100,stopper:true,readOnly:this.$.data("readonly")||this.$.attr("readonly")==="readonly",cursor:this.$.data("cursor")===true&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"),1),.01)||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:this.$.data("displayinput")==null||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"bold",inline:false,step:this.$.data("step")||1,rotation:this.$.data("rotation"),draw:null,change:null,cancel:null,release:null,format:function(e){return e},parse:function(e){return parseFloat(e)}},this.o);this.o.flip=this.o.rotation==="anticlockwise"||this.o.rotation==="acw";if(!this.o.inputColor){this.o.inputColor=this.o.fgColor}if(this.$.is("fieldset")){this.v={};this.i=this.$.find("input");this.i.each(function(t){var r=e(this);n.i[t]=r;n.v[t]=n.o.parse(r.val());r.bind("change blur",function(){var e={};e[t]=r.val();n.val(n._validate(e))})});this.$.find("legend").remove()}else{this.i=this.$;this.v=this.o.parse(this.$.val());this.v===""&&(this.v=this.o.min);this.$.bind("change blur",function(){n.val(n._validate(n.o.parse(n.$.val())))})}!this.o.displayInput&&this.$.hide();this.$c=e(document.createElement("canvas")).attr({width:this.o.width,height:this.o.height});this.$div=e('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+"px;"+'"></div>');this.$.wrap(this.$div).before(this.$c);this.$div=this.$.parent();if(typeof G_vmlCanvasManager!=="undefined"){G_vmlCanvasManager.initElement(this.$c[0])}this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;if(!this.c){throw{name:"CanvasNotSupportedException",message:"Canvas not supported. Please use excanvas on IE8.0.",toString:function(){return this.name+": "+this.message}}}this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%");this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%");this.relative=this.relativeWidth||this.relativeHeight;this._carve();if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv)}else{this.cv=this.v}this.$.bind("configure",t).parent().bind("configure",t);this._listen()._configure()._xy().init();this.isInit=true;this.$.val(this.o.format(this.v));this._draw();return this};this._carve=function(){if(this.relative){var e=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100:this.$div.parent().width(),t=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=this.h=Math.min(e,t)}else{this.w=this.o.width;this.h=this.o.height}this.$div.css({width:this.w+"px",height:this.h+"px"});this.$c.attr({width:this.w,height:this.h});if(this.scale!==1){this.$c[0].width=this.$c[0].width*this.scale;this.$c[0].height=this.$c[0].height*this.scale;this.$c.width(this.w);this.$c.height(this.h)}return this};this._draw=function(){var e=true;n.g=n.c;n.clear();n.dH&&(e=n.dH());e!==false&&n.draw()};this._touch=function(e){var r=function(e){var t=n.xy2val(e.originalEvent.touches[n.t].pageX,e.originalEvent.touches[n.t].pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};this.t=t.c.t(e);r(e);t.c.d.bind("touchmove.k",r).bind("touchend.k",function(){t.c.d.unbind("touchmove.k touchend.k");n.val(n.cv)});return this};this._mouse=function(e){var r=function(e){var t=n.xy2val(e.pageX,e.pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};r(e);t.c.d.bind("mousemove.k",r).bind("keyup.k",function(e){if(e.keyCode===27){t.c.d.unbind("mouseup.k mousemove.k keyup.k");if(n.eH&&n.eH()===false)return;n.cancel()}}).bind("mouseup.k",function(e){t.c.d.unbind("mousemove.k mouseup.k keyup.k");n.val(n.cv)});return this};this._xy=function(){var e=this.$c.offset();this.x=e.left;this.y=e.top;return this};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(e){e.preventDefault();n._xy()._mouse(e)}).bind("touchstart",function(e){e.preventDefault();n._xy()._touch(e)});this.listen()}else{this.$.attr("readonly","readonly")}if(this.relative){e(window).resize(function(){n._carve().init();n._draw()})}return this};this._configure=function(){if(this.o.draw)this.dH=this.o.draw;if(this.o.change)this.cH=this.o.change;if(this.o.cancel)this.eH=this.o.cancel;if(this.o.release)this.rH=this.o.release;if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6")}else{this.fgColor=this.o.fgColor}return this};this._clear=function(){this.$c[0].width=this.$c[0].width};this._validate=function(e){var t=~~((e<0?-.5:.5)+e/this.o.step)*this.o.step;return Math.round(t*100)/100};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(e){};this.val=function(e){};this.xy2val=function(e,t){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(e,t){var n;e=e.substring(1,7);n=[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)];return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"};this.copy=function(e,t){for(var n in e){t[n]=e[n]}}};t.Dial=function(){t.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=e.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:true},this.o)};this.val=function(e,t){if(null!=e){e=this.o.parse(e);if(t!==false&&e!=this.v&&this.rH&&this.rH(e)===false){return}this.cv=this.o.stopper?n(r(e,this.o.max),this.o.min):e;this.v=this.cv;this.$.val(this.o.format(this.v));this._draw()}else{return this.v}};this.xy2val=function(e,t){var i,s;i=Math.atan2(e-(this.x+this.w2),-(t-this.y-this.w2))-this.angleOffset;if(this.o.flip){i=this.angleArc-i-this.PI2}if(this.angleArc!=this.PI2&&i<0&&i>-.5){i=0}else if(i<0){i+=this.PI2}s=i*(this.o.max-this.o.min)/this.angleArc+this.o.min;this.o.stopper&&(s=n(r(s,this.o.max),this.o.min));return s};this.listen=function(){var t=this,i,s,o=function(e){e.preventDefault();var o=e.originalEvent,u=o.detail||o.wheelDeltaX,a=o.detail||o.wheelDeltaY,f=t._validate(t.o.parse(t.$.val()))+(u>0||a>0?t.o.step:u<0||a<0?-t.o.step:0);f=n(r(f,t.o.max),t.o.min);t.val(f,false);if(t.rH){clearTimeout(i);i=setTimeout(function(){t.rH(f);i=null},100);if(!s){s=setTimeout(function(){if(i)t.rH(f);s=null},200)}}},u,a,f=1,l={37:-t.o.step,38:t.o.step,39:t.o.step,40:-t.o.step};this.$.bind("keydown",function(i){var s=i.keyCode;if(s>=96&&s<=105){s=i.keyCode=s-48}u=parseInt(String.fromCharCode(s));if(isNaN(u)){s!==13&&s!==8&&s!==9&&s!==189&&(s!==190||t.$.val().match(/\./))&&i.preventDefault();if(e.inArray(s,[37,38,39,40])>-1){i.preventDefault();var o=t.o.parse(t.$.val())+l[s]*f;t.o.stopper&&(o=n(r(o,t.o.max),t.o.min));t.change(t._validate(o));t._draw();a=window.setTimeout(function(){f*=2},30)}}}).bind("keyup",function(e){if(isNaN(u)){if(a){window.clearTimeout(a);a=null;f=1;t.val(t.$.val())}}else{t.$.val()>t.o.max&&t.$.val(t.o.max)||t.$.val()<t.o.min&&t.$.val(t.o.min)}});this.$c.bind("mousewheel DOMMouseScroll",o);this.$.bind("mousewheel DOMMouseScroll",o)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max){this.v=this.o.min}this.$.val(this.v);this.w2=this.w/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2*this.scale;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var e=n(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.w/2+4>>0)+"px",height:(this.w/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.w/3>>0)+"px","margin-left":"-"+(this.w*3/4+2>>0)+"px",border:0,background:"none",font:this.o.fontWeight+" "+(this.w/e>>0)+"px "+this.o.font,"text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})};this.change=function(e){this.cv=e;this.$.val(this.o.format(e))};this.angle=function(e){return(e-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.arc=function(e){var t,n;e=this.angle(e);if(this.o.flip){t=this.endAngle+1e-5;n=t-e-1e-5}else{t=this.startAngle-1e-5;n=t+e+1e-5}this.o.cursor&&(t=n-this.cursorExt)&&(n=n+this.cursorExt);return{s:t,e:n,d:this.o.flip&&!this.o.cursor}};this.draw=function(){var e=this.g,t=this.arc(this.cv),n,r=1;e.lineWidth=this.lineWidth;e.lineCap=this.lineCap;if(this.o.bgColor!=="none"){e.beginPath();e.strokeStyle=this.o.bgColor;e.arc(this.xy,this.xy,this.radius,this.endAngle-1e-5,this.startAngle+1e-5,true);e.stroke()}if(this.o.displayPrevious){n=this.arc(this.v);e.beginPath();e.strokeStyle=this.pColor;e.arc(this.xy,this.xy,this.radius,n.s,n.e,n.d);e.stroke();r=this.cv==this.v}e.beginPath();e.strokeStyle=r?this.o.fgColor:this.fgColor;e.arc(this.xy,this.xy,this.radius,t.s,t.e,t.d);e.stroke()};this.cancel=function(){this.val(this.v)}};e.fn.dial=e.fn.knob=function(n){return this.each(function(){var r=new t.Dial;r.o=n;r.$=e(this);r.run()}).parent()}});/*!
 * Isotope PACKAGED v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

/**
 * Bridget makes jQuery widgets
 * v1.1.0
 * MIT license
 */

( function( window ) {



// -------------------------- utils -------------------------- //

    var slice = Array.prototype.slice;

    function noop() {}

// -------------------------- definition -------------------------- //

    function defineBridget( $ ) {

// bail if no jQuery
        if ( !$ ) {
            return;
        }

// -------------------------- addOptionMethod -------------------------- //

        /**
         * adds option method -> $().plugin('option', {...})
         * @param {Function} PluginClass - constructor class
         */
        function addOptionMethod( PluginClass ) {
            // don't overwrite original option method
            if ( PluginClass.prototype.option ) {
                return;
            }

            // option setter
            PluginClass.prototype.option = function( opts ) {
                // bail out if not an object
                if ( !$.isPlainObject( opts ) ){
                    return;
                }
                this.options = $.extend( true, this.options, opts );
            };
        }

// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
        var logError = typeof console === 'undefined' ? noop :
            function( message ) {
                console.error( message );
            };

        /**
         * jQuery plugin bridge, access methods like $elem.plugin('method')
         * @param {String} namespace - plugin name
         * @param {Function} PluginClass - constructor class
         */
        function bridge( namespace, PluginClass ) {
            // add to jQuery fn namespace
            $.fn[ namespace ] = function( options ) {
                if ( typeof options === 'string' ) {
                    // call plugin method when first argument is a string
                    // get arguments for method
                    var args = slice.call( arguments, 1 );

                    for ( var i=0, len = this.length; i < len; i++ ) {
                        var elem = this[i];
                        var instance = $.data( elem, namespace );
                        if ( !instance ) {
                            logError( "cannot call methods on " + namespace + " prior to initialization; " +
                                "attempted to call '" + options + "'" );
                            continue;
                        }
                        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
                            logError( "no such method '" + options + "' for " + namespace + " instance" );
                            continue;
                        }

                        // trigger method with arguments
                        var returnValue = instance[ options ].apply( instance, args );

                        // break look and return first value if provided
                        if ( returnValue !== undefined ) {
                            return returnValue;
                        }
                    }
                    // return this if no return value
                    return this;
                } else {
                    return this.each( function() {
                        var instance = $.data( this, namespace );
                        if ( instance ) {
                            // apply options & init
                            instance.option( options );
                            instance._init();
                        } else {
                            // initialize new instance
                            instance = new PluginClass( this, options );
                            $.data( this, namespace, instance );
                        }
                    });
                }
            };

        }

// -------------------------- bridget -------------------------- //

        /**
         * converts a Prototypical class into a proper jQuery plugin
         *   the class must have a ._init method
         * @param {String} namespace - plugin name, used in $().pluginName
         * @param {Function} PluginClass - constructor class
         */
        $.bridget = function( namespace, PluginClass ) {
            addOptionMethod( PluginClass );
            bridge( namespace, PluginClass );
        };

        return $.bridget;

    }

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'jquery-bridget/jquery.bridget',[ 'jquery' ], defineBridget );
    } else if ( typeof exports === 'object' ) {
        defineBridget( require('jquery') );
    } else {
        // get jquery from browser global
        defineBridget( window.jQuery );
    }

})( window );

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {



    var docElem = document.documentElement;

    var bind = function() {};

    function getIEEvent( obj ) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }

    if ( docElem.addEventListener ) {
        bind = function( obj, type, fn ) {
            obj.addEventListener( type, fn, false );
        };
    } else if ( docElem.attachEvent ) {
        bind = function( obj, type, fn ) {
            obj[ type + fn ] = fn.handleEvent ?
                function() {
                    var event = getIEEvent( obj );
                    fn.handleEvent.call( fn, event );
                } :
                function() {
                    var event = getIEEvent( obj );
                    fn.call( obj, event );
                };
            obj.attachEvent( "on" + type, obj[ type + fn ] );
        };
    }

    var unbind = function() {};

    if ( docElem.removeEventListener ) {
        unbind = function( obj, type, fn ) {
            obj.removeEventListener( type, fn, false );
        };
    } else if ( docElem.detachEvent ) {
        unbind = function( obj, type, fn ) {
            obj.detachEvent( "on" + type, obj[ type + fn ] );
            try {
                delete obj[ type + fn ];
            } catch ( err ) {
                // can't delete window object properties
                obj[ type + fn ] = undefined;
            }
        };
    }

    var eventie = {
        bind: bind,
        unbind: unbind
    };

// ----- module definition ----- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'eventie/eventie',eventie );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = eventie;
    } else {
        // browser global
        window.eventie = eventie;
    }

})( this );

/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {



    var document = window.document;
// collection of functions to be triggered on ready
    var queue = [];

    function docReady( fn ) {
        // throw out non-functions
        if ( typeof fn !== 'function' ) {
            return;
        }

        if ( docReady.isReady ) {
            // ready now, hit it
            fn();
        } else {
            // queue function when ready
            queue.push( fn );
        }
    }

    docReady.isReady = false;

// triggered on various doc ready events
    function onReady( event ) {
        // bail if already triggered or IE8 document is not ready just yet
        var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
        if ( docReady.isReady || isIE8NotReady ) {
            return;
        }

        trigger();
    }

    function trigger() {
        docReady.isReady = true;
        // process queue
        for ( var i=0, len = queue.length; i < len; i++ ) {
            var fn = queue[i];
            fn();
        }
    }

    function defineDocReady( eventie ) {
        // trigger ready if page is ready
        if ( document.readyState === 'complete' ) {
            trigger();
        } else {
            // listen for events
            eventie.bind( document, 'DOMContentLoaded', onReady );
            eventie.bind( document, 'readystatechange', onReady );
            eventie.bind( window, 'load', onReady );
        }

        return docReady;
    }

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );
    } else if ( typeof exports === 'object' ) {
        module.exports = defineDocReady( require('eventie') );
    } else {
        // browser global
        window.docReady = defineDocReady( window.eventie );
    }

})( window );

/*!
 * EventEmitter v4.2.9 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {


    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter',[],function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {



    var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty( propName ) {
        if ( !propName ) {
            return;
        }

        // test standard property first
        if ( typeof docElemStyle[ propName ] === 'string' ) {
            return propName;
        }

        // capitalize
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);

        // test vendor specific properties
        var prefixed;
        for ( var i=0, len = prefixes.length; i < len; i++ ) {
            prefixed = prefixes[i] + propName;
            if ( typeof docElemStyle[ prefixed ] === 'string' ) {
                return prefixed;
            }
        }
    }

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'get-style-property/get-style-property',[],function() {
            return getStyleProperty;
        });
    } else if ( typeof exports === 'object' ) {
        // CommonJS for Component
        module.exports = getStyleProperty;
    } else {
        // browser global
        window.getStyleProperty = getStyleProperty;
    }

})( window );

/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {



// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
    function getStyleSize( value ) {
        var num = parseFloat( value );
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') === -1 && !isNaN( num );
        return isValid && num;
    }

    function noop() {}

    var logError = typeof console === 'undefined' ? noop :
        function( message ) {
            console.error( message );
        };

// -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for ( var i=0, len = measurements.length; i < len; i++ ) {
            var measurement = measurements[i];
            size[ measurement ] = 0;
        }
        return size;
    }



    function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

        var isSetup = false;

        var getStyle, boxSizingProp, isBoxSizeOuter;

        /**
         * setup vars and functions
         * do it on initial getSize(), rather than on script load
         * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
         */
        function setup() {
            // setup once
            if ( isSetup ) {
                return;
            }
            isSetup = true;

            var getComputedStyle = window.getComputedStyle;
            getStyle = ( function() {
                var getStyleFn = getComputedStyle ?
                    function( elem ) {
                        return getComputedStyle( elem, null );
                    } :
                    function( elem ) {
                        return elem.currentStyle;
                    };

                return function getStyle( elem ) {
                    var style = getStyleFn( elem );
                    if ( !style ) {
                        logError( 'Style returned ' + style +
                            '. Are you running this code in a hidden iframe on Firefox? ' +
                            'See http://bit.ly/getsizebug1' );
                    }
                    return style;
                };
            })();

            // -------------------------- box sizing -------------------------- //

            boxSizingProp = getStyleProperty('boxSizing');

            /**
             * WebKit measures the outer-width on style.width on border-box elems
             * IE & Firefox measures the inner-width
             */
            if ( boxSizingProp ) {
                var div = document.createElement('div');
                div.style.width = '200px';
                div.style.padding = '1px 2px 3px 4px';
                div.style.borderStyle = 'solid';
                div.style.borderWidth = '1px 2px 3px 4px';
                div.style[ boxSizingProp ] = 'border-box';

                var body = document.body || document.documentElement;
                body.appendChild( div );
                var style = getStyle( div );

                isBoxSizeOuter = getStyleSize( style.width ) === 200;
                body.removeChild( div );
            }

        }

// -------------------------- getSize -------------------------- //

        function getSize( elem ) {
            setup();

            // use querySeletor if elem is string
            if ( typeof elem === 'string' ) {
                elem = document.querySelector( elem );
            }

            // do not proceed on non-objects
            if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
                return;
            }

            var style = getStyle( elem );

            // if hidden, everything is 0
            if ( style.display === 'none' ) {
                return getZeroSize();
            }

            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;

            var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
            style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

            // get all measurements
            for ( var i=0, len = measurements.length; i < len; i++ ) {
                var measurement = measurements[i];
                var value = style[ measurement ];
                value = mungeNonPixel( elem, value );
                var num = parseFloat( value );
                // any 'auto', 'medium' value will be 0
                size[ measurement ] = !isNaN( num ) ? num : 0;
            }

            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;

            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize( style.width );
            if ( styleWidth !== false ) {
                size.width = styleWidth +
                    // add padding and border unless it's already including it
                    ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
            }

            var styleHeight = getStyleSize( style.height );
            if ( styleHeight !== false ) {
                size.height = styleHeight +
                    // add padding and border unless it's already including it
                    ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
            }

            size.innerWidth = size.width - ( paddingWidth + borderWidth );
            size.innerHeight = size.height - ( paddingHeight + borderHeight );

            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;

            return size;
        }

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
        function mungeNonPixel( elem, value ) {
            // IE8 and has percent value
            if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
                return value;
            }
            var style = elem.style;
            // Remember the original values
            var left = style.left;
            var rs = elem.runtimeStyle;
            var rsLeft = rs && rs.left;

            // Put in the new values to get a computed value out
            if ( rsLeft ) {
                rs.left = elem.currentStyle.left;
            }
            style.left = value;
            value = style.pixelLeft;

            // Revert the changed values
            style.left = left;
            if ( rsLeft ) {
                rs.left = rsLeft;
            }

            return value;
        }

        return getSize;

    }

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD for RequireJS
        define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );
    } else if ( typeof exports === 'object' ) {
        // CommonJS for Component
        module.exports = defineGetSize( require('desandro-get-style-property') );
    } else {
        // browser global
        window.getSize = defineGetSize( window.getStyleProperty );
    }

})( window );

/**
 * matchesSelector v1.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {



    var matchesMethod = ( function() {
        // check un-prefixed
        if ( ElemProto.matchesSelector ) {
            return 'matchesSelector';
        }
        // check vendor prefixes
        var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

        for ( var i=0, len = prefixes.length; i < len; i++ ) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if ( ElemProto[ method ] ) {
                return method;
            }
        }
    })();

    // ----- match ----- //

    function match( elem, selector ) {
        return elem[ matchesMethod ]( selector );
    }

    // ----- appendToFragment ----- //

    function checkParent( elem ) {
        // not needed if already has parent
        if ( elem.parentNode ) {
            return;
        }
        var fragment = document.createDocumentFragment();
        fragment.appendChild( elem );
    }

    // ----- query ----- //

    // fall back to using QSA
    // thx @jonathantneal https://gist.github.com/3062955
    function query( elem, selector ) {
        // append to fragment if no parent
        checkParent( elem );

        // match elem with all selected elems of parent
        var elems = elem.parentNode.querySelectorAll( selector );
        for ( var i=0, len = elems.length; i < len; i++ ) {
            // return true if match
            if ( elems[i] === elem ) {
                return true;
            }
        }
        // otherwise return false
        return false;
    }

    // ----- matchChild ----- //

    function matchChild( elem, selector ) {
        checkParent( elem );
        return match( elem, selector );
    }

    // ----- matchesSelector ----- //

    var matchesSelector;

    if ( matchesMethod ) {
        // IE9 supports matchesSelector, but doesn't work on orphaned elems
        // check for that
        var div = document.createElement('div');
        var supportsOrphans = match( div, 'div' );
        matchesSelector = supportsOrphans ? match : matchChild;
    } else {
        matchesSelector = query;
    }

    // transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'matches-selector/matches-selector',[],function() {
            return matchesSelector;
        });
    } else if ( typeof exports === 'object' ) {
        module.exports = matchesSelector;
    }
    else {
        // browser global
        window.matchesSelector = matchesSelector;
    }

})( Element.prototype );

/**
 * Outlayer Item
 */

( function( window ) {



// ----- get style ----- //

    var getComputedStyle = window.getComputedStyle;
    var getStyle = getComputedStyle ?
        function( elem ) {
            return getComputedStyle( elem, null );
        } :
        function( elem ) {
            return elem.currentStyle;
        };


// extend objects
    function extend( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    }

    function isEmptyObj( obj ) {
        for ( var prop in obj ) {
            return false;
        }
        prop = null;
        return true;
    }

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    function toDash( str ) {
        return str.replace( /([A-Z])/g, function( $1 ){
            return '-' + $1.toLowerCase();
        });
    }

// -------------------------- Outlayer definition -------------------------- //

    function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

// -------------------------- CSS3 support -------------------------- //

        var transitionProperty = getStyleProperty('transition');
        var transformProperty = getStyleProperty('transform');
        var supportsCSS3 = transitionProperty && transformProperty;
        var is3d = !!getStyleProperty('perspective');

        var transitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'otransitionend',
            transition: 'transitionend'
        }[ transitionProperty ];

// properties that could have vendor prefix
        var prefixableProperties = [
            'transform',
            'transition',
            'transitionDuration',
            'transitionProperty'
        ];

// cache all vendor properties
        var vendorProperties = ( function() {
            var cache = {};
            for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
                var prop = prefixableProperties[i];
                var supportedProp = getStyleProperty( prop );
                if ( supportedProp && supportedProp !== prop ) {
                    cache[ prop ] = supportedProp;
                }
            }
            return cache;
        })();

// -------------------------- Item -------------------------- //

        function Item( element, layout ) {
            if ( !element ) {
                return;
            }

            this.element = element;
            // parent layout class, i.e. Masonry, Isotope, or Packery
            this.layout = layout;
            this.position = {
                x: 0,
                y: 0
            };

            this._create();
        }

// inherit EventEmitter
        extend( Item.prototype, EventEmitter.prototype );

        Item.prototype._create = function() {
            // transition objects
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            };

            this.css({
                position: 'absolute'
            });
        };

// trigger specified handler for event type
        Item.prototype.handleEvent = function( event ) {
            var method = 'on' + event.type;
            if ( this[ method ] ) {
                this[ method ]( event );
            }
        };

        Item.prototype.getSize = function() {
            this.size = getSize( this.element );
        };

        /**
         * apply CSS styles to element
         * @param {Object} style
         */
        Item.prototype.css = function( style ) {
            var elemStyle = this.element.style;

            for ( var prop in style ) {
                // use vendor property if available
                var supportedProp = vendorProperties[ prop ] || prop;
                elemStyle[ supportedProp ] = style[ prop ];
            }
        };

        // measure position, and sets it
        Item.prototype.getPosition = function() {
            var style = getStyle( this.element );
            var layoutOptions = this.layout.options;
            var isOriginLeft = layoutOptions.isOriginLeft;
            var isOriginTop = layoutOptions.isOriginTop;
            var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
            var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

            // clean up 'auto' or other non-integer values
            x = isNaN( x ) ? 0 : x;
            y = isNaN( y ) ? 0 : y;
            // remove padding from measurement
            var layoutSize = this.layout.size;
            x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
            y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

            this.position.x = x;
            this.position.y = y;
        };

// set settled position, apply padding
        Item.prototype.layoutPosition = function() {
            var layoutSize = this.layout.size;
            var layoutOptions = this.layout.options;
            var style = {};

            if ( layoutOptions.isOriginLeft ) {
                style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
                // reset other property
                style.right = '';
            } else {
                style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
                style.left = '';
            }

            if ( layoutOptions.isOriginTop ) {
                style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
                style.bottom = '';
            } else {
                style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
                style.top = '';
            }

            this.css( style );
            this.emitEvent( 'layout', [ this ] );
        };


// transform translate function
        var translate = is3d ?
            function( x, y ) {
                return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            } :
            function( x, y ) {
                return 'translate(' + x + 'px, ' + y + 'px)';
            };


        Item.prototype._transitionTo = function( x, y ) {
            this.getPosition();
            // get current x & y from top/left
            var curX = this.position.x;
            var curY = this.position.y;

            var compareX = parseInt( x, 10 );
            var compareY = parseInt( y, 10 );
            var didNotMove = compareX === this.position.x && compareY === this.position.y;

            // save end position
            this.setPosition( x, y );

            // if did not move and not transitioning, just go to layout
            if ( didNotMove && !this.isTransitioning ) {
                this.layoutPosition();
                return;
            }

            var transX = x - curX;
            var transY = y - curY;
            var transitionStyle = {};
            // flip cooridinates if origin on right or bottom
            var layoutOptions = this.layout.options;
            transX = layoutOptions.isOriginLeft ? transX : -transX;
            transY = layoutOptions.isOriginTop ? transY : -transY;
            transitionStyle.transform = translate( transX, transY );

            this.transition({
                to: transitionStyle,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: true
            });
        };

// non transition + transform support
        Item.prototype.goTo = function( x, y ) {
            this.setPosition( x, y );
            this.layoutPosition();
        };

// use transition and transforms if supported
        Item.prototype.moveTo = supportsCSS3 ?
            Item.prototype._transitionTo : Item.prototype.goTo;

        Item.prototype.setPosition = function( x, y ) {
            this.position.x = parseInt( x, 10 );
            this.position.y = parseInt( y, 10 );
        };

// ----- transition ----- //

        /**
         * @param {Object} style - CSS
         * @param {Function} onTransitionEnd
         */

// non transition, just trigger callback
        Item.prototype._nonTransition = function( args ) {
            this.css( args.to );
            if ( args.isCleaning ) {
                this._removeStyles( args.to );
            }
            for ( var prop in args.onTransitionEnd ) {
                args.onTransitionEnd[ prop ].call( this );
            }
        };

        /**
         * proper transition
         * @param {Object} args - arguments
         *   @param {Object} to - style to transition to
         *   @param {Object} from - style to start transition from
         *   @param {Boolean} isCleaning - removes transition styles after transition
         *   @param {Function} onTransitionEnd - callback
         */
        Item.prototype._transition = function( args ) {
            // redirect to nonTransition if no transition duration
            if ( !parseFloat( this.layout.options.transitionDuration ) ) {
                this._nonTransition( args );
                return;
            }

            var _transition = this._transn;
            // keep track of onTransitionEnd callback by css property
            for ( var prop in args.onTransitionEnd ) {
                _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
            }
            // keep track of properties that are transitioning
            for ( prop in args.to ) {
                _transition.ingProperties[ prop ] = true;
                // keep track of properties to clean up when transition is done
                if ( args.isCleaning ) {
                    _transition.clean[ prop ] = true;
                }
            }

            // set from styles
            if ( args.from ) {
                this.css( args.from );
                // force redraw. http://blog.alexmaccaw.com/css-transitions
                var h = this.element.offsetHeight;
                // hack for JSHint to hush about unused var
                h = null;
            }
            // enable transition
            this.enableTransition( args.to );
            // set styles that are transitioning
            this.css( args.to );

            this.isTransitioning = true;

        };

        var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
            ',opacity' );

        Item.prototype.enableTransition = function(/* style */) {
            // only enable if not already transitioning
            // bug in IE10 were re-setting transition style will prevent
            // transitionend event from triggering
            if ( this.isTransitioning ) {
                return;
            }

            // make transition: foo, bar, baz from style object
            // TODO uncomment this bit when IE10 bug is resolved
            // var transitionValue = [];
            // for ( var prop in style ) {
            //   // dash-ify camelCased properties like WebkitTransition
            //   transitionValue.push( toDash( prop ) );
            // }
            // enable transition styles
            // HACK always enable transform,opacity for IE10
            this.css({
                transitionProperty: itemTransitionProperties,
                transitionDuration: this.layout.options.transitionDuration
            });
            // listen for transition end event
            this.element.addEventListener( transitionEndEvent, this, false );
        };

        Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

        Item.prototype.onwebkitTransitionEnd = function( event ) {
            this.ontransitionend( event );
        };

        Item.prototype.onotransitionend = function( event ) {
            this.ontransitionend( event );
        };

// properties that I munge to make my life easier
        var dashedVendorProperties = {
            '-webkit-transform': 'transform',
            '-moz-transform': 'transform',
            '-o-transform': 'transform'
        };

        Item.prototype.ontransitionend = function( event ) {
            // disregard bubbled events from children
            if ( event.target !== this.element ) {
                return;
            }
            var _transition = this._transn;
            // get property name of transitioned property, convert to prefix-free
            var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

            // remove property that has completed transitioning
            delete _transition.ingProperties[ propertyName ];
            // check if any properties are still transitioning
            if ( isEmptyObj( _transition.ingProperties ) ) {
                // all properties have completed transitioning
                this.disableTransition();
            }
            // clean style
            if ( propertyName in _transition.clean ) {
                // clean up style
                this.element.style[ event.propertyName ] = '';
                delete _transition.clean[ propertyName ];
            }
            // trigger onTransitionEnd callback
            if ( propertyName in _transition.onEnd ) {
                var onTransitionEnd = _transition.onEnd[ propertyName ];
                onTransitionEnd.call( this );
                delete _transition.onEnd[ propertyName ];
            }

            this.emitEvent( 'transitionEnd', [ this ] );
        };

        Item.prototype.disableTransition = function() {
            this.removeTransitionStyles();
            this.element.removeEventListener( transitionEndEvent, this, false );
            this.isTransitioning = false;
        };

        /**
         * removes style property from element
         * @param {Object} style
         **/
        Item.prototype._removeStyles = function( style ) {
            // clean up transition styles
            var cleanStyle = {};
            for ( var prop in style ) {
                cleanStyle[ prop ] = '';
            }
            this.css( cleanStyle );
        };

        var cleanTransitionStyle = {
            transitionProperty: '',
            transitionDuration: ''
        };

        Item.prototype.removeTransitionStyles = function() {
            // remove transition
            this.css( cleanTransitionStyle );
        };

// ----- show/hide/remove ----- //

// remove element from DOM
        Item.prototype.removeElem = function() {
            this.element.parentNode.removeChild( this.element );
            this.emitEvent( 'remove', [ this ] );
        };

        Item.prototype.remove = function() {
            // just remove element if no transition support or no transition
            if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
                this.removeElem();
                return;
            }

            // start transition
            var _this = this;
            this.on( 'transitionEnd', function() {
                _this.removeElem();
                return true; // bind once
            });
            this.hide();
        };

        Item.prototype.reveal = function() {
            delete this.isHidden;
            // remove display: none
            this.css({ display: '' });

            var options = this.layout.options;
            this.transition({
                from: options.hiddenStyle,
                to: options.visibleStyle,
                isCleaning: true
            });
        };

        Item.prototype.hide = function() {
            // set flag
            this.isHidden = true;
            // remove display: none
            this.css({ display: '' });

            var options = this.layout.options;
            this.transition({
                from: options.visibleStyle,
                to: options.hiddenStyle,
                // keep hidden stuff hidden
                isCleaning: true,
                onTransitionEnd: {
                    opacity: function() {
                        // check if still hidden
                        // during transition, item may have been un-hidden
                        if ( this.isHidden ) {
                            this.css({ display: 'none' });
                        }
                    }
                }
            });
        };

        Item.prototype.destroy = function() {
            this.css({
                position: '',
                left: '',
                right: '',
                top: '',
                bottom: '',
                transition: '',
                transform: ''
            });
        };

        return Item;

    }

// -------------------------- transport -------------------------- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'outlayer/item',[
                'eventEmitter/EventEmitter',
                'get-size/get-size',
                'get-style-property/get-style-property'
            ],
            outlayerItemDefinition );
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = outlayerItemDefinition(
            require('wolfy87-eventemitter'),
            require('get-size'),
            require('desandro-get-style-property')
        );
    } else {
        // browser global
        window.Outlayer = {};
        window.Outlayer.Item = outlayerItemDefinition(
            window.EventEmitter,
            window.getSize,
            window.getStyleProperty
        );
    }

})( window );

/*!
 * Outlayer v1.3.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window ) {



// ----- vars ----- //

    var document = window.document;
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};

// -------------------------- helpers -------------------------- //

// extend objects
    function extend( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    }


    var objToString = Object.prototype.toString;
    function isArray( obj ) {
        return objToString.call( obj ) === '[object Array]';
    }

// turn element or nodeList into an array
    function makeArray( obj ) {
        var ary = [];
        if ( isArray( obj ) ) {
            // use object if already an array
            ary = obj;
        } else if ( obj && typeof obj.length === 'number' ) {
            // convert nodeList to array
            for ( var i=0, len = obj.length; i < len; i++ ) {
                ary.push( obj[i] );
            }
        } else {
            // array of single index
            ary.push( obj );
        }
        return ary;
    }

// http://stackoverflow.com/a/384380/182183
    var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?
        function isElementDOM2( obj ) {
            return obj instanceof HTMLElement;
        } :
        function isElementQuirky( obj ) {
            return obj && typeof obj === 'object' &&
                obj.nodeType === 1 && typeof obj.nodeName === 'string';
        };

// index of helper cause IE8
    var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
        return ary.indexOf( obj );
    } : function( ary, obj ) {
        for ( var i=0, len = ary.length; i < len; i++ ) {
            if ( ary[i] === obj ) {
                return i;
            }
        }
        return -1;
    };

    function removeFrom( obj, ary ) {
        var index = indexOf( ary, obj );
        if ( index !== -1 ) {
            ary.splice( index, 1 );
        }
    }

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    function toDashed( str ) {
        return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
            return $1 + '-' + $2;
        }).toLowerCase();
    }


    function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
        var GUID = 0;
// internal store of all Outlayer intances
        var instances = {};


        /**
         * @param {Element, String} element
         * @param {Object} options
         * @constructor
         */
        function Outlayer( element, options ) {
            // use element as selector string
            if ( typeof element === 'string' ) {
                element = document.querySelector( element );
            }

            // bail out if not proper element
            if ( !element || !isElement( element ) ) {
                if ( console ) {
                    console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
                }
                return;
            }

            this.element = element;

            // options
            this.options = extend( {}, this.constructor.defaults );
            this.option( options );

            // add id for Outlayer.getFromElement
            var id = ++GUID;
            this.element.outlayerGUID = id; // expando
            instances[ id ] = this; // associate via id

            // kick it off
            this._create();

            if ( this.options.isInitLayout ) {
                this.layout();
            }
        }

// settings are for internal use only
        Outlayer.namespace = 'outlayer';
        Outlayer.Item = Item;

// default options
        Outlayer.defaults = {
            containerStyle: {
                position: 'relative'
            },
            isInitLayout: true,
            isOriginLeft: true,
            isOriginTop: true,
            isResizeBound: true,
            isResizingContainer: true,
            // item options
            transitionDuration: '0.4s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            }
        };

// inherit EventEmitter
        extend( Outlayer.prototype, EventEmitter.prototype );

        /**
         * set options
         * @param {Object} opts
         */
        Outlayer.prototype.option = function( opts ) {
            extend( this.options, opts );
        };

        Outlayer.prototype._create = function() {
            // get items from children
            this.reloadItems();
            // elements that affect layout, but are not laid out
            this.stamps = [];
            this.stamp( this.options.stamp );
            // set container style
            extend( this.element.style, this.options.containerStyle );

            // bind resize method
            if ( this.options.isResizeBound ) {
                this.bindResize();
            }
        };

// goes through all children again and gets bricks in proper order
        Outlayer.prototype.reloadItems = function() {
            // collection of item elements
            this.items = this._itemize( this.element.children );
        };


        /**
         * turn elements into Outlayer.Items to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - collection of new Outlayer Items
         */
        Outlayer.prototype._itemize = function( elems ) {

            var itemElems = this._filterFindItemElements( elems );
            var Item = this.constructor.Item;

            // create new Outlayer Items for collection
            var items = [];
            for ( var i=0, len = itemElems.length; i < len; i++ ) {
                var elem = itemElems[i];
                var item = new Item( elem, this );
                items.push( item );
            }

            return items;
        };

        /**
         * get item elements to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - item elements
         */
        Outlayer.prototype._filterFindItemElements = function( elems ) {
            // make array of elems
            elems = makeArray( elems );
            var itemSelector = this.options.itemSelector;
            var itemElems = [];

            for ( var i=0, len = elems.length; i < len; i++ ) {
                var elem = elems[i];
                // check that elem is an actual element
                if ( !isElement( elem ) ) {
                    continue;
                }
                // filter & find items if we have an item selector
                if ( itemSelector ) {
                    // filter siblings
                    if ( matchesSelector( elem, itemSelector ) ) {
                        itemElems.push( elem );
                    }
                    // find children
                    var childElems = elem.querySelectorAll( itemSelector );
                    // concat childElems to filterFound array
                    for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
                        itemElems.push( childElems[j] );
                    }
                } else {
                    itemElems.push( elem );
                }
            }

            return itemElems;
        };

        /**
         * getter method for getting item elements
         * @returns {Array} elems - collection of item elements
         */
        Outlayer.prototype.getItemElements = function() {
            var elems = [];
            for ( var i=0, len = this.items.length; i < len; i++ ) {
                elems.push( this.items[i].element );
            }
            return elems;
        };

// ----- init & layout ----- //

        /**
         * lays out all items
         */
        Outlayer.prototype.layout = function() {
            this._resetLayout();
            this._manageStamps();

            // don't animate first layout
            var isInstant = this.options.isLayoutInstant !== undefined ?
                this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems( this.items, isInstant );

            // flag for initalized
            this._isLayoutInited = true;
        };

// _init is alias for layout
        Outlayer.prototype._init = Outlayer.prototype.layout;

        /**
         * logic before any new layout
         */
        Outlayer.prototype._resetLayout = function() {
            this.getSize();
        };


        Outlayer.prototype.getSize = function() {
            this.size = getSize( this.element );
        };

        /**
         * get measurement from option, for columnWidth, rowHeight, gutter
         * if option is String -> get element from selector string, & get size of element
         * if option is Element -> get size of element
         * else use option as a number
         *
         * @param {String} measurement
         * @param {String} size - width or height
         * @private
         */
        Outlayer.prototype._getMeasurement = function( measurement, size ) {
            var option = this.options[ measurement ];
            var elem;
            if ( !option ) {
                // default to 0
                this[ measurement ] = 0;
            } else {
                // use option as an element
                if ( typeof option === 'string' ) {
                    elem = this.element.querySelector( option );
                } else if ( isElement( option ) ) {
                    elem = option;
                }
                // use size of element, if element
                this[ measurement ] = elem ? getSize( elem )[ size ] : option;
            }
        };

        /**
         * layout a collection of item elements
         * @api public
         */
        Outlayer.prototype.layoutItems = function( items, isInstant ) {
            items = this._getItemsForLayout( items );

            this._layoutItems( items, isInstant );

            this._postLayout();
        };

        /**
         * get the items to be laid out
         * you may want to skip over some items
         * @param {Array} items
         * @returns {Array} items
         */
        Outlayer.prototype._getItemsForLayout = function( items ) {
            var layoutItems = [];
            for ( var i=0, len = items.length; i < len; i++ ) {
                var item = items[i];
                if ( !item.isIgnored ) {
                    layoutItems.push( item );
                }
            }
            return layoutItems;
        };

        /**
         * layout items
         * @param {Array} items
         * @param {Boolean} isInstant
         */
        Outlayer.prototype._layoutItems = function( items, isInstant ) {
            var _this = this;
            function onItemsLayout() {
                _this.emitEvent( 'layoutComplete', [ _this, items ] );
            }

            if ( !items || !items.length ) {
                // no items, emit event with empty array
                onItemsLayout();
                return;
            }

            // emit layoutComplete when done
            this._itemsOn( items, 'layout', onItemsLayout );

            var queue = [];

            for ( var i=0, len = items.length; i < len; i++ ) {
                var item = items[i];
                // get x/y object from method
                var position = this._getItemLayoutPosition( item );
                // enqueue
                position.item = item;
                position.isInstant = isInstant || item.isLayoutInstant;
                queue.push( position );
            }

            this._processLayoutQueue( queue );
        };

        /**
         * get item layout position
         * @param {Outlayer.Item} item
         * @returns {Object} x and y position
         */
        Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
            return {
                x: 0,
                y: 0
            };
        };

        /**
         * iterate over array and position each item
         * Reason being - separating this logic prevents 'layout invalidation'
         * thx @paul_irish
         * @param {Array} queue
         */
        Outlayer.prototype._processLayoutQueue = function( queue ) {
            for ( var i=0, len = queue.length; i < len; i++ ) {
                var obj = queue[i];
                this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
            }
        };

        /**
         * Sets position of item in DOM
         * @param {Outlayer.Item} item
         * @param {Number} x - horizontal position
         * @param {Number} y - vertical position
         * @param {Boolean} isInstant - disables transitions
         */
        Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
            if ( isInstant ) {
                // if not transition, just set CSS
                item.goTo( x, y );
            } else {
                item.moveTo( x, y );
            }
        };

        /**
         * Any logic you want to do after each layout,
         * i.e. size the container
         */
        Outlayer.prototype._postLayout = function() {
            this.resizeContainer();
        };

        Outlayer.prototype.resizeContainer = function() {
            if ( !this.options.isResizingContainer ) {
                return;
            }
            var size = this._getContainerSize();
            if ( size ) {
                this._setContainerMeasure( size.width, true );
                this._setContainerMeasure( size.height, false );
            }
        };

        /**
         * Sets width or height of container if returned
         * @returns {Object} size
         *   @param {Number} width
         *   @param {Number} height
         */
        Outlayer.prototype._getContainerSize = noop;

        /**
         * @param {Number} measure - size of width or height
         * @param {Boolean} isWidth
         */
        Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
            if ( measure === undefined ) {
                return;
            }

            var elemSize = this.size;
            // add padding and border width if border box
            if ( elemSize.isBorderBox ) {
                measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth :
                elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
            }

            measure = Math.max( measure, 0 );
            this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
        };

        /**
         * trigger a callback for a collection of items events
         * @param {Array} items - Outlayer.Items
         * @param {String} eventName
         * @param {Function} callback
         */
        Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
            var doneCount = 0;
            var count = items.length;
            // event callback
            var _this = this;
            function tick() {
                doneCount++;
                if ( doneCount === count ) {
                    callback.call( _this );
                }
                return true; // bind once
            }
            // bind callback
            for ( var i=0, len = items.length; i < len; i++ ) {
                var item = items[i];
                item.on( eventName, tick );
            }
        };

// -------------------------- ignore & stamps -------------------------- //


        /**
         * keep item in collection, but do not lay it out
         * ignored items do not get skipped in layout
         * @param {Element} elem
         */
        Outlayer.prototype.ignore = function( elem ) {
            var item = this.getItem( elem );
            if ( item ) {
                item.isIgnored = true;
            }
        };

        /**
         * return item to layout collection
         * @param {Element} elem
         */
        Outlayer.prototype.unignore = function( elem ) {
            var item = this.getItem( elem );
            if ( item ) {
                delete item.isIgnored;
            }
        };

        /**
         * adds elements to stamps
         * @param {NodeList, Array, Element, or String} elems
         */
        Outlayer.prototype.stamp = function( elems ) {
            elems = this._find( elems );
            if ( !elems ) {
                return;
            }

            this.stamps = this.stamps.concat( elems );
            // ignore
            for ( var i=0, len = elems.length; i < len; i++ ) {
                var elem = elems[i];
                this.ignore( elem );
            }
        };

        /**
         * removes elements to stamps
         * @param {NodeList, Array, or Element} elems
         */
        Outlayer.prototype.unstamp = function( elems ) {
            elems = this._find( elems );
            if ( !elems ){
                return;
            }

            for ( var i=0, len = elems.length; i < len; i++ ) {
                var elem = elems[i];
                // filter out removed stamp elements
                removeFrom( elem, this.stamps );
                this.unignore( elem );
            }

        };

        /**
         * finds child elements
         * @param {NodeList, Array, Element, or String} elems
         * @returns {Array} elems
         */
        Outlayer.prototype._find = function( elems ) {
            if ( !elems ) {
                return;
            }
            // if string, use argument as selector string
            if ( typeof elems === 'string' ) {
                elems = this.element.querySelectorAll( elems );
            }
            elems = makeArray( elems );
            return elems;
        };

        Outlayer.prototype._manageStamps = function() {
            if ( !this.stamps || !this.stamps.length ) {
                return;
            }

            this._getBoundingRect();

            for ( var i=0, len = this.stamps.length; i < len; i++ ) {
                var stamp = this.stamps[i];
                this._manageStamp( stamp );
            }
        };

// update boundingLeft / Top
        Outlayer.prototype._getBoundingRect = function() {
            // get bounding rect for container element
            var boundingRect = this.element.getBoundingClientRect();
            var size = this.size;
            this._boundingRect = {
                left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
                top: boundingRect.top + size.paddingTop + size.borderTopWidth,
                right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
                bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
            };
        };

        /**
         * @param {Element} stamp
         **/
        Outlayer.prototype._manageStamp = noop;

        /**
         * get x/y position of element relative to container element
         * @param {Element} elem
         * @returns {Object} offset - has left, top, right, bottom
         */
        Outlayer.prototype._getElementOffset = function( elem ) {
            var boundingRect = elem.getBoundingClientRect();
            var thisRect = this._boundingRect;
            var size = getSize( elem );
            var offset = {
                left: boundingRect.left - thisRect.left - size.marginLeft,
                top: boundingRect.top - thisRect.top - size.marginTop,
                right: thisRect.right - boundingRect.right - size.marginRight,
                bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
            };
            return offset;
        };

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
        Outlayer.prototype.handleEvent = function( event ) {
            var method = 'on' + event.type;
            if ( this[ method ] ) {
                this[ method ]( event );
            }
        };

        /**
         * Bind layout to window resizing
         */
        Outlayer.prototype.bindResize = function() {
            // bind just one listener
            if ( this.isResizeBound ) {
                return;
            }
            eventie.bind( window, 'resize', this );
            this.isResizeBound = true;
        };

        /**
         * Unbind layout to window resizing
         */
        Outlayer.prototype.unbindResize = function() {
            if ( this.isResizeBound ) {
                eventie.unbind( window, 'resize', this );
            }
            this.isResizeBound = false;
        };

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
        Outlayer.prototype.onresize = function() {
            if ( this.resizeTimeout ) {
                clearTimeout( this.resizeTimeout );
            }

            var _this = this;
            function delayed() {
                _this.resize();
                delete _this.resizeTimeout;
            }

            this.resizeTimeout = setTimeout( delayed, 100 );
        };

// debounced, layout on resize
        Outlayer.prototype.resize = function() {
            // don't trigger if size did not change
            // or if resize was unbound. See #9
            if ( !this.isResizeBound || !this.needsResizeLayout() ) {
                return;
            }

            this.layout();
        };

        /**
         * check if layout is needed post layout
         * @returns Boolean
         */
        Outlayer.prototype.needsResizeLayout = function() {
            var size = getSize( this.element );
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var hasSizes = this.size && size;
            return hasSizes && size.innerWidth !== this.size.innerWidth;
        };

// -------------------------- methods -------------------------- //

        /**
         * add items to Outlayer instance
         * @param {Array or NodeList or Element} elems
         * @returns {Array} items - Outlayer.Items
         **/
        Outlayer.prototype.addItems = function( elems ) {
            var items = this._itemize( elems );
            // add items to collection
            if ( items.length ) {
                this.items = this.items.concat( items );
            }
            return items;
        };

        /**
         * Layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        Outlayer.prototype.appended = function( elems ) {
            var items = this.addItems( elems );
            if ( !items.length ) {
                return;
            }
            // layout and reveal just the new items
            this.layoutItems( items, true );
            this.reveal( items );
        };

        /**
         * Layout prepended elements
         * @param {Array or NodeList or Element} elems
         */
        Outlayer.prototype.prepended = function( elems ) {
            var items = this._itemize( elems );
            if ( !items.length ) {
                return;
            }
            // add items to beginning of collection
            var previousItems = this.items.slice(0);
            this.items = items.concat( previousItems );
            // start new layout
            this._resetLayout();
            this._manageStamps();
            // layout new stuff without transition
            this.layoutItems( items, true );
            this.reveal( items );
            // layout previous items
            this.layoutItems( previousItems );
        };

        /**
         * reveal a collection of items
         * @param {Array of Outlayer.Items} items
         */
        Outlayer.prototype.reveal = function( items ) {
            var len = items && items.length;
            if ( !len ) {
                return;
            }
            for ( var i=0; i < len; i++ ) {
                var item = items[i];
                item.reveal();
            }
        };

        /**
         * hide a collection of items
         * @param {Array of Outlayer.Items} items
         */
        Outlayer.prototype.hide = function( items ) {
            var len = items && items.length;
            if ( !len ) {
                return;
            }
            for ( var i=0; i < len; i++ ) {
                var item = items[i];
                item.hide();
            }
        };

        /**
         * get Outlayer.Item, given an Element
         * @param {Element} elem
         * @param {Function} callback
         * @returns {Outlayer.Item} item
         */
        Outlayer.prototype.getItem = function( elem ) {
            // loop through items to get the one that matches
            for ( var i=0, len = this.items.length; i < len; i++ ) {
                var item = this.items[i];
                if ( item.element === elem ) {
                    // return item
                    return item;
                }
            }
        };

        /**
         * get collection of Outlayer.Items, given Elements
         * @param {Array} elems
         * @returns {Array} items - Outlayer.Items
         */
        Outlayer.prototype.getItems = function( elems ) {
            if ( !elems || !elems.length ) {
                return;
            }
            var items = [];
            for ( var i=0, len = elems.length; i < len; i++ ) {
                var elem = elems[i];
                var item = this.getItem( elem );
                if ( item ) {
                    items.push( item );
                }
            }

            return items;
        };

        /**
         * remove element(s) from instance and DOM
         * @param {Array or NodeList or Element} elems
         */
        Outlayer.prototype.remove = function( elems ) {
            elems = makeArray( elems );

            var removeItems = this.getItems( elems );
            // bail if no items to remove
            if ( !removeItems || !removeItems.length ) {
                return;
            }

            this._itemsOn( removeItems, 'remove', function() {
                this.emitEvent( 'removeComplete', [ this, removeItems ] );
            });

            for ( var i=0, len = removeItems.length; i < len; i++ ) {
                var item = removeItems[i];
                item.remove();
                // remove item from collection
                removeFrom( item, this.items );
            }
        };

// ----- destroy ----- //

// remove and disable Outlayer instance
        Outlayer.prototype.destroy = function() {
            // clean up dynamic styles
            var style = this.element.style;
            style.height = '';
            style.position = '';
            style.width = '';
            // destroy items
            for ( var i=0, len = this.items.length; i < len; i++ ) {
                var item = this.items[i];
                item.destroy();
            }

            this.unbindResize();

            var id = this.element.outlayerGUID;
            delete instances[ id ]; // remove reference to instance by id
            delete this.element.outlayerGUID;
            // remove data for jQuery
            if ( jQuery ) {
                jQuery.removeData( this.element, this.constructor.namespace );
            }

        };

// -------------------------- data -------------------------- //

        /**
         * get Outlayer instance from element
         * @param {Element} elem
         * @returns {Outlayer}
         */
        Outlayer.data = function( elem ) {
            var id = elem && elem.outlayerGUID;
            return id && instances[ id ];
        };


// -------------------------- create Outlayer class -------------------------- //

        /**
         * create a layout class
         * @param {String} namespace
         */
        Outlayer.create = function( namespace, options ) {
            // sub-class Outlayer
            function Layout() {
                Outlayer.apply( this, arguments );
            }
            // inherit Outlayer prototype, use Object.create if there
            if ( Object.create ) {
                Layout.prototype = Object.create( Outlayer.prototype );
            } else {
                extend( Layout.prototype, Outlayer.prototype );
            }
            // set contructor, used for namespace and Item
            Layout.prototype.constructor = Layout;

            Layout.defaults = extend( {}, Outlayer.defaults );
            // apply new options
            extend( Layout.defaults, options );
            // keep prototype.settings for backwards compatibility (Packery v1.2.0)
            Layout.prototype.settings = {};

            Layout.namespace = namespace;

            Layout.data = Outlayer.data;

            // sub-class Item
            Layout.Item = function LayoutItem() {
                Item.apply( this, arguments );
            };

            Layout.Item.prototype = new Item();

            // -------------------------- declarative -------------------------- //

            /**
             * allow user to initialize Outlayer via .js-namespace class
             * options are parsed from data-namespace-option attribute
             */
            docReady( function() {
                var dashedNamespace = toDashed( namespace );
                var elems = document.querySelectorAll( '.js-' + dashedNamespace );
                var dataAttr = 'data-' + dashedNamespace + '-options';

                for ( var i=0, len = elems.length; i < len; i++ ) {
                    var elem = elems[i];
                    var attr = elem.getAttribute( dataAttr );
                    var options;
                    try {
                        options = attr && JSON.parse( attr );
                    } catch ( error ) {
                        // log error, do not initialize
                        if ( console ) {
                            console.error( 'Error parsing ' + dataAttr + ' on ' +
                                elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
                                error );
                        }
                        continue;
                    }
                    // initialize
                    var instance = new Layout( elem, options );
                    // make available via $().data('layoutname')
                    if ( jQuery ) {
                        jQuery.data( elem, namespace, instance );
                    }
                }
            });

            // -------------------------- jQuery bridge -------------------------- //

            // make into jQuery plugin
            if ( jQuery && jQuery.bridget ) {
                jQuery.bridget( namespace, Layout );
            }

            return Layout;
        };

// ----- fin ----- //

// back in global
        Outlayer.Item = Item;

        return Outlayer;

    }

// -------------------------- transport -------------------------- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'outlayer/outlayer',[
                'eventie/eventie',
                'doc-ready/doc-ready',
                'eventEmitter/EventEmitter',
                'get-size/get-size',
                'matches-selector/matches-selector',
                './item'
            ],
            outlayerDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = outlayerDefinition(
            require('eventie'),
            require('doc-ready'),
            require('wolfy87-eventemitter'),
            require('get-size'),
            require('desandro-matches-selector'),
            require('./item')
        );
    } else {
        // browser global
        window.Outlayer = outlayerDefinition(
            window.eventie,
            window.docReady,
            window.EventEmitter,
            window.getSize,
            window.matchesSelector,
            window.Outlayer.Item
        );
    }

})( window );

/**
 * Isotope Item
 **/

( function( window ) {



// -------------------------- Item -------------------------- //

    function itemDefinition( Outlayer ) {

// sub-class Outlayer Item
        function Item() {
            Outlayer.Item.apply( this, arguments );
        }

        Item.prototype = new Outlayer.Item();

        Item.prototype._create = function() {
            // assign id, used for original-order sorting
            this.id = this.layout.itemGUID++;
            Outlayer.Item.prototype._create.call( this );
            this.sortData = {};
        };

        Item.prototype.updateSortData = function() {
            if ( this.isIgnored ) {
                return;
            }
            // default sorters
            this.sortData.id = this.id;
            // for backward compatibility
            this.sortData['original-order'] = this.id;
            this.sortData.random = Math.random();
            // go thru getSortData obj and apply the sorters
            var getSortData = this.layout.options.getSortData;
            var sorters = this.layout._sorters;
            for ( var key in getSortData ) {
                var sorter = sorters[ key ];
                this.sortData[ key ] = sorter( this.element, this );
            }
        };

        var _destroy = Item.prototype.destroy;
        Item.prototype.destroy = function() {
            // call super
            _destroy.apply( this, arguments );
            // reset display, #741
            this.css({
                display: ''
            });
        };

        return Item;

    }

// -------------------------- transport -------------------------- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/item',[
                'outlayer/outlayer'
            ],
            itemDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = itemDefinition(
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = itemDefinition(
            window.Outlayer
        );
    }

})( window );

( function( window ) {



// --------------------------  -------------------------- //

    function layoutModeDefinition( getSize, Outlayer ) {

        // layout mode class
        function LayoutMode( isotope ) {
            this.isotope = isotope;
            // link properties
            if ( isotope ) {
                this.options = isotope.options[ this.namespace ];
                this.element = isotope.element;
                this.items = isotope.filteredItems;
                this.size = isotope.size;
            }
        }

        /**
         * some methods should just defer to default Outlayer method
         * and reference the Isotope instance as `this`
         **/
        ( function() {
            var facadeMethods = [
                '_resetLayout',
                '_getItemLayoutPosition',
                '_manageStamp',
                '_getContainerSize',
                '_getElementOffset',
                'needsResizeLayout'
            ];

            for ( var i=0, len = facadeMethods.length; i < len; i++ ) {
                var methodName = facadeMethods[i];
                LayoutMode.prototype[ methodName ] = getOutlayerMethod( methodName );
            }

            function getOutlayerMethod( methodName ) {
                return function() {
                    return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
                };
            }
        })();

        // -----  ----- //

        // for horizontal layout modes, check vertical size
        LayoutMode.prototype.needsVerticalResizeLayout = function() {
            // don't trigger if size did not change
            var size = getSize( this.isotope.element );
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var hasSizes = this.isotope.size && size;
            return hasSizes && size.innerHeight !== this.isotope.size.innerHeight;
        };

        // ----- measurements ----- //

        LayoutMode.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply( this, arguments );
        };

        LayoutMode.prototype.getColumnWidth = function() {
            this.getSegmentSize( 'column', 'Width' );
        };

        LayoutMode.prototype.getRowHeight = function() {
            this.getSegmentSize( 'row', 'Height' );
        };

        /**
         * get columnWidth or rowHeight
         * segment: 'column' or 'row'
         * size 'Width' or 'Height'
         **/
        LayoutMode.prototype.getSegmentSize = function( segment, size ) {
            var segmentName = segment + size;
            var outerSize = 'outer' + size;
            // columnWidth / outerWidth // rowHeight / outerHeight
            this._getMeasurement( segmentName, outerSize );
            // got rowHeight or columnWidth, we can chill
            if ( this[ segmentName ] ) {
                return;
            }
            // fall back to item of first element
            var firstItemSize = this.getFirstItemSize();
            this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
                // or size of container
                this.isotope.size[ 'inner' + size ];
        };

        LayoutMode.prototype.getFirstItemSize = function() {
            var firstItem = this.isotope.filteredItems[0];
            return firstItem && firstItem.element && getSize( firstItem.element );
        };

        // ----- methods that should reference isotope ----- //

        LayoutMode.prototype.layout = function() {
            this.isotope.layout.apply( this.isotope, arguments );
        };

        LayoutMode.prototype.getSize = function() {
            this.isotope.getSize();
            this.size = this.isotope.size;
        };

        // -------------------------- create -------------------------- //

        LayoutMode.modes = {};

        LayoutMode.create = function( namespace, options ) {

            function Mode() {
                LayoutMode.apply( this, arguments );
            }

            Mode.prototype = new LayoutMode();

            // default options
            if ( options ) {
                Mode.options = options;
            }

            Mode.prototype.namespace = namespace;
            // register in Isotope
            LayoutMode.modes[ namespace ] = Mode;

            return Mode;
        };


        return LayoutMode;

    }

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-mode',[
                'get-size/get-size',
                'outlayer/outlayer'
            ],
            layoutModeDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = layoutModeDefinition(
            require('get-size'),
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = layoutModeDefinition(
            window.getSize,
            window.Outlayer
        );
    }


})( window );

/*!
 * Masonry v3.2.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window ) {



// -------------------------- helpers -------------------------- //

    var indexOf = Array.prototype.indexOf ?
        function( items, value ) {
            return items.indexOf( value );
        } :
        function ( items, value ) {
            for ( var i=0, len = items.length; i < len; i++ ) {
                var item = items[i];
                if ( item === value ) {
                    return i;
                }
            }
            return -1;
        };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
    function masonryDefinition( Outlayer, getSize ) {
        // create an Outlayer layout class
        var Masonry = Outlayer.create('masonry');

        Masonry.prototype._resetLayout = function() {
            this.getSize();
            this._getMeasurement( 'columnWidth', 'outerWidth' );
            this._getMeasurement( 'gutter', 'outerWidth' );
            this.measureColumns();

            // reset column Y
            var i = this.cols;
            this.colYs = [];
            while (i--) {
                this.colYs.push( 0 );
            }

            this.maxY = 0;
        };

        Masonry.prototype.measureColumns = function() {
            this.getContainerWidth();
            // if columnWidth is 0, default to outerWidth of first item
            if ( !this.columnWidth ) {
                var firstItem = this.items[0];
                var firstItemElem = firstItem && firstItem.element;
                // columnWidth fall back to item of first element
                this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
                    // if first elem has no width, default to size of container
                    this.containerWidth;
            }

            this.columnWidth += this.gutter;

            this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );
            this.cols = Math.max( this.cols, 1 );
        };

        Masonry.prototype.getContainerWidth = function() {
            // container is parent if fit width
            var container = this.options.isFitWidth ? this.element.parentNode : this.element;
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var size = getSize( container );
            this.containerWidth = size && size.innerWidth;
        };

        Masonry.prototype._getItemLayoutPosition = function( item ) {
            item.getSize();
            // how many columns does this brick span
            var remainder = item.size.outerWidth % this.columnWidth;
            var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
            // round if off by 1 pixel, otherwise use ceil
            var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
            colSpan = Math.min( colSpan, this.cols );

            var colGroup = this._getColGroup( colSpan );
            // get the minimum Y value from the columns
            var minimumY = Math.min.apply( Math, colGroup );
            var shortColIndex = indexOf( colGroup, minimumY );

            // position the brick
            var position = {
                x: this.columnWidth * shortColIndex,
                y: minimumY
            };

            // apply setHeight to necessary columns
            var setHeight = minimumY + item.size.outerHeight;
            var setSpan = this.cols + 1 - colGroup.length;
            for ( var i = 0; i < setSpan; i++ ) {
                this.colYs[ shortColIndex + i ] = setHeight;
            }

            return position;
        };

        /**
         * @param {Number} colSpan - number of columns the element spans
         * @returns {Array} colGroup
         */
        Masonry.prototype._getColGroup = function( colSpan ) {
            if ( colSpan < 2 ) {
                // if brick spans only one column, use all the column Ys
                return this.colYs;
            }

            var colGroup = [];
            // how many different places could this brick fit horizontally
            var groupCount = this.cols + 1 - colSpan;
            // for each group potential horizontal position
            for ( var i = 0; i < groupCount; i++ ) {
                // make an array of colY values for that one group
                var groupColYs = this.colYs.slice( i, i + colSpan );
                // and get the max value of the array
                colGroup[i] = Math.max.apply( Math, groupColYs );
            }
            return colGroup;
        };

        Masonry.prototype._manageStamp = function( stamp ) {
            var stampSize = getSize( stamp );
            var offset = this._getElementOffset( stamp );
            // get the columns that this stamp affects
            var firstX = this.options.isOriginLeft ? offset.left : offset.right;
            var lastX = firstX + stampSize.outerWidth;
            var firstCol = Math.floor( firstX / this.columnWidth );
            firstCol = Math.max( 0, firstCol );
            var lastCol = Math.floor( lastX / this.columnWidth );
            // lastCol should not go over if multiple of columnWidth #425
            lastCol -= lastX % this.columnWidth ? 0 : 1;
            lastCol = Math.min( this.cols - 1, lastCol );
            // set colYs to bottom of the stamp
            var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
                stampSize.outerHeight;
            for ( var i = firstCol; i <= lastCol; i++ ) {
                this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
            }
        };

        Masonry.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply( Math, this.colYs );
            var size = {
                height: this.maxY
            };

            if ( this.options.isFitWidth ) {
                size.width = this._getContainerFitWidth();
            }

            return size;
        };

        Masonry.prototype._getContainerFitWidth = function() {
            var unusedCols = 0;
            // count unused columns
            var i = this.cols;
            while ( --i ) {
                if ( this.colYs[i] !== 0 ) {
                    break;
                }
                unusedCols++;
            }
            // fit container to columns that have been used
            return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
        };

        Masonry.prototype.needsResizeLayout = function() {
            var previousWidth = this.containerWidth;
            this.getContainerWidth();
            return previousWidth !== this.containerWidth;
        };

        return Masonry;
    }

// -------------------------- transport -------------------------- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'masonry/masonry',[
                'outlayer/outlayer',
                'get-size/get-size'
            ],
            masonryDefinition );
    } else if (typeof exports === 'object') {
        module.exports = masonryDefinition(
            require('outlayer'),
            require('get-size')
        );
    } else {
        // browser global
        window.Masonry = masonryDefinition(
            window.Outlayer,
            window.getSize
        );
    }

})( window );

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

( function( window ) {



// -------------------------- helpers -------------------------- //

// extend objects
    function extend( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    }

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
    function masonryDefinition( LayoutMode, Masonry ) {
        // create an Outlayer layout class
        var MasonryMode = LayoutMode.create('masonry');

        // save on to these methods
        var _getElementOffset = MasonryMode.prototype._getElementOffset;
        var layout = MasonryMode.prototype.layout;
        var _getMeasurement = MasonryMode.prototype._getMeasurement;

        // sub-class Masonry
        extend( MasonryMode.prototype, Masonry.prototype );

        // set back, as it was overwritten by Masonry
        MasonryMode.prototype._getElementOffset = _getElementOffset;
        MasonryMode.prototype.layout = layout;
        MasonryMode.prototype._getMeasurement = _getMeasurement;

        var measureColumns = MasonryMode.prototype.measureColumns;
        MasonryMode.prototype.measureColumns = function() {
            // set items, used if measuring first item
            this.items = this.isotope.filteredItems;
            measureColumns.call( this );
        };

        // HACK copy over isOriginLeft/Top options
        var _manageStamp = MasonryMode.prototype._manageStamp;
        MasonryMode.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft;
            this.options.isOriginTop = this.isotope.options.isOriginTop;
            _manageStamp.apply( this, arguments );
        };

        return MasonryMode;
    }

// -------------------------- transport -------------------------- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-modes/masonry',[
                '../layout-mode',
                'masonry/masonry'
            ],
            masonryDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = masonryDefinition(
            require('../layout-mode'),
            require('masonry-layout')
        );
    } else {
        // browser global
        masonryDefinition(
            window.Isotope.LayoutMode,
            window.Masonry
        );
    }

})( window );

( function( window ) {



    function fitRowsDefinition( LayoutMode ) {

        var FitRows = LayoutMode.create('fitRows');

        FitRows.prototype._resetLayout = function() {
            this.x = 0;
            this.y = 0;
            this.maxY = 0;
            this._getMeasurement( 'gutter', 'outerWidth' );
        };

        FitRows.prototype._getItemLayoutPosition = function( item ) {
            item.getSize();

            var itemWidth = item.size.outerWidth + this.gutter;
            // if this element cannot fit in the current row
            var containerWidth = this.isotope.size.innerWidth + this.gutter;
            if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
                this.x = 0;
                this.y = this.maxY;
            }

            var position = {
                x: this.x,
                y: this.y
            };

            this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
            this.x += itemWidth;

            return position;
        };

        FitRows.prototype._getContainerSize = function() {
            return { height: this.maxY };
        };

        return FitRows;

    }

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-modes/fit-rows',[
                '../layout-mode'
            ],
            fitRowsDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = fitRowsDefinition(
            require('../layout-mode')
        );
    } else {
        // browser global
        fitRowsDefinition(
            window.Isotope.LayoutMode
        );
    }

})( window );

( function( window ) {



    function verticalDefinition( LayoutMode ) {

        var Vertical = LayoutMode.create( 'vertical', {
            horizontalAlignment: 0
        });

        Vertical.prototype._resetLayout = function() {
            this.y = 0;
        };

        Vertical.prototype._getItemLayoutPosition = function( item ) {
            item.getSize();
            var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
                this.options.horizontalAlignment;
            var y = this.y;
            this.y += item.size.outerHeight;
            return { x: x, y: y };
        };

        Vertical.prototype._getContainerSize = function() {
            return { height: this.y };
        };

        return Vertical;

    }

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( 'isotope/js/layout-modes/vertical',[
                '../layout-mode'
            ],
            verticalDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = verticalDefinition(
            require('../layout-mode')
        );
    } else {
        // browser global
        verticalDefinition(
            window.Isotope.LayoutMode
        );
    }

})( window );

/*!
 * Isotope v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

( function( window ) {



// -------------------------- vars -------------------------- //

    var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

// extend objects
    function extend( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    }

    var trim = String.prototype.trim ?
        function( str ) {
            return str.trim();
        } :
        function( str ) {
            return str.replace( /^\s+|\s+$/g, '' );
        };

    var docElem = document.documentElement;

    var getText = docElem.textContent ?
        function( elem ) {
            return elem.textContent;
        } :
        function( elem ) {
            return elem.innerText;
        };

    var objToString = Object.prototype.toString;
    function isArray( obj ) {
        return objToString.call( obj ) === '[object Array]';
    }

// index of helper cause IE8
    var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
        return ary.indexOf( obj );
    } : function( ary, obj ) {
        for ( var i=0, len = ary.length; i < len; i++ ) {
            if ( ary[i] === obj ) {
                return i;
            }
        }
        return -1;
    };

// turn element or nodeList into an array
    function makeArray( obj ) {
        var ary = [];
        if ( isArray( obj ) ) {
            // use object if already an array
            ary = obj;
        } else if ( obj && typeof obj.length === 'number' ) {
            // convert nodeList to array
            for ( var i=0, len = obj.length; i < len; i++ ) {
                ary.push( obj[i] );
            }
        } else {
            // array of single index
            ary.push( obj );
        }
        return ary;
    }

    function removeFrom( obj, ary ) {
        var index = indexOf( ary, obj );
        if ( index !== -1 ) {
            ary.splice( index, 1 );
        }
    }

// -------------------------- isotopeDefinition -------------------------- //

// used for AMD definition and requires
    function isotopeDefinition( Outlayer, getSize, matchesSelector, Item, LayoutMode ) {
        // create an Outlayer layout class
        var Isotope = Outlayer.create( 'isotope', {
            layoutMode: "masonry",
            isJQueryFiltering: true,
            sortAscending: true
        });

        Isotope.Item = Item;
        Isotope.LayoutMode = LayoutMode;

        Isotope.prototype._create = function() {
            this.itemGUID = 0;
            // functions that sort items
            this._sorters = {};
            this._getSorters();
            // call super
            Outlayer.prototype._create.call( this );

            // create layout modes
            this.modes = {};
            // start filteredItems with all items
            this.filteredItems = this.items;
            // keep of track of sortBys
            this.sortHistory = [ 'original-order' ];
            // create from registered layout modes
            for ( var name in LayoutMode.modes ) {
                this._initLayoutMode( name );
            }
        };

        Isotope.prototype.reloadItems = function() {
            // reset item ID counter
            this.itemGUID = 0;
            // call super
            Outlayer.prototype.reloadItems.call( this );
        };

        Isotope.prototype._itemize = function() {
            var items = Outlayer.prototype._itemize.apply( this, arguments );
            // assign ID for original-order
            for ( var i=0, len = items.length; i < len; i++ ) {
                var item = items[i];
                item.id = this.itemGUID++;
            }
            this._updateItemsSortData( items );
            return items;
        };


        // -------------------------- layout -------------------------- //

        Isotope.prototype._initLayoutMode = function( name ) {
            var Mode = LayoutMode.modes[ name ];
            // set mode options
            // HACK extend initial options, back-fill in default options
            var initialOpts = this.options[ name ] || {};
            this.options[ name ] = Mode.options ?
                extend( Mode.options, initialOpts ) : initialOpts;
            // init layout mode instance
            this.modes[ name ] = new Mode( this );
        };


        Isotope.prototype.layout = function() {
            // if first time doing layout, do all magic
            if ( !this._isLayoutInited && this.options.isInitLayout ) {
                this.arrange();
                return;
            }
            this._layout();
        };

        // private method to be used in layout() & magic()
        Isotope.prototype._layout = function() {
            // don't animate first layout
            var isInstant = this._getIsInstant();
            // layout flow
            this._resetLayout();
            this._manageStamps();
            this.layoutItems( this.filteredItems, isInstant );

            // flag for initalized
            this._isLayoutInited = true;
        };

        // filter + sort + layout
        Isotope.prototype.arrange = function( opts ) {
            // set any options pass
            this.option( opts );
            this._getIsInstant();
            // filter, sort, and layout

            // filter
            var filtered = this._filter( this.items );
            this.filteredItems = filtered.matches;

            var _this = this;
            function hideReveal() {
                _this.reveal( filtered.needReveal );
                _this.hide( filtered.needHide );
            }

            if ( this._isInstant ) {
                this._noTransition( hideReveal );
            } else {
                hideReveal();
            }

            this._sort();
            this._layout();
        };
        // alias to _init for main plugin method
        Isotope.prototype._init = Isotope.prototype.arrange;

        // HACK
        // Don't animate/transition first layout
        // Or don't animate/transition other layouts
        Isotope.prototype._getIsInstant = function() {
            var isInstant = this.options.isLayoutInstant !== undefined ?
                this.options.isLayoutInstant : !this._isLayoutInited;
            this._isInstant = isInstant;
            return isInstant;
        };

        // -------------------------- filter -------------------------- //

        Isotope.prototype._filter = function( items ) {
            var filter = this.options.filter;
            filter = filter || '*';
            var matches = [];
            var hiddenMatched = [];
            var visibleUnmatched = [];

            var test = this._getFilterTest( filter );

            // test each item
            for ( var i=0, len = items.length; i < len; i++ ) {
                var item = items[i];
                if ( item.isIgnored ) {
                    continue;
                }
                // add item to either matched or unmatched group
                var isMatched = test( item );
                // item.isFilterMatched = isMatched;
                // add to matches if its a match
                if ( isMatched ) {
                    matches.push( item );
                }
                // add to additional group if item needs to be hidden or revealed
                if ( isMatched && item.isHidden ) {
                    hiddenMatched.push( item );
                } else if ( !isMatched && !item.isHidden ) {
                    visibleUnmatched.push( item );
                }
            }

            // return collections of items to be manipulated
            return {
                matches: matches,
                needReveal: hiddenMatched,
                needHide: visibleUnmatched
            };
        };

        // get a jQuery, function, or a matchesSelector test given the filter
        Isotope.prototype._getFilterTest = function( filter ) {
            if ( jQuery && this.options.isJQueryFiltering ) {
                // use jQuery
                return function( item ) {
                    return jQuery( item.element ).is( filter );
                };
            }
            if ( typeof filter === 'function' ) {
                // use filter as function
                return function( item ) {
                    return filter( item.element );
                };
            }
            // default, use filter as selector string
            return function( item ) {
                return matchesSelector( item.element, filter );
            };
        };

        // -------------------------- sorting -------------------------- //

        /**
         * @params {Array} elems
         * @public
         */
        Isotope.prototype.updateSortData = function( elems ) {
            // get items
            var items;
            if ( elems ) {
                elems = makeArray( elems );
                items = this.getItems( elems );
            } else {
                // update all items if no elems provided
                items = this.items;
            }

            this._getSorters();
            this._updateItemsSortData( items );
        };

        Isotope.prototype._getSorters = function() {
            var getSortData = this.options.getSortData;
            for ( var key in getSortData ) {
                var sorter = getSortData[ key ];
                this._sorters[ key ] = mungeSorter( sorter );
            }
        };

        /**
         * @params {Array} items - of Isotope.Items
         * @private
         */
        Isotope.prototype._updateItemsSortData = function( items ) {
            // do not update if no items
            var len = items && items.length;

            for ( var i=0; len && i < len; i++ ) {
                var item = items[i];
                item.updateSortData();
            }
        };

        // ----- munge sorter ----- //

        // encapsulate this, as we just need mungeSorter
        // other functions in here are just for munging
        var mungeSorter = ( function() {
            // add a magic layer to sorters for convienent shorthands
            // `.foo-bar` will use the text of .foo-bar querySelector
            // `[foo-bar]` will use attribute
            // you can also add parser
            // `.foo-bar parseInt` will parse that as a number
            function mungeSorter( sorter ) {
                // if not a string, return function or whatever it is
                if ( typeof sorter !== 'string' ) {
                    return sorter;
                }
                // parse the sorter string
                var args = trim( sorter ).split(' ');
                var query = args[0];
                // check if query looks like [an-attribute]
                var attrMatch = query.match( /^\[(.+)\]$/ );
                var attr = attrMatch && attrMatch[1];
                var getValue = getValueGetter( attr, query );
                // use second argument as a parser
                var parser = Isotope.sortDataParsers[ args[1] ];
                // parse the value, if there was a parser
                sorter = parser ? function( elem ) {
                    return elem && parser( getValue( elem ) );
                } :
                    // otherwise just return value
                    function( elem ) {
                        return elem && getValue( elem );
                    };

                return sorter;
            }

            // get an attribute getter, or get text of the querySelector
            function getValueGetter( attr, query ) {
                var getValue;
                // if query looks like [foo-bar], get attribute
                if ( attr ) {
                    getValue = function( elem ) {
                        return elem.getAttribute( attr );
                    };
                } else {
                    // otherwise, assume its a querySelector, and get its text
                    getValue = function( elem ) {
                        var child = elem.querySelector( query );
                        return child && getText( child );
                    };
                }
                return getValue;
            }

            return mungeSorter;
        })();

        // parsers used in getSortData shortcut strings
        Isotope.sortDataParsers = {
            'parseInt': function( val ) {
                return parseInt( val, 10 );
            },
            'parseFloat': function( val ) {
                return parseFloat( val );
            }
        };

        // ----- sort method ----- //

        // sort filteredItem order
        Isotope.prototype._sort = function() {
            var sortByOpt = this.options.sortBy;
            if ( !sortByOpt ) {
                return;
            }
            // concat all sortBy and sortHistory
            var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
            // sort magic
            var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
            this.filteredItems.sort( itemSorter );
            // keep track of sortBy History
            if ( sortByOpt !== this.sortHistory[0] ) {
                // add to front, oldest goes in last
                this.sortHistory.unshift( sortByOpt );
            }
        };

        // returns a function used for sorting
        function getItemSorter( sortBys, sortAsc ) {
            return function sorter( itemA, itemB ) {
                // cycle through all sortKeys
                for ( var i = 0, len = sortBys.length; i < len; i++ ) {
                    var sortBy = sortBys[i];
                    var a = itemA.sortData[ sortBy ];
                    var b = itemB.sortData[ sortBy ];
                    if ( a > b || a < b ) {
                        // if sortAsc is an object, use the value given the sortBy key
                        var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
                        var direction = isAscending ? 1 : -1;
                        return ( a > b ? 1 : -1 ) * direction;
                    }
                }
                return 0;
            };
        }

        // -------------------------- methods -------------------------- //

        // get layout mode
        Isotope.prototype._mode = function() {
            var layoutMode = this.options.layoutMode;
            var mode = this.modes[ layoutMode ];
            if ( !mode ) {
                // TODO console.error
                throw new Error( 'No layout mode: ' + layoutMode );
            }
            // HACK sync mode's options
            // any options set after init for layout mode need to be synced
            mode.options = this.options[ layoutMode ];
            return mode;
        };

        Isotope.prototype._resetLayout = function() {
            // trigger original reset layout
            Outlayer.prototype._resetLayout.call( this );
            this._mode()._resetLayout();
        };

        Isotope.prototype._getItemLayoutPosition = function( item  ) {
            return this._mode()._getItemLayoutPosition( item );
        };

        Isotope.prototype._manageStamp = function( stamp ) {
            this._mode()._manageStamp( stamp );
        };

        Isotope.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize();
        };

        Isotope.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout();
        };

        // -------------------------- adding & removing -------------------------- //

        // HEADS UP overwrites default Outlayer appended
        Isotope.prototype.appended = function( elems ) {
            var items = this.addItems( elems );
            if ( !items.length ) {
                return;
            }
            // filter, layout, reveal new items
            var filteredItems = this._filterRevealAdded( items );
            // add to filteredItems
            this.filteredItems = this.filteredItems.concat( filteredItems );
        };

        // HEADS UP overwrites default Outlayer prepended
        Isotope.prototype.prepended = function( elems ) {
            var items = this._itemize( elems );
            if ( !items.length ) {
                return;
            }
            // start new layout
            this._resetLayout();
            this._manageStamps();
            // filter, layout, reveal new items
            var filteredItems = this._filterRevealAdded( items );
            // layout previous items
            this.layoutItems( this.filteredItems );
            // add to items and filteredItems
            this.filteredItems = filteredItems.concat( this.filteredItems );
            this.items = items.concat( this.items );
        };

        Isotope.prototype._filterRevealAdded = function( items ) {
            var filtered = this._filter( items );
            this.hide( filtered.needHide );
            // reveal all new items
            this.reveal( filtered.matches );
            // layout new items, no transition
            this.layoutItems( filtered.matches, true );
            return filtered.matches;
        };

        /**
         * Filter, sort, and layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        Isotope.prototype.insert = function( elems ) {
            var items = this.addItems( elems );
            if ( !items.length ) {
                return;
            }
            // append item elements
            var i, item;
            var len = items.length;
            for ( i=0; i < len; i++ ) {
                item = items[i];
                this.element.appendChild( item.element );
            }
            // filter new stuff
            var filteredInsertItems = this._filter( items ).matches;
            // set flag
            for ( i=0; i < len; i++ ) {
                items[i].isLayoutInstant = true;
            }
            this.arrange();
            // reset flag
            for ( i=0; i < len; i++ ) {
                delete items[i].isLayoutInstant;
            }
            this.reveal( filteredInsertItems );
        };

        var _remove = Isotope.prototype.remove;
        Isotope.prototype.remove = function( elems ) {
            elems = makeArray( elems );
            var removeItems = this.getItems( elems );
            // do regular thing
            _remove.call( this, elems );
            // bail if no items to remove
            if ( !removeItems || !removeItems.length ) {
                return;
            }
            // remove elems from filteredItems
            for ( var i=0, len = removeItems.length; i < len; i++ ) {
                var item = removeItems[i];
                // remove item from collection
                removeFrom( item, this.filteredItems );
            }
        };

        Isotope.prototype.shuffle = function() {
            // update random sortData
            for ( var i=0, len = this.items.length; i < len; i++ ) {
                var item = this.items[i];
                item.sortData.random = Math.random();
            }
            this.options.sortBy = 'random';
            this._sort();
            this._layout();
        };

        /**
         * trigger fn without transition
         * kind of hacky to have this in the first place
         * @param {Function} fn
         * @returns ret
         * @private
         */
        Isotope.prototype._noTransition = function( fn ) {
            // save transitionDuration before disabling
            var transitionDuration = this.options.transitionDuration;
            // disable transition
            this.options.transitionDuration = 0;
            // do it
            var returnValue = fn.call( this );
            // re-enable transition for reveal
            this.options.transitionDuration = transitionDuration;
            return returnValue;
        };

        // ----- helper methods ----- //

        /**
         * getter method for getting filtered item elements
         * @returns {Array} elems - collection of item elements
         */
        Isotope.prototype.getFilteredItemElements = function() {
            var elems = [];
            for ( var i=0, len = this.filteredItems.length; i < len; i++ ) {
                elems.push( this.filteredItems[i].element );
            }
            return elems;
        };

        // -----  ----- //

        return Isotope;
    }

// -------------------------- transport -------------------------- //

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( [
                'outlayer/outlayer',
                'get-size/get-size',
                'matches-selector/matches-selector',
                'isotope/js/item',
                'isotope/js/layout-mode',
                // include default layout modes
                'isotope/js/layout-modes/masonry',
                'isotope/js/layout-modes/fit-rows',
                'isotope/js/layout-modes/vertical'
            ],
            isotopeDefinition );
    } else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = isotopeDefinition(
            require('outlayer'),
            require('get-size'),
            require('desandro-matches-selector'),
            require('./item'),
            require('./layout-mode'),
            // include default layout modes
            require('./layout-modes/masonry'),
            require('./layout-modes/fit-rows'),
            require('./layout-modes/vertical')
        );
    } else {
        // browser global
        window.Isotope = isotopeDefinition(
            window.Outlayer,
            window.getSize,
            window.matchesSelector,
            window.Isotope.Item,
            window.Isotope.LayoutMode
        );
    }

})( window );

;/* ===========================================================
 * bootstrap-modalmanager.js v2.2.5
 * ===========================================================
 * Copyright 2012 Jordan Schroter.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {

    "use strict"; // jshint ;_;

    /* MODAL MANAGER CLASS DEFINITION
     * ====================== */

    var ModalManager = function (element, options) {
        this.init(element, options);
    };

    ModalManager.prototype = {

        constructor: ModalManager,

        init: function (element, options) {
            this.$element = $(element);
            this.options = $.extend({}, $.fn.modalmanager.defaults, this.$element.data(), typeof options == 'object' && options);
            this.stack = [];
            this.backdropCount = 0;

            if (this.options.resize) {
                var resizeTimeout,
                    that = this;

                $(window).on('resize.modal', function(){
                    resizeTimeout && clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(function(){
                        for (var i = 0; i < that.stack.length; i++){
                            that.stack[i].isShown && that.stack[i].layout();
                        }
                    }, 10);
                });
            }
        },

        createModal: function (element, options) {
            $(element).modal($.extend({ manager: this }, options));
        },

        appendModal: function (modal) {
            this.stack.push(modal);

            var that = this;

            modal.$element.on('show.modalmanager', targetIsSelf(function (e) {

                var showModal = function(){
                    modal.isShown = true;

                    var transition = $.support.transition && modal.$element.hasClass('fade');

                    that.$element
                        .toggleClass('modal-open', that.hasOpenModal())
                        .toggleClass('page-overflow', $(window).height() < that.$element.height());

                    modal.$parent = modal.$element.parent();

                    modal.$container = that.createContainer(modal);

                    modal.$element.appendTo(modal.$container);

                    that.backdrop(modal, function () {
                        modal.$element.show();

                        if (transition) {
                            //modal.$element[0].style.display = 'run-in';
                            modal.$element[0].offsetWidth;
                            //modal.$element.one($.support.transition.end, function () { modal.$element[0].style.display = 'block' });
                        }

                        modal.layout();

                        modal.$element
                            .addClass('in')
                            .attr('aria-hidden', false);

                        var complete = function () {
                            that.setFocus();
                            modal.$element.trigger('shown');
                        };

                        transition ?
                            modal.$element.one($.support.transition.end, complete) :
                            complete();
                    });
                };

                modal.options.replace ?
                    that.replace(showModal) :
                    showModal();
            }));

            modal.$element.on('hidden.modalmanager', targetIsSelf(function (e) {
                that.backdrop(modal);
                // handle the case when a modal may have been removed from the dom before this callback executes
                if (!modal.$element.parent().length) {
                    that.destroyModal(modal);
                } else if (modal.$backdrop){
                    var transition = $.support.transition && modal.$element.hasClass('fade');

                    // trigger a relayout due to firebox's buggy transition end event
                    if (transition) { modal.$element[0].offsetWidth; }
                    $.support.transition && modal.$element.hasClass('fade') ?
                        modal.$backdrop.one($.support.transition.end, function () { modal.destroy(); }) :
                        modal.destroy();
                } else {
                    modal.destroy();
                }

            }));

            modal.$element.on('destroyed.modalmanager', targetIsSelf(function (e) {
                that.destroyModal(modal);
            }));
        },

        getOpenModals: function () {
            var openModals = [];
            for (var i = 0; i < this.stack.length; i++){
                if (this.stack[i].isShown) openModals.push(this.stack[i]);
            }

            return openModals;
        },

        hasOpenModal: function () {
            return this.getOpenModals().length > 0;
        },

        setFocus: function () {
            var topModal;

            for (var i = 0; i < this.stack.length; i++){
                if (this.stack[i].isShown) topModal = this.stack[i];
            }

            if (!topModal) return;

            topModal.focus();
        },

        destroyModal: function (modal) {
            modal.$element.off('.modalmanager');
            if (modal.$backdrop) this.removeBackdrop(modal);
            this.stack.splice(this.getIndexOfModal(modal), 1);

            var hasOpenModal = this.hasOpenModal();

            this.$element.toggleClass('modal-open', hasOpenModal);

            if (!hasOpenModal){
                this.$element.removeClass('page-overflow');
            }

            this.removeContainer(modal);

            this.setFocus();
        },

        getModalAt: function (index) {
            return this.stack[index];
        },

        getIndexOfModal: function (modal) {
            for (var i = 0; i < this.stack.length; i++){
                if (modal === this.stack[i]) return i;
            }
        },

        replace: function (callback) {
            var topModal;

            for (var i = 0; i < this.stack.length; i++){
                if (this.stack[i].isShown) topModal = this.stack[i];
            }

            if (topModal) {
                this.$backdropHandle = topModal.$backdrop;
                topModal.$backdrop = null;

                callback && topModal.$element.one('hidden',
                    targetIsSelf( $.proxy(callback, this) ));

                topModal.hide();
            } else if (callback) {
                callback();
            }
        },

        removeBackdrop: function (modal) {
            modal.$backdrop.remove();
            modal.$backdrop = null;
        },

        createBackdrop: function (animate, tmpl) {
            var $backdrop;

            if (!this.$backdropHandle) {
                $backdrop = $(tmpl)
                    .addClass(animate)
                    .appendTo(this.$element);
            } else {
                $backdrop = this.$backdropHandle;
                $backdrop.off('.modalmanager');
                this.$backdropHandle = null;
                this.isLoading && this.removeSpinner();
            }

            return $backdrop;
        },

        removeContainer: function (modal) {
            modal.$container.remove();
            modal.$container = null;
        },

        createContainer: function (modal) {
            var $container;

            $container = $('<div class="modal-scrollable">')
                .css('z-index', getzIndex('modal', this.getOpenModals().length))
                .appendTo(this.$element);

            if (modal && modal.options.backdrop != 'static') {
                $container.on('click.modal', targetIsSelf(function (e) {
                    modal.hide();
                }));
            } else if (modal) {
                $container.on('click.modal', targetIsSelf(function (e) {
                    modal.attention();
                }));
            }

            return $container;

        },

        backdrop: function (modal, callback) {
            var animate = modal.$element.hasClass('fade') ? 'fade' : '',
                showBackdrop = modal.options.backdrop &&
                    this.backdropCount < this.options.backdropLimit;

            if (modal.isShown && showBackdrop) {
                var doAnimate = $.support.transition && animate && !this.$backdropHandle;

                modal.$backdrop = this.createBackdrop(animate, modal.options.backdropTemplate);

                modal.$backdrop.css('z-index', getzIndex( 'backdrop', this.getOpenModals().length ));

                if (doAnimate) modal.$backdrop[0].offsetWidth; // force reflow

                modal.$backdrop.addClass('in');

                this.backdropCount += 1;

                doAnimate ?
                    modal.$backdrop.one($.support.transition.end, callback) :
                    callback();

            } else if (!modal.isShown && modal.$backdrop) {
                modal.$backdrop.removeClass('in');

                this.backdropCount -= 1;

                var that = this;

                $.support.transition && modal.$element.hasClass('fade')?
                    modal.$backdrop.one($.support.transition.end, function () { that.removeBackdrop(modal) }) :
                    that.removeBackdrop(modal);

            } else if (callback) {
                callback();
            }
        },

        removeSpinner: function(){
            this.$spinner && this.$spinner.remove();
            this.$spinner = null;
            this.isLoading = false;
        },

        removeLoading: function () {
            this.$backdropHandle && this.$backdropHandle.remove();
            this.$backdropHandle = null;
            this.removeSpinner();
        },

        loading: function (callback) {
            callback = callback || function () { };

            this.$element
                .toggleClass('modal-open', !this.isLoading || this.hasOpenModal())
                .toggleClass('page-overflow', $(window).height() < this.$element.height());

            if (!this.isLoading) {

                this.$backdropHandle = this.createBackdrop('fade', this.options.backdropTemplate);

                this.$backdropHandle[0].offsetWidth; // force reflow

                var openModals = this.getOpenModals();

                this.$backdropHandle
                    .css('z-index', getzIndex('backdrop', openModals.length + 1))
                    .addClass('in');

                var $spinner = $(this.options.spinner)
                    .css('z-index', getzIndex('modal', openModals.length + 1))
                    .appendTo(this.$element)
                    .addClass('in');

                this.$spinner = $(this.createContainer())
                    .append($spinner)
                    .on('click.modalmanager', $.proxy(this.loading, this));

                this.isLoading = true;

                $.support.transition ?
                    this.$backdropHandle.one($.support.transition.end, callback) :
                    callback();

            } else if (this.isLoading && this.$backdropHandle) {
                this.$backdropHandle.removeClass('in');

                var that = this;
                $.support.transition ?
                    this.$backdropHandle.one($.support.transition.end, function () { that.removeLoading() }) :
                    that.removeLoading();

            } else if (callback) {
                callback(this.isLoading);
            }
        }
    };

    /* PRIVATE METHODS
     * ======================= */

    // computes and caches the zindexes
    var getzIndex = (function () {
        var zIndexFactor,
            baseIndex = {};

        return function (type, pos) {

            if (typeof zIndexFactor === 'undefined'){
                var $baseModal = $('<div class="modal hide" />').appendTo('body'),
                    $baseBackdrop = $('<div class="modal-backdrop hide" />').appendTo('body');

                baseIndex['modal'] = +$baseModal.css('z-index');
                baseIndex['backdrop'] = +$baseBackdrop.css('z-index');
                zIndexFactor = baseIndex['modal'] - baseIndex['backdrop'];

                $baseModal.remove();
                $baseBackdrop.remove();
                $baseBackdrop = $baseModal = null;
            }

            return baseIndex[type] + (zIndexFactor * pos);

        }
    }());

    // make sure the event target is the modal itself in order to prevent
    // other components such as tabsfrom triggering the modal manager.
    // if Boostsrap namespaced events, this would not be needed.
    function targetIsSelf(callback){
        return function (e) {
            if (e && this === e.target){
                return callback.apply(this, arguments);
            }
        }
    }


    /* MODAL MANAGER PLUGIN DEFINITION
     * ======================= */

    $.fn.modalmanager = function (option, args) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('modalmanager');

            if (!data) $this.data('modalmanager', (data = new ModalManager(this, option)));
            if (typeof option === 'string') data[option].apply(data, [].concat(args))
        })
    };

    $.fn.modalmanager.defaults = {
        backdropLimit: 999,
        resize: true,
        spinner: '<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    };

    $.fn.modalmanager.Constructor = ModalManager

    // ModalManager handles the modal-open class so we need
    // to remove conflicting bootstrap 3 event handlers
    $(function () {
        $(document).off('show.bs.modal').off('hidden.bs.modal');
    });

}(jQuery);
;/* ===========================================================
 * bootstrap-modal.js v2.2.5
 * ===========================================================
 * Copyright 2012 Jordan Schroter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

    "use strict"; // jshint ;_;

    /* MODAL CLASS DEFINITION
     * ====================== */

    var Modal = function (element, options) {
        this.init(element, options);
    };

    Modal.prototype = {

        constructor: Modal,

        init: function (element, options) {
            var that = this;

            this.options = options;

            this.$element = $(element)
                .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this));

            this.options.remote && this.$element.find('.modal-body').load(this.options.remote, function () {
                var e = $.Event('loaded');
                that.$element.trigger(e);
            });

            var manager = typeof this.options.manager === 'function' ?
                this.options.manager.call(this) : this.options.manager;

            manager = manager.appendModal ?
                manager : $(manager).modalmanager().data('modalmanager');

            manager.appendModal(this);
        },

        toggle: function () {
            return this[!this.isShown ? 'show' : 'hide']();
        },

        show: function () {
            var e = $.Event('show');

            if (this.isShown) return;

            this.$element.trigger(e);

            if (e.isDefaultPrevented()) return;

            this.escape();

            this.tab();

            this.options.loading && this.loading();
        },

        hide: function (e) {
            e && e.preventDefault();

            e = $.Event('hide');

            this.$element.trigger(e);

            if (!this.isShown || e.isDefaultPrevented()) return;

            this.isShown = false;

            this.escape();

            this.tab();

            this.isLoading && this.loading();

            $(document).off('focusin.modal');

            this.$element
                .removeClass('in')
                .removeClass('animated')
                .removeClass(this.options.attentionAnimation)
                .removeClass('modal-overflow')
                .attr('aria-hidden', true);

            $.support.transition && this.$element.hasClass('fade') ?
                this.hideWithTransition() :
                this.hideModal();
        },

        layout: function () {
            var prop = this.options.height ? 'height' : 'max-height',
                value = this.options.height || this.options.maxHeight;

            if (this.options.width){
                this.$element.css('width', this.options.width);

                var that = this;
                this.$element.css('margin-left', function () {
                    if (/%/ig.test(that.options.width)){
                        return -(parseInt(that.options.width) / 2) + '%';
                    } else {
                        return -($(this).width() / 2) + 'px';
                    }
                });
            } else {
                this.$element.css('width', '');
                this.$element.css('margin-left', '');
            }

            this.$element.find('.modal-body')
                .css('overflow', '')
                .css(prop, '');

            if (value){
                this.$element.find('.modal-body')
                    .css('overflow', 'auto')
                    .css(prop, value);
            }

            var modalOverflow = $(window).height() - 10 < this.$element.height();

            if (modalOverflow || this.options.modalOverflow) {
                this.$element
                    .css('margin-top', 0)
                    .addClass('modal-overflow');
            } else {
                this.$element
                    .css('margin-top', 0 - this.$element.height() / 2)
                    .removeClass('modal-overflow');
            }
        },

        tab: function () {
            var that = this;

            if (this.isShown && this.options.consumeTab) {
                this.$element.on('keydown.tabindex.modal', '[data-tabindex]', function (e) {
                    if (e.keyCode && e.keyCode == 9){
                        var elements = [],
                            tabindex = Number($(this).data('tabindex'));

                        that.$element.find('[data-tabindex]:enabled:visible:not([readonly])').each(function (ev) {
                            elements.push(Number($(this).data('tabindex')));
                        });
                        elements.sort(function(a,b){return a-b});

                        var arrayPos = $.inArray(tabindex, elements);
                        if (!e.shiftKey){
                            arrayPos < elements.length-1 ?
                                that.$element.find('[data-tabindex='+elements[arrayPos+1]+']').focus() :
                                that.$element.find('[data-tabindex='+elements[0]+']').focus();
                        } else {
                            arrayPos == 0 ?
                                that.$element.find('[data-tabindex='+elements[elements.length-1]+']').focus() :
                                that.$element.find('[data-tabindex='+elements[arrayPos-1]+']').focus();
                        }

                        e.preventDefault();
                    }
                });
            } else if (!this.isShown) {
                this.$element.off('keydown.tabindex.modal');
            }
        },

        escape: function () {
            var that = this;
            if (this.isShown && this.options.keyboard) {
                if (!this.$element.attr('tabindex')) this.$element.attr('tabindex', -1);

                this.$element.on('keyup.dismiss.modal', function (e) {
                    e.which == 27 && that.hide();
                });
            } else if (!this.isShown) {
                this.$element.off('keyup.dismiss.modal')
            }
        },

        hideWithTransition: function () {
            var that = this
                , timeout = setTimeout(function () {
                that.$element.off($.support.transition.end);
                that.hideModal();
            }, 500);

            this.$element.one($.support.transition.end, function () {
                clearTimeout(timeout);
                that.hideModal();
            });
        },

        hideModal: function () {
            var prop = this.options.height ? 'height' : 'max-height';
            var value = this.options.height || this.options.maxHeight;

            if (value){
                this.$element.find('.modal-body')
                    .css('overflow', '')
                    .css(prop, '');
            }

            this.$element
                .hide()
                .trigger('hidden');
        },

        removeLoading: function () {
            this.$loading.remove();
            this.$loading = null;
            this.isLoading = false;
        },

        loading: function (callback) {
            callback = callback || function () {};

            var animate = this.$element.hasClass('fade') ? 'fade' : '';

            if (!this.isLoading) {
                var doAnimate = $.support.transition && animate;

                this.$loading = $('<div class="loading-mask ' + animate + '">')
                    .append(this.options.spinner)
                    .appendTo(this.$element);

                if (doAnimate) this.$loading[0].offsetWidth; // force reflow

                this.$loading.addClass('in');

                this.isLoading = true;

                doAnimate ?
                    this.$loading.one($.support.transition.end, callback) :
                    callback();

            } else if (this.isLoading && this.$loading) {
                this.$loading.removeClass('in');

                var that = this;
                $.support.transition && this.$element.hasClass('fade')?
                    this.$loading.one($.support.transition.end, function () { that.removeLoading() }) :
                    that.removeLoading();

            } else if (callback) {
                callback(this.isLoading);
            }
        },

        focus: function () {
            var $focusElem = this.$element.find(this.options.focusOn);

            $focusElem = $focusElem.length ? $focusElem : this.$element;

            $focusElem.focus();
        },

        attention: function (){
            // NOTE: transitionEnd with keyframes causes odd behaviour

            if (this.options.attentionAnimation){
                this.$element
                    .removeClass('animated')
                    .removeClass(this.options.attentionAnimation);

                var that = this;

                setTimeout(function () {
                    that.$element
                        .addClass('animated')
                        .addClass(that.options.attentionAnimation);
                }, 0);
            }


            this.focus();
        },


        destroy: function () {
            var e = $.Event('destroy');

            this.$element.trigger(e);

            if (e.isDefaultPrevented()) return;

            this.$element
                .off('.modal')
                .removeData('modal')
                .removeClass('in')
                .attr('aria-hidden', true);

            if (this.$parent !== this.$element.parent()) {
                this.$element.appendTo(this.$parent);
            } else if (!this.$parent.length) {
                // modal is not part of the DOM so remove it.
                this.$element.remove();
                this.$element = null;
            }

            this.$element.trigger('destroyed');
        }
    };


    /* MODAL PLUGIN DEFINITION
     * ======================= */

    $.fn.modal = function (option, args) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('modal'),
                options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option);

            if (!data) $this.data('modal', (data = new Modal(this, options)));
            if (typeof option == 'string') data[option].apply(data, [].concat(args));
            else if (options.show) data.show()
        })
    };

    $.fn.modal.defaults = {
        keyboard: true,
        backdrop: true,
        loading: false,
        show: true,
        width: null,
        height: null,
        maxHeight: null,
        modalOverflow: false,
        consumeTab: true,
        focusOn: null,
        replace: false,
        resize: false,
        attentionAnimation: 'shake',
        manager: 'body',
        spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    };

    $.fn.modal.Constructor = Modal;


    /* MODAL DATA-API
     * ============== */

    $(function () {
        $(document).off('click.modal').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
            var $this = $(this),
                href = $this.attr('href'),
                $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))), //strip for ie7
                option = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

            e.preventDefault();
            $target
                .modal(option)
                .one('hide', function () {
                    $this.focus();
                })
        });
    });

}(window.jQuery);
;(function (window, $) {

    function request(url, settings) {
        return $.ajax(url, $.extend({
            xhrFields: {
                withCredentials: true
            }
        }, settings || {}));
    }


})(this, this.$);
;// product grid category filtering
(function() {
    var container;
    var buttons;
    var products;

    function showCategory( categoryObj ) {
        var category = categoryObj.attr('data-category');

        products.hide().filter(function() {
            if ( category === "all" ) {
                return 1;
            } else {
                return $( this ).attr('data-categories').indexOf(category) > -1;
            }
        }).each( function() {
            // if ( looper == 0 || looper == 4 || looper == 8 || looper == 12 || looper == 16 || looper == 20 || looper == 24 || looper == 28 ) {
            //   $row = $( '<div class="row ghost-row ghost-row-' + looper + '"></div>' );
            //   $( '#product-builder' ).append( $row );
            // }
            // $( this ).prependTo( $row ).show();
            // looper++;
            $(this).show();
        });
        categoryObj.addClass('btn-secondary').siblings().removeClass('btn-secondary');

    }

    $(document).ready( function() {
        container = $('.product-grid');
        buttons   = container.find('.btn-group button');
        products  = container.find('.product-grid__product');

        buttons.on('click', function(e) {
            e.preventDefault();
            showCategory( $(this) );
        });
        var hash = window.location.hash.substring( 1 );
        if ( hash ) {
            showCategory( $( '#button-' + hash ) );
        }
    });

})();

;
if (!document.createElement('canvas').getContext) {

    (function() {

        // alias some functions to make (compiled) code shorter
        var m = Math;
        var mr = m.round;
        var ms = m.sin;
        var mc = m.cos;
        var abs = m.abs;
        var sqrt = m.sqrt;

        // this is used for sub pixel precision
        var Z = 10;
        var Z2 = Z / 2;

        var IE_VERSION = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];

        /**
         * This funtion is assigned to the <canvas> elements as element.getContext().
         * @this {HTMLElement}
         * @return {CanvasRenderingContext2D_}
         */
        function getContext() {
            return this.context_ ||
                (this.context_ = new CanvasRenderingContext2D_(this));
        }

        var slice = Array.prototype.slice;

        /**
         * Binds a function to an object. The returned function will always use the
         * passed in {@code obj} as {@code this}.
         *
         * Example:
         *
         *   g = bind(f, obj, a, b)
         *   g(c, d) // will do f.call(obj, a, b, c, d)
         *
         * @param {Function} f The function to bind the object to
         * @param {Object} obj The object that should act as this when the function
         *     is called
         * @param {*} var_args Rest arguments that will be used as the initial
         *     arguments when the function is called
         * @return {Function} A new function that has bound this
         */
        function bind(f, obj, var_args) {
            var a = slice.call(arguments, 2);
            return function() {
                return f.apply(obj, a.concat(slice.call(arguments)));
            };
        }

        function encodeHtmlAttribute(s) {
            return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
        }

        function addNamespace(doc, prefix, urn) {
            if (!doc.namespaces[prefix]) {
                doc.namespaces.add(prefix, urn, '#default#VML');
            }
        }

        function addNamespacesAndStylesheet(doc) {
            addNamespace(doc, 'g_vml_', 'urn:schemas-microsoft-com:vml');
            addNamespace(doc, 'g_o_', 'urn:schemas-microsoft-com:office:office');

            // Setup default CSS.  Only add one style sheet per document
            if (!doc.styleSheets['ex_canvas_']) {
                var ss = doc.createStyleSheet();
                ss.owningElement.id = 'ex_canvas_';
                ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
                    // default size is 300x150 in Gecko and Opera
                    'text-align:left;width:300px;height:150px}';
            }
        }

        // Add namespaces and stylesheet at startup.
        addNamespacesAndStylesheet(document);

        var G_vmlCanvasManager_ = {
            init: function(opt_doc) {
                var doc = opt_doc || document;
                // Create a dummy element so that IE will allow canvas elements to be
                // recognized.
                doc.createElement('canvas');
                doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
            },

            init_: function(doc) {
                // find all canvas elements
                var els = doc.getElementsByTagName('canvas');
                for (var i = 0; i < els.length; i++) {
                    this.initElement(els[i]);
                }
            },

            /**
             * Public initializes a canvas element so that it can be used as canvas
             * element from now on. This is called automatically before the page is
             * loaded but if you are creating elements using createElement you need to
             * make sure this is called on the element.
             * @param {HTMLElement} el The canvas element to initialize.
             * @return {HTMLElement} the element that was created.
             */
            initElement: function(el) {
                if (!el.getContext) {
                    el.getContext = getContext;

                    // Add namespaces and stylesheet to document of the element.
                    addNamespacesAndStylesheet(el.ownerDocument);

                    // Remove fallback content. There is no way to hide text nodes so we
                    // just remove all childNodes. We could hide all elements and remove
                    // text nodes but who really cares about the fallback content.
                    el.innerHTML = '';

                    // do not use inline function because that will leak memory
                    el.attachEvent('onpropertychange', onPropertyChange);
                    el.attachEvent('onresize', onResize);

                    var attrs = el.attributes;
                    if (attrs.width && attrs.width.specified) {
                        // TODO: use runtimeStyle and coordsize
                        // el.getContext().setWidth_(attrs.width.nodeValue);
                        el.style.width = attrs.width.nodeValue + 'px';
                    } else {
                        el.width = el.clientWidth;
                    }
                    if (attrs.height && attrs.height.specified) {
                        // TODO: use runtimeStyle and coordsize
                        // el.getContext().setHeight_(attrs.height.nodeValue);
                        el.style.height = attrs.height.nodeValue + 'px';
                    } else {
                        el.height = el.clientHeight;
                    }
                    //el.getContext().setCoordsize_()
                }
                return el;
            }
        };

        function onPropertyChange(e) {
            var el = e.srcElement;

            switch (e.propertyName) {
                case 'width':
                    el.getContext().clearRect();
                    el.style.width = el.attributes.width.nodeValue + 'px';
                    // In IE8 this does not trigger onresize.
                    el.firstChild.style.width =  el.clientWidth + 'px';
                    break;
                case 'height':
                    el.getContext().clearRect();
                    el.style.height = el.attributes.height.nodeValue + 'px';
                    el.firstChild.style.height = el.clientHeight + 'px';
                    break;
            }
        }

        function onResize(e) {
            var el = e.srcElement;
            if (el.firstChild) {
                el.firstChild.style.width =  el.clientWidth + 'px';
                el.firstChild.style.height = el.clientHeight + 'px';
            }
        }

        G_vmlCanvasManager_.init();

        // precompute "00" to "FF"
        var decToHex = [];
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 16; j++) {
                decToHex[i * 16 + j] = i.toString(16) + j.toString(16);
            }
        }

        function createMatrixIdentity() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ];
        }

        function matrixMultiply(m1, m2) {
            var result = createMatrixIdentity();

            for (var x = 0; x < 3; x++) {
                for (var y = 0; y < 3; y++) {
                    var sum = 0;

                    for (var z = 0; z < 3; z++) {
                        sum += m1[x][z] * m2[z][y];
                    }

                    result[x][y] = sum;
                }
            }
            return result;
        }

        function copyState(o1, o2) {
            o2.fillStyle     = o1.fillStyle;
            o2.lineCap       = o1.lineCap;
            o2.lineJoin      = o1.lineJoin;
            o2.lineWidth     = o1.lineWidth;
            o2.miterLimit    = o1.miterLimit;
            o2.shadowBlur    = o1.shadowBlur;
            o2.shadowColor   = o1.shadowColor;
            o2.shadowOffsetX = o1.shadowOffsetX;
            o2.shadowOffsetY = o1.shadowOffsetY;
            o2.strokeStyle   = o1.strokeStyle;
            o2.globalAlpha   = o1.globalAlpha;
            o2.font          = o1.font;
            o2.textAlign     = o1.textAlign;
            o2.textBaseline  = o1.textBaseline;
            o2.arcScaleX_    = o1.arcScaleX_;
            o2.arcScaleY_    = o1.arcScaleY_;
            o2.lineScale_    = o1.lineScale_;
        }

        var colorData = {
            aliceblue: '#F0F8FF',
            antiquewhite: '#FAEBD7',
            aquamarine: '#7FFFD4',
            azure: '#F0FFFF',
            beige: '#F5F5DC',
            bisque: '#FFE4C4',
            black: '#000000',
            blanchedalmond: '#FFEBCD',
            blueviolet: '#8A2BE2',
            brown: '#A52A2A',
            burlywood: '#DEB887',
            cadetblue: '#5F9EA0',
            chartreuse: '#7FFF00',
            chocolate: '#D2691E',
            coral: '#FF7F50',
            cornflowerblue: '#6495ED',
            cornsilk: '#FFF8DC',
            crimson: '#DC143C',
            cyan: '#00FFFF',
            darkblue: '#00008B',
            darkcyan: '#008B8B',
            darkgoldenrod: '#B8860B',
            darkgray: '#A9A9A9',
            darkgreen: '#006400',
            darkgrey: '#A9A9A9',
            darkkhaki: '#BDB76B',
            darkmagenta: '#8B008B',
            darkolivegreen: '#556B2F',
            darkorange: '#FF8C00',
            darkorchid: '#9932CC',
            darkred: '#8B0000',
            darksalmon: '#E9967A',
            darkseagreen: '#8FBC8F',
            darkslateblue: '#483D8B',
            darkslategray: '#2F4F4F',
            darkslategrey: '#2F4F4F',
            darkturquoise: '#00CED1',
            darkviolet: '#9400D3',
            deeppink: '#FF1493',
            deepskyblue: '#00BFFF',
            dimgray: '#696969',
            dimgrey: '#696969',
            dodgerblue: '#1E90FF',
            firebrick: '#B22222',
            floralwhite: '#FFFAF0',
            forestgreen: '#228B22',
            gainsboro: '#DCDCDC',
            ghostwhite: '#F8F8FF',
            gold: '#FFD700',
            goldenrod: '#DAA520',
            grey: '#808080',
            greenyellow: '#ADFF2F',
            honeydew: '#F0FFF0',
            hotpink: '#FF69B4',
            indianred: '#CD5C5C',
            indigo: '#4B0082',
            ivory: '#FFFFF0',
            khaki: '#F0E68C',
            lavender: '#E6E6FA',
            lavenderblush: '#FFF0F5',
            lawngreen: '#7CFC00',
            lemonchiffon: '#FFFACD',
            lightblue: '#ADD8E6',
            lightcoral: '#F08080',
            lightcyan: '#E0FFFF',
            lightgoldenrodyellow: '#FAFAD2',
            lightgreen: '#90EE90',
            lightgrey: '#D3D3D3',
            lightpink: '#FFB6C1',
            lightsalmon: '#FFA07A',
            lightseagreen: '#20B2AA',
            lightskyblue: '#87CEFA',
            lightslategray: '#778899',
            lightslategrey: '#778899',
            lightsteelblue: '#B0C4DE',
            lightyellow: '#FFFFE0',
            limegreen: '#32CD32',
            linen: '#FAF0E6',
            magenta: '#FF00FF',
            mediumaquamarine: '#66CDAA',
            mediumblue: '#0000CD',
            mediumorchid: '#BA55D3',
            mediumpurple: '#9370DB',
            mediumseagreen: '#3CB371',
            mediumslateblue: '#7B68EE',
            mediumspringgreen: '#00FA9A',
            mediumturquoise: '#48D1CC',
            mediumvioletred: '#C71585',
            midnightblue: '#191970',
            mintcream: '#F5FFFA',
            mistyrose: '#FFE4E1',
            moccasin: '#FFE4B5',
            navajowhite: '#FFDEAD',
            oldlace: '#FDF5E6',
            olivedrab: '#6B8E23',
            orange: '#FFA500',
            orangered: '#FF4500',
            orchid: '#DA70D6',
            palegoldenrod: '#EEE8AA',
            palegreen: '#98FB98',
            paleturquoise: '#AFEEEE',
            palevioletred: '#DB7093',
            papayawhip: '#FFEFD5',
            peachpuff: '#FFDAB9',
            peru: '#CD853F',
            pink: '#FFC0CB',
            plum: '#DDA0DD',
            powderblue: '#B0E0E6',
            rosybrown: '#BC8F8F',
            royalblue: '#4169E1',
            saddlebrown: '#8B4513',
            salmon: '#FA8072',
            sandybrown: '#F4A460',
            seagreen: '#2E8B57',
            seashell: '#FFF5EE',
            sienna: '#A0522D',
            skyblue: '#87CEEB',
            slateblue: '#6A5ACD',
            slategray: '#708090',
            slategrey: '#708090',
            snow: '#FFFAFA',
            springgreen: '#00FF7F',
            steelblue: '#4682B4',
            tan: '#D2B48C',
            thistle: '#D8BFD8',
            tomato: '#FF6347',
            turquoise: '#40E0D0',
            violet: '#EE82EE',
            wheat: '#F5DEB3',
            whitesmoke: '#F5F5F5',
            yellowgreen: '#9ACD32'
        };


        function getRgbHslContent(styleString) {
            var start = styleString.indexOf('(', 3);
            var end = styleString.indexOf(')', start + 1);
            var parts = styleString.substring(start + 1, end).split(',');
            // add alpha if needed
            if (parts.length != 4 || styleString.charAt(3) != 'a') {
                parts[3] = 1;
            }
            return parts;
        }

        function percent(s) {
            return parseFloat(s) / 100;
        }

        function clamp(v, min, max) {
            return Math.min(max, Math.max(min, v));
        }

        function hslToRgb(parts){
            var r, g, b, h, s, l;
            h = parseFloat(parts[0]) / 360 % 360;
            if (h < 0)
                h++;
            s = clamp(percent(parts[1]), 0, 1);
            l = clamp(percent(parts[2]), 0, 1);
            if (s == 0) {
                r = g = b = l; // achromatic
            } else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hueToRgb(p, q, h + 1 / 3);
                g = hueToRgb(p, q, h);
                b = hueToRgb(p, q, h - 1 / 3);
            }

            return '#' + decToHex[Math.floor(r * 255)] +
                decToHex[Math.floor(g * 255)] +
                decToHex[Math.floor(b * 255)];
        }

        function hueToRgb(m1, m2, h) {
            if (h < 0)
                h++;
            if (h > 1)
                h--;

            if (6 * h < 1)
                return m1 + (m2 - m1) * 6 * h;
            else if (2 * h < 1)
                return m2;
            else if (3 * h < 2)
                return m1 + (m2 - m1) * (2 / 3 - h) * 6;
            else
                return m1;
        }

        var processStyleCache = {};

        function processStyle(styleString) {
            if (styleString in processStyleCache) {
                return processStyleCache[styleString];
            }

            var str, alpha = 1;

            styleString = String(styleString);
            if (styleString.charAt(0) == '#') {
                str = styleString;
            } else if (/^rgb/.test(styleString)) {
                var parts = getRgbHslContent(styleString);
                var str = '#', n;
                for (var i = 0; i < 3; i++) {
                    if (parts[i].indexOf('%') != -1) {
                        n = Math.floor(percent(parts[i]) * 255);
                    } else {
                        n = +parts[i];
                    }
                    str += decToHex[clamp(n, 0, 255)];
                }
                alpha = +parts[3];
            } else if (/^hsl/.test(styleString)) {
                var parts = getRgbHslContent(styleString);
                str = hslToRgb(parts);
                alpha = parts[3];
            } else {
                str = colorData[styleString] || styleString;
            }
            return processStyleCache[styleString] = {color: str, alpha: alpha};
        }

        var DEFAULT_STYLE = {
            style: 'normal',
            variant: 'normal',
            weight: 'normal',
            size: 10,
            family: 'sans-serif'
        };

        // Internal text style cache
        var fontStyleCache = {};

        function processFontStyle(styleString) {
            if (fontStyleCache[styleString]) {
                return fontStyleCache[styleString];
            }

            var el = document.createElement('div');
            var style = el.style;
            try {
                style.font = styleString;
            } catch (ex) {
                // Ignore failures to set to invalid font.
            }

            return fontStyleCache[styleString] = {
                style: style.fontStyle || DEFAULT_STYLE.style,
                variant: style.fontVariant || DEFAULT_STYLE.variant,
                weight: style.fontWeight || DEFAULT_STYLE.weight,
                size: style.fontSize || DEFAULT_STYLE.size,
                family: style.fontFamily || DEFAULT_STYLE.family
            };
        }

        function getComputedStyle(style, element) {
            var computedStyle = {};

            for (var p in style) {
                computedStyle[p] = style[p];
            }

            // Compute the size
            var canvasFontSize = parseFloat(element.currentStyle.fontSize),
                fontSize = parseFloat(style.size);

            if (typeof style.size == 'number') {
                computedStyle.size = style.size;
            } else if (style.size.indexOf('px') != -1) {
                computedStyle.size = fontSize;
            } else if (style.size.indexOf('em') != -1) {
                computedStyle.size = canvasFontSize * fontSize;
            } else if(style.size.indexOf('%') != -1) {
                computedStyle.size = (canvasFontSize / 100) * fontSize;
            } else if (style.size.indexOf('pt') != -1) {
                computedStyle.size = fontSize / .75;
            } else {
                computedStyle.size = canvasFontSize;
            }

            // Different scaling between normal text and VML text. This was found using
            // trial and error to get the same size as non VML text.
            computedStyle.size *= 0.981;

            return computedStyle;
        }

        function buildStyle(style) {
            return style.style + ' ' + style.variant + ' ' + style.weight + ' ' +
                style.size + 'px ' + style.family;
        }

        var lineCapMap = {
            'butt': 'flat',
            'round': 'round'
        };

        function processLineCap(lineCap) {
            return lineCapMap[lineCap] || 'square';
        }

        /**
         * This class implements CanvasRenderingContext2D interface as described by
         * the WHATWG.
         * @param {HTMLElement} canvasElement The element that the 2D context should
         * be associated with
         */
        function CanvasRenderingContext2D_(canvasElement) {
            this.m_ = createMatrixIdentity();

            this.mStack_ = [];
            this.aStack_ = [];
            this.currentPath_ = [];

            // Canvas context properties
            this.strokeStyle = '#000';
            this.fillStyle = '#000';

            this.lineWidth = 1;
            this.lineJoin = 'miter';
            this.lineCap = 'butt';
            this.miterLimit = Z * 1;
            this.globalAlpha = 1;
            this.font = '10px sans-serif';
            this.textAlign = 'left';
            this.textBaseline = 'alphabetic';
            this.canvas = canvasElement;

            var cssText = 'width:' + canvasElement.clientWidth + 'px;height:' +
                canvasElement.clientHeight + 'px;overflow:hidden;position:absolute';
            var el = canvasElement.ownerDocument.createElement('div');
            el.style.cssText = cssText;
            canvasElement.appendChild(el);

            var overlayEl = el.cloneNode(false);
            // Use a non transparent background.
            overlayEl.style.backgroundColor = 'red';
            overlayEl.style.filter = 'alpha(opacity=0)';
            canvasElement.appendChild(overlayEl);

            this.element_ = el;
            this.arcScaleX_ = 1;
            this.arcScaleY_ = 1;
            this.lineScale_ = 1;
        }

        var contextPrototype = CanvasRenderingContext2D_.prototype;
        contextPrototype.clearRect = function() {
            if (this.textMeasureEl_) {
                this.textMeasureEl_.removeNode(true);
                this.textMeasureEl_ = null;
            }
            this.element_.innerHTML = '';
        };

        contextPrototype.beginPath = function() {
            // TODO: Branch current matrix so that save/restore has no effect
            //       as per safari docs.
            this.currentPath_ = [];
        };

        contextPrototype.moveTo = function(aX, aY) {
            var p = getCoords(this, aX, aY);
            this.currentPath_.push({type: 'moveTo', x: p.x, y: p.y});
            this.currentX_ = p.x;
            this.currentY_ = p.y;
        };

        contextPrototype.lineTo = function(aX, aY) {
            var p = getCoords(this, aX, aY);
            this.currentPath_.push({type: 'lineTo', x: p.x, y: p.y});

            this.currentX_ = p.x;
            this.currentY_ = p.y;
        };

        contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
                                                  aCP2x, aCP2y,
                                                  aX, aY) {
            var p = getCoords(this, aX, aY);
            var cp1 = getCoords(this, aCP1x, aCP1y);
            var cp2 = getCoords(this, aCP2x, aCP2y);
            bezierCurveTo(this, cp1, cp2, p);
        };

        // Helper function that takes the already fixed cordinates.
        function bezierCurveTo(self, cp1, cp2, p) {
            self.currentPath_.push({
                type: 'bezierCurveTo',
                cp1x: cp1.x,
                cp1y: cp1.y,
                cp2x: cp2.x,
                cp2y: cp2.y,
                x: p.x,
                y: p.y
            });
            self.currentX_ = p.x;
            self.currentY_ = p.y;
        }

        contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {
            // the following is lifted almost directly from
            // http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

            var cp = getCoords(this, aCPx, aCPy);
            var p = getCoords(this, aX, aY);

            var cp1 = {
                x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
                y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
            };
            var cp2 = {
                x: cp1.x + (p.x - this.currentX_) / 3.0,
                y: cp1.y + (p.y - this.currentY_) / 3.0
            };

            bezierCurveTo(this, cp1, cp2, p);
        };

        contextPrototype.arc = function(aX, aY, aRadius,
                                        aStartAngle, aEndAngle, aClockwise) {
            aRadius *= Z;
            var arcType = aClockwise ? 'at' : 'wa';

            var xStart = aX + mc(aStartAngle) * aRadius - Z2;
            var yStart = aY + ms(aStartAngle) * aRadius - Z2;

            var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
            var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

            // IE won't render arches drawn counter clockwise if xStart == xEnd.
            if (xStart == xEnd && !aClockwise) {
                xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
                                 // that can be represented in binary
            }

            var p = getCoords(this, aX, aY);
            var pStart = getCoords(this, xStart, yStart);
            var pEnd = getCoords(this, xEnd, yEnd);

            this.currentPath_.push({type: arcType,
                x: p.x,
                y: p.y,
                radius: aRadius,
                xStart: pStart.x,
                yStart: pStart.y,
                xEnd: pEnd.x,
                yEnd: pEnd.y});

        };

        contextPrototype.rect = function(aX, aY, aWidth, aHeight) {
            this.moveTo(aX, aY);
            this.lineTo(aX + aWidth, aY);
            this.lineTo(aX + aWidth, aY + aHeight);
            this.lineTo(aX, aY + aHeight);
            this.closePath();
        };

        contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight) {
            var oldPath = this.currentPath_;
            this.beginPath();

            this.moveTo(aX, aY);
            this.lineTo(aX + aWidth, aY);
            this.lineTo(aX + aWidth, aY + aHeight);
            this.lineTo(aX, aY + aHeight);
            this.closePath();
            this.stroke();

            this.currentPath_ = oldPath;
        };

        contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
            var oldPath = this.currentPath_;
            this.beginPath();

            this.moveTo(aX, aY);
            this.lineTo(aX + aWidth, aY);
            this.lineTo(aX + aWidth, aY + aHeight);
            this.lineTo(aX, aY + aHeight);
            this.closePath();
            this.fill();

            this.currentPath_ = oldPath;
        };

        contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1) {
            var gradient = new CanvasGradient_('gradient');
            gradient.x0_ = aX0;
            gradient.y0_ = aY0;
            gradient.x1_ = aX1;
            gradient.y1_ = aY1;
            return gradient;
        };

        contextPrototype.createRadialGradient = function(aX0, aY0, aR0,
                                                         aX1, aY1, aR1) {
            var gradient = new CanvasGradient_('gradientradial');
            gradient.x0_ = aX0;
            gradient.y0_ = aY0;
            gradient.r0_ = aR0;
            gradient.x1_ = aX1;
            gradient.y1_ = aY1;
            gradient.r1_ = aR1;
            return gradient;
        };

        contextPrototype.drawImage = function(image, var_args) {
            var dx, dy, dw, dh, sx, sy, sw, sh;

            // to find the original width we overide the width and height
            var oldRuntimeWidth = image.runtimeStyle.width;
            var oldRuntimeHeight = image.runtimeStyle.height;
            image.runtimeStyle.width = 'auto';
            image.runtimeStyle.height = 'auto';

            // get the original size
            var w = image.width;
            var h = image.height;

            // and remove overides
            image.runtimeStyle.width = oldRuntimeWidth;
            image.runtimeStyle.height = oldRuntimeHeight;

            if (arguments.length == 3) {
                dx = arguments[1];
                dy = arguments[2];
                sx = sy = 0;
                sw = dw = w;
                sh = dh = h;
            } else if (arguments.length == 5) {
                dx = arguments[1];
                dy = arguments[2];
                dw = arguments[3];
                dh = arguments[4];
                sx = sy = 0;
                sw = w;
                sh = h;
            } else if (arguments.length == 9) {
                sx = arguments[1];
                sy = arguments[2];
                sw = arguments[3];
                sh = arguments[4];
                dx = arguments[5];
                dy = arguments[6];
                dw = arguments[7];
                dh = arguments[8];
            } else {
                throw Error('Invalid number of arguments');
            }

            var d = getCoords(this, dx, dy);

            var w2 = sw / 2;
            var h2 = sh / 2;

            var vmlStr = [];

            var W = 10;
            var H = 10;

            // For some reason that I've now forgotten, using divs didn't work
            vmlStr.push(' <g_vml_:group',
                ' coordsize="', Z * W, ',', Z * H, '"',
                ' coordorigin="0,0"' ,
                ' style="width:', W, 'px;height:', H, 'px;position:absolute;');

            // If filters are necessary (rotation exists), create them
            // filters are bog-slow, so only create them if abbsolutely necessary
            // The following check doesn't account for skews (which don't exist
            // in the canvas spec (yet) anyway.

            if (this.m_[0][0] != 1 || this.m_[0][1] ||
                this.m_[1][1] != 1 || this.m_[1][0]) {
                var filter = [];

                // Note the 12/21 reversal
                filter.push('M11=', this.m_[0][0], ',',
                    'M12=', this.m_[1][0], ',',
                    'M21=', this.m_[0][1], ',',
                    'M22=', this.m_[1][1], ',',
                    'Dx=', mr(d.x / Z), ',',
                    'Dy=', mr(d.y / Z), '');

                // Bounding box calculation (need to minimize displayed area so that
                // filters don't waste time on unused pixels.
                var max = d;
                var c2 = getCoords(this, dx + dw, dy);
                var c3 = getCoords(this, dx, dy + dh);
                var c4 = getCoords(this, dx + dw, dy + dh);

                max.x = m.max(max.x, c2.x, c3.x, c4.x);
                max.y = m.max(max.y, c2.y, c3.y, c4.y);

                vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
                    'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
                    filter.join(''), ", sizingmethod='clip');");

            } else {
                vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
            }

            vmlStr.push(' ">' ,
                '<g_vml_:image src="', image.src, '"',
                ' style="width:', Z * dw, 'px;',
                ' height:', Z * dh, 'px"',
                ' cropleft="', sx / w, '"',
                ' croptop="', sy / h, '"',
                ' cropright="', (w - sx - sw) / w, '"',
                ' cropbottom="', (h - sy - sh) / h, '"',
                ' />',
                '</g_vml_:group>');

            this.element_.insertAdjacentHTML('BeforeEnd', vmlStr.join(''));
        };

        contextPrototype.stroke = function(aFill) {
            var lineStr = [];
            var lineOpen = false;

            var W = 10;
            var H = 10;

            lineStr.push('<g_vml_:shape',
                ' filled="', !!aFill, '"',
                ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
                ' coordorigin="0,0"',
                ' coordsize="', Z * W, ',', Z * H, '"',
                ' stroked="', !aFill, '"',
                ' path="');

            var newSeq = false;
            var min = {x: null, y: null};
            var max = {x: null, y: null};

            for (var i = 0; i < this.currentPath_.length; i++) {
                var p = this.currentPath_[i];
                var c;

                switch (p.type) {
                    case 'moveTo':
                        c = p;
                        lineStr.push(' m ', mr(p.x), ',', mr(p.y));
                        break;
                    case 'lineTo':
                        lineStr.push(' l ', mr(p.x), ',', mr(p.y));
                        break;
                    case 'close':
                        lineStr.push(' x ');
                        p = null;
                        break;
                    case 'bezierCurveTo':
                        lineStr.push(' c ',
                            mr(p.cp1x), ',', mr(p.cp1y), ',',
                            mr(p.cp2x), ',', mr(p.cp2y), ',',
                            mr(p.x), ',', mr(p.y));
                        break;
                    case 'at':
                    case 'wa':
                        lineStr.push(' ', p.type, ' ',
                            mr(p.x - this.arcScaleX_ * p.radius), ',',
                            mr(p.y - this.arcScaleY_ * p.radius), ' ',
                            mr(p.x + this.arcScaleX_ * p.radius), ',',
                            mr(p.y + this.arcScaleY_ * p.radius), ' ',
                            mr(p.xStart), ',', mr(p.yStart), ' ',
                            mr(p.xEnd), ',', mr(p.yEnd));
                        break;
                }


                // TODO: Following is broken for curves due to
                //       move to proper paths.

                // Figure out dimensions so we can do gradient fills
                // properly
                if (p) {
                    if (min.x == null || p.x < min.x) {
                        min.x = p.x;
                    }
                    if (max.x == null || p.x > max.x) {
                        max.x = p.x;
                    }
                    if (min.y == null || p.y < min.y) {
                        min.y = p.y;
                    }
                    if (max.y == null || p.y > max.y) {
                        max.y = p.y;
                    }
                }
            }
            lineStr.push(' ">');

            if (!aFill) {
                appendStroke(this, lineStr);
            } else {
                appendFill(this, lineStr, min, max);
            }

            lineStr.push('</g_vml_:shape>');

            this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
        };

        function appendStroke(ctx, lineStr) {
            var a = processStyle(ctx.strokeStyle);
            var color = a.color;
            var opacity = a.alpha * ctx.globalAlpha;
            var lineWidth = ctx.lineScale_ * ctx.lineWidth;

            // VML cannot correctly render a line if the width is less than 1px.
            // In that case, we dilute the color to make the line look thinner.
            if (lineWidth < 1) {
                opacity *= lineWidth;
            }

            lineStr.push(
                '<g_vml_:stroke',
                ' opacity="', opacity, '"',
                ' joinstyle="', ctx.lineJoin, '"',
                ' miterlimit="', ctx.miterLimit, '"',
                ' endcap="', processLineCap(ctx.lineCap), '"',
                ' weight="', lineWidth, 'px"',
                ' color="', color, '" />'
            );
        }

        function appendFill(ctx, lineStr, min, max) {
            var fillStyle = ctx.fillStyle;
            var arcScaleX = ctx.arcScaleX_;
            var arcScaleY = ctx.arcScaleY_;
            var width = max.x - min.x;
            var height = max.y - min.y;
            if (fillStyle instanceof CanvasGradient_) {
                // TODO: Gradients transformed with the transformation matrix.
                var angle = 0;
                var focus = {x: 0, y: 0};

                // additional offset
                var shift = 0;
                // scale factor for offset
                var expansion = 1;

                if (fillStyle.type_ == 'gradient') {
                    var x0 = fillStyle.x0_ / arcScaleX;
                    var y0 = fillStyle.y0_ / arcScaleY;
                    var x1 = fillStyle.x1_ / arcScaleX;
                    var y1 = fillStyle.y1_ / arcScaleY;
                    var p0 = getCoords(ctx, x0, y0);
                    var p1 = getCoords(ctx, x1, y1);
                    var dx = p1.x - p0.x;
                    var dy = p1.y - p0.y;
                    angle = Math.atan2(dx, dy) * 180 / Math.PI;

                    // The angle should be a non-negative number.
                    if (angle < 0) {
                        angle += 360;
                    }

                    // Very small angles produce an unexpected result because they are
                    // converted to a scientific notation string.
                    if (angle < 1e-6) {
                        angle = 0;
                    }
                } else {
                    var p0 = getCoords(ctx, fillStyle.x0_, fillStyle.y0_);
                    focus = {
                        x: (p0.x - min.x) / width,
                        y: (p0.y - min.y) / height
                    };

                    width  /= arcScaleX * Z;
                    height /= arcScaleY * Z;
                    var dimension = m.max(width, height);
                    shift = 2 * fillStyle.r0_ / dimension;
                    expansion = 2 * fillStyle.r1_ / dimension - shift;
                }

                // We need to sort the color stops in ascending order by offset,
                // otherwise IE won't interpret it correctly.
                var stops = fillStyle.colors_;
                stops.sort(function(cs1, cs2) {
                    return cs1.offset - cs2.offset;
                });

                var length = stops.length;
                var color1 = stops[0].color;
                var color2 = stops[length - 1].color;
                var opacity1 = stops[0].alpha * ctx.globalAlpha;
                var opacity2 = stops[length - 1].alpha * ctx.globalAlpha;

                var colors = [];
                for (var i = 0; i < length; i++) {
                    var stop = stops[i];
                    colors.push(stop.offset * expansion + shift + ' ' + stop.color);
                }

                // When colors attribute is used, the meanings of opacity and o:opacity2
                // are reversed.
                lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
                    ' method="none" focus="100%"',
                    ' color="', color1, '"',
                    ' color2="', color2, '"',
                    ' colors="', colors.join(','), '"',
                    ' opacity="', opacity2, '"',
                    ' g_o_:opacity2="', opacity1, '"',
                    ' angle="', angle, '"',
                    ' focusposition="', focus.x, ',', focus.y, '" />');
            } else if (fillStyle instanceof CanvasPattern_) {
                if (width && height) {
                    var deltaLeft = -min.x;
                    var deltaTop = -min.y;
                    lineStr.push('<g_vml_:fill',
                        ' position="',
                        deltaLeft / width * arcScaleX * arcScaleX, ',',
                        deltaTop / height * arcScaleY * arcScaleY, '"',
                        ' type="tile"',
                        // TODO: Figure out the correct size to fit the scale.
                        //' size="', w, 'px ', h, 'px"',
                        ' src="', fillStyle.src_, '" />');
                }
            } else {
                var a = processStyle(ctx.fillStyle);
                var color = a.color;
                var opacity = a.alpha * ctx.globalAlpha;
                lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
                    '" />');
            }
        }

        contextPrototype.fill = function() {
            this.stroke(true);
        };

        contextPrototype.closePath = function() {
            this.currentPath_.push({type: 'close'});
        };

        function getCoords(ctx, aX, aY) {
            var m = ctx.m_;
            return {
                x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
                y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
            };
        };

        contextPrototype.save = function() {
            var o = {};
            copyState(this, o);
            this.aStack_.push(o);
            this.mStack_.push(this.m_);
            this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
        };

        contextPrototype.restore = function() {
            if (this.aStack_.length) {
                copyState(this.aStack_.pop(), this);
                this.m_ = this.mStack_.pop();
            }
        };

        function matrixIsFinite(m) {
            return isFinite(m[0][0]) && isFinite(m[0][1]) &&
                isFinite(m[1][0]) && isFinite(m[1][1]) &&
                isFinite(m[2][0]) && isFinite(m[2][1]);
        }

        function setM(ctx, m, updateLineScale) {
            if (!matrixIsFinite(m)) {
                return;
            }
            ctx.m_ = m;

            if (updateLineScale) {
                // Get the line scale.
                // Determinant of this.m_ means how much the area is enlarged by the
                // transformation. So its square root can be used as a scale factor
                // for width.
                var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
                ctx.lineScale_ = sqrt(abs(det));
            }
        }

        contextPrototype.translate = function(aX, aY) {
            var m1 = [
                [1,  0,  0],
                [0,  1,  0],
                [aX, aY, 1]
            ];

            setM(this, matrixMultiply(m1, this.m_), false);
        };

        contextPrototype.rotate = function(aRot) {
            var c = mc(aRot);
            var s = ms(aRot);

            var m1 = [
                [c,  s, 0],
                [-s, c, 0],
                [0,  0, 1]
            ];

            setM(this, matrixMultiply(m1, this.m_), false);
        };

        contextPrototype.scale = function(aX, aY) {
            this.arcScaleX_ *= aX;
            this.arcScaleY_ *= aY;
            var m1 = [
                [aX, 0,  0],
                [0,  aY, 0],
                [0,  0,  1]
            ];

            setM(this, matrixMultiply(m1, this.m_), true);
        };

        contextPrototype.transform = function(m11, m12, m21, m22, dx, dy) {
            var m1 = [
                [m11, m12, 0],
                [m21, m22, 0],
                [dx,  dy,  1]
            ];

            setM(this, matrixMultiply(m1, this.m_), true);
        };

        contextPrototype.setTransform = function(m11, m12, m21, m22, dx, dy) {
            var m = [
                [m11, m12, 0],
                [m21, m22, 0],
                [dx,  dy,  1]
            ];

            setM(this, m, true);
        };

        /**
         * The text drawing function.
         * The maxWidth argument isn't taken in account, since no browser supports
         * it yet.
         */
        contextPrototype.drawText_ = function(text, x, y, maxWidth, stroke) {
            var m = this.m_,
                delta = 1000,
                left = 0,
                right = delta,
                offset = {x: 0, y: 0},
                lineStr = [];

            var fontStyle = getComputedStyle(processFontStyle(this.font),
                this.element_);

            var fontStyleString = buildStyle(fontStyle);

            var elementStyle = this.element_.currentStyle;
            var textAlign = this.textAlign.toLowerCase();
            switch (textAlign) {
                case 'left':
                case 'center':
                case 'right':
                    break;
                case 'end':
                    textAlign = elementStyle.direction == 'ltr' ? 'right' : 'left';
                    break;
                case 'start':
                    textAlign = elementStyle.direction == 'rtl' ? 'right' : 'left';
                    break;
                default:
                    textAlign = 'left';
            }

            // 1.75 is an arbitrary number, as there is no info about the text baseline
            switch (this.textBaseline) {
                case 'hanging':
                case 'top':
                    offset.y = fontStyle.size / 1.75;
                    break;
                case 'middle':
                    break;
                default:
                case null:
                case 'alphabetic':
                case 'ideographic':
                case 'bottom':
                    offset.y = -fontStyle.size / 2.25;
                    break;
            }

            switch(textAlign) {
                case 'right':
                    left = delta;
                    right = 0.05;
                    break;
                case 'center':
                    left = right = delta / 2;
                    break;
            }

            var d = getCoords(this, x + offset.x, y + offset.y);

            lineStr.push('<g_vml_:line from="', -left ,' 0" to="', right ,' 0.05" ',
                ' coordsize="100 100" coordorigin="0 0"',
                ' filled="', !stroke, '" stroked="', !!stroke,
                '" style="position:absolute;width:1px;height:1px;">');

            if (stroke) {
                appendStroke(this, lineStr);
            } else {
                // TODO: Fix the min and max params.
                appendFill(this, lineStr, {x: -left, y: 0},
                    {x: right, y: fontStyle.size});
            }

            var skewM = m[0][0].toFixed(3) + ',' + m[1][0].toFixed(3) + ',' +
                m[0][1].toFixed(3) + ',' + m[1][1].toFixed(3) + ',0,0';

            var skewOffset = mr(d.x / Z) + ',' + mr(d.y / Z);

            lineStr.push('<g_vml_:skew on="t" matrix="', skewM ,'" ',
                ' offset="', skewOffset, '" origin="', left ,' 0" />',
                '<g_vml_:path textpathok="true" />',
                '<g_vml_:textpath on="true" string="',
                encodeHtmlAttribute(text),
                '" style="v-text-align:', textAlign,
                ';font:', encodeHtmlAttribute(fontStyleString),
                '" /></g_vml_:line>');

            this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
        };

        contextPrototype.fillText = function(text, x, y, maxWidth) {
            this.drawText_(text, x, y, maxWidth, false);
        };

        contextPrototype.strokeText = function(text, x, y, maxWidth) {
            this.drawText_(text, x, y, maxWidth, true);
        };

        contextPrototype.measureText = function(text) {
            if (!this.textMeasureEl_) {
                var s = '<span style="position:absolute;' +
                    'top:-20000px;left:0;padding:0;margin:0;border:none;' +
                    'white-space:pre;"></span>';
                this.element_.insertAdjacentHTML('beforeEnd', s);
                this.textMeasureEl_ = this.element_.lastChild;
            }
            var doc = this.element_.ownerDocument;
            this.textMeasureEl_.innerHTML = '';
            this.textMeasureEl_.style.font = this.font;
            // Don't use innerHTML or innerText because they allow markup/whitespace.
            this.textMeasureEl_.appendChild(doc.createTextNode(text));
            return {width: this.textMeasureEl_.offsetWidth};
        };

        /******** STUBS ********/
        contextPrototype.clip = function() {
            // TODO: Implement
        };

        contextPrototype.arcTo = function() {
            // TODO: Implement
        };

        contextPrototype.createPattern = function(image, repetition) {
            return new CanvasPattern_(image, repetition);
        };

        // Gradient / Pattern Stubs
        function CanvasGradient_(aType) {
            this.type_ = aType;
            this.x0_ = 0;
            this.y0_ = 0;
            this.r0_ = 0;
            this.x1_ = 0;
            this.y1_ = 0;
            this.r1_ = 0;
            this.colors_ = [];
        }

        CanvasGradient_.prototype.addColorStop = function(aOffset, aColor) {
            aColor = processStyle(aColor);
            this.colors_.push({offset: aOffset,
                color: aColor.color,
                alpha: aColor.alpha});
        };

        function CanvasPattern_(image, repetition) {
            assertImageIsValid(image);
            switch (repetition) {
                case 'repeat':
                case null:
                case '':
                    this.repetition_ = 'repeat';
                    break
                case 'repeat-x':
                case 'repeat-y':
                case 'no-repeat':
                    this.repetition_ = repetition;
                    break;
                default:
                    throwException('SYNTAX_ERR');
            }

            this.src_ = image.src;
            this.width_ = image.width;
            this.height_ = image.height;
        }

        function throwException(s) {
            throw new DOMException_(s);
        }

        function assertImageIsValid(img) {
            if (!img || img.nodeType != 1 || img.tagName != 'IMG') {
                throwException('TYPE_MISMATCH_ERR');
            }
            if (img.readyState != 'complete') {
                throwException('INVALID_STATE_ERR');
            }
        }

        function DOMException_(s) {
            this.code = this[s];
            this.message = s +': DOM Exception ' + this.code;
        }
        var p = DOMException_.prototype = new Error;
        p.INDEX_SIZE_ERR = 1;
        p.DOMSTRING_SIZE_ERR = 2;
        p.HIERARCHY_REQUEST_ERR = 3;
        p.WRONG_DOCUMENT_ERR = 4;
        p.INVALID_CHARACTER_ERR = 5;
        p.NO_DATA_ALLOWED_ERR = 6;
        p.NO_MODIFICATION_ALLOWED_ERR = 7;
        p.NOT_FOUND_ERR = 8;
        p.NOT_SUPPORTED_ERR = 9;
        p.INUSE_ATTRIBUTE_ERR = 10;
        p.INVALID_STATE_ERR = 11;
        p.SYNTAX_ERR = 12;
        p.INVALID_MODIFICATION_ERR = 13;
        p.NAMESPACE_ERR = 14;
        p.INVALID_ACCESS_ERR = 15;
        p.VALIDATION_ERR = 16;
        p.TYPE_MISMATCH_ERR = 17;

        // set up externs
        G_vmlCanvasManager = G_vmlCanvasManager_;
        CanvasRenderingContext2D = CanvasRenderingContext2D_;
        CanvasGradient = CanvasGradient_;
        CanvasPattern = CanvasPattern_;
        DOMException = DOMException_;
    })();

} // if
/*
;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('require', 'GTM-TVTZ4FM');
ga('create', 'UA-16990907-1', 'auto');
ga('send', 'pageview');*/
//by mac s
/*
function chlang(){
    if(document.URL.toLowerCase().indexOf('/en/')>=0){
        return 'en';
    }else{
        return 'cn';
    }
}

function lga(){
    var locate = document.getElementById('pcSearch').value;
    ga('send','event','storelocator','search',locate);
}

function gas(info,pages,events){
    var gax = events+chlang();
    //alert(gax);
    ga('send', 'event', info, pages, gax);
}

function ga_download(info,pages,events){
    //alert(gax);
    ga('send', 'event', info, pages, events);
}

function ga_menu(info,pages,events){
    ga('send', 'event', 'Button', 'click', 'Open Menu');
}*/
//by mac e

;/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);
;(function() {

    var userBrowser = !!window && !!window.navigator && !!window.navigator.userAgent ? navigator.userAgent.toLowerCase() : null;
    var androidVersion = !!userBrowser ? userBrowser.match(/android\s([0-9\.]*)/) : false;
    var androidVersion = androidVersion ? androidVersion[1] : false;
    var IEversion = ( !!userBrowser && userBrowser.indexOf( 'msie' ) !== -1 ) ? parseInt( userBrowser.split( 'msie' )[1] ) : false;
    var isIphone = !!userBrowser ? /(iPad|iPhone|iPod)/g.test( window.navigator.userAgent ) : false;
    var badIE = 0;
    var badAndroid = 0;
    var oldIphone = 0;
    if ( !userBrowser || ( !!IEversion && IEversion < 10 ) ) {
        badIE = 1;
    }
    if ( androidVersion && parseInt( androidVersion, 10 ) < 5 ) {
        badAndroid = 1;
    }

    if ( isIphone && ((window.screen.height == (960 / 2) || window.screen.height == (1136 / 2)))) {
        oldIphone = 1;
    }

    $( document ).ready( function() {

        $( '.navbar-toggle-holder' ).fadeIn( 200 );

        if ( badIE || badAndroid ) {
            // Swap out svg for png in old IE.
            $( 'img.logo' ).attr(         'src', '/statics/images/logo.png' );
            $( '#sidebarToggleImage' ).attr( 'src', '/statics/images/menu_icon.png' );
        }

        // Expand any sub-items with active items
        $( 'div.hasChildren' ).each( function() {
            var children = $( this ).siblings( 'ul.children' )[ 0 ];
            children = $( children );
            if ( !children.is( ':visible' ) && children.children( 'li.active' ).length ) {
                children.show( function() { checkOverflow(); });
            }
        });

        var headroom = new Headroom(
            document.querySelector( '#mainNav' ), {
                "offset" : 107
            });
        headroom.init();
    });

    var lastOpen = null;

    function checkOverflow() {
        $( '.navmenu' ).each( function() {
            if ( $( this ).is( ':visible' ) ) {
                var internal = $( this ).children( '.navInternal' )[0];
                internal = $( internal );
                if ( internal.outerHeight() < internal.prop( 'scrollHeight' ) && !internal.hasClass( 'navPad' ) ) {
                    internal.addClass( 'navPad' );
                }
            }
        });
    }

    function doSide( what, speed, type ) {
        speed = speed ? speed : 300;
        if ( type === "close" ) {
            $( "#screen" ).fadeOut( 200 );
            what.find( '.showAfter' ).fadeOut( 200 );
        } else {
            $( "#screen" ).fadeIn( 200 );
        }
        what.animate( { width: 'toggle' }, speed, function() {
            if ( type === "close" ) {
            } else {
                $( this ).find( '.showAfter' ).fadeIn( function() { checkOverflow(); });
            }
        });
    }

    function closeSide( what, speed ) {
        doSide( what, speed, "close" );
    }

    function openSide( what, speed ) {
        doSide( what, speed, "open" );
    }

    function testClose() {
        if ( lastOpen !== null ) {
            closeSide( lastOpen, 200 );
            lastOpen = null;
            $( '#mainNav' ).addClass( 'togglefree' );
        }
        var parent = $('#my-account');
        if (parent.hasClass('navmenu-open')) {
            parent.removeClass('navmenu-open');
            $('#settings').hide();
        }
    }

    /*
     * Event handlers.
     */

    $( document ).ready( function() {

        // Close any open sidebars on scroll.
        if ( oldIphone ) {} else {
            $( window ).on( 'scroll', function() {
                testClose();
            });
        }

        // Close any open sidebars on click.
        $( document ).on( 'click', function() {
            testClose();
        });

        // Close any open sidebars on click.
        $( '#screen' ).on( 'click', function() {
            testClose();
        });

        // Stop click bubbling up from sidebar (so we don't close self).
        $( '.navmenu' ).on( 'click', function( e ) {
            e.stopPropagation();
        });

        // Make sidebars appear.
        $( '.toggler' ).on( 'click', function( e ) {
            e.stopPropagation();
            var item = $( $( this ).attr( 'data-toToggle' ) );
            if ( item.is( ':visible' ) ) {
                $( '#mainNav' ).addClass( 'togglefree' );
                lastOpen = null;
                closeSide( item );
            } else {
                $( '#mainNav' ).removeClass( 'togglefree' );
                if ( lastOpen !== null ) {
                    lastOpen.hide();
                }
                var child = item.children( '.navInternal' )[0];
                child     = $(child);
                lastOpen  = item;
                if ( oldIphone ) {
                    child.removeClass( 'specialScroll' );
                    window.scrollTo( 0, 0 );
                } else {
                    var winH  = $( window ).height();
                    child.css( 'height',     winH + 'px' );
                    child.css( 'max-height', winH + 'px' );
                    child.css( 'top',        $( window ).scrollTop() );
                }
                openSide( item );
            }
        });

        // For drop down nav
        $('.toggler-dropdown').on('click', function(e) {
            e.stopPropagation();
            var parent = $('#my-account');
            if (parent.hasClass('navmenu-open')) {
                parent.removeClass('navmenu-open');
                $('#settings').hide();
            } else {
                parent.addClass('navmenu-open');
                $('#settings').show();
            }
        });
        $(document).on('click', function(e) {
            e.stopPropagation();
            var parent = $('#my-account');
            if (parent.hasClass('navmenu-open')) {
                parent.removeClass('navmenu-open');
                $('#settings').hide();
            }
        });

        // Toggle display of sub-items in sidebar
        $( 'div.hasChildren' ).on( 'click', function() {
            var children = $( this ).siblings( 'ul.children' )[ 0 ];
            children = $( children );
            if ( children.is( ':visible' ) ) {
                children.slideUp();
            } else {
                children.slideDown( function() { checkOverflow(); });
            }
        });
    });

}());
;/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */


!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);;(function (window) { // Prevent Cross-Frame Scripting attacks
    if (window.location !== window.top.location)
        window.top.location = window.location;
})(this);

(function(){

    $('html').toggleClass('no-js js');

})();
/*
 |-------------------------------
 | Form validation
 |-------------------------------
 |
 | Any form with a class of "validate" will be validated.
 | You should set the validation options on the inputs themselves.
 | See http://bootstrapvalidator.com/ for more details.
 |
 */




/*
 |-------------------------------
 | Star progress bar
 |-------------------------------
 |
 | This is used on the "my account" page.
 |
 */

$(document).ready( function() {
    /*
     |-------------------------------
     | footer
     |-------------------------------
     |
     */
    //<a class="contents-wording" target="_blank" href="http://www.miitbeian.gov.cn/">{{ translate text="All rights reserved" }}. 娌狪CP澶�17003747鍙�</a>

    $('.page-footer .item-title').on('click', function (event) {
        if ($(document ).width() < 767) {
            if($(this).attr('href') == '#'){
                event.preventDefault();
                $(this).toggleClass('active');
                $(this).siblings('[class=item-content]').toggle(300);
            }else{

            }
            //return true;
        }
    });
    $(window).on('resize', function () {
        if ($(document ).width() > 767) {
            $('.item-content').removeAttr('style')
            $('.item-title').removeClass('active')
        }
    });
    //by mac
    /*
    $.get('/cn/notification-banner-settings')
        .done(function(response){
            var path = location.pathname;
            var banner_urls = response.substring(response.indexOf('#banner-urls#') + '#banner-urls#'.length, response.indexOf("#/banner-urls#"));
            var banner_bg_color = response.substring(response.indexOf('#banner-bg-color#') + '#banner-bg-color#'.length, response.indexOf("#/banner-bg-color#"));
            var banner_text_cn = response.substring(response.indexOf('#banner-text-cn#') + '#banner-text-cn#'.length, response.indexOf("#/banner-text-cn#"));
            var banner_text_en = response.substring(response.indexOf('#banner-text-en#') + '#banner-text-en#'.length, response.indexOf("#/banner-text-en#"));
            var banner_text_color = response.substring(response.indexOf('#banner-text-color#') + '#banner-text-color#'.length, response.indexOf("#/banner-text-color#"));
            var locale = 'cn';
            if (path.length >= 3 && path.substring(0, 3) === '/en') {
                locale = 'en';
            } else {
                locale = 'cn';
            };
            if (banner_urls.split(',').includes(path) || banner_urls === 'all') {
                var text = locale === 'cn' ? banner_text_cn : banner_text_en;
                $('.navbar').prepend(""+
                    "<section style='padding: 10px 0; background-color: "+ banner_bg_color +";'>"+
                    "<small style='display:block;width: 100%; text-align: center; color:"+ banner_text_color +"; margin:0 auto;font-size: 14px;'>"+
                    "" + text + "" +
                    "</small>"+
                    "</section>"+
                    "");
                $('#content').css('marginTop', '146px');
                $('.ad').css('top', '166px');
                $('.navbar').css('borderTop', 'none');
                $('.navbar .container-fluid').css('boxShadow', 'none');
            }
        });*/

    var winw = parseInt($('#star-progress-bar').width()*0.8);
    //alert(winw);

    // Cache the element
    var $progress = $('#star-progress-bar');

    // Calculate the percentage based on stars
    var maxStars = 25;
    var stars = parseInt($progress.closest('.account-box__data').find('.major').text());
    stars = (stars > maxStars) ? 25 : stars;
    var percent = stars / maxStars * 100;

    // console.log(percent);

    // Set initial value of element to 0
    $progress.val(0);

    // Set color depending on stars
    if (stars == 25) {
        var color = '#aa8e64'; // gold
    } else if (stars < 5) {
        var color = '#3d3d3d'; // black
    } else {
        var color = '#009462'; // green
    }
//by mac
    // Initialize plugin
    /*
    $progress.knob({
        readOnly: true,
        angleArc: 230,
        angleOffset: 245,
        thickness: '.22',
        lineCap: 'round',
        bgColor: '#fff',
        fgColor: color,
        width: winw,
        height: 366
    });*/

    // Animate progress
    $progress.animate({
        value: percent
    }, {
        duration: 1500,
        easing: 'swing',
        progress: function() {
            $(this).val(Math.round(this.value)).trigger('change');
        }
    });
});


/*
 |-------------------------------
 | Store Locator
 |-------------------------------
 |
 */
(function(){

    // Initialize Isotope
    //---------------------------------------------

    var $container = $('.stores__list__container');

    $container.isotope({
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        },
        itemSelector: '.stores__store'
    });


    // Toggling of extra details
    //---------------------------------------------

    var $stores = $('.stores__store');

    $stores.find('h4').on('click', function(){
        var $store = $(this).parent();
        $stores.not($store).find('.extra').hide();
        $store.find('.extra').toggle();
        $container.isotope('layout');
    });
    //bay mac
    /*
    var datesrc=document.URL;
    if(datesrc.match('the-starbucks-china-app')){
        $('body').addClass('datesrc');
    } else if(datesrc.match('rewards')){
        $('body').addClass('datesrc');
    } else if(datesrc.match('storewifi')){
        $('body').addClass('datesrc');
    }
    */

    function getDayDesc () {
        var currentHours = new Date().getHours();
        var partOfDay;
        switch (true) {
            case (currentHours >= 5 && currentHours < 12):
                partOfDay = 'morning';
                break;
            case (currentHours >= 12 && currentHours < 17):
                partOfDay = 'afternoon';
                break;
            default:
                partOfDay = 'eventing';
        }
        return partOfDay
    }

})();
//by mac s
/*
$(document).ready(function(){
    //by mac s

    $("#bj_store").click(function(){
        $(".bj").css("display","none");
        $(".cd").css("display","none");
        $(".qd").css("display","none");
        $(".bj").css("display","table-row-group");
        $("#cd_store").attr("class","");
        $("#qd_store").attr("class","");
        $("#all_store").attr("class","");
        $(this).attr("class","active");
    });
    $("#cd_store").click(function(){
        $(".bj").css("display","none");
        $(".cd").css("display","none");
        $(".qd").css("display","none");
        $(".cd").css("display","table-row-group");
        $("#bj_store").attr("class","");
        $("#qd_store").attr("class","");
        $("#all_store").attr("class","");
        $(this).attr("class","active");
    });
    $("#qd_store").click(function(){
        $(".bj").css("display","none");
        $(".cd").css("display","none");
        $(".qd").css("display","none");
        $(".qd").css("display","table-row-group");
        $("#cd_store").attr("class","");
        $("#bj_store").attr("class","");
        $("#all_store").attr("class","");
        $(this).attr("class","active");
    });
    $("#all_store").click(function(){
        $(".bj").css("display","table-row-group");
        $(".cd").css("display","table-row-group");
        $(".qd").css("display","table-row-group");
        $("#bj_store").attr("class","");
        $("#cd_store").attr("class","");
        $("#qd_store").attr("class","");
        $(this).attr("class","active");
    });
    $("#seasonal_terms").click(function(){
        var current_style = $("#show_seasonal_terms").css("display");
        if( current_style == "none" ){
            $("#show_seasonal_terms").css("display","block");
        }else{
            $("#show_seasonal_terms").css("display","none");
        }

    });
    $("#old_terms").click(function(){
        var current_style = $("#show_old_terms").css("display");
        if( current_style == "none" ){
            $("#show_old_terms").css("display","block");
        }else{
            $("#show_old_terms").css("display","none");
        }

    });
    $("#newterms").click(function(){
        var current_style = $("#show_newterms").css("display");
        if( current_style == "none" ){
            $("#show_newterms").css("display","block");
        }else{
            $("#show_newterms").css("display","none");
        }

    });

    // remove the ad tag on specific pages
    var uriList = [
        "/cn/stores",//鏄熷反鍏嬮棬搴�
        "/cn/about/company-news",//浼佷笟鏂伴椈
        "/cn/about/history",//鍘嗗彶鍥為【
        "/cn/about/careers", //鍔犲叆鏄熷反鍏�
        "/cn/help",//甯姪涓績
        "/en/stores",//鏄熷反鍏嬮棬搴�
        "/en/about/company-news",//浼佷笟鏂伴椈
        "/en/about/history",//鍘嗗彶鍥為【
        "/en/about/careers", //鍔犲叆鏄熷反鍏�
        "/en/help",//甯姪涓績
    ];
    for (var i = 0; i<uriList.length; i++) {
        if (window.location.pathname.indexOf(uriList[i]) !== -1) {
            $(".ad").hide();
        }
    }
});
*/
//by mac e
function selectModel(){
    var $box = $('div.select-box');
    var $option = $('ul.select-option', $box);
    var $txt = $('div.select-text', $box);
    var speed = 10;

    $txt.click(function(e) {
        $option.not($(this).siblings('ul.select-option')).slideUp(speed, function(){
            int($(this));
        });
        $(this).siblings('ul.select-option').slideToggle(speed, function(){
            int($(this));
        });
        return false;
    });
    $option.find('li').each(function(index, element) {
        if($(this).hasClass('seleced')){
            $(this).addClass('data-selected');
        }
    })
        .mousedown(function(){
            $(this).parent().siblings('div.select-text').text($(this).text())
                .attr('data-value', $(this).attr('data-option'));
            var city = $(".select-text").text();
            city = city.replace("'","");
            if( city != "" ){
                $(".r2>.m1").css("display","none");
                $("."+city).css("display","block");
            }
            $option.slideUp(speed, function(){
                int($(this));
            });
            $(this).addClass('seleced data-selected').siblings('li').removeClass('seleced data-selected');
            return false;
        })
        .mouseover(function(){
            $(this).addClass('seleced').siblings('li').removeClass('seleced');
        });


    $(document).click(function(e) {
        $option.slideUp(speed, function(){
            int($(this));
        });
    });
    function int(obj){
        obj.find('li.data-selected').addClass('seleced').siblings('li').removeClass('seleced');
    }
}
$(function(){
    //selectModel();
})