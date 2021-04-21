import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";

import "../../styles/demo.scss";

export const SignUp = () => {
	//const { store, actions } = useContext(Context);
	return (
		<Container>
			<Row className="justify-content-center pt-5 mt-5 mr-1">
				<Col className="col-md-4 formulary">
					<Form action="">
						<FormGroup className="text-center pb-3">
							<h1 className="text-light">Register</h1>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Name" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Last Name" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="E-mail" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="password" className="form-control" placeholder="Password" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<Button className="btn btn-block signin">Create</Button>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3 text-center">
							<Link to="/">
								<input type="submit" className="btn btn-block register" value="Back to Login" />
							</Link>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
