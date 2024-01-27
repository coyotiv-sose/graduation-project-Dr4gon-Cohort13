class InvoiceService {
  createInvoice(product, customer, transactionService) {
    transactionService.track('InvoiceService', 'CreateInvoice');
    console.log(`Invoice created for ${customer.name} for product ${product.name} with price ${product.price}`);
  }
}

module.exports = InvoiceService;
