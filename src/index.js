const client = require('./client');

// client.connect();
// const users = client.getUsers();
// console.log('Send mail to; ', users[0].email);

console.log('Sync communication is starting');
console.log('Hi, I am the client');
console.log('I am waiting for the server to answer');
console.log(client.respond().then(response => console.log(response)));
console.log('Sync communication is over');
