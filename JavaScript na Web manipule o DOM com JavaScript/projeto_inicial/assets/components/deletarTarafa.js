const BotaoDeletar = () => {
  const btnDeletar = document.createElement('button');

  btnDeletar.innerText = 'remover';
  btnDeletar.addEventListener('click', removerTarefa);
  return btnDeletar;
};

const removerTarefa = (evento) => {
  const botaoRemover = evento.target;
  const tarafaCompleta = botaoRemover.parentElement;
  tarafaCompleta.remove();

  return botaoRemover;
};

export default BotaoDeletar;
