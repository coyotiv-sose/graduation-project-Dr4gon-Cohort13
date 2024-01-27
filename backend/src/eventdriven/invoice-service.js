const eventBus = require('./event-bus');

class InvoiceService {
  constructor() {
    eventBus.on('payment-successful', (customer, product) => {
      this.createInvoice(product, customer);
    });
  }

  createInvoice(product, customer) {
    // transactionService.track('InvoiceService', 'CreateInvoice');
    console.log(`Invoice created for ${customer.name} for product ${product.name} with price ${product.price}`);
  }
}

module.exports = InvoiceService;
