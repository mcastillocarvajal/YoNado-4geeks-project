import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div id="bg">
			<nav className="navbar border-bottom border-3">
				<Link className="navbar-brand ml-5" id="logo" to="/">
					YoNado
				</Link>
			</nav>
			<div className="jumbotron" id="jumbotron">
				<h3 className="display-4">Accede a tu cuenta.</h3>
				<div className="form-group">
					<label>Correo electrónico</label>
					<input className="form-control" placeholder="Tu email" />
					<label>Contraseña</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Tu contraseña"
					/>
					<small className="form-text">
						<Link to="/register">Olvidaste tu contraseña?</Link>
					</small>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-primary text-center">Log in</button>
				</div>
				<small className="form-text text-muted text-center">
					Aun no eres miembro? <Link to="/register">Registrate</Link>
				</small>
			</div>
		</div>
	);
};
