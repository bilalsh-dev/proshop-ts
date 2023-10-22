import { apiSlice } from "./apiSlice";
import authSliceReducer, { setCredentials } from "./authSlice";
import CartSliceReducer, { addToCart, removeFromCart } from "./cartSlice";
import {
  useGetProductsDetailsQuery,
  useGetProductsQuery,
} from "./productsApiSlice";
import { useLoginMutation } from "./usersApiSlice";

export {
  addToCart,
  apiSlice,
  authSliceReducer,
  CartSliceReducer,
  removeFromCart,
  setCredentials,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
  useLoginMutation,
};
