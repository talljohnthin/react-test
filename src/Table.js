import React from 'react'
import "./table.css"

 function formatNumber(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

const Table = ({ orders, removeProduct }) => {
    return <table>
        <tbody>
            <tr>
                <th>Product Name</th>
                <th>Cost</th>
                <th>Qty</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            {orders.map((product, index) => {
                return <tr key={index}>
                    <td>{product.productName}</td>
                    <td>{formatNumber(product.cost)}</td>
                    <td>{product.qty}</td>
                    <td>{formatNumber(product.amount)}</td>
                    <td><button onClick={() => removeProduct(product.productId)}>Remove</button></td>
                </tr>
            } )}
        </tbody>
  </table>
}

export default Table
