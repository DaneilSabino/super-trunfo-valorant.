var cartaJett = {
  nome: "Jett",
  imagem: "https://static.wikia.nocookie.net/valorant/images/4/45/Jett_icon.png",
  atributos: {
    agilidade: 9,
    habilidade: 8,
    precisao: 7
  }
};

var cartaOmen = {
  nome: "Omen",
  imagem: "https://static.wikia.nocookie.net/valorant/images/8/8c/Omen_icon.png",
  atributos: {
    agilidade: 6,
    habilidade: 9,
    precisao: 6
  }
};

var cartaKilljoy = {
  nome: "Killjoy",
  imagem: "https://static.wikia.nocookie.net/valorant/images/c/c6/Killjoy_icon.png",
  atributos: {
    agilidade: 5,
    habilidade: 10,
    precisao: 7
  }
};

var cartaMaquina;
var cartaJogador;

var cartas = [cartaJett, cartaOmen, cartaKilljoy];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    divResultado.innerHTML = "<p class='resultado-final'>Você Venceu!</p>";
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    divResultado.innerHTML = "<p class='resultado-final'>Você Perdeu!</p>";
  } else {
    divResultado.innerHTML = "<p class='resultado-final'>Empatou!</p>";
  }

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `<input type="radio" name="atributo" value="${atributo}"> ${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${cartaJogador.atributos[atributo]}<br>`;
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p>${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${cartaMaquina.atributos[atributo]}</p>`;
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
