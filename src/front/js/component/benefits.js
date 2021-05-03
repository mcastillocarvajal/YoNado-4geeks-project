import React from "react";
import "../../styles/benefits.scss";

export const Benefits = () => {
	return (
		<div id="benefitsbg" className="container-fluid">
			<div className="row">
				<div className="col-12 col-md-6 my-5">
					<h1 className="display-4 font-weight-normal mt-4 ml-5 text-white">Por deporte o por diversión,</h1>
					<h2 className="display-4 font-weight-normalt mb-5 ml-5 text-white">
						son muchas las razones por las que es beneficiosa la natación.
					</h2>
				</div>
				<div className="col-12 col-md-6 my-auto">
					<div className="container">
						<h4 className="display-5 font-weight-light text-white mb-4 ml-5">
							<i className="fas fa-lungs text-white ml-2" />
							&nbsp;&nbsp;Aumento de la capacidad pulmonar.
						</h4>
						<h4 className="display-5 font-weight-light text-white my-4 ml-5">
							<i className="fas fa-bone text-white ml-2" />
							&nbsp;&nbsp;Bajo impacto sobre articulaciones.
						</h4>
						<h4 className="display-5 font-weight-light text-white my-4 ml-5">
							<i className="fas fa-brain text-white ml-2" />
							&nbsp;&nbsp;Elimina el estrés.
						</h4>
						<h4 className="display-5 font-weight-light text-white my-4 ml-5">
							<i className="fas fa-user-check text-white ml-2" />
							&nbsp;&nbsp;Disminuye dolores de espalda.
						</h4>
						<h4 className="display-5 font-weight-light text-white mt-4 mb-5 ml-5">
							<i className="fas fa-tint text-white ml-2" />
							&nbsp;&nbsp;Estimula la circulación sanguínea.
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
