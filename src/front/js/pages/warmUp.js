import React from "react";
import { Cards } from "./card.js";
import { Navbar } from "../component/navbar";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/card.scss";

export const WarmUp = () => {
	return (
		<>
			<Navbar />
			<Container className="justify-content-center">
				<Row>
					<Col sm={12}>
						<div id="titleTabs">── Calentamiento ──</div>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/60gILvlLp2Q"
							title="Estocada"
							text="Comienza en una posición erguida con los brazos a ambos lados. 
                        Da un paso hacia atrás al mismo tiempo que bajas las caderas de manera que la rodilla de enfrente se flexione a 90 grados y la rodilla de atrás roce con el suelo."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/ZBpRvlkkVQg"
							title="Círculos con los brazos"
							text="Este ejercicio se dirige a tus hombros, tríceps, espalda y bíceps. Prepara las articulaciones de tus hombros antes de nadar. Es muy sencillo, basta con dibujar círculos con los brazos hacia delante y hacia atrás durante 30 segundos en cada dirección."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/lD6z554WPbk"
							title="Rotación de cuello"
							text="Realiza movimientos lentos en el cuello hacia la derecha e izquierda para reducir la tensión en las cervicales."
						/>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/auBLPXO8Fww"
							title="Burpees"
							text="Partiendo de la posición vertical bajar haciendo una sentadilla y apoyar las manos en el suelo completamente. 
                    Llevar los dos pies de un salto hacia atrás hasta colocarnos en posición horizontal. 
                    Hacer una flexión llegando a tocar el suelo con el pecho, volver a la posición de flexión y con un salto hacia adelante colocar los pies a la altura de las manos y subir a la vertical, y terminar con un pequeño salto."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/hhtHvWaXLak"
							title="Calentamiento de la parte inferior del cuerpo"
							text="Ayuda a disminuir el riego de lesiones y mejorar el rendimiento en el entrenamiento"
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/2coEG3_7LT0"
							title="Calentamiento de la parte superior del cuerpo"
							text="Estos ejercicios de preparación del tren superior (tronco, hombros, brazos y cuello), deberás realizarlos en seco antes de comenzar la actividad física, son muy aconsejables, ya que te evitarán lesiones y sobrecargas musculares mientras nadas y minimizarán el riesgo de que tengas agujetas. "
						/>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/z_zmBZ1El58 "
							title="Estiramientos"
							text="Realizar rotaciones de las articulaciones principales del cuerpo: cuello, espalda, cintura, rodillas, caderas y tobillos  antes de practicar la natación ayuda a evitar muchas lesiones."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/u9yeOcfI4Wg"
							title="Estiramientos después de nadar"
							text="Resulta esencial reservar unos minutos para la sesión de estiramiento tras haber nadado, independientemente de la duración o intensidad de la actividad que hayas realizado en el agua.
                    Los estiramientos te permitirán además evitar las sobrecargas musculares y aumentarán la flexibilidad de tu cuerpo."
						/>
					</Col>
					<Col sm={4}>
						<Cards
							video="https://www.youtube.com/embed/8fr_WUKzqBU"
							title="Estiramientos dentro del agua"
							text="Aumenta la flexibilidad y agilidad en el desempeño.
                    Facilita la ejecución de ciertas técnicas especializadas de nado.
                    Ayuda a controlar la fuerza en los músculos.
                    Favorece la concentración y coordinación de los movimientos al nadar."
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};
