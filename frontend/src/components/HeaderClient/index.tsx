import { Link } from "react-router-dom";

import CartIcon from "../CartIcon";
import * as authService from "../../services/auth-service";

import iconAdmin from "../../assets/admin.svg";
import "./styles.css";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import { LoggedUser } from "../LoggedUser";

export function HeaderClient() {
  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to="/">
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            {
              contextTokenPayload &&
              authService.hasAnyRoles(["ROLE_ADMIN"]) &&
              <div className="dsc-menu-item">
                <Link to="/admin">
                  <img src={iconAdmin} alt="Admin" />
                </Link>
              </div>
            }
            <div className="dsc-menu-item">
              <Link to="/cart">
                <CartIcon />
              </Link>
            </div>
          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}
