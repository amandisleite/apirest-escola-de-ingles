const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);

router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);

router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);

module.exports = router;