!function(){"use strict";let e,t,c,s=0,r=!1;const o=e=>{document.querySelector("#idCircleImage").setAttribute("src",`/images/circles/circle_${e||s}.svg`)};let l=e=>{s<345?s+=15:s=0,o(s)};document.onkeypress=t=>{let c=t.key;switch(c){case"a":r=!r,r?e=setInterval(l,100):clearInterval(e);break;case"r":s<360?s+=15:s=0,o(s);break;case"l":s<=0?s=345:s-=15,o(s);break;default:console.info(`key: ${c} pressed`)}};let n=e=>{let t=document.querySelector("#idDinoImage");c&&c<8?c+=1:c=1,t.setAttribute("src",`/images/dino/Run (${c}).png`)};document.body.onload=e=>{console.info("loaded!"),o(s),t=setInterval(n,62.5)}}();
//# sourceMappingURL=bundle.js.map
