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
  return (
    <>
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
