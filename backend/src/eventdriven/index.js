const Customer = require('./customer');
const Product = require('./product');
const PaymentService = require('./payment-service');
const InvoiceService = require('./invoice-service');
const DeliveryService = require('./delivery-service');

function main() {
  const fingerling = new Product('Fingerling Surfboard', 1000);
  const tuna = new Product('Tuna Surfboard', 1200);

  const Digdem = new Customer(2000, 'Digdem');

  const paymentService = new PaymentService();
  const invoiceService = new InvoiceService();
  const deliveryService = new DeliveryService();

  paymentService.pay(Digdem, fingerling);
  invoiceService.createInvoice(fingerling, Digdem);
  deliveryService.sendProduct(fingerling, Digdem);
}

main();
