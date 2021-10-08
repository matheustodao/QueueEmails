const Mail = require('../libs/Mail');

module.exports = {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { name, email, products } = data;
    const layout = `
      <!DOCTYPE html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="background-color: #212121; color: #FFFFFF; padding-top: 24px;" >
        <header style="font-size: 18px; margin-bottom: 32px;">
          <div>
            <h1 style="text-align: center">Olá ${name}, tudo bem?</h1>
          </div>
        </header>
        <main style="margin: auto;">
          <div
            style="
              background-color: #121212; display: block; width: 80%;
              margin: auto; border-radius: 10px; padding: 38px;
              "
            >
            <p style="font-family: sans-serif; color: #ddd; margin-bottom: 24px;">
              Temos ${products.length} produtos disponiveis na nossa loja!!
            </p>
            <a
              href="https://vtexstore.codeby.com.br/https://vtexstore.codeby.com.br/"
              style="
                padding: 18px 24px; background-color: #87bf04; color: #353535; text-decoration: none;
                border-radius: 8px; margin-top: 24px; font-family: sans-serif;
              "
            >
              Vem conferir!
            </a>
          </div>
        </main>
     </body>
    `

    await Mail.sendMail({
      from: 'Matheus Queue <no-reply@matheusqueu.com>',
      to: `${name} <${email}>`,
      subject: 'Codeby Store',
      headers: {
        'X-Total-Products': `${products.length}`
      },
      html: layout,
    })
  }
}
