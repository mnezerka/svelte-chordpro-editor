var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function h(){return u(" ")}function f(){return u("")}function p(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function y(e,t){e.value=null==t?"":t}function v(e,t,n){e.classList[n?"add":"remove"](t)}class g{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=c(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)l(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(a)}}let b;function w(e){b=e}const $=[],x=[],_=[],k=[],E=Promise.resolve();let S=!1;function j(e){_.push(e)}const O=new Set;let T=0;function A(){const e=b;do{for(;T<$.length;){const e=$[T];T++,w(e),C(e.$$)}for(w(null),$.length=0,T=0;x.length;)x.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];O.has(t)||(O.add(t),t())}_.length=0}while($.length);for(;k.length;)k.pop()();S=!1,O.clear(),w(e)}function C(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const P=new Set;let N;function I(){N={r:0,c:[],p:N}}function B(){N.r||r(N.c),N=N.p}function R(e,t){e&&e.i&&(P.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(P.has(e))return;P.add(e),N.c.push((()=>{P.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function F(e){e&&e.c()}function L(e,n,s,i){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=e.$$;l&&l.m(n,s),i||j((()=>{const n=a.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(j)}function M(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&($.push(e),S||(S=!0,E.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,o,s,i,l,c,u,h=[-1]){const f=b;w(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:o.target||f.$$.root};u&&u(p.root);let d=!1;if(p.ctx=s?s(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),d&&G(t,e)),n})):[],p.update(),d=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&R(t.$$.fragment),L(t,o.target,o.anchor,o.customElement),A()}w(f)}class J{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function H(t){let n,o,s,u,f,m,y,g,b,w,$,x,_,k,E,S,j,O,T,A;return{c(){n=c("nav"),o=c("div"),s=c("button"),s.textContent="File",u=h(),f=c("div"),m=c("button"),m.textContent="New",y=h(),g=c("button"),g.textContent="Open..",b=h(),w=c("button"),w.textContent="Save",$=h(),x=c("button"),x.textContent="Save as..",_=h(),k=c("div"),E=c("button"),E.textContent="View",S=h(),j=c("div"),O=c("button"),O.textContent="Tree",d(s,"class","menu-top svelte-elogra"),d(m,"class","svelte-elogra"),d(g,"class","svelte-elogra"),d(w,"class","svelte-elogra"),d(x,"class","svelte-elogra"),d(f,"class","menu-item-container svelte-elogra"),v(f,"hidden","file"!==t[5]),d(o,"class","menu-container svelte-elogra"),d(E,"class","menu-top svelte-elogra"),d(O,"class","svelte-elogra"),d(j,"class","menu-item-container svelte-elogra"),v(j,"hidden","view"!==t[5]),d(k,"class","menu-container svelte-elogra"),d(n,"class","menu svelte-elogra")},m(e,r){l(e,n,r),i(n,o),i(o,s),i(o,u),i(o,f),i(f,m),i(f,y),i(f,g),i(f,b),i(f,w),i(f,$),i(f,x),i(n,_),i(n,k),i(k,E),i(k,S),i(k,j),i(j,O),T||(A=[p(s,"click",t[8]),p(m,"click",t[9]),p(g,"click",t[10]),p(w,"click",t[11]),p(x,"click",t[12]),p(E,"click",t[13]),p(O,"click",t[14])],T=!0)},p(e,[t]){32&t&&v(f,"hidden","file"!==e[5]),32&t&&v(j,"hidden","view"!==e[5])},i:e,o:e,d(e){e&&a(n),T=!1,r(A)}}}function U(e,t,n){let{on_new:r=(()=>{})}=t,{on_open:o=(()=>{})}=t,{on_save:s=(()=>{})}=t,{on_save_as:i=(()=>{})}=t,{on_tree:l=(()=>{})}=t,a=null;function c(e){n(5,a=a===e?null:e)}function u(e){n(5,a=null),e()}return e.$$set=e=>{"on_new"in e&&n(0,r=e.on_new),"on_open"in e&&n(1,o=e.on_open),"on_save"in e&&n(2,s=e.on_save),"on_save_as"in e&&n(3,i=e.on_save_as),"on_tree"in e&&n(4,l=e.on_tree)},[r,o,s,i,l,a,c,u,()=>{c("file")},()=>{u(r)},()=>{u(o)},()=>{u(s)},()=>{u(i)},()=>{c("view")},()=>{u(l)}]}class W extends J{constructor(e){super(),D(this,e,U,H,s,{on_new:0,on_open:1,on_save:2,on_save_as:3,on_tree:4})}}function z(e){let t,n;return{c(){t=u("- "),n=u(e[0])},m(e,r){l(e,t,r),l(e,n,r)},p(e,t){1&t&&m(n,e[0])},d(e){e&&a(t),e&&a(n)}}}function V(e){let t,n,r,o,s,f,p=e[0].length>0&&z(e);return s=new W({props:{on_new:e[1],on_open:e[2],on_save:e[3],on_save_as:e[4],on_tree:e[5]}}),{c(){t=c("nav"),n=c("div"),r=u("ChordPro Editor\n        "),p&&p.c(),o=h(),F(s.$$.fragment),d(n,"class","title svelte-13svjsv"),d(t,"class","no-print svelte-13svjsv")},m(e,a){l(e,t,a),i(t,n),i(n,r),p&&p.m(n,null),i(t,o),L(s,t,null),f=!0},p(e,[t]){e[0].length>0?p?p.p(e,t):(p=z(e),p.c(),p.m(n,null)):p&&(p.d(1),p=null);const r={};2&t&&(r.on_new=e[1]),4&t&&(r.on_open=e[2]),8&t&&(r.on_save=e[3]),16&t&&(r.on_save_as=e[4]),32&t&&(r.on_tree=e[5]),s.$set(r)},i(e){f||(R(s.$$.fragment,e),f=!0)},o(e){q(s.$$.fragment,e),f=!1},d(e){e&&a(t),p&&p.d(),M(s)}}}function K(e,t,n){let{subtitle:r=""}=t,{on_new:o=(()=>{})}=t,{on_open:s=(()=>{})}=t,{on_save:i=(()=>{})}=t,{on_save_as:l=(()=>{})}=t,{on_tree:a=(()=>{})}=t;return e.$$set=e=>{"subtitle"in e&&n(0,r=e.subtitle),"on_new"in e&&n(1,o=e.on_new),"on_open"in e&&n(2,s=e.on_open),"on_save"in e&&n(3,i=e.on_save),"on_save_as"in e&&n(4,l=e.on_save_as),"on_tree"in e&&n(5,a=e.on_tree)},[r,o,s,i,l,a]}class Q extends J{constructor(e){super(),D(this,e,K,V,s,{subtitle:0,on_new:1,on_open:2,on_save:3,on_save_as:4,on_tree:5})}}var X="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z,ee=Y((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r,o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==X?X:"undefined"!=typeof self?self:{},i={},l={exports:{}};r=s,o=function(){function e(t,n,r){return this.id=++e.highestId,this.name=t,this.symbols=n,this.postprocess=r,this}function t(e,t,n,r){this.rule=e,this.dot=t,this.reference=n,this.data=[],this.wantedBy=r,this.isComplete=this.dot===e.symbols.length}function n(e,t){this.grammar=e,this.index=t,this.states=[],this.wants={},this.scannable=[],this.completed={}}function r(e,t){this.rules=e,this.start=t||this.rules[0].name;var n=this.byName={};this.rules.forEach((function(e){n.hasOwnProperty(e.name)||(n[e.name]=[]),n[e.name].push(e)}))}function o(){this.reset("")}function s(e,t,s){if(e instanceof r){var i=e;s=t}else i=r.fromCompiled(e,t);for(var l in this.grammar=i,this.options={keepHistory:!1,lexer:i.lexer||new o},s||{})this.options[l]=s[l];this.lexer=this.options.lexer,this.lexerState=void 0;var a=new n(i,0);this.table=[a],a.wants[i.start]=[],a.predict(i.start),a.process(),this.current=0}function i(e){var t=typeof e;if("string"===t)return e;if("object"===t){if(e.literal)return JSON.stringify(e.literal);if(e instanceof RegExp)return e.toString();if(e.type)return"%"+e.type;if(e.test)return"<"+String(e.test)+">";throw new Error("Unknown symbol type: "+e)}}return e.highestId=0,e.prototype.toString=function(e){var t=void 0===e?this.symbols.map(i).join(" "):this.symbols.slice(0,e).map(i).join(" ")+" ● "+this.symbols.slice(e).map(i).join(" ");return this.name+" → "+t},t.prototype.toString=function(){return"{"+this.rule.toString(this.dot)+"}, from: "+(this.reference||0)},t.prototype.nextState=function(e){var n=new t(this.rule,this.dot+1,this.reference,this.wantedBy);return n.left=this,n.right=e,n.isComplete&&(n.data=n.build(),n.right=void 0),n},t.prototype.build=function(){var e=[],t=this;do{e.push(t.right.data),t=t.left}while(t.left);return e.reverse(),e},t.prototype.finish=function(){this.rule.postprocess&&(this.data=this.rule.postprocess(this.data,this.reference,s.fail))},n.prototype.process=function(e){for(var t=this.states,n=this.wants,r=this.completed,o=0;o<t.length;o++){var i=t[o];if(i.isComplete){if(i.finish(),i.data!==s.fail){for(var l=i.wantedBy,a=l.length;a--;){var c=l[a];this.complete(c,i)}if(i.reference===this.index){var u=i.rule.name;(this.completed[u]=this.completed[u]||[]).push(i)}}}else{if("string"!=typeof(u=i.rule.symbols[i.dot])){this.scannable.push(i);continue}if(n[u]){if(n[u].push(i),r.hasOwnProperty(u)){var h=r[u];for(a=0;a<h.length;a++){var f=h[a];this.complete(i,f)}}}else n[u]=[i],this.predict(u)}}},n.prototype.predict=function(e){for(var n=this.grammar.byName[e]||[],r=0;r<n.length;r++){var o=n[r],s=this.wants[e],i=new t(o,0,this.index,s);this.states.push(i)}},n.prototype.complete=function(e,t){var n=e.nextState(t);this.states.push(n)},r.fromCompiled=function(t,n){var o=t.Lexer;t.ParserStart&&(n=t.ParserStart,t=t.ParserRules);var s=new r(t=t.map((function(t){return new e(t.name,t.symbols,t.postprocess)})),n);return s.lexer=o,s},o.prototype.reset=function(e,t){this.buffer=e,this.index=0,this.line=t?t.line:1,this.lastLineBreak=t?-t.col:0},o.prototype.next=function(){if(this.index<this.buffer.length){var e=this.buffer[this.index++];return"\n"===e&&(this.line+=1,this.lastLineBreak=this.index),{value:e}}},o.prototype.save=function(){return{line:this.line,col:this.index-this.lastLineBreak}},o.prototype.formatError=function(e,t){var n=this.buffer;if("string"==typeof n){var r=n.split("\n").slice(Math.max(0,this.line-5),this.line);n.indexOf("\n",this.index);var o=this.index-this.lastLineBreak,s=String(this.line).length;return t+=" at line "+this.line+" col "+o+":\n\n",t+=r.map((function(e,t){return i(this.line-r.length+t+1,s)+" "+e}),this).join("\n"),t+"\n"+i("",s+o)+"^\n"}return t+" at index "+(this.index-1);function i(e,t){var n=String(e);return Array(t-n.length+1).join(" ")+n}},s.fail={},s.prototype.feed=function(e){var t,r=this.lexer;for(r.reset(e,this.lexerState);;){try{if(!(t=r.next()))break}catch(e){var s=new n(this.grammar,this.current+1);throw this.table.push(s),(a=new Error(this.reportLexerError(e))).offset=this.current,a.token=e.token,a}var i=this.table[this.current];this.options.keepHistory||delete this.table[this.current-1];var l=this.current+1;s=new n(this.grammar,l),this.table.push(s);for(var a,c=void 0!==t.text?t.text:t.value,u=r.constructor===o?t.value:t,h=i.scannable,f=h.length;f--;){var p=h[f],d=p.rule.symbols[p.dot];if(d.test?d.test(u):d.type?d.type===t.type:d.literal===c){var m=p.nextState({data:u,token:t,isToken:!0,reference:l-1});s.states.push(m)}}if(s.process(),0===s.states.length)throw(a=new Error(this.reportError(t))).offset=this.current,a.token=t,a;this.options.keepHistory&&(i.lexerState=r.save()),this.current++}return i&&(this.lexerState=r.save()),this.results=this.finish(),this},s.prototype.reportLexerError=function(e){var t,n,r=e.token;return r?(t="input "+JSON.stringify(r.text[0])+" (lexer error)",n=this.lexer.formatError(r,"Syntax error")):(t="input (lexer error)",n=e.message),this.reportErrorCommon(n,t)},s.prototype.reportError=function(e){var t=(e.type?e.type+" token: ":"")+JSON.stringify(void 0!==e.value?e.value:e),n=this.lexer.formatError(e,"Syntax error");return this.reportErrorCommon(n,t)},s.prototype.reportErrorCommon=function(e,t){var n=[];n.push(e);var r=this.table.length-2,o=this.table[r],s=o.states.filter((function(e){var t=e.rule.symbols[e.dot];return t&&"string"!=typeof t}));return 0===s.length?(n.push("Unexpected "+t+". I did not expect any more input. Here is the state of my parse table:\n"),this.displayStateStack(o.states,n)):(n.push("Unexpected "+t+". Instead, I was expecting to see one of the following:\n"),s.map((function(e){return this.buildFirstStateStack(e,[])||[e]}),this).forEach((function(e){var t=e[0],r=t.rule.symbols[t.dot],o=this.getSymbolDisplay(r);n.push("A "+o+" based on:"),this.displayStateStack(e,n)}),this)),n.push(""),n.join("\n")},s.prototype.displayStateStack=function(e,t){for(var n,r=0,o=0;o<e.length;o++){var s=e[o],i=s.rule.toString(s.dot);i===n?r++:(r>0&&t.push("    ^ "+r+" more lines identical to this"),r=0,t.push("    "+i)),n=i}},s.prototype.getSymbolDisplay=function(e){return function(e){var t=typeof e;if("string"===t)return e;if("object"===t){if(e.literal)return JSON.stringify(e.literal);if(e instanceof RegExp)return"character matching "+e;if(e.type)return e.type+" token";if(e.test)return"token matching "+String(e.test);throw new Error("Unknown symbol type: "+e)}}(e)},s.prototype.buildFirstStateStack=function(e,t){if(-1!==t.indexOf(e))return null;if(0===e.wantedBy.length)return[e];var n=e.wantedBy[0],r=[e].concat(t),o=this.buildFirstStateStack(n,r);return null===o?null:[e].concat(o)},s.prototype.save=function(){var e=this.table[this.current];return e.lexerState=this.lexerState,e},s.prototype.restore=function(e){var t=e.index;this.current=t,this.table[t]=e,this.table.splice(t+1),this.lexerState=e.lexerState,this.results=this.finish()},s.prototype.rewind=function(e){if(!this.options.keepHistory)throw new Error("set option `keepHistory` to enable rewinding");this.restore(this.table[e])},s.prototype.finish=function(){var e=[],t=this.grammar.start;return this.table[this.table.length-1].states.forEach((function(n){n.rule.name===t&&n.dot===n.rule.symbols.length&&0===n.reference&&n.data!==s.fail&&e.push(n)})),e.map((function(e){return e.data}))},{Parser:s,Grammar:r,Rule:e}},(n=l).exports?n.exports=o():r.nearley=o();var a=l.exports,c={exports:{}},u={exports:{}};!function(e){!function(t,n){e.exports?e.exports=n():t.moo=n()}(s,(function(){var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n="boolean"==typeof(new RegExp).sticky;function r(e){return e&&"[object RegExp]"===t.call(e)}function o(e){return e&&"object"==typeof e&&!r(e)&&!Array.isArray(e)}function s(e){return"("+e+")"}function i(e){return e.length?"(?:"+e.map((function(e){return"(?:"+e+")"})).join("|")+")":"(?!)"}function l(e){if("string"==typeof e)return"(?:"+e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+")";if(r(e)){if(e.ignoreCase)throw new Error("RegExp /i flag not allowed");if(e.global)throw new Error("RegExp /g flag is implied");if(e.sticky)throw new Error("RegExp /y flag is implied");if(e.multiline)throw new Error("RegExp /m flag is implied");return e.source}throw new Error("Not a pattern: "+e)}function a(t,n){if(o(n)||(n={match:n}),n.include)throw new Error("Matching rules cannot also include states");var s={defaultType:t,lineBreaks:!!n.error||!!n.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var i in n)e.call(n,i)&&(s[i]=n[i]);if("string"==typeof s.type&&t!==s.type)throw new Error("Type transform cannot be a string (type '"+s.type+"' for token '"+t+"')");var l=s.match;return s.match=Array.isArray(l)?l:l?[l]:[],s.match.sort((function(e,t){return r(e)&&r(t)?0:r(t)?-1:r(e)?1:t.length-e.length})),s}function c(e){return Array.isArray(e)?function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];if(r.include)for(var o=[].concat(r.include),s=0;s<o.length;s++)t.push({include:o[s]});else{if(!r.type)throw new Error("Rule has no type: "+JSON.stringify(r));t.push(a(r.type,r))}}return t}(e):function(e){for(var t=Object.getOwnPropertyNames(e),n=[],r=0;r<t.length;r++){var s=t[r],i=e[s],l=[].concat(i);if("include"!==s){var c=[];l.forEach((function(e){o(e)?(c.length&&n.push(a(s,c)),n.push(a(s,e)),c=[]):c.push(e)})),c.length&&n.push(a(s,c))}else for(var u=0;u<l.length;u++)n.push({include:l[u]})}return n}(e)}var u=a("error",{lineBreaks:!0,shouldThrow:!0});function h(e,t){for(var o=null,a=Object.create(null),c=!0,h=null,f=[],p=[],d=0;d<e.length;d++)e[d].fallback&&(c=!1);for(d=0;d<e.length;d++){var m=e[d];if(m.include)throw new Error("Inheritance is not allowed in stateless lexers");if(m.error||m.fallback){if(o)throw!m.fallback==!o.fallback?new Error("Multiple "+(m.fallback?"fallback":"error")+" rules not allowed (for token '"+m.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+m.defaultType+"')");o=m}var y=m.match.slice();if(c)for(;y.length&&"string"==typeof y[0]&&1===y[0].length;)a[y.shift().charCodeAt(0)]=m;if(m.pop||m.push||m.next){if(!t)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+m.defaultType+"')");if(m.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+m.defaultType+"')")}if(0!==y.length){c=!1,f.push(m);for(var v=0;v<y.length;v++){var g=y[v];if(r(g))if(null===h)h=g.unicode;else if(h!==g.unicode&&!1===m.fallback)throw new Error("If one rule is /u then all must be")}var b=i(y.map(l)),w=new RegExp(b);if(w.test(""))throw new Error("RegExp matches empty string: "+w);if(new RegExp("|"+b).exec("").length-1>0)throw new Error("RegExp has capture groups: "+w+"\nUse (?: … ) instead");if(!m.lineBreaks&&w.test("\n"))throw new Error("Rule should declare lineBreaks: "+w);p.push(s(b))}}var $=o&&o.fallback,x=n&&!$?"ym":"gm",_=n||$?"":"|";return!0===h&&(x+="u"),{regexp:new RegExp(i(p)+_,x),groups:f,fast:a,error:o||u}}function f(e,t,n){var r=e&&(e.push||e.next);if(r&&!n[r])throw new Error("Missing state '"+r+"' (in token '"+e.defaultType+"' of state '"+t+"')");if(e&&e.pop&&1!=+e.pop)throw new Error("pop must be 1 (in token '"+e.defaultType+"' of state '"+t+"')")}var p=function(e,t){this.startState=t,this.states=e,this.buffer="",this.stack=[],this.reset()};p.prototype.reset=function(e,t){return this.buffer=e||"",this.index=0,this.line=t?t.line:1,this.col=t?t.col:1,this.queuedToken=t?t.queuedToken:null,this.queuedThrow=t?t.queuedThrow:null,this.setState(t?t.state:this.startState),this.stack=t&&t.stack?t.stack.slice():[],this},p.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},p.prototype.setState=function(e){if(e&&this.state!==e){this.state=e;var t=this.states[e];this.groups=t.groups,this.error=t.error,this.re=t.regexp,this.fast=t.fast}},p.prototype.popState=function(){this.setState(this.stack.pop())},p.prototype.pushState=function(e){this.stack.push(this.state),this.setState(e)};var d=n?function(e,t){return e.exec(t)}:function(e,t){var n=e.exec(t);return 0===n[0].length?null:n};function m(){return this.value}if(p.prototype._getGroup=function(e){for(var t=this.groups.length,n=0;n<t;n++)if(void 0!==e[n+1])return this.groups[n];throw new Error("Cannot find token type for matched text")},p.prototype.next=function(){var e=this.index;if(this.queuedGroup){var t=this._token(this.queuedGroup,this.queuedText,e);return this.queuedGroup=null,this.queuedText="",t}var n=this.buffer;if(e!==n.length){if(i=this.fast[n.charCodeAt(e)])return this._token(i,n.charAt(e),e);var r=this.re;r.lastIndex=e;var o=d(r,n),s=this.error;if(null==o)return this._token(s,n.slice(e,n.length),e);var i=this._getGroup(o),l=o[0];return s.fallback&&o.index!==e?(this.queuedGroup=i,this.queuedText=l,this._token(s,n.slice(e,o.index),e)):this._token(i,l,e)}},p.prototype._token=function(e,t,n){var r=0;if(e.lineBreaks){var o=/\n/g,s=1;if("\n"===t)r=1;else for(;o.exec(t);)r++,s=o.lastIndex}var i={type:"function"==typeof e.type&&e.type(t)||e.defaultType,value:"function"==typeof e.value?e.value(t):t,text:t,toString:m,offset:n,lineBreaks:r,line:this.line,col:this.col},l=t.length;if(this.index+=l,this.line+=r,0!==r?this.col=l-s+1:this.col+=l,e.shouldThrow)throw new Error(this.formatError(i,"invalid syntax"));return e.pop?this.popState():e.push?this.pushState(e.push):e.next&&this.setState(e.next),i},"undefined"!=typeof Symbol&&Symbol.iterator){var y=function(e){this.lexer=e};y.prototype.next=function(){var e=this.lexer.next();return{value:e,done:!e}},y.prototype[Symbol.iterator]=function(){return this},p.prototype[Symbol.iterator]=function(){return new y(this)}}return p.prototype.formatError=function(e,t){if(null==e){var n=this.buffer.slice(this.index);e={text:n,offset:this.index,lineBreaks:-1===n.indexOf("\n")?0:1,line:this.line,col:this.col}}var r=Math.max(0,e.offset-e.col+1),o=e.lineBreaks?e.text.indexOf("\n"):e.text.length,s=this.buffer.substring(r,e.offset+o);return t+=" at line "+e.line+" col "+e.col+":\n\n",(t+="  "+s+"\n")+"  "+Array(e.col).join(" ")+"^"},p.prototype.clone=function(){return new p(this.states,this.state)},p.prototype.has=function(e){return!0},{compile:function(e){var t=h(c(e));return new p({start:t},"start")},states:function(e,t){var n=e.$all?c(e.$all):[];delete e.$all;var r=Object.getOwnPropertyNames(e);t||(t=r[0]);for(var o=Object.create(null),s=0;s<r.length;s++)o[b=r[s]]=c(e[b]).concat(n);for(s=0;s<r.length;s++)for(var i=o[b=r[s]],l=Object.create(null),a=0;a<i.length;a++){var u=i[a];if(u.include){var d=[a,1];if(u.include!==b&&!l[u.include]){l[u.include]=!0;var m=o[u.include];if(!m)throw new Error("Cannot include nonexistent state '"+u.include+"' (in state '"+b+"')");for(var y=0;y<m.length;y++){var v=m[y];-1===i.indexOf(v)&&d.push(v)}}i.splice.apply(i,d),a--}}var g=Object.create(null);for(s=0;s<r.length;s++){var b;g[b=r[s]]=h(o[b],!0)}for(s=0;s<r.length;s++){var w=r[s],$=g[w],x=$.groups;for(a=0;a<x.length;a++)f(x[a],w,g);var _=Object.getOwnPropertyNames($.fast);for(a=0;a<_.length;a++)f($.fast[_[a]],w,g)}return new p(g,t)},error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:function(e){for(var t=Object.create(null),n=Object.create(null),r=Object.getOwnPropertyNames(e),o=0;o<r.length;o++){var s=r[o],i=e[s];(Array.isArray(i)?i:[i]).forEach((function(e){if((n[e.length]=n[e.length]||[]).push(e),"string"!=typeof e)throw new Error("keyword must be string (in keyword '"+s+"')");t[e]=s}))}function l(e){return JSON.stringify(e)}var a="";for(var c in a+="switch (value.length) {\n",n){var u=n[c];a+="case "+c+":\n",a+="switch (value) {\n",u.forEach((function(e){var n=t[e];a+="case "+l(e)+": return "+l(n)+"\n"})),a+="}\n"}return a+="}\n",Function("value",a)}}}))}(u),function(e){!function(){let t=u.exports.compile({title:{match:/(?:{title:.*?}|{t:.*?})/,value:e=>e.slice(1,-1).split(":")[1].trim()},subtitle:{match:/(?:{subtitle:.*?}|{st:.*?})/,value:e=>e.slice(1,-1).split(":")[1].trim()},artist:{match:/{artist:.*?}/,value:e=>e.slice(1,-1).split(":")[1].trim()},chord:{match:/\[.+?\]/,value:e=>e.slice(1,-1)},nl:{match:/[\n\r]/,lineBreaks:!0},soc:/(?:{soc}|{start_of_chorus})/,eoc:/(?:{eoc}|{end_of_chorus})/,text:/[^[\n]+/});var n={Lexer:t,ParserRules:[{name:"chordpro",symbols:["header","content"],postprocess:function(e){var t={type:"chordpro",header:[],content:[]};return t.header=e[0],t.content=e[1],t}},{name:"header$ebnf$1",symbols:[]},{name:"header$ebnf$1",symbols:["header$ebnf$1",t.has("nl")?{type:"nl"}:nl],postprocess:function(e){return e[0].concat([e[1]])}},{name:"header",symbols:["title","subtitle","artist","header$ebnf$1"],postprocess:function(e){return{type:"header",title:e[0],subtitle:e[1],artist:e[2]}}},{name:"title",symbols:[]},{name:"title",symbols:[t.has("title")?{type:"title"}:title,t.has("nl")?{type:"nl"}:nl],postprocess:function(e){return e[0].value}},{name:"subtitle",symbols:[]},{name:"subtitle",symbols:[t.has("subtitle")?{type:"subtitle"}:subtitle,t.has("nl")?{type:"nl"}:nl],postprocess:function(e){return e[0].value}},{name:"artist",symbols:[]},{name:"artist",symbols:[t.has("artist")?{type:"artist"}:artist,t.has("nl")?{type:"nl"}:nl],postprocess:function(e){return e[0].value}},{name:"content$ebnf$1",symbols:[]},{name:"content$ebnf$1$subexpression$1",symbols:["verse"]},{name:"content$ebnf$1$subexpression$1",symbols:["chorus"]},{name:"content$ebnf$1",symbols:["content$ebnf$1","content$ebnf$1$subexpression$1"],postprocess:function(e){return e[0].concat([e[1]])}},{name:"content",symbols:["content$ebnf$1"],postprocess:function(e){var t={type:"content",parts:[]};for(let n=0;n<e[0].length;n++)t.parts.push(e[0][n][0]);return t}},{name:"verse$ebnf$1",symbols:["line"]},{name:"verse$ebnf$1",symbols:["verse$ebnf$1","line"],postprocess:function(e){return e[0].concat([e[1]])}},{name:"verse$ebnf$2",symbols:[t.has("nl")?{type:"nl"}:nl]},{name:"verse$ebnf$2",symbols:["verse$ebnf$2",t.has("nl")?{type:"nl"}:nl],postprocess:function(e){return e[0].concat([e[1]])}},{name:"verse",symbols:["verse$ebnf$1","verse$ebnf$2"],postprocess:function(e){var t={type:"verse",lines:[]};for(let n=0;n<e[0].length;n++)t.lines.push(e[0][n]);return t}},{name:"chorus$ebnf$1",symbols:["line"]},{name:"chorus$ebnf$1",symbols:["chorus$ebnf$1","line"],postprocess:function(e){return e[0].concat([e[1]])}},{name:"chorus$ebnf$2",symbols:[t.has("nl")?{type:"nl"}:nl]},{name:"chorus$ebnf$2",symbols:["chorus$ebnf$2",t.has("nl")?{type:"nl"}:nl],postprocess:function(e){return e[0].concat([e[1]])}},{name:"chorus",symbols:[t.has("soc")?{type:"soc"}:soc,t.has("nl")?{type:"nl"}:nl,"chorus$ebnf$1",t.has("eoc")?{type:"eoc"}:eoc,"chorus$ebnf$2"],postprocess:function(e){var t={type:"chorus",lines:[]};for(let n=0;n<e[2].length;n++)t.lines.push(e[2][n]);return t}},{name:"line$ebnf$1$subexpression$1",symbols:[t.has("chord")?{type:"chord"}:chord]},{name:"line$ebnf$1$subexpression$1",symbols:[t.has("text")?{type:"text"}:text]},{name:"line$ebnf$1",symbols:["line$ebnf$1$subexpression$1"]},{name:"line$ebnf$1$subexpression$2",symbols:[t.has("chord")?{type:"chord"}:chord]},{name:"line$ebnf$1$subexpression$2",symbols:[t.has("text")?{type:"text"}:text]},{name:"line$ebnf$1",symbols:["line$ebnf$1","line$ebnf$1$subexpression$2"],postprocess:function(e){return e[0].concat([e[1]])}},{name:"line",symbols:["line$ebnf$1",t.has("nl")?{type:"nl"}:nl],postprocess:function(e){var t={type:"row",children:[]};for(let n=0;n<e[0].length;n++){let r=e[0][n][0];t.children.push({type:r.type,value:r.value})}return t}}],ParserStart:"chordpro"};e.exports=n}()}(c);var h=c.exports,f=function(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}(Object.freeze({__proto__:null,parse:function(e){const t=new a.Parser(a.Grammar.fromCompiled(h));return t.feed(e+"\n"),t.results[0]}})),p={process_row:function(e){let t="",n="";for(let r=0;r<e.children.length;r++){const o=e.children[r],s=Math.max(o.chord.length,o.text.length);t+=o.chord+" ".repeat(s-o.chord.length),n+=o.text+" ".repeat(s-o.text.length)}let r="";return t.length>0&&(r+=t+"\n"),r+n},process_verse:function(e){var t="";for(let n=0;n<e.children.length;n++){const r=e.children[n];r instanceof chordpro.NodeRow&&(t+=processRow(r)+"\n")}return t},process_song:function(e){var t="";e.title&&(t+=`Title: ${e.title}\n`),e.subTitle&&(t+=`Subtitle: ${e.subTitle}\n`),e.artist&&(t+=`Artist: ${e.artist}\n`),t+="\n";for(let n=0;n<e.body.length;n++){let r=e.body[n];r instanceof chordpro.NodeVerse&&(t+=process_verse(r))}return t}},d={};function m(e){let t=[],n=[],r=null;for(let o=0;o<e.children.length;o++){let s=e.children[o];"chord"===s.type?(t.push(s.value),r=s.value):"text"===s.type&&(null===r&&t.push(""),n.push(s.value),r=null)}let o='<table class="jschordpro-row">';return t.filter((e=>""!==e)).length>0&&(o+='<tr class="jschordpro-row-chords">',o+=t.map((e=>`<td class="jschordpro-chord">${e}</td>`)).join("\n"),o+="</tr>"),o+='<tr class="jschordpro-row-lyrics">',o+=n.map((e=>`<td class="jschordpro-lyrics">${e.replaceAll(" ","&nbsp;")}</td>`)).join("\n"),o+="</tr>",o+="</table>",o}function y(e){let t=`<div class="jschordpro-${e.type}">`;for(let n=0;n<e.lines.length;n++){let r=e.lines[n];"row"==r.type&&(t+=m(r))}return t+="</div>",t}d.process_song=function(e){var t='<div class="jschordpro-song">';if("chordpro"===e.type&&(t+='<div class="jschordpro-header">',e.header.title.length>0&&(t+=`<h1>${e.header.title}</h1>`),e.header.subtitle.length>0&&(t+=`<h2>${e.header.subtitle}</h2>`),e.header.artist.length>0&&(t+=`<h2>${e.header.artist}</h2>`),t+="</div>","content"===e.content.type)){t+='<div class="jschordpro-content">';for(let n=0;n<e.content.parts.length;n++)t+=y(e.content.parts[n]);t+="</div>"}return t+"</div>"};const v=f,g=p,b=d;var w=i.parse=v.parse,$=i.to_ascii=g.process_song,x=i.to_html=b.process_song;t.default=i,t.parse=w,t.to_ascii=$,t.to_html=x}(Z={exports:{}},Z.exports),Z.exports));function te(e,t,n){const r=e.slice();return r[1]=t[n],r}function ne(e){let t,n,r,o,s,f,y,g=e[2].length>0&&e[4]&&re(e);return{c(){t=c("div"),n=u(e[3]),r=h(),o=c("ul"),g&&g.c(),d(t,"class","label svelte-1mqreq7"),v(t,"expanded",e[4]),v(t,"collapsed",!e[4]),d(o,"class","svelte-1mqreq7")},m(a,c){l(a,t,c),i(t,n),l(a,r,c),l(a,o,c),g&&g.m(o,null),s=!0,f||(y=p(t,"click",e[5]),f=!0)},p(e,r){(!s||8&r)&&m(n,e[3]),16&r&&v(t,"expanded",e[4]),16&r&&v(t,"collapsed",!e[4]),e[2].length>0&&e[4]?g?(g.p(e,r),20&r&&R(g,1)):(g=re(e),g.c(),R(g,1),g.m(o,null)):g&&(I(),q(g,1,1,(()=>{g=null})),B())},i(e){s||(R(g),s=!0)},o(e){q(g),s=!1},d(e){e&&a(t),e&&a(r),e&&a(o),g&&g.d(),f=!1,y()}}}function re(e){let t,n,r=e[2],o=[];for(let t=0;t<r.length;t+=1)o[t]=oe(te(e,r,t));const s=e=>q(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=f()},m(e,r){for(let t=0;t<o.length;t+=1)o[t].m(e,r);l(e,t,r),n=!0},p(e,n){if(5&n){let i;for(r=e[2],i=0;i<r.length;i+=1){const s=te(e,r,i);o[i]?(o[i].p(s,n),R(o[i],1)):(o[i]=oe(s),o[i].c(),R(o[i],1),o[i].m(t.parentNode,t))}for(I(),i=r.length;i<o.length;i+=1)s(i);B()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)R(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)q(o[e]);n=!1},d(e){!function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(o,e),e&&a(t)}}}function oe(e){let t,n,r;return n=new le({props:{root:e[1],level:e[0]+1}}),{c(){t=c("li"),F(n.$$.fragment)},m(e,o){l(e,t,o),L(n,t,null),r=!0},p(e,t){const r={};4&t&&(r.root=e[1]),1&t&&(r.level=e[0]+1),n.$set(r)},i(e){r||(R(n.$$.fragment,e),r=!0)},o(e){q(n.$$.fragment,e),r=!1},d(e){e&&a(t),M(n)}}}function se(e){let t,n,r=e[1]&&ne(e);return{c(){r&&r.c(),t=f()},m(e,o){r&&r.m(e,o),l(e,t,o),n=!0},p(e,[n]){e[1]?r?(r.p(e,n),2&n&&R(r,1)):(r=ne(e),r.c(),R(r,1),r.m(t.parentNode,t)):r&&(I(),q(r,1,1,(()=>{r=null})),B())},i(e){n||(R(r),n=!0)},o(e){q(r),n=!1},d(e){r&&r.d(e),e&&a(t)}}}function ie(e,t,n){let{root:r=null}=t,{level:o=0}=t,s="",i=[],l=o<2;return e.$$set=e=>{"root"in e&&n(1,r=e.root),"level"in e&&n(0,o=e.level)},e.$$.update=()=>{6&e.$$.dirty&&null!==r&&(n(3,s=r.type),"chordpro"===r.type?n(2,i=[r.header,r.content]):"header"===r.type?(n(3,s="header: "),n(2,i=[{type:"leave",label:"title",value:r.title},{type:"leave",label:"subtitle",value:r.subtitle},{type:"leave",label:"artist",value:r.artist}])):"content"===r.type?n(2,i=r.parts):"verse"===r.type||"chorus"===r.type?n(2,i=r.lines):"row"===r.type?n(2,i=r.children):"chord"===r.type||"text"===r.type?n(3,s=r.type+": "+r.value):"leave"===r.type&&n(3,s=r.label+": "+r.value),0===i.length&&n(4,l=!0))},[o,r,i,s,l,()=>{0===i.length?n(4,l=!0):n(4,l=!l)}]}class le extends J{constructor(e){super(),D(this,e,ie,se,s,{root:1,level:0})}}function ae(e){let t,n;return{c(){t=c("div"),n=u(e[2]),d(t,"class","error svelte-1heg6sr")},m(e,r){l(e,t,r),i(t,n)},p(e,t){4&t&&m(n,e[2])},d(e){e&&a(t)}}}function ce(e){let t,n,r;return n=new le({props:{root:e[3]}}),{c(){t=c("div"),F(n.$$.fragment),d(t,"class","no-print tree svelte-1heg6sr")},m(e,o){l(e,t,o),L(n,t,null),r=!0},p(e,t){const r={};8&t&&(r.root=e[3]),n.$set(r)},i(e){r||(R(n.$$.fragment,e),r=!0)},o(e){q(n.$$.fragment,e),r=!1},d(e){e&&a(t),M(n)}}}function ue(e){let t,n,r,o,s,u=e[4](e[0])+"",f=null!==e[2]&&ae(e),p=e[1]&&null!==e[3]&&ce(e);return{c(){t=c("div"),f&&f.c(),n=h(),r=new g,o=h(),p&&p.c(),r.a=o,d(t,"class","preview")},m(e,a){l(e,t,a),f&&f.m(t,null),i(t,n),r.m(u,t),i(t,o),p&&p.m(t,null),s=!0},p(e,[o]){null!==e[2]?f?f.p(e,o):(f=ae(e),f.c(),f.m(t,n)):f&&(f.d(1),f=null),(!s||1&o)&&u!==(u=e[4](e[0])+"")&&r.p(u),e[1]&&null!==e[3]?p?(p.p(e,o),10&o&&R(p,1)):(p=ce(e),p.c(),R(p,1),p.m(t,null)):p&&(I(),q(p,1,1,(()=>{p=null})),B())},i(e){s||(R(p),s=!0)},o(e){q(p),s=!1},d(e){e&&a(t),f&&f.d(),p&&p.d()}}}function he(e,t,n){let{source:r=""}=t,{show_tree:o=!1}=t,s=null,i=null;return e.$$set=e=>{"source"in e&&n(0,r=e.source),"show_tree"in e&&n(1,o=e.show_tree)},[r,o,s,i,function(e){let t="";try{n(3,i=ee.parse(e+"\n")),t=ee.to_html(i),n(2,s=null)}catch(e){n(2,s=e.toString())}return t}]}class fe extends J{constructor(e){super(),D(this,e,he,ue,s,{source:0,show_tree:1})}}function pe(e,t){e.createWriter?e.createWriter().then((function(e){e.write(0,t).then((function(){return e.close()}))})):e.createWritable().then((function(e){e.write(t).then((function(){return e.close()}))}))}function de(e){let t,n,r,o,s,u,f,m,v,g,b,w,$;return t=new Q({props:{subtitle:e[2]&&e[2].name,on_open:e[5],on_new:e[4],on_save:e[6],on_save_as:e[7],on_tree:e[8]}}),m=new fe({props:{source:e[3],show_tree:e[1]}}),{c(){F(t.$$.fragment),n=h(),r=c("main"),o=c("div"),s=c("textarea"),u=h(),f=c("div"),F(m.$$.fragment),v=h(),g=c("footer"),g.textContent="Copyright 2021",d(s,"class","no-print svelte-gg43r6"),d(o,"class","editor no-print svelte-gg43r6"),d(f,"class","preview svelte-gg43r6"),d(r,"class","svelte-gg43r6"),d(g,"class","no-print svelte-gg43r6")},m(a,c){L(t,a,c),l(a,n,c),l(a,r,c),i(r,o),i(o,s),y(s,e[0]),i(r,u),i(r,f),L(m,f,null),l(a,v,c),l(a,g,c),b=!0,w||($=p(s,"input",e[10]),w=!0)},p(e,[n]){const r={};4&n&&(r.subtitle=e[2]&&e[2].name),t.$set(r),1&n&&y(s,e[0]);const o={};8&n&&(o.source=e[3]),2&n&&(o.show_tree=e[1]),m.$set(o)},i(e){b||(R(t.$$.fragment,e),R(m.$$.fragment,e),b=!0)},o(e){q(t.$$.fragment,e),q(m.$$.fragment,e),b=!1},d(e){M(t,e),e&&a(n),e&&a(r),M(m),e&&a(v),e&&a(g),w=!1,$()}}}function me(e,t,n){let{song:r=""}=t;const o="chooseFileSystemEntries"in window||"showOpenFilePicker"in window;let s,i=!1,l=r,a="";const c=function(e,t){let n;return function(){const r=this,o=arguments;clearTimeout(n),n=setTimeout((()=>e.apply(r,o)),t)}}((function(e){n(3,a=e)}),300);return e.$$set=e=>{"song"in e&&n(9,r=e.song)},e.$$.update=()=>{1&e.$$.dirty&&c(l)},[l,i,s,a,function(){n(0,l=""),n(3,a="")},async function(){n(2,s=await function(){if("showOpenFilePicker"in window){const e={types:[{description:"Chordpro",accept:{"text/plain":[".txt"]}}],excludeAcceptAllOption:!1,multiple:!1};return window.showOpenFilePicker(e).then((e=>e[0]))}return window.chooseFileSystemEntries({type:"open-file",accepts:[{description:"Chordpro text file",extensions:["txt"],mimeTypes:["text/plain"]}]})}());try{let e=await s.getFile();n(0,l=await function(e){return e.text?e.text():new Promise((t=>{const n=new FileReader;n.addEventListener("loadend",(function(){t(n.result)})),n.readAsText(e)}))}(e))}catch(e){console.error("read failed: ",e)}},async function(){if(s)try{await pe(s,l)}catch(e){const t="Unable to save file";console.error(t,e),alert(t)}},async function(){if(o){try{n(2,s=await function(){if("showSaveFilePicker"in window){const e={types:[{description:"Chordpro text file",accept:{"text/plain":[".txt"]}}]};return window.showSaveFilePicker(e)}return window.chooseFileSystemEntries({type:"save-file",accepts:[{description:"Text file",extensions:["txt"],mimeTypes:["text/plain"]}]})}())}catch(e){if("AbortError"===e.name)return;const t="An error occured trying to open the file.";return console.error(t,e),void alert(t)}try{await pe(s,l)}catch(e){const t="Unable to save file.";return console.error(t,e),void alert(t)}}else console.error("this browser does not support access to file system")},function(){n(1,i=!i)},r,function(){l=this.value,n(0,l)}]}return new class extends J{constructor(e){super(),D(this,e,me,de,s,{song:9})}}({target:document.body,props:{song:"{title: In My Time of Dyin'}\n{subtitle: Bob Dylan}\n\n[Am]In my time of dying\n[Am]I don't want nobody to mourn\n[Am]All I want for you to do\nIs [D]take my body [Am]home\n\n{start_of_chorus}\n[Am]Well, well, well, so I can die easy\nWell, well, [D]well, so I can die [Am]easy\n[Am]Well, well, well, so I can die easy\n[D]Jesus gonna make up my [G]dy[G#]ing [Am]bed\n{end_of_chorus}\n\nWell, meet me Jesus, meet me\nMeet me in the middle of the air\nIf these wings should fail to me\nLord, won't you meet me with another pair\n\nLord, in my time of dying\nI don't want nobody to cry\nAll I want you to do\nIs take me when I die\n"}})}();
//# sourceMappingURL=bundle.js.map
