function criarTarefa(descricao, prioridade, status) {
    const itemTarefa = document.createElement("li");
  
    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = descricao;
  
    const prioridadeSpan = document.createElement("span");
    prioridadeSpan.textContent = prioridade;
    itemTarefa.appendChild(textoTarefa);
    itemTarefa.appendChild(prioridadeSpan);



    


    if (prioridade === 'alta') {
        itemTarefa.classList.add('tarefa-prioridade-alta');
    } else if (prioridade === 'media') {
        itemTarefa.classList.add('tarefa-prioridade-media');
    } else if (prioridade === 'baixa') {
        itemTarefa.classList.add('tarefa-prioridade-baixa');
    }
  
    if (status === 'concluida') {
        itemTarefa.classList.add('tarefa-concluida');
    }
  
    listaTarefas.appendChild(itemTarefa);
  
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("remover");
    itemTarefa.appendChild(botaoRemover);
  
    botaoRemover.addEventListener("click", () => {
        itemTarefa.remove();
        ordenarTarefas();
    });
  
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("editar");
    itemTarefa.appendChild(botaoEditar);
  
    botaoEditar.addEventListener("click", () => {
        document.getElementById('edicaoTarefa').style.display = 'block';
        document.getElementById('novaDescricao').value = textoTarefa.textContent;
        document.getElementById('novaPrioridade').value = prioridadeSpan.textContent;
        document.getElementById('formEditarTarefa').onsubmit = (event) => {
            event.preventDefault();
            const novaDescricao = document.getElementById('novaDescricao').value.trim();
            const novaPrioridade = document.getElementById('novaPrioridade').value;
            if (novaDescricao !== "") {
                textoTarefa.textContent = novaDescricao;
                prioridadeSpan.textContent = novaPrioridade;
                itemTarefa.classList.remove('tarefa-prioridade-alta', 'tarefa-prioridade-media', 'tarefa-prioridade-baixa');
                if (novaPrioridade === 'alta') {
                    itemTarefa.classList.add('tarefa-prioridade-alta');
                } else if (novaPrioridade === 'media') {
                    itemTarefa.classList.add('tarefa-prioridade-media');
                } else if (novaPrioridade === 'baixa') {
                    itemTarefa.classList.add('tarefa-prioridade-baixa');
                }
                document.getElementById('edicaoTarefa').style.display = 'none';
                ordenarTarefas();
            }
        };
    });
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fas", "fa-check", "check-icon");
    if (status === 'concluida') {
        checkIcon.style.display = 'inline-block';
    } else {
        checkIcon.style.display = 'none';
    }
    itemTarefa.appendChild(checkIcon);

    itemTarefa.addEventListener('click', function() {
        alternarStatusTarefa(itemTarefa);
    });
    
    textoTarefa.addEventListener('click', function(event) {
        event.stopPropagation(); 
        alternarStatusTarefa(itemTarefa);
    });
    
    prioridadeSpan.addEventListener('click', function(event) {
        event.stopPropagation(); 
        alternarStatusTarefa(itemTarefa);
    });
    ordenarTarefas();
  }
  


function alternarStatusTarefa(itemTarefa) {
    const checkIcon = itemTarefa.querySelector(".check-icon"); 

    if (checkIcon.style.display === 'none') {
        checkIcon.style.display = 'inline-block';
    } else {
        checkIcon.style.display = 'none';
    }
}
  
  function ordenarTarefas() {
    const tarefas = Array.from(listaTarefas.children);
    tarefas.sort((a, b) => {
        const prioridadeA = a.children[1].textContent;
        const prioridadeB = b.children[1].textContent;
        const valoresPrioridade = { alta: 3, media: 2, baixa: 1 };
        return valoresPrioridade[prioridadeB] - valoresPrioridade[prioridadeA];
    });
    tarefas.forEach(tarefa => listaTarefas.appendChild(tarefa));
  }
  
  const descricaoTarefa = document.getElementById("descricaoTarefa");
  const prioridadeTarefa = document.getElementById("prioridadeTarefa");
  const statusTarefa = document.getElementById("statusTarefa");
  const adicionarTarefaBtn = document.getElementById("adicionarTarefa");
  const listaTarefas = document.getElementById("listaTarefas");
  
  adicionarTarefaBtn.addEventListener("click", () => {
    const descricao = descricaoTarefa.value.trim();
    const prioridade = prioridadeTarefa.value;
    const status = statusTarefa.value;
    if (descricao !== "") {
        criarTarefa(descricao, prioridade, status);
        descricaoTarefa.value = "";
        prioridadeTarefa.value = "alta";
        statusTarefa.value = "pendente";
    }
  });