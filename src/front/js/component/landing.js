import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="landing">
			{/* NAV */}

			<div className="d-flex flex-row mb-5">
				<Link className="navbar-brand mt-2 mb-5 ml-5" id="logo" to="/">
					YO NADO
				</Link>
				<button
					className="navbar-brand mt-2 mb-5 ml-auto mr-5"
					id="loginbtn"
					data-toggle="modal"
					data-target="#loginexampleModal">
					<Link id="login" to="/login">
						<i className="far fa-user-circle" />
						&nbsp; Iniciar sesión
					</Link>
				</button>
			</div>

			<div className="container-fluid mt-5">
				<div className="row mt-5">
					<div className="col-12 col-md-6 mb-5">
						<p className="ml-5 mt-3" id="lead">
							── Guía para nadadores
						</p>
						<h1 className="display-4 font-weight-normal ml-5 text-white">¿Estás listo?</h1>
						<h2 className="display-4 font-weight-normalt ml-5 text-white">Esta es la guía para</h2>
						<h2 className="display-4 font-weight-normalt ml-5 mb-5 text-white">nadadores principiantes.</h2>
					</div>
				</div>
			</div>
			<small className="text-white mt-5 mb-5" id="small">
				Desliza hacia abajo para registrarte &nbsp; <i className="fas fa-arrow-down" />
			</small>
		</div>
	);
};
