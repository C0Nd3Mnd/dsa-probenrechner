import{d as g,c as p,t as b,n as k,o as f,a as t,b as h,w as M,v as C,e as $,F as _,r as y,f as w,g as v,l as N,h as F,i as E,j as z,k as L}from"./vendor.ce3fcf55.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};G();function A(l,e,i,c,s,n){let a=0;l+=s,e+=s,i+=s;for(let r=1;r<21;++r)for(let o=1;o<21;++o)for(let d=1;d<21;++d){let m=!1,u=0;n<2?u=c:u=c-(n*3-2),u>=0&&l>0&&e>0&&i>0?r===1&&(o===1||d===1)||o===1&&d===1?m=!0:r===20&&(o===20||d===20)||o===20&&d===20?m=!1:u===0?m=r<=l&&o<=e&&d<=i:(r>l&&(u=u-(r-l)),o>e&&(u=u-(o-e)),d>i&&(u=u-(d-i)),m=u>-1):m=!1,m&&++a}return a/8e3}var V=(l,e)=>{const i=l.__vccOpts||l;for(const[c,s]of e)i[c]=s;return i};const B=g({props:{value:{type:Number,required:!0}},computed:{valueClass(){return this.value>=.99275?"result-column--perfect":this.value<=0?"result-column--impossible":`result-column--${Math.floor(this.value*10)*10}`},prettyValue(){return(this.value*100).toFixed(2)}}});function D(l,e,i,c,s,n){return f(),p("td",{class:k(["result-column",l.valueClass])},b(l.prettyValue),3)}var I=V(B,[["render",D]]);const O=g({props:{modelValue:{type:Number,required:!0},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:20},label:{type:String,required:!1,default:"Unnamed"}},computed:{virtualModel:{get(){return this.modelValue},set(l){let e=Math.floor(+l);e>this.max?e=this.max:e<this.min&&(e=this.min),this.$emit("update:modelValue",e)}}}}),S={class:"row"},U={class:"col-12"},P=["disabled"],j={class:"row"},H={class:"col-12 center"},K=["min","max"],T={class:"row"},q={class:"col-12 center"},W={class:"number-input__label"},Q={class:"row"},R={class:"col-12"},Y=["disabled"];function J(l,e,i,c,s,n){const a=y("font-awesome-icon");return f(),p(_,null,[t("div",S,[t("div",U,[t("button",{tabindex:"-1",class:"btn btn--block btn--large",disabled:l.virtualModel===l.max,onClick:e[0]||(e[0]=r=>++l.virtualModel)},[h(a,{icon:"plus"})],8,P)])]),t("div",j,[t("div",H,[M(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>l.virtualModel=r),type:"text",class:"number-input__input",min:l.min,max:l.max,onKeydown:[e[2]||(e[2]=$(r=>++l.virtualModel,["arrow-up"])),e[3]||(e[3]=$(r=>l.virtualModel+=5,["page-up"])),e[4]||(e[4]=$(r=>--l.virtualModel,["arrow-down"])),e[5]||(e[5]=$(r=>l.virtualModel-=5,["page-down"]))]},null,40,K),[[C,l.virtualModel]])])]),t("div",T,[t("div",q,[t("span",W,b(l.label),1)])]),t("div",Q,[t("div",R,[t("button",{tabindex:"-1",class:"btn btn--block btn--large",disabled:l.virtualModel===l.min,onClick:e[6]||(e[6]=r=>--l.virtualModel)}," - ",8,Y)])])],64)}var X=V(O,[["render",J]]);const Z="0.6.3",x=g({components:{ResultColumn:I,NumberInput:X},data:()=>({version:Z,property1:8,property2:8,property3:8,skillValue:0}),methods:{calc(l,e){return A(+this.property1,+this.property2,+this.property3,+this.skillValue,l,e)}}}),ee=t("div",{class:"row"},[t("div",{class:"col-12"},[t("h1",null,"DSA5 Probenrechner")])],-1),te={class:"row"},le={class:"col-3 col-md-2 col-md-offset-2"},oe={class:"col-3 col-md-2"},se={class:"col-3 col-md-2"},ne={class:"col-3 col-md-2"},re={class:"row"},ie={class:"col-12 col-md-6 col-md-offset-3"},ae={style:{width:"100%"}},de=t("th",{style:{width:"24px"}},"Mod.",-1),ue={style:{"text-align":"center"}},ce=t("div",{class:"row"},[t("div",{class:"col-12"},[t("p",null," Die Werte der Felder k\xF6nnen auch mit den Pfeiltasten bzw. Bild hoch/runter (+5/-5) manipuliert werden. ")])],-1),me={class:"row"},pe={class:"col-12",style:{"font-style":"italic"}},fe=t("p",null,[v(" Der urspr\xFCngliche Code zur Berechnung der Wahrscheinlichkeit stammt aus dem "),t("a",{href:"http://dsa5.mueller-kalthoff.com/",target:"_blank"}," Erfolgswahrscheinlichkeitsrechner "),v(" von Hanno M\xFCller-Kalthoff // CC-BY 3.0 ")],-1),he=t("p",null,[v(" Hintergrundbild von "),t("a",{href:"https://unsplash.com/@jplenio",target:"_blank"},"@jplenio")],-1),ve=t("p",null,[v(" Dieses Tool ist unter der "),t("a",{href:"https://github.com/C0Nd3Mnd/dsa-probenrechner/blob/main/LICENSE",target:"_blank"}," MIT-Lizenz "),v(" lizenziert. "),t("a",{href:"https://github.com/C0Nd3Mnd/dsa-probenrechner",target:"_blank"}," Quellcode auf GitHub ")],-1),be=t("a",{href:"https://github.com/C0Nd3Mnd/dsa-probenrechner/blob/main/CHANGELOG.md",target:"_blank"}," Changelog ",-1);function _e(l,e,i,c,s,n){const a=y("number-input"),r=y("result-column");return f(),p(_,null,[ee,t("div",te,[t("div",le,[h(a,{ref:"firstInput",modelValue:l.property1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.property1=o),label:"EG1"},null,8,["modelValue"])]),t("div",oe,[h(a,{modelValue:l.property2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.property2=o),label:"EG2"},null,8,["modelValue"])]),t("div",se,[h(a,{modelValue:l.property3,"onUpdate:modelValue":e[2]||(e[2]=o=>l.property3=o),label:"EG3"},null,8,["modelValue"])]),t("div",ne,[h(a,{modelValue:l.skillValue,"onUpdate:modelValue":e[3]||(e[3]=o=>l.skillValue=o),label:"FW",max:25},null,8,["modelValue"])])]),t("div",re,[t("div",ie,[t("table",ae,[t("thead",null,[t("tr",null,[de,(f(),p(_,null,w(6,o=>t("th",{key:o},"QS"+b(o),1)),64))])]),t("tbody",null,[(f(),p(_,null,w(21,o=>t("tr",{key:o,class:k(o===11?"table__row--large":"")},[t("th",ue,b(o-11),1),(f(),p(_,null,w(6,d=>h(r,{key:d,value:l.calc(o-11,d)},null,8,["value"])),64))],2)),64))])])])]),ce,t("div",me,[t("div",pe,[fe,he,ve,t("p",null,[v(" Version "+b(l.version)+" - ",1),be])])])],64)}var $e=V(x,[["render",_e]]);N.add(F,E);z($e).component("font-awesome-icon",L).mount("#app");