let slides = document.querySelectorAll(".card-slides p"),
    arrows = document.querySelectorAll(".arr"),
    arrUp = document.querySelector(".arr-up"),
    arrDown = document.querySelector(".arr-down"),
    sliderLine = document.querySelector(".card-slides"),
    img = document.querySelectorAll(".card-slides p"),
    mainImg = document.querySelector(".card-main-img a"),
    imgBg = document.querySelector(".full-img"),
    close = document.querySelector(".close-img")

if(slides.length > 3){
  arrows.forEach((e) => {
    e.style.display = "flex"
  })
}

arrUp.onclick = slideUp
arrDown.onclick = slideDown

function slideUp (event){
  let img = document.querySelectorAll(".card-slides p")
  event.preventDefault()
  deletedImg = img[img.length - 1]
  sliderLine.removeChild(img[img.length - 1])
  sliderLine.insertBefore(deletedImg, sliderLine.firstElementChild)
}

function slideDown (event){
  let img = document.querySelectorAll(".card-slides p")
  event.preventDefault()
  deletedImg = img[0]
  sliderLine.removeChild(img[0])
  sliderLine.appendChild(deletedImg)
}

img.forEach((e) => {
  e.onclick = showImg
})

function showImg (event){
  event.preventDefault()
  // let src = this.querySelector("img").getAttribute("src")
  mainImg.innerHTML = `<img src="${this.querySelector("img").getAttribute("src")}" alt="головне фото товару">`
}

mainImg.onclick = openImg

function openImg (event){
  event.preventDefault()
  imgBg.style.display = "block"
  imgBg.querySelector(".full-main-img").innerHTML = this.querySelector("img").outerHTML
  close.onclick = bgClose
  imgBg.onclick = bgClose
}
function bgClose (event){
  if(event.target != imgBg.querySelector("img")){
    imgBg.style.display = "none"
  }
}