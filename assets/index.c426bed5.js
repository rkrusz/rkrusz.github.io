const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};I();function f(){}function L(e){return e()}function S(){return Object.create(null)}function g(e){e.forEach(L)}function q(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function P(e){return Object.keys(e).length===0}function T(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode.removeChild(e)}function F(e){return document.createElement(e)}function M(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function B(e){return Array.from(e.childNodes)}let w;function d(e){w=e}const c=[],A=[],p=[],E=[],C=Promise.resolve();let y=!1;function R(){y||(y=!0,C.then(j))}function b(e){p.push(e)}const _=new Set;let h=0;function j(){const e=w;do{for(;h<c.length;){const t=c[h];h++,d(t),W(t.$$)}for(d(null),c.length=0,h=0;A.length;)A.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];_.has(n)||(_.add(n),n())}p.length=0}while(c.length);for(;E.length;)E.pop()();y=!1,_.clear(),d(e)}function W(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const z=new Set;function H(e,t){e&&e.i&&(z.delete(e),e.i(t))}function J(e,t,n,r){const{fragment:o,on_mount:s,on_destroy:l,after_update:m}=e.$$;o&&o.m(t,n),r||b(()=>{const u=s.map(L).filter(q);l?l.push(...u):g(u),e.$$.on_mount=[]}),m.forEach(b)}function K(e,t){const n=e.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(c.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,r,o,s,l,m=[-1]){const u=w;d(e);const i=e.$$={fragment:null,ctx:null,props:s,update:f,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:S(),dirty:m,skip_bound:!1,root:t.target||u.$$.root};l&&l(i.root);let v=!1;if(i.ctx=n?n(e,t.props||{},(a,$,...k)=>{const x=k.length?k[0]:$;return i.ctx&&o(i.ctx[a],i.ctx[a]=x)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](x),v&&G(e,a)),$}):[],i.update(),v=!0,g(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=B(t.target);i.fragment&&i.fragment.l(a),a.forEach(O)}else i.fragment&&i.fragment.c();t.intro&&H(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),j()}d(u)}class D{$destroy(){K(this,1),this.$destroy=f}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=F("main"),t.innerHTML=`<h1 class="svelte-1uop4nh">Richard</h1> 
  <h1 class="svelte-1uop4nh">Kruszynski</h1> 

  <h2>Bio</h2> 

  <p class="svelte-1uop4nh">Full stack developer with experience in the following:</p> 
  <ul class="unbulletted-list svelte-1uop4nh"><li>Java</li> 
    <li>SQL</li> 
    <li>Angular (2+)</li> 
    <li>Svelte</li> 
    <li>AWS</li> 
    <li>Spring</li> 
    <li>Struts</li> 
    <li>Hiberate</li> 
    <li>REST framework</li> 
    <li>SOAP framework</li> 
    <li>Javascript</li> 	
    <li>AppWrite (Open-source and self-hosted alternative to Google Firebase)</li><li></li></ul> 

  <h2>Project Examples</h2> 

  <h3><a href="https://www.stlroulette.com">STL Roulette</a></h3> 

  <p class="svelte-1uop4nh">A Svelte site built for those wondering where to go in Saint Louis.
    It randomizes a list of options and displays the output to the user.</p> 

  <h3><a href="https://www.sharedsightings.com">Shared Sightings</a></h3> 

  <p class="svelte-1uop4nh">This is a work in progress site I have been working on.
    At a high level, this is a site designed to allow users to share and discuss sightings of unidentified objects.
    Currently, it is set up to allow anyone to view the sightings, but only registed users are allowed to comment.

    For technologies, this uses a Svelte front end with an AppWrite backend.
    It also integrates with OpenStreetMaps using Leafly to display the map tiles.

    If you wish to test, the account email &quot;test@test.com&quot; and password &quot;Test1234&quot; is available.</p>`,M(t,"class","svelte-1uop4nh")},m(n,r){T(n,t,r)},p:f,i:f,o:f,d(n){n&&O(t)}}}class V extends D{constructor(t){super(),Q(this,t,null,U,N,{})}}new V({target:document.getElementById("app")});
