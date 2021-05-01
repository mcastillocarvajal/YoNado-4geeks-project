import React, { useState, useEffect, useContext } from "react";
import "../../styles/tabla.scss";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Button, Form, Row, Col, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProfileButtons } from "./ProfileButtons";

export const Favorites = () => {
	return (
		<>
			<Navbar />
			<Row>
				<ProfileButtons />
			</Row>
			<div className="d-flex justify-content-center mt-3" id="line">
				<hr />
			</div>
		</>
	);
};
