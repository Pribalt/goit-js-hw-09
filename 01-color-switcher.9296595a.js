!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.body,o=null;function a(n){t.disabled=n}function c(t){n.disabled=t}t.addEventListener("click",(function(t){a(!0),c(!1),o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}),1e3)})),n.addEventListener("click",(function(){c(!0),a(!1),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.9296595a.js.map