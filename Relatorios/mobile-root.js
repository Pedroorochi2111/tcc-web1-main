document.getElementById("enviar").addEventListener("click", function () {
    const relatorioTexto = document.getElementById("relatorio-texto").value;
    const caixaHistorico = document.getElementById("caixa-historico");

    if (relatorioTexto.trim() !== "") {
      // Remove o texto padrão de histórico
      document.getElementById("historico-conteudo").style.display = "none";

      // Cria um novo container para o item do relatório e o botão de excluir
      const containerRelatorio = document.createElement("div");
      containerRelatorio.classList.add("relatorio-item");

      // Cria o parágrafo para exibir o texto do relatório
      const novoParagrafo = document.createElement("p");
      novoParagrafo.textContent = relatorioTexto;

      // Cria o botão de excluir
      const botaoExcluir = document.createElement("button");
      botaoExcluir.textContent = "Excluir";
      botaoExcluir.classList.add("btn-excluir");

      // Função para remover o item quando clicar no botão de excluir
      botaoExcluir.addEventListener("click", function () {
        caixaHistorico.removeChild(containerRelatorio);

        // Se não houver mais itens, exibe a mensagem padrão
        if (caixaHistorico.children.length === 0) {
          document.getElementById("historico-conteudo").style.display = "block";
        }
      });

      // Adiciona o parágrafo e o botão de excluir ao container do relatório
      containerRelatorio.appendChild(novoParagrafo);
      containerRelatorio.appendChild(botaoExcluir);

      // Adiciona o novo item ao histórico
      caixaHistorico.appendChild(containerRelatorio);

      // Limpa o campo de texto após o envio
      document.getElementById("relatorio-texto").value = '';
    } else {
      alert("Por favor, insira algum texto no relatório.");
    }
  });