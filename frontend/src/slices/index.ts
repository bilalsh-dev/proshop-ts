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
  useCreateProductMutation,
  useCreateReviewMutation,
  useDeleteProductMutation,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
  useGetTopProductsQuery,
  useUpdateProductMutation,
} from "./productsApiSlice";
import { useUploadImageMutation } from "./uploadsApiSlice";
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
  useCreateProductMutation,
  useCreateReviewMutation,
  useDeleteProductMutation,
  useDeleteUserMutation,
  useDeliverOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderDetailsQuery,
  useGetOrdersQuery,
  useGetPaypalClientIdQuery,
  useGetProductsDetailsQuery,
  useGetProductsQuery,
  useGetTopProductsQuery,
  useGetUserDetailsQuery,
  useGetUsersQuery,
  useLoginMutation,
  useLogoutMutation,
  usePayOrderMutation,
  useProfileMutation,
  useRegisterMutation,
  useUpdateProductMutation,
  useUpdateUserMutation,
  useUploadImageMutation,
};
