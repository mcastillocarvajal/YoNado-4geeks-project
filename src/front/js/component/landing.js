import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="landing">
			<div>
				<Link className="navbar-brand" id="logo" to="/">
					YO NADO
				</Link>
			</div>
			<div>
				<Link className="navbar-brand" id="login" to="/">
					<i className="far fa-user-circle" />
					&nbsp; Iniciar sesión
				</Link>
			</div>
			<div className="jumbotron text-white" id="jumbotron">
				<p className="lead">── Guía para nadadores</p>
				<h2 className="display-3 font-weight-bold">Estás listo?</h2>
				<h1 className="display-4 font-weight-bold">
					Esta es la guía para
					<br /> nadadores principiantes
				</h1>
			</div>
			<small className="text-white" id="small">
				Desliza hacia abajo para registrarte &nbsp; <i className="fas fa-arrow-down" />
			</small>
		</div>
	);
};
