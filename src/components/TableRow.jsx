import { useEffect, useRef, useState } from 'react'

import { BsPencilSquare, BsTrash } from 'react-icons/bs'

import { useDeleteTaskMutation } from '../redux/api/tasks.js'

// eslint-disable-next-line react/prop-types
export const TableRow = ({ tasks }) => {
  const [list, setList] = useState(tasks)

  useEffect(() => {
    setList(tasks)
  }, [tasks])

  const [deleteTask] = useDeleteTaskMutation()

  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = position => event => {
    dragItem.current = position
    console.log(event.target.innerHTML)
  }

  const dragEnter = position => event => {
    dragOverItem.current = position
    console.log(event.target.innerHTML)
  }

  const drop = () => {
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]

    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)

    dragItem.current = null
    dragOverItem.current = null

    setList(copyListItems)
  }

  /*const updateTask = index => () => {
    console.log('updateTask', index)
  }*/

  return (
    <tbody onDragEnd={drop}>
      {list?.map((task, index) => (
        <tr
          className="cursor"
          key={task.id}
          draggable
          onDragStart={dragStart(index)}
          onDragEnter={dragEnter(index)}
        >
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.status}</td>
          <td>
            <div className="d-flex justify-content-around">
              <button
                type="button"
                className="btn btn-outline-warning"
                // onClick={updateTask(index)}
              >
                <BsPencilSquare></BsPencilSquare>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deleteTask({ id: task.id })}
              >
                <BsTrash></BsTrash>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
