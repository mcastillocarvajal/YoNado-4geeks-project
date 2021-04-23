import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import "../../styles/carousel.scss";

export const Icons = () => {
	return (
		<>
			<Carousel fade={true} pause={false}>
				<Carousel.Item interval={5000}>
					<img className="d-block w-100" src={require("../../img/iconos1.jpg")} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img className="d-block w-100" src={require("../../img/iconos2.jpg")} alt="Third slide" />
				</Carousel.Item>
			</Carousel>

			{/* <Row className=" mb-4">
				<Col>
					<div className="d-flex justify-content-center">
						<h1>Mis íconos</h1>
					</div>
					<div className="d-flex justify-content-center">
						<p>akjshdghasgfhjghajsgfdhjgahjdsgfjhgashgfhjagdf</p>
					</div>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col>
					<div className="d-flex justify-content-center">
						<i style={{ color: "#4ddbff" }} className="fas fa-swimmer fa-4x" />
					</div>
					<div className="d-flex justify-content-center">Entrenamiento de bajo impacto</div>
				</Col>
				<Col>
					<div className="d-flex justify-content-center">
						<i className="fas fa-heartbeat fa-4x" />
					</div>
					<div className="d-flex justify-content-center">Ejercicio aeróbico quema grasa</div>
				</Col>
				<Col>
					<div className="d-flex justify-content-center">
						<i className="far fa-smile-wink fa-4x" />
					</div>
					<div className="d-flex justify-content-center">Mejora el estado de ánimo</div>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<div className="d-flex justify-content-center">
						<i className="fas fa-hand-holding-usd fa-4x" />
					</div>
					<div className="d-flex justify-content-center">Costo bajo</div>
				</Col>
				<Col>
					<div className="d-flex justify-content-center">
						<i className="fas fa-users fa-4x" />
					</div>
					<div className="d-flex justify-content-center">Comunidad al rededor del deporte</div>
				</Col>
				<Col>
					<div className="d-flex justify-content-center">
						<i className="fas fa-stopwatch fa-4x" />
					</div>
					<div className="d-flex justify-content-center">Efectivo en poco tiempo</div>
				</Col>
			</Row> */}
		</>
	);
};
