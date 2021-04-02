import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product,redirectCheckOut }) => {
    return (
       
            <Card style={{ width: '18rem', height: '25rem' }} className="col-sm-12 col-md-6 col-lg-3 mt-3" >
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.productName} {product.productWight}</Card.Title>
                </Card.Body>
                <Card.Footer className="d-flex align-items-lg-center">
                    <h3 className="mr-auto">${product.productPrice}</h3>
                   <Button variant="primary" onClick={() => redirectCheckOut(product._id)}><FontAwesomeIcon icon={faShoppingBag} /> Buy Now</Button>
                </Card.Footer>
            </Card>
        
    );
};

export default Product;