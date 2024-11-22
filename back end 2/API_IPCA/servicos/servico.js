import  historicoInflacao  from '../dados/dados.js';

export const buscarIpca = () => {
  return historicoInflacao;
}

export const buscarIpcaPorId = (id) => {
  const idIpca = parseInt(id);
  return historicoInflacao.find(ipca => ipca.ano === idIpca);
};

export const buscarIpcaPorAno = (anoIpca) => {
    return historicoInflacao.filter(ipca=> ipca.ano == anoIpca)

}

let listaInflacao = historicoInflacao.filter((ipca) => {
  if (anoInicial == anoFinal) {
      if (ipca.mes <= mesFinal && ipca.mes >= mesInicial && ipca.ano >= anoInicial && ipca.ano <= anoFinal) {
          return ipca
      }
  }
  else if (ipca.ano == anoInicial && ipca.mes >= mesInicial ||
      ipca.ano > anoInicial && ipca.ano < anoFinal ||
      ipca.ano == anoFinal && ipca.mes <= mesFinal) {
      return ipca
  }
})

let juros = 1;


listaInflacao.forEach((ipca) => {
  juros = juros * (1 + (ipca.ipca * 0.01))
})

return (juros * valor)