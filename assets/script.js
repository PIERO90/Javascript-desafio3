// Desafio Funciones - 1_funcion.js

const example = function (a, b, c) {
  return "a + b + c";
};
console.log(example);

// 2 - `2_arrow.js`

let suma = (a, b) => a + b;

// 3 - pintar-Html

const cambiarColor = (id, color = "green") => {
  if (!id) {
    alert("ID requerido");
  } else {
    const elemento = document.querySelector(id);
    elemento.style.color = color;
  }
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  cambiarColor("#h1", "yellow");
});

// 4.1 - Colores
// Obtén los divs por sus identificadores
const azulDiv = document.getElementById("azul");
const rojoDiv = document.getElementById("rojo");
const verdeDiv = document.getElementById("verde");
const amarilloDiv = document.getElementById("amarillo");

// Agrega el evento para cambiar el color al hacer clic
azulDiv.addEventListener("click", () => {
  azulDiv.style.backgroundColor = "black";
});

rojoDiv.addEventListener("click", () => {
  rojoDiv.style.backgroundColor = "black";
});

verdeDiv.addEventListener("click", () => {
  verdeDiv.style.backgroundColor = "black";
});

amarilloDiv.addEventListener("click", () => {
  amarilloDiv.style.backgroundColor = "black";
});

// 4.3 - Colores

let currentColor = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    currentColor = "pink";
  } else if (event.key === "s") {
    currentColor = "orange";
  } else if (event.key === "d") {
    currentColor = "cyan";
  } else if (event.key === "q") {
    createNewDiv("purple");
  } else if (event.key === "w") {
    createNewDiv("gray");
  } else if (event.key === "e") {
    createNewDiv("brown");
  }

  const keyDiv = document.getElementById("key");
  keyDiv.style.backgroundColor = currentColor;
});

// 4 - New color page

function createNewDiv(color2) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color2;
  newDiv.style.border = "2px solid black";
  document.body.appendChild(newDiv);
}
