import { useContext } from "react";
import { Link } from "react-router-dom";

import { ContextToken } from "../../utils/context-token";
import * as authService from "../../services/auth-service";

export function LoggedUser() {
  const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

  function handleLogoutClick() {
    authService.logout();
    setContextTokenPayload(undefined);
  }

  return (
    authService.isAuthenticated()
      ? (
        <div className="dsc-logged-user">
          <p>{contextTokenPayload?.user_name}</p>
          <span onClick={handleLogoutClick}>Sair</span>
        </div>
      )
      : (
        <div className="dsc-logged-user">
          <Link to="/login">Entrar</Link>
        </div>
      )
  )
}