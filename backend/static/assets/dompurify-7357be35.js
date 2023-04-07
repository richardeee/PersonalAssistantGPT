/*! @license DOMPurify 3.0.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.1/LICENSE */function F(r){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},F(r)}function Ce(r,n){return Ce=Object.setPrototypeOf||function(l,u){return l.__proto__=u,l},Ce(r,n)}function Ut(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oe(r,n,i){return Ut()?oe=Reflect.construct:oe=function(u,m,_){var p=[null];p.push.apply(p,m);var y=Function.bind.apply(u,p),$=new y;return _&&Ce($,_.prototype),$},oe.apply(null,arguments)}function Ht(r,n){return Gt(r)||Bt(r,n)||Fe(r,n)||$t()}function L(r){return zt(r)||Wt(r)||Fe(r)||jt()}function zt(r){if(Array.isArray(r))return xe(r)}function Gt(r){if(Array.isArray(r))return r}function Wt(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Bt(r,n){var i=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var l=[],u=!0,m=!1,_,p;try{for(i=i.call(r);!(u=(_=i.next()).done)&&(l.push(_.value),!(n&&l.length===n));u=!0);}catch(y){m=!0,p=y}finally{try{!u&&i.return!=null&&i.return()}finally{if(m)throw p}}return l}}function Fe(r,n){if(r){if(typeof r=="string")return xe(r,n);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return xe(r,n)}}function xe(r,n){(n==null||n>r.length)&&(n=r.length);for(var i=0,l=new Array(n);i<n;i++)l[i]=r[i];return l}function jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yt(r,n){var i=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!i){if(Array.isArray(r)||(i=Fe(r))||n&&r&&typeof r.length=="number"){i&&(r=i);var l=0,u=function(){};return{s:u,n:function(){return l>=r.length?{done:!0}:{done:!1,value:r[l++]}},e:function(y){throw y},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m=!0,_=!1,p;return{s:function(){i=i.call(r)},n:function(){var y=i.next();return m=y.done,y},e:function(y){_=!0,p=y},f:function(){try{!m&&i.return!=null&&i.return()}finally{if(_)throw p}}}}var pt=Object.entries,lt=Object.setPrototypeOf,Vt=Object.isFrozen,Xt=Object.getPrototypeOf,qt=Object.getOwnPropertyDescriptor,E=Object.freeze,D=Object.seal,Kt=Object.create,dt=typeof Reflect<"u"&&Reflect,ke=dt.apply,Pe=dt.construct;ke||(ke=function(n,i,l){return n.apply(i,l)});E||(E=function(n){return n});D||(D=function(n){return n});Pe||(Pe=function(n,i){return oe(n,L(i))});var Zt=R(Array.prototype.forEach),st=R(Array.prototype.pop),X=R(Array.prototype.push),le=R(String.prototype.toLowerCase),Ne=R(String.prototype.toString),Jt=R(String.prototype.match),N=R(String.prototype.replace),Qt=R(String.prototype.indexOf),er=R(String.prototype.trim),b=R(RegExp.prototype.test),Le=tr(TypeError);function R(r){return function(n){for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];return ke(r,n,l)}}function tr(r){return function(){for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return Pe(r,i)}}function s(r,n,i){i=i||le,lt&&lt(r,null);for(var l=n.length;l--;){var u=n[l];if(typeof u=="string"){var m=i(u);m!==u&&(Vt(n)||(n[l]=m),u=m)}r[u]=!0}return r}function j(r){var n=Kt(null),i=Yt(pt(r)),l;try{for(i.s();!(l=i.n()).done;){var u=Ht(l.value,2),m=u[0],_=u[1];n[m]=_}}catch(p){i.e(p)}finally{i.f()}return n}function ae(r,n){for(;r!==null;){var i=qt(r,n);if(i){if(i.get)return R(i.get);if(typeof i.value=="function")return R(i.value)}r=Xt(r)}function l(u){return console.warn("fallback value for",u),null}return l}var ut=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),De=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),we=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rr=E(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Me=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),nr=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ft=E(["#text"]),ct=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ie=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),mt=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ie=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ar=D(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ir=D(/<%[\w\W]*|[\w\W]*%>/gm),or=D(/\${[\w\W]*}/gm),lr=D(/^data-[\-\w.\u00B7-\uFFFF]/),sr=D(/^aria-[\-\w]+$/),ur=D(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),fr=D(/^(?:\w+script|data):/i),cr=D(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),mr=D(/^html$/i),pr=function(){return typeof window>"u"?null:window},dr=function(n,i){if(F(n)!=="object"||typeof n.createPolicy!="function")return null;var l=null,u="data-tt-policy-suffix";i.currentScript&&i.currentScript.hasAttribute(u)&&(l=i.currentScript.getAttribute(u));var m="dompurify"+(l?"#"+l:"");try{return n.createPolicy(m,{createHTML:function(p){return p},createScriptURL:function(p){return p}})}catch{return console.warn("TrustedTypes policy "+m+" could not be created."),null}};function vt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pr(),n=function(e){return vt(e)};if(n.version="3.0.1",n.removed=[],!r||!r.document||r.document.nodeType!==9)return n.isSupported=!1,n;var i=r.document,l=r.document,u=r.DocumentFragment,m=r.HTMLTemplateElement,_=r.Node,p=r.Element,y=r.NodeFilter,$=r.NamedNodeMap,ht=$===void 0?r.NamedNodeMap||r.MozNamedAttrMap:$,_t=r.HTMLFormElement,Tt=r.DOMParser,q=r.trustedTypes,K=p.prototype,At=ae(K,"cloneNode"),Et=ae(K,"nextSibling"),yt=ae(K,"childNodes"),se=ae(K,"parentNode");if(typeof m=="function"){var ue=l.createElement("template");ue.content&&ue.content.ownerDocument&&(l=ue.content.ownerDocument)}var O=dr(q,i),Ue=O?O.createHTML(""):"",Z=l,fe=Z.implementation,gt=Z.createNodeIterator,bt=Z.createDocumentFragment,St=Z.getElementsByTagName,Rt=i.importNode,w={};n.isSupported=typeof pt=="function"&&typeof se=="function"&&fe&&typeof fe.createHTMLDocument<"u";var ce=ar,me=ir,pe=or,Ot=lr,Nt=sr,Lt=fr,He=cr,de=ur,d=null,ze=s({},[].concat(L(ut),L(De),L(we),L(Me),L(ft))),v=null,Ge=s({},[].concat(L(ct),L(Ie),L(mt),L(ie))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Y=null,ve=null,We=!0,he=!0,Be=!1,je=!0,U=!1,C=!1,_e=!1,Te=!1,H=!1,J=!1,Q=!1,$e=!0,Ye=!1,Dt="user-content-",Ae=!0,V=!1,z={},G=null,Ve=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,qe=s({},["audio","video","img","source","image","track"]),Ee=null,Ke=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ee="http://www.w3.org/1998/Math/MathML",te="http://www.w3.org/2000/svg",M="http://www.w3.org/1999/xhtml",W=M,ye=!1,ge=null,wt=s({},[ee,te,M],Ne),x,Mt=["application/xhtml+xml","text/html"],It="text/html",h,B=null,Ct=l.createElement("form"),Ze=function(e){return e instanceof RegExp||e instanceof Function},be=function(e){B&&B===e||((!e||F(e)!=="object")&&(e={}),e=j(e),x=Mt.indexOf(e.PARSER_MEDIA_TYPE)===-1?x=It:x=e.PARSER_MEDIA_TYPE,h=x==="application/xhtml+xml"?Ne:le,d="ALLOWED_TAGS"in e?s({},e.ALLOWED_TAGS,h):ze,v="ALLOWED_ATTR"in e?s({},e.ALLOWED_ATTR,h):Ge,ge="ALLOWED_NAMESPACES"in e?s({},e.ALLOWED_NAMESPACES,Ne):wt,Ee="ADD_URI_SAFE_ATTR"in e?s(j(Ke),e.ADD_URI_SAFE_ATTR,h):Ke,Xe="ADD_DATA_URI_TAGS"in e?s(j(qe),e.ADD_DATA_URI_TAGS,h):qe,G="FORBID_CONTENTS"in e?s({},e.FORBID_CONTENTS,h):Ve,Y="FORBID_TAGS"in e?s({},e.FORBID_TAGS,h):{},ve="FORBID_ATTR"in e?s({},e.FORBID_ATTR,h):{},z="USE_PROFILES"in e?e.USE_PROFILES:!1,We=e.ALLOW_ARIA_ATTR!==!1,he=e.ALLOW_DATA_ATTR!==!1,Be=e.ALLOW_UNKNOWN_PROTOCOLS||!1,je=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,U=e.SAFE_FOR_TEMPLATES||!1,C=e.WHOLE_DOCUMENT||!1,H=e.RETURN_DOM||!1,J=e.RETURN_DOM_FRAGMENT||!1,Q=e.RETURN_TRUSTED_TYPE||!1,Te=e.FORCE_BODY||!1,$e=e.SANITIZE_DOM!==!1,Ye=e.SANITIZE_NAMED_PROPS||!1,Ae=e.KEEP_CONTENT!==!1,V=e.IN_PLACE||!1,de=e.ALLOWED_URI_REGEXP||de,W=e.NAMESPACE||M,c=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),U&&(he=!1),J&&(H=!0),z&&(d=s({},L(ft)),v=[],z.html===!0&&(s(d,ut),s(v,ct)),z.svg===!0&&(s(d,De),s(v,Ie),s(v,ie)),z.svgFilters===!0&&(s(d,we),s(v,Ie),s(v,ie)),z.mathMl===!0&&(s(d,Me),s(v,mt),s(v,ie))),e.ADD_TAGS&&(d===ze&&(d=j(d)),s(d,e.ADD_TAGS,h)),e.ADD_ATTR&&(v===Ge&&(v=j(v)),s(v,e.ADD_ATTR,h)),e.ADD_URI_SAFE_ATTR&&s(Ee,e.ADD_URI_SAFE_ATTR,h),e.FORBID_CONTENTS&&(G===Ve&&(G=j(G)),s(G,e.FORBID_CONTENTS,h)),Ae&&(d["#text"]=!0),C&&s(d,["html","head","body"]),d.table&&(s(d,["tbody"]),delete Y.tbody),E&&E(e),B=e)},Je=s({},["mi","mo","mn","ms","mtext"]),Qe=s({},["foreignobject","desc","title","annotation-xml"]),xt=s({},["title","style","font","a","script"]),re=s({},De);s(re,we),s(re,rr);var Se=s({},Me);s(Se,nr);var kt=function(e){var t=se(e);(!t||!t.tagName)&&(t={namespaceURI:W,tagName:"template"});var a=le(e.tagName),f=le(t.tagName);return ge[e.namespaceURI]?e.namespaceURI===te?t.namespaceURI===M?a==="svg":t.namespaceURI===ee?a==="svg"&&(f==="annotation-xml"||Je[f]):!!re[a]:e.namespaceURI===ee?t.namespaceURI===M?a==="math":t.namespaceURI===te?a==="math"&&Qe[f]:!!Se[a]:e.namespaceURI===M?t.namespaceURI===te&&!Qe[f]||t.namespaceURI===ee&&!Je[f]?!1:!Se[a]&&(xt[a]||!re[a]):!!(x==="application/xhtml+xml"&&ge[e.namespaceURI]):!1},k=function(e){X(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},Re=function(e,t){try{X(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{X(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!v[e])if(H||J)try{k(t)}catch{}else try{t.setAttribute(e,"")}catch{}},et=function(e){var t,a;if(Te)e="<remove></remove>"+e;else{var f=Jt(e,/^[\r\n\t ]+/);a=f&&f[0]}x==="application/xhtml+xml"&&W===M&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var T=O?O.createHTML(e):e;if(W===M)try{t=new Tt().parseFromString(T,x)}catch{}if(!t||!t.documentElement){t=fe.createDocument(W,"template",null);try{t.documentElement.innerHTML=ye?Ue:T}catch{}}var S=t.body||t.documentElement;return e&&a&&S.insertBefore(l.createTextNode(a),S.childNodes[0]||null),W===M?St.call(t,C?"html":"body")[0]:C?t.documentElement:S},tt=function(e){return gt.call(e.ownerDocument||e,e,y.SHOW_ELEMENT|y.SHOW_COMMENT|y.SHOW_TEXT,null,!1)},Pt=function(e){return e instanceof _t&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof ht)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},ne=function(e){return F(_)==="object"?e instanceof _:e&&F(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},I=function(e,t,a){w[e]&&Zt(w[e],function(f){f.call(n,t,a,B)})},rt=function(e){var t;if(I("beforeSanitizeElements",e,null),Pt(e))return k(e),!0;var a=h(e.nodeName);if(I("uponSanitizeElement",e,{tagName:a,allowedTags:d}),e.hasChildNodes()&&!ne(e.firstElementChild)&&(!ne(e.content)||!ne(e.content.firstElementChild))&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return k(e),!0;if(!d[a]||Y[a]){if(!Y[a]&&at(a)&&(c.tagNameCheck instanceof RegExp&&b(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a)))return!1;if(Ae&&!G[a]){var f=se(e)||e.parentNode,T=yt(e)||e.childNodes;if(T&&f)for(var S=T.length,A=S-1;A>=0;--A)f.insertBefore(At(T[A],!0),Et(e))}return k(e),!0}return e instanceof p&&!kt(e)||(a==="noscript"||a==="noembed")&&b(/<\/no(script|embed)/i,e.innerHTML)?(k(e),!0):(U&&e.nodeType===3&&(t=e.textContent,t=N(t,ce," "),t=N(t,me," "),t=N(t,pe," "),e.textContent!==t&&(X(n.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},nt=function(e,t,a){if($e&&(t==="id"||t==="name")&&(a in l||a in Ct))return!1;if(!(he&&!ve[t]&&b(Ot,t))){if(!(We&&b(Nt,t))){if(!v[t]||ve[t]){if(!(at(e)&&(c.tagNameCheck instanceof RegExp&&b(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&b(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||t==="is"&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&b(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a))))return!1}else if(!Ee[t]){if(!b(de,N(a,He,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Qt(a,"data:")===0&&Xe[e])){if(!(Be&&!b(Lt,N(a,He,"")))){if(a)return!1}}}}}}return!0},at=function(e){return e.indexOf("-")>0},it=function(e){var t,a,f,T;I("beforeSanitizeAttributes",e,null);var S=e.attributes;if(S){var A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:v};for(T=S.length;T--;){t=S[T];var g=t,P=g.name,Oe=g.namespaceURI;if(a=P==="value"?t.value:er(t.value),f=h(P),A.attrName=f,A.attrValue=a,A.keepAttr=!0,A.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,A),a=A.attrValue,!A.forceKeepAttr&&(Re(P,e),!!A.keepAttr)){if(!je&&b(/\/>/i,a)){Re(P,e);continue}U&&(a=N(a,ce," "),a=N(a,me," "),a=N(a,pe," "));var ot=h(e.nodeName);if(nt(ot,f,a)){if(Ye&&(f==="id"||f==="name")&&(Re(P,e),a=Dt+a),O&&F(q)==="object"&&typeof q.getAttributeType=="function"&&!Oe)switch(q.getAttributeType(ot,f)){case"TrustedHTML":a=O.createHTML(a);break;case"TrustedScriptURL":a=O.createScriptURL(a);break}try{Oe?e.setAttributeNS(Oe,P,a):e.setAttribute(P,a),st(n.removed)}catch{}}}}I("afterSanitizeAttributes",e,null)}},Ft=function o(e){var t,a=tt(e);for(I("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)I("uponSanitizeShadowNode",t,null),!rt(t)&&(t.content instanceof u&&o(t.content),it(t));I("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,a,f,T;if(ye=!o,ye&&(o="<!-->"),typeof o!="string"&&!ne(o)){if(typeof o.toString!="function")throw Le("toString is not a function");if(o=o.toString(),typeof o!="string")throw Le("dirty is not a string, aborting")}if(!n.isSupported)return o;if(_e||be(e),n.removed=[],typeof o=="string"&&(V=!1),V){if(o.nodeName){var S=h(o.nodeName);if(!d[S]||Y[S])throw Le("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof _)t=et("<!---->"),a=t.ownerDocument.importNode(o,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?t=a:t.appendChild(a);else{if(!H&&!U&&!C&&o.indexOf("<")===-1)return O&&Q?O.createHTML(o):o;if(t=et(o),!t)return H?null:Q?Ue:""}t&&Te&&k(t.firstChild);for(var A=tt(V?o:t);f=A.nextNode();)rt(f)||(f.content instanceof u&&Ft(f.content),it(f));if(V)return o;if(H){if(J)for(T=bt.call(t.ownerDocument);t.firstChild;)T.appendChild(t.firstChild);else T=t;return(v.shadowroot||v.shadowrootmod)&&(T=Rt.call(i,T,!0)),T}var g=C?t.outerHTML:t.innerHTML;return C&&d["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&b(mr,t.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+g),U&&(g=N(g,ce," "),g=N(g,me," "),g=N(g,pe," ")),O&&Q?O.createHTML(g):g},n.setConfig=function(o){be(o),_e=!0},n.clearConfig=function(){B=null,_e=!1},n.isValidAttribute=function(o,e,t){B||be({});var a=h(o),f=h(e);return nt(a,f,t)},n.addHook=function(o,e){typeof e=="function"&&(w[o]=w[o]||[],X(w[o],e))},n.removeHook=function(o){if(w[o])return st(w[o])},n.removeHooks=function(o){w[o]&&(w[o]=[])},n.removeAllHooks=function(){w={}},n}var hr=vt();export{hr as p};
//# sourceMappingURL=dompurify-7357be35.js.map
