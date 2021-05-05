import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProfileButtons } from "./ProfileButtons";
import { FavCard } from "./favCard";

export const Favorites = () => {
	const btnStyle = {
		background: "#13718E",
		borderRadius: "19.5px",
		border: "none",
		width: "157px",
		height: "39px",
		fontFamily: "Jura, sans-serif"
	};

	const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar />
			<Row>
				<ProfileButtons />
			</Row>
			<div className="d-flex justify-content-center mt-3" id="line">
				<hr />
			</div>
			<div className="container">
				{store.favorites.length == 0 ? (
					<div className="mt-5" style={{ height: "75vh" }}>
						<i
							className="fas fa-swimmer text-muted d-flex justify-content-center"
							style={{ fontSize: "100px" }}
						/>
						<h3 className="text-center text-muted">No hay favoritos</h3>
						<h3 className="text-center text-muted mb-4">agregados</h3>
						<Link
							className="d-flex justify-content-center text-white"
							style={{ textDecoration: "none" }}
							to="/ejercicios">
							<Button className="text-center" style={btnStyle}>
								Agregar
							</Button>
						</Link>
					</div>
				) : (
					<div className="my-5">
						{store.favorites.map((item, i) => {
							return (
								<FavCard
									key={i}
									link={item.link}
									title={item.title}
									description={item.description}
									deleteNumber={item.deleteNumber}
								/>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};
