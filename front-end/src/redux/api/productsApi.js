// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/products" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
