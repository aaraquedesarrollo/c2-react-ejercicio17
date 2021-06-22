import { useEffect, useState } from "react";
import { InfoArticulos } from "./components/InfoArticulos";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Cabecera } from "./components/Cabecera";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { PaginaLista } from "./paginas/PaginaLista";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaAcercaDe } from "./paginas/PaginaAcercaDe";

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
      <Router>
        <Cabecera />
        <Switch>
          <Route path="/principal" exact>
            <PaginaPrincipal />
          </Route>
          <Route path="/acerca-de" exact>
            <PaginaAcercaDe />
          </Route>
          <Route path="/lista" exact>
            <PaginaLista />
          </Route>
          <Route path="/formulario" exact>
            <PaginaFormulario />
          </Route>
          <Route path="**" exact>
            <PaginaPrincipal />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
