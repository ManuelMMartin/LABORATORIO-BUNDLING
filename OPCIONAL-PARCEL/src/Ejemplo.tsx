import React from "react";
import logo from './content/logo_1.png';


export const Ejemplo: React.FC = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const env = process.env.REACT_APP_ENV;

  console.log("API Key:", apiKey);
  console.log("Environment:", env);


  return (
    <>
      <h2>Hola desde React en {env}</h2>
      <img src={logo} alt="" />
    </>
  )
}