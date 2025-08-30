import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

const baseApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: axiosBaseQuery(),
    endpoints: () => ({}),
});

export default baseApi;