const HttpClient = require('./utils/HttpClient');

class VtexService {
  constructor() {
    this.URL = 'https://vtexstore.codeby.com.br'
    this.httpClient = new HttpClient(this.URL)
  }

  async listProducts() {
    return this.httpClient.get('/api/catalog_system/pub/products/search');
  }
}

module.exports = new VtexService();
