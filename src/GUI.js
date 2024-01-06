const client = require('./client');

client.connect();
client.getUsers().then(users => console.log('GUI retrieval of users: ', users));
client.postUser().then(user => console.log('GUI creation of user: ', user));
