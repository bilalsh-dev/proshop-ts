import { apiSlice } from "./apiSlice";
import authSliceReducer, { logout, setCredentials } from "./authSlice";
import CartSliceReducer, {
  addToCart,
  clearCartItems,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
} from "./cartSlice";
import {
  useCreateOrderMutation,
  useDeliverOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderDetailsQuery,
  useGetOrdersQuery,
  usePayOrderMutation,
} from "./ordersApiSlice";
import { useGetPaypalClientIdQuery } from "./paypalApiSlice";
import {
  useGetProductsDetailsQuery,
  useGetProductsQuery,
} from "./productsApiSlice";
import {
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useGetUsersQuery,
  useLoginMutation,
  useLogoutMutation,
  useProfileMutation,
  useRegisterMutation,
  useUpdateUserMutation,
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
  useDeleteUserMutation,
  useDeliverOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderDetailsQuery,
  useGetOrdersQuery,
  useGetPaypalClientIdQuery,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
  useGetUserDetailsQuery,
  useGetUsersQuery,
  useLoginMutation,
  useLogoutMutation,
  usePayOrderMutation,
  useProfileMutation,
  useRegisterMutation,
  useUpdateUserMutation,
};
