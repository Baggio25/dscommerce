import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ProductDetails } from "./routes/ClientHome/ProductDetails";
import { ClientHome } from "./routes/ClientHome";
import { Catalog } from "./routes/ClientHome/Catalog";
import { PageNotFound } from "./routes/ClientHome/PageNotFound";
import { Cart } from "./routes/ClientHome/Cart";
import { ContextCartCount } from "./utils/context-cart";

import * as cartRepository from "./localstorage/cart-repository";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(cartRepository.count);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount}}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />

            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
