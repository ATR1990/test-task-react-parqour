import {
  useGetTasksQuery,
  // useCreateTaskMutation,
  // useUpdateTaskMutation,
} from '../redux/api/tasks.js'

import { TableRow } from './TableRow.jsx'

export const TableBody = () => {
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTasksQuery()
  // const [createTask] = useCreateTaskMutation()
  // const [updateTask] = useUpdateTaskMutation()

  let content

  if (isLoading) {
    content = (
      <tbody>
        <tr>
          <td colSpan="4" className="text-center">
            Loading...
          </td>
        </tr>
      </tbody>
    )
  } else if (isSuccess) {
    content = <TableRow tasks={tasks} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return content
}
