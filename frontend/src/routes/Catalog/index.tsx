import { ButtonNextPage } from "../../components/ButtonNextPage";
import { CatalogCard } from "../../components/CatalogCard";
import { HeaderClient } from "../../components/HeaderClient";
import { SearchBar } from "../../components/SearchBar";

import "./styles.css";

export function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>
          
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
