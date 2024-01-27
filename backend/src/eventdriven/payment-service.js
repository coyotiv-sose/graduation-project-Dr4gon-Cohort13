class PaymentService {
  pay(customer, product, invoiceService) {
    if (customer.money >= product.price) {
      customer.money -= product.price;
      console.log(`Payment successful. Remaining money: ${customer.money}`);
      invoiceService.createInvoice(product, customer);
    } else {
      console.log(`Insufficient funds. Current money: ${customer.money}`);
      throw Error('Insufficient funds');
    }
  }
}

module.exports = PaymentService;
