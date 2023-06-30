import CartIcon from "../../assets/cart.svg";

import "./styles.css";

export function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSCommerce</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={CartIcon} alt="cart" />
            </div>
          </div>
          <div className="dsc-logged-user">
            <a href="#">Entrar</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
