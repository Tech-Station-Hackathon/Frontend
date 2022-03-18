import React from 'react';
import { Carousel } from 'react-bootstrap';
import Carrusel1 from '../assets/Carrusel1.jpg';
import Carrusel2 from '../assets/Carrusel2.jpg';
import Carrusel3 from '../assets/Carrusel3.jpg';
import Carrusel4 from '../assets/Carrusel4.jpg';

const Carrusel = () => {
	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<div className="col-0 col-md-2">
					</div>
					<div className="col-12 col-md-28">
						<Carousel variant="dark" >
							<Carousel.Item>
								<img height={300} className="d-block w-100" src={Carrusel1} alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img height={300} className="d-block w-100" src={Carrusel2} alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img height={300} className="d-block w-100" src={Carrusel3} alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img height={300} className="d-block w-100" src={Carrusel4} alt="Third slide" />
							</Carousel.Item>                
						</Carousel>
					</div>
					<div className="col-0 col-md-2">
					</div>
				</div>
			</div>
		</>
	);
};

export default Carrusel;
