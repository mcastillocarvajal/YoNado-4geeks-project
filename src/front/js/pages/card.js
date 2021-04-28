import React from "react";
import PropType from "prop-types";
import { Card, Button } from "react-bootstrap";

import "../../styles/card.scss";

export const Cards = props => {
	//const { store, actions } = useContext(Context);
	return (
		<Card id="card" style={{ width: "23rem" }}>
			<Card.Header id="header">
				<iframe
					width="326"
					height="300"
					src={props.video}
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
				<Card.Title id="title">
					─────
					{props.title}
				</Card.Title>
				<Card.Text id="text">{props.text}</Card.Text>
			</Card.Body>
		</Card>
	);
};
Cards.propTypes = {
	video: PropType.string,
	title: PropType.string,
	text: PropType.string
};
