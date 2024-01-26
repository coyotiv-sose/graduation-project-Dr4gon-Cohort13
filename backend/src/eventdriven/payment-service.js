class PaymentService {
  pay(customer, product) {
    if (customer.money >= product.price) {
      customer.money -= product.price;
      console.log(`Payment successful. Remaining money: ${customer.money}`);
    } else {
      console.log(`Insufficient funds. Current money: ${customer.money}`);
    }
  }
}

module.exports = PaymentService;
