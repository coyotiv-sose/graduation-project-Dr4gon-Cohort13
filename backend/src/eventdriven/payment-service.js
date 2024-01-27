const eventBus = require('./event-bus');

class PaymentService {
  pay(customer, product, transactionService) {
    transactionService.track('PaymentService', 'Pay');
    if (customer.money >= product.price) {
      customer.money -= product.price;
      console.log(`Payment successful. Remaining money: ${customer.money}`);
      eventBus.emit('payment-successful', customer, product);
    } else {
      console.log(`Insufficient funds. Current money: ${customer.money}`);
      throw Error('Insufficient funds');
    }
  }
}

module.exports = PaymentService;
