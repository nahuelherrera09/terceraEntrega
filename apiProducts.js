class apiProducts {
    constructor(){
        this.products = []
        this.id = 0
    }

    findProduct(id){
        const product = this.products.find((product) => product.id == id);
        return product
    }

    allProducts(){
        return[...this.products]
    }

    saveProduct(){
        const newProd = {...prod, id: ++this.id};
        this.products.push(newProd)
    }

    deleteById(id){
        const findId = this.products.findIndex(p => p.id === id);
        this.products.splice(findId,1)
    }
    
}

module.exports = {apiProducts}