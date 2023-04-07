import{i as p,p as L,m as w,j as x,A as M,s as T,g as D,r as I,a as V}from"./@remix-run-65e438cc.js";import{R as b,r as o}from"./react-a9b6c34a.js";/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _=typeof Object.is=="function"?Object.is:z,{useState:$,useEffect:G,useLayoutEffect:W,useDebugValue:q}=b;function K(e,t,n){const r=t(),[{inst:a},l]=$({inst:{value:r,getSnapshot:t}});return W(()=>{a.value=r,a.getSnapshot=t,B(a)&&l({inst:a})},[e,r,t]),G(()=>(B(a)&&l({inst:a}),e(()=>{B(a)&&l({inst:a})})),[e]),q(r),r}function B(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_(n,r)}catch{return!0}}function Q(e,t,n){return t()}const X=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y=!X,Z=Y?Q:K;"useSyncExternalStore"in b&&(e=>e.useSyncExternalStore)(b);const J=o.createContext(null),k=o.createContext(null),R=o.createContext(null),P=o.createContext(null),v=o.createContext({outlet:null,matches:[]}),F=o.createContext(null);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function fe(e,t){let{relative:n}=t===void 0?{}:t;g()||p(!1);let{basename:r,navigator:a}=o.useContext(R),{hash:l,pathname:s,search:u}=ee(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:x([r,s])),a.createHref({pathname:c,search:u,hash:l})}function g(){return o.useContext(P)!=null}function S(){return g()||p(!1),o.useContext(P).location}function he(){g()||p(!1);let{basename:e,navigator:t}=o.useContext(R),{matches:n}=o.useContext(v),{pathname:r}=S(),a=JSON.stringify(D(n).map(u=>u.pathnameBase)),l=o.useRef(!1);return o.useEffect(()=>{l.current=!0}),o.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let i=I(u,JSON.parse(a),r,c.relative==="path");e!=="/"&&(i.pathname=i.pathname==="/"?e:x([e,i.pathname])),(c.replace?t.replace:t.push)(i,c.state,c)},[e,t,a,r])}const A=o.createContext(null);function H(e){let t=o.useContext(v).outlet;return t&&o.createElement(A.Provider,{value:e},t)}function ee(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=o.useContext(v),{pathname:a}=S(),l=JSON.stringify(D(r).map(s=>s.pathnameBase));return o.useMemo(()=>I(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function te(e,t){g()||p(!1);let{navigator:n}=o.useContext(R),r=o.useContext(k),{matches:a}=o.useContext(v),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=S(),i;if(t){var h;let d=typeof t=="string"?L(t):t;u==="/"||(h=d.pathname)!=null&&h.startsWith(u)||p(!1),i=d}else i=c;let m=i.pathname||"/",f=u==="/"?m:m.slice(u.length)||"/",E=w(e,{pathname:f}),C=ae(E&&E.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:x([u,n.encodeLocation?n.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:x([u,n.encodeLocation?n.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,r||void 0);return t&&C?o.createElement(P.Provider,{value:{location:O({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:M.Pop}},C):C}function re(){let e=ie(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:a},n):null,l)}class ne extends o.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?o.createElement(v.Provider,{value:this.props.routeContext},o.createElement(F.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:t,match:n,children:r}=e,a=o.useContext(J);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(v.Provider,{value:t},r)}function ae(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,a=n==null?void 0:n.errors;if(a!=null){let l=r.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||p(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,i=null;n&&(s.route.ErrorBoundary?i=o.createElement(s.route.ErrorBoundary,null):s.route.errorElement?i=s.route.errorElement:i=o.createElement(re,null));let h=t.concat(r.slice(0,u+1)),m=()=>{let f=l;return c?f=i:s.route.Component?f=o.createElement(s.route.Component,null):s.route.element&&(f=s.route.element),o.createElement(oe,{match:s,routeContext:{outlet:l,matches:h},children:f})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?o.createElement(ne,{location:n.location,component:i,error:c,children:m(),routeContext:{outlet:null,matches:h}}):m()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(N||(N={}));var y;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(y||(y={}));function le(e){let t=o.useContext(k);return t||p(!1),t}function se(e){let t=o.useContext(v);return t||p(!1),t}function ue(e){let t=se(),n=t.matches[t.matches.length-1];return n.route.id||p(!1),n.route.id}function ie(){var e;let t=o.useContext(F),n=le(y.UseRouteError),r=ue(y.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function me(e){return H(e.context)}function ce(e){p(!1)}function ve(e){let{basename:t="/",children:n=null,location:r,navigationType:a=M.Pop,navigator:l,static:s=!1}=e;g()&&p(!1);let u=t.replace(/^\/*/,"/"),c=o.useMemo(()=>({basename:u,navigator:l,static:s}),[u,l,s]);typeof r=="string"&&(r=L(r));let{pathname:i="/",search:h="",hash:m="",state:f=null,key:E="default"}=r,C=o.useMemo(()=>{let d=T(i,u);return d==null?null:{location:{pathname:d,search:h,hash:m,state:f,key:E},navigationType:a}},[u,i,h,m,f,E,a]);return C==null?null:o.createElement(R.Provider,{value:c},o.createElement(P.Provider,{children:n,value:C}))}function Ce(e){let{children:t,location:n}=e,r=o.useContext(J),a=r&&!t?r.router.routes:U(t);return te(a,n)}var j;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(j||(j={}));new Promise(()=>{});function U(e,t){t===void 0&&(t=[]);let n=[];return o.Children.forEach(e,(r,a)=>{if(!o.isValidElement(r))return;let l=[...t,a];if(r.type===o.Fragment){n.push.apply(n,U(r.props.children,l));return}r.type!==ce&&p(!1),!r.props.index||!r.props.children||p(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=U(r.props.children,l)),n.push(s)}),n}export{R as N,me as O,ve as R,he as a,S as b,ee as c,Ce as d,ce as e,fe as u};
//# sourceMappingURL=react-router-035a0642.js.map
