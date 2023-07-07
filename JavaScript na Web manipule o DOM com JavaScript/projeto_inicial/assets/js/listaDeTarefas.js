const criatTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');
  const conteudo = `<p class="content">${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(botaoConcluir());

  lista.appendChild(tarefa);

  input.value = '';
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criatTarefa);

const botaoConcluir = () => {
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
