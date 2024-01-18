const Axios = require('axios');
const Person = require('./model/person');

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
      height: 1.8,
    });

    return response.data;
  }

  static async deleteUser() {
    const response = await this.client.delete('/users/Johnny');

    return response.data;
  }

  static async createAuthUser() {
    const newUser = await this.client.post('/authentication/newUser', {
      email: 'john@doe.com',
      nickName: 'Johnny',
      password: '1234',
    });

    return newUser;
  }
}

module.exports = Client;
