!function(){var e=document.querySelector("form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');e.addEventListener("submit",(function(e){var a=function(e){var n=1;setTimeout((function(){var o,t;(o=n+=e,t=c,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)}))).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=i}))};e.preventDefault();for(var c=parseInt(n.value),i=parseInt(o.value),r=parseInt(t.value),u=0;u<r;u+=1)a(u)}))}();
//# sourceMappingURL=03-promises.44b80cd9.js.map