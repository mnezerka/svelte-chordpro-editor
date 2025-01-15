(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const l of u)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(u){const l={};return u.integrity&&(l.integrity=u.integrity),u.referrerPolicy&&(l.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?l.credentials="include":u.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(u){if(u.ep)return;u.ep=!0;const l=r(u);fetch(u.href,l)}})();const ir=!1;var yr=Array.isArray,Sn=Array.prototype.indexOf,Ot=Array.from,kn=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Fn=Object.getOwnPropertyDescriptors,On=Object.getPrototypeOf;function Pn(e){return e()}function At(e){for(var t=0;t<e.length;t++)e[t]()}const re=2,wr=4,Ue=8,Pt=16,fe=32,Oe=64,et=128,Ee=256,tt=512,K=1024,_e=2048,xe=4096,ue=8192,Pe=16384,In=32768,It=65536,Ln=1<<17,Dn=1<<19,br=1<<20,Ct=Symbol("$state"),Nn=Symbol("legacy props");function Er(e){return e===this.v}function Rn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function xr(e){return!Rn(e,this.v)}function Mn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function qn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function jn(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Bn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let We=!1,Yn=!1;function Hn(){We=!0}const Gn=1,Jn=2,$n=16,Kn=1,Zn=2,zn=1,Xn=2,Qn=Symbol();function rt(e,t){var r={f:0,v:e,reactions:null,equals:Er,rv:0,wv:0};return r}function Ar(e,t=!1){var o;const r=rt(e);return t||(r.equals=xr),We&&Y!==null&&Y.l!==null&&((o=Y.l).s??(o.s=[])).push(r),r}function ie(e,t=!1){return el(Ar(e,t))}function el(e){return q!==null&&q.f&re&&(ae===null?vl([e]):ae.push(e)),e}function V(e,t){return q!==null&&Be()&&q.f&(re|Pt)&&(ae===null||!ae.includes(e))&&Bn(),Cr(e,t)}function Cr(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=Br(),Tr(e,_e),Be()&&U!==null&&U.f&K&&!(U.f&(fe|Oe))&&(ce===null?_l([e]):ce.push(e))),t}function Tr(e,t){var r=e.reactions;if(r!==null)for(var o=Be(),u=r.length,l=0;l<u;l++){var s=r[l],d=s.f;d&_e||!o&&s===U||(ne(s,t),d&(K|Ee)&&(d&re?Tr(s,xe):pt(s)))}}let tl=!1;var ur,Sr,kr;function rl(){if(ur===void 0){ur=window;var e=Element.prototype,t=Node.prototype;Sr=xt(t,"firstChild").get,kr=xt(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Lt(e=""){return document.createTextNode(e)}function Me(e){return Sr.call(e)}function st(e){return kr.call(e)}function $(e,t){return Me(e)}function Xe(e,t){{var r=Me(e);return r instanceof Comment&&r.data===""?st(r):r}}function te(e,t=1,r=!1){let o=e;for(;t--;)o=st(o);return o}function nl(e){e.textContent=""}function Dt(e){var t=re|_e;U===null?t|=Ee:U.f|=br;var r=q!==null&&q.f&re?q:null;const o={children:null,ctx:Y,deps:null,equals:Er,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??U};return r!==null&&(r.children??(r.children=[])).push(o),o}function ft(e){const t=Dt(e);return t.equals=xr,t}function Fr(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var o=t[r];o.f&re?Nt(o):ve(o)}}}function ll(e){for(var t=e.parent;t!==null;){if(!(t.f&re))return t;t=t.parent}return null}function Or(e){var t,r=U;se(ll(e));try{Fr(e),t=Hr(e)}finally{se(r)}return t}function Pr(e){var t=Or(e),r=(be||e.f&Ee)&&e.deps!==null?xe:K;ne(e,r),e.equals(t)||(e.v=t,e.wv=Br())}function Nt(e){Fr(e),qe(e,0),ne(e,Pe),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Ir(e){U===null&&q===null&&jn(),q!==null&&q.f&Ee&&qn(),Mt&&Mn()}function ol(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ie(e,t,r,o=!0){var u=(e&Oe)!==0,l=U,s={ctx:Y,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|_e,first:null,fn:t,last:null,next:null,parent:u?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var d=ke;try{sr(!0),ht(s),s.f|=In}catch(E){throw ve(s),E}finally{sr(d)}}else t!==null&&pt(s);var h=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(br|et))===0;if(!h&&!u&&o&&(l!==null&&ol(s,l),q!==null&&q.f&re)){var m=q;(m.children??(m.children=[])).push(s)}return s}function il(e){const t=Ie(Ue,null,!1);return ne(t,K),t.teardown=e,t}function ar(e){Ir();var t=U!==null&&(U.f&fe)!==0&&Y!==null&&!Y.m;if(t){var r=Y;(r.e??(r.e=[])).push({fn:e,effect:U,reaction:q})}else{var o=Lr(e);return o}}function ul(e){return Ir(),ct(e)}function al(e){const t=Ie(Oe,e,!0);return(r={})=>new Promise(o=>{r.outro?nt(t,()=>{ve(t),o(void 0)}):(ve(t),o(void 0))})}function Lr(e){return Ie(wr,e,!1)}function Dr(e,t){var r=Y,o={effect:null,ran:!1};r.l.r1.push(o),o.effect=ct(()=>{e(),!o.ran&&(o.ran=!0,V(r.l.r2,!0),qt(t))})}function Nr(){var e=Y;ct(()=>{if(P(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&K&&ne(r,xe),Le(r)&&ht(r),t.ran=!1}e.l.r2.v=!1}})}function ct(e){return Ie(Ue,e,!0)}function vt(e){return _t(e)}function _t(e,t=0){return Ie(Ue|Pt|t,e,!0)}function Fe(e,t=!0){return Ie(Ue|fe,e,!0,t)}function Rr(e){var t=e.teardown;if(t!==null){const r=Mt,o=q;fr(!0),me(null);try{t.call(null)}finally{fr(r),me(o)}}}function Mr(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Nt(t[r])}}function qr(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var o=r.next;ve(r,t),r=o}}function sl(e){for(var t=e.first;t!==null;){var r=t.next;t.f&fe||ve(t),t=r}}function ve(e,t=!0){var r=!1;if((t||e.f&Dn)&&e.nodes_start!==null){for(var o=e.nodes_start,u=e.nodes_end;o!==null;){var l=o===u?null:st(o);o.remove(),o=l}r=!0}qr(e,t&&!r),Mr(e),qe(e,0),ne(e,Pe);var s=e.transitions;if(s!==null)for(const h of s)h.stop();Rr(e);var d=e.parent;d!==null&&d.first!==null&&jr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function jr(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function nt(e,t){var r=[];Rt(e,r,!0),Vr(r,()=>{ve(e),t&&t()})}function Vr(e,t){var r=e.length;if(r>0){var o=()=>--r||t();for(var u of e)u.out(o)}else t()}function Rt(e,t,r){if(!(e.f&ue)){if(e.f^=ue,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var o=e.first;o!==null;){var u=o.next,l=(o.f&It)!==0||(o.f&fe)!==0;Rt(o,t,l?r:!1),o=u}}}function lt(e){Ur(e,!0)}function Ur(e,t){if(e.f&ue){e.f^=ue,e.f&K||(e.f^=K),Le(e)&&(ne(e,_e),pt(e));for(var r=e.first;r!==null;){var o=r.next,u=(r.f&It)!==0||(r.f&fe)!==0;Ur(r,u?t:!1),r=o}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let Tt=!1,St=[];function fl(){Tt=!1;const e=St.slice();St=[],At(e)}function cl(e){Tt||(Tt=!0,queueMicrotask(fl)),St.push(e)}let Qe=!1,ot=!1,it=null,ke=!1,Mt=!1;function sr(e){ke=e}function fr(e){Mt=e}let kt=[],Re=0;let q=null;function me(e){q=e}let U=null;function se(e){U=e}let ae=null;function vl(e){ae=e}let Q=null,ee=0,ce=null;function _l(e){ce=e}let Wr=1,ut=0,be=!1,Y=null;function Br(){return++Wr}function Be(){return!We||Y!==null&&Y.l===null}function Le(e){var m;var t=e.f;if(t&_e)return!0;if(t&xe){var r=e.deps,o=(t&Ee)!==0;if(r!==null){var u,l,s=(t&tt)!==0,d=o&&U!==null&&!be,h=r.length;if(s||d){for(u=0;u<h;u++)l=r[u],(s||!((m=l==null?void 0:l.reactions)!=null&&m.includes(e)))&&(l.reactions??(l.reactions=[])).push(e);s&&(e.f^=tt)}for(u=0;u<h;u++)if(l=r[u],Le(l)&&Pr(l),l.wv>e.wv)return!0}(!o||U!==null&&!be)&&ne(e,K)}return!1}function dl(e,t){for(var r=t;r!==null;){if(r.f&et)try{r.fn(e);return}catch{r.f^=et}r=r.parent}throw Qe=!1,e}function hl(e){return(e.f&Pe)===0&&(e.parent===null||(e.parent.f&et)===0)}function dt(e,t,r,o){if(Qe){if(r===null&&(Qe=!1),hl(t))throw e;return}r!==null&&(Qe=!0);{dl(e,t);return}}function Yr(e,t,r=0){var o=e.reactions;if(o!==null)for(var u=0;u<o.length;u++){var l=o[u];l.f&re?Yr(l,t,r+1):t===l&&(r===0?ne(l,_e):l.f&K&&ne(l,xe),pt(l))}}function Hr(e){var y;var t=Q,r=ee,o=ce,u=q,l=be,s=ae,d=Y,h=e.f;Q=null,ee=0,ce=null,q=h&(fe|Oe)?null:e,be=!ke&&(h&Ee)!==0,ae=null,Y=e.ctx,ut++;try{var m=(0,e.fn)(),E=e.deps;if(Q!==null){var f;if(qe(e,ee),E!==null&&ee>0)for(E.length=ee+Q.length,f=0;f<Q.length;f++)E[ee+f]=Q[f];else e.deps=E=Q;if(!be)for(f=ee;f<E.length;f++)((y=E[f]).reactions??(y.reactions=[])).push(e)}else E!==null&&ee<E.length&&(qe(e,ee),E.length=ee);if(Be()&&ce!==null&&!(e.f&(re|xe|_e)))for(f=0;f<ce.length;f++)Yr(ce[f],e);return u!==null&&ut++,m}finally{Q=t,ee=r,ce=o,q=u,be=l,ae=s,Y=d}}function pl(e,t){let r=t.reactions;if(r!==null){var o=Sn.call(r,e);if(o!==-1){var u=r.length-1;u===0?r=t.reactions=null:(r[o]=r[u],r.pop())}}r===null&&t.f&re&&(Q===null||!Q.includes(t))&&(ne(t,xe),t.f&(Ee|tt)||(t.f^=tt),qe(t,0))}function qe(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)pl(e,r[o])}function ht(e){var t=e.f;if(!(t&Pe)){ne(e,K);var r=U,o=Y;U=e;try{t&Pt?sl(e):qr(e),Mr(e),Rr(e);var u=Hr(e);e.teardown=typeof u=="function"?u:null,e.wv=Wr;var l=e.deps,s;ir&&Yn&&e.f&_e}catch(d){dt(d,e,r,o||e.ctx)}finally{U=r}}}function gl(){if(Re>1e3){Re=0;try{Vn()}catch(e){if(it!==null)dt(e,it,null);else throw e}}Re++}function ml(e){var t=e.length;if(t!==0){gl();var r=ke;ke=!0;try{for(var o=0;o<t;o++){var u=e[o];u.f&K||(u.f^=K);var l=[];Gr(u,l),yl(l)}}finally{ke=r}}}function yl(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var o=e[r];if(!(o.f&(Pe|ue)))try{Le(o)&&(ht(o),o.deps===null&&o.first===null&&o.nodes_start===null&&(o.teardown===null?jr(o):o.fn=null))}catch(u){dt(u,o,null,o.ctx)}}}function wl(){if(ot=!1,Re>1001)return;const e=kt;kt=[],ml(e),ot||(Re=0,it=null)}function pt(e){ot||(ot=!0,queueMicrotask(wl)),it=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Oe|fe)){if(!(r&K))return;t.f^=K}}kt.push(t)}function Gr(e,t){var r=e.first,o=[];e:for(;r!==null;){var u=r.f,l=(u&fe)!==0,s=l&&(u&K)!==0,d=r.next;if(!s&&!(u&ue))if(u&Ue){if(l)r.f^=K;else try{Le(r)&&ht(r)}catch(f){dt(f,r,null,r.ctx)}var h=r.first;if(h!==null){r=h;continue}}else u&wr&&o.push(r);if(d===null){let f=r.parent;for(;f!==null;){if(e===f)break e;var m=f.next;if(m!==null){r=m;continue e}f=f.parent}}r=d}for(var E=0;E<o.length;E++)h=o[E],t.push(h),Gr(h,t)}function P(e){var E;var t=e.f,r=(t&re)!==0;if(r&&t&Pe){var o=Or(e);return Nt(e),o}if(q!==null){ae!==null&&ae.includes(e)&&Wn();var u=q.deps;e.rv<ut&&(e.rv=ut,Q===null&&u!==null&&u[ee]===e?ee++:Q===null?Q=[e]:Q.push(e))}else if(r&&e.deps===null)for(var l=e,s=l.parent,d=l;s!==null;)if(s.f&re){var h=s;d=h,s=h.parent}else{var m=s;(E=m.deriveds)!=null&&E.includes(d)||(m.deriveds??(m.deriveds=[])).push(d);break}return r&&(l=e,Le(l)&&Pr(l)),e.v}function qt(e){const t=q;try{return q=null,e()}finally{q=t}}const bl=-7169;function ne(e,t){e.f=e.f&bl|t}function Ye(e,t=!1,r){Y={p:Y,c:null,e:null,m:!1,s:e,x:null,l:null},We&&!t&&(Y.l={s:null,u:null,r1:[],r2:rt(!1)})}function He(e){const t=Y;if(t!==null){const s=t.e;if(s!==null){var r=U,o=q;t.e=null;try{for(var u=0;u<s.length;u++){var l=s[u];se(l.effect),me(l.reaction),Lr(l.fn)}}finally{se(r),me(o)}}Y=t.p,t.m=!0}return{}}function Jr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ct in e)Ft(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ct in r&&Ft(r)}}}function Ft(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let o in e)try{Ft(e[o],t)}catch{}const r=On(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const o=Fn(r);for(let u in o){const l=o[u].get;if(l)try{l.call(e)}catch{}}}}}const El=["touchstart","touchmove"];function xl(e){return El.includes(e)}let cr=!1;function Al(){cr||(cr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function $r(e){var t=q,r=U;me(null),se(null);try{return e()}finally{me(t),se(r)}}function Cl(e,t,r,o=r){e.addEventListener(t,()=>$r(r));const u=e.__on_r;u?e.__on_r=()=>{u(),o(!0)}:e.__on_r=()=>o(!0),Al()}const Tl=new Set,vr=new Set;function Sl(e,t,r,o){function u(l){if(o.capture||Ne.call(t,l),!l.cancelBubble)return $r(()=>r.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?cl(()=>{t.addEventListener(e,u,o)}):t.addEventListener(e,u,o),u}function pe(e,t,r,o,u){var l={capture:o,passive:u},s=Sl(e,t,r,l);(t===document.body||t===window||t===document)&&il(()=>{t.removeEventListener(e,s,l)})}function Ne(e){var w;var t=this,r=t.ownerDocument,o=e.type,u=((w=e.composedPath)==null?void 0:w.call(e))||[],l=u[0]||e.target,s=0,d=e.__root;if(d){var h=u.indexOf(d);if(h!==-1&&(t===document||t===window)){e.__root=t;return}var m=u.indexOf(t);if(m===-1)return;h<=m&&(s=h)}if(l=u[s]||e.target,l!==t){kn(e,"currentTarget",{configurable:!0,get(){return l||r}});var E=q,f=U;me(null),se(null);try{for(var y,a=[];l!==null;){var _=l.assignedSlot||l.parentNode||l.host||null;try{var b=l["__"+o];if(b!==void 0&&!l.disabled)if(yr(b)){var[g,...p]=b;g.apply(l,[e,...p])}else b.call(l,e)}catch(n){y?a.push(n):y=n}if(e.cancelBubble||_===t||_===null)break;l=_}if(y){for(let n of a)queueMicrotask(()=>{throw n});throw y}}finally{e.__root=t,delete e.currentTarget,me(E),se(f)}}}function Kr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function je(e,t){var r=U;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ye(e,t){var r=(t&zn)!==0,o=(t&Xn)!==0,u,l=!e.startsWith("<!>");return()=>{u===void 0&&(u=Kr(l?e:"<!>"+e),r||(u=Me(u)));var s=o?document.importNode(u,!0):u.cloneNode(!0);if(r){var d=Me(s),h=s.lastChild;je(d,h)}else je(s,s);return s}}function kl(e=""){{var t=Lt(e+"");return je(t,t),t}}function _r(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Lt();return e.append(t,r),je(t,r),e}function oe(e,t){e!==null&&e.before(t)}function jt(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Fl(e,t){return Ol(e,t)}const Se=new Map;function Ol(e,{target:t,anchor:r,props:o={},events:u,context:l,intro:s=!0}){rl();var d=new Set,h=f=>{for(var y=0;y<f.length;y++){var a=f[y];if(!d.has(a)){d.add(a);var _=xl(a);t.addEventListener(a,Ne,{passive:_});var b=Se.get(a);b===void 0?(document.addEventListener(a,Ne,{passive:_}),Se.set(a,1)):Se.set(a,b+1)}}};h(Ot(Tl)),vr.add(h);var m=void 0,E=al(()=>{var f=r??t.appendChild(Lt());return Fe(()=>{if(l){Ye({});var y=Y;y.c=l}u&&(o.$$events=u),m=e(f,o)||{},l&&He()}),()=>{var _;for(var y of d){t.removeEventListener(y,Ne);var a=Se.get(y);--a===0?(document.removeEventListener(y,Ne),Se.delete(y)):Se.set(y,a)}vr.delete(h),f!==r&&((_=f.parentNode)==null||_.removeChild(f))}});return Pl.set(m,E),m}let Pl=new WeakMap;function Ve(e,t,r=!1){var o=e,u=null,l=null,s=Qn,d=r?It:0,h=!1;const m=(f,y=!0)=>{h=!0,E(y,f)},E=(f,y)=>{s!==(s=f)&&(s?(u?lt(u):y&&(u=Fe(()=>y(o))),l&&nt(l,()=>{l=null})):(l?lt(l):y&&(l=Fe(()=>y(o))),u&&nt(u,()=>{u=null})))};_t(()=>{h=!1,t(m),h||E(null,null)},d)}function Il(e,t){return t}function Ll(e,t,r,o){for(var u=[],l=t.length,s=0;s<l;s++)Rt(t[s].e,u,!0);var d=l>0&&u.length===0&&r!==null;if(d){var h=r.parentNode;nl(h),h.append(r),o.clear(),ge(e,t[0].prev,t[l-1].next)}Vr(u,()=>{for(var m=0;m<l;m++){var E=t[m];d||(o.delete(E.k),ge(e,E.prev,E.next)),ve(E.e,!d)}})}function Dl(e,t,r,o,u,l=null){var s=e,d={flags:t,items:new Map,first:null},h=null,m=!1,E=ft(()=>{var f=r();return yr(f)?f:f==null?[]:Ot(f)});_t(()=>{var f=P(E),y=f.length;if(!(m&&y===0)){m=y===0;{var a=q;Nl(f,d,s,u,t,(a.f&ue)!==0,o)}l!==null&&(y===0?h?lt(h):h=Fe(()=>l(s)):h!==null&&nt(h,()=>{h=null})),P(E)}})}function Nl(e,t,r,o,u,l,s,d){var h=e.length,m=t.items,E=t.first,f=E,y,a=null,_=[],b=[],g,p,w,n;for(n=0;n<h;n+=1){if(g=e[n],p=s(g,n),w=m.get(p),w===void 0){var T=f?f.e.nodes_start:r;a=Ml(T,t,a,a===null?t.first:a.next,g,p,n,o,u),m.set(p,a),_=[],b=[],f=a.next;continue}if(Rl(w,g,n),w.e.f&ue&&lt(w.e),w!==f){if(y!==void 0&&y.has(w)){if(_.length<b.length){var C=b[0],S;a=C.prev;var M=_[0],R=_[_.length-1];for(S=0;S<_.length;S+=1)dr(_[S],C,r);for(S=0;S<b.length;S+=1)y.delete(b[S]);ge(t,M.prev,R.next),ge(t,a,M),ge(t,R,C),f=C,a=R,n-=1,_=[],b=[]}else y.delete(w),dr(w,f,r),ge(t,w.prev,w.next),ge(t,w,a===null?t.first:a.next),ge(t,a,w),a=w;continue}for(_=[],b=[];f!==null&&f.k!==p;)(l||!(f.e.f&ue))&&(y??(y=new Set)).add(f),b.push(f),f=f.next;if(f===null)continue;w=f}_.push(w),a=w,f=w.next}if(f!==null||y!==void 0){for(var G=y===void 0?[]:Ot(y);f!==null;)(l||!(f.e.f&ue))&&G.push(f),f=f.next;var we=G.length;if(we>0){var Ae=null;Ll(t,G,Ae,m)}}U.first=t.first&&t.first.e,U.last=a&&a.e}function Rl(e,t,r,o){Cr(e.v,t),e.i=r}function Ml(e,t,r,o,u,l,s,d,h,m){var E=(h&Gn)!==0,f=(h&$n)===0,y=E?f?Ar(u):rt(u):u,a=h&Jn?rt(s):s,_={i:a,v:y,k:l,a:null,e:null,prev:r,next:o};try{return _.e=Fe(()=>d(e,y,a),tl),_.e.prev=r&&r.e,_.e.next=o&&o.e,r===null?t.first=_:(r.next=_,r.e.next=_.e),o!==null&&(o.prev=_,o.e.prev=_.e),_}finally{}}function dr(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,u=t?t.e.nodes_start:r,l=e.e.nodes_start;l!==o;){var s=st(l);u.before(l),l=s}}function ge(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ql(e,t,r,o,u){var l=e,s="",d;_t(()=>{s!==(s=t()??"")&&(d!==void 0&&(ve(d),d=void 0),s!==""&&(d=Fe(()=>{var h=s+"",m=Kr(h);je(Me(m),m.lastChild),l.before(m)})))})}function at(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function jl(e,t,r=t){var o=Be();Cl(e,"input",u=>{var l=u?e.defaultValue:e.value;if(l=bt(e)?Et(l):l,r(l),o&&l!==(l=t())){var s=e.selectionStart,d=e.selectionEnd;e.value=l??"",d!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(d,e.value.length))}}),qt(t)==null&&e.value&&r(bt(e)?Et(e.value):e.value),ct(()=>{var u=t();bt(e)&&u===Et(e.value)||e.type==="date"&&!u&&!e.value||u!==e.value&&(e.value=u??"")})}function bt(e){var t=e.type;return t==="number"||t==="range"}function Et(e){return e===""?null:+e}function gt(e=!1){const t=Y,r=t.l.u;if(!r)return;let o=()=>Jr(t.s);if(e){let u=0,l={};const s=Dt(()=>{let d=!1;const h=t.s;for(const m in h)h[m]!==l[m]&&(l[m]=h[m],d=!0);return d&&u++,u});o=()=>P(s)}r.b.length&&ul(()=>{hr(t,o),At(r.b)}),ar(()=>{const u=qt(()=>r.m.map(Pn));return()=>{for(const l of u)typeof l=="function"&&l()}}),r.a.length&&ar(()=>{hr(t,o),At(r.a)})}function hr(e,t){if(e.l.s)for(const r of e.l.s)P(r);t()}let Ze=!1;function Vl(e){var t=Ze;try{return Ze=!1,[e(),Ze]}finally{Ze=t}}function Ul(e){for(var t=U,r=U;t!==null&&!(t.f&(fe|Oe));)t=t.parent;try{return se(t),e()}finally{se(r)}}function J(e,t,r,o){var b;var u=(r&Kn)!==0,l=!We||(r&Zn)!==0,s=!1,d;[d,s]=Vl(()=>e[t]);var h=Ct in e||Nn in e,m=(((b=xt(e,t))==null?void 0:b.set)??(h&&t in e&&(g=>e[t]=g)))||void 0,E=o,f=!0,y=()=>(f&&(f=!1,E=o),E);d===void 0&&o!==void 0&&(m&&l&&Un(),d=y(),m&&m(d));var a;if(l)a=()=>{var g=e[t];return g===void 0?y():(f=!0,g)};else{var _=Ul(()=>(u?Dt:ft)(()=>e[t]));_.f|=Ln,a=()=>{var g=P(_);return g!==void 0&&(E=void 0),g===void 0?E:g}}return a}const Wl="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Wl);Hn();var Bl=ye('<nav class="menu svelte-elogra"><div class="menu-container svelte-elogra"><button class="menu-top svelte-elogra">File</button> <div class="menu-item-container svelte-elogra"><button class="svelte-elogra">New</button> <button class="svelte-elogra">Open..</button> <button class="svelte-elogra">Save</button> <button class="svelte-elogra">Save as..</button></div></div> <div class="menu-container svelte-elogra"><button class="menu-top svelte-elogra">View</button> <div class="menu-item-container svelte-elogra"><button class="svelte-elogra">Tree</button></div></div></nav>');function Yl(e,t){let r=J(t,"on_new",8,()=>{}),o=J(t,"on_open",8,()=>{}),u=J(t,"on_save",8,()=>{}),l=J(t,"on_save_as",8,()=>{}),s=J(t,"on_tree",8,()=>{}),d=ie(null);function h(S){P(d)===S?V(d,null):V(d,S)}function m(S){V(d,null),S()}var E=Bl(),f=$(E),y=$(f),a=te(y,2),_=$(a),b=te(_,2),g=te(b,2),p=te(g,2),w=te(f,2),n=$(w),T=te(n,2),C=$(T);vt(()=>{at(a,"hidden",P(d)!=="file"),at(T,"hidden",P(d)!=="view")}),pe("click",y,()=>{h("file")}),pe("click",_,()=>{m(r())}),pe("click",b,()=>{m(o())}),pe("click",g,()=>{m(u())}),pe("click",p,()=>{m(l())}),pe("click",n,()=>{h("view")}),pe("click",C,()=>{m(s())}),oe(e,E)}var Hl=ye('<nav class="no-print svelte-13svjsv"><div class="title svelte-13svjsv">ChordPro Editor <!></div> <!></nav>');function Gl(e,t){Ye(t,!1);let r=J(t,"subtitle",8,""),o=J(t,"on_new",8,()=>{}),u=J(t,"on_open",8,()=>{}),l=J(t,"on_save",8,()=>{}),s=J(t,"on_save_as",8,()=>{}),d=J(t,"on_tree",8,()=>{});gt();var h=Hl(),m=$(h),E=te($(m));{var f=a=>{var _=kl();vt(()=>jt(_,`- ${r()??""}`)),oe(a,_)};Ve(E,a=>{r().length>0&&a(f)})}var y=te(m,2);Yl(y,{get on_new(){return o()},get on_open(){return u()},get on_save(){return l()},get on_save_as(){return s()},get on_tree(){return d()}}),oe(e,h),He()}function Jl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze={},pr;function $l(){if(pr)return ze;pr=1;function e(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}Object.defineProperty(ze,"__esModule",{value:!0});var t,r,o,u,l,s,d,h={};function m(){if(r)return t;function f(a,_,b,g){var p=Error.call(this,a);return Object.setPrototypeOf&&Object.setPrototypeOf(p,f.prototype),p.expected=_,p.found=b,p.location=g,p.name="SyntaxError",p}function y(a,_,b){return b=b||" ",a.length>_?a:(_-=a.length,a+(b+=b.repeat(_)).slice(0,_))}return r=1,function(a,_){function b(){this.constructor=a}b.prototype=_.prototype,a.prototype=new b}(f,Error),f.prototype.format=function(a){var _="Error: "+this.message;if(this.location){var b,g=null;for(b=0;b<a.length;b++)if(a[b].source===this.location.source){g=a[b].text.split(/\r\n|\n|\r/g);break}var p=this.location.start,w=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,n=this.location.source+":"+w.line+":"+w.column;if(g){var T=this.location.end,C=y("",w.line.toString().length," "),S=g[p.line-1],M=(p.line===T.line?T.column:S.length+1)-p.column||1;_+=`
 --> `+n+`
`+C+` |
`+w.line+" | "+S+`
`+C+" | "+y("",p.column-1," ")+y("",M,"^")}else _+=`
 at `+n}return _},f.buildMessage=function(a,_){var b={literal:function(T){return'"'+p(T.text)+'"'},class:function(T){var C=T.parts.map(function(S){return Array.isArray(S)?w(S[0])+"-"+w(S[1]):w(S)});return"["+(T.inverted?"^":"")+C.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(T){return T.description}};function g(T){return T.charCodeAt(0).toString(16).toUpperCase()}function p(T){return T.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(C){return"\\x0"+g(C)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(C){return"\\x"+g(C)})}function w(T){return T.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(C){return"\\x0"+g(C)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(C){return"\\x"+g(C)})}function n(T){return b[T.type](T)}return"Expected "+function(T){var C,S,M=T.map(n);if(M.sort(),M.length>0){for(C=1,S=1;C<M.length;C++)M[C-1]!==M[C]&&(M[S]=M[C],S++);M.length=S}switch(M.length){case 1:return M[0];case 2:return M[0]+" or "+M[1];default:return M.slice(0,-1).join(", ")+", or "+M[M.length-1]}}(a)+" but "+function(T){return T?'"'+p(T)+'"':"end of input"}(_)+" found."},t={StartRules:["All"],SyntaxError:f,parse:function(a,_){var b,g,p,w,n={},T=(_=_!==void 0?_:{}).grammarSource,C={All:rr},S=rr,M="{title:",R="}",G="{subtitle:",we="{artist:",Ae="{c:",Ge="{comment:",Vt="{",Ut="soc",Wt="start_of_chorus",Bt="eoc",Yt="end_of_chorus",zr="[",Xr="]",Qr=/^[\n\r]/,de=/^[^}]/,Ht=/^[^{[\n\r]/,Gt=/^[A-Z]/,Jt=/^[^\]]/,Je={type:"any"},en=De([`
`,"\r"],!1,!1),tn=z("{title:",!1),$e=z(" ",!1),he=De(["}"],!0,!1),Ce=z("}",!1),rn=z("{subtitle:",!1),nn=z("{artist:",!1),ln=z("{c:",!1),on=z("{comment:",!1),$t=z("{",!1),un=z("soc",!1),an=z("start_of_chorus",!1),sn=z("eoc",!1),fn=z("end_of_chorus",!1),Kt=De(["{","[",`
`,"\r"],!0,!1),cn=z("[",!1),Zt=De([["A","Z"]],!1,!1),zt=De(["]"],!0,!1),vn=z("]",!1),_n=function(c){return""},dn=function(c,v){return{header:c,content:v}},hn=function(c,v,x){return{title:c,subTitle:v,artist:x}},pn=function(c){return c},gn=function(c){return c},mn=function(c){return c},yn=function(c){return{type:"comment",value:c}},Xt=function(c,v){return v},wn=function(c,v,x){return[c].concat(v)},bn=function(c){return{type:"verse",items:c}},En=function(c){return{type:"chorus",items:c}},Qt=function(c,v){return v},xn=function(c,v){return[c].concat(v)},An=function(c){return{type:"line",items:c}},Cn=function(c){return{type:"text",value:c}},Tn=function(c){return{type:"chord",value:c}},i=0|_.peg$currPos,Te=[{line:1,column:1}],le=i,Ke=_.peg$maxFailExpected||[],A=0|_.peg$silentFails;if(_.startRule){if(!(_.startRule in C))throw new Error(`Can't start parsing from rule "`+_.startRule+'".');S=C[_.startRule]}function z(c,v){return{type:"literal",text:c,ignoreCase:v}}function De(c,v,x){return{type:"class",parts:c,inverted:v,ignoreCase:x}}function er(c){var v,x=Te[c];if(x)return x;if(c>=Te.length)v=Te.length-1;else for(v=c;!Te[--v];);for(x={line:(x=Te[v]).line,column:x.column};v<c;)a.charCodeAt(v)===10?(x.line++,x.column=1):x.column++,v++;return Te[c]=x,x}function tr(c,v,x){var F=er(c),N=er(v);return{source:T,start:{offset:c,line:F.line,column:F.column},end:{offset:v,line:N.line,column:N.column}}}function k(c){i<le||(i>le&&(le=i,Ke=[]),Ke.push(c))}function rr(){var c,v,x,F,N;return c=i,v=function(){var I,B,Z,L;return I=i,B=function(){var O,H,j,W,D;if(O=i,a.substr(i,7)===M?(H=M,i+=7):(H=n,A===0&&k(tn)),H!==n){if(a.charCodeAt(i)===32?i++:A===0&&k($e),j=i,W=[],D=a.charAt(i),de.test(D)?i++:(D=n,A===0&&k(he)),D!==n)for(;D!==n;)W.push(D),D=a.charAt(i),de.test(D)?i++:(D=n,A===0&&k(he));else W=n;(j=W!==n?a.substring(j,i):W)!==n?(a.charCodeAt(i)===125?(W=R,i++):(W=n,A===0&&k(Ce)),W!==n&&(D=mt())!==n?O=pn(j):(i=O,O=n)):(i=O,O=n)}else i=O,O=n;return O}(),B===n&&(B=null),Z=function(){var O,H,j,W,D;if(O=i,a.substr(i,10)===G?(H=G,i+=10):(H=n,A===0&&k(rn)),H!==n){if(a.charCodeAt(i)===32?i++:A===0&&k($e),j=i,W=[],D=a.charAt(i),de.test(D)?i++:(D=n,A===0&&k(he)),D!==n)for(;D!==n;)W.push(D),D=a.charAt(i),de.test(D)?i++:(D=n,A===0&&k(he));else W=n;(j=W!==n?a.substring(j,i):W)!==n?(a.charCodeAt(i)===125?(W=R,i++):(W=n,A===0&&k(Ce)),W!==n&&(D=mt())!==n?O=gn(j):(i=O,O=n)):(i=O,O=n)}else i=O,O=n;return O}(),Z===n&&(Z=null),L=function(){var O,H,j,W,D;if(O=i,a.substr(i,8)===we?(H=we,i+=8):(H=n,A===0&&k(nn)),H!==n){if(a.charCodeAt(i)===32?i++:A===0&&k($e),j=i,W=[],D=a.charAt(i),de.test(D)?i++:(D=n,A===0&&k(he)),D!==n)for(;D!==n;)W.push(D),D=a.charAt(i),de.test(D)?i++:(D=n,A===0&&k(he));else W=n;(j=W!==n?a.substring(j,i):W)!==n?(a.charCodeAt(i)===125?(W=R,i++):(W=n,A===0&&k(Ce)),W!==n&&(D=mt())!==n?O=mn(j):(i=O,O=n)):(i=O,O=n)}else i=O,O=n;return O}(),L===n&&(L=null),I=hn(B,Z,L),I}(),x=function(){var I,B,Z,L,O,H,j;if(I=i,B=yt(),B!==n){if(Z=[],L=i,(O=X())!==n){if(H=[],(j=X())!==n)for(;j!==n;)H.push(j),j=X();else H=n;H!==n&&(j=yt())!==n?L=Xt(B,j):(i=L,L=n)}else i=L,L=n;for(;L!==n;)if(Z.push(L),L=i,(O=X())!==n){if(H=[],(j=X())!==n)for(;j!==n;)H.push(j),j=X();else H=n;H!==n&&(j=yt())!==n?L=Xt(B,j):(i=L,L=n)}else i=L,L=n;if(L=i,A++,a.length>i?(O=a.charAt(i),i++):(O=n,A===0&&k(Je)),A--,O===n?L=void 0:(i=L,L=n),L===n){if(L=[],(O=X())!==n)for(;O!==n;)L.push(O),O=X();else L=n;L===n&&(L=i,A++,a.length>i?(O=a.charAt(i),i++):(O=n,A===0&&k(Je)),A--,O===n?L=void 0:(i=L,L=n))}L!==n?I=wn(B,Z):(i=I,I=n)}else i=I,I=n;return I}(),x===n&&(x=i,F=i,A++,a.length>i?(N=a.charAt(i),i++):(N=n,A===0&&k(Je)),A--,N===n?F=void 0:(i=F,F=n),F!==n&&(F=_n()),x=F),x!==n?c=dn(v,x):(i=c,c=n),c}function X(){var c;return c=a.charAt(i),Qr.test(c)?i++:(c=n,A===0&&k(en)),c}function mt(){var c,v;if(c=[],(v=X())!==n)for(;v!==n;)c.push(v),v=X();else c=n;return c===n&&(c=i,A++,a.length>i?(v=a.charAt(i),i++):(v=n,A===0&&k(Je)),A--,v===n?c=void 0:(i=c,c=n)),c}function yt(){var c;return(c=function(){var v,x;return v=i,(x=nr())!==n&&(x=bn(x)),v=x,v}())===n&&(c=function(){var v,x,F,N,I,B,Z,L;return v=i,a.charCodeAt(i)===123?(x=Vt,i++):(x=n,A===0&&k($t)),x!==n?(a.substr(i,3)===Ut?(F=Ut,i+=3):(F=n,A===0&&k(un)),F===n&&(a.substr(i,15)===Wt?(F=Wt,i+=15):(F=n,A===0&&k(an))),F!==n?(a.charCodeAt(i)===125?(N=R,i++):(N=n,A===0&&k(Ce)),N!==n&&X()!==n&&(I=nr())!==n&&X()!==n?(a.charCodeAt(i)===123?(B=Vt,i++):(B=n,A===0&&k($t)),B!==n?(a.substr(i,3)===Bt?(Z=Bt,i+=3):(Z=n,A===0&&k(sn)),Z===n&&(a.substr(i,13)===Yt?(Z=Yt,i+=13):(Z=n,A===0&&k(fn))),Z!==n?(a.charCodeAt(i)===125?(L=R,i++):(L=n,A===0&&k(Ce)),L!==n?v=En(I):(i=v,v=n)):(i=v,v=n)):(i=v,v=n)):(i=v,v=n)):(i=v,v=n)):(i=v,v=n),v}())===n&&(c=function(){var v,x,F,N,I;if(v=i,a.substr(i,3)===Ae?(x=Ae,i+=3):(x=n,A===0&&k(ln)),x===n&&(a.substr(i,9)===Ge?(x=Ge,i+=9):(x=n,A===0&&k(on))),x!==n){if(a.charCodeAt(i)===32?i++:A===0&&k($e),F=i,N=[],I=a.charAt(i),de.test(I)?i++:(I=n,A===0&&k(he)),I!==n)for(;I!==n;)N.push(I),I=a.charAt(i),de.test(I)?i++:(I=n,A===0&&k(he));else N=n;(F=N!==n?a.substring(F,i):N)!==n?(a.charCodeAt(i)===125?(N=R,i++):(N=n,A===0&&k(Ce)),N!==n?v=yn(F):(i=v,v=n)):(i=v,v=n)}else i=v,v=n;return v}()),c}function nr(){var c,v,x,F,N;if(c=i,(v=wt())!==n){for(x=[],F=i,X()!==n&&(N=wt())!==n?F=Qt(v,N):(i=F,F=n);F!==n;)x.push(F),F=i,X()!==n&&(N=wt())!==n?F=Qt(v,N):(i=F,F=n);c=xn(v,x)}else i=c,c=n;return c}function wt(){var c,v;if(c=[],(v=or())===n&&(v=lr()),v!==n)for(;v!==n;)c.push(v),(v=or())===n&&(v=lr());else c=n;return c!==n&&(c=An(c)),c}function lr(){var c,v,x;if(c=i,v=[],x=a.charAt(i),Ht.test(x)?i++:(x=n,A===0&&k(Kt)),x!==n)for(;x!==n;)v.push(x),x=a.charAt(i),Ht.test(x)?i++:(x=n,A===0&&k(Kt));else v=n;return(c=v!==n?a.substring(c,i):v)!==n&&(c=Cn(c)),c}function or(){var c,v,x,F,N,I,B;if(c=i,a.charCodeAt(i)===91?(v=zr,i++):(v=n,A===0&&k(cn)),v!==n){if(x=i,F=i,N=[],I=a.charAt(i),Gt.test(I)?i++:(I=n,A===0&&k(Zt)),I!==n)for(;I!==n;)N.push(I),I=a.charAt(i),Gt.test(I)?i++:(I=n,A===0&&k(Zt));else N=n;if(N!==n){for(I=[],B=a.charAt(i),Jt.test(B)?i++:(B=n,A===0&&k(zt));B!==n;)I.push(B),B=a.charAt(i),Jt.test(B)?i++:(B=n,A===0&&k(zt));F=N=[N,I]}else i=F,F=n;(x=F!==n?a.substring(x,i):F)!==n?(a.charCodeAt(i)===93?(F=Xr,i++):(F=n,A===0&&k(vn)),F!==n?c=Tn(x):(i=c,c=n)):(i=c,c=n)}else i=c,c=n;return c}if(b=S(),_.peg$library)return{peg$result:b,peg$currPos:i,peg$FAILED:n,peg$maxFailExpected:Ke,peg$maxFailPos:le};if(b!==n&&i===a.length)return b;throw b!==n&&i<a.length&&k({type:"end"}),g=Ke,p=le<a.length?a.charAt(le):null,w=le<a.length?tr(le,le+1):tr(le,le),new f(f.buildMessage(g,p),g,p,w)}}}var E=e(function(){if(d)return h;d=1;const f=m(),y=function(){if(u)return o;function _(g){let p="",w="";for(let T=0;T<g.items.length;T++){const C=g.items[T];let S;switch(C.value.length,C.type){case"chord":S=w.length-p.length,S>0&&(p+=" ".repeat(S)),p+=C.value+" ";break;case"text":w+=C.value,S=p.length-w.length,S>0&&(w+=" ".repeat(S))}}let n="";return p.length>0&&(n+=p+`
`),n+w}function b(g){var p="";for(let w=0;w<g.items.length;w++){const n=g.items[w];n.type=="line"&&(p+=_(n)+`
`)}return p}return u=1,o={processSong:function(g){var p="";g.header.title&&(p+=`Title: ${g.header.title}
`),g.header.subTitle&&(p+=`Subtitle: ${g.header.subTitle}
`),g.header.artist&&(p+=`Artist: ${g.header.artist}
`),p+=`
`;for(let w=0;w<g.content.length;w++){let n=g.content[w];w>0&&(p+=`

`),n.type!="verse"&&n.type!="chorus"||(p+=b(n))}return p},processVerse:b,processRow:_}}(),a=function(){if(s)return l;function _(g){let p=[],w=[],n=null;for(let C=0;C<g.items.length;C++){let S=g.items[C];S.type==="chord"?(p.push(S.value),n=S.value):S.type==="text"&&(n===null&&p.push(""),w.push(S.value),n=null)}let T='<table class="line">';return p.filter(C=>C!=="").length>0&&(T+='<tr class="line-chords">',T+=p.map(C=>`<td class="chord">${C}</td>`).join(`
`),T+="</tr>"),T+='<tr class="line-lyrics">',T+=w.map(C=>`<td class="lyrics">${C.replaceAll(" ","&nbsp;")}</td>`).join(`
`),T+="</tr>",T+="</table>",T}function b(g){let p=`<div class="${g.type}">
`;for(let w=0;w<g.items.length;w++)p+=_(g.items[w]);return p+="</div>",p}return s=1,l={processSong:function(g){var p=`<div class="jschordpro-song">

`;p+=`<div class="header">
`,g.header.title&&g.header.title.length>0&&(p+=`<h1>${g.header.title}</h1>
`),g.header.subtitle&&g.header.subTitle.length>0&&(p+=`<h2>${g.header.subTitle}</h2>
`),g.header.artist&&g.header.artist.length>0&&(p+=`<h2>${g.header.artist}</h2>
`),p+=`</div>

`,p+=`<div class="content">
`;for(let w=0;w<g.content.length;w++)p+=b(g.content[w]);return(p+=`</div>
`)+`</div>
`}}}();return h.parse=f.parse,h.to_ascii=y.processSong,h.to_html=a.processSong,h}());return ze.default=E,ze}var Kl=$l();const gr=Jl(Kl);var Zl=ye("<li><!></li>"),zl=ye('<div class="label svelte-1mqreq7" role="button"> </div> <ul class="svelte-1mqreq7"><!></ul>',1);function Zr(e,t){Ye(t,!1);let r=J(t,"root",8,null),o=J(t,"level",8,0),u=ie(""),l=ie([]),s=ie(o()<2);Dr(()=>(Jr(r()),P(l)),()=>{r()!==null&&(V(u,r().type),r().type==="chordpro"?V(l,[r().header,r().content]):r().type==="header"?(V(u,"header: "),V(l,[{type:"leave",label:"title",value:r().title},{type:"leave",label:"subtitle",value:r().subtitle},{type:"leave",label:"artist",value:r().artist}])):r().type==="content"?V(l,r().parts):r().type==="verse"||r().type==="chorus"?V(l,r().lines):r().type==="row"?V(l,r().children):r().type==="chord"||r().type==="text"?V(u,r().type+": "+r().value):r().type==="leave"&&V(u,r().label+": "+r().value),P(l).length===0&&V(s,!0))}),Nr(),gt();var d=_r(),h=Xe(d);{var m=E=>{var f=zl(),y=Xe(f),a=$(y),_=te(y,2),b=$(_);{var g=p=>{var w=_r(),n=Xe(w);Dl(n,1,()=>P(l),Il,(C,S)=>{var M=Zl(),R=$(M),G=ft(()=>o()+1);Zr(R,{get root(){return P(S)},get level(){return P(G)}}),oe(C,M)}),oe(p,w)};Ve(b,p=>{P(l).length>0&&P(s)&&p(g)})}vt(()=>{at(y,"expanded",P(s)),at(y,"collapsed",!P(s)),jt(a,P(u))}),pe("click",y,()=>{P(l).length===0?V(s,!0):V(s,!P(s))}),oe(E,f)};Ve(h,E=>{r()&&E(m)})}oe(e,d),He()}var Xl=ye('<div class="error svelte-1dzx5iw"> </div>'),Ql=ye('<div class="no-print tree svelte-1dzx5iw"><!></div>'),eo=ye('<div class="preview"><!> <!> <!></div>');function to(e,t){Ye(t,!1);let r=J(t,"source",8,""),o=J(t,"show_tree",8,!1),u=ie(null),l=ie(null);function s(a){let _="";try{V(l,gr.parse(a+`
`)),_=gr.to_html(P(l)),V(u,null)}catch(b){V(u,b.toString())}return _}gt();var d=eo(),h=$(d);{var m=a=>{var _=Xl(),b=$(_);vt(()=>jt(b,P(u))),oe(a,_)};Ve(h,a=>{P(u)!==null&&a(m)})}var E=te(h,2);ql(E,()=>s(r()));var f=te(E,2);{var y=a=>{var _=Ql(),b=$(_);Zr(b,{get root(){return P(l)}}),oe(a,_)};Ve(f,a=>{o()&&P(l)!==null&&a(y)})}oe(e,d),He()}function ro(){if("showSaveFilePicker"in window){const t={types:[{description:"Chordpro text file",accept:{"text/plain":[".txt"]}}]};return window.showSaveFilePicker(t)}const e={type:"save-file",accepts:[{description:"Text file",extensions:["txt"],mimeTypes:["text/plain"]}]};return window.chooseFileSystemEntries(e)}function no(){if("showOpenFilePicker"in window){const t={types:[{description:"Chordpro",accept:{"text/plain":[".txt"]}}],excludeAcceptAllOption:!1,multiple:!1};return window.showOpenFilePicker(t).then(r=>r[0])}const e={type:"open-file",accepts:[{description:"Chordpro text file",extensions:["txt"],mimeTypes:["text/plain"]}]};return window.chooseFileSystemEntries(e)}function lo(e){return e.text?e.text():new Promise(r=>{const o=new FileReader;o.addEventListener("loadend",function(){r(o.result)}),o.readAsText(e)})}function mr(e,t){e.createWriter?e.createWriter().then(function(r){r.write(0,t).then(function(){return r.close()})}):e.createWritable().then(function(r){r.write(t).then(function(){return r.close()})})}var oo=ye('<!> <main class="svelte-gg43r6"><div class="editor no-print svelte-gg43r6"><textarea class="no-print svelte-gg43r6"></textarea></div> <div class="preview svelte-gg43r6"><!></div></main> <footer class="no-print svelte-gg43r6">Copyright 2024</footer>',1);function io(e,t){Ye(t,!1);let r=J(t,"song",8,"");const o="chooseFileSystemEntries"in window||"showOpenFilePicker"in window;let u=ie(!1),l=ie(),s=ie(r()),d=ie("");function h(R,G){let we;return function(){const Ae=this,Ge=arguments;clearTimeout(we),we=setTimeout(()=>R.apply(Ae,Ge),G)}}const m=h(E,300);function E(R){V(d,R)}function f(){V(s,""),V(d,"")}async function y(){V(l,await no());try{let R=await P(l).getFile();V(s,await lo(R))}catch(R){console.error("read failed: ",R)}}async function a(){if(P(l))try{await mr(P(l),P(s))}catch(R){const G="Unable to save file";console.error(G,R),alert(G)}}async function _(){if(!o){console.error("this browser does not support access to file system");return}try{V(l,await ro())}catch(R){if(R.name==="AbortError")return;const G="An error occured trying to open the file.";console.error(G,R),alert(G);return}try{await mr(P(l),P(s))}catch(R){const G="Unable to save file.";console.error(G,R),alert(G);return}}function b(){V(u,!P(u))}Dr(()=>P(s),()=>{m(P(s))}),Nr(),gt();var g=oo(),p=Xe(g),w=ft(()=>P(l)&&P(l).name);Gl(p,{get subtitle(){return P(w)},on_open:y,on_new:f,on_save:a,on_save_as:_,on_tree:b});var n=te(p,2),T=$(n),C=$(T),S=te(T,2),M=$(S);to(M,{get source(){return P(d)},get show_tree(){return P(u)}}),jl(C,()=>P(s),R=>V(s,R)),oe(e,g),He()}const uo=`{title: In My Time of Dyin'}
{subtitle: Bob Dylan}

[Am]In my time of dying
[Am]I don't want nobody to mourn
[Am]All I want for you to do
Is [D]take my body [Am]home

{start_of_chorus}
[Am]Well, well, well, so I can die easy
Well, well, [D]well, so I can die [Am]easy
[Am]Well, well, well, so I can die easy
[D]Jesus gonna make up my [G]dy[G#]ing [Am]bed
{end_of_chorus}

Well, meet me Jesus, meet me
Meet me in the middle of the air
If these wings should fail to me
Lord, won't you meet me with another pair

Lord, in my time of dying
I don't want nobody to cry
All I want you to do
Is take me when I die
`;Fl(io,{target:document.body,props:{song:uo}});
