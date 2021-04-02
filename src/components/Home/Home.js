import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import {
    useHistory
} from "react-router-dom";
const Home = () => {
    const [products, setProducts] = useState([]);
 const history = useHistory();
    useEffect(() => {
        fetch('https://still-caverns-41542.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const redirectCheckOut =(id) =>{
        history.push("/checkout/"+id);
        console.log(id);
    }
    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <Product key ={product._id}product={product} redirectCheckOut ={redirectCheckOut}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;