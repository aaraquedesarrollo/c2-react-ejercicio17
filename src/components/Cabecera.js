import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header class="cabecera espaciado bloque-superior">
      <h1>Lista de la compra</h1>
      <nav>
        <ul class="navegacion">
          <li>
            <NavLink to="/principal" activeClassName="actual">
              Principal
            </NavLink>
          </li>
          <li>
            <NavLink to="/lista" activeClassName="actual">
              Lista
            </NavLink>
          </li>
          <li>
            <NavLink to="/acerca-de" activeClassName="actual">
              Acerca de
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
