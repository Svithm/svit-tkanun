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

//burger menu 

let burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu")

burger.onclick = function (event){
  event.preventDefault() 
  menu.classList.toggle("burger-menu-toggle")
  burger.classList.toggle("burger-toggle")
}

//product +/- 
basketFunctional()

function basketFunctional (){
  let product = document.querySelectorAll(".basket-content"),
      productPrice = document.querySelectorAll(".product-price"),
      plus = document.querySelectorAll(".plus"),
      minus = document.querySelectorAll(".minus"),
      productCount = document.querySelectorAll(".custom-input"),
      totalPrice = document.querySelector(".total-price")
  
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

let cardPlus = document.querySelector(".card.plus"),
    cardMinus = document.querySelector(".card.minus"),
    cardProductCount = document.querySelector(".card.custom-input")

cardPlus.onclick = cardPlusClick
cardMinus.onclick = cardMinusClick

function cardPlusClick (){
  cardProductCount.value = parseInt(cardProductCount.value) + 1
}

function cardMinusClick (){
  if(cardProductCount.value > 0){
    cardProductCount.value = parseInt(cardProductCount.value) - 1
  }
}