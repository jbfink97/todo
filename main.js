(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,":root {\n    --red: #e44232;\n    --whiteText: #fff;\n    --font: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n* {\n    margin: 0;\n    font-family: var(--font);\n}\n\nbutton {\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n#heading {\n    color: var(--whiteText);\n    background-color: var(--red);\n    font-size: 2rem;\n    padding: 2vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#main {\n    display: flex;\n    flex-grow: 10;\n}\n\n#sidebar,\n#projectDisplay {\n    color: var(--red);\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    padding: 3vh 3vw;\n    row-gap: 3vh;\n    background-color: lightgrey;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    row-gap: 1vh;\n    padding-bottom: 2vh;\n}\n\ninput {\n    padding: .5vh 0vw;\n}\n\n#projectDisplay {\n    padding: 2vh 3vw;\n    flex-grow: 10;\n}\n\n.projectDiv {\n    padding-top: 1vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1vh 1vw;\n}\n\n#currentProject,\n#allProjects {\n    padding-bottom: 1vh;\n    border-bottom: 2px solid black;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o={};(()=>{t.d(o,{q:()=>b});var e=t(379),n=t.n(e),r=t(795),a=t.n(r),c=t(569),i=t.n(c),d=t(565),s=t.n(d),l=t(216),u=t.n(l),p=t(589),m=t.n(p),f=t(426),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e,n){this.name=e,this.index=n}}function y(){const e=document.getElementById("newProjectInput").value;if(b.some((n=>n.name==e)))alert("You already have a project with that name!");else if(e.length<1)alert("Please input a name for your project!");else{const n=b.length,t=new h(e,n);b.push(t),document.getElementById("projectList").textContent="",g()}document.getElementById("newProjectForm").reset()}function g(){const e=document.getElementById("projectList");e.textContent="";for(let e=0;e<b.length;e++)b[e].index=e;for(const n of b){const t=document.createElement("div");t.classList.add("projectDiv");const o=document.createElement("button");o.type="button",o.id=n.name,o.classList.add("button"),o.textContent=n.name,o.addEventListener("click",(()=>{x(n.name)}));const r=document.createElement("button");r.textContent="Delete Project",r.type="button",r.addEventListener("click",(()=>{b.splice(n.index,1),g(),console.log(document.getElementById("currentProject").classList[0]),console.log(n.name),document.getElementById("currentProject").classList.contains(n.name)&&x(b[0].name)})),t.append(o,r),e.appendChild(t)}}function x(e){const n=document.getElementById("projectDisplay");n.textContent="";const t=document.createElement("div");t.id="currentProject",t.textContent=`Project: ${e}`,t.classList=e,n.append(t)}let b=[];!function(){const e=document.getElementById("content"),n=document.createElement("div");n.id="heading",n.textContent="To Do List!",e.appendChild(n);const t=document.createElement("div");t.id="main",e.appendChild(t);const o=document.createElement("div");o.id="sidebar",t.appendChild(o);const r=document.createElement("div");r.id="projectList";const a=document.createElement("div");a.id="projectDisplay",t.appendChild(a);const c=document.createElement("form");c.id="newProjectForm";const i=document.createElement("label");i.htmlFor="newProjectInput",i.textContent="Add a new project";const d=document.createElement("input");d.id="newProjectInput",d.placeholder="New project name";const s=document.createElement("button");s.type="button",s.textContent="Add",s.htmlFor="newProjectInput",s.addEventListener("click",y),c.append(i,d,s),o.append(c);const l=new h("Default",0);b.push(l),o.append(r);const u=document.createElement("button");u.type="button",u.textContent="Show All Projects",o.append(u),g(),x(b[0].name)}()})()})();