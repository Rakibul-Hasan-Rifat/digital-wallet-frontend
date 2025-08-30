import baseApi from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      unknown,
      { email: string; password: string },
      unknown
    >({
      query: (myVar) => {
        console.log("auth api", myVar);
        return {
          url: "/auth/login",
          method: "POST",
          data: myVar,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export default authApi;
