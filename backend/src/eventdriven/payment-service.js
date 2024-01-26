class PaymentService {
  pay(customer, product) {
    if (customer.money >= product.price) {
      customer.money -= product.price;
      console.log(`Payment successful. Remaining balance: ${customer.money}`);
    } else {
      console.log(`Insufficient funds. Current balance: ${customer.money}`);
    }
  }
}

module.exports = PaymentService;
