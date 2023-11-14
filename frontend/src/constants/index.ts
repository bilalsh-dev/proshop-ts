export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";
export const PRODUCTS_URL = "/api/products";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const UPLOADS_URL = "/api/upload";
export const PAYPAL_URL = "/api/config/paypal";

export const DANGER = "danger";
export const WARNING = "warning";
export const SUCCESS = "success";
export const INFO = "info";
