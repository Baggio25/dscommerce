import { Link } from "react-router-dom";
import { ProductDTO } from "../../models/product";

import "./styles.css";

type CatalogCardProps = {
  product: ProductDTO;
};

export function CatalogCard({ product }: CatalogCardProps) {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3 className="dsc-product-price dsc-product-price-20">
            R$ {product.price}
          </h3>
          <h4 className="dsc-product-name dsc-product-name-14">
            {product.name}
          </h4>
        </div>
      </div>
    </Link>
  );
}
