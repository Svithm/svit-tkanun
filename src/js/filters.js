//filters 
let filters = document.querySelectorAll(".filter"),
    filtersContent

filters.forEach((e) => {
  e.onclick = filterOpen
})

function filterOpen (event){
  for(let i = 0; i < filters.length; i++){
    if(filters[i] != this){
      filters[i].querySelector(".filter-content").classList.remove("active-filter-content")
    }
  }
  if(event.target == this){
    filtersContent = this.querySelector(".filter-content")
    filtersContent.classList.toggle("active-filter-content") 
    return false 
  }
   
  this.childNodes.forEach((child)=>{
    if(event.target == child){
      filtersContent = event.target.closest(".filter").querySelector(".filter-content")
      filtersContent.classList.toggle("active-filter-content") 
    }else{
      return false
    }

  })
}

//price range 
let priceStart = document.querySelector("#priceStart"),
    priceFinish = document.querySelector("#priceFinish"),
    priceNumberStart = document.querySelector("#priceNumberStart"),
    priceNumberFinish = document.querySelector("#priceNumberEnd"),
    priceNumberStartWrap = document.querySelector(".priceNumberStart"),
    priceNumberEndWrap = document.querySelector(".priceNumberEnd")

priceStart.oninput = priceStartChange
priceFinish.oninput = priceFinishChange  
priceNumberStart.oninput = priceNumberStartChange
priceNumberFinish.oninput = priceNumberFinishChange

function priceStartChange (){
  if(priceStart.value > priceFinish.value){
    return false
  }
  priceNumberStartWrap.innerHTML = `<input id="priceNumberStart" type="number" name="min-price" value="${priceStart.value}">`
}

function priceFinishChange (){
  if(priceFinish.value < priceStart.value){
    return false
  }
  priceNumberEndWrap.innerHTML = `<input id="priceNumberEnd" type="number" name="max-price" value="${priceFinish.value}">`
}

function priceNumberStartChange (){
  if(priceNumberStart.value > priceNumberFinish.value  || priceNumberFinish.value < priceStart.getAttribute("min") || priceNumberFinish.value > priceStart.getAttribute("max")){
    return false
  }
  priceStart.setAttribute("value", priceNumberStart.value)
}

function priceNumberFinishChange (){
  if(priceNumberFinish.value < priceNumberStart.value){
    return false
  }else if(priceNumberFinish.value < priceStart.getAttribute("min")){
    priceNumberEndWrap.innerHTML = `<input id="priceNumberEnd" type="number" name="max-price" value="${priceStart.getAttribute("min")}">`
  }else if(priceNumberFinish.value > priceStart.getAttribute("max")){
    priceNumberEndWrap.innerHTML = `<input id="priceNumberEnd" type="number" name="max-price" value="${priceStart.getAttribute("max")}">`
  }  
  priceFinish.setAttribute("value", priceNumberFinish.value)
}