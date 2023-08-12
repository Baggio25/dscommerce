import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { formatPrice } from "../../../utils/formatters";
import { OrderDTO } from "../../../models/order";

import * as orderService from "../../../services/order-service";

import "./styles.css";

export function Confirmation() {

  const params = useParams(); 
  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId))
      .then(response => {
        setOrder(response.data)
      })
  }, [params.orderId]);

  return (
    <main>
      <section className="dsc-container">
        {
          <>
            <div className="dsc-card dsc-mb-20">
              {order?.items.map((item) => (
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
                        <div
                          className="dsc-cart-item-quantity-btn"
                        >
                          -
                        </div>
                        <p className="dsc-cart-item-quantity">
                          {item.quantity}
                        </p>
                        <div
                          className="dsc-cart-item-quantity-btn"
                        >
                          +
                        </div>
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
                  R$ {formatPrice(order?.total)}
                </h3>
              </div>
            </div>
          </>
        }

        <div className="dsc-confirmation-message dsc-mb-20">Pedido realizado! Número {order?.id}</div>
        <div className="dsc-btn-page-container">
          <Link to="/">
            <div className="dsc-btn dsc-btn-white">Início</div>
          </Link>
        </div>

      </section>
    </main>
  )
}