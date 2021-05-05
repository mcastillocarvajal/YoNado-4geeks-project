import React from "react";
import PropTypes from "prop-types";
import "../../styles/favCard.scss";

export const FavCard = ({ link, title, description, deleteNumber }) => {
	return (
		<div className="card mx-auto" style={{ maxWidth: "900px" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<iframe
						className="m-2"
						width="326"
						height="300"
						src={link}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title ml-3" id="favtitle">
							────&nbsp; {title}
						</h5>
						<p className="card-text ml-5" id="favtext">
							{description}
						</p>
						<button
							id="favbtn"
							variant="primary"
							className="d-flex justify-content-center"
							// style={{
							// 	backgroundColor: store.favorites.map(fav => fav.link).includes(props.video)
							// 		? "#3CD0FF"
							// 		: "#13718E"
							// }}
							// onClick={() =>
							// 	store.favorites.map(fav => fav.link).includes(props.video)
							// 		? actions.deleteFavorite(store.user.id, props.video)
							// 		: actions.addFavorite(props.title, props.text, props.video, store.user.id)
							// }
						>
							<i
								id="favstar"
								className="fas fa-star mr-1"
								//{
								// 	store.favorites.map(fav => fav.link).includes(props.video)
								// 		? "fas fa-star mr-1"
								// 		: "far fa-star mr-1"
								// }
							/>
							Favorito
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

FavCard.propTypes = {
	link: PropTypes.any,
	title: PropTypes.any,
	description: PropTypes.any,
	deleteNumber: PropTypes.any
};
