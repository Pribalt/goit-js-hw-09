const t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.body;let o=null;function c(n){t.disabled=n}function a(t){n.disabled=t}t.addEventListener("click",(function(t){c(!0),a(!1),o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}),1e3)})),n.addEventListener("click",(function(){a(!0),c(!1),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.0916737b.js.map
