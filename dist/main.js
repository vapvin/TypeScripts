class Cart {
    constructor(user) {
        this.user = user;
        this.store = {};
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
const cart1 = new Cart({ name: "john" });
const cart2 = new Cart({ name: "jay" });
class Foo {
    constructor(message) {
        this.message = message;
    }
    log() {
        console.log(this.message);
    }
}
let foo = {};
foo["Hello"] = new Foo("World");
foo["Hello"].log();
//# sourceMappingURL=main.js.map