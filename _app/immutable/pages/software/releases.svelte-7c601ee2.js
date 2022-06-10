import{S as ee,i as te,s as le,w as N,x as S,y as B,q as k,o as R,B as q,e as p,t as H,k as w,l as A,c as $,a as v,h as I,d as c,m as E,g as m,_ as d,b,j as P,a1 as se,$ as y,f as re,a4 as J,a0 as ne,a5 as oe,E as G,z as ie,A as ue,n as ae,p as fe,C as ce}from"../../chunks/index-f4bc5dab.js";import{b as _e}from"../../chunks/paths-396f020f.js";import{S as me}from"../../chunks/SvelteMarkdown-e860d6ff.js";import{C as he,a as pe}from"../../chunks/CardBody-e02f41f3.js";import{R as $e,C as Y}from"../../chunks/Row-29e0025b.js";/* empty css                                                           */import"../../chunks/utils-f9eb197c.js";function K(o,e,s){const t=o.slice();return t[7]=e[s],t}function de(o){let e,s,t,r,a,f=o[2].login+"",l,n;return{c(){e=p("h3"),s=p("img"),r=w(),a=p("a"),l=H(f),this.h()},l(i){e=$(i,"H3",{});var _=v(e);s=$(_,"IMG",{src:!0,style:!0}),r=E(_),a=$(_,"A",{href:!0});var C=v(a);l=I(C,f),C.forEach(c),_.forEach(c),this.h()},h(){y(s.src,t=o[2].avatar_url)||b(s,"src",t),re(s,"width","20px"),b(a,"href",n=o[2].html_url)},m(i,_){m(i,e,_),d(e,s),d(e,r),d(e,a),d(a,l)},p(i,_){_&4&&!y(s.src,t=i[2].avatar_url)&&b(s,"src",t),_&4&&f!==(f=i[2].login+"")&&P(l,f),_&4&&n!==(n=i[2].html_url)&&b(a,"href",n)},d(i){i&&c(e)}}}function be(o){let e,s,t,r,a,f;return{c(){e=p("div"),s=p("a"),t=p("img"),a=w(),f=H(o[3]),this.h()},l(l){e=$(l,"DIV",{class:!0});var n=v(e);s=$(n,"A",{href:!0,target:!0});var i=v(s);t=$(i,"IMG",{src:!0,alt:!0}),a=E(i),f=I(i,o[3]),i.forEach(c),n.forEach(c),this.h()},h(){y(t.src,r=_e+"/icons/label_black_24dp.svg")||b(t,"src",r),b(t,"alt","label"),b(s,"href",o[4]),b(s,"target","_blank"),b(e,"class","text-center")},m(l,n){m(l,e,n),d(e,s),d(s,t),d(s,a),d(s,f)},p(l,n){n&8&&P(f,l[3]),n&16&&b(s,"href",l[4])},d(l){l&&c(e)}}}function O(o){let e,s=o[5].split("T")[0]+"",t;return{c(){e=p("div"),t=H(s),this.h()},l(r){e=$(r,"DIV",{class:!0});var a=v(e);t=I(a,s),a.forEach(c),this.h()},h(){b(e,"class","text-end")},m(r,a){m(r,e,a),d(e,t)},p(r,a){a&32&&s!==(s=r[5].split("T")[0]+"")&&P(t,s)},d(r){r&&c(e)}}}function ge(o){let e,s=o[5]&&O(o);return{c(){s&&s.c(),e=A()},l(t){s&&s.l(t),e=A()},m(t,r){s&&s.m(t,r),m(t,e,r)},p(t,r){t[5]?s?s.p(t,r):(s=O(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&c(e)}}}function ve(o){let e,s,t,r,a,f;return e=new Y({props:{xs:"2",$$slots:{default:[de]},$$scope:{ctx:o}}}),t=new Y({props:{xs:"8",$$slots:{default:[be]},$$scope:{ctx:o}}}),a=new Y({props:{xs:"2",$$slots:{default:[ge]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment),s=w(),N(t.$$.fragment),r=w(),N(a.$$.fragment)},l(l){S(e.$$.fragment,l),s=E(l),S(t.$$.fragment,l),r=E(l),S(a.$$.fragment,l)},m(l,n){B(e,l,n),m(l,s,n),B(t,l,n),m(l,r,n),B(a,l,n),f=!0},p(l,n){const i={};n&1028&&(i.$$scope={dirty:n,ctx:l}),e.$set(i);const _={};n&1048&&(_.$$scope={dirty:n,ctx:l}),t.$set(_);const C={};n&1056&&(C.$$scope={dirty:n,ctx:l}),a.$set(C)},i(l){f||(k(e.$$.fragment,l),k(t.$$.fragment,l),k(a.$$.fragment,l),f=!0)},o(l){R(e.$$.fragment,l),R(t.$$.fragment,l),R(a.$$.fragment,l),f=!1},d(l){q(e,l),l&&c(s),q(t,l),l&&c(r),q(a,l)}}}function Q(o){let e,s,t,r,a=o[6],f=[];for(let l=0;l<a.length;l+=1)f[l]=U(K(o,a,l));return{c(){e=p("h2"),s=H("Assets"),t=w();for(let l=0;l<f.length;l+=1)f[l].c();r=A()},l(l){e=$(l,"H2",{});var n=v(e);s=I(n,"Assets"),n.forEach(c),t=E(l);for(let i=0;i<f.length;i+=1)f[i].l(l);r=A()},m(l,n){m(l,e,n),d(e,s),m(l,t,n);for(let i=0;i<f.length;i+=1)f[i].m(l,n);m(l,r,n)},p(l,n){if(n&64){a=l[6];let i;for(i=0;i<a.length;i+=1){const _=K(l,a,i);f[i]?f[i].p(_,n):(f[i]=U(_),f[i].c(),f[i].m(r.parentNode,r))}for(;i<f.length;i+=1)f[i].d(1);f.length=a.length}},d(l){l&&c(e),l&&c(t),se(f,l),l&&c(r)}}}function U(o){let e,s,t,r=o[7].name+"",a,f,l;return{c(){e=p("div"),s=p("h3"),t=p("a"),a=H(r),l=w(),this.h()},l(n){e=$(n,"DIV",{});var i=v(e);s=$(i,"H3",{});var _=v(s);t=$(_,"A",{href:!0});var C=v(t);a=I(C,r),C.forEach(c),_.forEach(c),l=E(i),i.forEach(c),this.h()},h(){b(t,"href",f=o[7].browser_download_url)},m(n,i){m(n,e,i),d(e,s),d(s,t),d(t,a),d(e,l)},p(n,i){i&64&&r!==(r=n[7].name+"")&&P(a,r),i&64&&f!==(f=n[7].browser_download_url)&&b(t,"href",f)},d(n){n&&c(e)}}}function ke(o){let e,s,t,r,a,f,l,n,i,_,C,z,L,D,M,X,j;a=new $e({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),_=new me({props:{source:o[1]}});let g=o[6]&&o[6].length>0&&Q(o);return{c(){e=p("h1"),s=p("a"),t=H(o[0]),r=w(),N(a.$$.fragment),f=w(),l=p("hr"),n=w(),i=p("p"),N(_.$$.fragment),C=w(),z=p("hr"),L=w(),g&&g.c(),D=w(),M=p("style"),X=H(`h2{
  padding-top: 0;
 }`),this.h()},l(u){e=$(u,"H1",{id:!0});var h=v(e);s=$(h,"A",{href:!0,target:!0});var T=v(s);t=I(T,o[0]),T.forEach(c),h.forEach(c),r=E(u),S(a.$$.fragment,u),f=E(u),l=$(u,"HR",{}),n=E(u),i=$(u,"P",{});var V=v(i);S(_.$$.fragment,V),V.forEach(c),C=E(u),z=$(u,"HR",{}),L=E(u),g&&g.l(u),D=E(u),M=$(u,"STYLE",{});var F=v(M);X=I(F,`h2{
  padding-top: 0;
 }`),F.forEach(c),this.h()},h(){b(s,"href",o[4]),b(s,"target","_blank"),b(e,"id",o[3])},m(u,h){m(u,e,h),d(e,s),d(s,t),m(u,r,h),B(a,u,h),m(u,f,h),m(u,l,h),m(u,n,h),m(u,i,h),B(_,i,null),m(u,C,h),m(u,z,h),m(u,L,h),g&&g.m(u,h),m(u,D,h),m(u,M,h),d(M,X),j=!0},p(u,h){(!j||h&1)&&P(t,u[0]),(!j||h&16)&&b(s,"href",u[4]),(!j||h&8)&&b(e,"id",u[3]);const T={};h&1084&&(T.$$scope={dirty:h,ctx:u}),a.$set(T);const V={};h&2&&(V.source=u[1]),_.$set(V),u[6]&&u[6].length>0?g?g.p(u,h):(g=Q(u),g.c(),g.m(D.parentNode,D)):g&&(g.d(1),g=null)},i(u){j||(k(a.$$.fragment,u),k(_.$$.fragment,u),j=!0)},o(u){R(a.$$.fragment,u),R(_.$$.fragment,u),j=!1},d(u){u&&c(e),u&&c(r),q(a,u),u&&c(f),u&&c(l),u&&c(n),u&&c(i),q(_),u&&c(C),u&&c(z),u&&c(L),g&&g.d(u),u&&c(D),u&&c(M)}}}function we(o){let e,s;return e=new pe({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){B(e,t,r),s=!0},p(t,r){const a={};r&1151&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Ee(o){let e,s;return e=new he({props:{$$slots:{default:[we]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){B(e,t,r),s=!0},p(t,[r]){const a={};r&1151&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Ce(o,e,s){let{name:t}=e,{body:r}=e,{author:a}=e,{tag_name:f}=e,{html_url:l}=e,{published_at:n}=e,{assets:i=[]}=e;return o.$$set=_=>{"name"in _&&s(0,t=_.name),"body"in _&&s(1,r=_.body),"author"in _&&s(2,a=_.author),"tag_name"in _&&s(3,f=_.tag_name),"html_url"in _&&s(4,l=_.html_url),"published_at"in _&&s(5,n=_.published_at),"assets"in _&&s(6,i=_.assets)},[t,r,a,f,l,n,i]}class Re extends ee{constructor(e){super(),te(this,e,Ce,Ee,le,{name:0,body:1,author:2,tag_name:3,html_url:4,published_at:5,assets:6})}}function W(o,e,s){const t=o.slice();return t[2]=e[s],t}function Ae(o){let e,s=o[5].message+"",t;return{c(){e=p("p"),t=H(s),this.h()},l(r){e=$(r,"P",{style:!0});var a=v(e);t=I(a,s),a.forEach(c),this.h()},h(){re(e,"color","red")},m(r,a){m(r,e,a),d(e,t)},p(r,a){a&1&&s!==(s=r[5].message+"")&&P(t,s)},i:G,o:G,d(r){r&&c(e)}}}function He(o){let e,s,t=o[1]&&Z(o);return{c(){t&&t.c(),e=A()},l(r){t&&t.l(r),e=A()},m(r,a){t&&t.m(r,a),m(r,e,a),s=!0},p(r,a){r[1]?t?(t.p(r,a),a&1&&k(t,1)):(t=Z(r),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(ae(),R(t,1,1,()=>{t=null}),fe())},i(r){s||(k(t),s=!0)},o(r){R(t),s=!1},d(r){t&&t.d(r),r&&c(e)}}}function Z(o){let e,s,t=o[1],r=[];for(let f=0;f<t.length;f+=1)r[f]=x(W(o,t,f));const a=f=>R(r[f],1,1,()=>{r[f]=null});return{c(){for(let f=0;f<r.length;f+=1)r[f].c();e=A()},l(f){for(let l=0;l<r.length;l+=1)r[l].l(f);e=A()},m(f,l){for(let n=0;n<r.length;n+=1)r[n].m(f,l);m(f,e,l),s=!0},p(f,l){if(l&1){t=f[1];let n;for(n=0;n<t.length;n+=1){const i=W(f,t,n);r[n]?(r[n].p(i,l),k(r[n],1)):(r[n]=x(i),r[n].c(),k(r[n],1),r[n].m(e.parentNode,e))}for(ae(),n=t.length;n<r.length;n+=1)a(n);fe()}},i(f){if(!s){for(let l=0;l<t.length;l+=1)k(r[l]);s=!0}},o(f){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)R(r[l]);s=!1},d(f){se(r,f),f&&c(e)}}}function x(o){let e,s,t,r;const a=[o[2]];let f={};for(let l=0;l<a.length;l+=1)f=ce(f,a[l]);return e=new Re({props:f}),{c(){N(e.$$.fragment),s=w(),t=p("br")},l(l){S(e.$$.fragment,l),s=E(l),t=$(l,"BR",{})},m(l,n){B(e,l,n),m(l,s,n),m(l,t,n),r=!0},p(l,n){const i=n&1?ie(a,[ue(l[2])]):{};e.$set(i)},i(l){r||(k(e.$$.fragment,l),r=!0)},o(l){R(e.$$.fragment,l),r=!1},d(l){q(e,l),l&&c(s),l&&c(t)}}}function Ie(o){let e,s;return{c(){e=p("p"),s=H("...waiting")},l(t){e=$(t,"P",{});var r=v(e);s=I(r,"...waiting"),r.forEach(c)},m(t,r){m(t,e,r),d(e,s)},p:G,i:G,o:G,d(t){t&&c(e)}}}function Ne(o){let e,s,t,r,a={ctx:o,current:null,token:null,hasCatch:!0,pending:Ie,then:He,catch:Ae,value:1,error:5,blocks:[,,,]};return J(t=o[0],a),{c(){e=w(),s=A(),a.block.c(),this.h()},l(f){ne('[data-svelte="svelte-1cnrxsu"]',document.head).forEach(c),e=E(f),s=A(),a.block.l(f),this.h()},h(){document.title="Releases"},m(f,l){m(f,e,l),m(f,s,l),a.block.m(f,a.anchor=l),a.mount=()=>s.parentNode,a.anchor=s,r=!0},p(f,[l]){o=f,a.ctx=o,l&1&&t!==(t=o[0])&&J(t,a)||oe(a,o,l)},i(f){r||(k(a.block),r=!0)},o(f){for(let l=0;l<3;l+=1){const n=a.blocks[l];R(n)}r=!1},d(f){f&&c(e),f&&c(s),a.block.d(f),a.token=null,a=null}}}async function Ve(){const e=await fetch("https://api.github.com/repos/BEXIS2/Core/releases");return console.log("load releases"),{status:e.status,props:{bexis2releases:e.ok&&await e.json()}}}function Se(o,e,s){let{bexis2releases:t=""}=e;return o.$$set=r=>{"bexis2releases"in r&&s(0,t=r.bexis2releases)},[t]}class Ge extends ee{constructor(e){super(),te(this,e,Se,Ne,le,{bexis2releases:0})}}export{Ge as default,Ve as load};