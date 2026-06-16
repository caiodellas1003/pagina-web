/**
 * Módulo de Gerenciamento do Blog Escolar
 * Armazena interações de forma escalável.
 */
document.addEventListener("DOMContentLoaded", () => {
    
    const blogController = (() => {
        
        // Elementos do DOM
        const readMoreButtons = document.querySelectorAll(".btn-primary");

        // Manipulador para clique em artigos
        const handleReadMoreClick = (event) => {
            const button = event.currentTarget;
            const postId = button.getAttribute("data-post-id");
            
            // Simulação de navegação / requisição assíncrona futura
            console.log(`Carregando artigo ID: ${postId}`);
            alert("A visualização completa deste artigo está em fase de homologação e estará disponível em breve.");
        };

        // Inicializa os ouvintes de eventos
        const init = () => {
            if (readMoreButtons.length > 0) {
                readMoreButtons.forEach(button => {
                    button.addEventListener("click", handleReadMoreClick);
                });
            }
        };

        return { init };
    })();

    // Executa a inicialização do controlador
    blogController.init();
});