import React, { useContext } from "react";
import PropType from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/card.scss";

export const Cards = props => {
	const { store, actions } = useContext(Context);

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
					style={{
						backgroundColor: store.favorites.map(fav => fav.link).includes(props.video)
							? "#3CD0FF"
							: "#13718E"
					}}
					onClick={() =>
						store.favorites.map(fav => fav.link).includes(props.video)
							? actions.deleteFavorite(store.user.id, props.video)
							: actions.addFavorite(props.title, props.text, props.video, store.user.id)
					}>
					<i
						id="star"
						className={
							store.favorites.map(fav => fav.link).includes(props.video)
								? "fas fa-star mr-1"
								: "far fa-star mr-1"
						}
					/>
					Favorito
				</Button>
			</Card.Header>
			<Card.Body>
				<Card.Title id="title" data-toggle="modal" data-target={"#" + props.title}>
					────&nbsp;
					{props.title}
				</Card.Title>
				<Card.Text id="text">{props.text}</Card.Text>
			</Card.Body>
			{/* Inicio del Modal para ver video - Alonso */}

			<div
				className="modal fade"
				id={props.title}
				data-backdrop="static"
				data-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="cerrar">
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
											src={props.video}
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
								<h3>
									────&nbsp;
									{props.title}
								</h3>
							</div>
							<div>
								<p>{props.text}</p>
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
	text: PropType.string,
	link: PropType.string,
	id: PropType.string,
	description: PropType.string,
	user_id: PropType.string
};
