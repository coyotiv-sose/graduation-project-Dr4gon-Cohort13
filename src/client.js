const Axios = require('axios');
const Person = require('./person');

class Client {
  static connect() {
    this.client = Axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 1000,
      headers: { 'X-Custom-Header': 'foobar' },
    });
  }

  static async getUsers() {
    try {
      const response = await this.client.get('/users');
      let users = response.data;
      console.log('Client service retrieval from backend: ', users);
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  static async postUser() {
    const response = await this.client.post('/users', {
      nickName: 'Johnny',
      email: 'john@doe.com',
    });

    return response.data;
  }
}

module.exports = Client;
