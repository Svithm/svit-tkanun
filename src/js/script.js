//popups 
let popupBg = document.querySelector(".popup-bg"), 
    closeButtons = document.querySelectorAll(".close"),
    basketButton = document.querySelector(".js-basket-popup"),
    basketPopup = document.querySelector(".items-cart"),
    orderButton = document.querySelector(".js-order-button"),
    orderPopup = document.querySelector(".order"),
    activePopup

basketButton.onclick = basket
    
function basket (){
  popupOpen(event, basketPopup)
  basketFunctional()
}

orderButton.onclick = order
    
function order (){
  popupOpen(event, orderPopup)
}

function popupOpen (event, popup){
  event.preventDefault()
  checkActivePopup()
  popup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

function checkActivePopup (){
  if(activePopup != undefined){
    activePopup.classList.remove("active-popup")
  }
}

closeButtons.forEach(element => {
  element.onclick = closePopup
})

function closePopup (){
  activePopup.classList.remove("active-popup")
  popupBg.style.display = "none"
}

function checkClick (e){
  if(e.target == popupBg){
    popupBg.style.display = "none"
    activePopup.classList.remove("active-popup")
  } 
}

//filters 
let filters = document.querySelectorAll(".filter"),
    filtersContent

filters.forEach((e) => {
  e.onclick = filterOpen
})

function filterOpen (event){
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

//burger menu 

let burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu")

burger.onclick = function (event){
  event.preventDefault() 
  menu.classList.toggle("burger-menu-toggle")
  burger.classList.toggle("burger-toggle")
}

//product +/- 

function basketFunctional (){
  let product = document.querySelectorAll(".basket-content"),
      productPrice = document.querySelectorAll(".product-price"),
      plus = document.querySelectorAll(".plus"),
      minus = document.querySelectorAll(".minus"),
      productCount = document.querySelectorAll(".custom-input"),
      totalPrice = document.querySelector(".total-price")
  
  console.log(productPrice)
  for(let i = 0; i < product.length; i++){
    product[i].setAttribute("data-pr-count", [i]) 
  }


  plus.forEach((e)=>{
    e.onclick = productPlus
  })

  minus.forEach((e)=>{
    e.onclick = productMinus
  })


  function productPlus (event){
    event.preventDefault()
    let number = this.closest(".basket-content").getAttribute("data-pr-count")
    productCount[number].value = parseInt(productCount[number].value) + 1
    priceCount()
  }
  
  function productMinus (event){
    event.preventDefault()
    let number = this.closest(".basket-content").getAttribute("data-pr-count")
    if(productCount[number].value == 0){
      return false
    }
    productCount[number].value = parseInt(productCount[number].value) - 1
    priceCount()
  }

  function priceCount (){
    let price = 0
    for(i = 0; i < product.length; i++){
      price += parseInt(productCount[i].value) * parseInt(productPrice[i].textContent)
    }
    totalPrice.textContent = `${price} грн`
  }
}
