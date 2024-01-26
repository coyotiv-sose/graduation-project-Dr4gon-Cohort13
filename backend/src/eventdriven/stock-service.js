class StockService {
  products = [];

  addToStock(product) {
    this.products.push(product);
    console.log(`Stock increased by ${product.name}. Current stock:`, this.products);
  }

  reduceStock(boughtProduct) {
    this.products = this.products.filter(product => {
      return product.name !== boughtProduct.name;
    });
    console.log(`Stock reduced by ${boughtProduct.name}. Current stock:`, this.products);
  }
}

module.exports = StockService;
