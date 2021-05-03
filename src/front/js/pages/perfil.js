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
import moment from "moment";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	const [date, setDate] = useState(null);
	const [exercise, setExercise] = useState("");
	const [distance, setDistance] = useState(0);
	const [lapse, setLapse] = useState("");

	const fecha = moment(date).format("YYYY-MM-DD");

	const handleInfo = e => {
		e.preventDefault;
		actions.addActivity(exercise, distance, fecha, lapse, store.user.id);
	};
	console.log(">>>>>>>info", handleInfo);
	console.log(">>>>>>>exercise", exercise);
	console.log(">>>>>>>distance", distance);
	console.log(">>>>>>>lapse", lapse);
	console.log(">>>>>>>date", fecha);
	console.log(">>>>>>>storeactivities", store.activities);

	// const forceUpdateHandler = () => {
	// 	this.forceUpdate();
	// };

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
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Control
										size="sm"
										as="select"
										value={exercise}
										custom
										onChange={e => setExercise(e.target.value)}>
										<option>Estilo mariposa</option>
										<option>Estilo dorso</option>
										<option>Estilo libre</option>
										<option>Estilo pecho</option>
									</Form.Control>
								</Form.Group>
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
											selected={date}
											onChange={e => setDate(e)}
											dateFormat="yyyy/MM/dd"
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
