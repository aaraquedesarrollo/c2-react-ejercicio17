import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export const InfoArticulos = (props) => {
  const { listaArticulos } = props;

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
