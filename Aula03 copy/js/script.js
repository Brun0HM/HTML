trocaTema = () => {
  //   const html = document.documentElement;
  // document.querySelector("body").style.background = "pink"
  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");

  const imagem = isLight ? "./img/69b221c4d8286307026dd259ef66fdb6.jpg" : "./img/6eeb5619be94dae69f9b976b289ba957.jpg";

  document.querySelector("#perfil img").setAttribute("src", imagem);

  const trocaralt = isLight ? "Macaco teve uma ideia com lampada na cabeça" : "Macaco se formando de vermelho"

  document.querySelector("#perfil img").setAttribute("alt", "Macaco com tendo uma ideia com lampada na cabeça")

};
//modificar as cores/imagens de fundo e botões. Deixar com os links clicaveis. Fazer com que o alt se modifique a cada tema
