import React from "react";
import PropType from "prop-types";
import { CardGroup, Card } from "react-bootstrap";
import { Cards } from "./card";

export const CardContainer = () => {
	return (
		<CardGroup>
			<Card>
				<Cards />
			</Card>

			<Card>
				<Cards />
			</Card>

			<Card>
				<Cards />
			</Card>
		</CardGroup>
	);
};
