import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../context/UserContext';


const Logo = () => {
    const { isLogin } = useContext(userContext);

    return (
        <div className="col-4">
            {

                isLogin() ?
                    <Link to="/" className=""><img src="" alt="Telecom" className="d-inline-block align-text-center" width="30" height="24" /></Link>
                    :
                    <Link to="/login" ><img src="" alt="Telecom" /></Link>
            }
        </div>
    );
}

export default Logo;  