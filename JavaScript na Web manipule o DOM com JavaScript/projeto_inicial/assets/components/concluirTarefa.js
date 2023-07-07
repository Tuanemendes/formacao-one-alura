const BotaoConcluir = () => {
  const btnConcluir = document.createElement('button');
  btnConcluir.classList.add('check-button');
  btnConcluir.innerText = 'concluir';
  btnConcluir.addEventListener('click', concluirTarefa);
  return btnConcluir;
};

const concluirTarefa = (evento) => {
  const botaoConcluir = evento.target;

  const tarefaCompleta = botaoConcluir.parentElement;

  tarefaCompleta.classList.toggle('done');
};

export default BotaoConcluir;
