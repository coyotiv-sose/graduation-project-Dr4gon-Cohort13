class Customer {
  constructor(money, name) {
    this.name = name;
    this.money = money;
  }

  buy(product, paymentService) {
    paymentService.pay(this, product);
  }
}

module.exports = Customer;
