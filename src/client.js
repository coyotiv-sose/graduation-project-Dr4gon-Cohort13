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
      // console.log(users);
      let emails = users.map(user => user.email);
      console.log(emails);

      const johnInfos = users[0];
      let john = new Person('Johnny', johnInfos.name, 42, 1.8, 80, '14-12-2023', johnInfos.email, 'Munich');
      console.log(john);
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  static async respond() {
    return new Promise(resolve => setTimeout(resolve, 10000, 'Async communication is over'));
  }
}

module.exports = Client;
