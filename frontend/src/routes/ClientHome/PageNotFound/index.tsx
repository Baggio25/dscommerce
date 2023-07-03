import { ButtomInverse } from "../../../components/ButtonInverse";
import { HeaderClient } from "../../../components/HeaderClient";

import "./styles.css";

export function PageNotFound() {
  return (
    <>
      <HeaderClient />
      <div className="dsc-container">
        <div className="dsc-notfound">
          <h2>Página não encontrada</h2>
          <ButtomInverse text="Início" url="/"/>
        </div>
      </div>
    </>
  );
}
