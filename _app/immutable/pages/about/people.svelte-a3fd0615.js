import{S as pe,i as he,s as _e,e as _,k as j,t as w,c as g,a as k,m as y,h as S,d as h,$ as ce,b as J,f as ge,g as D,_ as c,j as R,E as fe,w as le,x as re,y as ne,q as P,o as I,B as se,l as X,n as ve,p as be,a1 as je,C as we,z as ye,A as Se}from"../../chunks/index-f4bc5dab.js";import{b as me}from"../../chunks/paths-396f020f.js";import{R as Be,C as Ee}from"../../chunks/Row-29e0025b.js";/* empty css                                                           */import"../../chunks/utils-f9eb197c.js";var A=[{name:"Roman Gerlach",position:"Project Coordinator",address:{name:"Friedrich-Schiller-University Jena",street:"Leutragraben 1, Jentower",postcode:"07743",city:"jena"},phone:"+49 3641 946340",mail:"roman.gerlach@uni-jena.de",image:"roman-gerlach.png"},{name:"Dr Jitendra Gaikwad",position:"Community Manager",address:{name:"Friedrich-Schiller-University Jena",street:"Leutragraben 1, Jentower",postcode:"07743",city:"jena"},phone:"+49 3641 946368",mail:"jitendra.gaikwad@uni-jena.de",image:"jitendra.jpg"},{name:"Sven Thiel",position:"Developer",address:{name:"Friedrich-Schiller-University Jena",street:"Leutragraben 1, Jentower",postcode:"07743",city:"jena"},phone:"+49 3641 99409",mail:"sven.thiel@uni-jena.de",image:"Sven-Thiel-quadratisch.jpg"},{name:"David Sch\xF6ne",position:"Developer",address:{name:"Friedrich-Schiller-University Jena",street:"Leutragraben 1, Jentower",postcode:"07743",city:"jena"},phone:"+49 3641 99409",mail:"david.schoene@uni-jena.de",image:"David-Sch\xF6ne-quadratisch.jpg"},{name:"Prof. Dr. Birgitta K\xF6nig-Ries",position:"",address:{name:"Friedrich-Schiller-University Jena",street:"Leutragraben 1, Jentower",postcode:"07743",city:"jena"},phone:"+49 3641 946430",mail:"Birgitta.Koenig-Ries@uni-jena.de",image:"BKR-300x257.jpg"}];function Je(f){let e,n,a,t,l,s,i,o,r,u,v,U,N,d,q=f[2].name+"",H,$,O,z=f[2].street+"",T,Q,W,F=f[2].postcode+"",G,Y,L=f[2].city+"",K,Z,x,B,V,ee,te,ae,M;return{c(){e=_("div"),n=_("img"),t=j(),l=_("div"),s=_("h5"),i=w(f[0]),o=j(),r=_("hr"),u=j(),v=_("div"),U=w(f[1]),N=j(),d=_("p"),H=w(q),$=_("br"),O=j(),T=w(z),Q=_("br"),W=j(),G=w(F),Y=w(", "),K=w(L),Z=_("br"),x=j(),B=_("p"),V=w(f[4]),ee=j(),te=_("br"),ae=j(),M=w(f[3]),this.h()},l(p){e=g(p,"DIV",{class:!0,style:!0});var m=k(e);n=g(m,"IMG",{src:!0,class:!0,alt:!0}),t=y(m),l=g(m,"DIV",{class:!0});var E=k(l);s=g(E,"H5",{class:!0});var ie=k(s);i=S(ie,f[0]),ie.forEach(h),o=y(E),r=g(E,"HR",{}),u=y(E),v=g(E,"DIV",{class:!0});var oe=k(v);U=S(oe,f[1]),oe.forEach(h),N=y(E),d=g(E,"P",{class:!0});var b=k(d);H=S(b,q),$=g(b,"BR",{}),O=y(b),T=S(b,z),Q=g(b,"BR",{}),W=y(b),G=S(b,F),Y=S(b,", "),K=S(b,L),Z=g(b,"BR",{}),b.forEach(h),x=y(E),B=g(E,"P",{class:!0});var C=k(B);V=S(C,f[4]),ee=y(C),te=g(C,"BR",{}),ae=y(C),M=S(C,f[3]),C.forEach(h),E.forEach(h),m.forEach(h),this.h()},h(){ce(n.src,a=me+"/images/people/"+f[5])||J(n,"src",a),J(n,"class","card-img-top"),J(n,"alt","..."),J(s,"class","card-title"),J(v,"class","position svelte-18bxopz"),J(d,"class","card-text"),J(B,"class","card-text"),J(l,"class","card-body"),J(e,"class","card svelte-18bxopz"),ge(e,"width","18rem")},m(p,m){D(p,e,m),c(e,n),c(e,t),c(e,l),c(l,s),c(s,i),c(l,o),c(l,r),c(l,u),c(l,v),c(v,U),c(l,N),c(l,d),c(d,H),c(d,$),c(d,O),c(d,T),c(d,Q),c(d,W),c(d,G),c(d,Y),c(d,K),c(d,Z),c(l,x),c(l,B),c(B,V),c(B,ee),c(B,te),c(B,ae),c(B,M)},p(p,[m]){m&32&&!ce(n.src,a=me+"/images/people/"+p[5])&&J(n,"src",a),m&1&&R(i,p[0]),m&2&&R(U,p[1]),m&4&&q!==(q=p[2].name+"")&&R(H,q),m&4&&z!==(z=p[2].street+"")&&R(T,z),m&4&&F!==(F=p[2].postcode+"")&&R(G,F),m&4&&L!==(L=p[2].city+"")&&R(K,L),m&16&&R(V,p[4]),m&8&&R(M,p[3])},i:fe,o:fe,d(p){p&&h(e)}}}function Re(f,e,n){let{name:a}=e,{position:t}=e,{address:l}=e,{phone:s}=e,{mail:i}=e,{image:o}=e;return f.$$set=r=>{"name"in r&&n(0,a=r.name),"position"in r&&n(1,t=r.position),"address"in r&&n(2,l=r.address),"phone"in r&&n(3,s=r.phone),"mail"in r&&n(4,i=r.mail),"image"in r&&n(5,o=r.image)},[a,t,l,s,i,o]}class ke extends pe{constructor(e){super(),he(this,e,Re,Je,_e,{name:0,position:1,address:2,phone:3,mail:4,image:5})}}function ue(f,e,n){const a=f.slice();return a[0]=e[n],a}function De(f){let e,n,a=A,t=[];for(let s=0;s<a.length;s+=1)t[s]=de(ue(f,a,s));const l=s=>I(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=X()},l(s){for(let i=0;i<t.length;i+=1)t[i].l(s);e=X()},m(s,i){for(let o=0;o<t.length;o+=1)t[o].m(s,i);D(s,e,i),n=!0},p(s,i){if(i&0){a=A;let o;for(o=0;o<a.length;o+=1){const r=ue(s,a,o);t[o]?(t[o].p(r,i),P(t[o],1)):(t[o]=de(r),t[o].c(),P(t[o],1),t[o].m(e.parentNode,e))}for(ve(),o=a.length;o<t.length;o+=1)l(o);be()}},i(s){if(!n){for(let i=0;i<a.length;i+=1)P(t[i]);n=!0}},o(s){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)I(t[i]);n=!1},d(s){je(t,s),s&&h(e)}}}function Pe(f){let e,n;const a=[f[0]];let t={};for(let l=0;l<a.length;l+=1)t=we(t,a[l]);return e=new ke({props:t}),{c(){le(e.$$.fragment)},l(l){re(e.$$.fragment,l)},m(l,s){ne(e,l,s),n=!0},p(l,s){const i=s&0?ye(a,[Se(l[0])]):{};e.$set(i)},i(l){n||(P(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function de(f){let e,n;return e=new Ee({props:{$$slots:{default:[Pe]},$$scope:{ctx:f}}}),{c(){le(e.$$.fragment)},l(a){re(e.$$.fragment,a)},m(a,t){ne(e,a,t),n=!0},p(a,t){const l={};t&8&&(l.$$scope={dirty:t,ctx:a}),e.$set(l)},i(a){n||(P(e.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),n=!1},d(a){se(e,a)}}}function Ce(f){let e,n,a=A&&De(f);return{c(){a&&a.c(),e=X()},l(t){a&&a.l(t),e=X()},m(t,l){a&&a.m(t,l),D(t,e,l),n=!0},p(t,l){A&&a.p(t,l)},i(t){n||(P(a),n=!0)},o(t){I(a),n=!1},d(t){a&&a.d(t),t&&h(e)}}}function Ie(f){let e,n,a,t,l,s,i,o;return i=new Be({props:{$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){e=_("h2"),n=w("People"),a=j(),t=_("h3"),l=w("BEXIS2 Core Team"),s=j(),le(i.$$.fragment)},l(r){e=g(r,"H2",{});var u=k(e);n=S(u,"People"),u.forEach(h),a=y(r),t=g(r,"H3",{});var v=k(t);l=S(v,"BEXIS2 Core Team"),v.forEach(h),s=y(r),re(i.$$.fragment,r)},m(r,u){D(r,e,u),c(e,n),D(r,a,u),D(r,t,u),c(t,l),D(r,s,u),ne(i,r,u),o=!0},p(r,[u]){const v={};u&8&&(v.$$scope={dirty:u,ctx:r}),i.$set(v)},i(r){o||(P(i.$$.fragment,r),o=!0)},o(r){I(i.$$.fragment,r),o=!1},d(r){r&&h(e),r&&h(a),r&&h(t),r&&h(s),se(i,r)}}}class He extends pe{constructor(e){super(),he(this,e,null,Ie,_e,{})}}export{He as default};