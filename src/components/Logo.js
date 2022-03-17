import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ isLogin }) => {
    return (
        <div className="col-6">
            {
                isLogin ?
                    <Link to="/" >Telecom Eventos</Link>
                    : <></>
            }
        </div>
    );
}

export default Logo;  