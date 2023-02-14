(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="149",Dd=0,zc=1,Rd=2,Ih=1,Id=2,Ls=3,Fi=0,Mn=1,bi=2,Li=0,jr=1,Uc=2,kc=3,Bc=4,Fd=5,kr=100,Od=101,Nd=102,Gc=103,Vc=104,zd=200,Ud=201,kd=202,Bd=203,Fh=204,Oh=205,Gd=206,Vd=207,Wd=208,Hd=209,Xd=210,qd=0,Yd=1,jd=2,Tl=3,$d=4,Zd=5,Kd=6,Jd=7,Nh=0,Qd=1,ep=2,mi=0,tp=1,np=2,ip=3,rp=4,sp=5,zh=300,ts=301,ns=302,El=303,Al=304,xo=306,Cl=1e3,Vn=1001,Pl=1002,$t=1003,Wc=1004,Co=1005,Cn=1006,ap=1007,$s=1008,fr=1009,op=1010,lp=1011,Uh=1012,cp=1013,er=1014,tr=1015,Zs=1016,up=1017,hp=1018,$r=1020,fp=1021,Wn=1023,dp=1024,pp=1025,rr=1026,is=1027,mp=1028,gp=1029,_p=1030,xp=1031,vp=1033,Po=33776,Lo=33777,Do=33778,Ro=33779,Hc=35840,Xc=35841,qc=35842,Yc=35843,yp=36196,jc=37492,$c=37496,Zc=37808,Kc=37809,Jc=37810,Qc=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,au=37818,ou=37819,lu=37820,cu=37821,Io=36492,Mp=36283,uu=36284,hu=36285,fu=36286,dr=3e3,ot=3001,Sp=3200,bp=3201,kh=0,wp=1,Yn="srgb",Ks="srgb-linear",Fo=7680,Tp=519,du=35044,pu="300 es",Ll=1035;class ds{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,mu=180/Math.PI;function aa(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[l&255]+kt[l>>8&255]+kt[l>>16&255]+kt[l>>24&255]+"-"+kt[t&255]+kt[t>>8&255]+"-"+kt[t>>16&15|64]+kt[t>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function gn(l,t,n){return Math.max(t,Math.min(n,l))}function Ep(l,t){return(l%t+t)%t}function No(l,t,n){return(1-n)*l+n*t}function gu(l){return(l&l-1)===0&&l!==0}function Dl(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function fa(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function un(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Je{constructor(t=0,n=0){Je.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(){yn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,n,i,r,s,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],h=i[4],d=i[7],f=i[2],g=i[5],_=i[8],p=r[0],m=r[3],x=r[6],S=r[1],y=r[4],b=r[7],M=r[2],A=r[5],C=r[8];return s[0]=o*p+a*S+c*M,s[3]=o*m+a*y+c*A,s[6]=o*x+a*b+c*C,s[1]=u*p+h*S+d*M,s[4]=u*m+h*y+d*A,s[7]=u*x+h*b+d*C,s[2]=f*p+g*S+_*M,s[5]=f*m+g*y+_*A,s[8]=f*x+g*b+_*C,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return n*o*h-n*a*u-i*s*h+i*a*c+r*s*u-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],d=h*o-a*u,f=a*c-h*s,g=u*s-o*c,_=n*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return t[0]=d*p,t[1]=(r*u-h*i)*p,t[2]=(a*i-r*o)*p,t[3]=f*p,t[4]=(h*n-r*c)*p,t[5]=(r*s-a*n)*p,t[6]=g*p,t[7]=(i*c-u*n)*p,t[8]=(o*n-i*s)*p,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*a)+o+t,-r*u,r*c,-r*(-u*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(zo.makeScale(t,n)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,n){return this.premultiply(zo.makeTranslation(t,n)),this}makeTranslation(t,n){return this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new yn;function Bh(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function Js(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function sr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Xa(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Uo={[Yn]:{[Ks]:sr},[Ks]:{[Yn]:Xa}},Xt={legacyMode:!0,get workingColorSpace(){return Ks},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,t,n){if(this.legacyMode||t===n||!t||!n)return l;if(Uo[t]&&Uo[t][n]!==void 0){const i=Uo[t][n];return l.r=i(l.r),l.g=i(l.g),l.b=i(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={r:0,g:0,b:0},On={h:0,s:0,l:0},da={h:0,s:0,l:0};function ko(l,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(t-l)*6*n:n<1/2?t:n<2/3?l+(t-l)*6*(2/3-n):l}function pa(l,t){return t.r=l.r,t.g=l.g,t.b=l.b,t}class at{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(t):this.setRGB(t,n,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Xt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Xt.workingColorSpace){if(t=Ep(t,1),n=gn(n,0,1),i=gn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ko(o,s,t+1/3),this.g=ko(o,s,t),this.b=ko(o,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Xt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Xt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,u=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,u,h,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Xt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Xt.toWorkingColorSpace(this,n),this}return t&&t.length>0?this.setColorName(t,n):this}setColorName(t,n=Yn){const i=Gh[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return Xt.fromWorkingColorSpace(pa(this,Tt),t),gn(Tt.r*255,0,255)<<16^gn(Tt.g*255,0,255)<<8^gn(Tt.b*255,0,255)<<0}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Xt.workingColorSpace){Xt.fromWorkingColorSpace(pa(this,Tt),n);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,n=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(pa(this,Tt),n),t.r=Tt.r,t.g=Tt.g,t.b=Tt.b,t}getStyle(t=Yn){return Xt.fromWorkingColorSpace(pa(this,Tt),t),t!==Yn?`color(${t} ${Tt.r} ${Tt.g} ${Tt.b})`:`rgb(${Tt.r*255|0},${Tt.g*255|0},${Tt.b*255|0})`}offsetHSL(t,n,i){return this.getHSL(On),On.h+=t,On.s+=n,On.l+=i,this.setHSL(On.h,On.s,On.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(On),t.getHSL(da);const i=No(On.h,da.h,n),r=No(On.s,da.s,n),s=No(On.l,da.l,n);return this.setHSL(i,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}at.NAMES=Gh;let Sr;class Vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Sr===void 0&&(Sr=Js("canvas")),Sr.width=t.width,Sr.height=t.height;const i=Sr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Sr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Js("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sr(n[i]/255)*255):n[i]=sr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Wh{constructor(t=null){this.isSource=!0,this.uuid=aa(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bo(r[o].image)):s.push(Bo(r[o]))}else s=Bo(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function Bo(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Vh.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;class nn extends ds{constructor(t=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=$s,a=Wn,c=fr,u=nn.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=aa(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cl:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cl:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=zh;nn.DEFAULT_ANISOTROPY=1;class ct{constructor(t=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,u=c[0],h=c[4],d=c[8],f=c[1],g=c[5],_=c[9],p=c[2],m=c[6],x=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-p)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+p)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,b=(g+1)/2,M=(x+1)/2,A=(h+f)/4,C=(d+p)/4,v=(_+m)/4;return y>b&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):b>M?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=v/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=C/s,r=v/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-_)*(m-_)+(d-p)*(d-p)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-p)/S,this.z=(f-h)/S,this.w=Math.acos((u+g+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pr extends ds{constructor(t=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ct(0,0,t,n),this.scissorTest=!1,this.viewport=new ct(0,0,t,n);const r={width:t,height:n,depth:1};this.texture=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Wh(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hh extends nn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cp extends nn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let c=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){t[n+0]=c,t[n+1]=u,t[n+2]=h,t[n+3]=d;return}if(a===1){t[n+0]=f,t[n+1]=g,t[n+2]=_,t[n+3]=p;return}if(d!==p||c!==f||u!==g||h!==_){let m=1-a;const x=c*f+u*g+h*_+d*p,S=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const M=Math.sqrt(y),A=Math.atan2(M,x*S);m=Math.sin(m*A)/M,a=Math.sin(a*A)/M}const b=a*S;if(c=c*m+f*b,u=u*m+g*b,h=h*m+_*b,d=d*m+p*b,m===1-a){const M=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=M,u*=M,h*=M,d*=M}}t[n]=c,t[n+1]=u,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return t[n]=a*_+h*d+c*g-u*f,t[n+1]=c*_+h*f+u*d-a*g,t[n+2]=u*_+h*g+a*f-c*d,t[n+3]=h*_-a*d-c*f-u*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(i/2),h=a(r/2),d=a(s/2),f=c(i/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*d+u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d+f*g*_;break;case"YZX":this._x=f*h*d+u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d-f*g*_;break;case"XZY":this._x=f*h*d-u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],u=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*c,this._y=r*h+o*c+s*a-i*u,this._z=s*h+o*u+i*c-r*a,this._w=o*h-i*a-r*c-s*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),d=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,n=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(_u.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,u=c*n+o*r-a*i,h=c*i+a*n-s*r,d=c*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*c+f*-s+h*-a-d*-o,this.y=h*c+f*-o+d*-s-u*-a,this.z=d*c+f*-a+u*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new B,_u=new oa;class la{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,u=t.length;c<u;c+=3){const h=t[c],d=t[c+1],f=t[c+2];h<n&&(n=h),d<i&&(i=d),f<r&&(r=f),h>s&&(s=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(t){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,u=t.count;c<u;c++){const h=t.getX(c),d=t.getY(c),f=t.getZ(c);h<n&&(n=h),d<i&&(i=d),f<r&&(r=f),h>s&&(s=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Hi.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Hi)}else i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox),Vo.applyMatrix4(t.matrixWorld),this.union(Vo);const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),ma.subVectors(this.max,vs),br.subVectors(t.a,vs),wr.subVectors(t.b,vs),Tr.subVectors(t.c,vs),xi.subVectors(wr,br),vi.subVectors(Tr,wr),Xi.subVectors(br,Tr);let n=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Xi.z,Xi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Xi.z,0,-Xi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Xi.y,Xi.x,0];return!Wo(n,br,wr,Tr,ma)||(n=[1,0,0,0,1,0,0,0,1],!Wo(n,br,wr,Tr,ma))?!1:(ga.crossVectors(xi,vi),n=[ga.x,ga.y,ga.z],Wo(n,br,wr,Tr,ma))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Hi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new B,new B,new B,new B,new B,new B,new B,new B],Hi=new B,Vo=new la,br=new B,wr=new B,Tr=new B,xi=new B,vi=new B,Xi=new B,vs=new B,ma=new B,ga=new B,qi=new B;function Wo(l,t,n,i,r){for(let s=0,o=l.length-3;s<=o;s+=3){qi.fromArray(l,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=t.dot(qi),u=n.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const Pp=new la,ys=new B,Ho=new B;class ac{constructor(t=new B,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Pp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(Ho)),this.expandByPoint(ys.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new B,Xo=new B,_a=new B,yi=new B,qo=new B,xa=new B,Yo=new B;class Lp{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=si.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(si.copy(this.direction).multiplyScalar(n).add(this.origin),si.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Xo.copy(t).add(n).multiplyScalar(.5),_a.copy(n).sub(t).normalize(),yi.copy(this.origin).sub(Xo);const s=t.distanceTo(n)*.5,o=-this.direction.dot(_a),a=yi.dot(this.direction),c=-yi.dot(_a),u=yi.lengthSq(),h=Math.abs(1-o*o);let d,f,g,_;if(h>0)if(d=o*c-a,f=o*a-c,_=s*h,d>=0)if(f>=-_)if(f<=_){const p=1/h;d*=p,f*=p,g=d*(d+o*f+2*a)+f*(o*d+f+2*c)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),g=f*(f+2*c)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(_a).multiplyScalar(f).add(Xo),g}intersectSphere(t,n){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,n,i,r,s){qo.subVectors(n,t),xa.subVectors(i,t),Yo.crossVectors(qo,xa);let o=this.direction.dot(Yo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const c=a*this.direction.dot(xa.crossVectors(yi,xa));if(c<0)return null;const u=a*this.direction.dot(qo.cross(yi));if(u<0||c+u>o)return null;const h=-a*yi.dot(Yo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,n,i,r,s,o,a,c,u,h,d,f,g,_,p,m){const x=this.elements;return x[0]=t,x[4]=n,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=u,x[6]=h,x[10]=d,x[14]=f,x[3]=g,x[7]=_,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,g=o*d,_=a*h,p=a*d;n[0]=c*h,n[4]=-c*d,n[8]=u,n[1]=g+_*u,n[5]=f-p*u,n[9]=-a*c,n[2]=p-f*u,n[6]=_+g*u,n[10]=o*c}else if(t.order==="YXZ"){const f=c*h,g=c*d,_=u*h,p=u*d;n[0]=f+p*a,n[4]=_*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=g*a-_,n[6]=p+f*a,n[10]=o*c}else if(t.order==="ZXY"){const f=c*h,g=c*d,_=u*h,p=u*d;n[0]=f-p*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*h,n[9]=p-f*a,n[2]=-o*u,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const f=o*h,g=o*d,_=a*h,p=a*d;n[0]=c*h,n[4]=_*u-g,n[8]=f*u+p,n[1]=c*d,n[5]=p*u+f,n[9]=g*u-_,n[2]=-u,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const f=o*c,g=o*u,_=a*c,p=a*u;n[0]=c*h,n[4]=p-f*d,n[8]=_*d+g,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=g*d+_,n[10]=f-p*d}else if(t.order==="XZY"){const f=o*c,g=o*u,_=a*c,p=a*u;n[0]=c*h,n[4]=-d,n[8]=u*h,n[1]=f*d+p,n[5]=o*h,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*h,n[10]=p*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Rp)}lookAt(t,n,i){const r=this.elements;return hn.subVectors(t,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Mi.crossVectors(i,hn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Mi.crossVectors(i,hn)),Mi.normalize(),va.crossVectors(hn,Mi),r[0]=Mi.x,r[4]=va.x,r[8]=hn.x,r[1]=Mi.y,r[5]=va.y,r[9]=hn.y,r[2]=Mi.z,r[6]=va.z,r[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],h=i[1],d=i[5],f=i[9],g=i[13],_=i[2],p=i[6],m=i[10],x=i[14],S=i[3],y=i[7],b=i[11],M=i[15],A=r[0],C=r[4],v=r[8],T=r[12],D=r[1],U=r[5],W=r[9],O=r[13],I=r[2],G=r[6],H=r[10],K=r[14],k=r[3],Q=r[7],L=r[11],he=r[15];return s[0]=o*A+a*D+c*I+u*k,s[4]=o*C+a*U+c*G+u*Q,s[8]=o*v+a*W+c*H+u*L,s[12]=o*T+a*O+c*K+u*he,s[1]=h*A+d*D+f*I+g*k,s[5]=h*C+d*U+f*G+g*Q,s[9]=h*v+d*W+f*H+g*L,s[13]=h*T+d*O+f*K+g*he,s[2]=_*A+p*D+m*I+x*k,s[6]=_*C+p*U+m*G+x*Q,s[10]=_*v+p*W+m*H+x*L,s[14]=_*T+p*O+m*K+x*he,s[3]=S*A+y*D+b*I+M*k,s[7]=S*C+y*U+b*G+M*Q,s[11]=S*v+y*W+b*H+M*L,s[15]=S*T+y*O+b*K+M*he,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],d=t[6],f=t[10],g=t[14],_=t[3],p=t[7],m=t[11],x=t[15];return _*(+s*c*d-r*u*d-s*a*f+i*u*f+r*a*g-i*c*g)+p*(+n*c*g-n*u*f+s*o*f-r*o*g+r*u*h-s*c*h)+m*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*h-i*u*h)+x*(-r*a*h-n*c*d+n*a*f+r*o*d-i*o*f+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],d=t[9],f=t[10],g=t[11],_=t[12],p=t[13],m=t[14],x=t[15],S=d*m*u-p*f*u+p*c*g-a*m*g-d*c*x+a*f*x,y=_*f*u-h*m*u-_*c*g+o*m*g+h*c*x-o*f*x,b=h*p*u-_*d*u+_*a*g-o*p*g-h*a*x+o*d*x,M=_*d*c-h*p*c-_*a*f+o*p*f+h*a*m-o*d*m,A=n*S+i*y+r*b+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(p*f*s-d*m*s-p*r*g+i*m*g+d*r*x-i*f*x)*C,t[2]=(a*m*s-p*c*s+p*r*u-i*m*u-a*r*x+i*c*x)*C,t[3]=(d*c*s-a*f*s-d*r*u+i*f*u+a*r*g-i*c*g)*C,t[4]=y*C,t[5]=(h*m*s-_*f*s+_*r*g-n*m*g-h*r*x+n*f*x)*C,t[6]=(_*c*s-o*m*s-_*r*u+n*m*u+o*r*x-n*c*x)*C,t[7]=(o*f*s-h*c*s+h*r*u-n*f*u-o*r*g+n*c*g)*C,t[8]=b*C,t[9]=(_*d*s-h*p*s-_*i*g+n*p*g+h*i*x-n*d*x)*C,t[10]=(o*p*s-_*a*s+_*i*u-n*p*u-o*i*x+n*a*x)*C,t[11]=(h*a*s-o*d*s-h*i*u+n*d*u+o*i*g-n*a*g)*C,t[12]=M*C,t[13]=(h*p*r-_*d*r+_*i*f-n*p*f-h*i*m+n*d*m)*C,t[14]=(_*a*r-o*p*r-_*i*c+n*p*c+o*i*m-n*a*m)*C,t[15]=(o*d*r-h*a*r+h*i*c-n*d*c-o*i*f+n*a*f)*C,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,c=t.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*c,u*c+r*a,0,u*a+r*c,h*a+i,h*c-r*o,0,u*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,u=s+s,h=o+o,d=a+a,f=s*u,g=s*h,_=s*d,p=o*h,m=o*d,x=a*d,S=c*u,y=c*h,b=c*d,M=i.x,A=i.y,C=i.z;return r[0]=(1-(p+x))*M,r[1]=(g+b)*M,r[2]=(_-y)*M,r[3]=0,r[4]=(g-b)*A,r[5]=(1-(f+x))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(_+y)*C,r[9]=(m-S)*C,r[10]=(1-(f+p))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Nn.copy(this);const u=1/s,h=1/o,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o){const a=this.elements,c=2*s/(n-t),u=2*s/(i-r),h=(n+t)/(n-t),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,n,i,r,s,o){const a=this.elements,c=1/(n-t),u=1/(i-r),h=1/(o-s),d=(n+t)*c,f=(i+r)*u,g=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Er=new B,Nn=new bt,Dp=new B(0,0,0),Rp=new B(1,1,1),Mi=new B,va=new B,hn=new B,xu=new bt,vu=new oa;class vo{constructor(t=0,n=0,i=0,r=vo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vo.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ip=0;const yu=new B,Ar=new oa,ai=new bt,ya=new B,Ms=new B,Fp=new B,Op=new oa,Mu=new B(1,0,0),Su=new B(0,1,0),bu=new B(0,0,1),Np={type:"added"},wu={type:"removed"};class rn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new B,n=new vo,i=new oa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new yn}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ar.setFromAxisAngle(t,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,n){return Ar.setFromAxisAngle(t,n),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,n){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ya.copy(t):ya.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ms,ya,this.up):ai.lookAt(ya,Ms,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ai),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Np)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(wu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(wu)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n){let i=[];this[t]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(n){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new B(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new B,oi=new B,jo=new B,li=new B,Cr=new B,Pr=new B,Tu=new B,$o=new B,Zo=new B,Ko=new B;class hi{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),zn.subVectors(t,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){zn.subVectors(r,n),oi.subVectors(i,n),jo.subVectors(t,n);const o=zn.dot(zn),a=zn.dot(oi),c=zn.dot(jo),u=oi.dot(oi),h=oi.dot(jo),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-g-_,_,g)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,li),li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(t,n,i,r,s,o,a,c){return this.getBarycoord(t,n,i,r,li),c.set(0,0),c.addScaledVector(s,li.x),c.addScaledVector(o,li.y),c.addScaledVector(a,li.z),c}static isFrontFacing(t,n,i,r){return zn.subVectors(i,n),oi.subVectors(t,n),zn.cross(oi).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return hi.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,r,s){return hi.getUV(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Pr.subVectors(s,i),$o.subVectors(t,i);const c=Cr.dot($o),u=Pr.dot($o);if(c<=0&&u<=0)return n.copy(i);Zo.subVectors(t,r);const h=Cr.dot(Zo),d=Pr.dot(Zo);if(h>=0&&d<=h)return n.copy(r);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(Cr,o);Ko.subVectors(t,s);const g=Cr.dot(Ko),_=Pr.dot(Ko);if(_>=0&&g<=_)return n.copy(s);const p=g*u-c*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Pr,a);const m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return Tu.subVectors(s,r),a=(d-h)/(d-h+(g-_)),n.copy(r).addScaledVector(Tu,a);const x=1/(m+p+f);return o=p*x,a=f*x,n.copy(i).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let zp=0;class ca extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=jr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oc extends ca{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mt=new B,Ma=new Je;class Jn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=du,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ma.fromBufferAttribute(this,n),Ma.applyMatrix3(t),this.setXY(n,Ma.x,Ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(t),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(t),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(t),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(t),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(t,n=0){return this.array.set(t,n),this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==du&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qh extends Jn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Yh extends Jn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Qn extends Jn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let Up=0;const Tn=new bt,Jo=new rn,Lr=new B,fn=new la,Ss=new la,Rt=new B;class ki extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bh(t)?Yh:qh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new yn().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,n,i){return Tn.makeTranslation(t,n,i),this.applyMatrix4(Tn),this}scale(t,n,i){return Tn.makeScale(t,n,i),this.applyMatrix4(Tn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fn.min,Ss.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,Ss.max),fn.expandByPoint(Rt)):(fn.expandByPoint(Ss.min),fn.expandByPoint(Ss.max))}fn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Rt.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Rt.fromBufferAttribute(a,u),c&&(Lr.fromBufferAttribute(t,u),Rt.add(Lr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let D=0;D<a;D++)u[D]=new B,h[D]=new B;const d=new B,f=new B,g=new B,_=new Je,p=new Je,m=new Je,x=new B,S=new B;function y(D,U,W){d.fromArray(r,D*3),f.fromArray(r,U*3),g.fromArray(r,W*3),_.fromArray(o,D*2),p.fromArray(o,U*2),m.fromArray(o,W*2),f.sub(d),g.sub(d),p.sub(_),m.sub(_);const O=1/(p.x*m.y-m.x*p.y);isFinite(O)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(g,-p.y).multiplyScalar(O),S.copy(g).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(O),u[D].add(x),u[U].add(x),u[W].add(x),h[D].add(S),h[U].add(S),h[W].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let D=0,U=b.length;D<U;++D){const W=b[D],O=W.start,I=W.count;for(let G=O,H=O+I;G<H;G+=3)y(i[G+0],i[G+1],i[G+2])}const M=new B,A=new B,C=new B,v=new B;function T(D){C.fromArray(s,D*3),v.copy(C);const U=u[D];M.copy(U),M.sub(C.multiplyScalar(C.dot(U))).normalize(),A.crossVectors(v,U);const O=A.dot(h[D])<0?-1:1;c[D*4]=M.x,c[D*4+1]=M.y,c[D*4+2]=M.z,c[D*4+3]=O}for(let D=0,U=b.length;D<U;++D){const W=b[D],O=W.start,I=W.count;for(let G=O,H=O+I;G<H;G+=3)T(i[G+0]),T(i[G+1]),T(i[G+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,c=new B,u=new B,h=new B,d=new B;if(t)for(let f=0,g=t.count;f<g;f+=3){const _=t.getX(f+0),p=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),u.fromBufferAttribute(i,m),a.add(h),c.add(h),u.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Rt.fromBufferAttribute(t,n),Rt.normalize(),t.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(c.length*h);let g=0,_=0;for(let p=0,m=c.length;p<m;p++){a.isInterleavedBufferAttribute?g=c[p]*a.data.stride+a.offset:g=c[p]*h;for(let x=0;x<h;x++)f[_++]=u[g++]}return new Jn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=t(c,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],g=t(f,i);c.push(g)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];h.push(g.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new bt,Dr=new Lp,Qo=new ac,bs=new B,ws=new B,Ts=new B,el=new B,Sa=new B,ba=new Je,wa=new Je,Ta=new Je,tl=new B,Ea=new B;class Kn extends rn{constructor(t=new ki,n=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=a[c],d=s[c];h!==0&&(el.fromBufferAttribute(d,t),o?Sa.addScaledVector(el,h):Sa.addScaledVector(el.sub(n),h))}n.add(Sa)}return this.isSkinnedMesh&&this.boneTransform(t,n),n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),t.ray.intersectsSphere(Qo)===!1)||(Eu.copy(s).invert(),Dr.copy(t.ray).applyMatrix4(Eu),i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=r[p.materialIndex],x=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,b=S;y<b;y+=3){const M=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);o=Aa(this,m,t,Dr,u,h,M,A,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);o=Aa(this,r,t,Dr,u,h,x,S,y),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=r[p.materialIndex],x=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,b=S;y<b;y+=3){const M=y,A=y+1,C=y+2;o=Aa(this,m,t,Dr,u,h,M,A,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=p,S=p+1,y=p+2;o=Aa(this,r,t,Dr,u,h,x,S,y),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}}}function kp(l,t,n,i,r,s,o,a){let c;if(t.side===Mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Fi,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(l.matrixWorld);const u=n.ray.origin.distanceTo(Ea);return u<n.near||u>n.far?null:{distance:u,point:Ea.clone(),object:l}}function Aa(l,t,n,i,r,s,o,a,c){l.getVertexPosition(o,bs),l.getVertexPosition(a,ws),l.getVertexPosition(c,Ts);const u=kp(l,t,n,i,bs,ws,Ts,tl);if(u){r&&(ba.fromBufferAttribute(r,o),wa.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,c),u.uv=hi.getUV(tl,bs,ws,Ts,ba,wa,Ta,new Je)),s&&(ba.fromBufferAttribute(s,o),wa.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,c),u.uv2=hi.getUV(tl,bs,ws,Ts,ba,wa,Ta,new Je));const h={a:o,b:a,c,normal:new B,materialIndex:0};hi.getNormal(bs,ws,Ts,h.normal),u.face=h}return u}class ps extends ki{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,t,o,s,0),_("z","y","x",1,-1,i,n,-t,o,s,1),_("x","z","y",1,1,t,i,n,r,o,2),_("x","z","y",1,-1,t,i,-n,r,o,3),_("x","y","z",1,-1,t,n,i,r,s,4),_("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qn(u,3)),this.setAttribute("normal",new Qn(h,3)),this.setAttribute("uv",new Qn(d,2));function _(p,m,x,S,y,b,M,A,C,v,T){const D=b/C,U=M/v,W=b/2,O=M/2,I=A/2,G=C+1,H=v+1;let K=0,k=0;const Q=new B;for(let L=0;L<H;L++){const he=L*U-O;for(let V=0;V<G;V++){const J=V*D-W;Q[p]=J*S,Q[m]=he*y,Q[x]=I,u.push(Q.x,Q.y,Q.z),Q[p]=0,Q[m]=0,Q[x]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(V/C),d.push(1-L/v),K+=1}}for(let L=0;L<v;L++)for(let he=0;he<C;he++){const V=f+he+G*L,J=f+he+G*(L+1),ie=f+(he+1)+G*(L+1),se=f+(he+1)+G*L;c.push(V,J,se),c.push(J,ie,se),k+=6}a.addGroup(g,k,T),g+=k,f+=K}}static fromJSON(t){return new ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(l){const t={};for(const n in l){t[n]={};for(const i in l[n]){const r=l[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Yt(l){const t={};for(let n=0;n<l.length;n++){const i=rs(l[n]);for(const r in i)t[r]=i[r]}return t}function Bp(l){const t=[];for(let n=0;n<l.length;n++)t.push(l[n].clone());return t}function jh(l){return l.getRenderTarget()===null&&l.outputEncoding===ot?Yn:Ks}const Gp={clone:rs,merge:Yt};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends ca{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $h extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends $h{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=mu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mu*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Ir=1;class Hp extends rn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new _n(Rr,Ir,t,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new _n(Rr,Ir,t,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new _n(Rr,Ir,t,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new _n(Rr,Ir,t,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new _n(Rr,Ir,t,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new _n(Rr,Ir,t,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(t,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,u]=this.children,h=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=mi,t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(n,r),t.setRenderTarget(i,1),t.render(n,s),t.setRenderTarget(i,2),t.render(n,o),t.setRenderTarget(i,3),t.render(n,a),t.setRenderTarget(i,4),t.render(n,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5),t.render(n,u),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Zh extends nn{constructor(t,n,i,r,s,o,a,c,u,h){t=t!==void 0?t:[],n=n!==void 0?n:ts,super(t,n,i,r,s,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xp extends pr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Zh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Li});s.uniforms.tEquirect.value=n;const o=new Kn(r,s),a=n.minFilter;return n.minFilter===$s&&(n.minFilter=Cn),new Hp(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}const nl=new B,qp=new B,Yp=new yn;class $i{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=nl.subVectors(i,n).cross(qp.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){const i=t.delta(nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Yp.getNormalMatrix(t),r=this.coplanarPoint(nl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new ac,Ca=new B;class lc{constructor(t=new $i,n=new $i,i=new $i,r=new $i,s=new $i,o=new $i){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const n=this.planes,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],S=i[14],y=i[15];return n[0].setComponents(a-r,d-c,p-f,y-m).normalize(),n[1].setComponents(a+r,d+c,p+f,y+m).normalize(),n[2].setComponents(a+s,d+u,p+g,y+x).normalize(),n[3].setComponents(a-s,d-u,p-g,y-x).normalize(),n[4].setComponents(a-o,d-h,p-_,y-S).normalize(),n[5].setComponents(a+o,d+h,p+_,y+S).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSprite(t){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?t.max.x:t.min.x,Ca.y=r.normal.y>0?t.max.y:t.min.y,Ca.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let l=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=l.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=l.requestAnimationFrame(r),t=!0)},stop:function(){l.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){l=s}}}function jp(l,t){const n=t.isWebGL2,i=new WeakMap;function r(u,h){const d=u.array,f=u.usage,g=l.createBuffer();l.bindBuffer(h,g),l.bufferData(h,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,d){const f=h.array,g=h.updateRange;l.bindBuffer(d,u),g.count===-1?l.bufferSubData(d,0,f):(n?l.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):l.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(l.deleteBuffer(h.buffer),i.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,h)):d.version<u.version&&(s(d.buffer,u,h),d.version=u.version)}return{get:o,remove:a,update:c}}class cc extends ki{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),c=Math.floor(r),u=a+1,h=c+1,d=t/a,f=n/c,g=[],_=[],p=[],m=[];for(let x=0;x<h;x++){const S=x*f-o;for(let y=0;y<u;y++){const b=y*d-s;_.push(b,-S,0),p.push(0,0,1),m.push(y/a),m.push(1-x/c)}}for(let x=0;x<c;x++)for(let S=0;S<a;S++){const y=S+u*x,b=S+u*(x+1),M=S+1+u*(x+1),A=S+1+u*x;g.push(y,b,A),g.push(b,M,A)}this.setIndex(g),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(p,3)),this.setAttribute("uv",new Qn(m,2))}static fromJSON(t){return new cc(t.width,t.height,t.widthSegments,t.heightSegments)}}var $p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm="vec3 transformed = vec3( position );",nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,rm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Um=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ag=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,e_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,t_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,n_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,u_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,f_=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,g_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,x_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,y_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,T_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:$p,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:rm,bumpmap_pars_fragment:sm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:hm,color_pars_vertex:fm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:vm,emissivemap_pars_fragment:ym,encodings_fragment:Mm,encodings_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Tm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:Am,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Rm,lightmap_fragment:Im,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Nm,lights_pars_begin:zm,lights_toon_fragment:km,lights_toon_pars_fragment:Bm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphcolor_vertex:rg,morphnormal_vertex:sg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:ug,normal_pars_vertex:hg,normal_vertex:fg,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,output_fragment:xg,packing:vg,premultiplied_alpha_fragment:yg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:bg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Rg,skinnormal_vertex:Ig,specularmap_fragment:Fg,specularmap_pars_fragment:Og,tonemapping_fragment:Ng,tonemapping_pars_fragment:zg,transmission_fragment:Ug,transmission_pars_fragment:kg,uv_pars_fragment:Bg,uv_pars_vertex:Gg,uv_vertex:Vg,uv2_pars_fragment:Wg,uv2_pars_vertex:Hg,uv2_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:jg,backgroundCube_vert:$g,backgroundCube_frag:Zg,cube_vert:Kg,cube_frag:Jg,depth_vert:Qg,depth_frag:e_,distanceRGBA_vert:t_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:r_,linedashed_vert:s_,linedashed_frag:a_,meshbasic_vert:o_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:u_,meshmatcap_vert:h_,meshmatcap_frag:f_,meshnormal_vert:d_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:x_,meshtoon_vert:v_,meshtoon_frag:y_,points_vert:M_,points_frag:S_,shadow_vert:b_,shadow_frag:w_,sprite_vert:T_,sprite_frag:E_},ue={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yn},uv2Transform:{value:new yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}}},$n={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};$n.physical={uniforms:Yt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Pa={r:0,b:0,g:0};function A_(l,t,n,i,r,s,o){const a=new at(0);let c=s===!0?0:1,u,h,d=null,f=0,g=null;function _(m,x){let S=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:t).get(y));const b=l.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?p(a,c):y&&y.isColor&&(p(y,1),S=!0),(l.autoClear||S)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),y&&(y.isCubeTexture||y.mapping===xo)?(h===void 0&&(h=new Kn(new ps(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=y.encoding!==ot,(d!==y||f!==y.version||g!==l.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,g=l.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Kn(new cc(2,2),new mr({name:"BackgroundMaterial",uniforms:rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||g!==l.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,g=l.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function p(m,x){m.getRGB(Pa,jh(l)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,p(a,c)},render:_}}function C_(l,t,n,i){const r=l.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null);let u=c,h=!1;function d(I,G,H,K,k){let Q=!1;if(o){const L=p(K,H,G);u!==L&&(u=L,g(u.object)),Q=x(I,K,H,k),Q&&S(I,K,H,k)}else{const L=G.wireframe===!0;(u.geometry!==K.id||u.program!==H.id||u.wireframe!==L)&&(u.geometry=K.id,u.program=H.id,u.wireframe=L,Q=!0)}k!==null&&n.update(k,34963),(Q||h)&&(h=!1,v(I,G,H,K),k!==null&&l.bindBuffer(34963,n.get(k).buffer))}function f(){return i.isWebGL2?l.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?l.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?l.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,G,H){const K=H.wireframe===!0;let k=a[I.id];k===void 0&&(k={},a[I.id]=k);let Q=k[G.id];Q===void 0&&(Q={},k[G.id]=Q);let L=Q[K];return L===void 0&&(L=m(f()),Q[K]=L),L}function m(I){const G=[],H=[],K=[];for(let k=0;k<r;k++)G[k]=0,H[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:K,object:I,attributes:{},index:null}}function x(I,G,H,K){const k=u.attributes,Q=G.attributes;let L=0;const he=H.getAttributes();for(const V in he)if(he[V].location>=0){const ie=k[V];let se=Q[V];if(se===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;L++}return u.attributesNum!==L||u.index!==K}function S(I,G,H,K){const k={},Q=G.attributes;let L=0;const he=H.getAttributes();for(const V in he)if(he[V].location>=0){let ie=Q[V];ie===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),k[V]=se,L++}u.attributes=k,u.attributesNum=L,u.index=K}function y(){const I=u.newAttributes;for(let G=0,H=I.length;G<H;G++)I[G]=0}function b(I){M(I,0)}function M(I,G){const H=u.newAttributes,K=u.enabledAttributes,k=u.attributeDivisors;H[I]=1,K[I]===0&&(l.enableVertexAttribArray(I),K[I]=1),k[I]!==G&&((i.isWebGL2?l:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),k[I]=G)}function A(){const I=u.newAttributes,G=u.enabledAttributes;for(let H=0,K=G.length;H<K;H++)G[H]!==I[H]&&(l.disableVertexAttribArray(H),G[H]=0)}function C(I,G,H,K,k,Q){i.isWebGL2===!0&&(H===5124||H===5125)?l.vertexAttribIPointer(I,G,H,k,Q):l.vertexAttribPointer(I,G,H,K,k,Q)}function v(I,G,H,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=K.attributes,Q=H.getAttributes(),L=G.defaultAttributeValues;for(const he in Q){const V=Q[he];if(V.location>=0){let J=k[he];if(J===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const ie=J.normalized,se=J.itemSize,z=n.get(J);if(z===void 0)continue;const we=z.buffer,pe=z.type,Te=z.bytesPerElement;if(J.isInterleavedBufferAttribute){const le=J.data,Ge=le.stride,de=J.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<V.locationSize;_e++)M(V.location+_e,le.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<V.locationSize;_e++)b(V.location+_e);l.bindBuffer(34962,we);for(let _e=0;_e<V.locationSize;_e++)C(V.location+_e,se/V.locationSize,pe,ie,Ge*Te,(de+se/V.locationSize*_e)*Te)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)M(V.location+le,J.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<V.locationSize;le++)b(V.location+le);l.bindBuffer(34962,we);for(let le=0;le<V.locationSize;le++)C(V.location+le,se/V.locationSize,pe,ie,se*Te,se/V.locationSize*le*Te)}}else if(L!==void 0){const ie=L[he];if(ie!==void 0)switch(ie.length){case 2:l.vertexAttrib2fv(V.location,ie);break;case 3:l.vertexAttrib3fv(V.location,ie);break;case 4:l.vertexAttrib4fv(V.location,ie);break;default:l.vertexAttrib1fv(V.location,ie)}}}}A()}function T(){W();for(const I in a){const G=a[I];for(const H in G){const K=G[H];for(const k in K)_(K[k].object),delete K[k];delete G[H]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const H in G){const K=G[H];for(const k in K)_(K[k].object),delete K[k];delete G[H]}delete a[I.id]}function U(I){for(const G in a){const H=a[G];if(H[I.id]===void 0)continue;const K=H[I.id];for(const k in K)_(K[k].object),delete K[k];delete H[I.id]}}function W(){O(),h=!0,u!==c&&(u=c,g(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:b,disableUnusedAttributes:A}}function P_(l,t,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){l.drawArrays(s,u,h),n.update(h,s,1)}function c(u,h,d){if(d===0)return;let f,g;if(r)f=l,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),n.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function L_(l,t,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=l.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=o||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=l.getParameter(34930),f=l.getParameter(35660),g=l.getParameter(3379),_=l.getParameter(34076),p=l.getParameter(34921),m=l.getParameter(36347),x=l.getParameter(36348),S=l.getParameter(36349),y=f>0,b=o||t.has("OES_texture_float"),M=y&&b,A=o?l.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:A}}function D_(l){const t=this;let n=null,i=0,r=!1,s=!1;const o=new $i,a=new yn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,g){const _=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,x=l.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):u();else{const S=s?0:i,y=S*4;let b=x.clippingState||null;c.value=b,b=h(_,f,y,g);for(let M=0;M!==y;++M)b[M]=n[M];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,g,_){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=c.value,_!==!0||m===null){const x=g+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,b=g;y!==p;++y,b+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function R_(l){let t=new WeakMap;function n(o,a){return a===El?o.mapping=ts:a===Al&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===El||a===Al)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Xp(c.height/2);return u.fromEquirectangularTexture(l,o),t.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class I_ extends $h{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wr=4,Au=[.125,.215,.35,.446,.526,.582],Qi=20,il=new I_,Cu=new at;let rl=null;const Zi=(1+Math.sqrt(5))/2,Or=1/Zi,Pu=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Zi,Or),new B(0,Zi,-Or),new B(Or,0,Zi),new B(-Or,0,Zi),new B(Zi,Or,0),new B(-Zi,Or,0)];class Lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){rl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rl),t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ts||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rl=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Zs,format:Wn,encoding:dr,depthBuffer:!1},r=Du(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(s)),this._blurMaterial=O_(s,t,n)}return r}_compileMaterial(t){const n=new Kn(this._lodPlanes[0],t);this._renderer.compile(n,il)}_sceneToCubeUV(t,n,i,r){const a=new _n(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Cu),h.toneMapping=mi,h.autoClear=!1;const g=new oc({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Kn(new ps,g);let p=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,p=!0):(g.color.copy(Cu),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(a.up.set(0,c[x],0),a.lookAt(u[x],0,0)):S===1?(a.up.set(0,0,c[x]),a.lookAt(0,u[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,u[x]));const y=this._cubeSize;La(r,S*y,x>2?y:0,y,y),h.setRenderTarget(r),p&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===ts||t.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;La(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,il)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pu[(r-1)%Pu.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Kn(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Qi-1),p=s/_,m=isFinite(s)?1+Math.floor(h*p):Qi;m>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const x=[];let S=0;for(let C=0;C<Qi;++C){const v=C/p,T=Math.exp(-v*v/2);x.push(T),C===0?S+=T:C<m&&(S+=2*T)}for(let C=0;C<x.length;C++)x[C]=x[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const b=this._sizeLods[r],M=3*b*(r>y-Wr?r-y+Wr:0),A=4*(this._cubeSize-b);La(n,M,A,3*b,2*b),c.setRenderTarget(n),c.render(d,il)}}function F_(l){const t=[],n=[],i=[];let r=l;const s=l-Wr+1+Au.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>l-Wr?c=Au[o-l+Wr-1]:o===0&&(c=0),i.push(c);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,p=3,m=2,x=1,S=new Float32Array(p*_*g),y=new Float32Array(m*_*g),b=new Float32Array(x*_*g);for(let A=0;A<g;A++){const C=A%3*2/3-1,v=A>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(T,p*_*A),y.set(f,m*_*A);const D=[A,A,A,A,A,A];b.set(D,x*_*A)}const M=new ki;M.setAttribute("position",new Jn(S,p)),M.setAttribute("uv",new Jn(y,m)),M.setAttribute("faceIndex",new Jn(b,x)),t.push(M),r>Wr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Du(l,t,n){const i=new pr(l,t,n);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(l,t,n,i,r){l.viewport.set(t,n,i,r),l.scissor.set(t,n,i,r)}function O_(l,t,n){const i=new Float32Array(Qi),r=new B(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ru(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Iu(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N_(l){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===El||c===Al,h=c===ts||c===ns;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return n===null&&(n=new Lu(l)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new Lu(l));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function z_(l){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=l.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U_(l,t,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(t.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)t.update(f[_],34962);const g=d.morphAttributes;for(const _ in g){const p=g[_];for(let m=0,x=p.length;m<x;m++)t.update(p[m],34962)}}function u(d){const f=[],g=d.index,_=d.attributes.position;let p=0;if(g!==null){const S=g.array;p=g.version;for(let y=0,b=S.length;y<b;y+=3){const M=S[y+0],A=S[y+1],C=S[y+2];f.push(M,A,A,C,C,M)}}else{const S=_.array;p=_.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const M=y+0,A=y+1,C=y+2;f.push(M,A,A,C,C,M)}}const m=new(Bh(f)?Yh:qh)(f,1);m.version=p;const x=s.get(d);x&&t.remove(x),s.set(d,m)}function h(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function k_(l,t,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function u(f){a=f.type,c=f.bytesPerElement}function h(f,g){l.drawElements(s,g,a,f*c),n.update(g,s,1)}function d(f,g,_){if(_===0)return;let p,m;if(r)p=l,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*c,_),n.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d}function B_(l){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function G_(l,t){return l[0]-t[0]}function V_(l,t){return Math.abs(t[1])-Math.abs(l[1])}function W_(l,t,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,h,d,f){const g=u.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let x=s.get(h);if(x===void 0||x.count!==m){let H=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",H)};var _=H;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),M===!0&&(D=2),A===!0&&(D=3);let U=h.attributes.position.count*D,W=1;U>t.maxTextureSize&&(W=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const O=new Float32Array(U*W*4*m),I=new Hh(O,U,W,m);I.type=tr,I.needsUpdate=!0;const G=D*4;for(let K=0;K<m;K++){const k=C[K],Q=v[K],L=T[K],he=U*W*4*K;for(let V=0;V<k.count;V++){const J=V*G;b===!0&&(o.fromBufferAttribute(k,V),O[he+J+0]=o.x,O[he+J+1]=o.y,O[he+J+2]=o.z,O[he+J+3]=0),M===!0&&(o.fromBufferAttribute(Q,V),O[he+J+4]=o.x,O[he+J+5]=o.y,O[he+J+6]=o.z,O[he+J+7]=0),A===!0&&(o.fromBufferAttribute(L,V),O[he+J+8]=o.x,O[he+J+9]=o.y,O[he+J+10]=o.z,O[he+J+11]=L.itemSize===4?o.w:1)}}x={count:m,texture:I,size:new Je(U,W)},s.set(h,x),h.addEventListener("dispose",H)}let S=0;for(let b=0;b<g.length;b++)S+=g[b];const y=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(l,"morphTargetBaseInfluence",y),f.getUniforms().setValue(l,"morphTargetInfluences",g),f.getUniforms().setValue(l,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(l,"morphTargetsTextureSize",x.size)}else{const p=g===void 0?0:g.length;let m=i[h.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];i[h.id]=m}for(let M=0;M<p;M++){const A=m[M];A[0]=M,A[1]=g[M]}m.sort(V_);for(let M=0;M<8;M++)M<p&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(G_);const x=h.morphAttributes.position,S=h.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const A=a[M],C=A[0],v=A[1];C!==Number.MAX_SAFE_INTEGER&&v?(x&&h.getAttribute("morphTarget"+M)!==x[C]&&h.setAttribute("morphTarget"+M,x[C]),S&&h.getAttribute("morphNormal"+M)!==S[C]&&h.setAttribute("morphNormal"+M,S[C]),r[M]=v,y+=v):(x&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),S&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const b=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(l,"morphTargetBaseInfluence",b),f.getUniforms().setValue(l,"morphTargetInfluences",r)}}return{update:c}}function H_(l,t,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,d=t.get(c,h);return r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),d}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Jh=new nn,Qh=new Hh,ef=new Cp,tf=new Zh,Fu=[],Ou=[],Nu=new Float32Array(16),zu=new Float32Array(9),Uu=new Float32Array(4);function ms(l,t,n){const i=l[0];if(i<=0||i>0)return l;const r=t*n;let s=Fu[r];if(s===void 0&&(s=new Float32Array(r),Fu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,l[o].toArray(s,a)}return s}function Ct(l,t){if(l.length!==t.length)return!1;for(let n=0,i=l.length;n<i;n++)if(l[n]!==t[n])return!1;return!0}function Pt(l,t){for(let n=0,i=t.length;n<i;n++)l[n]=t[n]}function yo(l,t){let n=Ou[t];n===void 0&&(n=new Int32Array(t),Ou[t]=n);for(let i=0;i!==t;++i)n[i]=l.allocateTextureUnit();return n}function X_(l,t){const n=this.cache;n[0]!==t&&(l.uniform1f(this.addr,t),n[0]=t)}function q_(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ct(n,t))return;l.uniform2fv(this.addr,t),Pt(n,t)}}function Y_(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ct(n,t))return;l.uniform3fv(this.addr,t),Pt(n,t)}}function j_(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ct(n,t))return;l.uniform4fv(this.addr,t),Pt(n,t)}}function $_(l,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ct(n,t))return;l.uniformMatrix2fv(this.addr,!1,t),Pt(n,t)}else{if(Ct(n,i))return;Uu.set(i),l.uniformMatrix2fv(this.addr,!1,Uu),Pt(n,i)}}function Z_(l,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ct(n,t))return;l.uniformMatrix3fv(this.addr,!1,t),Pt(n,t)}else{if(Ct(n,i))return;zu.set(i),l.uniformMatrix3fv(this.addr,!1,zu),Pt(n,i)}}function K_(l,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ct(n,t))return;l.uniformMatrix4fv(this.addr,!1,t),Pt(n,t)}else{if(Ct(n,i))return;Nu.set(i),l.uniformMatrix4fv(this.addr,!1,Nu),Pt(n,i)}}function J_(l,t){const n=this.cache;n[0]!==t&&(l.uniform1i(this.addr,t),n[0]=t)}function Q_(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ct(n,t))return;l.uniform2iv(this.addr,t),Pt(n,t)}}function e0(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ct(n,t))return;l.uniform3iv(this.addr,t),Pt(n,t)}}function t0(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ct(n,t))return;l.uniform4iv(this.addr,t),Pt(n,t)}}function n0(l,t){const n=this.cache;n[0]!==t&&(l.uniform1ui(this.addr,t),n[0]=t)}function i0(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ct(n,t))return;l.uniform2uiv(this.addr,t),Pt(n,t)}}function r0(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ct(n,t))return;l.uniform3uiv(this.addr,t),Pt(n,t)}}function s0(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ct(n,t))return;l.uniform4uiv(this.addr,t),Pt(n,t)}}function a0(l,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(l.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(t||Jh,r)}function o0(l,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(l.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||ef,r)}function l0(l,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(l.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||tf,r)}function c0(l,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(l.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Qh,r)}function u0(l){switch(l){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return j_;case 35674:return $_;case 35675:return Z_;case 35676:return K_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function h0(l,t){l.uniform1fv(this.addr,t)}function f0(l,t){const n=ms(t,this.size,2);l.uniform2fv(this.addr,n)}function d0(l,t){const n=ms(t,this.size,3);l.uniform3fv(this.addr,n)}function p0(l,t){const n=ms(t,this.size,4);l.uniform4fv(this.addr,n)}function m0(l,t){const n=ms(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function g0(l,t){const n=ms(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function _0(l,t){const n=ms(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function x0(l,t){l.uniform1iv(this.addr,t)}function v0(l,t){l.uniform2iv(this.addr,t)}function y0(l,t){l.uniform3iv(this.addr,t)}function M0(l,t){l.uniform4iv(this.addr,t)}function S0(l,t){l.uniform1uiv(this.addr,t)}function b0(l,t){l.uniform2uiv(this.addr,t)}function w0(l,t){l.uniform3uiv(this.addr,t)}function T0(l,t){l.uniform4uiv(this.addr,t)}function E0(l,t,n){const i=this.cache,r=t.length,s=yo(n,r);Ct(i,s)||(l.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||Jh,s[o])}function A0(l,t,n){const i=this.cache,r=t.length,s=yo(n,r);Ct(i,s)||(l.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||ef,s[o])}function C0(l,t,n){const i=this.cache,r=t.length,s=yo(n,r);Ct(i,s)||(l.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||tf,s[o])}function P0(l,t,n){const i=this.cache,r=t.length,s=yo(n,r);Ct(i,s)||(l.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||Qh,s[o])}function L0(l){switch(l){case 5126:return h0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class D0{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.setValue=u0(n.type)}}class R0{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.size=n.size,this.setValue=L0(n.type)}}class I0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function ku(l,t){l.seq.push(t),l.map[t.id]=t}function F0(l,t,n){const i=l.name,r=i.length;for(sl.lastIndex=0;;){const s=sl.exec(i),o=sl.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){ku(n,u===void 0?new D0(a,l,t):new R0(a,l,t));break}else{let d=n.map[a];d===void 0&&(d=new I0(a),ku(n,d)),n=d}}}class qa{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);F0(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function Bu(l,t,n){const i=l.createShader(t);return l.shaderSource(i,n),l.compileShader(i),i}let O0=0;function N0(l,t){const n=l.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function z0(l){switch(l){case dr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Gu(l,t,n){const i=l.getShaderParameter(t,35713),r=l.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+N0(l.getShaderSource(t),o)}else return r}function U0(l,t){const n=z0(t);return"vec4 "+l+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function k0(l,t){let n;switch(t){case tp:n="Linear";break;case np:n="Reinhard";break;case ip:n="OptimizedCineon";break;case rp:n="ACESFilmic";break;case sp:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function B0(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function G0(l){const t=[];for(const n in l){const i=l[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function V0(l,t){const n={},i=l.getProgramParameter(t,35721);for(let r=0;r<i;r++){const s=l.getActiveAttrib(t,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:l.getAttribLocation(t,o),locationSize:a}}return n}function Ds(l){return l!==""}function Vu(l,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(l){return l.replace(W0,H0)}function H0(l,t){const n=He[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Rl(n)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(l){return l.replace(X0,q0)}function q0(l,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xu(l){let t="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===Id?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Ls&&(t="SHADOWMAP_TYPE_VSM"),t}function j0(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case ts:case ns:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $0(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Nh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case ep:t="ENVMAP_BLENDING_ADD";break}return t}function K0(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function J0(l,t,n,i){const r=l.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Y0(n),u=j0(n),h=$0(n),d=Z0(n),f=K0(n),g=n.isWebGL2?"":B0(n),_=G0(s),p=r.createProgram();let m,x,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(Ds).join(`
`),m.length>0&&(m+=`
`),x=[g,_].filter(Ds).join(`
`),x.length>0&&(x+=`
`)):(m=[Xu(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),x=[g,Xu(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?He.tonemapping_pars_fragment:"",n.toneMapping!==mi?k0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,U0("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Rl(o),o=Vu(o,n),o=Wu(o,n),a=Rl(a),a=Vu(a,n),a=Wu(a,n),o=Hu(o),a=Hu(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",n.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=S+m+o,b=S+x+a,M=Bu(r,35633,y),A=Bu(r,35632,b);if(r.attachShader(p,M),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),l.debug.checkShaderErrors){const T=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(M).trim(),U=r.getShaderInfoLog(A).trim();let W=!0,O=!0;if(r.getProgramParameter(p,35714)===!1){W=!1;const I=Gu(r,M,"vertex"),G=Gu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+I+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||U==="")&&(O=!1);O&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:x}})}r.deleteShader(M),r.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new qa(r,p)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=V0(r,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=O0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}let Q0=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new tx(t),n.set(t,i)),i}}class tx{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}}function nx(l,t,n,i,r,s,o){const a=new Xh,c=new ex,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,D,U,W){const O=U.fog,I=W.geometry,G=v.isMeshStandardMaterial?U.environment:null,H=(v.isMeshStandardMaterial?n:t).get(v.envMap||G),K=H&&H.mapping===xo?H.image.height:null,k=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,L=Q!==void 0?Q.length:0;let he=0;I.morphAttributes.position!==void 0&&(he=1),I.morphAttributes.normal!==void 0&&(he=2),I.morphAttributes.color!==void 0&&(he=3);let V,J,ie,se;if(k){const Ge=$n[k];V=Ge.vertexShader,J=Ge.fragmentShader}else V=v.vertexShader,J=v.fragmentShader,c.update(v),ie=c.getVertexShaderID(v),se=c.getFragmentShaderID(v);const z=l.getRenderTarget(),we=v.alphaTest>0,pe=v.clearcoat>0,Te=v.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:v.type,vertexShader:V,fragmentShader:J,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?l.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:dr,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===wp,tangentSpaceNormalMap:v.normalMapType===kh,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ot,clearcoat:pe,clearcoatMap:pe&&!!v.clearcoatMap,clearcoatRoughnessMap:pe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!v.clearcoatNormalMap,iridescence:Te,iridescenceMap:Te&&!!v.iridescenceMap,iridescenceThicknessMap:Te&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===jr,alphaMap:!!v.alphaMap,alphaTest:we,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:l.shadowMap.enabled&&D.length>0,shadowMapType:l.shadowMap.type,toneMapping:v.toneMapped?l.toneMapping:mi,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bi,flipSided:v.side===Mn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(T,v),S(T,v),T.push(l.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function y(v){const T=_[v.type];let D;if(T){const U=$n[T];D=Gp.clone(U.uniforms)}else D=v.uniforms;return D}function b(v,T){let D;for(let U=0,W=u.length;U<W;U++){const O=u[U];if(O.cacheKey===T){D=O,++D.usedTimes;break}}return D===void 0&&(D=new J0(l,T,v,s),u.push(D)),D}function M(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function A(v){c.remove(v)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:C}}function ix(){let l=new WeakMap;function t(s){let o=l.get(s);return o===void 0&&(o={},l.set(s,o)),o}function n(s){l.delete(s)}function i(s,o,a){l.get(s)[o]=a}function r(){l=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function rx(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function qu(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function Yu(){const l=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,_,p,m){let x=l[t];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},l[t]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=p,x.group=m),t++,x}function a(d,f,g,_,p,m){const x=o(d,f,g,_,p,m);g.transmission>0?i.push(x):g.transparent===!0?r.push(x):n.push(x)}function c(d,f,g,_,p,m){const x=o(d,f,g,_,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):n.unshift(x)}function u(d,f){n.length>1&&n.sort(d||rx),i.length>1&&i.sort(f||qu),r.length>1&&r.sort(f||qu)}function h(){for(let d=t,f=l.length;d<f;d++){const g=l[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:u}}function sx(){let l=new WeakMap;function t(i,r){const s=l.get(i);let o;return s===void 0?(o=new Yu,l.set(i,[o])):r>=s.length?(o=new Yu,s.push(o)):o=s[r],o}function n(){l=new WeakMap}return{get:t,dispose:n}}function ax(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new at};break;case"SpotLight":n={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return l[t.id]=n,n}}}function ox(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=n,n}}}let lx=0;function cx(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function ux(l,t){const n=new ax,i=ox(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,o=new bt,a=new bt;function c(h,d){let f=0,g=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let p=0,m=0,x=0,S=0,y=0,b=0,M=0,A=0,C=0,v=0;h.sort(cx);const T=d!==!0?Math.PI:1;for(let U=0,W=h.length;U<W;U++){const O=h[U],I=O.color,G=O.intensity,H=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=I.r*G*T,g+=I.g*G*T,_+=I.b*G*T;else if(O.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(O.sh.coefficients[k],G);else if(O.isDirectionalLight){const k=n.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){const Q=O.shadow,L=i.get(O);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,r.directionalShadow[p]=L,r.directionalShadowMap[p]=K,r.directionalShadowMatrix[p]=O.shadow.matrix,b++}r.directional[p]=k,p++}else if(O.isSpotLight){const k=n.get(O);k.position.setFromMatrixPosition(O.matrixWorld),k.color.copy(I).multiplyScalar(G*T),k.distance=H,k.coneCos=Math.cos(O.angle),k.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),k.decay=O.decay,r.spot[x]=k;const Q=O.shadow;if(O.map&&(r.spotLightMap[C]=O.map,C++,Q.updateMatrices(O),O.castShadow&&v++),r.spotLightMatrix[x]=Q.matrix,O.castShadow){const L=i.get(O);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,r.spotShadow[x]=L,r.spotShadowMap[x]=K,A++}x++}else if(O.isRectAreaLight){const k=n.get(O);k.color.copy(I).multiplyScalar(G),k.halfWidth.set(O.width*.5,0,0),k.halfHeight.set(0,O.height*.5,0),r.rectArea[S]=k,S++}else if(O.isPointLight){const k=n.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*T),k.distance=O.distance,k.decay=O.decay,O.castShadow){const Q=O.shadow,L=i.get(O);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,r.pointShadow[m]=L,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=O.shadow.matrix,M++}r.point[m]=k,m++}else if(O.isHemisphereLight){const k=n.get(O);k.skyColor.copy(O.color).multiplyScalar(G*T),k.groundColor.copy(O.groundColor).multiplyScalar(G*T),r.hemi[y]=k,y++}}S>0&&(t.isWebGL2||l.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=_;const D=r.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==S||D.hemiLength!==y||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==A||D.numSpotMaps!==C)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=S,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=A+C-v,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=m,D.spotLength=x,D.rectAreaLength=S,D.hemiLength=y,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=A,D.numSpotMaps=C,r.version=lx++)}function u(h,d){let f=0,g=0,_=0,p=0,m=0;const x=d.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const b=h[S];if(b.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(b.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),_++}else if(b.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),a.identity(),o.copy(b.matrixWorld),o.premultiply(x),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),g++}else if(b.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:c,setupView:u,state:r}}function ju(l,t){const n=new ux(l,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function hx(l,t){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let c;return a===void 0?(c=new ju(l,t),n.set(s,[c])):o>=a.length?(c=new ju(l,t),a.push(c)):c=a[o],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class fx extends ca{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dx extends ca{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gx(l,t,n){let i=new lc;const r=new Je,s=new Je,o=new ct,a=new fx({depthPacking:bp}),c=new dx,u={},h=n.maxTextureSize,d={[Fi]:Mn,[Mn]:Fi,[bi]:bi},f=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:px,fragmentShader:mx}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new ki;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Kn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih,this.render=function(b,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const C=l.getRenderTarget(),v=l.getActiveCubeFace(),T=l.getActiveMipmapLevel(),D=l.state;D.setBlending(Li),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,W=b.length;U<W;U++){const O=b[U],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null){const K=this.type!==Ls?{minFilter:$t,magFilter:$t}:{};I.map=new pr(r.x,r.y,K),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}l.setRenderTarget(I.map),l.clear();const H=I.getViewportCount();for(let K=0;K<H;K++){const k=I.getViewport(K);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(o),I.updateMatrices(O,K),i=I.getFrustum(),y(M,A,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Ls&&x(I,A),I.needsUpdate=!1}m.needsUpdate=!1,l.setRenderTarget(C,v,T)};function x(b,M){const A=t.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,l.setRenderTarget(b.mapPass),l.clear(),l.renderBufferDirect(M,null,A,f,p,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,l.setRenderTarget(b.map),l.clear(),l.renderBufferDirect(M,null,A,g,p,null)}function S(b,M,A,C,v,T){let D=null;const U=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)D=U;else if(D=A.isPointLight===!0?c:a,l.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const W=D.uuid,O=M.uuid;let I=u[W];I===void 0&&(I={},u[W]=I);let G=I[O];G===void 0&&(G=D.clone(),I[O]=G),D=G}return D.visible=M.visible,D.wireframe=M.wireframe,T===Ls?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:d[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.map=M.map,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=C,D.farDistance=v),D}function y(b,M,A,C,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Ls)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const U=t.update(b),W=b.material;if(Array.isArray(W)){const O=U.groups;for(let I=0,G=O.length;I<G;I++){const H=O[I],K=W[H.materialIndex];if(K&&K.visible){const k=S(b,K,C,A.near,A.far,v);l.renderBufferDirect(A,null,U,k,b,H)}}}else if(W.visible){const O=S(b,W,C,A.near,A.far,v);l.renderBufferDirect(A,null,U,O,b,null)}}const D=b.children;for(let U=0,W=D.length;U<W;U++)y(D[U],M,A,C,v)}}function _x(l,t,n){const i=n.isWebGL2;function r(){let R=!1;const Y=new ct;let te=null;const ce=new ct(0,0,0,0);return{setMask:function(xe){te!==xe&&!R&&(l.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){R=xe},setClear:function(xe,qe,nt,pt,Ue){Ue===!0&&(xe*=pt,qe*=pt,nt*=pt),Y.set(xe,qe,nt,pt),ce.equals(Y)===!1&&(l.clearColor(xe,qe,nt,pt),ce.copy(Y))},reset:function(){R=!1,te=null,ce.set(-1,0,0,0)}}}function s(){let R=!1,Y=null,te=null,ce=null;return{setTest:function(xe){xe?we(2929):pe(2929)},setMask:function(xe){Y!==xe&&!R&&(l.depthMask(xe),Y=xe)},setFunc:function(xe){if(te!==xe){switch(xe){case qd:l.depthFunc(512);break;case Yd:l.depthFunc(519);break;case jd:l.depthFunc(513);break;case Tl:l.depthFunc(515);break;case $d:l.depthFunc(514);break;case Zd:l.depthFunc(518);break;case Kd:l.depthFunc(516);break;case Jd:l.depthFunc(517);break;default:l.depthFunc(515)}te=xe}},setLocked:function(xe){R=xe},setClear:function(xe){ce!==xe&&(l.clearDepth(xe),ce=xe)},reset:function(){R=!1,Y=null,te=null,ce=null}}}function o(){let R=!1,Y=null,te=null,ce=null,xe=null,qe=null,nt=null,pt=null,Ue=null;return{setTest:function(oe){R||(oe?we(2960):pe(2960))},setMask:function(oe){Y!==oe&&!R&&(l.stencilMask(oe),Y=oe)},setFunc:function(oe,re,ve){(te!==oe||ce!==re||xe!==ve)&&(l.stencilFunc(oe,re,ve),te=oe,ce=re,xe=ve)},setOp:function(oe,re,ve){(qe!==oe||nt!==re||pt!==ve)&&(l.stencilOp(oe,re,ve),qe=oe,nt=re,pt=ve)},setLocked:function(oe){R=oe},setClear:function(oe){Ue!==oe&&(l.clearStencil(oe),Ue=oe)},reset:function(){R=!1,Y=null,te=null,ce=null,xe=null,qe=null,nt=null,pt=null,Ue=null}}}const a=new r,c=new s,u=new o,h=new WeakMap,d=new WeakMap;let f={},g={},_=new WeakMap,p=[],m=null,x=!1,S=null,y=null,b=null,M=null,A=null,C=null,v=null,T=!1,D=null,U=null,W=null,O=null,I=null;const G=l.getParameter(35661);let H=!1,K=0;const k=l.getParameter(7938);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=K>=2);let Q=null,L={};const he=l.getParameter(3088),V=l.getParameter(2978),J=new ct().fromArray(he),ie=new ct().fromArray(V);function se(R,Y,te){const ce=new Uint8Array(4),xe=l.createTexture();l.bindTexture(R,xe),l.texParameteri(R,10241,9728),l.texParameteri(R,10240,9728);for(let qe=0;qe<te;qe++)l.texImage2D(Y+qe,0,6408,1,1,0,6408,5121,ce);return xe}const z={};z[3553]=se(3553,3553,1),z[34067]=se(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),we(2929),c.setFunc(Tl),Ke(!1),q(zc),we(2884),Qe(Li);function we(R){f[R]!==!0&&(l.enable(R),f[R]=!0)}function pe(R){f[R]!==!1&&(l.disable(R),f[R]=!1)}function Te(R,Y){return g[R]!==Y?(l.bindFramebuffer(R,Y),g[R]=Y,i&&(R===36009&&(g[36160]=Y),R===36160&&(g[36009]=Y)),!0):!1}function le(R,Y){let te=p,ce=!1;if(R)if(te=_.get(Y),te===void 0&&(te=[],_.set(Y,te)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(te.length!==xe.length||te[0]!==36064){for(let qe=0,nt=xe.length;qe<nt;qe++)te[qe]=36064+qe;te.length=xe.length,ce=!0}}else te[0]!==36064&&(te[0]=36064,ce=!0);else te[0]!==1029&&(te[0]=1029,ce=!0);ce&&(n.isWebGL2?l.drawBuffers(te):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ge(R){return m!==R?(l.useProgram(R),m=R,!0):!1}const de={[kr]:32774,[Od]:32778,[Nd]:32779};if(i)de[Gc]=32775,de[Vc]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(de[Gc]=R.MIN_EXT,de[Vc]=R.MAX_EXT)}const _e={[zd]:0,[Ud]:1,[kd]:768,[Fh]:770,[Xd]:776,[Wd]:774,[Gd]:772,[Bd]:769,[Oh]:771,[Hd]:775,[Vd]:773};function Qe(R,Y,te,ce,xe,qe,nt,pt){if(R===Li){x===!0&&(pe(3042),x=!1);return}if(x===!1&&(we(3042),x=!0),R!==Fd){if(R!==S||pt!==T){if((y!==kr||A!==kr)&&(l.blendEquation(32774),y=kr,A=kr),pt)switch(R){case jr:l.blendFuncSeparate(1,771,1,771);break;case Uc:l.blendFunc(1,1);break;case kc:l.blendFuncSeparate(0,769,0,1);break;case Bc:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case jr:l.blendFuncSeparate(770,771,1,771);break;case Uc:l.blendFunc(770,1);break;case kc:l.blendFuncSeparate(0,769,0,1);break;case Bc:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,M=null,C=null,v=null,S=R,T=pt}return}xe=xe||Y,qe=qe||te,nt=nt||ce,(Y!==y||xe!==A)&&(l.blendEquationSeparate(de[Y],de[xe]),y=Y,A=xe),(te!==b||ce!==M||qe!==C||nt!==v)&&(l.blendFuncSeparate(_e[te],_e[ce],_e[qe],_e[nt]),b=te,M=ce,C=qe,v=nt),S=R,T=!1}function ut(R,Y){R.side===bi?pe(2884):we(2884);let te=R.side===Mn;Y&&(te=!te),Ke(te),R.blending===jr&&R.transparent===!1?Qe(Li):Qe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const ce=R.stencilWrite;u.setTest(ce),ce&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Re(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?we(32926):pe(32926)}function Ke(R){D!==R&&(R?l.frontFace(2304):l.frontFace(2305),D=R)}function q(R){R!==Dd?(we(2884),R!==U&&(R===zc?l.cullFace(1029):R===Rd?l.cullFace(1028):l.cullFace(1032))):pe(2884),U=R}function et(R){R!==W&&(H&&l.lineWidth(R),W=R)}function Re(R,Y,te){R?(we(32823),(O!==Y||I!==te)&&(l.polygonOffset(Y,te),O=Y,I=te)):pe(32823)}function Lt(R){R?we(3089):pe(3089)}function vt(R){R===void 0&&(R=33984+G-1),Q!==R&&(l.activeTexture(R),Q=R)}function P(R,Y,te){te===void 0&&(Q===null?te=33984+G-1:te=Q);let ce=L[te];ce===void 0&&(ce={type:void 0,texture:void 0},L[te]=ce),(ce.type!==R||ce.texture!==Y)&&(Q!==te&&(l.activeTexture(te),Q=te),l.bindTexture(R,Y||z[R]),ce.type=R,ce.texture=Y)}function w(){const R=L[Q];R!==void 0&&R.type!==void 0&&(l.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{l.compressedTexImage2D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{l.compressedTexImage3D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{l.texSubImage2D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{l.texSubImage3D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{l.texStorage2D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{l.texStorage3D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{l.texImage2D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{l.texImage3D.apply(l,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(R){J.equals(R)===!1&&(l.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function be(R){ie.equals(R)===!1&&(l.viewport(R.x,R.y,R.z,R.w),ie.copy(R))}function Be(R,Y){let te=d.get(Y);te===void 0&&(te=new WeakMap,d.set(Y,te));let ce=te.get(R);ce===void 0&&(ce=l.getUniformBlockIndex(Y,R.name),te.set(R,ce))}function Ce(R,Y){const ce=d.get(Y).get(R);h.get(Y)!==ce&&(l.uniformBlockBinding(Y,ce,R.__bindingPointIndex),h.set(Y,ce))}function tt(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),i===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),f={},Q=null,L={},g={},_=new WeakMap,p=[],m=null,x=!1,S=null,y=null,b=null,M=null,A=null,C=null,v=null,T=!1,D=null,U=null,W=null,O=null,I=null,J.set(0,0,l.canvas.width,l.canvas.height),ie.set(0,0,l.canvas.width,l.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:we,disable:pe,bindFramebuffer:Te,drawBuffers:le,useProgram:Ge,setBlending:Qe,setMaterial:ut,setFlipSided:Ke,setCullFace:q,setLineWidth:et,setPolygonOffset:Re,setScissorTest:Lt,activeTexture:vt,bindTexture:P,unbindTexture:w,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:Ie,texImage3D:me,updateUBOMapping:Be,uniformBlockBinding:Ce,texStorage2D:$,texStorage3D:Se,texSubImage2D:ee,texSubImage3D:ae,compressedTexSubImage2D:Ee,compressedTexSubImage3D:fe,scissor:Pe,viewport:be,reset:tt}}function xx(l,t,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,w){return x?new OffscreenCanvas(P,w):Js("canvas")}function y(P,w,Z,ne){let ee=1;if((P.width>ne||P.height>ne)&&(ee=ne/Math.max(P.width,P.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ae=w?Dl:Math.floor,Ee=ae(ee*P.width),fe=ae(ee*P.height);p===void 0&&(p=S(Ee,fe));const $=Z?S(Ee,fe):p;return $.width=Ee,$.height=fe,$.getContext("2d").drawImage(P,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ee+"x"+fe+")."),$}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return gu(P.width)&&gu(P.height)}function M(P){return a?!1:P.wrapS!==Vn||P.wrapT!==Vn||P.minFilter!==$t&&P.minFilter!==Cn}function A(P,w){return P.generateMipmaps&&w&&P.minFilter!==$t&&P.minFilter!==Cn}function C(P){l.generateMipmap(P)}function v(P,w,Z,ne,ee=!1){if(a===!1)return w;if(P!==null){if(l[P]!==void 0)return l[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=w;return w===6403&&(Z===5126&&(ae=33326),Z===5131&&(ae=33325),Z===5121&&(ae=33321)),w===33319&&(Z===5126&&(ae=33328),Z===5131&&(ae=33327),Z===5121&&(ae=33323)),w===6408&&(Z===5126&&(ae=34836),Z===5131&&(ae=34842),Z===5121&&(ae=ne===ot&&ee===!1?35907:32856),Z===32819&&(ae=32854),Z===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&t.get("EXT_color_buffer_float"),ae}function T(P,w,Z){return A(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==$t&&P.minFilter!==Cn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){return P===$t||P===Wc||P===Co?9728:9729}function U(P){const w=P.target;w.removeEventListener("dispose",U),O(w),w.isVideoTexture&&_.delete(w)}function W(P){const w=P.target;w.removeEventListener("dispose",W),G(w)}function O(P){const w=i.get(P);if(w.__webglInit===void 0)return;const Z=P.source,ne=m.get(Z);if(ne){const ee=ne[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(P),Object.keys(ne).length===0&&m.delete(Z)}i.remove(P)}function I(P){const w=i.get(P);l.deleteTexture(w.__webglTexture);const Z=P.source,ne=m.get(Z);delete ne[w.__cacheKey],o.memory.textures--}function G(P){const w=P.texture,Z=i.get(P),ne=i.get(w);if(ne.__webglTexture!==void 0&&(l.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)l.deleteFramebuffer(Z.__webglFramebuffer[ee]),Z.__webglDepthbuffer&&l.deleteRenderbuffer(Z.__webglDepthbuffer[ee]);else{if(l.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&l.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&l.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ee=0;ee<Z.__webglColorRenderbuffer.length;ee++)Z.__webglColorRenderbuffer[ee]&&l.deleteRenderbuffer(Z.__webglColorRenderbuffer[ee]);Z.__webglDepthRenderbuffer&&l.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ee=0,ae=w.length;ee<ae;ee++){const Ee=i.get(w[ee]);Ee.__webglTexture&&(l.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(w[ee])}i.remove(w),i.remove(P)}let H=0;function K(){H=0}function k(){const P=H;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),H+=1,P}function Q(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function L(P,w){const Z=i.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Z,P,w);return}}n.bindTexture(3553,Z.__webglTexture,33984+w)}function he(P,w){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){pe(Z,P,w);return}n.bindTexture(35866,Z.__webglTexture,33984+w)}function V(P,w){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){pe(Z,P,w);return}n.bindTexture(32879,Z.__webglTexture,33984+w)}function J(P,w){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Te(Z,P,w);return}n.bindTexture(34067,Z.__webglTexture,33984+w)}const ie={[Cl]:10497,[Vn]:33071,[Pl]:33648},se={[$t]:9728,[Wc]:9984,[Co]:9986,[Cn]:9729,[ap]:9985,[$s]:9987};function z(P,w,Z){if(Z?(l.texParameteri(P,10242,ie[w.wrapS]),l.texParameteri(P,10243,ie[w.wrapT]),(P===32879||P===35866)&&l.texParameteri(P,32882,ie[w.wrapR]),l.texParameteri(P,10240,se[w.magFilter]),l.texParameteri(P,10241,se[w.minFilter])):(l.texParameteri(P,10242,33071),l.texParameteri(P,10243,33071),(P===32879||P===35866)&&l.texParameteri(P,32882,33071),(w.wrapS!==Vn||w.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(P,10240,D(w.magFilter)),l.texParameteri(P,10241,D(w.minFilter)),w.minFilter!==$t&&w.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ne=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===$t||w.minFilter!==Co&&w.minFilter!==$s||w.type===tr&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Zs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(l.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function we(P,w){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",U));const ne=w.source;let ee=m.get(ne);ee===void 0&&(ee={},m.set(ne,ee));const ae=Q(w);if(ae!==P.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:l.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ee[ae].usedTimes++;const Ee=ee[P.__cacheKey];Ee!==void 0&&(ee[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(w)),P.__cacheKey=ae,P.__webglTexture=ee[ae].texture}return Z}function pe(P,w,Z){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const ee=we(P,w),ae=w.source;n.bindTexture(ne,P.__webglTexture,33984+Z);const Ee=i.get(ae);if(ae.version!==Ee.__version||ee===!0){n.activeTexture(33984+Z),l.pixelStorei(37440,w.flipY),l.pixelStorei(37441,w.premultiplyAlpha),l.pixelStorei(3317,w.unpackAlignment),l.pixelStorei(37443,0);const fe=M(w)&&b(w.image)===!1;let $=y(w.image,fe,!1,h);$=vt(w,$);const Se=b($)||a,Ie=s.convert(w.format,w.encoding);let me=s.convert(w.type),Pe=v(w.internalFormat,Ie,me,w.encoding,w.isVideoTexture);z(ne,w,Se);let be;const Be=w.mipmaps,Ce=a&&w.isVideoTexture!==!0,tt=Ee.__version===void 0||ee===!0,R=T(w,$,Se);if(w.isDepthTexture)Pe=6402,a?w.type===tr?Pe=36012:w.type===er?Pe=33190:w.type===$r?Pe=35056:Pe=33189:w.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===rr&&Pe===6402&&w.type!==Uh&&w.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=er,me=s.convert(w.type)),w.format===is&&Pe===6402&&(Pe=34041,w.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=$r,me=s.convert(w.type))),tt&&(Ce?n.texStorage2D(3553,1,Pe,$.width,$.height):n.texImage2D(3553,0,Pe,$.width,$.height,0,Ie,me,null));else if(w.isDataTexture)if(Be.length>0&&Se){Ce&&tt&&n.texStorage2D(3553,R,Pe,Be[0].width,Be[0].height);for(let Y=0,te=Be.length;Y<te;Y++)be=Be[Y],Ce?n.texSubImage2D(3553,Y,0,0,be.width,be.height,Ie,me,be.data):n.texImage2D(3553,Y,Pe,be.width,be.height,0,Ie,me,be.data);w.generateMipmaps=!1}else Ce?(tt&&n.texStorage2D(3553,R,Pe,$.width,$.height),n.texSubImage2D(3553,0,0,0,$.width,$.height,Ie,me,$.data)):n.texImage2D(3553,0,Pe,$.width,$.height,0,Ie,me,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ce&&tt&&n.texStorage3D(35866,R,Pe,Be[0].width,Be[0].height,$.depth);for(let Y=0,te=Be.length;Y<te;Y++)be=Be[Y],w.format!==Wn?Ie!==null?Ce?n.compressedTexSubImage3D(35866,Y,0,0,0,be.width,be.height,$.depth,Ie,be.data,0,0):n.compressedTexImage3D(35866,Y,Pe,be.width,be.height,$.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?n.texSubImage3D(35866,Y,0,0,0,be.width,be.height,$.depth,Ie,me,be.data):n.texImage3D(35866,Y,Pe,be.width,be.height,$.depth,0,Ie,me,be.data)}else{Ce&&tt&&n.texStorage2D(3553,R,Pe,Be[0].width,Be[0].height);for(let Y=0,te=Be.length;Y<te;Y++)be=Be[Y],w.format!==Wn?Ie!==null?Ce?n.compressedTexSubImage2D(3553,Y,0,0,be.width,be.height,Ie,be.data):n.compressedTexImage2D(3553,Y,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?n.texSubImage2D(3553,Y,0,0,be.width,be.height,Ie,me,be.data):n.texImage2D(3553,Y,Pe,be.width,be.height,0,Ie,me,be.data)}else if(w.isDataArrayTexture)Ce?(tt&&n.texStorage3D(35866,R,Pe,$.width,$.height,$.depth),n.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,Ie,me,$.data)):n.texImage3D(35866,0,Pe,$.width,$.height,$.depth,0,Ie,me,$.data);else if(w.isData3DTexture)Ce?(tt&&n.texStorage3D(32879,R,Pe,$.width,$.height,$.depth),n.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,Ie,me,$.data)):n.texImage3D(32879,0,Pe,$.width,$.height,$.depth,0,Ie,me,$.data);else if(w.isFramebufferTexture){if(tt)if(Ce)n.texStorage2D(3553,R,Pe,$.width,$.height);else{let Y=$.width,te=$.height;for(let ce=0;ce<R;ce++)n.texImage2D(3553,ce,Pe,Y,te,0,Ie,me,null),Y>>=1,te>>=1}}else if(Be.length>0&&Se){Ce&&tt&&n.texStorage2D(3553,R,Pe,Be[0].width,Be[0].height);for(let Y=0,te=Be.length;Y<te;Y++)be=Be[Y],Ce?n.texSubImage2D(3553,Y,0,0,Ie,me,be):n.texImage2D(3553,Y,Pe,Ie,me,be);w.generateMipmaps=!1}else Ce?(tt&&n.texStorage2D(3553,R,Pe,$.width,$.height),n.texSubImage2D(3553,0,0,0,Ie,me,$)):n.texImage2D(3553,0,Pe,Ie,me,$);A(w,Se)&&C(ne),Ee.__version=ae.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Te(P,w,Z){if(w.image.length!==6)return;const ne=we(P,w),ee=w.source;n.bindTexture(34067,P.__webglTexture,33984+Z);const ae=i.get(ee);if(ee.version!==ae.__version||ne===!0){n.activeTexture(33984+Z),l.pixelStorei(37440,w.flipY),l.pixelStorei(37441,w.premultiplyAlpha),l.pixelStorei(3317,w.unpackAlignment),l.pixelStorei(37443,0);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,$=[];for(let Y=0;Y<6;Y++)!Ee&&!fe?$[Y]=y(w.image[Y],!1,!0,u):$[Y]=fe?w.image[Y].image:w.image[Y],$[Y]=vt(w,$[Y]);const Se=$[0],Ie=b(Se)||a,me=s.convert(w.format,w.encoding),Pe=s.convert(w.type),be=v(w.internalFormat,me,Pe,w.encoding),Be=a&&w.isVideoTexture!==!0,Ce=ae.__version===void 0||ne===!0;let tt=T(w,Se,Ie);z(34067,w,Ie);let R;if(Ee){Be&&Ce&&n.texStorage2D(34067,tt,be,Se.width,Se.height);for(let Y=0;Y<6;Y++){R=$[Y].mipmaps;for(let te=0;te<R.length;te++){const ce=R[te];w.format!==Wn?me!==null?Be?n.compressedTexSubImage2D(34069+Y,te,0,0,ce.width,ce.height,me,ce.data):n.compressedTexImage2D(34069+Y,te,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(34069+Y,te,0,0,ce.width,ce.height,me,Pe,ce.data):n.texImage2D(34069+Y,te,be,ce.width,ce.height,0,me,Pe,ce.data)}}}else{R=w.mipmaps,Be&&Ce&&(R.length>0&&tt++,n.texStorage2D(34067,tt,be,$[0].width,$[0].height));for(let Y=0;Y<6;Y++)if(fe){Be?n.texSubImage2D(34069+Y,0,0,0,$[Y].width,$[Y].height,me,Pe,$[Y].data):n.texImage2D(34069+Y,0,be,$[Y].width,$[Y].height,0,me,Pe,$[Y].data);for(let te=0;te<R.length;te++){const xe=R[te].image[Y].image;Be?n.texSubImage2D(34069+Y,te+1,0,0,xe.width,xe.height,me,Pe,xe.data):n.texImage2D(34069+Y,te+1,be,xe.width,xe.height,0,me,Pe,xe.data)}}else{Be?n.texSubImage2D(34069+Y,0,0,0,me,Pe,$[Y]):n.texImage2D(34069+Y,0,be,me,Pe,$[Y]);for(let te=0;te<R.length;te++){const ce=R[te];Be?n.texSubImage2D(34069+Y,te+1,0,0,me,Pe,ce.image[Y]):n.texImage2D(34069+Y,te+1,be,me,Pe,ce.image[Y])}}}A(w,Ie)&&C(34067),ae.__version=ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function le(P,w,Z,ne,ee){const ae=s.convert(Z.format,Z.encoding),Ee=s.convert(Z.type),fe=v(Z.internalFormat,ae,Ee,Z.encoding);i.get(w).__hasExternalTextures||(ee===32879||ee===35866?n.texImage3D(ee,0,fe,w.width,w.height,w.depth,0,ae,Ee,null):n.texImage2D(ee,0,fe,w.width,w.height,0,ae,Ee,null)),n.bindFramebuffer(36160,P),Re(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,ee,i.get(Z).__webglTexture,0,et(w)):(ee===3553||ee>=34069&&ee<=34074)&&l.framebufferTexture2D(36160,ne,ee,i.get(Z).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ge(P,w,Z){if(l.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(Z||Re(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===tr?ne=36012:ee.type===er&&(ne=33190));const ae=et(w);Re(w)?f.renderbufferStorageMultisampleEXT(36161,ae,ne,w.width,w.height):l.renderbufferStorageMultisample(36161,ae,ne,w.width,w.height)}else l.renderbufferStorage(36161,ne,w.width,w.height);l.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const ne=et(w);Z&&Re(w)===!1?l.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Re(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):l.renderbufferStorage(36161,34041,w.width,w.height),l.framebufferRenderbuffer(36160,33306,36161,P)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<ne.length;ee++){const ae=ne[ee],Ee=s.convert(ae.format,ae.encoding),fe=s.convert(ae.type),$=v(ae.internalFormat,Ee,fe,ae.encoding),Se=et(w);Z&&Re(w)===!1?l.renderbufferStorageMultisample(36161,Se,$,w.width,w.height):Re(w)?f.renderbufferStorageMultisampleEXT(36161,Se,$,w.width,w.height):l.renderbufferStorage(36161,$,w.width,w.height)}}l.bindRenderbuffer(36161,null)}function de(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,ee=et(w);if(w.depthTexture.format===rr)Re(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ee):l.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===is)Re(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ee):l.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function _e(P){const w=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,P)}else if(Z){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=l.createRenderbuffer(),Ge(w.__webglDepthbuffer[ne],P,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=l.createRenderbuffer(),Ge(w.__webglDepthbuffer,P,!1);n.bindFramebuffer(36160,null)}function Qe(P,w,Z){const ne=i.get(P);w!==void 0&&le(ne.__webglFramebuffer,P,P.texture,36064,3553),Z!==void 0&&_e(P)}function ut(P){const w=P.texture,Z=i.get(P),ne=i.get(w);P.addEventListener("dispose",W),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=l.createTexture()),ne.__version=w.version,o.memory.textures++);const ee=P.isWebGLCubeRenderTarget===!0,ae=P.isWebGLMultipleRenderTargets===!0,Ee=b(P)||a;if(ee){Z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)Z.__webglFramebuffer[fe]=l.createFramebuffer()}else{if(Z.__webglFramebuffer=l.createFramebuffer(),ae)if(r.drawBuffers){const fe=P.texture;for(let $=0,Se=fe.length;$<Se;$++){const Ie=i.get(fe[$]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=l.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Re(P)===!1){const fe=ae?w:[w];Z.__webglMultisampledFramebuffer=l.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let $=0;$<fe.length;$++){const Se=fe[$];Z.__webglColorRenderbuffer[$]=l.createRenderbuffer(),l.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[$]);const Ie=s.convert(Se.format,Se.encoding),me=s.convert(Se.type),Pe=v(Se.internalFormat,Ie,me,Se.encoding,P.isXRRenderTarget===!0),be=et(P);l.renderbufferStorageMultisample(36161,be,Pe,P.width,P.height),l.framebufferRenderbuffer(36160,36064+$,36161,Z.__webglColorRenderbuffer[$])}l.bindRenderbuffer(36161,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=l.createRenderbuffer(),Ge(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(36160,null)}}if(ee){n.bindTexture(34067,ne.__webglTexture),z(34067,w,Ee);for(let fe=0;fe<6;fe++)le(Z.__webglFramebuffer[fe],P,w,36064,34069+fe);A(w,Ee)&&C(34067),n.unbindTexture()}else if(ae){const fe=P.texture;for(let $=0,Se=fe.length;$<Se;$++){const Ie=fe[$],me=i.get(Ie);n.bindTexture(3553,me.__webglTexture),z(3553,Ie,Ee),le(Z.__webglFramebuffer,P,Ie,36064+$,3553),A(Ie,Ee)&&C(3553)}n.unbindTexture()}else{let fe=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?fe=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,ne.__webglTexture),z(fe,w,Ee),le(Z.__webglFramebuffer,P,w,36064,fe),A(w,Ee)&&C(fe),n.unbindTexture()}P.depthBuffer&&_e(P)}function Ke(P){const w=b(P)||a,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,ee=Z.length;ne<ee;ne++){const ae=Z[ne];if(A(ae,w)){const Ee=P.isWebGLCubeRenderTarget?34067:3553,fe=i.get(ae).__webglTexture;n.bindTexture(Ee,fe),C(Ee),n.unbindTexture()}}}function q(P){if(a&&P.samples>0&&Re(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,ne=P.height;let ee=16384;const ae=[],Ee=P.stencilBuffer?33306:36096,fe=i.get(P),$=P.isWebGLMultipleRenderTargets===!0;if($)for(let Se=0;Se<w.length;Se++)n.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Se,36161,null),n.bindFramebuffer(36160,fe.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Se,3553,null,0);n.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,fe.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){ae.push(36064+Se),P.depthBuffer&&ae.push(Ee);const Ie=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ie===!1&&(P.depthBuffer&&(ee|=256),P.stencilBuffer&&(ee|=1024)),$&&l.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[Se]),Ie===!0&&(l.invalidateFramebuffer(36008,[Ee]),l.invalidateFramebuffer(36009,[Ee])),$){const me=i.get(w[Se]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,me,0)}l.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,ee,9728),g&&l.invalidateFramebuffer(36008,ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),$)for(let Se=0;Se<w.length;Se++){n.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Se,36161,fe.__webglColorRenderbuffer[Se]);const Ie=i.get(w[Se]).__webglTexture;n.bindFramebuffer(36160,fe.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Se,3553,Ie,0)}n.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function et(P){return Math.min(d,P.samples)}function Re(P){const w=i.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(P){const w=o.render.frame;_.get(P)!==w&&(_.set(P,w),P.update())}function vt(P,w){const Z=P.encoding,ne=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ll||Z!==dr&&(Z===ot?a===!1?t.has("EXT_sRGB")===!0&&ne===Wn?(P.format=Ll,P.minFilter=Cn,P.generateMipmaps=!1):w=Vh.sRGBToLinear(w):(ne!==Wn||ee!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),w}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.setTexture2D=L,this.setTexture2DArray=he,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Re}function vx(l,t,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===fr)return 5121;if(s===up)return 32819;if(s===hp)return 32820;if(s===op)return 5120;if(s===lp)return 5122;if(s===Uh)return 5123;if(s===cp)return 5124;if(s===er)return 5125;if(s===tr)return 5126;if(s===Zs)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fp)return 6406;if(s===Wn)return 6408;if(s===dp)return 6409;if(s===pp)return 6410;if(s===rr)return 6402;if(s===is)return 34041;if(s===Ll)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mp)return 6403;if(s===gp)return 36244;if(s===_p)return 33319;if(s===xp)return 33320;if(s===vp)return 36249;if(s===Po||s===Lo||s===Do||s===Ro)if(o===ot)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Do)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ro)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hc||s===Xc||s===qc||s===Yc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yp)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jc||s===$c)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===jc)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$c)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zc||s===Kc||s===Jc||s===Qc||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===au||s===ou||s===lu||s===cu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===iu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ru)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===su)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===au)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ou)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Io)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Mp||s===uu||s===hu||s===fu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Io)return a.COMPRESSED_RED_RGTC1_EXT;if(s===uu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):l[s]!==void 0?l[s]:null}return{convert:r}}class yx extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Da extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const p of t.hand.values()){const m=n.getJointPose(p,i),x=this._getHandJoint(u,p);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class Sx extends nn{constructor(t,n,i,r,s,o,a,c,u,h){if(h=h!==void 0?h:rr,h!==rr&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===rr&&(i=er),i===void 0&&h===is&&(i=$r),super(null,r,s,o,a,c,h,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1}}class bx extends ds{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,h=null,d=null,f=null,g=null,_=null;const p=n.getContextAttributes();let m=null,x=null;const S=[],y=[],b=new Set,M=new Map,A=new _n;A.layers.enable(1),A.viewport=new ct;const C=new _n;C.layers.enable(2),C.viewport=new ct;const v=[A,C],T=new yx;T.layers.enable(1),T.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=S[V];return J===void 0&&(J=new al,S[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=S[V];return J===void 0&&(J=new al,S[V]=J),J.getGripSpace()},this.getHand=function(V){let J=S[V];return J===void 0&&(J=new al,S[V]=J),J.getHandSpace()};function W(V){const J=y.indexOf(V.inputSource);if(J===-1)return;const ie=S[J];ie!==void 0&&ie.dispatchEvent({type:V.type,data:V.inputSource})}function O(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",I);for(let V=0;V<S.length;V++){const J=y[V];J!==null&&(y[V]=null,S[V].disconnect(J))}D=null,U=null,t.setRenderTarget(m),g=null,f=null,d=null,r=null,x=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",O),r.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:g}),x=new pr(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:fr,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let J=null,ie=null,se=null;p.depth&&(se=p.stencil?35056:33190,J=p.stencil?is:rr,ie=p.stencil?$r:er);const z={colorFormat:32856,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(z),r.updateRenderState({layers:[f]}),x=new pr(f.textureWidth,f.textureHeight,{format:Wn,type:fr,depthTexture:new Sx(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const we=t.properties.get(x);we.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(V){for(let J=0;J<V.removed.length;J++){const ie=V.removed[J],se=y.indexOf(ie);se>=0&&(y[se]=null,S[se].disconnect(ie))}for(let J=0;J<V.added.length;J++){const ie=V.added[J];let se=y.indexOf(ie);if(se===-1){for(let we=0;we<S.length;we++)if(we>=y.length){y.push(ie),se=we;break}else if(y[we]===null){y[we]=ie,se=we;break}if(se===-1)break}const z=S[se];z&&z.connect(ie)}}const G=new B,H=new B;function K(V,J,ie){G.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(ie.matrixWorld);const se=G.distanceTo(H),z=J.projectionMatrix.elements,we=ie.projectionMatrix.elements,pe=z[14]/(z[10]-1),Te=z[14]/(z[10]+1),le=(z[9]+1)/z[5],Ge=(z[9]-1)/z[5],de=(z[8]-1)/z[0],_e=(we[8]+1)/we[0],Qe=pe*de,ut=pe*_e,Ke=se/(-de+_e),q=Ke*-de;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(q),V.translateZ(Ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const et=pe+Ke,Re=Te+Ke,Lt=Qe-q,vt=ut+(se-q),P=le*Te/Re*et,w=Ge*Te/Re*et;V.projectionMatrix.makePerspective(Lt,vt,P,w,et,Re)}function k(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;T.near=C.near=A.near=V.near,T.far=C.far=A.far=V.far,(D!==T.near||U!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,U=T.far);const J=V.parent,ie=T.cameras;k(T,J);for(let z=0;z<ie.length;z++)k(ie[z],J);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),V.matrix.copy(T.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const se=V.children;for(let z=0,we=se.length;z<we;z++)se[z].updateMatrixWorld(!0);ie.length===2?K(T,A,C):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.getPlanes=function(){return b};let Q=null;function L(V,J){if(h=J.getViewerPose(u||o),_=J,h!==null){const ie=h.views;g!==null&&(t.setRenderTargetFramebuffer(x,g.framebuffer),t.setRenderTarget(x));let se=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,se=!0);for(let z=0;z<ie.length;z++){const we=ie[z];let pe=null;if(g!==null)pe=g.getViewport(we);else{const le=d.getViewSubImage(f,we);pe=le.viewport,z===0&&(t.setRenderTargetTextures(x,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(x))}let Te=v[z];Te===void 0&&(Te=new _n,Te.layers.enable(z),Te.viewport=new ct,v[z]=Te),Te.matrix.fromArray(we.transform.matrix),Te.projectionMatrix.fromArray(we.projectionMatrix),Te.viewport.set(pe.x,pe.y,pe.width,pe.height),z===0&&T.matrix.copy(Te.matrix),se===!0&&T.cameras.push(Te)}}for(let ie=0;ie<S.length;ie++){const se=y[ie],z=S[ie];se!==null&&z!==void 0&&z.update(se,J,u||o)}if(Q&&Q(V,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ie=null;for(const se of b)J.detectedPlanes.has(se)||(ie===null&&(ie=[]),ie.push(se));if(ie!==null)for(const se of ie)b.delete(se),M.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of J.detectedPlanes)if(!b.has(se))b.add(se),M.set(se,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const z=M.get(se);se.lastChangedTime>z&&(M.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}_=null}const he=new Kh;he.setAnimationLoop(L),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}function wx(l,t){function n(p,m){m.color.getRGB(p.fogColor.value,jh(l)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,S,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,x,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=l.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap?S=m.clearcoatRoughnessMap:m.iridescenceMap?S=m.iridescenceMap:m.iridescenceThicknessMap?S=m.iridescenceThicknessMap:m.specularIntensityMap?S=m.specularIntensityMap:m.specularColorMap?S=m.specularColorMap:m.transmissionMap?S=m.transmissionMap:m.thicknessMap?S=m.thicknessMap:m.sheenColorMap?S=m.sheenColorMap:m.sheenRoughnessMap&&(S=m.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,x,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=S*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tx(l,t,n,i){let r={},s={},o=[];const a=n.isWebGL2?l.getParameter(35375):0;function c(S,y){const b=y.program;i.uniformBlockBinding(S,b)}function u(S,y){let b=r[S.id];b===void 0&&(_(S),b=h(S),r[S.id]=b,S.addEventListener("dispose",m));const M=y.program;i.updateUBOMapping(S,M);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const y=d();S.__bindingPointIndex=y;const b=l.createBuffer(),M=S.__size,A=S.usage;return l.bindBuffer(35345,b),l.bufferData(35345,M,A),l.bindBuffer(35345,null),l.bindBufferBase(35345,y,b),b}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],b=S.uniforms,M=S.__cache;l.bindBuffer(35345,y);for(let A=0,C=b.length;A<C;A++){const v=b[A];if(g(v,A,M)===!0){const T=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let U=0;for(let W=0;W<D.length;W++){const O=D[W],I=p(O);typeof O=="number"?(v.__data[0]=O,l.bufferSubData(35345,T+U,v.__data)):O.isMatrix3?(v.__data[0]=O.elements[0],v.__data[1]=O.elements[1],v.__data[2]=O.elements[2],v.__data[3]=O.elements[0],v.__data[4]=O.elements[3],v.__data[5]=O.elements[4],v.__data[6]=O.elements[5],v.__data[7]=O.elements[0],v.__data[8]=O.elements[6],v.__data[9]=O.elements[7],v.__data[10]=O.elements[8],v.__data[11]=O.elements[0]):(O.toArray(v.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,T,v.__data)}}l.bindBuffer(35345,null)}function g(S,y,b){const M=S.value;if(b[y]===void 0){if(typeof M=="number")b[y]=M;else{const A=Array.isArray(M)?M:[M],C=[];for(let v=0;v<A.length;v++)C.push(A[v].clone());b[y]=C}return!0}else if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{const A=Array.isArray(b[y])?b[y]:[b[y]],C=Array.isArray(M)?M:[M];for(let v=0;v<A.length;v++){const T=A[v];if(T.equals(C[v])===!1)return T.copy(C[v]),!0}}return!1}function _(S){const y=S.uniforms;let b=0;const M=16;let A=0;for(let C=0,v=y.length;C<v;C++){const T=y[C],D={boundary:0,storage:0},U=Array.isArray(T.value)?T.value:[T.value];for(let W=0,O=U.length;W<O;W++){const I=U[W],G=p(I);D.boundary+=G.boundary,D.storage+=G.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,C>0){A=b%M;const W=M-A;A!==0&&W-D.boundary<0&&(b+=M-A,T.__offset=b)}b+=D.storage}return A=b%M,A>0&&(b+=M-A),S.__size=b,S.__cache={},this}function p(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),l.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function x(){for(const S in r)l.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:u,dispose:x}}function Ex(){const l=Js("canvas");return l.style.display="block",l}function Ax(l={}){this.isWebGLRenderer=!0;const t=l.canvas!==void 0?l.canvas:Ex(),n=l.context!==void 0?l.context:null,i=l.depth!==void 0?l.depth:!0,r=l.stencil!==void 0?l.stencil:!0,s=l.antialias!==void 0?l.antialias:!1,o=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,a=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,c=l.powerPreference!==void 0?l.powerPreference:"default",u=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let h;n!==null?h=n.getContextAttributes().alpha:h=l.alpha!==void 0?l.alpha:!1;let d=null,f=null;const g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=dr,this.physicallyCorrectLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const p=this;let m=!1,x=0,S=0,y=null,b=-1,M=null;const A=new ct,C=new ct;let v=null,T=t.width,D=t.height,U=1,W=null,O=null;const I=new ct(0,0,T,D),G=new ct(0,0,T,D);let H=!1;const K=new lc;let k=!1,Q=!1,L=null;const he=new bt,V=new Je,J=new B,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return y===null?U:1}let z=n;function we(E,N){for(let j=0;j<E.length;j++){const F=E[j],X=t.getContext(F,N);if(X!==null)return X}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Be,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),z=we(N,E),z===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,Te,le,Ge,de,_e,Qe,ut,Ke,q,et,Re,Lt,vt,P,w,Z,ne,ee,ae,Ee,fe,$,Se;function Ie(){pe=new z_(z),Te=new L_(z,pe,l),pe.init(Te),fe=new vx(z,pe,Te),le=new _x(z,pe,Te),Ge=new B_,de=new ix,_e=new xx(z,pe,le,de,Te,fe,Ge),Qe=new R_(p),ut=new N_(p),Ke=new jp(z,Te),$=new C_(z,pe,Ke,Te),q=new U_(z,Ke,Ge,$),et=new H_(z,q,Ke,Ge),ee=new W_(z,Te,_e),w=new D_(de),Re=new nx(p,Qe,ut,pe,Te,$,w),Lt=new wx(p,de),vt=new sx,P=new hx(pe,Te),ne=new A_(p,Qe,ut,le,et,h,o),Z=new gx(p,et,Te),Se=new Tx(z,Ge,Te,le),ae=new P_(z,pe,Ge,Te),Ee=new k_(z,pe,Ge,Te),Ge.programs=Re.programs,p.capabilities=Te,p.extensions=pe,p.properties=de,p.renderLists=vt,p.shadowMap=Z,p.state=le,p.info=Ge}Ie();const me=new bx(p,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,N,j){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=N,t.width=Math.floor(E*U),t.height=Math.floor(N*U),j!==!1&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(T*U,D*U).floor()},this.setDrawingBufferSize=function(E,N,j){T=E,D=N,U=j,t.width=Math.floor(E*j),t.height=Math.floor(N*j),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,N,j,F){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,N,j,F),le.viewport(A.copy(I).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,N,j,F){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,N,j,F),le.scissor(C.copy(G).multiplyScalar(U).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){le.setScissorTest(H=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,N=!0,j=!0){let F=0;E&&(F|=16384),N&&(F|=256),j&&(F|=1024),z.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),vt.dispose(),P.dispose(),de.dispose(),Qe.dispose(),ut.dispose(),et.dispose(),$.dispose(),Se.dispose(),Re.dispose(),me.dispose(),me.removeEventListener("sessionstart",ce),me.removeEventListener("sessionend",xe),L&&(L.dispose(),L=null),qe.stop()};function Pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=Ge.autoReset,N=Z.enabled,j=Z.autoUpdate,F=Z.needsUpdate,X=Z.type;Ie(),Ge.autoReset=E,Z.enabled=N,Z.autoUpdate=j,Z.needsUpdate=F,Z.type=X}function Be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const N=E.target;N.removeEventListener("dispose",Ce),tt(N)}function tt(E){R(E),de.remove(E)}function R(E){const N=de.get(E).programs;N!==void 0&&(N.forEach(function(j){Re.releaseProgram(j)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,j,F,X,ye){N===null&&(N=ie);const ge=X.isMesh&&X.matrixWorld.determinant()<0,Me=Ne(E,N,j,F,X);le.setMaterial(F,ge);let Ae=j.index,We=1;F.wireframe===!0&&(Ae=q.getWireframeAttribute(j),We=2);const ke=j.drawRange,De=j.attributes.position;let ze=ke.start*We,ht=(ke.start+ke.count)*We;ye!==null&&(ze=Math.max(ze,ye.start*We),ht=Math.min(ht,(ye.start+ye.count)*We)),Ae!==null?(ze=Math.max(ze,0),ht=Math.min(ht,Ae.count)):De!=null&&(ze=Math.max(ze,0),ht=Math.min(ht,De.count));const ln=ht-ze;if(ln<0||ln===1/0)return;$.setup(X,F,Me,j,Ae);let qn,st=ae;if(Ae!==null&&(qn=Ke.get(Ae),st=Ee,st.setIndex(qn)),X.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*se()),st.setMode(1)):st.setMode(4);else if(X.isLine){let Oe=F.linewidth;Oe===void 0&&(Oe=1),le.setLineWidth(Oe*se()),X.isLineSegments?st.setMode(1):X.isLineLoop?st.setMode(2):st.setMode(3)}else X.isPoints?st.setMode(0):X.isSprite&&st.setMode(4);if(X.isInstancedMesh)st.renderInstances(ze,ln,X.count);else if(j.isInstancedBufferGeometry){const Oe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ii=Math.min(j.instanceCount,Oe);st.renderInstances(ze,ln,ii)}else st.render(ze,ln)},this.compile=function(E,N){function j(F,X,ye){F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,ve(F,X,ye),F.side=Fi,F.needsUpdate=!0,ve(F,X,ye),F.side=bi):ve(F,X,ye)}f=P.get(E),f.init(),_.push(f),E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(F){const X=F.material;if(X)if(Array.isArray(X))for(let ye=0;ye<X.length;ye++){const ge=X[ye];j(ge,E,F)}else j(X,E,F)}),_.pop(),f=null};let Y=null;function te(E){Y&&Y(E)}function ce(){qe.stop()}function xe(){qe.start()}const qe=new Kh;qe.setAnimationLoop(te),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){Y=E,me.setAnimationLoop(E),E===null?qe.stop():qe.start()},me.addEventListener("sessionstart",ce),me.addEventListener("sessionend",xe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,N,y),f=P.get(E,_.length),f.init(),_.push(f),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(he),Q=this.localClippingEnabled,k=w.init(this.clippingPlanes,Q),d=vt.get(E,g.length),d.init(),g.push(d),nt(E,N,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(W,O),k===!0&&w.beginShadows();const j=f.state.shadowsArray;if(Z.render(j,E,N),k===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,E),f.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const F=N.cameras;for(let X=0,ye=F.length;X<ye;X++){const ge=F[X];pt(d,E,ge,ge.viewport)}}else pt(d,E,N);y!==null&&(_e.updateMultisampleRenderTarget(y),_e.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,N),$.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function nt(E,N,j,F){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){F&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const ge=et.update(E),Me=E.material;Me.visible&&d.push(E,ge,Me,j,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ge.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ge.render.frame),!E.frustumCulled||K.intersectsObject(E))){F&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const ge=et.update(E),Me=E.material;if(Array.isArray(Me)){const Ae=ge.groups;for(let We=0,ke=Ae.length;We<ke;We++){const De=Ae[We],ze=Me[De.materialIndex];ze&&ze.visible&&d.push(E,ge,ze,j,J.z,De)}}else Me.visible&&d.push(E,ge,Me,j,J.z,null)}}const ye=E.children;for(let ge=0,Me=ye.length;ge<Me;ge++)nt(ye[ge],N,j,F)}function pt(E,N,j,F){const X=E.opaque,ye=E.transmissive,ge=E.transparent;f.setupLightsView(j),k===!0&&w.setGlobalState(p.clippingPlanes,j),ye.length>0&&Ue(X,N,j),F&&le.viewport(A.copy(F)),X.length>0&&oe(X,N,j),ye.length>0&&oe(ye,N,j),ge.length>0&&oe(ge,N,j),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ue(E,N,j){const F=Te.isWebGL2;L===null&&(L=new pr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Zs:fr,minFilter:$s,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(V),F?L.setSize(V.x,V.y):L.setSize(Dl(V.x),Dl(V.y));const X=p.getRenderTarget();p.setRenderTarget(L),p.clear();const ye=p.toneMapping;p.toneMapping=mi,oe(E,N,j),p.toneMapping=ye,_e.updateMultisampleRenderTarget(L),_e.updateRenderTargetMipmap(L),p.setRenderTarget(X)}function oe(E,N,j){const F=N.isScene===!0?N.overrideMaterial:null;for(let X=0,ye=E.length;X<ye;X++){const ge=E[X],Me=ge.object,Ae=ge.geometry,We=F===null?ge.material:F,ke=ge.group;Me.layers.test(j.layers)&&re(Me,N,j,Ae,We,ke)}}function re(E,N,j,F,X,ye){E.onBeforeRender(p,N,j,F,X,ye),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(p,N,j,F,E,ye),X.transparent===!0&&X.side===bi&&X.forceSinglePass===!1?(X.side=Mn,X.needsUpdate=!0,p.renderBufferDirect(j,N,F,X,E,ye),X.side=Fi,X.needsUpdate=!0,p.renderBufferDirect(j,N,F,X,E,ye),X.side=bi):p.renderBufferDirect(j,N,F,X,E,ye),E.onAfterRender(p,N,j,F,X,ye)}function ve(E,N,j){N.isScene!==!0&&(N=ie);const F=de.get(E),X=f.state.lights,ye=f.state.shadowsArray,ge=X.state.version,Me=Re.getParameters(E,X.state,ye,N,j),Ae=Re.getProgramCacheKey(Me);let We=F.programs;F.environment=E.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(E.isMeshStandardMaterial?ut:Qe).get(E.envMap||F.environment),We===void 0&&(E.addEventListener("dispose",Ce),We=new Map,F.programs=We);let ke=We.get(Ae);if(ke!==void 0){if(F.currentProgram===ke&&F.lightsStateVersion===ge)return Fe(E,Me),ke}else Me.uniforms=Re.getUniforms(E),E.onBuild(j,Me,p),E.onBeforeCompile(Me,p),ke=Re.acquireProgram(Me,Ae),We.set(Ae,ke),F.uniforms=Me.uniforms;const De=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=w.uniform),Fe(E,Me),F.needsLights=Ve(E),F.lightsStateVersion=ge,F.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix);const ze=ke.getUniforms(),ht=qa.seqWithValue(ze.seq,De);return F.currentProgram=ke,F.uniformsList=ht,ke}function Fe(E,N){const j=de.get(E);j.outputEncoding=N.outputEncoding,j.instancing=N.instancing,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function Ne(E,N,j,F,X){N.isScene!==!0&&(N=ie),_e.resetTextureUnits();const ye=N.fog,ge=F.isMeshStandardMaterial?N.environment:null,Me=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:dr,Ae=(F.isMeshStandardMaterial?ut:Qe).get(F.envMap||ge),We=F.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!F.normalMap&&!!j.attributes.tangent,De=!!j.morphAttributes.position,ze=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color,ln=F.toneMapped?p.toneMapping:mi,qn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=qn!==void 0?qn.length:0,Oe=de.get(F),ii=f.state.lights;if(k===!0&&(Q===!0||E!==M)){const cn=E===M&&F.id===b;w.setState(F,E,cn)}let Dt=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ii.state.version||Oe.outputEncoding!==Me||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ae||F.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==w.numPlanes||Oe.numIntersection!==w.numIntersection)||Oe.vertexAlphas!==We||Oe.vertexTangents!==ke||Oe.morphTargets!==De||Oe.morphNormals!==ze||Oe.morphColors!==ht||Oe.toneMapping!==ln||Te.isWebGL2===!0&&Oe.morphTargetsCount!==st)&&(Dt=!0):(Dt=!0,Oe.__version=F.version);let Vi=Oe.currentProgram;Dt===!0&&(Vi=ve(F,N,X));let Oc=!1,xs=!1,To=!1;const Ht=Vi.getUniforms(),Wi=Oe.uniforms;if(le.useProgram(Vi.program)&&(Oc=!0,xs=!0,To=!0),F.id!==b&&(b=F.id,xs=!0),Oc||M!==E){if(Ht.setValue(z,"projectionMatrix",E.projectionMatrix),Te.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,xs=!0,To=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const cn=Ht.map.cameraPosition;cn!==void 0&&cn.setValue(z,J.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||X.isSkinnedMesh)&&Ht.setValue(z,"viewMatrix",E.matrixWorldInverse)}if(X.isSkinnedMesh){Ht.setOptional(z,X,"bindMatrix"),Ht.setOptional(z,X,"bindMatrixInverse");const cn=X.skeleton;cn&&(Te.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Ht.setValue(z,"boneTexture",cn.boneTexture,_e),Ht.setValue(z,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Eo=j.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&Te.isWebGL2===!0)&&ee.update(X,j,F,Vi),(xs||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Ht.setValue(z,"receiveShadow",X.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Wi.envMap.value=Ae,Wi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),xs&&(Ht.setValue(z,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&yt(Wi,To),ye&&F.fog===!0&&Lt.refreshFogUniforms(Wi,ye),Lt.refreshMaterialUniforms(Wi,F,U,D,L),qa.upload(z,Oe.uniformsList,Wi,_e)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(qa.upload(z,Oe.uniformsList,Wi,_e),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ht.setValue(z,"center",X.center),Ht.setValue(z,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(z,"normalMatrix",X.normalMatrix),Ht.setValue(z,"modelMatrix",X.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const cn=F.uniformsGroups;for(let Ao=0,Ld=cn.length;Ao<Ld;Ao++)if(Te.isWebGL2){const Nc=cn[Ao];Se.update(Nc,Vi),Se.bind(Nc,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function yt(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ve(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,N,j){de.get(E.texture).__webglTexture=N,de.get(E.depthTexture).__webglTexture=j;const F=de.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=j===void 0,F.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const j=de.get(E);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,j=0){y=E,x=N,S=j;let F=!0,X=null,ye=!1,ge=!1;if(E){const Ae=de.get(E);Ae.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),F=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(E):Ae.__hasExternalTextures&&_e.rebindTextures(E,de.get(E.texture).__webglTexture,de.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ge=!0);const ke=de.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(X=ke[N],ye=!0):Te.isWebGL2&&E.samples>0&&_e.useMultisampledRTT(E)===!1?X=de.get(E).__webglMultisampledFramebuffer:X=ke,A.copy(E.viewport),C.copy(E.scissor),v=E.scissorTest}else A.copy(I).multiplyScalar(U).floor(),C.copy(G).multiplyScalar(U).floor(),v=H;if(le.bindFramebuffer(36160,X)&&Te.drawBuffers&&F&&le.drawBuffers(E,X),le.viewport(A),le.scissor(C),le.setScissorTest(v),ye){const Ae=de.get(E.texture);z.framebufferTexture2D(36160,36064,34069+N,Ae.__webglTexture,j)}else if(ge){const Ae=de.get(E.texture),We=N||0;z.framebufferTextureLayer(36160,36064,Ae.__webglTexture,j||0,We)}b=-1},this.readRenderTargetPixels=function(E,N,j,F,X,ye,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=de.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){le.bindFramebuffer(36160,Me);try{const Ae=E.texture,We=Ae.format,ke=Ae.type;if(We!==Wn&&fe.convert(We)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=ke===Zs&&(pe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&pe.has("EXT_color_buffer_float"));if(ke!==fr&&fe.convert(ke)!==z.getParameter(35738)&&!(ke===tr&&(Te.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-F&&j>=0&&j<=E.height-X&&z.readPixels(N,j,F,X,fe.convert(We),fe.convert(ke),ye)}finally{const Ae=y!==null?de.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(E,N,j=0){const F=Math.pow(2,-j),X=Math.floor(N.image.width*F),ye=Math.floor(N.image.height*F);_e.setTexture2D(N,0),z.copyTexSubImage2D(3553,j,0,0,E.x,E.y,X,ye),le.unbindTexture()},this.copyTextureToTexture=function(E,N,j,F=0){const X=N.image.width,ye=N.image.height,ge=fe.convert(j.format),Me=fe.convert(j.type);_e.setTexture2D(j,0),z.pixelStorei(37440,j.flipY),z.pixelStorei(37441,j.premultiplyAlpha),z.pixelStorei(3317,j.unpackAlignment),N.isDataTexture?z.texSubImage2D(3553,F,E.x,E.y,X,ye,ge,Me,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(3553,F,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,ge,N.mipmaps[0].data):z.texSubImage2D(3553,F,E.x,E.y,ge,Me,N.image),F===0&&j.generateMipmaps&&z.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,N,j,F,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,ge=E.max.y-E.min.y+1,Me=E.max.z-E.min.z+1,Ae=fe.convert(F.format),We=fe.convert(F.type);let ke;if(F.isData3DTexture)_e.setTexture3D(F,0),ke=32879;else if(F.isDataArrayTexture)_e.setTexture2DArray(F,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,F.flipY),z.pixelStorei(37441,F.premultiplyAlpha),z.pixelStorei(3317,F.unpackAlignment);const De=z.getParameter(3314),ze=z.getParameter(32878),ht=z.getParameter(3316),ln=z.getParameter(3315),qn=z.getParameter(32877),st=j.isCompressedTexture?j.mipmaps[0]:j.image;z.pixelStorei(3314,st.width),z.pixelStorei(32878,st.height),z.pixelStorei(3316,E.min.x),z.pixelStorei(3315,E.min.y),z.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(ke,X,N.x,N.y,N.z,ye,ge,Me,Ae,We,st.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ke,X,N.x,N.y,N.z,ye,ge,Me,Ae,st.data)):z.texSubImage3D(ke,X,N.x,N.y,N.z,ye,ge,Me,Ae,We,st),z.pixelStorei(3314,De),z.pixelStorei(32878,ze),z.pixelStorei(3316,ht),z.pixelStorei(3315,ln),z.pixelStorei(32877,qn),X===0&&F.generateMipmaps&&z.generateMipmap(ke),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?_e.setTextureCube(E,0):E.isData3DTexture?_e.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_e.setTexture2DArray(E,0):_e.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){x=0,S=0,y=null,le.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nf extends Ax{}nf.prototype.isWebGL1Renderer=!0;class Cx extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class hc extends ki{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let u=0;const h=[],d=new B,f=new B,g=[],_=[],p=[],m=[];for(let x=0;x<=i;x++){const S=[],y=x/i;let b=0;x==0&&o==0?b=.5/n:x==i&&c==Math.PI&&(b=-.5/n);for(let M=0;M<=n;M++){const A=M/n;d.x=-t*Math.cos(r+A*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(r+A*s)*Math.sin(o+y*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),p.push(f.x,f.y,f.z),m.push(A+b,1-y),S.push(u++)}h.push(S)}for(let x=0;x<i;x++)for(let S=0;S<n;S++){const y=h[x][S+1],b=h[x][S],M=h[x+1][S],A=h[x+1][S+1];(x!==0||o>0)&&g.push(y,b,A),(x!==i-1||c<Math.PI)&&g.push(b,M,A)}this.setIndex(g),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(p,3)),this.setAttribute("uv",new Qn(m,2))}static fromJSON(t){return new hc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gs extends ca{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const $u={enabled:!1,files:{},add:function(l,t){this.enabled!==!1&&(this.files[l]=t)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class Px{constructor(t,n,i){const r=this;let s=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],_=u[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}}const Lx=new Px;class rf{constructor(t){this.manager=t!==void 0?t:Lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Dx extends rf{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=$u.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o;const a=Js("img");function c(){h(),$u.add(t,this),n&&n(this),s.manager.itemEnd(t)}function u(d){h(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class _s extends rf{constructor(t){super(t)}load(t,n,i,r){const s=new nn,o=new Dx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class sf extends rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ol=new bt,Zu=new B,Ku=new B;class Rx{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zu),Ku.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Ku),n.updateMatrixWorld(),ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ju=new bt,Es=new B,ll=new B;class Ix extends Rx{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Es.setFromMatrixPosition(t.matrixWorld),i.position.copy(Es),ll.copy(i.position),ll.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ll),i.updateMatrixWorld(),r.makeTranslation(-Es.x,-Es.y,-Es.z),Ju.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}}class Fx extends sf{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ix}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ox extends sf{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nx extends Kn{constructor(t,n,i){const r=new hc(n,4,2),s=new oc({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);const ua=new Cx,io=new _n(70,720/480,.1,1e3),ro=new nf({canvas:document.querySelector("#bg"),alpha:!0});ro.setClearColor(0,0);const Qu=document.querySelector(".banner3d"),zx=new ps(3,3,3);let yr=[];yr.push(new gs({map:new _s().load("/django.jpg")}));yr.push(new gs({map:new _s().load("/js.png")}));yr.push(new gs({map:new _s().load("/html5.jpg")}));yr.push(new gs({map:new _s().load("/css3.jpg")}));yr.push(new gs({map:new _s().load("/python.jpg")}));yr.push(new gs({map:new _s().load("/react.jpg")}));const zs=new Kn(zx,yr);ua.add(io);function af(){io.aspect=380/Qu.offsetHeight,io.updateProjectionMatrix(),ro.setPixelRatio(window.devicePixelRatio),ro.setSize(380,Qu.offsetHeight),window.innerWidth<768?(zs.position.set(0,0,-12),window.innerWidth<=600&&zs.position.set(0,0,-18)):zs.position.set(0,0,-6)}af();window.addEventListener("resize",af);const fc=new Fx(16777215,1.3);fc.position.set(0,8,-.1);const Ux=new Ox(4210752);ua.add(Ux,fc);const kx=new Nx(fc);ua.add(zs);ua.add(kx);function of(){requestAnimationFrame(of),zs.rotation.y+=.01,ro.render(ua,io)}function ci(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function lf(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ss={duration:.5,overwrite:!1,delay:0},dc,Vt,St,Ln=1e8,rt=1/Ln,Il=Math.PI*2,Bx=Il/4,Gx=0,cf=Math.sqrt,Vx=Math.cos,Wx=Math.sin,Ft=function(t){return typeof t=="string"},gt=function(t){return typeof t=="function"},gi=function(t){return typeof t=="number"},pc=function(t){return typeof t>"u"},ni=function(t){return typeof t=="object"},sn=function(t){return t!==!1},uf=function(){return typeof window<"u"},Ra=function(t){return gt(t)||Ft(t)},hf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Fl=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,df=/[+-]=-?[.\d]+/,pf=/[^,'"\[\]\s]+/gi,Hx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,An,Ol,mc,bn={},so={},mf,gf=function(t){return(so=gr(t,bn))&&wn},gc=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},ao=function(t,n){return!n&&console.warn(t)},_f=function(t,n){return t&&(bn[t]=n)&&so&&(so[t]=n)||bn},Qs=function(){return 0},Xx={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},qx={suppressEvents:!0},_c={},Di=[],Nl={},xf,mn={},ul={},eh=30,ja=[],xc="",vc=function(t){var n=t[0],i,r;if(ni(n)||gt(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(r=ja.length;r--&&!ja[r].targetTest(n););i=ja[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Bf(t[r],i)))||t.splice(r,1);return t},ar=function(t){return t._gsap||vc(Dn(t))[0]._gsap},vf=function(t,n,i){return(i=t[n])&&gt(i)?t[n]():pc(i)&&t.getAttribute&&t.getAttribute(n)||i},an=function(t,n){return(t=t.split(",")).forEach(n)||t},xt=function(t){return Math.round(t*1e5)/1e5||0},zt=function(t){return Math.round(t*1e7)/1e7||0},Zr=function(t,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Yx=function(t,n){for(var i=n.length,r=0;t.indexOf(n[r])<0&&++r<i;);return r<i},oo=function(){var t=Di.length,n=Di.slice(0),i,r;for(Nl={},Di.length=0,i=0;i<t;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},yf=function(t,n,i,r){Di.length&&!Vt&&oo(),t.render(n,i,r||Vt&&n<0&&(t._initted||t._startAt)),Di.length&&!Vt&&oo()},Mf=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(pf).length<2?n:Ft(t)?t.trim():t},Sf=function(t){return t},Fn=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},jx=function(t){return function(n,i){for(var r in i)r in n||r==="duration"&&t||r==="ease"||(n[r]=i[r])}},gr=function(t,n){for(var i in n)t[i]=n[i];return t},th=function l(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ni(n[i])?l(t[i]||(t[i]={}),n[i]):n[i]);return t},lo=function(t,n){var i={},r;for(r in t)r in n||(i[r]=t[r]);return i},Us=function(t){var n=t.parent||ft,i=t.keyframes?jx(Wt(t.keyframes)):Fn;if(sn(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},$x=function(t,n){for(var i=t.length,r=i===n.length;r&&i--&&t[i]===n[i];);return i<0},bf=function(t,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[r]=n,n._prev=o,n.parent=n._dp=t,n},Mo=function(t,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,o=n._next;s?s._next=o:t[i]===n&&(t[i]=o),o?o._prev=s:t[r]===n&&(t[r]=s),n._next=n._prev=n.parent=null},Oi=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},or=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Zx=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},zl=function(t,n,i,r){return t._startAt&&(Vt?t._startAt.revert(Ya):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},Kx=function l(t){return!t||t._ts&&l(t.parent)},nh=function(t){return t._repeat?as(t._tTime,t=t.duration()+t._rDelay)*t:0},as=function(t,n){var i=Math.floor(t/=n);return t&&i===t?i-1:i},co=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},So=function(t){return t._end=zt(t._start+(t._tDur/Math.abs(t._ts||t._rts||rt)||0))},bo=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=zt(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),So(t),i._dirty||or(i,t)),t},wf=function(t,n){var i;if((n._time||n._initted&&!n._dur)&&(i=co(t.rawTime(),n),(!n._dur||ha(0,n.totalDuration(),i)-n._tTime>rt)&&n.render(i,!0)),or(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-rt}},Zn=function(t,n,i,r){return n.parent&&Oi(n),n._start=zt((gi(i)?i:i||t!==ft?En(t,i,n):t._time)+n._delay),n._end=zt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),bf(t,n,"_first","_last",t._sort?"_start":0),Ul(n)||(t._recent=n),r||wf(t,n),t._ts<0&&bo(t,t._tTime),t},Tf=function(t,n){return(bn.ScrollTrigger||gc("scrollTrigger",n))&&bn.ScrollTrigger.create(n,t)},Ef=function(t,n,i,r,s){if(Mc(t,n,s),!t._initted)return 1;if(!i&&t._pt&&!Vt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&xf!==xn.frame)return Di.push(t),t._lazy=[s,r],1},Jx=function l(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||l(n))},Ul=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},Qx=function(t,n,i,r){var s=t.ratio,o=n<0||!n&&(!t._start&&Jx(t)&&!(!t._initted&&Ul(t))||(t._ts<0||t._dp._ts<0)&&!Ul(t))?0:1,a=t._rDelay,c=0,u,h,d;if(a&&t._repeat&&(c=ha(0,t._tDur,n),h=as(c,a),t._yoyo&&h&1&&(o=1-o),h!==as(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Vt||r||t._zTime===rt||!n&&t._zTime){if(!t._initted&&Ef(t,n,r,i,c))return;for(d=t._zTime,t._zTime=n||(i?rt:0),i||(i=n&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,u=t._pt;u;)u.r(o,u.d),u=u._next;n<0&&zl(t,n,i,!0),t._onUpdate&&!i&&Rn(t,"onUpdate"),c&&t._repeat&&!i&&t.parent&&Rn(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===o&&(o&&Oi(t,1),!i&&!Vt&&(Rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},ev=function(t,n,i){var r;if(i>n)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},os=function(t,n,i,r){var s=t._repeat,o=zt(n)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:zt(o*(s+1)+t._rDelay*s):o,a>0&&!r&&bo(t,t._tTime=t._tDur*a),t.parent&&So(t),i||or(t.parent,t),t},ih=function(t){return t instanceof tn?or(t):os(t,t._dur)},tv={_start:0,endTime:Qs,totalDuration:Qs},En=function l(t,n,i){var r=t.labels,s=t._recent||tv,o=t.duration()>=Ln?s.endTime(!1):t._dur,a,c,u;return Ft(n)&&(isNaN(n)||n in r)?(c=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),c==="<"||c===">"?(a>=0&&(n=n.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(n in r||(r[n]=o),r[n]):(c=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&i&&(c=c/100*(Wt(i)?i[0]:i).totalDuration()),a>1?l(t,n.substr(0,a-1),i)+c:o+c)):n==null?o:+n},ks=function(t,n,i){var r=gi(n[1]),s=(r?2:1)+(t<2?0:1),o=n[s],a,c;if(r&&(o.duration=n[1]),o.parent=i,t){for(a=o,c=i;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=sn(c.vars.inherit)&&c.parent;o.immediateRender=sn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=n[s-1]}return new Et(n[0],o,n[s+1])},Bi=function(t,n){return t||t===0?n(t):n},ha=function(t,n,i){return i<t?t:i>n?n:i},Gt=function(t,n){return!Ft(t)||!(n=Hx.exec(t))?"":n[1]},nv=function(t,n,i){return Bi(i,function(r){return ha(t,n,r)})},kl=[].slice,Af=function(t,n){return t&&ni(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ni(t[0]))&&!t.nodeType&&t!==An},iv=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Ft(r)&&!n||Af(r,1)?(s=i).push.apply(s,Dn(r)):i.push(r)})||i},Dn=function(t,n,i){return St&&!n&&St.selector?St.selector(t):Ft(t)&&!i&&(Ol||!ls())?kl.call((n||mc).querySelectorAll(t),0):Wt(t)?iv(t,i):Af(t)?kl.call(t,0):t?[t]:[]},Bl=function(t){return t=Dn(t)[0]||ao("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Dn(n,i.querySelectorAll?i:i===t?ao("Invalid scope")||mc.createElement("div"):t)}},Cf=function(t){return t.sort(function(){return .5-Math.random()})},Pf=function(t){if(gt(t))return t;var n=ni(t)?t:{each:t},i=lr(n.ease),r=n.from||0,s=parseFloat(n.base)||0,o={},a=r>0&&r<1,c=isNaN(r)||a,u=n.axis,h=r,d=r;return Ft(r)?h=d={center:.5,edges:.5,end:1}[r]||0:!a&&c&&(h=r[0],d=r[1]),function(f,g,_){var p=(_||n).length,m=o[p],x,S,y,b,M,A,C,v,T;if(!m){if(T=n.grid==="auto"?0:(n.grid||[1,Ln])[1],!T){for(C=-Ln;C<(C=_[T++].getBoundingClientRect().left)&&T<p;);T--}for(m=o[p]=[],x=c?Math.min(T,p)*h-.5:r%T,S=T===Ln?0:c?p*d/T-.5:r/T|0,C=0,v=Ln,A=0;A<p;A++)y=A%T-x,b=S-(A/T|0),m[A]=M=u?Math.abs(u==="y"?b:y):cf(y*y+b*b),M>C&&(C=M),M<v&&(v=M);r==="random"&&Cf(m),m.max=C-v,m.min=v,m.v=p=(parseFloat(n.amount)||parseFloat(n.each)*(T>p?p-1:u?u==="y"?p/T:T:Math.max(T,p/T))||0)*(r==="edges"?-1:1),m.b=p<0?s-p:s,m.u=Gt(n.amount||n.each)||0,i=i&&p<0?zf(i):i}return p=(m[f]-m.min)/m.max||0,zt(m.b+(i?i(p):p)*m.v)+m.u}},Gl=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/t)*t*n);return(r-r%1)/n+(gi(i)?0:Gt(i))}},Lf=function(t,n){var i=Wt(t),r,s;return!i&&ni(t)&&(r=i=t.radius||Ln,t.values?(t=Dn(t.values),(s=!gi(t[0]))&&(r*=r)):t=Gl(t.increment)),Bi(n,i?gt(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),u=Ln,h=0,d=t.length,f,g;d--;)s?(f=t[d].x-a,g=t[d].y-c,f=f*f+g*g):f=Math.abs(t[d]-a),f<u&&(u=f,h=d);return h=!r||u<=r?t[h]:o,s||h===o||gi(o)?h:h+Gt(o)}:Gl(t))},Df=function(t,n,i,r){return Bi(Wt(t)?!n:i===!0?!!(i=0):!r,function(){return Wt(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*r)/r})},rv=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,o){return o(s)},r)}},sv=function(t,n){return function(i){return t(parseFloat(i))+(n||Gt(i))}},av=function(t,n,i){return If(t,n,0,1,i)},Rf=function(t,n,i){return Bi(i,function(r){return t[~~n(r)]})},ov=function l(t,n,i){var r=n-t;return Wt(t)?Rf(t,l(0,t.length),n):Bi(i,function(s){return(r+(s-t)%r)%r+t})},lv=function l(t,n,i){var r=n-t,s=r*2;return Wt(t)?Rf(t,l(0,t.length-1),n):Bi(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},ea=function(t){for(var n=0,i="",r,s,o,a;~(r=t.indexOf("random(",n));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?pf:Fl),i+=t.substr(n,r-n)+Df(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return i+t.substr(n,t.length-n)},If=function(t,n,i,r,s){var o=n-t,a=r-i;return Bi(s,function(c){return i+((c-t)/o*a||0)})},cv=function l(t,n,i,r){var s=isNaN(t+n)?0:function(g){return(1-g)*t+g*n};if(!s){var o=Ft(t),a={},c,u,h,d,f;if(i===!0&&(r=1)&&(i=null),o)t={p:t},n={p:n};else if(Wt(t)&&!Wt(n)){for(h=[],d=t.length,f=d-2,u=1;u<d;u++)h.push(l(t[u-1],t[u]));d--,s=function(_){_*=d;var p=Math.min(f,~~_);return h[p](_-p)},i=n}else r||(t=gr(Wt(t)?[]:{},t));if(!h){for(c in n)yc.call(a,t,c,"get",n[c]);s=function(_){return wc(_,a)||(o?t.p:t)}}}return Bi(i,s)},rh=function(t,n,i){var r=t.labels,s=Ln,o,a,c;for(o in r)a=r[o]-n,a<0==!!i&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},Rn=function(t,n,i){var r=t.vars,s=r[n],o=St,a=t._ctx,c,u,h;if(s)return c=r[n+"Params"],u=r.callbackScope||t,i&&Di.length&&oo(),a&&(St=a),h=c?s.apply(u,c):s.call(u),St=o,h},Rs=function(t){return Oi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Vt),t.progress()<1&&Rn(t,"onInterrupt"),t},Xr,uv=function(t){t=!t.name&&t.default||t;var n=t.name,i=gt(t),r=n&&!i&&t.init?function(){this._props=[]}:t,s={init:Qs,render:wc,add:yc,kill:Ev,modifier:Tv,rawVars:0},o={targetTest:0,get:0,getSetter:bc,aliases:{},register:0};if(ls(),t!==r){if(mn[n])return;Fn(r,Fn(lo(t,s),o)),gr(r.prototype,gr(s,lo(t,o))),mn[r.prop=n]=r,t.targetTest&&(ja.push(r),_c[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}_f(n,r),t.register&&t.register(wn,r,on)},it=255,Is={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},hl=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*it+.5|0},Ff=function(t,n,i){var r=t?gi(t)?[t>>16,t>>8&it,t&it]:0:Is.black,s,o,a,c,u,h,d,f,g,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Is[t])r=Is[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&it,t&it]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Fl),!n)c=+r[0]%360/360,u=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(u+1):h+u-h*u,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=hl(c+1/3,s,o),r[1]=hl(c,s,o),r[2]=hl(c-1/3,s,o);else if(~t.indexOf("="))return r=t.match(ff),i&&r.length<4&&(r[3]=1),r}else r=t.match(Fl)||Is.transparent;r=r.map(Number)}return n&&!_&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,d=Math.max(s,o,a),f=Math.min(s,o,a),h=(d+f)/2,d===f?c=u=0:(g=d-f,u=h>.5?g/(2-d-f):g/(d+f),c=d===s?(o-a)/g+(o<a?6:0):d===o?(a-s)/g+2:(s-o)/g+4,c*=60),r[0]=~~(c+.5),r[1]=~~(u*100+.5),r[2]=~~(h*100+.5)),i&&r.length<4&&(r[3]=1),r},Of=function(t){var n=[],i=[],r=-1;return t.split(Ri).forEach(function(s){var o=s.match(Hr)||[];n.push.apply(n,o),i.push(r+=o.length+1)}),n.c=i,n},sh=function(t,n,i){var r="",s=(t+r).match(Ri),o=n?"hsla(":"rgba(",a=0,c,u,h,d;if(!s)return t;if(s=s.map(function(f){return(f=Ff(f,n,1))&&o+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Of(t),c=i.c,c.join(r)!==h.c.join(r)))for(u=t.replace(Ri,"1").split(Hr),d=u.length-1;a<d;a++)r+=u[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!u)for(u=t.split(Ri),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ri=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Is)l+="|"+t+"\\b";return new RegExp(l+")","gi")}(),hv=/hsl[a]?\(/,Nf=function(t){var n=t.join(" "),i;if(Ri.lastIndex=0,Ri.test(n))return i=hv.test(n),t[1]=sh(t[1],i),t[0]=sh(t[0],i,Of(t[1])),!0},ta,xn=function(){var l=Date.now,t=500,n=33,i=l(),r=i,s=1e3/240,o=s,a=[],c,u,h,d,f,g,_=function p(m){var x=l()-r,S=m===!0,y,b,M,A;if(x>t&&(i+=x-n),r+=x,M=r-i,y=M-o,(y>0||S)&&(A=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,o+=y+(y>=s?4:s-y),b=1),S||(c=u(p)),b)for(g=0;g<a.length;g++)a[g](M,f,A,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){mf&&(!Ol&&uf()&&(An=Ol=window,mc=An.document||{},bn.gsap=wn,(An.gsapVersions||(An.gsapVersions=[])).push(wn.version),gf(so||An.GreenSockGlobals||!An.gsap&&An||{}),h=An.requestAnimationFrame),c&&d.sleep(),u=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ta=1,_(2))},sleep:function(){(h?An.cancelAnimationFrame:clearTimeout)(c),ta=0,u=Qs},lagSmoothing:function(m,x){t=m||1/0,n=Math.min(x||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,x,S){var y=x?function(b,M,A,C){m(b,M,A,C),d.remove(y)}:m;return d.remove(m),a[S?"unshift":"push"](y),ls(),y},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&g>=x&&g--},_listeners:a},d}(),ls=function(){return!ta&&xn.wake()},Ze={},fv=/^[\d.\-M][\d.\-,\s]/,dv=/["']/g,pv=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,c,u;s<o;s++)c=i[s],a=s!==o-1?c.lastIndexOf(","):c.length,u=c.substr(0,a),n[r]=isNaN(u)?u.replace(dv,"").trim():+u,r=c.substr(a+1).trim();return n},mv=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<i?t.indexOf(")",i+1):i)},gv=function(t){var n=(t+"").split("("),i=Ze[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[pv(n[1])]:mv(t).split(",").map(Mf)):Ze._CE&&fv.test(t)?Ze._CE("",t):i},zf=function(t){return function(n){return 1-t(1-n)}},Uf=function l(t,n){for(var i=t._first,r;i;)i instanceof tn?l(i,n):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==n&&(i.timeline?l(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},lr=function(t,n){return t&&(gt(t)?t:Ze[t]||gv(t))||n},Mr=function(t,n,i,r){i===void 0&&(i=function(c){return 1-n(1-c)}),r===void 0&&(r=function(c){return c<.5?n(c*2)/2:1-n((1-c)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},o;return an(t,function(a){Ze[a]=bn[a]=s,Ze[o=a.toLowerCase()]=i;for(var c in s)Ze[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ze[a+"."+c]=s[c]}),s},kf=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},fl=function l(t,n,i){var r=n>=1?n:1,s=(i||(t?.3:.45))/(n<1?n:1),o=s/Il*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*Wx((h-o)*s)+1},c=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:kf(a);return s=Il/s,c.config=function(u,h){return l(t,u,h)},c},dl=function l(t,n){n===void 0&&(n=1.70158);var i=function(o){return o?--o*o*((n+1)*o+n)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:kf(i);return r.config=function(s){return l(t,s)},r};an("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var n=t<5?t+1:t;Mr(l+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;Mr("Elastic",fl("in"),fl("out"),fl());(function(l,t){var n=1/t,i=2*n,r=2.5*n,s=function(a){return a<n?l*a*a:a<i?l*Math.pow(a-1.5/t,2)+.75:a<r?l*(a-=2.25/t)*a+.9375:l*Math.pow(a-2.625/t,2)+.984375};Mr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Mr("Expo",function(l){return l?Math.pow(2,10*(l-1)):0});Mr("Circ",function(l){return-(cf(1-l*l)-1)});Mr("Sine",function(l){return l===1?1:-Vx(l*Bx)+1});Mr("Back",dl("in"),dl("out"),dl());Ze.SteppedEase=Ze.steps=bn.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,r=t+(n?0:1),s=n?1:0,o=1-rt;return function(a){return((r*ha(0,o,a)|0)+s)*i}}};ss.ease=Ze["quad.out"];an("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return xc+=l+","+l+"Params,"});var Bf=function(t,n){this.id=Gx++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:vf,this.set=n?n.getSetter:bc},cs=function(){function l(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,os(this,+n.duration,1,1),this.data=n.data,St&&(this._ctx=St,St.data.push(this)),ta||xn.wake()}var t=l.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,os(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bo(this,i),!s._dp||s.parent||wf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Zn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),yf(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+nh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+nh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?as(this._tTime,s)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?co(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-rt?0:this._rts,this.totalTime(ha(-this._delay,this._tDur,r),!0),So(this),Zx(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Zn(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(sn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?co(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=qx);var r=Vt;return Vt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Vt=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ih(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ih(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(En(this,i),sn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,sn(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-rt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this;return new Promise(function(s){var o=gt(i)?i:Sf,a=function(){var u=r.then;r.then=null,gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Rs(this)},l}();Fn(cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var tn=function(l){lf(t,l);function t(i,r){var s;return i===void 0&&(i={}),s=l.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=sn(i.sortChildren),ft&&Zn(i.parent||ft,ci(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Tf(ci(s),i.scrollTrigger),s}var n=t.prototype;return n.to=function(r,s,o){return ks(0,arguments,this),this},n.from=function(r,s,o){return ks(1,arguments,this),this},n.fromTo=function(r,s,o,a){return ks(2,arguments,this),this},n.set=function(r,s,o){return s.duration=0,s.parent=this,Us(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,En(this,o),1),this},n.call=function(r,s,o){return Zn(this,Et.delayedCall(0,r,s),o)},n.staggerTo=function(r,s,o,a,c,u,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new Et(r,o,En(this,c)),this},n.staggerFrom=function(r,s,o,a,c,u,h){return o.runBackwards=1,Us(o).immediateRender=sn(o.immediateRender),this.staggerTo(r,s,o,a,c,u,h)},n.staggerFromTo=function(r,s,o,a,c,u,h,d){return a.startAt=o,Us(a).immediateRender=sn(a.immediateRender),this.staggerTo(r,s,a,c,u,h,d)},n.render=function(r,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=r<=0?0:zt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,g,_,p,m,x,S,y,b,M,A,C;if(this!==ft&&h>c&&r>=0&&(h=c),h!==this._tTime||o||d){if(a!==this._time&&u&&(h+=this._time-a,r+=this._time-a),f=h,b=this._start,y=this._ts,x=!y,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=zt(h%m),h===c?(p=this._repeat,f=u):(p=~~(h/m),p&&p===h/m&&(f=u,p--),f>u&&(f=u)),M=as(this._tTime,m),!a&&this._tTime&&M!==p&&(M=p),A&&p&1&&(f=u-f,C=1),p!==M&&!this._lock){var v=A&&M&1,T=v===(A&&p&1);if(p<M&&(v=!v),a=v?0:u,this._lock=1,this.render(a||(C?0:zt(p*m)),s,!u)._lock=0,this._tTime=h,!s&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,T&&(this._lock=2,a=v?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Uf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ev(this,zt(a),zt(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&(Rn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&r>=0)for(g=this._first;g;){if(_=g._next,(g._act||f>=g._start)&&g._ts&&S!==g){if(g.parent!==this)return this.render(r,s,o);if(g.render(g._ts>0?(f-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(f-g._start)*g._ts,s,o),f!==this._time||!this._ts&&!x){S=0,_&&(h+=this._zTime=-rt);break}}g=_}else{g=this._last;for(var D=r<0?r:f;g;){if(_=g._prev,(g._act||D<=g._end)&&g._ts&&S!==g){if(g.parent!==this)return this.render(r,s,o);if(g.render(g._ts>0?(D-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(D-g._start)*g._ts,s,o||Vt&&(g._initted||g._startAt)),f!==this._time||!this._ts&&!x){S=0,_&&(h+=this._zTime=D?-rt:rt);break}}g=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-rt)._zTime=f>=a?1:-1,this._ts))return this._start=b,So(this),this.render(r,s,o);this._onUpdate&&!s&&Rn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Oi(this,1),!s&&!(r<0&&!a)&&(h||a||!c)&&(Rn(this,h===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var o=this;if(gi(s)||(s=En(this,s,r)),!(r instanceof cs)){if(Wt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(gt(r))r=Et.delayedCall(0,r);else return this}return this!==r?Zn(this,r,s):this},n.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ln);for(var c=[],u=this._first;u;)u._start>=a&&(u instanceof Et?s&&c.push(u):(o&&c.push(u),r&&c.push.apply(c,u.getChildren(!0,s,o)))),u=u._next;return c},n.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},n.remove=function(r){return Ft(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(Mo(this,r),r===this._recent&&(this._recent=this._last),or(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(xn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),l.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=En(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,o){var a=Et.delayedCall(0,s||Qs,o);return a.data="isPause",this._hasPause=1,Zn(this,a,En(this,r))},n.removePause=function(r){var s=this._first;for(r=En(this,r);s;)s._start===r&&s.data==="isPause"&&Oi(s),s=s._next},n.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),c=a.length;c--;)wi!==a[c]&&a[c].kill(r,s);return this},n.getTweensOf=function(r,s){for(var o=[],a=Dn(r),c=this._first,u=gi(s),h;c;)c instanceof Et?Yx(c._targets,a)&&(u?(!wi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(h=c.getTweensOf(a,s)).length&&o.push.apply(o,h),c=c._next;return o},n.tweenTo=function(r,s){s=s||{};var o=this,a=En(o,r),c=s,u=c.startAt,h=c.onStart,d=c.onStartParams,f=c.immediateRender,g,_=Et.to(o,Fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!g){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&os(_,m,0,1).render(_._time,!0,!0),g=1}h&&h.apply(_,d||[])}},s));return f?_.render(0):_},n.tweenFromTo=function(r,s,o){return this.tweenTo(s,Fn({startAt:{time:En(this,r)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),rh(this,En(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),rh(this,En(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},n.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in c)c[u]>=o&&(c[u]+=r);return or(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return l.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),or(this)},n.totalDuration=function(r){var s=0,o=this,a=o._last,c=Ln,u,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=u;os(o,o===ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ft._ts&&(yf(ft,co(r,ft)),xf=xn.frame),xn.frame>=eh){eh+=Sn.autoSleep||120;var s=ft._first;if((!s||!s._ts)&&Sn.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},t}(cs);Fn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _v=function(t,n,i,r,s,o,a){var c=new on(this._pt,t,n,0,1,qf,null,s),u=0,h=0,d,f,g,_,p,m,x,S;for(c.b=i,c.e=r,i+="",r+="",(x=~r.indexOf("random("))&&(r=ea(r)),o&&(S=[i,r],o(S,t,n),i=S[0],r=S[1]),f=i.match(cl)||[];d=cl.exec(r);)_=d[0],p=r.substring(u,d.index),g?g=(g+1)%5:p.substr(-5)==="rgba("&&(g=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:p||h===1?p:",",s:m,c:_.charAt(1)==="="?Zr(m,_)-m:parseFloat(_)-m,m:g&&g<4?Math.round:0},u=cl.lastIndex);return c.c=u<r.length?r.substring(u,r.length):"",c.fp=a,(df.test(r)||x)&&(c.e=0),this._pt=c,c},yc=function(t,n,i,r,s,o,a,c,u,h){gt(r)&&(r=r(s||0,t,o));var d=t[n],f=i!=="get"?i:gt(d)?u?t[n.indexOf("set")||!gt(t["get"+n.substr(3)])?n:"get"+n.substr(3)](u):t[n]():d,g=gt(d)?u?Sv:Hf:Sc,_;if(Ft(r)&&(~r.indexOf("random(")&&(r=ea(r)),r.charAt(1)==="="&&(_=Zr(f,r)+(Gt(f)||0),(_||_===0)&&(r=_))),!h||f!==r||Vl)return!isNaN(f*r)&&r!==""?(_=new on(this._pt,t,n,+f||0,r-(f||0),typeof d=="boolean"?wv:Xf,0,g),u&&(_.fp=u),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(n in t)&&gc(n,r),_v.call(this,t,n,f,r,g,c||Sn.stringFilter,u))},xv=function(t,n,i,r,s){if(gt(t)&&(t=Bs(t,s,n,i,r)),!ni(t)||t.style&&t.nodeType||Wt(t)||hf(t))return Ft(t)?Bs(t,s,n,i,r):t;var o={},a;for(a in t)o[a]=Bs(t[a],s,n,i,r);return o},Gf=function(t,n,i,r,s,o){var a,c,u,h;if(mn[t]&&(a=new mn[t]).init(s,a.rawVars?n[t]:xv(n[t],r,s,o,i),i,r,o)!==!1&&(i._pt=c=new on(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Xr))for(u=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)u[a._props[h]]=c;return a},wi,Vl,Mc=function l(t,n,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,c=r.lazy,u=r.onUpdate,h=r.onUpdateParams,d=r.callbackScope,f=r.runBackwards,g=r.yoyoEase,_=r.keyframes,p=r.autoRevert,m=t._dur,x=t._startAt,S=t._targets,y=t.parent,b=y&&y.data==="nested"?y.vars.targets:S,M=t._overwrite==="auto"&&!dc,A=t.timeline,C,v,T,D,U,W,O,I,G,H,K,k,Q;if(A&&(!_||!s)&&(s="none"),t._ease=lr(s,ss.ease),t._yEase=g?zf(lr(g===!0?s:g,ss.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!r.runBackwards,!A||_&&!r.stagger){if(I=S[0]?ar(S[0]).harness:0,k=I&&r[I.prop],C=lo(r,_c),x&&(x._zTime<0&&x.progress(1),n<0&&f&&a&&!p?x.render(-1,!0):x.revert(f&&m?Ya:Xx),x._lazy=0),o){if(Oi(t._startAt=Et.set(S,Fn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!x&&sn(c),startAt:null,delay:0,onUpdate:u,onUpdateParams:h,callbackScope:d,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Vt||!a&&!p)&&t._startAt.revert(Ya),a&&m&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(f&&m&&!x){if(n&&(a=!1),T=Fn({overwrite:!1,data:"isFromStart",lazy:a&&!x&&sn(c),immediateRender:a,stagger:0,parent:y},C),k&&(T[I.prop]=k),Oi(t._startAt=Et.set(S,T)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Vt?t._startAt.revert(Ya):t._startAt.render(-1,!0)),t._zTime=n,!a)l(t._startAt,rt,rt);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&sn(c)||c&&!m,v=0;v<S.length;v++){if(U=S[v],O=U._gsap||vc(S)[v]._gsap,t._ptLookup[v]=H={},Nl[O.id]&&Di.length&&oo(),K=b===S?v:b.indexOf(U),I&&(G=new I).init(U,k||C,t,K,b)!==!1&&(t._pt=D=new on(t._pt,U,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(L){H[L]=D}),G.priority&&(W=1)),!I||k)for(T in C)mn[T]&&(G=Gf(T,C,t,K,U,b))?G.priority&&(W=1):H[T]=D=yc.call(t,U,T,"get",C[T],K,b,0,r.stringFilter);t._op&&t._op[v]&&t.kill(U,t._op[v]),M&&t._pt&&(wi=t,ft.killTweensOf(U,H,t.globalTime(n)),Q=!t.parent,wi=0),t._pt&&c&&(Nl[O.id]=1)}W&&Yf(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!Q,_&&n<=0&&A.render(Ln,!0,!0)},vv=function(t,n,i,r,s,o,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],u,h,d,f;if(!c)for(c=t._ptCache[n]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return Vl=1,t.vars[n]="+=0",Mc(t,a),Vl=0,1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=xt(i)+Gt(h.e)),h.b&&(h.b=u.s+Gt(h.b))},yv=function(t,n){var i=t[0]?ar(t[0]).harness:0,r=i&&i.aliases,s,o,a,c;if(!r)return n;s=gr({},n);for(o in r)if(o in s)for(c=r[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},Mv=function(t,n,i,r){var s=n.ease||r||"power1.inOut",o,a;if(Wt(n))a=i[t]||(i[t]=[]),n.forEach(function(c,u){return a.push({t:u/(n.length-1)*100,v:c,e:s})});else for(o in n)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:n[o],e:s})},Bs=function(t,n,i,r,s){return gt(t)?t.call(n,i,r,s):Ft(t)&&~t.indexOf("random(")?ea(t):t},Vf=xc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wf={};an(Vf+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return Wf[l]=1});var Et=function(l){lf(t,l);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=l.call(this,o?r:Us(r))||this;var c=a.vars,u=c.duration,h=c.delay,d=c.immediateRender,f=c.stagger,g=c.overwrite,_=c.keyframes,p=c.defaults,m=c.scrollTrigger,x=c.yoyoEase,S=r.parent||ft,y=(Wt(i)||hf(i)?gi(i[0]):"length"in r)?[i]:Dn(i),b,M,A,C,v,T,D,U;if(a._targets=y.length?vc(y):ao("GSAP target "+i+" not found. https://greensock.com",!Sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=g,_||f||Ra(u)||Ra(h)){if(r=a.vars,b=a.timeline=new tn({data:"nested",defaults:p||{},targets:S&&S.data==="nested"?S.vars.targets:y}),b.kill(),b.parent=b._dp=ci(a),b._start=0,f||Ra(u)||Ra(h)){if(C=y.length,D=f&&Pf(f),ni(f))for(v in f)~Vf.indexOf(v)&&(U||(U={}),U[v]=f[v]);for(M=0;M<C;M++)A=lo(r,Wf),A.stagger=0,x&&(A.yoyoEase=x),U&&gr(A,U),T=y[M],A.duration=+Bs(u,ci(a),M,T,y),A.delay=(+Bs(h,ci(a),M,T,y)||0)-a._delay,!f&&C===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),b.to(T,A,D?D(M,T,y):0),b._ease=Ze.none;b.duration()?u=h=0:a.timeline=0}else if(_){Us(Fn(b.vars.defaults,{ease:"none"})),b._ease=lr(_.ease||r.ease||"none");var W=0,O,I,G;if(Wt(_))_.forEach(function(H){return b.to(y,H,">")}),b.duration();else{A={};for(v in _)v==="ease"||v==="easeEach"||Mv(v,_[v],A,_.easeEach);for(v in A)for(O=A[v].sort(function(H,K){return H.t-K.t}),W=0,M=0;M<O.length;M++)I=O[M],G={ease:I.e,duration:(I.t-(M?O[M-1].t:0))/100*u},G[v]=I.v,b.to(y,G,W),W+=G.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||a.duration(u=b.duration())}else a.timeline=0;return g===!0&&!dc&&(wi=ci(a),ft.killTweensOf(y),wi=0),Zn(S,ci(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===zt(S._time)&&sn(d)&&Kx(ci(a))&&S.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-h)||0)),m&&Tf(ci(a),m),a}var n=t.prototype;return n.render=function(r,s,o){var a=this._time,c=this._tDur,u=this._dur,h=r<0,d=r>c-rt&&!h?c:r<rt?0:r,f,g,_,p,m,x,S,y,b;if(!u)Qx(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=d,y=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+r,s,o);if(f=zt(d%p),d===c?(_=this._repeat,f=u):(_=~~(d/p),_&&_===d/p&&(f=u,_--),f>u&&(f=u)),x=this._yoyo&&_&1,x&&(b=this._yEase,f=u-f),m=as(this._tTime,p),f===a&&!o&&this._initted)return this._tTime=d,this;_!==m&&(y&&this._yEase&&Uf(y,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(zt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ef(this,h?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(f/u),this._from&&(this.ratio=S=1-S),f&&!a&&!s&&(Rn(this,"onStart"),this._tTime!==d))return this;for(g=this._pt;g;)g.r(S,g.d),g=g._next;y&&y.render(r<0?r:!f&&x?-rt:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&zl(this,r,s,o),Rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Rn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&zl(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Oi(this,1),!s&&!(h&&!a)&&(d||a||x)&&(Rn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),l.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,o,a){ta||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Mc(this,c),u=this._ease(c/this._dur),vv(this,r,s,o,a,u,c)?this.resetTo(r,s,o,a):(bo(this,0),this.parent||bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,wi&&wi.vars.overwrite!==!0)._first||Rs(this),this.parent&&o!==this.timeline.totalDuration()&&os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=r?Dn(r):a,u=this._ptLookup,h=this._pt,d,f,g,_,p,m,x;if((!s||s==="all")&&$x(a,c))return s==="all"&&(this._pt=0),Rs(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(p={},an(s,function(S){return p[S]=1}),s=p),s=yv(a,s)),x=a.length;x--;)if(~c.indexOf(a[x])){f=u[x],s==="all"?(d[x]=s,_=f,g={}):(g=d[x]=d[x]||{},_=s);for(p in _)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Mo(this,m,"_pt"),delete f[p]),g!=="all"&&(g[p]=1)}return this._initted&&!this._pt&&h&&Rs(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ks(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ks(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ft.killTweensOf(r,s,o)},t}(cs);Fn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});an("staggerTo,staggerFrom,staggerFromTo",function(l){Et[l]=function(){var t=new tn,n=kl.call(arguments,0);return n.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,n)}});var Sc=function(t,n,i){return t[n]=i},Hf=function(t,n,i){return t[n](i)},Sv=function(t,n,i,r){return t[n](r.fp,i)},bv=function(t,n,i){return t.setAttribute(n,i)},bc=function(t,n){return gt(t[n])?Hf:pc(t[n])&&t.setAttribute?bv:Sc},Xf=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},wv=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},qf=function(t,n){var i=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},wc=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},Tv=function(t,n,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,n,i),s=o},Ev=function(t){for(var n=this._pt,i,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?Mo(this,n,"_pt"):n.dep||(i=1),n=r;return!i},Av=function(t,n,i,r){r.mSet(t,n,r.m.call(r.tween,i,r.mt),r)},Yf=function(t){for(var n=t._pt,i,r,s,o;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:o)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:o=n,n=i}t._pt=s},on=function(){function l(n,i,r,s,o,a,c,u,h){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Xf,this.d=c||this,this.set=u||Sc,this.pr=h||0,this._next=n,n&&(n._prev=this)}var t=l.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Av,this.m=i,this.mt=s,this.tween=r},l}();an(xc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return _c[l]=1});bn.TweenMax=bn.TweenLite=Et;bn.TimelineLite=bn.TimelineMax=tn;ft=new tn({sortChildren:!1,defaults:ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=Nf;var us=[],$a={},Cv=[],ah=0,pl=function(t){return($a[t]||Cv).map(function(n){return n()})},Wl=function(){var t=Date.now(),n=[];t-ah>2&&(pl("matchMediaInit"),us.forEach(function(i){var r=i.queries,s=i.conditions,o,a,c,u;for(a in r)o=An.matchMedia(r[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),c&&n.push(i))}),pl("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i)}),ah=t,pl("matchMedia"))},jf=function(){function l(n,i){this.selector=i&&Bl(i),this.data=[],this._r=[],this.isReverted=!1,n&&this.add(n)}var t=l.prototype;return t.add=function(i,r,s){gt(i)&&(s=r,r=i,i=gt);var o=this,a=function(){var u=St,h=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Bl(s)),St=o,d=r.apply(o,arguments),gt(d)&&o._r.push(d),St=u,o.selector=h,o.isReverted=!1,d};return o.last=a,i===gt?a(o):i?o[i]=a:a},t.ignore=function(i){var r=St;St=null,i(this),St=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof l?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,u){return u.g-c.g||-1}).forEach(function(c){return c.t.revert(i)}),this.data.forEach(function(c){return!(c instanceof cs)&&c.revert&&c.revert(i)}),this._r.forEach(function(c){return c(i,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),r){var a=us.indexOf(this);~a&&us.splice(a,1)}},t.revert=function(i){this.kill(i||{})},l}(),Pv=function(){function l(n){this.contexts=[],this.scope=n}var t=l.prototype;return t.add=function(i,r,s){ni(i)||(i={matches:i});var o=new jf(0,s||this.scope),a=o.conditions={},c,u,h;this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?h=1:(c=An.matchMedia(i[u]),c&&(us.indexOf(o)<0&&us.push(o),(a[u]=c.matches)&&(h=1),c.addListener?c.addListener(Wl):c.addEventListener("change",Wl)));return h&&r(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},l}(),uo={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(r){return uv(r)})},timeline:function(t){return new tn(t)},getTweensOf:function(t,n){return ft.getTweensOf(t,n)},getProperty:function(t,n,i,r){Ft(t)&&(t=Dn(t)[0]);var s=ar(t||{}).get,o=i?Sf:Mf;return i==="native"&&(i=""),t&&(n?o((mn[n]&&mn[n].get||s)(t,n,i,r)):function(a,c,u){return o((mn[a]&&mn[a].get||s)(t,a,c,u))})},quickSetter:function(t,n,i){if(t=Dn(t),t.length>1){var r=t.map(function(h){return wn.quickSetter(h,n,i)}),s=r.length;return function(h){for(var d=s;d--;)r[d](h)}}t=t[0]||{};var o=mn[n],a=ar(t),c=a.harness&&(a.harness.aliases||{})[n]||n,u=o?function(h){var d=new o;Xr._pt=0,d.init(t,i?h+i:h,Xr,0,[t]),d.render(1,d),Xr._pt&&wc(1,Xr)}:a.set(t,c);return o?u:function(h){return u(t,c,i?h+i:h,a,1)}},quickTo:function(t,n,i){var r,s=wn.to(t,gr((r={},r[n]="+=0.1",r.paused=!0,r),i||{})),o=function(c,u,h){return s.resetTo(n,c,u,h)};return o.tween=s,o},isTweening:function(t){return ft.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lr(t.ease,ss.ease)),th(ss,t||{})},config:function(t){return th(Sn,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mn[a]&&!bn[a]&&ao(n+" effect requires "+a+" plugin.")}),ul[n]=function(a,c,u){return i(Dn(a),Fn(c||{},s),u)},o&&(tn.prototype[n]=function(a,c,u){return this.add(ul[n](a,ni(c)?c:(u=c)&&{},this),u)})},registerEase:function(t,n){Ze[t]=lr(n)},parseEase:function(t,n){return arguments.length?lr(t,n):Ze},getById:function(t){return ft.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new tn(t),r,s;for(i.smoothChildTiming=sn(t.smoothChildTiming),ft.remove(i),i._dp=0,i._time=i._tTime=ft._time,r=ft._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&Zn(i,r,r._start-r._delay),r=s;return Zn(ft,i,0),i},context:function(t,n){return t?new jf(t,n):St},matchMedia:function(t){return new Pv(t)},matchMediaRefresh:function(){return us.forEach(function(t){var n=t.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&t.revert()})||Wl()},addEventListener:function(t,n){var i=$a[t]||($a[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=$a[t],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:ov,wrapYoyo:lv,distribute:Pf,random:Df,snap:Lf,normalize:av,getUnit:Gt,clamp:nv,splitColor:Ff,toArray:Dn,selector:Bl,mapRange:If,pipe:rv,unitize:sv,interpolate:cv,shuffle:Cf},install:gf,effects:ul,ticker:xn,updateRoot:tn.updateRoot,plugins:mn,globalTimeline:ft,core:{PropTween:on,globals:_f,Tween:Et,Timeline:tn,Animation:cs,getCache:ar,_removeLinkedListItem:Mo,reverting:function(){return Vt},context:function(t){return t&&St&&(St.data.push(t),t._ctx=St),St},suppressOverwrites:function(t){return dc=t}}};an("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return uo[l]=Et[l]});xn.add(tn.updateRoot);Xr=uo.to({},{duration:0});var Lv=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},Dv=function(t,n){var i=t._targets,r,s,o;for(r in n)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Lv(o,r)),o&&o.modifier&&o.modifier(n[r],t,i[s],r))},ml=function(t,n){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var c,u;if(Ft(s)&&(c={},an(s,function(h){return c[h]=1}),s=c),n){c={};for(u in s)c[u]=n(s[u]);s=c}Dv(a,s)}}}},wn=uo.registerPlugin({name:"attr",init:function(t,n,i,r,s){var o,a,c;this.tween=i;for(o in n)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",n[o],r,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,n){for(var i=n._pt;i;)Vt?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},ml("roundProps",Gl),ml("modifiers"),ml("snap",Lf))||uo;Et.version=tn.version=wn.version="3.11.4";mf=1;uf()&&ls();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oh,Ti,Kr,Tc,nr,lh,Ec,Rv=function(){return typeof window<"u"},_i={},Ki=180/Math.PI,Jr=Math.PI/180,Nr=Math.atan2,ch=1e8,Ac=/([A-Z])/g,Iv=/(left|right|width|margin|padding|x)/i,Fv=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hl=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Ov=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Nv=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},zv=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},$f=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},Zf=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Uv=function(t,n,i){return t.style[n]=i},kv=function(t,n,i){return t.style.setProperty(n,i)},Bv=function(t,n,i){return t._gsap[n]=i},Gv=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},Vv=function(t,n,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Wv=function(t,n,i,r,s){var o=t._gsap;o[n]=i,o.renderTransform(s,o)},dt="transform",Xn=dt+"Origin",Hv=function(t,n){var i=this,r=this.target,s=r.style;if(t in _i){if(this.tfm=this.tfm||{},t!=="transform"&&(t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=ui(r,o)}):this.tfm[t]=r._gsap.x?r._gsap[t]:ui(r,t)),this.props.indexOf(dt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xn,n,"")),t=dt}(s||n)&&this.props.push(t,n,s[t])},Kf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Xv=function(){var t=this.props,n=this.target,i=n.style,r=n._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?n[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].replace(Ac,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=Ec(),s&&!s.isStart&&!i[dt]&&(Kf(i),r.uncache=1)}},Jf=function(t,n){var i={target:t,props:[],revert:Xv,save:Hv};return n&&n.split(",").forEach(function(r){return i.save(r)}),i},Qf,Xl=function(t,n){var i=Ti.createElementNS?Ti.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ti.createElement(t);return i.style?i:Ti.createElement(t)},ei=function l(t,n,i){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace(Ac,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&l(t,hs(n)||n,1)||""},uh="O,Moz,ms,Ms,Webkit".split(","),hs=function(t,n,i){var r=n||nr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(uh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?uh[o]:"")+t},ql=function(){Rv()&&window.document&&(oh=window,Ti=oh.document,Kr=Ti.documentElement,nr=Xl("div")||{style:{}},Xl("div"),dt=hs(dt),Xn=dt+"Origin",nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qf=!!hs("perspective"),Ec=wn.core.reverting,Tc=1)},gl=function l(t){var n=Xl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Kr.appendChild(n),n.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=l}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Kr.removeChild(n),this.style.cssText=s,o},hh=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},ed=function(t){var n;try{n=t.getBBox()}catch{n=gl.call(t,!0)}return n&&(n.width||n.height)||t.getBBox===gl||(n=gl.call(t,!0)),n&&!n.width&&!n.x&&!n.y?{x:+hh(t,["x","cx","x1"])||0,y:+hh(t,["y","cy","y1"])||0,width:0,height:0}:n},td=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ed(t))},na=function(t,n){if(n){var i=t.style;n in _i&&n!==Xn&&(n=dt),i.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(n.replace(Ac,"-$1").toLowerCase())):i.removeAttribute(n)}},Ei=function(t,n,i,r,s,o){var a=new on(t._pt,n,i,0,1,o?Zf:$f);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},fh={deg:1,rad:1,turn:1},qv={grid:1,flex:1},Ni=function l(t,n,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=nr.style,c=Iv.test(n),u=t.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(c?"Width":"Height"),d=100,f=r==="px",g=r==="%",_,p,m,x;return r===o||!s||fh[r]||fh[o]?s:(o!=="px"&&!f&&(s=l(t,n,i,"px")),x=t.getCTM&&td(t),(g||o==="%")&&(_i[n]||~n.indexOf("adius"))?(_=x?t.getBBox()[c?"width":"height"]:t[h],xt(g?s/_*d:s/100*_)):(a[c?"width":"height"]=d+(f?o:r),p=~n.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,x&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===Ti||!p.appendChild)&&(p=Ti.body),m=p._gsap,m&&g&&m.width&&c&&m.time===xn.time&&!m.uncache?xt(s/m.width*d):((g||o==="%")&&!qv[ei(p,"display")]&&(a.position=ei(t,"position")),p===t&&(a.position="static"),p.appendChild(nr),_=nr[h],p.removeChild(nr),a.position="absolute",c&&g&&(m=ar(p),m.time=xn.time,m.width=p[h]),xt(f?_*s/d:_&&s?d/_*s:0))))},ui=function(t,n,i,r){var s;return Tc||ql(),n in di&&n!=="transform"&&(n=di[n],~n.indexOf(",")&&(n=n.split(",")[0])),_i[n]&&n!=="transform"?(s=ra(t,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:fo(ei(t,Xn))+" "+s.zOrigin+"px"):(s=t.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ho[n]&&ho[n](t,n,i)||ei(t,n)||vf(t,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ni(t,n,s,i)+i:s},Yv=function(t,n,i,r){if(!i||i==="none"){var s=hs(n,t,1),o=s&&ei(t,s,1);o&&o!==i?(n=s,i=o):n==="borderColor"&&(i=ei(t,"borderTopColor"))}var a=new on(this._pt,t.style,n,0,1,qf),c=0,u=0,h,d,f,g,_,p,m,x,S,y,b,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(t.style[n]=r,r=ei(t,n)||r,t.style[n]=i),h=[i,r],Nf(h),i=h[0],r=h[1],f=i.match(Hr)||[],M=r.match(Hr)||[],M.length){for(;d=Hr.exec(r);)m=d[0],S=r.substring(c,d.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(p=f[u++]||"")&&(g=parseFloat(p)||0,b=p.substr((g+"").length),m.charAt(1)==="="&&(m=Zr(g,m)+b),x=parseFloat(m),y=m.substr((x+"").length),c=Hr.lastIndex-y.length,y||(y=y||Sn.units[n]||b,c===r.length&&(r+=y,a.e+=y)),b!==y&&(g=Ni(t,n,p,y)||0),a._pt={_next:a._pt,p:S||u===1?S:",",s:g,c:x-g,m:_&&_<4||n==="zIndex"?Math.round:0});a.c=c<r.length?r.substring(c,r.length):""}else a.r=n==="display"&&r==="none"?Zf:$f;return df.test(r)&&(a.e=0),this._pt=a,a},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jv=function(t){var n=t.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),n[0]=dh[i]||i,n[1]=dh[r]||r,n.join(" ")},$v=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,o=i._gsap,a,c,u;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],_i[a]&&(c=1,a=a==="transformOrigin"?Xn:dt),na(i,a);c&&(na(i,dt),o&&(o.svg&&i.removeAttribute("transform"),ra(i,1),o.uncache=1,Kf(r)))}},ho={clearProps:function(t,n,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new on(t._pt,n,i,0,0,$v);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},ia=[1,0,0,1,0,0],nd={},id=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ph=function(t){var n=ei(t,dt);return id(n)?ia:n.substr(7).match(ff).map(xt)},Cc=function(t,n){var i=t._gsap||ar(t),r=t.style,s=ph(t),o,a,c,u;return i.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ia:s):(s===ia&&!t.offsetParent&&t!==Kr&&!i.svg&&(c=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(u=1,a=t.nextElementSibling,Kr.appendChild(t)),s=ph(t),c?r.display=c:na(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Kr.removeChild(t))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yl=function(t,n,i,r,s,o){var a=t._gsap,c=s||Cc(t,!0),u=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,g=c[0],_=c[1],p=c[2],m=c[3],x=c[4],S=c[5],y=n.split(" "),b=parseFloat(y[0])||0,M=parseFloat(y[1])||0,A,C,v,T;i?c!==ia&&(C=g*m-_*p)&&(v=b*(m/C)+M*(-p/C)+(p*S-m*x)/C,T=b*(-_/C)+M*(g/C)-(g*S-_*x)/C,b=v,M=T):(A=ed(t),b=A.x+(~y[0].indexOf("%")?b/100*A.width:b),M=A.y+(~(y[1]||y[0]).indexOf("%")?M/100*A.height:M)),r||r!==!1&&a.smooth?(x=b-u,S=M-h,a.xOffset=d+(x*g+S*p)-x,a.yOffset=f+(x*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=M,a.smooth=!!r,a.origin=n,a.originIsAbsolute=!!i,t.style[Xn]="0px 0px",o&&(Ei(o,a,"xOrigin",u,b),Ei(o,a,"yOrigin",h,M),Ei(o,a,"xOffset",d,a.xOffset),Ei(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+M)},ra=function(t,n){var i=t._gsap||new Bf(t);if("x"in i&&!n&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",c=getComputedStyle(t),u=ei(t,Xn)||"0",h,d,f,g,_,p,m,x,S,y,b,M,A,C,v,T,D,U,W,O,I,G,H,K,k,Q,L,he,V,J,ie,se;return h=d=f=p=m=x=S=y=b=0,g=_=1,i.svg=!!(t.getCTM&&td(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),r.scale=r.rotate=r.translate="none"),C=Cc(t,i.svg),i.svg&&(i.uncache?(k=t.getBBox(),u=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",K=""):K=!n&&t.getAttribute("data-svg-origin"),Yl(t,K||u,!!K||i.originIsAbsolute,i.smooth!==!1,C)),M=i.xOrigin||0,A=i.yOrigin||0,C!==ia&&(U=C[0],W=C[1],O=C[2],I=C[3],h=G=C[4],d=H=C[5],C.length===6?(g=Math.sqrt(U*U+W*W),_=Math.sqrt(I*I+O*O),p=U||W?Nr(W,U)*Ki:0,S=O||I?Nr(O,I)*Ki+p:0,S&&(_*=Math.abs(Math.cos(S*Jr))),i.svg&&(h-=M-(M*U+A*O),d-=A-(M*W+A*I))):(se=C[6],J=C[7],L=C[8],he=C[9],V=C[10],ie=C[11],h=C[12],d=C[13],f=C[14],v=Nr(se,V),m=v*Ki,v&&(T=Math.cos(-v),D=Math.sin(-v),K=G*T+L*D,k=H*T+he*D,Q=se*T+V*D,L=G*-D+L*T,he=H*-D+he*T,V=se*-D+V*T,ie=J*-D+ie*T,G=K,H=k,se=Q),v=Nr(-O,V),x=v*Ki,v&&(T=Math.cos(-v),D=Math.sin(-v),K=U*T-L*D,k=W*T-he*D,Q=O*T-V*D,ie=I*D+ie*T,U=K,W=k,O=Q),v=Nr(W,U),p=v*Ki,v&&(T=Math.cos(v),D=Math.sin(v),K=U*T+W*D,k=G*T+H*D,W=W*T-U*D,H=H*T-G*D,U=K,G=k),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,x=180-x),g=xt(Math.sqrt(U*U+W*W+O*O)),_=xt(Math.sqrt(H*H+se*se)),v=Nr(G,H),S=Math.abs(v)>2e-4?v*Ki:0,b=ie?1/(ie<0?-ie:ie):0),i.svg&&(K=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!id(ei(t,dt)),K&&t.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(g*=-1,S+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),n=n||i.uncache,i.x=h-((i.xPercent=h&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=xt(g),i.scaleY=xt(_),i.rotation=xt(p)+a,i.rotationX=xt(m)+a,i.rotationY=xt(x)+a,i.skewX=S+a,i.skewY=y+a,i.transformPerspective=b+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[Xn]=fo(u)),i.xOffset=i.yOffset=0,i.force3D=Sn.force3D,i.renderTransform=i.svg?Kv:Qf?rd:Zv,i.uncache=0,i},fo=function(t){return(t=t.split(" "))[0]+" "+t[1]},_l=function(t,n,i){var r=Gt(n);return xt(parseFloat(n)+parseFloat(Ni(t,"x",i+"px",r)))+r},Zv=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,rd(t,n)},Yi="0deg",As="0px",ji=") ",rd=function(t,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,c=i.z,u=i.rotation,h=i.rotationY,d=i.rotationX,f=i.skewX,g=i.skewY,_=i.scaleX,p=i.scaleY,m=i.transformPerspective,x=i.force3D,S=i.target,y=i.zOrigin,b="",M=x==="auto"&&t&&t!==1||x===!0;if(y&&(d!==Yi||h!==Yi)){var A=parseFloat(h)*Jr,C=Math.sin(A),v=Math.cos(A),T;A=parseFloat(d)*Jr,T=Math.cos(A),o=_l(S,o,C*T*-y),a=_l(S,a,-Math.sin(A)*-y),c=_l(S,c,v*T*-y+y)}m!==As&&(b+="perspective("+m+ji),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(M||o!==As||a!==As||c!==As)&&(b+=c!==As||M?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ji),u!==Yi&&(b+="rotate("+u+ji),h!==Yi&&(b+="rotateY("+h+ji),d!==Yi&&(b+="rotateX("+d+ji),(f!==Yi||g!==Yi)&&(b+="skew("+f+", "+g+ji),(_!==1||p!==1)&&(b+="scale("+_+", "+p+ji),S.style[dt]=b||"translate(0, 0)"},Kv=function(t,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,c=i.rotation,u=i.skewX,h=i.skewY,d=i.scaleX,f=i.scaleY,g=i.target,_=i.xOrigin,p=i.yOrigin,m=i.xOffset,x=i.yOffset,S=i.forceCSS,y=parseFloat(o),b=parseFloat(a),M,A,C,v,T;c=parseFloat(c),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,c+=h),c||u?(c*=Jr,u*=Jr,M=Math.cos(c)*d,A=Math.sin(c)*d,C=Math.sin(c-u)*-f,v=Math.cos(c-u)*f,u&&(h*=Jr,T=Math.tan(u-h),T=Math.sqrt(1+T*T),C*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),M*=T,A*=T)),M=xt(M),A=xt(A),C=xt(C),v=xt(v)):(M=d,v=f,A=C=0),(y&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(y=Ni(g,"x",o,"px"),b=Ni(g,"y",a,"px")),(_||p||m||x)&&(y=xt(y+_-(_*M+p*C)+m),b=xt(b+p-(_*A+p*v)+x)),(r||s)&&(T=g.getBBox(),y=xt(y+r/100*T.width),b=xt(b+s/100*T.height)),T="matrix("+M+","+A+","+C+","+v+","+y+","+b+")",g.setAttribute("transform",T),S&&(g.style[dt]=T)},Jv=function(t,n,i,r,s){var o=360,a=Ft(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Ki:1),u=c-r,h=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*ch)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*ch)%o-~~(u/o)*o)),t._pt=f=new on(t._pt,n,i,r,u,Ov),f.e=h,f.u="deg",t._props.push(i),f},mh=function(t,n){for(var i in n)t[i]=n[i];return t},Qv=function(t,n,i){var r=mh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,c,u,h,d,f,g,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[dt]=n,a=ra(i,1),na(i,dt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[dt],o[dt]=n,a=ra(i,1),o[dt]=u);for(c in _i)u=r[c],h=a[c],u!==h&&s.indexOf(c)<0&&(g=Gt(u),_=Gt(h),d=g!==_?Ni(i,c,u,_):parseFloat(u),f=parseFloat(h),t._pt=new on(t._pt,a,c,d,f-d,Hl),t._pt.u=_||0,t._props.push(c));mh(a,r)};an("padding,margin,Width,Radius",function(l,t){var n="Top",i="Right",r="Bottom",s="Left",o=(t<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(a){return t<2?l+a:"border"+a+l});ho[t>1?"border"+l:l]=function(a,c,u,h,d){var f,g;if(arguments.length<4)return f=o.map(function(_){return ui(a,_,u)}),g=f.join(" "),g.split(f[0]).length===5?f[0]:g;f=(h+"").split(" "),g={},o.forEach(function(_,p){return g[_]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(c,g,d)}});var sd={name:"css",register:ql,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,r,s){var o=this._props,a=t.style,c=i.vars.startAt,u,h,d,f,g,_,p,m,x,S,y,b,M,A,C,v;Tc||ql(),this.styles=this.styles||Jf(t),v=this.styles.props,this.tween=i;for(p in n)if(p!=="autoRound"&&(h=n[p],!(mn[p]&&Gf(p,n,i,r,t,s)))){if(g=typeof h,_=ho[p],g==="function"&&(h=h.call(i,r,t,s),g=typeof h),g==="string"&&~h.indexOf("random(")&&(h=ea(h)),_)_(this,t,p,h,i)&&(C=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(p)+"").trim(),h+="",Ri.lastIndex=0,Ri.test(u)||(m=Gt(u),x=Gt(h)),x?m!==x&&(u=Ni(t,p,u,x)+x):m&&(h+=m),this.add(a,"setProperty",u,h,r,s,0,0,p),o.push(p),v.push(p,0,a[p]);else if(g!=="undefined"){if(c&&p in c?(u=typeof c[p]=="function"?c[p].call(i,r,t,s):c[p],Ft(u)&&~u.indexOf("random(")&&(u=ea(u)),Gt(u+"")||(u+=Sn.units[p]||Gt(ui(t,p))||""),(u+"").charAt(1)==="="&&(u=ui(t,p))):u=ui(t,p),f=parseFloat(u),S=g==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),p in di&&(p==="autoAlpha"&&(f===1&&ui(t,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,a.visibility),Ei(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=di[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in _i,y){if(this.styles.save(p),b||(M=t._gsap,M.renderTransform&&!n.parseTransform||ra(t,n.parseTransform),A=n.smoothOrigin!==!1&&M.smooth,b=this._pt=new on(this._pt,a,dt,0,1,M.renderTransform,M,0,-1),b.dep=1),p==="scale")this._pt=new on(this._pt,M,"scaleY",M.scaleY,(S?Zr(M.scaleY,S+d):d)-M.scaleY||0,Hl),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(Xn,0,a[Xn]),h=jv(h),M.svg?Yl(t,h,0,A,0,this):(x=parseFloat(h.split(" ")[2])||0,x!==M.zOrigin&&Ei(this,M,"zOrigin",M.zOrigin,x),Ei(this,a,p,fo(u),fo(h)));continue}else if(p==="svgOrigin"){Yl(t,h,1,A,0,this);continue}else if(p in nd){Jv(this,M,p,f,S?Zr(f,S+h):h);continue}else if(p==="smoothOrigin"){Ei(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){Qv(this,h,t);continue}}else p in a||(p=hs(p)||p);if(y||(d||d===0)&&(f||f===0)&&!Fv.test(h)&&p in a)m=(u+"").substr((f+"").length),d||(d=0),x=Gt(h)||(p in Sn.units?Sn.units[p]:m),m!==x&&(f=Ni(t,p,u,x)),this._pt=new on(this._pt,y?M:a,p,f,(S?Zr(f,S+d):d)-f,!y&&(x==="px"||p==="zIndex")&&n.autoRound!==!1?zv:Hl),this._pt.u=x||0,m!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=Nv);else if(p in a)Yv.call(this,t,p,u,S?S+h:h);else if(p in t)this.add(t,p,u||t[p],S?S+h:h,r,s);else if(p!=="parseTransform"){gc(p,h);continue}y||(p in a?v.push(p,0,a[p]):v.push(p,1,u||t[p])),o.push(p)}}C&&Yf(this)},render:function(t,n){if(n.tween._time||!Ec())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:ui,aliases:di,getSetter:function(t,n,i){var r=di[n];return r&&r.indexOf(",")<0&&(n=r),n in _i&&n!==Xn&&(t._gsap.x||ui(t,"x"))?i&&lh===i?n==="scale"?Gv:Bv:(lh=i||{})&&(n==="scale"?Vv:Wv):t.style&&!pc(t.style[n])?Uv:~n.indexOf("-")?kv:bc(t,n)},core:{_removeProperty:na,_getMatrix:Cc}};wn.utils.checkPrefix=hs;wn.core.getStyleSaver=Jf;(function(l,t,n,i){var r=an(l+","+t+","+n,function(s){_i[s]=1});an(t,function(s){Sn.units[s]="deg",nd[s]=1}),di[r[13]]=l+","+t,an(i,function(s){var o=s.split(":");di[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");an("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){Sn.units[l]="px"});wn.registerPlugin(sd);var Gi=wn.registerPlugin(sd)||wn;Gi.core.Tween;function gh(l,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function ey(l,t,n){return t&&gh(l.prototype,t),n&&gh(l,n),l}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ut,jl,vn,Ai,Ci,Qr,ad,Ji,Gs,od,pi,Un,ld,cd=function(){return Ut||typeof window<"u"&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},ud=1,qr=[],Ye=[],ti=[],Vs=Date.now,$l=function(t,n){return n},ty=function(){var t=Gs.core,n=t.bridge||{},i=t._scrollers,r=t._proxies;i.push.apply(i,Ye),r.push.apply(r,ti),Ye=i,ti=r,$l=function(o,a){return n[o](a)}},Ii=function(t,n){return~ti.indexOf(t)&&ti[ti.indexOf(t)+1][n]},Ws=function(t){return!!~od.indexOf(t)},Qt=function(t,n,i,r,s){return t.addEventListener(n,i,{passive:!r,capture:!!s})},qt=function(t,n,i,r){return t.removeEventListener(n,i,!!r)},Ia="scrollLeft",Fa="scrollTop",Zl=function(){return pi&&pi.isPressed||Ye.cache++},po=function(t,n){var i=function r(s){if(s||s===0){ud&&(vn.history.scrollRestoration="manual");var o=pi&&pi.isPressed;s=r.v=Math.round(s)||(pi&&pi.iOS?1:0),t(s),r.cacheID=Ye.cache,o&&$l("ss",s)}else(n||Ye.cache!==r.cacheID||$l("ref"))&&(r.cacheID=Ye.cache,r.v=t());return r.v+r.offset};return i.offset=0,t&&i},Kt={s:Ia,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:po(function(l){return arguments.length?vn.scrollTo(l,At.sc()):vn.pageXOffset||Ai[Ia]||Ci[Ia]||Qr[Ia]||0})},At={s:Fa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Kt,sc:po(function(l){return arguments.length?vn.scrollTo(Kt.sc(),l):vn.pageYOffset||Ai[Fa]||Ci[Fa]||Qr[Fa]||0})},en=function(t){return Ut.utils.toArray(t)[0]||(typeof t=="string"&&Ut.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},zi=function(t,n){var i=n.s,r=n.sc;Ws(t)&&(t=Ai.scrollingElement||Ci);var s=Ye.indexOf(t),o=r===At.sc?1:2;!~s&&(s=Ye.push(t)-1),Ye[s+o]||t.addEventListener("scroll",Zl);var a=Ye[s+o],c=a||(Ye[s+o]=po(Ii(t,i),!0)||(Ws(t)?r:po(function(u){return arguments.length?t[i]=u:t[i]})));return c.target=t,a||(c.smooth=Ut.getProperty(t,"scrollBehavior")==="smooth"),c},Kl=function(t,n,i){var r=t,s=t,o=Vs(),a=o,c=n||50,u=Math.max(500,c*3),h=function(_,p){var m=Vs();p||m-o>c?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var p=a,m=s,x=Vs();return(_||_===0)&&_!==r&&h(_),o===a||x-a>u?0:(r+(i?m:-m))/((i?x:o)-p)*1e3};return{update:h,reset:d,getVelocity:f}},Cs=function(t,n){return n&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_h=function(t){var n=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(i)?n:i},hd=function(){Gs=Ut.core.globals().ScrollTrigger,Gs&&Gs.core&&ty()},fd=function(t){return Ut=t||cd(),Ut&&typeof document<"u"&&document.body&&(vn=window,Ai=document,Ci=Ai.documentElement,Qr=Ai.body,od=[vn,Ai,Ci,Qr],Ut.utils.clamp,ld=Ut.core.context||function(){},Ji="onpointerenter"in Qr?"pointer":"mouse",ad=wt.isTouch=vn.matchMedia&&vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Un=wt.eventTypes=("ontouchstart"in Ci?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ci?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ud=0},500),hd(),jl=1),jl};Kt.op=At;Ye.cache=0;var wt=function(){function l(n){this.init(n)}var t=l.prototype;return t.init=function(i){jl||fd(Ut)||console.warn("Please gsap.registerPlugin(Observer)"),Gs||hd();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,c=i.lineHeight,u=i.debounce,h=i.preventDefault,d=i.onStop,f=i.onStopDelay,g=i.ignore,_=i.wheelSpeed,p=i.event,m=i.onDragStart,x=i.onDragEnd,S=i.onDrag,y=i.onPress,b=i.onRelease,M=i.onRight,A=i.onLeft,C=i.onUp,v=i.onDown,T=i.onChangeX,D=i.onChangeY,U=i.onChange,W=i.onToggleX,O=i.onToggleY,I=i.onHover,G=i.onHoverEnd,H=i.onMove,K=i.ignoreCheck,k=i.isNormalizer,Q=i.onGestureStart,L=i.onGestureEnd,he=i.onWheel,V=i.onEnable,J=i.onDisable,ie=i.onClick,se=i.scrollSpeed,z=i.capture,we=i.allowClicks,pe=i.lockAxis,Te=i.onLockAxis;this.target=a=en(a)||Ci,this.vars=i,g&&(g=Ut.utils.toArray(g)),r=r||1e-9,s=s||0,_=_||1,se=se||1,o=o||"wheel,touch,pointer",u=u!==!1,c||(c=parseFloat(vn.getComputedStyle(Qr).lineHeight)||22);var le,Ge,de,_e,Qe,ut,Ke,q=this,et=0,Re=0,Lt=zi(a,Kt),vt=zi(a,At),P=Lt(),w=vt(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Un[0]==="pointerdown",ne=Ws(a),ee=a.ownerDocument||Ai,ae=[0,0,0],Ee=[0,0,0],fe=0,$=function(){return fe=Vs()},Se=function(oe,re){return(q.event=oe)&&g&&~g.indexOf(oe.target)||re&&Z&&oe.pointerType!=="touch"||K&&K(oe,re)},Ie=function(){q._vx.reset(),q._vy.reset(),Ge.pause(),d&&d(q)},me=function(){var oe=q.deltaX=_h(ae),re=q.deltaY=_h(Ee),ve=Math.abs(oe)>=r,Fe=Math.abs(re)>=r;U&&(ve||Fe)&&U(q,oe,re,ae,Ee),ve&&(M&&q.deltaX>0&&M(q),A&&q.deltaX<0&&A(q),T&&T(q),W&&q.deltaX<0!=et<0&&W(q),et=q.deltaX,ae[0]=ae[1]=ae[2]=0),Fe&&(v&&q.deltaY>0&&v(q),C&&q.deltaY<0&&C(q),D&&D(q),O&&q.deltaY<0!=Re<0&&O(q),Re=q.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(_e||de)&&(H&&H(q),de&&(S(q),de=!1),_e=!1),ut&&!(ut=!1)&&Te&&Te(q),Qe&&(he(q),Qe=!1),le=0},Pe=function(oe,re,ve){ae[ve]+=oe,Ee[ve]+=re,q._vx.update(oe),q._vy.update(re),u?le||(le=requestAnimationFrame(me)):me()},be=function(oe,re){pe&&!Ke&&(q.axis=Ke=Math.abs(oe)>Math.abs(re)?"x":"y",ut=!0),Ke!=="y"&&(ae[2]+=oe,q._vx.update(oe,!0)),Ke!=="x"&&(Ee[2]+=re,q._vy.update(re,!0)),u?le||(le=requestAnimationFrame(me)):me()},Be=function(oe){if(!Se(oe,1)){oe=Cs(oe,h);var re=oe.clientX,ve=oe.clientY,Fe=re-q.x,Ne=ve-q.y,yt=q.isDragging;q.x=re,q.y=ve,(yt||Math.abs(q.startX-re)>=s||Math.abs(q.startY-ve)>=s)&&(S&&(de=!0),yt||(q.isDragging=!0),be(Fe,Ne),yt||m&&m(q))}},Ce=q.onPress=function(Ue){Se(Ue,1)||(q.axis=Ke=null,Ge.pause(),q.isPressed=!0,Ue=Cs(Ue),et=Re=0,q.startX=q.x=Ue.clientX,q.startY=q.y=Ue.clientY,q._vx.reset(),q._vy.reset(),Qt(k?a:ee,Un[1],Be,h,!0),q.deltaX=q.deltaY=0,y&&y(q))},tt=function(oe){if(!Se(oe,1)){qt(k?a:ee,Un[1],Be,!0);var re=!isNaN(q.y-q.startY),ve=q.isDragging&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Fe=Cs(oe);!ve&&re&&(q._vx.reset(),q._vy.reset(),h&&we&&Ut.delayedCall(.08,function(){if(Vs()-fe>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(ee.createEvent){var Ne=ee.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,vn,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ne)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,d&&!k&&Ge.restart(!0),x&&ve&&x(q),b&&b(q,ve)}},R=function(oe){return oe.touches&&oe.touches.length>1&&(q.isGesturing=!0)&&Q(oe,q.isDragging)},Y=function(){return(q.isGesturing=!1)||L(q)},te=function(oe){if(!Se(oe)){var re=Lt(),ve=vt();Pe((re-P)*se,(ve-w)*se,1),P=re,w=ve,d&&Ge.restart(!0)}},ce=function(oe){if(!Se(oe)){oe=Cs(oe,h),he&&(Qe=!0);var re=(oe.deltaMode===1?c:oe.deltaMode===2?vn.innerHeight:1)*_;Pe(oe.deltaX*re,oe.deltaY*re,0),d&&!k&&Ge.restart(!0)}},xe=function(oe){if(!Se(oe)){var re=oe.clientX,ve=oe.clientY,Fe=re-q.x,Ne=ve-q.y;q.x=re,q.y=ve,_e=!0,(Fe||Ne)&&be(Fe,Ne)}},qe=function(oe){q.event=oe,I(q)},nt=function(oe){q.event=oe,G(q)},pt=function(oe){return Se(oe)||Cs(oe,h)&&ie(q)};Ge=q._dc=Ut.delayedCall(f||.25,Ie).pause(),q.deltaX=q.deltaY=0,q._vx=Kl(0,50,!0),q._vy=Kl(0,50,!0),q.scrollX=Lt,q.scrollY=vt,q.isDragging=q.isGesturing=q.isPressed=!1,ld(this),q.enable=function(Ue){return q.isEnabled||(Qt(ne?ee:a,"scroll",Zl),o.indexOf("scroll")>=0&&Qt(ne?ee:a,"scroll",te,h,z),o.indexOf("wheel")>=0&&Qt(a,"wheel",ce,h,z),(o.indexOf("touch")>=0&&ad||o.indexOf("pointer")>=0)&&(Qt(a,Un[0],Ce,h,z),Qt(ee,Un[2],tt),Qt(ee,Un[3],tt),we&&Qt(a,"click",$,!1,!0),ie&&Qt(a,"click",pt),Q&&Qt(ee,"gesturestart",R),L&&Qt(ee,"gestureend",Y),I&&Qt(a,Ji+"enter",qe),G&&Qt(a,Ji+"leave",nt),H&&Qt(a,Ji+"move",xe)),q.isEnabled=!0,Ue&&Ue.type&&Ce(Ue),V&&V(q)),q},q.disable=function(){q.isEnabled&&(qr.filter(function(Ue){return Ue!==q&&Ws(Ue.target)}).length||qt(ne?ee:a,"scroll",Zl),q.isPressed&&(q._vx.reset(),q._vy.reset(),qt(k?a:ee,Un[1],Be,!0)),qt(ne?ee:a,"scroll",te,z),qt(a,"wheel",ce,z),qt(a,Un[0],Ce,z),qt(ee,Un[2],tt),qt(ee,Un[3],tt),qt(a,"click",$,!0),qt(a,"click",pt),qt(ee,"gesturestart",R),qt(ee,"gestureend",Y),qt(a,Ji+"enter",qe),qt(a,Ji+"leave",nt),qt(a,Ji+"move",xe),q.isEnabled=q.isPressed=q.isDragging=!1,J&&J(q))},q.kill=q.revert=function(){q.disable();var Ue=qr.indexOf(q);Ue>=0&&qr.splice(Ue,1),pi===q&&(pi=0)},qr.push(q),k&&Ws(a)&&(pi=q),q.enable(p)},ey(l,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),l}();wt.version="3.11.4";wt.create=function(l){return new wt(l)};wt.register=fd;wt.getAll=function(){return qr.slice()};wt.getById=function(l){return qr.filter(function(t){return t.vars.id===l})[0]};cd()&&Ut.registerPlugin(wt);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le,Br,$e,lt,Gn,mt,dd,mo,go,Yr,Za,Oa,Bt,wo,Jl,jt,xh,vh,Gr,pd,xl,md,dn,gd,_d,xd,Si,Ql,Pc,vl,Na=1,Zt=Date.now,yl=Zt(),In=0,za=0,yh=function(){return wo=1},Mh=function(){return wo=0},jn=function(t){return t},Fs=function(t){return Math.round(t*1e5)/1e5||0},vd=function(){return typeof window<"u"},yd=function(){return Le||vd()&&(Le=window.gsap)&&Le.registerPlugin&&Le},_r=function(t){return!!~dd.indexOf(t)},Md=function(t){return Ii(t,"getBoundingClientRect")||(_r(t)?function(){return no.width=$e.innerWidth,no.height=$e.innerHeight,no}:function(){return fi(t)})},ny=function(t,n,i){var r=i.d,s=i.d2,o=i.a;return(o=Ii(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(n?$e["inner"+s]:t["client"+s])||0}},iy=function(t,n){return!n||~ti.indexOf(t)?Md(t):function(){return no}},Pi=function(t,n){var i=n.s,r=n.d2,s=n.d,o=n.a;return(i="scroll"+r)&&(o=Ii(t,i))?o()-Md(t)()[s]:_r(t)?(Gn[i]||mt[i])-($e["inner"+r]||Gn["client"+r]||mt["client"+r]):t[i]-t["offset"+r]},Ua=function(t,n){for(var i=0;i<Gr.length;i+=3)(!n||~n.indexOf(Gr[i+1]))&&t(Gr[i],Gr[i+1],Gr[i+2])},kn=function(t){return typeof t=="string"},Jt=function(t){return typeof t=="function"},Os=function(t){return typeof t=="number"},Ka=function(t){return typeof t=="object"},Ps=function(t,n,i){return t&&t.progress(n?0:1)&&i&&t.pause()},Ml=function(t,n){if(t.enabled){var i=n(t);i&&i.totalTime&&(t.callbackAnimation=i)}},zr=Math.abs,Sd="left",bd="top",Lc="right",Dc="bottom",cr="width",ur="height",Hs="Right",Xs="Left",qs="Top",Ys="Bottom",_t="padding",Pn="margin",fs="Width",Rc="Height",Ot="px",Hn=function(t){return $e.getComputedStyle(t)},ry=function(t){var n=Hn(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},Sh=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},fi=function(t,n){var i=n&&Hn(t)[Jl]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return i&&i.progress(0).kill(),r},ec=function(t,n){var i=n.d2;return t["offset"+i]||t["client"+i]||0},wd=function(t){var n=[],i=t.labels,r=t.duration(),s;for(s in i)n.push(i[s]/r);return n},sy=function(t){return function(n){return Le.utils.snap(wd(t),n)}},Ic=function(t){var n=Le.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return n(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=n(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:n(s<0?r-t:r+t)}},ay=function(t){return function(n,i){return Ic(wd(t))(n,i.direction)}},ka=function(t,n,i,r){return i.split(",").forEach(function(s){return t(n,s,r)})},Nt=function(t,n,i,r,s){return t.addEventListener(n,i,{passive:!r,capture:!!s})},It=function(t,n,i,r){return t.removeEventListener(n,i,!!r)},Ba=function(t,n,i){return i&&i.wheelHandler&&t(n,"wheel",i)},bh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ga={toggleActions:"play",anticipatePin:0},_o={top:0,left:0,center:.5,bottom:1,right:1},Ja=function(t,n){if(kn(t)){var i=t.indexOf("="),r=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(r*=n/100),t=t.substr(0,i-1)),t=r+(t in _o?_o[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Va=function(t,n,i,r,s,o,a,c){var u=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,g=s.fontWeight,_=lt.createElement("div"),p=_r(i)||Ii(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,x=p?mt:i,S=t.indexOf("start")!==-1,y=S?u:h,b="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||c)&&p?"fixed;":"absolute;"),(m||c||!p)&&(b+=(r===At?Lc:Dc)+":"+(o+parseFloat(f))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),_.style.cssText=b,_.innerText=n||n===0?t+"-"+n:t,x.children[0]?x.insertBefore(_,x.children[0]):x.appendChild(_),_._offset=_["offset"+r.op.d2],Qa(_,0,r,S),_},Qa=function(t,n,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];t._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+fs]=1,s["border"+a+fs]=0,s[i.p]=n+"px",Le.set(t,s)},Xe=[],tc={},sa,wh=function(){return Zt()-In>34&&(sa||(sa=requestAnimationFrame(Ui)))},Ur=function(){(!dn||!dn.isPressed||dn.startX>mt.clientWidth)&&(Ye.cache++,dn?sa||(sa=requestAnimationFrame(Ui)):Ui(),In||vr("scrollStart"),In=Zt())},Sl=function(){xd=$e.innerWidth,_d=$e.innerHeight},Ns=function(){Ye.cache++,!Bt&&!md&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!gd||xd!==$e.innerWidth||Math.abs($e.innerHeight-_d)>$e.innerHeight*.25)&&mo.restart(!0)},xr={},oy=[],Td=function l(){return It(je,"scrollEnd",l)||ir(!0)},vr=function(t){return xr[t]&&xr[t].map(function(n){return n()})||oy},pn=[],Ed=function(t){for(var n=0;n<pn.length;n+=5)(!t||pn[n+4]&&pn[n+4].query===t)&&(pn[n].style.cssText=pn[n+1],pn[n].getBBox&&pn[n].setAttribute("transform",pn[n+2]||""),pn[n+3].uncache=1)},Fc=function(t,n){var i;for(jt=0;jt<Xe.length;jt++)i=Xe[jt],i&&(!n||i._ctx===n)&&(t?i.kill(1):i.revert(!0,!0));n&&Ed(n),n||vr("revert")},Ad=function(t,n){Ye.cache++,(n||!Bn)&&Ye.forEach(function(i){return Jt(i)&&i.cacheID++&&(i.rec=0)}),kn(t)&&($e.history.scrollRestoration=Pc=t)},Bn,hr=0,Th,ly=function(){if(Th!==hr){var t=Th=hr;requestAnimationFrame(function(){return t===hr&&ir(!0)})}},ir=function(t,n){if(In&&!t){Nt(je,"scrollEnd",Td);return}Bn=je.isRefreshing=!0,Ye.forEach(function(r){return Jt(r)&&r.cacheID++&&(r.rec=r())});var i=vr("refreshInit");pd&&je.sort(),n||Fc(),Ye.forEach(function(r){Jt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Xe.slice(0).forEach(function(r){return r.refresh()}),Xe.forEach(function(r,s){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-a),r.revert(!1,1)}}),Xe.forEach(function(r){return r.vars.end==="max"&&r.setPositions(r.start,Math.max(r.start+1,Pi(r.scroller,r._dir)))}),i.forEach(function(r){return r&&r.render&&r.render(-1)}),Ye.forEach(function(r){Jt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Ad(Pc,1),mo.pause(),hr++,Ui(2),Xe.forEach(function(r){return Jt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Bn=je.isRefreshing=!1,vr("refresh")},Eh=0,eo=1,js,Ui=function(t){if(!Bn||t===2){je.isUpdating=!0,js&&js.update(0);var n=Xe.length,i=Zt(),r=i-yl>=50,s=n&&Xe[0].scroll();if(eo=Eh>s?-1:1,Eh=s,r&&(In&&!wo&&i-In>200&&(In=0,vr("scrollEnd")),Za=yl,yl=i),eo<0){for(jt=n;jt-- >0;)Xe[jt]&&Xe[jt].update(0,r);eo=1}else for(jt=0;jt<n;jt++)Xe[jt]&&Xe[jt].update(0,r);je.isUpdating=!1}sa=0},nc=[Sd,bd,Dc,Lc,Pn+Ys,Pn+Hs,Pn+qs,Pn+Xs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],to=nc.concat([cr,ur,"boxSizing","max"+fs,"max"+Rc,"position",Pn,_t,_t+qs,_t+Hs,_t+Ys,_t+Xs]),cy=function(t,n,i){es(i);var r=t._gsap;if(r.spacerIsNative)es(r.spacerState);else if(t._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(t,n),s.removeChild(n))}t._gsap.swappedIn=!1},bl=function(t,n,i,r){if(!t._gsap.swappedIn){for(var s=nc.length,o=n.style,a=t.style,c;s--;)c=nc[s],o[c]=i[c];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Dc]=a[Lc]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[cr]=ec(t,Kt)+Ot,o[ur]=ec(t,At)+Ot,o[_t]=a[Pn]=a[bd]=a[Sd]="0",es(r),a[cr]=a["max"+fs]=i[cr],a[ur]=a["max"+Rc]=i[ur],a[_t]=i[_t],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},uy=/([A-Z])/g,es=function(t){if(t){var n=t.t.style,i=t.length,r=0,s,o;for((t.t._gsap||Le.core.getCache(t.t)).uncache=1;r<i;r+=2)o=t[r+1],s=t[r],o?n[s]=o:n[s]&&n.removeProperty(s.replace(uy,"-$1").toLowerCase())}},Wa=function(t){for(var n=to.length,i=t.style,r=[],s=0;s<n;s++)r.push(to[s],i[to[s]]);return r.t=t,r},hy=function(t,n,i){for(var r=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in n?n[a]:t[o+1]);return r.t=t.t,r},no={left:0,top:0},Ah=function(t,n,i,r,s,o,a,c,u,h,d,f,g){Jt(t)&&(t=t(c)),kn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Ja("0"+t.substr(3),i):0));var _=g?g.time():0,p,m,x;if(g&&g.seek(0),Os(t))a&&Qa(a,i,r,!0);else{Jt(n)&&(n=n(c));var S=(t||"0").split(" "),y,b,M,A;x=en(n)||mt,y=fi(x)||{},(!y||!y.left&&!y.top)&&Hn(x).display==="none"&&(A=x.style.display,x.style.display="block",y=fi(x),A?x.style.display=A:x.style.removeProperty("display")),b=Ja(S[0],y[r.d]),M=Ja(S[1]||"0",i),t=y[r.p]-u[r.p]-h+b+s-M,a&&Qa(a,M,r,i-M<20||a._isStart&&M>20),i-=i-M}if(o){var C=t+i,v=o._isStart;p="scroll"+r.d2,Qa(o,C,r,v&&C>20||!v&&(d?Math.max(mt[p],Gn[p]):o.parentNode[p])<=C+1),d&&(u=fi(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Ot))}return g&&x&&(p=fi(x),g.seek(f),m=fi(x),g._caScrollDist=p[r.p]-m[r.p],t=t/g._caScrollDist*f),g&&g.seek(_),g?t:Math.round(t)},fy=/(webkit|moz|length|cssText|inset)/i,Ch=function(t,n,i,r){if(t.parentNode!==n){var s=t.style,o,a;if(n===mt){t._stOrig=s.cssText,a=Hn(t);for(o in a)!+o&&!fy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=t._stOrig;Le.core.getCache(t).uncache=1,n.appendChild(t)}},Ph=function(t,n){var i=zi(t,n),r="_scroll"+n.p2,s,o,a=function c(u,h,d,f,g){var _=c.tween,p=h.onComplete,m={};return d=d||i(),g=f&&g||0,f=f||u-d,_&&_.kill(),s=Math.round(d),h[r]=u,h.modifiers=m,m[r]=function(x){return x=Math.round(i()),x!==s&&x!==o&&Math.abs(x-s)>3&&Math.abs(x-o)>3?(_.kill(),c.tween=0):x=d+f*_.ratio+g*_.ratio*_.ratio,o=s,s=Math.round(x)},h.onUpdate=function(){Ye.cache++,Ui()},h.onComplete=function(){c.tween=0,p&&p.call(_)},_=c.tween=Le.to(t,h),_};return t[r]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Nt(t,"wheel",i.wheelHandler),a},je=function(){function l(n,i){Br||l.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(n,i)}var t=l.prototype;return t.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!za){this.update=this.refresh=this.kill=jn;return}i=Sh(kn(i)||Os(i)||i.nodeType?{trigger:i}:i,Ga);var s=i,o=s.onUpdate,a=s.toggleClass,c=s.id,u=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,g=s.pin,_=s.pinSpacing,p=s.invalidateOnRefresh,m=s.anticipatePin,x=s.onScrubComplete,S=s.onSnapComplete,y=s.once,b=s.snap,M=s.pinReparent,A=s.pinSpacer,C=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,D=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Kt:At,U=!d&&d!==0,W=en(i.scroller||$e),O=Le.core.getCache(W),I=_r(W),G=("pinType"in i?i.pinType:Ii(W,"pinType")||I&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],K=U&&i.toggleActions.split(" "),k="markers"in i?i.markers:Ga.markers,Q=I?0:parseFloat(Hn(W)["border"+D.p2+fs])||0,L=this,he=i.onRefreshInit&&function(){return i.onRefreshInit(L)},V=ny(W,I,D),J=iy(W,I),ie=0,se=0,z=zi(W,D),we,pe,Te,le,Ge,de,_e,Qe,ut,Ke,q,et,Re,Lt,vt,P,w,Z,ne,ee,ae,Ee,fe,$,Se,Ie,me,Pe,be,Be,Ce,tt,R,Y,te,ce,xe,qe,nt;if(Ql(L),L._dir=D,m*=45,L.scroller=W,L.scroll=C?C.time.bind(C):z,le=z(),L.vars=i,r=r||i.animation,"refreshPriority"in i&&(pd=1,i.refreshPriority===-9999&&(js=L)),O.tweenScroll=O.tweenScroll||{top:Ph(W,At),left:Ph(W,Kt)},L.tweenTo=we=O.tweenScroll[D.p],L.scrubDuration=function(re){tt=Os(re)&&re,tt?Ce?Ce.duration(re):Ce=Le.to(r,{ease:"expo",totalProgress:"+=0.001",duration:tt,paused:!0,onComplete:function(){return x&&x(L)}}):(Ce&&Ce.progress(1).kill(),Ce=0)},r&&(r.vars.lazy=!1,r._initted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(d),be=0,c||(c=r.vars.id)),Xe.push(L),b&&((!Ka(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in mt.style&&Le.set(I?[mt,Gn]:W,{scrollBehavior:"auto"}),Ye.forEach(function(re){return Jt(re)&&re.target===(I?lt.scrollingElement||Gn:W)&&(re.smooth=!1)}),Te=Jt(b.snapTo)?b.snapTo:b.snapTo==="labels"?sy(r):b.snapTo==="labelsDirectional"?ay(r):b.directional!==!1?function(re,ve){return Ic(b.snapTo)(re,Zt()-se<500?0:ve.direction)}:Le.utils.snap(b.snapTo),R=b.duration||{min:.1,max:2},R=Ka(R)?Yr(R.min,R.max):Yr(R,R),Y=Le.delayedCall(b.delay||tt/2||.1,function(){var re=z(),ve=Zt()-se<500,Fe=we.tween;if((ve||Math.abs(L.getVelocity())<10)&&!Fe&&!wo&&ie!==re){var Ne=(re-de)/Re,yt=r&&!U?r.totalProgress():Ne,Ve=ve?0:(yt-Be)/(Zt()-Za)*1e3||0,E=Le.utils.clamp(-Ne,1-Ne,zr(Ve/2)*Ve/.185),N=Ne+(b.inertia===!1?0:E),j=Yr(0,1,Te(N,L)),F=Math.round(de+j*Re),X=b,ye=X.onStart,ge=X.onInterrupt,Me=X.onComplete;if(re<=_e&&re>=de&&F!==re){if(Fe&&!Fe._initted&&Fe.data<=zr(F-re))return;b.inertia===!1&&(E=j-Ne),we(F,{duration:R(zr(Math.max(zr(N-yt),zr(j-yt))*.185/Ve/.05||0)),ease:b.ease||"power3",data:zr(F-re),onInterrupt:function(){return Y.restart(!0)&&ge&&ge(L)},onComplete:function(){L.update(),ie=z(),be=Be=r&&!U?r.totalProgress():L.progress,S&&S(L),Me&&Me(L)}},re,E*Re,F-re-E*Re),ye&&ye(L,we.tween)}}else L.isActive&&ie!==re&&Y.restart(!0)}).pause()),c&&(tc[c]=L),f=L.trigger=en(f||g),nt=f&&f._gsap&&f._gsap.stRevert,nt&&(nt=nt(L)),g=g===!0?f:en(g),kn(a)&&(a={targets:f,className:a}),g&&(_===!1||_===Pn||(_=!_&&g.parentNode&&g.parentNode.style&&Hn(g.parentNode).display==="flex"?!1:_t),L.pin=g,pe=Le.core.getCache(g),pe.spacer?Lt=pe.pinState:(A&&(A=en(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),pe.spacerIsNative=!!A,A&&(pe.spacerState=Wa(A))),pe.spacer=w=A||lt.createElement("div"),w.classList.add("pin-spacer"),c&&w.classList.add("pin-spacer-"+c),pe.pinState=Lt=Wa(g)),i.force3D!==!1&&Le.set(g,{force3D:!0}),L.spacer=w=pe.spacer,Pe=Hn(g),fe=Pe[_+D.os2],ne=Le.getProperty(g),ee=Le.quickSetter(g,D.a,Ot),bl(g,w,Pe),P=Wa(g)),k){et=Ka(k)?Sh(k,bh):bh,Ke=Va("scroller-start",c,W,D,et,0),q=Va("scroller-end",c,W,D,et,0,Ke),Z=Ke["offset"+D.op.d2];var pt=en(Ii(W,"content")||W);Qe=this.markerStart=Va("start",c,pt,D,et,Z,0,C),ut=this.markerEnd=Va("end",c,pt,D,et,Z,0,C),C&&(qe=Le.quickSetter([Qe,ut],D.a,Ot)),!G&&!(ti.length&&Ii(W,"fixedMarkers")===!0)&&(ry(I?mt:W),Le.set([Ke,q],{force3D:!0}),Se=Le.quickSetter(Ke,D.a,Ot),me=Le.quickSetter(q,D.a,Ot))}if(C){var Ue=C.vars.onUpdate,oe=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){L.update(0,0,1),Ue&&Ue.apply(oe||[])})}L.previous=function(){return Xe[Xe.indexOf(L)-1]},L.next=function(){return Xe[Xe.indexOf(L)+1]},L.revert=function(re,ve){if(!ve)return L.kill(!0);var Fe=re!==!1||!L.enabled,Ne=Bt;Fe!==L.isReverted&&(Fe&&(ce=Math.max(z(),L.scroll.rec||0),te=L.progress,xe=r&&r.progress()),Qe&&[Qe,ut,Ke,q].forEach(function(yt){return yt.style.display=Fe?"none":"block"}),Fe&&(Bt=1,L.update(Fe)),g&&(!M||!L.isActive)&&(Fe?cy(g,w,Lt):bl(g,w,Hn(g),$)),Fe||L.update(Fe),Bt=Ne,L.isReverted=Fe)},L.refresh=function(re,ve){if(!((Bt||!L.enabled)&&!ve)){if(g&&re&&In){Nt(l,"scrollEnd",Td);return}!Bn&&he&&he(L),Bt=1,se=Zt(),we.tween&&(we.tween.kill(),we.tween=0),Ce&&Ce.pause(),p&&r&&r.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Fe=V(),Ne=J(),yt=C?C.duration():Pi(W,D),Ve=0,E=0,N=i.end,j=i.endTrigger||f,F=i.start||(i.start===0||!f?0:g?"0 0":"0 100%"),X=L.pinnedContainer=i.pinnedContainer&&en(i.pinnedContainer),ye=f&&Math.max(0,Xe.indexOf(L))||0,ge=ye,Me,Ae,We,ke,De,ze,ht,ln,qn,st,Oe;ge--;)ze=Xe[ge],ze.end||ze.refresh(0,1)||(Bt=1),ht=ze.pin,ht&&(ht===f||ht===g)&&!ze.isReverted&&(st||(st=[]),st.unshift(ze),ze.revert(!0,!0)),ze!==Xe[ge]&&(ye--,ge--);for(Jt(F)&&(F=F(L)),de=Ah(F,f,Fe,D,z(),Qe,Ke,L,Ne,Q,G,yt,C)||(g?-.001:0),Jt(N)&&(N=N(L)),kn(N)&&!N.indexOf("+=")&&(~N.indexOf(" ")?N=(kn(F)?F.split(" ")[0]:"")+N:(Ve=Ja(N.substr(2),Fe),N=kn(F)?F:de+Ve,j=f)),_e=Math.max(de,Ah(N||(j?"100% 0":yt),j,Fe,D,z()+Ve,ut,q,L,Ne,Q,G,yt,C))||-.001,Re=_e-de||(de-=.01)&&.001,Ve=0,ge=ye;ge--;)ze=Xe[ge],ht=ze.pin,ht&&ze.start-ze._pinPush<=de&&!C&&ze.end>0&&(Me=ze.end-ze.start,(ht===f&&ze.start-ze._pinPush<de||ht===X)&&!Os(F)&&(Ve+=Me*(1-ze.progress)),ht===g&&(E+=Me));if(de+=Ve,_e+=Ve,L._pinPush=E,Qe&&Ve&&(Me={},Me[D.a]="+="+Ve,X&&(Me[D.p]="-="+z()),Le.set([Qe,ut],Me)),g)Me=Hn(g),ke=D===At,We=z(),ae=parseFloat(ne(D.a))+E,!yt&&_e>1&&(Oe=(I?lt.scrollingElement||Gn:W).style,Oe={style:Oe,value:Oe["overflow"+D.a.toUpperCase()]},Oe["overflow"+D.a.toUpperCase()]="scroll"),bl(g,w,Me),P=Wa(g),Ae=fi(g,!0),ln=G&&zi(W,ke?Kt:At)(),_&&($=[_+D.os2,Re+E+Ot],$.t=w,ge=_===_t?ec(g,D)+Re+E:0,ge&&$.push(D.d,ge+Ot),es($),X&&Xe.forEach(function(ii){ii.pin===X&&ii.vars.pinSpacing!==!1&&(ii._subPinOffset=!0)}),G&&z(ce)),G&&(De={top:Ae.top+(ke?We-de:ln)+Ot,left:Ae.left+(ke?ln:We-de)+Ot,boxSizing:"border-box",position:"fixed"},De[cr]=De["max"+fs]=Math.ceil(Ae.width)+Ot,De[ur]=De["max"+Rc]=Math.ceil(Ae.height)+Ot,De[Pn]=De[Pn+qs]=De[Pn+Hs]=De[Pn+Ys]=De[Pn+Xs]="0",De[_t]=Me[_t],De[_t+qs]=Me[_t+qs],De[_t+Hs]=Me[_t+Hs],De[_t+Ys]=Me[_t+Ys],De[_t+Xs]=Me[_t+Xs],vt=hy(Lt,De,M),Bn&&z(0)),r?(qn=r._initted,xl(1),r.render(r.duration(),!0,!0),Ee=ne(D.a)-ae+Re+E,Ie=Math.abs(Re-Ee)>1,G&&Ie&&vt.splice(vt.length-2,2),r.render(0,!0,!0),qn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),xl(0)):Ee=Re,Oe&&(Oe.value?Oe.style["overflow"+D.a.toUpperCase()]=Oe.value:Oe.style.removeProperty("overflow-"+D.a));else if(f&&z()&&!C)for(Ae=f.parentNode;Ae&&Ae!==mt;)Ae._pinOffset&&(de-=Ae._pinOffset,_e-=Ae._pinOffset),Ae=Ae.parentNode;st&&st.forEach(function(ii){return ii.revert(!1,!0)}),L.start=de,L.end=_e,le=Ge=Bn?ce:z(),!C&&!Bn&&(le<ce&&z(ce),L.scroll.rec=0),L.revert(!1,!0),Y&&(ie=-1,L.isActive&&z(de+Re*te),Y.restart(!0)),Bt=0,r&&U&&(r._initted||xe)&&r.progress()!==xe&&r.progress(xe,!0).render(r.time(),!0,!0),(te!==L.progress||C)&&(r&&!U&&r.totalProgress(te,!0),L.progress=(le-de)/Re===te?0:te),g&&_&&(w._pinOffset=Math.round(L.progress*Ee)),h&&!Bn&&h(L)}},L.getVelocity=function(){return(z()-Ge)/(Zt()-Za)*1e3||0},L.endAnimation=function(){Ps(L.callbackAnimation),r&&(Ce?Ce.progress(1):r.paused()?U||Ps(r,L.direction<0,1):Ps(r,r.reversed()))},L.labelToScroll=function(re){return r&&r.labels&&(de||L.refresh()||de)+r.labels[re]/r.duration()*Re||0},L.getTrailing=function(re){var ve=Xe.indexOf(L),Fe=L.direction>0?Xe.slice(0,ve).reverse():Xe.slice(ve+1);return(kn(re)?Fe.filter(function(Ne){return Ne.vars.preventOverlaps===re}):Fe).filter(function(Ne){return L.direction>0?Ne.end<=de:Ne.start>=_e})},L.update=function(re,ve,Fe){if(!(C&&!Fe&&!re)){var Ne=Bn?ce:L.scroll(),yt=re?0:(Ne-de)/Re,Ve=yt<0?0:yt>1?1:yt||0,E=L.progress,N,j,F,X,ye,ge,Me,Ae;if(ve&&(Ge=le,le=C?z():Ne,b&&(Be=be,be=r&&!U?r.totalProgress():Ve)),m&&!Ve&&g&&!Bt&&!Na&&In&&de<Ne+(Ne-Ge)/(Zt()-Za)*m&&(Ve=1e-4),Ve!==E&&L.enabled){if(N=L.isActive=!!Ve&&Ve<1,j=!!E&&E<1,ge=N!==j,ye=ge||!!Ve!=!!E,L.direction=Ve>E?1:-1,L.progress=Ve,ye&&!Bt&&(F=Ve&&!E?0:Ve===1?1:E===1?2:3,U&&(X=!ge&&K[F+1]!=="none"&&K[F+1]||K[F],Ae=r&&(X==="complete"||X==="reset"||X in r))),T&&(ge||Ae)&&(Ae||d||!r)&&(Jt(T)?T(L):L.getTrailing(T).forEach(function(ze){return ze.endAnimation()})),U||(Ce&&!Bt&&!Na?(Ce._dp._time-Ce._start!==Ce._time&&Ce.render(Ce._dp._time-Ce._start),Ce.resetTo?Ce.resetTo("totalProgress",Ve,r._tTime/r._tDur):(Ce.vars.totalProgress=Ve,Ce.invalidate().restart())):r&&r.totalProgress(Ve,!!Bt)),g){if(re&&_&&(w.style[_+D.os2]=fe),!G)ee(Fs(ae+Ee*Ve));else if(ye){if(Me=!re&&Ve>E&&_e+1>Ne&&Ne+1>=Pi(W,D),M)if(!re&&(N||Me)){var We=fi(g,!0),ke=Ne-de;Ch(g,mt,We.top+(D===At?ke:0)+Ot,We.left+(D===At?0:ke)+Ot)}else Ch(g,w);es(N||Me?vt:P),Ie&&Ve<1&&N||ee(ae+(Ve===1&&!Me?Ee:0))}}b&&!we.tween&&!Bt&&!Na&&Y.restart(!0),a&&(ge||y&&Ve&&(Ve<1||!vl))&&go(a.targets).forEach(function(ze){return ze.classList[N||y?"add":"remove"](a.className)}),o&&!U&&!re&&o(L),ye&&!Bt?(U&&(Ae&&(X==="complete"?r.pause().totalProgress(1):X==="reset"?r.restart(!0).pause():X==="restart"?r.restart(!0):r[X]()),o&&o(L)),(ge||!vl)&&(u&&ge&&Ml(L,u),H[F]&&Ml(L,H[F]),y&&(Ve===1?L.kill(!1,1):H[F]=0),ge||(F=Ve===1?1:3,H[F]&&Ml(L,H[F]))),v&&!N&&Math.abs(L.getVelocity())>(Os(v)?v:2500)&&(Ps(L.callbackAnimation),Ce?Ce.progress(1):Ps(r,X==="reverse"?1:!Ve,1))):U&&o&&!Bt&&o(L)}if(me){var De=C?Ne/C.duration()*(C._caScrollDist||0):Ne;Se(De+(Ke._isFlipped?1:0)),me(De)}qe&&qe(-Ne/C.duration()*(C._caScrollDist||0))}},L.enable=function(re,ve){L.enabled||(L.enabled=!0,Nt(W,"resize",Ns),Nt(I?lt:W,"scroll",Ur),he&&Nt(l,"refreshInit",he),re!==!1&&(L.progress=te=0,le=Ge=ie=z()),ve!==!1&&L.refresh())},L.getTween=function(re){return re&&we?we.tween:Ce},L.setPositions=function(re,ve){g&&(ae+=re-de,Ee+=ve-re-Re,_===_t&&L.adjustPinSpacing(ve-re-Re)),L.start=de=re,L.end=_e=ve,Re=ve-re,L.update()},L.adjustPinSpacing=function(re){if($){var ve=$.indexOf(D.d)+1;$[ve]=parseFloat($[ve])+re+Ot,$[1]=parseFloat($[1])+re+Ot,es($)}},L.disable=function(re,ve){if(L.enabled&&(re!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,ve||Ce&&Ce.pause(),ce=0,pe&&(pe.uncache=1),he&&It(l,"refreshInit",he),Y&&(Y.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!I)){for(var Fe=Xe.length;Fe--;)if(Xe[Fe].scroller===W&&Xe[Fe]!==L)return;It(W,"resize",Ns),It(W,"scroll",Ur)}},L.kill=function(re,ve){L.disable(re,ve),Ce&&!ve&&Ce.kill(),c&&delete tc[c];var Fe=Xe.indexOf(L);Fe>=0&&Xe.splice(Fe,1),Fe===jt&&eo>0&&jt--,Fe=0,Xe.forEach(function(Ne){return Ne.scroller===L.scroller&&(Fe=1)}),Fe||Bn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),ve||r.kill()),Qe&&[Qe,ut,Ke,q].forEach(function(Ne){return Ne.parentNode&&Ne.parentNode.removeChild(Ne)}),js===L&&(js=0),g&&(pe&&(pe.uncache=1),Fe=0,Xe.forEach(function(Ne){return Ne.pin===g&&Fe++}),Fe||(pe.spacer=0)),i.onKill&&i.onKill(L)},L.enable(!1,!1),nt&&nt(L),!r||!r.add||Re?L.refresh():Le.delayedCall(.01,function(){return de||_e||L.refresh()})&&(Re=.01)&&(de=_e=0),g&&ly()},l.register=function(i){return Br||(Le=i||yd(),vd()&&window.document&&l.enable(),Br=za),Br},l.defaults=function(i){if(i)for(var r in i)Ga[r]=i[r];return Ga},l.disable=function(i,r){za=0,Xe.forEach(function(o){return o[r?"kill":"disable"](i)}),It($e,"wheel",Ur),It(lt,"scroll",Ur),clearInterval(Oa),It(lt,"touchcancel",jn),It(mt,"touchstart",jn),ka(It,lt,"pointerdown,touchstart,mousedown",yh),ka(It,lt,"pointerup,touchend,mouseup",Mh),mo.kill(),Ua(It);for(var s=0;s<Ye.length;s+=3)Ba(It,Ye[s],Ye[s+1]),Ba(It,Ye[s],Ye[s+2])},l.enable=function(){if($e=window,lt=document,Gn=lt.documentElement,mt=lt.body,Le&&(go=Le.utils.toArray,Yr=Le.utils.clamp,Ql=Le.core.context||jn,xl=Le.core.suppressOverwrites||jn,Pc=$e.history.scrollRestoration||"auto",Le.core.globals("ScrollTrigger",l),mt)){za=1,wt.register(Le),l.isTouch=wt.isTouch,Si=wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nt($e,"wheel",Ur),dd=[$e,lt,Gn,mt],Le.matchMedia?(l.matchMedia=function(c){var u=Le.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Le.addEventListener("matchMediaInit",function(){return Fc()}),Le.addEventListener("matchMediaRevert",function(){return Ed()}),Le.addEventListener("matchMedia",function(){ir(0,1),vr("matchMedia")}),Le.matchMedia("(orientation: portrait)",function(){return Sl(),Sl})):console.warn("Requires GSAP 3.11.0 or later"),Sl(),Nt(lt,"scroll",Ur);var i=mt.style,r=i.borderTopStyle,s=Le.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=fi(mt),At.m=Math.round(o.top+At.sc())||0,Kt.m=Math.round(o.left+Kt.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),Oa=setInterval(wh,250),Le.delayedCall(.5,function(){return Na=0}),Nt(lt,"touchcancel",jn),Nt(mt,"touchstart",jn),ka(Nt,lt,"pointerdown,touchstart,mousedown",yh),ka(Nt,lt,"pointerup,touchend,mouseup",Mh),Jl=Le.utils.checkPrefix("transform"),to.push(Jl),Br=Zt(),mo=Le.delayedCall(.2,ir).pause(),Gr=[lt,"visibilitychange",function(){var c=$e.innerWidth,u=$e.innerHeight;lt.hidden?(xh=c,vh=u):(xh!==c||vh!==u)&&Ns()},lt,"DOMContentLoaded",ir,$e,"load",ir,$e,"resize",Ns],Ua(Nt),Xe.forEach(function(c){return c.enable(0,1)}),a=0;a<Ye.length;a+=3)Ba(It,Ye[a],Ye[a+1]),Ba(It,Ye[a],Ye[a+2])}},l.config=function(i){"limitCallbacks"in i&&(vl=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Oa)||(Oa=r)&&setInterval(wh,r),"ignoreMobileResize"in i&&(gd=l.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ua(It)||Ua(Nt,i.autoRefreshEvents||"none"),md=(i.autoRefreshEvents+"").indexOf("resize")===-1)},l.scrollerProxy=function(i,r){var s=en(i),o=Ye.indexOf(s),a=_r(s);~o&&Ye.splice(o,a?6:2),r&&(a?ti.unshift($e,r,mt,r,Gn,r):ti.unshift(s,r))},l.clearMatchMedia=function(i){Xe.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},l.isInViewport=function(i,r,s){var o=(kn(i)?en(i):i).getBoundingClientRect(),a=o[s?cr:ur]*r||0;return s?o.right-a>0&&o.left+a<$e.innerWidth:o.bottom-a>0&&o.top+a<$e.innerHeight},l.positionInViewport=function(i,r,s){kn(i)&&(i=en(i));var o=i.getBoundingClientRect(),a=o[s?cr:ur],c=r==null?a/2:r in _o?_o[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+c)/$e.innerWidth:(o.top+c)/$e.innerHeight},l.killAll=function(i){if(Xe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=xr.killAll||[];xr={},r.forEach(function(s){return s()})}},l}();je.version="3.11.4";je.saveStyles=function(l){return l?go(l).forEach(function(t){if(t&&t.style){var n=pn.indexOf(t);n>=0&&pn.splice(n,5),pn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Le.core.getCache(t),Ql())}}):pn};je.revert=function(l,t){return Fc(!l,t)};je.create=function(l,t){return new je(l,t)};je.refresh=function(l){return l?Ns():(Br||je.register())&&ir(!0)};je.update=function(l){return++Ye.cache&&Ui(l===!0?2:0)};je.clearScrollMemory=Ad;je.maxScroll=function(l,t){return Pi(l,t?Kt:At)};je.getScrollFunc=function(l,t){return zi(en(l),t?Kt:At)};je.getById=function(l){return tc[l]};je.getAll=function(){return Xe.filter(function(l){return l.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!In};je.snapDirectional=Ic;je.addEventListener=function(l,t){var n=xr[l]||(xr[l]=[]);~n.indexOf(t)||n.push(t)};je.removeEventListener=function(l,t){var n=xr[l],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)};je.batch=function(l,t){var n=[],i={},r=t.interval||.016,s=t.batchMax||1e9,o=function(u,h){var d=[],f=[],g=Le.delayedCall(r,function(){h(d,f),d=[],f=[]}).pause();return function(_){d.length||g.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&g.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Jt(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Jt(s)&&(s=s(),Nt(je,"refresh",function(){return s=t.batchMax()})),go(l).forEach(function(c){var u={};for(a in i)u[a]=i[a];u.trigger=c,n.push(je.create(u))}),n};var Lh=function(t,n,i,r){return n>r?t(r):n<0&&t(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},wl=function l(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(wt.isTouch?" pinch-zoom":""):"none",t===Gn&&l(mt,n)},Ha={auto:1,scroll:1},dy=function(t){var n=t.event,i=t.target,r=t.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,o=s._gsap||Le.core.getCache(s),a=Zt(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ha[(c=Hn(s)).overflowY]||Ha[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!_r(s)&&(Ha[(c=Hn(s)).overflowY]||Ha[c.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},Cd=function(t,n,i,r){return wt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&dy,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Nt(lt,wt.eventTypes[0],Rh,!1,!0)},onDisable:function(){return It(lt,wt.eventTypes[0],Rh,!0)}})},py=/(input|label|select|textarea)/i,Dh,Rh=function(t){var n=py.test(t.target.tagName);(n||Dh)&&(t._gsapAllow=!0,Dh=n)},my=function(t){Ka(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,i=n.normalizeScrollX,r=n.momentum,s=n.allowNestedScroll,o,a,c=en(t.target)||Gn,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),d=Si&&(t.content&&en(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=zi(c,At),g=zi(c,Kt),_=1,p=(wt.isTouch&&$e.visualViewport?$e.visualViewport.scale*$e.visualViewport.width:$e.outerWidth)/$e.innerWidth,m=0,x=Jt(r)?function(){return r(o)}:function(){return r||2.8},S,y,b=Cd(c,t.type,!0,s),M=function(){return y=!1},A=jn,C=jn,v=function(){a=Pi(c,At),C=Yr(Si?1:0,a),i&&(A=Yr(0,Pi(c,Kt))),S=hr},T=function(){d._gsap.y=Fs(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(M);var K=Fs(o.deltaY/2),k=C(f.v-K);if(d&&k!==f.v+f.offset){f.offset=k-f.v;var Q=Fs((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Q+", 0, 1)",d._gsap.y=Q+"px",f.cacheID=Ye.cache,Ui()}return!0}f.offset&&T(),y=!0},U,W,O,I,G=function(){v(),U.isActive()&&U.vars.scrollY>a&&(f()>a?U.progress(1)&&f(a):U.resetTo("scrollY",a))};return d&&Le.set(d,{y:"+=0"}),t.ignoreCheck=function(H){return Si&&H.type==="touchmove"&&D()||_>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},t.onPress=function(){var H=_;_=Fs(($e.visualViewport&&$e.visualViewport.scale||1)/p),U.pause(),H!==_&&wl(c,_>1.01?!0:i?!1:"x"),W=g(),O=f(),v(),S=hr},t.onRelease=t.onGestureStart=function(H,K){if(f.offset&&T(),!K)I.restart(!0);else{Ye.cache++;var k=x(),Q,L;i&&(Q=g(),L=Q+k*.05*-H.velocityX/.227,k*=Lh(g,Q,L,Pi(c,Kt)),U.vars.scrollX=A(L)),Q=f(),L=Q+k*.05*-H.velocityY/.227,k*=Lh(f,Q,L,Pi(c,At)),U.vars.scrollY=C(L),U.invalidate().duration(k).play(.01),(Si&&U.vars.scrollY>=a||Q>=a-1)&&Le.to({},{onUpdate:G,duration:k})}},t.onWheel=function(){U._ts&&U.pause(),Zt()-m>1e3&&(S=0,m=Zt())},t.onChange=function(H,K,k,Q,L){if(hr!==S&&v(),K&&i&&g(A(Q[2]===K?W+(H.startX-H.x):g()+K-Q[1])),k){f.offset&&T();var he=L[2]===k,V=he?O+H.startY-H.y:f()+k-L[1],J=C(V);he&&V!==J&&(O+=J-V),f(J)}(k||K)&&Ui()},t.onEnable=function(){wl(c,i?!1:"x"),je.addEventListener("refresh",G),Nt($e,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},t.onDisable=function(){wl(c,!0),It($e,"resize",G),je.removeEventListener("refresh",G),b.kill()},t.lockAxis=t.lockAxis!==!1,o=new wt(t),o.iOS=Si,Si&&!f()&&f(1),Si&&Le.ticker.add(jn),I=o._dc,U=Le.to(o,{ease:"power4",paused:!0,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:I.vars.onComplete}),o};je.sort=function(l){return Xe.sort(l||function(t,n){return(t.vars.refreshPriority||0)*-1e6+t.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(l){return new wt(l)};je.normalizeScroll=function(l){if(typeof l>"u")return dn;if(l===!0&&dn)return dn.enable();if(l===!1)return dn&&dn.kill();var t=l instanceof wt?l:my(l);return dn&&dn.target===t.target&&dn.kill(),_r(t.target)&&(dn=t),t};je.core={_getVelocityProp:Kl,_inputObserver:Cd,_scrollers:Ye,_proxies:ti,bridge:{ss:function(){In||vr("scrollStart"),In=Zt()},ref:function(){return Bt}}};yd()&&Le.registerPlugin(je);Gi.registerPlugin(je);je.config({autoRefreshEvents:"visibilitychange,DOMContentLoaded,load,resize"});const gy=document.querySelector("#about_me_text_wrapper"),_y=document.querySelector("#about_me_image_wrapper"),xy=document.querySelector("#about_me_image"),Pd=Gi.timeline({scrollTrigger:{trigger:".about_me_trigger",start:"top top",end:"+=100%",scrub:!0,pin:!0,anticipatePin:1}});Pd.from(gy,{x:"-100%"}).from(_y,{alpha:0,y:"100%"}).from(xy,{translateY:"100%"});Gi.registerPlugin(je);document.querySelector("#my_projects");const Vr=Gi.utils.toArray(".project"),ic=[];Vr.forEach((l,t)=>{l.dataset.pin&&ic.push(t),console.log(l.dataset)});const rc=Gi.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".my_projects_trigger",start:"center center",end:"+=4000",scrub:!0,pin:!0,anticipatePin:1}});ic.forEach((l,t)=>{const n=Gi.utils.selector(Vr[l]);rc.to(Vr,{xPercent:-100*l,duration:l}).from(n(".project_title"),{alpha:0}).from(n(".project_description"),{ease:"power1",alpha:0,xPercent:300},"<").from(n(".project_image_wrapper"),{alpha:0,xPercent:300},"<").to(n(".project_image_wrapper"),{yPercent:-3},"<"),t===ic.length-1&&rc.to(Vr,{xPercent:-(100*(Vr.length-1)),duration:Vr.length-l})});const vy=document.querySelector("#banner3d_title"),yy=document.querySelector("#bg"),My=()=>Gi.timeline({defaults:{ease:"power2"}}).from(vy,{alpha:0,delay:.25,duration:.5},0).from(yy,{scale:0,duration:.5});of();My();Pd();rc();function Sy(){e.preventDefault(),console.log("hola"),window.scrollTo(0,Position(document.querySelector(".about_me_trigger")))}const by=document.querySelector(".about_link");by.addEventListener("click",Sy);
