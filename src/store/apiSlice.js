import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const apiSlice = createApi({
    path :"api", 
    baseQuery : fetchBaseQuery({baseUrl : ""}),
    tagTypes : [],
    endpoints : (builder) => ({
        getApi : builder.query({
            query : ()=>"",
            providesTags : ()=>{}
        }),
        postApi :  builder.mutation({
        query : ({url, data, contentType, type})=>({url : type ? url : `/admin${url}`, method : "POST", data:data, contentType : contentType}),
        invalidatesTags : (_, __, { tag }) => tag ? [{ type: tag }] : []
        }),
    })
})







export const { useGetApiQuery, usePostApiMutation } = apiSlice
