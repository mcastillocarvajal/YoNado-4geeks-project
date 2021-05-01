import React from "react";
import { Cards } from "./card.js";
import { Navbar } from "../component/navbar";
import { Container, Row, Col } from "react-bootstrap";

export const Mistakes = () => {
	return (
		<>
			<Navbar />
			<Container className="justify-content-center">
				<Row>
					<Col sm={12}>
						<div id="titleTabs">── Errores más comunes ──</div>
					</Col>
				</Row>
				{/* first row */}
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/C7oERWpfbXE"
							title="Estilo-mariposa"
							text="-Sacar todo el pecho del agua al momento de respirar provoca resistencia y el ejercicio se vuelve más demandante
                        -La descoordinación entre la brazada y la patada hace el ejercicio menos efectivo
                        -Sumergir la cabeza después de la brazada también implica una mayor resistencia en el agua."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video=""
							title="Estilo-libre"
							text="-Sumergir una parte considerable del tronco y no mantener el cuerpo de forma horizontal.
                        -Dar las brazadas con un solo brazo y no alternar correctamente.
                        -No tomar bocanadas de aire de forma regular, lo cual genera como consecuencia una fatiga prematura al nadar.
                        -Dejar de propulsar con las piernas por falta de coordinación."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/c62juPrzmqk"
							title="Estilo-Dorso"
							text="-No coordinar las brazadas correctamente, lo cual genera fatiga para las piernas y los brazos.
                        -Mover mucho la cabeza (y el cuerpo) de lado a lado con el fin de ubicarse en la piscina.
                        -Hundir la pelvis y no mantener el cuerpo de forma horizontal."
						/>
					</Col>
				</Row>
				{/* second row */}
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/AqiK-jnBAN8"
							title="Estilo-pecho"
							text="-Hacer la brazada y la patada al mismo tiempo.
                        -No dejar tiempo de desliz.
                        -No tomar aire cada vez que la cabeza sale del agua."
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};
