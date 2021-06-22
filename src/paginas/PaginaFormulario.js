import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoArticulos } from "../components/InfoArticulos";
import { ListaContext } from "../contexts/ListaContext";

export const PaginaFormulario = (props) => {
  const { anyadirProducto, editarProducto } = props;
  const { idAlimento } = useParams();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const listaArticulos = useContext(ListaContext);
  const [idAlimentoFiltrado, setIdAlimentoFiltrado] = useState(null);
  debugger;
  const buscarIdAlimento = (id, listaArticulos) => {
    return listaArticulos.find((articulo) =>
      articulo.id === parseInt(id) ? articulo.id : null
    ).id;
  };

  useEffect(
    () => setIdAlimentoFiltrado(buscarIdAlimento(idAlimento, listaArticulos)),
    [idAlimento, listaArticulos]
  );

  const accion = idAlimentoFiltrado ? "Editar" : "Crear";

  const submitArticulo = (e) => {
    e.preventDefault();
    debugger;
    const producto = {
      nombre,
      precio,
      comprado: false,
    };

    if (accion === "Editar") {
      editarProducto(idAlimentoFiltrado, producto);
    } else {
      anyadirProducto(producto);
    }
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
