import React, { Component } from "react";
import "../../styles/footer.scss";
import cindeImageUrl from "../../img/cinde-logo.png";

export const Footer = () => (
	<footer id="ftr">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-m-3">
					<div id="titulo">
						<h3>YO NADO</h3>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-m-3">
					<div>
						<p id="parrafo">
							Este página, fue realizada con fines educativos. Como referencia para nuestro proyecto
							final. Agradecemos a todas las empresas que estuvieron involucradas para que esto pueda ser
							realidad.
						</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-m-3">
					<div>
						<a href="https://4geeksacademy.com/es/inicio" id="icono1">
							<img
								className="fa fa-4geeks"
								src="https://uploads.convertflow.co/production/websites/9849/8uSlRHnaTm6nHOBiBNxU_6FXhIqn9QMS7umwEj84p_4G_LOGO_NEGRO-01.png"
								width="50px"
								height="40px"
							/>
						</a>
						<a href="https://www.micit.go.cr/" id="icono1">
							<img
								className="fa fa-4geeks"
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Micitt_logo.png"
								width="60px"
								height="30px"
							/>
						</a>
						<a href="https://www.cinde.org/es">
							<img className="fa fa-4geeks" src={cindeImageUrl} width="80px" height="50px" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
