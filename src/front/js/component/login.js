import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoginFB } from "../component/loginFB";
import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleLogin = () => {
		actions.Login(email, password);
	};

	if (store.token && store.token != "" && store.token != undefined) history.push("/");

	return (
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
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<label className="mt-2" id="loginlabel">
									Contraseña
								</label>
								<input
									id="logininput"
									type="password"
									className="form-control"
									placeholder="••••••••"
									value={password}
									onChange={e => setPassword(e.target.value)}
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
							<LoginFB />
							<button type="submit" className="btn ml-5 mr-4" id="registerbtn" onClick={handleLogin}>
								<i className="fas fa-sign-in-alt" id="registericon" />
								&nbsp; Ingresar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
