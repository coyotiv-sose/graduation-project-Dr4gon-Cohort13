const client = require('./client');

client.connect();
client.getUsers().then(users => console.log('GUI retrieval of users: ', users));
