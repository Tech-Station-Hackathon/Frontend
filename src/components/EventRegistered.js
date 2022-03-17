// Detalle del Evento para usuarios registrados

const registerOnline = () => {

} 

const registerPresential = () => {

} 

const EventRegistered = (evento) => {
    return (
        <>
            <br/><br/>
            <div className="card">
                <img src={evento.thumbnail} height={150} width={50} className="card-img-top" alt={evento.title} />
                <div className="card-body">
                    <h5 className="card-title">{evento.title}</h5>
                    <p className="card-text">{evento.description}</p>
                    <p className="card-text">Fecha del Evento: {evento.datetime}</p>
                    {evento.isonline
                        ? <button type="button" onClick={() => registerOnline()} className="btn btn-primary btn-sm add" >Inscribirse Online</button>
                        : <div></div>
                    }
                    &nbsp;&nbsp;&nbsp;
                    {evento.ispresential
                        ? <button type="button" onClick={() => registerPresential()} className="btn btn-primary btn-sm add" >Inscribirse Presencial</button>
                        : <div></div>
                    }
                </div>
            </div>
            <br/><br/>
        </>        
    );
}

export default EventRegistered;   