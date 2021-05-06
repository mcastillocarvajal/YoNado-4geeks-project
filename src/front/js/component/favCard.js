import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/favCard.scss";
import { Context } from "../store/appContext";

export const FavCard = ({ link, title, description, deleteNumber }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mx-auto mb-5" style={{ maxWidth: "900px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<iframe
						className="m-2"
						width="100%"
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
						<div className="d-flex align-items-end">
							<button
								id="favbtn"
								variant="primary"
								className="btn d-flex justify-content-center text-white ml-5"
								onClick={() => actions.deleteFavorite(store.user.id, link)}>
								<i id="favstar" className="fas fa-star mr-1 mt-1" />
								Favorito
							</button>
						</div>
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
