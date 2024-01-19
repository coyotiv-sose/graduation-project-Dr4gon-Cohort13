const client = require('./client');

client.connect();
client.postUser().then(user => console.log('GUI creation of user: ', user));
client.getUsers().then(users => console.log('GUI retrieval of users: ', users));
client.deleteUser().then(user => console.log('GUI deletion of user: ', user));
client.createAuthUser().then(user => console.log('GUI creation of auth user: ', user));
client.login().then(user => console.log('GUI login of auth user: ', user));

client.createWelcomeMessage().then(message => console.log('GUI creation of welcome message: ', message));
