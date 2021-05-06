import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button, Form, Row, Col, Table, Container } from "react-bootstrap";
import "../../styles/perfil.module.scss";
//import { Tabla } from "../component/Tabla";
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
		let now = new Date();
		let deleteNumber = String(now.getTime());
		actions.addActivity(exercise, distance, fecha, lapse, store.user.id, deleteNumber);
	};

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
						<article className="mr-5">
							<dl className="dropy">
								<h5>Ejercicio</h5>
								<Form.Group size="sm" className="mt-3" controlId="exampleForm.SelectCustom">
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
										<option>Técnica de mariposa</option>
										<option>Técnica de dorso</option>
										<option>Técnica de libre</option>
										<option>Técnica de pecho</option>
										<option>Patada de mariposa</option>
										<option>Patada de dorso</option>
										<option>Patada de libre</option>
										<option>Patada de pecho</option>
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
											size="sm"
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
							<dl>
								<h5>Tiempo (min.s)</h5>
								<dt>
									<span>
										<Form.Group
											className="border-black"
											size="sm"
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

								<span className="dropy__calendar">
									<DatePicker
										className="mt-2 border border-grey"
										selected={date}
										onChange={e => setDate(e)}
										dateFormat="yyyy/MM/dd"
										placeholderText="Seleccione fecha..."
										maxDate={new Date()}
									/>
								</span>
							</dl>
						</article>
					</main>
				</Row>
				<Row className="mb-5   mt-5">
					<Col className="d-flex justify-content-center">
						<Button id="btn" variant="primary" onClick={handleInfo}>
							Agregar
						</Button>
					</Col>
				</Row>
			</Form>

			<div className="d-flex justify-content-center mt-3" id="line">
				<hr />
			</div>

			<Row className="justify-content-center mt-4 mb-4">
				{/* <Tabla /> */}
				{store.activities.length == 0 ? (
					<div className="mt-5" style={{ height: "50vh" }}>
						<i
							className="fas fa-swimmer text-muted d-flex justify-content-center"
							style={{ fontSize: "100px" }}
						/>
						<h3 className="text-center text-muted">No hay actividades</h3>
						<h3 className="text-center text-muted">agregadas</h3>
					</div>
				) : (
					<Container fluid="lg">
						<Table striped bordered hover>
							<thead>
								<tr>
									<th style={{ textAlign: "center" }}>Ejercicios</th>
									<th style={{ textAlign: "center" }}>Distancia (m)</th>
									<th style={{ textAlign: "center" }}>Tiempo (min.s)</th>
									<th style={{ textAlign: "center" }}> Fecha</th>
								</tr>
							</thead>
							<tbody>
								{store.activities
									? store.activities.map((item, index) => {
											return (
												<tr key={index}>
													<td style={{ textAlign: "center" }}>{item.exercise}</td>
													<td style={{ textAlign: "center" }}>{item.distance}</td>
													<td style={{ textAlign: "center" }}>{item.lapse}</td>
													<td style={{ textAlign: "center" }}>
														{moment(item.date).format("YYYY-MM-DD")}{" "}
														<i
															className="fas fa-trash-alt btn btn-outline-danger ml-5"
															onClick={() => actions.deleteActivity(item.deleteNumber)}
														/>
													</td>
												</tr>
											);
									  })
									: null}
							</tbody>
						</Table>
					</Container>
				)}
			</Row>
		</>
	);
};
