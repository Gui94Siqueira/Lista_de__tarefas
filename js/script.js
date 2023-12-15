function adicionarTarefa() {
    const inputTarefa = document.getElementById("novaTarefa");
    const textoTarefa = inputTarefa.value.trim();

    if(textoTarefa !== "") {
        const listaTarefas = document.getElementById("listaTarefas");

        listaTarefas.innerHTML += `
            <li>
                <span>${textoTarefa}</span>
                <button onclick="marcarConcluida(this)">Concluída</button>
                <button onclick="removerTarefa(this)">Remover</button>
            </li>
        `
        document.getElementById("novaTarefa").value = '';
    }
}

function marcarConcluida(botaoConcluir) {
    const tarefa = botaoConcluir.parentNode;

    // Adicionar a classe "completed" para mudar o estilo
    tarefa.classList.toggle("completed");

    if(tarefa.classList.contains("completed")) {
        // Move a tarefa para o final da lista
        document.getElementById("listaTarefas").appendChild(tarefa);

        // Remove os botões da tarefa concluida
        const botoes = tarefa.querySelectorAll("button");
        botoes.forEach(botao => botao.remove());
    }

}

function removerTarefa(botaoRemover) {
    botaoRemover.parentNode.remove();
}