class StockService {
  stock = 2;

  reduceStock(amount) {
    this.stock -= amount;
    console.log(`Stock reduced by ${amount}. Current stock: ${this.stock}`);
  }
}

module.exports = StockService;
