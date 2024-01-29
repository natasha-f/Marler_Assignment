/** Table component */

import React from 'react';

export default function Table({ products }) {
    
    const listItems = products.map(product =>
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    );
}

