import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as productService from "../../../services/product-service";
import { ButtomInverse } from "../../../components/ButtonInverse";
import { ButtomPrimary } from "../../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

import "./styles.css";

export function ProductDetails() {
  const [product, setProduct] = useState<ProductDTO>();
  const params = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/products/1").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });

  }, []);

  return (
    <main>
      <section className="dsc-container">
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <ButtomPrimary text="Comprar" />
          <ButtomInverse text="Início" url="/" />
        </div>
      </section>
    </main>
  );
}
