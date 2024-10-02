
// Função para carregar os dados de serviços do JSON
function carregarDadosServicos() {
    fetch('servicos.json')
        .then(response => response.json())
        .then(dados => {
            renderizarTabelaServicos(dados);
        })
        .catch(error => {
            console.error("Erro ao carregar os dados de serviços:", error);
        });
}

// Função para carregar os dados de horários do JSON
function carregarDadosHorarios() {
    fetch('horarios.json')
        .then(response => response.json())
        .then(dados => {
            renderizarTabelaHorarios(dados);
        })
        .catch(error => {
            console.error("Erro ao carregar os dados de horários:", error);
        });
}

// Função para renderizar a tabela de serviços
function renderizarTabelaServicos(dadosServicos) {
    const tbody = document.querySelector("#tabela-servicos tbody");
    tbody.innerHTML = ''; // Limpar conteúdo anterior

    dadosServicos.forEach(servico => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${servico.tipo}</td>
            <td>${servico.id}</td>
            <td>${servico.cliente}</td>
            <td>${servico.horario}</td>
            <td><button class="status-btn ${getStatusClass(servico.status)}">${servico.status}</button></td>
        `;

        tbody.appendChild(tr);
    });
}

// Função para renderizar a tabela de horários
function renderizarTabelaHorarios(dadosHorarios) {
    const tbody = document.querySelector("#tabela-horarios tbody");
    tbody.innerHTML = ''; // Limpar conteúdo anterior

    dadosHorarios.forEach(horario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${horario.horario}</td>
            <td class="${horario.status === 'Livre' ? 'status-livre' : 'status-ocupado'}">${horario.status}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para mostrar a tabela de serviços e esconder a de horários
function mostrarServicos() {
    document.getElementById("tabela-servicos").style.display = "table";
    document.getElementById("tabela-horarios").style.display = "none";
    document.getElementById("servicos-tab").classList.add("active");
    document.getElementById("horarios-tab").classList.remove("active");
    carregarDadosServicos();
}

// Função para mostrar a tabela de horários e esconder a de serviços
function mostrarHorarios() {
    document.getElementById("tabela-horarios").style.display = "table";
    document.getElementById("tabela-servicos").style.display = "none";
    document.getElementById("horarios-tab").classList.add("active");
    document.getElementById("servicos-tab").classList.remove("active");
    carregarDadosHorarios();
}

// Função auxiliar para definir a classe do status
function getStatusClass(status) {
    if (status === "Realizado") return "status-realizado";
    if (status === "Não realizado") return "status-nao-realizado";
    if (status === "Solicitado") return "status-solicitado";
}

// Inicialmente, carregue a tabela de serviços
mostrarServicos();