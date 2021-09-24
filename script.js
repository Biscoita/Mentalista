var número = parseInt(Math.random() * 11);
console.log(número);
var tentativas = 0;
var acertou = 0;
var contador = document.getElementById("tentativas");
contador.innerHTML = "Tentativas: " + tentativas;

function ableDisable() {
  var entrada = document.getElementById("valor").value;
  if (parseFloat(entrada) == parseInt(entrada)) {
    document.getElementById("botão").disabled = false;
  } else {
    document.getElementById("botão").disabled = true;
  }
}
function Chutar() {
  var resultado = document.getElementById("resultado");
  var entrada = document.getElementById("valor").value;
  var chute = parseInt(entrada);
  if (acertou == 0) {
    if (chute > 10) {
      resultado.innerHTML = "É menor do que 10, cara...";
    } else if (chute < 0) {
      resultado.innerHTML =
        "Não pode ser menor que zero! Números negativos estão fora!";
    } else {
      tentativas = tentativas + 1;
      contador.innerHTML = "Tentativas: " + tentativas;
      if (chute == número) {
        acertou = acertou + 1;
        if (tentativas == 1) {
          resultado.innerHTML =
            "Uau! Você acertou de primeira! Você tem poderes psíquicos?";
        } else if (tentativas < 4) {
          resultado.innerHTML =
            "Parabéns, você acertou com apenas " + tentativas + " tentativas!";
        } else {
          resultado.innerHTML =
            "Até que enfim, " +
            tentativas +
            " tentativas pra acertar um numerozinho? Pfff...";
        }
      } else {
        if (chute > número) {
          resultado.innerHTML = "Muito alto, tente um número menor.";
        } else {
          resultado.innerHTML = "Muito pouco, aumenta isso aí!";
        }
      }
    }
  } else if (chute == número) {
    resultado.innerHTML =
      "Claro que é " + número + ", tá querendo acertar de novo?";
  } else
    resultado.innerHTML =
      "Você já acertou, cara, esqueceu que era " + número + "?";
}
function reset() {
  número = parseInt(Math.random() * 11);
  console.log(número);
  tentativas = 0;
  acertou = 0;
  contador = document.getElementById("tentativas");
  contador.innerHTML = "Tentativas: " + tentativas;
  resultado.innerHTML =
    "Um novo número foi sorteado. Vamos ver como você se sai dessa vez!";
  document.getElementById("valor").value = "";
  document.getElementById("botão").disabled = true;
}