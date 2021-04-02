import React, { useEffect, useState ,useContext} from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
const CheckOut = () => {
    const [checkoutProduct, setCheckoutProduct] = useState({});
    const {id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetch('https://still-caverns-41542.herokuapp.com/checkoutProduct/'+id)
            .then(res => res.json())
            .then(data => setCheckoutProduct(data))
    }, [id])

    const checkoutProducts =() =>{
        const orderDetails ={...loggedInUser, products: checkoutProduct, orderTime: new Date()};
        fetch('https://still-caverns-41542.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data)
            { 
                alert('Checkout Successfully. Thanks For Shopping from Grocery Daily.');
                setCheckoutProduct({});
                history.replace('/');
            }
        })
        
    }
    return (
        <div>
            <h1 className="mt-4">Checkout</h1>
            <Table variant="dark">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>{checkoutProduct.productName}</td>
                            <td className="text-center">1</td>
                            <td className="text-center">${checkoutProduct.productPrice}</td>
                        </tr>
                    }
                    <tr>
                            <td colSpan="2">Total</td>
                            <td className="text-center">${checkoutProduct.productPrice}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="success" block onClick={checkoutProducts}>Checkout</Button>
        </div>
    );
};

export default CheckOut;