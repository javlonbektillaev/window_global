class Typing {
    constructor(options) {
        if (typeof options.element == "string") {
            this.el = document.querySelector(options.element)
        } else if (options.element instanceof HTMLElement) {
            this.el = options.element
        }
        this.time = options.time
        this.content = this.el.innerHTML
        this.text = ''
        this.type()

    }
    type(i = 0) {
        this.text += this.content[i]
        this.el.innerHTML = this.text

        if (this.content != this.text) {
            i++
            setTimeout(() => this.type(i), this.time)
        }

    }
}
const h1 = document.querySelector('h1')
const typing = new Typing({
    element: 'h1',
    time: 100,
})