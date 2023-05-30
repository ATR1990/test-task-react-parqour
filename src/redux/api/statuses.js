import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL_STATUSES } from '../../const/statuses_url.js'

export const statusesApi = createApi({
    reducerPath: 'statusesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_STATUSES
    }),
    endpoints: (builder) => ({
        getStatuses: builder.query({
            query: () => ''
        })
    })
})

export const { useGetStatusesQuery } = statusesApi
