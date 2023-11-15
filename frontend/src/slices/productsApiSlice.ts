import { PRODUCTS_URL } from "@/constants";
import type { Product, ProductsResponse, ReviewPayload } from "@/types";

import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsResponse,
      { pageNumber: string; keyword: string }
    >({
      query: ({ pageNumber, keyword }) => ({
        url: PRODUCTS_URL,
        params: { pageNumber, keyword },
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getProductsDetails: builder.query<Product, string>({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation<Product, void>({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<Product, Product>({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<{ message: string }, string>({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
      // providesTags: ["Product"],
    }),
    createReview: builder.mutation<void, ReviewPayload>({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getTopProducts: builder.query<Product[], void>({
      query: () => `${PRODUCTS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productsApiSlice;
