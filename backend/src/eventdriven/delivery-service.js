const StockService = require('./stock-service');

class DeliveryService {
  constructor() {
    this.stockService = new StockService();
  }

  sendProduct(product, customer) {
    this.stockService.reduceStock(1);
    console.log(`Product ${product.name} sent to ${customer.name}`);
  }
}

module.exports = DeliveryService;
