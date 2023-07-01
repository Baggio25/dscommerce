
import ProductImage from "../../assets/computer.png";

import "./styles.css";

export function CatalogCard() {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={ProductImage} alt="computer" />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3 className="dsc-product-price dsc-product-price-20">
          R$ 5.000,00
        </h3>
        <h4 className="dsc-product-name dsc-product-name-14">
          Nobebook DELL Inspiron 15,6`
        </h4>
      </div>
    </div>
  );
}
