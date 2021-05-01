import React from "react";
import { Cards } from "./card.js";
import { Navbar } from "../component/navbar";
import { Container, Row, Col } from "react-bootstrap";

export const Exercises = () => {
	return (
		<Container className="justify-content-center">
			<Row>
				<Col sm={12}>
					<div id="titleTabs">── Ejercicios ──</div>
				</Col>
			</Row>
			{/* first row */}
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/VQxykkE2t-g"
						title="Estilo-Crol"
						text="Este estilo es el más habitual, para realizar el estilo crol debe colocarse en posición ventral y consiste en una acción completa de ambos brazos (brazada) de manera consecutiva, primero el derecho y luego izquierdo, y un número variable de movimientos de pierna (patada)."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/3QyiHNUbxrA"
						title="Brazada-Crol"
						text="El brazo debe de estar ligeramente flexionado, con el codo por encima de la mano). La muñeca se mantiene ligeramente flexionada unos grados desde la línea del antebrazo. "
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/7PT9tYuVU-A"
						title="Patada-de-Crol"
						text="La pierna derecha empieza a descender vigorosamente al ser forzada hacia abajo su parte superior. La rodilla empieza a extenderse y, a medida que el pie derecho pasa por el lado de la pierna izquierda, el empeine está en línea paralela con el tobillo del pie derecho."
					/>
				</Col>
			</Row>
			{/* second row */}
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/mSyGxcDcqNo"
						title="Giro-Crol"
						text="Con los brazos parados, estirados y pegados al cuerpo, el nadador realiza una fuerte patada de mariposa mientras sigue con la barbilla totalmente pegada al pecho, lo que hace que la cabeza se hunda y las caderas se eleven. Este es el momento del inicio del giro."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/vb2ORArw0wk"
						title="Estilo-Dorso"
						text="Dorso es similar al crol, pero boca arriba, es decir que flotaremos sobre la espalda en el agua. Los brazos se mueven en un movimiento de molino. El cuerpo debe rotar de un lado al otro, de manera que los brazos se extiendan a su máximo alcance, para poder impulsarnos con la mayor fuerza a través del agua."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/GK38hfzH7zI"
						title="Salida-dorso"
						text="Los nadadores se impulsarán y comenzarán a nadar de espalda, pudiendo antes, estar sumergido durante una distancia nunca superior a los 15 metros."
					/>
				</Col>
			</Row>
			{/* third row */}
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/f2PYVtCtvUE"
						title="Brazada-Dorso"
						text="El estilo espalda o dorsal es un estilo de natación en el que se usan ambos brazos, y la cabeza hacia arriba. Este estilo es esencialmente crol, solo que el nadador flota con la espalda en el agua.  La secuencia de movimientos es alternativa: un brazo en el aire con la palma de la mano saliendo de debajo de la pierna."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/Nym1cb-s7Mo"
						title="Patada-Dorso"
						text="Manteniendo el pie en una posición relajada, extiende los tobillos y apunta los dedos de los pies. Con una posición bastante recta, dobla las rodillas ligeramente a medida que tu pie se desplaza hacia el fondo de la piscina. Luego estira la pierna mientras el pie se mueve hacia la superficie del agua."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/AqiK-jnBAN8"
						title="Estilo-Pecho"
						text="Es considerado el más lento de los estilos de nado. Esto se debe a que, en la fase de recobro de las piernas, se produce una desaceleración del cuerpo. 
                        El pecho es el primer estilo que aprenden los nadadores ya que se utiliza una técnica tranquila y agradable. Pero también es uno de los estilos que más cuesta dominar puesto que requiere de mucha coordinación en los movimientos."
					/>
				</Col>
			</Row>
			{/* fourth row */}
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/MQKySt3het0"
						title="Brazada-Pecho"
						text="En este estilo, el nadador flota boca abajo, con los brazos apuntando al frente y ejecuta la siguiente secuencia: hace un círculo con los brazos, siempre debajo de la superficie del agua."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/jUwkOSHy-kE"
						title="Patada-Pecho"
						text="Para realizar la patada, los pies se llevan hacia las caderas o hacia los glúteos, flexionándose las rodillas sin separarlas excesivamente. Cuando las rodillas alcanzan su máxima flexión, los pies giran hacia afuera y se mantienen flexionados."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/nxq-ekhg5_s"
						title="Giro-Pecho"
						text="Las dos manos deben tocas la pared al mismo tiempo, una mano se queda en la pared y la otra regresa por debajo."
					/>
				</Col>
			</Row>
			{/* fifth row */}
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/YlhXuC25_L4"
						title="Estilo-Mariposa"
						text="El estilo mariposa se ha convertido en uno de los más difíciles debido a que demanda costosos niveles tanto de fuerza como de coordinación. 
                        Al igual que el estilo pecho, el nado mariposa es un estilo de nado simétrico, donde las manos y las piernas realizan movimientos paralelos durante todo el tiempo de nado. 
                        La mariposa emplea una patada doble. "
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/LrP0Qyykdjg"
						title="Patada-Mariposa"
						text="Mantén las piernas un poco flexionadas en las rodillas. 
                        Mueve las caderas hacia arriba y extiende las piernas. 
                        A medida que las caderas se mueven hacia arriba, extiende las piernas y realiza un movimiento de látigo. 
                        Deja que las caderas guíen la parte superior de las piernas hacia arriba."
					/>
				</Col>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/27PFeOdhTcI "
						title="Brazada-Mariposa"
						text="Consiste en llevar los brazos, de forma simultánea, desde las caderas por fuera del agua, flexionando los codos y estirándolos para realizar nuevamente la entrada al agua. "
					/>
				</Col>
			</Row>
			{/* sixth row */}
			<Row>
				<Col sm={4}>
					<Cards
						video="https://www.youtube.com/embed/nxq-ekhg5_s"
						title="Giro-Mariposa"
						text="Las dos manos deben tocar la pared al mismo tiempo, una mano se queda en la pared y la otra regresa por debajo."
					/>
				</Col>
			</Row>
		</Container>
	);
};
