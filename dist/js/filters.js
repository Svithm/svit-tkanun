let filtersContent,filters=document.querySelectorAll(".filter");function filterOpen(e){for(let e=0;e<filters.length;e++)filters[e]!=this&&filters[e].querySelector(".filter-content").classList.remove("active-filter-content");if(e.target==this)return filtersContent=this.querySelector(".filter-content"),filtersContent.classList.toggle("active-filter-content"),!1;this.childNodes.forEach(r=>{if(e.target!=r)return!1;filtersContent=e.target.closest(".filter").querySelector(".filter-content"),filtersContent.classList.toggle("active-filter-content")})}filters.forEach(e=>{e.onclick=filterOpen});let priceStart=document.querySelector("#priceStart"),priceFinish=document.querySelector("#priceFinish"),priceNumberStart=document.querySelector("#priceNumberStart"),priceNumberFinish=document.querySelector("#priceNumberEnd"),priceNumberStartWrap=document.querySelector(".priceNumberStart"),priceNumberEndWrap=document.querySelector(".priceNumberEnd");function priceStartChange(){if(priceStart.value>priceFinish.value)return!1;priceNumberStartWrap.innerHTML=`<input id="priceNumberStart" type="number" name="min-price" value="${priceStart.value}">`}function priceFinishChange(){if(priceFinish.value<priceStart.value)return!1;priceNumberEndWrap.innerHTML=`<input id="priceNumberEnd" type="number" name="max-price" value="${priceFinish.value}">`}function priceNumberStartChange(){if(priceNumberStart.value>priceNumberFinish.value||priceNumberFinish.value<priceStart.getAttribute("min")||priceNumberFinish.value>priceStart.getAttribute("max"))return!1;priceStart.setAttribute("value",priceNumberStart.value)}function priceNumberFinishChange(){if(priceNumberFinish.value<priceNumberStart.value)return!1;priceNumberFinish.value<priceStart.getAttribute("min")?priceNumberEndWrap.innerHTML=`<input id="priceNumberEnd" type="number" name="max-price" value="${priceStart.getAttribute("min")}">`:priceNumberFinish.value>priceStart.getAttribute("max")&&(priceNumberEndWrap.innerHTML=`<input id="priceNumberEnd" type="number" name="max-price" value="${priceStart.getAttribute("max")}">`),priceFinish.setAttribute("value",priceNumberFinish.value)}priceStart.oninput=priceStartChange,priceFinish.oninput=priceFinishChange,priceNumberStart.oninput=priceNumberStartChange,priceNumberFinish.oninput=priceNumberFinishChange;