const client = require('./client');

client.connect();
client.postUser().then(user => console.log('GUI creation of user: ', user));
client.getUsers().then(users => console.log('GUI retrieval of users: ', users));
client.deleteUser().then(user => console.log('GUI deletion of user: ', user));

// client.createAuthUser().then(user => console.log('GUI creation of authUser: ', user));
client.createAuthUserSession().then(user => console.log('GUI creation of authUserSession: ', user));
