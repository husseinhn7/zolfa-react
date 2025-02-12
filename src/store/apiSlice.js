import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "js-cookie";

export const apiSlice = createApi({
  path: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.2:5000/api",
    prepareHeaders: (headers) => {
      const token = Cookie.get("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["exam", "student", "level", "intake", "subject", "answer"],
  endpoints: (builder) => ({
    getApi: builder.query({
        query : ({url})=>({ url:url, method : "GET" }),
        providesTags : (_, __, { tag }) => tag ? [{ type: tag }] : []


    }),
    postApi: builder.mutation({
      query: ({ url, body, isFormData = false }) => {
        const headers = isFormData ? {} : { "Content-Type": "application/json" };

        return {
          url,
          method: "POST",
          body,
          headers,
        };
      },
      invalidatesTags: (_, __, { tag }) => (tag ? [{ type: tag }] : []),
    }),
    updateApi: builder.mutation({
      query: ({ url, body }) => ({
        url,
        method: "PATCH",
        body,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: (_, __, { tag }) => (tag ? [{ type: tag }] : []),
    }),
    deleteApi: builder.mutation({
      query: ({ url, body }) => ({
        url,
        method: "DELETE",
        body,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: (_, __, { tag }) => (tag ? [{ type: tag }] : []),
    }),
  }),
});

export const { useGetApiQuery, usePostApiMutation, useUpdateApiMutation, useDeleteApiMutation } =
  apiSlice;
