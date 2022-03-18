import React from 'react';
import { Carousel } from 'react-bootstrap';
import Carrusel1 from '../assets/Carrusel1.jpg';
import Carrusel2 from '../assets/Carrusel2.jpg';
import Carrusel3 from '../assets/Carrusel3.jpg';
import Carrusel4 from '../assets/Carrusel4.jpg';

const Carrusel = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-1">
					</div>
					<div className="col-10">
						<Carousel>
							<Carousel.Item>
								<img height={200} className="d-block w-100" src={Carrusel1} alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img height={200} className="d-block w-100" src={Carrusel2} alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img height={200} className="d-block w-100" src={Carrusel3} alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img height={200} className="d-block w-100" src={Carrusel4} alt="Third slide" />
							</Carousel.Item>                
						</Carousel>
					</div>
					<div className="col-1">
					</div>
				</div>
			</div>
		</>
	);
};

export default Carrusel;
