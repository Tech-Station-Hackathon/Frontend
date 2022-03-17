<<<<<<< HEAD
// Logo de la pagina web
=======
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../context/UserContext';


>>>>>>> 98852808d5480b3ae0ce63c97e4459f3101c2f7f
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