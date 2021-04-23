import React from "react";
import PropType from "prop-types";
import { Card, Button, Container, Image } from "react-bootstrap";

import "../../styles/card.scss";

export const Cards = props => {
	//const { store, actions } = useContext(Context);
	return (
		<Container>
			<Card className="card" style={{ width: "30rem" }}>
				<Card.Header>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/djV11Xbc914"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
					<Button className="btn" variant="primary">
						<i className="fas fa-star star" />
						FAVORITO
					</Button>
				</Card.Header>
				<Card.Body>
					<Card.Title>─────Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};
// Exercises.propTypes = {
// 	title: PropType.string,
// 	video: PropType.element,
// 	text: PropType.string
// };
