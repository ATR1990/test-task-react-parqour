import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

import {
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation
} from '../redux/api/tasks.js'
import { useGetStatusesQuery } from '../redux/api/statuses.js'

export const DataModal = props => {
  // eslint-disable-next-line react/prop-types
  const  { show, setShow, isEdit, id } = props

  const { data: statuses } = useGetStatusesQuery()
  const { data: taskById } = useGetTaskByIdQuery(id, { skip: !isEdit })

  const [createTask] = useCreateTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    taskById && setTitle(taskById?.title)
    taskById && setDescription(taskById?.description)
    taskById && setStatus(taskById?.status)
  }, [
    taskById?.title,
    taskById?.description,
    taskById?.status
  ])

  const handleClose = () => setShow(false)
  const handleChangeTitle = event => setTitle(event.target.value)
  const handleChangeDescription = event => setDescription(event.target.value)
  const handleChangeStatus = event => setStatus(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    isEdit
      ? updateTask({ title, description, status, id })
      : createTask({ title, description, status })
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {`${isEdit ? 'Edit' : 'Create'} task`}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              id="title"
              value={title}
              onChange={handleChangeTitle}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              id="description"
              value={description}
              onChange={handleChangeDescription}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="status">Status</Form.Label>
            <Form.Select
              id="status"
              className="text-capitalize"
              value={status}
              onChange={handleChangeStatus}
            >
              {statuses?.map(
                (status, index) => <option key={index}>{status}</option>
              )}
            </Form.Select>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
