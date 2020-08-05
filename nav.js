class Scroll {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.unit = obj.unit
        this.el.style.position = 'fixed'
        this.startHeight = obj.top > 0 ? obj.top : 0

        console.log(this.top);
        this.el.style.top = `${this.top}px`
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.top = this.scrollUnit()
        // pageYOffset- sahifani tepasidan scroll bogan joygacha oladi
        // innerHeight-broweser oynasi balanligi
        // clientHeight-element balandligini o'lchab beradi
        if (this.top - pageYOffset > 0) {
            this.el.style.top = `${this.top - pageYOffset}px`
        } else {
            this.el.style.top = 0
        }

    }
    scrollUnit() {
        if (this.unit === 'px') {
            return this.startHeight
        } else if (this.unit === '%' || this.unit == undefined) {
            return this.startHeight * window.innerHeight / 100 - this.el.clientHeight
        }
    }
}

// function func(a,b){
//     return a+b
// }

// console.log(func(1,3));

// let arrow=(a,b)=>a+b
// console.log(arrow);


const nav = new Scroll({
    el: document.querySelector('.header__nav'),
    top: 100,
    unit: '%'
})
// console.log(nav instanceof Scroll);