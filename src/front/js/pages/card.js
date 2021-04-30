import React, { useContext } from "react";
import PropType from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/card.scss";

export const Cards = props => {
	const { store, actions } = useContext(Context);
	const handleDelete = link => {
		const filter = store.favorites.filter(item => item.link == link);
		const id = filter.map(i => i.id);
		return id;
	};
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
				<Button
					id="btn"
					variant="primary"
					onClick={() =>
						store.favorites.map(fav => fav.link).includes(item.link)
							? actions.deleteFavorite(handleDelete(item.id))
							: actions.addFavorite(item.title, item.description, item.link, store.id)
					}>
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
