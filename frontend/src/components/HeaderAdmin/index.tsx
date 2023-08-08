
import homeIcon from "../../assets/home.svg";
import productsIcon from "../../assets/products.svg";

import "./styles.css";

export function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>

        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={homeIcon} alt="home" />
              <p>Início</p>
            </div>
            <div className="dsc-menu-item dsc-menu-item-active">
              <img src={productsIcon} alt="products" />
              <p>Produtos</p>
            </div>
          </div>
          <div className="dsc-logged-user">
            <p>Maria Silva</p>
            <a href="#">Sair</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
