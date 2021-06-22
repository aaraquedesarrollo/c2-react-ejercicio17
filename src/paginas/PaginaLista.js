import { useContext } from "react";
import { InfoArticulos } from "../components/InfoArticulos";
import { ListaContext } from "../contexts/ListaContext";

export const PaginaLista = () => {
  return (
    <>
      <InfoArticulos />
      <main class="principal espaciado">
        <ul class="articulos">
          <li class="articulo">
            <input type="checkbox" class="marcar" />
            <span class="nombre">Pan</span>
            <span class="precio">0.75€</span>
            <i class="borrar fas fa-times"></i>
          </li>
          <li class="articulo">
            <input type="checkbox" class="marcar" />
            <span class="nombre">Azúcar</span>
            <i class="borrar fas fa-times"></i>
          </li>
          <li class="articulo">
            <input type="checkbox" class="marcar" />
            <span class="nombre">Leche</span>
            <span class="precio">1.20€</span>
            <i class="borrar fas fa-times"></i>
          </li>
        </ul>
        <span class="precio-total">1.95€</span>
      </main>
    </>
  );
};
