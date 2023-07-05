import { useEffect, useState } from "react";

import { OrderDTO } from "../../../models/order";
import { formatPrice } from "../../../utils/formatters";
import * as cartService from "../../../services/cart-service";

import "./styles.css";
import { ButtomPrimary } from "../../../components/ButtonPrimary";
import { ButtomInverse } from "../../../components/ButtonInverse";

export function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function handleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  return (
    <main>
      <section className="dsc-container">
        {cart.items.length === 0 ? (
          <div className="dsc-card dsc-mb-20 dsc-cart-empt">
            <h2 className="dsc-section-title">Seu carrinho está vazinho</h2>
          </div>
        ) : (
          <>
            <div className="dsc-card dsc-mb-20">
              {cart.items.map((item) => (
                <div
                  className="dsc-cart-item-container dsc-line-bottom"
                  key={item.productId}
                >
                  <div className="dsc-cart-item-left">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="dsc-cart-item-description">
                      <h3 className="dsc-product-name dsc-product-name-12">
                        {item.name}
                      </h3>
                      <div className="dsc-cart-item-quantity-container">
                        <div className="dsc-cart-item-quantity-btn">-</div>
                        <p className="dsc-cart-item-quantity">
                          {item.quantity}
                        </p>
                        <div className="dsc-cart-item-quantity-btn">+</div>
                      </div>
                    </div>
                  </div>
                  <div className="dsc-cart-item-right">
                    <h3 className="dsc-product-price dsc-product-price-12">
                      R$ {formatPrice(item.subTotal)}
                    </h3>
                  </div>
                </div>
              ))}

              <div className="dsc-cart-total-container">
                <h3 className="dsc-product-price dsc-product-price-16">
                  R$ {formatPrice(cart.total)}
                </h3>
              </div>
            </div>
          </>
        )}
        <div className="dsc-btn-page-container">
          {cart.items.length > 0 && <ButtomPrimary text="Comprar" />}
          <ButtomInverse text="Continuar Comprando" url="/" onClick={() => ""}/>
          {cart.items.length > 0 && <ButtomInverse text="Limpar Carrinho" url="/cart" onClick={handleClearClick} />}
        </div>
      </section>
    </main>
  );
}
