import { useState } from "react";
import { Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { ProductDetails } from "./routes/ClientHome/ProductDetails";
import { ClientHome } from "./routes/ClientHome";
import { Catalog } from "./routes/ClientHome/Catalog";
import { PageNotFound } from "./routes/ClientHome/PageNotFound";
import { Cart } from "./routes/ClientHome/Cart";
import { Login } from "./routes/ClientHome/Login";
import { AdminHome } from "./routes/Admin/AdminHome";
import { Admin } from "./routes/Admin";

import { ContextCartCount } from "./utils/context-cart";
import { history } from "./utils/history";

import * as cartRepository from "./localstorage/cart-repository";
import { PrivateRoute } from "./components/PrivateRoute";
import { PageForbidden } from "./routes/ClientHome/PageForbidden";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(cartRepository.count);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />

            <Route path="cart" element={<Cart />} />

            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/admin/"
            element={
              <PrivateRoute roles={["ROLE_ADMIN"]}>
                <Admin />
              </PrivateRoute>
            }
          >
            <Route index element={<AdminHome />} />
          </Route>

          <Route path="not-found" element={<PageNotFound />} />
          <Route path="forbidden" element={<PageForbidden />} />
          <Route path="*" element={<Navigate to="not-found" />} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
