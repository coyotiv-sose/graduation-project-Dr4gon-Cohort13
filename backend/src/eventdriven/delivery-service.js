class DeliveryService {
  sendProduct(stockService, product, customer) {
    stockService.reduceStock(product);
    console.log(`Product ${product.name} sent to ${customer.name}`);
  }
}

module.exports = DeliveryService;
