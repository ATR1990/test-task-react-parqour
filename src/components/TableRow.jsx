import { useEffect, useRef, useState } from 'react'

import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { Button } from 'react-bootstrap'

import { useDeleteTaskMutation } from '../redux/api/tasks.js'
import { DataModal } from './DataModal.jsx'

// eslint-disable-next-line react/prop-types
export const TableRow = ({ tasks }) => {
  const [show, setShow] = useState(false)
  const [id, setId] = useState('')
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

  const handleShow = i => () => {
    setShow(true)
    setId(i)
  }

  return (
    <>
      <tbody onDragEnd={drop}>
        {list?.map((task, index) => (
          <tr
            className="cursor"
            key={task?.id}
            draggable
            onDragStart={dragStart(index)}
            onDragEnter={dragEnter(index)}
          >
            <td>{task?.title}</td>
            <td>{task?.description}</td>
            <td>{task?.status}</td>
            <td>
              <div className="d-flex justify-content-around">
                <Button variant="outline-warning" onClick={handleShow(task?.id)}>
                  <BsPencilSquare></BsPencilSquare>
                </Button>

                <Button
                  variant="outline-danger"
                  onClick={() => deleteTask({ id: task?.id })}
                >
                  <BsTrash></BsTrash>
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>

      {show && <DataModal
        show={show}
        setShow={setShow}
        isEdit={true}
        id={id}
      />}
    </>
  )
}
