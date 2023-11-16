import "./styles.scss";

import logo from "./content/logo_1.png";


const texto: string = "Hola mundo"
console.log(texto);

const img = document.createElement("img")
img.src = logo


document.getElementById("ejemplo").innerHTML = texto
document.getElementById("container").appendChild(img)