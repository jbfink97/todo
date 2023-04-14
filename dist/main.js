(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,":root {\n    --red: #e44232;\n    --whiteText: #fff;\n    --font: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n* {\n    margin: 0;\n    font-family: var(--font);\n}\n\nspan {\n    cursor: pointer;\n}\n\nbutton {\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n#heading {\n    color: var(--whiteText);\n    background-color: var(--red);\n    font-size: 2rem;\n    padding: 2vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#main {\n    display: flex;\n    flex-grow: 10;\n}\n\n#sidebar,\n#projectDisplay {\n    color: var(--red);\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    padding: 3vh 3vw;\n    row-gap: 3vh;\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1vh;\n    padding-bottom: 2vh;\n}\n\ninput {\n    padding: .5vh 0vw;\n}\n\n#projectDisplay {\n    padding: 2vh 3vw;\n    flex-grow: 10;\n}\n\n.projectDiv {\n    padding-top: 1vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1vh 1vw;\n}\n\n#currentProject,\n#allProjects {\n    padding-bottom: 1vh;\n    border-bottom: 2px solid black;\n    font-size: 2rem;\n}\n\n#newTaskForm {\n    display: grid;\n    grid-template-columns: 3fr 1fr 1fr 1fr;\n    column-gap: 1vw;\n    padding-top: 2vh;\n}\n\n#newTaskForm>div {\n    display: flex;\n    flex-direction: column;\n}\n\nselect,\ninput {\n    padding: 1vh 0vh;\n}\n\n.complete {\n    background-color: green;\n}\n\n#newTaskForm.hidden {\n    display: none;\n}\n\n.projectName {\n    border-bottom: 1px solid black;\n}\n\n.projectList {\n    padding: 1vh;\n}\n\n.individualTask {\n    padding: 1vh;\n    display: grid;\n    grid-template-columns: 3fr 2fr 2fr repeat(3, 1fr);\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    padding-top: 50px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content,\n.modal-header,\n.modal-footer {\n    position: relative;\n    background-color: white;\n    padding: 20px;\n    margin: auto;\n    width: 75%;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n}\n\n.close-btn {\n    float: right;\n    color: lightgray;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.close-btn:hover {\n    color: darkgray;\n}\n\n@-webkit-keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var d=t[c],u=r.base?d[0]+r.base:d[0],s=a[u]||0,l="".concat(u," ").concat(s);a[u]=s+1;var m=n(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var d=r(t,o),u=0;u<a.length;u++){var s=n(a[u]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};(()=>{n.d(r,{q:()=>Ct,w:()=>Tt});var t=n(379),e=n.n(t),o=n(795),a=n.n(o),i=n(569),c=n.n(i),d=n(565),u=n.n(d),s=n(216),l=n.n(s),m=n(589),f=n.n(m),h=n(426),p={};p.styleTagTransform=f(),p.setAttributes=u(),p.insert=c().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=l(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const g=class{constructor(t,e){this.name=t,this.index=e}},v=class{constructor(t,e,n,r){this.project=t,this.description=e,this.dueDate=n,this.priority=r,this.status="incomplete",this.index=null}};function y(){const t=document.getElementById("newProjectInput").value;if(Ct.some((e=>e.name==t)))alert("You already have a project with that name!");else if(t.length<1)alert("Please input a name for your project!");else{const e=Ct.length,n=new g(t,e);Ct.push(n),document.getElementById("projectList").textContent="",vt()}document.getElementById("newProjectForm").reset()}function w(){const t=document.getElementById("taskList");t.textContent="";for(let t=0;t<Tt.length;t++)Tt[t].index=t;const e=document.getElementById("currentProject").className;for(const n in Tt)Tt[n].project===e&&t.append(wt(Tt[n]))}function b(){const t=document.getElementById("currentProject").className,e=document.getElementById("description").value,n=document.getElementById("dueDate").value,r=document.getElementById("priority").value,o=new v(t,e,n,r);o.index=Tt.length,e.length<1?alert("Please enter a description for the task"):""===n?alert("Please enter a due date"):(Tt.push(o),w(),document.getElementById("newTaskForm").reset())}function x(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function E(t){x(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===T(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function k(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var M=864e5;function D(t){x(1,arguments);var e=E(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function P(t){x(1,arguments);var e=E(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=D(r),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var i=D(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}var S=6048e5;var j={};function L(){return j}function U(t,e){var n,r,o,a,i,c,d,u;x(1,arguments);var s=L(),l=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.weekStartsOn)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(c=i.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==o?o:s.weekStartsOn)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=E(t),f=m.getUTCDay(),h=(f<l?7:0)+f-l;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function N(t,e){var n,r,o,a,i,c,d,u;x(1,arguments);var s=E(t),l=s.getUTCFullYear(),m=L(),f=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.firstWeekContainsDate)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(c=i.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,f),h.setUTCHours(0,0,0,0);var p=U(h,e),g=new Date(0);g.setUTCFullYear(l,0,f),g.setUTCHours(0,0,0,0);var v=U(g,e);return s.getTime()>=p.getTime()?l+1:s.getTime()>=v.getTime()?l:l-1}var W=6048e5;function Y(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const q=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Y("yy"===e?r%100:r,e.length)},F=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Y(n+1,2)},I=function(t,e){return Y(t.getUTCDate(),e.length)},O=function(t,e){return Y(t.getUTCHours()%12||12,e.length)},B=function(t,e){return Y(t.getUTCHours(),e.length)},A=function(t,e){return Y(t.getUTCMinutes(),e.length)},H=function(t,e){return Y(t.getUTCSeconds(),e.length)},z=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Y(Math.floor(r*Math.pow(10,n-3)),e.length)};var G={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return q(t,e)},Y:function(t,e,n,r){var o=N(t,r),a=o>0?o:1-o;return"YY"===e?Y(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):Y(a,e.length)},R:function(t,e){return Y(P(t),e.length)},u:function(t,e){return Y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return F(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){x(1,arguments);var n=E(t),r=U(n,e).getTime()-function(t,e){var n,r,o,a,i,c,d,u;x(1,arguments);var s=L(),l=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.firstWeekContainsDate)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(c=i.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:s.firstWeekContainsDate)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1),m=N(t,e),f=new Date(0);return f.setUTCFullYear(m,0,l),f.setUTCHours(0,0,0,0),U(f,e)}(n,e).getTime();return Math.round(r/W)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Y(o,e.length)},I:function(t,e,n){var r=function(t){x(1,arguments);var e=E(t),n=D(e).getTime()-function(t){x(1,arguments);var e=P(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),D(n)}(e).getTime();return Math.round(n/S)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Y(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):I(t,e)},D:function(t,e,n){var r=function(t){x(1,arguments);var e=E(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/M)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Y(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return Y(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return Y(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Y(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):B(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):A(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):H(t,e)},S:function(t,e){return z(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return R(o);case"XXXX":case"XX":return X(o);default:return X(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return R(o);case"xxxx":case"xx":return X(o);default:return X(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(o,":");default:return"GMT"+X(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(o,":");default:return"GMT"+X(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return Y(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return Y((r._originalDate||t).getTime(),e.length)}};function Q(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=e||"";return n+String(o)+i+Y(a,2)}function R(t,e){return t%60==0?(t>0?"-":"+")+Y(Math.abs(t)/60,2):X(t,e)}function X(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+Y(Math.floor(o/60),2)+n+Y(o%60,2)}const $=G;var J=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},_=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const Z={p:_,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return J(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",J(o,e)).replace("{{time}}",_(a,e))}};var V=["D","DD"],K=["YY","YYYY"];function tt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var et={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function nt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const rt={date:nt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:nt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:nt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var ot={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function at(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var i=t.defaultWidth,c=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[c]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const it={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:at({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:at({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:at({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:at({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:at({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function ct(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;var i,c=a[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(c))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(c))return n}(d);return i=t.valueCallback?t.valueCallback(u):u,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(c.length)}}}var dt,ut={ordinalNumber:(dt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(dt.matchPattern);if(!n)return null;var r=n[0],o=t.match(dt.parsePattern);if(!o)return null;var a=dt.valueCallback?dt.valueCallback(o[0]):o[0];return{value:a=e.valueCallback?e.valueCallback(a):a,rest:t.slice(r.length)}}),era:ct({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ct({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ct({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ct({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ct({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const st={code:"en-US",formatDistance:function(t,e,n){var r,o=et[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:rt,formatRelative:function(t,e,n,r){return ot[t]},localize:it,match:ut,options:{weekStartsOn:0,firstWeekContainsDate:1}};var lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,ht=/''/g,pt=/[a-zA-Z]/;function gt(t,e,n){var r,o,a,i,c,d,u,s,l,m,f,h,p,g,v,y,w,b;x(2,arguments);var T=String(e),M=L(),D=null!==(r=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:M.locale)&&void 0!==r?r:st,P=k(null!==(a=null!==(i=null!==(c=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(u=n.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==c?c:M.firstWeekContainsDate)&&void 0!==i?i:null===(l=M.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var S=k(null!==(f=null!==(h=null!==(p=null!==(g=null==n?void 0:n.weekStartsOn)&&void 0!==g?g:null==n||null===(v=n.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==p?p:M.weekStartsOn)&&void 0!==h?h:null===(w=M.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==f?f:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!D.localize)throw new RangeError("locale must contain localize property");if(!D.formatLong)throw new RangeError("locale must contain formatLong property");var j=E(t);if(!function(t){if(x(1,arguments),!function(t){return x(1,arguments),t instanceof Date||"object"===C(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=E(t);return!isNaN(Number(e))}(j))throw new RangeError("Invalid time value");var U=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(j),N=function(t,e){return x(2,arguments),function(t,e){x(2,arguments);var n=E(t).getTime(),r=k(e);return new Date(n+r)}(t,-k(e))}(j,U),W={firstWeekContainsDate:P,weekStartsOn:S,locale:D,_originalDate:j};return T.match(mt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Z[e])(t,D.formatLong):t})).join("").match(lt).map((function(r){if("''"===r)return"'";var o,a,i=r[0];if("'"===i)return(a=(o=r).match(ft))?a[1].replace(ht,"'"):o;var c,d=$[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(c=r,-1===K.indexOf(c))||tt(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==V.indexOf(t)}(r)||tt(r,e,String(t)),d(N,r,D.localize,W);if(i.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function vt(){const t=document.getElementById("projectList");t.textContent="";for(let t=0;t<Ct.length;t++)Ct[t].index=t;for(const e of Ct){const n=document.createElement("div");n.classList.add("projectDiv");const r=document.createElement("button");r.type="button",r.id=e.name,r.classList.add("button"),r.textContent=e.name,r.addEventListener("click",(()=>{yt(e.name)}));const o=document.createElement("button");o.textContent="Delete Project",o.type="button",o.addEventListener("click",(()=>{Ct.splice(e.index,1);let t=Ct.map((t=>t.name)),n=[];Tt.forEach((e=>{t.includes(e.project)&&n.push(e)})),Tt=n;for(let t=0;t<Tt.length;t++)Tt[t].index=t;vt(),bt(),Ct.length<1?bt():document.getElementById("currentProject").classList.contains(e.name)&&yt(Ct[0].name)})),n.append(r,o),t.appendChild(n)}}function yt(t){const e=document.getElementById("projectDisplay");e.textContent="";const n=document.createElement("div");n.id="currentProject",n.textContent=`Project: ${t}`,n.classList=t,e.append(n);const r=document.createElement("div");r.id="taskList",e.append(r),w();const o=document.createElement("form");o.id="newTaskForm";const a=document.createElement("input");a.type="text",a.id="description",a.placeholder="Task to add";const i=document.createElement("label");i.textContent="Name/description of task";const c=document.createElement("div");c.append(i,a);const d=document.createElement("input");d.type="date",d.id="dueDate";const u=document.createElement("label");u.textContent="Due date";const s=document.createElement("div");s.append(u,d);const l=["high","medium","low"],m=document.createElement("select");for(const t of l){const e=document.createElement("option");e.value=t,e.text=t.charAt(0).toUpperCase()+t.slice(1),m.appendChild(e)}m.id="priority";const f=document.createElement("label");f.htmlFor="priority",f.textContent="Priority level";const h=document.createElement("div");h.append(f,m);const p=document.createElement("button");p.type="button",p.classList.add("button"),p.textContent="Add task to project",p.addEventListener("click",b),o.append(c,s,h,p),e.append(o)}function wt(t){const e=document.createElement("div");e.classList.add("individualTask");const n=document.createElement("div");n.textContent=`Description: ${t.description}`;const r=document.createElement("div");r.textContent=`Due on: ${t.dueDate}`;const o=document.createElement("div");o.textContent=`Priority level: ${t.priority}`;const a=document.createElement("button");a.type="button",a.textContent="Mark complete","incomplete"!=t.status&&(e.classList.add("complete"),a.textContent="Complete"),a.addEventListener("click",(()=>{"incomplete"==t.status?(t.status="complete",e.classList.add("complete"),a.textContent="Complete"):(t.status="incomplete",e.classList.remove("complete"),a.textContent="Mark as complete")}));const i=document.createElement("button");i.textContent="Edit Task";const c=document.querySelector(".modal");i.addEventListener("click",(()=>{document.querySelector(".modal-header").textContent="",document.querySelector(".modal-content").textContent="",document.querySelector(".modal-footer").textContent="";const e=document.createElement("span");e.innerHTML="&times",e.className="close-btn",document.querySelector(".modal-header").append(e),c.style.display="block";const n=document.createElement("h2");n.textContent=`Task: ${t.description}`,document.querySelector(".modal-header").append(n);const r=document.querySelector(".modal-content"),o=document.createElement("form");o.id="editTask";const a=document.createElement("input");a.id="editDescription",a.value=t.description;const i=document.createElement("input");i.type="date",i.id="editDate",i.value=t.dueDate,o.append(a,i),r.append(o);const d=["high","medium","low"],u=document.createElement("select");for(const t of d){const e=document.createElement("option");e.value=t,e.text=t.charAt(0).toUpperCase()+t.slice(1),u.appendChild(e)}u.id="editPriority",u.value=t.priority,o.append(u);const s=document.querySelector(".modal-footer"),l=document.createElement("button");l.type="button",l.htmlFor="editTask",l.textContent="Confirm Edit",s.append(l),l.addEventListener("click",(()=>{t.description=a.value,t.dueDate=i.value,t.priority=u.value,c.style.display="none",w(),"allProjects"==document.getElementById("currentProject").className?bt():"dueToday"==document.getElementById("currentProject").className?xt():yt(t.project)})),e.addEventListener("click",(()=>{c.style.display="none"})),window.addEventListener("click",(t=>{t.target==c&&(c.style.display="none")}))}));const d=document.createElement("button");return d.type="button",d.textContent="Remove task",d.addEventListener("click",(()=>{Tt.splice(t.index,1),w(),yt(t.project)})),e.append(n,r,o,a,i,d),e}function bt(){document.getElementById("taskList").textContent="";const t=document.getElementById("currentProject");t.className="allProjects",t.textContent="All Projects:",Ct.forEach((t=>{const e=document.createElement("div"),n=document.createElement("h2");n.textContent=`Project: ${t.name}`,e.classList.add("projectList"),e.id=t,e.append(n),n.classList.add("projectName");const r=document.getElementById("taskList");Tt.forEach((n=>{n.project==t.name&&e.append(wt(n))})),r.append(e)})),document.getElementById("newTaskForm").classList.add("hidden")}function xt(){document.getElementById("taskList").textContent="";const t=document.getElementById("currentProject");t.className="dueToday",t.textContent="Projects Due Today:",console.log(Ct),console.log(Tt);const e=new Date,n=`${gt(e,"yyyy")}-${gt(e,"MM")}-${gt(e,"dd")}`;let r=[];Tt.forEach((t=>{t.dueDate===n&&(r.includes(t.project)||r.push(t.project))})),r.forEach((t=>{const e=document.createElement("div"),r=document.createElement("h2");r.textContent=`Project: ${t}`,e.classList.add("projectList"),e.id=t,e.append(r),r.classList.add("projectName"),Tt.forEach((r=>{r.project==t&&r.dueDate==n&&e.append(wt(r))})),document.getElementById("taskList").append(e)})),document.getElementById("newTaskForm").classList.add("hidden")}let Ct=[],Tt=[];!function(){const t=document.getElementById("content"),e=document.createElement("div");e.id="heading",e.textContent="To Do List!",t.appendChild(e);const n=document.createElement("div");n.id="main",t.appendChild(n);const r=document.createElement("div");r.id="sidebar",n.appendChild(r);const o=document.createElement("div");o.id="projectList";const a=document.createElement("div");a.id="projectDisplay",n.appendChild(a);const i=document.createElement("form");i.id="newProjectForm";const c=document.createElement("label");c.htmlFor="newProjectInput",c.textContent="Add a new project";const d=document.createElement("input");d.id="newProjectInput",d.placeholder="New project name";const u=document.createElement("button");u.type="button",u.textContent="Add",u.htmlFor="newProjectInput",u.addEventListener("click",y),i.append(c,d,u),r.append(i);const s=new g("Default",0);Ct.push(s),r.append(o);const l=document.createElement("button");l.type="button",l.textContent="Projects Due Today",l.addEventListener("click",xt);const m=document.createElement("button");m.type="button",m.textContent="Show All Projects",m.addEventListener("click",bt),r.append(l,m),vt(),yt(Ct[0].name)}()})()})();