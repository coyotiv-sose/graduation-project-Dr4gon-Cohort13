class TransactionService {
  transactions = [];

  track(service, action) {
    this.transactions.push(`Service: ${service}, Action: ${action}, Time: ${new Date().toLocaleString()}`);
  }

  printTransactions() {
    console.log(this.transactions);
  }
}

module.exports = TransactionService;
