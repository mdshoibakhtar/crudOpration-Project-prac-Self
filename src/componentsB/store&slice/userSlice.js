import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/contacts' }),
    endpoints: (builder) => ({
        getApiData: builder.query < apiData({

        }),
    }),
})


export const { } = userApi