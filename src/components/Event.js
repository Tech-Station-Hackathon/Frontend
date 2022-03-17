// Detalle del Evento

const registerOnline = () => {

} 

const registerPresential = () => {

} 

const Event = (evento) => {
    return (
        <>
            <br/><br/>
            <div className="card">
                <img src={evento.thumbnail} height={170} width={50} className="card-img-top" alt={evento.title} />
                <div className="card-body">
                    <h5 className="card-title">{evento.title}</h5>
                    <p className="card-text">{evento.description}</p>
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

export default Event;   