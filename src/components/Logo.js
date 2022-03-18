import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import '../styles/Logo.css'

const Logo = () => {

    return (
        <div className="col-4 d-flex justify-content-center align-items-center p-2">
            <Link to="/homeRegistered" className="d-flex flex-row gap-2 text-decoration-none">
                <FontAwesomeIcon icon={faRocket} className="color-light size-icon" />
                <div className="d-flex flex-column align-items-center fw-bold">
                    <span className="color-light " >HACKATECH #4</span>
                    <span className="fs-6 text-primary-50 ">Eventos TECO</span>
                </div>
            </Link>
        </div>
    );
}

export default Logo;  