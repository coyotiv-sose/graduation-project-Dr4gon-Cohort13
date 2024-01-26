class DeliveryService {
  sendProduct(product, customer) {
    console.log(`Product ${product.name} sent to ${customer.name}`);
  }
}

module.exports = DeliveryService;
