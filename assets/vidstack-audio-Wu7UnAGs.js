import{bg as i}from"./app-DJX8rIet.js";import{H as r,a as s}from"./vidstack-Dgd3Tj9x-38Ctxbxm.js";import"./vidstack-Ccp8mxka-CRqmsdCp.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};