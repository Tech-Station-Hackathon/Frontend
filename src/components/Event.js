// Detalle del Evento
const Event = (props) => {
    return (
        <>
            <div className="card" style="width: 18rem;">
                <img src={props.video} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    {props.isOnline
                    ? <Link to="/registerOnline">
                        <button type="button" onClick={() => registerOnline()} className="btn btn-primary btn-sm add" >Inscribirse Online</button>
                      </Link>
                    : <div></div>
                    }
                    {props.isPresential
                    ? <Link to="/registerPresential">
                        <button type="button" onClick={() => registerPresential()} className="btn btn-primary btn-sm add" >Inscribirse Presencial</button>
                      </Link>
                    : <div></div>
                    }
                </div>
            </div>
        </>
    );
}

export default Event;   