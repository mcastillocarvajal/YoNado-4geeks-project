import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.scss";
import "../../styles/navbar.scss";

export const NewPassword = () => {
	const { store, actions } = useContext(Context);
	const [password, setPassword] = useState("");
	const [password1, setPassword1] = useState("");
	const [sent, setSent] = useState(false);

	const handleNewPassword = () => {
		if (password === password1) {
			actions.NewPassword(store.resetpassEmail, password);
			setSent(true);
		} else {
			alert("Las contraseñas no coinciden. Intenta nuevamente!");
		}
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
					Ingresa tu nueva contraseña
				</h6>
				{sent ? (
					<div style={{ height: "35vh" }}>
						<h3 className="text-center">Tu contraseña ha sido actualizada exitosamente!</h3>
						<h3 className="text-center">
							Ahora puedes iniciar sesión&nbsp;
							<Link to="/login">aquí.</Link>
						</h3>
					</div>
				) : (
					<div className="card text-white px-5 mx-auto" id="forgotpasscard">
						<div className="form-group mt-4">
							<label className="mt-2">Contraseña</label>
							<input
								id="registerinput"
								className="form-control"
								type="password"
								placeholder="&#xf070; ••••••••"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<label className="mt-2">Confirma tu contraseña</label>
							<input
								id="registerinput"
								className="form-control"
								type="password"
								placeholder="&#xf070; ••••••••"
								value={password1}
								onChange={e => setPassword1(e.target.value)}
							/>
						</div>
						<div className="d-flex justify-content-center mt-3">
							<button
								type="submit"
								className="btn text-center mb-2"
								id="registerbtn"
								onClick={handleNewPassword}>
								<i className="fas fa-sign-in-alt" id="registericon" />
								&nbsp; Actualizar contraseña
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
