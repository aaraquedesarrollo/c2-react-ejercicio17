export const InfoArticulos = (props) => {
  const { listaArticulos } = props;

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
