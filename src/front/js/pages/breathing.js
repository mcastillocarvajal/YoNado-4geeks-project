import React from "react";
import { Cards } from "./card.js";
import { Navbar } from "../component/navbar";
import { Container, Row, Col } from "react-bootstrap";

export const Breathing = () => {
	return (
		<>
			<Navbar />
			<Container className="justify-content-center">
				<Row>
					<Col sm={12}>
						<div id="titleTabs">── Respiración ──</div>
					</Col>
				</Row>
				{/* first row */}
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/MnmQwLpNIBU"
							title="¿Cómo evitar agua en tu nariz?"
							text="Comienza a desarrollar este reflejo sin dolor y practica con un clip de nariz. El agua no entrará en tu nariz, comenzarás a aprender a respirar por la boca."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/aI6mQmhAKYc"
							title="¿Cada cuantas brazadas hay que respirar?"
							text="La respiración en natación es uno de los aspectos más básicos y es fundamental aprender a realizarla correctamente y elegir el patrón de respiración más cómodo y eficaz."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/1tVHITYP1p8"
							title="Estilo Crol – 2 tips para respirar correctamente"
							text="Si estás empezando, hay dos consejos que te ayudarán a aprender el estilo crol más rápido."
						/>
					</Col>
				</Row>
				{/* second row */}
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/ohkBJmrpYEA"
							title="Estilo Crol -  5 Puntos clave"
							text="Te mostramos las fases de la respiración con 5 consejos para aprender a respirar y ser más eficientes en el agua."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/GkYPoCNVDoQ"
							title="Estilo Crol - Técnicas de respiración"
							text="En este video te mostramos una técnica de respiración en 2 etapas: rotación y vuelta a la posición de base."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/7CZ00qL"
							title="Estilo Crol - 3 ejercicios básicos"
							text="Ejercicios prácticos para la asimilación de la técnica de respiración"
						/>
					</Col>
				</Row>
				{/* third row */}
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/UbtSZubmpKQ"
							title="Estilo Crol -  4 ejercicios de respiración"
							text="Algunos ejercicios de respiración que puedes hacer para mantener una mejor posición horizontal mientras nadas con un estilo crol fácil."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/SchcknudM_E"
							title="Estilo Crol - Respira hacia atrás "
							text="En el estilo crol, un error común es sacar la cabeza demasiado para respirar. Esto hace que tus piernas se hundan, tus manos cruzarse y jalar hacia abajo solo para mantenerse a flote."
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};
