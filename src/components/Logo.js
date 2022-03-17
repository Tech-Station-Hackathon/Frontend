import React from "react";
import { Link } from "react-router-dom";

const isLogin=true

const Logo = () => {
    return (
        <div className="col-4">
            {   
                
                isLogin ?
                    <Link to="/" className=""><img src="" alt="Telecom"  class="d-inline-block align-text-center" width="30" height="24"/></Link>
                    : 
                    <Link to="/login" ><img src="" alt="Telecom" /></Link>
            }
        </div>
    );
}

export default Logo;  