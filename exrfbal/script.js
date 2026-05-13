function adicionarTarefa() {
    // let mensagem = "Tarefa Adicionada com sucesso!"

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    if (tarefa.trim() === "") {
       
        document.getElementById("mensagem").textContent = "Tarefa Não Adicionada."

        return
    }

    document.getElementById("mensagem").textContent = "Tarefa Adicionada com Sucesso!";

let listaTarefas = document.getElementById("listaTarefas")
let novaTarefa = document.createElement("li")

    listaTarefas.appendChild(novaTarefa).textContent = tarefa;

    inputTarefa.value = ""
} 

