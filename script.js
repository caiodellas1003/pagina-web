// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os botões de "Ler Mais"
    const botoes = document.querySelectorAll(".btn-read-more");

    // Adiciona um evento de clique para cada botão
    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            alert("Em breve você poderá ler o artigo completo aqui! Essa funcionalidade está sendo desenvolvida.");
        });
    });

}); 