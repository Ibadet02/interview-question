import React from 'react'
import { Table } from 'react-bootstrap'

export const DataTable = ({ data, ...rest }) => {
  return (
    <Table striped bordered hover {...rest}>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Order Date</th>
          <th>Order Amount</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) =>
          item.product.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              {/* {console.log(item.date)} */}
              <td>{item.amount}</td>
              <td>{product.price} $</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  )
}
