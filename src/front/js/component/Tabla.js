//import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/tabla.scss";
import { Context } from "../store/appContext";
import { Table, Container } from "react-bootstrap";
import PropType from "prop-types";

export const Tabla = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Container fluid="lg">
				<Table striped bordered hover>
					<thead>
						<tr>
							<th style={{ textAlign: "center" }}>Ejercicios</th>
							<th style={{ textAlign: "center" }}>Distancia</th>
							<th style={{ textAlign: "center" }}>Tiempo</th>
							<th style={{ textAlign: "center" }}> Fecha</th>
						</tr>
					</thead>
					<tbody>
						{store.activities ? (
							store.activities.map((item, index) => {
								return (
									<tr key={index}>
										<td style={{ textAlign: "center" }}>{item.exercise}</td>
										<td style={{ textAlign: "center" }}>{item.distance}</td>
										<td style={{ textAlign: "center" }}>{item.lapse}</td>
										<td style={{ textAlign: "center" }}>{item.date}</td>
									</tr>
								);
							})
						) : (
							<h1 style={{ margin: "auto" }}>¡sin actividades!</h1>
						)}
					</tbody>
				</Table>
			</Container>
		</>
	);
};
