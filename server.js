const app = require('.app');

const porta = .env.PORT || 3000;

app.listen(porta, () => console.log('Servidor conectado na porta' + porta))