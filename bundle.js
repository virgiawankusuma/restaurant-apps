!function(n){function t(t){for(var e,o,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e]);for(l&&l(t);s.length;)s.shift()()}var e={},r={0:0};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(n){var t=[],e=r[n];if(0!==e)if(e)t.push(e[2]);else{var i=new Promise((function(t,o){e=r[n]=[t,o]}));t.push(e[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(n){return o.p+""+n+".bundle.js"}(n);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var e=r[n];if(0!==e){if(e){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,e[1](l)}r[n]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=n,o.c=e,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o.oe=function(n){throw console.error(n),n};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=a;o(o.s=6)}([function(n,t,e){(function(n){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var e=function(n){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function s(n,t,e,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return B()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=u(n,t,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(n,e,a),i}function u(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var f={};function d(){}function p(){}function h(){}var m={};l(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&r.call(g,i)&&(m=g);var y=h.prototype=d.prototype=Object.create(m);function b(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function x(n,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,l){var s=u(n[i],n,a);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"===t(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(n){o("next",n,c,l)}),(function(n){o("throw",n,c,l)})):e.resolve(d).then((function(n){f.value=n,c(f)}),(function(n){return o("throw",n,c,l)}))}l(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(n,t){var e=n.iterator[t.method];if(void 0===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=void 0,w(n,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(e,n.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function F(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(E,this),this.reset(!0)}function k(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function t(){for(;++e<n.length;)if(r.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:B}}function B(){return{value:void 0,done:!0}}return p.prototype=h,l(y,"constructor",h),l(h,"constructor",p),p.displayName=l(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,l(n,c,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},b(x.prototype),l(x.prototype,a,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=k,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),f},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),F(e),f}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;F(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:k(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}("object"===t(n)?n.exports:{});try{regeneratorRuntime=e}catch(n){"object"===("undefined"==typeof globalThis?"undefined":t(globalThis))?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}).call(this,e(1)(n))},function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,t,e){var r=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],l=t.base?i[0]+t.base:i[0],s=e[l]||0,u="".concat(l," ").concat(s);e[l]=s+1;var f=c(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:v(d,t),references:1}),r.push(u)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,f=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(n,t){var e,r,o;if(t.singleton){var i=m++;e=h||(h=s(t)),r=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=s(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=l(n,t),s=0;s<e.length;s++){var u=c(e[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(n,t,e){(t=e(5)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap);"]),t.push([n.i,"/* \nColor Palette:\n#1 #C36A2D\n#2 #E2C275\n#3 #EADCA6\n#4 #FBFBFB\n*/\n\n/* css reset */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: #C36A2D;\n    font-family: 'Poppins', sans-serif;\n}\n\na {\n    color: #E2C275;\n}\n\na:hover,\na:active {\n    color: #C36A2D;\n}\n\nbody {\n    width: 100%;\n    background-color: #FBFBFB;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.skip-link {\n    position: absolute;\n    text-decoration: none;\n    top: -40px;\n    left: 0;\n    background-color: #C36A2D;\n    color: #FBFBFB;\n    padding: 8px;\n    z-index: 101;\n}\n\n.skip-link:hover {\n    color: #EADCA6;\n}\n\n\n.skip-link:focus {\n    top: 0;\n}\n\nheader {\n    display: inline;\n}\n\nnav {\n    position: fixed;\n    background-color: #FBFBFB;\n    display: flex;\n    padding: 0 64px;\n    height: auto;\n    width: 100%;\n    justify-content: space-between;\n    z-index: 100;\n}\n\nnav h1 {\n    margin: 16px 0;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\nnav h1 a {\n    text-decoration: none;\n    font-size: 2rem;\n}\n\n.shadow-bottom {\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 7px 0px;\n}\n\n.menu-list {\n    font-size: 18px;\n    margin: 24px 0;\n    display: flex;\n}\n\n.menu-list li {\n    padding: 0 0 0 10px;\n    margin-left: 10px;\n    list-style-type: none;\n    display: inline-block;\n}\n\n.menu-list a {\n    color: #E2C275;\n    text-decoration: none;\n}\n\n.menu-list a:hover,\n.menu-list a:active {\n    font-weight: 800;\n    transition: ease-out;\n    transition-duration: 0.2s;\n    border-bottom: 2px solid #E2C275;\n    color: #C36A2D;\n}\n\n.menu-button {\n    display: none;\n}\n\n.hero {\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n    background-position: center;\n    background-color: #000;\n}\n\n.hero img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    position: absolute;\n    z-index: 1;\n    opacity: .5;\n}\n\n.hero .inner {\n    text-align: center;\n    margin: 0 auto;\n    padding: 0 32px;\n    z-index: 2;\n}\n\n.hero .title {\n    color: #FBFBFB;\n    font-weight: 600;\n    font-size: 3rem;\n}\n\n.hero .subtitle {\n    color: #FBFBFB;\n    margin-top: 10px;\n    font-size: 1.8rem;\n}\n\nmain {\n    margin: 32px 32px 0;\n}\n\n#content {\n    width: 100%;\n    margin-top: 1em;\n}\n\n#content h2 {\n    text-align: center;\n    margin-bottom: 1em;\n}\n\n.title-content {\n    border-bottom: 3px solid #E2C275;\n}\n\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 16px 0;\n}\n\n.col {\n    width: calc(100% / 3 - 16px);\n    margin-bottom: 32px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card {\n    background-color: #FBFBFB;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 7px 0px;\n    flex: 1;\n}\n\n.card .city-label {\n    background-color: #C36A2D;\n    margin: 1em;\n    padding: .5em 1em;\n    position: absolute;\n    color: #FBFBFB;\n    font-weight: 600;\n    text-align: left;\n}\n\n.card img {\n    width: 100%;\n    max-height: 250px;\n    object-fit: cover;\n}\n\n.card-body {\n    padding: 16px;\n}\n\n.card-title a {\n    font-size: 2rem;\n    font-weight: 600;\n    text-decoration: none;\n}\n\n.card-text {\n    color: #C36A2D;\n}\n\n.card .rating {\n    color: #C36A2D;\n    font-size: 1rem;\n    font-weight: 600;\n    margin-bottom: .5em;\n}\n\nfooter {\n    text-align: center;\n    color: #FBFBFB;\n    background-color: #C36A2D;\n    font-weight: 800;\n    padding: 7vh 0;\n}\n\nfooter a {\n    text-decoration: none;\n    color: #FBFBFB;\n}\n\nfooter a:hover,\nfooter a:active {\n    text-decoration: none;\n    color: #EADCA6;\n}\n\n\n@media (max-width: 800px) {\n    .menu-list {\n        margin: 20px 0;\n        font-size: 1.1rem;\n    }\n\n    .menu-list li {\n        margin-left: 0;\n    }\n\n    .col {\n        width: calc(100% / 2 - 16px);\n    }\n}\n\n@media (max-width: 600px) {\n    nav {\n        padding: 0 46px;\n    }\n\n    .hero .title {\n        font-size: 2.3rem;\n    }\n\n    .hero .subtitle {\n        font-size: 1.5rem;\n    }\n\n    .menu-list {\n        background-color: #E2C275;\n        fill-opacity: 0.5;\n        position: fixed;\n        top: 0;\n        right: 0;\n        width: 60%;\n        height: 100%;\n        margin-top: 0;\n        padding: 64px 46px;\n        flex-direction: column;\n        align-items: flex-end;\n        transform: translateX(100%);\n        transition: transform 0.5s;\n    }\n\n    .menu-list li {\n        padding: 10px 0;\n    }\n\n    .menu-list a {\n        font-size: 2.1rem;\n        color: #FBFBFB;\n    }\n\n    .open .menu-list {\n        transform: translateX(0);\n    }\n\n    .menu-button {\n        margin: auto 0;\n        width: 48px;\n        height: 48px;\n        border: 0;\n        border-radius: 3px;\n        background-color: #FBFBFB;\n        color: #E2C275;\n        outline: none;\n        font-size: 2rem;\n        display: block;\n        z-index: 2;\n        cursor: pointer;\n    }\n\n    .menu i.fa-times,\n    .menu.open i.fa-bars {\n        display: none;\n        animation: enter 0.8s;\n    }\n\n    .menu.open i.fa-times,\n    .menu i.fa-bars {\n        display: block;\n        animation: enter 0.8s;\n    }\n\n    .menu-list a:hover,\n    .menu-list a:active {\n        font-weight: 800;\n        transition: ease-out;\n        transition-duration: 0.2s;\n        border-bottom: 2px solid #C36A2D;\n        color: #C36A2D;\n    }\n\n    .col {\n        width: 100%;\n    }\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){"use strict";e.r(t);e(0),e(2);var r=function(){e.e(1).then(e.t.bind(null,7,3)).then((function(n){var t=n.default.restaurants,e="";t.forEach((function(n){e+='\n                <div class="col">\n                    <div class="card">\n                        <div class="card-img">\n                            <div class="city-label">\n                                <span class="city-label-text">\n                                    Kota '.concat(n.city,'\n                                </span>\n                            </div>\n                            <img src="').concat(n.pictureId,'" alt="Gambar makanan ').concat(n.name,'">\n                        </div>\n                        <div class="card-body">\n                            <div class="rating">\n                                <i class="fas fa-star"></i>\n                                <span>').concat(n.rating,'</span>\n                            </div>\n                            <h3 class="card-title">\n                                <a href="/restaurant/').concat(n.id,'" title="Link ke halaman detail makanan">').concat(n.name,'</a>\n                            </h3>\n                            <p class="card-text">').concat(n.description,"</p>\n                        </div>\n                    </div>\n                </div>\n                ")})),document.querySelector("#resto-list").innerHTML=e}))};document.addEventListener("DOMContentLoaded",r);var o=document.querySelector("#nav");window.addEventListener("scroll",(function(){window.scrollY<20?o.classList.remove("shadow-bottom"):o.classList.add("shadow-bottom")}));var i=document.querySelector(".menu");document.querySelector(".menu-button").addEventListener("click",(function(){i.classList.toggle("open")}))}]);