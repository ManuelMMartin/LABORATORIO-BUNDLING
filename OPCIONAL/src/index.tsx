
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import { Saludo } from "./Components/Saludo";


const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Saludo />
  </div>
)