import { Modal } from './components/Modal.jsx'
import { Table } from './components/Table.jsx'
export const App = () => (
  <div className="container">
    <div className="row justify-content-center">
      <h1 className="display-5 fw-bold text-center">My Task List</h1>
      <Modal />
      <Table />
    </div>
  </div>
)
