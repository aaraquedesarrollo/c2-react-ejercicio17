export const PaginaFormulario = () => {
  return (
    <>
      <section class="info espaciado bloque-superior">
        <i class="icono fas fa-minus-circle"></i>
        <p class="n-articulos">2/3 comprados</p>
      </section>
      <main class="principal espaciado">
        <h2 class="titulo-seccion">Editar artículo</h2>
        <form class="form-crear">
          <label for="nombre">Nombre:</label>
          <input class="control" type="text" id="nombre" />
          <label for="precio">Precio:</label>
          <div class="control-moneda">
            <input class="control" type="number" id="precio" /> €
          </div>
          <button class="enviar" type="submit">
            Modificar
          </button>
        </form>
      </main>
    </>
  );
};
