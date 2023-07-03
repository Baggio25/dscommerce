import { ButtonNextPage } from "../../../components/ButtonNextPage";
import { CatalogCard } from "../../../components/CatalogCard";
import { SearchBar } from "../../../components/SearchBar";

import * as productService from "../../../services/product-service";

import "./styles.css";

export function Catalog() {
  return (
    <main>
      <section className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
          {productService.findAll().map((product) => (
            <CatalogCard product={product} key={product.id} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
