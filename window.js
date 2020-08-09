class Window1 {
    constructor(options) {

        if (typeof options.button == "string") {
            this.button = document.querySelector(options.button)
            
        } else if (options.button instanceof HTMLElement) {
            this.button = options.button

        }

        if (typeof options.headerMenu == "string") {           
            this.menu = document.querySelector(options.headerMenu)          
        } else if ( options.headerMenu instanceof HTMLElement) {     
            this.menu = options.headerMenu        
        }  

        if (typeof options.close == "string") {
            this.close = document.querySelector(options.close)
        } else if (options.close instanceof HTMLElement) {
            this.close = options.close
        }
        this.unit = options.unit
        this.width = options.width

        this.button.addEventListener('click', () => this.window2())
        this.close.addEventListener('click', () => {
            this.menu.style.left='-100%'
            this.menu.style.transition='1s'
        })
    }
    window2() {
        this.menu.style.left = '0%'
        this.menu.style.width = this.width + this.unit
    }
}

const button = document.querySelector('button')
const headerMenu = document.querySelector(".header__menu")
const close = document.querySelector(".header__menu-link")

const window1 = new Window1({
    button : 'button',
    headerMenu: '.header__menu',
    close,
    width: 50,
    unit: '%'
})