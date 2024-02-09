class Product {
    #price;

    constructor(price, model, desc) {
        this.#price = price;
        this.model = model;
        this.desc = desc;
    }

    setPrice(n) {
        this.#price = n;
    }

    getPrice() {
        return this.#price;
    }
}

let p = new Product(123, 'xyz', 'abc');
console.log(p);  // Output: Product { model: 'xyz', desc: 'abc' }

// Try to access the private field directly (will result in an error)
// console.log(p.#price);  // This would throw an error

// Access and modify the private field using methods
console.log(p.getPrice());  // Output: 123
p.setPrice(100);
console.log(p.getPrice());  // Output: 100
console.log(p);