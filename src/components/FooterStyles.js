import styled from 'styled-components';
export const Box = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
width: 100%;
height: 130px;
background: black;
`;

/* export const Box = styled.div`
position: fixed;
bottom: 0;
width: 100%;
height: 120px;
background: linear-gradient(90deg, #09090a 30%, #626263 50%);

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`; */

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 100%;
margin: 0 auto;
/* background: red; */
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(305px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
font-size: 10px;
color: #fff;
margin-bottom: 5px;
text-decoration: none;

&:hover {
	color: violet;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 14px;
color: #fff;
margin-bottom: 5px;
font-weight: bold;
`;
