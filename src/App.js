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
  const urlApi = "http://localhost:3001/articulos/";

  const [listaArticulos, setListaArticulos] = useState([]);
  const [editandoArticulo, setEditandoArticulo] = useState(false);

  const editarArray = (producto) => {
    const listaTemp = [...listaArticulos];

    setListaArticulos(
      listaTemp.map((alimento) =>
        alimento.id === producto.id ? producto : alimento
      )
    );
  };

  const obtenerListaArticulos = async () => {
    const resp = await fetch(urlApi);
    const resultado = await resp.json();
    setListaArticulos(resultado);
  };

  useEffect(() => obtenerListaArticulos(), []);

  const anyadirProducto = async (producto) => {
    const metodo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    };
    const response = await fetch(urlApi, metodo);

    if (response.ok) {
      const json = await response.json();
      const listaTemp = [...listaArticulos];
      listaTemp.push(json);
      setListaArticulos(listaTemp);
    }
  };

  const editarProducto = async (id, producto) => {
    const productoTemp = { ...producto };
    productoTemp.id = id;
    const metodo = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoTemp),
    };
    const response = await fetch(`${urlApi}/${id}`, metodo);

    if (response.ok) {
      editarArray(productoTemp);
    }
  };
  return (
    <>
      <ListaContext.Provider
        value={{
          listaArticulos: listaArticulos,
          setListaArticulos: setListaArticulos,
          urlApi: urlApi,
          editandoArticulo: editandoArticulo,
          setEditandoArticulo: setEditandoArticulo,
        }}
      >
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
            <Route path="/formulario/:idAlimento" exact>
              <PaginaFormulario
                editarProducto={editarProducto}
                anyadirProducto={anyadirProducto}
              />
            </Route>
            <Route path="/formulario/" exact>
              <PaginaFormulario anyadirProducto={anyadirProducto} />
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
