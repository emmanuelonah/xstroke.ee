// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/bs-recipes/recipes/webpack.typescript.react/app/dist/bundle.js":[function(require,module,exports) {
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(3)},function(e,t){/*!
	 * react-lite.js v0.15.3
	 * (c) 2016 Jade Gu
	 * Released under the MIT License.
	 */
"use strict";function n(e,t){if(!t)return e;for(var n=Object.keys(t),r=n.length;r--;)void 0!==t[n[r]]&&(e[n[r]]=t[n[r]]);return e}function r(e,t,n,r){var o=n;return null==t?(fe(e,n),n.parentNode.removeChild(n)):e.type!==t.type||t.key!==e.key?(fe(e,n),o=pe(t,r,n.namespaceURI),n.parentNode.replaceChild(o,n)):e!==t&&(o=de(e,t,n,r)),o}function o(e){this.instance=e,this.pendingStates=[],this.pendingCallbacks=[],this.isPending=!1,this.nextProps=this.nextContext=null,this.clearCallbacks=this.clearCallbacks.bind(this)}function i(e,t){this.$updater=new o(this),this.$cache={isMounted:!1},this.props=e,this.state={},this.refs={},this.context=t||{}}var a=!0,l="http://www.w3.org/1999/xlink",c="http://www.w3.org/XML/1998/namespace",s="http://www.w3.org/2000/svg",u="liteid",p=2,d=3,f=4,h=5,v={clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlLang:"xml:lang",xmlSpace:"xml:space",acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",autoCompconste:"autocompconste",autoFocus:"autofocus",autoPlay:"autoplay",autoSave:"autosave",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"},m={xlinkActuate:l,xlinkArcrole:l,xlinkHref:l,xlinkRole:l,xlinkShow:l,xlinkTitle:l,xlinkType:l,xmlBase:c,xmlLang:c,xmlSpace:c},y={children:a,type:a,clipPath:a,cx:a,cy:a,d:a,dx:a,dy:a,fill:a,fillOpacity:a,fontFamily:a,fontSize:a,fx:a,fy:a,gradientTransform:a,gradientUnits:a,markerEnd:a,markerMid:a,markerStart:a,offset:a,opacity:a,patternContentUnits:a,patternUnits:a,points:a,preserveAspectRatio:a,r:a,rx:a,ry:a,spreadMethod:a,stopColor:a,stopOpacity:a,stroke:a,strokeDasharray:a,strokeLinecap:a,strokeOpacity:a,strokeWidth:a,textAnchor:a,transform:a,version:a,viewBox:a,x1:a,x2:a,x:a,xlinkActuate:a,xlinkArcrole:a,xlinkHref:a,xlinkRole:a,xlinkShow:a,xlinkTitle:a,xlinkType:a,xmlBase:a,xmlLang:a,xmlSpace:a,y1:a,y2:a,y:a,allowFullScreen:a,allowTransparency:a,charSet:a,challenge:a,classID:a,cols:a,contextMenu:a,dateTime:a,form:a,formAction:a,formEncType:a,formMethod:a,formTarget:a,frameBorder:a,height:a,inputMode:a,is:a,keyParams:a,keyType:a,list:a,manifest:a,maxLength:a,media:a,minLength:a,nonce:a,role:a,rows:a,size:a,sizes:a,srcSet:a,width:a,wmode:a,about:a,datatype:a,inlist:a,prefix:a,property:a,resource:a,"typeof":a,vocab:a,autoCapitalize:a,autoCorrect:a,itemProp:a,itemType:a,itemID:a,itemRef:a,security:a,unselectable:a},x={nodeName:a,nodeValue:a,nodeType:a,parentNode:a,childNodes:a,classList:a,firstChild:a,lastChild:a,previousSibling:a,previousElementSibling:a,nextSibling:a,nextElementSibling:a,attributes:a,ownerDocument:a,namespaceURI:a,localName:a,baseURI:a,prefix:a,length:a,specified:a,tagName:a,offsetTop:a,offsetLeft:a,offsetWidth:a,offsetHeight:a,offsetParent:a,scrollWidth:a,scrollHeight:a,clientTop:a,clientLeft:a,clientWidth:a,clientHeight:a,x:a,y:a},g={animationIterationCount:a,boxFlex:a,boxFlexGroup:a,boxOrdinalGroup:a,columnCount:a,flex:a,flexGrow:a,flexPositive:a,flexShrink:a,flexNegative:a,flexOrder:a,fontWeight:a,lineClamp:a,lineHeight:a,opacity:a,order:a,orphans:a,tabSize:a,widows:a,zIndex:a,zoom:a,fillOpacity:a,stopOpacity:a,strokeDashoffset:a,strokeOpacity:a,strokeWidth:a},k={value:a,checked:a},b={onDoubleClick:"ondblclick"},C={onmouseleave:a,onmouseenter:a,onload:a,onunload:a,onscroll:a,onfocus:a,onblur:a,onrowexit:a,onbeforeunload:a,onstop:a,ondragdrop:a,ondragenter:a,ondragexit:a,ondraggesture:a,ondragover:a,oncontextmenu:a},w=function(e){return"string"==typeof e},S=function(e){return"function"==typeof e},P=function(e){return"boolean"==typeof e},O=Array.isArray,T=function(){},E=function(e){return e},N=function(e,t){return function(){return e.apply(this,arguments),t.apply(this,arguments)}},M=function wt(e,t,n,r){for(var o=e.length,i=-1;o--;){var a=e[++i];O(a)?wt(a,t,n,r):t(a,n,r)}},U=function(e,t){for(var n=0,r=e.length;r>n;n++)t(e[n],n)},I=function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)},_=function(e,t,n){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=!0,n(o));for(var o in t)t.hasOwnProperty(o)&&r[o]!==!0&&n(o)},A=0,D=function(){return++A},$=/^on/i,L=function(e){return"dangerouslySetInnerHTML"===e},R=function(e){return"style"===e},W=function(e,t,n){if("children"!==t){var r=t;t=v[t]||t,$.test(t)?ze(e,t,n):R(t)?X(e,n):L(t)?n&&null!=n.__html&&(e.innerHTML=n.__html):t in e&&y[r]!==!0?x[t]!==!0&&("title"===t&&null==n&&(n=""),e[t]=n):null==n?e.removeAttribute(t):m.hasOwnProperty(r)?e.setAttributeNS(m[r],t,n):e.setAttribute(t,n)}},z=function(e,t){for(var n in t)t.hasOwnProperty(n)&&W(e,n,t[n])},H=function(e,t,n){if("children"!==t)if(t=v[t]||t,$.test(t))He(e,t);else if(R(t))V(e,n);else if(L(t))e.innerHTML="";else if(t in e&&y[t]!==!0)if(S(n))e[t]=null;else if(w(n))e[t]="";else if(P(n))e[t]=!1;else try{delete e[t]}catch(r){}else e.removeAttribute(t)},j=null,B=null,F=null,q=function(e){if("children"!==e){var t=B[e],n=1==k[e]?F[e]:j[e];if(t!==n){if(void 0===t)return void H(F,e,n);if(R(e))Z(F,n,t);else if(L(e)){var r=n&&n.__html,o=t&&t.__html;null!=o&&o!==r&&(F.innerHTML=o)}else W(F,e,t)}}},G=function(e,t,n){F=e,j=t,B=n,_(t,n,q),F=j=B=null},V=function(e,t){if(t){var n=e.style;for(var r in t)t.hasOwnProperty(r)&&(n[r]="")}},X=function(e,t){if(t){var n=e.style;for(var r in t)t.hasOwnProperty(r)&&oe(n,r,t[r])}},Y=null,J=null,K=null,Q=function(e){var t=K[e],n=J[e];t!==n&&oe(Y,e,t)},Z=function(e,t,n){t!==n&&(!n&&t?V(e,t):n&&!t?X(e,n):(Y=e.style,J=t,K=n,_(t,n,Q),Y=J=K=null))},ee={},te=["Webkit","ms","Moz","O"],ne=function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)};I(g,function(e,t){U(te,function(e){return ee[ne(e,t)]=!0})}),I(ee,function(e,t){g[t]=e});var re=/^-?\d+(\.\d+)?$/,oe=function(e,t,n){!g[t]&&re.test(n)?e[t]=n+"px":(t="float"===t?"cssFloat":t,n=null==n||P(n)?"":n,e[t]=n)};Object.freeze||(Object.freeze=E);var ie=T,ae=null,le=function(e,t){return{vtype:p,type:e,props:t,refs:ae}},ce=function(e,t){return{vtype:d,id:D(),type:e,props:t}},se=function(e,t){return{vtype:f,id:D(),type:e,props:t,refs:ae}},ue=function(e){return{vtype:h,comment:e}},pe=function(e,t,n){var r=e.vtype,o=null;return r?r===p?o=he(e,t,n):r===f?o=Oe(e,t,n):r===d?o=Ce(e,t,n):r===h&&(o=document.createComment(e.comment)):o=document.createTextNode(e),o},de=function(e,t,n,r){var o=n,i=e.vtype;return i===p?o=ke(e,t,n,r):i===f?o=Te(e,t,n,r):i===d&&(o=we(e,t,n,r)),o},fe=function(e,t){var n=e.vtype;n===p?be(e,t):n===f?Ee(e,t):n===d&&Se(e,t)},he=function(e,t,n){var r=e.type,o=e.props,i=null;return"svg"===r||n===s?(i=document.createElementNS(s,r),n=s):i=document.createElement(r),ve(i,o.children,t),z(i,o),null!==e.ref&&Ae(e.refs,e.ref,i),i},ve=function(e,t,n){e.vchildren=[],O(t)?M(t,xe,e,n):xe(t,e,n)},me=function(e,t,n){for(var r=e.vchildren,o=e.childNodes,i=e.namespaceURI,a=e.vchildren=[],l=0,c=r.length;c>l;l++)r[l].node=o[l];O(t)?M(t,ge,a,r):ge(t,a,r);for(var l=0,c=a.length;c>l;l++){var s=a[l],u=s.vnode,p=s.prev,d=null;p?(d=p.node,s.prev=null,p.index!==s.index&&ye(e,d,o[s.index],r),u!==p.vnode&&(u.vtype?d=de(p.vnode,u,d,n):d.nodeValue=u)):(d=pe(u,n,i),ye(e,d,o[s.index],r,!0))}for(var l=0,c=r.length;c>l;l++){var f=r[l];fe(f.vnode,f.node),e.removeChild(f.node)}},ye=function(e,t,n,r,o){if(n){if(n!==t){o||e.removeChild(t);for(var i=0,a=r.length;a>i;i++){var l=r[i];if(l.node===n)return r.splice(i,1),fe(l.vnode,l.node),void e.replaceChild(t,n)}e.insertBefore(t,n)}}else e.appendChild(t)},xe=function(e,t,n){if(null==e||P(e))return!1;e=e.vtype?e:""+e;var r=pe(e,n,t.namespaceURI);t.appendChild(r),t.vchildren.push({vnode:e,index:t.vchildren.length})},ge=function(e,t,n){if(null==e||P(e))return!1;var r=null;e=e.vtype?e:""+e;for(var o=e,i=o.refs,a=o.type,l=o.key,c=0,s=n.length;s>c;c++){var u=n[c],p=u.vnode;if(p===e||p.refs===i&&p.type===a&&p.key===l){r=u,n.splice(c,1);break}}t.push({prev:r,vnode:e,index:t.length})},ke=function(e,t,n,r){var o=e.props,i=t.props,a=o.dangerouslySetInnerHTML&&o.dangerouslySetInnerHTML.__html,l=i.children;return null==a&&n.vchildren.length?(me(n,l,r),G(n,o,i)):(G(n,o,i),ve(n,l,r)),null!==e.ref?null!==t.ref?Ae(t.refs,t.ref,n):De(e.refs,e.ref):Ae(t.refs,t.ref,n),n},be=function(e,t){for(var n=e.props,r=t.vchildren,o=t.childNodes,i=0,a=r.length;a>i;i++){var l=r[i];fe(l.vnode,o[i])}null!==e.ref&&De(e.refs,e.ref),t.eventStore=t.vchildren=null;for(var c in n)n.hasOwnProperty(c)&&$.test(c)&&(c=Re(c),C[c]===!0&&(t[c]=null))},Ce=function(e,t,n){var r=Pe(e,t),o=pe(r,t,n);return o.cache=o.cache||{},o.cache[e.id]=r,o},we=function(e,t,o,i){var a=e.id,l=o.cache[a];delete o.cache[a];var c=Pe(t,i),s=r(l,c,o,i);return s.cache=s.cache||{},s.cache[t.id]=c,s!==o&&n(s.cache,o.cache),s},Se=function(e,t){var n=e.id,r=t.cache[n];delete t.cache[n],fe(r,t)},Pe=function(e,t){var n=e.type,r=e.props,o=Ne(t,n.contextTypes),i=n(r,o);if(i&&i.render&&(i=i.render()),null===i||i===!1)i=ue("react-empty: "+D());else if(!i||!i.vtype)throw new Error("@"+n.name+"#render:You may have returned undefined, an array or some other invalid object");return i},Oe=function(e,t,n){var r=e.type,o=e.props,i=e.id,a=Ne(t,r.contextTypes),l=new r(o,a),c=l.$updater,s=l.$cache;s.parentContext=t,c.isPending=!0,l.props=l.props||o,l.context=l.context||a,l.componentWillMount&&(l.componentWillMount(),l.state=c.getState());var u=Me(l,t),p=pe(u,u.context,n);return p.cache=p.cache||{},p.cache[i]=l,s.vnode=u,s.node=p,s.isMounted=!0,Ue.push(l),null!==e.ref&&Ae(e.refs,e.ref,l),p},Te=function(e,t,n,r){var o=e.id,i=n.cache[o],a=i.$updater,l=i.$cache,c=t.type,s=t.props,u=Ne(r,c.contextTypes);return delete n.cache[o],n.cache[t.id]=i,l.parentContext=r,i.componentWillReceiveProps&&(a.isPending=!0,i.componentWillReceiveProps(s,u),a.isPending=!1),a.emitUpdate(s,u),null!==e.ref?null!==t.ref?Ae(t.refs,t.ref,i):De(e.refs,e.ref):Ae(t.refs,t.ref,i),l.node},Ee=function(e,t){var n=e.id,r=t.cache[n],o=r.$cache;delete t.cache[n],null!==e.ref&&De(e.refs,e.ref),r.setState=r.forceUpdate=ie,r.componentWillUnmount&&r.componentWillUnmount(),fe(o.vnode,t),delete r.setState,o.isMounted=!1,o.node=o.parentContext=o.vnode=r.refs=r.context=null},Ne=function(e,t){var n={};if(!t||!e)return n;for(var r in t)t.hasOwnProperty(r)&&(n[r]=e[r]);return n},Me=function(e,t){ae=e.refs;var r=e.render();if(null===r||r===!1)r=ue("react-empty: "+D());else if(!r||!r.vtype)throw new Error("@"+e.constructor.name+"#render:You may have returned undefined, an array or some other invalid object");var o=ae=null;return e.getChildContext&&(o=e.getChildContext()),o=o?n(n({},t),o):t,r.context=o,r},Ue=[],Ie=function(){var e=Ue,t=e.length;if(t){Ue=[];for(var n=-1;t--;){var r=e[++n],o=r.$updater;r.componentDidMount&&r.componentDidMount(),o.isPending=!1,o.emitUpdate()}}},_e=function(){return this},Ae=function(e,t,n){e&&null!=t&&n&&(n.nodeName&&!n.getDOMNode&&(n.getDOMNode=_e),S(t)?t(n):e[t]=n)},De=function(e,t){e&&null!=t&&(S(t)?t(null):delete e[t])},$e={updaters:[],isPending:!1,add:function(e){this.updaters.push(e)},batchUpdate:function(){if(!this.isPending){this.isPending=!0;for(var e=this.updaters,t=void 0;t=e.pop();)t.updateComponent();this.isPending=!1}}};o.prototype={emitUpdate:function(e,t){this.nextProps=e,this.nextContext=t,e||!$e.isPending?this.updateComponent():$e.add(this)},updateComponent:function(){var e=this.instance,t=this.pendingStates,n=this.nextProps,r=this.nextContext;(n||t.length>0)&&(n=n||e.props,r=r||e.context,this.nextProps=this.nextContext=null,Le(e,n,this.getState(),r,this.clearCallbacks))},addState:function(e){e&&(this.pendingStates.push(e),this.isPending||this.emitUpdate())},replaceState:function(e){var t=this.pendingStates;t.pop(),t.push([e])},getState:function(){var e=this.instance,t=this.pendingStates,r=e.state,o=e.props;return t.length&&(r=n({},r),U(t,function(t){return O(t)?void(r=n({},t[0])):(S(t)&&(t=t.call(e,r,o)),void n(r,t))}),t.length=0),r},clearCallbacks:function(){var e=this.pendingCallbacks,t=this.instance;e.length>0&&(this.pendingCallbacks=[],U(e,function(e){return e.call(t)}))},addCallback:function(e){S(e)&&this.pendingCallbacks.push(e)}},i.prototype={constructor:i,forceUpdate:function(e){var t=this.$updater,o=this.$cache,i=this.props,a=this.state,l=this.context;if(!t.isPending&&o.isMounted){var c=o.props||i,s=o.state||a,u=o.context||{},p=o.parentContext,d=o.node,f=o.vnode;o.props=o.state=o.context=null,t.isPending=!0,this.componentWillUpdate&&this.componentWillUpdate(c,s,u),this.state=s,this.props=c,this.context=u;var h=Me(this,p),v=r(f,h,d,h.context);v!==d&&(v.cache=v.cache||{},n(v.cache,d.cache)),o.vnode=h,o.node=v,Ie(),this.componentDidUpdate&&this.componentDidUpdate(i,a,l),e&&e.call(this),t.isPending=!1,t.emitUpdate()}},setState:function(e,t){var n=this.$updater;n.addCallback(t),n.addState(e)},replaceState:function(e,t){var n=this.$updater;n.addCallback(t),n.replaceState(e)},getDOMNode:function(){var e=this.$cache.node;return e&&"#comment"===e.nodeName?null:e},isMounted:function(){return this.$cache.isMounted}};var Le=function(e,t,n,r,o){var i=!0;if(e.shouldComponentUpdate&&(i=e.shouldComponentUpdate(t,n,r)),i===!1)return e.props=t,e.state=n,void(e.context=r||{});var a=e.$cache;a.props=t,a.state=n,a.context=r||{},e.forceUpdate(o)},Re=function(e){return e=b[e]||e,e.toLowerCase()},We={},ze=function St(e,t,n){if(t=Re(t),C[t]===!0)return void(e[t]=n);var r=e.eventStore||(e.eventStore={});r[t]=n,We[t]||(document.addEventListener(t.substr(2),je),We[t]=!0);var o=e.nodeName;"onchange"!==t||"INPUT"!==o&&"TEXTAREA"!==o||St(e,"oninput",n)},He=function(e,t){if(t=Re(t),C[t]===!0)return void(e[t]=null);var n=e.eventStore||(e.eventStore={});delete n[t];var r=e.nodeName;"onchange"!==t||"INPUT"!==r&&"TEXTAREA"!==r||delete n.oninput},je=function(e){var t=e.target,n=e.type,r="on"+n,o=void 0;for($e.isPending=!0;t;){var i=t,a=i.eventStore,l=a&&a[r];if(l){if(o||(o=Be(e)),o.currentTarget=t,l.call(t,o),o.$cancalBubble)break;t=t.parentNode}else t=t.parentNode}$e.isPending=!1,$e.batchUpdate()},Be=function(e){var t={},n=function(){return t.$cancalBubble=!0};t.nativeEvent=e;for(var r in e)"function"!=typeof e[r]?t[r]=e[r]:"stopPropagation"===r||"stopImmediatePropagation"===r?t[r]=n:t[r]=e[r].bind(e);return t},Fe={},qe={},Ge=function Pt(e,t,n,o){if(!e.vtype)throw new Error("cannot render "+e+" to container");var i=t[u]||(t[u]=D()),a=Fe[i];if(a)return void(a===!0?Fe[i]=a=[e,n,o]:(a[0]=e,a[2]=o,n&&(a[1]=a[1]?N(a[1],n):n)));Fe[i]=!0;var l=null,c=null;if(l=qe[i])c=r(l,e,t.firstChild,o);else{c=pe(e,o,t.namespaceURI);for(var s=null;s=t.lastChild;)t.removeChild(s);t.appendChild(c)}qe[i]=e;var d=$e.isPending;$e.isPending=!0,Ie(),a=Fe[i],delete Fe[i];var h=null;return O(a)?h=Pt(a[0],t,a[1],a[2]):e.vtype===p?h=c:e.vtype===f&&(h=c.cache[e.id]),d||($e.isPending=!1,$e.batchUpdate()),n&&n.call(h),h},Ve=function(e,t,n){return Ge(e,t,n)},Xe=function(e,t,n,r){var o=e.vnode?e.vnode.context:e.$cache.parentContext;return Ge(t,n,r,o)},Ye=function(e){if(!e.nodeName)throw new Error("expect node");var t=e[u],n=null;return(n=qe[t])?(fe(n,e.firstChild),e.removeChild(e.firstChild),delete qe[t],!0):!1},Je=function(e){if(null==e)return null;if(e.nodeName)return e;var t=e;if(t.getDOMNode&&t.$cache.isMounted)return t.getDOMNode();throw new Error("findDOMNode can not find Node")},Ke=Object.freeze({render:Ve,unstable_renderSubtreeIntoContainer:Xe,unmountComponentAtNode:Ye,findDOMNode:Je}),Qe=function(e){return null!=e&&!!e.vtype},Ze=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;r>i;i++)o[i-2]=arguments[i];var a=e.type,l=e.key,c=e.ref,s=n(n({key:l,ref:c},e.props),t),u=tt.apply(void 0,[a,s].concat(o));return u.ref===e.ref&&(u.refs=e.refs),u},et=function(e){var t=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return tt.apply(void 0,[e].concat(n))};return t.type=e,t},tt=function(e,t,n){var r=null,o=arguments.length;if(o>3){n=[n];for(var i=3;o>i;i++)n[i-2]=arguments[i]}var a=typeof e;if("string"===a)r=le;else{if("function"!==a)throw new Error("React.createElement: unexpect type [ "+e+" ]");r=e.prototype&&"function"==typeof e.prototype.forceUpdate?se:ce}var l=null,c=null,s={},u=null;if(null!=t)for(var p in t)t.hasOwnProperty(p)&&("key"===p?void 0!==t.key&&(l=""+t.key):"ref"===p?void 0!==t.ref&&(c=t.ref):void 0!==(u=t[p])&&(s[p]=u));var d=e.defaultProps;if(d)for(var p in d)void 0===s[p]&&(s[p]=d[p]);void 0!==n&&(s.children=n);var f=r(e,s);return f.key=l,f.ref=c,f},nt="a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|menu|menuitem|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr|circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan",rt={};U(nt.split("|"),function(e){rt[e]=et(e)});var ot=function Ot(){return Ot};ot.isRequired=ot;var it={array:ot,bool:ot,func:ot,number:ot,object:ot,string:ot,any:ot,arrayOf:ot,element:ot,instanceOf:ot,node:ot,objectOf:ot,oneOf:ot,oneOfType:ot,shape:ot},at=function(e){if(Qe(e))return e;throw new Error("expect only one child")},lt=function(e,t,n){if(null==e)return e;var r=0;O(e)?M(e,function(e){t.call(n,e,r++)}):t.call(n,e,r)},ct=function(e,t,n){if(null==e)return e;var r=[],o={};lt(e,function(e,i){var a={};a.child=t.call(n,e,i)||e,a.isEqual=a.child===e;var l=a.key=pt(e,i);o.hasOwnProperty(l)?o[l]+=1:o[l]=0,a.index=o[l],r.push(a)});var i=[];return U(r,function(e){var t=e.child,n=e.key,r=e.index,a=e.isEqual;if(null!=t&&!P(t)){if(!Qe(t)||null==n)return void i.push(t);0!==o[n]&&(n+=":"+r),a||(n=ft(t.key||"")+"/"+n),t=Ze(t,{key:n}),i.push(t)}}),i},st=function Tt(e){var Tt=0;return lt(e,function(){Tt++}),Tt},ut=function(e){return ct(e,E)||[]},pt=function(e,t){var n=void 0;return n=Qe(e)&&w(e.key)?".$"+e.key:"."+t.toString(36)},dt=/\/(?!\/)/g,ft=function(e){return(""+e).replace(dt,"//")},ht=Object.freeze({only:at,forEach:lt,map:ct,count:st,toArray:ut}),vt=function Et(e,t){U(e,function(e){e&&(O(e.mixins)&&Et(e.mixins,t),t(e))})},mt=function(e,t){I(t,function(t,n){if("getInitialState"===n)return void e.$getInitialStates.push(t);var r=e[n];S(r)&&S(t)?e[n]=N(r,t):e[n]=t})},yt=function(e,t){n(e.propTypes,t.propTypes),n(e.contextTypes,t.contextTypes),n(e,t.statics),S(t.getDefaultProps)&&n(e.defaultProps,t.getDefaultProps())},xt=function(e,t){I(t,function(t,n){S(t)&&(e[n]=t.bind(e))})},gt=function(){};gt.prototype=i.prototype;var kt=function(){var e=this,t={},r=this.setState;return this.setState=gt,U(this.$getInitialStates,function(r){S(r)&&n(t,r.call(e))}),this.setState=r,t},bt=function(e){function t(n,r){i.call(this,n,r),this.constructor=t,e.autobind!==!1&&xt(this,t.prototype),this.state=this.getInitialState()||this.state}if(!S(e.render))throw new Error("createClass: spec.render is not function");var n=e.mixins||[],r=n.concat(e);e.mixins=null,t.displayName=e.displayName,t.contextTypes={},t.propTypes={},t.defaultProps={};var o=t.prototype=new gt;return o.$getInitialStates=[],vt(r,function(e){mt(o,e),yt(t,e)}),o.getInitialState=kt,e.mixins=n,t},Ct=n({version:"0.15.1",cloneElement:Ze,isValidElement:Qe,createElement:tt,createFactory:et,Component:i,createClass:bt,Children:ht,PropTypes:it,DOM:rt},Ke);Ct.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ke,e.exports=Ct},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=n(1),i=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.render=function(){var e=this.props.name;return o.createElement("div",null,"Hello World! Good work ",e)},t}(o.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i},function(e,t,n){"use strict";var r=n(1),o=n(1),i=n(2);o.render(r.createElement(i["default"],{name:"Shane"}),document.getElementById("app"))}]);
},{}]