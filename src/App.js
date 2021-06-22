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
import { ListaContext } from "./contexts/ListaContext";

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
      <ListaContext.Provider value={listaArticulos}>
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
      </ListaContext.Provider>
    </>
  );
}

export default App;
