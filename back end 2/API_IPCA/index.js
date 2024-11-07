import express from 'express';
import { buscarIpca, buscarIpcaPorId, buscarIpcaPorAno } from './servicos/servico.js';

const app = express();

app.get('/historicoIPCA', (req, res) => {
  const anoIpca = req.query.ano;
  const resultado = anoIpca ? buscarIpcaPorAno(anoIpca) : buscarIpca();
  if (resultado) {
    res.json(resultado);
  } else {
    res.status(404).send({ "erro": "Nenhum historico encontrado para o ano especificado" });
  }
});

app.get('/historicoIPCA/:idIpca', (req, res) => {
  const ipca = buscarIpcaPorId(req.params.idIpca);

  if (ipca) {
    res.json(ipca);
  } else  {
    res.status(400).send({ "erro": "Elemento não encontrado" });
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});