const VtexRepository = require('../repositories/VtexRepository');
const Queue = require('../libs/Queue');

class vtexProductController {
  async store(request, response) {
    const { name, email } = request.body;

    const resRepository = await VtexRepository.listProducts();
    const products = resRepository.data;
    response.setHeader('X-Total-Products', `${products.length}`);

    // Add mail queue <-> Adiciona o e-mail na fila
    await Queue.add('RegistrationMail', { name, email, products });

    response.json({ ok: 'Verifica o seu e-mail.' });
  }
}

module.exports = new vtexProductController();
