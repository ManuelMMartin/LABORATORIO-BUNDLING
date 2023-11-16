import { createRoot } from "react-dom/client";
import './style.scss';
import { Ejemplo } from "./Ejemplo";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Ejemplo />
  </div>
);