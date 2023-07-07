/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ButtomInverse } from "../../../components/ButtonInverse";
import { ButtomPrimary } from "../../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import { ContextCartCount } from "../../../utils/context-cart";

import * as productService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";

import "./styles.css";

export function ProductDetails() {
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { setContextCartCount } = useContext(ContextCartCount);

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

  function handleBuyClick() {
    if(product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    } 

  }

  return (
    <main>
      <section className="dsc-container">
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick}>
            <ButtomPrimary text="Comprar"/>
          </div>
          <ButtomInverse text="Início" url="/" />
        </div>
      </section>
    </main>
  );
}
