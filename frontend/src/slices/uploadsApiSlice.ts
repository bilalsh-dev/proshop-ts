import { UPLOADS_URL } from "@/constants";

import { apiSlice } from "./apiSlice";

export const uploadsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<{ message: string; image: string }, FormData>(
      {
        query: (data) => ({
          url: UPLOADS_URL,
          method: "POST",
          body: data,
        }),
      }
    ),
  }),
});

export const { useUploadImageMutation } = uploadsApiSlice;
