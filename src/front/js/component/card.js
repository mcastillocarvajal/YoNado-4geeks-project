import React from "react";
import PropType from "prop-types";
import { Card, Button, Container, Image } from "react-bootstrap";

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
				<Card.Title id="title">─────Card Title</Card.Title>
				<Card.Text id="text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
Cards.propTypes = {
	video: PropType.string,
	title: PropType.string,
	text: PropType.string
};
