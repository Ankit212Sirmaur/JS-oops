// what is new keyword => it is used to create a new empty object of the class

class Product{
    constructor(price, model, desc){
        this.price = price;
        this.model = model;
        this.desc = desc; 
        // by default constructor return object properties = > this
        // return 10; // return type of primitive data type doesn't affect in return of constructor
        // js constructor can't be overloaded
    }
    /**
     * abstraction is used to hide details from the user => 
     * this can be used via access modifiers
     */
}

let p = new Product();