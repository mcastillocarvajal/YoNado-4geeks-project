import React from "react";
import { Link } from "react-router-dom";

export const Landingpage = () => {
	return (
		<div id="bg">
			<nav className="navbar border-bottom border-3">
				<Link className="navbar-brand ml-5" id="logo" to="/">
					YoNado
				</Link>
			</nav>
			<div className="jumbotron" id="jumbotron">
				<h3 className="display-4">Por deporte o por diversión.</h3>
				<p className="lead">
					Son muchas las razones por las que es beneficiosa la natación. Accede a tu cuenta para aprender más.
				</p>
				<Link className="btn btn-dark mr-3" to="/login">
					Inicia sesión
				</Link>
				<button className="btn btn-dark">Registrate</button>
			</div>
		</div>
	);
};
