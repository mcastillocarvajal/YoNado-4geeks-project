import React, { useContext } from "react";
import "../../styles/tabla.scss";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import "../../styles/botones.module.scss";
import { Context } from "../store/appContext";

export const ProfileButtons = () => {
	const { store, actions } = useContext(Context);

	const getInitials = string => {
		let names = string.split(" "),
			initials = names[0].substring(0, 1).toUpperCase();

		if (names.length > 1) {
			initials += names[names.length - 1].substring(0, 1).toUpperCase();
		}
		return initials;
	};

	return (
		<>
			<Row className="mx-auto mt-5">
				<div className="circlewoowoo"> {getInitials(`${store.user.name} ${store.user.last_name}`)}</div>
			</Row>
		</>
	);
};
