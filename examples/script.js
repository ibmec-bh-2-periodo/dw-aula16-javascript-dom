const nome = document.getElementById("nome");
console.log(nome);
const button = document.getElementsByTagName("button")[0];
console.log(button);

button.addEventListener("click", () => {
  const nomeDigitado = nome.value;
  alert(`Boas vindas, ${nomeDigitado}!`);
});
