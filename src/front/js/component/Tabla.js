//import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/tabla.scss";
import { Context } from "../store/appContext";
import { Table, Container } from "react-bootstrap";
import PropType from "prop-types";

export const Tabla = () => {
	const { store, actions } = useContext(Context);

	// const [downloadExcelProps, setDownloadExcelProps] = useState({
	// 	type: "all",
	// 	title: "test",
	// 	showLabel: true
	// });
	// useEffect(() => {
	// 	// fetchData(20)
	// }, []);

	// const data = store.activities.map((item, i) => {
	// 	let info = {
	// 		ejercicios: item.exercise,
	// 		distancia: item.distance,
	// 		tiempo: item.lapse,
	// 		fecha: item.date
	// 	};
	// 	return info;

	//console.log("indexxxx", key);
	console.log("==========STORE ACTIVITIES=======", store.activities);
	// console.log("===============ESTA ES DATA===============", data);

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
							<th>Ejercicios</th>
							<th>Distancia</th>
							<th>Tiempo</th>
							<th>Fecha</th>
						</tr>
					</thead>
					<tbody>
						{/* {store.activities.map((item, index) => {
							<tr key={index}>
								<td>{item.exercise}</td>
								<td>{item.distance}</td>
								<td>{item.lapse}</td>
								<td>{item.date}</td>
							</tr>;
						})} */}
					</tbody>
				</Table>
			</Container>
		</>
	);
};
