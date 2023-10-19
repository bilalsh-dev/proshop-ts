import { apiSlice } from "./apiSlice";
import CartSliceReducer, { addToCart, removeFromCart } from "./cartSlice";
import {
  useGetProductsDetailsQuery,
  useGetProductsQuery,
} from "./productsApiSlice";

export {
  addToCart,
  apiSlice,
  CartSliceReducer,
  removeFromCart,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
};
