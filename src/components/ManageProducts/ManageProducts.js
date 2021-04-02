import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {   Redirect,
    useHistory,
    useLocation } from "react-router-dom";

const ManageProducts = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const deleteProduct = id => {
        fetch(`http://localhost:5050/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           
        })           
    }
    return (
        <div>
            <Table striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th className="text-center">Weight</th>
                        <th className="text-center">Price</th>
                        <th className="text-end justify-content-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <td>{product.productName}</td>
                            <td className="text-center">{product.productWight}</td>
                            <td className="text-center">${product.productPrice}</td>
                            <td className="text-end"><Button variant="danger" onClick={() => deleteProduct(`${product._id}`)}><FontAwesomeIcon icon={faTrash} />Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;