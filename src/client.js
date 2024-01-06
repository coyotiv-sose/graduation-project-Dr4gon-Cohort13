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
      let users = response.data.users;
      console.log('Client service retrieval from backend: ', users);
      let emails = users.map(user => user.email);

      const johnInfos = users[0];
      let john = new Person('Johnny', johnInfos.name, 42, 1.8, 80, '14-12-2023', johnInfos.email, 'Munich');
      console.log('Client service transformation from backend: ', john);
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  static async postUser() {
    const response = await this.client.post('/users', {
      name: 'Johnny',
      email: 'john@doe.com',
    });

    return response.data;
  }
}

module.exports = Client;
