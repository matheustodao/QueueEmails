const axios = require('axios').default;

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await axios(`${this.baseURL}${path}`);
    return response;
  }
}

module.exports = HttpClient;
