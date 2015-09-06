var glMatrix={};glMatrix.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array;var vec2={};vec2.create=function(){var n=new glMatrix.ARRAY_TYPE(2);return n[0]=0,n[1]=0,n},vec2.clone=function(n){var r=new glMatrix.ARRAY_TYPE(2);return r[0]=n[0],r[1]=n[1],r},vec2.fromValues=function(n,r){var e=new glMatrix.ARRAY_TYPE(2);return e[0]=n,e[1]=r,e},vec2.copy=function(n,r){return n[0]=r[0],n[1]=r[1],n},vec2.set=function(n,r,e){return n[0]=r,n[1]=e,n},vec2.add=function(n,r,e){return n[0]=r[0]+e[0],n[1]=r[1]+e[1],n},vec2.subtract=function(n,r,e){return n[0]=r[0]-e[0],n[1]=r[1]-e[1],n},vec2.sub=vec2.subtract,vec2.multiply=function(n,r,e){return n[0]=r[0]*e[0],n[1]=r[1]*e[1],n},vec2.mul=vec2.multiply,vec2.divide=function(n,r,e){return n[0]=r[0]/e[0],n[1]=r[1]/e[1],n},vec2.div=vec2.divide,vec2.min=function(n,r,e){return n[0]=Math.min(r[0],e[0]),n[1]=Math.min(r[1],e[1]),n},vec2.max=function(n,r,e){return n[0]=Math.max(r[0],e[0]),n[1]=Math.max(r[1],e[1]),n},vec2.scale=function(n,r,e){return n[0]=r[0]*e,n[1]=r[1]*e,n},vec2.scaleAndAdd=function(n,r,e,t){return n[0]=r[0]+e[0]*t,n[1]=r[1]+e[1]*t,n},vec2.distance=function(n,r){var e=r[0]-n[0],t=r[1]-n[1];return Math.sqrt(e*e+t*t)},vec2.dist=vec2.distance,vec2.squaredDistance=function(n,r){var e=r[0]-n[0],t=r[1]-n[1];return e*e+t*t},vec2.sqrDist=vec2.squaredDistance,vec2.length=function(n){var r=n[0],e=n[1];return Math.sqrt(r*r+e*e)},vec2.len=vec2.length,vec2.squaredLength=function(n){var r=n[0],e=n[1];return r*r+e*e},vec2.sqrLen=vec2.squaredLength,vec2.negate=function(n,r){return n[0]=-r[0],n[1]=-r[1],n},vec2.inverse=function(n,r){return n[0]=1/r[0],n[1]=1/r[1],n},vec2.normalize=function(n,r){var e=r[0],t=r[1],c=e*e+t*t;return c>0&&(c=1/Math.sqrt(c),n[0]=r[0]*c,n[1]=r[1]*c),n},vec2.dot=function(n,r){return n[0]*r[0]+n[1]*r[1]},vec2.cross=function(n,r,e){var t=r[0]*e[1]-r[1]*e[0];return n[0]=n[1]=0,n[2]=t,n},vec2.lerp=function(n,r,e,t){var c=r[0],u=r[1];return n[0]=c+t*(e[0]-c),n[1]=u+t*(e[1]-u),n},vec2.random=function(n,r){r=r||1;var e=2*glMatrix.RANDOM()*Math.PI;return n[0]=Math.cos(e)*r,n[1]=Math.sin(e)*r,n},vec2.transformMat2=function(n,r,e){var t=r[0],c=r[1];return n[0]=e[0]*t+e[2]*c,n[1]=e[1]*t+e[3]*c,n},vec2.transformMat2d=function(n,r,e){var t=r[0],c=r[1];return n[0]=e[0]*t+e[2]*c+e[4],n[1]=e[1]*t+e[3]*c+e[5],n},vec2.transformMat3=function(n,r,e){var t=r[0],c=r[1];return n[0]=e[0]*t+e[3]*c+e[6],n[1]=e[1]*t+e[4]*c+e[7],n},vec2.transformMat4=function(n,r,e){var t=r[0],c=r[1];return n[0]=e[0]*t+e[4]*c+e[12],n[1]=e[1]*t+e[5]*c+e[13],n},vec2.forEach=function(){var n=vec2.create();return function(r,e,t,c,u,a){var v,i;for(e||(e=2),t||(t=0),i=c?Math.min(c*e+t,r.length):r.length,v=t;i>v;v+=e)n[0]=r[v],n[1]=r[v+1],u(n,n,a),r[v]=n[0],r[v+1]=n[1];return r}}(),vec2.str=function(n){return"vec2("+n[0]+", "+n[1]+")"};