import { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";

import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@/lib/react-redux";
import { FetchBaseQueryError } from "@/types";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // prepareHeaders: (headers) => {
  //   // Add any additional headers if needed
  //   return headers;
  // },
  credentials: "include",
}) as BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object>;

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
});
