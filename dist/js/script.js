let activePopup,popupBg=document.querySelector(".popup-bg"),closeButtons=document.querySelectorAll(".close"),basketButton=document.querySelector(".js-basket-popup"),basketPopup=document.querySelector(".items-cart"),orderButton=document.querySelector(".js-order-button"),orderPopup=document.querySelector(".order");function basket(){popupOpen(event,basketPopup),basketFunctional()}function order(){popupOpen(event,orderPopup)}function popupOpen(e,t){e.preventDefault(),checkActivePopup(),t.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function checkActivePopup(){null!=activePopup&&activePopup.classList.remove("active-popup")}function closePopup(){activePopup.classList.remove("active-popup"),popupBg.style.display="none"}function checkClick(e){e.target==popupBg&&(popupBg.style.display="none",activePopup.classList.remove("active-popup"))}basketButton.onclick=basket,orderButton.onclick=order,closeButtons.forEach(e=>{e.onclick=closePopup});let burger=document.querySelector(".burger"),menu=document.querySelector(".menu");function basketFunctional(){let e=document.querySelectorAll(".basket-content"),t=document.querySelectorAll(".product-price"),o=document.querySelectorAll(".plus"),u=document.querySelectorAll(".minus"),c=document.querySelectorAll(".custom-input"),p=document.querySelector(".total-price");console.log(t);for(let t=0;t<e.length;t++)e[t].setAttribute("data-pr-count",[t]);function n(e){e.preventDefault();let t=this.closest(".basket-content").getAttribute("data-pr-count");c[t].value=parseInt(c[t].value)+1,r()}function l(e){e.preventDefault();let t=this.closest(".basket-content").getAttribute("data-pr-count");if(0==c[t].value)return!1;c[t].value=parseInt(c[t].value)-1,r()}function r(){let o=0;for(i=0;i<e.length;i++)o+=parseInt(c[i].value)*parseInt(t[i].textContent);p.textContent=o+" грн"}o.forEach(e=>{e.onclick=n}),u.forEach(e=>{e.onclick=l})}burger.onclick=function(e){e.preventDefault(),menu.classList.toggle("burger-menu-toggle"),burger.classList.toggle("burger-toggle")};