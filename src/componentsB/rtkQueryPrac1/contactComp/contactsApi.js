import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ['contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['contacts']
        }),
        deleteContactsList: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts']
        }),
        editData: builder.mutation({
            query: ({ id, ...editData }) => ({
                url: `contacts/${id}`,
                method: 'PATCH',
                body: editData,
            }),
            invalidatesTags: ['contacts']
        }),
        addData: builder.mutation({
            query: (contact) => ({
                url: `/contacts`,
                method: "POST",
                body: contact,
            }),
            invalidatesTags: ['contacts']

        })

    })
})
export const { useGetContactsQuery, useDeleteContactsListMutation, useEditDataMutation, useAddDataMutation } = contactsApi