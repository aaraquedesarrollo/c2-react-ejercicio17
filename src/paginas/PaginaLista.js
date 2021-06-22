import { useContext } from "react";
import { InfoArticulos } from "../components/InfoArticulos";
import { FaTimes } from "react-icons/fa";
import { ListaContext } from "../contexts/ListaContext";

export const PaginaLista = () => {
  const { listaArticulos, setListaArticulos, urlApi } =
    useContext(ListaContext);

  const borrarArticulo = async (articulo) => {
    const resp = await fetch(urlApi + articulo.id, { method: "DELETE" });
    if (resp.ok) {
      setListaArticulos(
        listaArticulos.filter((articuloEdit) => articuloEdit.id !== articulo.id)
      );
    }
  };

  const conmutarArticulo = async (e, articulo) => {
    const articuloEditado = { ...articulo, comprado: e.target.checked };

    const resp = await fetch(urlApi + articulo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articuloEditado),
    });

    if (resp.ok) {
      setListaArticulos(
        listaArticulos.map((articuloEdit) =>
          articuloEdit.id === articulo.id ? articuloEditado : articuloEdit
        )
      );
    }
  };

  return (
    <>
      <InfoArticulos />
      <main className="principal espaciado">
        <ul className="articulos">
          {listaArticulos.map((articulo) => (
            <li key={articulo.id} className="articulo">
              <input
                type="checkbox"
                className="marcar"
                checked={articulo.comprado}
                onChange={(e) => conmutarArticulo(e, articulo)}
              />
              <span className="nombre">{articulo.nombre}</span>
              <span className="precio">
                {articulo.precio === null ? "" : articulo.precio.toFixed(2)}
              </span>
              <FaTimes onClick={() => borrarArticulo(articulo)} />
            </li>
          ))}
        </ul>
        <span className="precio-total">
          {listaArticulos.length !== 0 &&
            listaArticulos
              .reduce(
                (acumulador, articulo) => (acumulador += articulo.precio),
                null,
                0
              )
              .toFixed(2)}
          €
        </span>
      </main>
    </>
  );
};
