import { Spinner } from 'react-bootstrap'

import { TableRow } from './TableRow.jsx'
import { useGetTasksQuery } from '../redux/api/tasks.js'


export const TableBody = () => {
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTasksQuery()

  let content

  if (isLoading) {
    content = (
      <tbody>
        <tr>
          <td colSpan="4" className="text-center">
            <Spinner animation="border" />
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
