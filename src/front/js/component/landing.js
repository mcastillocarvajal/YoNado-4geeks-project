import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../component/login";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="landing">
			{/* NAV */}

			<div className="d-flex flex-row">
				<Link className="navbar-brand mt-2 ml-4" id="logo" to="/">
					YO NADO
				</Link>
				<button
					className="navbar-brand mt-2 ml-auto mr-5"
					id="loginbtn"
					data-toggle="modal"
					data-target="#loginexampleModal">
					<Link id="login" to="/">
						<i className="far fa-user-circle" />
						&nbsp; Iniciar sesión
					</Link>
				</button>
			</div>

			{/* LOGIN MODAL */}

			<Login />

			{/* JUMBOTRON */}

			<div className="jumbotron text-white ml-3" id="jumbotron">
				<p className="lead" id="lead">
					── Guía para nadadores
				</p>
				<h2 className="display-3 font-weight-normal " id="jumbotronh">
					¿Estás listo?
				</h2>
				<h1 className="display-4 font-weight-normal " id="jumbotronh">
					Esta es la guía para nadadores principiantes
				</h1>
			</div>
			<small className="text-white mt-5 mb-2" id="small">
				Desliza hacia abajo para registrarte &nbsp; <i className="fas fa-arrow-down" />
			</small>
		</div>
	);
};
