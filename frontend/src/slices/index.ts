import { apiSlice } from "./apiSlice";
import authSliceReducer, { logout, setCredentials } from "./authSlice";
import CartSliceReducer, {
  addToCart,
  clearCartItems,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
} from "./cartSlice";
import { useCreateOrderMutation } from "./ordersApiSlice";
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
  clearCartItems,
  logout,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
  setCredentials,
  useCreateOrderMutation,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
};
