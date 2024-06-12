trocaTema = () => {
  //   const html = document.documentElement;
  // document.querySelector("body").style.background = "pink"
  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");

  const imagem = isLight ? "./img/macacofoda.jpg" : "./img/ftperfil.jpg";

  document.querySelector("#perfil img").setAttribute("src", imagem);

  const trocaralt = isLight ? "Macaquinho de óculos e roupas e corrente super estiloso" : "Homem de costa tirando foto no espelho com o flash ligedo e sem camiseta"

  document.querySelector("#perfil img").setAttribute("alt", "Macaquinho de óculos e roupas e corrente super estiloso")

};
//modificar as cores/imagens de fundo e botões. Deixar com os links clicaveis. Fazer com que o alt se modifique a cada tema
