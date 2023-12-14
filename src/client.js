const Axios = require('axios');

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

async function getUsers() {
  try {
    const response = await client.get('/users');
    let users = response.data.users;
    // console.log(users);
    let emails = users.map(user => user.email);
    console.log(emails);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
