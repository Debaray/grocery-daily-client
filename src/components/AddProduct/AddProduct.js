import React, { useState } from 'react';
import './AddProduct.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AddProduct = () => {
    // const [imageUrl, setImageUrl] = useState(null);
    const [productData, setProductData] = useState({
        productName: '',
        productWight: '',
        productPrice: 0,
        imageUrl: ''
    });
    const handleSubmit = e => {
        console.log(productData);
        const url = `http://localhost:5050/addProducts`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
        e.preventDefault();
    }
    const handleProductImageChange = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'c01893fe74bfd862af43b215adb0d9d1');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                // setImageUrl(response.data.data.display_url);
                const newProductData = { ...productData };
                newProductData.imageUrl = response.data.data.display_url;
                setProductData(newProductData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleProductPropertyChange = event => {
        const newProductData = { ...productData };
        newProductData[event.target.name] = event.target.value.trim();
        setProductData(newProductData);
    }
    return (
        <div>
            <h2>Add Product</h2>
            <form className="mt-3 form-style">
                <div className="row">
                    <label htmlFor="productName" className="col-sm-12 col-md-6 col-lg-6">
                        Product Name
                   <hr></hr>
                        <input className="col-sm-12 col-md-10 col-lg-10" name="productName" placeholder="e.x- milk,chips,egg" type="text" onChange={handleProductPropertyChange} />
                    </label>
                    <label className="col-sm-12 col-md-6 col-lg-6">
                        Weight
                   <hr></hr>
                        <input className="col-sm-12 col-md-10 col-lg-10" name="productWight" placeholder="e.x- 1kg" type="text" onChange={handleProductPropertyChange} />
                    </label>
                </div>
                <div className="row mt-2">
                    <label className="col-sm-12 col-md-6 col-lg-6">
                        Add Price
                   <hr></hr>
                        <input className="col-sm-12 col-md-10 col-lg-10" name="productPrice" placeholder="e.x- 10$" type="number" onChange={handleProductPropertyChange} />
                    </label>
                    <label className="col-sm-12 col-md-6 col-lg-6">
                        Add Photo
                   <hr></hr>
                        <input className="col-sm-12 col-md-10 col-lg-10" type="file" onChange={handleProductImageChange} />
                    </label>
                </div>
                <br />
                <Button variant="success" as="input" type="submit" value="Save" block onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default AddProduct;