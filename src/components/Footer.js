import React from 'react';
import { Box, Container, Row, Column, FooterLink, Heading, } from './FooterStyles';

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>ACERCA DE</Heading>
						<FooterLink href="#">Compañia</FooterLink>
						<FooterLink href="#">Equipo</FooterLink>
						<FooterLink href="#">Inversores</FooterLink>
					</Column>
					<Column>
						<Heading>ASISTENCIA</Heading>
						<FooterLink href="#">Somos Telecom</FooterLink>
						<FooterLink href="#">Enacom contacto@enacom.gob.ar</FooterLink>
						<FooterLink href="#">Oferta interconexión</FooterLink>
						<FooterLink href="#">Operadores moviles</FooterLink>
					</Column>
					<Column>
						<Heading>CONFIANZA EN TUS COMPRAS</Heading>
						<FooterLink href="#">Política de Privacidad de Telecom</FooterLink>
						<FooterLink href="#">Política de Uso Aceptable de Servicios de Telecom</FooterLink>
					</Column>
					<Column>
						<Heading>AYUDA</Heading>
						<FooterLink href="#">Contacto</FooterLink>
						<FooterLink href="#">Centro de Ayuda</FooterLink>
						<FooterLink href="#">Telefonía fija hogar</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: '10px' }}>
				Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: '10px' }}>
				Twitter
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
