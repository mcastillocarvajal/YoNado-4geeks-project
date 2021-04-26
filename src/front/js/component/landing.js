import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="landing">
			{/* NAV */}

			<div className="d-flex flex-row">
				<Link className="navbar-brand ml-4" id="logo" to="/">
					YO NADO
				</Link>
				<button
					className="navbar-brand mt-3 ml-auto mr-5"
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

			<div className="modal fade" id="loginexampleModal" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content" id="logincard">
						<div className="modal-header" id="loginheader">
							<h5 className="modal-title" id="logintitle">
								Inicia sesión
							</h5>
							<button
								type="button"
								className="close"
								id="loginclosebtn"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body p-5" id="loginbody">
							<form>
								<div className="form-group">
									<label className="mt-2" id="loginlabel">
										Correo electrónico
									</label>
									<input
										id="logininput"
										className="form-control"
										placeholder="&#xf0e0;  nombre@correo.com"
									/>
									<label className="mt-2" id="loginlabel">
										Contraseña
									</label>
									<input
										id="logininput"
										type="password"
										className="form-control"
										placeholder="••••••••"
									/>
									<small>
										<Link to="/" id="loginlabel" className="mt-2">
											¿Olvidaste tu contraseña?
										</Link>
									</small>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<div className="d-flex">
								<button type="submit" className="btn" id="registerbtn">
									<i className="fas fa-sign-in-alt" id="registericon" />
									&nbsp; Ingresar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

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
