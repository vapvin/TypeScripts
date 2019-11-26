interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class Cart {
  user: User;
  store: object;

  constructor(user: User) {
    this.user = user;
    this.store = {};
  }

  put(id: string, product: Product) {
    this.store[id] = product;
  }

  get(id: string) {
    return this.store[id];
  }
}

const cart1 = new Cart({ name: "john" });
const cart2 = new Cart({ name: "jay" });
