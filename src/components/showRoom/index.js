let imagens = document.querySelectorAll('.small_img')
let modal_show = document.querySelector('.modal_show')
let modalImg = document.querySelector('#modal_img')
let btnClose = document.querySelector('#btn_close')
let srcVal = ""

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener('click', function () {

    srcVal = imagens[i].getAttribute('src')
    modalImg.setAttribute('src', srcVal)
    modal_show.classList.toggle('modal_active');
  })
}

btnClose.addEventListener('click', function () {
  modal_show.classList.toggle('modal_active')
})

