# BurgerMenu

[Демо страница](https://sulky-cat.github.io/BurgerMenu/demo)

## Содержание
- [Описание](#описание)
- [Подключение](#подключение)
- [html](#html)
- [js](#js)
- [Методы](#Методы)
- [Параметры](#параметры)
- [Примеры](#примеры)

## Описание
Скрипт добавляет обработчик события клик на кнопку вызова меню.

## Подключение
Для работы скрипта необходимо дополнительно подключить класс `BodyLock`. Все скрипты и стили находятся в папке `/src`, а информация про вспомогательный класс находится [тут](https://github.com/sulky-cat/Helpers).

### CSS
Подключение стилей 
```html
<link rel="stylesheet" href="burger-menu.css">
```
### JS
Подключение скриптов без модульности:
```html
<script src="BodyLock.js"></script>
<script src="Popup.js"></script>
```
Подключение с модулями (import уже написан в файлах):
*HTML*
```html
<script type="module" src="script.js">
   import BurgerMenu from "./BurgerMenu.js"
</script>
```
*JS (BurgerMenu.js)*
```js
import BodyLock from "./BodyLock.js"
```

## HTML
Кнопка вызова: 
```html
<button class="burger-btn" type="button">
   <span></span>
</button>
```
Меню:
```html
<div data-burger>
   Бургер-меню!
</div>
```

## JS
Инициализация:
```js
const burger = new BurgerMenu(objOptions)
``` 

### Настройки 
*(objOptions):*
* `btnSelector` - селектор для кнопки вызова меню. По умолчанию: `'.burger-btn'`;
* `openHtmlClass` - Класс, который будет добавлен для `body` при открытом меню. По умолчанию: `'menu-open'`;
* `addEvent` - добавление событий. По умолчанию: `false`.

## Методы
* `burger.init()` - добавление обработчика события клик на кнопку;
* `burger.destroy()` - удаление обработчика события клик на кнопку;
* `burger.open()` - открыть меню;
* `burger.close()` - закрыть меню.

## Параметры
* `burger.btn` - кнопка вызова меню.

## Примеры
* Открытие и закрытие на другие кнопки. [Пример 2](https://sulky-cat.github.io/BurgerMenu/demo/#ex_2).
*HTML*
```html
<button class="open" type="button">Открыть</button>
<button class="close" type="button">Закрыть</button>
```
*js*
```js
const burger = new BurgerMenu()

const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')

openBtn.onclick = () => burger.open()
closeBtn.onclick = () => burger.close()
```
При такой записи, скрипт будет искать кнопку по умолчанию. 

Чтобы не вешать лишнее событие, если оно не нужно, то можно удалить обработчки события ([пример 3](https://sulky-cat.github.io/BurgerMenu/demo/#ex_3)):
```js
const burger = new BurgerMenu()
burger.destroy()

const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')

openBtn.onclick = () => burger.open()
closeBtn.onclick = () => burger.close()
```

* Добавление событий [Пример 4](https://sulky-cat.github.io/BurgerMenu/demo/#ex_4).
```js
new BurgerMenu({
   addEvent: true,
})
```