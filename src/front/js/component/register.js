import React from "react";
import { Link } from "react-router-dom";

import "../../styles/register.scss";

export const Register = () => {
	return (
		<div className="d-flex flex-column mx-auto mt-4 mb-5">
			<h6 className="text-dark text-center display-4 my-5" id="register">
				Bienvenido a YO NADO!
			</h6>
			<div className="card text-white px-5 mx-auto" id="registercard">
				<h1 className="text-white text-center my-4 font-weight-light">Crea tu cuenta</h1>
				<div className="form-group">
					<label>Nombre</label>
					<input id="registerinput" className="form-control" placeholder="&#xf2bd; Tu nombre" />
					<label className="mt-2">Correo electrónico</label>
					<input id="registerinput" className="form-control" placeholder="&#xf0e0;  nombre@correo.com" />
					<label className="mt-2">Contraseña</label>
					<input
						id="registerinput"
						type="password"
						className="form-control"
						placeholder="&#xf070; ••••••••"
					/>
				</div>
				<div className="d-flex justify-content-center mt-3">
					<button type="submit" className="btn text-center mb-2" id="registerbtn">
						<i className="fas fa-sign-in-alt" id="registericon" />
						&nbsp; Ingresar
					</button>
				</div>
				<small claasName="text-muted" id="small">
					Ya eres miembro?{" "}
					<button id="loginbtn" data-toggle="modal" data-target="#loginexampleModal">
						<Link to="/" id="smalllink">
							&nbsp;Ingresa aquí
						</Link>
					</button>
				</small>
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
						<div className="modal-footer" id="loginheader">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
