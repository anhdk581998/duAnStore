class Store {
    listProducts;
    constructor() {
        this.listProducts = [];
    }

    add(newProduct){
        this.listProducts.push(newProduct);
    }
    findAll(){
        return this.listProducts;
    }
    remove(index){
            this.listProducts.splice(index, 1);
    }

    edit(index, newProduct){
            this.listProducts[index] = newProduct
    }
}