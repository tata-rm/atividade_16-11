// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

router.get('/listar', (request, response) => {
    response.send('GET: listar produtos');
});
router.post('/cadastrar', (request, response) => {
    response.send('POST: cadastrar produtos');
});
router.put('/user/:id', (request, response) => {
    response.send('PUT: editar produtos');
});
router.delete('/user/:id', (request, response) => {
    response.send('DELETE: deletar produtos');
});

module.exports = router;