import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Nav } from "react-bootstrap";

export const Perfil = () => {
	return (
		<>
			<Nav className="justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">Mis favoritos</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Mi actividad</Nav.Link>
				</Nav.Item>
			</Nav>
			<Row>
				<Col />
				<Col />
			</Row>
			<Row>
				<Col />
				<Col />
			</Row>
		</>
	);
};
