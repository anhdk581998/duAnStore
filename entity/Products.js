class Products {
    _id;
    _name;
    _quantity;
    _price;
    constructor(idInput, nameInput, quantityInput,priceInput) {
        this._id = idInput;
        this._name = nameInput;
        this._quantity = quantityInput;
        this._price = priceInput;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}