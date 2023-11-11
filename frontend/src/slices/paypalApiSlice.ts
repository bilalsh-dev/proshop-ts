import { PAYPAL_URL } from "@/constants";

import { apiSlice } from "./apiSlice";

export const paypalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPaypalClientId: builder.query<any, void>({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPaypalClientIdQuery } = paypalApiSlice;
