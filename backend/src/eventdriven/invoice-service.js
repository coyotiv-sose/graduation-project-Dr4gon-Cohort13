class InvoiceService {
  createInvoice(product, customer) {
    console.log(`Invoice created for ${customer.name} for product ${product.name} with price ${product.price}`);
  }
}

module.exports = InvoiceService;
