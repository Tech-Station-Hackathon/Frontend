import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const VideoEvento = () => {

    return (
        <div class="divVideoContainer">
            <div className="divTitle">
                <p>Evento OnLine</p>
            </div>            
            <div className="divVideoContainer">
                <ReactPlayer url="https://youtu.be/31xWfcXtTcQ"/>
            </div>  
            <div className="d-flex flex-row justify-content-center">
                <Link to="/encuesta">
                    <button type="button" className="btn btn-primary btn-sm add" >Encuesta</button>
                </Link>
            </div>          
        </div>
    )
}

export default VideoEvento
