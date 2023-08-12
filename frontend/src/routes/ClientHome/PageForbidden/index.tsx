import { ButtomInverse } from "../../../components/ButtonInverse";
import { HeaderClient } from "../../../components/HeaderClient";

import "./styles.css";

export function PageForbidden() {
  return (
    <>
      <HeaderClient />
      <div className="dsc-container">
        <div className="dsc-forbidden">
          <h3>Você não tem permissão para acesso!</h3>
          <h3>Realize novamente o login!</h3>
          <ButtomInverse text="Voltar" url="/login"/>
        </div>
      </div>
    </>
  );
}
