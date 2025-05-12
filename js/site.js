function mostrarTextoUnico(idAtivo) {
  const ids = ['texto1', 'texto2', 'texto3', 'texto4', 'texto5'];

  ids.forEach(id => {
    const elemento = document.getElementById(id);
    if (id === idAtivo) {
      // Alterna a visibilidade do texto clicado
      elemento.style.display = (elemento.style.display === 'block') ? 'none' : 'block';
    } else {
      // Garante que os outros estejam escondidos
      elemento.style.display = 'none';
    }
  });
}