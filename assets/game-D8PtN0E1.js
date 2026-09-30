(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,F=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,I=2301,Ne=2302,Pe=2303,Fe=2400,L=2401,Ie=2402,R=3200,Le=`srgb`,Re=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,z(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=1234567,rt=Math.PI/180,it=180/Math.PI;function at(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function ot(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(nt=e);let t=nt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*rt}function bt(e){return e*it}function xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Dt={DEG2RAD:rt,RAD2DEG:it,generateUUID:at,clamp:ot,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Et,denormalize:Tt},V=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new H,At=new Ot,jt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Mt.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Mt.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Mt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mt=new jt,Nt=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pt=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ft(){let e={enabled:!0,workingColorSpace:Re,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Re]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var It=Ft();function Lt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Rt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var zt,Bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zt===void 0&&(zt=Ke(`canvas`)),zt.width=e.width,zt.height=e.height;let t=zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Lt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Lt(t[e]/255)*255):t[e]=Lt(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Vt=0,Ht=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=at(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ut(r[t].image)):e.push(Ut(r[t]))}else e=Ut(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ut(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var Wt=0,Gt=new H,Kt=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=at(),this.name=``,this.source=new Ht(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gt).x}get height(){return this.source.getSize(Gt).y}get depth(){return this.source.getSize(Gt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=300,Kt.DEFAULT_ANISOTROPY=1;var qt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jt=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let r=new Kt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ht(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yt=class extends Jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xt=class extends Kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zt=class extends Kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Qt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/$t.setFromMatrixColumn(e,0).length(),i=1/$t.setFromMatrixColumn(e,1).length(),a=1/$t.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tn,e,nn)}lookAt(e,t,n){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),rn.crossVectors(n,on),rn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),rn.crossVectors(n,on)),rn.normalize(),an.crossVectors(on,rn),r[0]=rn.x,r[4]=an.x,r[8]=on.x,r[1]=rn.y,r[5]=an.y,r[9]=on.y,r[2]=rn.z,r[6]=an.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=$t.set(r[0],r[1],r[2]).length(),o=$t.set(r[4],r[5],r[6]).length(),s=$t.set(r[8],r[9],r[10]).length();i<0&&(a=-a),en.copy(this);let c=1/a,l=1/o,u=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=l,en.elements[5]*=l,en.elements[6]*=l,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$t=new H,en=new Qt,tn=new H(0,0,0),nn=new H(1,1,1),rn=new H,an=new H,on=new H,sn=new Qt,cn=new Ot,ln=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ot(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cn.setFromEuler(this),this.setFromQuaternion(cn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER=`XYZ`;var un=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},dn=0,fn=new H,pn=new Ot,mn=new Qt,hn=new H,gn=new H,_n=new H,vn=new Ot,yn=new H(1,0,0),bn=new H(0,1,0),xn=new H(0,0,1),Sn={type:`added`},Cn={type:`removed`},wn={type:`childadded`,child:null},Tn={type:`childremoved`,child:null},En=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dn++}),this.uuid=at(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new ln,r=new Ot,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new jt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new un,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis(yn,e)}rotateY(e){return this.rotateOnAxis(bn,e)}rotateZ(e){return this.rotateOnAxis(xn,e)}translateOnAxis(e,t){return fn.copy(e).applyQuaternion(this.quaternion),this.position.add(fn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yn,e)}translateY(e){return this.translateOnAxis(bn,e)}translateZ(e){return this.translateOnAxis(xn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hn.copy(e):hn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(gn,hn,this.up):mn.lookAt(hn,gn,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),pn.setFromRotationMatrix(mn),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,e,_n),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,vn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};En.DEFAULT_UP=new H(0,1,0),En.DEFAULT_MATRIX_AUTO_UPDATE=!0,En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends En{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Dn={type:`move`},On=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},jn={h:0,s:0,l:0};function Mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=st(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mn(i,r,e+1/3),this.g=Mn(i,r,e),this.b=Mn(i,r,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=kn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}copyLinearToSRGB(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return It.workingToColorSpace(Nn.copy(this),e),Math.round(ot(Nn.r*255,0,255))*65536+Math.round(ot(Nn.g*255,0,255))*256+Math.round(ot(Nn.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,r=Nn.g,i=Nn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Le){It.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,r=Nn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(jn);let n=ut(An.h,jn.h,t),r=ut(An.s,jn.s,t),i=ut(An.l,jn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new W;W.NAMES=kn;var Pn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fn=class extends En{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new H,Ln=new H,Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new qt,qn=new qt,Jn=new qt,Yn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){In.subVectors(r,t),Ln.subVectors(n,t),Rn.subVectors(e,t);let a=In.dot(In),o=In.dot(Ln),s=In.dot(Rn),c=Ln.dot(Ln),l=Ln.dot(Rn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)!==null&&zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,zn.x),s.addScaledVector(a,zn.y),s.addScaledVector(o,zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Kn.setScalar(0),qn.setScalar(0),Jn.setScalar(0),Kn.fromBufferAttribute(e,t),qn.fromBufferAttribute(e,n),Jn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kn,i.x),a.addScaledVector(qn,i.y),a.addScaledVector(Jn,i.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Ln.subVectors(e,t),In.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),In.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Bn.subVectors(r,n),Vn.subVectors(i,n),Un.subVectors(e,n);let s=Bn.dot(Un),c=Vn.dot(Un);if(s<=0&&c<=0)return t.copy(n);Wn.subVectors(e,r);let l=Bn.dot(Wn),u=Vn.dot(Wn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Bn,a);Gn.subVectors(e,i);let f=Bn.dot(Gn),p=Vn.dot(Gn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Vn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Hn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Hn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Bn,a).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Qn):Qn.fromBufferAttribute(r,t),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),$n.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox)),$n.applyMatrix4(e.matrixWorld),this.union($n)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),sr.subVectors(this.max,or),er.subVectors(e.a,or),tr.subVectors(e.b,or),nr.subVectors(e.c,or),rr.subVectors(tr,er),ir.subVectors(nr,tr),ar.subVectors(er,nr);let t=[0,-rr.z,rr.y,0,-ir.z,ir.y,0,-ar.z,ar.y,rr.z,0,-rr.x,ir.z,0,-ir.x,ar.z,0,-ar.x,-rr.y,rr.x,0,-ir.y,ir.x,0,-ar.y,ar.x,0];return!ur(t,er,tr,nr,sr)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,er,tr,nr,sr))?!1:(cr.crossVectors(rr,ir),t=[cr.x,cr.y,cr.z],ur(t,er,tr,nr,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,$n=new Xn,er=new H,tr=new H,nr=new H,rr=new H,ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H;function ur(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){lr.fromArray(e,a);let o=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),s=t.dot(lr),c=n.dot(lr),l=r.dot(lr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dr=new H,fr=new V,pr=0,mr=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix4(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyNormalMatrix(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.transformDirection(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},hr=class extends mr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gr=class extends mr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_r=class extends mr{constructor(e,t,n){super(new Float32Array(e),t,n)}},vr=new Xn,yr=new H,br=new H,xr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(br)),this.expandByPoint(yr.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sr=0,Cr=new Qt,wr=new En,Tr=new H,Er=new Xn,Dr=new Xn,Or=new H,kr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=at(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?gr:hr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new jt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cr.makeRotationFromQuaternion(e),this.applyMatrix4(Cr),this}rotateX(e){return Cr.makeRotationX(e),this.applyMatrix4(Cr),this}rotateY(e){return Cr.makeRotationY(e),this.applyMatrix4(Cr),this}rotateZ(e){return Cr.makeRotationZ(e),this.applyMatrix4(Cr),this}translate(e,t,n){return Cr.makeTranslation(e,t,n),this.applyMatrix4(Cr),this}scale(e,t,n){return Cr.makeScale(e,t,n),this.applyMatrix4(Cr),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _r(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(this.boundingBox.min,Er.min),this.boundingBox.expandByPoint(Or),Or.addVectors(this.boundingBox.max,Er.max),this.boundingBox.expandByPoint(Or)):(this.boundingBox.expandByPoint(Er.min),this.boundingBox.expandByPoint(Er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Er.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(Er.min,Dr.min),Er.expandByPoint(Or),Or.addVectors(Er.max,Dr.max),Er.expandByPoint(Or)):(Er.expandByPoint(Dr.min),Er.expandByPoint(Dr.max))}Er.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Or.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Or));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Or.fromBufferAttribute(a,t),o&&(Tr.fromBufferAttribute(e,t),Or.add(Tr)),r=Math.max(r,n.distanceToSquared(Or))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new mr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new mr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Or.fromBufferAttribute(e,t),Or.normalize(),e.setXYZ(t,Or.x,Or.y,Or.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=He,this.updateRanges=[],this.version=0,this.uuid=at()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=at()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=at()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jr=new H,Mr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix4(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyNormalMatrix(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.transformDirection(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ye(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new mr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ye(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nr=new H,Pr=new H,Fr=new jt,Ir=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nr.subVectors(n,t).cross(Pr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fr.getNormalMatrix(e),r=this.coplanarPoint(Nr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lr=0,Rr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lr++}),this.uuid=at(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ir().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Vr=new H,Hr=new H,Ur=new H,Wr=new V,Gr=new V,Kr=new Qt,qr=new H,Jr=new H,Yr=new H,Xr=new V,Zr=new V,Qr=new V,$r=class extends En{constructor(e=new zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Br===void 0){Br=new kr;let e=new Ar(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute(`position`,new Mr(e,3,0,!1)),Br.setAttribute(`uv`,new Mr(e,2,3,!1))}this.geometry=Br,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Hr.setFromMatrixScale(this.matrixWorld),Kr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Ur.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ei(qr.set(-.5,-.5,0),Ur,a,Hr,r,i),ei(Jr.set(.5,-.5,0),Ur,a,Hr,r,i),ei(Yr.set(.5,.5,0),Ur,a,Hr,r,i),Xr.set(0,0),Zr.set(1,0),Qr.set(1,1);let o=e.ray.intersectTriangle(qr,Jr,Yr,!1,Vr);if(o===null&&(ei(Jr.set(-.5,.5,0),Ur,a,Hr,r,i),Zr.set(0,1),o=e.ray.intersectTriangle(qr,Yr,Jr,!1,Vr),o===null))return;let s=e.ray.origin.distanceTo(Vr);s<e.near||s>e.far||t.push({distance:s,point:Vr.clone(),uv:Yn.getInterpolation(Vr,qr,Jr,Yr,Xr,Zr,Qr,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ei(e,t,n,r,i,a){Wr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Gr.copy(Wr):(Gr.x=a*Wr.x-i*Wr.y,Gr.y=i*Wr.x+a*Wr.y),e.copy(t),e.x+=Gr.x,e.y+=Gr.y,e.applyMatrix4(Kr)}var ti=new H,ni=new H,ri=new H,ii=new H,ai=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let F=le+P+ue;if(F===0)return null;let de=N*(le*D+P*A+ue*te);return(F>0?de<0:de>0)?null:this.at(de/F,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},si=new Qt,ci=new ai,li=new xr,ui=new H,di=new H,fi=new H,pi=new H,mi=new H,hi=new H,gi=new H,_i=new H,G=class extends En{constructor(e=new kr,t=new oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mi.fromBufferAttribute(s,e),a?hi.addScaledVector(mi,r):hi.addScaledVector(mi.sub(t),r))}t.add(hi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(i),ci.copy(e.ray).recast(e.near),!(li.containsPoint(ci.origin)===!1&&(ci.intersectSphere(li,ui)===null||ci.origin.distanceToSquared(ui)>(e.far-e.near)**2))&&(si.copy(i).invert(),ci.copy(e.ray).applyMatrix4(si),(n.boundingBox===null||ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=yi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=yi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=yi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=yi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function vi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_i.copy(s),_i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_i);return l<n.near||l>n.far?null:{distance:l,point:_i.clone(),object:e}}function yi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,di),e.getVertexPosition(c,fi),e.getVertexPosition(l,pi);let u=vi(e,t,n,r,di,fi,pi,gi);if(u){let e=new H;Yn.getBarycoord(gi,di,fi,pi,e),i&&(u.uv=Yn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Yn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Yn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Yn.getNormal(di,fi,pi,t.normal),u.face=t,u.barycoord=e}return u}var bi=class extends Kt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xi=class extends mr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Si=new Qt,Ci=new Qt,wi=[],Ti=new Xn,Ei=new Qt,Di=new G,Oi=new xr,ki=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ei)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Ti.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(Ti)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Oi.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Si),Ci.multiplyMatrices(n,Si),Di.matrixWorld=Ci,Di.raycast(e,wi);for(let e=0,n=wi.length;e<n;e++){let n=wi[e];n.instanceId=i,n.object=this,t.push(n)}wi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ai=new xr,ji=new V(.5,.5),Mi=new H,Ni=class{constructor(e=new Ir,t=new Ir,n=new Ir,r=new Ir,i=new Ir,a=new Ir){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476+ji.distanceTo(e.center),Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Mi.x=r.normal.x>0?e.max.x:e.min.x,Mi.y=r.normal.y>0?e.max.y:e.min.y,Mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pi=class extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fi=new H,Ii=new H,Li=new Qt,Ri=new ai,zi=new xr,Bi=new H,Vi=new H,Hi=class extends En{constructor(e=new kr,t=new Pi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Fi.fromBufferAttribute(t,e-1),Ii.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Fi.distanceTo(Ii);e.setAttribute(`lineDistance`,new _r(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(r),zi.radius+=i,e.ray.intersectsSphere(zi)===!1)return;Li.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Li);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ui(this,e,Ri,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ui(this,e,Ri,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ui(this,e,Ri,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ui(this,e,Ri,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ui(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Fi.fromBufferAttribute(s,i),Ii.fromBufferAttribute(s,a),n.distanceSqToSegment(Fi,Ii,Bi,Vi)>r)return;Bi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Bi);if(!(c<t.near||c>t.far))return{distance:c,point:Vi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Wi=new H,Gi=new H,Ki=class extends Hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Wi.fromBufferAttribute(t,e),Gi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Wi.distanceTo(Gi);e.setAttribute(`lineDistance`,new _r(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},qi=class extends Kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends Kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends Kt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ht(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xi=class extends Yi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zi=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class e extends kr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _r(c,3)),this.setAttribute(`normal`,new _r(l,3)),this.setAttribute(`uv`,new _r(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$i=class e extends kr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new H,g=new H;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new _r(o,3)),this.setAttribute(`normal`,new _r(s,3)),this.setAttribute(`uv`,new _r(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ea=class e extends kr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new _r(a,3)),this.setAttribute(`normal`,new _r(o,3)),this.setAttribute(`uv`,new _r(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ta=class e extends kr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new _r(u,3)),this.setAttribute(`normal`,new _r(d,3)),this.setAttribute(`uv`,new _r(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class e extends ta{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=class e extends kr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new _r(i,3)),this.setAttribute(`normal`,new _r(i.slice(),3)),this.setAttribute(`uv`,new _r(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ia=new H,aa=new H,oa=new H,sa=new Yn,ca=class extends kr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(rt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=sa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),sa.getNormal(oa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=sa[c[e]],o=sa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(oa.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:oa.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ia.fromBufferAttribute(a,t),aa.fromBufferAttribute(a,n),d.push(ia.x,ia.y,ia.z),d.push(aa.x,aa.y,aa.z)}this.setAttribute(`position`,new _r(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},la=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new Qt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ot(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ot(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ua=class extends la{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},da=class extends ua{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function fa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var pa=new H,ma=new H,ha=new fa,ga=new fa,_a=new fa,va=class extends la{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ma.subVectors(r[0],r[1]).add(r[0]),c=ma);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(pa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=pa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ha.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ga.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),_a.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ha.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ga.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),_a.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ha.calc(s),ga.calc(s),_a.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ya(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ba(e,t){let n=1-e;return n*n*t}function xa(e,t){return 2*(1-e)*e*t}function Sa(e,t){return e*e*t}function Ca(e,t,n,r){return ba(e,t)+xa(e,n)+Sa(e,r)}function wa(e,t){let n=1-e;return n*n*n*t}function Ta(e,t){let n=1-e;return 3*n*n*e*t}function Ea(e,t){return 3*(1-e)*e*e*t}function Da(e,t){return e*e*e*t}function Oa(e,t,n,r,i){return wa(e,t)+Ta(e,n)+Ea(e,r)+Da(e,i)}var ka=class extends la{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,r.x,i.x,a.x,o.x),Oa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends la{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,r.x,i.x,a.x,o.x),Oa(e,r.y,i.y,a.y,o.y),Oa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends la{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends la{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends la{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ca(e,r.x,i.x,a.x),Ca(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends la{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ca(e,r.x,i.x,a.x),Ca(e,r.y,i.y,a.y),Ca(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends la{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ya(o,s.x,c.x,l.x,u.x),ya(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},Ia=Object.freeze({__proto__:null,ArcCurve:da,CatmullRomCurve3:va,CubicBezierCurve:ka,CubicBezierCurve3:Aa,EllipseCurve:ua,LineCurve:ja,LineCurve3:Ma,QuadraticBezierCurve:Na,QuadraticBezierCurve3:Pa,SplineCurve:Fa}),La=class extends la{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ia[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ia[n.type]().fromJSON(n))}return this}},Ra=class extends La{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ja(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Na(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ka(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Fa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ua(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},za=class extends Ra{constructor(e){super(e),this.uuid=at(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ra().fromJSON(n))}return this}};function Ba(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Va(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ja(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ua(a,o,n,s,c,l,0),o}function Va(e,t,n,r,i){let a;if(i===yo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=go(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=go(i/r|0,e[i],e[i+1],a);return a&&so(a,a.next)&&(_o(a),a=a.next),a}function Ha(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(so(n,n.next)||oo(n.prev,n,n.next)===0)){if(_o(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ua(e,t,n,r,i,a,o){if(!e)return;!o&&a&&$a(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ga(e,r,i,a):Wa(e)){t.push(c.i,e.i,l.i),_o(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Ka(Ha(e),t),Ua(e,t,n,r,i,a,2)):o===2&&qa(e,t,n,r,i,a):Ua(Ha(e),t,n,r,i,a,1);break}}}function Wa(e){let t=e.prev,n=e,r=e.next;if(oo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&io(i,s,a,c,o,l,m.x,m.y)&&oo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ga(e,t,n,r){let i=e.prev,a=e,o=e.next;if(oo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=to(p,m,t,n,r),v=to(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&io(s,u,c,d,l,f,y.x,y.y)&&oo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&io(s,u,c,d,l,f,b.x,b.y)&&oo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&io(s,u,c,d,l,f,y.x,y.y)&&oo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&io(s,u,c,d,l,f,b.x,b.y)&&oo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ka(e,t){let n=e;do{let r=n.prev,i=n.next.next;!so(r,i)&&co(r,n,n.next,i)&&po(r,i)&&po(i,r)&&(t.push(r.i,n.i,i.i),_o(n),_o(n.next),n=e=i),n=n.next}while(n!==e);return Ha(n)}function qa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ao(o,e)){let s=ho(o,e);o=Ha(o,o.next),s=Ha(s,s.next),Ua(o,t,n,r,i,a,0),Ua(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ja(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Va(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(no(o))}i.sort(Ya);for(let e=0;e<i.length;e++)n=Xa(i[e],n);return n}function Ya(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Xa(e,t){let n=Za(e,t);if(!n)return t;let r=ho(n,e);return Ha(r,r.next),Ha(n,n.next)}function Za(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(so(e,n))return n;do{if(so(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ro(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);po(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Qa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Qa(e,t){return oo(e.prev,e,t.prev)<0&&oo(t.next,e,e.next)<0}function $a(e,t,n,r){let i=e;do i.z===0&&(i.z=to(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,eo(i)}function eo(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function to(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function no(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ro(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function io(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ro(e,t,n,r,i,a,o,s)}function ao(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fo(e,t)&&(po(e,t)&&po(t,e)&&mo(e,t)&&(oo(e.prev,e,t.prev)||oo(e,t.prev,t))||so(e,t)&&oo(e.prev,e,e.next)>0&&oo(t.prev,t,t.next)>0)}function oo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function so(e,t){return e.x===t.x&&e.y===t.y}function co(e,t,n,r){let i=uo(oo(e,t,n)),a=uo(oo(e,t,r)),o=uo(oo(n,r,e)),s=uo(oo(n,r,t));return!!(i!==a&&o!==s||i===0&&lo(e,n,t)||a===0&&lo(e,r,t)||o===0&&lo(n,e,r)||s===0&&lo(n,t,r))}function lo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function uo(e){return e>0?1:e<0?-1:0}function fo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&co(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function po(e,t){return oo(e.prev,e,e.next)<0?oo(e,t,e.next)>=0&&oo(e,e.prev,t)>=0:oo(e,t,e.prev)<0||oo(e,e.next,t)<0}function mo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ho(e,t){let n=vo(e.i,e.x,e.y),r=vo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function go(e,t,n,r){let i=vo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function _o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function vo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var bo=class{static triangulate(e,t,n=2){return Ba(e,t,n)}},xo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];So(e),Co(n,e);let a=e.length;t.forEach(So);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Co(n,t[e]);let o=bo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function So(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Co(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var wo=class e extends kr{constructor(e=new za([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new _r(r,3)),this.setAttribute(`uv`,new _r(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?To:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!xo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];xo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||B(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],te,M=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);j.push(te),M=M.concat(te)}let ne;if(p===0)ne=xo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ne=xo.triangulateShape(e,t)}let N=ne.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<N;e++){let n=ne[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<N;e++){let n=ne[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<N;e++){let t=ne[e];ce(t[2],t[1],t[0])}for(let e=0;e<N;e++){let t=ne[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Eo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ia[i.type]().fromJSON(i)),new e(r,t.options)}},To={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function Eo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Do=class e extends ra{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Oo=class e extends kr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _r(p,3)),this.setAttribute(`normal`,new _r(m,3)),this.setAttribute(`uv`,new _r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ko=class e extends kr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new _r(s,3)),this.setAttribute(`normal`,new _r(c,3)),this.setAttribute(`uv`,new _r(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ao=class e extends kr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new _r(p,3)),this.setAttribute(`normal`,new _r(m,3)),this.setAttribute(`uv`,new _r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},jo=class e extends kr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new _r(c,3)),this.setAttribute(`normal`,new _r(l,3)),this.setAttribute(`uv`,new _r(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Mo=class e extends kr{constructor(e=new Pa(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new _r(u,3)),this.setAttribute(`normal`,new _r(d,3)),this.setAttribute(`uv`,new _r(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function No(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Fo(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Fo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Po(e){let t={};for(let n=0;n<e.length;n++){let r=No(e[n]);for(let e in r)t[e]=r[e]}return t}function Fo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Io(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Lo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:It.workingColorSpace}var Ro={clone:No,merge:Po},zo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vo=class extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zo,this.fragmentShader=Bo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=Io(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new qt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new jt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Qt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ho=class extends Vo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Uo=class extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wo=class extends Rr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Go=class extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=R,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Jo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Yo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Xo=class extends Yo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case L:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case L:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Zo=class extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Qo=class extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$o=class extends Yo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ns(n,t,g,y,r);i[p]=es(x,o,_,b,m)}return i}};function es(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ts(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ns(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=es(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ts(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var rs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Jo(e.settings)&&(n.settings={inTangents:qo(e.settings.inTangents,Array),outTangents:qo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case I:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return I;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Jo(this.settings)&&(is(this.settings.inTangents,e),is(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Jo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function is(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}rs.prototype.ValueTypeName=``,rs.prototype.TimeBufferType=Float32Array,rs.prototype.ValueBufferType=Float32Array,rs.prototype.DefaultInterpolation=I;var as=class extends rs{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName=`bool`,as.prototype.ValueBufferType=Array,as.prototype.DefaultInterpolation=Me,as.prototype.InterpolantFactoryMethodLinear=void 0,as.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}};os.prototype.ValueTypeName=`color`;var ss=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}};ss.prototype.ValueTypeName=`number`;var cs=class extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},ls=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new cs(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName=`quaternion`,ls.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends rs{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName=`string`,us.prototype.ValueBufferType=Array,us.prototype.DefaultInterpolation=Me,us.prototype.InterpolantFactoryMethodLinear=void 0,us.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}};ds.prototype.ValueTypeName=`vector`;var fs=class extends En{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ps=class extends fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ms=new Qt,hs=new H,gs=new H,_s=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;hs.setFromMatrixPosition(e.matrixWorld),t.position.copy(hs),gs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ms.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ms,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ms)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vs=new H,ys=new Ot,bs=new H,xs=class extends En{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vs,ys,bs),bs.x===1&&bs.y===1&&bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,ys,bs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vs,ys,bs),bs.x===1&&bs.y===1&&bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,ys,bs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new H,Cs=new V,ws=new V,Ts=class extends xs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=it*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return it*2*Math.atan(Math.tan(rt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Cs,ws),t.subVectors(ws,Cs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=class extends xs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=class extends _s{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Ds}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ks=-90,As=1,js=class extends En{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ts(ks,As,e,t);r.layers=this.layers,this.add(r);let i=new Ts(ks,As,e,t);i.layers=this.layers,this.add(i);let a=new Ts(ks,As,e,t);a.layers=this.layers,this.add(a);let o=new Ts(ks,As,e,t);o.layers=this.layers,this.add(o);let s=new Ts(ks,As,e,t);s.layers=this.layers,this.add(s);let c=new Ts(ks,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ms=class extends Ts{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ns=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ps.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ps(){this._document.hidden===!1&&this.reset()}var Fs=`\\[\\]\\.:\\/`,Is=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ls=`[^\\[\\]\\.:\\/]`,Rs=`[^`+Fs.replace(`\\.`,``)+`]`,zs=`((?:WC+[\\/:])*)`.replace(`WC`,Ls),Bs=`(WCOD+)?`.replace(`WCOD`,Rs),Vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ls),Hs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ls),Us=RegExp(`^`+zs+Bs+Vs+Hs+`$`),Ws=[`material`,`materials`,`bones`,`map`],Gs=class{constructor(e,t,n){let r=n||Ks.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ks=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Is,``)}static parseTrackName(e){let t=Us.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ws.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ks.Composite=Gs,Ks.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ks.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ks.prototype.GetterByBindingType=[Ks.prototype._getValue_direct,Ks.prototype._getValue_array,Ks.prototype._getValue_arrayElement,Ks.prototype._getValue_toArray],Ks.prototype.SetterByBindingTypeAndVersioning=[[Ks.prototype._setValue_direct,Ks.prototype._setValue_direct_setNeedsUpdate,Ks.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_array,Ks.prototype._setValue_array_setNeedsUpdate,Ks.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_arrayElement,Ks.prototype._setValue_arrayElement_setNeedsUpdate,Ks.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_fromArray,Ks.prototype._setValue_fromArray_setNeedsUpdate,Ks.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qs=new Qt,Js=class{constructor(e,t,n=0,r=1/0){this.ray=new ai(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new un,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):B(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return qs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qs),this}intersectObject(e,t=!0,n=[]){return Xs(e,this,n,t),n.sort(Ys),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Xs(e[r],this,n,t);return n.sort(Ys),n}};function Ys(e,t){return e.distance-t.distance}function Xs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Xs(r[e],t,n,!0)}}var Zs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,z(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Qs(e,t,n,r){let i=$s(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $s(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function ec(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function tc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var nc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},rc={basic:{uniforms:Po([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:nc.meshbasic_vert,fragmentShader:nc.meshbasic_frag},lambert:{uniforms:Po([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:nc.meshlambert_vert,fragmentShader:nc.meshlambert_frag},phong:{uniforms:Po([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nc.meshphong_vert,fragmentShader:nc.meshphong_frag},standard:{uniforms:Po([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nc.meshphysical_vert,fragmentShader:nc.meshphysical_frag},toon:{uniforms:Po([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:nc.meshtoon_vert,fragmentShader:nc.meshtoon_frag},matcap:{uniforms:Po([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:nc.meshmatcap_vert,fragmentShader:nc.meshmatcap_frag},points:{uniforms:Po([K.points,K.fog]),vertexShader:nc.points_vert,fragmentShader:nc.points_frag},dashed:{uniforms:Po([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nc.linedashed_vert,fragmentShader:nc.linedashed_frag},depth:{uniforms:Po([K.common,K.displacementmap]),vertexShader:nc.depth_vert,fragmentShader:nc.depth_frag},normal:{uniforms:Po([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:nc.meshnormal_vert,fragmentShader:nc.meshnormal_frag},sprite:{uniforms:Po([K.sprite,K.fog]),vertexShader:nc.sprite_vert,fragmentShader:nc.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nc.background_vert,fragmentShader:nc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:nc.backgroundCube_vert,fragmentShader:nc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nc.cube_vert,fragmentShader:nc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nc.equirect_vert,fragmentShader:nc.equirect_frag},distance:{uniforms:Po([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nc.distance_vert,fragmentShader:nc.distance_frag},shadow:{uniforms:Po([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:nc.shadow_vert,fragmentShader:nc.shadow_frag}};rc.physical={uniforms:Po([rc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:nc.meshphysical_vert,fragmentShader:nc.meshphysical_frag};var ic={r:0,b:0,g:0},ac=new Qt,oc=new jt;oc.set(-1,0,0,0,1,0,0,0,1);function sc(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new G(new Qi(1,1,1),new Vo({name:`BackgroundCubeMaterial`,uniforms:No(rc.backgroundCube.uniforms),vertexShader:rc.backgroundCube.vertexShader,fragmentShader:rc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ac.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(oc),l.material.toneMapped=It.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new Oo(2,2),new Vo({name:`BackgroundMaterial`,uniforms:No(rc.background.uniforms),vertexShader:rc.background.vertexShader,fragmentShader:rc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=It.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ic,Lo(e)),n.buffers.color.setClear(ic.r,ic.g,ic.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function cc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function lc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function uc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function dc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ir,s=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var fc=4,pc=6,mc=20,hc=256,gc=new Es,_c=new W,vc=null,yc=0,bc=0,xc=!1,Sc=new H,Cc=new H,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Sc}=i;vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,yc,bc),this._renderer.xr.enabled=xc,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Re,depthBuffer:!1},r=Ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tc(r)),this._blurMaterial=kc(r,e,t),this._ggxMaterial=Oc(r,e,t)}return r}_compileMaterial(e){let t=new G(new kr,e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,r,i){let a=new Ts(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(_c),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new Qi,new oi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(_c),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Dc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Dc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-fc?n-d+fc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Dc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,gc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Dc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,gc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Dc(t,3*l*(r>this._lodMax-fc?r-this._lodMax+fc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,gc)}};function Tc(e){let t=[],n=[],r=e,i=e-fc+1+pc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Cc.set(1,r,n):e===1?Cc.set(-n,1,-r):e===2?Cc.set(-n,r,1):e===3?Cc.set(-1,r,-n):e===4?Cc.set(-n,-1,r):Cc.set(n,r,-1),Cc.toArray(l,(e*6+t)*3)}}let u=new kr;u.setAttribute(`position`,new mr(c,3)),u.setAttribute(`outputDirection`,new mr(l,3)),n.push(new G(u,null)),r>fc&&r--}return{lodMeshes:n,sizeLods:t}}function Ec(e,t,n){let r=new Yt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Dc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Oc(e,t,n){return new Vo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:hc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kc(e,t,n){return new Vo({name:`SphericalGaussianBlur`,defines:{SAMPLES:mc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ac(){return new Vo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jc(){return new Vo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nc=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),i=new Vo({name:`CubemapFromEquirect`,uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new js(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Pc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Nc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new wc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new wc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Fc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ic(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?gr:hr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Lc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Rc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function zc(e,t,n){let r=new WeakMap,i=new qt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Xt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Bc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Vc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Hc(e,t,n,r,i,a){let o=new Yt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new kr;l.setAttribute(`position`,new _r([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new _r([0,2,0,0,2,0],2));let u=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new G(l,u),f=new Es(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Yt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Yt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},It.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Vc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Uc=new Kt,Wc=new Yi(1,1),Gc=new Xt,Kc=new Zt,qc=new qi,Jc=[],Yc=[],Xc=new Float32Array(16),Zc=new Float32Array(9),Qc=new Float32Array(4);function $c(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Jc[i];if(a===void 0&&(a=new Float32Array(i),Jc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function el(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function tl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function nl(e,t){let n=Yc[t];n===void 0&&(n=new Int32Array(t),Yc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function rl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(el(n,t))return;e.uniform2fv(this.addr,t),tl(n,t)}}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(el(n,t))return;e.uniform3fv(this.addr,t),tl(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(el(n,t))return;e.uniform4fv(this.addr,t),tl(n,t)}}function sl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(el(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tl(n,t)}else{if(el(n,r))return;Qc.set(r),e.uniformMatrix2fv(this.addr,!1,Qc),tl(n,r)}}function cl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(el(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tl(n,t)}else{if(el(n,r))return;Zc.set(r),e.uniformMatrix3fv(this.addr,!1,Zc),tl(n,r)}}function ll(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(el(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tl(n,t)}else{if(el(n,r))return;Xc.set(r),e.uniformMatrix4fv(this.addr,!1,Xc),tl(n,r)}}function ul(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(el(n,t))return;e.uniform2iv(this.addr,t),tl(n,t)}}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(el(n,t))return;e.uniform3iv(this.addr,t),tl(n,t)}}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(el(n,t))return;e.uniform4iv(this.addr,t),tl(n,t)}}function ml(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(el(n,t))return;e.uniform2uiv(this.addr,t),tl(n,t)}}function gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(el(n,t))return;e.uniform3uiv(this.addr,t),tl(n,t)}}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(el(n,t))return;e.uniform4uiv(this.addr,t),tl(n,t)}}function vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Wc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Wc):a=Uc,n.setTexture2D(t||a,i)}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Kc,i)}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||qc,i)}function xl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Gc,i)}function Sl(e){switch(e){case 5126:return rl;case 35664:return il;case 35665:return al;case 35666:return ol;case 35674:return sl;case 35675:return cl;case 35676:return ll;case 5124:case 35670:return ul;case 35667:case 35671:return dl;case 35668:case 35672:return fl;case 35669:case 35673:return pl;case 5125:return ml;case 36294:return hl;case 36295:return gl;case 36296:return _l;case 35678:case 36198:case 36298:case 36306:case 35682:return vl;case 35679:case 36299:case 36307:return yl;case 35680:case 36300:case 36308:case 36293:return bl;case 36289:case 36303:case 36311:case 36292:return xl}}function Cl(e,t){e.uniform1fv(this.addr,t)}function wl(e,t){let n=$c(t,this.size,2);e.uniform2fv(this.addr,n)}function Tl(e,t){let n=$c(t,this.size,3);e.uniform3fv(this.addr,n)}function El(e,t){let n=$c(t,this.size,4);e.uniform4fv(this.addr,n)}function Dl(e,t){let n=$c(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ol(e,t){let n=$c(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kl(e,t){let n=$c(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Al(e,t){e.uniform1iv(this.addr,t)}function jl(e,t){e.uniform2iv(this.addr,t)}function Ml(e,t){e.uniform3iv(this.addr,t)}function Nl(e,t){e.uniform4iv(this.addr,t)}function Pl(e,t){e.uniform1uiv(this.addr,t)}function Fl(e,t){e.uniform2uiv(this.addr,t)}function Il(e,t){e.uniform3uiv(this.addr,t)}function Ll(e,t){e.uniform4uiv(this.addr,t)}function Rl(e,t,n){let r=this.cache,i=t.length,a=nl(n,i);el(r,a)||(e.uniform1iv(this.addr,a),tl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Wc:Uc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zl(e,t,n){let r=this.cache,i=t.length,a=nl(n,i);el(r,a)||(e.uniform1iv(this.addr,a),tl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Kc,a[e])}function Bl(e,t,n){let r=this.cache,i=t.length,a=nl(n,i);el(r,a)||(e.uniform1iv(this.addr,a),tl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||qc,a[e])}function Vl(e,t,n){let r=this.cache,i=t.length,a=nl(n,i);el(r,a)||(e.uniform1iv(this.addr,a),tl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Gc,a[e])}function Hl(e){switch(e){case 5126:return Cl;case 35664:return wl;case 35665:return Tl;case 35666:return El;case 35674:return Dl;case 35675:return Ol;case 35676:return kl;case 5124:case 35670:return Al;case 35667:case 35671:return jl;case 35668:case 35672:return Ml;case 35669:case 35673:return Nl;case 5125:return Pl;case 36294:return Fl;case 36295:return Il;case 36296:return Ll;case 35678:case 36198:case 36298:case 36306:case 35682:return Rl;case 35679:case 36299:case 36307:return zl;case 35680:case 36300:case 36308:case 36293:return Bl;case 36289:case 36303:case 36311:case 36292:return Vl}}var Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sl(t.type)}},Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hl(t.type)}},Gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Kl=/(\w+)(\])?(\[|\.)?/g;function ql(e,t){e.seq.push(t),e.map[t.id]=t}function Jl(e,t,n){let r=e.name,i=r.length;for(Kl.lastIndex=0;;){let a=Kl.exec(r),o=Kl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ql(n,l===void 0?new Ul(s,e,t):new Wl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Gl(s),ql(n,e)),n=e}}}var Yl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Jl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zl=37297,Ql=0;function $l(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var eu=new jt;function tu(e){It._getMatrix(eu,It.workingColorSpace,e);let t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(It.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function nu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$l(e.getShaderSource(t),r)}return i}function ru(e,t){let n=tu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var iu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function au(e,t){let n=iu[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ou=new H;function su(){return It.getLuminanceCoefficients(ou),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ou.x.toFixed(4)}, ${ou.y.toFixed(4)}, ${ou.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(du).join(`
`)}function lu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function uu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function du(e){return e!==``}function fu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mu=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(e){return e.replace(mu,_u)}var gu=new Map;function _u(e,t){let n=nc[t];if(n===void 0){let e=gu.get(t);if(e!==void 0)n=nc[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return hu(n)}var vu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(e){return e.replace(vu,bu)}function bu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function xu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Su={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Cu(e){return Su[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var wu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Tu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:wu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Eu={302:`ENVMAP_MODE_REFRACTION`};function Du(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Eu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ou={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ku(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ou[e.combine]||`ENVMAP_BLENDING_NONE`}function Au(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ju(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Cu(n),l=Tu(n),u=Du(n),d=ku(n),f=Au(n),p=cu(n),m=lu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(du).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(du).join(`
`),_.length>0&&(_+=`
`)):(g=[xu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(du).join(`
`),_=[xu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:nc.tonemapping_pars_fragment,n.toneMapping===0?``:au(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,nc.colorspace_pars_fragment,ru(`linearToOutputTexel`,n.outputColorSpace),su(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(du).join(`
`)),o=hu(o),o=fu(o,n),o=pu(o,n),s=hu(s),s=fu(s,n),s=pu(s,n),o=yu(o),s=yu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Xl(i,i.VERTEX_SHADER,y),S=Xl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=nu(i,x,`vertex`),n=nu(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Yl(i,h),T=uu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Zl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ql++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Mu=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pu(e),t.set(e,n)),n}},Pu=class{constructor(e){this.id=Mu++,this.code=e,this.usedTimes=0}};function Fu(e){return e===1030||e===37490||e===36285}function Iu(e,t,n,r,i,a){let o=new un,s=new Nu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=rc[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,F=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=F&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Fu(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:F,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||F),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&It.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&It.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=rc[t];n=Ro.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ju(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Lu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ru(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ru),r.length>1&&r.sort(t||zu),i.length>1&&i.sort(t||zu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Vu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Bu,e.set(t,[i])):n>=r.length?(i=new Bu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Hu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Uu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Wu=0;function Gu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ku(e){let t=new Hu,n=Uu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Qt,o=new Qt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Gu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Wu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function qu(e){let t=new Ku(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ju(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new qu(e),t.set(n,[a])):r>=i.length?(a=new qu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zu=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Qu=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],$u=new Qt,ed=new H,td=new H;function nd(e,t,n){let i=new Ni,a=new V,s=new V,c=new qt,l=new Go,u=new Ko,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Vo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Yu,fragmentShader:Xu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new kr;y.setAttribute(`position`,new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new G(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Yt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Yi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Nc(a.x),p.map.depthTexture=new Xi(a.x,m)):(p.map=new Yt(a.x,a.y),p.map.depthTexture=new Yi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ed.setFromMatrixPosition(d.matrixWorld),e.position.copy(ed),td.copy(e.position),td.add(Zu[t]),e.up.copy(Qu[t]),e.lookAt(td),e.updateMatrixWorld(),n.makeTranslation(-ed.x,-ed.y,-ed.z),$u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix($u,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Yt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function rd(e,t){function n(){let t=!1,n=new qt,r=null,i=new qt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new qt().fromArray(ie),se=new qt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),P(e.CULL_FACE),he(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function F(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(te&&e.lineWidth(t),k=t)}function be(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function xe(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function Ce(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function we(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:F,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:Re}}function id(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?ze:It.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=f.get(e);if(e.isVideoTexture&&I(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){ye(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function F(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){ye(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){be(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let fe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},pe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},me={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function he(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,fe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,fe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,fe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,pe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,me[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ge(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=le(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ye(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ge(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=It.getPrimaries(It.workingColorSpace),n=t.colorSpace===``?null:It.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ne(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);he(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ve(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Qs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Qs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Pe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Pe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n){if(t.image.length!==6)return;let r=ge(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=It.getPrimaries(It.workingColorSpace),o=t.colorSpace===``?null:It.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ne(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);he(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,je(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Se(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),he(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else P(t.depthTexture,0);let a=i.__webglTexture,o=je(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ce(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ce(t.__webglFramebuffer[0],e,0):Ce(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Se(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Se(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){let r=f.get(e);t!==void 0&&xe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=je(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),he(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)xe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),he(o,r),xe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),he(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else xe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&we(e)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Oe=[],ke=[];function Ae(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Oe.length=0,ke.length=0,Oe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Oe.push(a),ke.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ke)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(It.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=F,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function ad(e,t){function n(n,r=``){let i,a=It.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var od=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vo({vertexShader:od,fragmentShader:sd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new cd,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new V,k=null,A=null,ee=new Ts;ee.viewport=new qt;let j=new Ts;j.viewport=new qt;let te=[ee,j],M=new Ms,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Yt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Yi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new H,se=new H;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;le(M,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),P(e,M,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=it*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ue=null;function F(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Ts,o.layers.enable(n),o.viewport=new qt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Zi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new ec;de.setAnimationLoop(F),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},ud=new Qt,dd=new jt;dd.set(-1,0,0,0,1,0,0,0,1);function fd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Lo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ud.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(dd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function pd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var md=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hd=null;function gd(){return hd===null&&(hd=new bi(md,16,16,k,g),hd.name=`DFG_LUT`,hd.minFilter=o,hd.magFilter=o,hd.wrapS=t,hd.wrapT=t,hd.generateMipmaps=!1,hd.needsUpdate=!0),hd}var _d=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new H,k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=Le;let ce=0,le=0,P=null,ue=-1,F=null,de=new qt,fe=new qt,pe=null,me=new W(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new qt(0,0,ge,_e),Se=new qt(0,0,ge,_e),Ce=!1,we=new Ni,Te=!1,Ee=!1,De=new Qt,Oe=new H,ke=new qt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return P===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),B(`WebGLRenderer: `+e.message),e}function ot(){Pe=new Fc(I),Pe.init(),rt=new ad(I,Pe),Fe=new uc(I,Pe,e,rt),L=new rd(I,Pe),Fe.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ae=I.createFramebuffer(),oe=I.createFramebuffer(),se=I.createFramebuffer(),Ie=new Rc(I),R=new Lu,Re=new id(I,Pe,L,R,Fe,rt,Ie),ze=new Pc(N),Be=new tc(I),it=new cc(I,Be),Ve=new Ic(I,Be,Ie,it),He=new Bc(I,Ve,Be,it,Ie),et=new zc(I,Fe,Re),Xe=new dc(R),We=new Iu(N,ze,Pe,Fe,it,Xe),Ge=new fd(N,R),Ke=new Vu,Je=new Ju(Pe),$e=new sc(N,ze,L,He,x,s),Ze=new nd(N,He,Fe),at=new pd(I,Ie,Fe,L),tt=new lc(I,Pe,Ie),nt=new Lc(I,Pe,Ie),Ie.programs=We.programs,N.capabilities=Fe,N.extensions=Pe,N.properties=R,N.renderLists=Ke,N.shadowMap=Ze,N.state=L,N.info=Ie}S!==1009&&(ne=new Hc(S,t.width,t.height,o,r,i));let st=new ld(N,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){if(st.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),Ke.dispose(),Je.dispose(),R.dispose(),ze.dispose(),He.dispose(),it.dispose(),at.dispose(),We.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),re=!0}function lt(){Ye(`WebGLRenderer: Context Restored.`),re=!1;let e=Ie.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Ie.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function ut(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),R.remove(e)}function pt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),Te===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=Je.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),Te===!0&&Xe.setGlobalState(this.clippingPlanes,t),ie!==null&&Ze.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new ec;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Je.get(e,M.length),j.init(t),j.state.textureUnits=Re.getTextureUnits(),M.push(j),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ue,t.reversedDepth),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),k=Ke.get(e,te.length),k.init(),te.push(k),st.enabled===!0&&st.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,N.sortObjects)}bt(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(ye,be),je=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,je&&$e.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Xe.beginShadows();let i=j.state.shadowsArray;if(Ze.render(i,e,t),Te===!0&&Xe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}je&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(k,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),je&&$e.render(e),xt(k,e,t)}P!==null&&le===0&&(Re.updateMultisampleRenderTarget(P),Re.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),it.resetDefaultState(),ue=-1,F=null,M.pop(),M.length>0?(j=M[M.length-1],Re.setTextureUnits(j.state.textureUnits),Te===!0&&Xe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=He.update(e),a=e.material;a.visible&&k.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,ke.z,s,t)}}else a.visible&&k.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Te===!0&&Xe.setGlobalState(N.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Yt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(me),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),je&&$e.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Te===!0&&Xe.setGlobalState(N.clippingPlanes,r),Ct(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(me,he),p!==void 0&&(r.viewport=p),N.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=We.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Dt(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Yl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function V(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:It.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=j.state.lights;if(Te===!0&&(Ee===!0||e!==F)){let t=e===F&&r.id===ue;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=V(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||F!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,Re),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,Re),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,Re));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=gd()),C){if(T.setValue(I,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ve,_e,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Yl.upload(I,Et(v),E,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Yl.upload(I,Et(v),E,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),ue=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ae),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function jt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=jt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=jt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Qe(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,oe),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,L.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}},vd={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},yd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},bd=new Es(-1,1,1,-1,0,1),xd=new class extends kr{constructor(){super(),this.setAttribute(`position`,new _r([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new _r([0,2,0,0,2,0],2))}},Sd=class{constructor(e){this._mesh=new G(xd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Cd=class extends yd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ro.clone(e.uniforms),this.material=new Vo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},wd=class extends yd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Td=class extends yd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ed=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cd(vd),this.copyPass.material.blending=0,this.timer=new Ns}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}wd!==void 0&&(r instanceof wd?n=!0:r instanceof Td&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Dd=class extends yd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Od={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},kd=class extends yd{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ro.clone(Od.uniforms),this.material=new Ho({name:Od.name,uniforms:this.uniforms,vertexShader:Od.vertexShader,fragmentShader:Od.fragmentShader}),this._fsQuad=new Sd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ad={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new V},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qt},cameraProjectionMatrixInverse:{value:new Qt},cameraWorldMatrix:{value:new Qt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},jd={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Md={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Nd(t=5){let n=Math.floor(t)%2==0?Math.floor(t)+1:Math.floor(t),r=Pd(n),i=r.length,a=new Uint8Array(i*4);for(let e=0;e<i;++e){let t=r[e],n=2*Math.PI*t/i,o=new H(Math.cos(n),Math.sin(n),0).normalize();a[e*4]=(o.x*.5+.5)*255,a[e*4+1]=(o.y*.5+.5)*255,a[e*4+2]=127,a[e*4+3]=255}let o=new bi(a,n,n);return o.wrapS=e,o.wrapT=e,o.needsUpdate=!0,o}function Pd(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Fd={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Id(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new V},cameraProjectionMatrixInverse:{value:new Qt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Id(e,t,n){let r=Ld(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ld(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new H(Math.cos(a),Math.sin(a),o))}return r}var Rd=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,ee=g-1+3*d,j=_-1+3*d,te=v-1+3*d,M=c&255,ne=l&255,N=u&255,re=this.perm[M+this.perm[ne+this.perm[N]]]%12,ie=this.perm[M+y+this.perm[ne+b+this.perm[N+x]]]%12,ae=this.perm[M+S+this.perm[ne+C+this.perm[N+w]]]%12,oe=this.perm[M+1+this.perm[ne+1+this.perm[N+1]]]%12,se=.6-g*g-_*_-v*v;se<0?r=0:(se*=se,r=se*se*this._dot3(this.grad3[re],g,_,v));let ce=.6-T*T-E*E-D*D;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[ie],T,E,D));let le=.6-O*O-k*k-A*A;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[ae],O,k,A));let P=.6-ee*ee-j*j-te*te;return P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[oe],ee,j,te)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,ee=w>D?4:0,j=T>D?2:0,te=+(E>D),M=O+k+A+ee+j+te,ne=+(a[M][0]>=3),N=+(a[M][1]>=3),re=+(a[M][2]>=3),ie=+(a[M][3]>=3),ae=+(a[M][0]>=2),oe=+(a[M][1]>=2),se=+(a[M][2]>=2),ce=+(a[M][3]>=2),le=+(a[M][0]>=1),P=+(a[M][1]>=1),ue=+(a[M][2]>=1),F=+(a[M][3]>=1),de=w-ne+c,fe=T-N+c,pe=E-re+c,me=D-ie+c,he=w-ae+2*c,ge=T-oe+2*c,_e=E-se+2*c,ve=D-ce+2*c,ye=w-le+3*c,be=T-P+3*c,xe=E-ue+3*c,Se=D-F+3*c,Ce=w-1+4*c,we=T-1+4*c,Te=E-1+4*c,Ee=D-1+4*c,De=h&255,Oe=g&255,ke=_&255,Ae=v&255,je=o[De+o[Oe+o[ke+o[Ae]]]]%32,Me=o[De+ne+o[Oe+N+o[ke+re+o[Ae+ie]]]]%32,I=o[De+ae+o[Oe+oe+o[ke+se+o[Ae+ce]]]]%32,Ne=o[De+le+o[Oe+P+o[ke+ue+o[Ae+F]]]]%32,Pe=o[De+1+o[Oe+1+o[ke+1+o[Ae+1]]]]%32,Fe=.6-w*w-T*T-E*E-D*D;Fe<0?l=0:(Fe*=Fe,l=Fe*Fe*this._dot4(i[je],w,T,E,D));let L=.6-de*de-fe*fe-pe*pe-me*me;L<0?u=0:(L*=L,u=L*L*this._dot4(i[Me],de,fe,pe,me));let Ie=.6-he*he-ge*ge-_e*_e-ve*ve;Ie<0?d=0:(Ie*=Ie,d=Ie*Ie*this._dot4(i[I],he,ge,_e,ve));let R=.6-ye*ye-be*be-xe*xe-Se*Se;R<0?f=0:(R*=R,f=R*R*this._dot4(i[Ne],ye,be,xe,Se));let Le=.6-Ce*Ce-we*we-Te*Te-Ee*Ee;return Le<0?p=0:(Le*=Le,p=Le*Le*this._dot4(i[Pe],Ce,we,Te,Ee)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},zd=class t extends yd{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Nd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Yt(this.width,this.height,{type:g,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Vo({defines:Object.assign({},Ad.defines),uniforms:Ro.clone(Ad.uniforms),vertexShader:Ad.vertexShader,fragmentShader:Ad.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Wo,this.normalMaterial.blending=0,this.pdMaterial=new Vo({defines:Object.assign({},Fd.defines),uniforms:Ro.clone(Fd.uniforms),vertexShader:Fd.vertexShader,fragmentShader:Fd.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Vo({defines:Object.assign({},jd.defines),uniforms:Ro.clone(jd.uniforms),vertexShader:jd.vertexShader,fragmentShader:jd.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Vo({uniforms:Ro.clone(vd.uniforms),vertexShader:vd.vertexShader,fragmentShader:vd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new Vo({uniforms:Ro.clone(Md.uniforms),vertexShader:Md.vertexShader,fragmentShader:Md.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Sd(null),this._originalClearColor=new W,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new Yi,this.depthTexture.format=E,this.depthTexture.type=y,this.normalRenderTarget=new Yt(this.width,this.height,{minFilter:r,magFilter:r,type:g,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,i=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Id(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case t.OUTPUT.Off:break;case t.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(t=64){let n=new Rd,r=t*t*4,i=new Uint8Array(r);for(let e=0;e<t;e++)for(let r=0;r<t;r++){let a=e,o=r;i[(e*t+r)*4]=(n.noise(a,o)*.5+.5)*255,i[(e*t+r)*4+1]=(n.noise(a+t,o)*.5+.5)*255,i[(e*t+r)*4+2]=(n.noise(a,o+t)*.5+.5)*255,i[(e*t+r)*4+3]=(n.noise(a+t,o+t)*.5+.5)*255}let a=new bi(i,t,t,w,l);return a.wrapS=e,a.wrapT=e,a.needsUpdate=!0,a}};zd.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Bd={uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},resolution:{value:new V(1,1)},cameraNear:{value:.1},cameraFar:{value:400},ortho:{value:0},depthEdge:{value:.008},normalEdge:{value:.5},outline:{value:.68},highlight:{value:.2},levels:{value:16},saturation:{value:1.18},contrast:{value:1.08}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D tNormal;
    uniform sampler2D tDepth;
    uniform vec2 resolution;
    uniform float cameraNear;
    uniform float cameraFar;
    uniform float ortho;
    uniform float depthEdge;
    uniform float normalEdge;
    uniform float outline;
    uniform float highlight;
    uniform float levels;
    uniform float saturation;
    uniform float contrast;
    varying vec2 vUv;

    float linDepth(vec2 uv) {
      float raw = texture2D(tDepth, uv).x;
      if (ortho > 0.5) return cameraNear + raw * (cameraFar - cameraNear);
      float z = raw * 2.0 - 1.0;
      return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
    }
    vec3 nrm(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }

    float bayer(vec2 p) {
      int x = int(mod(p.x, 4.0));
      int y = int(mod(p.y, 4.0));
      int i = x + y * 4;
      float m[16];
      m[0]=0.0; m[1]=8.0; m[2]=2.0; m[3]=10.0; m[4]=12.0; m[5]=4.0; m[6]=14.0; m[7]=6.0;
      m[8]=3.0; m[9]=11.0; m[10]=1.0; m[11]=9.0; m[12]=15.0; m[13]=7.0; m[14]=13.0; m[15]=5.0;
      float v = 0.0;
      for (int k = 0; k < 16; k++) if (k == i) v = m[k];
      return v / 16.0 - 0.5;
    }

    void main() {
      vec2 px = 1.0 / resolution;
      vec4 col = texture2D(tDiffuse, vUv);
      float d = linDepth(vUv);
      vec3 n = nrm(vUv);
      float farther = 0.0;
      float turn = 0.0;
      vec2 offs[4];
      offs[0] = vec2(px.x, 0.0); offs[1] = vec2(-px.x, 0.0); offs[2] = vec2(0.0, px.y); offs[3] = vec2(0.0, -px.y);
      for (int i = 0; i < 4; i++) {
        float dn = linDepth(vUv + offs[i]);
        farther += max(dn - d, 0.0);
        turn += distance(n, nrm(vUv + offs[i])) * step(abs(dn - d), d * 0.01);
      }
      bool sky = texture2D(tDepth, vUv).x > 0.99999;
      float silhouette = sky ? 0.0 : step(depthEdge * d, farther);
      float crease = sky ? 0.0 : step(normalEdge, turn) * (1.0 - silhouette);

      vec3 c = col.rgb;
      c = mix(c, c * (1.0 - outline), silhouette);
      c = mix(c, c * (1.0 + highlight) + 0.015, crease);

      // Limited palette with ordered dithering, done in gamma space so the steps look even.
      vec3 g = pow(max(c, 0.0), vec3(1.0 / 2.2));
      float l = dot(g, vec3(0.299, 0.587, 0.114));
      g = mix(vec3(l), g, saturation);
      g = (g - 0.5) * contrast + 0.5;
      g = floor(g * levels + 0.5 + bayer(gl_FragCoord.xy) * 0.9) / levels;
      gl_FragColor = vec4(pow(g, vec3(2.2)), col.a);
    }`},Vd={wall:16446439,wallShade:15656147,plinth:14077376,frame:16777215,glass:6193046,wood:11566166,brick:14260866,steel:12108234,steelDark:9345187,concrete:14934234,barn:13197390,barnTrim:16183266},Hd=new Map;function q(e,t={},n=``){let r=`${e}|${n}`,i=Hd.get(r);return i||(i=new Uo({color:e,roughness:.88,metalness:0,flatShading:!0,...t}),Hd.set(r,i)),i}var Ud=new Map;function Wd(t){let n=document.createElement(`canvas`);n.width=n.height=16;let i=n.getContext(`2d`);if(i.fillStyle=`#ffffff`,i.fillRect(0,0,16,16),t===`tiles`)for(let e=0;e<16;e+=4){i.fillStyle=`rgba(0,0,0,0.22)`,i.fillRect(0,e+3,16,1);for(let t=e/4%2?2:0;t<16;t+=4)i.fillStyle=`rgba(0,0,0,0.12)`,i.fillRect(t,e,1,3),i.fillStyle=`rgba(255,255,255,0.18)`,i.fillRect(t+1,e,2,1)}else{let e=7;for(let t=0;t<40;t++){e=e*16807%2147483647;let n=e%16;e=e*16807%2147483647;let r=e%16;i.fillStyle=t%2?`rgba(0,0,0,0.07)`:`rgba(255,255,255,0.1)`,i.fillRect(n,r,1,1)}}let a=new Ji(n);return a.colorSpace=Le,a.magFilter=a.minFilter=r,a.wrapS=a.wrapT=e,a}var Gd=Wd(`tiles`),Kd=Wd(`plaster`);Gd.repeat.set(3,3),Kd.repeat.set(2,2);function qd(e){let t=`roof|${e}`,n=Ud.get(t);return n||Ud.set(t,n=new Uo({color:e,map:Gd,roughness:.85,flatShading:!0})),n}function Jd(e){let t=`wall|${e}`,n=Ud.get(t);return n||Ud.set(t,n=new Uo({color:e,map:Kd,roughness:.9,flatShading:!0})),n}var Yd=new Pi({color:3813440,transparent:!0,opacity:.22,depthWrite:!1});function Xd(e,t,n=!0){let r=new G(e,t);return r.castShadow=!0,r.receiveShadow=!0,n&&r.add(new Ki(new ca(e,28),Yd)),r}var J=(e,t,n,r,i=!0)=>Xd(new Qi(e,t,n),r,i);function Zd(e,t,n){let r=new U,i=new G(new Oo(e,t),q(Vd.frame)),a=new G(new Oo(e*.74,t*.74),n);a.position.z=.002;let o=new G(new Oo(e*.74,t*.06),q(Vd.frame));o.position.z=.004;let s=J(e*1.15,t*.1,.04,q(Vd.plinth),!1);return s.position.set(0,-t/2-t*.05,.02),r.add(i,a,o,s),r}function Qd(e){let{w:t=.82,d:n=.7,h:r=.5,roof:i,wall:a=Vd.wall}=e,o=cf(e.seed??1),s=new U,c=new Uo({color:i,map:Gd,roughness:.8,flatShading:!0}),l=new Uo({color:Vd.glass,roughness:.25,metalness:.1,emissive:16762740,emissiveIntensity:0}),u=J(t+.06,.07,n+.06,q(Vd.plinth));u.position.y=.035;let d=J(t,r,n,Jd(a));d.position.y=.07+r/2,s.add(u,d);let f=.08,p=.34,m=n/2+f,h=Math.hypot(m,p),g=Math.atan2(p,m),_=.07+r;for(let e of[1,-1]){let n=J(t+f*2,.045,h,c);n.position.set(0,_+p/2,e*m/2),n.rotation.x=e*g,s.add(n)}let v=J(t+f*2+.02,.05,.07,q(lf(i,.82)));v.position.set(0,_+p+.01,0),s.add(v);let y=new wo(new za([new V(-n/2,0),new V(n/2,0),new V(0,p*(n/2/m))]),{depth:t,bevelEnabled:!1});y.rotateY(Math.PI/2),y.translate(-t/2,_,0),s.add(Xd(y,q(Vd.wallShade)));let b=new U,x=new G(new Oo(.17,.3),q(Vd.frame)),S=new G(new Oo(.13,.27),q(Vd.wood));S.position.set(0,-.012,.002),b.add(x,S);let C=(o()<.5?-1:1)*t*.22;b.position.set(C,.22,n/2+.002);let w=J(.22,.04,.1,q(Vd.plinth),!1);w.position.set(C,.02,n/2+.05),s.add(b,w);let T=Zd(.15,.14,l);T.position.set(-C,.07+r*.58,n/2+.002),s.add(T);for(let e of[1,-1]){let n=Zd(.14,.13,l);n.rotation.y=e*Math.PI/2,n.position.set(e*t/2+e*.002,.07+r*.58,0),s.add(n)}let E=Zd(.14,.13,l);E.rotation.y=Math.PI,E.position.set(0,.07+r*.58,-n/2-.002),s.add(E);let D=J(.11,.3,.11,q(Vd.brick));D.position.set(t*.28,_+p*.62,-m*.35);let O=J(.14,.03,.14,q(Vd.plinth),!1);return O.position.set(t*.28,_+p*.62+.16,-m*.35),s.add(D,O),{group:s,roof:c,glass:l}}function $d(e){let{w:t=.9,d:n=.9,h:r,color:i}=e,a=cf(e.seed??3),o=new U,s=[],c=[],l=.24,u=J(t+.08,l,n+.08,q(7308180,{roughness:.35},`shop`));u.position.y=l/2;let d=J(t+.16,.03,.16,q(15308412));d.position.set(0,.22,n/2+.1);let f=new G(new Oo(t*.8,l*.6),new Uo({color:10469330,emissive:16765578,emissiveIntensity:0,roughness:.3}));f.position.set(0,l*.45,n/2+.042),s.push({mat:f.material}),o.add(u,d,f);let p=r>2.6,m=p?r-l-.62:r-l,h=(e,t,n,r)=>{let l=Math.max(2,Math.round(t/.21)),u=ef(i,l,4,a),d=ef(i,l,3,a),f=q(i),p=J(e,t,n,[d.mat,d.mat,f,f,u.mat,u.mat]);p.position.y=r+t/2,o.add(p),s.push(u,d);let m=q(lf(i,.92)),h=new Uo({color:15659508,roughness:.9,flatShading:!0});c.push(h);let g=J(e-.04,.03,n-.04,h,!1);g.position.y=r+t+.015,o.add(g);for(let[i,a,s,c]of[[0,n/2-.02,e,.04],[0,-n/2+.02,e,.04],[e/2-.02,0,.04,n],[-e/2+.02,0,.04,n]]){let e=J(s,.07,c,m,!1);e.position.set(i,r+t+.035,a),o.add(e)}return r+t},g=h(t,m,n,l);p&&(g=h(t*.72,.62,n*.72,g));let _=J(.2,.12,.16,q(Vd.steel));_.position.set(-.12,g+.09,.08);let v=Xd(new ta(.07,.07,.16,12),q(Vd.steelDark));if(v.position.set(.14,g+.11,-.1),o.add(_,v),e.balconies){let e=Math.round(m/.21);for(let r=1;r<e;r+=2){let i=J(t*.7,.025,.1,q(16777215),!1);i.position.set(0,l+m/e*r,n/2+.05);let a=J(t*.7,.05,.01,q(14673644,{transparent:!0,opacity:.8},`rail`),!1);a.position.set(0,l+m/e*r+.035,n/2+.1),o.add(i,a)}}return{group:o,facades:s,roofs:c}}function ef(e,t,n,r){let i=Math.max(128,t*40),a=`#${e.toString(16).padStart(6,`0`)}`,o=e=>uf(256,i,o=>{o.fillStyle=e?`#000`:a,o.fillRect(0,0,256,i);let s=i/t,c=256/n;for(let i=0;i<t;i++){e||(o.fillStyle=`rgba(0,0,0,.06)`,o.fillRect(0,i*s,256,3));for(let t=0;t<n;t++){let n=t*c+c*.18,a=i*s+s*.22,l=c*.64,u=s*.56;if(e)r()<.45&&(o.fillStyle=r()<.7?`#FFD48A`:`#FFE9B8`,o.fillRect(n+3,a+3,l-6,u-6));else{o.fillStyle=`#FFFFFF`,o.fillRect(n,a,l,u);let e=o.createLinearGradient(0,a,0,a+u);e.addColorStop(0,`#6F90A8`),e.addColorStop(1,`#A9C3D4`),o.fillStyle=e,o.fillRect(n+3,a+3,l-6,u-6),o.fillStyle=`#FFFFFF`,o.fillRect(n+l/2-1.5,a+3,3,u-6)}}}});return{mat:new Uo({color:16777215,map:o(!1),emissive:16777215,emissiveMap:o(!0),emissiveIntensity:0,roughness:.7})}}function tf(e={}){let t=new U,n=J(1.3,.12,.95,q(Vd.plinth));n.position.y=.06;let r=J(1.15,.55,.8,q(Vd.wall));r.position.y=.395,t.add(n,r);for(let e=0;e<5;e++){let n=Xd(new ta(.035,.035,.5,10),q(16777215));n.position.set(-.4+e*.2,.37,.46),t.add(n)}let i=J(1,.05,.16,q(Vd.wallShade));i.position.set(0,.64,.44);let a=new wo(new za([new V(-.52,0),new V(.52,0),new V(0,.2)]),{depth:.18,bevelEnabled:!1});a.translate(0,.665,.36);let o=Xd(new ta(.26,.26,.22,20),q(Vd.wall));o.position.y=.79;let s=Xd(new Ao(.27,20,10,0,Math.PI*2,0,Math.PI/2),q(e.dome??9418697,{roughness:.5}));if(e.clock){let e=new G(new ea(.075,20),q(16512746));e.position.set(0,.74,.545);let n=new G(new Oo(.012,.055),q(3813936));n.position.set(0,.76,.547);let r=new G(new Oo(.04,.012),q(3813936));r.position.set(.018,.74,.547),t.add(e,n,r)}s.position.y=.9;let c=J(.06,.12,.06,q(16777215));return c.position.y=1.23,t.add(i,Xd(a,q(Vd.wallShade)),o,s,c),t}function nf(){let e=new U,t=J(.75,.42,.55,q(Vd.barn));t.position.y=.21,e.add(t);let n=new wo(new za([new V(-.33,0),new V(.33,0),new V(.26,.16),new V(0,.27),new V(-.26,.16)]),{depth:.82,bevelEnabled:!1});n.rotateY(Math.PI/2),n.translate(-.41,.42,0),e.add(Xd(n,q(9067084)));let r=new G(new Oo(.26,.3),q(Vd.barnTrim));r.position.set(0,.15,.276);let i=new G(new Oo(.2,.25),q(11094075));i.position.set(0,.14,.278);let a=new G(new Oo(.02,.3),q(Vd.barnTrim));a.rotation.z=.68,a.position.set(0,.14,.28);let o=a.clone();o.rotation.z=-.68,e.add(r,i,a,o);let s=Xd(new ta(.15,.15,.85,18),q(14473167));s.position.set(.55,.425,-.08);let c=Xd(new Ao(.15,18,8,0,Math.PI*2,0,Math.PI/2),q(10466239,{roughness:.5}));c.position.set(.55,.85,-.08);for(let t of[.2,.45,.7]){let n=new G(new ta(.153,.153,.02,18),q(12564653));n.position.set(.55,t,-.08),e.add(n)}return e.add(s,c),e}function rf(){let e=new U,t=J(1.7,.62,1.1,q(14869992));t.position.y=.31,e.add(t);for(let t=0;t<4;t++){let n=new wo(new za([new V(0,0),new V(.42,0),new V(0,.24)]),{depth:1.1,bevelEnabled:!1});n.translate(-.85+t*.425,.62,-.55),e.add(Xd(n,q(12174284)));let r=new G(new Oo(1.08,.22),new Uo({color:10273752,roughness:.2,emissive:16765578,emissiveIntensity:0}));r.rotation.y=-Math.PI/2,r.position.set(-.85+t*.425+.002,.74,0),e.add(r)}let n=new G(new Oo(.4,.34),q(9345187));n.position.set(-.4,.17,.552),e.add(n);for(let t=0;t<4;t++){let n=new G(new Oo(.18,.14),q(Vd.glass));n.position.set(.1+t*.2,.42,.552),e.add(n)}let r=new U;for(let e=0;e<6;e++){let t=Xd(new ta(.14-e*.008,.15-e*.008,.28,16),q(e%2?16777215:14250845),e===0);t.position.y=.14+e*.28,r.add(t)}r.position.set(.6,0,-.2),e.add(r);for(let[t,n]of[[1.15,.25],[1.15,-.25]]){let r=Xd(new ta(.2,.2,.5,20),q(14672871));r.position.set(t,.25,n);let i=Xd(new Ao(.2,20,8,0,Math.PI*2,0,Math.PI/2),q(13226198));i.position.set(t,.5,n),e.add(r,i)}return{group:e,chimneyTop:new H(.6,1.75,-.2)}}function af(){let e=new U,t=q(16777215,{roughness:.6}),n=Xd(new ta(.03,.065,2.7,12),t,!1);n.position.y=1.35;let r=J(.1,.1,.28,t);r.position.set(0,2.72,-.02),e.add(n,r);let i=new U;i.position.set(0,2.72,.14);let a=Xd(new na(.05,.1,12),t,!1);a.rotation.x=Math.PI/2,a.position.z=.04,i.add(a);let o=new za;o.moveTo(-.035,0),o.quadraticCurveTo(-.06,.25,-.012,1.05),o.lineTo(.012,1.05),o.quadraticCurveTo(.045,.3,.035,0);let s=new wo(o,{depth:.012,bevelEnabled:!1});for(let e=0;e<3;e++){let n=Xd(s,t,!1);n.rotation.z=e*Math.PI*2/3,i.add(n)}return e.add(i),{group:e,hub:i}}function of(e,t){let n=new U,r=new wo(new za([new V(-.22,0),new V(.14,0),new V(.06,t),new V(-.08,t)]),{steps:24,bevelEnabled:!1,extrudePath:new Pa(new H(0,0,-e/2),new H(-.35,0,0),new H(0,0,e/2))});n.add(Xd(r,q(Vd.concrete)));let i=J(.1,.03,e*.98,q(16777215),!1);i.position.set(-.2,t+.015,0),n.add(i);let a=new G(new Oo(.34,t*1.05),new Uo({color:10936050,roughness:.1,transparent:!0,opacity:.85}));return a.rotation.y=Math.PI/2,a.rotation.x=-.35,a.position.set(.12,t/2,.05),n.add(a),n}function sf(e=1.1){let t=new U,n=J(e,.06,.34,q(15261648));n.position.y=.24;let r=Xd(new jo(e*.32,.06,6,16,Math.PI),q(14077117),!1);r.scale.z=2.6,r.position.y=.04,t.add(n,r);for(let n of[1,-1]){let r=J(e,.06,.03,q(16777215),!1);r.position.set(0,.3,n*.16),t.add(r)}return t}function cf(e){let t=e;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function lf(e,t){return new W(e).multiplyScalar(t).getHex()}function uf(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`));let i=new Ji(r);return i.colorSpace=Le,i.anisotropy=8,i}var df=new Map;function ff(e,t){let n=`${e}|${t}`,i=df.get(n);if(!i){let a=uf(32,8,n=>{for(let r=0;r<8;r++)n.fillStyle=`#${(r%2?t:e).toString(16).padStart(6,`0`)}`,n.fillRect(r*4,0,4,8)});a.magFilter=r,i=new Uo({map:a,roughness:.9}),df.set(n,i)}return i}function pf(e,t,n,r){let i=new U,a=.55,o=.8,s=J(a,n,o,Jd(e));s.position.y=n/2,i.add(s);let c=.32,l=.44,u=Math.hypot(l,c),d=Math.atan2(c,l);for(let e of[1,-1]){let r=J(.5700000000000001,.04,u,qd(t));r.position.set(0,n+c/2,e*l/2),r.rotation.x=e*d,i.add(r)}let f=J(.2,.16,.14,q(e));f.position.set(0,n+.13,o/2-.12);let p=J(.24,.03,.18,q(t));p.position.set(0,n+.23,o/2-.12);let m=J(.1,.22,.1,q(Vd.brick));m.position.set(a/2-.06,n+c*.8,-.1),i.add(f,p,m);for(let e of[n*.35,n*.72]){let t=Zd(.14,.15,r);t.position.set(.1,e,.402);let n=Zd(.14,.15,r);n.rotation.y=Math.PI,n.position.set(0,e,-.8/2-.002),i.add(t,n)}let h=new G(new Oo(.14,.26),q(gf(e,.55)));h.position.set(-.13,.13,.403);let g=J(.2,.05,.12,q(Vd.plinth),!1);return g.position.set(-.13,.025,.46),i.add(h,g),i}function mf(e,t,n=1){let r=cf(n),i=new U,a=new Uo({color:Vd.glass,roughness:.25,emissive:16762740,emissiveIntensity:0});return e.forEach((e,n)=>{let o=pf(e,t[n%t.length],.85+r()*.25,a);o.position.x=n*.56,i.add(o)}),{group:i,glass:a}}function hf(e){let{wall:t,roof:n,awning:r}=e,i=e.w??.9,a=.95,o=new U,s=new Uo({color:10469330,roughness:.25,emissive:16765578,emissiveIntensity:0}),c=J(i,a,.8,Jd(t));c.position.y=a/2;let l=J(i+.06,.08,.8600000000000001,q(n));l.position.y=.99;let u=J(i+.04,.05,.05,q(Vd.plinth),!1);u.position.set(0,.9299999999999999,.42000000000000004);let d=new G(new Oo(i*.72,.3),s);d.position.set(-.05,.22,.403);let f=new G(new Oo(.14,.32),q(6965813));f.position.set(i/2-.14,.16,.403);let p=new G(new Qi(i*.92,.03,.26),ff(r[0],r[1]));p.position.set(0,.45,.52),p.rotation.x=.35,p.castShadow=!0,o.add(c,l,u,d,f,p);for(let e of[-i*.25,i*.25]){let t=Zd(.16,.16,s);t.position.set(e,.72,.402),o.add(t);for(let t of[.3,.72]){let n=Zd(.16,.16,s);n.rotation.y=Math.PI,n.position.set(e,t,-.8/2-.002),o.add(n)}}return{group:o,glass:s}}function gf(e,t){return new W(e).multiplyScalar(t).getHex()}var _f=()=>q(14275786),vf=()=>q(7042176);function yf(e,t,n){let r=new U,i=new G(new ta(e,e*1.03,t,28),_f());i.position.y=t/2;let a=new G(new ta(e*.87,e*.87,.02,28),q(n));a.position.y=t+.005;let o=J(e*2,.04,.08,q(9345187),!1);return o.position.y=t+.05,r.add(i,a,o),r}function bf(e){let t=new U,n=9079388,r=yf(.5,.3,n);r.position.set(-.55,0,-.2);let i=yf(.5,.3,n);i.position.set(.55,0,-.35);let a=J(.7,.45,.5,q(15262422));a.position.set(-.2,.225,.6);let o=J(.78,.06,.58,q(7042176));if(o.position.set(-.2,.48,.6),t.add(r,i,a,o),e>=2){let e=J(1,.22,.55,_f());e.position.set(.75,.11,.55);let n=J(.9,.02,.45,q(8368296),!1);n.position.set(.75,.23,.55),t.add(e,n);for(let e=0;e<6;e++){let n=new G(new Ao(.035,6,4),q(16054518));n.position.set(.4+e%3*.33,.25,.42+Math.floor(e/3)*.26),t.add(n)}}if(e>=3){let e=J(.6,.5,.45,q(15986662));e.position.set(-1.05,.25,.45);let n=J(.66,.06,.5,q(8370282));n.position.set(-1.05,.53,.45);let r=new G(new ta(.05,.05,1.2,8),q(5018568));r.rotation.z=Math.PI/2,r.position.set(-1.1,.08,-.4),t.add(e,n,r)}return t}function xf(){let e=new U,t=new G(new ta(.62,.66,.08,28),_f());t.position.y=.04;let n=new G(new jo(.5,.025,6,28),vf());n.rotation.x=Math.PI/2,n.position.y=.085;let r=J(.34,.3,.3,q(15262422));r.position.set(.55,.15,.35);let i=J(.4,.05,.36,q(6131650));i.position.set(.55,.32,.35),e.add(t,n,r,i);for(let[t,n]of[[-.25,-.2],[.2,-.3]]){let r=new G(new ta(.04,.04,.22,8),vf());r.position.set(t,.15,n),e.add(r)}return e}function Sf(){let e=new U,t=J(1.1,.55,.7,q(15853266));t.position.set(0,.275,0);let n=J(1.18,.07,.78,q(7042176));n.position.set(0,.585,0),e.add(t,n);for(let t of[-.28,.28]){let n=J(.4,.38,.02,q(14173498),!1);n.position.set(t,.19,.36),e.add(n)}let r=J(.28,1.1,.28,q(14173498));r.position.set(-.6,.55,-.2);let i=J(.34,.06,.34,q(7042176));i.position.set(-.6,1.13,-.2);let a=new G(new Oo(1.1,.55),q(13222840));a.rotation.x=-Math.PI/2,a.position.set(0,.012,.64);let o=new U,s=J(.5,.2,.22,q(14173498));s.position.y=.16;let c=J(.16,.14,.22,q(14173498));c.position.set(.3,.2,0);let l=J(.44,.03,.08,q(14211288),!1);l.position.set(-.02,.28,0),o.add(s,c,l);for(let[e,t]of[[-.16,.12],[.2,.12],[-.16,-.12],[.2,-.12]]){let n=new G(new ta(.05,.05,.04,10),q(2827810));n.rotation.x=Math.PI/2,n.position.set(e,.05,t),o.add(n)}return o.position.set(.25,0,.7),e.add(r,i,a,o),e}function Cf(e){let t=new U,n=new G(new Oo(e?1.7:1.2,1),q(13222840));n.rotation.x=-Math.PI/2,n.position.y=.012,t.add(n);let r=e?[[-.55,-.2],[0,-.2],[.55,-.2],[-.55,.25],[0,.25],[.55,.25]]:[[-.3,-.2],[.25,-.2],[-.3,.25],[.25,.25]];for(let[e,n]of r){let r=J(.28,.3,.22,q(9345187));r.position.set(e,.15,n);let i=J(.3,.2,.04,vf(),!1);i.position.set(e,.14,n+.13),t.add(r,i)}let i=q(12108234),a=e?.85:.6;for(let[e,n,r,o]of[[-a,-.5,a,-.5],[-a,.5,a,.5],[-a,-.5,-a,.5],[a,-.5,a,.5]]){let a=J(Math.hypot(r-e,o-n),.16,.015,i,!1);a.position.set((e+r)/2,.08,(n+o)/2),a.rotation.y=-Math.atan2(o-n,r-e),t.add(a)}return t}function wf(e=1.6){let t=new U,n=q(10134445),r=new G(new ta(.03,.14,e,4),n);r.position.y=e/2;let i=J(.7,.04,.04,n,!1);i.position.y=e*.9;let a=J(.5,.04,.04,n,!1);return a.position.y=e*.75,t.add(r,i,a),{group:t,top:e*.9}}function Tf(){let e=new U,t=q(10975823);for(let[n,r]of[[-.15,-.15],[.15,-.15],[-.15,.15],[.15,.15]]){let i=J(.04,.9,.04,t,!1);i.position.set(n,.45,r),e.add(i)}let n=J(.42,.26,.42,q(14203018));n.position.y=1;let r=new G(new na(.36,.22,4),q(13198154));return r.position.y=1.24,r.rotation.y=Math.PI/4,e.add(n,r),e}function Ef(e,t,n){let r=new U,i=q(12108234),a=q(14200944),o=Math.max(2,Math.round(e/.5)),s=Math.max(2,Math.round(n/.5)),c=(e,n)=>{let a=J(.025,t,.025,i,!1);a.position.set(e,t/2,n),r.add(a)};for(let t=0;t<=o;t++)c(-e/2+t*e/o,-n/2),c(-e/2+t*e/o,n/2);for(let t=1;t<s;t++)c(-e/2,-n/2+t*n/s),c(e/2,-n/2+t*n/s);for(let i=.35;i<t;i+=.4){for(let t of[-n/2,n/2]){let n=J(e,.025,.1,a,!1);n.position.set(0,i,t),r.add(n)}for(let t of[-e/2,e/2]){let e=J(.1,.025,n,a,!1);e.position.set(t,i,0),r.add(e)}}let l=new G(new Oo(e,t*.7),new Uo({color:7319130,transparent:!0,opacity:.45,side:2,depthWrite:!1}));return l.position.set(0,t*.45,n/2+.01),r.add(l),r}function Df(){let e=new U,t=new G(new Oo(.9,.45),q(9068608));t.rotation.x=-Math.PI/2,t.position.y=.03;let n=new G(new ta(.06,.06,.8,10),q(5018568));n.rotation.z=Math.PI/2,n.position.y=.06,e.add(t,n);for(let[t,n]of[[-.55,-.32],[.55,-.32],[-.55,.32],[.55,.32]]){let r=J(.28,.12,.03,q(15764028),!1);r.position.set(t*.8,.14,n);let i=J(.29,.03,.035,q(16183782),!1);i.position.set(t*.8,.15,n);let a=J(.02,.14,.02,q(3815994),!1);a.position.set(t*.8-.12,.07,n);let o=a.clone();o.position.x=t*.8+.12,e.add(r,i,a,o)}return e}function Of(){let e=new U,t=J(.03,.5,.03,q(7042176),!1);t.position.y=.25;let n=new za;n.moveTo(0,.2),n.lineTo(.18,-.11),n.lineTo(-.18,-.11),n.closePath();let r=new G(new wo(n,{depth:.02,bevelEnabled:!1}),q(15909198));r.position.set(0,.6,0);let i=J(.03,.1,.03,q(2827810),!1);i.position.set(0,.62,.02);let a=J(.03,.03,.03,q(2827810),!1);return a.position.set(0,.54,.02),e.add(t,r,i,a),e}function kf(e,t=5){let n=new U,r=new Uo({color:15895610,emissive:15886874,emissiveIntensity:.9,transparent:!0,opacity:.9}),i=new Uo({color:16765788,emissive:16761402,emissiveIntensity:1});for(let a=0;a<t;a++){let t=.4+e()*.5,a=new G(new na(.14+e()*.08,t,7),r);a.position.set((e()-.5)*.6,t/2,(e()-.5)*.6);let o=new G(new na(.07,t*.6,6),i);o.position.set(a.position.x,t*.3,a.position.z+.02),a.userData.h=t,n.add(a,o)}return n}function Af(){let e=new U,t=new G(new Ao(.42,20,14),q(15659507));t.position.y=.62,e.add(t);for(let[t,n]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]]){let r=J(.04,.45,.04,q(9345187),!1);r.position.set(t,.22,n),e.add(r)}return e}function jf(e,t){let n=new U,r=new G(new ea(1.1,28),q(10275690));r.rotation.x=-Math.PI/2,r.position.y=.012;let i=new G(new Oo(2,.22),q(14865588));i.rotation.set(-Math.PI/2,0,.5),i.position.y=.016,n.add(r,i);for(let r=0;r<4;r++){let i=t(!1,e),a=r/4*Math.PI*2+.4;i.position.set(Math.cos(a)*.75,0,Math.sin(a)*.75),i.scale.setScalar(.8),n.add(i)}let a=J(.36,.08,.12,q(10975823));a.position.set(.1,.12,.2),n.add(a);let o=Qd({roof:7315050,wall:15983544,w:.5,d:.4,h:.35,seed:31}).group;return o.position.set(-.35,0,-.3),o.scale.setScalar(.8),n.add(o),n}function Mf(){let e=new U;for(let t=0;t<3;t++){let n=J(.5,.26,.24,q(15988214));n.position.set(t*.56,.13,0);let r=J(.51,.04,.245,q(6271852),!1);r.position.set(t*.56,.2,0),e.add(n,r)}return e}function Nf(e){let t=new U,n=q(10134445),r=Math.round(e*9);for(let i=0;i<r;i++){let a=i/r*Math.PI*2,o=J(.03,.3,.03,n,!1);o.position.set(Math.cos(a)*e,.15,Math.sin(a)*e),t.add(o)}let i=new G(new jo(e,.008,4,48),n);return i.rotation.x=Math.PI/2,i.position.y=.25,t.add(i),t}var Pf=[10475704,12822240,16036755,10275052,16178300,11061142,15899018,12170218,15126431,9425104],Ff=[7308984,15308412,9418620,15909198,16183782,8016439,12098518],If=(e,t=!0)=>new Uo({color:e,roughness:.8,flatShading:t});function Lf(e){return e.castShadow=!0,e.receiveShadow=!0,e}function Rf(e,t=.34,n={}){let r=Pf[Math.floor(e()*Pf.length)],i=If(r,!1),a=If(new W(r).multiplyScalar(.8).getHex()),o=new U,s=new U;o.add(s);let c=Math.floor(e()*3),l=1,u=.38;if(c===0){let e=Lf(new G(new Ao(.42,16,12),i));e.position.y=.52,e.scale.set(1,.95,.9),s.add(e),l=.92}else if(c===1){let e=Lf(new G(new $i(.3,.42,6,14),i));e.position.y=.6,s.add(e),l=1.08,u=.3}else{let e=new Do(.44,1),t=e.getAttribute(`position`);for(let e=0;e<t.count;e++){let n=1+(Math.sin(e*12.9898)*.5+.5)*.12;t.setXYZ(e,t.getX(e)*n,t.getY(e)*n,t.getZ(e)*n)}e.computeVertexNormals();let n=Lf(new G(e,If(r)));n.position.y=.52,s.add(n),l=.96,u=.46}if(e()<.55){let t=Lf(new G(new ta(.36,.4,.26,16),If(Ff[Math.floor(e()*Ff.length)])));t.position.y=.36,s.add(t)}let d=If(16777215,!1),f=If(2827810,!1),p=(e,t,n)=>{let r=new G(new Ao(n,14,10),d);r.position.set(e,t,u-n*.35);let i=new G(new Ao(n*.6,12,8),f);i.position.set(e,t-n*.05,u+n*.25);let a=new G(new Ao(n*.2,8,6),d);a.position.set(e+n*.22,t+n*.25,u+n*.62),s.add(r,i,a)};e()<.3?p(0,.68,.16):(p(-.14,.68,.1),p(.14,.68,.1));let m=new G(new jo(.055,.016,6,12,Math.PI),f);m.rotation.z=Math.PI,m.position.set(0,.52,u+.005),s.add(m);let h=If(15899804,!1);for(let e of[-1,1]){let t=new G(new Ao(.055,10,6),h);t.scale.set(1,.55,.35),t.position.set(e*.22,.56,u-.05),s.add(t)}let g=If(15984591),_=e();if(_<.35)for(let e of[-1,1]){let t=Lf(new G(new na(.07,.2,8),g));t.position.set(e*.2,l,0),t.rotation.z=-e*.35,s.add(t)}else if(_<.55)for(let e of[-1,1]){let t=new G(new ta(.015,.015,.22,6),a);t.position.set(e*.12,l+.08,0),t.rotation.z=-e*.25;let n=new G(new Ao(.045,8,6),If(16178300,!1));n.position.set(e*.15,l+.2,0),s.add(t,n)}else if(_<.72)for(let e of[-1,1]){let t=Lf(new G(new Ao(.12,10,8),i));t.scale.set(.5,1.2,.4),t.position.set(e*.36,l-.28,0),t.rotation.z=e*.5,s.add(t)}else for(let e=0;e<3;e++){let t=Lf(new G(new na(.06,.14,6),a));t.position.set(0,l-.1-e*.18,-.34+e*.03),t.rotation.x=-.9-e*.2,s.add(t)}if(e()<.35){let e=Lf(new G(new na(.08,.3,8),i));e.position.set(0,.28,-.38),e.rotation.x=-1.9,s.add(e)}else if(e()<.2)for(let e of[-1,1]){let t=new G(new ea(.16,3),If(15910580));t.position.set(e*.33,.62,-.18),t.rotation.set(0,e*1.1,e*.4),s.add(t)}let v=n.gear??`none`;if(v===`hardhat`||v===`helmet`){let e=v===`hardhat`?16171843:14173498,t=Lf(new G(new Ao(.3,16,8,0,Math.PI*2,0,Math.PI/2),If(e,!1)));t.position.y=l-.12;let n=Lf(new G(new ta(.36,.36,.03,18),If(e,!1)));n.position.set(0,l-.12,.04),s.add(t,n)}else if(v===`strawhat`){let e=If(15255934),t=Lf(new G(new ta(.5,.5,.03,20),e));t.position.y=l-.08;let n=Lf(new G(new ta(.2,.24,.16,16),e));n.position.y=l;let r=new G(new ta(.245,.245,.04,16),If(10251070));r.position.y=l-.05,s.add(t,n,r)}else if(v===`cap`){let e=If(6131650),t=Lf(new G(new Ao(.26,14,8,0,Math.PI*2,0,Math.PI/2),e));t.position.y=l-.1;let n=Lf(new G(new Qi(.26,.03,.2),e));n.position.set(0,l-.1,.26),s.add(t,n)}else if(v===`apron`){let e=Lf(new G(new Qi(.42,.34,.04),If(15308412)));e.position.set(0,.3,u-.02),s.add(e)}for(let e of[-1,1]){let t=Lf(new G(new Ao(.08,8,6),i));t.scale.set(.8,1.3,.8),t.position.set(e*.4,.42,.05),s.add(t)}let y=[];for(let e of[-1,1]){let t=Lf(new G(new Ao(.1,8,6),a));t.scale.set(1,.6,1.3),t.position.set(e*.15,.05,.04),o.add(t),y.push(t)}let b=(.85+e()*.35)*t;return o.scale.setScalar(b),{group:o,body:s,feet:y,phase:e()*10}}function zf(e,t,n){let r=t*9+e.phase;n?(e.body.position.y=Math.abs(Math.sin(r))*.08,e.body.rotation.z=Math.sin(r)*.08,e.feet[0].position.z=.04+Math.sin(r)*.08,e.feet[1].position.z=.04-Math.sin(r)*.08):(e.body.position.y=Math.max(0,Math.sin(t*2+e.phase))*.03,e.body.rotation.z=0,e.body.rotation.y=Math.sin(t*.6+e.phase)*.3)}var Bf={health:{headwaters:80,farm:75,towns:70,industry:65,capital:70},aquifer:80,reservoirFill:.8,river:.9,soil:75,farmWater:1,weather:`normal`,heatwave:!1,air:80,coal:.5,capitalShare:40,built:{},kestraHealth:70,people:{farmers:3,city:3,workers:2,youth:2},protest:!1},Vf=13,Hf=.5,Uf={lip:.3,soil:1,sand:.45,water:.6,rock:1.4},Wf=Uf.lip+Uf.soil+Uf.sand+Uf.water+Uf.rock,Gf=[`headwaters`,`farm`,`towns`,`industry`,`capital`],Kf={island:{yaw:Math.PI/4,pitch:32,zoom:27,target:[1.2,-2.6,1.6]},town:{yaw:Math.PI/4,pitch:34,zoom:11,target:[-2.4,0,2.8]},farms:{yaw:Math.PI/4+.2,pitch:36,zoom:12,target:[6,0,-3]},edge:{yaw:Math.PI/4,pitch:14,zoom:14,target:[4,-2.4,4]},hills:{yaw:Math.PI/4,pitch:38,zoom:13,target:[-2.6,0,-4.8]},energy:{yaw:Math.PI/4,pitch:34,zoom:12,target:[-7.4,0,3]},homes:{yaw:Math.PI/4,pitch:34,zoom:11,target:[.6,0,7.4]},kestra:{yaw:Math.PI/4,pitch:22,zoom:15,target:[9.6,-5,9.8]}},qf={headwaters:Kf.hills,farm:Kf.farms,capital:Kf.town,towns:Kf.homes,industry:Kf.energy,aquifer:Kf.edge,kestra:Kf.kestra},Jf={farm:[9,2.6,1.6],town:[-5.6,5.4,.8],homes:[1.4,2.6,8],energy:[-7.9,6.4,3.4],water:[-7.2,3,9],headwaters:[-4.6,2.6,-3.4],river:[6.2,2.4,8.4]},Yf={headwaters:[-4.8,-5.8],farm:[7.4,-2.8],capital:[-2,3],towns:[.8,8.4],industry:[-8.6,3.6]},Xf={forest:{at:[.2,-5.6],r:1.6,zone:`headwaters`,reserve:!0},drip:{at:[7.4,-4.4],r:1.8,zone:`farm`,site:[6.4,-3.6]},meter:{at:[10.2,-4.4],r:.55,zone:`farm`,reserve:!0},clinic:{at:[3,9.4],r:1,zone:`towns`,reserve:!0},solar:{at:[-10.2,7.5],r:1,zone:`industry`,reserve:!0},leaks:{at:[-5,4.75],r:.6,zone:`capital`,site:[-5.6,5.9]},drains:{at:[9,1.6],r:2.2,zone:`farm`,site:[10,.9]},ponds:{at:[2.8,-3.8],r:1.3,zone:`farm`,reserve:!0},coolroofs:{at:[-1.5,4],r:2.2,zone:`capital`,site:[-.2,4.9]},grid:{at:[-4.5,9.4],r:.8,zone:`industry`,reserve:!0},bigdam:{at:[-2.55,-2.25],r:1.2,zone:`headwaters`,site:[-1.6,-3.4]},firebreaks:{at:[-1.4,-6.3],r:.5,zone:`headwaters`,site:[-.4,-7.4]},stormtank:{at:[2.3,.8],r:.7,zone:`capital`,reserve:!0},firestation:{at:[4.2,5.3],r:.9,zone:`towns`,reserve:!0},batteries:{at:[-10.9,8.5],r:.4,zone:`industry`},sewagehill:{at:[10,5.2],r:1.3,zone:`farm`,reserve:!0}},Zf=[6.2,8.4],Qf=[[-1.6,-3.8],[-1.45,-6.3],[-1.2,-8.8]],$f=(e,t,n)=>{let r=1/0;for(let i=0;i<n.length-1;i++){let[a,o]=n[i],[s,c]=n[i+1],l=np(((e-a)*(s-a)+(t-o)*(c-o))/((s-a)**2+(c-o)**2));r=Math.min(r,Math.hypot(e-(a+(s-a)*l),t-(o+(c-o)*l)))}return r},ep=[11,-.6];function tp(e){let t=e;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var np=e=>Math.max(0,Math.min(1,e)),rp=e=>e<.5?2*e*e:1-(-2*e+2)**2/2,ip=e=>Vf*(1+.06*Math.sin(e*3+.6)+.045*Math.cos(e*2+.3)+.025*Math.sin(e*5+1.3)),ap=(e,t,n=0)=>Math.hypot(e,t)<ip(Math.atan2(t,e))-n,op=(e,t)=>{let n=`capital`,r=1/0;for(let i of Gf){let[a,o]=Yf[i],s=Math.hypot(e-a,t-o);s<r&&([r,n]=[s,i])}return n};function sp(e,t=128){let n=new za;for(let r=0;r<=t;r++){let i=r/t*Math.PI*2,a=e(i);r?n.lineTo(Math.cos(i)*a,Math.sin(i)*a):n.moveTo(Math.cos(i)*a,Math.sin(i)*a)}return n}function cp(e,t,n,r){let i=new wo(e,{depth:n,bevelEnabled:!1,curveSegments:1});i.rotateX(Math.PI/2);let a=new G(i,r);return a.position.y=t,a.castShadow=!0,a.receiveShadow=!0,a}function lp(t,n,i=3,a=!1){let s=document.createElement(`canvas`);s.width=s.height=t,n(s.getContext(`2d`),tp(i));let l=new Ji(s);return l.colorSpace=Le,l.wrapS=l.wrapT=e,a?(l.magFilter=o,l.minFilter=c):(l.magFilter=r,l.minFilter=r),l}var up=(e,t=8,n=3)=>lp(t,(n,r)=>{for(let i=0;i<t;i++)for(let a=0;a<t;a++)n.fillStyle=e[Math.floor(r()*e.length)],n.fillRect(i,a,1,1)},n,!0),dp=()=>lp(32,(e,t)=>{e.fillStyle=`#8f877c`,e.fillRect(0,0,32,32);let n=[`#c9bfae`,`#bfb4a2`,`#d3cab9`,`#b7ad9b`];for(let r=0;r<8;r++)for(let i=0;i<8;i++)e.fillStyle=n[Math.floor(t()*n.length)],e.fillRect(i*4+r%2*2,r*4,3,3)},5),fp=()=>lp(32,(e,t)=>{e.fillStyle=`#b9ad98`,e.fillRect(0,0,32,32);let n=[`#e6dcc8`,`#ddd2bd`,`#efe6d4`];for(let r=0;r<4;r++)for(let i=0;i<4;i++)e.fillStyle=n[Math.floor(t()*n.length)],e.fillRect(r*8+1,i*8+1,7,7)},9);function pp(e){return lp(64,(t,n)=>{let r={wheat:`#e9c46a`,green:`#8cc063`,plowed:`#9a6b47`,dry:`#d9c28f`,salt:`#d9c28f`}[e],i={wheat:`#d6ad4f`,green:`#74a84f`,plowed:`#855a3a`,dry:`#cdb27c`,salt:`#cdb27c`}[e];t.fillStyle=r,t.fillRect(0,0,64,64),t.fillStyle=i;for(let e=2;e<64;e+=8)t.fillRect(0,e,64,3);if(e===`dry`||e===`salt`){t.fillStyle=`#b39a68`;for(let e=0;e<10;e++){let e=n()*64,r=n()*64;for(let i=0;i<16;i++)t.fillRect(Math.floor(e),Math.floor(r),1,1),e+=n()<.5?1:-1,r+=+(n()<.6)}}if(e===`salt`){t.fillStyle=`#f7f4ec`;for(let[e,r,i]of[[14,16,7],[44,38,9],[22,50,6],[52,12,5]])for(let a=-i;a<=i;a++)for(let o=-i;o<=i;o++)a*a+o*o*1.5<i*i+n()*8&&t.fillRect(e+a,r+o,1,1)}},11)}function mp(e){return lp(128,(e,t)=>{for(let n=0;n<26;n++){let n=64+(t()-.5)*60,r=64+(t()-.5)*60,i=14+t()*24,a=e.createRadialGradient(n,r,0,n,r,i),o=[`216,192,138`,`205,178,124`,`226,204,152`,`196,168,112`][Math.floor(t()*4)];a.addColorStop(0,`rgba(${o},0.95)`),a.addColorStop(.7,`rgba(${o},0.6)`),a.addColorStop(1,`rgba(${o},0)`),e.fillStyle=a,e.fillRect(0,0,128,128)}e.strokeStyle=`rgba(150,120,80,0.55)`,e.lineWidth=1.2;for(let n=0;n<7;n++){let n=40+t()*48,r=40+t()*48;e.beginPath(),e.moveTo(n,r);for(let i=0;i<5;i++)n+=(t()-.5)*14,r+=(t()-.5)*14,e.lineTo(n,r);e.stroke()}},e,!0)}var hp={golden:{stops:[`#9fb0da`,`#e9c0b4`,`#f9d8b8`,`#fbe3c4`],fog:16112063,sun:16764820,sunI:3.3,hemi:16770248},wet:{stops:[`#8ea6c9`,`#c4cfdc`,`#e2e4df`,`#ebe6dc`],fog:14934748,sun:16773340,sunI:2.5,hemi:15265266},dry:{stops:[`#a8aecb`,`#ecc6aa`,`#f6d5ac`,`#f8dfb8`],fog:16045744,sun:16763532,sunI:3.4,hemi:16769730},drought:{stops:[`#b8aaa9`,`#eebd96`,`#f5cb9c`,`#f8d8ab`],fog:15978402,sun:16759936,sunI:3.6,hemi:16767664}};function gp(e){let t=document.createElement(`canvas`);t.width=8,t.height=512;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,512);[0,.45,.8,1].forEach((t,n)=>r.addColorStop(t,e[n])),n.fillStyle=r,n.fillRect(0,0,8,512);let i=new Ji(t);return i.colorSpace=Le,i}var _p=new W().setRGB(1.32,.95,1.02),vp=new W().setRGB(1.25,1,.68),yp=new W().setRGB(.92,.78,.36),bp=new W(7164472),xp=3814448,Sp=new W(16777215),Cp=e=>({aquifer:e.aquifer,reservoir:e.reservoirFill,river:e.river,kestra:e.kestraHealth,health:{...e.health}}),wp=(e,t,n)=>{let r=(e,t)=>e+(t-e)*n;return{aquifer:r(e.aquifer,t.aquifer),reservoir:r(e.reservoir,t.reservoir),river:r(e.river,t.river),kestra:r(e.kestra,t.kestra),health:Object.fromEntries(Gf.map(n=>[n,r(e.health[n],t.health[n])]))}},Tp=class{canvas;renderer;composer;pixelPass;ao;scene=new Fn;overlay=new Fn;camera=new Es(-1,1,1,-1,.1,400);normalTarget=new Yt(1,1,{depthTexture:new Yi(1,1)});normalMat=new Wo({flatShading:!0});clock=new Zs;raf=0;pixel=0;view=Bf;cam={...Kf.island};goal={...Kf.island};insets={left:0,right:0,top:0,bottom:0};orbit=0;aspect=1.6;live=Cp(Bf);from=Cp(Bf);to=Cp(Bf);tween=1;occupied=[];noOutline=[];walkers=[];standers=[];bubbles=[];bubbleTex=new Map;smoke=[];smokeMat=new Uo({color:10130572,transparent:!0,opacity:.7,roughness:1,depthWrite:!1});floaters=[];blades=[];sun;hemi;skyTex=Object.fromEntries(Object.entries(hp).map(([e,t])=>[e,gp(t.stops)]));cliff=new U;cliffBands=[];cliffJitter=[];grassMat;patches=[];lake;water;riverPts=[];riverWater;riverHalf=-1;fall;dam;dryField;fieldTexs={wheat:pp(`wheat`),green:pp(`green`),plowed:pp(`plowed`),dry:pp(`dry`),salt:pp(`salt`)};crops=[];chimneyTop=new H;neighbour;towers=[];trees=null;built={};sites={};logged;cranes=[];spurts=[];leakGroup=new U;pumpBeams=[];meterBoxes=new U;protest=new U;marker;markerOn=!1;pickCb=null;riverMat;fallMat;plume;factory;pile;wt;solarOld;turbines=[];plants={river:[],hill:[]};riverPark;hillMound;flood;subSmall;gas;fence;coalSite;wear={};burst;burstJet;puddles=new U;gridFire;fires=[];fireSmoke=[];ash;nuclearLine=new U;networks=null;networksOn=!1;constructor(e,t={}){this.canvas=e,this.renderer=new _d({canvas:e,antialias:!1,preserveDrawingBuffer:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1.05,this.scene.background=this.skyTex.golden,this.scene.fog=new Pn(hp.golden.fog,70,150),this.composer=new Ed(this.renderer,new Yt(1,1,{type:g,samples:4})),this.composer.addPass(new Dd(this.scene,this.camera)),this.ao=new zd(this.scene,this.camera,1,1),this.ao.updateGtaoMaterial({radius:.55,distanceExponent:1.5,thickness:1.2,scale:1.3,samples:16}),this.ao.blendIntensity=.85,this.composer.addPass(this.ao),this.pixelPass=new Cd(Bd);let n=this.pixelPass.uniforms;n.ortho.value=1,n.cameraNear.value=this.camera.near,n.cameraFar.value=this.camera.far,n.depthEdge.value=.0015,n.normalEdge.value=.55,n.outline.value=.6,n.levels.value=18,n.saturation.value=1.2,n.tNormal.value=this.normalTarget.texture,n.tDepth.value=this.normalTarget.depthTexture,this.pixelPass.enabled=!1,this.composer.addPass(this.pixelPass),this.composer.addPass(new kd),this.lights(),this.land(),this.mountains(),this.waterways(),this.roads(),this.town(),this.energy(),this.farms(),this.plots(),this.forest(),this.wildfire(),this.dryPatches(),this.monsters(),this.sky(),this.makeMarker(),this.scene.add(this.cliff),this.setView(Bf),t.interactive&&this.enableControls(),this.resize();let r=()=>{this.frame(),this.raf=requestAnimationFrame(r)};r()}setView(e,t=!1){this.view=e;let n=Cp(e);t?(this.from={...this.live,health:{...this.live.health}},this.to=n,this.tween=0):(this.tween=1,this.applyLive(n)),this.applyDiscrete(e)}setBubbles(e){for(let e of this.bubbles)this.overlay.remove(e.s);this.bubbles=[];let t=new Map;for(let n of e){let e=t.get(n.at)??[];e.includes(n.kind)||e.push(n.kind),t.set(n.at,e)}for(let[e,n]of t){let[t,r,i]=Jf[e];n.forEach((e,a)=>{let o=(a-(n.length-1)/2)*1.3;this.bubble(e,t+o*.707,r,i-o*.707)})}}setMarker(e){if(this.markerOn=!!e,this.marker.visible=!!e,!e)return;let t=Xf[e],[n,r]=t?t.at:Yf[e],i=t?Math.max(.8,t.r*1.1):3;this.marker.position.set(n,.06,r),this.marker.scale.setScalar(i)}onPick(e){this.pickCb=e}setInsets(e){this.insets={...this.insets,...e}}setNetworks(e){this.networksOn=e,e&&this.buildNetworks(),this.networks&&(this.networks.visible=e)}toScreen(e,t,n){let r=new H(e,t,n).project(this.camera);return{x:(r.x+1)/2*this.canvas.clientWidth,y:(1-r.y)/2*this.canvas.clientHeight,visible:r.z>-1&&r.z<1}}setOrbit(e){this.orbit=e}setPixel(e){this.pixel=e,this.canvas.style.imageRendering=e?`pixelated`:``,this.pixelPass.enabled=e>0,this.resize()}setCamera(e,t=!1){e.yaw!==void 0&&(e={...e,yaw:e.yaw+Math.round((this.goal.yaw-e.yaw)/(Math.PI*2))*Math.PI*2}),this.goal={...this.goal,...e},t&&(this.cam={...this.goal})}resize(){let e=this.canvas.clientWidth||800,t=this.canvas.clientHeight||500,n=this.pixel?1/this.pixel:Math.min(1.5,window.devicePixelRatio||1);this.renderer.setPixelRatio(n),this.composer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t);let r=this.renderer.getDrawingBufferSize(new V);this.normalTarget.setSize(r.x,r.y),this.pixelPass.uniforms.resolution.value.copy(r),this.aspect=e/t}renderNow(e=1){for(let t=0;t<e;t++)this.frame()}dispose(){cancelAnimationFrame(this.raf),this.renderer.dispose()}applyLive(e){this.live=e;let t=this.view;this.updateCliff(e.aquifer);let n=e.health,r=Gf.reduce((e,t)=>e+n[t],0)/Gf.length,i=t.weather===`drought`||t.heatwave?.3:t.weather===`dry`?.15:t.weather===`wet`?-.1:0,a=np(np((62-r)/40)*.8+i);this.grassMat.color.copy(Sp).lerp(_p,a);for(let e of this.patches)e.mat.opacity=np((64-n[e.zone])/34)*.95;this.updateTrees(n,a);let o=t.built.bigdam===`done`,s=(.42+e.reservoir*.62)*(o?1.12:1);this.lake.scale.set(s,1,s),this.fall.scale.x=.2+e.river*.9,this.setRiverWidth(e.river);let c=np((66-e.kestra)/36);this.neighbour.children[0]?.traverse(e=>{let t=e.material;t?.userData.grass&&t.color.copy(Sp).lerp(_p,c)})}applyDiscrete(e){let t=e.farmWater<.8||e.soil<64,n=e.soil<62,r=this.dryField.material;r.map=n?this.fieldTexs.salt:t?this.fieldTexs.dry:this.fieldTexs.green,r.needsUpdate=!0;for(let t of this.crops){let n=t.m.material,r=e.farmWater<.6?this.fieldTexs.dry:this.fieldTexs[t.base];if(n.map?.source!==r.source){let e=r.clone();e.repeat.copy(n.map.repeat),e.needsUpdate=!0,n.map=e,n.needsUpdate=!0}}let i=e.coalMode??`coal`,a=!!e.failures?.includes(`coal`),o=i===`retired`||a?0:i===`gas`?3:Math.max(1,Math.round(e.coal*this.smoke.length*(i===`converting`?.5:1)));this.smoke.forEach((e,t)=>e.m.visible=t<o),this.smokeMat.color.set(i===`gas`?15328993:e.air<45?7301732:e.air<65?9077885:10722709);let s=e.weather===`drought`||e.heatwave?`drought`:e.weather===`dry`?`dry`:e.weather===`wet`?`wet`:`golden`,c=hp[s];this.scene.background=this.skyTex[s],this.scene.fog.color.set(c.fog),this.sun.color.set(c.sun),this.sun.intensity=c.sunI,this.hemi.color.set(c.hemi);for(let t of Object.keys(Xf)){let n=e.built[t],r=this.built[t];r&&(r.visible=n===`done`||t===`forest`&&n===`building`);let i=this.sites[t];i&&(i.visible=n===`building`)}this.built.forest?.scale.setScalar(e.built.forest===`done`?1:.45),this.logged.visible=e.built.forest!==`done`,this.meterBoxes.visible=e.built.meter===`done`||!!e.metered,this.leakGroup.visible=e.built.leaks!==`done`,this.dam.scale.setScalar(e.built.bigdam===`done`?1.75:1.3),this.protest.visible=e.protest,this.applyCity(e,i)}applyCity(e,t){let n=e.sewage??{level:1,site:`river`};this.plants.river.forEach((e,t)=>e.visible=n.site===`river`&&t===n.level-1),this.plants.hill.forEach((e,t)=>e.visible=n.site===`hill`&&t===n.level-1),this.riverPark.visible=n.site===`hill`,this.flood.visible=!!e.plantFlooded&&n.site===`river`;let r=np((e.overflow??0)/8);this.plume.material.opacity=r*.9;let i=np((75-(e.riverQuality??75))/55);this.riverMat.color.copy(Sp).lerp(yp,Math.max(i,r*.6)),this.riverMat.emissiveIntensity=.15*(1-Math.max(i,r)),this.hillMound.visible=n.site===`hill`||e.built.sewagehill===`building`,this.fallMat.color.copy(Sp).lerp(yp,Math.max(i*.8,r*.7)),this.puddles.visible=(e.overflow??0)>=4||!!e.failures?.includes(`sewers`),this.pile.visible=t===`coal`||t===`converting`,this.gas.visible=t===`gas`,this.fence.visible=t===`retired`,this.coalSite.visible=t===`converting`,this.subSmall.visible=e.built.grid!==`done`,this.nuclearLine.visible=!!e.nuclear;let a=n.site===`river`?Zf:Xf.sewagehill.at;for(let[t,n]of Object.entries(this.wear)){let r=e.condition?.[t]??100,i=np((72-r)/55);for(let{m:e,base:t}of n.mats)e.color.copy(t).lerp(bp,i*.5);n.works.visible=!!e.repairing?.includes(t),n.sign.visible=r<35&&!n.works.visible,t===`sewage`&&(n.works.position.set(a[0],0,a[1]),n.sign.position.set(a[0]+1.6,0,a[1]+1.2))}this.burst.visible=!!e.failures?.includes(`mains`),this.gridFire.visible=!!e.failures?.includes(`grid`);let o=e.fire??0,s=o>0?Math.max(2,Math.round(o/8)):0;if(this.fires.forEach((e,t)=>e.visible=t<s),this.fireSmoke.forEach((e,t)=>e.m.visible=o>0&&t<s+3),this.ash.opacity=np((e.burnt??0)*1.2)*.85,e.leaks!==void 0){let t=e.leaks>=.2?3:e.leaks>=.12?2:+(e.leaks>=.07);this.leakGroup.visible=!0,this.spurts.forEach((e,n)=>e.jet.visible=e.puddle.visible=n<t)}this.networksOn&&this.buildNetworks()}occupy(e,t,n){this.occupied.push([e,t,n])}free(e,t,n){return ap(e,t,n+.4)&&this.occupied.every(([r,i,a])=>Math.hypot(e-r,t-i)>a+n)}put(e,t,n,r=0,i=1,a=0){return e.position.set(t,0,n),e.rotation.y=r,e.scale.setScalar(i),e.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.scene.add(e),a&&this.occupy(t,n,a),e}ribbonGeometry(e,t,n,r=80){let i=new va(e),a=[],o=[],s=[],c=i.getLength();for(let e=0;e<=r;e++){let l=e/r,u=i.getPointAt(l),d=i.getTangentAt(l);a.push(u.x-d.z*t,n,u.z+d.x*t,u.x+d.z*t,n,u.z-d.x*t),o.push(0,l*c,t*2,l*c),e<r&&s.push(e*2,e*2+2,e*2+1,e*2+1,e*2+2,e*2+3)}let l=new kr;return l.setAttribute(`position`,new _r(a,3)),l.setAttribute(`uv`,new _r(o,2)),l.setIndex(s),l.computeVertexNormals(),{geometry:l,curve:i}}ribbon(e,t,n,r,i=80){let{geometry:a,curve:o}=this.ribbonGeometry(e,t,n,i),s=new G(a,r);return s.receiveShadow=!0,this.scene.add(s),{mesh:s,curve:o}}setRiverWidth(e){let t=.2+.52*np(e);Math.abs(t-this.riverHalf)<.01||(this.riverHalf=t,this.riverWater.geometry.dispose(),this.riverWater.geometry=this.ribbonGeometry(this.riverPts,t,.04,100).geometry)}lights(){this.hemi=new ps(16770248,10465402,1.1),this.scene.add(this.hemi);let e=new Os(16764820,3.3);e.position.set(-22,20,8),e.castShadow=!0,e.shadow.mapSize.set(4096,4096),Object.assign(e.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:80}),e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e,e.target),this.sun=e}land(){let e=up([`#96c263`,`#92be5f`,`#9ac667`,`#8fba5c`,`#93bf60`],8,3);e.repeat.set(.25,.25),this.grassMat=new Uo({map:e,roughness:1}),this.scene.add(cp(sp(e=>ip(e)*.985),0,Uf.lip,this.grassMat)),this.scene.add(cp(sp(e=>ip(e)*.965),-Uf.lip,Wf-Uf.lip,q(7227955)));let t=tp(41);[.92,.82,.7,.56,.42,.28,.15].forEach((e,n)=>{let r=t()*6,i=cp(sp(t=>ip(t)*e*(1+.07*Math.sin(t*4+r)+.04*Math.sin(t*7+r*2)),48),-Wf-n*1.05,1.05,q(n%2?8222319:9077371));i.position.x+=(t()-.5)*.8,i.position.z+=(t()-.5)*.8,this.scene.add(i)});let n=Math.round(2*Math.PI*Vf/Hf);for(let e=0;e<n;e++)this.cliffJitter.push([t()*.06,...[0,1,2,3,4].map(()=>(t()-.5)*.24),(t()-.4)*.14,t(),t(),t()]);let r=[[8368718,9224026,7776326],[9067067,8212532,9724223],[13609068,12885088],[14733222,14206619,15128240],[5218256,6271197,4625863],[9603715,8682613,10261644]],i=new Qi(1,1,1),a=new W;r.forEach((e,t)=>{let r=new ki(i,new Uo({roughness:1,flatShading:!0}),n);for(let i=0;i<n;i++)r.setColorAt(i,a.setHex(e[Math.floor(this.cliffJitter[i][7+t%3]*e.length)]));r.castShadow=!0,r.receiveShadow=!0,this.cliff.add(r),this.cliffBands.push(r)})}updateCliff(e){let t=Dt.clamp(e/100,.05,1),n=[Uf.lip,Uf.soil,Uf.sand,Uf.water*(1-t),Uf.water*t,Uf.rock],r=this.cliffJitter.length,i=new Qt,a=new Ot,o=new H(0,1,0),s=new H,c=new H;for(let e=0;e<r;e++){let t=this.cliffJitter[e],l=[t[0]],u=0;n.forEach((e,r)=>{u+=e;let i=r===n.length-1?0:t[1+Math.min(r,4)]*(r===3?.25:1);l.push(-u+i)}),n[3]<.01&&(l[4]=l[3]);for(let e=1;e<l.length;e++)l[e]=Math.min(l[e],l[e-1]);let d=e/r*Math.PI*2,f=ip(d)+t[6]-Hf*.35,p=2*Math.PI*ip(d)/r*1.15;a.setFromAxisAngle(o,Math.PI/2-d),this.cliffBands.forEach((t,r)=>{let o=n[r]<.01?1e-4:Math.max(.001,l[r]-l[r+1]),u=l[r+1];i.compose(s.set(Math.cos(d)*f,u+o/2,Math.sin(d)*f),a,c.set(n[r]<.01?1e-4:p,o,Hf)),t.setMatrixAt(e,i)})}for(let e of this.cliffBands)e.instanceMatrix.needsUpdate=!0}mountains(){let e=tp(51);for(let[t,n,r,i]of[[-7.4,-6.4,3.4,5.2],[-4,-9.2,2.8,4.4],[-10.2,-3.6,2.3,3.4],[-1.2,-10.8,2,3],[-9.4,-7.2,2,3]]){let a=new na(r,i,9,5),o=a.getAttribute(`position`),s=new Float32Array(o.count*3),c=new W(4872304),l=new W(7307161),u=new W(15922943),d=new Map;for(let t=0;t<o.count;t++){let n=o.getX(t),a=o.getY(t),f=o.getZ(t),p=`${n.toFixed(3)},${a.toFixed(3)},${f.toFixed(3)}`,m=d.get(p);m===void 0&&(m=a>i/2-.01||a<-i/2+.01?0:(e()-.5)*r*.22,d.set(p,m)),o.setXYZ(t,n+m,a+m*.3,f-m*.5);let h=(a+i/2)/i,g=h>.7+m*.15?u:c.clone().lerp(l,h*1.3);s.set([g.r,g.g,g.b],t*3)}a.setAttribute(`color`,new mr(s,3)),a.computeVertexNormals();let f=new G(a,new Uo({vertexColors:!0,roughness:.95,flatShading:!0}));f.position.set(t,i/2-.05,n),f.rotation.y=e()*3,f.castShadow=f.receiveShadow=!0,this.scene.add(f),this.occupy(t,n,r*.95)}}waterways(){let e=up([`#5aa9d6`,`#63b3de`,`#529fcd`,`#6db9e2`],8,7);e.repeat.set(.5,.25),this.water=new Uo({map:e,roughness:.25,emissive:1929114,emissiveIntensity:.15,side:2});let t=sp(e=>2.4*(1+.12*Math.sin(e*3+1)+.06*Math.cos(e*5)),48),n=cp(t,.01,.02,q(14206619));n.position.set(-4.6,.01,-3.4),n.scale.set(1.1,1,1.1),this.scene.add(n),this.lake=cp(t,.04,.02,this.water),this.lake.position.set(-4.6,.04,-3.4),this.scene.add(this.lake),this.occupy(-4.6,-3.4,2.8),this.dam=this.put(of(2,.7),-2.55,-2.25,Math.atan2(1.4,-.8)+Math.PI/2,1.3,1.2);let r=new va([[-2.3,-2.1],[-.6,-1.4],[1.6,-1.1],[3.8,.2],[5.6,2.6],[7.4,5.4],[8.9,8.2],[10.4,10.6]].map(([e,t])=>new H(e,0,t))),i=[];for(let e=0;e<=120;e++){let t=r.getPointAt(e/120);if(i.push(t),!ap(t.x,t.z,.15))break}this.riverPts=i,this.ribbon(i,.95,.02,q(13220246),100),this.riverMat=this.water.clone();let a=this.ribbon(i,.7,.04,this.riverMat,100);this.riverWater=a.mesh;let o=0;i.forEach((e,t)=>{Math.hypot(e.x-4.55,e.z-1.35)<Math.hypot(i[o].x-4.55,i[o].z-1.35)&&(o=t)});let s=new Uo({color:8021304,transparent:!0,opacity:0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3});this.plume=this.ribbon(i.slice(o),.45,.05,s,60).mesh;for(let e=0;e<i.length;e+=3)this.occupy(i[e].x,i[e].z,1);let c=a.curve.getPointAt(1),l=new H(c.x,0,c.z).normalize(),u=lp(16,(e,t)=>{e.fillStyle=`#8fd0ec`,e.fillRect(0,0,16,16);for(let n=0;n<16;n++){e.fillStyle=t()<.5?`#c4e9f8`:`#a9dcf2`;let r=4+Math.floor(t()*10);e.fillRect(n,Math.floor(t()*16),1,r),t()<.3&&(e.fillStyle=`#ffffff`,e.fillRect(n,Math.floor(t()*16),1,3))}},17,!0);u.repeat.set(1,4),this.fall=new G(new Oo(1.4,7.6),new Uo({map:u,roughness:.2,emissive:6271197,emissiveIntensity:.3,transparent:!0,opacity:.92})),this.fall.position.set(c.x+l.x*.3,-3.8,c.z+l.z*.3),this.fallMat=this.fall.material,this.fall.rotation.y=Math.atan2(l.x,l.z),this.scene.add(this.fall),this.noOutline.push(this.fall);let d=new U,f=new U;d.add(f);let p=e=>3.8*(1+.08*Math.sin(e*3+2)+.05*Math.cos(e*4)),m=new Uo({map:this.grassMat.map,roughness:1});m.userData.grass=!0,f.add(cp(sp(p,48),0,.35,m)),f.add(cp(sp(e=>p(e)*.99,48),-.35,.9,q(9067067))),f.add(cp(sp(e=>p(e)*.97,48),-1.25,.35,q(5218256))),f.add(cp(sp(e=>p(e)*.9,48),-1.6,1,q(9077371))),f.add(cp(sp(e=>p(e)*.55,32),-2.6,1.2,q(8222319)));let h=Qd({roof:14251087,wall:15983544,seed:5}).group;h.position.set(-.8,0,.6),h.scale.setScalar(1.3),f.add(h);let g=tp(61);for(let e=0;e<7;e++){let e=g()*Math.PI*2,t=1.2+g()*1.8,n=this.treeGroup(g()<.5,g);n.position.set(Math.cos(e)*t,0,Math.sin(e)*t),n.scale.setScalar(.9+g()*.3),f.add(n)}f.traverse(e=>e.castShadow=e.receiveShadow=!0),d.position.set(c.x+l.x*3.4,-7.4,c.z+l.z*3.4),this.scene.add(d),this.neighbour=d,this.floaters.push({o:d,y:d.position.y,phase:1});let _=Rf(tp(99),.8,{gear:`none`});_.group.position.set(.8,0,-.4),_.group.rotation.y=.6,f.add(_.group),this.standers.push(_)}roads(){let e=dp();e.repeat.set(1.2,1.2);let t=new Uo({map:e,roughness:1}),n=new Uo({map:up([`#cdb68a`,`#c6ae80`,`#d4bf95`],8,13),roughness:1}),r=e=>e.map(([e,t])=>new H(e,0,t)),i=r([[-1.5,4],[1.4,3.4],[4.7,1.3],[6.9,-1.4],[5.2,-5]]);this.ribbon(i,.55,.015,t);for(let e=0;e<=20;e++){let t=new va(i).getPointAt(e/20);this.occupy(t.x,t.z,.8)}let a=r([[-3.8,4.4],[-5.2,4.8],[-6.8,3.2],[-8,1.6]]);this.ribbon(a,.45,.014,t),this.ribbon(r([[-5.2,4.8],[-5.8,7],[-6.6,8.6]]),.4,.013,n),this.ribbon(r([[6.9,-1.4],[8.6,0],[9.2,1.4]]),.35,.013,n),this.ribbon(r([[5.2,-5],[3,-7],[2,-8.6]]),.35,.013,n),this.ribbon(r([[-2.4,-2],[-1.6,.4],[-1.5,1.2]]),.35,.013,n);let o=sf(2.2);this.put(o,4.55,1.35,Math.atan2(2.1,3.3),1.35)}town(){let e=tp(71);this.put(tf({dome:6265482,clock:!0}),-1.5,1.3,0,2.5,2);let t=fp();t.repeat.set(4,3.4);let n=new G(new Oo(4.6,3.6),new Uo({map:t,roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(-1.5,.018,4),n.receiveShadow=!0,this.scene.add(n),this.occupy(-1.5,4,2.2);let r=new U,i=[[new ta(.75,.8,.22,20),14208440,.11],[new ta(.64,.64,.05,20),7059679,.2],[new ta(.09,.12,.55,10),14208440,.45],[new ta(.3,.12,.1,16),14208440,.72]];for(let[e,t,n]of i){let i=new G(e,q(t));i.position.y=n,r.add(i)}this.put(r,-1.5,4,0,1);let a=e=>{let t=new U,n=new G(new Qi(.9,.35,.45),q(10975823));n.position.y=.18,t.add(n);for(let[e,n]of[[-.42,-.2],[.42,-.2],[-.42,.2],[.42,.2]]){let r=new G(new Qi(.04,.8,.04),q(8016439));r.position.set(e,.4,n),t.add(r)}let r=new G(new Qi(1.05,.05,.6),ff(e,15985366));return r.position.y=.82,t.add(r),[14242634,9421675,15909198,15305274].forEach((e,n)=>{let r=new G(new Qi(.18,.08,.3),q(e));r.position.set(-.3+n*.2,.39,0),t.add(r)}),t};this.put(a(14242634),-3,3.2,.1,1),this.put(a(7315050),0,3.1,-.1,1),this.put(a(6131650),-2.9,5,0,1);let o=[15786696,15911336,11125204,12177318,15316144,15983544],s=[6121331,14251087,6121331,13198154,6121331,14251087];this.put(mf(o.slice(0,5),s,4).group,-4.4,5.7,Math.PI/2,1.3),this.occupy(-4.4,4,1.9),this.put(hf({wall:15259320,roof:7042176,awning:[7315050,15985366]}).group,-2.8,6.4,0,1.3,.8),this.put(hf({wall:13203551,roof:6121331,awning:[14242634,15985366]}).group,-1.5,6.4,0,1.3,.8),this.put(hf({wall:11125204,roof:6121331,awning:[15909198,15985366]}).group,-.2,6.4,0,1.3,.8),this.towers.push(this.put($d({h:2.3,color:13203551,balconies:!0,seed:3}).group,-6.2,1.4,0,1.3,1)),this.towers.push(this.put($d({h:2.8,color:15260864,seed:5}).group,-5,.2,Math.PI/2,1.3,1)),this.put(mf([15316144,15786696,12177318,11125204],[14251087,6121331,13198154,14251087],9).group,.7,5.6,Math.PI/2,1.3),this.occupy(.7,4.6,1.5),[[1.6,1.6,0],[-5.6,1.9,Math.PI/2],[-.6,8.2,0],[1.2,7.9,0],[-2.6,8.4,0],[-4.4,7.6,Math.PI/2],[2.6,5.9,0],[-6,-.2,Math.PI/2],[.4,-.6,0],[3.4,7.4,0]].forEach(([t,n,r],i)=>{this.free(t,n,.5)&&this.put(Qd({roof:s[i%s.length],wall:o[(i+2)%o.length],seed:i*7+3}).group,t,n,r+(e()-.5)*.1,1.3,.9)});for(let[e,t]of[[-3.9,2.4],[.9,2.4],[-3.9,5.6],[.9,5.6],[2.6,2.9],[-5.8,4.2]]){let n=new U,r=new G(new ta(.03,.045,1.1,6),q(3815994));r.position.y=.55;let i=new G(new Qi(.14,.16,.14),new Uo({color:16769702,emissive:16761963,emissiveIntensity:.5}));i.position.y=1.15,n.add(r,i),this.put(n,e,t,0,1)}}energy(){let e=rf();this.factory=this.put(e.group,-8.4,3.6,Math.PI/2,1.9,2.4),this.chimneyTop.copy(e.chimneyTop).multiplyScalar(1.9).applyAxisAngle(new H(0,1,0),Math.PI/2).add(new H(-8.4,0,3.6));for(let e=0;e<8;e++){let t=new G(new Do(.3,1),this.smokeMat.clone());this.scene.add(t),this.noOutline.push(t),this.smoke.push({m:t,o:e/8,p:this.chimneyTop})}let t=new G(new na(.8,.6,7),q(3091498));this.pile=this.put(t,-9.6,5.4,0,1,.9);for(let[e,t]of[[-10.8,.9],[-9.4,-.5],[-11.2,2.8]]){let n=af();this.turbines.push(this.put(n.group,e,t,Math.PI/4,1.6,.6)),this.blades.push(n.hub)}this.solarOld=this.put(this.solarField(3,4),-8.1,5.9,0,1.4,1.6);let n=new U;for(let[e,t]of[[0,0],[1.3,.2],[.6,1.2]]){let r=new G(new ta(.6,.62,.35,24),q(14275786));r.position.set(e,.175,t);let i=new G(new ta(.52,.52,.02,24),q(7059679));i.position.set(e,.36,t),n.add(r,i)}let r=new G(new Qi(.9,.5,.6),q(15262422));r.position.set(-.9,.25,.6);let i=new G(new ta(.07,.07,1.6,8),q(9345187));i.rotation.z=Math.PI/2,i.position.set(.4,.12,.6),n.add(r,i),this.wt=this.put(n,-7.4,8.2,0,1.2,1.8)}solarField(e,t){let n=new U,r=q(3894684,{roughness:.25,metalness:.3,emissive:1257548,emissiveIntensity:.25,flatShading:!1},`panel`);for(let i=0;i<e;i++)for(let e=0;e<t;e++){let t=new G(new Qi(.55,.04,.36),r);t.position.set(e*.62,.3,i*.55),t.rotation.x=-.45;let a=new G(new Qi(.04,.25,.04),q(13620957));a.position.set(e*.62,.14,i*.55+.05),n.add(t,a)}return n}farms(){this.put(nf(),4.6,-6.3,0,1.9,1.5);let e=(e,t,n,r,i,a=0)=>{let o=this.fieldTexs[i].clone();o.needsUpdate=!0,o.repeat.set(n/2,r/2);let s=new G(new Qi(n,.08,r),new Uo({map:o,roughness:1}));s.position.set(e,.04,t),s.rotation.y=a,s.receiveShadow=!0,this.scene.add(s),this.crops.push({m:s,base:i}),this.occupy(e,t,Math.max(n,r)*.6)};e(7.4,-4.4,3,2.2,`wheat`),e(9.3,-1.9,2.2,2.6,`plowed`),e(6.6,-8.4,2.6,2,`green`),e(2.4,-8.2,2.4,1.8,`wheat`),e(8.8,-6.8,2,1.8,`green`),this.dryField=new G(new Qi(3.6,.08,3),new Uo({map:this.fieldTexs.green,roughness:1})),this.dryField.position.set(9,.04,1.6),this.dryField.receiveShadow=!0,this.scene.add(this.dryField),this.occupy(9,1.6,2.3);let t=q(10975823),n=(e,n,r,i)=>{let a=Math.max(2,Math.round(Math.hypot(r-e,i-n)/.4));for(let o=0;o<=a;o++){let s=new G(new Qi(.06,.26,.06),t);s.position.set(e+(r-e)*o/a,.13,n+(i-n)*o/a),s.castShadow=!0,this.scene.add(s)}let o=new G(new Qi(Math.hypot(r-e,i-n),.04,.04),t);o.position.set((e+r)/2,.2,(n+i)/2),o.rotation.y=-Math.atan2(i-n,r-e),this.scene.add(o)};n(7.1,0,10.9,0),n(7.1,3.2,10.9,3.2),n(10.9,0,10.9,3.2),n(6.8,-2,6.8,-5.6)}plots(){for(let[e,t]of Object.entries(Xf)){t.reserve&&this.occupy(t.at[0],t.at[1],t.r);let[n,r]=t.site??t.at,i=this.put(this.buildingSite(e),n,r,.3);i.visible=!1,this.sites[e]=i}this.occupy(ep[0],ep[1],.5);let e=tp(301),t=(e,t)=>{t.visible=!1,t.traverse(e=>{e.isMesh&&(e.castShadow=e.receiveShadow=!0)}),this.scene.add(t),this.built[e]=t};{let[n,r]=Xf.forest.at;this.logged=new U;let i=new G(new ea(1.7,28),new Uo({color:12098154,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));i.rotation.x=-Math.PI/2,i.position.y=.008,this.logged.add(i);for(let t=0;t<12;t++){let t=e()*Math.PI*2,n=Math.sqrt(e())*1.4,r=new G(new ta(.07,.09,.1,7),q(9068608));r.position.set(Math.cos(t)*n,.05,Math.sin(t)*n),this.logged.add(r)}this.logged.position.set(n,0,r),this.scene.add(this.logged);let a=new U;for(let t=-3;t<=3;t++)for(let n=-3;n<=3;n++){let r=t*.46+n%2*.23,i=n*.42;if(Math.hypot(r,i)>1.45)continue;let o=this.treeGroup(e()<.35,e);o.position.set(r,0,i),o.scale.setScalar(.72+e()*.2),a.add(o)}a.position.set(n,0,r),t(`forest`,a)}{let e=new U,n=q(3108764);for(let[t,r,i,a]of[[7.4,-4.4,3,2.2],[9.3,-1.9,2.2,2.6],[8.8,-6.8,2,1.8]]){for(let o=-a/2+.25;o<a/2;o+=.45){let a=new G(new Qi(i-.2,.025,.035),n);a.position.set(t,.095,r+o),e.add(a)}let o=new G(new ta(.16,.16,.34,12),q(5018568));o.position.set(t-i/2-.1,.17,r-a/2-.1),e.add(o)}t(`drip`,e)}for(let[e,t]of[Xf.meter.at,ep]){let n=new U,r=J(.5,.08,.26,q(9345187));r.position.y=.04;let i=J(.06,.4,.06,q(7042176));i.position.set(0,.24,0);let a=new U;a.position.set(0,.44,0);let o=J(.62,.05,.06,q(14242634)),s=J(.08,.16,.1,q(14242634));s.position.set(.3,-.05,0),a.add(o,s);let c=J(.02,.3,.02,q(7042176));c.position.set(.3,.2,0),n.add(r,i,a,c),this.pumpBeams.push(a),this.put(n,e,t,.5);let l=J(.14,.22,.1,q(5018568));l.position.set(e-.32,.11,t+.1);let u=new G(new ea(.045,12),q(16777215));u.position.set(e-.32,.15,t+.151),this.meterBoxes.add(l,u)}this.meterBoxes.visible=!1,this.scene.add(this.meterBoxes);{let e=new U,n=J(1.1,.55,.7,q(16184300));n.position.set(-.35,.275,0);let r=J(1.12,.08,.72,q(7323534));r.position.set(-.35,.58,0);let i=new U,a=J(.07,.22,.02,q(6271852),!1),o=J(.22,.07,.02,q(6271852),!1);i.add(a,o),i.position.set(-.35,.36,.36);let s=Qd({roof:14251087,wall:15983544,seed:17}).group;s.position.set(.55,0,-.1),s.scale.setScalar(1.05);let c=J(.03,.9,.03,q(14211288),!1);c.position.set(.95,.45,.35);let l=J(.22,.14,.01,q(15909198),!1);l.position.set(1.07,.82,.35);let u=new G(new Oo(.8,.5),q(14272422));u.rotation.x=-Math.PI/2,u.position.set(.55,.012,.55),e.add(n,r,i,s,c,l,u),e.position.set(Xf.clinic.at[0],0,Xf.clinic.at[1]),e.scale.setScalar(1.3),t(`clinic`,e)}{let e=this.solarField(3,3),n=new U;e.position.set(-.62,0,-.55),n.add(e),n.position.set(Xf.solar.at[0],0,Xf.solar.at[1]),n.scale.setScalar(1.25),t(`solar`,n)}for(let[e,t]of[Xf.leaks.at,[-6.5,3.5],[1.1,3.3]]){let n=new G(new ea(.3,16),this.water);n.rotation.x=-Math.PI/2,n.position.set(e,.03,t);let r=new G(new na(.06,.32,8),new Uo({color:11132146,emissive:6271197,emissiveIntensity:.3,transparent:!0,opacity:.85}));r.position.set(e,.16,t),this.leakGroup.add(n,r),this.spurts.push({jet:r,puddle:n,phase:e*3})}this.scene.add(this.leakGroup);{let e=new U,n=q(5218256);for(let t of[-.95,0,.95]){let r=new G(new Qi(3.3,.02,.1),n);r.position.set(9,.095,1.6+t),e.add(r)}let r=new G(new Qi(.1,.02,2.2),n);r.position.set(7.35,.095,1.6),e.add(r),t(`drains`,e)}{let n=new U;for(let[e,t,r]of[[-.35,-.25,.55],[.5,.35,.42],[.35,-.6,.32]]){let i=sp(t=>r*(1+.12*Math.sin(t*3+e*5)),24),a=cp(i,.02,.02,q(14206619));a.scale.set(1.25,1,1.25),a.position.set(e,0,t);let o=cp(i,.035,.02,this.water);o.position.set(e,0,t),n.add(a,o)}for(let t=0;t<6;t++){let t=new G(new na(.04,.3,5),q(7315018));t.position.set(-.8+e()*1.6,.15,-.8+e()*1.4),n.add(t)}n.position.set(Xf.ponds.at[0],0,Xf.ponds.at[1]),n.scale.setScalar(1.6),t(`ponds`,n)}{let n=new U;for(let[t,r]of[[-3.55,2],[.55,2],[-3.55,6],[.55,5.95],[-2.2,2.25],[-.8,2.25]]){let i=this.treeGroup(!1,e);i.position.set(t,0,r),i.scale.setScalar(.85),n.add(i)}this.scene.updateMatrixWorld(!0);for(let e of this.towers){let t=new Xn().setFromObject(e),r=J(t.max.x-t.min.x+.02,.05,t.max.z-t.min.z+.02,q(16054003));r.position.set((t.min.x+t.max.x)/2,t.max.y+.02,(t.min.z+t.max.z)/2),n.add(r)}t(`coolroofs`,n)}let n=(e,t,n)=>{let r=t.clone().add(n).multiplyScalar(.5);r.y-=.25,e.add(new G(new Mo(new Pa(t,r,n),16,.012,4),q(3815994)))},r=(e,t,n,r=1.6)=>{let i=wf(r);return i.group.position.set(e,0,t),i.group.rotation.y=Math.PI/4,n.add(i.group),new H(e,i.top,t)},i=[-.25,.25].map(e=>new H(e*.7,0,-e*.7));{let[e,a]=Xf.grid.at;this.subSmall=Cf(!1),this.subSmall.position.set(e,0,a);let o=new U,s=new H(-7.4,1.5,4.6),c=r(-6.3,7,o),l=new H(e,.35,a);for(let e of i)n(o,s.clone().add(e),c.clone().add(e)),n(o,c.clone().add(e),l.clone().add(e.clone().multiplyScalar(.5)));for(let e of[this.subSmall,o])e.traverse(e=>e.castShadow=e.receiveShadow=!0),this.scene.add(e);let u=new U,d=Cf(!0);d.position.set(e,0,a),u.add(d);let f=r(-2.4,9.8,u);for(let e of i)n(u,l.clone().add(e.clone().multiplyScalar(.5)),f.clone().add(e));t(`grid`,u);let p=r(-8.6,10.2,this.nuclearLine,2),m=new H(-12.4,-1.8,12.6);for(let e of i)n(this.nuclearLine,m.clone().add(e),p.clone().add(e)),n(this.nuclearLine,p.clone().add(e),l.clone().add(e.clone().multiplyScalar(.5)));this.nuclearLine.visible=!1,this.scene.add(this.nuclearLine)}{let e=new U,n=xf();n.scale.setScalar(1.25),e.add(n),e.position.set(Xf.stormtank.at[0],0,Xf.stormtank.at[1]),t(`stormtank`,e)}{let n=new U,r=Sf();r.scale.setScalar(1.3),n.add(r);let i=Rf(e,.8,{gear:`helmet`});i.group.position.set(1,0,.9),i.group.rotation.y=.5,n.add(i.group),this.standers.push(i),n.position.set(Xf.firestation.at[0],0,Xf.firestation.at[1]),n.rotation.y=-.3,t(`firestation`,n)}{let e=Mf();e.position.set(Xf.batteries.at[0],0,Xf.batteries.at[1]),t(`batteries`,e)}{let e=new U,n=new G(this.ribbonGeometry(Qf.map(([e,t])=>new H(e,0,t)),.42,.012,30).geometry,new Uo({color:13151352,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}));e.add(n);let r=Tf();r.position.set(-.75,0,-8.5),e.add(r),t(`firebreaks`,e)}let[a,o]=Xf.sewagehill.at;this.hillMound=new G(new ta(1.75,1.95,.3,28),[q(10975826),q(9749090),q(9749090)]),this.hillMound.position.set(a,.15,o),this.hillMound.castShadow=this.hillMound.receiveShadow=!0,this.hillMound.visible=!1,this.scene.add(this.hillMound);for(let e of[`river`,`hill`]){let[t,n]=e===`river`?Zf:Xf.sewagehill.at;for(let r=1;r<=3;r++){let i=bf(r);i.position.set(t,e===`hill`?.3:0,n),i.rotation.y=e===`river`?-.5:.3,i.scale.setScalar(e===`river`?1.25:1.05),i.visible=!1,i.traverse(e=>e.castShadow=e.receiveShadow=!0),this.scene.add(i),this.plants[e].push(i)}}this.occupy(Zf[0],Zf[1],1.3),this.riverPark=jf(e,(e,t)=>this.treeGroup(e,t)),this.riverPark.position.set(Zf[0],0,Zf[1]),this.riverPark.visible=!1,this.riverPark.traverse(e=>e.castShadow=e.receiveShadow=!0),this.scene.add(this.riverPark),this.flood=new G(new ea(1.7,32),new Uo({color:9075274,transparent:!0,opacity:.8,roughness:.4})),this.flood.rotation.x=-Math.PI/2,this.flood.position.set(Zf[0],.28,Zf[1]),this.flood.visible=!1,this.scene.add(this.flood),this.gas=Af(),this.gas.position.set(-9.6,0,5.4),this.gas.visible=!1,this.fence=Nf(2.4),this.fence.position.set(-8.4,0,3.6),this.fence.visible=!1,this.coalSite=this.buildingSite(`convert`),this.coalSite.position.set(-6.9,0,4.9),this.coalSite.visible=!1;for(let e of[this.gas,this.fence,this.coalSite])e.traverse(e=>e.castShadow=e.receiveShadow=!0),this.scene.add(e);let s=(e,t,n,r,i=!1)=>{let a=[],o=new Map;for(let e of t)e.traverse(e=>{let t=e;if(!t.isMesh||!(t.material instanceof Uo))return;let n=o.get(t.material);n||(n=t.material.clone(),o.set(t.material,n),a.push({m:n,base:n.color.clone()})),t.material=n});let s=i?Df():Ef(...r);s.position.set(n[0],0,n[1]),i&&s.scale.setScalar(1.3);let c=Of();c.position.set(n[0]+r[0]/2+.2,0,n[1]+r[2]/2+.2),c.rotation.y=Math.PI/4;for(let e of[s,c])e.visible=!1,e.traverse(e=>e.castShadow=e.receiveShadow=!0),this.scene.add(e);this.wear[e]={mats:a,sign:c,works:s}};s(`treatment`,[this.wt],[-7,8.6],[2.8,.9,2]),s(`sewage`,[...this.plants.river,...this.plants.hill],Zf,[2.6,.9,2]),s(`coal`,[this.factory],[-8.4,3.6],[3.4,1.6,2.6]),s(`grid`,[this.subSmall],Xf.grid.at,[1.8,.6,1.3]),s(`dam`,[this.dam],[-2.55,-2.25],[2.8,1.1,1]),s(`wind`,this.turbines,[-9.4,-.5],[.8,2.6,.8]),s(`solar`,[this.solarOld],[-6.8,6.7],[2.8,.6,1.8]),s(`mains`,[],[-3.3,4.55],[1.2,.4,.6],!0),s(`sewers`,[],[1,7],[1.2,.4,.6],!0),this.burst=new U,this.burst.add(Df()),this.burstJet=new G(new ta(.06,.14,1.5,10),new Uo({color:11132146,emissive:6271197,emissiveIntensity:.3,transparent:!0,opacity:.85})),this.burstJet.position.y=.75;let c=new G(new ea(.8,20),this.water);c.rotation.x=-Math.PI/2,c.position.y=.03,this.burst.add(this.burstJet,c),this.burst.position.set(.9,0,3.3),this.burst.scale.setScalar(1.2),this.burst.visible=!1,this.scene.add(this.burst);let l=new Uo({color:9075280,transparent:!0,opacity:.8,roughness:.3});for(let[e,t,n]of[[-2.2,5.3,.55],[-.6,5,.45],[-3.4,4,.5],[.4,3,.4],[-4.6,4.7,.45],[1.2,6.9,.5],[-1.5,2.7,.4]]){let r=new G(new ea(n,18),l);r.rotation.x=-Math.PI/2,r.position.set(e,.035,t),r.scale.set(1.4,1,1),this.puddles.add(r)}this.puddles.visible=!1,this.scene.add(this.puddles),this.gridFire=kf(e,6),this.gridFire.position.set(Xf.grid.at[0],.2,Xf.grid.at[1]),this.gridFire.visible=!1,this.scene.add(this.gridFire)}suggestPlot(e,t){for(let n=.2;n<4;n+=.2)for(let r=0;r<Math.PI*2;r+=Math.PI/12){let i=t.at[0]+Math.cos(r)*n,a=t.at[1]+Math.sin(r)*n;if(this.free(i,a,t.r)){console.warn(`plot ${e} at ${t.at} overlaps; nearest free spot: [${i.toFixed(1)}, ${a.toFixed(1)}]`);return}}console.warn(`plot ${e} at ${t.at} overlaps; no free spot nearby`)}buildingSite(e){let t=tp(e.length*97+e.charCodeAt(0)),n=new U,r=new G(new ta(.62,.66,.03,20),q(11569758));r.position.y=.02,n.add(r);for(let e=0;e<7;e++){let t=e/7*Math.PI*2,r=new G(new na(.06,.2,8),q(15764028));r.position.set(Math.cos(t)*.72,.1,Math.sin(t)*.72);let i=new G(new ta(.042,.048,.04,8),q(16183782));i.position.set(Math.cos(t)*.72,.1,Math.sin(t)*.72),n.add(r,i)}let i=q(15909198),a=J(.08,1.9,.08,i);a.position.set(.3,.95,-.25);let o=new U;o.position.set(.3,1.9,-.25);let s=J(1.4,.06,.06,i);s.position.x=.4;let c=J(.24,.14,.14,q(7042176));c.position.x=-.3;let l=J(.012,.7,.012,q(3815994),!1);l.position.set(.95,-.35,0);let u=J(.18,.1,.18,q(14208440));u.position.set(.95,-.72,0),o.add(s,c,l,u),o.rotation.y=t()*6,this.cranes.push(o);let d=J(.3,.12,.2,q(10975823));d.position.set(-.25,.08,.2);let f=J(.2,.1,.2,q(14208440));f.position.set(-.3,.19,.2),n.add(a,o,d,f);let p=Rf(t,.75,{gear:`hardhat`});return p.group.position.set(-.2,0,-.25),p.group.rotation.y=.8,n.add(p.group),this.standers.push(p),n}treeGroup(e,t){let n=new U;if(e){let e=q([5212746,5936722,4619586][Math.floor(t()*3)]);for(let t=0;t<3;t++){let r=new G(new na(.42-t*.1,.6,7),e);r.position.y=.45+t*.35,n.add(r)}}else{let e=new G(new ta(.06,.08,.4,6),q(9068608));e.position.y=.2;let r=new G(new Do(.42,1),q([7317074,8238429,6264904,8961890][Math.floor(t()*4)]));r.position.y=.7,n.add(e,r)}return n}forest(){let e=tp(81),t=[];for(let n=0;n<2400&&t.length<420;n++){let n=(e()-.5)*2*Vf,r=(e()-.5)*2*Vf,i=-(n+r)/Math.SQRT2,a=Math.hypot(n,r)/ip(Math.atan2(r,n)),o=i>2?.95:a>.82?.7:.12;if(e()>o||!this.free(n,r,.35))continue;let s=1+e()*.5;t.push({x:n,z:r,s,pine:i>1?e()<.75:e()<.35,rot:e()*6,zone:op(n,r),frag:e(),strip:$f(n,r,Qf)<.6}),this.occupy(n,r,.28*s)}let n=t.filter(e=>!e.pine),r=t.filter(e=>e.pine),i=(e,t,n)=>{let r=new ki(e,t,n);return r.castShadow=r.receiveShadow=!0,this.scene.add(r),r},a=e=>new Uo({color:e,roughness:.85,flatShading:!0}),o=i(new ta(.06,.08,.4,6),a(9068608),n.length),s=i(new Do(.42,1),a(16777215),n.length),c=i(new na(.42,.6,7),a(16777215),r.length*3),l=new W,u=[7317074,8238429,6264904,8961890],d=[5212746,5936722,4619586];n.forEach((t,n)=>{t.color=u[Math.floor(e()*u.length)],s.setColorAt(n,l.setHex(t.color))}),r.forEach((t,n)=>{t.color=d[Math.floor(e()*d.length)];for(let e=0;e<3;e++)c.setColorAt(n*3+e,l.setHex(t.color))}),this.trees={rounds:n,pines:r,trunks:o,crowns:s,cones:c,key:``}}updateTrees(e,t){let n=this.trees;if(!n)return;n.crowns.material.color.copy(Sp).lerp(vp,t*.8),n.cones.material.color.copy(Sp).lerp(vp,t*.6);let r=Object.fromEntries(Gf.map(t=>[t,np((60-e[t])/45)*.55])),i=this.view.burnt??0,a=this.view.built.firebreaks===`done`,o=`${Gf.map(e=>r[e].toFixed(3)).join()}|${i.toFixed(2)}|${a}`;if(o===n.key)return;let s=e=>e.zone===`headwaters`&&e.frag*7.31%1<i,c=new W;n.key=o;let l=new Qt,u=new Ot,d=new H(0,1,0),f=new H,p=new H,m=new H(0,0,0);n.rounds.forEach((e,t)=>{let i=e.frag<r[e.zone]||a&&!!e.strip,o=!i&&s(e);u.setFromAxisAngle(d,e.rot),i?l.compose(f.set(e.x,.05*e.s,e.z),u,p.set(e.s*1.2,e.s*.25,e.s*1.2)):l.compose(f.set(e.x,.2*e.s,e.z),u,p.set(e.s,e.s,e.s)),n.trunks.setMatrixAt(t,l),l.compose(f.set(e.x,(o?.5:.7)*e.s,e.z),u,i?m:o?p.set(e.s*.35,e.s*.45,e.s*.35):p.set(e.s,e.s*.95,e.s)),n.crowns.setMatrixAt(t,l),n.crowns.setColorAt(t,c.setHex(o?xp:e.color??7317074))}),n.pines.forEach((e,t)=>{let i=e.frag<r[e.zone]||a&&!!e.strip,o=!i&&s(e);for(let r=0;r<3;r++){let a=e.s*(1-r*.24)*(o?.6:1);u.setFromAxisAngle(d,e.rot+r),l.compose(f.set(e.x,(.45+r*.35)*e.s,e.z),u,i?m:p.set(a,e.s*(o?.8:1),a)),n.cones.setMatrixAt(t*3+r,l),n.cones.setColorAt(t*3+r,c.setHex(o?xp:e.color??5212746))}}),n.crowns.instanceColor&&(n.crowns.instanceColor.needsUpdate=!0),n.cones.instanceColor&&(n.cones.instanceColor.needsUpdate=!0),n.trunks.instanceMatrix.needsUpdate=!0,n.crowns.instanceMatrix.needsUpdate=!0,n.cones.instanceMatrix.needsUpdate=!0}wildfire(){let e=tp(401),t=this.trees,n=t?[...t.rounds,...t.pines].filter(e=>e.zone===`headwaters`).sort((e,t)=>e.frag*7.31%1-t.frag*7.31%1):[];for(let t of n.slice(0,12)){let n=kf(e,4);n.position.set(t.x,.2,t.z),n.scale.setScalar(1.3),n.visible=!1,this.scene.add(n),this.fires.push(n),this.noOutline.push(n)}for(let e=0;e<15;e++){let t=n[e%Math.max(1,Math.min(12,n.length))];if(!t)break;let r=new G(new Do(.35,1),new Uo({color:4867392,transparent:!0,opacity:.6,roughness:1,depthWrite:!1}));r.visible=!1,this.scene.add(r),this.noOutline.push(r),this.fireSmoke.push({m:r,o:e/15,p:new H(t.x,1.2,t.z)})}this.ash=new Uo({map:mp(21),color:4866104,transparent:!0,opacity:0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2});for(let[t,n,r]of[[-3.6,-6.6,5.5],[.6,-7.4,4],[-6.8,-1.6,3.6]]){let i=new G(new Oo(r,r*.8),this.ash);i.rotation.set(-Math.PI/2,0,e()*Math.PI),i.position.set(t,.007,n),i.receiveShadow=!0,this.scene.add(i)}}buildNetworks(){this.networks&&(this.overlay.remove(this.networks),this.networks.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())}));let e=new U,t=new G(new Oo(2,2),new Vo({vertexShader:`void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`void main() { gl_FragColor = vec4(0.97, 0.95, 0.92, 0.55); }`,transparent:!0,depthTest:!1,depthWrite:!1}));t.frustumCulled=!1,t.renderOrder=-1,e.add(t);let n=this.view.condition??{},r=this.view.sewage?.site===`hill`,i=r?Xf.sewagehill.at:Zf,a=[{id:`mains`,hue:4165584,r:.1,paths:[[[-7,8.4],[-5.8,7],[-5.2,4.8],[-3.8,4.4],[-1.5,4],[1.4,3.4],[2.6,5.8],[1.2,7.9],[-.6,8.2]],[[-1.5,4],[-1.5,1.9]],[[-5.2,4.8],[-5.6,1.4]],[[-3.8,4.4],[-2.6,8.2]]],nodes:[[-7,8.4]]},{id:`sewers`,hue:10119738,r:.1,paths:[r?[[-4.4,5.6],[-1.5,4.8],[1.4,3.4],[4.55,1.35],[6.9,3.6],i]:[[-4.4,5.6],[-1.5,4.8],[.6,6.6],[3.4,7.6],i],[[-1.5,1.9],[-1.5,4.8]],[[.8,8.2],[.6,6.6]]],nodes:[i]},{id:`grid`,hue:15771694,r:.08,paths:[[[-8.4,3.6],[-6.3,7],[-4.5,9.4],[-1.5,5],[1.4,3.4],[4.55,1.35],[7.8,-1.2],[10.2,-4.4]],[[-4.5,9.4],[1.2,7.9]],[[-1.5,5],[-1.5,1.9]]],nodes:[[-8.4,3.6],[-4.5,9.4]]}];for(let t of a){let r=np((70-(n[t.id]??100))/60);t.paths.forEach((n,i)=>{let a=new va(n.map(([e,t])=>new H(e,.1,t)),!1,`catmullrom`,.2),o=Math.max(2,Math.round(a.getLength()/.7));for(let n=0;n<o;n++){let s=(n*.618+i*.37+t.r*5)%1<r,c=new G(new Mo(new Ma(a.getPointAt(n/o),a.getPointAt((n+1)/o)),1,t.r,6),new oi({color:s?14700602:t.hue,transparent:!0,depthTest:!1,depthWrite:!1}));c.renderOrder=2,e.add(c)}});for(let[n,r]of t.nodes){let i=new G(new Ao(.28,16,10),new oi({color:t.hue,transparent:!0,depthTest:!1,depthWrite:!1}));i.position.set(n,.3,r),i.renderOrder=3,e.add(i)}}e.visible=this.networksOn,this.networks=e,this.overlay.add(e)}dryPatches(){let e=tp(211),t=[mp(5),mp(8),mp(13)],n={headwaters:4.5,farm:5.2,capital:4.2,towns:3.2,industry:3.6};for(let r of Gf){let i=new Uo({map:t[Gf.indexOf(r)%3],transparent:!0,opacity:0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2});this.patches.push({mat:i,zone:r});let[a,o]=Yf[r];for(let t=0,s=0;t<7&&s<80;s++){let s=e()*Math.PI*2,c=Math.sqrt(e())*n[r],l=a+Math.cos(s)*c,u=o+Math.sin(s)*c;if(!ap(l,u,1.2))continue;let d=1.8+e()*1.8,f=new G(new Oo(d,d*(.7+e()*.5)),i);f.rotation.set(-Math.PI/2,0,e()*Math.PI),f.position.set(l,.006,u),f.receiveShadow=!0,this.scene.add(f),t++}}}monsters(){let e=tp(123),t=(e,t)=>new H(e,0,t),n=[[t(-3.4,2.6),t(.4,2.6)],[t(-3.4,5.4),t(.4,5.4)],[t(-3.4,2.6),t(-3.4,5.4)],[t(.4,2.6),t(.4,5.4)],[t(.6,3.5),t(3.6,2.2)],[t(5.6,.2),t(6.8,-1.3)],[t(-4.2,4.5),t(-6.6,3.3)],[t(-1.6,6.9),t(1.6,6.9)],[t(6.6,-2.2),t(5.6,-4.4)]],r=[`none`,`apron`,`cap`,`none`,`hardhat`,`strawhat`,`hardhat`,`none`,`strawhat`];for(let t=0;t<20;t++){let[i,a]=n[t%n.length],o=Rf(e,.85,{gear:r[t%r.length]});this.scene.add(o.group),this.walkers.push({m:o,a:i,b:a,t:e(),speed:.03+e()*.04,dir:e()<.5?1:-1})}for(let[t,n,r,i]of[[-3,3.6,.2,`apron`],[0,3.6,-.3,`apron`],[8.6,1.4,.8,`strawhat`],[-7.2,5.2,.4,`hardhat`],[-1,4.6,2.4,`none`],[-2.2,3.4,-.8,`none`]]){let a=Rf(e,.85,{gear:i});a.group.position.set(t,0,n),a.group.rotation.y=r,this.scene.add(a.group),this.standers.push(a)}let i=q(16513006),a=q(14242634),o=q(10975823);for(let t=0;t<6;t++){let n=Rf(e,.85,{gear:[`none`,`strawhat`,`hardhat`,`cap`][t%4]}),r=-2.7+t*.48,s=2.75+t%2*.35;n.group.position.set(r,0,s),n.group.rotation.y=Math.PI+(e()-.5)*.6;let c=new U,l=new G(new Qi(.035,.7,.035),o);l.position.y=.35;let u=new G(new Qi(.42,.28,.03),i);u.position.y=.78;let d=new G(new Qi(.3,.06,.035),a);d.position.y=.78,c.add(l,u,d),c.position.set(r+.18,.25,s+.05),c.rotation.y=(e()-.5)*.5+Math.PI/4,this.protest.add(n.group,c),this.standers.push(n)}this.protest.visible=!1,this.scene.add(this.protest)}sky(){let e=new Uo({color:16774898,emissive:16773612,emissiveIntensity:.5,roughness:1,flatShading:!1,fog:!1,transparent:!0,opacity:.9}),t=(t,n,r,i)=>{let a=new U;for(let[t,n,r,i]of[[0,0,0,1],[.95,.1,.1,.75],[-.95,-.05,.1,.72],[.35,.42,-.2,.72],[-.4,.3,.3,.6]]){let o=new G(new Do(i,3),e);o.position.set(t,n,r),o.scale.y=.72,a.add(o)}return a.position.set(t,n,r),a.scale.setScalar(i),this.scene.add(a),this.floaters.push({o:a,y:n,phase:t}),a},n=tp(91);for(let e=0;e<26;e++){let e=n()*Math.PI*2,r=22+n()*60;t(Math.cos(e)*r,-30-n()*8,Math.sin(e)*r,1.6+n()*2)}for(let[e,n,r,i]of[[-30,4,-14,2.2],[-10,7,-32,2.6],[8,3,-34,2],[-36,1,8,1.8],[-22,9,-26,1.6],[16,6,-30,1.8]])t(e,n,r,i);for(let e=0;e<9;e++){let t=-Math.PI*.2-n()*Math.PI*1.1,r=40+n()*40,i=new U,a=1.6+n()*2.2;i.add(cp(sp(t=>a*(1+.1*Math.sin(t*3+e)),24),0,.4,q(9224026)));let o=new G(new na(a*.95,a*2.2,7),q(9077371));o.rotation.x=Math.PI,o.position.y=-.4-a*1.1,i.add(o);for(let e=0;e<3;e++){let e=this.treeGroup(!0,n);e.position.set((n()-.5)*a,0,(n()-.5)*a),e.scale.setScalar(a*.5),i.add(e)}i.position.set(Math.cos(t)*r,-4+n()*10,Math.sin(t)*r),this.scene.add(i),this.floaters.push({o:i,y:i.position.y,phase:e*1.3})}}makeMarker(){let e=new U,t=new G(new ko(.86,1,64),new oi({color:16774338,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1})),n=new G(new ea(.86,64),new oi({color:16774338,transparent:!0,opacity:.18,depthTest:!1,depthWrite:!1}));t.rotation.x=n.rotation.x=-Math.PI/2,e.add(n,t),e.visible=!1,this.overlay.add(e),this.marker=e}bubbleTexture(e){let t=this.bubbleTex.get(e);if(t)return t;let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);if(r.fillStyle=`rgba(60,40,30,0.18)`,r.beginPath(),r.arc(66,58,46,0,Math.PI*2),r.fill(),r.fillStyle=`#ffffff`,r.beginPath(),r.arc(64,54,46,0,Math.PI*2),r.moveTo(50,94),r.lineTo(64,118),r.lineTo(78,94),r.fill(),e===`water`)r.fillStyle=`#4fa3d8`,r.beginPath(),r.moveTo(64,22),r.bezierCurveTo(78,42,88,56,88,66),r.arc(64,66,24,0,Math.PI),r.bezierCurveTo(40,56,50,42,64,22),r.fill();else if(e===`power`)r.fillStyle=`#f2b53a`,r.beginPath(),r.moveTo(70,18),r.lineTo(42,62),r.lineTo(62,62),r.lineTo(56,92),r.lineTo(86,44),r.lineTo(66,44),r.closePath(),r.fill();else if(e===`heat`){r.fillStyle=`#f28c3a`,r.beginPath(),r.arc(64,56,18,0,Math.PI*2),r.fill(),r.strokeStyle=`#f28c3a`,r.lineWidth=6,r.lineCap=`round`;for(let e=0;e<8;e++){let t=e/8*Math.PI*2;r.beginPath(),r.moveTo(64+Math.cos(t)*26,56+Math.sin(t)*26),r.lineTo(64+Math.cos(t)*34,56+Math.sin(t)*34),r.stroke()}}else if(e===`people`){r.fillStyle=`#b07ad0`;for(let[e,t]of[[50,50],[78,50]])r.beginPath(),r.arc(e,t,11,0,Math.PI*2),r.fill(),r.fillRect(e-13,t+14,26,20)}else if(e===`food`){r.strokeStyle=`#b08a4a`,r.lineWidth=5,r.beginPath(),r.moveTo(64,92),r.lineTo(64,40),r.stroke(),r.fillStyle=`#f0bd45`;for(let[e,t,n]of[[64,30,0],[54,44,-.6],[74,44,.6],[54,60,-.7],[74,60,.7],[56,76,-.7],[72,76,.7]])r.save(),r.translate(e,t),r.rotate(n),r.beginPath(),r.ellipse(0,0,6,10,0,0,Math.PI*2),r.fill(),r.restore()}else if(e===`salt`){r.fillStyle=`#d9c28f`,r.beginPath(),r.ellipse(64,72,30,14,0,0,Math.PI*2),r.fill(),r.fillStyle=`#ffffff`,r.strokeStyle=`#a89a80`,r.lineWidth=3;for(let[e,t,n]of[[52,52,11],[72,44,13],[66,66,9],[82,62,8]])r.beginPath(),r.moveTo(e,t-n),r.lineTo(e+n*.8,t),r.lineTo(e,t+n),r.lineTo(e-n*.8,t),r.closePath(),r.fill(),r.stroke()}else if(e===`sewage`)r.fillStyle=`#8a6a3a`,r.beginPath(),r.moveTo(64,24),r.bezierCurveTo(78,44,86,56,86,66),r.arc(64,66,22,0,Math.PI),r.bezierCurveTo(42,56,50,44,64,24),r.fill(),r.strokeStyle=`#d0664f`,r.lineWidth=6,r.beginPath(),r.moveTo(36,86),r.lineTo(92,30),r.stroke();else if(e===`fire`)r.fillStyle=`#f28c3a`,r.beginPath(),r.moveTo(64,18),r.bezierCurveTo(84,42,90,58,86,72),r.bezierCurveTo(82,90,46,90,42,72),r.bezierCurveTo(40,58,50,50,54,38),r.bezierCurveTo(58,48,62,50,64,18),r.fill(),r.fillStyle=`#ffd35c`,r.beginPath(),r.ellipse(64,72,10,14,0,0,Math.PI*2),r.fill();else{r.fillStyle=`#8f8a84`;for(let[e,t,n]of[[50,66,16],[70,58,18],[62,40,14],[80,72,12]])r.beginPath(),r.arc(e,t,n,0,Math.PI*2),r.fill()}let i=new Ji(n);return i.colorSpace=Le,this.bubbleTex.set(e,i),i}bubble(e,t,n,r){let i=new $r(new zr({map:this.bubbleTexture(e),depthTest:!1,depthWrite:!1,transparent:!0,fog:!1}));i.scale.set(1.5,1.5,1),i.position.set(t,n,r),this.overlay.add(i),this.bubbles.push({s:i,y:n,phase:this.bubbles.length*1.7})}enableControls(){let e=null;this.canvas.addEventListener(`pointerdown`,t=>{e={x:t.clientX,y:t.clientY,yaw:this.goal.yaw,pitch:this.goal.pitch,moved:!1},this.canvas.setPointerCapture(t.pointerId)}),this.canvas.addEventListener(`pointermove`,t=>{e&&(Math.hypot(t.clientX-e.x,t.clientY-e.y)>5&&(e.moved=!0),e.moved&&(this.goal.yaw=e.yaw-(t.clientX-e.x)*.006,this.goal.pitch=Dt.clamp(e.pitch+(t.clientY-e.y)*.15,12,60),this.cam.yaw=this.goal.yaw,this.cam.pitch=this.goal.pitch))}),this.canvas.addEventListener(`pointerup`,t=>{e&&!e.moved&&this.pickCb&&this.pickCb(this.pick(t)),e=null}),this.canvas.addEventListener(`wheel`,e=>{e.preventDefault(),this.goal.zoom=Dt.clamp(this.goal.zoom*(1+e.deltaY*.001),6,34)},{passive:!1})}pick(e){let t=this.canvas.getBoundingClientRect(),n=new V((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new Js;r.setFromCamera(n,this.camera);for(let e of r.intersectObjects(this.scene.children,!0)){if(!e.object.visible)continue;let t=e.object;for(;t&&t!==this.neighbour;)t=t.parent;if(t===this.neighbour)return`kestra`;let n=e.point;if(!(Math.hypot(n.x,n.z)>14.5||n.y>12||n.y<-Wf-8))return n.y<-Uf.lip*.8?`aquifer`:op(n.x,n.z)}return null}frame(){let e=Math.min(.1,this.clock.getDelta()),t=this.clock.elapsedTime;this.tween<1&&(this.tween=Math.min(1,this.tween+e/2.2),this.applyLive(wp(this.from,this.to,rp(this.tween)))),this.orbit&&(this.goal.yaw+=this.orbit*e,this.cam.yaw+=this.orbit*e);let n=1-Math.exp(-e*4),r=Dt.lerp;this.cam={yaw:r(this.cam.yaw,this.goal.yaw,n),pitch:r(this.cam.pitch,this.goal.pitch,n),zoom:r(this.cam.zoom,this.goal.zoom,n),target:this.cam.target.map((e,t)=>r(e,this.goal.target[t],n))};let{yaw:i,pitch:a,zoom:o,target:s}=this.cam,c=Dt.degToRad(a);this.camera.position.set(s[0]+Math.sin(i)*Math.cos(c)*90,s[1]+Math.sin(c)*90,s[2]+Math.cos(i)*Math.cos(c)*90),this.camera.lookAt(s[0],s[1],s[2]);let l=this.canvas.clientWidth||800,u=this.canvas.clientHeight||500,d=(this.insets.right-this.insets.left)/2/l*o*this.aspect,f=(this.insets.top-this.insets.bottom)/2/u*o;Object.assign(this.camera,{left:-o*this.aspect/2+d,right:o*this.aspect/2+d,top:o/2+f,bottom:-o/2+f,near:1,far:220}),this.camera.updateProjectionMatrix(),this.pixelPass.uniforms.cameraNear.value=this.camera.near,this.pixelPass.uniforms.cameraFar.value=this.camera.far;for(let n of this.walkers)n.t+=n.dir*n.speed*e,(n.t>1||n.t<0)&&(n.dir*=-1,n.t=Dt.clamp(n.t,0,1)),n.m.group.position.lerpVectors(n.a,n.b,n.t),n.m.group.rotation.y=Math.atan2((n.b.x-n.a.x)*n.dir,(n.b.z-n.a.z)*n.dir),zf(n.m,t,!0);for(let e of this.standers)zf(e,t,!1);this.blades.forEach((e,n)=>e.rotation.z=t*1.4+n);for(let e of this.smoke){let n=(t*.16+e.o)%1;e.m.position.set(e.p.x+n*1.4,e.p.y+n*3.2,e.p.z-n*.6),e.m.scale.setScalar(.6+n*2.6);let r=e.m.material;r.color.copy(this.smokeMat.color),r.opacity=.75*(1-n)}let p=this.meterBoxes.visible?.8:2.2;this.pumpBeams.forEach((e,n)=>e.rotation.z=Math.sin(t*p+n)*.28);for(let e of this.spurts)e.jet.scale.set(1,.6+.4*Math.abs(Math.sin(t*5+e.phase)),1);this.cranes.forEach((t,n)=>t.rotation.y+=e*.25*(n%2?1:-1));for(let e of[...this.fires,this.gridFire])e.visible&&e.children.forEach((e,n)=>e.scale.y=.7+.4*Math.abs(Math.sin(t*7+n*1.7)));for(let e of this.fireSmoke){if(!e.m.visible)continue;let n=(t*.2+e.o)%1;e.m.position.set(e.p.x+n*1.8,e.p.y+n*4,e.p.z-n*.8),e.m.scale.setScalar(.8+n*3),e.m.material.opacity=.6*(1-n)}if(this.burst.visible&&(this.burstJet.scale.y=.8+.25*Math.abs(Math.sin(t*9))),this.markerOn){let e=1+Math.sin(t*4)*.06;this.marker.children[1].scale.setScalar(e)}for(let e of this.floaters)e.o.position.y=e.y+Math.sin(t*.5+e.phase)*.2;for(let e of this.bubbles)e.s.position.y=e.y+Math.sin(t*2+e.phase)*.12;this.water.map.offset.y=t*.08%1;let m=this.fall.material;if(m.map.offset.y=t*.7%1,this.pixel){for(let e of this.noOutline)e.visible=!1;this.scene.overrideMaterial=this.normalMat;let e=this.scene.background;this.scene.background=null,this.renderer.setRenderTarget(this.normalTarget),this.renderer.setClearColor(8421631,1),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.scene.overrideMaterial=null,this.scene.background=e;for(let e of this.noOutline)e.visible=!0}this.composer.render(e),this.renderer.autoClear=!1,this.renderer.render(this.overlay,this.camera),this.renderer.autoClear=!0}};function Ep(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function Dp(e,t=`|`){return e.map(e=>Qp(e)).join(t)}function Op(e,t){return typeof t==`bigint`?t.toString():t}var kp=class{constructor(e){this._getter=e,this._value=void 0}get value(){let e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}};function Ap(e){return new kp(e)}function jp(e){return e==null}function Mp(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function Np(e,t){let n=e/t,r=Math.round(n),i=4*2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}function Pp(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Fp(e){let t=Object.getOwnPropertyDescriptor(e,`shape`);return t?.get?t.get.raw:t?.value}function Ip(e){return Fp(e._zod.def)??e._zod.def.shape}function Lp(e,t,n){Object.defineProperty(e,t,{get(){let e=n();return Pp(this,t,e),e},enumerable:!0,configurable:!0})}function Rp(e,t,n){t in e?Pp(e,t,n):e[t]=n}function zp(e,t,n,r){let i=Ip(t);for(let a of n){let n=Object.getOwnPropertyDescriptor(i,a);n.enumerable&&(n.get?Lp(e,a,()=>{let e=t._zod.def.shape[a];return r?r(e,a):e}):Rp(e,a,r?r(n.value,a):n.value))}}function Bp(e,t){for(let n of Reflect.ownKeys(t)){let r=Object.getOwnPropertyDescriptor(t,n);r.enumerable&&(r.get?Lp(e,n,()=>t[n]):Rp(e,n,r.value))}}function Vp(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function Hp(e){return JSON.stringify(e)}function Up(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Wp=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function Gp(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Kp=Ap(()=>{if(Vm.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function qp(e){if(Gp(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return Gp(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function Jp(e){return qp(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var Yp=new Set([`string`,`number`,`symbol`]);function Xp(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Zp(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function Y(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function Qp(e){return typeof e==`bigint`?e.toString()+`n`:typeof e==`string`?`"${e}"`:`${e}`}function $p(e){return Object.keys(e).filter(t=>e[t]._zod.optin!==void 0&&e[t]._zod.optout===`optional`)}var em={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},tm={int64:[BigInt(`-9223372036854775808`),BigInt(`9223372036854775807`)],uint64:[BigInt(0),BigInt(`18446744073709551615`)]};function nm(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);let i={};return zp(i,e,rm(e,t)),Zp(e,Vp(n,{shape:i,checks:[]}))}function rm(e,t){let n=Ip(e),r=[];for(let e of Reflect.ownKeys(t)){if(!Object.getOwnPropertyDescriptor(n,e)?.enumerable)throw Error(`Unrecognized key: "${String(e)}"`);t[e]&&r.push(e)}return r}function im(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);let i=new Set(rm(e,t)),a={};return zp(a,e,Reflect.ownKeys(Ip(e)).filter(e=>!i.has(e))),Zp(e,Vp(n,{shape:a,checks:[]}))}function am(e,t){if(!qp(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=Ip(e);for(let e of Reflect.ownKeys(t))if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return Zp(e,Vp(e._zod.def,{shape:om(e,t)}))}function om(e,t){let n={};return zp(n,e,Reflect.ownKeys(Ip(e))),Bp(n,t),n}function sm(e,t){if(!qp(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return Zp(e,Vp(e._zod.def,{shape:om(e,t)}))}function cm(e,t){if(!t?._zod?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);let n={};return zp(n,e,Reflect.ownKeys(Ip(e))),zp(n,t,Reflect.ownKeys(Ip(t))),Zp(e,Vp(e._zod.def,{shape:n,get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function lm(e,t,n,r=`partial`){let i=t._zod.def.checks;if(i&&i.length>0)throw Error(`.${r}() cannot be used on object schemas containing refinements`);let a=n?new Set(rm(t,n)):void 0,o={};return zp(o,t,Reflect.ownKeys(Ip(t)),e&&((t,n)=>a&&!a.has(n)?t:new e({type:`optional`,innerType:t}))),Zp(t,Vp(t._zod.def,{shape:o,checks:[]}))}function um(e,t,n){let r=n?new Set(rm(t,n)):void 0,i={};return zp(i,t,Reflect.ownKeys(Ip(t)),(t,n)=>r&&!r.has(n)?t:new e({type:`nonoptional`,innerType:t})),Zp(t,Vp(t._zod.def,{shape:i}))}function dm(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function fm(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function pm(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function mm(e){return typeof e==`string`?e:e?.message}function hm(e,t,n){var r;for(let i=t;i<e.length;i++)(r=e[i]).schema??(r.schema=n)}function gm(e,t,n){var r;let i=e.inst?._zod?.traits;i?.has(`$ZodType`)&&(i.has(`$ZodCheck`)?(r=e).schema??(r.schema=e.inst):e.schema=e.inst);let a=e.schema===e.inst?void 0:e.schema?._zod.def?.error,o=e.message?e.message:mm(e.inst?._zod.def?.error?.(e))??mm(a?.(e))??mm(t?.error?.(e))??mm(n.customError?.(e))??mm(n.localeError?.(e))??`Invalid input`,s={};for(let t of Object.keys(e))t!==`inst`&&t!==`schema`&&t!==`continue`&&t!==`input`&&t!==`__proto__`&&(s[t]=e[t]);return s.path??=[],s.message=o,t?.reportInput&&(s.input=e.input),s}var _m=/[\uD800-\uDBFF]/;function vm(e){let t=e.length;if(!_m.test(e))return t;let n=t;for(let r=0;r<t-1;r++)(e.charCodeAt(r)&64512)==55296&&(e.charCodeAt(r+1)&64512)==56320&&(n--,r++);return n}function ym(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function bm(e){let t=typeof e;switch(t){case`number`:return Number.isNaN(e)?`nan`:`number`;case`object`:{if(e===null)return`null`;if(Array.isArray(e))return`array`;let t=e;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&`constructor`in t&&t.constructor)return t.constructor.name}}return t}function xm(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function Sm(e,t){for(let n in t){let r=Object.getOwnPropertyDescriptor(t,n);r.get?Object.defineProperty(e,n,{...r,enumerable:!1}):Em(e,n,r.value)}}function Cm(e,t,n,r=!0){return Object.defineProperty(e,t,{configurable:!0,writable:!0,enumerable:r,value:n}),n}function wm(e,t,n){return Cm(e,t,n,!1)}function Tm(e,t){for(let n in e){let r=e[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get(){return Cm(this,n,r(this))},set(e){Cm(this,n,e)}})}return t}function Em(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){return this==null?n:Cm(this,t,n.bind(this))},set(e){Cm(this,t,e)}})}function Dm(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}var Om,km=!1,Am={configurable:!0,get(){km=!0}};function jm(e,t,n){let r=Object.getPrototypeOf(e._zod);if(t in r&&Om!==e._zod){Om=void 0;return}Om=e._zod,Object.defineProperty(r,t,{configurable:!0,get(){Object.defineProperty(this,t,Am);let e=km;km=!1;try{let r=n(this);return km?delete this[t]:Object.defineProperty(this,t,{configurable:!0,writable:!0,value:r}),km||=e,r}catch(n){throw delete this[t],km||=e,n}},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}function Mm(e,t,n,r){let i=Dm(e,t);i&&Object.defineProperty(i,t,{configurable:!0,get(){let e={configurable:!0,writable:!0,enumerable:r,value:void 0};return Object.defineProperty(this,t,e),e.value=n(this),Object.defineProperty(this,t,e),e.value},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:r,value:e})}})}var Nm=`~constantCatch`;function Pm(e){let t=()=>e;return t[Nm]=!0,t}var Fm,Im={value:void 0,enumerable:!1},Lm=`captureStackTrace`in Error?Error:null;function Rm(e){let t=Lm;if(t){let n=t.stackTraceLimit;if(typeof n==`number`){try{t.stackTraceLimit=0}catch{return Lm=null,new e}try{return new e}finally{t.stackTraceLimit=n}}}return new e}function X(e,t,n,r){let i={};function a(e){this.def=e,this.constr=d,this.traits=new Set}a.prototype=i;let o=n,s=o&&new WeakSet;function c(n,r){if(!n._zod){Im.value=new a(r);try{Object.defineProperty(n,"_zod",Im)}finally{Im.value=void 0}}else if(n._zod.traits.has(e))return;if(n._zod.traits.add(e),t(n,r),s){let e=Object.getPrototypeOf(n),t=n._zod.constr.prototype,r=e;for(;r&&r!==t;)r=Object.getPrototypeOf(r);let i=r??e;s.has(i)||(s.add(i),Sm(i,o))}let i=d.prototype;for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let l=r?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:e});function d(e){let t=r?.Parent?Rm(u):this;c(t,e);let n=t._zod.deferred;if(n){for(let e of n)e();t._zod.deferred=void 0}let i=globalThis.__zod_globalConfig?.postProcessor;return i&&i(t),t}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:t=>r?.Parent&&t instanceof r.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(d,"name",{value:e}),d}var zm=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Bm=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(Fm=globalThis).__zod_globalConfig??(Fm.__zod_globalConfig={});var Vm=globalThis.__zod_globalConfig;function Hm(e){return e&&Object.assign(Vm,e),Vm}function Um(){let e=this._zod;return e.message??=JSON.stringify(e.def,Op,2),e.message}function Wm(e){this._zod.message=e}var Gm={get:Um,set:Wm,enumerable:!0,configurable:!0},Km={value:void 0,enumerable:!1},qm=new WeakSet([Object.prototype,Error.prototype]),Jm=(e,t)=>{e.name=`$ZodError`,Km.value=t,Object.defineProperty(e,"issues",Km),Km.value=void 0,Object.defineProperty(e,"message",Gm);let n=Object.getPrototypeOf(e);qm.has(n)||(qm.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))},Ym=X(`$ZodError`,Jm);X(`$ZodError`,Jm,void 0,{Parent:Error});function Xm(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function Zm(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?Xm(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function Qm(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.prototype.hasOwnProperty.call(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}function $m(e){let t=[],n=e.map(e=>typeof e==`object`?e.key:e);for(let e of n)typeof e==`number`?t.push(`[${e}]`):typeof e==`symbol`?t.push(`[${JSON.stringify(String(e))}]`):/[^\w$]/.test(e)?t.push(`[${JSON.stringify(e)}]`):(t.length&&t.push(`.`),t.push(e));return t.join(``)}function eh(e){let t=[],n=[...e.issues].sort((e,t)=>(e.path??[]).length-(t.path??[]).length);for(let e of n)t.push(`✖ ${e.message}`),e.path?.length&&t.push(`  → at ${$m(e.path)}`);return t.join(`
`)}function th(e,t){return{callee:t?.callee??e,Err:t?.Err}}var nh=e=>{let t=(n,r,i,a)=>{let o=i?{...i,async:!1}:{async:!1},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise)throw new zm;if(s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>gm(e,o,Hm())));throw Wp(n,a?.callee??t),n}return s.value};return t},rh=e=>{let t=async(n,r,i,a)=>{let o=i?{...i,async:!0}:{async:!0},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise&&(s=await s),s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>gm(e,o,Hm())));throw Wp(n,a?.callee??t),n}return s.value};return t},ih=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new zm;return a.issues.length?ah(e,a.issues,i):{success:!0,data:a.value}};function ah(e,t,n){let r;return{success:!1,get error(){return r||(r=new e(t.map(e=>gm(e,n,Hm()))),t=void 0,n=void 0),r},set error(e){r=e,t=void 0,n=void 0}}}var oh=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?ah(e,a.issues,i):{success:!0,data:a.value}},sh=Symbol.for(`zod.compile.invalid`),ch=Symbol.for(`zod.compile.fallback`),lh=((e,t,n)=>{let r=e._zod.bag.validator;if(r!==void 0){if(r(t)!==sh)return!0;if(r.definite===!0&&n===void 0)return!1}return uh(e,t,n)});function uh(e,t,n){let r=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},i=e._zod.bag.fallbackRun,a;if(i?(r[ch]=!0,a=i({value:t,issues:[]},r)):a=e._zod.run({value:t,issues:[]},r),a instanceof Promise)throw new zm;return a.issues.length===0}var dh=async(e,t,n)=>{let r=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0},i=e._zod.run({value:t,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length===0},fh=e=>{let t=nh(e),n=(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return t(e,r,o,th(n,a))};return n},ph=e=>{let t=nh(e),n=(e,r,i,a)=>t(e,r,i,th(n,a));return n},mh=e=>{let t=rh(e),n=async(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return await t(e,r,o,th(n,a))};return n},hh=e=>{let t=rh(e),n=async(e,r,i,a)=>await t(e,r,i,th(n,a));return n},gh=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ih(e)(t,n,i)},_h=e=>(t,n,r)=>ih(e)(t,n,r),vh=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return oh(e)(t,n,i)},yh=e=>async(t,n,r)=>oh(e)(t,n,r),bh=/^[cC][0-9a-z]{6,}$/,xh=/^[0-9a-z]+$/,Sh=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,Ch=/^[0-9a-vA-V]{20}$/,wh=/^[A-Za-z0-9]{27}$/,Th=/^[a-zA-Z0-9_-]{21}$/;function Eh(e){return RegExp(`^[a-zA-Z0-9_-]{${e}}$`)}var Dh=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Oh=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,kh=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Ah=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,jh=`^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function Mh(){return new RegExp(jh,`u`)}var Nh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ph=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Fh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Ih=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Lh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Rh=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,zh=/^https?$/,Bh=/^\+[1-9]\d{6,14}$/,Vh=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function Hh(e){return RegExp(`^${e}$`)}var Uh=Hh(Vh);function Wh(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:e.seconds?`${t}:[0-5]\\d(?:\\.\\d+)?`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Gh(e){return RegExp(`^${Wh(e)}$`)}function Kh(e){let t=[`Z`];e.offset&&t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let n=`${Wh({precision:e.precision,seconds:!0})}(?:${t.join(`|`)})`,r=e.local?`${n}|${Wh({precision:e.precision})}`:n;return RegExp(`^${Vh}T(?:${r})$`)}var qh=/^[\s\S]{0,}$/,Jh=/^-?\d+$/,Yh=/^-?\d+(?:\.\d+)?$/,Xh=/^(?:true|false)$/i,Zh=/^[^A-Z]*$/,Qh=/^[^a-z]*$/,$h=X(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),eg=e=>{let t=e.value;return!jp(t)&&t.length!==void 0},tg={number:`number`,bigint:`bigint`,object:`date`},ng=X(`$ZodCheckLessThan`,(e,t)=>{$h.init(e,t);let n=tg[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:tg[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),rg=X(`$ZodCheckGreaterThan`,(e,t)=>{$h.init(e,t);let n=tg[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:tg[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),ig=X(`$ZodCheckMultipleOf`,(e,t)=>{$h.init(e,t),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?t.value!==BigInt(0)&&n.value%t.value===BigInt(0):Np(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),ag=X(`$ZodCheckNumberFormat`,(e,t)=>{$h.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=em[t.format];e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),og=X(`$ZodCheckMaxLength`,(e,t)=>{var n;$h.init(e,t),(n=e._zod.def).when??(n.when=eg),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>t.maximum?vm(r):i)<=t.maximum)return;let a=ym(r);n.issues.push({origin:a,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),sg=X(`$ZodCheckMinLength`,(e,t)=>{var n;$h.init(e,t),(n=e._zod.def).when??(n.when=eg),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>=t.minimum&&i<t.minimum*2?vm(r):i)>=t.minimum)return;let a=ym(r);n.issues.push({origin:a,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),cg=X(`$ZodCheckLengthEquals`,(e,t)=>{var n;$h.init(e,t),(n=e._zod.def).when??(n.when=eg),e._zod.check=n=>{let r=n.value,i=r.length,a=typeof r==`string`&&i>=t.length&&i<=t.length*2?vm(r):i;if(a===t.length)return;let o=ym(r),s=a>t.length;n.issues.push({origin:o,...s?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),lg=X(`$ZodCheckStringFormat`,(e,t)=>{var n,r;$h.init(e,t),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),ug=X(`$ZodCheckRegex`,(e,t)=>{lg.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),dg=X(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=Zh,lg.init(e,t)}),fg=X(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=Qh,lg.init(e,t)}),pg=X(`$ZodCheckIncludes`,(e,t)=>{$h.init(e,t);let n=Xp(t.includes);t.pattern=new RegExp(typeof t.position==`number`?`^.{${t.position},}${n}`:n),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),mg=X(`$ZodCheckStartsWith`,(e,t)=>{$h.init(e,t);let n=RegExp(`^${Xp(t.prefix)}.*`);t.pattern??=n,e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),hg=X(`$ZodCheckEndsWith`,(e,t)=>{$h.init(e,t);let n=RegExp(`.*${Xp(t.suffix)}$`);t.pattern??=n,e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),gg=X(`$ZodCheckOverwrite`,(e,t)=>{$h.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),_g=class{constructor(e=[],t={}){this.content=[],this.indent=0,this.args=e,this.closed=t}indented(e){this.indent+=1;try{e(this)}finally{--this.indent}}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.content??[``];return new e(...Object.keys(this.closed),`return function (${this.args.join(`, `)}) {\n${t.join(`
`)}\n};`)(...Object.values(this.closed))}},vg={major:4,minor:6,patch:5},yg=X(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=vg;let r=e._zod.def.checks,i=e._zod.traits.has(`$ZodCheck`)?[e,...r??[]]:r?.length?[...r]:[];for(let t of i)for(let n of t._zod.onattach)n(e);if(i.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(t,n,r)=>{if(t.memo)return t;let i=dm(t),a;for(let o of n){if(o._zod.def.when){if(fm(t)||!o._zod.def.when(t))continue}else if(i)continue;let n=t.issues.length,s=o._zod.check(t);if(s instanceof Promise&&r?.async===!1)throw new zm;if(a||s instanceof Promise)a=(a??Promise.resolve()).then(async()=>{await s,t.issues.length!==n&&(hm(t.issues,n,e),i||=dm(t,n))});else{if(t.issues.length===n)continue;hm(t.issues,n,e),i||=dm(t,n)}}return a?a.then(()=>t):t},n=(n,r,a)=>{if(dm(n))return n.aborted=!0,n;let o=t(r,i,a);if(o instanceof Promise){if(a.async===!1)throw new zm;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(r,a)=>{if(a.skipChecks)return e._zod.parse(r,a);if(a.direction===`backward`){let t=e._zod.parse({value:r.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,r,a)):n(t,r,a)}let o=e._zod.parse(r,a);if(o instanceof Promise){if(a.async===!1)throw new zm;return o.then(e=>t(e,i,a))}return t(o,i,a)}}},{get"~standard"(){return wm(this,`~standard`,Sg(this))},set"~standard"(e){Cm(this,`~standard`,e)}}),bg=(e,t)=>e.issues.length?{issues:e.issues.map(e=>gm(e,t,Hm()))}:{value:e.value};async function xg(e,t){let n={async:!0};return bg(await e._zod.run({value:t,issues:[]},n),n)}function Sg(e){return{validate:t=>{let n={async:!1};try{let r=e._zod.run({value:t,issues:[]},n);if(!(r instanceof Promise))return bg(r,n)}catch{}return xg(e,t)},vendor:`zod`,version:1}}var Cg=X(`$ZodString`,(e,t)=>{yg.init(e,t),e._zod.pattern=t.pattern??qh,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),wg=X(`$ZodStringFormat`,(e,t)=>{lg.init(e,t),Cg.init(e,t)}),Tg=X(`$ZodGUID`,(e,t)=>{t.pattern??=Oh,wg.init(e,t)}),Eg=X(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=kh(e)}else t.pattern??=kh();wg.init(e,t)}),Dg=X(`$ZodEmail`,(e,t)=>{t.pattern??=Ah,wg.init(e,t)});function Og(e){try{return typeof URL<`u`&&typeof URL.canParse==`function`?URL.canParse(e):(new URL(e),!0)}catch{return!1}}function kg(e,t){return!(`normalize`in t)&&!(`hostname`in t)&&!(`protocol`in t)?Og(e)||2:Ag(e,t)}function Ag(e,t){if(!t.normalize&&t.protocol?.source===zh.source&&!/^https?:\/\//i.test(e))return 1;try{if(typeof URL<`u`){let t=URL;if(typeof t.parse==`function`)return t.parse(e)??2}return new URL(e)}catch{return 2}}var jg=/[\t\n\r]/g;function Mg(e){return e.replace(jg,``)}function Ng(e,t){return t.lastIndex=0,t.test(e.hostname)}function Pg(e,t){return t.lastIndex=0,t.test(e.protocol.endsWith(`:`)?e.protocol.slice(0,-1):e.protocol)}var Fg=X(`$ZodURL`,(e,t)=>{wg.init(e,t),e._zod.check=n=>{try{let r=n.value.trim(),i=kg(r,t);if(i===1){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}if(i===2){n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort});return}if(i===!0){n.value=Mg(r);return}t.hostname&&!Ng(i,t.hostname)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort}),t.protocol&&!Pg(i,t.protocol)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort}),n.value=t.normalize?i.href:Mg(r);return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Ig=X(`$ZodEmoji`,(e,t)=>{t.pattern??=Mh(),wg.init(e,t)}),Lg=X(`$ZodNanoID`,(e,t)=>{if(t.length!==void 0&&(!Number.isInteger(t.length)||t.length<1))throw Error(`Invalid nanoid length: ${t.length}`);t.pattern??=t.length===void 0?Th:Eh(t.length),wg.init(e,t)}),Rg=X(`$ZodCUID`,(e,t)=>{t.pattern??=bh,wg.init(e,t)}),zg=X(`$ZodCUID2`,(e,t)=>{t.pattern??=xh,wg.init(e,t)}),Bg=X(`$ZodULID`,(e,t)=>{t.pattern??=Sh,wg.init(e,t)}),Vg=X(`$ZodXID`,(e,t)=>{t.pattern??=Ch,wg.init(e,t)}),Hg=X(`$ZodKSUID`,(e,t)=>{t.pattern??=wh,wg.init(e,t)}),Ug=X(`$ZodISODateTime`,(e,t)=>{t.pattern??=Kh(t),wg.init(e,t)}),Wg=X(`$ZodISODate`,(e,t)=>{t.pattern??=Uh,wg.init(e,t)}),Gg=X(`$ZodISOTime`,(e,t)=>{t.pattern??=Gh(t),wg.init(e,t)}),Kg=X(`$ZodISODuration`,(e,t)=>{t.pattern??=Dh,wg.init(e,t)}),qg=X(`$ZodIPv4`,(e,t)=>{t.pattern??=Nh,wg.init(e,t)}),Jg=/^[0-9a-fA-F:.]+$/;function Yg(e){return Jg.test(e)?Og(`http://[${e}]`):!1}var Xg=X(`$ZodIPv6`,(e,t)=>{t.pattern??=Ph,wg.init(e,t),e._zod.check=n=>{Yg(n.value)||n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}),Zg=X(`$ZodCIDRv4`,(e,t)=>{t.pattern??=Fh,wg.init(e,t)});function Qg(e){let t=e.split(`/`);if(t.length!==2)return!1;let[n,r]=t;if(!r)return!1;let i=Number(r);return`${i}`!==r||i<0||i>128?!1:Yg(n)}var $g=X(`$ZodCIDRv6`,(e,t)=>{t.pattern??=Ih,wg.init(e,t),e._zod.check=n=>{Qg(n.value)||n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}});function e_(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var t_=/^[0-9a-zA-Z+/]*={0,2}$/,n_=X(`$ZodBase64`,(e,t)=>{t.pattern??=t_,wg.init(e,t),e._zod.check=n=>{e_(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}}),r_=/^[A-Za-z0-9_-]*$/;function i_(e){if(!r_.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return e_(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var a_=X(`$ZodBase64URL`,(e,t)=>{t.pattern??=r_,wg.init(e,t),e._zod.check=n=>{i_(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),o_=X(`$ZodE164`,(e,t)=>{t.pattern??=Bh,wg.init(e,t)});function s_(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var c_=X(`$ZodJWT`,(e,t)=>{wg.init(e,t),e._zod.check=n=>{s_(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),l_=X(`$ZodNumber`,(e,t)=>{yg.init(e,t),e._zod.pattern=Yh,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),u_=X(`$ZodNumberFormat`,(e,t)=>{ag.init(e,t),l_.init(e,t)}),d_=X(`$ZodBoolean`,(e,t)=>{yg.init(e,t),e._zod.pattern=Xh,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=!!n.value}catch{}let i=n.value;return typeof i==`boolean`||n.issues.push({expected:`boolean`,code:`invalid_type`,input:i,inst:e}),n}}),f_=X(`$ZodUnknown`,(e,t)=>{yg.init(e,t),e._zod.parse=e=>e}),p_=X(`$ZodNever`,(e,t)=>{yg.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function m_(e,t,n){e.issues.length&&t.issues.push(...pm(n,e.issues)),t.value[n]=e.value}var h_=X(`$ZodArray`,(e,t)=>{yg.init(e,t);let n=Vm.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!Array.isArray(a))return r.issues.push({expected:`array`,code:`invalid_type`,input:a,inst:e}),r;r.value=n?n.alloc(e,r,Array(a.length),i):Array(a.length);let o=[],s=i?.abortEarly;for(let e=0;e<a.length;e++){let n=a[e],c=t.element._zod.run({value:n,issues:[]},i);if(c instanceof Promise)o.push(c.then(t=>m_(t,r,e)));else if(m_(c,r,e),s&&c.issues.length!==0&&dm(c))break}return o.length?Promise.all(o).then(()=>r):r}});function g_(e,t,n,r,i,a){let o=n in r,s=a===`optional`;if(o||!s||i!==`optional`){if(e.issues.length){if(i!==void 0&&s&&!o)return;t.issues.push(...pm(n,e.issues))}if(!o&&i===void 0){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?(o||i===`defaulted`&&!s)&&(t.value[n]=void 0):t.value[n]=e.value}}var __=[];function v_(e){let t=Object.keys(e.shape),n=Object.getOwnPropertySymbols(e.shape),r=n.length?n:__,i=r.length?[...t,...r]:t;for(let t of i)if(!e.shape?.[t]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);let a=$p(e.shape);return{...e,allKeys:i,symbolKeys:r,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(a)}}function y_(e,t,n,r,i,a,o){let s=[],c=i.keySet,l=i.catchall._zod,u=l.def.type,d=l.optin,f=l.optout,p=0;for(let i in t){if(o&&n.issues.length!==p){if(dm(n,p))break;p=n.issues.length}if(c.has(i))continue;if(i===`__proto__`){u===`never`&&s.push(i);continue}if(u===`never`){s.push(i);continue}let a=l.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>g_(e,n,i,t,d,f))):g_(a,n,i,t,d,f)}return s.length&&n.issues.push({code:`unrecognized_keys`,keys:s,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var b_=X(`$ZodObject`,(e,t)=>{yg.init(e,t);let n=Object.getOwnPropertyDescriptor(t,`shape`),r=n?.get?n.get.raw:t.shape??{};if(r){let e=()=>{let n={...r};return Object.defineProperty(t,"shape",{value:n}),e.raw=n,n};e.raw=r,Object.defineProperty(t,"shape",{get:e})}let i=Ap(()=>v_(t));jm(e,`propValues`,e=>{let t=e.def.shape,n={};for(let e in t){let r=t[e]._zod;if(r.values){Object.prototype.hasOwnProperty.call(n,e)||Pp(n,e,new Set);for(let t of r.values)n[e].add(t);r.optin!==void 0&&n[e].add(void 0)}}return n});let a=Gp,o=t.catchall,s,c=Vm.memoizer;c?.attach(e),e._zod.parse=(t,n)=>{s??=i.value;let r=t.value;if(!a(r))return t.issues.push({expected:`object`,code:`invalid_type`,input:r,inst:e}),t;t.value=c?c.alloc(e,t,{},n):{};let l=[],u=s.shape,d=n?.abortEarly,f=t.issues.length;for(let e of s.allKeys){if(d&&t.issues.length!==f){if(dm(t,f))break;f=t.issues.length}if(e===`__proto__`)continue;let i=u[e],a=i._zod.optin,o=i._zod.optout,s=i._zod.run({value:r[e],issues:[]},n);s instanceof Promise?l.push(s.then(n=>g_(n,t,e,r,a,o))):g_(s,t,e,r,a,o)}return o?y_(l,r,t,n,i.value,e,d===!0):l.length?Promise.all(l).then(()=>t):t}}),x_=X(`$ZodObjectJIT`,(e,t)=>{b_.init(e,t);let n=e._zod.parse,r=Ap(()=>v_(t)),i=Vm.memoizer,a=t=>{let n=r.value,a=n.symbolKeys,o=new _g([`payload`,`ctx`],{shape:t,inst:e,memo:i,syms:a}),s=e=>`shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,c=(e,t)=>`
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;o.write(`const input = payload.value;`);let l=Object.create(null),u=0;for(let e of n.allKeys)l[e]=`key_${u++}`;o.write(i?`const newResult = memo.alloc(inst, payload, {}, ctx);`:`const newResult = {};`);for(let e of n.allKeys){if(e===`__proto__`)continue;let n=l[e],r=typeof e==`symbol`?`syms[${a.indexOf(e)}]`:Hp(e),i=`${r} in input`,u=t[e],d=u?._zod?.optin,f=d!==void 0,p=u?._zod?.optout===`optional`;if(o.write(`const ${n} = ${s(r)};`),f&&p){let e=d===`optional`?`${n}_present`:`${n}.value !== undefined || ${n}_present`;o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n,r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `)}else f?(o.write(`
        if (${n}.issues.length) {${c(n,r)}
        }
      `),d===`defaulted`?o.write(`newResult[${r}] = ${n}.value;`):o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)):o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n,r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `)}return o.write(`payload.value = newResult;`),o.write(`return payload;`),o.compile()},o,s=Gp,c=!Vm.jitless,l=c&&Kp.value,u=t.catchall,d;e._zod.parse=(i,f)=>{d??=r.value;let p=i.value;return s(p)?c&&l&&f?.async===!1&&f.jitless!==!0?(o||=a(t.shape),i=o(i,f),u?y_([],p,i,f,d,e,f?.abortEarly===!0):i):n(i,f):(i.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),i)}});function S_(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!dm(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>gm(e,r,Hm())))}),t)}var C_=X(`$ZodUnion`,(e,t)=>{yg.init(e,t),jm(e,`optin`,e=>e.def.options.some(e=>e._zod.optin===`defaulted`)?`defaulted`:e.def.options.some(e=>e._zod.optin!==void 0)?`optional`:void 0),jm(e,`optout`,e=>e.def.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),jm(e,`values`,e=>{if(e.def.options.every(e=>e._zod.values))return new Set(e.def.options.flatMap(e=>Array.from(e._zod.values)))}),jm(e,`pattern`,e=>{if(e.def.options.every(e=>e._zod.pattern)){let t=e.def.options.map(e=>e._zod.pattern);return RegExp(`^(${t.map(e=>Mp(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>S_(t,r,e,i)):S_(o,r,e,i)}}),w_=X(`$ZodIntersection`,(e,t)=>{yg.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>E_(e,t,n)):E_(e,i,a)}});function T_(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(qp(e)&&qp(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.prototype.hasOwnProperty.call(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=T_(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=T_(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function E_(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=T_(t.value,n.value);if(!c.valid){if(dm(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var D_=X(`$ZodRecord`,(e,t)=>{yg.init(e,t);let n=Vm.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!qp(a))return r.issues.push({expected:`record`,code:`invalid_type`,input:a,inst:e}),r;let o=[],s=t.keyType._zod.values;if(s&&!t.partial){r.value=n?n.alloc(e,r,{},i):{};let c=new Set;for(let n of s)if(typeof n==`string`||typeof n==`number`||typeof n==`symbol`){if(c.add(typeof n==`number`?n.toString():n),n===`__proto__`)continue;let s=t.keyType._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(s.issues.length){r.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>gm(e,i,Hm())),input:n,path:[n],inst:e});continue}let l=s.value;if(l===`__proto__`)continue;let u=t.valueType._zod.run({value:a[n],issues:[]},i);u instanceof Promise?o.push(u.then(e=>{e.issues.length&&r.issues.push(...pm(n,e.issues)),r.value[l]=e.value})):(u.issues.length&&r.issues.push(...pm(n,u.issues)),r.value[l]=u.value)}let l;for(let e in a)if(!c.has(e)){if(t.mode===`loose`){if(e===`__proto__`)continue;r.value[e]=a[e]}else l??=[],l.push(e)}l&&l.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:l,continue:!0})}else{r.value=n?n.alloc(e,r,{},i):{};let c;for(let n of Reflect.ownKeys(a)){if(n===`__proto__`||!Object.prototype.propertyIsEnumerable.call(a,n))continue;let l=t.keyType._zod.run({value:n,issues:[]},i);if(l instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof n==`string`&&Yh.test(n)&&l.issues.length){let e=t.keyType._zod.run({value:Number(n),issues:[]},i);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(l=e)}if(l.issues.length){t.mode===`loose`?r.value[n]=a[n]:s?(c??=[],c.push(n)):r.issues.push({code:`invalid_key`,origin:`record`,issues:l.issues.map(e=>gm(e,i,Hm())),input:n,path:[n],inst:e});continue}let u=l.value;if(u===`__proto__`)continue;let d=t.valueType._zod.run({value:a[n],issues:[]},i);d instanceof Promise?o.push(d.then(e=>{e.issues.length&&r.issues.push(...pm(n,e.issues)),r.value[u]=e.value})):(d.issues.length&&r.issues.push(...pm(n,d.issues)),r.value[u]=d.value)}c&&c.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:c,continue:!0})}return o.length?Promise.all(o).then(()=>r):r}}),O_=X(`$ZodEnum`,(e,t)=>{yg.init(e,t);let n=Ep(t.entries),r=new Set(n);e._zod.values=r,jm(e,`pattern`,e=>{let t=Ep(e.def.entries).filter(e=>Yp.has(typeof e));return RegExp(t.length?`^(${t.map(e=>Xp(e.toString())).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),k_=X(`$ZodLiteral`,(e,t)=>{yg.init(e,t);let n=new Set(t.values);e._zod.values=n,jm(e,`pattern`,e=>{let t=e.def.values;return RegExp(t.length?`^(${t.map(e=>typeof e==`string`?Xp(e):e?Xp(e.toString()):String(e)).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(r,i)=>{let a=r.value;return n.has(a)||r.issues.push({code:`invalid_value`,values:t.values,input:a,inst:e}),r}}),A_=X(`$ZodTransform`,(e,t)=>{yg.init(e,t),e._zod.optin=`optional`,Vm.memoizer?.guard(e),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Bm(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n));if(i instanceof Promise)throw new zm;return n.value=i,n}});function j_(e,t){return e.value=t.issues.length?void 0:t.value,e}var M_=X(`$ZodOptional`,(e,t)=>{yg.init(e,t),jm(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),e._zod.optout=`optional`,jm(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t,void 0]):void 0}),jm(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${Mp(t.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(e.value===void 0){if(t.innerType._zod.optin!==`defaulted`)return e;let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(t=>j_(e,t)):j_(e,r)}return t.innerType._zod.run(e,n)}}),N_=X(`$ZodExactOptional`,(e,t)=>{M_.init(e,t),jm(e,`values`,e=>e.def.innerType._zod.values),jm(e,`pattern`,e=>e.def.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),P_=X(`$ZodNullable`,(e,t)=>{yg.init(e,t),jm(e,`optin`,e=>e.def.innerType._zod.optin),jm(e,`optout`,e=>e.def.innerType._zod.optout),jm(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${Mp(t.source)}|null)$`):void 0}),jm(e,`values`,e=>e.def.innerType._zod.values?new Set([...e.def.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),F_=X(`$ZodDefault`,(e,t)=>{yg.init(e,t),e._zod.optin=`defaulted`,jm(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>I_(e,t)):I_(r,t)}});function I_(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var L_=X(`$ZodPrefault`,(e,t)=>{yg.init(e,t),e._zod.optin=`defaulted`,jm(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),R_=X(`$ZodNonOptional`,(e,t)=>{yg.init(e,t),jm(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>z_(t,e)):z_(i,e)}});function z_(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}function B_(e,t,n,r){return t.issues.length?(e.value=n.catchValue({...t,value:e.value,error:{issues:t.issues.map(e=>gm(e,r,Hm()))},input:e.value}),e):(e.value=t.value,t.memo&&(e.memo=!0),e)}var V_=X(`$ZodCatch`,(e,t)=>{yg.init(e,t),jm(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),jm(e,`optout`,e=>e.def.innerType._zod.optout),jm(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(r=>B_(e,r,t,n)):B_(e,r,t,n)}}),H_=X(`$ZodPipe`,(e,t)=>{yg.init(e,t),jm(e,`values`,e=>e.def.in._zod.values),jm(e,`optin`,e=>e.def.in._zod.optin),jm(e,`optout`,e=>e.def.out._zod.optout),jm(e,`propValues`,e=>e.def.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>U_(e,t.in,n)):U_(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>U_(e,t.out,n)):U_(r,t.out,n)}});function U_(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},n)}var W_=X(`$ZodReadonly`,(e,t)=>{yg.init(e,t),jm(e,`propValues`,e=>e.def.innerType._zod.propValues),jm(e,`values`,e=>e.def.innerType._zod.values),jm(e,`optin`,e=>e.def.innerType?._zod?.optin),jm(e,`optout`,e=>e.def.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(G_):G_(r)}});function G_(e){return e.memo||(e.value=Object.freeze(e.value)),e}var K_=X(`$ZodCustom`,(e,t)=>{$h.init(e,t),yg.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>q_(t,n,r,e));q_(i,n,r,e)}});function q_(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(xm(e))}}var J_=class extends Error{constructor(){super(`Cannot parse a reference cycle that closes through a transform`),this.name=`ZodCyclicError`}},Y_=`~memo`,X_=[];function Z_(e){return typeof e==`object`&&!!e}function Q_(e){return e.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}var $_=new WeakMap,ev=0,tv=1,nv=2;function rv(e,t,n){let r=$_.get(e);if(r!==void 0)return r?nv:ev;if(t.has(e))return nv;t.add(e);let i=ev,a=e=>{if(i!==nv&&e?._zod){let r=rv(e,t,n);r>i&&(i=r)}},o=(e,r)=>{let i=ev;for(let a of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,a);if(r&&!o.enumerable)continue;let s=o.get?tv:o.value?._zod?rv(o.value,t,n):ev;s>i&&(i=s)}return i},s=e=>{e>i&&(i=e)},c=e._zod.def;switch(c.type){case`object`:{let e=Fp(c);s(e?o(e,!0):tv),a(c.catchall);break}case`array`:a(c.element);break;case`tuple`:for(let e of c.items)a(e);a(c.rest);break;case`record`:case`map`:a(c.keyType),a(c.valueType);break;case`set`:a(c.valueType);break;case`union`:for(let e of c.options)a(e);break;case`intersection`:a(c.left),a(c.right);break;case`optional`:case`nullable`:case`default`:case`prefault`:case`catch`:case`readonly`:case`nonoptional`:case`promise`:case`success`:a(c.innerType);break;case`pipe`:a(c.in),a(c.out);break;case`function`:a(c.input),a(c.output);break;case`lazy`:{let r=c._cachedInner??(n?e._zod.innerType:void 0);s(r?rv(r,t,!1):tv);break}case`template_literal`:case`string`:case`number`:case`int`:case`boolean`:case`bigint`:case`symbol`:case`undefined`:case`null`:case`void`:case`never`:case`any`:case`unknown`:case`date`:case`nan`:case`enum`:case`literal`:case`file`:case`transform`:case`custom`:break;default:for(let e in c){let t=Object.getOwnPropertyDescriptor(c,e);if(!t||t.get)continue;let n=t.value;if(n&&typeof n==`object`){if(n._zod)a(n);else if(Array.isArray(n))for(let e of n)a(e)}}}return t.delete(e),iv(e,i)}function iv(e,t){return t!==tv&&$_.set(e,t===nv),t}function av(e,t){let n=e.buckets.get(t);return n||(n=new WeakMap,e.buckets.set(t,n)),n}var ov,sv=[],cv={alloc(e,t,n){let r=ov;if(!r)return n;ov=void 0;let i={value:n,issues:null};return r.set(t.value,i),sv.push(i),n},guard(e){var t;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,n=(e,n)=>{if(n.direction!==`backward`&&uv(n,e.value))throw new J_;return t(e,n)};e._zod.parse=n,e._zod.run===t&&(e._zod.run=n)})},attach(e){var t;let n,r=!1,i,a;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,o=(s,c)=>{if(n===void 0){let i=rv(e,new Set,!1);if(i===ev)return e._zod.parse=t,e._zod.run===o&&(e._zod.run=t),t(s,c);i===nv||r?n=!0:r=!0}let l=s.value;if(!Z_(l))return t(s,c);let u=c[Y_];u||(u={buckets:new WeakMap,backEdges:void 0},c[Y_]=u);let d;i===c?d=a:(d=av(u,e),i=c,a=d);let f=d.get(l);if(f)return s.value=f.value,f.issues?f.issues.length&&s.issues.push(...Q_(f.issues)):(s.memo=!0,u.backEdges??(u.backEdges=new WeakSet),u.backEdges.add(f.value)),s;ov=d;let p=sv.length,m=t(s,c);ov=void 0;let h=sv.length>p?sv.pop():void 0;return m instanceof Promise?m.then(e=>(h&&(h.issues=e.issues.length?Q_(e.issues):X_),e)):(h&&(h.issues=m.issues.length?Q_(m.issues):X_),m)};e._zod.parse=o,e._zod.run===t&&(e._zod.run=o)})}};function lv(){return cv}function uv(e,t){let n=e[Y_]?.backEdges;return n!==void 0&&Z_(t)&&n.has(t)}var dv=()=>{let e={string:{unit:`characters`,verb:`to have`},file:{unit:`bytes`,verb:`to have`},array:{unit:`items`,verb:`to have`},set:{unit:`items`,verb:`to have`},map:{unit:`entries`,verb:`to have`}};function t(t){return e[t]??null}let n={regex:`input`,email:`email address`,url:`URL`,emoji:`emoji`,uuid:`UUID`,uuidv4:`UUIDv4`,uuidv6:`UUIDv6`,nanoid:`nanoid`,guid:`GUID`,cuid:`cuid`,cuid2:`cuid2`,ulid:`ULID`,xid:`XID`,ksuid:`KSUID`,datetime:`ISO datetime`,date:`ISO date`,time:`ISO time`,duration:`ISO duration`,ipv4:`IPv4 address`,ipv6:`IPv6 address`,mac:`MAC address`,cidrv4:`IPv4 range`,cidrv6:`IPv6 range`,base64:`base64-encoded string`,base64url:`base64url-encoded string`,json_string:`JSON string`,e164:`E.164 number`,currency_code:`currency code`,credit_card:`credit card number`,iban:`IBAN`,jwt:`JWT`,template_literal:`input`},r={nan:`NaN`};function i(e,t){return e===`number`&&typeof t==`number`&&!Number.isFinite(t)?String(t):r[e]??e}return e=>{switch(e.code){case`invalid_type`:return`Invalid input: expected ${i(e.expected)}, received ${i(bm(e.input),e.input)}`;case`invalid_value`:return e.values.length===1?`Invalid input: expected ${Qp(e.values[0])}`:`Invalid option: expected one of ${Dp(e.values,`|`)}`;case`too_big`:{let n=e.exact?`exactly `:e.inclusive?`<=`:`<`,r=t(e.origin);return r?`Too big: expected ${e.origin??`value`} to have ${n}${e.maximum.toString()} ${r.unit??`elements`}`:`Too big: expected ${e.origin??`value`} to be ${n}${e.maximum.toString()}`}case`too_small`:{let n=e.exact?`exactly `:e.inclusive?`>=`:`>`,r=t(e.origin);return r?`Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}`:`Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`}case`invalid_format`:{let t=e;return t.format===`starts_with`?`Invalid string: must start with "${t.prefix}"`:t.format===`ends_with`?`Invalid string: must end with "${t.suffix}"`:t.format===`includes`?`Invalid string: must include "${t.includes}"`:t.format===`regex`?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${n[t.format]??e.format}`}case`not_multiple_of`:return`Invalid number: must be a multiple of ${e.divisor}`;case`unrecognized_keys`:return`Unrecognized key${e.keys.length>1?`s`:``}: ${Dp(e.keys,`, `)}`;case`invalid_key`:return`Invalid key in ${e.origin}`;case`invalid_union`:return e.options&&Array.isArray(e.options)&&e.options.length>0?`Invalid discriminator value. Expected ${e.options.map(e=>`'${e}'`).join(` | `)}`:e.inclusive===!1?`Invalid input: more than one option matched`:`Invalid input`;case`invalid_element`:return`Invalid value in ${e.origin}`;default:return`Invalid input`}}};function fv(){return{localeError:dv()}}var pv,mv=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function hv(){return new mv}(pv=globalThis).__zod_globalRegistry??(pv.__zod_globalRegistry=hv());var gv=globalThis.__zod_globalRegistry;function _v(e){return e.checks&&=[...e.checks],e}function vv(e,t){return new e(_v({type:`string`,...Y(t)}))}function yv(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...Y(t)})}function bv(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...Y(t)})}function xv(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...Y(t)})}function Sv(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...Y(t)})}function Cv(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...Y(t)})}function wv(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...Y(t)})}function Tv(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...Y(t)})}function Ev(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...Y(t)})}function Dv(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...Y(t)})}function Ov(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...Y(t)})}function kv(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...Y(t)})}function Av(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...Y(t)})}function jv(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...Y(t)})}function Mv(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...Y(t)})}function Nv(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...Y(t)})}function Pv(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...Y(t)})}function Fv(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...Y(t)})}function Iv(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...Y(t)})}function Lv(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...Y(t)})}function Rv(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...Y(t)})}function zv(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...Y(t)})}function Bv(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...Y(t)})}function Vv(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...Y(t)})}function Hv(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...Y(t)})}function Uv(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...Y(t)})}function Wv(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...Y(t)})}function Gv(e,t){return new e(_v({type:`number`,checks:[],...Y(t)}))}function Kv(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...Y(t)})}function qv(e,t){return new e({type:`boolean`,...Y(t)})}function Jv(e){return new e({type:`unknown`})}function Yv(e,t){return new e({type:`never`,...Y(t)})}function Xv(e,t){return new ng({check:`less_than`,...Y(t),value:e,inclusive:!1})}function Zv(e,t){return new ng({check:`less_than`,...Y(t),value:e,inclusive:!0})}function Qv(e,t){return new rg({check:`greater_than`,...Y(t),value:e,inclusive:!1})}function $v(e,t){return new rg({check:`greater_than`,...Y(t),value:e,inclusive:!0})}function ey(e,t){return new ig({check:`multiple_of`,...Y(t),value:e})}function ty(e,t){return new og({check:`max_length`,...Y(t),maximum:e})}function ny(e,t){return new sg({check:`min_length`,...Y(t),minimum:e})}function ry(e,t){return new cg({check:`length_equals`,...Y(t),length:e})}function iy(e,t){return new ug({check:`string_format`,format:`regex`,...Y(t),pattern:e})}function ay(e){return new dg({check:`string_format`,format:`lowercase`,...Y(e)})}function oy(e){return new fg({check:`string_format`,format:`uppercase`,...Y(e)})}function sy(e,t){return new pg({check:`string_format`,format:`includes`,...Y(t),includes:e})}function cy(e,t){return new mg({check:`string_format`,format:`starts_with`,...Y(t),prefix:e})}function ly(e,t){return new hg({check:`string_format`,format:`ends_with`,...Y(t),suffix:e})}function uy(e){return new gg({check:`overwrite`,tx:e})}function dy(e){return uy(t=>t.normalize(e))}function fy(){return uy(e=>e.trim())}function py(){return uy(e=>e.toLowerCase())}function my(){return uy(e=>e.toUpperCase())}function hy(){return uy(e=>Up(e))}function gy(e,t,n){return new e({type:`array`,element:t,...Y(n)})}function _y(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...Y(n)})}function vy(e,t){let n=yy(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(xm(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,`input`in r||(r.input=t.value),r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(xm(r))}},e(t.value,t)),t);return n}function yy(e,t){let n=new $h({check:`custom`,...Y(t)});return n._zod.check=e,n}function by(e,...t){for(let n of t)for(let t of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,t)&&Pp(e,t,n[t]);return e}function xy(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??gv,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,intersections:[],deferred:[],external:e?.external??void 0}}function Sy(e,t,n,r,i){let a=typeof t.unrepresentable==`function`?t.unrepresentable({zodSchema:e,path:r.path,message:i}):t.unrepresentable;if(a===`any`)return!1;if(a===void 0||a===`throw`)throw Error(i);return Object.assign(n,a),!0}function Cy(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o),t.sharedDefsExtractedFor=void 0,t.sharedEmitDoneFor=void 0;let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Cy(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&by(o.schema,c),t.io===`input`&&Ny(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function wy(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Ty(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);if(e.external&&e.sharedDefsExtractedFor===e.external)return;let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${wy(a)}`}}let i=`#/${r}/`;if(t[1]===n&&!t[1].schema.id)return{ref:`#`};let a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+wy(a)}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}r.count>1&&e.reused===`ref`&&a(n)}e.external&&(e.sharedDefsExtractedFor=e.external)}function Ey(e){let t=e.anyOf;if(!Array.isArray(t)||t.length===0||e.type!==void 0)return;let n=[];for(let e of t){if(!e||typeof e!=`object`)return;Ey(e);let t=Object.keys(e);if(t.length!==1||t[0]!==`type`)return;let r=e.type;for(let e of Array.isArray(r)?r:[r]){if(typeof e!=`string`)return;n.includes(e)||n.push(e)}}delete e.anyOf,e.type=n.length===1?n[0]:n}var Dy=new Set([`type`,`properties`,`required`,`additionalProperties`]),Oy=[`oneOf`,`anyOf`];function ky(e){let t=e.additionalProperties;return t===void 0||t===!1||typeof t!=`object`||!t?null:Object.keys(t).length?t:null}function Ay(e){let t=[];for(let n of e){if(typeof n!=`object`||n.type!==`object`)return null;for(let e in n)if(!Dy.has(e))return null;t.push(n)}let n={},r=new Set;for(let e of t){for(let r in e.properties){if(Object.prototype.hasOwnProperty.call(n,r))continue;let e=[];for(let n of t){let t=n.properties?.[r]??ky(n);t!=null&&(e.some(e=>JSON.stringify(e)===JSON.stringify(t))||e.push(t))}Pp(n,r,e.length===1?e[0]:Ay(e)??{allOf:e})}for(let t of e.required??[])r.add(t)}let i={type:`object`,properties:n};if(r.size&&(i.required=[...r]),t.every(e=>e.additionalProperties===!1))i.additionalProperties=!1;else{let e=[];for(let n of t){let t=ky(n);t&&!e.some(e=>JSON.stringify(e)===JSON.stringify(t))&&e.push(t)}e.length===1?i.additionalProperties=e[0]:e.length>1&&(i.additionalProperties={allOf:e})}return i}function jy(e){let t=e.allOf;if(!Array.isArray(t)||t.length<2)return;for(let t of Dy)if(t in e)return;let n=t.filter(e=>Oy.some(t=>Array.isArray(e[t]))),r=null;if(!n.length)r=Ay(t);else{let e=n[0],i=Oy.find(t=>Array.isArray(e[t]));if(Object.keys(e).length!==1)return;let a=t.filter(t=>t!==e),o=e[i].map(e=>Ay([...a,e]));if(o.some(e=>!e))return;r={[i]:o}}r&&(delete e.allOf,by(e,r))}function My(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):by(i,s),by(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};if(!e.external||e.sharedEmitDoneFor!==e.external){for(let t of[...e.seen.entries()].reverse())r(t[0]);if(e.target!==`openapi-3.0`)for(let t of e.seen.entries())Ey(t[1].def??t[1].schema);for(let t of e.deferred)t();if(e.intersections.length){let t=new Map;for(let n of e.seen.values())for(let e of[n.schema,n.def]){let n=e?.allOf;if(!Array.isArray(n))continue;let r=t.get(n);r?r.push(e):t.set(n,[e])}for(let n of e.intersections)for(let e of t.get(n)??[])jy(e)}}let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}by(i,n.defId?n.schema:n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};if(!e.external||e.sharedEmitDoneFor!==e.external)for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,Pp(o,e.defId,e.def))}e.external&&(e.sharedEmitDoneFor=e.external),e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Fy(t,`input`,e.processors),output:Fy(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function Ny(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return Ny(r.element,n);if(r.type===`set`)return Ny(r.valueType,n);if(r.type===`lazy`)return Ny(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`||r.type===`catch`)return Ny(r.innerType,n);if(r.type===`intersection`)return Ny(r.left,n)||Ny(r.right,n);if(r.type===`record`||r.type===`map`)return Ny(r.keyType,n)||Ny(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:Ny(r.in,n)||Ny(r.out,n);if(r.type===`object`){for(let e in r.shape)if(Ny(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(Ny(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(Ny(e,n))return!0;return!!(r.rest&&Ny(r.rest,n))}return!1}var Py=(e,t={})=>n=>{let r=xy({...n,processors:t});return Cy(e,r),Ty(r,e),My(r,e)},Fy=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=xy({...i??{},target:a,io:t,processors:n});return Cy(e,o),Ty(o,e),My(o,e)},Iy=(e,t,n)=>{(e[t]===void 0||n>e[t])&&(e[t]=n)},Ly=(e,t,n)=>{(e[t]===void 0||n<e[t])&&(e[t]=n)},Ry=(e,t)=>{Iy(e,`minimum`,t),Ly(e,`maximum`,t)},zy=(e,t)=>{e.multipleOf??=[],e.multipleOf.includes(t)||e.multipleOf.push(t)},By=(e,t)=>{e.patterns??=new Set,e.patterns.add(t)},Vy=(e,t)=>{e.mime=e.mime?e.mime.filter(e=>t.includes(e)):[...t]},Hy=(e,t)=>{e.format=t,t.includes(`int`)&&(e.isInt=!0)},Uy=(e,t)=>Iy(e,`minimum`,t.minimum),Wy=(e,t)=>Ly(e,`maximum`,t.maximum),Gy=e=>(t,n)=>{Hy(t,n.format);let[r,i]=e[n.format];Iy(t,`minimum`,r),Ly(t,`maximum`,i)},Ky={greater_than:(e,t)=>Iy(e,t.inclusive?`minimum`:`exclusiveMinimum`,t.value),less_than:(e,t)=>Ly(e,t.inclusive?`maximum`:`exclusiveMaximum`,t.value),multiple_of:(e,t)=>zy(e,t.value),number_format:Gy(em),bigint_format:Gy(tm),min_length:Uy,max_length:Wy,length_equals:(e,t)=>Ry(e,t.length),min_size:Uy,max_size:Wy,size_equals:(e,t)=>Ry(e,t.size),string_format:(e,t)=>{Hy(e,t.format),t.pattern&&By(e,t.pattern),(t.format===`base64`||t.format===`base64url`)&&(e.contentEncoding=t.format),(t.local||t.precision===-1)&&(e.laxFormat=!0)},mime_type:(e,t)=>Vy(e,t.mime)};function qy(e){let t={},n=e._zod.def,r=e._zod.traits.has(`$ZodCheck`)?[e,...n.checks??[]]:n.checks??[];for(let e of r)Ky[e._zod.def.check]?.(t,e._zod.def);let i=e._zod.bag;i.minimum!==void 0&&Iy(t,`minimum`,i.minimum),i.exclusiveMinimum!==void 0&&Iy(t,`exclusiveMinimum`,i.exclusiveMinimum),i.maximum!==void 0&&Ly(t,`maximum`,i.maximum),i.exclusiveMaximum!==void 0&&Ly(t,`exclusiveMaximum`,i.exclusiveMaximum),i.multipleOf!==void 0&&zy(t,i.multipleOf),i.format!==void 0&&(t.format??=i.format,i.format.includes(`int`)&&(t.isInt=!0)),i.mime&&Vy(t,i.mime);for(let e of i.patterns??[])By(t,e);return t}var Jy={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Yy=new Map([[t_,Lh],[r_,Rh]]),Xy=e=>Yy.get(e)??e,Zy=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l,laxFormat:u}=qy(e);if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Jy[s]??s,i.format===``&&delete i.format,(s===`time`||u)&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c].map(Xy);e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},Qy=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,multipleOf:s,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=qy(e);i.type=u?`integer`:`number`;let d=typeof l==`number`&&l>=(a??-1/0),f=typeof c==`number`&&c<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;if(d?p?(i.minimum=l,i.exclusiveMinimum=!0):i.exclusiveMinimum=l:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=c,i.exclusiveMaximum=!0):i.exclusiveMaximum=c:typeof o==`number`&&(i.maximum=o),s){let n=new Set;for(let a of s)Number.isFinite(a)&&a!==0?n.add(Math.abs(a)):Sy(e,t,i,r,`A multipleOf divisor of ${a} cannot be represented in JSON Schema`);let[a,...o]=n;a!==void 0&&(i.multipleOf=a),o.length&&(i.allOf=[...i.allOf??[],...o.map(e=>({multipleOf:e}))])}},$y=(e,t,n,r)=>{n.type=`boolean`},eb=(e,t,n,r)=>{n.not={}},tb=(e,t,n,r)=>{let i=e._zod.def,a=Ep(i.entries);if(a.length===0){n.not={};return}a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a},nb=(e,t,n,r)=>{let i=e._zod.def;if(i.values.length===0){n.not={};return}let a=[];for(let o of i.values)if(o===void 0){if(Sy(e,t,n,r,"Literal `undefined` cannot be represented in JSON Schema"))return}else if(typeof o==`bigint`){if(Sy(e,t,n,r,`BigInt literals cannot be represented in JSON Schema`))return;a.push(Number(o))}else a.push(o);if(a.length!==0){if(a.length===1){let e=a[0];n.type=e===null?`null`:typeof e,t.target===`draft-04`||t.target===`openapi-3.0`?n.enum=[e]:n.const=e}else a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),a.every(e=>typeof e==`boolean`)&&(n.type=`boolean`),a.every(e=>e===null)&&(n.type=`null`),n.enum=a}},rb=(e,t,n,r)=>{Sy(e,t,n,r,`Custom types cannot be represented in JSON Schema`)},ib=(e,t,n,r)=>{Sy(e,t,n,r,`Transforms cannot be represented in JSON Schema`)},ab=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=qy(e);typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Cy(a.element,t,{...r,path:[...r.path,`items`]})};function ob(e){let t=e._zod.def;return t.type===`pipe`&&t.in._zod.traits.has(`$ZodTransform`)?ob(t.out):t.type===`catch`?ob(t.innerType):e._zod.optin}var sb=(e,t,n,r)=>{let i=n,a=e._zod.def,o=a.shape;if(Object.getOwnPropertySymbols(o).length&&Sy(e,t,i,r,`Symbol keys cannot be represented in JSON Schema`))return;i.type=`object`,i.properties={};for(let e in o)Pp(i.properties,e,Cy(o[e],t,{...r,path:[...r.path,`properties`,e]}));let s=[];for(let e of Object.keys(o)){let n=a.shape[e];(t.io===`input`?ob(n)===void 0:n._zod.optout===void 0)&&s.push(e)}s.length>0&&(i.required=s),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Cy(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},cb=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Cy(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},lb=(e,t,n,r)=>{let i=e._zod.def,a=Cy(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Cy(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1,c=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]];n.allOf=c,t.intersections.push(c)};function ub(e,t,n){if(t.$ref){if(n.has(t))return t;n.add(t);let r=e.get(t)?.def;if(!r)return t;let i=ub(e,r,n);return i===r?t:i}for(let r of[`anyOf`,`oneOf`]){let i=t[r];if(!Array.isArray(i))continue;let a=i.map(t=>ub(e,t,n));a.some((e,t)=>e!==i[t])&&(t={...t,[r]:a})}let r=Array.isArray(t.type)?t.type:[t.type],i=!r.includes(`string`)&&r.some(e=>e===`number`||e===`integer`),a=t.enum??(t.const===void 0?void 0:[t.const]);if(!i&&!a?.some(e=>typeof e==`number`))return t;let{minimum:o,maximum:s,exclusiveMinimum:c,exclusiveMaximum:l,multipleOf:u,format:d,id:f,...p}=t;return p.enum?p.enum=p.enum.map(e=>typeof e==`number`?String(e):e):typeof p.const==`number`&&(p.const=String(p.const)),i?(p.type=`string`,a||(p.pattern=(r.includes(`number`)?Yh:Jh).source),p):p}var db=new WeakMap;function fb(e){let t=new Map;for(let n of e.seen.values())n.def&&!t.has(n.schema)&&t.set(n.schema,n);let n=new Map;for(let r of db.get(e)??[]){let i=e.seen.get(r),a=(i?.def??i?.schema)?.propertyNames;if(!a||a===!0||n.has(a))continue;let o=ub(t,a,new Set);o!==a&&n.set(a,o)}if(n.size)for(let t of e.seen.values())for(let e of[t.schema,t.def]){let t=e&&n.get(e.propertyNames);t&&(e.propertyNames=t)}}var pb=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=qy(o).patterns;if(a.mode===`loose`&&s&&s.size>0){let e=Cy(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)Pp(i.patternProperties,Xy(t).source,e)}else{if(t.target===`draft-07`||t.target===`draft-2020-12`){i.propertyNames=Cy(a.keyType,t,{...r,path:[...r.path,`propertyNames`]});let n=db.get(t);n||(n=[],db.set(t,n),t.deferred.push(()=>fb(t))),n.push(e)}i.additionalProperties=Cy(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]})}let c=o._zod.values,l=t.io===`input`&&ob(a.valueType)!==void 0;if(c&&!a.partial&&!l){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e.map(String))}},mb=(e,t,n,r)=>{let i=e._zod.def,a=Cy(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},hb=(e,t,n,r)=>{let i=e._zod.def;Cy(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},gb=Symbol();function _b(e,t,n,r,i){let a=!1,o=JSON.stringify(e,(e,t)=>typeof t==`bigint`?(a=!0,null):t);return a?(Sy(t,n,r,i,`BigInt defaults cannot be represented in JSON Schema`),gb):JSON.parse(o)}var vb=(e,t,n,r)=>{let i=e._zod.def;Cy(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o=_b(i.defaultValue,e,t,n,r);o!==gb&&(n.default=o)},yb=(e,t,n,r)=>{let i=e._zod.def;Cy(i.innerType,t,r);let a=t.seen.get(e);if(a.ref=i.innerType,t.io!==`input`)return;let o=_b(i.defaultValue,e,t,n,r);o!==gb&&(n._prefault=o)},bb=(e,t,n,r)=>{let i=e._zod.def;Cy(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{Sy(e,t,n,r,`Dynamic catch values are not supported in JSON Schema`);return}n.default=o},xb=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Cy(o,t,r);let s=t.seen.get(e);s.ref=o},Sb=(e,t,n,r)=>{let i=e._zod.def;Cy(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},Cb=(e,t,n,r)=>{let i=e._zod.def;Cy(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},wb=new WeakSet([Object.prototype,Error.prototype]);function Tb(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var Eb=X(`ZodError`,(e,t)=>{Ym.init(e,t),e.name=`ZodError`;let n=Object.getPrototypeOf(e);wb.has(n)||(wb.add(n),Tb(n,`format`,e=>t=>Qm(e,t)),Tb(n,`flatten`,e=>t=>Zm(e,t)),Tb(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Op,2)}),Tb(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Op,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},void 0,{Parent:Error}),Db=nh(Eb),Ob=rh(Eb),kb=ih(Eb),Ab=oh(Eb),jb=fh(Eb),Mb=ph(Eb),Nb=mh(Eb),Pb=hh(Eb),Fb=gh(Eb),Ib=_h(Eb),Lb=vh(Eb),Rb=yh(Eb);function zb(){Vm.localeError||Hm(fv())}function Bb(){Vm.memoizer||Hm({memoizer:lv()})}var Vb=X(`ZodType`,(e,t)=>(zb(),yg.init(e,t),e.def=t,e.type=t.type,e),{check(...e){let t=this.def;return this.clone(Vp(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return Zp(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(aS(e,t))},superRefine(e,t){return this.check(oS(e,t))},overwrite(e){return this.check(uy(e))},optional(){return Vx(this)},exactOptional(){return Ux(this)},nullable(){return Gx(this)},nullish(){return Vx(Gx(this))},nonoptional(e){return Zx(this,e)},array(){return Ex(this)},or(e){return kx([this,e])},and(e){return jx(this,e)},transform(e){return tS(this,zx(e))},default(e){return qx(this,e)},prefault(e){return Yx(this,e)},catch(e){return $x(this,e)},pipe(e){return tS(this,e)},readonly(){return rS(this)},describe(e){let t=this.clone();return gv.add(t,{description:e}),t},meta(...e){if(e.length===0)return gv.get(this);let t=this.clone();return gv.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e,...t){return t.length===0?e(this):e(this,...t)},get"~standard"(){return wm(this,`~standard`,{...Sg(this),jsonSchema:{input:Fy(this,`input`),output:Fy(this,`output`)}})},set"~standard"(e){Cm(this,`~standard`,e)},parse:function e(t,n){return Db(this,t,n,{callee:e})},parseAsync:async function e(t,n){return await Ob(this,t,n,{callee:e})},safeParse(e,t){return kb(this,e,t)},async safeParseAsync(e,t){return Ab(this,e,t)},get spa(){return this?.safeParseAsync},set spa(e){Cm(this,`spa`,e)},validate(e,t){return lh(this,e,t)},validateAsync(e,t){return dh(this,e,t)},encode:function e(t,n){return jb(this,t,n,{callee:e})},decode:function e(t,n){return Mb(this,t,n,{callee:e})},encodeAsync:async function e(t,n){return await Nb(this,t,n,{callee:e})},decodeAsync:async function e(t,n){return await Pb(this,t,n,{callee:e})},safeEncode(e,t){return Fb(this,e,t)},safeDecode(e,t){return Ib(this,e,t)},async safeEncodeAsync(e,t){return Lb(this,e,t)},async safeDecodeAsync(e,t){return Rb(this,e,t)},toJSONSchema(e){return Py(this,{})(e)},get description(){return gv.get(this)?.description},get _def(){return this._zod.def}}),Hb=X(`_ZodString`,(e,t)=>{Cg.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Zy(e,t,n,r)},Tm({format:e=>qy(e).format??null,minLength:e=>qy(e).minimum??null,maxLength:e=>qy(e).maximum??null},{regex(...e){return this.check(iy(...e))},includes(...e){return this.check(sy(...e))},startsWith(...e){return this.check(cy(...e))},endsWith(...e){return this.check(ly(...e))},min(...e){return this.check(ny(...e))},max(...e){return this.check(ty(...e))},length(...e){return this.check(ry(...e))},nonempty(...e){return this.check(ny(1,...e))},lowercase(e){return this.check(ay(e))},uppercase(e){return this.check(oy(e))},trim(){return this.check(fy())},normalize(...e){return this.check(dy(...e))},toLowerCase(){return this.check(py())},toUpperCase(){return this.check(my())},slugify(){return this.check(hy())}})),Ub=X(`ZodString`,(e,t)=>{Cg.init(e,t),Hb.init(e,t)},{email(e){return this.check(yv(Xb,e))},url(e){return this.check(Tv($b,e))},jwt(e){return this.check(Bv(mx,e))},emoji(e){return this.check(Ev(ex,e))},guid(e){return this.check(bv(Zb,e))},uuid(e){return this.check(xv(Qb,e))},uuidv4(e){return this.check(Sv(Qb,e))},uuidv6(e){return this.check(Cv(Qb,e))},uuidv7(e){return this.check(wv(Qb,e))},nanoid(e){return this.check(Dv(tx,e))},cuid(e){return this.check(Ov(nx,e))},cuid2(e){return this.check(kv(rx,e))},ulid(e){return this.check(Av(ix,e))},base64(e){return this.check(Lv(dx,e))},base64url(e){return this.check(Rv(fx,e))},xid(e){return this.check(jv(ax,e))},ksuid(e){return this.check(Mv(ox,e))},ipv4(e){return this.check(Nv(sx,e))},ipv6(e){return this.check(Pv(cx,e))},cidrv4(e){return this.check(Fv(lx,e))},cidrv6(e){return this.check(Iv(ux,e))},e164(e){return this.check(zv(px,e))},datetime(e){return this.check(Vv(Kb,e))},date(e){return this.check(Hv(qb,e))},time(e){return this.check(Uv(Jb,e))},duration(e){return this.check(Wv(Yb,e))}});function Wb(e){return vv(Ub,e)}var Gb=X(`ZodStringFormat`,(e,t)=>{wg.init(e,t),Hb.init(e,t)}),Kb=X(`ZodISODateTime`,(e,t)=>{Ug.init(e,t),Gb.init(e,t)}),qb=X(`ZodISODate`,(e,t)=>{Wg.init(e,t),Gb.init(e,t)}),Jb=X(`ZodISOTime`,(e,t)=>{Gg.init(e,t),Gb.init(e,t)}),Yb=X(`ZodISODuration`,(e,t)=>{Kg.init(e,t),Gb.init(e,t)}),Xb=X(`ZodEmail`,(e,t)=>{Dg.init(e,t),Gb.init(e,t)}),Zb=X(`ZodGUID`,(e,t)=>{Tg.init(e,t),Gb.init(e,t)}),Qb=X(`ZodUUID`,(e,t)=>{Eg.init(e,t),Gb.init(e,t)}),$b=X(`ZodURL`,(e,t)=>{Fg.init(e,t),Gb.init(e,t)}),ex=X(`ZodEmoji`,(e,t)=>{Ig.init(e,t),Gb.init(e,t)}),tx=X(`ZodNanoID`,(e,t)=>{Lg.init(e,t),Gb.init(e,t)}),nx=X(`ZodCUID`,(e,t)=>{Rg.init(e,t),Gb.init(e,t)}),rx=X(`ZodCUID2`,(e,t)=>{zg.init(e,t),Gb.init(e,t)}),ix=X(`ZodULID`,(e,t)=>{Bg.init(e,t),Gb.init(e,t)}),ax=X(`ZodXID`,(e,t)=>{Vg.init(e,t),Gb.init(e,t)}),ox=X(`ZodKSUID`,(e,t)=>{Hg.init(e,t),Gb.init(e,t)}),sx=X(`ZodIPv4`,(e,t)=>{qg.init(e,t),Gb.init(e,t)}),cx=X(`ZodIPv6`,(e,t)=>{Xg.init(e,t),Gb.init(e,t)}),lx=X(`ZodCIDRv4`,(e,t)=>{Zg.init(e,t),Gb.init(e,t)}),ux=X(`ZodCIDRv6`,(e,t)=>{$g.init(e,t),Gb.init(e,t)}),dx=X(`ZodBase64`,(e,t)=>{n_.init(e,t),Gb.init(e,t)}),fx=X(`ZodBase64URL`,(e,t)=>{a_.init(e,t),Gb.init(e,t)}),px=X(`ZodE164`,(e,t)=>{o_.init(e,t),Gb.init(e,t)}),mx=X(`ZodJWT`,(e,t)=>{c_.init(e,t),Gb.init(e,t)}),hx=X(`ZodNumber`,(e,t)=>{l_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Qy(e,t,n,r),e.isFinite=!0},Tm({minValue:e=>{let{minimum:t,exclusiveMinimum:n}=qy(e);return Math.max(t??-1/0,n??-1/0)},maxValue:e=>{let{maximum:t,exclusiveMaximum:n}=qy(e);return Math.min(t??1/0,n??1/0)},isInt:e=>{let{isInt:t,multipleOf:n}=qy(e);return!!t||!!n?.some(Number.isSafeInteger)},format:e=>qy(e).format??null},{gt(e,t){return this.check(Qv(e,t))},gte(e,t){return this.check($v(e,t))},min(e,t){return this.check($v(e,t))},lt(e,t){return this.check(Xv(e,t))},lte(e,t){return this.check(Zv(e,t))},max(e,t){return this.check(Zv(e,t))},int(e){return this.check(vx(e))},safe(e){return this.check(vx(e))},positive(e){return this.check(Qv(0,e))},nonnegative(e){return this.check($v(0,e))},negative(e){return this.check(Xv(0,e))},nonpositive(e){return this.check(Zv(0,e))},multipleOf(e,t){return this.check(ey(e,t))},step(e,t){return this.check(ey(e,t))},finite(){return this}}));function gx(e){return Gv(hx,e)}var _x=X(`ZodNumberFormat`,(e,t)=>{u_.init(e,t),hx.init(e,t)});function vx(e){return Kv(_x,e)}var yx=X(`ZodBoolean`,(e,t)=>{d_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$y(e,t,n,r)});function bx(e){return qv(yx,e)}var xx=X(`ZodUnknown`,(e,t)=>{f_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function Sx(){return Jv(xx)}var Cx=X(`ZodNever`,(e,t)=>{p_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>eb(e,t,n,r)});function wx(e){return Yv(Cx,e)}var Tx=X(`ZodArray`,(e,t)=>{Bb(),h_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ab(e,t,n,r),e.element=t.element},{min(e,t){return this.check(ny(e,t))},nonempty(e){return this.check(ny(1,e))},max(e,t){return this.check(ty(e,t))},length(e,t){return this.check(ry(e,t))},unwrap(){return this.element}});function Ex(e,t){return gy(Tx,e,t)}var Dx=X(`ZodObject`,(e,t)=>{Bb(),x_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>sb(e,t,n,r),Mm(e,`shape`,e=>e._zod.def.shape,!1)},{keyof(){return Fx(Object.keys(this._zod.def.shape))},catchall(e){return this.clone(Vp(this._zod.def,{catchall:e}))},passthrough(){return this.clone(Vp(this._zod.def,{catchall:Sx()}))},loose(){return this.clone(Vp(this._zod.def,{catchall:Sx()}))},strict(){return this.clone(Vp(this._zod.def,{catchall:wx()}))},strip(){return this.clone(Vp(this._zod.def,{catchall:void 0}))},extend(e){return am(this,e)},safeExtend(e){return sm(this,e)},merge(e){return cm(this,e)},pick(e){return nm(this,e)},omit(e){return im(this,e)},partial(...e){return lm(Bx,this,e[0])},exactPartial(...e){return lm(Hx,this,e[0],`exactPartial`)},required(...e){return um(Xx,this,e[0])}});function Z(e,t){return new Dx({type:`object`,shape:e,catchall:wx(),...Y(t)})}var Ox=X(`ZodUnion`,(e,t)=>{C_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>cb(e,t,n,r),e.options=t.options});function kx(e,t){return new Ox({type:`union`,options:e,...Y(t)})}var Ax=X(`ZodIntersection`,(e,t)=>{w_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>lb(e,t,n,r)});function jx(e,t){return new Ax({type:`intersection`,left:e,right:t})}var Mx=X(`ZodRecord`,(e,t)=>{Bb(),D_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>pb(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function Nx(e,t,n){return!t||!t._zod?new Mx({type:`record`,keyType:Wb(),valueType:e,...Y(t)}):new Mx({type:`record`,keyType:e,valueType:t,...Y(n)})}var Px=X(`ZodEnum`,(e,t)=>{O_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>tb(e,t,n,r),e.enum=t.entries,e.options=[...e._zod.values];let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new Px({...t,checks:[],...Y(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new Px({...t,checks:[],...Y(r),entries:i})}});function Fx(e,t){return new Px({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...Y(t)})}var Ix=X(`ZodLiteral`,(e,t)=>{k_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>nb(e,t,n,r),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});function Lx(e,t){return new Ix({type:`literal`,values:Array.isArray(e)?e:[e],...Y(t)})}var Rx=X(`ZodTransform`,(e,t)=>{Bb(),A_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ib(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Bm(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(xm(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,`input`in t||(t.input=n.value),t.inst??=e,n.issues.push(xm(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n)):(n.value=i,n)}});function zx(e){return new Rx({type:`transform`,transform:e})}var Bx=X(`ZodOptional`,(e,t)=>{M_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Cb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Vx(e){return new Bx({type:`optional`,innerType:e})}var Hx=X(`ZodExactOptional`,(e,t)=>{N_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Cb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ux(e){return new Hx({type:`optional`,innerType:e})}var Wx=X(`ZodNullable`,(e,t)=>{P_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>mb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Gx(e){return new Wx({type:`nullable`,innerType:e})}var Kx=X(`ZodDefault`,(e,t)=>{F_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>vb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function qx(e,t){return new Kx({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():Jp(t)}})}var Jx=X(`ZodPrefault`,(e,t)=>{L_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>yb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Yx(e,t){return new Jx({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():Jp(t)}})}var Xx=X(`ZodNonOptional`,(e,t)=>{R_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>hb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Zx(e,t){return new Xx({type:`nonoptional`,innerType:e,...Y(t)})}var Qx=X(`ZodCatch`,(e,t)=>{V_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>bb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function $x(e,t){return new Qx({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:Pm(t)})}var eS=X(`ZodPipe`,(e,t)=>{H_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>xb(e,t,n,r),e.in=t.in,e.out=t.out});function tS(e,t){return new eS({type:`pipe`,in:e,out:t})}var nS=X(`ZodReadonly`,(e,t)=>{W_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Sb(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function rS(e){return new nS({type:`readonly`,innerType:e})}var iS=X(`ZodCustom`,(e,t)=>{K_.init(e,t),Vb.init(e,t),e._zod.processJSONSchema=(t,n,r)=>rb(e,t,n,r)});function aS(e,t={}){return _y(iS,e,t)}function oS(e,t){return vy(e,t)}var sS={years:15,startYear:2026,crews:2,start:{treasury:40,debt:20,grant:4,waterFees:3,waterSubsidy:5,aquifer:80,reservoir:60,reservoirCap:80,fuel:55,soil:70,riverQuality:70,irrigationEfficiency:1,fertiliser:`high`,pumping:`free`,districts:{highlands:{health:75,pop:5},farm:{health:65,pop:25},oldtown:{health:60,pop:60},energy:{health:55,pop:10}},groups:{oldtown:58,farmers:55,workers:56,youth:52},world:{grainPrice:100,gasPrice:100,sky:100},kestra:{reputation:60},outflowMin:15},weather:{rain:{wet:1.15,normal:1,dry:.8,drought:.6},chance:{wet:20,normal:50,dry:22,drought:8},heatwave:10,pressure:{skyStep:10,shift:2,heatwave:2},skyGone:{chance:{wet:10,normal:20,dry:35,drought:35},heatwave:50},noDroughtRepeatUntil:2,fireDanger:{wet:.02,normal:.08,dry:.2,drought:.35},fireDangerHeat:.1},world:{priceMin:50,priceMax:250,grainWalk:5,gasWalk:8,grainShock:{chance:6,size:30,from:2},gasShock:{chance:10,size:40,from:2},shockDecay:.5},ageing:{stressAbove:.9,stress:.5,weather:.5},failure:{below:35,perPoint:.018,patch:20},repair:{amount:35,below:80},water:{surface:60,inflowPerCap:.125,release:10,damWeakBelow:35,damWeakCap:.5,pumping:{free:20,meteredFactor:.5},pumpFullAt:50,pumpDrain:.9,recharge:8,pondsRecharge:4,forestRecharge:3,reclaimed:8,cityNeed:16,cityPopRef:60,subsidyEndedFactor:.9,leak:[{base:.05,wear:.35},{base:.04,wear:.2}],treatment:{capacity:[28,36],worn:.6},energyYard:10,energyYardHeat:1.3,farms:50,farmsDry:1.2,saltyBelow:30,saltyHealth:3,saltyMax:12,dryBelow:15,dryFarmCap:.6,meterCity:.7,siltPerYear:.8,forestSilt:.4},sewage:{wasteShare:.8,storm:{wet:8,normal:2,dry:0,drought:0},sewerCap:20,worn:.5,stormTank:6,treated:[.5,.8,.95],weakBelow:35,weakFactor:.6,floodOverflow:6.5,floodChance:.3,river:{base:100,untreated:2.5,fertiliser:10,maxMove:5},streetFloodAt:4,streetHealth:2,streetOldtown:4,seenAt:1},power:{dam:20,coal:{cap:30,worn:.7,fuel:.05},gas:{cap:25,fuel:.08,emissions:.06,air:1,health:.3},convertingFactor:.5,gridBuy:{max:30,price:.15},demand:{oldtown:46,oldtownPopRef:60,energy:28,pumps:.4,plants:4,sewage:[0,2,3],leakPer:5},heat:1.15,heatCut:.05,gridCap:{base:95,worn:.8,bigger:25},emissions:{coal:.12,grid:.06},airCoal:2,blockedSeenAt:1,kestraLine:10},nuclear:{units:20,price:.16,years:10,exitYears:3},fire:{growth:5,wetGrowth:3,forestGrowth:2,max:100,afterBurn:.5,firebreaks:.5,station:.6,highlands:.4,forestLoss:.3,forestRegrow:3,reservoirLoss:.05,health:.2,fuelAfter:10,housesAbove:60,housesOldtown:8,housesMoney:6,youth:4},farm:{base:70,soilRef:70,fertiliser:{high:1,mixed:.9,low:.6},income:.1,soil:{irrigation:-2,high:-1,mixed:1},foodPerPerson:.7},pumpingPolicy:{fees:3,meteredFarmers:-8,freeFarmers:4},money:{tax:{oldtown:.3,energy:.2,farm:.05},yard:{base:20,coal:10,gas:8},interest:.05,interestHigh:.08,highDebt:80,meterBase:30,meterTreasury:.5,meterDebt:.5,meterNet:1,netSmoothing:.5},health:{coal:.6,heat:12,heatOne:6,heatBoth:3,untreated:.5,clinic:5},land:{maxMove:5,highlands:{base:45,river:.3,silt:9,siltRef:80,forestBelt:10},farm:{base:9,soil:.5,water:30,runoff:5,dry:10},oldtown:{base:21,health:.25,water:.2,crowdAbove:62,crowd:1,failure:3,park:3},energy:{base:33,air:.2,jobs:10,plant:5}},people:{farmHealthBelow:45,farmWaterBelow:.7,move:2,moveBack:1,minPop:2},sky:{world:1.5,aurel:.3},groups:{maxMove:8,placeWeight:.8,youthWeight:.2,oldtownShare:.75,oldtown:{base:4.5,water:.2,health:.15,power:.2,subsidy:1,grain:.15,imports:.1,heat:5,crowdAbove:62,crowd:1},farmers:{base:21,water:30,soilRef:50,soil:.4,metered:3,grainSwing:.05,dry:8},workers:{base:18,output:1,power:.1,gas:.1},youth:{base:44,air:.3,coal:.2,debtAbove:60,debt:.1,sky:.15}},kestra:{riverLow:50,riverLowRep:-4,riverHigh:70,riverHighRep:2,lowFlowRep:-5,collabMin:40,cheapAt:70,cheapFactor:.75,angryBelow:20,blockChance:.3,blockCost:5},national:{grantCutFactor:.5},elections:{years:[5,10,15],win:50,lose:45,snapWin:45,outYears:2},collapse:{water:30,power:30,mood:20,years:2},triggers:{year1:{from:1,to:1,weight:100},storm:{from:2,to:15,weight:4},fireSeason:{from:2,to:15,weight:4,fuelAtLeast:60},heatDome:{from:2,to:15,weight:5,powerBelow:90},promise:{from:3,to:15,weight:1},grant:{from:2,to:6,weight:1.5},dryYear:{from:3,to:15,weight:2.5},dam:{from:3,to:15,weight:1.5,powerBelow:80},windfall:{from:3,to:7,weight:1},favour:{from:2,to:4,weight:1.5}},lens:{samples:5,likelyRuns:3,spreadFull:30},score:{landScale:1},handover:{facts:4,systemFacts:{water:[`W11`,`W14`],sewage:[`W15`],power:[`E12`,`E13`],fire:[`CL12`],money:[`P23`],people:[`C4`],neighbour:[`W16`],national:[`P23`],heat:[`C20`,`CL12`]},questions:{water:`When did you first see the ground water falling? When did you act?`,sewage:`Who pays when the sewers overflow: the old town, the river, or Kestra?`,power:`Which power choice would you make again, knowing when it paid off?`,fire:`Why is it so hard to pay for a fire that never happens?`,money:`Which cost did you push to later? Who will pay it?`,people:`Who moved in your years, and why did they move?`,neighbour:`When did helping Kestra help Aurel too?`,national:`Is a promise that binds the next mayor fair? Would you want one?`,repairs:`Which old pipe or plant did you leave for the next mayor? Why?`}}},cS=[{id:`mains`,label:`Water mains`,district:`oldtown`,weatherStress:!0,work:`last renewed`,repairCost:6,levels:[{decay:3,upkeep:1},{decay:1.5,upkeep:1}],start:{level:1,condition:38,lastWork:1986},failure:{short:`A water main bursts`,text:`A water main burst under Market Street.`,effect:{delta:{"mods.waterHit":15,"districts.oldtown.health":-4}}}},{id:`sewers`,label:`Sewers`,district:`oldtown`,weatherStress:!0,work:`last rebuilt`,repairCost:5,levels:[{decay:3,upkeep:.5}],start:{level:1,condition:50,lastWork:1979},failure:{short:`A sewer collapses`,text:`A sewer collapsed under the old town, and sewage spilled into the streets and the river.`,effect:{delta:{"mods.overflowExtra":8,"mods.healthHit":6}}}},{id:`treatment`,label:`Water treatment plant`,district:`energy`,work:`last upgraded`,repairCost:5,levels:[{decay:2,upkeep:1},{decay:1.5,upkeep:1.5}],start:{level:1,condition:60,lastWork:2004},failure:{short:`A boil-water notice`,text:`Dirty water got through the treatment plant. Everyone has to boil their water.`,effect:{delta:{"mods.healthHit":8,"groups.oldtown":-6}}}},{id:`sewage`,label:`Sewage plant`,district:`energy`,districtHill:`farm`,work:`last upgraded`,repairCost:5,levels:[{decay:2,upkeep:1},{decay:2,upkeep:2},{decay:2,upkeep:3}],start:{level:1,condition:60,lastWork:1998},failure:{short:`The sewage plant breaks down`,text:`The sewage plant broke down. Nothing was treated this year.`,effect:{delta:{"mods.plantDown":1}}},flood:{short:`The sewage plant floods`,text:`Storm water flooded the sewage plant at the river mouth, and nothing was treated this year. It was put there because the land was cheap and low.`}},{id:`coal`,label:`Coal plant`,district:`energy`,work:`built`,repairCost:6,levels:[{decay:2,upkeep:2}],start:{level:1,condition:70,lastWork:2012},failure:{short:`A boiler fails at the coal plant`,text:`A boiler failed at the coal plant. It made no power this year.`,effect:{delta:{"mods.coalDown":1}}}},{id:`grid`,label:`Substation and grid`,district:`energy`,work:`last upgraded`,repairCost:6,levels:[{decay:2,upkeep:.5},{decay:1,upkeep:1.5}],start:{level:1,condition:60,lastWork:2001},failure:{short:`Fire at the substation`,text:`Fire broke out at the substation. The grid carried far less power this year.`,effect:{delta:{"mods.gridHit":30}}}},{id:`dam`,label:`Dam`,district:`highlands`,work:`built`,repairCost:8,levels:[{decay:1,upkeep:.5}],start:{level:1,condition:75,lastWork:1968},failure:{short:`Cracks are found in the dam`,text:`Engineers found cracks in the dam. The reservoir must stay half empty until it is repaired.`,effect:{delta:{"mods.damCracked":1}}}},{id:`wind`,label:`Wind turbines`,district:`energy`,work:`built`,repairCost:3,levels:[{decay:2,upkeep:.3,output:5}],start:{level:1,condition:80,lastWork:2019}},{id:`solar`,label:`Solar panels`,district:`energy`,work:`built`,repairCost:2,levels:[{decay:1,upkeep:.2,output:5}],start:{level:1,condition:85,lastWork:2022}},{id:`solarPark`,label:`Solar field`,district:`energy`,work:`built`,repairCost:2,levels:[{decay:1,upkeep:.3,output:8},{decay:1,upkeep:.6,output:12}]},{id:`drip`,label:`Drip irrigation`,district:`farm`,work:`laid`,repairCost:2,levels:[{decay:1,upkeep:1}]},{id:`forestBelt`,label:`Forest belt`,district:`highlands`,work:`planted`,repairCost:1,levels:[{decay:0,upkeep:.5}]},{id:`firebreaks`,label:`Firebreaks`,district:`highlands`,work:`cut`,repairCost:2,levels:[{decay:2,upkeep:.5}]},{id:`ponds`,label:`Recharge ponds`,district:`farm`,work:`dug`,repairCost:2,levels:[{decay:1,upkeep:.5}]},{id:`drains`,label:`Field drains`,district:`farm`,work:`laid`,repairCost:2,levels:[{decay:1,upkeep:.5}]},{id:`stormTank`,label:`Storm tank`,district:`oldtown`,work:`built`,repairCost:3,levels:[{decay:1,upkeep:.5}]},{id:`coolRoofs`,label:`Cool roofs and trees`,district:`oldtown`,work:`built`,repairCost:2,levels:[{decay:1,upkeep:.3}]},{id:`clinic`,label:`Clinic and cooling centre`,district:`oldtown`,work:`built`,repairCost:3,levels:[{decay:1,upkeep:1}]},{id:`fireStation`,label:`Fire station`,district:`oldtown`,work:`built`,repairCost:3,levels:[{decay:1,upkeep:1.5}]}],lS=JSON.parse(`[{"id":"repair","label":"Repair","verb":"Repair","district":"oldtown","sub":"Patch up something old. It won't last for ever.","kind":"repair","cost":0,"crewYears":1,"readyIn":1,"repeatable":true,"earmark":true,"faces":[{"who":"health","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the repair is done","cause":"you repaired it"},{"id":"renewMains","label":"Renew the water mains","verb":"Upgrade","district":"oldtown","sub":"New pipes lose far less water. Two years of digging up the streets.","kind":"upgrade","structure":"mains","cost":18,"crewYears":2,"readyIn":2,"earmark":true,"faces":[{"who":"water","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the new water mains are in","cause":"you renewed the water mains","doneText":"The new water mains are in. Far less water leaks away."},{"id":"sewageUp","label":"Upgrade the sewage plant","verb":"Upgrade","district":"energy","sub":"Cleaner water back into the river. Kestra will notice.","kind":"upgrade","structure":"sewage","cost":14,"crewYears":2,"readyIn":2,"earmark":true,"levels":[{"level":3,"cost":16,"costHill":10,"crewYears":2,"readyIn":2,"sub":"The best treatment there is. Clean enough to water the fields."}],"faces":[{"who":"kestra","good":true},{"who":"health","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the sewage plant upgrade is finished","cause":"you upgraded the sewage plant","doneText":"The sewage plant upgrade is finished. The river runs cleaner."},{"id":"moveSewage","label":"Move the sewage plant uphill","verb":"Relocate","district":"farm","sub":"A new plant on high ground that never floods. The old riverside site becomes a park. Farmers won't like the neighbour.","kind":"relocate","structure":"sewage","cost":22,"crewYears":3,"readyIn":3,"earmark":true,"faces":[{"who":"oldtown","good":true},{"who":"health","good":true},{"who":"farmers","good":false},{"who":"money","good":false}],"now":{"delta":{"groups.farmers":-4}},"done":{"delta":{"groups.oldtown":3,"mods.targetOldtown":3}},"readyHint":"the new sewage plant on the hill opens","cause":"you moved the sewage plant uphill","doneText":"The new sewage plant on the hill is open. The old riverside site is becoming a park."},{"id":"drip","label":"Drip irrigation","verb":"Build","district":"farm","sub":"Farms need a quarter less water. It takes a year to settle in.","kind":"build","structure":"drip","cost":10,"crewYears":1,"readyIn":2,"faces":[{"who":"water","good":true},{"who":"farmers","good":true},{"who":"money","good":false}],"now":{},"done":{"set":{"irrigationEfficiency":0.75}},"readyHint":"the drip lines are working","cause":"you laid drip irrigation","doneText":"The drip lines are working. The farms need a quarter less water."},{"id":"solarPark","label":"Solar field","verb":"Build","district":"energy","sub":"Clean power with no fuel bill.","kind":"build","structure":"solarPark","cost":9,"crewYears":1,"readyIn":1,"faces":[{"who":"sky","good":true},{"who":"youth","good":true},{"who":"power","good":true}],"now":{},"done":{},"readyHint":"the solar field makes power","cause":"you built a solar field","doneText":"The new solar field is making power."},{"id":"batteries","label":"Add batteries to the solar field","verb":"Upgrade","district":"energy","sub":"More solar power, and less strain on the grid in a heatwave.","kind":"upgrade","structure":"solarPark","cost":10,"crewYears":1,"readyIn":1,"faces":[{"who":"power","good":true},{"who":"sky","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the solar batteries are ready","cause":"you added batteries to the solar field","doneText":"The solar batteries are charged and ready for the next heatwave."},{"id":"forestBelt","label":"Plant a forest belt","verb":"Build","district":"highlands","sub":"More rain soaks into the ground. The trees take three years to grow, and they can burn.","kind":"build","structure":"forestBelt","cost":6,"crewYears":1,"readyIn":3,"faces":[{"who":"water","good":true},{"who":"youth","good":true}],"now":{},"done":{},"readyHint":"the forest belt has grown","cause":"you planted a forest belt","doneText":"The forest belt has grown. More rain soaks into the ground."},{"id":"firebreaks","label":"Cut firebreaks","verb":"Build","district":"highlands","sub":"Cleared strips that stop a fire spreading. Fires do half the damage.","kind":"build","structure":"firebreaks","cost":7,"crewYears":1,"readyIn":1,"faces":[{"who":"health","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the firebreaks are cut","cause":"you cut firebreaks","doneText":"The firebreaks are cut. A fire would now do half the damage."},{"id":"burn","label":"Controlled burn","verb":"Burn","district":"highlands","sub":"Burn off dead wood now, while it's safe. Smoky and unpopular.","kind":"burn","cost":2,"crewYears":1,"readyIn":1,"repeatable":true,"faces":[{"who":"oldtown","good":false},{"who":"health","good":false}],"now":{},"done":{"delta":{"fuel":-25,"mods.healthHit":3,"groups.oldtown":-2}},"readyHint":"the dead wood is burned off","cause":"you burned off the dead wood","doneText":"Crews burned off dead wood in the hills. The smoke drifted over the town."},{"id":"retireCoal","label":"Retire the coal plant","verb":"Retire","district":"energy","sub":"Cleaner air and no fuel bill. Jobs go, and the power must come from somewhere else.","kind":"retire","structure":"coal","cost":4,"crewYears":1,"readyIn":1,"faces":[{"who":"sky","good":true},{"who":"youth","good":true},{"who":"workers","good":false},{"who":"power","good":false}],"now":{},"done":{"delta":{"groups.workers":-12,"districts.energy.health":-10}},"readyHint":"the coal plant closes","cause":"you retired the coal plant","doneText":"The coal plant has shut down. The chimney is cold."},{"id":"convertCoal","label":"Convert the coal plant to gas","verb":"Convert","district":"energy","sub":"Half the smoke. It runs at half power while it's rebuilt, then pays world gas prices.","kind":"convert","structure":"coal","cost":14,"crewYears":2,"readyIn":2,"faces":[{"who":"sky","good":true},{"who":"workers","good":false},{"who":"money","good":false}],"now":{"delta":{"groups.workers":-4}},"done":{},"readyHint":"the plant burns gas","cause":"you converted the coal plant to gas","doneText":"The old coal plant now burns gas. The air is clearer."},{"id":"nuclear","label":"Sign a nuclear power contract","verb":"Sign","district":"energy","sub":"20 units of power a year for 10 years at a fixed price, from next year. You pay for all of it, needed or not, and so will the next mayor.","kind":"contract","cost":2,"crewYears":1,"readyIn":2,"faces":[{"who":"sky","good":true},{"who":"power","good":true},{"who":"youth","good":true},{"who":"oldtown","good":false},{"who":"money","good":false}],"now":{"delta":{"groups.oldtown":-3,"groups.youth":3}},"done":{},"readyHint":"nuclear power starts arriving","cause":"you signed the nuclear power contract","doneText":"Nuclear power is arriving on the new line into the substation."},{"id":"pumping","label":"Meter farm pumping","altLabel":"Let farmers pump freely again","verb":"Policy","district":"farm","sub":"Farmers pay for what they pump. Half the pumping, and fees of 3 a year.","altSub":"Farmers can pump as much as they like. The fees stop.","kind":"policy","cost":0,"crewYears":1,"readyIn":1,"repeatable":true,"faces":[{"who":"water","good":true},{"who":"money","good":true},{"who":"farmers","good":false}],"now":{},"done":{},"readyHint":"the new pumping rules start","cause":"you changed the pumping rules","doneText":"The new pumping rules are in force."},{"id":"ponds","label":"Dig recharge ponds","verb":"Build","district":"farm","sub":"Rain soaks back into the ground water.","kind":"build","structure":"ponds","cost":8,"crewYears":1,"readyIn":1,"faces":[{"who":"water","good":true},{"who":"farmers","good":true}],"now":{},"done":{},"readyHint":"the recharge ponds are dug","cause":"you dug recharge ponds","doneText":"The recharge ponds are filling. The ground water will thank you.","unlock":"aquifer<60","unlockWhen":"when the ground water starts to fall","unlockMessage":"The ground water is falling. Recharge ponds would help it fill back up."},{"id":"drains","label":"Lay field drains","verb":"Build","district":"farm","sub":"Stops salt building up in the fields.","kind":"build","structure":"drains","cost":7,"crewYears":1,"readyIn":1,"faces":[{"who":"farmers","good":true}],"now":{},"done":{},"readyHint":"the field drains are in","cause":"you laid field drains","doneText":"The field drains are in. The salt has stopped building up.","unlock":"soil<62","unlockWhen":"when the fields start to salt","unlockMessage":"The fields are getting salty. Field drains would stop it."},{"id":"stormTank","label":"Build a storm tank","verb":"Build","district":"oldtown","sub":"Holds storm water until the sewers can take it.","kind":"build","structure":"stormTank","cost":10,"crewYears":1,"readyIn":1,"faces":[{"who":"health","good":true},{"who":"kestra","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the storm tank is ready","cause":"you built a storm tank","doneText":"The storm tank is ready. Heavy rain has somewhere to go.","unlock":"seen.overflow","unlockWhen":"after the first sewer overflow","unlockMessage":"The sewers overflowed into the river. A storm tank would hold the extra water."},{"id":"substation","label":"Build a bigger substation","verb":"Upgrade","district":"energy","sub":"The grid can carry a quarter more power. Three years of work.","kind":"upgrade","structure":"grid","cost":16,"crewYears":3,"readyIn":3,"faces":[{"who":"power","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the bigger substation is switched on","cause":"you built a bigger substation","doneText":"The bigger substation is switched on. The grid can carry more power.","unlock":"seen.gridBlocked","unlockWhen":"when power is lost at the grid limit","unlockMessage":"There was power to spare, but the grid couldn't carry it. A bigger substation would."},{"id":"coolRoofs","label":"Cool roofs and street trees","verb":"Build","district":"oldtown","sub":"Streets stay cooler in a heatwave, and fans run less.","kind":"build","structure":"coolRoofs","cost":6,"crewYears":1,"readyIn":1,"faces":[{"who":"oldtown","good":true},{"who":"health","good":true}],"now":{},"done":{},"readyHint":"the cool roofs and street trees are in","cause":"you painted roofs white and planted street trees","doneText":"White roofs and young trees are keeping the streets cooler.","unlock":"seen.heatwave","unlockWhen":"after the first heatwave","unlockMessage":"A heatwave is coming. Cool roofs and street trees would take the edge off the next one."},{"id":"clinic","label":"Clinic and cooling centre","verb":"Build","district":"oldtown","sub":"Better health, and a cool place to go in a heatwave.","kind":"build","structure":"clinic","cost":8,"crewYears":1,"readyIn":1,"faces":[{"who":"health","good":true},{"who":"oldtown","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the clinic and cooling centre opens","cause":"you opened a clinic and cooling centre","doneText":"The clinic and cooling centre is open.","unlock":"health<60","unlockWhen":"when health falls below 60","unlockMessage":"People's health is slipping. A clinic with a cooling centre would help."},{"id":"fireStation","label":"Fire station and crews","verb":"Build","district":"oldtown","sub":"Fires do less damage, and the houses at the forest edge are saved.","kind":"build","structure":"fireStation","cost":10,"crewYears":1,"readyIn":1,"faces":[{"who":"oldtown","good":true},{"who":"workers","good":true},{"who":"money","good":false}],"now":{},"done":{},"readyHint":"the fire station opens","cause":"you opened a fire station","doneText":"The fire station is open, with crews trained for the hills.","unlock":"seen.fire|fuel>70","unlockWhen":"after the first fire, or when the forest gets too thick","unlockMessage":"The forest is a tinderbox. A fire station would save the houses at its edge."}]`),uS=JSON.parse(`[{"id":"C1","title":"Water under the fields","lead":"Farmers want bigger pumps. There is plenty of water under the fields, and a record harvest is within reach.","system":"water","facts":["W10","W11","W13","W14"],"trigger":"year1","options":[{"id":"free","label":"Pump freely","sub":"A big harvest now. The wells won't last.","icon":"pump","cause":"you let farmers pump freely","now":{"set":{"pumping":"free","pumpExtra":4},"delta":{"groups.farmers":6,"mods.farmBonus":0.1}},"later":[{"in":3,"if":"aquifer<30","effect":{"delta":{"groups.oldtown":-3,"districts.oldtown.health":-3}},"hint":"By {year}: salty wells and sinking streets","landed":"Salt water is getting into the town's wells, and some streets are sinking."},{"in":7,"if":"aquifer<15","effect":{"delta":{"groups.farmers":-6,"districts.farm.health":-5}},"hint":"By {year}: the farm wells run dry","landed":"The farm wells are running dry."}],"faces":[{"who":"farmers","good":true},{"who":"water","good":false}]},{"id":"meter","label":"Meter and price pumping","sub":"Farmers pay for what they pump. The ground water lasts.","icon":"meter","cause":"you metered and priced pumping","now":{"set":{"pumping":"metered","mods.pumpFees":3},"delta":{"groups.farmers":-10}},"later":[{"in":3,"effect":{"delta":{"groups.farmers":5}},"hint":"By {year}: farmers get used to the meters","landed":"Farmers have got used to the meters, and the ground water is holding."}],"faces":[{"who":"water","good":true},{"who":"money","good":true},{"who":"farmers","good":false}]},{"id":"kestra","label":"A pumping fee, paid back as drip kits","sub":"Kestra helps fund it. Farmers pay now and get new kit later.","icon":"share","withKestra":true,"cause":"you set up a pumping fee with Kestra","now":{"set":{"pumping":"metered"},"delta":{"treasury":-4,"groups.farmers":-4,"kestra.reputation":5}},"later":[{"in":2,"effect":{"set":{"built.drip":true}},"hint":"By {year}: free drip irrigation for the farms","landed":"The drip kits have arrived. The farms need a quarter less water."}],"faces":[{"who":"water","good":true},{"who":"kestra","good":true},{"who":"farmers","good":false},{"who":"money","good":false}]}]},{"id":"C2","title":"The storm and the sewer","lead":"A big storm is coming, and the old sewers can't carry it all. The overflow has to go somewhere.","system":"sewage","facts":[],"trigger":"storm","options":[{"id":"river","label":"Let it overflow into the river","sub":"The streets stay dry. The river, and Kestra, get the sewage.","icon":"water","cause":"you let the sewers overflow into the river","now":{"delta":{"riverQuality":-8,"kestra.reputation":-8}},"later":[{"in":1,"effect":{"delta":{"kestra.reputation":-4}},"hint":"By {year}: Kestra's fishermen protest","landed":"Kestra's fishermen are protesting about the dirty river."}],"faces":[{"who":"oldtown","good":true},{"who":"kestra","good":false}]},{"id":"streets","label":"Close the outfalls and let the streets flood","sub":"The river stays clean. The low streets take the mess.","icon":"city","cause":"you let the old town's streets flood","now":{"delta":{"groups.oldtown":-10,"mods.healthHit":8,"mods.outfallsClosed":1}},"later":[],"faces":[{"who":"kestra","good":true},{"who":"oldtown","good":false},{"who":"health","good":false}]},{"id":"tank","label":"Build a storm tank on an emergency contract","sub":"Costly and rushed, but no crew needed. Ready next year.","icon":"build","cause":"you paid for an emergency storm tank","now":{"delta":{"treasury":-12}},"later":[{"in":1,"effect":{"set":{"built.stormTank":true},"delta":{"groups.oldtown":2}},"hint":"By {year}: the storm tank is ready","landed":"The emergency storm tank is ready. Heavy rain has somewhere to go."}],"faces":[{"who":"health","good":true},{"who":"money","good":false}]},{"id":"kestra","label":"Share the cost of a better sewage plant with Kestra","sub":"Kestra pays part. A cleaner river for both towns in two years.","icon":"share","withKestra":true,"cause":"you agreed with Kestra to upgrade the sewage plant","now":{"delta":{"treasury":-8,"kestra.reputation":10}},"later":[{"in":2,"effect":{"set":{"built.sewageUp":true}},"hint":"By {year}: the sewage plant is upgraded","landed":"The sewage plant upgrade, shared with Kestra, is working."}],"faces":[{"who":"kestra","good":true},{"who":"health","good":true},{"who":"money","good":false}]}]},{"id":"C3","title":"Fire season","lead":"The hills are dry and the forest is thick with dead wood. One spark could start a fire.","system":"fire","facts":[],"trigger":"fireSeason","options":[{"id":"burn","label":"Controlled burns now","sub":"Smoke over the town this year. Fires much less likely after.","icon":"fire","cause":"you ordered controlled burns","now":{"delta":{"fuel":-30,"mods.healthHit":5,"groups.youth":-3,"groups.oldtown":-3}},"later":[{"in":1,"repeat":2,"effect":{"delta":{"mods.fireChanceCut":0.5}},"hint":"Until {until}: fires are half as likely"}],"faces":[{"who":"health","good":false},{"who":"oldtown","good":false},{"who":"youth","good":false}]},{"id":"standby","label":"Crews on standby all summer","sub":"Costly. Any fire this year does half the damage.","icon":"people","cause":"you kept fire crews on standby","now":{"delta":{"treasury":-6,"groups.workers":3,"mods.fireDamageCut":0.5}},"later":[],"faces":[{"who":"workers","good":true},{"who":"money","good":false}]},{"id":"hope","label":"Hope for rain","sub":"No smoke, no cost. And more risk.","icon":"sky","cause":"you hoped for rain","now":{"delta":{"mods.fireChanceUp":0.5}},"later":[],"faces":[{"who":"money","good":true},{"who":"health","good":false}]},{"id":"national","label":"Call in the national fire service","sub":"Cheap help this year, if Aurel cuts firebreaks within two years.","icon":"border","withNational":true,"cause":"you called in the national fire service","now":{"delta":{"treasury":-2,"mods.fireDamageCut":0.5}},"later":[],"binding":{"text":"Cut firebreaks by {year}","check":"firebreaks","penalty":{"set":{"national.grantCutYears":3}},"broken":"The national government has halved its grant for 3 years. The firebreaks it asked for were never cut.","dueIn":2},"faces":[{"who":"national","good":true},{"who":"money","good":true}]}]},{"id":"C4","title":"Heat dome","lead":"A heat dome is sitting over the region. Every fan in town is on, and there isn't enough power.","system":"power","facts":["E3","E17","CL12"],"trigger":"heatDome","options":[{"id":"yard","label":"Cut power to the energy yard","sub":"Homes keep their power. The yard stops work.","icon":"factory","cause":"you cut power to the energy yard","now":{"delta":{"groups.workers":-10,"treasury":-4,"mods.yardCut":0.5}},"later":[{"in":1,"effect":{"delta":{"districts.energy.health":-8}},"hint":"By {year}: the energy yard struggles","landed":"The energy yard is still struggling after the shutdown."}],"faces":[{"who":"oldtown","good":true},{"who":"workers","good":false}]},{"id":"rolling","label":"Rolling blackouts, poorest streets first","sub":"The yard keeps working. The poorest homes swelter in the dark.","icon":"power","cause":"you ran rolling blackouts","now":{"delta":{"groups.oldtown":-10,"mods.healthHit":6}},"later":[{"in":2,"effect":{"delta":{"districts.oldtown.health":-5}},"hint":"By {year}: the poorest streets pay for the blackouts","landed":"People in the poorest streets are still paying for the blackouts."}],"faces":[{"who":"workers","good":true},{"who":"oldtown","good":false},{"who":"health","good":false}]},{"id":"flatout","label":"Run coal flat out and buy power at any price","sub":"Everyone keeps their power. Expensive, smoky and bad for the sky.","icon":"coin","cause":"you bought power at any price","now":{"delta":{"treasury":-8,"groups.youth":-6,"world.sky":-2,"mods.healthHit":3,"mods.powerBonus":15}},"later":[],"faces":[{"who":"power","good":true},{"who":"money","good":false},{"who":"sky","good":false},{"who":"youth","good":false}]},{"id":"kestra","label":"Buy power from Kestra over a shared line","sub":"Kestra has spare power. The line stays for the next heatwave.","icon":"share","withKestra":true,"minRep":50,"cause":"you built a shared power line with Kestra","now":{"delta":{"treasury":-6,"mods.powerBonus":10,"mods.kestraLine":1}},"later":[],"faces":[{"who":"power","good":true},{"who":"kestra","good":true},{"who":"money","good":false}]}]},{"id":"C5","title":"The cheap-water promise","lead":"Aurel pays 5 a year to keep water bills low. The biggest users gain the most.","system":"money","facts":["P1","P3","P16"],"trigger":"promise","options":[{"id":"end","label":"End it overnight","sub":"Saves 5 a year and people use less water. The old town is furious.","icon":"coin","cause":"you ended the cheap-water promise overnight","now":{"set":{"waterSubsidy":0},"delta":{"groups.oldtown":-15}},"later":[{"in":1,"effect":{"delta":{"districts.oldtown.health":-4,"groups.oldtown":-3}},"hint":"By {year}: some of the poorest homes can't pay their water bills","landed":"Some of the poorest homes can't pay their water bills, and are cutting back on washing."},{"in":3,"effect":{"delta":{"groups.oldtown":5}},"hint":"By {year}: people get used to the new bills","landed":"People have got used to paying for their water."}],"faces":[{"who":"money","good":true},{"who":"water","good":true},{"who":"oldtown","good":false}]},{"id":"phase","label":"Phase it out, with help for poorer households","sub":"Saves 2 a year now and 4 in two years. Much less anger.","icon":"gift","cause":"you phased out the cheap-water promise","now":{"delta":{"waterSubsidy":-2,"groups.oldtown":-4}},"later":[{"in":2,"effect":{"delta":{"waterSubsidy":-2,"mods.cityWater":-0.1}},"hint":"By {year}: only the poorest homes get help, and people use less water","landed":"Only the poorest homes still get help with water bills. People are using less water."}],"faces":[{"who":"money","good":true},{"who":"oldtown","good":false}]},{"id":"keep","label":"Keep it and borrow","sub":"No anger now. The bill comes later.","icon":"fund","cause":"you kept the cheap-water promise on borrowed money","now":{"delta":{"groups.oldtown":3}},"later":[{"in":4,"effect":{"delta":{"debt":12,"mods.interestUp":0.01}},"hint":"By {year}: the debt grows and loans cost more","landed":"Lenders have noticed the borrowing. The debt has grown and loans cost more."}],"faces":[{"who":"oldtown","good":true},{"who":"money","good":false}]}]},{"id":"C6","title":"The grant with strings","lead":"The national government offers 20 towards the water mains or the sewage plant, if Aurel closes its coal plant by 2034.","system":"national","facts":["P23"],"trigger":"grant","options":[{"id":"take","label":"Take it","sub":"20 for the pipes and the sewage plant. The coal plant must close by 2034, whoever is mayor.","icon":"gift","withNational":true,"cause":"you took the national grant","now":{"delta":{"mods.earmark":20,"groups.workers":-6}},"later":[],"binding":{"text":"Close the coal plant by {year}","check":"coalClosed","penalty":{"delta":{"treasury":-20},"set":{"national.grantCutYears":3}},"broken":"The coal plant is still burning, so Aurel has to pay back the 20 and loses half its grant for 3 years.","dueIn":6,"dueBy":8},"faces":[{"who":"money","good":true},{"who":"sky","good":true},{"who":"workers","good":false}]},{"id":"refuse","label":"Refuse","sub":"No strings, no money.","icon":"ban","cause":"you refused the national grant","now":{"delta":{"groups.youth":-4}},"later":[],"faces":[{"who":"workers","good":true},{"who":"youth","good":false}]},{"id":"negotiate","label":"Negotiate a later date","sub":"12 to spend as you like. The coal plant must close by 2037.","icon":"share","withNational":true,"cause":"you negotiated the national grant","now":{"delta":{"treasury":12,"groups.workers":-2}},"later":[],"binding":{"text":"Close the coal plant by {year}","check":"coalClosed","penalty":{"delta":{"treasury":-12},"set":{"national.grantCutYears":3}},"broken":"The coal plant is still burning, so Aurel has to pay back the 12 and loses half its grant for 3 years.","dueIn":9,"dueBy":11},"faces":[{"who":"money","good":true},{"who":"workers","good":false}]}]},{"id":"C7","title":"People on the move","lead":"Drought upriver has driven families off their farms. Some are already at Aurel's edge.","system":"people","facts":["W8","P21"],"trigger":"dryYear","options":[{"id":"welcome","label":"Welcome them and build up the old town","sub":"More workers and, later, more taxes. More people need water.","icon":"people","cause":"you welcomed the families from upriver","now":{"delta":{"districts.oldtown.pop":5,"groups.workers":5,"groups.oldtown":-5,"mods.cityWater":0.08}},"later":[{"in":3,"effect":{"delta":{"mods.taxBonus":3}},"hint":"By {year}: the new families pay taxes","landed":"The new families have settled in and are paying taxes."}],"faces":[{"who":"workers","good":true},{"who":"money","good":true},{"who":"oldtown","good":false}]},{"id":"away","label":"Turn them away","sub":"The old town is relieved. Kestra has to take them.","icon":"border","cause":"you turned the families away","now":{"delta":{"groups.oldtown":4,"groups.youth":-5,"kestra.reputation":-10}},"later":[{"in":2,"effect":{"delta":{"kestra.refuseYears":2}},"hint":"By {year}: Kestra refuses to deal with Aurel","landed":"Kestra is refusing to work with Aurel for now."}],"faces":[{"who":"oldtown","good":true},{"who":"kestra","good":false},{"who":"youth","good":false}]},{"id":"help","label":"Help Kestra's farms so people can stay","sub":"Costs money now. Kestra will need less of the river later.","icon":"grain","cause":"you helped Kestra's farms","now":{"delta":{"treasury":-8,"kestra.reputation":12}},"later":[{"in":3,"effect":{"delta":{"mods.outflowMin":-3}},"hint":"By {year}: Kestra needs less of the river","landed":"Kestra's farms are coping. They need less of the river."}],"faces":[{"who":"kestra","good":true},{"who":"water","good":true},{"who":"money","good":false}]},{"id":"farmsFirst","label":"Farms first this year","sub":"Our fields get water before the energy yard and Kestra.","icon":"water","droughtOnly":true,"cause":"you put the farms first in the drought","now":{"delta":{"groups.farmers":8,"groups.workers":-6,"kestra.reputation":-6,"mods.farmsFirst":1}},"later":[],"faces":[{"who":"farmers","good":true},{"who":"workers","good":false},{"who":"kestra","good":false}]}]},{"id":"C8","title":"A dam in the gorge","lead":"Engineers say a second dam in the gorge would make more power and store more water. Kestra is worried.","system":"power","facts":["W16","P18","E13"],"trigger":"dam","options":[{"id":"fast","label":"Build it fast","sub":"Power and water in two years. Kestra gets less of the river.","icon":"dam","crewYears":2,"cause":"you built the gorge dam fast","now":{"delta":{"treasury":-14,"groups.workers":5}},"later":[{"in":2,"effect":{"delta":{"mods.damPower":20,"reservoirCap":30,"mods.outflow":-8,"kestra.reputation":-15,"mods.blockRisk":1}},"hint":"By {year}: the new dam fills, and Kestra gets less water","landed":"The gorge dam is full. Kestra says the river is running thin."}],"faces":[{"who":"power","good":true},{"who":"workers","good":true},{"who":"kestra","good":false},{"who":"money","good":false}]},{"id":"slow","label":"Build it slowly and guarantee Kestra's water","sub":"Takes longer and costs more. Kestra keeps its share.","icon":"water","crewYears":3,"cause":"you built the gorge dam slowly","now":{"delta":{"treasury":-16}},"later":[{"in":4,"effect":{"delta":{"mods.damPower":15,"reservoirCap":20,"kestra.reputation":5}},"hint":"By {year}: the new dam is finished","landed":"The gorge dam is finished, and Kestra still gets its share of the river."}],"faces":[{"who":"power","good":true},{"who":"kestra","good":true},{"who":"money","good":false}]},{"id":"none","label":"Don't build","sub":"No cost, no crew. Power stays tight.","icon":"ban","cause":"you decided not to build the gorge dam","now":{"delta":{"groups.workers":-5}},"later":[{"in":2,"effect":{"delta":{"mods.powerDemand":6}},"hint":"By {year}: power runs short at busy times","landed":"Power demand has grown, and there is no new dam to meet it."}],"faces":[{"who":"money","good":true},{"who":"kestra","good":true},{"who":"workers","good":false}]},{"id":"kestra","label":"A shared dam, selling Kestra power","sub":"Kestra pays part and buys power from it for years.","icon":"share","withKestra":true,"crewYears":3,"cause":"you built a shared dam with Kestra","now":{"delta":{"treasury":-10,"kestra.reputation":10}},"later":[{"in":4,"effect":{"delta":{"mods.damPower":18,"mods.income":2}},"hint":"By {year}: the shared dam makes power and money","landed":"The shared dam is running. Kestra pays for its power every year."}],"faces":[{"who":"power","good":true},{"who":"kestra","good":true},{"who":"money","good":true}]}]},{"id":"L1","title":"A windfall","lead":"A quarry company pays 15 for rights in the hills. What should Aurel do with it?","system":"money","facts":["P23","P5"],"trigger":"windfall","light":true,"options":[{"id":"cut","label":"Cut taxes now","sub":"Everyone is happy this year. Then the money is gone.","icon":"gift","cause":"you spent the windfall on tax cuts","now":{"delta":{"groups.all":5}},"later":[],"faces":[{"who":"oldtown","good":true},{"who":"farmers","good":true},{"who":"workers","good":true},{"who":"youth","good":true}]},{"id":"fund","label":"Put it in a future fund","sub":"Nothing now. A little money every year after.","icon":"save","cause":"you saved the windfall in a future fund","now":{"delta":{"futureFund":15,"groups.oldtown":-2,"groups.farmers":-2}},"later":[{"in":1,"repeat":"end","effect":{"delta":{"treasury":1}},"hint":"Every year: the fund pays 1"}],"faces":[{"who":"money","good":true},{"who":"oldtown","good":false}]},{"id":"split","label":"Split it","sub":"Some now, some later.","icon":"coin","cause":"you split the windfall","now":{"delta":{"treasury":5,"groups.all":2}},"later":[{"in":1,"repeat":"end","effect":{"delta":{"treasury":0.5}},"hint":"Every year: the fund pays 0.5"}],"faces":[{"who":"money","good":true},{"who":"oldtown","good":true}]}]},{"id":"L2","title":"Kestra asks a favour","lead":"Kestra's harvest has failed. They ask for extra water this summer.","system":"neighbour","facts":["W15","W16","P11"],"trigger":"favour","light":true,"options":[{"id":"extra","label":"Send extra water","sub":"Our farms get less this year. Kestra won't forget.","icon":"water","cause":"you sent Kestra extra water","now":{"delta":{"mods.outflowExtra":8,"groups.farmers":-4,"kestra.reputation":12}},"later":[],"faces":[{"who":"kestra","good":true},{"who":"farmers","good":false}]},{"id":"little","label":"Send a little","sub":"A small help, a small thank-you.","icon":"share","cause":"you sent Kestra a little water","now":{"delta":{"mods.outflowExtra":4,"groups.farmers":-2,"kestra.reputation":4}},"later":[],"faces":[{"who":"kestra","good":true}]},{"id":"no","label":"Say no","sub":"Our farms keep their water. Kestra is hurt.","icon":"border","cause":"you refused Kestra's request for water","now":{"delta":{"groups.farmers":2,"kestra.reputation":-8}},"later":[{"in":1,"effect":{"delta":{"kestra.reputation":-2}},"hint":"By {year}: Kestra remembers","landed":"Kestra reminds Aurel that you said no when they needed help."}],"faces":[{"who":"farmers","good":true},{"who":"kestra","good":false}]}]}]`),dS=JSON.parse(`[{"id":"W8","text":"Water shortages were linked to a 10% rise in migration around the world between 1970 and 2000.","source":"UNESCO World Water Development Report","confidence":"V","lag":"Long","systems":["water","people"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W10","text":"Ground water gives about a quarter of all irrigation water and half of the water people drink at home.","source":"UNESCO World Water Development Report","confidence":"V","lag":"Now","systems":["water"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W11","text":"Ground water levels fell in 71% of 1,693 aquifers studied between 2000 and 2022. In 30% the fall sped up.","source":"Jasechko et al., Nature 2024","confidence":"V","lag":"Long","systems":["water"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W13","text":"Bangkok's ground water came back after the government raised pumping fees.","source":"Eos","confidence":"V","lag":"Short","systems":["water","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W14","text":"Pumping too much ground water lets sea water in, makes the land sink, and dries up streams and wells.","source":"Nature 2024","confidence":"V","lag":"Long","systems":["water","cities"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W15","text":"310 river basins cross borders. They cover 47% of the world's land and 52% of its people.","source":"Oregon State University, TFDD","confidence":"V","lag":"Now","systems":["water","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W16","text":"Rivers and lakes shared by countries carry 60% of the world's fresh water. Only 43 of 153 sharing countries have deals covering most of it.","source":"UN-Water","confidence":"V","lag":"Now","systems":["water","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"W28","text":"Reservoirs lose roughly 0.5 to 1% of their storage each year as mud settles behind the dam.","source":"UNU-INWEH","confidence":"K","lag":"Long","systems":["water","energy"],"modes":["council"],"review_by":"2027-03-01"},{"id":"W30","text":"Salt building up in irrigated fields affects around a fifth of irrigated land. Estimates vary.","source":"FAO","confidence":"K","lag":"Long","systems":["water","food"],"modes":["council"],"review_by":"2027-03-01"},{"id":"F13","text":"Fertiliser made from the air with gas helped feed about 48% of the world's people (2008 estimate).","source":"Our World in Data","confidence":"V","lag":"Now","systems":["food","energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"F14","text":"About 1.78 billion people are fed thanks to imported fertiliser or imported gas to make it.","source":"Environmental Research Letters 2022","confidence":"V","lag":"Short","systems":["food","energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"F15","text":"Making one tonne of ammonia fertiliser uses about 0.65 tonnes of natural gas.","source":"Environmental Research Letters 2022","confidence":"V","lag":"Now","systems":["food","energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"F21","text":"By April 2022, 16 countries had limited food exports, covering about 17% of traded calories.","source":"IFPRI","confidence":"V","lag":"Now","systems":["food","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"F23","text":"When countries try to shield their own prices, world wheat and rice price shocks roughly double.","source":"IFPRI","confidence":"V","lag":"Short","systems":["food","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"F29","text":"About 75% of the main food crops depend at least partly on bees and other pollinators.","source":"IPBES pollination assessment 2016","confidence":"K","lag":"Long","systems":["food"],"modes":["council"],"review_by":"2027-03-01"},{"id":"E3","text":"Weather, mostly heat, explained about 15% of the rise in energy demand in 2024.","source":"IEA","confidence":"V","lag":"Now","systems":["energy","climate"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"E12","text":"Over 2,500 GW of power projects are waiting to connect to grids around the world.","source":"IEA Electricity 2026","confidence":"V","lag":"Short","systems":["energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"E13","text":"New grids take 5 to 15 years to plan and build. Solar and wind take 1 to 5.","source":"IEA Electricity 2026","confidence":"V","lag":"Long","systems":["energy","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"E17","text":"Heat pushed up power demand in India in 2024, adding about 50 million tonnes of CO2 from fossil power.","source":"IEA Global Energy Review 2025","confidence":"V","lag":"Now","systems":["energy","climate"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"C4","text":"Most population growth to 2050 will be in cities. The number of people in the countryside is close to its peak.","source":"UN DESA, World Urbanization Prospects","confidence":"V","lag":"Long","systems":["cities","people"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"C6","text":"Built-up land has grown about twice as fast as population since 1975.","source":"EU Cities Portal, on UN World Urbanization Prospects 2025","confidence":"V","lag":"Long","systems":["cities","food"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"C8","text":"Many villages are ageing and emptying as young people move to cities and towns.","source":"UN DESA, World Urbanization Prospects","confidence":"V","lag":"Long","systems":["cities","people"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"C9","text":"Cities cover about 3% of land but use 60 to 80% of energy and make about 75% of carbon emissions.","source":"UN Sustainable Development","confidence":"V","lag":"Now","systems":["cities","energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"C15","text":"Cities are eating up land more slowly than before: 0.83% a year in 2020 to 2025, down from 1.24%.","source":"UN DESA, SDG 11","confidence":"V","lag":"Long","systems":["cities"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"C20","text":"Cities can be several degrees hotter than the countryside around them.","source":"IPCC AR6 WG1","confidence":"K","lag":"Short","systems":["cities","climate"],"modes":["council"],"review_by":"2027-03-01"},{"id":"P1","text":"Governments spent about 725 billion dollars on direct fossil fuel subsidies in 2024.","source":"IMF 2025","confidence":"V","lag":"Now","systems":["politics","energy","money"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P3","text":"The richest half of households get about three quarters of direct fuel subsidies.","source":"IMF","confidence":"V","lag":"Now","systems":["politics","money"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P4","text":"Ending direct fuel subsidies would cut world CO2 about 6% by 2035 and prevent about 70,000 early deaths a year.","source":"IMF 2025, via TerraDaily","confidence":"V","lag":"Long","systems":["politics","climate"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P5","text":"Fully pricing fuel could raise about 4.4 trillion dollars and avoid 1.6 million early deaths a year.","source":"IMF 2023","confidence":"V","lag":"Long","systems":["politics","money"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P6","text":"Food export limits jumped from 3 to 16 countries within weeks in early 2022.","source":"IFPRI","confidence":"V","lag":"Now","systems":["food","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P7","text":"India banned wheat exports in May 2022, soon after offering to feed the world, when a heatwave hit its crops.","source":"Quartz","confidence":"V","lag":"Now","systems":["food","politics","climate"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P11","text":"Only 43 of 153 countries that share rivers have agreements covering most of that water.","source":"UN-Water","confidence":"V","lag":"Now","systems":["water","politics"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"P16","text":"Fuel price rises have set off mass protests, such as France in 2018 and Kazakhstan in 2022.","source":"Press coverage","confidence":"K","lag":"Now","systems":["politics","energy"],"modes":["council"],"review_by":"2027-03-01"},{"id":"P18","text":"Ethiopia's big dam on the Blue Nile is still disputed by Egypt and Sudan downstream.","source":"Press coverage","confidence":"K","lag":"Long","systems":["water","politics"],"modes":["council"],"review_by":"2027-03-01"},{"id":"P21","text":"Up to 216 million people could have to move within their own countries because of climate change by 2050.","source":"World Bank, Groundswell 2021","confidence":"K","lag":"Long","systems":["people","climate"],"modes":["council"],"review_by":"2027-03-01"},{"id":"P23","text":"Elections come every 4 to 5 years. Grids, dams and nuclear plants take 5 to 15 years or more to build.","source":"IEA; IAEA","confidence":"V","lag":"Long","systems":["politics","energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"CL11","text":"Local air pollution is the biggest single part (39%) of the IMF's estimate of what fossil fuel subsidies really cost.","source":"IMF","confidence":"V","lag":"Now","systems":["climate","energy"],"modes":["steward","council"],"review_by":"2027-03-01"},{"id":"CL12","text":"Heat raises the need for cooling. That burns more fossil power, which heats the world more.","source":"IEA","confidence":"V","lag":"Now","systems":["climate","energy"],"modes":["steward","council"],"review_by":"2027-03-01"}]`),Q=gx(),fS=gx().min(0).max(100),pS=gx().int(),mS=[`highlands`,`farm`,`oldtown`,`energy`],hS=[`oldtown`,`farmers`,`workers`,`youth`],gS=[`mains`,`sewers`,`treatment`,`sewage`,`coal`,`grid`,`dam`,`wind`,`solar`,`solarPark`,`drip`,`forestBelt`,`firebreaks`,`ponds`,`drains`,`stormTank`,`coolRoofs`,`clinic`,`fireStation`],_S=[`repair`,`renewMains`,`sewageUp`,`moveSewage`,`drip`,`solarPark`,`batteries`,`forestBelt`,`firebreaks`,`burn`,`retireCoal`,`convertCoal`,`ponds`,`drains`,`stormTank`,`substation`,`coolRoofs`,`clinic`,`fireStation`,`pumping`,`nuclear`],vS=[`pump`,`meter`,`share`,`dam`,`save`,`grain`,`factory`,`city`,`fire`,`ban`,`coin`,`bread`,`leaf`,`gift`,`fund`,`people`,`border`,`build`,`water`,`heat`,`power`,`sky`],yS=[`coalClosed`,`firebreaks`,`nuclearContract`],bS=e=>Z({wet:e,normal:e,dry:e,drought:e}),xS=e=>Z({highlands:e,farm:e,oldtown:e,energy:e}),SS={from:pS,to:pS,weight:Q},CS=Z({years:pS.min(1),startYear:pS,crews:pS.min(1),start:Z({treasury:Q,debt:Q,grant:Q,waterFees:Q,waterSubsidy:Q,aquifer:fS,reservoir:Q,reservoirCap:Q,fuel:fS,soil:fS,riverQuality:fS,irrigationEfficiency:Q,fertiliser:Fx([`high`,`mixed`,`low`]),pumping:Fx([`free`,`metered`]),districts:xS(Z({health:fS,pop:Q})),groups:Z({oldtown:fS,farmers:fS,workers:fS,youth:fS}),world:Z({grainPrice:Q,gasPrice:Q,sky:fS}),kestra:Z({reputation:fS}),outflowMin:Q}),weather:Z({rain:bS(Q),chance:bS(Q),heatwave:fS,pressure:Z({skyStep:Q,shift:Q,heatwave:Q}),skyGone:Z({chance:bS(Q),heatwave:fS}),noDroughtRepeatUntil:pS,fireDanger:bS(Q),fireDangerHeat:Q}),world:Z({priceMin:Q,priceMax:Q,grainWalk:pS,gasWalk:pS,grainShock:Z({chance:fS,size:Q,from:pS}),gasShock:Z({chance:fS,size:Q,from:pS}),shockDecay:Q}),ageing:Z({stressAbove:Q,stress:Q,weather:Q}),failure:Z({below:Q,perPoint:Q,patch:Q}),repair:Z({amount:Q,below:Q}),water:Z({surface:Q,inflowPerCap:Q,release:Q,damWeakBelow:Q,damWeakCap:Q,pumping:Z({free:Q,meteredFactor:Q}),pumpFullAt:Q,pumpDrain:Q,recharge:Q,pondsRecharge:Q,forestRecharge:Q,reclaimed:Q,cityNeed:Q,cityPopRef:Q,subsidyEndedFactor:Q,leak:Ex(Z({base:Q,wear:Q})).min(1),treatment:Z({capacity:Ex(Q).min(1),worn:Q}),energyYard:Q,energyYardHeat:Q,farms:Q,farmsDry:Q,saltyBelow:Q,saltyHealth:Q,saltyMax:Q,dryBelow:Q,dryFarmCap:Q,meterCity:Q,siltPerYear:Q,forestSilt:Q}),sewage:Z({wasteShare:Q,storm:bS(Q),sewerCap:Q,worn:Q,stormTank:Q,treated:Ex(Q).length(3),weakBelow:Q,weakFactor:Q,floodOverflow:Q,floodChance:Q,river:Z({base:Q,untreated:Q,fertiliser:Q,maxMove:Q}),streetFloodAt:Q,streetHealth:Q,streetOldtown:Q,seenAt:Q}),power:Z({dam:Q,coal:Z({cap:Q,worn:Q,fuel:Q}),gas:Z({cap:Q,fuel:Q,emissions:Q,air:Q,health:Q}),convertingFactor:Q,gridBuy:Z({max:Q,price:Q}),demand:Z({oldtown:Q,oldtownPopRef:Q,energy:Q,pumps:Q,plants:Q,sewage:Ex(Q).length(3),leakPer:Q}),heat:Q,heatCut:Q,gridCap:Z({base:Q,worn:Q,bigger:Q}),emissions:Z({coal:Q,grid:Q}),airCoal:Q,blockedSeenAt:Q,kestraLine:Q}),nuclear:Z({units:Q,price:Q,years:pS.min(1),exitYears:Q}),fire:Z({growth:Q,wetGrowth:Q,forestGrowth:Q,max:Q,afterBurn:Q,firebreaks:Q,station:Q,highlands:Q,forestLoss:Q,forestRegrow:Q,reservoirLoss:Q,health:Q,fuelAfter:Q,housesAbove:Q,housesOldtown:Q,housesMoney:Q,youth:Q}),farm:Z({base:Q,soilRef:Q,fertiliser:Z({high:Q,mixed:Q,low:Q}),income:Q,soil:Z({irrigation:Q,high:Q,mixed:Q}),foodPerPerson:Q}),pumpingPolicy:Z({fees:Q,meteredFarmers:Q,freeFarmers:Q}),money:Z({tax:Z({oldtown:Q,energy:Q,farm:Q}),yard:Z({base:Q,coal:Q,gas:Q}),interest:Q,interestHigh:Q,highDebt:Q,meterBase:Q,meterTreasury:Q,meterDebt:Q,meterNet:Q,netSmoothing:Q.min(0).max(1)}),health:Z({coal:Q,heat:Q,heatOne:Q,heatBoth:Q,untreated:Q,clinic:Q}),land:Z({maxMove:Q,highlands:Z({base:Q,river:Q,silt:Q,siltRef:Q,forestBelt:Q}),farm:Z({base:Q,soil:Q,water:Q,runoff:Q,dry:Q}),oldtown:Z({base:Q,health:Q,water:Q,crowdAbove:Q,crowd:Q,failure:Q,park:Q}),energy:Z({base:Q,air:Q,jobs:Q,plant:Q})}),people:Z({farmHealthBelow:Q,farmWaterBelow:Q,move:Q,moveBack:Q,minPop:Q}),sky:Z({world:Q,aurel:Q}),groups:Z({maxMove:Q,placeWeight:Q,youthWeight:Q,oldtownShare:Q,oldtown:Z({base:Q,water:Q,health:Q,power:Q,subsidy:Q,grain:Q,imports:Q,heat:Q,crowdAbove:Q,crowd:Q}),farmers:Z({base:Q,water:Q,soilRef:Q,soil:Q,metered:Q,grainSwing:Q,dry:Q}),workers:Z({base:Q,output:Q,power:Q,gas:Q}),youth:Z({base:Q,air:Q,coal:Q,debtAbove:Q,debt:Q,sky:Q})}),kestra:Z({riverLow:Q,riverLowRep:Q,riverHigh:Q,riverHighRep:Q,lowFlowRep:Q,collabMin:Q,cheapAt:Q,cheapFactor:Q,angryBelow:Q,blockChance:Q,blockCost:Q}),national:Z({grantCutFactor:Q}),elections:Z({years:Ex(pS),win:Q,lose:Q,snapWin:Q,outYears:pS}),collapse:Z({water:Q,power:Q,mood:Q,years:pS}),triggers:Z({year1:Z(SS),storm:Z(SS),fireSeason:Z({...SS,fuelAtLeast:Q}),heatDome:Z({...SS,powerBelow:Q}),promise:Z(SS),grant:Z(SS),dryYear:Z(SS),dam:Z({...SS,powerBelow:Q}),windfall:Z(SS),favour:Z(SS)}),lens:Z({samples:pS.min(1),likelyRuns:pS.min(1),spreadFull:Q}),score:Z({landScale:Q}),handover:Z({facts:pS.min(1),systemFacts:Nx(Wb(),Ex(Wb())),questions:Nx(Wb(),Wb().min(1))})}),wS=Z({delta:Nx(Wb(),gx()).optional(),set:Nx(Wb(),kx([Wb(),gx(),bx()])).optional()}),TS=Z({who:Fx([...hS,`kestra`,`national`,`water`,`power`,`health`,`money`,`sky`]),good:bx()}),ES=Z({in:pS.min(0),repeat:kx([pS.min(1),Lx(`end`)]).optional(),effect:wS,hint:Wb().min(1),landed:Wb().min(1).optional(),if:Wb().optional()}),DS=Z({id:Wb().min(1),label:Wb().min(1),sub:Wb().min(1),icon:Fx(vS),now:wS,later:Ex(ES),faces:Ex(TS),withKestra:bx().optional(),withNational:bx().optional(),droughtOnly:bx().optional(),cause:Wb().min(1).optional(),minRep:gx().optional(),crewYears:pS.min(1).optional(),binding:Z({text:Wb().min(1),check:Fx(yS),penalty:wS,broken:Wb().min(1),dueIn:pS.min(0),dueBy:pS.min(1).optional()}).optional()}),OS=Object.keys(CS.shape.triggers.shape),kS=Z({id:Wb().regex(/^[CL]\d+$/),title:Wb().min(1),lead:Wb().min(1),system:Fx([`water`,`sewage`,`power`,`fire`,`money`,`people`,`neighbour`,`national`]),facts:Ex(Wb()),trigger:Fx(OS),light:bx().optional(),onDraw:wS.optional(),options:Ex(DS).min(2)}),AS=/^([a-zA-Z.]+((<=|>=|<|>|=)[\w.-]+)?)(\|[a-zA-Z.]+((<=|>=|<|>|=)[\w.-]+)?)*$/,jS=Z({decay:Q.min(0),upkeep:Q.min(0),output:Q.optional()}),MS=Z({id:Fx(gS),label:Wb().min(1),district:Fx(mS),districtHill:Fx(mS).optional(),weatherStress:bx().optional(),work:Wb().min(1),repairCost:Q.min(0),levels:Ex(jS).min(1),start:Z({level:pS.min(1),condition:fS,lastWork:pS}).optional(),failure:Z({short:Wb().min(1),text:Wb().min(1),effect:wS}).optional(),flood:Z({short:Wb().min(1),text:Wb().min(1)}).optional()}),NS=Z({id:Fx(_S),label:Wb().min(1),altLabel:Wb().min(1).optional(),verb:Wb().min(1),district:Fx(mS),sub:Wb().min(1),altSub:Wb().min(1).optional(),kind:Fx([`repair`,`upgrade`,`build`,`retire`,`convert`,`relocate`,`policy`,`burn`,`contract`]),structure:Fx(gS).optional(),cost:Q.min(0),crewYears:pS.min(1),readyIn:pS.min(1),repeatable:bx().optional(),earmark:bx().optional(),levels:Ex(Z({level:pS.min(2),cost:Q.min(0),costHill:Q.min(0).optional(),crewYears:pS.min(1),readyIn:pS.min(1),sub:Wb().min(1).optional()})).optional(),faces:Ex(TS),now:wS,done:wS,cause:Wb().min(1),readyHint:Wb().min(1),doneText:Wb().min(1).optional(),unlock:Wb().regex(AS).optional(),unlockWhen:Wb().min(1).optional(),unlockMessage:Wb().min(1).optional()}),PS=Z({id:Wb().regex(/^(W|F|E|C|P|CL)\d+$/),text:Wb().min(1),source:Wb().min(1),confidence:Fx([`V`,`K`]),lag:Fx([`Now`,`Short`,`Long`]),systems:Ex(Wb()).min(1),modes:Ex(Fx([`steward`,`council`])).min(1),review_by:Wb().regex(/^\d{4}-\d{2}-\d{2}$/)});function FS(e,t,n){let r=t.safeParse(n);if(!r.success)throw Error(`content/${e} is invalid:\n${eh(r.error)}`);return r.data}function IS(e,t){if(!e)throw Error(`content/city: ${t}`)}function LS(e,t){let n=new Set;for(let r of t)IS(!n.has(r),`duplicate ${e} id "${r}"`),n.add(r)}var $=FS(`city/params.json`,CS,sS),RS=FS(`city/structures.json`,Ex(MS),cS),zS=FS(`city/projects.json`,Ex(NS),lS),BS=FS(`city/cards.json`,Ex(kS),uS),VS=FS(`facts.json`,Ex(PS),dS);LS(`structure`,RS.map(e=>e.id)),IS(RS.length===gS.length,`structures.json must define all ${gS.length} structures`);for(let e of RS)e.start&&IS(e.start.level<=e.levels.length,`structure ${e.id} starts above its top level`);LS(`project`,zS.map(e=>e.id)),IS(zS.length===_S.length,`projects.json must define all ${_S.length} projects`);for(let e of zS){IS(!e.unlock||!!e.unlockMessage&&!!e.unlockWhen,`project ${e.id} unlocks without unlockMessage and unlockWhen`),IS(e.readyIn>=e.crewYears,`project ${e.id} is ready before its crew work ends`);for(let t of e.levels??[])IS(t.readyIn>=t.crewYears,`project ${e.id} level ${t.level} is ready too soon`);[`upgrade`,`build`,`retire`,`convert`,`relocate`].includes(e.kind)&&IS(!!e.structure,`project ${e.id} (${e.kind}) names no structure`)}LS(`card`,BS.map(e=>e.id)),LS(`fact`,VS.map(e=>e.id));var HS=new Set(VS.map(e=>e.id));for(let e of BS){LS(`option (card ${e.id})`,e.options.map(e=>e.id));for(let t of e.facts)IS(HS.has(t),`card ${e.id} cites unknown fact ${t}`);IS(e.options.some(e=>!e.withKestra&&!e.droughtOnly&&!e.crewYears),`card ${e.id} needs an option that is always offered`)}for(let[e,t]of Object.entries($.handover.systemFacts))for(let n of t)IS(HS.has(n),`handover.systemFacts.${e} cites unknown fact ${n}`);IS(BS.some(e=>e.trigger===`year1`),`no card has the "year1" trigger`),IS($.elections.years.every(e=>e>=1&&e<=$.years),`election years must fall inside the game`);var US=e=>{let t=BS.find(t=>t.id===e);if(!t)throw Error(`unknown card ${e}`);return t},WS=e=>{let t=zS.find(t=>t.id===e);if(!t)throw Error(`unknown project ${e}`);return t},GS=e=>{let t=RS.find(t=>t.id===e);if(!t)throw Error(`unknown structure ${e}`);return t},KS=[...hS];function qS(){return{cityWater:0,cityPower:0,powerDemand:0,damPower:0,outflow:0,outflowMin:$.start.outflowMin,recharge:0,taxBonus:0,income:0,interestUp:0,kestraLine:0,blockRisk:0,earmark:0,pumpFees:0,netAvg:0,damCracked:0,targetHighlands:0,targetFarm:0,targetOldtown:0,targetEnergy:0,saltYears:0,grainShock:0,gasShock:0,cardCrewYears:0,streakWater:0,streakPower:0,streakMood:0,forestLoss:0,ashPending:0,loadTreatment:0,loadSewers:0,loadGrid:0,loadCoal:0}}var JS=`dOldtown.dFarmers.dWorkers.dYouth.hHighlands.hFarm.hOldtown.hEnergy.farmBonus.healthHit.waterHit.overflowExtra.plantDown.coalDown.gridHit.fireChanceCut.fireChanceUp.fireDamageCut.powerBonus.outfallsClosed.yardCut.farmsFirst.outflowExtra.cardMoney.projectSpend.repairSpend.failures`.split(`.`);function YS(){let e=qS();for(let t of JS)e[t]=0;return e}function XS(e){for(let t of JS)e.mods[t]=0}var ZS=e=>`d${e[0].toUpperCase()}${e.slice(1)}`,QS=(e,t)=>e.mods[ZS(t)]??0,$S=e=>`h${e[0].toUpperCase()}${e.slice(1)}`,eC=(e,t)=>e.mods[$S(t)]??0;function tC(e,t,n){e.mods[$S(t)]=eC(e,t)+n}var nC={reputation:`kestra.reputation`,river:`riverQuality`,grain:`world.grainPrice`,gas:`world.gasPrice`,sky:`world.sky`,power:`last.meters.power`,water:`last.meters.water`,health:`last.meters.health`,mood:`last.meters.mood`,money:`last.meters.money`,gridBlocked:`last.gridBlocked`,overflow:`last.overflow`},rC=/^(aquifer|soil|fuel|riverQuality|districts\.\w+\.health|kestra\.reputation|world\.sky)$/,iC=/^(districts\.\w+\.pop|debt|futureFund|waterSubsidy|waterFees|reservoirCap|kestra\.refuseYears|national\.grantCutYears|pumpExtra)$/;function aC(e,t){let n=(nC[t]??t).split(`.`),r=e;for(let e of n.slice(0,-1)){if(typeof r!=`object`||!r||!(e in r))throw Error(`effect path "${t}" not found`);r=r[e]}let i=n[n.length-1];if(typeof r!=`object`||!r||!(i in r))throw Error(`effect path "${t}" not found`);return{parent:r,key:i}}function oC(e,t){let{parent:n,key:r}=aC(e,t);return n[r]}function sC(e,t,n){let{parent:r,key:i}=aC(e,t),a=r[i];if(typeof a!=`number`)throw Error(`effect path "${t}" is not a number`);let o=a+n;rC.test(t)&&(o=_C(o,0,100)),iC.test(t)&&(o=Math.max(0,o)),r[i]=o,(t===`reservoirCap`||t===`reservoir`)&&(e.reservoir=_C(e.reservoir,0,e.reservoirCap)),t===`treasury`&&(e.mods.cardMoney=(e.mods.cardMoney??0)+n)}var cC={pumping:[`free`,`metered`],fertiliser:[`high`,`mixed`,`low`]};function lC(e,t,n){let{parent:r,key:i}=aC(e,t);if(typeof r[i]!=typeof n)throw Error(`effect path "${t}" expects a ${typeof r[i]}`);let a=cC[t];if(a&&!a.includes(String(n)))throw Error(`effect path "${t}" cannot be "${n}"`);r[i]=n}var uC=()=>{throw Error(`grantProject is not wired`)};function dC(e){uC=e}function fC(e,t,n=1){for(let[r,i]of Object.entries(t.delta??{}))if(r===`groups.all`)for(let t of KS)e.mods[ZS(t)]=QS(e,t)+i;else if(r.startsWith(`groups.`)){let t=r.slice(7);if(!KS.includes(t))throw Error(`effect path "${r}" not found`);e.mods[ZS(t)]=QS(e,t)+i}else if(r.startsWith(`mods.`)){let t=r.slice(5);if(!(t in e.mods))throw Error(`effect path "${r}" not found`);e.mods[t]=(e.mods[t]??0)+i}else if(/^districts\.\w+\.health$/.test(r)){let t=r.split(`.`)[1];if(!(t in e.districts))throw Error(`effect path "${r}" not found`);tC(e,t,i)}else sC(e,r,r===`treasury`&&i<0?i*n:i);for(let[n,r]of Object.entries(t.set??{}))if(n.startsWith(`built.`))uC(e,n.slice(6));else if(n.startsWith(`mods.`)){let t=n.slice(5);if(!(t in e.mods)||typeof r!=`number`)throw Error(`effect path "${n}" not found or not a number`);e.mods[t]=r}else lC(e,n,r)}function pC(e,t,n){try{fC(structuredClone(e),t)}catch(e){throw Error(`content/city: ${n}: ${e.message}`)}}var mC=/^([a-zA-Z.]+)(<=|>=|<|>|=)([\w.-]+)$/;function hC(e,t){if(t.includes(`|`))return t.split(`|`).some(t=>hC(e,t));let n=mC.exec(t);if(!n){if(/^[a-zA-Z.]+$/.test(t))return!!oC(e,t);throw Error(`bad condition "${t}"`)}let[,r,i,a]=n,o=oC(e,r);if(i===`=`)return String(o)===a;let s=Number(o),c=Number(a);if(Number.isNaN(s)||Number.isNaN(c))throw Error(`bad condition "${t}"`);return i===`<`?s<c:i===`>`?s>c:i===`<=`?s<=c:s>=c}function gC(e){let t=0;for(let[n,r]of Object.entries(e.delta??{})){let e=n.startsWith(`mods.`)&&Math.abs(r)<1?20:n===`groups.all`?4:1;t+=Math.abs(r)*e}return t+Object.keys(e.set??{}).length*5}var _C=(e,t,n)=>Math.max(t,Math.min(n,e)),vC=2026,yC=e=>vC+e,bC=()=>({water:0,power:0,health:0,money:0,mood:0,sky:0});function xC(e,t){let n=$.start,r={};for(let e of RS){if(!e.start)continue;let t={id:e.id,level:e.start.level,condition:e.start.condition,lastWork:e.start.lastWork};e.id===`sewage`&&(t.site=`river`),e.id===`coal`&&(t.mode=`coal`),r[e.id]=t}let i=Object.fromEntries(mS.map(e=>[e,{...n.districts[e]}])),a={seed:e,rngState:e>>>0,year:1,phase:`read`,inOffice:!0,snapElectionYear:null,outBy:null,treasury:n.treasury,debt:n.debt,grant:n.grant,waterFees:n.waterFees,waterSubsidy:n.waterSubsidy,futureFund:0,aquifer:n.aquifer,reservoir:n.reservoir,reservoirCap:n.reservoirCap,fuel:n.fuel,soil:n.soil,riverQuality:n.riverQuality,irrigationEfficiency:n.irrigationEfficiency,fertiliser:n.fertiliser,pumping:n.pumping,pumpExtra:0,nuclear:null,lastBurn:null,structures:r,jobs:[],districts:i,groups:{...n.groups},world:{grainPrice:n.world.grainPrice,gasPrice:n.world.gasPrice,sky:n.world.sky,weather:`normal`,heatwave:!1},kestra:{reputation:n.kestra.reputation,lowFlowYears:0,refuseYears:0},national:{grantCutYears:0},bindings:[],unlocked:[],cardsPlayed:[],currentCard:null,cardChoice:null,last:{meters:bC(),waterSat:{city:1,energy:1,kestra:1,farms:1},leakShare:0,overflow:0,untreated:0,plantFlooded:!1,powerSat:1,gridBlocked:0,coalUsed:0,nuclearUsed:0,gridBought:0,air:100,outflow:0,fire:0,failures:[],farmOutput:0,budget:{tax:0,grant:0,fees:0,cards:0,upkeep:0,coal:0,boughtPower:0,subsidy:0,projects:0,repairs:0,interest:0,net:0},migration:0},history:[],startSheet:void 0,pending:[],events:[],allEvents:[],log:[],seen:{heatwave:!1,overflow:!1,fire:!1,gridBlocked:!1},mods:YS()};return t&&(a.forceWeather=t),a}var SC=e=>mS.reduce((t,n)=>t+e.districts[n].pop,0);function CC(e){let t=e.districts,n=$.groups,r={oldtown:t.oldtown.pop*n.oldtownShare,farmers:t.farm.pop+t.highlands.pop,workers:t.energy.pop+t.oldtown.pop*(1-n.oldtownShare)},i=r.oldtown+r.farmers+r.workers;return{oldtown:n.placeWeight*r.oldtown/i,farmers:n.placeWeight*r.farmers/i,workers:n.placeWeight*r.workers/i,youth:n.youthWeight}}function wC(e){let t=CC(e);return KS.reduce((n,r)=>n+t[r]*e.groups[r],0)}function TC(e){let t=$.money,n=t.meterBase+t.meterTreasury*e.treasury-e.debt*t.meterDebt+t.meterNet*(e.mods.netAvg??0);return Math.max(0,Math.min(100,n))}function EC(e){let t=GS(e.id).levels;return t[Math.min(e.level,t.length)-1]}function DC(e){return e.mode===`retired`?0:EC(e).upkeep}function OC(e){let t=GS(e.id);return e.site===`hill`&&t.districtHill?t.districtHill:t.district}var kC=(e,t)=>!!e.structures[t],AC=(e,t)=>{let n=e.structures[t];return!!n&&!n.growing};function jC(e){let t=Object.values(e.structures).filter(e=>!!e).map(e=>({id:e.id,level:e.level,condition:e.condition,lastWork:e.lastWork}));return{year:e.year,meters:{...e.last.meters},structures:t,aquifer:e.aquifer,fuel:e.fuel,riverQuality:e.riverQuality,soil:e.soil,treasury:e.treasury,debt:e.debt,districts:Object.fromEntries(mS.map(t=>[t,e.districts[t].health]))}}var MC=$.triggers,NC=e=>e.trigger,PC=e=>e.world.weather===`dry`||e.world.weather===`drought`,FC=(e,t)=>e.year>=MC[t].from&&e.year<=MC[t].to,IC={year1:e=>e.year===1?MC.year1.weight:0,storm:(e,t)=>FC(e,`storm`)&&e.world.weather===`wet`&&t.sewage.overflow>0?MC.storm.weight:0,fireSeason:e=>FC(e,`fireSeason`)&&e.fuel>=MC.fireSeason.fuelAtLeast&&(PC(e)||e.world.heatwave)?MC.fireSeason.weight:0,heatDome:(e,t)=>FC(e,`heatDome`)&&e.world.heatwave&&t.power.meter<MC.heatDome.powerBelow?MC.heatDome.weight:0,promise:e=>FC(e,`promise`)?MC.promise.weight:0,grant:e=>FC(e,`grant`)?MC.grant.weight:0,dryYear:e=>FC(e,`dryYear`)&&PC(e)?MC.dryYear.weight:0,dam:e=>FC(e,`dam`)&&(e.last.meters.power<MC.dam.powerBelow||PC(e))?MC.dam.weight:0,windfall:e=>FC(e,`windfall`)?MC.windfall.weight:0,favour:e=>FC(e,`favour`)?MC.favour.weight:0};function LC(e,t){let n=t.reduce((e,[,t])=>e+t,0),r=e.next()*n;for(let[e,n]of t)if(r-=n,r<0)return e;return t[t.length-1][0]}function RC(e,t,n){let r=t.next(),i=BS.filter(t=>!e.cardsPlayed.includes(t.id)).map(t=>[t,IC[NC(t)](e,n)]).filter(([,e])=>e>0),a=i.find(([t])=>MC[NC(t)].to===e.year);return a?a[0]:i.length?LC({next:()=>r,int:()=>0,state:()=>0},i):null}function zC(e,t){if(t.droughtOnly&&e.world.weather!==`drought`)return!1;if(t.withKestra){let n=e.kestra.reputation;if(n<$.kestra.collabMin||n<(t.minRep??0)||e.kestra.refuseYears>0)return!1}return!0}var BC=(e,t)=>t.withKestra&&e.kestra.reputation>=$.kestra.cheapAt?$.kestra.cheapFactor:1;function VC(e,t){return e.currentCard?US(e.currentCard).options.filter(n=>zC(e,n)&&(!n.crewYears||t>0)).map(t=>{let n=BC(e,t);if(n===1)return t;let r={...t.now.delta};return r.treasury!==void 0&&r.treasury<0&&(r.treasury*=n),{...t,now:{...t.now,delta:r},cheaper:!0}}):[]}function HC(e,t){let n=CC(e),r=t.now.delta??{};return KS.reduce((e,t)=>e+n[t]*((r[`groups.${t}`]??0)+(r[`groups.all`]??0)),0)}function UC(e,t){let n=null;for(let r of e)(!n||HC(t,r)>HC(t,n)+1e-9)&&(n=r);return n}var WC=[`city`,`energy`,`kestra`,`farms`],GC=[`city`,`farms`,`energy`,`kestra`],KC=(e,t)=>e.structures[t]?.condition??0,qC=(e,t)=>e+(1-e)*(t/100),JC=(e,t)=>e.jobs.some(e=>e.project===t&&!e.paused&&e.crewYearsLeft>0);function YC(e,t=e.year){let n=e.nuclear;return!!n&&t>=(n.fromYear??0)&&t<=n.untilYear}function XC(e,t,n,r){let i=e.mods,a=$.weather.rain[t],o=t===`drought`,s=$.water,c=e.districts.oldtown.pop,l=s.cityNeed*c/s.cityPopRef*(e.waterSubsidy<=0?s.subsidyEndedFactor:1)*(1+(i.cityWater??0)),u=e.structures.mains,d=s.leak[Math.min(u?.level??1,s.leak.length)-1],f=_C(d.base+d.wear*(1-KC(e,`mains`)/100),0,.9),p=l/(1-f),m=e.structures.treatment?.level??1,h=s.treatment.capacity[Math.min(m,s.treatment.capacity.length)-1]*qC(s.treatment.worn,KC(e,`treatment`)),g={city:Math.min(p,h),energy:s.energyYard*(n?s.energyYardHeat:1),kestra:Math.max(0,(i.outflowMin??0)+(i.outflow??0)+(i.outflowExtra??0)),farms:s.farms*e.irrigationEfficiency*(o||n?s.farmsDry:1)},_=g.city+g.energy+g.kestra+g.farms,v=(s.pumping.free+e.pumpExtra)*(e.pumping===`metered`?s.pumping.meteredFactor:1)*Math.min(1,e.aquifer/s.pumpFullAt),y=s.surface*a+v,b=(i.damCracked??0)>0||KC(e,`dam`)<s.damWeakBelow,x=e.reservoirCap*(b?s.damWeakCap:1),S=Math.min(x,e.reservoir+s.inflowPerCap*e.reservoirCap*a),C=Math.min(s.release,S,Math.max(0,_-y));S-=C,y>_&&(S=Math.min(x,S+y-_));let w=y+C,T={city:0,energy:0,kestra:0,farms:0},E=w;for(let e of(i.farmsFirst??0)>0?GC:WC)T[e]=Math.min(E,g[e]),E-=T[e];let D=(e.structures.sewage?.level??1)>=3?s.reclaimed:0;T.farms=Math.min(g.farms,T.farms+D);let O=T.city*(1-f),k=T.city*f,A={city:l>0?Math.min(1,O/l):1,energy:g.energy>0?T.energy/g.energy:1,kestra:g.kestra>0?T.kestra/g.kestra:1,farms:g.farms>0?T.farms/g.farms:1};e.aquifer<s.dryBelow&&(A.farms=Math.min(A.farms,s.dryFarmCap));let ee=_C((s.meterCity*A.city+(1-s.meterCity)*A.farms)*100-(i.waterHit??0),0,100),j=s.recharge*a+(AC(e,`ponds`)?s.pondsRecharge:0)+(AC(e,`forestBelt`)?s.forestRecharge:0)+(i.recharge??0),te=_C(e.aquifer+j-v*s.pumpDrain,0,100),M=$.sewage,ne=O*M.wasteShare,N=M.storm[t],re=M.sewerCap*qC(M.worn,KC(e,`sewers`))+(kC(e,`stormTank`)?M.stormTank:0),ie=ne+N,ae=Math.min(ie,re),oe=Math.max(0,ie-re)+(i.overflowExtra??0),se=e.structures.sewage,ce=M.treated[Math.min(se?.level??1,3)-1]*(KC(e,`sewage`)<M.weakBelow?M.weakFactor:1),le=!!r&&se?.site!==`hill`&&t===`wet`&&oe>=M.floodOverflow&&r.flood<M.floodChance;(le||(i.plantDown??0)>0)&&(ce=0);let P=((i.outfallsClosed??0)>0?0:oe)+ae*(1-ce),ue=_C(M.river.base-M.river.untreated*P-(e.fertiliser===`high`?M.river.fertiliser:0),0,100),F=$.power,de=[`wind`,`solar`,`solarPark`].reduce((t,n)=>{let r=e.structures[n];return t+(r?EC(r).output??0:0)},0),fe=e.reservoirCap>0?S/e.reservoirCap:0,pe=(F.dam+(i.damPower??0))*a*fe,me=YC(e)?e.nuclear.units:0,he=e.structures.coal,ge=0,_e=!1;he&&he.mode!==`retired`&&!((i.coalDown??0)>0)&&(_e=he.mode===`gas`,ge=(_e?F.gas.cap:F.coal.cap)*qC(F.coal.worn,he.condition),JC(e,`convertCoal`)&&(ge*=F.convertingFactor));let ve=n&&(i.kestraLine??0)>0?F.kestraLine:0,ye=i.powerBonus??0,be=se?.level??1,xe=+!!kC(e,`coolRoofs`)+ +((e.structures.solarPark?.level??0)>=2),Se=n?Math.max(1,F.heat-F.heatCut*xe):1,Ce=F.demand.oldtown*c/F.demand.oldtownPopRef*(1+(i.cityPower??0))*Se+F.demand.energy*(1-(i.yardCut??0))*Se+(v*F.demand.pumps+F.demand.plants+F.demand.sewage[Math.min(be,3)-1]+k/F.demand.leakPer+(i.powerDemand??0))*Se,we=e.structures.grid,Te=Math.max(0,F.gridCap.base*qC(F.gridCap.worn,KC(e,`grid`))+((we?.level??1)>=2?F.gridCap.bigger:0)-(i.gridHit??0)),Ee=Math.min(Ce,Te),De=e=>{let t=Math.max(0,Math.min(Ee,e));return Ee-=t,t},Oe=De(de),ke=De(pe),Ae=De(ve),je=De(me),Me=De(ge),I=De(ye),Ne=De(F.gridBuy.max),Pe=Oe+ke+Ae+je+Me+I+Ne,Fe=de+pe+ve+me+ge+ye+F.gridBuy.max,L=Math.max(0,Math.min(Fe,Ce)-Te),Ie=Ce>0?Math.min(1,Pe/Ce):1,R=_e?0:Me,Le=_e?Me:0,Re=e.world.gasPrice/100,ze=Ne*Re*F.gridBuy.price,Be=me*(e.nuclear?.price??0),Ve=R*F.coal.fuel+Le*Re*F.gas.fuel,He=$.farm,Ue=Math.max(0,He.base*A.farms*(e.soil/He.soilRef)*He.fertiliser[e.fertiliser]*(1+(i.farmBonus??0))),We=Ue*(e.world.grainPrice/100)*He.income,Ge=SC(e)*He.foodPerPerson,Ke=Ge>0?Math.max(0,Ge-Ue)/Ge:0,qe=$.money,Je=!he||he.mode===`retired`?0:he.mode===`gas`?qe.yard.gas:qe.yard.coal,Ye=(qe.yard.base+Je)*Ie*A.energy*(1-(i.yardCut??0)),Xe=qe.tax.oldtown*c+qe.tax.energy*Ye+qe.tax.farm*Ue+(i.taxBonus??0),z=e.grant*(e.national.grantCutYears>0?$.national.grantCutFactor:1),B=Object.values(e.structures).reduce((e,t)=>e+(t?DC(t):0),0),Ze=((e.debt>qe.highDebt?qe.interestHigh:qe.interest)+(i.interestUp??0))*e.debt,Qe=i.income??0,$e=ze+Be,et=e.waterFees+(i.pumpFees??0),tt=Xe+z+et+Qe-B-Ve-$e-e.waterSubsidy-Ze,nt=R*F.emissions.coal+Le*F.gas.emissions+Ne*F.emissions.grid,rt=_C(100-R*F.airCoal-Le*F.gas.air,0,100);return{rain:a,water:{need:l,leakShare:f,draw:p,treatCap:h,cityGot:T.city,taps:O,leaked:k,demand:g,sat:A,pumping:v,reclaimed:D,supply:w,reservoir:S,aquifer:te,outflow:T.kestra,meter:ee},sewage:{wastewater:ne,storm:N,cap:re,overflow:oe,toPlant:ae,treatedShare:ce,untreated:P,flooded:le,riverTarget:ue},power:{demand:Ce,gridCap:Te,available:Fe,delivered:Pe,sat:Ie,renewables:de,dam:pe,nuclearUsed:je,nuclearPaid:Be,coalUsed:R,gasUsed:Le,gridBought:Ne,gridBlocked:L,meter:Ie*100,costGrid:ze,costFuel:Ve},farm:{output:Ue,income:We,importShare:Ke},yardOutput:Ye,money:{tax:Xe,grant:z,fees:et,income:Qe,upkeep:B,fuel:Ve,boughtPower:$e,subsidy:e.waterSubsidy,interest:Ze,running:tt},emissions:nt,air:rt,loads:{treatment:h>0?T.city/h:1,sewers:re>0?ne/re:1,grid:Te>0?Math.min(Fe,Ce)/Te:1,coal:ge>0?Me/ge:0}}}function ZC(e){return e.jobs.filter(e=>!e.paused&&e.crewYearsLeft>0).length+ +((e.mods.cardCrewYears??0)>0)}function QC(e,t=[]){return Math.max(0,$.crews-ZC(e)-t.length)}function $C(e,t,n){let{cost:r,crewYears:i,readyIn:a,sub:o,label:s}=t;if(t.id===`sewageUp`){let n=(e.structures.sewage?.level??1)+1,s=t.levels?.find(e=>e.level===n);s&&(r=e.structures.sewage?.site===`hill`&&s.costHill!==void 0?s.costHill:s.cost,i=s.crewYears,a=s.readyIn,o=s.sub??o)}return t.id===`pumping`&&e.pumping===`metered`&&(s=t.altLabel??s,o=t.altSub??o),t.id===`repair`&&n&&(r=GS(n).repairCost),{cost:r,crewYears:i,readyIn:a,sub:o,label:s}}function ew(e,t){let n=t.structure;if(!n)return 0;let r=GS(n),i=e.structures[n],a=i?DC(i):0,o=e=>r.levels[Math.min(e,r.levels.length)-1].upkeep;switch(t.kind){case`build`:return i?0:o(1);case`upgrade`:return o((i?.level??0)+1)-a;case`relocate`:return o(Math.max(2,i?.level??1))-a;case`retire`:return-a;default:return 0}}var tw=(e,t)=>e.jobs.find(e=>e.project===t),nw={renewMains:`mains`,sewageUp:`sewage`,moveSewage:`sewage`,substation:`grid`,convertCoal:`coal`,batteries:`solarPark`};function rw(e){let t=new Set(e.jobs.map(e=>nw[e.project]).filter(Boolean));return Object.values(e.structures).filter(e=>!!e&&e.condition<$.repair.below&&!e.growing&&e.mode!==`retired`&&!t.has(e.id))}var iw=(e,t)=>!t.unlock||e.unlocked.includes(t.id);function aw(e,t,n){let r=n.filter(e=>e.project===t.id),i=tw(e,t.id);if(i&&!t.repeatable)return i.paused?{status:`paused`,why:`Paused`}:{status:`running`,why:`Under way`};let a=ow(e,t);if(a)return{status:`done`,why:a};if(!iw(e,t))return{status:`locked`,why:`Opens ${t.unlockWhen??`later`}`};let o=sw(e,t,n);return r.length?t.id===`repair`?rw(e).filter(e=>!n.some(t=>t.project===`repair`&&t.target===e.id)).length?{status:`picked`}:{status:`picked`,why:`Everything that needs it is being repaired`}:{status:`picked`,why:`Already picked this year`}:o?{status:`unavailable`,why:o}:{status:`open`}}function ow(e,t){let n=t.structure?e.structures[t.structure]:void 0;switch(t.id){case`renewMains`:return(n?.level??1)>=2?`The mains are already renewed`:null;case`sewageUp`:return(n?.level??1)>=3?`The sewage plant is at its top level`:null;case`moveSewage`:return n?.site===`hill`?`The sewage plant is already on the hill`:null;case`batteries`:return(n?.level??0)>=2?`The solar field already has batteries`:null;case`substation`:return(n?.level??1)>=2?`The substation is already bigger`:null;case`retireCoal`:return n?.mode===`retired`?`The plant is closed`:null;case`convertCoal`:return n?.mode===`gas`?`The plant already burns gas`:null;case`nuclear`:return e.nuclear&&e.year<=e.nuclear.untilYear?`The contract runs until ${yC(e.nuclear.untilYear)}`:null;default:return t.kind===`build`&&t.structure&&kC(e,t.structure)?`Already built`:null}}function sw(e,t,n){let r=new Set(n.map(e=>e.project));switch(t.id){case`repair`:return rw(e).length?null:`Nothing needs repair`;case`sewageUp`:return tw(e,`moveSewage`)||r.has(`moveSewage`)?`Wait until the new plant on the hill is open`:null;case`moveSewage`:return tw(e,`sewageUp`)||r.has(`sewageUp`)?`Wait for the sewage plant upgrade to finish`:null;case`batteries`:return kC(e,`solarPark`)?null:`Needs the solar field first`;case`retireCoal`:return tw(e,`convertCoal`)||r.has(`convertCoal`)?`The plant is being converted to gas`:null;case`convertCoal`:return e.structures.coal?.mode===`retired`?`The coal plant is closed`:r.has(`retireCoal`)?`You are retiring the plant this year`:null;case`burn`:return e.fuel<15?`There is little dead wood left to burn`:null;default:return null}}function cw(e,t=[]){let n=QC(e,t),r=e.inOffice&&e.phase===`read`;return zS.map(i=>{let a=$C(e,i),{status:o,why:s}=aw(e,i,t),c=o===`picked`&&i.id===`repair`&&!s,l=r&&(o===`open`||c)&&n>0,u=s;!r&&(o===`open`||c)?u=e.phase===`ended`?`The game is over`:`You are out of office`:(o===`open`||c)&&n<=0&&(u=`No crew free`);let d={id:i.id,label:i.id===`repair`?`Repair a structure`:a.label,verb:i.verb,district:i.structure&&e.structures[i.structure]?OC(e.structures[i.structure]):i.district,sub:a.sub,cost:a.cost,crewYears:a.crewYears,readyIn:a.readyIn,upkeep:ew(e,i),faces:i.faces,status:o,can:l};if(i.id===`moveSewage`&&(d.district=`farm`),u&&!l&&(d.why=u),o===`locked`&&i.unlockWhen&&(d.unlockWhen=i.unlockWhen),i.id===`repair`){let n=rw(e).map(e=>({id:e.id,label:GS(e.id).label,condition:e.condition,cost:GS(e.id).repairCost}));d.targets=n,d.cost=n.length?Math.min(...n.map(e=>e.cost)):0,l&&!n.some(e=>!t.some(t=>t.project===`repair`&&t.target===e.id))&&(l=!1),d.can=l}return d})}function lw(e,t,n){let r=WS(t.project),{status:i,why:a}=aw(e,r,n),o=i===`picked`&&r.id===`repair`;if(i!==`open`&&!o)throw Error(`project "${t.project}" can't start: ${a??i}`);if(r.id===`repair`){if(!t.target)throw Error(`a repair needs a target`);if(!rw(e).some(e=>e.id===t.target))throw Error(`"${t.target}" doesn't need repair`);if(n.some(e=>e.project===`repair`&&e.target===t.target))throw Error(`"${t.target}" is already being repaired`)}}function uw(e,t){let n=WS(t.project),r=$C(e,n,t.target),i={project:n.id,startYear:e.year,crewYearsLeft:r.crewYears,costPerYear:r.cost/r.crewYears};if(t.target&&(i.target=t.target),e.jobs.push(i),fC(e,n.now),n.id===`nuclear`){let t=$.nuclear;e.bindings.push({id:`nuclear:${e.year}`,text:`Buy ${t.units} units of nuclear power a year until ${yC(e.year+t.years)}, needed or not`,dueYear:e.year+t.years,check:`nuclearContract`,penalty:{delta:{treasury:-t.exitYears*t.units*t.price}},broken:`Aurel ended the nuclear contract early and paid ${t.exitYears} years of payments.`,source:e.inOffice?`you signed the nuclear power contract`:`your successor signed the nuclear power contract`,sourceYear:e.year})}let a=n.id===`repair`?`Repair: ${GS(t.target).label}`:`${n.verb}: ${r.label}`;e.log.push({year:e.year,kind:n.id===`repair`?`repair`:`project`,id:n.id,label:a})}var dw=[`mains`,`sewers`,`sewage`,`treatment`],fw=(e,t)=>!!e.earmark&&(e.id!==`repair`||!!t.target&&dw.includes(t.target));function pw(e){for(let t of e.jobs){if(t.paused||t.crewYearsLeft<=0)continue;let n=WS(t.project),r=t.costPerYear;if(fw(n,t)&&(e.mods.earmark??0)>0){let t=Math.min(e.mods.earmark,r);e.mods.earmark=e.mods.earmark-t,r-=t}e.treasury-=r,e.mods.projectSpend=(e.mods.projectSpend??0)+r,--t.crewYearsLeft,t.crewYearsLeft===0&&(t.readyYear=e.year+Math.max(0,n.readyIn-n.crewYears),t.readyYear>e.year&&n.kind===`build`&&n.structure&&!kC(e,n.structure)&&(e.structures[n.structure]={id:n.structure,level:1,condition:100,lastWork:yC(e.year),growing:!0}))}}function mw(e){let t=[];for(let n of e.jobs)n.crewYearsLeft>0||(n.readyYear??e.year)>e.year?t.push(n):hw(e,n,!1);e.jobs=t}function hw(e,t,n){let r=WS(t.project),i=e.year,a=r.structure,o=a?e.structures[a]:void 0,s=e=>{e.condition=100,e.lastWork=yC(i),delete e.lastRepair},c=r.doneText??`${r.label}: done.`;switch(r.kind){case`repair`:{let n=t.target?e.structures[t.target]:void 0;n&&(n.condition=Math.min(100,n.condition+$.repair.amount),n.lastRepair=yC(i),n.id===`dam`&&(e.mods.damCracked=0),c=`Crews repaired the ${GS(n.id).label.toLowerCase()}.`);break}case`upgrade`:o&&(o.level=Math.min(GS(o.id).levels.length,o.level+1),s(o));break;case`build`:a&&(o?delete o.growing:e.structures[a]={id:a,level:1,condition:100,lastWork:yC(i)});break;case`retire`:o&&(o.mode=`retired`);break;case`convert`:o&&(o.mode=`gas`,s(o));break;case`relocate`:o&&(o.site=`hill`,o.level=Math.max(2,o.level),s(o));break;case`policy`:{let t=$.pumpingPolicy;e.pumping===`free`?(e.pumping=`metered`,e.mods.pumpFees=t.fees,fC(e,{delta:{"groups.farmers":t.meteredFarmers}}),c=`Farm pumping is now metered. Farmers pay for what they pump.`):(e.pumping=`free`,e.mods.pumpFees=0,fC(e,{delta:{"groups.farmers":t.freeFarmers}}),c=`Farmers can pump freely again.`);break}case`burn`:e.lastBurn=i;break;case`contract`:{let n=$.nuclear;e.nuclear={units:n.units,price:n.price,fromYear:t.startYear+1,untilYear:t.startYear+n.years,exitCost:n.exitYears*n.units*n.price};break}}fC(e,r.done),!n&&(!e.inOffice&&r.kind!==`repair`&&(c=`Your successor opens the ${r.label.toLowerCase()} you started in ${yC(t.startYear)}.`),e.events.push({year:i,kind:`built`,text:c,sourceId:r.id,sourceYear:t.startYear}))}function gw(e,t){let n=WS(t);ow(e,n)||(e.jobs=e.jobs.filter(e=>e.project!==t),n.kind===`build`&&n.structure&&delete e.structures[n.structure],hw(e,{project:t,startYear:e.year,crewYearsLeft:0,costPerYear:0},!0))}function _w(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return{next:n,int:(e,t)=>e+Math.floor(n()*(t-e+1)),state:()=>t}}dC(gw);function vw(e,t={}){let n=xC(e,t.forceWeather);bw(n);let r=XC(n,`normal`,!1),i=Hw(n,r,!1);n.mods.netAvg=r.money.running,n.last=Qw(n,r,{health:i,fire:0,failures:[],migration:0}),n.history=[n.last.meters],Iw(n,r),n.startSheet=jC(n);let a=_w(n.rngState);return Ew(n,a),n.rngState=a.state(),n.allEvents=[...n.events],n}var yw=!1;function bw(e){if(!yw){if($.startYear!==2026)throw Error(`content/city: startYear must be ${vC}`);for(let t of zS)pC(e,t.now,`project ${t.id} "now"`),pC(e,t.done,`project ${t.id} "done"`),t.unlock&&hC(e,t.unlock);for(let t of RS)t.failure&&pC(e,t.failure.effect,`structure ${t.id} failure`);for(let t of BS){t.onDraw&&pC(e,t.onDraw,`card ${t.id} "onDraw"`);for(let n of t.options){pC(e,n.now,`card ${t.id} option ${n.id} "now"`),n.binding&&pC(e,n.binding.penalty,`card ${t.id} option ${n.id} binding penalty`);for(let r of n.later)pC(e,r.effect,`card ${t.id} option ${n.id} "later"`),r.if&&hC(e,r.if)}}yw=!0}}function xw(e){return VC(e,QC(e))}function Sw(e){return{crews:[],option:UC(xw(e),e)?.id??null}}function Cw(e,t){if(e.phase===`ended`)throw Error(`the game has ended`);let n=structuredClone(e);return ww(n,t),n}function ww(e,t){if(e.phase===`ended`)throw Error(`the game has ended`);let n=_w(e.rngState);e.events=[],jw(e,e.inOffice?Tw(e,t):Sw(e),n),e.year>=$.years?(e.phase=`ended`,e.currentCard=null):(e.year+=1,Ew(e,n)),e.rngState=n.state(),e.allEvents.push(...e.events)}function Tw(e,t){let n=[...new Set(t.pause??[])],r=[...new Set(t.resume??[])];for(let t of n){let n=e.jobs.find(e=>e.project===t);if(!n||n.paused||n.crewYearsLeft<=0)throw Error(`project "${t}" is not under way, so it can't be paused`)}for(let t of r){let r=e.jobs.find(e=>e.project===t);if(!r||!r.paused)throw Error(`project "${t}" is not paused`);if(n.includes(t))throw Error(`project "${t}" can't be paused and resumed in the same year`)}let i=t.crews??[];for(let t=0;t<i.length;t++)lw(e,i[t],i.slice(0,t));let a=$.crews-ZC(e)+n.length-r.length,o=VC(e,a-i.length),s=t.option===null?o[0]?.id??null:t.option;if(s!==null){if(!e.currentCard)throw Error(`there is no card this year`);if(!o.some(e=>e.id===s))throw Error(`option "${s}" is not available`)}let c=s&&o.find(e=>e.id===s)?.crewYears?1:0;if(i.length+c>a)throw Error(`not enough crews: ${a} free, ${i.length+c} needed`);return{crews:i,option:s,pause:n,resume:r}}function Ew(e,t){e.phase=`read`,e.cardChoice=null,e.year>1&&Dw(e,t),Ow(e,t),kw(e),e.world.heatwave&&(e.seen.heatwave=!0);let n=RC(e,t,XC(e,e.world.weather,e.world.heatwave));e.currentCard=n?.id??null,n?.onDraw&&fC(e,n.onDraw),Aw(e);let r=e.world.weather;if(r!==`normal`||e.world.heatwave){let t={wet:`A wet year is coming.`,normal:``,dry:`A dry year is coming.`,drought:`Drought this year.`}[r];e.events.push({year:e.year,kind:`weather`,text:[t,e.world.heatwave?`A heatwave is on the way.`:``].filter(Boolean).join(` `)})}}function Dw(e,t){let n=$.world,r=e.mods,i=e=>_C(e,n.priceMin,n.priceMax),a=(r.grainShock??0)*n.shockDecay;r.grainShock=(r.grainShock??0)-a,e.world.grainPrice=i(e.world.grainPrice+t.int(-n.grainWalk,n.grainWalk)-a),e.year>=n.grainShock.from&&t.next()*100<n.grainShock.chance&&(e.world.grainPrice=i(e.world.grainPrice+n.grainShock.size),r.grainShock=(r.grainShock??0)+n.grainShock.size,e.events.push({year:e.year,kind:`info`,text:`World grain prices jumped. Food costs more in the shops.`}));let o=(r.gasShock??0)*n.shockDecay;if(r.gasShock=(r.gasShock??0)-o,e.world.gasPrice=i(e.world.gasPrice+t.int(-n.gasWalk,n.gasWalk)-o),e.year>=n.gasShock.from&&t.next()*100<n.gasShock.chance){e.world.gasPrice=i(e.world.gasPrice+n.gasShock.size),r.gasShock=(r.gasShock??0)+n.gasShock.size;let t=YC(e)?`World gas prices jumped. Power from the national grid costs more; the nuclear contract's price stays put.`:`World gas prices jumped. Power from the national grid costs more.`;e.events.push({year:e.year,kind:`info`,text:t})}}function Ow(e,t){let n=t.next(),r=t.next();if(e.forceWeather){e.world.weather=e.forceWeather,e.world.heatwave=!1;return}let i=$.weather,a={...i.chance},o=i.heatwave;if(e.world.sky<=0)Object.assign(a,i.skyGone.chance),o=i.skyGone.heatwave;else{let t=Math.floor((100-e.world.sky)/i.pressure.skyStep),n=t*i.pressure.shift/2;a.wet=Math.max(0,a.wet-n),a.normal=Math.max(0,a.normal-n),a.dry+=n,a.drought+=n,o+=t*i.pressure.heatwave}let s=[`wet`,`normal`,`dry`,`drought`],c=n*s.reduce((e,t)=>e+a[t],0),l=`normal`;for(let e of s)if(c-=a[e],c<0){l=e;break}l===`drought`&&e.year<=i.noDroughtRepeatUntil&&e.world.weather===`drought`&&(l=`dry`),e.world.weather=l,e.world.heatwave=r*100<o}function kw(e){if(e.inOffice||e.snapElectionYear!==e.year)return;let t=e.last.meters.mood,n=t>=$.elections.snapWin;e.snapElectionYear=null,e.log.push({year:e.year,kind:`election`,id:n?`snap-win`:`snap-lose`,label:`Snap election`}),n?(e.inOffice=!0,e.outBy=null,e.events.push({year:e.year,kind:`returned`,text:`Snap election. People like you: ${Math.round(t)}%. You are back in office.`})):e.events.push({year:e.year,kind:`snap-election`,text:`Snap election. People like you: ${Math.round(t)}%. ${e.outBy===`national`?`The national government stays in charge.`:`Your successor stays in office.`}`})}function Aw(e){for(let t of zS)t.unlock&&!e.unlocked.includes(t.id)&&hC(e,t.unlock)&&(e.unlocked.push(t.id),e.events.push({year:e.year,kind:`unlock`,text:t.unlockMessage??`${t.label} is now possible.`,sourceId:t.id}))}function jw(e,t,n){let r=e.year,i=e.world.weather,a=e.world.heatwave,o=e.last.air;for(let n of t.pause??[]){let t=e.jobs.find(e=>e.project===n);t.paused=!0,e.log.push({year:r,kind:`pause`,id:n,label:`Paused: ${n}`})}for(let n of t.resume??[]){let t=e.jobs.find(e=>e.project===n);delete t.paused,e.log.push({year:r,kind:`resume`,id:n,label:`Resumed: ${n}`})}for(let n of t.crews)uw(e,n);e.currentCard&&t.option&&Mw(e,t.option),pw(e),Pw(e),mw(e),Fw(e);let s=zw(e,n),c=n.next(),l=n.next();i===`wet`&&(e.mods.ashPending??0)>0&&(e.reservoirCap=Math.max(0,e.reservoirCap-e.mods.ashPending),e.reservoir=Math.min(e.reservoir,e.reservoirCap),e.mods.ashPending=0,e.events.push({year:r,kind:`info`,text:`Rain washed ash from the burned hills into the reservoir. It holds a little less now.`}));let u=XC(e,i,a,{flood:c});e.aquifer=u.water.aquifer,e.reservoir=u.water.reservoir;let d=$.sewage,f=e.riverQuality;e.riverQuality=_C(e.riverQuality+_C(u.sewage.riverTarget-e.riverQuality,-d.river.maxMove,d.river.maxMove),0,100),Bw(e,u,s);let p=Vw(e,l),m=$.farm.soil,h=AC(e,`drains`)?0:m.irrigation;e.fertiliser===`high`&&(h+=m.high),e.fertiliser===`mixed`&&(h+=m.mixed),e.soil=_C(e.soil+h,0,100);let g=$.water;e.reservoirCap=Math.max(0,e.reservoirCap-Math.max(0,g.siltPerYear-(AC(e,`forestBelt`)?g.forestSilt:0))),e.reservoir=Math.min(e.reservoir,e.reservoirCap),e.aquifer<g.saltyBelow&&(e.mods.saltYears=(e.mods.saltYears??0)+1),e.treasury+=u.money.running,e.national.grantCutYears>0&&--e.national.grantCutYears;let _=Hw(e,u,a);Uw(e,u,_,s.length,o),Kw(e,u,n,f),Jw(e);let v=Ww(e,u);e.world.sky=_C(e.world.sky-$.sky.world-u.emissions*$.sky.aurel,0,100),Gw(e,u,_),e.treasury<0&&(e.debt-=e.treasury,e.treasury=0);let y=u.money.running+(e.mods.cardMoney??0)-(e.mods.projectSpend??0)-(e.mods.repairSpend??0),b=$.money.netSmoothing;e.mods.netAvg=b*(e.mods.netAvg??0)+(1-b)*y,e.last=Qw(e,u,{health:_,fire:p,failures:s,migration:v}),u.sewage.overflow>=d.seenAt&&(e.seen.overflow=!0),u.power.gridBlocked>=$.power.blockedSeenAt&&(e.seen.gridBlocked=!0),p>0&&(e.seen.fire=!0),Iw(e,u),$.elections.years.includes(r)&&e.inOffice&&Yw(e,n),Zw(e),e.history.push(e.last.meters),e.kestra.refuseYears>0&&--e.kestra.refuseYears,(e.mods.cardCrewYears??0)>0&&--e.mods.cardCrewYears,e.mods.forestLoss=Math.max(0,(e.mods.forestLoss??0)-$.fire.forestRegrow),XS(e)}function Mw(e,t){let n=US(e.currentCard),r=n.options.find(e=>e.id===t);if(!r||!zC(e,r))throw Error(`option "${t}" is not available`);e.cardChoice=r.id,e.cardsPlayed.push(n.id),fC(e,r.now,BC(e,r));let i=r.cause??`you chose "${r.label}"`,a=e.inOffice?i:i.replace(/^you\b/,`your successor`),o=`${a} in ${yC(e.year)}`;if(r.later.forEach((t,i)=>{let a=e.year+t.in,s=t.repeat===`end`?Math.max(0,$.years-a):(t.repeat??1)-1,c={...t,hint:Nw(t.hint,a,a+s),dueYear:a,source:o,sourceYear:e.year,remaining:s,sourceId:n.id,key:`${n.id}:${r.id}:${i}`};t.landed&&(c.landed=Nw(t.landed,a,a+s)),e.pending.push(c)}),r.binding){let t=r.binding,i=t.dueBy??e.year+t.dueIn;e.bindings.push({id:`${n.id}:${r.id}`,text:Nw(t.text,i,i),dueYear:i,check:t.check,penalty:t.penalty,broken:t.broken,source:a,sourceYear:e.year})}r.crewYears&&(e.mods.cardCrewYears=r.crewYears),e.log.push({year:e.year,kind:e.inOffice?`card`:`successor`,id:`${n.id}:${r.id}`,label:r.label})}var Nw=(e,t,n)=>e.replaceAll(`{year}`,String(yC(t))).replaceAll(`{until}`,String(yC(n)));function Pw(e){let t=[],n=e.pending.filter(t=>t.dueYear<=e.year).sort((e,t)=>e.dueYear-t.dueYear);for(let n of e.pending)n.dueYear>e.year&&t.push(n);for(let r of n){if(r.if&&!hC(e,r.if)){r.repeat===void 0?t.push({...r,dueYear:e.year+1}):r.remaining>0&&t.push({...r,dueYear:e.year+1,remaining:r.remaining-1});continue}if(fC(e,r.effect),r.landed&&e.events.push({year:e.year,kind:`landed`,text:`${r.landed} This started when ${r.source}.`,source:r.source,sourceYear:r.sourceYear,sourceId:r.sourceId,weight:gC(r.effect),key:r.key}),r.remaining>0){let n={...r,dueYear:e.year+1,remaining:r.remaining-1};delete n.landed,t.push(n)}}e.pending=t}function Fw(e){let t=$.ageing,n=e.world.weather===`wet`||e.world.weather===`drought`,r={treatment:e.mods.loadTreatment,sewers:e.mods.loadSewers,grid:e.mods.loadGrid,coal:e.mods.loadCoal};for(let i of Object.values(e.structures)){if(!i||i.growing||i.mode===`retired`)continue;let e=GS(i.id),a=1+((r[i.id]??0)>t.stressAbove?t.stress:0)+(e.weatherStress&&n?t.weather:0);i.condition=Math.max(0,i.condition-EC(i).decay*a)}}function Iw(e,t){e.mods.loadTreatment=t.loads.treatment,e.mods.loadSewers=t.loads.sewers,e.mods.loadGrid=t.loads.grid,e.mods.loadCoal=t.loads.coal}function Lw(e){let t=GS(e.id),n=e.lastWork>2026&&t.work===`built`?`rebuilt`:t.work,r=e.lastRepair?` You patched it in ${e.lastRepair}; it needed more.`:``;return`It was ${n} in ${e.lastWork}.${r}`}function Rw(e){let t=$.failure;return!GS(e.id).failure||e.mode===`retired`||e.growing?0:_C((t.below-e.condition)*t.perPoint,0,1)}function zw(e,t){let n=[];for(let r of RS){let i=e.structures[r.id];if(!i||!r.failure)continue;let a=Rw(i);if(a<=0||t.next()>=a)continue;let o=Lw(i);fC(e,r.failure.effect),e.treasury-=r.repairCost,e.mods.repairSpend=(e.mods.repairSpend??0)+r.repairCost,i.condition=Math.min(100,i.condition+$.failure.patch),e.events.push({year:e.year,kind:`failure`,text:`${r.failure.text} ${o}`,source:o,sourceId:r.id,key:`failure:${r.id}`,weight:12}),n.push(r.id)}return e.mods.failures=n.length,n}function Bw(e,t,n){let r=$.sewage,i=e.structures.sewage;if(t.sewage.flooded&&i){let t=GS(`sewage`);e.events.push({year:e.year,kind:`failure`,text:`${t.flood?.text??`The sewage plant flooded.`} It was ${t.work} in ${i.lastWork}.`,source:`the sewage plant was put at the river mouth`,sourceId:`sewage`,key:`flood:sewage`,weight:10}),n.push(`sewage`)}t.sewage.overflow>=r.streetFloodAt?(fC(e,{delta:{"groups.oldtown":-r.streetOldtown}}),e.events.push({year:e.year,kind:`overflow`,text:`The sewers overflowed and the low streets flooded.`,source:`the old sewers can't carry the storm water`,sourceId:`sewers`,key:`overflow:streets`})):t.sewage.overflow>=r.seenAt&&e.events.push({year:e.year,kind:`overflow`,text:`The sewers overflowed into the river.`,sourceId:`sewers`,key:`overflow:river`})}function Vw(e,t){let n=$.fire,r=e.mods,i=n.growth+(e.world.weather===`wet`?n.wetGrowth:0)+(AC(e,`forestBelt`)?n.forestGrowth:0);e.fuel=_C(e.fuel+i,0,n.max);let a=$.weather.fireDanger[e.world.weather]+(e.world.heatwave?$.weather.fireDangerHeat:0);if(t>=e.fuel/100*a*(e.lastBurn===e.year-1?n.afterBurn:1)*(1-_C(r.fireChanceCut??0,0,1))*(1+(r.fireChanceUp??0)))return 0;let o=AC(e,`fireStation`),s=e.fuel*(AC(e,`firebreaks`)?n.firebreaks:1)*(o?n.station:1)*(1-_C(r.fireDamageCut??0,0,1));tC(e,`highlands`,-s*n.highlands),r.forestLoss=(r.forestLoss??0)+s*n.forestLoss,r.ashPending=(r.ashPending??0)+s*n.reservoirLoss,r.healthHit=(r.healthHit??0)+s*n.health;let c=Math.round(e.fuel);e.fuel=n.fuelAfter,fC(e,{delta:{"groups.youth":-n.youth}});let l=`A wildfire swept through the hills. Dead wood had built up to ${c}% of what the forest can hold.`;return s>n.housesAbove&&!o?(fC(e,{delta:{"groups.oldtown":-n.housesOldtown}}),e.treasury-=n.housesMoney,r.repairSpend=(r.repairSpend??0)+n.housesMoney,l+=` Houses at the forest edge burned.`):s>n.housesAbove&&(l+=` The fire crews saved the houses at the forest edge.`),e.events.push({year:e.year,kind:`fire`,text:l,source:`the dead wood in the hills`,sourceId:`fire`,key:`fire`,weight:s/4}),s}function Hw(e,t,n){let r=$.health,i=$.sewage,a=AC(e,`coolRoofs`),o=AC(e,`clinic`),s=n?a&&o?r.heatBoth:a||o?r.heatOne:r.heat:0,c=t.sewage.overflow>=i.streetFloodAt?i.streetHealth*t.sewage.overflow:0;return _C(100-t.power.coalUsed*r.coal-t.power.gasUsed*$.power.gas.health-s-c-(e.mods.healthHit??0)-t.sewage.untreated*r.untreated+(o?r.clinic:0),0,100)}function Uw(e,t,n,r,i){let a=$.land,o=e.mods,s=$.water,c=e.districts,l=e.structures.coal,u={highlands:a.highlands.base+a.highlands.river*e.riverQuality+a.highlands.silt*e.reservoirCap/a.highlands.siltRef-(o.forestLoss??0)+(AC(e,`forestBelt`)?a.highlands.forestBelt:0)+(o.targetHighlands??0),farm:a.farm.base+a.farm.soil*e.soil+a.farm.water*t.water.sat.farms-(e.fertiliser===`high`?a.farm.runoff:0)-(e.aquifer<s.dryBelow?a.farm.dry:0)+(o.targetFarm??0),oldtown:a.oldtown.base+a.oldtown.health*n+a.oldtown.water*t.water.meter-a.oldtown.crowd*Math.max(0,c.oldtown.pop-a.oldtown.crowdAbove)-a.oldtown.failure*r-Math.min(s.saltyMax,s.saltyHealth*(o.saltYears??0))+(o.targetOldtown??0),energy:a.energy.base+a.energy.air*i+a.energy.jobs*t.yardOutput/($.money.yard.base+$.money.yard.coal)+(l&&l.mode!==`retired`?a.energy.plant*l.condition/100:0)+(o.targetEnergy??0)};for(let t of mS){let n=c[t];n.health=_C(n.health+_C(u[t]-n.health,-a.maxMove,a.maxMove)+eC(e,t),0,100)}}function Ww(e,t){let n=$.people,r=e.districts,i=0;if(r.farm.health<n.farmHealthBelow||t.water.sat.farms<n.farmWaterBelow){let e=Math.min(n.move,Math.max(0,r.farm.pop-n.minPop));r.farm.pop-=e,r.oldtown.pop+=e,i+=e}if(i===0&&r.oldtown.health<r.farm.health-10&&r.oldtown.pop>$.start.districts.oldtown.pop){let e=Math.min(n.moveBack,r.oldtown.pop-$.start.districts.oldtown.pop);r.oldtown.pop-=e,r.farm.pop+=e,i-=e}return i}function Gw(e,t,n){let r=$.groups,i=r.oldtown,a=r.farmers,o=r.workers,s=r.youth,c=e.world.grainPrice,l=e.world.heatwave&&!AC(e,`coolRoofs`),u={oldtown:i.base+i.water*t.water.meter+i.health*n+i.power*t.power.meter+i.subsidy*e.waterSubsidy-i.grain*Math.max(0,c-100)-i.imports*t.farm.importShare*c-(l?i.heat:0)-i.crowd*Math.max(0,e.districts.oldtown.pop-i.crowdAbove),farmers:a.base+a.water*t.water.sat.farms+a.soil*(e.soil-a.soilRef)-(e.pumping===`metered`?a.metered:0)-a.grainSwing*Math.abs(c-100)-(e.aquifer<$.water.dryBelow?a.dry:0),workers:o.base+o.output*t.yardOutput+o.power*t.power.meter-o.gas*Math.max(0,e.world.gasPrice-100),youth:s.base+s.air*t.air-s.coal*t.power.coalUsed-s.debt*Math.max(0,e.debt-s.debtAbove)-s.sky*(100-e.world.sky)};for(let t of KS){let n=_C(u[t]-e.groups[t],-r.maxMove,r.maxMove);e.groups[t]=_C(e.groups[t]+n+QS(e,t),0,100)}}function Kw(e,t,n,r){let i=$.kestra,a=e.kestra,o=a.reputation,s=0;e.riverQuality<i.riverLow?s+=i.riverLowRep:e.riverQuality>i.riverHigh&&(s+=i.riverHighRep),e.riverQuality<i.riverLow&&r>=i.riverLow&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra complains that Aurel's sewage is fouling the river.`}),t.water.outflow<(e.mods.outflowMin??0)+(e.mods.outflow??0)-1e-9?(s+=i.lowFlowRep,a.lowFlowYears+=1,a.lowFlowYears===1&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra says too little of the river is reaching them.`})):a.lowFlowYears=0,a.reputation=_C(a.reputation+s,0,100);let c=a.reputation,l=e=>o>=e&&c<e,u=e=>o<e&&c>=e;u(i.cheapAt)&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra trusts Aurel. Working together now costs less.`}),l(i.cheapAt)&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra's goodwill is fading. Deals cost full price again.`}),l(i.collabMin)&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra won't work with Aurel for now.`}),u(i.collabMin)&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra is willing to work with Aurel again.`}),l(i.angryBelow)&&e.events.push({year:e.year,kind:`kestra`,text:`Kestra is angry with Aurel.`}),c<i.angryBelow&&(e.mods.blockRisk??0)>0&&n.next()<i.blockChance&&(e.treasury-=i.blockCost,e.mods.cardMoney=(e.mods.cardMoney??0)-i.blockCost,e.events.push({year:e.year,kind:`kestra`,text:`Kestra blocked the river trade in protest at the gorge dam.`}))}function qw(e,t){switch(t){case`coalClosed`:return!e.structures.coal||e.structures.coal.mode!==`coal`;case`firebreaks`:return!!e.structures.firebreaks;case`nuclearContract`:return!0;default:throw Error(`unknown binding check "${t}"`)}}function Jw(e){let t=[];for(let n of e.bindings){let r=qw(e,n.check),i=r&&n.check!==`nuclearContract`;if(e.year<n.dueYear&&!i){t.push(n);continue}if(r){let t=n.check===`nuclearContract`?`The nuclear power contract has run its course.`:`Aurel kept its promise to the national government: ${n.text.charAt(0).toLowerCase()}${n.text.slice(1)}.`;e.events.push({year:e.year,kind:`binding`,text:t,source:n.source,sourceYear:n.sourceYear,sourceId:n.id,key:`kept:${n.id}`})}else fC(e,n.penalty),e.events.push({year:e.year,kind:`binding`,text:`${n.broken} This started when ${n.source} in ${yC(n.sourceYear)}.`,source:`${n.source} in ${yC(n.sourceYear)}`,sourceYear:n.sourceYear,sourceId:n.id,key:`broken:${n.id}`,weight:gC(n.penalty)+10})}e.bindings=t}function Yw(e,t){let n=$.elections,r=e.last.meters.mood,i,a=!1;r>=n.win?i=!0:r<n.lose?i=!1:(a=!0,i=t.next()<(r-n.lose)/(n.win-n.lose));let o=Math.round(r),s=a?`Too close to call at ${o}%... ${i?`you win by a hair.`:`and you lose by a hair.`}`:`People like you: ${o}%. ${i?`You stay in office.`:`You lose the election.`}`;e.events.push({year:e.year,kind:`election`,text:s}),e.log.push({year:e.year,kind:`election`,id:i?`win`:`lose`,label:s}),i||Xw(e,`The voters chose someone else.`,`successor`)}function Xw(e,t,n){e.inOffice=!1,e.outBy=n;let r=e.year+$.elections.outYears+1;if(e.snapElectionYear=r<=$.years?r:null,e.year>=$.years)return;let i=n===`national`?`The national government takes over.`:`A successor takes over.`,a=e.snapElectionYear?`${i} A snap election comes in ${yC(r)}.`:`${i} It runs the city until the end.`;e.events.push({year:e.year,kind:`lost-office`,text:`${t} ${a}`})}function Zw(e){let t=$.collapse,n=e.last.meters,r=e.mods;if(r.streakWater=n.water<t.water?(r.streakWater??0)+1:0,r.streakPower=n.power<t.power?(r.streakPower??0)+1:0,r.streakMood=n.mood<t.mood?(r.streakMood??0)+1:0,e.inOffice){for(let[n,i,a]of[[`streakWater`,`dry-taps`,`Dry taps: two years without enough water.`],[`streakPower`,`blackouts`,`Blackouts: two dark years in a row.`],[`streakMood`,`unrest`,`Unrest: people have filled the streets for two years.`]])if(!((r[n]??0)<t.years)){r[n]=0,e.events.push({year:e.year,kind:`collapse`,text:`${a} The national government takes over the city.`}),e.log.push({year:e.year,kind:`collapse`,id:i,label:a}),Xw(e,`The city has collapsed.`,`national`);return}}}function Qw(e,t,n){let r={water:t.water.meter,power:t.power.meter,health:n.health,money:TC(e),mood:wC(e),sky:e.world.sky},i=e.mods,a=(i.income??0)+(i.cardMoney??0),o=i.projectSpend??0,s=i.repairSpend??0,c=t.money;return{meters:r,waterSat:{...t.water.sat},leakShare:t.water.leakShare,overflow:t.sewage.overflow,untreated:t.sewage.untreated,plantFlooded:t.sewage.flooded,powerSat:t.power.sat,gridBlocked:t.power.gridBlocked,coalUsed:t.power.coalUsed,nuclearUsed:t.power.nuclearUsed,gridBought:t.power.gridBought,air:t.air,outflow:t.water.outflow,fire:n.fire,failures:[...n.failures],farmOutput:t.farm.output,budget:{tax:c.tax,grant:c.grant,fees:c.fees,cards:a,upkeep:c.upkeep,coal:c.fuel,boughtPower:c.boughtPower,subsidy:c.subsidy,projects:o,repairs:s,interest:c.interest,net:c.running+(i.cardMoney??0)-o-s},migration:n.migration}}var $w=[`water`,`power`,`health`,`money`,`mood`,`sky`];function eT(e,t,n){let r=Math.imul(e>>>0^1540483477,2654435761);return r=Math.imul(r^t+1663821227,2246822507),r=Math.imul(r^(n+1)*668265263,3266489909),(r^r>>>16)>>>0}var tT=e=>Sw(e);function nT(e){if(e.kind===`failure`&&e.sourceId){let t=GS(e.sourceId);return e.key?.startsWith(`flood:`)?t.flood?.short??t.failure?.short??e.text:t.failure?.short??e.text}return e.kind===`fire`?`A wildfire in the hills`:e.text.replace(/ This started when .*$/,``)}var rT=e=>e.kind===`failure`||e.kind===`fire`||e.kind===`landed`||e.kind===`binding`&&!!e.key?.startsWith(`broken:`);function iT(e,t,n={}){let r=Math.max(1,n.samples??$.lens.samples),i=Math.min($.years,n.toYear??$.years),a=[],o=new Map;for(let n=0;n<r;n++){let r=structuredClone({...e,allEvents:[]});r.rngState=eT(e.seed,e.year,n);let s=!0;for(;r.phase!==`ended`&&r.year<=i;){ww(r,s?t:tT(r)),s=!1;for(let e of r.events){if(!rT(e))continue;let t=`${e.kind}|${e.key??e.sourceId??e.text}`,r=o.get(t)??{e,years:new Map};o.has(t)||o.set(t,r),r.years.has(n)||r.years.set(n,e.year),e.year<r.e.year&&(r.e=e)}}a.push(r)}let s={};for(let e of $w){let t=a.map(t=>t.last.meters[e]).sort((e,t)=>e-t),n=t.length%2?t[(t.length-1)/2]:(t[t.length/2-1]+t[t.length/2])/2;s[e]={min:t[0],mid:n,max:t[t.length-1]}}let c=a[0],l=1/0;for(let e of a){let t=$w.reduce((t,n)=>t+Math.abs(e.last.meters[n]-s[n].mid),0);t<l-1e-9&&(l=t,c=e)}let u=_C($w.reduce((e,t)=>e+(s[t].max-s[t].min),0)/$w.length/$.lens.spreadFull,0,1),d=Math.min(r,Math.ceil($.lens.likelyRuns/$.lens.samples*r)),f=[];for(let{e,years:t}of o.values()){if(t.size<d)continue;let n=[...t.values()].sort((e,t)=>e-t),r={text:nT(e),year:n[0],runs:t.size,likelyBy:n[d-1],kind:e.kind};e.sourceId&&(r.sourceId=e.sourceId),f.push(r)}return f.sort((e,t)=>e.likelyBy-t.likelyBy||e.year-t.year||e.text.localeCompare(t.text)),{toYear:i,median:c,runs:a,bands:s,spread:u,likely:f}}function aT(e){let t=e.startSheet.districts,n=_C(50+mS.reduce((n,r)=>n+e.districts[r].health-t[r],0)/mS.length*$.score.landScale,0,100),r=e.last.meters,i=(r.mood+r.health+r.water+r.power)/4,a=r.money;return{land:n,people:i,money:a,total:(n+i+a)/3}}function oT(e){let t=e.last,n=[],r=(e,t,r)=>{r&&!n.some(n=>n.district===e&&n.kind===t)&&n.push({district:e,kind:t})},i=e.structures.sewage,a=i?OC(i):`energy`;return r(`oldtown`,`water`,t.waterSat.city<.95||t.meters.water<80),r(`farm`,`water`,t.waterSat.farms<.8),r(`energy`,`water`,t.waterSat.energy<.95),r(`highlands`,`water`,e.reservoirCap>0&&e.reservoir/e.reservoirCap<.4),r(`oldtown`,`power`,t.powerSat<.95),r(`energy`,`power`,t.powerSat<.85||t.gridBlocked>=$.power.blockedSeenAt),r(`oldtown`,`heat`,e.world.heatwave&&!AC(e,`coolRoofs`)),r(`energy`,`smoke`,t.air<70),r(`highlands`,`smoke`,t.fire>0),r(`highlands`,`fire`,e.fuel>=70),r(`farm`,`salt`,e.soil<62&&!AC(e,`drains`)),r(`oldtown`,`salt`,e.aquifer<$.water.saltyBelow),r(`oldtown`,`sewage`,t.overflow>=$.sewage.seenAt),r(a,`sewage`,t.plantFlooded||t.untreated>10),r(`oldtown`,`people`,t.migration>0||e.districts.oldtown.pop>$.land.oldtown.crowdAbove),r(`farm`,`people`,t.migration>0),r(`oldtown`,`food`,e.world.grainPrice>120),r(`farm`,`food`,t.farmOutput<45),n}var sT=(e,t)=>e<=t?`This year`:`By ${yC(e)}`;function cT(e,t){let n=e.year,r=[],i=e=>({dueYear:e,inYears:Math.max(0,e-n)});for(let t of e.pending){let e={hint:t.hint,source:t.source,...i(t.dueYear),kind:`pending`};t.sourceId&&(e.sourceId=t.sourceId),r.push(e)}for(let t of e.jobs){let e=WS(t.project),a=t.target?`${e.label}: ${GS(t.target).label.toLowerCase()}`:e.label,o=`${e.cause} in ${yC(t.startYear)}`;if(t.paused){r.push({hint:`Paused: ${a}, ${t.crewYearsLeft} year${t.crewYearsLeft>1?`s`:``} of work left`,source:o,...i(n+t.crewYearsLeft-1),kind:`job`,sourceId:e.id});continue}let s=t.readyYear??n+t.crewYearsLeft-1+Math.max(0,e.readyIn-e.crewYears),c=t.target?`crews finish repairing the ${GS(t.target).label.toLowerCase()}`:e.readyHint;r.push({hint:`${sT(s,n)}: ${c}`,source:o,...i(s),kind:`job`,sourceId:e.id})}let a=e.mods.cardCrewYears??0;if(a>0){let t=[...e.log].reverse().find(e=>(e.kind===`card`||e.kind===`successor`)&&lT(e.id)),o=n+a-1;r.push({hint:`Until ${yC(o)}: a crew is busy on ${t?`"${t.label}"`:`a card deal`}`,source:t?`you chose "${t.label}" in ${yC(t.year)}`:`a card deal`,...i(o),kind:`job`,...t?{sourceId:t.id.split(`:`)[0]}:{}})}for(let t of e.bindings)r.push({hint:t.text,source:`${t.source} in ${yC(t.sourceYear)}`,...i(t.dueYear),kind:`binding`,sourceId:t.id});for(let t of Object.values(e.structures)){if(!t)continue;let e=Rw(t);if(e<=0)continue;let a=GS(t.id).label;r.push({hint:`This year: the ${a.toLowerCase()} could fail (${Math.round(e*100)}% chance)`,source:Lw(t),...i(n),kind:`risk`,sourceId:t.id})}return t&&r.push(...uT(e,t)),r.sort((e,t)=>e.dueYear-t.dueYear||Number(!!e.planned)-Number(!!t.planned))}function lT(e){let[t,n]=e.split(`:`);try{return!!US(t).options.find(e=>e.id===n)?.crewYears}catch{return!1}}function uT(e,t){let n=e.year,r=[];for(let i of t.crews??[]){let t=WS(i.project),a=n+$C(e,t,i.target).readyIn-1,o=i.target?`crews finish repairing the ${GS(i.target).label.toLowerCase()}`:t.readyHint;r.push({hint:`${sT(a,n)}: ${o}`,source:`you plan to start it in ${yC(n)}`,dueYear:a,inYears:a-n,planned:!0,kind:`planned`,sourceId:t.id})}let i=t.option?xw(e).find(e=>e.id===t.option):void 0;if(i&&e.currentCard){let t=`${i.cause??`you chose "${i.label}"`} in ${yC(n)}`;for(let a of i.later){let i=n+a.in,o=a.repeat===`end`?$.years:i+(a.repeat??1)-1,s=a.hint.replaceAll(`{year}`,String(yC(i))).replaceAll(`{until}`,String(yC(o)));r.push({hint:s,source:t,dueYear:i,inYears:a.in,planned:!0,kind:`planned`,sourceId:e.currentCard})}if(i.binding){let a=i.binding.dueBy??n+i.binding.dueIn;r.push({hint:i.binding.text.replaceAll(`{year}`,String(yC(a))),source:t,dueYear:a,inYears:a-n,planned:!0,kind:`planned`,sourceId:e.currentCard})}}return r}function dT(e){let t=e.events.find(e=>e.kind===`unlock`);if(t)return t.text;let n=e.pending.find(t=>t.dueYear===e.year&&t.landed&&(!t.if||hC(e,t.if)));if(n)return`Heads up: ${n.hint.replace(/^(By|Until) \d{4}: /,``)}. That goes back to when ${n.source}.`;let r=Object.values(e.structures).filter(e=>!!e&&Rw(e)>0).sort((e,t)=>Rw(t)-Rw(e))[0];if(r)return`The ${GS(r.id).label.toLowerCase()} could fail this year. ${Lw(r)}`;let i=e.bindings.find(t=>t.dueYear<=e.year+1&&t.check!==`nuclearContract`);if(i)return`Don't forget: ${i.text.charAt(0).toLowerCase()}${i.text.slice(1)}. The national government is watching.`;let a=e.pending.find(t=>t.dueYear===e.year+1&&t.landed);if(a)return`Next year: ${a.hint.replace(/^(By|Until) \d{4}: /,``)}.`;let o=oT(e);return e.fuel>=70?`The forest is thick with dead wood. A dry summer could set it alight.`:o.some(e=>e.kind===`salt`&&e.district===`farm`)?`The fields are getting salty. Keep an eye on the farm belt.`:e.aquifer<40?`The ground water is low. Look at the blue band in the island's edge.`:o.some(e=>e.kind===`sewage`)?`The sewers are overflowing into the river. Kestra notices.`:o.some(e=>e.kind===`power`)?`Power is short. The old town feels it first.`:o.some(e=>e.kind===`water`)?`There isn't enough water for everyone.`:null}function fT(e){let t=new Map(e.jobs.map(e=>[WS(e.project).structure??e.target,e]));return Object.values(e.structures).filter(e=>!!e).map(n=>{let r=GS(n.id),i={id:n.id,label:r.label,district:OC(n),level:n.level,condition:n.condition,lastWork:n.lastWork,risk:Rw(n),repairCost:r.repairCost},a=[];n.growing&&a.push(`Still growing`),n.mode===`retired`&&a.push(`Closed`),n.mode===`gas`&&a.push(`Burns gas`),n.id===`sewage`&&a.push(n.site===`hill`?`On high ground: it never floods`:`At the river mouth: it floods in storms`),n.id===`dam`&&(e.mods.damCracked??0)>0&&a.push(`Cracked: the reservoir stays half empty until it's repaired`),n.lastRepair&&a.push(`Patched in ${n.lastRepair}`);let o=t.get(n.id);return o&&a.push(o.paused?`Work paused`:`Work under way`),a.length&&(i.note=a.join(`. `)),i})}var pT={mains:`repairs`,treatment:`repairs`,dam:`repairs`,sewers:`sewage`,sewage:`sewage`,coal:`power`,grid:`power`};function mT(e,t){let n=[...e.allEvents.filter(e=>!!e.source&&(e.kind===`landed`||e.kind===`failure`||e.kind===`fire`||e.kind===`binding`&&!!e.key?.startsWith(`broken:`)))].sort((e,t)=>(t.weight??0)-(e.weight??0)||e.year-t.year).slice(0,3),r=n.map(e=>{let t=/ This started when (.*)\.$/.exec(e.text),n={text:t?e.text.slice(0,t.index):e.kind===`failure`?e.text.replace(` ${e.source}`,``):e.text,cause:e.kind===`failure`&&e.key?.startsWith(`failure:`)?e.source:e.kind===`fire`?`Dead wood had built up in the hills.`:`This started when ${t?.[1]??e.source}.`,year:e.year};return e.sourceId&&(n.sourceId=e.sourceId),n}),i=[],a=[];for(let e of n)if(e.kind===`fire`)i.push(`fire`);else if(e.kind===`failure`&&e.sourceId)i.push(pT[e.sourceId]??`repairs`);else if(e.sourceId&&/^[CL]\d+$/.test(e.sourceId))a.push(e.sourceId),i.push(US(e.sourceId).system);else if(e.sourceId?.includes(`:`)){let t=e.sourceId.split(`:`)[0];/^[CL]\d+$/.test(t)&&(a.push(t),i.push(US(t).system))}for(let t of e.cardsPlayed)a.includes(t)||a.push(t);let o=[...a.map(e=>[...US(e).facts]),...i.map(e=>[...$.handover.systemFacts[e===`repairs`?`water`:e]??[]])],s=[],c=$.handover.facts;for(;s.length<c&&o.some(e=>e.length);)for(let e of o){let t=e.shift();if(!t||s.some(e=>e.id===t)||s.length>=c)continue;let n=VS.find(e=>e.id===t&&e.confidence===`V`);n&&s.push({id:n.id,text:n.text,source:n.source})}let l=i[0]??(a[0]?US(a[0]).system:`water`),u=$.handover.questions[l]??$.handover.questions.water??``,d=t?.likely??(e.phase===`ended`?[]:iT(e,Sw(e)).likely);return{score:aT(e),inherited:e.startSheet,now:jC(e),consequences:r,coming:d,bindings:[...e.bindings],facts:s,question:u,inOffice:e.inOffice}}function hT(e){return yC(e)}function gT(e,t){return vw(e,t)}function _T(e,t){return Cw(e,t)}function vT(e,t){return QC(e,t)}function yT(e,t){return cw(e,t)}function bT(e){return fT(e)}function xT(e){return xw(e)}function ST(e){return US(e)}function CT(e){return Sw(e)}function wT(e){return oT(e)}function TT(e,t){return cT(e,t)}function ET(e,t,n){return iT(e,t,n)}function DT(e,t){return mT(e,t)}function OT(e){return CC(e)}function kT(e){return dT(e)}var AT=[`mains`,`sewers`,`treatment`,`sewage`,`coal`,`grid`,`dam`,`wind`,`solar`],jT={forestBelt:`forest`,drip:`drip`,clinic:`clinic`,solarPark:`solar`,drains:`drains`,ponds:`ponds`,coolRoofs:`coolroofs`,firebreaks:`firebreaks`,stormTank:`stormtank`,fireStation:`firestation`},MT={forestBelt:`forest`,drip:`drip`,clinic:`clinic`,solarPark:`solar`,batteries:`batteries`,drains:`drains`,ponds:`ponds`,coolRoofs:`coolroofs`,firebreaks:`firebreaks`,stormTank:`stormtank`,fireStation:`firestation`,substation:`grid`,moveSewage:`sewagehill`},NT={renewMains:`mains`,sewageUp:`sewage`},PT=e=>Math.max(0,Math.min(1,e));function FT(e,t=[]){let n=e.structures,r=e.last,i=e.districts,a={};for(let[e,t]of Object.entries(jT)){let r=n[e];r&&(a[t]=r.growing?`building`:`done`)}n.solarPark&&n.solarPark.level>=2&&(a.batteries=`done`),n.grid&&n.grid.level>=2&&(a.grid=`done`),n.mains&&n.mains.level>=2&&(a.leaks=`done`),(e.mods.damPower??0)>0?a.bigdam=`done`:(e.mods.cardCrewYears??0)>0&&(a.bigdam=`building`);let o=[],s=[...e.jobs.filter(e=>!e.paused).map(e=>({project:e.project,target:e.target})),...t];for(let e of s){let t=MT[e.project];t&&a[t]!==`done`&&(a[t]=`building`);let n=e.project===`repair`?e.target:NT[e.project];n&&AT.includes(n)&&o.push(n)}let c=s.some(e=>e.project===`convertCoal`),l={};for(let e of AT)n[e]&&(l[e]=n[e].condition);let u=n.coal,d=$.power.coal.cap,f=n.sewage,p=PT((e.mods.forestLoss??0)/30*.8);return{...Bf,health:{headwaters:i.highlands.health,farm:i.farm.health,capital:i.oldtown.health,towns:i.oldtown.health,industry:i.energy.health},aquifer:e.aquifer,reservoirFill:e.reservoirCap>0?PT(e.reservoir/e.reservoirCap):0,river:PT(r.outflow/22),soil:e.soil,farmWater:PT(r.waterSat.farms),weather:e.world.weather,heatwave:e.world.heatwave,air:r.air,coal:u&&u.mode===`coal`?PT(r.coalUsed/d):0,capitalShare:50,built:a,kestraHealth:(e.riverQuality+e.kestra.reputation)/2,protest:Object.values(e.groups).some(e=>e<35),metered:e.pumping===`metered`,condition:l,repairing:o,failures:r.failures.filter(e=>AT.includes(e)),overflow:r.overflow,plantFlooded:r.plantFlooded,sewage:f?{level:f.level,site:f.site??`river`}:void 0,coalMode:c?`converting`:u?.mode??`retired`,fire:r.fire,burnt:p,nuclear:!!e.nuclear&&e.year>=(e.nuclear.fromYear??0),riverQuality:e.riverQuality,leaks:r.leakShare}}var IT={highlands:`headwaters`,farm:`farm`,oldtown:`town`,energy:`energy`};function LT(e){let t=e.structures.sewage?.site===`hill`;return wT(e).map(e=>e.kind===`sewage`&&e.district!==`oldtown`?{kind:e.kind,at:t?`farm`:`river`}:e.district===`oldtown`&&(e.kind===`people`||e.kind===`food`)?{kind:e.kind,at:`homes`}:{kind:e.kind,at:IT[e.district]})}var RT={headwaters:`highlands`,farm:`farm`,capital:`oldtown`,towns:`oldtown`,industry:`energy`,aquifer:null,kestra:null},zT={highlands:`Highlands`,farm:`Farm belt`,oldtown:`Old town`,energy:`Energy yard`},BT={headwaters:{name:`Highlands`,line:`Forest, the reservoir and the dam. The river starts here. Dry undergrowth builds up every year, and it burns.`,groups:[]},farm:{name:`Farm belt`,line:`Fields and wells. Farmers pump from the ground water under everyone.`,groups:[`farmers`]},capital:{name:`Old town`,line:`The town hall, housing and shops, with old pipes and sewers underneath. First to feel leaks, floods and heat.`,groups:[`oldtown`,`youth`]},towns:{name:`Old town`,line:`The newer houses on the edge of the old town. They share its pipes, sewers and power.`,groups:[`oldtown`,`youth`]},industry:{name:`Energy yard`,line:`The coal plant, wind and solar, the water treatment plant and the substation. Jobs, power and smoke.`,groups:[`workers`]},aquifer:{name:`Ground water`,line:`The blue band in the island's edge. Farms and the city both drink from it, and nobody sees it fall.`,groups:[]},kestra:{name:`Kestra, downstream`,line:`The next town down the river. They get the water you let through, and whatever your sewers spill into it.`,groups:[]}},VT={wet:`A wet year`,normal:`A normal year`,dry:`A dry year`,drought:`Drought`},HT={wet:`sky`,normal:`sky`,dry:`heat`,drought:`heat`},UT={oldtown:`Old-town residents`,farmers:`Farmers`,workers:`Workers`,youth:`Young people`,kestra:`Kestra`,national:`National government`},WT={landed:`hourglass`,unlock:`lock`,built:`build`,failure:`repair`,fire:`fire`,overflow:`sewage`,binding:`national`,election:`ballot`,"snap-election":`ballot`,"lost-office":`ballot`,returned:`ballot`,collapse:`fire`,kestra:`share`,national:`national`,weather:`sky`,info:`coin`},GT=(e,t)=>`${e} ${t}${e===1?``:`s`}`,KT=(e,t=`0 0 24 24`)=>`<svg viewBox="${t}" aria-hidden="true">${e}</svg>`,qT={water:KT(`<path d="M12 2.5c3.8 4.9 6.5 8.5 6.5 11.7a6.5 6.5 0 0 1-13 0C5.5 11 8.2 7.4 12 2.5z" fill="#5DB3DA"/><ellipse cx="9.6" cy="13" rx="1.5" ry="2.5" fill="#fff" opacity=".6"/>`),food:KT(`<path d="M12 22V9" stroke="#A7864A" stroke-width="2" stroke-linecap="round"/><g fill="#F2C14E"><ellipse cx="12" cy="5" rx="2.4" ry="3.4"/><ellipse cx="8.6" cy="9.5" rx="2.2" ry="3.3" transform="rotate(-32 8.6 9.5)"/><ellipse cx="15.4" cy="9.5" rx="2.2" ry="3.3" transform="rotate(32 15.4 9.5)"/><ellipse cx="8.8" cy="14.5" rx="2.1" ry="3.1" transform="rotate(-38 8.8 14.5)"/><ellipse cx="15.2" cy="14.5" rx="2.1" ry="3.1" transform="rotate(38 15.2 14.5)"/></g>`),power:KT(`<path d="M13.8 2 5 13.6h6.2L9.6 22 19 9.8h-6.1L13.8 2z" fill="#F6B042"/>`),money:KT(`<circle cx="12" cy="12" r="9" fill="#F6CF5A"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#D9A731" stroke-width="1.6"/>`),mood:KT(`<circle cx="12" cy="12" r="9.5" fill="#FFD978"/><circle cx="9" cy="10" r="1.3" fill="#4A3A2E"/><circle cx="15" cy="10" r="1.3" fill="#4A3A2E"/><path d="M8 14q4 3.4 8 0" stroke="#4A3A2E" stroke-width="1.8" fill="none" stroke-linecap="round"/>`),sky:KT(`<circle cx="12" cy="12" r="9.5" fill="#DDEFF7"/><path d="M6 14a3 3 0 0 1 3-3 4 4 0 0 1 7.6 1A2.6 2.6 0 0 1 17 17H8a2.5 2.5 0 0 1-2-3z" fill="#fff" stroke="#9CC6DA" stroke-width="1.2"/>`),salt:KT(`<path d="M12 22V12c0-4-3-6-6-5" stroke="#B59A5E" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M6 7c-2 1-3 4-2 6 2-1 3-3 2-6z" fill="#D8C27E"/><path d="M8 22h8" stroke="#A07550" stroke-width="2.2" stroke-linecap="round"/><circle cx="16" cy="9" r="1.4" fill="#fff" stroke="#C9C1AE"/><circle cx="18.5" cy="12.5" r="1.1" fill="#fff" stroke="#C9C1AE"/>`),heat:KT(`<circle cx="12" cy="12" r="5" fill="#F6A24E"/><g stroke="#F6A24E" stroke-width="2" stroke-linecap="round"><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></g>`),people:KT(`<circle cx="8" cy="8" r="3" fill="#E6A67C"/><circle cx="16" cy="8" r="3" fill="#C68B5E"/><path d="M2 20c0-4 3-6 6-6s6 2 6 6zM10 20c0-4 3-6 6-6s6 2 6 6z" fill="#8397A8"/><path d="M19 3l3 3-3 3" stroke="#4A3A2E" stroke-width="1.6" fill="none"/>`),hourglass:KT(`<path d="M6 3h14M6 23h14" stroke="#A7864A" stroke-width="2.4" stroke-linecap="round"/><path d="M8 3c0 6 10 6 10 10S8 17 8 23h10c0-6-10-6-10-10S18 7 18 3z" fill="#F7DFA0" stroke="#A7864A" stroke-width="1.6"/>`,`0 0 26 26`),ballot:KT(`<rect x="7" y="16" width="26" height="18" rx="4" fill="#E6A67C"/><rect x="12" y="15" width="16" height="3" rx="1.5" fill="#B9774E"/><rect x="14" y="5" width="12" height="13" rx="2" fill="#fff" stroke="#EADCC8" stroke-width="1.5" transform="rotate(-8 20 11)"/><path d="M16.5 11l2.5 2.5 4.5-5" stroke="#6DBE7A" stroke-width="2.2" fill="none" stroke-linecap="round" transform="rotate(-8 20 11)"/>`,`0 0 40 40`),flag:KT(`<circle cx="21" cy="21" r="20" fill="#6FB4D6"/><path d="M8 25q6.5-6 13 0t13 0" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M12 18l5-6 4 5 3-3 5 5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linejoin="round"/>`,`0 0 42 42`),kflag:KT(`<circle cx="21" cy="21" r="20" fill="#E6A67C"/><path d="M9 27h24M13 27V17l8-6 8 6v10" stroke="#fff" stroke-width="3" fill="none" stroke-linejoin="round"/>`,`0 0 42 42`),lock:KT(`<rect x="5" y="11" width="14" height="10" rx="2.5" fill="#CDBFA8"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="#CDBFA8" stroke-width="2.4" fill="none"/>`),build:KT(`<path d="M4 20h16" stroke="#A7864A" stroke-width="2" stroke-linecap="round"/><path d="M7 20V6h2v14M8 6h10" stroke="#F2B544" stroke-width="2.2"/><path d="M16 6v5" stroke="#555" stroke-width="1.4"/>`),forest:KT(`<path d="M10 3 4 13h4l-3 5h10l-3-5h4z" fill="#6FBE77"/><path d="M10 18v4" stroke="#A07550" stroke-width="2"/><path d="M18 8l-3 5h2l-2 4h6l-2-4h2z" fill="#5FAE6A"/><path d="M18 17v3" stroke="#A07550" stroke-width="1.6"/>`),drip:KT(`<path d="M3 8h18" stroke="#2F4F5F" stroke-width="2" stroke-linecap="round"/><path d="M7 11c1.2 1.6 2 2.8 2 3.8a2 2 0 0 1-4 0c0-1 .8-2.2 2-3.8zM16 11c1.2 1.6 2 2.8 2 3.8a2 2 0 0 1-4 0c0-1 .8-2.2 2-3.8z" fill="#5DB3DA"/><path d="M3 21c3-2 6-2 9 0s6 2 9 0" stroke="#9ACB75" stroke-width="2" fill="none"/>`),meter:KT(`<rect x="6" y="6" width="12" height="15" rx="2" fill="#4C93C8"/><circle cx="12" cy="11" r="3.5" fill="#fff"/><path d="M12 11l2-1.6" stroke="#4A3A2E" stroke-width="1.4" stroke-linecap="round"/><path d="M12 2.5c1.4 1.8 2.3 3 2.3 3.8" stroke="#5DB3DA" stroke-width="1.6" fill="none"/>`),clinic:KT(`<rect x="3" y="9" width="18" height="12" rx="1.5" fill="#fff" stroke="#CFC4B3"/><path d="M2 10 12 3l10 7" fill="#7FC6A4"/><path d="M12 12v6M9 15h6" stroke="#5FB36C" stroke-width="2.4" stroke-linecap="round"/>`),solar:KT(`<circle cx="18" cy="5" r="3" fill="#F6B042"/><path d="M3 18 6 9h12l-3 9z" fill="#3F6F9E"/><path d="M5 13.5h11.5M9 9l-1.5 9M13 9l-1.5 9" stroke="#8FB6D8" stroke-width="1"/><path d="M9 18v3M13 18v3" stroke="#9AA3AD" stroke-width="1.6"/>`),leaks:KT(`<path d="M3 14h9v-3h4" stroke="#8C99A6" stroke-width="3" fill="none"/><circle cx="12" cy="14" r="2.4" fill="#F2B544"/><path d="M18 13c1.2 1.6 2 2.8 2 3.8a2 2 0 0 1-4 0c0-1 .8-2.2 2-3.8z" fill="#5DB3DA"/><path d="M5 20h4" stroke="#6DBE7A" stroke-width="2.4" stroke-linecap="round"/>`),drains:KT(`<rect x="3" y="4" width="8" height="6" fill="#F2CF6A"/><rect x="13" y="4" width="8" height="6" fill="#F2CF6A"/><rect x="3" y="14" width="8" height="6" fill="#F2CF6A"/><rect x="13" y="14" width="8" height="6" fill="#F2CF6A"/><path d="M2 12h20M12 3v18" stroke="#5DB3DA" stroke-width="2"/>`),ponds:KT(`<ellipse cx="12" cy="15" rx="9" ry="5" fill="#CDB58A"/><ellipse cx="12" cy="14.5" rx="7" ry="3.6" fill="#6FC3E3"/><path d="M12 3v7M9 7l3 3 3-3" stroke="#4C93C8" stroke-width="2" fill="none" stroke-linecap="round"/>`),coolroofs:KT(`<path d="M3 11 12 4l9 7" fill="#fff" stroke="#9CC6DA" stroke-width="1.6"/><rect x="5" y="11" width="14" height="10" fill="#E7EEF4"/><path d="M17 3v4M15 5h4" stroke="#5DB3DA" stroke-width="1.6" stroke-linecap="round"/><circle cx="8" cy="18" r="2.5" fill="#6FBE77"/>`),grid:KT(`<path d="M6 21 9 4h6l3 17" stroke="#8C99A6" stroke-width="1.8" fill="none"/><path d="M4 8h16M5.5 13h13" stroke="#8C99A6" stroke-width="1.8"/><path d="M14 2 11 8h3l-2 5" stroke="#F6B042" stroke-width="1.8" fill="none"/>`),dam:KT(`<path d="M4 30h32v6H4z" fill="#5DB3DA"/><path d="M11 8h18l-3 24H14z" fill="#C4CAD1"/><path d="M13 14h14M13.5 20h13" stroke="#A3ABB4" stroke-width="2"/><path d="M4 12h7l1 18H4z" fill="#5DB3DA" opacity=".8"/>`,`0 0 40 40`),share:KT(`<path d="M5 26q7-6 15 0t15 0" stroke="#5DB3DA" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="10" cy="13" r="5" fill="#F2C08C"/><circle cx="30" cy="13" r="5" fill="#B97B4E"/><path d="M14 16h12" stroke="#4A3A2E" stroke-width="2.5" stroke-linecap="round"/>`,`0 0 40 40`),save:KT(`<path d="M20 5c5 6.5 8.5 11 8.5 15.5a8.5 8.5 0 0 1-17 0C11.5 16 15 11.5 20 5z" fill="#5DB3DA"/><path d="M15.5 21l3.5 3.5 6.5-7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,`0 0 40 40`),pump:KT(`<rect x="8" y="10" width="10" height="20" rx="2" fill="#8C99A6"/><path d="M18 14h8v6" stroke="#8C99A6" stroke-width="3" fill="none"/><path d="M26 24c2 2.6 3.2 4.4 3.2 6a3.2 3.2 0 0 1-6.4 0c0-1.6 1.2-3.4 3.2-6z" fill="#5DB3DA"/><path d="M5 34h30" stroke="#A7864A" stroke-width="2.4"/><path d="M13 30v6" stroke="#5DB3DA" stroke-width="2.4"/>`,`0 0 40 40`),coin:KT(`<circle cx="20" cy="20" r="13" fill="#F6CF5A"/><circle cx="20" cy="20" r="8" fill="none" stroke="#D9A731" stroke-width="2.2"/>`,`0 0 40 40`),bread:KT(`<path d="M7 22c0-7 6-11 13-11s13 4 13 11v7H7z" fill="#E7B36E"/><path d="M14 15l-2 5M20 13v6M26 15l2 5" stroke="#C58A45" stroke-width="2" stroke-linecap="round"/>`,`0 0 40 40`),border:KT(`<path d="M6 32V10M34 32V10" stroke="#A7864A" stroke-width="3"/><path d="M6 14h28M6 22h28" stroke="#D9C2A0" stroke-width="3"/><circle cx="20" cy="30" r="4" fill="#E6A67C"/>`,`0 0 40 40`),city:KT(`<rect x="6" y="16" width="8" height="18" fill="#B9CADB"/><rect x="16" y="8" width="9" height="26" fill="#A9BFD4"/><rect x="27" y="20" width="7" height="14" fill="#C8D5E2"/><path d="M4 34h32" stroke="#9ACB75" stroke-width="3"/>`,`0 0 40 40`),gift:KT(`<rect x="8" y="16" width="24" height="17" rx="2" fill="#E6A67C"/><rect x="6" y="12" width="28" height="6" rx="2" fill="#F2C08C"/><path d="M20 12v21" stroke="#fff" stroke-width="3"/><path d="M20 12c-3-6-9-5-8-1s8 1 8 1 7 3 8-1-5-5-8 1" stroke="#D0664F" stroke-width="2" fill="none"/>`,`0 0 40 40`),fire:KT(`<path d="M20 5c2 6 9 9 9 17a9 9 0 0 1-18 0c0-5 3-7 4-11 1 3 2 4 4 5 0-4 0-7 1-11z" fill="#F28C5A"/><path d="M20 22c1 3 4 4 4 7a4 4 0 0 1-8 0c0-2 2-3 4-7z" fill="#F6CF5A"/>`,`0 0 40 40`),factory:KT(`<path d="M5 34V18l8 5v-5l8 5v-5l8 5V8h5v26z" fill="#C4CAD1"/><path d="M29 8h5" stroke="#E0A487" stroke-width="3"/><path d="M5 34h30" stroke="#A7864A" stroke-width="2"/>`,`0 0 40 40`),ban:KT(`<circle cx="20" cy="20" r="13" fill="none" stroke="#D0664F" stroke-width="4"/><path d="M11 29 29 11" stroke="#D0664F" stroke-width="4"/><path d="M16 22h8" stroke="#E7B36E" stroke-width="5" stroke-linecap="round"/>`,`0 0 40 40`),fund:KT(`<path d="M8 18h24v14H8z" fill="#9ACB75"/><path d="M6 18 20 8l14 10z" fill="#6FBE77"/><circle cx="20" cy="25" r="4" fill="#F6CF5A"/>`,`0 0 40 40`),grain:KT(`<path d="M20 36V14" stroke="#A7864A" stroke-width="2.5"/><g fill="#F2C14E"><ellipse cx="20" cy="9" rx="3.5" ry="5"/><ellipse cx="15" cy="16" rx="3.2" ry="4.8" transform="rotate(-32 15 16)"/><ellipse cx="25" cy="16" rx="3.2" ry="4.8" transform="rotate(32 25 16)"/><ellipse cx="15" cy="24" rx="3" ry="4.5" transform="rotate(-38 15 24)"/><ellipse cx="25" cy="24" rx="3" ry="4.5" transform="rotate(38 25 24)"/></g>`,`0 0 40 40`),leaf:KT(`<path d="M8 32C8 16 18 8 33 7c0 15-8 25-23 25z" fill="#6FBE77"/><path d="M8 32 26 14" stroke="#4E9E5C" stroke-width="2"/>`,`0 0 40 40`)},JT=(e,t)=>{let n=qT[e]??qT.coin;return t?n.replace(`<svg`,`<svg width="${t}" height="${t}"`):n},YT=(e,t=`0 0 24 24`)=>`<svg viewBox="${t}" aria-hidden="true">${e}</svg>`,XT={health:YT(`<path d="M12 20.5s-7.3-4.4-9-9.1C1.8 7.9 4 4.6 7.4 4.6c2 0 3.5 1.1 4.6 2.6 1.1-1.5 2.6-2.6 4.6-2.6 3.4 0 5.6 3.3 4.4 6.8-1.7 4.7-9 9.1-9 9.1z" fill="#E8698A"/><path d="M12 9.2v5.6M9.2 12h5.6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>`),sewage:YT(`<path d="M12 3c3.4 4.4 5.8 7.6 5.8 10.4a5.8 5.8 0 0 1-11.6 0C6.2 10.6 8.6 7.4 12 3z" fill="#9A6A3A"/><path d="M5 20 19 6" stroke="#D0664F" stroke-width="2.2" stroke-linecap="round"/>`),national:YT(`<path d="M4 20h16M6 20v-8M10 20v-8M14 20v-8M18 20v-8M3 12h18L12 6z" stroke="#7B6C60" stroke-width="1.8" fill="#E9E1D4" stroke-linejoin="round"/><path d="M12 6V2.5" stroke="#7B6C60" stroke-width="1.4"/><path d="M12 2.5h4l-1 1.2 1 1.2h-4z" fill="#D0664F"/>`),crew:YT(`<path d="M4 16a8 7 0 0 1 16 0z" fill="#F2C14E"/><rect x="2.5" y="15.2" width="19" height="2.6" rx="1.3" fill="#E0AD2F"/><rect x="11" y="8" width="2" height="6" rx="1" fill="#E0AD2F"/>`),nuclear:YT(`<circle cx="12" cy="12" r="2.4" fill="#7FB3D5"/><ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="#4F9FD0" stroke-width="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="#4F9FD0" stroke-width="1.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="#4F9FD0" stroke-width="1.6" transform="rotate(-60 12 12)"/>`),repair:YT(`<path d="M14.5 3.5a5 5 0 0 0-6.2 6.3L3 15.1V21h5.9l5.3-5.3a5 5 0 0 0 6.3-6.2l-3 3-3.3-.8-.8-3.3z" fill="#8E98A3"/>`),tank:YT(`<ellipse cx="12" cy="15" rx="9" ry="4" fill="#C9C3B8"/><ellipse cx="12" cy="14" rx="7" ry="2.6" fill="#8E98A3"/><path d="M12 3v7M9 7l3 3 3-3" stroke="#4F9FD0" stroke-width="2" fill="none" stroke-linecap="round"/>`)},ZT=(e,t)=>{let n=XT[e];return n?t?n.replace(`<svg`,`<svg width="${t}" height="${t}"`):n:JT(e,t)},QT={repair:`repair`,renewMains:`leaks`,sewageUp:`sewage`,moveSewage:`sewage`,drip:`drip`,solarPark:`solar`,batteries:`power`,forestBelt:`forest`,firebreaks:`fire`,burn:`fire`,retireCoal:`factory`,convertCoal:`factory`,ponds:`ponds`,drains:`drains`,stormTank:`tank`,substation:`grid`,coolRoofs:`coolroofs`,clinic:`clinic`,fireStation:`fire`,pumping:`meter`,nuclear:`nuclear`},$T={farmers:{body:`#9fd8b8`,bg:`#e5f3e9`,gear:`<ellipse cy="-11" rx="17" ry="3.4" fill="#e8c97e"/><path d="M-8-12c0-6 3-9 8-9s8 3 8 9z" fill="#e8c97e"/><rect x="-8.3" y="-14.4" width="16.6" height="2.8" fill="#9c6b3e"/>`},city:{body:`#c3a6e0`,bg:`#f0e8f8`,gear:`<path d="M-5-10l-4-9M5-10l4-9" stroke="#8d74b3" stroke-width="1.8" stroke-linecap="round"/><circle cx="-9.4" cy="-19.6" r="2.8" fill="#f6dc7c"/><circle cx="9.4" cy="-19.6" r="2.8" fill="#f6dc7c"/>`},workers:{body:`#f4b393`,bg:`#fbeee4`,gear:`<path d="M-12-8a12 11 0 0 1 24 0z" fill="#f6c343"/><rect x="-15" y="-9.4" width="30" height="3.4" rx="1.7" fill="#e0ad2f"/><rect x="-1.4" y="-19" width="2.8" height="10" rx="1.2" fill="#e0ad2f"/>`},youth:{body:`#9cc8ec`,bg:`#e5eff9`,gear:`<path d="M-10-9l-3-9 8 5zM10-9l3-9-8 5z" fill="#f3e7cf"/>`},kestra:{body:`#f2998a`,bg:`#fbe8e3`,gear:`<path d="M1-10v-12" stroke="#8a6040" stroke-width="1.8"/><path d="M1-22l9 3.4-9 3.4z" fill="#5d8fc2"/>`}};$T.oldtown=$T.city;var eE=e=>e in $T;function tE(e,t,n=34){let r=$T[e]??$T.city,i=t>0?`M-4.5 7.5q4.5 4.5 9 0`:t<0?`M-4.5 10q4.5-4 9 0`:`M-4 8.5h8`;return`<svg width="${n}" height="${n}" viewBox="-24 -24 48 48" aria-hidden="true"><circle r="23" fill="${r.bg}"/><ellipse cy="6" rx="15.5" ry="16.5" fill="${r.body}"/><circle cx="-5.6" cy="1" r="4.3" fill="#fff"/><circle cx="5.6" cy="1" r="4.3" fill="#fff"/><circle cx="-5.2" cy="1.6" r="2.3" fill="#2b2622"/><circle cx="6" cy="1.6" r="2.3" fill="#2b2622"/><circle cx="-4.4" cy="0.6" r="0.8" fill="#fff"/><circle cx="6.8" cy="0.6" r="0.8" fill="#fff"/><path d="${i}" stroke="#2b2622" stroke-width="1.8" fill="none" stroke-linecap="round"/><ellipse cx="-10" cy="7" rx="2.6" ry="1.5" fill="#f29c9c" opacity=".8"/><ellipse cx="10" cy="7" rx="2.6" ry="1.5" fill="#f29c9c" opacity=".8"/>${r.gear}</svg>`}var nE=`<svg viewBox="0 0 120 150" aria-hidden="true"><ellipse cx="60" cy="146" rx="30" ry="4.5" fill="#000" opacity=".1"/><path d="M52 112l-6 32M66 112l4 32" stroke="#e6b04c" stroke-width="4" stroke-linecap="round"/><ellipse cx="60" cy="95" rx="29" ry="21" fill="#dfe6ec"/><path d="M40 92q20 16 46 2" stroke="#b9c6d1" stroke-width="3" fill="none"/><path d="M78 86q14-26-2-52" stroke="#dfe6ec" stroke-width="13" fill="none" stroke-linecap="round"/><circle cx="72" cy="30" r="13" fill="#eef2f5"/><path d="M83 28l30 6-30 4z" fill="#e6b04c"/><circle cx="75" cy="27" r="3.2" fill="#2b2622"/><circle cx="76" cy="26" r="1" fill="#fff"/><path d="M62 21q-12-4-18 3 9-1 16 3" fill="#5c6b78"/><ellipse cx="66" cy="34" rx="3" ry="1.8" fill="#f29c9c" opacity=".7"/></svg>`;export{CT as A,OT as C,_T as D,gT as E,Tp as F,zS as M,qf as N,yT as O,Kf as P,ET as S,kT as T,hT as _,ZT as a,DT as b,WT as c,HT as d,VT as f,xT as g,FT as h,QT as i,$ as j,bT as k,UT as l,GT as m,tE as n,zT as o,LT as p,eE as r,RT as s,nE as t,BT as u,ST as v,wT as w,TT as x,vT as y};