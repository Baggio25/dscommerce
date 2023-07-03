import { useParams } from "react-router-dom";
import * as productService from "../../../services/product-service";

import { ButtomInverse } from "../../../components/ButtonInverse";
import { ButtomPrimary } from "../../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";

import "./styles.css";


export function ProductDetails() {
  const params = useParams();
  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section className="dsc-container">
        { product && 
          <ProductDetailsCard product={product} />
        }

        <div className="dsc-btn-page-container">
          <ButtomPrimary text="Comprar" />
          <ButtomInverse text="Início" url="/"/>
        </div>
      </section>
    </main>
  );
}
