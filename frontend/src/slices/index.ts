import { apiSlice } from "./apiSlice";
import authSliceReducer, { logout, setCredentials } from "./authSlice";
import CartSliceReducer, { addToCart, removeFromCart } from "./cartSlice";
import {
  useGetProductsDetailsQuery,
  useGetProductsQuery,
} from "./productsApiSlice";
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from "./usersApiSlice";

export {
  addToCart,
  apiSlice,
  authSliceReducer,
  CartSliceReducer,
  logout,
  removeFromCart,
  setCredentials,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
};
