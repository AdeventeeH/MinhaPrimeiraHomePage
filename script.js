document.querySelectorAll(".botao").forEach((botao, index) => {
    // Adiciona um span para cada botão para facilitar a estilização
  const texto = botao.textContent;
  botao.textContent = "";
  const span = document.createElement("span");
  span.textContent = texto;
  botao.appendChild(span);

    // Adiciona um evento de clique para cada botão
  botao.addEventListener("click", () => {
    alert(`Em Breve teremos o ${texto}, aguarde para Novidades! 🎉`);
  });
});
