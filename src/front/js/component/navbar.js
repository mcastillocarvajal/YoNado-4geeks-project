import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="bg">
			<nav className="navbar navbar-expand-lg">
				<Link className="navbar-brand  d-flex align-items-center ml-3 mr-5" to="/ejercicios" id="logonav">
					YO NADO
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
						<i className="fas fa-bars" id="toggle" />
					</span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/ejercicios" id="nav-item">
								Ejercicios
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/respiración" id="nav-item">
								Respiración
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/calentamiento" id="nav-item">
								Calentamiento
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/errores" id="nav-item">
								Errores más comunes
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								{store.user.name}
							</Link>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" id="drop-item" to="/">
									Favoritos
								</Link>
								<Link className="dropdown-item" id="drop-item" to="/perfil">
									Actividad
								</Link>
								<div className="dropdown-divider" />
								<Link className="dropdown-item" id="drop-item" to="/" onClick={() => actions.Logout()}>
									Cerrar sesión
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
