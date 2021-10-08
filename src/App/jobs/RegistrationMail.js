const Mail = require('../libs/Mail');

module.exports = {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { name, email, products } = data;

    await Mail.sendMail({
      from: 'Matheus Queue <no-reply@matheusqueu.com>',
      to: `${name} <${email}>`,
      subject: 'Codeby Store',
      html: `
      <header>
        <h1>Olá ${name}, tudo bem?</h1>
      </header>
      <i>No nosso estoque temos ${products.length} produtos.</i>
      <a href="https://vtexstore.codeby.com.br/">Venha conferir</a>
      `,
    })
  }
}
