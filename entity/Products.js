class Products {
    id;
    name;
    quantity;
    price;
    constructor(idInput, nameInput, quantityInput,priceInput) {
        this.id = idInput;
        this.name = nameInput;
        this.quantity = quantityInput;
        this.price = priceInput;
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get quantity() {
        return this.quantity;
    }

    set quantity(value) {
        this.quantity = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }
}