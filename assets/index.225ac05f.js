const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};P();function h(){}function L(e){return e()}function S(){return Object.create(null)}function m(e){e.forEach(L)}function N(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function j(e){return Object.keys(e).length===0}function q(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return Array.from(e.childNodes)}let b;function f(e){b=e}const c=[],A=[],p=[],E=[],B=Promise.resolve();let w=!1;function z(){w||(w=!0,B.then(I))}function _(e){p.push(e)}const y=new Set;let d=0;function I(){const e=b;do{for(;d<c.length;){const t=c[d];d++,f(t),R(t.$$)}for(f(null),c.length=0,d=0;A.length;)A.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];y.has(n)||(y.add(n),n())}p.length=0}while(c.length);for(;E.length;)E.pop()();w=!1,y.clear(),f(e)}function R(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const W=new Set;function H(e,t){e&&e.i&&(W.delete(e),e.i(t))}function J(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:l,after_update:g}=e.$$;o&&o.m(t,n),r||_(()=>{const u=i.map(L).filter(N);l?l.push(...u):m(u),e.$$.on_mount=[]}),g.forEach(_)}function K(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(c.push(e),z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,r,o,i,l,g=[-1]){const u=b;f(e);const s=e.$$={fragment:null,ctx:null,props:i,update:h,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:S(),dirty:g,skip_bound:!1,root:t.target||u.$$.root};l&&l(s.root);let v=!1;if(s.ctx=n?n(e,t.props||{},(a,k,...$)=>{const x=$.length?$[0]:k;return s.ctx&&o(s.ctx[a],s.ctx[a]=x)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](x),v&&G(e,a)),k}):[],s.update(),v=!0,m(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=M(t.target);s.fragment&&s.fragment.l(a),a.forEach(O)}else s.fragment&&s.fragment.c();t.intro&&H(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),I()}f(u)}class D{$destroy(){K(this,1),this.$destroy=h}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=C("main"),t.innerHTML=`<h1 class="svelte-1uop4nh">Richard</h1> 
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

    If you wish to test, the account email &quot;test@test.com&quot; and password &quot;Test1234&quot; is available.</p> 

  <h3><a href="https://www.cashpop.app">Cash Pop Number Picker</a></h3> 

  <p class="svelte-1uop4nh">This is a basic analysis app.  It scrapes the drawing history page for the Missouri Cash Pop lottery.
    From those results, it organzies them by the count of individual numbers drawn.  
    The rule of extremes at a high level says that in a random series of drawings should pick numbers evenly
    over a long enough period of time.  So, the application will recommend the numbers with the lowest counts
    since there is a good chance those may be drawn more to balance out.  (Note:  Each drawing is a random chance, 
    so I know this by no means a guarantee.  But my thought was to see if this would work so I figured why not?)</p>`,F(t,"class","svelte-1uop4nh")},m(n,r){q(n,t,r)},p:h,i:h,o:h,d(n){n&&O(t)}}}class V extends D{constructor(t){super(),Q(this,t,null,U,T,{})}}new V({target:document.getElementById("app")});
