const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Seu arquivo JSON com os dados
const middlewares = jsonServer.defaults();

// Middleware para adicionar cabeçalhos CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Usar os middlewares padrão e o roteador
server.use(middlewares);
server.use(router);

// Iniciar o servidor
server.listen(5000, () => {
  console.log('JSON Server está rodando em http://localhost:5000');
});
