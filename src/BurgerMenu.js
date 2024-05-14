import BodyLock from "./BodyLock.js";

export default class BurgerMenu {
   static defaultOpt = {
      btnSelector: '.burger-btn',
      openHtmlClass: 'menu-open',
      addEvent: false,
   }
   /**
    * Конструктор класса.
    * @param {object} opt Объект с настройками класса.
    */
   constructor(opt) {
      this.opt = { ...BurgerMenu.defaultOpt, ...opt }
      this.onClick = this.onClick.bind(this)
      this.init()
   }
   /**
    * Установка атрибута и события "клик" на кнопку.
    */
   init() {
      try {
         this.btn = document.querySelector(this.opt.btnSelector)
         this.btn.setAttribute('aria-expanded', 'false')
         this.btn.addEventListener('click', this.onClick)
      } catch {
         throw new Error(`Нет указанной кнопки с селектором ${this.opt.btnSelector}.`)
      }
   }
   /**
    * Удаление атрибута и события "клик" на кнопке.
    */
   destroy() {
      this.btn.removeAttribute('aria-expanded')
      this.btn.removeEventListener('click', this.onClick)
   }
   onClick() {
      if (this.isOpen)
         this.close()
      else
         this.open()
   }
   /**
    * Открытие меню.
    */
   open() {
      if (this.isOpen) return
      this.btn.setAttribute('aria-expanded', 'true')
      BodyLock.on()
      document.documentElement.classList.add(this.opt.openHtmlClass)

      if (this.opt.addEvent) {
         const customEvent = new CustomEvent('onOpenBurger', { detail: this, })
         document.body.dispatchEvent(customEvent)
      }
   }
   /**
    * Закрытие меню.
    */
   close() {
      if (!this.isOpen) return
      this.btn.setAttribute('aria-expanded', 'false')
      BodyLock.off()
      document.documentElement.classList.remove(this.opt.openHtmlClass)

      if (this.opt.addEvent) {
         const customEvent = new CustomEvent('onCloseBurger', { detail: this, })
         document.body.dispatchEvent(customEvent)
      }
   }
   /**
    * Получение состояния меню.
    */
   get isOpen() {
      return document.documentElement.classList.contains(this.opt.openHtmlClass)
   }
}