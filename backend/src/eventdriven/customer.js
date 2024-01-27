const TransactionService = require('./transaction-service');

class Customer {
  constructor(money, name) {
    this.name = name;
    this.money = money;
  }

  buy(product, paymentService, invoiceService, transactionService) {
    transactionService.track('Customer', 'Buy');
    paymentService.pay(this, product, invoiceService, transactionService);
  }
}

module.exports = Customer;
