// {}-literalny obyekt
// class-kalit sozi bn yaratiladi hamda {} orqali
class Human {
    constructor(obj) {
        this.name = obj.who
    }
    hello() {
        console.log('hello' + this.name);
    }
}

//extends-kalit sozi orqali nasledovatsa qisa boladi
class Woman extends Human {
    // super()- u nasledivaniya bovotgan obyektdan info olib beradi
    constructor(ayol) {
        super(ayol)
        this.power = 'weak',
        this.gender='female'
    }
}
class Man extends Human {
 
    constructor(erkak) {
        super(erkak)
        this.kayp=erkak.choyxona
        this.gender='male'
    }
}


const man = new Man({
    who: 'erkak',
    choyxona: 'vip'
})

const woman = new Human({
    who: 'ayol',
    hair: 'long'
})

console.log(man);
console.log(woman);
