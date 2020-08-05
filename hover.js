class Hover {
    constructor(options) {
        if (typeof options.element == "string") {
            this.el = document.querySelector(options.element)
        } else if (options.element instanceof HTMLElement) {
            this.el = options.element
        }
        console.log(this.el);
        this.el.addEventListener('mouseover', () => this.hover())
    }
    hover() {
        const rand = Math.random() * 1500
        this.el.style.marginLeft = `${rand}px`
        this.el.style.marginTop = `${rand / 3}px`

    }
}

const element = document.querySelector('.header__content')

const hover = new Hover({
    element
})