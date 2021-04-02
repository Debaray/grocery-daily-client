import React from 'react';
import './Spinner.css';
const Spinner = () => {
    return (
        <div>
            <div className="spinner-border spinner-style" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;