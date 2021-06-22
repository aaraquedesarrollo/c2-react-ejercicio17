import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { InfoArticulos } from "../components/InfoArticulos";
import { ListaContext } from "../contexts/ListaContext";

export const PaginaFormulario = (props) => {
  const { anyadirProducto, editarProducto } = props;
  const history = useHistory();
  const { idAlimento } = useParams();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const { listaArticulos } = useContext(ListaContext);
  const [idAlimentoFiltrado, setIdAlimentoFiltrado] = useState(null);
  let accion;
  debugger;
  const buscarIdAlimento = (id, listaArticulos) => {
    if (listaArticulos.length > 0) {
      const articuloTemp = listaArticulos.find((articulo) =>
        articulo.id === parseInt(id) ? articulo.id : null
      );

      if (articuloTemp) {
        return articuloTemp.id;
      }
    }
    return null;
  };
  const setAlimentoFormulario = useCallback(
    (id) => {
      const alimentoTemp = listaArticulos.find((articulo) =>
        articulo.id === parseInt(id) ? articulo : null
      );
      if (typeof alimentoTemp !== "undefined") {
        setNombre(alimentoTemp.nombre);
        setPrecio(alimentoTemp.precio);
      }
    },
    [listaArticulos]
  );

  useEffect(() => {
    const idTemp = buscarIdAlimento(idAlimento, listaArticulos);
    setIdAlimentoFiltrado(idTemp);
    setAlimentoFormulario(idTemp);
  }, [idAlimento, listaArticulos, setAlimentoFormulario]);

  if (idAlimentoFiltrado) {
    accion = "Editar";
  } else {
    accion = "Crear";
  }

  const submitArticulo = (e) => {
    e.preventDefault();
    debugger;
    const producto = {
      nombre,
      precio: parseInt(precio),
      comprado: false,
    };
    debugger;
    if (accion === "Editar") {
      editarProducto(idAlimentoFiltrado, producto);
    } else {
      anyadirProducto(producto);
    }

    history.push("/lista");
  };

  return (
    <>
      <InfoArticulos />
      <main class="principal espaciado">
        <h2 class="titulo-seccion">{accion} artículo</h2>
        <form class="form-crear" noValidate onSubmit={submitArticulo}>
          <label for="nombre">Nombre:</label>
          <input
            class="control"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label for="precio">Precio:</label>
          <div class="control-moneda">
            <input
              class="control"
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />{" "}
            €
          </div>
          <button class="enviar" type="submit">
            {accion}
          </button>
        </form>
      </main>
    </>
  );
};
