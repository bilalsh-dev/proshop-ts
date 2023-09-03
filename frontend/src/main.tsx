// import "bootstrap/dist/css/bootstrap.min.css";
import "styles/bootstrap.custom.css";
import "styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HomeScreen, ProductScreen } from "screens";

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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
