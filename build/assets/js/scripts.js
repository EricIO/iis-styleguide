(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){(function(){"use strict";var internalId=0;var togglesMap={};var targetsMap={};function $(selector,context){return Array.prototype.slice.call((context||document).querySelectorAll(selector))}function getClosestToggle(element){if(element.closest){return element.closest("[data-a11y-toggle]")}while(element){if(element.nodeType===1&&element.hasAttribute("data-a11y-toggle")){return element}element=element.parentNode}return null}function handleToggle(toggle){var target=toggle&&targetsMap[toggle.getAttribute("aria-controls")];if(!target){return false}var toggles=togglesMap["#"+target.id];var isExpanded=target.getAttribute("aria-hidden")==="false";target.setAttribute("aria-hidden",isExpanded);toggles.forEach(function(toggle){toggle.setAttribute("aria-expanded",!isExpanded)})}var initA11yToggle=function(context){togglesMap=$("[data-a11y-toggle]",context).reduce(function(acc,toggle){var selector="#"+toggle.getAttribute("data-a11y-toggle");acc[selector]=acc[selector]||[];acc[selector].push(toggle);return acc},togglesMap);var targets=Object.keys(togglesMap);targets.length&&$(targets).forEach(function(target){var toggles=togglesMap["#"+target.id];var isExpanded=target.hasAttribute("data-a11y-toggle-open");var labelledby=[];toggles.forEach(function(toggle){toggle.id||toggle.setAttribute("id","a11y-toggle-"+internalId++);toggle.setAttribute("aria-controls",target.id);toggle.setAttribute("aria-expanded",isExpanded);labelledby.push(toggle.id)});target.setAttribute("aria-hidden",!isExpanded);target.hasAttribute("aria-labelledby")||target.setAttribute("aria-labelledby",labelledby.join(" "));targetsMap[target.id]=target})};document.addEventListener("DOMContentLoaded",function(){initA11yToggle()});document.addEventListener("click",function(event){var toggle=getClosestToggle(event.target);handleToggle(toggle)});document.addEventListener("keyup",function(event){if(event.which===13||event.which===32){var toggle=getClosestToggle(event.target);if(toggle&&toggle.getAttribute("role")==="button"){handleToggle(toggle)}}});window&&(window.a11yToggle=initA11yToggle)})()},{}],2:[function(require,module,exports){"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},loadConfig=function(){var e={},t=function(t,r){e[t]=r},r=function(t){return e[t]},n=function(t){return e[t]};return{set:t,get:r,remove:n}},DATA_HASH_ID="data-hashaccordion-id",pluginConfig=loadConfig(),findById=function(e,t){return document.querySelector("#"+e+"["+DATA_HASH_ID+'="'+t+'"]')},addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setAttributes=function(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})},searchParentHashId=function(e,t){for(var r=!1,n=e;1===n.nodeType&&n&&r===!1;)n.hasAttribute(t)===!0?r=!0:n=n.parentNode;return r===!0?n.getAttribute(t):""},searchParent=function(e,t,r){for(var n=!1,A=e;A&&n===!1;)hasClass(A,t)===!0&&A.getAttribute(DATA_HASH_ID)===r?n=!0:A=A.parentNode;return n===!0?A.getAttribute("id"):""},unSelectHeaders=function(e,t){e.forEach(function(e){setAttributes(e,_defineProperty({},t,"false"))})},selectHeader=function(e,t){e.setAttribute(t,!0)},selectHeaderInList=function(e,t,r){var n=void 0;e.forEach(function(e,t){"true"===e.getAttribute(r)&&(n=t)}),"next"===t&&(selectHeader(e[n+1]),setTimeout(function(){e[n+1].focus()},0)),"prev"===t&&(selectHeader(e[n-1]),setTimeout(function(){e[n-1].focus()},0))},plugin=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=_extends({ACCORDION_JS:"js-accordion",ACCORDION_JS_HEADER:"js-accordion__header",ACCORDION_JS_PANEL:"js-accordion__panel",ACCORDION_DATA_PREFIX_CLASS:"data-accordion-prefix-classes",ACCORDION_DATA_OPENED:"data-accordion-opened",ACCORDION_DATA_MULTISELECTABLE:"data-accordion-multiselectable",ACCORDION_DATA_COOL_SELECTORS:"data-accordion-cool-selectors",ACCORDION_PREFIX_IDS:"accordion",ACCORDION_BUTTON_ID:"_tab",ACCORDION_PANEL_ID:"_panel",ACCORDION_STYLE:"accordion",ACCORDION_TITLE_STYLE:"accordion__title",ACCORDION_HEADER_STYLE:"accordion__header",ACCORDION_PANEL_STYLE:"accordion__panel",ACCORDION_ROLE_TABLIST:"tablist",ACCORDION_ROLE_TAB:"tab",ACCORDION_ROLE_TABPANEL:"tabpanel",ATTR_ROLE:"role",ATTR_MULTISELECTABLE:"aria-multiselectable",ATTR_EXPANDED:"aria-expanded",ATTR_LABELLEDBY:"aria-labelledby",ATTR_HIDDEN:"aria-hidden",ATTR_CONTROLS:"aria-controls",ATTR_SELECTED:"aria-selected"},e),r=Math.random().toString(32).slice(2,12);pluginConfig.set(r,t);var n=function(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS))},A=function(e){n(e).forEach(function(e){var n="z"+Math.random().toString(32).slice(2,12),A=e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS)===!0?e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS)+"-":"",a=e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS)===!0;"none"===e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE)?e.setAttribute(t.ATTR_MULTISELECTABLE,"false"):e.setAttribute(t.ATTR_MULTISELECTABLE,"true"),e.setAttribute(t.ATTR_ROLE,t.ACCORDION_ROLE_TABLIST),e.setAttribute("id",n),e.setAttribute(DATA_HASH_ID,r),addClass(e,A+t.ACCORDION_STYLE);var i=[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS_HEADER));i.forEach(function(i,_){var o,T;if(i.parentNode===e||a!==!1){var E=_+1,s=i.nextElementSibling,C=i.innerHTML,c=document.createElement("BUTTON"),D=i.hasAttribute(t.ACCORDION_DATA_OPENED)===!0?i.getAttribute(t.ACCORDION_DATA_OPENED):"";c.innerHTML=C,addClass(c,t.ACCORDION_JS_HEADER),addClass(c,A+t.ACCORDION_HEADER_STYLE),setAttributes(c,(o={},_defineProperty(o,t.ATTR_ROLE,t.ACCORDION_ROLE_TAB),_defineProperty(o,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(o,t.ATTR_CONTROLS,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(o,t.ATTR_SELECTED,"false"),_defineProperty(o,"type","button"),_defineProperty(o,DATA_HASH_ID,r),o)),i.innerHTML="",i.appendChild(c),addClass(i,A+t.ACCORDION_TITLE_STYLE),removeClass(i,t.ACCORDION_JS_HEADER),addClass(s,A+t.ACCORDION_PANEL_STYLE),setAttributes(s,(T={},_defineProperty(T,t.ATTR_ROLE,t.ACCORDION_ROLE_TABPANEL),_defineProperty(T,t.ATTR_LABELLEDBY,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(T,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(T,DATA_HASH_ID,r),T)),"true"===D?(c.setAttribute(t.ATTR_EXPANDED,"true"),i.removeAttribute(t.ACCORDION_DATA_OPENED),s.setAttribute(t.ATTR_HIDDEN,"false")):(c.setAttribute(t.ATTR_EXPANDED,"false"),s.setAttribute(t.ATTR_HIDDEN,"true"))}})})};return{attach:A}},main=function(){return["click","keydown","focus"].forEach(function(e){document.body.addEventListener(e,function(t){var r=searchParentHashId(t.target,DATA_HASH_ID);""!==r&&!function(){var n=pluginConfig.get(r);hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"focus"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER));a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),unSelectHeaders(i,n.ATTR_SELECTED),selectHeader(e,n.ATTR_SELECTED)}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"click"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER)),_=A.getAttribute(n.ATTR_MULTISELECTABLE),o=findById(e.getAttribute(n.ATTR_CONTROLS),r),T=e.getAttribute(n.ATTR_EXPANDED);a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),"false"===T?(e.setAttribute(n.ATTR_EXPANDED,!0),o.removeAttribute(n.ATTR_HIDDEN)):(e.setAttribute(n.ATTR_EXPANDED,!1),o.setAttribute(n.ATTR_HIDDEN,!0)),"false"===_&&i.forEach(function(t){var A=findById(t.getAttribute(n.ATTR_CONTROLS),r);t!==e?(t.setAttribute(n.ATTR_SELECTED,!1),t.setAttribute(n.ATTR_EXPANDED,!1),A.setAttribute(n.ATTR_HIDDEN,!0)):t.setAttribute(n.ATTR_SELECTED,!0)}),setTimeout(function(){e.focus()},0),t.preventDefault()}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"keydown"===e&&!function(){var e=t.target,A=searchParent(e,n.ACCORDION_JS,r),a=findById(A,r),i=a.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,_=[].slice.call(a.querySelectorAll("."+n.ACCORDION_JS_HEADER));i===!1&&(_=_.filter(function(e){return e.parentNode.parentNode===a})),36===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):35===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):37!==t.keyCode&&38!==t.keyCode||t.ctrlKey?40!==t.keyCode&&39!==t.keyCode||t.ctrlKey||("true"===_[_.length-1].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):(selectHeaderInList(_,"next",n.ATTR_SELECTED),t.preventDefault())):"true"===_[0].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):(selectHeaderInList(_,"prev",n.ATTR_SELECTED),t.preventDefault())}()}()},!0)}),plugin};window.van11yAccessibleAccordionAria=main();var onLoad=function e(){var t=window.van11yAccessibleAccordionAria();t.attach(),document.removeEventListener("DOMContentLoaded",e)};document.addEventListener("DOMContentLoaded",onLoad)},{}],3:[function(require,module,exports){require("./utilities/tab-highlighting/tab-highlighting");require("./atoms/grid-toggle/grid-toggle");require("a11y-toggle");require("./vendor/toggle/a11y.toggle-switcher");require("van11y-accessible-accordion-aria");require("./organisms/accordion/accordion")},{"./atoms/grid-toggle/grid-toggle":4,"./organisms/accordion/accordion":5,"./utilities/tab-highlighting/tab-highlighting":6,"./vendor/toggle/a11y.toggle-switcher":7,"a11y-toggle":1,"van11y-accessible-accordion-aria":2}],4:[function(require,module,exports){const element=document.querySelector(".grid-toggle");function classToggle(){const body=document.querySelector("body");body.classList.toggle("baseline-grid")}if(element){document.querySelector(".grid-toggle").addEventListener("click",classToggle)}},{}],5:[function(require,module,exports){const oAccordion=window.van11yAccessibleAccordionAria({ACCORDION_PREFIX_IDS:"o-accordion",ACCORDION_JS:"js-o-accordion",ACCORDION_STYLE:"o-accordion",ACCORDION_TITLE_STYLE:"o-accordion__title",ACCORDION_HEADER_STYLE:"o-accordion__header",ACCORDION_PANEL_STYLE:"o-accordion__panel"});oAccordion.attach()},{}],6:[function(require,module,exports){const element=document.getElementsByTagName("html")[0];const highLightClass="tab-highlight";function onKeyDown(e){const event=e;if(!event){window.event=event}const keyCode=event.keyCode||event.which;const tabKey=9;if(keyCode===tabKey){this.classList.add(highLightClass)}}function onMouseDown(){this.classList.remove(highLightClass)}element.addEventListener("keydown",onKeyDown);element.addEventListener("mousedown",onMouseDown)},{}],7:[function(require,module,exports){function collapse(toggle){const id=toggle.getAttribute("data-a11y-toggle");const collapsibleBox=document.getElementById(id);collapsibleBox.setAttribute("aria-hidden",true);toggle.setAttribute("aria-expanded",false)}const toggles=Array.prototype.slice.call(document.querySelectorAll("[data-a11y-toggle]"));function collapseAll(event){toggles.filter(toggle=>toggle!==event.target).forEach(collapse)}toggles.forEach(toggle=>{toggle.addEventListener("click",collapseAll)})},{}]},{},[3]);