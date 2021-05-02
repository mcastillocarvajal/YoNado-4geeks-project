//import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/tabla.scss";
import { Context } from "../store/appContext";
import { Table, Container } from "react-bootstrap";
import PropType from "prop-types";

export const Tabla = () => {
	const { store, actions } = useContext(Context);

	// const data = store.activities.map((item, i) => {
	// 	let info = {
	// 		ejercicios: item.exercise,
	// 		distancia: item.distance,
	// 		tiempo: item.lapse,
	// 		fecha: item.date
	// 	};
	// 	return info;
	// });
	console.log("==========STORE ACTIVITIES=======", store.activities);

	// return (
	// 	<ReactFlexyTable
	// 		data={data}
	// 		className="my-table"
	// 		filterable
	// 		nonFilterCols={["ejercicios", "distancia", "tiempo"]}
	// 		previousText="anterior"
	// 		nextText="siguiente"
	// 		rowsText="filas"
	// 		pageText="página"
	// 		totalDataText="total de entradas"
	// 		filteredDataText="en esta página"
	// 		ofText="de"
	// 	/>
	// );

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
							<tr>sin actividades</tr>
						)}
					</tbody>
				</Table>
			</Container>
		</>
	);
};
