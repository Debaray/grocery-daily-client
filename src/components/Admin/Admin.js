import React from 'react';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const Admin = () => {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className=" sidebar align-items-lg-center justify-content-lg-center col-sm-12 col-md-3 col-lg-3">
                        <Link className="sidebar-item" to="/admin/manageProducts"><FontAwesomeIcon icon={faTasks} /> Manage Product</Link>
                        <Link className="sidebar-item" to="/admin/addProduct"><FontAwesomeIcon icon={faPlus} /> Add Product</Link>
                    </div>

                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <Switch>
                           
                            <PrivateRoute path="/admin/manageProducts">
                                <ManageProducts />
                            </PrivateRoute>
                            <PrivateRoute path="/admin/addProduct">
                                <AddProduct />
                            </PrivateRoute>
                            <PrivateRoute path="/admin">
                            <ManageProducts />
                            </PrivateRoute>
                        </Switch>
                    </div>
                </div>

            </div>
        </Router>
    );
};

export default Admin;