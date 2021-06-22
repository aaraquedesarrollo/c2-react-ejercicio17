import { useEffect, useState } from "react";
import { InfoArticulos } from "./components/InfoArticulos";

function App() {
  const urlApi = "http://localhost:3001/articulos";

  const [listaArticulos, setListaArticulos] = useState([]);

  const obtenerListaArticulos = async () => {
    const resp = await fetch(urlApi);
    const resultado = await resp.json();
    setListaArticulos(resultado);
  };

  useEffect(() => obtenerListaArticulos(), []);

  return (
    <>
      <header className="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul className="navegacion">
            <li>
              <a href="principal">Principal</a>
            </li>
            <li className="actual">
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      <InfoArticulos listaArticulos={listaArticulos} />
    </>
  );
}

export default App;
