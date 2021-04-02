import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import CheckOut from '../CheckOut/CheckOut';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
const Home = () => {
    const [products, setProducts] = useState([]);
 const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5050/products')
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
                    products.map(product => <Product product={product} redirectCheckOut ={redirectCheckOut}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;