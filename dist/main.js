(()=>{var e={538:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){"use strict";var t,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=f(e,t,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,a),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",v="executing",h="completed",y={};function m(){}function b(){}function w(){}var g={};s(g,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==n&&o.call(L,a)&&(g=L);var E=w.prototype=m.prototype=Object.create(g);function R(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,a,c,u){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===r(d)&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):t.resolve(d).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,u)}))}u(s.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}}function _(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return b.prototype=w,s(E,"constructor",w),s(w,"constructor",b),b.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},R(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},R(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}("object"===r(e=n.nmd(e))?e.exports:{});try{regeneratorRuntime=o}catch(e){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},238:()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n}function o(e){var t="function"==typeof Map?new Map:void 0;return(o=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function i(e,t,n){return(i=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(p,e);var o,i,s,l,f,d=(o=p,i=a(),function(){var e,t=u(o);if(i){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return r(this,e)});function p(){return t(this,p),d.apply(this,arguments)}return s=p,(l=[{key:"connectedCallback",value:function(){this.headline=this.getAttribute("headline")||null,this.description=this.getAttribute("description")||null,this.buttonCaption=this.getAttribute("button-caption")||null,this.image=this.getAttribute("image")||null,this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div class="hero-image">\n            <img tabindex="0"  src="'.concat(this.image,'" alt="hero image" />\n        </div>\n        <div class="hero-headline">\n            <h1 tabindex="0">').concat(this.headline,'</h1>\n        </div>\n      <div class="hero-description">\n        <h2 tabindex="0">').concat(this.description,'</h2>\n      </div>\n      <div class="download-button">\n        <button id="download-button" aria-label="Download Now Button ">').concat(this.buttonCaption,"</button>\n      </div>")}}])&&n(s.prototype,l),f&&n(s,f),p}(o(HTMLElement));customElements.define("hero-section",s)},286:()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n}function o(e){var t="function"==typeof Map?new Map:void 0;return(o=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function i(e,t,n){return(i=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(p,e);var o,i,s,l,f,d=(o=p,i=a(),function(){var e,t=u(o);if(i){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return r(this,e)});function p(){return t(this,p),d.apply(this,arguments)}return s=p,(l=[{key:"navbarLink",set:function(e){this._navbarLink=e,this.render()}},{key:"render",value:function(){this.innerHTML=" <li class ='hover-underline-animation'>\n            <a id = \"".concat(this._navbarLink.id,'"  href = "').concat(this._navbarLink.href,'"> ').concat(this._navbarLink.caption," </a>\n          </li>\n        ")}}])&&n(s.prototype,l),f&&n(s,f),p}(o(HTMLElement));customElements.define("navbar-item",s)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";n(538),n(286);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function a(e,t,n){return(a=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var n,i,a,l,f,d=(n=p,i=c(),function(){var e,t=s(n);if(i){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return o(this,e)});function p(){return t(this,p),d.apply(this,arguments)}return a=p,(l=[{key:"navbarLinks",set:function(e){this._navbarLinks=e,this.render()}},{key:"render",value:function(){var e=this;this._navbarLinks.forEach((function(t){var n=document.createElement("navbar-item");n.navbarLink=t,e.appendChild(n)}));var t='\n        <div class = "logo">\n          <h1 tabindex="0"><span class="blue">U</span>eat</h1>\n        </div> \n        <button id ="navbar-button" class="burger"  aria-label="To Navigation Button">\n          <div class="line1"></div>\n          <div class="line2"></div>\n          <div class="line3"></div>\n       </button>\n            <ul class = \'nav-links\'>\n                '.concat(this.innerHTML,"\n            </ul>\n    \n     \n        ");this.innerHTML=t}}])&&r(a.prototype,l),f&&r(a,f),p}(i(HTMLElement));customElements.define("navbar-list",l);n(238);const f=[{id:"about-link",href:"#/about",caption:"About",tabindex:0},{id:"explore-link",href:"#/explore",caption:"Explore",tabindex:0},{id:"favorite-link",href:"#/favorite",caption:"Favorite",tabindex:0}];const d=function(){var e=document.querySelector(".burger"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links li");e.addEventListener("click",(function(){var r,o;r=n,o=e,t.classList.toggle("nav-active"),r.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.5,"s")})),o.classList.toggle("toggle")})),window.matchMedia("(max-width: 768px)").matches&&document.querySelectorAll("navbar-item").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".burger").click()}))}))};const p={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}};var v=function(){window.scrollTo(0,0)},h=function(){v();var e=gsap.timeline();e.fromTo("hero-section",1,{width:"0%"},{width:"100%",ease:"power1"}),e.fromTo(".hero-image",.5,{opacity:"0%"},{opacity:"100%",ease:Power2.easeInOut}),e.fromTo(".hero-headline",.5,{opacity:"0%"},{opacity:"100%",ease:Power2.easeInOut}),e.fromTo(".hero-description",.5,{opacity:"0%"},{opacity:"100%",ease:Power2.easeInOut}),e.fromTo(".download-button",.5,{opacity:"0%"},{opacity:"100%",ease:Power2.easeInOut})},y=function(){v(),gsap.from(".round",{duration:1,opacity:0,y:"100px",stagger:.2,repeat:-1,yoyo:!0})};function m(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){m(i,r,o,a,c,"next",e)}function c(e){m(i,r,o,a,c,"throw",e)}a(void 0)}))}}const w={render:function(){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'<hero-section\n                    headline="Discover Your Taste"\n                    description="Exploring Restaurant Never Been Easier"\n                    button-caption="Download Now"\n                    image ="./img/hero.jpg">\n                </hero-section>');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._downloadApplication(),h();case 2:case"end":return t.stop()}}),t)})))()},_downloadApplication:function(){var e;window.addEventListener("beforeinstallprompt",(function(t){e=t})),document.querySelector("#download-button").addEventListener("click",b(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e){t.next=7;break}return e.prompt(),t.next=4,e.userChoice;case 4:n=t.sent,"accepted"===n.outcome&&(e=null);case 7:case"end":return t.stop()}}),t)}))))}};const g={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/medium/"};const x={LIST:"".concat(g.BASE_URL,"/list"),DETAIL:function(e){return"".concat(g.BASE_URL,"/detail/").concat(e)},SEARCH:function(e){return"".concat(g.BASE_URL,"/search/q=").concat(e)},REVIEW:"".concat(g.BASE_URL,"review")};function L(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){L(i,r,o,a,c,"next",e)}function c(e){L(i,r,o,a,c,"throw",e)}a(void 0)}))}}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,o,i,a;return t=e,n=null,r=[{key:"restaurantList",value:(a=E(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x.LIST);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.restaurants);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(){return a.apply(this,arguments)})},{key:"detailRestaurant",value:(i=E(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x.DETAIL(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e){return i.apply(this,arguments)})},{key:"reviewRestaurant",value:(o=E(regeneratorRuntime.mark((function e(t,n,r){var o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x.REVIEW,{method:"POST",headers:{"X-AUTH-TOKEN":g.KEY,"Content-Type":"application/json"},body:JSON.stringify({id:t,name:n,review:r})});case 3:return o=e.sent,e.next=6,o.json();case 6:return i=e.sent,e.abrupt("return",i.customerReviews);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e,t,n){return o.apply(this,arguments)})}],n&&R(t.prototype,n),r&&R(t,r),e}();var _=function(e){var t="";return e.forEach((function(e,n){t+='<li tabindex="0">'.concat(n+1,". ").concat(e.name,"</li>")})),t},S=function(e){var t="";return e.forEach((function(e){t+='<div class="review">\n      <div class="reviewer-avatar">\n        <img tabindex="0" class="reviewer-avatar"  src="./img/avatar.svg" alt="reviewer-avatar">\n      </div>\n    \n      <p tabindex="0" class="reviewer-review" >\n        <span class="reviewer-name">'.concat(e.name,"</span> :  \n          ").concat(e.review,'\n      </p>\n      <p tabindex="0" class="reviewer-date">Reviewed at : ').concat(e.date,"</p>\n  </div>")})),t},O=function(e){return'\n    <div class="restaurant-detail-image">\n      <img tabindex="0" src="'.concat(g.BASE_IMAGE_URL+e.pictureId,'" alt="restaurant detail image">\n    </div>\n    <div class="restaurant-detail-information">\n      <div class="restaurant-detail-name">\n        <p tabindex="0">').concat(e.name,'</p>\n      </div>\n      <div class="restaurant-detail-description">\n        <p tabindex="0">').concat(e.description,'</p>\n      </div>\n      <div class="restaurant-detail-location">\n        <div class="restaurant-detail-city">\n          <p tabindex="0">\n            City : ').concat(e.city,'\n          </p>\n        </div>\n        <div class="restaurant-detail-address">\n          <p tabindex="0">\n            Address : ').concat(e.address,'\n          </p>\n        </div>\n      </div>\n      <div class="restaurant-detail-categories">\n        <p tabindex="0">\n          Categories : ').concat((t=e.categories,n="",t.forEach((function(e,r){r===t.length-1?n+="".concat(e.name):n+="".concat(e.name,", ")})),n),'\n        </p>\n      </div>\n    </div>\n    <div class="restaurant-detail-menu">\n      <div class="flex">\n        <div class="restaurant-detail-menu-foods">\n          <button id="foods-menu-button" aria-label="see foods button" class="active">See Foods</button>\n        </div>\n        <div class="restaurant-detail-menu-drinks">\n          <button id="drinks-menu-button" aria-label="see drinks button">See Drinks</button>\n        </div>\n      </div>\n    \n      <div class="restaurant-detail-menu-list">\n        <ul id="restaurant-detail-menu-container">\n          ').concat(_(e.menus.foods),'\n        </ul>\n      </div>\n    </div>\n  \n    <div class="restaurant-detail-reviews">\n      <p tabindex="0" class="headline">Reviews</p>\n      <div class="review-list">\n        ').concat(S(e.customerReviews),'\n      </div>\n      <div class="form-group">\n        <p tabindex="0">Give Review</p>\n        <div class="review-warning  ">\n          <p class="review-warning-text">Name field is required!</p>\n        </div>\n        <div class="form form-name">\n          <input type="text" id="give-review-name" class="form__input" autocomplete="off" placeholder=" ">\n          <label for="give-review-name" class="form__label">Name</label>\n        </div>\n        <div class="form form-review">\n          <input type="text" id="give-review-review" class="form__input" autocomplete="off" placeholder=" ">\n          <label for="give-review-review" class="form__label">Review</label>\n        </div>\n        <button aria-label="create review button" class="give-review-button">Create Review</button>\n    </div>\n    </div>\n  ');var t,n},T=function(e){return'<div class="restaurant">\n                <img tabindex="0" src="'.concat(g.BASE_IMAGE_URL+e.pictureId,'" \n                alt="restaurant image ').concat(e.name,'">\n                <p tabindex="0"  class="restaurant-name">').concat(e.name,'</p>\n                <p tabindex="0"  class="restaurant-description">\n                    ').concat(e.description,'\n                </p>\n                <div class="flex">\n                    <p tabindex="0" class="restaurant-rating">Rating : ').concat(e.rating,'</p>\n                    <p tabindex="0"   class="restaurant-city">City : ').concat(e.city,'</p>\n                </div> \n                <a class="restaurant-detail-link" href="',"/#/detail/".concat(e.id),'">Detail</a>\n            </div>')};function P(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){P(i,r,o,a,c,"next",e)}function c(e){P(i,r,o,a,c,"throw",e)}a(void 0)}))}}function A(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){A(i,r,o,a,c,"next",e)}function c(e){A(i,r,o,a,c,"throw",e)}a(void 0)}))}}const C={"/":w,"/about":w,"/explore":{render:function(){return j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <div class="loading-animation"></div>\n        <div class ="restaurants-list">\n        </div>\n        ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return j(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".loading-animation"),n=document.querySelector(".restaurants-list"),t.innerHTML='\n    <div class ="loading">\n        <div class="round"></div>\n        <div class="round"></div>\n        <div class="round"></div>\n    </div>\n    ',y(),e.next=6,k.restaurantList();case 6:r=e.sent,console.log(r),r&&(t.innerHTML="",r.forEach((function(e){n.innerHTML+=T(e)})));case 9:case"end":return e.stop()}}),e)})))()}},"/detail/:id":{render:function(){return M(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <div class="loading-animation"></div>\n        <div class="restaurant-detail"></div>');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return M(regeneratorRuntime.mark((function t(){var n,r,o,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".loading-animation"),r=document.querySelector(".restaurant-detail"),n.innerHTML='\n    <div class ="loading">\n        <div class="round"></div>\n        <div class="round"></div>\n        <div class="round"></div>\n    </div>\n    ',y(),o=p.parseActiveUrlWithoutCombiner(),t.next=7,k.detailRestaurant(o.id);case 7:!1!==(i=t.sent)&&(n.innerHTML="",a=i.restaurant,r.innerHTML=O(a),e._menusClick(a),e._giveReview(a.id));case 9:case"end":return t.stop()}}),t)})))()},_menusClick:function(e){var t=document.querySelector("#drinks-menu-button"),n=document.querySelector("#foods-menu-button"),r=document.querySelector("#restaurant-detail-menu-container");t.addEventListener("click",(function(){t.classList.add("active"),n.classList.remove("active"),r.innerHTML="".concat(_(e.menus.drinks))})),n.addEventListener("click",(function(){t.classList.remove("active"),n.classList.add("active"),r.innerHTML="".concat(_(e.menus.foods))}))},_giveReview:function(e){var t=this,n=document.querySelector(".review-warning"),r=document.querySelector(".review-warning-text"),o=document.querySelector("#give-review-name"),i=document.querySelector("#give-review-review");document.querySelector(".give-review-button").addEventListener("click",M(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!0!==t._validateForm(o,i,n,r)){a.next=6;break}return a.next=3,k.reviewRestaurant(e,o.value,i.value);case 3:c=a.sent,document.querySelector(".review-list").innerHTML=S(c);case 6:case"end":return a.stop()}}),a)}))))},_validateForm:function(e,t,n,r){return e.value?t.value?(n.classList.remove("review-warning-danger"),n.classList.add("review-warning-success"),r.innerHTML="Your Review Has Been Sent!",gsap.fromTo(n,.5,{opacity:"0%"},{opacity:"100%",ease:"power1"}),!0):(n.classList.add("review-warning-danger"),n.classList.remove("review-warning-success"),r.innerHTML="Review Field is Required!",gsap.fromTo(n,.5,{opacity:"0%"},{opacity:"100%",ease:"power1"}),!1):(n.classList.add("review-warning-danger"),n.classList.remove("review-warning-success"),r.innerHTML="Name Field is Required!",gsap.fromTo(n,.5,{opacity:"0%"},{opacity:"100%",ease:"power1"}),!1)}}};function q(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._contentElement=t}var t,n,r,o,i;return t=e,(n=[{key:"renderPage",value:(o=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.parseActiveUrlWithCombiner(),n=C[t],e.next=4,n.render();case 4:return this._contentElement.innerHTML=e.sent,e.next=7,n.afterRender();case 7:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=o.apply(e,t);function a(e){q(i,n,r,a,c,"next",e)}function c(e){q(i,n,r,a,c,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})}])&&H(t.prototype,n),r&&H(t,r),e}();function F(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}const I=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("serviceWorker"in navigator){e.next=3;break}return console.log("Browser tidak mendukung Service Worker"),e.abrupt("return");case 3:return e.prev=3,e.next=6,navigator.serviceWorker.register("./serviceWorker.js");case 6:console.log("Service worker registered"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("Failed to register service worker",e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){F(i,r,o,a,c,"next",e)}function c(e){F(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();var N,U,G,W=new B(document.querySelector("main"));N=f,U=document.getElementById("nav-container"),(G=document.createElement("navbar-list")).navbarLinks=N,U.appendChild(G),d(),window.addEventListener("load",(function(){I(),W.renderPage()})),window.addEventListener("hashchange",(function(){W.renderPage()}))})()})();