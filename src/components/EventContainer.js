import Event from './Event'

const eventos = [
    {
      id: 1,
      title: "Nuevos modelos de Telefonos Celulares",
      thumbnail: require("../assets/Carrusel1.jpg"),
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      isonline: true,
      ispresential: true
    },
    {
      id: 2,
      title: "Introduccion a IOT",
      thumbnail: require("../assets/Carrusel2.jpg"),
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      isonline: true,
      ispresential: false
    },
    {
      id: 3,
      title: "Conectividad 4G para Grandes Empresas",
      thumbnail: require("../assets/Carrusel3.jpg"),
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      isonline: false,
      ispresential: true
    },
    {
      id: 4,
      title: "Introduccion a la tecnologia 5G",
      thumbnail: require("../assets/Carrusel4.jpg"),
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      isonline: true,
      ispresential: false
    }
];

const EventContainer = () => {
    return (
        <>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        {
                            eventos.length > 0
                            ? eventos.map((evento) =>
                                <Event key={evento.id}                                        
                                       id={evento.id}
                                       title={evento.title}
                                       thumbnail={evento.thumbnail}
                                       description={evento.description}
                                       isonline={evento.isonline}
                                       ispresential={evento.ispresential}
                                />
                            )
                            : <p>&nbsp;Espere un momento por favor...</p>
                        }
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventContainer;