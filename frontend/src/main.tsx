// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/ReactToastify.css";
import "styles/bootstrap.custom.css";
import "styles/index.css";

import { PrivateRoute } from "components";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  PaymentScreen,
  PlaceOrderScreen,
  ProductScreen,
  RegisterScreen,
  ShippingScreen,
} from "screens";
import store from "store";

import { Provider } from "@/lib/react-redux.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "@/lib/react-router-dom.tsx";

import App from "./App.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
