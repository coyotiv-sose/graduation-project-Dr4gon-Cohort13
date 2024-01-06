const client = require('./client');

client.connect();
const users = client.getUsers();
