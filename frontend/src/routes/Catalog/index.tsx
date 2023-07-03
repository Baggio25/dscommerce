import { ButtonNextPage } from "../../components/ButtonNextPage";
import { CatalogCard } from "../../components/CatalogCard";
import { HeaderClient } from "../../components/HeaderClient";
import { SearchBar } from "../../components/SearchBar";
import { ProductDTO } from "../../models/product";

import "./styles.css";

const product: ProductDTO = {
  id: 1,
  name: "Smartv LG 55 polegadas",
  imgUrl:"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 3568.99,
  description: "",
  categories: []
};

export function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
          </div>
          
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
