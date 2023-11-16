import React from "react";
import logo from "../content/logo_1.png";

export const Saludo: React.FC = () => {
  console.log(`Api base: ${process.env.API_BASE}`)
  const texto: string = "Hola mundo desde React"
  return (
    <div>
      <img src={logo}></img>
      <h1 className="ejemplo">{texto}</h1>
    </div>
  )
}