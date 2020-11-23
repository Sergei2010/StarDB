import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
       <div className="error-indicator card text-white bg-warning mb-3 d-flex">
           <img src={icon} className="img-fluid error-icon" alt="error icon" />
           <div className="boom card-header text-center"><h4>BOOM</h4></div>
           <div className="card-body">
               <p className="card-text">something has gone terribly wrong</p>
               <p className="card-text">(but we already sent droids to fix it)</p>
           </div>

       </div>
    );
};

export default ErrorIndicator;
