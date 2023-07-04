import ComputerImg from "../../../assets/computer.png";

import "./styles.css";

const cart = {
  items: [
    {
      productId: 4,
      quantity: 1,
      name: "PC Gamer",
      price: 1200,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg",
    },
    {
      productId: 5,
      quantity: 2,
      name: "Rails for Dummies",
      price: 100.99,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg",
    },
  ],
};

export function Cart() {
  return (
    <main>
      <section className="dsc-container">
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
                    <p className="dsc-cart-item-quantity">{item.quantity}</p>
                    <div className="dsc-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">
                <h3 className="dsc-product-price dsc-product-price-12">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </h3>
              </div>
            </div>
          ))}

          <div className="dsc-cart-total-container">
            <h3 className="dsc-product-price dsc-product-price-16">
              R$ 10.000,00
            </h3>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
          <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
        </div>
      </section>
    </main>
  );
}
