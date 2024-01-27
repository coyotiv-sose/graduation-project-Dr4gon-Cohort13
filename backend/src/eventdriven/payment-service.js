class PaymentService {
  pay(customer, product, invoiceService, transactionService) {
    transactionService.track('PaymentService', 'Pay');
    if (customer.money >= product.price) {
      customer.money -= product.price;
      console.log(`Payment successful. Remaining money: ${customer.money}`);
      invoiceService.createInvoice(product, customer, transactionService);
    } else {
      console.log(`Insufficient funds. Current money: ${customer.money}`);
      throw Error('Insufficient funds');
    }
  }
}

module.exports = PaymentService;
