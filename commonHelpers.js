import{S as c,A as l,P as d}from"./assets/vendor-754ade45.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o=document.getElementById("backdrop_container"),u=document.getElementById("module_open"),a=document.getElementById("module_close");u.addEventListener("click",()=>{o.showModal()});a.addEventListener("click",()=>{o.setAttribute("closing",""),o.addEventListener("animationend",()=>{o.removeAttribute("closing"),o.close()},{once:!0})});const p=document.querySelector(".up-button");p.addEventListener("click",()=>{window.scrollTo(0,0)});new c(".mySwiper",{modules:[l,d],loop:!0,speed:750,spaceBetween:10,slidesPerView:1,autoplay:{delay:1200,disableOnInteraction:!0},pagination:{el:".swiper-pag",clickable:!0,dynamicBullets:!0},breakpoints:{768:{loop:!0,slidesPerView:2,spaceBetween:18},1280:{loop:!0,slidesPerView:3,spaceBetween:25}}});
//# sourceMappingURL=commonHelpers.js.map