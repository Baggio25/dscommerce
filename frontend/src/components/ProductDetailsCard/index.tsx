import { ProductDTO } from "../../models/product";
import { ProductCategory } from "../ProductCategory";

import "./styles.css";

type ProductDetailsCardProps = {
  product: ProductDTO;
};

export function ProductDetailsCard({ product }: ProductDetailsCardProps) {
  return (
    <div className="dsc-card dsc-mb-20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="dsc-product-details-bottom">
        <h3 className="dsc-product-price dsc-product-price-20">
          R$ {product.price.toFixed(2)}
        </h3>
        <h4 className="dsc-product-name dsc-product-name-14">{product.name}</h4>
        <p className="dsc-product-description">{product.description}</p>
        <div className="dsc-category-container">
          {product.categories.map((category) => (
            <ProductCategory name={category.name} key={category.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
