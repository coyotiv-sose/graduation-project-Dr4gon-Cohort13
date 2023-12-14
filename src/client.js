const Axios = require('axios');

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

async function getUsers() {
  try {
    const response = await client.get('/users');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
