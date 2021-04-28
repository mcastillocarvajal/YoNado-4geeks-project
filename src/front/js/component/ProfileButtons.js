import React, { useHistory } from "react";
import "../../styles/tabla.scss";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import "../../styles/botones.module.scss";

export const ProfileButtons = () => {
	return (
		<>
			<Row className="mx-auto mt-5">
				<Col style={{ marginRight: "5rem" }}>
					<div className="circlewoowoo">AA</div>
				</Col>
				<Col>
					<Link to="/favoritos">
						<Button variant="light" className="mt-5" id="btn">
							Favoritos
						</Button>
					</Link>
				</Col>
			</Row>
		</>
	);
};
