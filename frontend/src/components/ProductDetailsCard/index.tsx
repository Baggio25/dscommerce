import ComputerImg from "../../assets/computer.png";
import { ProductCategory } from "../ProductCategory";

import "./styles.css";

export function ProductDetailsCard() {
  return (
    <div className="dsc-card dsc-mb-20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={ComputerImg} alt="produto" />
      </div>
      <div className="dsc-product-details-bottom">
        <h3 className="dsc-product-price dsc-product-price-20">R$ 5.000,00</h3>
        <h4 className="dsc-product-name dsc-product-name-14">
          Nobebook DELL Inspiron 15,6`
        </h4>
        <p className="dsc-product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <ProductCategory />
      </div>
    </div>
  );
}
