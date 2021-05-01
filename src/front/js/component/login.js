import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoginFB } from "../component/loginFB";
import "../../styles/login.scss";
import "../../styles/register.scss";
import "../../styles/navbar.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin(e) {
		e.preventDefault();
		actions.Login(email, password);
	}

	return (
		<>
			{store.token && store.token != "" && store.token != undefined ? (
				<Redirect to="/ejercicios" />
			) : (
				<>
					<div id="bg">
						<nav className="navbar navbar-expand-lg">
							<Link
								className="navbar-brand  d-flex align-items-center ml-3 mr-5"
								to="/ejercicios"
								id="logonav">
								YO NADO
							</Link>
						</nav>
					</div>
					<div className="d-flex flex-column mx-auto mt-4 mb-5">
						<h6 className="text-dark text-center display-4 my-5" id="register">
							Inicia sesión
						</h6>
						<div className="card text-white px-5 mx-auto" id="logincard">
							<div className="form-group mt-4">
								<label className="mt-2">Correo electrónico</label>
								<input
									id="registerinput"
									className="form-control"
									type="email"
									placeholder="&#xf0e0;  nombre@correo.com"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<label className="mt-2">Contraseña</label>
								<input
									id="registerinput"
									className="form-control"
									type="password"
									placeholder="&#xf070; ••••••••"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
								<small>
									<Link to="/forgotpassword" id="loginlabel" className="mt-2">
										¿Olvidaste tu contraseña?
									</Link>
								</small>
							</div>
							<div className="d-flex justify-content-center mt-2">
								<button type="submit" className="btn btn-sm" id="loginbtn2" onClick={handleLogin}>
									<i className="fas fa-sign-in-alt" id="loginicon" />
									&nbsp; Ingresar
								</button>
							</div>
							<div className="d-flex justify-content-center mt-3">
								<LoginFB />
							</div>
							<small id="small" className="mt-3">
								¿Aún no eres miembro? <br />
							</small>
							<small className="d-flex justify-content-center">
								<Link to="/register" id="smalllink">
									&nbsp;Registrate aquí
								</Link>
							</small>
						</div>
					</div>
				</>
			)}
		</>
	);
};
