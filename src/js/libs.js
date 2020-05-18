/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);
/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});
/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(Rt,Nt){"use strict";var zt="fullpage-wrapper",jt="."+zt,Pt="fp-responsive",Dt="fp-notransition",Vt="fp-destroyed",Wt="fp-enabled",Yt="fp-viewing",Ft="active",Ut="."+Ft,Xt="fp-completely",Kt="fp-section",_t="."+Kt,$t=_t+Ut,qt="fp-tableCell",Qt="."+qt,Gt="fp-auto-height",Jt="fp-normal-scroll",Zt="fp-nav",en="#"+Zt,tn="fp-tooltip",nn="fp-slide",on="."+nn,rn=on+Ut,ln="fp-slides",an="."+ln,sn="fp-slidesContainer",cn="."+sn,un="fp-table",fn="fp-slidesNav",dn="."+fn,vn=dn+" a",e="fp-controlArrow",pn="."+e,hn="fp-prev",gn=pn+".fp-prev",mn=pn+".fp-next";function Sn(e,t){Rt.console&&Rt.console[e]&&Rt.console[e]("fullPage: "+t)}function wn(e,t){return(t=1<arguments.length?t:Nt)?t.querySelectorAll(e):null}function bn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=bn(e[r],o[r]))}return e}function yn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function En(){return"innerHeight"in Rt?Rt.innerHeight:Nt.documentElement.offsetHeight}function Ln(){return Rt.innerWidth}function xn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!_n(o,t);)o=o[n];return o}function An(e,t){return n(e,t,"previousElementSibling")}function Tn(e,t){return n(e,t,"nextElementSibling")}function kn(e){return e.previousElementSibling}function On(e){return e.nextElementSibling}function Mn(e){return e[e.length-1]}function Cn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?wn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Hn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function In(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Bn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Rn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function Nn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||Nt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function zn(e,t){o(e,t,!0)}function jn(e,t){for("string"==typeof t&&(t=qn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Pn(e){for(var t=Nt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Dn(e,t){return e&&1===e.nodeType?_n(e,t)?e:Dn(e.parentNode,t):null}function Vn(e,t){r(e,e.nextSibling,t)}function Wn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=qn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Yn(){var e=Nt.documentElement;return(Rt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Fn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Un(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Xn(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Kn(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof Rt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=Nt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function _n(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function $n(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function qn(e){var t=Nt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Qn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(_n(o,t)||null==t)&&r.push(o),o=o[n];return r}function Gn(e,t){return a(e,t,"nextElementSibling")}function Jn(e,t){return a(e,t,"previousElementSibling")}return Rt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Rt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Rt.fp_utils={$:wn,deepExtend:bn,hasClass:yn,getWindowHeight:En,css:xn,until:n,prevUntil:An,nextUntil:Tn,prev:kn,next:On,last:Mn,index:Cn,getList:l,hide:Hn,show:In,isArrayOrList:i,addClass:Bn,removeClass:Rn,appendTo:Nn,wrap:o,wrapAll:zn,wrapInner:jn,unwrap:Pn,closest:Dn,after:Vn,before:Wn,insertBefore:r,getScrollTop:Yn,siblings:Fn,preventDefault:Un,isFunction:Xn,trigger:Kn,matches:_n,toggle:$n,createElementFromHTML:qn,remove:Qn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:Gn,prevAll:Jn,showError:Sn},function(e,E){var n=E&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey)||-1<Nt.domain.indexOf("alvarotrigo.com"),r=wn("html, body"),u=wn("html")[0],L=wn("body")[0];if(!yn(u,Wt)){var h={};E=bn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Rt.fp_scrolloverflow?Rt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?wn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},E);var x,i,c,f,a=!1,o=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),l="ontouchstart"in Rt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,d="string"==typeof e?wn(e)[0]:e,A=En(),s=Ln(),g=!1,t=!0,T=!0,v=[],p={m:{up:!0,down:!0,left:!0,right:!0}};p.k=bn({},p.m);var m,S,w,b,y,k,O,M,C,H=Rt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},I={touchmove:"ontouchmove"in Rt?"touchmove":H.move,touchstart:"ontouchstart"in Rt?"touchstart":H.down},B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',R=!1;try{var N=Object.defineProperty({},"passive",{get:function(){R=!0}});Rt.addEventListener("testPassive",null,N),Rt.removeEventListener("testPassive",null,N)}catch(e){}var z,j,P=bn({},E),D=!1,V=!0,W=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Ot(),Rt.fp_easings=bn(Rt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),d&&(h.version="3.0.8",h.setAutoScrolling=J,h.setRecordHistory=Z,h.setScrollingSpeed=ee,h.setFitToSection=te,h.setLockAnchors=function(e){E.lockAnchors=e},h.setMouseWheelScrolling=ne,h.setAllowScrolling=oe,h.setKeyboardScrolling=ie,h.moveSectionUp=le,h.moveSectionDown=ae,h.silentMoveTo=se,h.moveTo=ce,h.moveSlideRight=ue,h.moveSlideLeft=fe,h.fitToSection=Le,h.reBuild=de,h.setResponsive=pe,h.getFullpageData=function(){return E},h.destroy=function(e){J(!1,"internal"),oe(!0),re(!1),ie(!1),Bn(d,Vt),[y,b,S,k,O,C,w].forEach(function(e){clearTimeout(e)}),Rt.removeEventListener("scroll",Ee),Rt.removeEventListener("hashchange",$e),Rt.removeEventListener("resize",it),Nt.removeEventListener("keydown",Qe),Nt.removeEventListener("keyup",Ge),["click","touchstart"].forEach(function(e){Nt.removeEventListener(e,he)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Nt.removeEventListener(e,me,!0)}),e&&(xt(0),wn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",d).forEach(function(e){De(e,"src")}),wn("img[data-srcset]").forEach(function(e){De(e,"srcset")}),Qn(wn(en+", "+dn+", "+pn)),xn(wn(_t),{height:"","background-color":"",padding:""}),xn(wn(on),{width:""}),xn(d,{height:"",position:"","-ms-touch-action":"","touch-action":""}),xn(r,{overflow:"",height:""}),Rn(u,Wt),Rn(L,Pt),L.className.split(/\s+/).forEach(function(e){0===e.indexOf(Yt)&&Rn(L,e)}),wn(_t+", "+on).forEach(function(e){E.scrollOverflowHandler&&E.scrollOverflow&&E.scrollOverflowHandler.remove(e),Rn(e,un+" "+Ft+" "+Xt);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),yn(e,Kt)&&!D&&e.removeAttribute("data-anchor")}),ct(d),[Qt,cn,an].forEach(function(e){wn(e,d).forEach(function(e){Pn(e)})}),xn(d,{"-webkit-transition":"none",transition:"none"}),Rt.scrollTo(0,0),[Kt,nn,sn].forEach(function(e){Rn(wn("."+e),e)}))},h.getActiveSection=function(){return new It(wn($t)[0])},h.getActiveSlide=function(){return ze(wn(rn,wn($t)[0])[0])},h.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<wn(E.sectionSelector,d).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<wn(E.sectionSelector,d).length;t++)e.push(0);return e}(),options:E,setAutoScrolling:J},h.shared={afterRenderActions:ye,isNormalScrollElement:!1},Rt.fullpage_api=h,E.$&&Object.keys(h).forEach(function(e){E.$.fn.fullpage[e]=h[e]}),E.css3&&(E.css3=function(){var e,t=Nt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",Nt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Rt.getComputedStyle(t).getPropertyValue(n[o]));return Nt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),E.scrollBar=E.scrollBar||E.hybrid,function(){if(!E.anchors.length){var e="[data-anchor]",t=wn(E.sectionSelector.split(",").join(e+",")+e,d);t.length&&(D=!0,t.forEach(function(e){E.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!E.navigationTooltips.length){var n="[data-tooltip]",o=wn(E.sectionSelector.split(",").join(n+",")+n,d);o.length&&o.forEach(function(e){E.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){xn(d,{height:"100%",position:"relative"}),Bn(d,zt),Bn(u,Wt),A=En(),Rn(d,Vt),Bn(wn(E.sectionSelector,d),Kt),Bn(wn(E.slideSelector,d),nn);for(var e=wn(_t),t=0;t<e.length;t++){var n=t,o=e[t],r=wn(on,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=wn($t)[0]||Bn(s,Ft),f=wn($t)[0],xn(s,{height:A+"px"}),E.paddingTop&&xn(s,{"padding-top":E.paddingTop}),E.paddingBottom&&xn(s,{"padding-bottom":E.paddingBottom}),void 0!==E.sectionsColor[c]&&xn(s,{"background-color":E.sectionsColor[c]}),void 0!==E.anchors[c]&&s.setAttribute("data-anchor",E.anchors[c]),l=o,a=n,void 0!==E.anchors[a]&&yn(l,Ft)&&ut(E.anchors[a],a),E.menu&&E.css3&&null!=Dn(wn(E.menu)[0],jt)&&wn(E.menu).forEach(function(e){L.appendChild(e)}),0<i?we(o,r,i):E.verticalCentered&&dt(o)}var l,a,s,c;E.fixedElements&&E.css3&&wn(E.fixedElements).forEach(function(e){L.appendChild(e)}),E.navigation&&function(){var e=Nt.createElement("div");e.setAttribute("id",Zt);var t=Nt.createElement("ul");e.appendChild(t),Nn(e,L);var n=wn(en)[0];Bn(n,"fp-"+E.navigationPosition),E.showActiveTooltip&&Bn(n,"fp-show-active");for(var o="",r=0;r<wn(_t).length;r++){var i="";E.anchors.length&&(i=E.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+be(r,"Section")+"</span><span></span></a>";var l=E.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+tn+" fp-"+E.navigationPosition+'">'+l+"</div>"),o+="</li>"}wn("ul",n)[0].innerHTML=o,xn(wn(en),{"margin-top":"-"+wn(en)[0].offsetHeight/2+"px"}),Bn(wn("a",wn("li",wn(en)[0])[Cn(wn($t)[0],_t)]),Ft)}(),wn('iframe[src*="youtube.com/embed/"]',d).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),E.scrollOverflow&&(m=E.scrollOverflowHandler.init(E))}(),oe(!0),re(!0),J(E.autoScrolling,"internal"),at(),yt(),"complete"===Nt.readyState&&_e(),Rt.addEventListener("load",_e),E.scrollOverflow||ye(),function(){for(var e=1;e<4;e++)C=setTimeout(Se,350*e)}(),Rt.addEventListener("scroll",Ee),Rt.addEventListener("hashchange",$e),Rt.addEventListener("blur",tt),Rt.addEventListener("resize",it),Nt.addEventListener("keydown",Qe),Nt.addEventListener("keyup",Ge),["click","touchstart"].forEach(function(e){Nt.addEventListener(e,he)}),E.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){ge(e,!1)}),["mouseleave","touchend"].forEach(function(e){ge(e,!0)})));var Y=!1,F=0,U=0,X=0,K=0,_=0,$=(new Date).getTime(),q=0,Q=0,G=A;return h}function J(e,t){e||xt(0),kt("autoScrolling",e,t);var n=wn($t)[0];if(E.autoScrolling&&!E.scrollBar)xn(r,{overflow:"hidden",height:"100%"}),Z(P.recordHistory,"internal"),xn(d,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&xt(n.offsetTop);else if(xn(r,{overflow:"visible",height:"initial"}),Z(!!E.autoScrolling&&P.recordHistory,"internal"),xn(d,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=je(n.offsetTop);o.element.scrollTo(0,o.options)}}function Z(e,t){kt("recordHistory",e,t)}function ee(e,t){kt("scrollingSpeed",e,t)}function te(e,t){kt("fitToSection",e,t)}function ne(e){e?(function(){var e,t="";Rt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Nt.createElement("div")?"wheel":void 0!==Nt.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!R&&{passive:!1};"DOMMouseScroll"==n?Nt[e](t+"MozMousePixelScroll",Ce,o):Nt[e](t+n,Ce,o)}(),d.addEventListener("mousedown",Je),d.addEventListener("mouseup",Ze)):(Nt.addEventListener?(Nt.removeEventListener("mousewheel",Ce,!1),Nt.removeEventListener("wheel",Ce,!1),Nt.removeEventListener("MozMousePixelScroll",Ce,!1)):Nt.detachEvent("onmousewheel",Ce),d.removeEventListener("mousedown",Je),d.removeEventListener("mouseup",Ze))}function oe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Tt(t,e,"m")}):Tt(t,"all","m")}function re(e){e?(ne(!0),function(){if(o||l){E.autoScrolling&&(L.removeEventListener(I.touchmove,Ae,{passive:!1}),L.addEventListener(I.touchmove,Ae,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Oe),e.removeEventListener(I.touchmove,Te,{passive:!1}),e.addEventListener(I.touchstart,Oe),e.addEventListener(I.touchmove,Te,{passive:!1})}}()):(ne(!1),function(){if(o||l){E.autoScrolling&&(L.removeEventListener(I.touchmove,Te,{passive:!1}),L.removeEventListener(I.touchmove,Ae,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Oe),e.removeEventListener(I.touchmove,Te,{passive:!1})}}())}function ie(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Tt(t,e,"k")}):(Tt(t,"all","k"),E.keyboardScrolling=t)}function le(){var e=An(wn($t)[0],_t);e||!E.loopTop&&!E.continuousVertical||(e=Mn(wn(_t))),null!=e&&Be(e,null,!0)}function ae(){var e=Tn(wn($t)[0],_t);e||!E.loopBottom&&!E.continuousVertical||(e=wn(_t)[0]),null!=e&&Be(e,null,!1)}function se(e,t){ee(0,"internal"),ce(e,t),ee(P.scrollingSpeed,"internal")}function ce(e,t){var n=ht(e);void 0!==t?gt(e,t):null!=n&&Be(n)}function ue(e){He("right",e)}function fe(e){He("left",e)}function de(e){if(!yn(d,Vt)){g=!0,A=En(),s=Ln();for(var t=wn(_t),n=0;n<t.length;++n){var o=t[n],r=wn(an,o)[0],i=wn(on,o);E.verticalCentered&&xn(wn(Qt,o),{height:vt(o)+"px"}),xn(o,{height:A+"px"}),1<i.length&&ot(r,wn(rn,r)[0])}E.scrollOverflow&&m.createScrollBarForAll();var l=Cn(wn($t)[0],_t);l&&se(l+1),g=!1,Xn(E.afterResize)&&e&&E.afterResize.call(d,Rt.innerWidth,Rt.innerHeight),Xn(E.afterReBuild)&&!e&&E.afterReBuild.call(d)}}function ve(){return yn(L,Pt)}function pe(e){var t=ve();e?t||(J(!1,"internal"),te(!1,"internal"),Hn(wn(en)),Bn(L,Pt),Xn(E.afterResponsive)&&E.afterResponsive.call(d,e),E.scrollOverflow&&m.createScrollBarForAll()):t&&(J(P.autoScrolling,"internal"),te(P.autoScrolling,"internal"),In(wn(en)),Rn(L,Pt),Xn(E.afterResponsive)&&E.afterResponsive.call(d,e))}function he(e){var t=e.target;t&&Dn(t,en+" a")?function(e){Un(e);var t=Cn(Dn(this,en+" li"));Be(wn(_t)[t])}.call(t,e):_n(t,".fp-tooltip")?function(){Kn(kn(this),"click")}.call(t):_n(t,pn)?function(){var e=Dn(this,_t);yn(this,hn)?p.m.left&&fe(e):p.m.right&&ue(e)}.call(t,e):_n(t,vn)||null!=Dn(t,vn)?function(e){Un(e);var t=wn(an,Dn(this,_t))[0],n=wn(on,t)[Cn(Dn(this,"li"))];ot(t,n)}.call(t,e):Dn(t,E.menu+" [data-menuanchor]")&&function(e){!wn(E.menu)[0]||!E.lockAnchors&&E.anchors.length||(Un(e),ce(this.getAttribute("data-menuanchor")))}.call(t,e)}function ge(e,t){Nt["fp_"+e]=t,Nt.addEventListener(e,me,!0)}function me(e){var t=e.type,o=!1,r=E.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==Nt||!i)return re(!0),void(r&&E.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(V=!1,setTimeout(function(){V=!0},800)),("mouseenter"!==t||V)&&(E.normalScrollElements.split(",").forEach(function(e){if(!o){var t=_n(i,e),n=Dn(i,e);(t||n)&&(h.shared.isNormalScrollElement||(re(!1),r&&E.scrollOverflowHandler.setIscroll(i,!1)),h.shared.isNormalScrollElement=!0,o=!0)}}),!o&&h.shared.isNormalScrollElement&&(re(!0),r&&E.scrollOverflowHandler.setIscroll(i,!0),h.shared.isNormalScrollElement=!1))}function Se(){var e=En(),t=Ln();A===e&&s===t||(A=e,s=t,de(!0))}function we(e,t,n){var o=100*n,r=100/n,i=Nt.createElement("div");i.className=ln,zn(t,i);var l,a,s=Nt.createElement("div");s.className=sn,zn(t,s),xn(wn(cn,e),{width:o+"%"}),1<n&&(E.controlArrows&&(l=e,a=[qn('<div class="fp-controlArrow fp-prev"></div>'),qn('<div class="fp-controlArrow fp-next"></div>')],Vn(wn(an,l)[0],a),"#fff"!==E.controlArrowColor&&(xn(wn(mn,l),{"border-color":"transparent transparent transparent "+E.controlArrowColor}),xn(wn(gn,l),{"border-color":"transparent "+E.controlArrowColor+" transparent transparent"})),E.loopHorizontal||Hn(wn(gn,l))),E.slidesNavigation&&function(e,t){Nn(qn('<div class="'+fn+'"><ul></ul></div>'),e);var n=wn(dn,e)[0];Bn(n,"fp-"+E.slidesNavPosition);for(var o=0;o<t;o++)Nn(qn('<li><a href="#"><span class="fp-sr-only">'+be(o,"Slide")+"</span><span></span></a></li>"),wn("ul",n)[0]);xn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Bn(wn("a",wn("li",n)[0]),Ft)}(e,n)),t.forEach(function(e){xn(e,{width:r+"%"}),E.verticalCentered&&dt(e)});var c=wn(rn,e)[0];null!=c&&(0!==Cn(wn($t),_t)||0===Cn(wn($t),_t)&&0!==Cn(c))?Lt(c,"internal"):Bn(t[0],Ft)}function be(e,t){return E.navigationTooltips[e]||E.anchors[e]||t+" "+(e+1)}function ye(){var e,t,n=wn($t)[0];Bn(n,Xt),We(n),Ve(),Fe(n),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e=qe(),t=ht(e.section),e.section&&t&&(void 0===t||Cn(t)!==Cn(f))||!Xn(E.afterLoad)||Re("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:Cn(n,_t)}),Xn(E.afterRender)&&Re("afterRender")}function Ee(){var e,t,n,o,r,i;if(!E.autoScrolling||E.scrollBar){var l=Yn(),a=(i=F<(r=l)?"down":"up",q=F=r,i),s=0,c=l+En()/2,u=L.offsetHeight-En()===l,f=wn(_t);if(u)s=f.length-1;else if(l)for(var d=0;d<f.length;++d)f[d].offsetTop<=c&&(s=d);else s=0;if(t=a,n=wn($t)[0].offsetTop,o=n+En(),("up"!=t?n<=Yn():o>=Yn()+En())&&(yn(wn($t)[0],Xt)||(Bn(wn($t)[0],Xt),Rn(Fn(wn($t)[0]),Xt))),!yn(e=f[s],Ft)){Y=!0;var v,p,h=wn($t)[0],g=Cn(h,_t)+1,m=ft(e),S=e.getAttribute("data-anchor"),w=Cn(e,_t)+1,b=wn(rn,e)[0],y={activeSection:h,sectionIndex:w-1,anchorLink:S,element:e,leavingSection:g,direction:m};b&&(p=b.getAttribute("data-anchor"),v=Cn(b)),T&&(Bn(e,Ft),Rn(Fn(e),Ft),Xn(E.onLeave)&&Re("onLeave",y),Xn(E.afterLoad)&&Re("afterLoad",y),Xe(h),We(e),Fe(e),ut(S,w-1),E.anchors.length&&(x=S),St(v,p,S)),clearTimeout(k),k=setTimeout(function(){Y=!1},100)}E.fitToSection&&(clearTimeout(O),O=setTimeout(function(){E.fitToSection&&wn($t)[0].offsetHeight<=A&&Le()},E.fitToSectionDelay))}}function Le(){T&&(g=!0,Be(wn($t)[0]),g=!1)}function xe(e){if(p.m[e]){var t="down"===e?ae:le;if(E.scrollOverflow){var n=E.scrollOverflowHandler.scrollable(wn($t)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!E.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ae(e){E.autoScrolling&&ke(e)&&p.m.up&&Un(e)}function Te(e){var t=Dn(e.target,_t)||wn($t)[0];if(ke(e)){E.autoScrolling&&Un(e);var n=Et(e);K=n.y,_=n.x,wn(an,t).length&&Math.abs(X-_)>Math.abs(U-K)?!a&&Math.abs(X-_)>Ln()/100*E.touchSensitivity&&(_<X?p.m.right&&ue(t):p.m.left&&fe(t)):E.autoScrolling&&T&&Math.abs(U-K)>Rt.innerHeight/100*E.touchSensitivity&&(K<U?xe("down"):U<K&&xe("up"))}}function ke(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Oe(e){if(E.fitToSection&&(z=!1),ke(e)){var t=Et(e);U=t.y,X=t.x}}function Me(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Ce(e){var t=(new Date).getTime(),n=yn(wn(".fp-completely")[0],Jt);if(!p.m.down&&!p.m.up)return Un(e),!1;if(E.autoScrolling&&!c&&!n){var o=(e=e||Rt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<v.length&&v.shift(),v.push(Math.abs(o)),E.scrollBar&&Un(e);var a=t-$;if($=t,200<a&&(v=[]),T){var s=Me(v,10);Me(v,70)<=s&&l&&xe(r<0?"down":"up")}return!1}E.fitToSection&&(z=!1)}function He(e,t){var n=null==t?wn($t)[0]:t,o=wn(an,n)[0];if(!(null==o||a||wn(on,o).length<2)){var r=wn(rn,o)[0],i=null;if(null==(i="left"===e?An(r,on):Tn(r,on))){if(!E.loopHorizontal)return;var l=Fn(r);i="left"===e?l[l.length-1]:l[0]}a=!h.test.isTesting,ot(o,i,e)}}function Ie(){for(var e=wn(rn),t=0;t<e.length;t++)Lt(e[t],"internal")}function Be(e,t,n){if(null!=e){var o,r,i,l,a,s,c,u,f,d={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=q<(l=i),s=l-A+r,c=E.bigSectionsDestination,A<r?(a||c)&&"bottom"!==c||(l=s):(a||g&&null==On(o))&&(l=s),q=l),yMovement:ft(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Cn(e,_t),activeSlide:wn(rn,e)[0],activeSection:wn($t)[0],leavingSection:Cn(wn($t),_t)+1,localIsResizing:g};if(!(d.activeSection==e&&!g||E.scrollBar&&Yn()===d.dtop&&!yn(e,Gt))){if(null!=d.activeSlide&&(u=d.activeSlide.getAttribute("data-anchor"),f=Cn(d.activeSlide)),!d.localIsResizing){var v=d.yMovement;if(void 0!==n&&(v=n?"up":"down"),d.direction=v,Xn(E.onLeave)&&!1===Re("onLeave",d))return}E.autoScrolling&&E.continuousVertical&&void 0!==d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&((p=d).isMovementUp?Wn(wn($t)[0],Gn(p.activeSection,_t)):Vn(wn($t)[0],Jn(p.activeSection,_t).reverse()),xt(wn($t)[0].offsetTop),Ie(),p.wrapAroundElements=p.activeSection,p.dtop=p.element.offsetTop,p.yMovement=ft(p.element),d=p),d.localIsResizing||Xe(d.activeSection),E.scrollOverflow&&E.scrollOverflowHandler.beforeLeave(),Bn(e,Ft),Rn(Fn(e),Ft),We(e),E.scrollOverflow&&E.scrollOverflowHandler.onLeave(),T=h.test.isTesting,St(f,u,d.anchorLink,d.sectionIndex),function(e){if(E.css3&&E.autoScrolling&&!E.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";pt(t,!0),E.scrollingSpeed?(clearTimeout(b),b=setTimeout(function(){Pe(e)},E.scrollingSpeed)):Pe(e)}else{var n=je(e.dtop);h.test.top=-e.dtop+"px",Mt(n.element,n.options,E.scrollingSpeed,function(){E.scrollBar?setTimeout(function(){Pe(e)},30):Pe(e)})}}(d),x=d.anchorLink,ut(d.anchorLink,d.sectionIndex)}}var p}function Re(e,t){var n,o,r,i,l=(o=e,r=t,(i=E.v2compatible?{afterRender:function(){return[d]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ne(wn($t)[0]),slide:ze(wn(rn,wn($t)[0])[0])}},onLeave:function(){return{origin:Ne(r.activeSection),destination:Ne(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ne(r.section),origin:ze(r.prevSlide),destination:ze(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(E.v2compatible){if(!1===E[e].apply(l[0],l.slice(1)))return!1}else if(Kn(d,e,l),!1===E[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ne(e){return e?new It(e):null}function ze(e){return e?new Bt(e):null}function je(e){var t={};return E.autoScrolling&&!E.scrollBar?(t.options=-e,t.element=wn(jt)[0]):(t.options=e,t.element=Rt),t}function Pe(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Wn(wn(_t)[0],t.wrapAroundElements):Vn(wn(_t)[wn(_t).length-1],t.wrapAroundElements),xt(wn($t)[0].offsetTop),Ie()),Xn(E.afterLoad)&&!e.localIsResizing&&Re("afterLoad",e),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e.localIsResizing||Fe(e.element),Bn(e.element,Xt),Rn(Fn(e.element),Xt),Ve(),T=!0,Xn(e.callback)&&e.callback()}function De(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Ve(){var e=wn(".fp-auto-height")[0]||ve()&&wn(".fp-auto-height-responsive")[0];E.lazyLoading&&e&&wn(_t+":not("+Ut+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<A&&0<n||2<o&&o<A)&&We(e)})}function We(o){E.lazyLoading&&wn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ke(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(De(n,e),n.addEventListener("load",function(){Ye(o)}))}),_n(n,"source")){var e=Dn(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Ye(o)})}})}function Ye(e){E.scrollOverflow&&(clearTimeout(j),j=setTimeout(function(){m.createScrollBar(e)},200))}function Fe(e){var t=Ke(e);wn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),wn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ue(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ue(e)}})}function Ue(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Xe(e){var t=Ke(e);wn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),wn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ke(e){var t=wn(rn,e);return t.length&&(e=t[0]),e}function _e(){var e=qe(),t=e.section,n=e.slide;t&&(E.animateAnchor?gt(t,n):se(t,n))}function $e(){if(!Y&&!E.lockAnchors){var e=qe(),t=e.section,n=e.slide,o=void 0===x,r=void 0===x&&void 0===n&&!a;t&&t.length&&(t&&t!==x&&!o||r||!a&&i!=n)&&gt(t,n)}}function qe(){var e,t,n=Rt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Qe(e){clearTimeout(M);var t=Nt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=Nt.activeElement,u=et(Ke(wn($t)[0]));function f(e){return Un(e),u[0]?u[0].focus():null}(t=e,n=et(Nt),o=n.indexOf(Nt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=ze(Dn(i,on)),a=Ne(Dn(i,_t)),l||a)&&(c?null==Dn(c,$t+","+$t+" "+rn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&Un(e))}(e):_n(t,"textarea")||_n(t,"input")||_n(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!E.keyboardScrolling||!E.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&Un(e),c=e.ctrlKey,M=setTimeout(function(){!function(e){var t=e.shiftKey,n=Nt.activeElement,o=_n(n,"video")||_n(n,"audio");if(T||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:p.k.up&&le();break;case 32:if(t&&p.k.up&&!o){le();break}case 40:case 34:p.k.down&&(32===e.keyCode&&o||ae());break;case 36:p.k.up&&ce(1);break;case 35:p.k.down&&ce(wn(_t).length);break;case 37:p.k.left&&fe();break;case 39:p.k.right&&ue()}}(e)},150))}function Ge(e){t&&(c=e.ctrlKey)}function Je(e){2==e.which&&(Q=e.pageY,d.addEventListener("mousemove",nt))}function Ze(e){2==e.which&&d.removeEventListener("mousemove",nt)}function et(e){return[].slice.call(wn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function tt(){c=t=!1}function nt(e){E.autoScrolling&&(T&&(e.pageY<Q&&p.m.up?le():e.pageY>Q&&p.m.down&&ae()),Q=e.pageY)}function ot(e,t,n){var o,r,i=Dn(e,_t),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:Cn(t),section:i,sectionIndex:Cn(i,_t),anchorLink:i.getAttribute("data-anchor"),slidesNav:wn(dn,i)[0],slideAnchor:bt(t),prevSlide:wn(rn,i)[0],prevSlideIndex:Cn(wn(rn,i)[0]),localIsResizing:g};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":r<o?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(T=!1),E.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&Xn(E.onSlideLeave)&&!1===Re("onSlideLeave",l)?a=!1:(Bn(t,Ft),Rn(Fn(t),Ft),l.localIsResizing||(Xe(l.prevSlide),We(t)),!E.loopHorizontal&&E.controlArrows&&($n(wn(gn,i),0!==l.slideIndex),$n(wn(mn,i),null!=On(t))),yn(i,Ft)&&!l.localIsResizing&&St(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(E.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";h.test.translate3dH[t.sectionIndex]=r,xn(st(wn(cn,e)),At(r)),y=setTimeout(function(){n&&rt(t)},E.scrollingSpeed)}else h.test.left[t.sectionIndex]=Math.round(o.left),Mt(e,Math.round(o.left),E.scrollingSpeed,function(){n&&rt(t)})}(e,l,!0))}function rt(e){var t,n;t=e.slidesNav,n=e.slideIndex,E.slidesNavigation&&null!=t&&(Rn(wn(Ut,t),Ft),Bn(wn("a",wn("li",t)[n]),Ft)),e.localIsResizing||(Xn(E.afterSlideLoad)&&Re("afterSlideLoad",e),T=!0,Fe(e.destiny)),a=!1}function it(){clearTimeout(S),S=setTimeout(function(){for(var e=0;e<4;e++)w=setTimeout(lt,200*e)},200)}function lt(){if(at(),o){var e=Nt.activeElement;if(!_n(e,"textarea")&&!_n(e,"input")&&!_n(e,"select")){var t=En();Math.abs(t-G)>20*Math.max(G,t)/100&&(de(!0),G=t)}}else Se()}function at(){var e=E.responsive||E.responsiveWidth,t=E.responsiveHeight,n=e&&Rt.innerWidth<e,o=t&&Rt.innerHeight<t;e&&t?pe(n||o):e?pe(n):t&&pe(o)}function st(e){var t="all "+E.scrollingSpeed+"ms "+E.easingcss3;return Rn(e,Dt),xn(e,{"-webkit-transition":t,transition:t})}function ct(e){return Bn(e,Dt)}function ut(e,t){var n,o,r;n=e,wn(E.menu).forEach(function(e){E.menu&&null!=e&&(Rn(wn(Ut,e),Ft),Bn(wn('[data-menuanchor="'+n+'"]',e),Ft))}),o=e,r=t,E.navigation&&null!=wn(en)[0]&&(Rn(wn(Ut,wn(en)[0]),Ft),Bn(o?wn('a[href="#'+o+'"]',wn(en)[0]):wn("a",wn("li",wn(en)[0])[r]),Ft))}function ft(e){var t=Cn(wn($t)[0],_t),n=Cn(e,_t);return t==n?"none":n<t?"up":"down"}function dt(e){if(!yn(e,un)){var t=Nt.createElement("div");t.className=qt,t.style.height=vt(e)+"px",Bn(e,un),jn(e,t)}}function vt(e){var t=A;if(E.paddingTop||E.paddingBottom){var n=e;yn(n,Kt)||(n=Dn(e,_t));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=A-o}return t}function pt(e,t){t?st(d):ct(d),xn(d,At(e)),h.test.translate3d=e,setTimeout(function(){Rn(d,Dt)},10)}function ht(e){var t=wn(_t+'[data-anchor="'+e+'"]',d)[0];if(!t){var n=void 0!==e?e-1:0;t=wn(_t)[n]}return t}function gt(e,t){var n=ht(e);if(null!=n){var o,r,i,l=(null==(i=wn(on+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=wn(on,r)[o]),i);bt(n)===x||yn(n,Ft)?mt(l):Be(n,function(){mt(l)})}}function mt(e){null!=e&&ot(Dn(e,an),e)}function St(e,t,n,o){var r="";E.anchors.length&&!E.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),wt(r+"/"+(i=t))):(null!=e&&(i=t),wt(n))),yt()}function wt(e){if(E.recordHistory)location.hash=e;else if(o||l)Rt.history.replaceState(void 0,void 0,"#"+e);else{var t=Rt.location.href.split("#")[0];Rt.location.replace(t+"#"+e)}}function bt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Cn(e);return null==t&&(t=n),t}function yt(){var e=wn($t)[0],t=wn(rn,e)[0],n=bt(e),o=bt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Yt+"-[^\\s]+\\b","g");L.className=L.className.replace(i,""),Bn(L,Yt+"-"+r)}function Et(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,l&&ke(e)&&E.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Lt(e,t){ee(0,"internal"),void 0!==t&&(g=!0),ot(Dn(e,an),e),void 0!==t&&(g=!1),ee(P.scrollingSpeed,"internal")}function xt(e){var t=Math.round(e);if(E.css3&&E.autoScrolling&&!E.scrollBar)pt("translate3d(0px, -"+t+"px, 0px)",!1);else if(E.autoScrolling&&!E.scrollBar)xn(d,{top:-t+"px"}),h.test.top=-t+"px";else{var n=je(t);Ct(n.element,n.options)}}function At(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Tt(t,e,n){"all"!==e?p[n][e]=t:Object.keys(p[n]).forEach(function(e){p[n][e]=t})}function kt(e,t,n){E[e]=t,"internal"!==n&&(P[e]=t)}function Ot(){var e=E.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Sn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Sn("error","https://github.com/alvarotrigo/fullPage.js#options.")),yn(u,Wt)?Sn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(E.continuousVertical&&(E.loopTop||E.loopBottom)&&(E.continuousVertical=!1,Sn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!E.scrollOverflow||!E.scrollBar&&E.autoScrolling||Sn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!E.continuousVertical||!E.scrollBar&&E.autoScrolling||(E.continuousVertical=!1,Sn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),E.scrollOverflow&&null==E.scrollOverflowHandler&&(E.scrollOverflow=!1,Sn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),W.forEach(function(e){E[e]&&Sn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),E.anchors.forEach(function(t){var e=[].slice.call(wn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(wn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Sn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Sn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function Mt(t,n,o,r){var e,i=(e=t).self!=Rt&&yn(e,ln)?e.scrollLeft:!E.autoScrolling||E.scrollBar?Yn():e.offsetTop,l=n-i,a=0;z=!0;var s=function(){if(z){var e=n;a+=20,o&&(e=Rt.fp_easings[E.easing](a,i,l,o)),Ct(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Ct(e,t){!E.autoScrolling||E.scrollBar||e.self!=Rt&&yn(e,ln)?e.self!=Rt&&yn(e,ln)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Ht(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Cn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function It(e){Ht.call(this,e,_t)}function Bt(e){Ht.call(this,e,on)}Ot()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
//# sourceMappingURL=fullpage.min.js.map

/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/*!==================================================
/*!jquery.nav.js
/*!Version: 1
/*!Author: ---
/*!Description: ---
/*!================================================== */

/* Accordion plugin */
;
(function(window, document, $, undefined) {
    /*'use strict';*/

    // Inner Plugin Classes and Modifiers
    // ====================================================
    var PREF = 'jsAccordionSimple';
    var CONST_CLASSES = {
        element: PREF,
        initClass: PREF + '_initialized',
        block: PREF + '__block',
        switcher: PREF + '__switcher',
        panel: PREF + '__panel',
    };

    var AccordionSimple = function(element, config) {
        var self,
            $element = $(element),
            $window = $(window),
            $html = $('html'),
            isAnimated = false;

        var attrCollapsed = $element.attr('data-clap-collapsed');
        var collapsed = (attrCollapsed === 'true' || attrCollapsed === 'false') ? attrCollapsed === 'true' : config.collapsed;

        var callbacks = function() {
                /** track events */
                $.each(config, function(key, value) {
                    if (typeof value === 'function') {
                        $element.on('accordionSimple.' + key, function(e, param) {
                            return value(e, $element, param);
                        });
                    }
                });
            },
            open = function($panel) {
                if (!$panel.length) return;

                // console.log('>>>open<<<');

                // Вторым аргументо передать функцию обратного вызова
                var callback = arguments[1];

                // Вызов события перед открытием текущей панели
                $element.trigger('accordionSimple.beforeOpen');

                // Добавить класс на активные элементы
                $panel.closest(config.block).addClass(config.modifiers.activeClass);

                // Открыть панель
                // 1) Все закрытые РОДИТЕЛЬСКИЕ ПАНЕЛИ открыть без анимации
                // Открывать родительские Панели необходимо, если, например, открывается вложенная Панель методом "open"
                $panel
                    .parentsUntil($element, config.panel + ':hidden').show()

                    // Указать в data-атрибуте, что РОДИТЕЛЬСКАЯ ПАНЕЛЬ открыта
                    .data('active', true).attr('data-active', true).end()

                    // Добавить активный класс на РОДИТЕЛЬСКИЕ БЛОКИ
                    .parentsUntil($element, config.block).addClass(config.modifiers.activeClass).end()

                    // Открыть ТЕКУЩУЮ ПАТЕЛЬ с анимацией
                    .slideDown(config.duration, function() {
                        // Указать в data-атрибуте, что текущая патель открыта
                        $(this).data('active', true).attr('data-active', true);

                        // Вызов события после открытия текущей панели
                        $element.trigger('accordionSimple.afterOpen');

                        // Вызов callback функции после открытия панели
                        if (typeof callback === 'function') {
                            callback();
                        }
                    });

                if (collapsed) {
                    // Проверить у соседей всех родительских Элементов наличие активных Панелей
                    // Закрыть эти Панели
                    var $siblingsPanel = $panel.parentsUntil($element, config.block).siblings().find(config.panel).filter(function() {
                        return $(this).data('active');
                    });

                    closePanel($siblingsPanel, function() {
                        isAnimated = false; // Анимация завершена
                    });
                }
            },
            close = function($panel) {
                if (!$panel.length) {
                    return;
                }
                // Закрыть отдельно все вложенные активные панели,
                // И отдельно текущую панель.
                // Это сделано с целью определения события закрытия текущей панели отдельно.

                if (collapsed) {
                    // Закрыть активные панели внутри текущей
                    var $childrenOpenedPanel = $(config.panel, $panel).filter(function() {
                        return $(this).data('active');
                    });

                    closePanel($childrenOpenedPanel);
                }

                // Закрыть текущую панель
                // Вызов события перед закрытием текущей панели
                $element.trigger('accordionSimple.beforeClose');

                var callback = arguments[1];

                closePanel($panel, function() {
                    // Вызов события после закрытия текущей панели
                    $element.trigger('accordionSimple.afterClose');

                    // Вызов callback функции после закрытия панели
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            },
            closePanel = function($panel) {
                // console.log('>>>close<<<');
                var callback = arguments[1];

                // Удалить активный класс со всех элементов
                $panel.closest(config.block).removeClass(config.modifiers.activeClass);

                // Закрыть панель
                $panel
                    .slideUp(config.duration, function() {
                        // Указать в data-атрибуте, что панель закрыта
                        $(this).data('active', false).attr('data-active', false);

                        // Вызов события после закрытия каждой панели
                        $element.trigger('accordionSimple.afterEachClose');

                        // Вызов callback функции после закрытия панели
                        if (typeof callback === 'function') {
                            callback();
                        }
                    });
            },
            togglePanel = function() {
                $(config.switcher).on('click', function(event) {

                    // Если в настройках указанно условые отключения аккордеона,
                    // то при выполнении этого условия дальнеейшее выполнение функции прекратить
                    if (config.destroy) {
                        // При этом, если условие является функцией, то вызывается эта функция,
                        var cond = (typeof config.destroy.condition === 'function') ? config.destroy.condition() : config.destroy.condition;

                        if (cond) return;
                    }

                    // Если панель во время клика находится в процессе анимации, то выполнение функции прекратить
                    // Если переключатель является ссылкой, переход по ссылке НЕ произойдет
                    if (isAnimated) {
                        event.preventDefault();
                        return false;
                    }

                    // Если текущий пункт не содержит панелей, то выполнение функции прекратить
                    // Если переключатель является ссылкой, переход по ссылке произойдет
                    var $currentSwitcher = $(this);
                    if (!$currentSwitcher.closest(config.block).has(config.panel).length) {
                        return false;
                    }

                    // Начало анимирования панели
                    isAnimated = true;

                    // Если переключатель является ссылкой, переход по ссылке НЕ произойдет
                    event.preventDefault();

                    var $currentPanel = $currentSwitcher.closest(config.switcher).siblings(config.panel);

                    if ($currentPanel.data('active')) {
                        // Закрыть текущую панель
                        close($currentPanel, function() {
                            // Анимированные панели закончено
                            isAnimated = false;
                        });
                    } else {
                        // Открыть текущую панель
                        open($currentPanel, function() {
                            // Анимированные панели закончено
                            isAnimated = false;
                        });
                    }
                });
            },
            init = function() {
                // Развернуть ВИДИМЫЕ ПАНЕЛИ без анимации
                var $visibleDrop = $(config.panel, $element);

                $visibleDrop.filter(':visible')
                    .show().data('active', true).attr('data-active', true);

                $visibleDrop.filter(':visible')
                    .closest(config.block).addClass(config.modifiers.activeClass);

                // Добавить внутренние классы на:
                if (config.pluginClasses) {
                    // Контейнер аккордеона
                    $element.addClass(CONST_CLASSES.element);

                    // Блок
                    $(config.block, $element).addClass(CONST_CLASSES.block);

                    // Переключатель
                    var $switcher = $(config.switcher, $element);
                    $switcher.addClass(CONST_CLASSES.switcher);

                    // Панель
                    $(config.panel, $element).addClass(CONST_CLASSES.panel);
                }

                // Добавить tabindex на переключатели
                if (config.switchersTabindex) {
                    $switcher.addClass(CONST_CLASSES.switchersTabindex).attr('tabindex', 0);
                }

                // Add initialization class
                $element.toggleClass(CONST_CLASSES.initClass, config.pluginClasses);

                // Fire event after initialization
                $element.trigger('accordionSimple.afterInit');
            };

        self = {
            callbacks: callbacks,
            togglePanel: togglePanel,
            init: init
        };

        return self;
    };

    function _run(el) {
        el.accordionSimple.callbacks();
        el.accordionSimple.togglePanel();
        el.accordionSimple.init();
    }

    $.fn.accordionSimple = function() {
        var self = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = self.length,
            i,
            ret;

        // Обойти все выбранные элементы по отдельности
        // и создань инстансы для каждого из них.
        // Косвенно for предохраняет от попытки
        // создания экземпляра объекта на несуществующем элементе,
        // так как l в таком случае будет равно 0, переменная i также равна 0,
        // следовательно условие i < l не выполнится
        for (i = 0; i < l; i++) {
            if (typeof opt === 'object' || typeof opt === 'undefined') {
                if (self[i].accordionSimple) {
                    console.info("%c Warning! Plugin already has initialized! ", 'background: #bd0000; color: white');
                    return;
                }

                self[i].accordionSimple = new AccordionSimple(self[i], $.extend(true, {}, $.fn.accordionSimple.defaultOptions, opt));

                _run(self[i]);
            } else {
                ret = self[i].accordionSimple[opt].apply(self[i].accordionSimple, args);
            }
            if (typeof ret !== 'undefined') {
                return ret;
            }
        }
        return self;
    };

    $.fn.accordionSimple.defaultOptions = {
        // Дефолтные значения указаны для следующей структуры DOM:
        // ====================================================
        // <ul>     - аккордеон - ЭЛЕМЕНТ
        //   <li>   - элемент аккордеона (block), пара переключателя и панели - БЛОК
        //     <a>  - заголовок - ЗАГОЛОВОК
        //     <em>  - стрелка (switcher), или другой элемент переключающий панели - ПЕРЕКЛЮЧАТЕЛЬ
        //     <ul> - панель (panel) - ПАНЕЛЬ
        block: 'li',
        switcher: 'li > em',
        panel: 'ul',

        // Параметр, указывающий на необходимось сворачивать ранее открытые Панели
        collapsed: true,

        // Скорость анимации Панели
        duration: 300,

        // Добавить tabindex на элемент переключающий панели
        switchersTabindex: false,

        // Условие, при котором аккордеон не реагирует на события.
        // При этом, если условие является функцией, то проверка производится при каждом вызоме,
        // а если - простотым значение, то при загрузке страницы.
        destroy: false,
        // destroy: {
        //   condition: window.innerWidth >= 992,
        // },

        modifiers: {
            activeClass: 'is-open' // Класс, который добавляется, на активный элементы
        }
    };

})(window, document, jQuery);

/* Navigation plugin */
(function(window, document, $, undefined) {
    'use strict';

    var $window = $(window),
        $document = $(document);

    // Inner Plugin Classes and Modifiers
    // ====================================================
    var PREF = 'jsNav';
    var CONST_CLASSES = {
        element: PREF,
        initClass: PREF + '_initialized',
        item: PREF + '__item',
        drop: PREF + '__drop',
        arrow: PREF + '__arrow',
        arrowEnable: PREF + '__arrow_on',
    };

    var Nav = function(element, config) {
        var self,
            $element = $(element),
            $html = $('html'),
            _classIsAdded = false,
            timeoutAdd,
            timeoutRemove;

        // Время задержки добавления/удаления классов
        // ====================================================
        timeoutAdd = timeoutRemove = config.timeout;
        if (typeof config.timeout === "object") {
            timeoutAdd = config.timeout.add;
            timeoutRemove = config.timeout.remove;
        }

        // Resize, scroll with timeout
        var timeoutEvent;
        $window.on('resize scroll', function(e) {
            clearTimeout(timeoutEvent);

            timeoutEvent = setTimeout(function() {
                if (e.handleObj.origType === "resize") {
                    $window.trigger('rangeResize');
                }
                if (e.handleObj.origType === "scroll") {
                    $window.trigger('rangeScroll');
                }
            }, 300);
        });

        var callbacks = function() {
                /** track events */
                $.each(config, function(key, value) {
                    if (typeof value === 'function') {
                        $element.on('nav.' + key, function(e, param) {
                            return value(e, $element, param);
                        });
                    }
                });
            },
            /*Position submenu*/
            addPositionClasses = function(position, feedback, $elem) {
                removePositionClasses($elem);
                $elem.addClass(feedback.horizontal + ' ' + feedback.vertical + ' ' + feedback.important)
                    .css(position);
            },
            removePositionClasses = function($elem) {
                $elem
                    .removeClass('top')
                    .removeClass('right')
                    .removeClass('bottom')
                    .removeClass('left')
                    .removeClass('center')
                    .removeClass('horizontal')
                    .removeClass('vertical');
            },
            uiPosition = function(el, at) {
                $.each(el, function() {
                    var el = $(this);
                    var parent = el.closest(config.item);
                    // console.log("at: ", at);
                    el.position({
                        my: "left top",
                        at: at,
                        collision: "flip flip",
                        of: parent,
                        using: function(position, feedback) {
                            addPositionClasses(position, feedback, el);
                        }
                    })
                })
            },
            dropPosition = function() {
                var $childrenDrop = $element.children(config.item).children(config.drop);
                var $childrenDropDeeper = $childrenDrop.find(config.drop);

                if (config.accordionView && window.innerWidth < config.accordionView.breakpoint) {
                    $childrenDrop.add($childrenDropDeeper).css({
                        'position': '',
                        'top': '',
                        'right': '',
                        'bottom': '',
                        'left': ''
                    });
                    removePositionClasses($childrenDrop.add($childrenDropDeeper));
                } else {
                    // Подменю первого уровня
                    uiPosition($childrenDrop, config.submenuPosition.firstLevel);
                    // Подменю второго уровня
                    uiPosition($childrenDropDeeper, config.submenuPosition.deeperLevel);
                }
            },
            recalculateDropPosition = function() {
                if (config.submenuPosition && config.submenuPosition.observe) {
                    // Recalculate on resize
                    $window.on('rangeResize', function() {
                        dropPosition();
                    });

                    // Recalculate on scroll
                    $window.on('rangeScroll', function() {
                        dropPosition();
                    });
                }
            },
            /*Timeout functions*/
            createTimeoutAddClass = function() {
                var $item = arguments[0] || $(config.item, $element);

                // ЗАПУСТИТЬ функцию ДОБАВЛЕНИЯ класса С ЗАДЕРЖКОЙ
                // (одновременно записав ее в аттрибут 'addClassWithTimeout')
                // ====================================================
                $item.prop('addClassWithTimeout', setTimeout(function() {
                    addClassesTo($item);
                }, timeoutAdd));
            },
            clearTimeoutAddClass = function() {
                var $item = arguments[0] || $(config.item, $element);

                var addClassWTO = $item.prop('addClassWithTimeout');
                if (addClassWTO) {
                    $item.prop('addClassWithTimeout', clearTimeout(addClassWTO));
                }
            },
            createTimeoutRemoveClass = function() {
                var $item = arguments[0] || $(config.item, $element);

                // ЗАПУСТИТЬ функцию УДАЛЕНИЯ класса С ЗАДЕРЖКОЙ
                // (одновременно записав ее в аттрибут 'removeClassWithTimeout')
                // ====================================================
                $item.prop('removeClassWithTimeout', setTimeout(function() {
                    removeClassesFrom($item);
                }, timeoutRemove));
            },
            clearTimeoutRemoveClass = function() {
                var $item = arguments[0] || $(config.item, $element);

                var removeTimeoutWTO = $item.prop('removeClassWithTimeout');
                if (removeTimeoutWTO) {
                    $item.prop('removeClassWithTimeout', clearTimeout(removeTimeoutWTO));
                }
            },
            /*Add and remove classes*/
            addClassesTo = function() {
                var $item = arguments[0];

                if ($item.length) {
                    if (config.submenuPosition) {
                        dropPosition();
                    }

                    $item
                        .addClass(config.modifiers.hover)
                        .prop('isActive', true);

                    if (config.siblings) {
                        $item.next().addClass(config.modifiers.hoverNext);
                        $item.prev().addClass(config.modifiers.hoverPrev);
                    }

                    _classIsAdded = true;

                    $element.trigger('nav.afterHover', $item);
                    // console.log("~~ class hover added: ", $item);
                }
            },
            removeClassesFrom = function() {
                var $item = arguments[0] || $(config.item, $element);

                if ($item.length) {

                    $item
                        .removeClass(config.modifiers.hover)
                        .prop('isActive', false);

                    if (config.siblings) {
                        $item.next().removeClass(config.modifiers.hoverNext);
                        $item.prev().removeClass(config.modifiers.hoverPrev);
                    }

                    _classIsAdded = false;

                    $element.trigger('nav.afterLeave', $item);
                    // console.log("~~ class hover removed: ", $item);
                }
            },
            /*Immediate add and remove classes*/
            forceAddClassTo = function() {
                var $item = arguments[0] || $(config.item, $element);

                // Перебрать все элементы
                // ====================================================
                $.each($item, function() {
                    var $eachCurItem = $(this);

                    // Отметить добавление класса с задержкой
                    // ====================================================
                    clearTimeoutAddClass($eachCurItem);

                    // Добавить класс без задержки
                    // ====================================================
                    if (!$eachCurItem.prop('isActive')) {
                        addClassesTo($eachCurItem);
                    }
                });
            },
            forceRemoveClassFrom = function() {
                var $item = arguments[0] || $(config.item, $element);
                // Если вторым параметром передать true, классы будут удалены и с дочерних пунктов
                var cond = arguments[1];

                // Перебрать все элементы
                // ====================================================
                $.each($item, function() {
                    var $eachCurItem = $(this);

                    // Отметить удаление класса с задержкой
                    // ====================================================
                    clearTimeoutRemoveClass($eachCurItem);

                    // Удалить класс без задержки
                    // ====================================================
                    if ($eachCurItem.prop('isActive')) {
                        removeClassesFrom($eachCurItem);
                    }

                    // Чтобы провести очиску и в дочерних элементах,
                    // нужно передать на вход функции вторым аргументом "true"
                    if (cond) {
                        // Перебрать всех детей активных пунктов
                        // ====================================================
                        $.each($eachCurItem.find(config.item), function() {
                            var $eachCurChild = $(this);

                            // Отметить удаление класса с задержкой
                            // ====================================================
                            clearTimeoutRemoveClass($eachCurChild);

                            // Удалить класс без задержки
                            // ====================================================
                            if ($eachCurChild.prop('isActive')) {
                                removeClassesFrom($eachCurChild);
                            }
                        });
                    }
                });
            },
            /*Clear classes*/
            removeOnResize = function() {
                var resizeByWidth = true;
                var prevWidth = -1;
                $window.on('rangeResize', function() {
                    var currentWidth = $('body').outerWidth();
                    resizeByWidth = prevWidth !== currentWidth;
                    if (resizeByWidth) {
                        removeClassesFrom($(config.item, $element).filter('.' + config.modifiers.hover));

                        // console.log('%c >>>remove by WIDTH RESIZE<<<', 'background-color: #00f1ff; color: #ff1515');
                        // $(window).trigger('resizeByWidth');
                        prevWidth = currentWidth;
                    }
                });
            },
            removeByClickOutside = function() {
                $html.on('click', function(event) {

                    if (!_classIsAdded || $(event.target).closest($(config.item)).length) return;

                    // console.log('%c >>>remove by click OUTSIDE<<<', 'background-color: #00f1ff; color: #ff1515');

                    forceRemoveClassFrom();
                });
            },
            removeByClickEsc = function() {
                $html.keyup(function(event) {
                    if (_classIsAdded && event.keyCode === 27) {

                        // console.log('%c >>>remove by click ESC<<< ', 'background-color: #00f1ff; color: #ff1515');

                        forceRemoveClassFrom();
                    }
                });

                return false;
            },
            /*Main events*/
            toggleActiveClass = function() {
                var $item = $(config.item, $element);

                // Обработка событий прикосновения к тачскрину,
                // а также ввода и вывода курсора
                // ====================================================
                $element
                    .off('touchend mouseenter mouseleave', config.item)
                    .on('touchend mouseenter mouseleave', config.item, function(e) {

                        // console.log('%c ~~~' + e.handleObj.origType + '~~~ ', 'background: #222; color: #bada55');

                        var $curItem = $(this);

                        // Если в настройках не отключена трансформация навигации с десктопного вида в мобильный (accordionView: false),
                        // то при ширине окна браузера ниже указанного в опции "accordionView.breakpoint"
                        // дальнейшее выполнение функции прервать.
                        // ====================================================
                        if (config.accordionView && window.innerWidth < config.accordionView.breakpoint) return;

                        // Также выполнение функции прекратить если:
                        // 1) в настройках указанно, что нужно проводить проверку на наличие подменю,
                        // 2) и текущий пункт не содержит подменю.
                        // ====================================================
                        if (config.onlyHasDrop && !$curItem.has(config.drop).length) return;

                        // Родительские пункты текущего пункта
                        // ====================================================
                        var $curParentItems = $curItem.parentsUntil($element, config.item);

                        // События на TOUCHEND (для тачскринов)
                        // ====================================================
                        if (e.handleObj.origType === "touchend" && !config.arrowEnable) {
                            // console.log('%c >>>touchend<<< ', 'background: #222; color: #bada55');

                            if (!$curItem.prop('isActive')) {
                                // Если пункт НЕАКТИВЕН
                                // ====================================================

                                // Удалить БЕЗ ЗАДЕРЖКИ классы hover со ВСЕХ активных пунктов,
                                // кроме ТЕКУЩЕГО.
                                // ====================================================
                                if (!e.stopEventTouchend) {
                                    e.stopEventTouchend = true;
                                    removeClassesFrom($item.filter('.' + config.modifiers.hover).not($curItem));
                                }

                                // Если текущий пункт не содержит подменю,
                                // то выполнение функции прекратить
                                // !!! Эта проверка проводится в самом конце,
                                //     чтобы можно было удалять активные классы
                                //     при клике на любой пункт, а не только
                                //     содержащий в себе подменю.
                                // ====================================================
                                if (!$curItem.has(config.drop).length) return;

                                // Добавить классы hover на ТЕКУЩИЙ пункт
                                // ====================================================
                                addClassesTo($curItem);

                                e.preventDefault();

                                return;
                            }
                        }

                        // События на ВВОД курсора
                        // ====================================================
                        if (e.handleObj.origType === "mouseenter") {
                            // console.log('%c >>>mouseenter<<< ', 'background: #222; color: #bada55');

                            // Перед добавлением класса
                            // ОТМЕНЯЕМ УДАЛЕНИЕ класса С ЗАДЕРЖКОЙ c текущего пункта.
                            // Так как событие всплывая отрабатывает и на РОДИТЕЛЬСКИХ пунктах,
                            // то и на них будут отменены УДАЛЕНИЯ класса С ЗАДЕРЖКОЙ,
                            // которые запускаются на событии "mouseleave".
                            // ====================================================
                            clearTimeoutRemoveClass($curItem);

                            // Отлавливать событие нужно только на последнем пункте
                            // Для этого добавим в объект "stopEventMouseenter"
                            // и проверяем при всплытие события наличие этого свойства.
                            if (e.stopEventMouseenter) return;
                            e.stopEventMouseenter = true;

                            // Если пункт УЖЕ АКТИВЕН,
                            // то повторный ввод курсора в его область
                            // останавливает дальнейшее выполнение функции
                            if ($curItem.prop('isActive')) return;

                            // Удалить БЕЗ ЗАДЕРЖКИ все классы hover со всех активных пунктов,
                            // кроме ТЕКУЩЕГО и РОДИТЕЛЬСКИХ.
                            // ====================================================
                            forceRemoveClassFrom($item.filter('.' + config.modifiers.hover).not($curItem).not($curParentItems));

                            // ЗАПУСТИТЬ функцию ДОБАВЛЕНИЯ класса С ЗАДЕРЖКОЙ
                            // ====================================================
                            createTimeoutAddClass($curItem);

                            return;
                        }

                        // События на ВЫВОД курсора
                        // ====================================================
                        if (e.handleObj.origType === "mouseleave") {
                            // console.log('%c >>>mouseleave<<< ', 'background: #222; color: #bada55');

                            // Перед удалением класса нужно
                            // ОТМЕНИТЬ ДОБАВЛЕНИЕ класса С ЗАДЕРЖКОЙ c текущего пункта,
                            // если функция добавления запущена.
                            // ====================================================
                            clearTimeoutAddClass($curItem);

                            // Удалить классы hover
                            // с ТЕКУЩЕГО и РОДИТЕЛЬСКИХ пунктов
                            // ЗАПУСТИТЬ функцию УДАЛЕНИЯ класса С ЗАДЕРЖКОЙ
                            // ====================================================
                            createTimeoutRemoveClass($curItem);
                        }
                    });

                // Обработка события клика по стрелке
                // ====================================================
                config.arrowEnable &&
                    $element.off('click', config.arrow)
                    .on('click', config.arrow, function(e) {
                        // Если в настройках не отключена трансформация навигации с десктопного вида в мобильный (accordionView: false),
                        // то при ширине окна браузера ниже указанного в опции "accordionView.breakpoint"
                        // дальнейшее выполнение функции прервать.
                        // ====================================================
                        if (config.accordionView && window.innerWidth < config.accordionView.breakpoint) return;

                        var $curItem = $(this).closest(config.item);

                        // Также выполнение функции прекратить если:
                        // 1) в настройках указанно, что нужно проводить проверку на наличие подменю,
                        // 2) и текущий пункт не содержит подменю.
                        // ====================================================
                        if (config.onlyHasDrop && !$curItem.has(config.drop).length) return;

                        // console.log('%c >>>arrow click<<< ', 'background: #222; color: #bada55');

                        // console.log("$curItem.prop('isActive'): ", $curItem.prop('isActive'));
                        if (!$curItem.prop('isActive')) {
                            // Если пункт НЕАКТИВЕН
                            // ====================================================

                            // Удалить БЕЗ ЗАДЕРЖКИ классы hover со ВСЕХ активных пунктов,
                            // кроме ТЕКУЩЕГО и РОДИТЕЛЬСКИХ.
                            // ====================================================
                            var $curParentItems = $curItem.parentsUntil($element, config.item);
                            forceRemoveClassFrom($item.filter('.' + config.modifiers.hover).not($curItem).not($curParentItems));

                            /// ДОБАВИТЬ класс hover на ТЕКУЩИЙ пунт С ЗАДЕРЖКОЙ
                            // ====================================================
                            forceAddClassTo($curItem);
                        } else {
                            // УДАЛИТЬ классы hover с ТЕКУЩЕГО пунта и ДОЧЕРНИХ БЕЗ ЗАДЕРЖКИ
                            // ====================================================
                            forceRemoveClassFrom($curItem, true);
                        }

                        e.preventDefault();
                    })
            },
            /*Initialize*/
            init = function() {
                // Container
                $element.addClass(CONST_CLASSES.element);

                // Item
                $(config.item, $element).addClass(CONST_CLASSES.item);

                // Submenu
                $(config.drop, $element).addClass(CONST_CLASSES.drop);

                // Arrow
                var $arrow = $(config.arrow, $element);
                $arrow.addClass(CONST_CLASSES.arrow);

                // Add tabindex to arrows
                if (config.arrowEnable) {
                    $arrow.addClass(CONST_CLASSES.arrowEnable).attr('tabindex', 0);
                }

                // Position
                if (config.submenuPosition) {
                    dropPosition();
                }

                // Initialize accordion
                $element.accordionSimple({
                    block: config.item,
                    switcher: config.arrow,
                    panel: config.drop,
                    duration: config.accordion.duration,
                    switchersTabindex: false,
                    destroy: {
                        condition: function() {
                            return (config.accordionView && window.innerWidth >= config.accordionView.breakpoint);
                        },
                    },
                    pluginClasses: false,
                    modifiers: {
                        activeClass: config.accordion.classOpen
                    }
                });

                // Add initialization class
                $element.addClass(CONST_CLASSES.initClass);

                // Fire event after initialization
                $element.trigger('nav.afterInit');
            };

        self = {
            callbacks: callbacks,
            recalculateDropPosition: recalculateDropPosition,
            toggleActiveClass: toggleActiveClass,
            clearHoverClassOnResize: removeOnResize,
            removeByClickOutside: removeByClickOutside,
            removeByClickEsc: removeByClickEsc,
            init: init
        };

        return self;
    };

    function _run(el) {
        el.nav.callbacks();
        el.nav.recalculateDropPosition();
        el.nav.toggleActiveClass();
        el.nav.clearHoverClassOnResize();
        el.nav.removeByClickOutside();
        el.nav.removeByClickEsc();
        el.nav.init();
    }

    $.fn.nav = function() {

        var self = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = self.length,
            i,
            ret;

        for (i = 0; i < l; i++) {
            if (typeof opt === 'object' || typeof opt === 'undefined') {
                if (self[i].nav) {
                    console.info("%c Warning! Plugin already has initialized! ", 'background: #bd0000; color: white');
                    return;
                }
                self[i].nav = new Nav(self[i], $.extend(true, {}, $.fn.nav.defaultOptions, opt));

                _run(self[i]);
            } else {
                ret = self[i].nav[opt].apply(self[i].nav, args);
            }
            if (typeof ret !== 'undefined') {
                return ret;
            }
        }
        return self;
    };

    $.fn.nav.defaultOptions = {
        // Дефолтные значения указаны для
        // следующей структуры DOM:
        // ====================================================
        // <ul>     - меню (container)
        //   <li>   - пункт меню (item)
        //     <a>  - ссылка
        //     <em>  - стрелка (arrow)
        //     <ul> - подменю (drop)
        // ====================================================
        item: 'li',
        drop: 'ul',
        arrow: 'li > a + em',

        // Добавлять классы только на пункты
        // имеющие подпункты
        onlyHasDrop: false,

        // Устанавливать дополнительные классы
        // на соседние пункты активного
        siblings: false,

        // Задержка перед добавлением/удалением класса
        // По умолчанию 50ms
        // Можно указать отдельно для добавления и удаления класса
        // timeout: {
        //   add: 50,
        //   remove: 500
        // }
        // timeout: 50
        timeout: 50,

        // Использовать jQuery UI Position
        // для смещения подменю, в случае выхода за прделы экрана
        // Необходимо подключать jQuery UI
        submenuPosition: {
            firstLevel: 'left bottom',
            deeperLevel: 'right top',
            // Пересчитывать позицию подменю на ресайз и скролл
            observe: false,
        },

        // Активировать стрелки.
        // -----------------------------------------------------------------------------------
        // Если значение "arrowEnable" равно "false" (дефолтное значение):
        // - На ДЕСКТОПЕ переключение класса будет происходить только на ховер с указанной задержкой (см. опицию timeout).
        // - На тачскрине по первому клику добавится класс, а по второму произойдет переход по ссылке.
        //   Для удаления класса, кликнуть вне меню.
        // -----------------------------------------------------------------------------------
        // Если значение "arrowEnable" равно "true":
        // - На ДЕСКТОПЕ переключение класса будет происходить на ховер с указанной задержкой (см. опицию timeout),
        //   а при клике на стрелку - без задержки.
        // - На тачскрине переключение класса будет происходить только по клику на стрелку.
        arrowEnable: false,

        // Навигация трансформируется в аккордеон
        accordionView: {
            // Точка, ниже которой навигация трансформируется в аккордеон
            // Необходимо укзывать всегда, если она отлична от дефолтного значения 991px
            breakpoint: 992,
        },

        // Насторойки аккордеона
        accordion: {
            classOpen: 'is-open',
            duration: 300,
        },

        // Классы-модификаторы
        modifiers: {
            hover: 'hover',
            hoverNext: 'hover_next',
            hoverPrev: 'hover_prev',
        },
    };

})(window, document, jQuery);
/*!==================================================
/*!jquery.switch-class.js
/*!Version: 2.0
/*!Description: Extended toggle class
/*!==================================================*/

;
(function($) {
    'use strict';

    // Нужно для корректной работы с доп. классом блокирования скролла
    var countFixedScroll = 0;

    // Inner Plugin Modifiers
    var CONST_MOD = {
        instanceClass: 'swc-instance',
        initClass: 'swc-initialized',
        activeClass: 'swc-active',
        preventRemoveClass: 'swc-prevent-remove'
    };

    // Class definition
    // ================

    var SwitchClass = function(element, config) {
        var self = this,
            elem;
        self.element = element;
        self.config = config;
        self.mixedClasses = {
            initialized: CONST_MOD.initClass + ' ' + (config.modifiers.initClass || ''),
            active: CONST_MOD.activeClass + ' ' + (config.modifiers.activeClass || ''),
            scrollFixedClass: 'css-scroll-fixed'
        };
        self.$switchClassTo = $(config.toggleEl).add(config.addEl).add(config.removeEl).add(config.switchClassTo);
        self._classIsAdded = false;
    };

    $.extend(SwitchClass.prototype, {
        callbacks: function() {
            var self = this;
            /** track events */
            $.each(self.config, function(key, value) {
                if (typeof value === 'function') {
                    $(self.element).on('switchClass.' + key, function(e, param) {
                        return value(e, $(self.element), param);
                    });
                }
            });
        },
        prevent: function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        },
        toggleFixedScroll: function() {
            var self = this;
            $('html').toggleClass(self.mixedClasses.scrollFixedClass, !!countFixedScroll);
        },
        add: function() {
            var self = this;
            var $currentEl = self.config.selector ? $(self.config.selector) : $(self.element);

            if (self._classIsAdded) return;

            // Callback before added class
            // $(self.element)
            $currentEl
                .trigger('switchClass.beforeAdd')
                .trigger('switchClass.beforeChange');

            if (self.config.removeExisting) {
                $.switchClass.remove(true);
            }

            // Добавить активный класс на:
            // 1) Основной элемент
            // 2) Дополнительный переключатель
            // 3) Элементы указанные в настройках экземпляра плагина
            $currentEl.add(self.$switchClassTo)
                .addClass(self.mixedClasses.active);

            // Сохранить в дата-атрибут текущий объект this
            // $(self.element).data('SwitchClass', self);
            $currentEl.addClass(CONST_MOD.instanceClass).data('SwitchClass', self);

            self._classIsAdded = true;

            if (self.config.cssScrollFixed) {
                // Если в настойках указано, что нужно добавлять класс фиксации скролла,
                // То каждый раз вызывая ДОБАВЛЕНИЕ активного класса, увеличивается счетчик количества этих вызовов
                ++countFixedScroll;
                self.toggleFixedScroll();
            }

            // callback after added class
            // $(self.element)
            $currentEl
                .trigger('switchClass.afterAdd')
                .trigger('switchClass.afterChange');
        },
        remove: function() {
            var self = this;
            var $currentEl = self.config.selector ? $(self.config.selector) : $(self.element);

            if (!self._classIsAdded) return;

            // callback beforeRemove
            $currentEl
                .trigger('switchClass.beforeRemove')
                .trigger('switchClass.beforeChange');

            // Удалять активный класс с:
            // 1) Основной элемент
            // 2) Дополнительный переключатель
            // 3) Элементы указанные в настройках экземпляра плагина
            $currentEl.add(self.$switchClassTo)
                .removeClass(self.mixedClasses.active);

            // Удалить дата-атрибут, в котором хранится объект
            $currentEl.removeClass(CONST_MOD.instanceClass).removeData('SwitchClass');

            self._classIsAdded = false;

            if (self.config.cssScrollFixed) {
                // Если в настойках указано, что нужно добавлять класс фиксации скролла,
                // То каждый раз вызывая УДАЛЕНИЕ активного класса, уменьшается счетчик количества этих вызовов
                --countFixedScroll;
                self.toggleFixedScroll();
            }

            // callback afterRemove
            $currentEl
                .trigger('switchClass.afterRemove')
                .trigger('switchClass.afterChange');
        },
        events: function() {
            var self = this;

            function _toggleClass(e) {
                if (self._classIsAdded) {
                    self.remove();

                    e.preventDefault();
                    return false;
                }

                self.add();

                self.prevent(e);
            }

            if (self.config.selector) {
                $(self.element)
                    .off('click', self.config.selector)
                    .on('click', self.config.selector, _toggleClass);
            } else {
                $(self.element)
                    .off('click')
                    .on('click', _toggleClass);
            }

            $(self.config.toggleEl).on('click', _toggleClass);

            $(self.config.addEl).on('click', function(event) {
                self.add();
                self.prevent(event);
            });

            $(self.config.removeEl).on('click', function(event) {
                self.remove();
                self.prevent(event);
            })

        },
        removeByClickOutside: function() {
            var self = this;

            $('html').on('click', function(event) {

                if ($(event.target).closest('.' + CONST_MOD.preventRemoveClass).length) {
                    return;
                }

                if ($(event.target).closest('[data-swc-prevent-remove]').length) {
                    return;
                }

                if (self.config.preventRemoveClass && $(event.target).closest('.' + self.config.preventRemoveClass).length) {
                    return;
                }

                if (self._classIsAdded && self.config.removeOutsideClick) {
                    self.remove();
                }
            });
        },
        removeByClickEsc: function() {
            var self = this;

            $('html').keyup(function(event) {
                if (self._classIsAdded && self.config.removeEscClick && event.keyCode === 27) {
                    self.remove();
                }
            });
        },
        init: function() {
            var self = this;
            var $currentEl = self.config.selector ? $(self.config.selector) : $(self.element);

            if ($currentEl.hasClass(self.config.modifiers.activeClass) || $currentEl.hasClass(CONST_MOD.activeClass)) {
                self.add();
            }

            $currentEl.addClass(self.mixedClasses.initialized);
            $currentEl.trigger('switchClass.afterInit');
        }
    });

    $.switchClass = {
        version: "2.0",
        getInstance: function(command) {
            var instance = $('.' + CONST_MOD.instanceClass + '.' + CONST_MOD.activeClass + ':last').data("SwitchClass"),
                args = Array.prototype.slice.call(arguments, 1);

            if (instance instanceof SwitchClass) {
                if ($.type(command) === "string") {
                    instance[command].apply(instance, args);
                } else if ($.type(command) === "function") {
                    command.apply(instance, args);
                }

                return instance;
            }

            return false;
        },
        remove: function(all) {
            // Получить текущий инстанс
            var instance = this.getInstance();

            // Если инстанс существует
            if (instance) {

                instance.remove();

                // Try to find and close next instance
                // 2) Если на вход функуии передан true,
                if (all === true) {
                    // то попитаться найти следующий инстанс и запустить метод .close для него
                    this.remove(all);
                }
            }
        },
    };

    function _run(el) {
        el.switchClass.callbacks();
        el.switchClass.events();
        el.switchClass.removeByClickOutside();
        el.switchClass.removeByClickEsc();
        el.switchClass.init();
    }

    $.fn.switchClass = function(options) {
        var self = this,
            args = Array.prototype.slice.call(arguments, 1),
            l = self.length,
            i,
            ret;

        for (i = 0; i < l; i++) {
            if (typeof options === 'object' || typeof options === 'undefined') {
                self[i].switchClass = new SwitchClass(self[i], $.extend(true, {}, $.fn.switchClass.defaultOptions, options));
                _run(self[i]);
            } else {
                ret = self[i].switchClass[options].apply(self[i].switchClass, args);
            }
            if (typeof ret !== 'undefined') {
                return ret;
            }
        }
        return self;
    };

    $.fn.switchClass.defaultOptions = {
        // Remove existing classes
        // Set this to false if you do not need to stack multiple instances
        removeExisting: false,

        // Бывает необходимо инициализировать плагин на динамически добавленном элемента.
        // Чтобы повесить на этот элемент событие, нужно добавить его через совойство selector
        // Example:
        // $('.parents-element').switchClass({
        //     selector : '.box a.opener:visible'
        // });
        selector: null,

        // Дополнительный элемент, которым можно ДОБАВЛЯТЬ класс
        // Example: '.some-class-js' or $('.some-class-js')
        addEl: null,

        // Дополнительный элемент, которым можно УДАЛЯТЬ класс
        // Example: '.some-class-js' or $('.some-class-js')
        removeEl: null,

        // Дополнительный элемент, которым можно ДОБАВЛЯТЬ/УДАЛЯТЬ класс
        // Example: '.some-class-js' or $('.some-class-js')
        toggleEl: null,

        // Один или несколько эелментов, на которые будет добавляться/удаляться активный класс (modifiers.activeClass)
        // Example 1: $('html, .popup-js, .overlay-js')
        // Example 2: $('html').add('.popup-js').add('.overlay-js')
        switchClassTo: null,

        // Удалать класс по клику по пустому месту на странице?
        // Если по клику на определенный элемент удалять класс не нужно,
        // то на этот элемент нужно добавить класс ".swc-prevent-remove" или дата-атрибудт "data-swc-prevent-remove",
        // или класс указанный в параметре "preventRemoveClass"
        // Example: true or false
        removeOutsideClick: true,

        // Удалять класс по клику на клавишу Esc?
        // Example: true or false
        removeEscClick: true,

        // Добавлять на html дополнительный класс 'css-scroll-fixed'?
        // Через этот класс можно фиксировать скролл методами css
        // _mixins.sass, scroll-blocked()
        // Example: true or false
        cssScrollFixed: false,

        // Если кликнуть по элементу с этим классом, то событие удаления активного класса не будет вызвано.
        // По умолчанию можно использовать класс ".swc-prevent-remove" или дата-атрибудт "data-swc-prevent-remove".
        // Example: class = "some-class"
        preventRemoveClass: null,

        // Классы-модификаторы
        modifiers: {
            initClass: null,
            activeClass: 'active'
        }
    };

})(jQuery);
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function(a,b){a(function(){"use strict";function a(a,b){return null!=a&&null!=b&&a.toLowerCase()===b.toLowerCase()}function c(a,b){var c,d,e=a.length;if(!e||!b)return!1;for(c=b.toLowerCase(),d=0;d<e;++d)if(c===a[d].toLowerCase())return!0;return!1}function d(a){for(var b in a)i.call(a,b)&&(a[b]=new RegExp(a[b],"i"))}function e(a){return(a||"").substr(0,500)}function f(a,b){this.ua=e(a),this._cache={},this.maxPhoneWidth=b||600}var g={};g.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo (3DS|Switch)",Amoi:"Amoi",INQ:"INQ",OnePlus:"ONEPLUS",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",GoogleTablet:"Android.*Pixel C",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z930|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b(?!\\))",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9|TECNO DP8D",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",VerizonTablet:"QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",HisenseTablet:"\\b(F5281|E2371)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",iPadOS:"CPU OS 13",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",Skyfire:"Skyfire",Edge:"Mobile Safari/[.0-9]* Edge",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",WeChat:"\\bMicroMessenger\\b",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:["Firefox/[VER]","FxiOS/[VER]"],Fennec:"Fennec/[VER]",Edge:"Edge/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]",UCBrowser:["UCWEB[VER]","UC.*Browser/[VER]"],MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",SamsungBrowser:"SamsungBrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",PaleMoon:"PaleMoon/[VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",Goanna:"Goanna/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},g.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
tabletPattern:/android|ipad|playbook|silk/i};var h,i=Object.prototype.hasOwnProperty;return g.FALLBACK_PHONE="UnknownPhone",g.FALLBACK_TABLET="UnknownTablet",g.FALLBACK_MOBILE="UnknownMobile",h="isArray"in Array?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},function(){var a,b,c,e,f,j,k=g.mobileDetectRules;for(a in k.props)if(i.call(k.props,a)){for(b=k.props[a],h(b)||(b=[b]),f=b.length,e=0;e<f;++e)c=b[e],j=c.indexOf("[VER]"),j>=0&&(c=c.substring(0,j)+"([\\w._\\+]+)"+c.substring(j+5)),b[e]=new RegExp(c,"i");k.props[a]=b}d(k.oss),d(k.phones),d(k.tablets),d(k.uas),d(k.utils),k.oss0={WindowsPhoneOS:k.oss.WindowsPhoneOS,WindowsMobileOS:k.oss.WindowsMobileOS}}(),g.findMatch=function(a,b){for(var c in a)if(i.call(a,c)&&a[c].test(b))return c;return null},g.findMatches=function(a,b){var c=[];for(var d in a)i.call(a,d)&&a[d].test(b)&&c.push(d);return c},g.getVersionStr=function(a,b){var c,d,e,f,h=g.mobileDetectRules.props;if(i.call(h,a))for(c=h[a],e=c.length,d=0;d<e;++d)if(f=c[d].exec(b),null!==f)return f[1];return null},g.getVersion=function(a,b){var c=g.getVersionStr(a,b);return c?g.prepareVersionNo(c):NaN},g.prepareVersionNo=function(a){var b;return b=a.split(/[a-z._ \/\-]/i),1===b.length&&(a=b[0]),b.length>1&&(a=b[0]+".",b.shift(),a+=b.join("")),Number(a)},g.isMobileFallback=function(a){return g.detectMobileBrowsers.fullPattern.test(a)||g.detectMobileBrowsers.shortPattern.test(a.substr(0,4))},g.isTabletFallback=function(a){return g.detectMobileBrowsers.tabletPattern.test(a)},g.prepareDetectionCache=function(a,c,d){if(a.mobile===b){var e,h,i;return(h=g.findMatch(g.mobileDetectRules.tablets,c))?(a.mobile=a.tablet=h,void(a.phone=null)):(e=g.findMatch(g.mobileDetectRules.phones,c))?(a.mobile=a.phone=e,void(a.tablet=null)):void(g.isMobileFallback(c)?(i=f.isPhoneSized(d),i===b?(a.mobile=g.FALLBACK_MOBILE,a.tablet=a.phone=null):i?(a.mobile=a.phone=g.FALLBACK_PHONE,a.tablet=null):(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null)):g.isTabletFallback(c)?(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null):a.mobile=a.tablet=a.phone=null)}},g.mobileGrade=function(a){var b=null!==a.mobile();return a.os("iOS")&&a.version("iPad")>=4.3||a.os("iOS")&&a.version("iPhone")>=3.1||a.os("iOS")&&a.version("iPod")>=3.1||a.version("Android")>2.1&&a.is("Webkit")||a.version("Windows Phone OS")>=7||a.is("BlackBerry")&&a.version("BlackBerry")>=6||a.match("Playbook.*Tablet")||a.version("webOS")>=1.4&&a.match("Palm|Pre|Pixi")||a.match("hp.*TouchPad")||a.is("Firefox")&&a.version("Firefox")>=12||a.is("Chrome")&&a.is("AndroidOS")&&a.version("Android")>=4||a.is("Skyfire")&&a.version("Skyfire")>=4.1&&a.is("AndroidOS")&&a.version("Android")>=2.3||a.is("Opera")&&a.version("Opera Mobi")>11&&a.is("AndroidOS")||a.is("MeeGoOS")||a.is("Tizen")||a.is("Dolfin")&&a.version("Bada")>=2||(a.is("UC Browser")||a.is("Dolfin"))&&a.version("Android")>=2.3||a.match("Kindle Fire")||a.is("Kindle")&&a.version("Kindle")>=3||a.is("AndroidOS")&&a.is("NookTablet")||a.version("Chrome")>=11&&!b||a.version("Safari")>=5&&!b||a.version("Firefox")>=4&&!b||a.version("MSIE")>=7&&!b||a.version("Opera")>=10&&!b?"A":a.os("iOS")&&a.version("iPad")<4.3||a.os("iOS")&&a.version("iPhone")<3.1||a.os("iOS")&&a.version("iPod")<3.1||a.is("Blackberry")&&a.version("BlackBerry")>=5&&a.version("BlackBerry")<6||a.version("Opera Mini")>=5&&a.version("Opera Mini")<=6.5&&(a.version("Android")>=2.3||a.is("iOS"))||a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||a.version("Opera Mobi")>=11&&a.is("SymbianOS")?"B":(a.version("BlackBerry")<5||a.match("MSIEMobile|Windows CE.*Mobile")||a.version("Windows Mobile")<=5.2,"C")},g.detectOS=function(a){return g.findMatch(g.mobileDetectRules.oss0,a)||g.findMatch(g.mobileDetectRules.oss,a)},g.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},f.prototype={constructor:f,mobile:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===b&&(this._cache.userAgent=g.findMatch(g.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===b&&(this._cache.userAgents=g.findMatches(g.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===b&&(this._cache.os=g.detectOS(this.ua)),this._cache.os},version:function(a){return g.getVersion(a,this.ua)},versionStr:function(a){return g.getVersionStr(a,this.ua)},is:function(b){return c(this.userAgents(),b)||a(b,this.os())||a(b,this.phone())||a(b,this.tablet())||c(g.findMatches(g.mobileDetectRules.utils,this.ua),b)},match:function(a){return a instanceof RegExp||(a=new RegExp(a,"i")),a.test(this.ua)},isPhoneSized:function(a){return f.isPhoneSized(a||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===b&&(this._cache.grade=g.mobileGrade(this)),this._cache.grade}},"undefined"!=typeof window&&window.screen?f.isPhoneSized=function(a){return a<0?b:g.getDeviceSmallerSide()<=a}:f.isPhoneSized=function(){},f._impl=g,f.version="1.4.4 2019-09-21",f})}(function(a){if("undefined"!=typeof module&&module.exports)return function(a){module.exports=a()};if("function"==typeof define&&define.amd)return define;if("undefined"!=typeof window)return function(a){window.MobileDetect=a()};throw new Error("unknown environment")}());