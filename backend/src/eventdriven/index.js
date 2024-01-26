const Customer = require('./customer');
const Product = require('./product');
const PaymentService = require('./payment-service');

function main() {
  const fingerling = new Product('Fingerling Surfboard', 1000);
  const tuna = new Product('Tuna Surfboard', 1200);

  const Digdem = new Customer(2000);

  const paymentService = new PaymentService();

  paymentService.pay(Digdem, fingerling);
}

main();
