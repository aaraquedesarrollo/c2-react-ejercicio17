import { useContext } from "react";
import { ListaContext } from "../contexts/ListaContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export const InfoArticulos = () => {
  const { listaArticulos } = useContext(ListaContext);
  return (
    <section className="info espaciado bloque-superior">
      <FaPlusCircle fontSize="2em" />
      <FaMinusCircle fontSize="2em" />
      <p className="n-articulos">
        {listaArticulos.filter((articulo) => articulo.comprado).length}/
        {listaArticulos.length} comprados
      </p>
    </section>
  );
};
