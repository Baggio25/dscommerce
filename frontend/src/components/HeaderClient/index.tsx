import { Link } from "react-router-dom";

import CartIcon from "../CartIcon";

import "./styles.css";

export function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to="/">
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <Link to="/cart">
                <CartIcon />
              </Link>
            </div>
          </div>
          <div className="dsc-logged-user">
            <Link to="/login">Entrar</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
