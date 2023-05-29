import { BsPlusLg } from 'react-icons/bs'

export const Modal = () => {
  const handleSubmit = () => {

  }

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <BsPlusLg></BsPlusLg>
        </button>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="staticBackdropLabel"
              >
                Create task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    id="description"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select className="form-control" id="status">
                    <option>Unassigned</option>
                    <option>Pending</option>
                    <option>Completed</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-success"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
