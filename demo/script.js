import BurgerMenu from "../src/BurgerMenu.js";

const burger = new BurgerMenu({
   addEvent: true,
})

// Ex 2
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')

openBtn.onclick = () => burger.open()
closeBtn.onclick = () => burger.close()

// Ex 3
const initBtn = document.querySelector('.init')
const destroyBtn = document.querySelector('.destroy')

initBtn.onclick = () => burger.init()
destroyBtn.onclick = () => burger.destroy()

// Ex 4
document.body.addEventListener('onOpenBurger', (e) => {
   console.log(e.type, e.detail);
})
document.body.addEventListener('onCloseBurger', (e) => {
   console.log(e.type, e.detail);
})