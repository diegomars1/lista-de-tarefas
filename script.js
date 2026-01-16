
    let tarefas = []
    
    function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

   
    if (tarefa == "") {
        
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "red" //erro
    } else {
        
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green"; //sucesso
        tarefas.push(tarefa)
        renderizarTarefas()
    
    }

    inputTarefa.value = "";
}

function renderizarTarefas() {
      const listaTarefas = document.getElementById("listaTarefas")
      listaTarefas.innerHTML = ""

       
        for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"
            botaoRemover.textContent= "remover"
            botaoRemover.onclick = () => removerTarefa(i)

            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent = "editar"
            botaoEditar.onclick = () => editarTarefas(i)

            novaTarefa.appendChild(botaoRemover)
            novaTarefa.appendChild(botaoEditar)

            





        listaTarefas.appendChild(novaTarefa)

    }
    atualizarBotaoLimpar()
}
function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefas()
}
function editarTarefas(i) {
     let tarefaEditada = prompt("Edite a tarefa:", tarefas[i])
     if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
     }
  
}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
        const mensagem = document.getElementById("mensagem")
        mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}

function atualizarBotaoLimpar(){
    const botaoLimpar = document.getElementById("botao_limpar")

    if (tarefas.length > 0) {
        botaoLimpar.style.display ="inline-block"
    } else {
        botaoLimpar.style.display = "none"
    }
}
atualizarBotaoLimpar()

// for itens na lista 
        //1. item inicial (iterador)
        //2. item final (condição)
        //3.se vai de 1 em 1 elemento ou se pula

        //for(iteradror, condição, frequencia)