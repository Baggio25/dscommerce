import { useEffect, useState } from "react";
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

import * as cartService from "./services/cart-service";
import * as authService from "./services/auth-service";
import { PrivateRoute } from "./components/PrivateRoute";
import { PageForbidden } from "./routes/ClientHome/PageForbidden";
import { AccessTokenPayloadDTO } from "./models/auth";
import { ContextToken } from "./utils/context-token";

function App() {
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  useEffect(() => {
    setContextCartCount(cartService.countCartItems());

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
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
    </ContextToken.Provider>
  );
}

export default App;
