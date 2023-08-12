import { useContext } from "react";

import { ContextCartCount } from "../../utils/context-cart";
import cartIcon from "../../assets/cart.svg";

import "./styles.css";

export default function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <div className="dsc-cart-count">{contextCartCount}</div>
      <img src={cartIcon} alt="cart" />
    </>
  );
}
