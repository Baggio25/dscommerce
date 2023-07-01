import { ButtomInverse } from "../../components/ButtonInverse";
import { ButtomPrimary } from "../../components/ButtonPrimary";
import { HeaderClient } from "../../components/HeaderClient";
import { ProductDetailsCard } from "../../components/ProductDetailsCard";

import "./styles.css";

export function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container">
          <ProductDetailsCard />

          <div className="dsc-btn-page-container">
            <ButtomPrimary />
            <ButtomInverse />
          </div>
        </section>
      </main>
    </>
  );
}
