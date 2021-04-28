import React from "react";
import PropType from "prop-types";
import { Card, Button, Container, Image } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../../styles/card.scss";

export const Cards = props => {
	//const { store, actions } = useContext(Context);
	return (
		<Card id="card" style={{ width: "25rem" }}>
			<Card.Header>
				<iframe
					width="356"
					height="300"
					src="https://www.youtube.com/embed/djV11Xbc914"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<Button id="btn" variant="primary">
					<i className="fas fa-star " id="star" />
					FAVORITO
				</Button>
			</Card.Header>
			<Card.Body>
				<Card.Title id="title" data-toggle="modal" data-target="#staticBackdrop">
					<a href="#">─────Card Title</a>
				</Card.Title>
				<Card.Text id="text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>

			{/* Inicio del Modal para ver video - Alonso */}

			<div
				className="modal fade"
				id="staticBackdrop"
				data-backdrop="static"
				data-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								id="cardclosealonso"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="container">
								<div className="row">
									<div className="col" id="ColAlonso">
										<iframe
											width="600"
											height="400"
											src="https://www.youtube.com/embed/djV11Xbc914"
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<div>
								<h3>─────Card Title</h3>
							</div>
							<div>
								<p>
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Final del Modal para ver video - Alonso */}
		</Card>
	);
};
Cards.propTypes = {
	video: PropType.string,
	title: PropType.string,
	text: PropType.string
};
