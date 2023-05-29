import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../const/url.js'

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Tasks']
        }),
        createTask: builder.mutation({
            query: task => ({
                url: '',
                method: 'POST',
                body: task
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTask: builder.mutation({
            query: task => ({
                url: `/${task.id}`,
                method: 'PATCH',
                body: task
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation({
            query: ({ id }) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Tasks']
        })
    })
})

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = tasksApi
