import { ORDERS_URL } from "@/constants";
import type { CartItem, CartState, Order } from "@/types";

import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<
      Order,
      Omit<CartState, "cartItems"> & { orderItems: CartItem[] }
    >({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
