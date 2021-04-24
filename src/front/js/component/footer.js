import React, { Component } from "react";
import "../../styles/footer.scss";
import cindeImageUrl from "../../img/cinde-logo.png";

export const Footer = () => (
	<footer className="dk-footer" id="dk-footer">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3 ">
					<div className="dk-footer-box-info">
						<a className="footer-logo">
							<h3>YO NADO</h3>
							{/* <img
								src="https://i.pinimg.com/originals/f4/e1/a8/f4e1a873f388d9e75a53bf7d84349963.png"
								className="img-fluid"
							/> */}
						</a>
					</div>
				</div>
				<div className="col-3">
					<div className="dk-footer-box-info">
						<p className="footer-info-text">
							Este página, fue realizada con fines educativos. Como referencia para nuestro proyecto
							final. Agradecemos a todas las empresas que estuvieron involucradas para que esto pueda ser
							realidad.
						</p>
						<div className="footer-social-link">
							<h3>Más Información</h3>
							<ul>
								<li>
									<a href="https://4geeksacademy.com/es/inicio">
										<img
											className="fa fa-4geeks"
											src="https://uploads.convertflow.co/production/websites/9849/8uSlRHnaTm6nHOBiBNxU_6FXhIqn9QMS7umwEj84p_4G_LOGO_NEGRO-01.png"
											width="80px"
											height="50px"
										/>
									</a>
								</li>
								<li>
									<a href="https://www.micit.go.cr/">
										<img
											className="fa fa-4geeks"
											src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Micitt_logo.png"
											width="80px"
											height="50px"
										/>
									</a>
								</li>
								<li>
									<a href="https://www.cinde.org/es">
										<img className="fa fa-4geeks" src={cindeImageUrl} width="100px" height="80px" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="col-3">
					<div className="row">
						<div className="col-md-12 col-lg-6">
							<div className="footer-widget footer-left-widget">
								<ul>
									<h3>Menu</h3>
									<li>
										<a href="#">Ejercicios</a>
									</li>
									<li>
										<a href="#">Respiracion</a>
									</li>

									<li>
										<a href="#">Calentamiento</a>
									</li>
									<li>
										<a href="#">Errores comunes</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-3">
							<div className="footer-widget footer-left-widget">
								<ul>
									<h3>Registro</h3>
									<li>
										<a href="#">login</a>
									</li>
									<li>
										<a href="#">Registro</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<span className="copyright">Copyright © 2021, All Right Reserved</span>
				</div>
			</div>
		</div>
	</footer>
);
