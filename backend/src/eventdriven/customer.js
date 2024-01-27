class Customer {
  constructor(money, name) {
    this.name = name;
    this.money = money;
  }

  buy(product, paymentService, invoiceService) {
    paymentService.pay(this, product, invoiceService);
  }
}

module.exports = Customer;
