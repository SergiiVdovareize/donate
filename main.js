(()=>{let e;const t=e=>{e.classList.remove("copied")};(()=>{const c=document.getElementById("card-number-block");c.onclick=(()=>{(c=>{clearTimeout(e),c.classList.add("copied");const o=document.getElementById("card-number").innerText.replaceAll(/\s/g,"");navigator.clipboard.writeText(o),e=setTimeout(()=>{t(c)},1e4)})(c)})})()})();