import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts'
        })
    })

})

export const { useGetContactsQuery } = contactsApi





































