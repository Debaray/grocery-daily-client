import React from 'react';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTasks } from '@fortawesome/free-solid-svg-icons';
const Admin = () => {
    return (
        <div className="container">
            <div className="row">
            <div className=" sidebar align-items-lg-center justify-content-lg-center col-sm-12 col-md-3 col-lg-3">
                <Link className="sidebar-item" to="/admin/manageProducts"><FontAwesomeIcon icon={faTasks} /> Manage Product</Link>
                <Link className="sidebar-item" to="/admin/addProduct"><FontAwesomeIcon icon={faPlus} /> Add Product</Link>
            </div>

            <div className="col-sm-12 col-md-9 col-lg-9">
                <h2>Responsive Sidebar Example</h2>
                <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                <h3>Resize the browser window to see the effect.</h3>
            </div>
            </div>

        </div>
    );
};

export default Admin;