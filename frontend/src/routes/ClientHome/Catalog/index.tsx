import { useEffect, useState } from "react";

import { ButtonNextPage } from "../../../components/ButtonNextPage";
import { CatalogCard } from "../../../components/CatalogCard";
import { SearchBar } from "../../../components/SearchBar";

import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

import "./styles.css";

export function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
      productService.findAll()
      .then((response) => {
        setProducts(response.data.content);
      }
    );
  }, []);

  return (
    <main>
      <section className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
          {products.map((product) => (
            <CatalogCard product={product} key={product.id} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
