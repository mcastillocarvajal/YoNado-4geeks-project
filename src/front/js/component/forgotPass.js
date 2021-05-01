import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.scss";
import "../../styles/navbar.scss";

export const ForgotPass = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	const handleForgotPass = () => {
		actions.ResetPass(email);
	};

	return (
		<>
			<div id="bg">
				<nav className="navbar navbar-expand-lg">
					<Link className="navbar-brand  d-flex align-items-center ml-3 mr-5" to="/ejercicios" id="logonav">
						YO NADO
					</Link>
				</nav>
			</div>
			<div className="d-flex flex-column mx-auto mt-4 mb-5">
				<h6 className="text-dark text-center display-4 my-5" id="register">
					¿Olvidaste tu contraseña?
				</h6>
				{store.resetpassEmail ? (
					<div>
						<h2 className="text-center">
							Hemos enviado un link para restablecer la contraseña a tu correo!
						</h2>
					</div>
				) : (
					<>
						<div className="card text-white px-5 mx-auto" id="forgotpasscard">
							<h1 className="text-white text-center my-4 font-weight-light">Ingresa tu email</h1>
							<div className="form-group">
								<label className="mt-2">Correo electrónico</label>
								<input
									id="registerinputforgot"
									className="form-control"
									placeholder="&#xf0e0;  nombre@correo.com"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="d-flex justify-content-center mt-3">
								<button
									type="submit"
									className="btn text-center mb-2"
									id="registerbtn"
									onClick={handleForgotPass}>
									<i className="fas fa-sign-in-alt" id="registericon" />
									&nbsp; Restablecer contraseña
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};
