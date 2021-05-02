import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button, Form, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import "../../styles/perfil.module.scss";
import { Tabla } from "../component/Tabla";
import { profileButtons, ProfileButtons } from "../component/ProfileButtons";
import { Navbar } from "../component/navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	// var dropy = {
	// 	$dropys: null,
	// 	openClass: "open",
	// 	selectClass: "selected",
	// 	init: function() {
	// 		var self = this;

	// 		self.$dropys = $(".dropy");
	// 		self.eventHandler();
	// 	},
	// 	eventHandler: function() {
	// 		var self = this;

	// 		// Opening a dropy
	// 		self.$dropys.find(".dropy__title").click(function() {
	// 			self.$dropys.removeClass(self.openClass);
	// 			$(this)
	// 				.parents(".dropy")
	// 				.addClass(self.openClass);
	// 		});

	// 		// Click on a dropy list
	// 		self.$dropys.find(".dropy__content ul li a").click(function() {
	// 			var $that = $(this);
	// 			var $dropy = $that.parents(".dropy");
	// 			var $input = $dropy.find("input");
	// 			var $title = $(this)
	// 				.parents(".dropy")
	// 				.find(".dropy__title span");

	// 			// Remove selected className
	// 			$dropy.find(".dropy__content a").each(function() {
	// 				$(this).removeClass(self.selectClass);
	// 			});

	// 			// Update selected value
	// 			$title.html($that.html());
	// 			$input.val($that.attr("data-value")).trigger("change");

	// 			// If back to default, remove selected className else addclass on right element
	// 			if ($that.hasClass("dropy__header")) {
	// 				$title.removeClass(self.selectClass);
	// 				$title.html($title.attr("data-title"));
	// 			} else {
	// 				$title.addClass(self.selectClass);
	// 				$that.addClass(self.selectClass);
	// 			}

	// 			// Close dropdown
	// 			$dropy.removeClass(self.openClass);
	// 		});

	// 		// Close all dropdown onclick on another element
	// 		$(document).bind("click", function(e) {
	// 			if (
	// 				!$(e.target)
	// 					.parents()
	// 					.hasClass("dropy")
	// 			) {
	// 				self.$dropys.removeClass(self.openClass);
	// 			}
	// 		});
	// 	}
	// };

	// $(function() {
	// 	dropy.init();
	// });

	// const [startDate, setStartDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(null);
	const [exercise, setExercise] = useState("");
	const [distance, setDistance] = useState(0);
	const [lapse, setLapse] = useState("");

	const handleInfo = () => {
		actions.addActivity(exercise, distance, date, lapse);
	};
	console.log(">>>>>>>info", handleInfo);
	console.log(">>>>>>>exercise", exercise);
	console.log(">>>>>>>distance", distance);
	console.log(">>>>>>>lapse", lapse);
	console.log(">>>>>>>date", selectedDate);

	const ejercicios = ["Estilo mariposa", "Estilo Libre", "Estilo dorso", "Estilo pecho"];

	return (
		<>
			<Navbar />
			<Row>
				<ProfileButtons />
			</Row>
			<div className="d-flex justify-content-center mt-3" id="line">
				<hr />
			</div>
			<Form>
				<Row>
					<main className="day d-flex justify-content-center">
						<article className="mr-5 html">
							<dl className="dropy">
								<h5>Ejercicio</h5>
								{/* <dt className="dropy__title">
									<span>Seleccionar...</span>
								</dt>
								<dd
									className="dropy__content"
									onClick={e => setExercise(e.currentTarget.value)}
									value={exercise}>
									<ul>
										<li>
											<a>Estilo mariposa</a>
										</li>
										{ejercicios.map((item, i) => {
											return (
												<li key={i}>
													<a>{item}</a>
												</li>
											);
										})}
									</ul>
								</dd> */}
								<DropdownButton
									id="dropdown-basic-button"
									variant="light"
									title="seleccionar..."
									type="string">
									<Dropdown.Item value={exercise} onClick={e => setExercise(e.currentTarget.value)}>
										mariposa
									</Dropdown.Item>
								</DropdownButton>
							</dl>
						</article>
						<article className="ml-5">
							<dl className="dropy">
								<h5>Distancia (m)</h5>
								<dt>
									<span>
										<Form.Group
											controlId="formBasicEmail"
											type="integer"
											onChange={e => setDistance(e.target.value)}
											value={distance}>
											<Form.Label />
											<Form.Control size="sm" type="number" />
										</Form.Group>
									</span>
								</dt>
							</dl>
						</article>
					</main>
				</Row>
				<Row>
					<main className="day d-flex justify-content-center">
						<article className="mr-5">
							<dl className="dropy">
								<h5>Tiempo (min)</h5>
								<dt>
									<span>
										<Form.Group
											onChange={e => setLapse(e.target.value)}
											value={lapse}
											type="string">
											<Form.Label />
											<Form.Control size="sm" type="number" />
										</Form.Group>
									</span>
								</dt>
							</dl>
						</article>
						<article className="ml-5">
							<dl className="dropy">
								<h5>Fecha</h5>
								<dt className="dropy__calendar">
									<span>
										<DatePicker
											className="form-control"
											selected={selectedDate}
											onChange={date => setSelectedDate(date)}
											dateFormat="dd/MM/yyyy"
											placeHolderText="Seleccione fecha"
											maxDate={new Date()}
										/>
									</span>
								</dt>
							</dl>
						</article>
					</main>
				</Row>
				<Row className="mb-5   mt-5">
					<Col className="d-flex justify-content-center">
						<Button id="btn" variant="primary" type="submit" onClick={handleInfo}>
							Agregar
						</Button>
					</Col>
				</Row>
			</Form>

			<div className="d-flex justify-content-center mt-3" id="line">
				<hr />
			</div>

			<Row className="justify-content-center mt-4 mb-4">
				<Tabla />
			</Row>
		</>
	);
};
