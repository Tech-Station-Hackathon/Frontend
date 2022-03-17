import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../context/UserContext';


const Logo = () => {
    const { isLogin } = useContext(userContext);

    return (
        <div className="col-4 d-flex justify-content-center">
            {

                isLogin() ?
                    <Link to="/" >LOGO</Link>
                    :
                    <Link to="/login" >LOGO</Link>
            }
        </div>
    );
}

export default Logo;  