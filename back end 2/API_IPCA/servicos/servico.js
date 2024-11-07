import  historicoInflacao  from '../dados/dados.js';

export const buscarIpca = () => {
  return historicoInflacao;
}

export const buscarIpcaPorId = (id) => {
  const idIpca = parseInt(id);
  return historicoInflacao.find(ipca => ipca.id === idIpca);
};

export const buscarIpcaPorAno = (anoIpca) => {
    return historicoInflacao.filter(ipca=> ipca.ano == anoIpca)

}