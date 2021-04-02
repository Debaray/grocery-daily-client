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
                           
                            <Route path="/admin/manageProducts">
                                <ManageProducts />
                            </Route>
                            <Route path="/admin/addProduct">
                                <AddProduct />
                            </Route>
                            <Route path="/admin">
                            <ManageProducts />
                            </Route>
                        </Switch>
                    </div>
                </div>

            </div>
        </Router>
    );
};

export default Admin;