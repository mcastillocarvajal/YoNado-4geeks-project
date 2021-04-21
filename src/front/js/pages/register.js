import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";

import "../../styles/register.scss";

export const Register = () => {
	//const { store, actions } = useContext(Context);
	return (
		<Container>
			<Row className="justify-content-center pt-5 mt-5 mr-1">
				<Col className="col-md-6 formulary">
					<Form action="">
						<FormGroup className="text-center pb-2">
							<h1>Registro</h1>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-2">
							<input type="text" className="form-control" placeholder="Nombre" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-2">
							<input type="text" className="form-control" placeholder="Apellido" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-2">
							<input type="text" className="form-control" placeholder="Correo Electrónico" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-2">
							<input type="password" className="form-control" placeholder="Contraseña" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-2">
							<Button className="btn btn-block signin">Subscribete</Button>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-2 text-center">
							<Link to="/">
								<input
									type="submit"
									className="btn btn-block register"
									value="Volver a iniciar sesión"
								/>
							</Link>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
