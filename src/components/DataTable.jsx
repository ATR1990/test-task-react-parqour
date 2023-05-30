import { Table } from 'react-bootstrap'

import { TableHead } from './TableHead.jsx'
import { TableBody } from './TableBody.jsx'

export const DataTable = () => (
  <Table className="w-50" bordered hover>
    <TableHead />
    <TableBody />
  </Table>
)
