!function o(r,i,a){function l(n,t){if(!i[n]){if(!r[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}t=i[n]={exports:{}};r[n][0].call(t.exports,function(t){var e=r[n][1][t];return l(e||t)},t,t.exports,o,r,i,a)}return i[n].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)l(a[t]);return l}({1:[function(t,e,n){"use strict";var o=document.querySelectorAll(".nav__link");if(o.length)for(var r=function(){return window.location.pathname.split("/")[1].split(".")[0].toLowerCase()},i=0;i<o.length;i++)r()&&function(t){t=t.getAttribute("href");return(t=-1<t.indexOf("/")?t.split("/")[1]:t).split(".")[0].toLowerCase()}(o[i])===r()&&o[i].classList.add("nav__link--active");var a,l,u=document.querySelectorAll("[data-popup-head]");if(u)for(var d=0;d<u.length;d++)u[d].addEventListener("click",function(t){t.preventDefault();t=this.getAttribute("data-popup-head");return t&&(lm_popup.init(),lm_popup.addContent('[data-popup-body="'+t+'"]'),lm_popup.show()),!1});function c(){5<=window.scrollY?l.classList.add(a):l.classList.remove(a)}a="header--fixed",l=document.querySelector(".header"),c(),window.addEventListener("scroll",c),function(t){var e=0<arguments.length&&void 0!==t?t:"En",t=document.querySelector("[data-jsw-language-btn]"),n=window.location.pathname.split(".")[0].toLowerCase();t&&t.addEventListener("click",function(t){t.preventDefault(),"/"===window.location.pathname?window.location.pathname="index"+e+".html":window.location.pathname=n.endsWith(e.toLowerCase())?n.slice(0,-2)+".html":n+e+".html"})}()},{}]},{},[1]);