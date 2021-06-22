import { useContext } from "react";
import { ListaContext } from "../contexts/ListaContext";

export const InfoArticulos = () => {
  const listaArticulos = useContext(ListaContext);
  return (
    <section className="info espaciado bloque-superior">
      <i className="icono fas fa-plus-circle"></i>
      <p className="n-articulos">
        {listaArticulos.filter((articulo) => articulo.comprado).length}/
        {listaArticulos.length} comprados
      </p>
    </section>
  );
};
