import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        fetch('https://still-caverns-41542.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const deleteProduct = id => {
        fetch(`https://still-caverns-41542.herokuapp.com/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then(res => console.log(res))
        .then(data => {
           console.log('delete done');
        })
        .catch(err => {console.log(err)})    
        
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