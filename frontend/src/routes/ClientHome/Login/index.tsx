
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CredentialsDTO } from "../../../models/auth";
import { ContextToken } from "../../../utils/context-token";
import * as authService from "../../../services/auth-service";

import "./styles.css";

export function Login() {
  const navigate = useNavigate();
  const { setContextTokenPayload } = useContext(ContextToken);

  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: ""
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    authService.loginRequest(formData)
      .then(response => {
        authService.saveAccessToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate("/cart");
      })
      .catch(error => {
        console.error("Erro no login", error);
      })
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <main>
      <section className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="dsc-form-control"
                  type="text"
                  placeholder="E-mail"
                  autoFocus
                />
                {/*<div className="dsc-form-error">Campo obrigatório</div>*/}
              </div>
              <div>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="dsc-form-control"
                  type="password"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt-20">
              <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}