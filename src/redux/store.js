import { configureStore } from '@reduxjs/toolkit'

import { tasksApi } from './api/tasks.js'

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tasksApi.middleware
    )
})
