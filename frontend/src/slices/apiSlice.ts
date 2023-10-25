import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@/lib/react-redux";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // prepareHeaders: (headers) => {
  //   // Add any additional headers if needed
  //   return headers;
  // },
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
