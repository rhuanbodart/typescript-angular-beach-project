// Detecta mudanças na URL
window.addEventListener('popstate', function() {
    // Exibe a camada de fundo de desfoque quando a URL muda
    document.getElementById('background-overlay').style.display = 'block';

    // Aguarde um curto período de tempo para que o efeito de desfoque seja visível
    setTimeout(function() {
        // Oculta a camada de fundo de desfoque após um atraso
        document.getElementById('background-overlay').style.display = 'none';
    }, 1000); // Ajuste o tempo conforme necessário
});
