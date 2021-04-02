import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Spinner from '../Spinner/Spinner';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [showSpin, setShowSpin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://still-caverns-41542.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setShowSpin(true)
            })
    }, [loggedInUser])
    return (
        <div>
            {!showSpin && <Spinner></Spinner>}
            {
                showSpin && <div>
                    <h1>You have :{orders.length} orders</h1>
                    <Table variant="dark">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr>
                                    <td>{(new Date(order.orderTime)).toDateString('dd/MM/yyyy')}</td>
                                    <td >{order.products?.productName}</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">${order.products?.productPrice}</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            }
        </div>
    );
};

export default Orders;