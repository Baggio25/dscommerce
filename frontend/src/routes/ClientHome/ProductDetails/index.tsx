/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from "../../../services/product-service";
import { ButtomInverse } from "../../../components/ButtonInverse";
import { ButtomPrimary } from "../../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

import "./styles.css";

export function ProductDetails() {
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    productService
      .findById(Number(productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [productId]);

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
