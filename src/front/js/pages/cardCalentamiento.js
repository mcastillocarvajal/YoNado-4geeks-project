import React from "react";
import { Cards } from "./card.js";
import { Container, Row, Col } from "react-bootstrap";

export const CardCalentamiento = () => {
	return (
		<Container className="justify-content-center">
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/5uXoZ94s474"
						title="Estocada y Estiramiento"
						text="Comienza en una posición erguida con los brazos a ambos lados. Da un paso hacia atrás al mismo tiempo que bajas las caderas de manera que la rodilla de enfrente se flexione a 90 grados y la rodilla de atrás roce con el suelo. Al mismo tiempo, extiende el brazo opuesto hacia arriba y ligeramente hacia atrás para estirar la cadera anterior, abdominales y flexores."
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
			</Row>
		</Container>
	);
};
