// para capturar id

const qualquerCoisa = document.getElementById("titulo");
console.log(qualquerCoisa);

qualquerCoisa.style.color = "blue";
qualquerCoisa.style.backgroundColor = "white";
qualquerCoisa.innerText = "Teste";

// para capturar classes

const elementosLista = document.getElementsByClassName("item")[2];
console.log(elementosLista);

console.log(elementosLista.parentNode);

// let array = [1, 2, 3]
// console.log(array[0])

// para capturar tag HTML

const listaPai = document.getElementsByTagName("ul")[0];
console.log(listaPai);

console.log(listaPai.firstElementChild);

// #nomeDoId
// .nomeDaClasse

// querySelector ou querySelectorAll

const titulo = document.querySelector(".item:nth-child(1)");
console.log(titulo);

const itemQualquer = document.querySelectorAll(".item")[0];
console.log(itemQualquer);
