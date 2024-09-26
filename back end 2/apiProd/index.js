const express = require('express');
const colecaoComidas = require('./comidas/comidas.js');

const app = express();

app.get('/comidas', (req, res) => {
    res.json(colecaoComidas.colecaoComidas)
});

app.get('/comidas/:idcomidas', (req, res) => { 
    const idCOMIDAS = parseInt(req.params.idcomidas);
    let mensagemErro = '';
    let comidas;

    if (!(isNaN(idcomidas))) {
        comidas = colecaoComidas.colecaoComidas.find(u => u.id === idCOMIDAS); 
        if (!comidas) {
            mensagemErro = 'COMIDAS não encontrada!';
        }
    } else {
        mensagemErro = 'Requisição inválida!';
    }
    
    if (comidas) {
        res.json(comidas); 
    } else {
        res.status(404).json({'erro': mensagemErro})
    }
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080 em:");
});
