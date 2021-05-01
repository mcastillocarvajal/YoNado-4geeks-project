import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Login } from "../component/login";
import { Context } from "../store/appContext";
import "../../styles/landing.scss";
import "../../styles/register.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [register, setRegister] = useState(false);

	const handleJoinUs = () => {
		actions.Register(name, last_name, email, password);
		setRegister(true);
	};

	return (
		<div className="d-flex flex-column mx-auto mt-4 mb-5">
			<h6 className="text-dark text-center display-4 my-5" id="register">
				Bienvenido a YO NADO!
			</h6>
			{register ? (
				<div style={{ height: "50vh" }}>
					<h2 className="text-center">
						Tu cuenta ha sido creada exitosamente! Inica sesión
						<button id="loginbtn" data-toggle="modal" data-target="#loginexampleModal">
							<Link to="/" id="smalllink">
								&nbsp;aquí
							</Link>
						</button>
					</h2>

					{/* LOGIN MODAL */}

					<Login />
				</div>
			) : (
				<>
					<div className="card text-white px-5 mx-auto" id="registercard">
						<h1 className="text-white text-center my-4 font-weight-light">Crea tu cuenta</h1>
						<div className="form-group">
							<label>Nombre</label>
							<input
								id="registerinput"
								className="form-control"
								placeholder="&#xf2bd; Tu nombre"
								onChange={e => setName(e.target.value)}
							/>
							<label className="mt-2">Apellido</label>
							<input
								id="registerinput2"
								className="form-control"
								placeholder="&#xf2bd; Tu apellido"
								onChange={e => setLast_name(e.target.value)}
							/>
							<label className="mt-2">Correo electrónico</label>
							<input
								id="registerinput4"
								className="form-control"
								placeholder="&#xf0e0;  nombre@correo.com"
								onChange={e => setEmail(e.target.value)}
							/>
							<label className="mt-2">Contraseña</label>
							<input
								id="registerinput3"
								type="password"
								className="form-control"
								placeholder="&#xf070; ••••••••"
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="d-flex justify-content-center mt-3">
							<button
								type="submit"
								className="btn text-center mb-2"
								id="registerbtn"
								onClick={handleJoinUs}>
								<i className="fas fa-sign-in-alt" id="registericon" />
								&nbsp; Registrarse
							</button>
						</div>
						<small id="small">
							Ya eres miembro?{" "}
							<button id="loginbtn" data-toggle="modal" data-target="#loginexampleModal">
								<Link to="/" id="smalllink">
									&nbsp;Ingresa aquí
								</Link>
							</button>
						</small>
					</div>

					{/* LOGIN MODAL */}

					<Login />
				</>
			)}
		</div>
	);
};
