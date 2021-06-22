import { useContext } from "react";
import { ListaContext } from "../contexts/ListaContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const InfoArticulos = (props) => {
  const { listaArticulos, editandoArticulo, setEditandoArticulo } =
    useContext(ListaContext);
  const history = useHistory();

  const cerrarFormulario = () => {
    setEditandoArticulo(false);
    history.goBack();
  };

  const abrirFormulario = () => {
    history.push("/formulario/");
  };

  return (
    <section className="info espaciado bloque-superior">
      {editandoArticulo ? (
        <FaMinusCircle fontSize="2em" onClick={cerrarFormulario} />
      ) : (
        <FaPlusCircle fontSize="2em" onClick={abrirFormulario} />
      )}

      <p className="n-articulos">
        {listaArticulos.filter((articulo) => articulo.comprado).length}/
        {listaArticulos.length} comprados
      </p>
    </section>
  );
};
