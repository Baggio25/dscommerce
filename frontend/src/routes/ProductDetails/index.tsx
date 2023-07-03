import { ButtomInverse } from "../../components/ButtonInverse";
import { ButtomPrimary } from "../../components/ButtonPrimary";
import { HeaderClient } from "../../components/HeaderClient";
import { ProductDetailsCard } from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

import "./styles.css";

const product: ProductDTO = {
  id: 1,
  name: "Smartv LG 55 polegadas",
  description: "Aparelho  de alta tecnologia",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 3568.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Televisores",
    }
  ],
};

export function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container">
          <ProductDetailsCard product={product}/>

          <div className="dsc-btn-page-container">
            <ButtomPrimary />
            <ButtomInverse />
          </div>
        </section>
      </main>
    </>
  );
}
