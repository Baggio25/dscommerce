import { NavLink } from "react-router-dom";

import homeIcon from "../../assets/home.svg";
import productsIcon from "../../assets/products.svg";
import { LoggedUser } from "../LoggedUser";

import "./styles.css";

export function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>

        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">

            <NavLink to="/admin">
              <div className="dsc-menu-item">
                <img src={homeIcon} alt="home" />
                <p>Início</p>
              </div>
            </NavLink>

            <NavLink to="/admin/products">
              <div className="dsc-menu-item dsc-menu-item-active">
                <img src={productsIcon} alt="products" />
                <p>Produtos</p>
              </div>
            </NavLink>

          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}
