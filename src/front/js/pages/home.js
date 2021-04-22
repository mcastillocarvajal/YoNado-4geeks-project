import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Icons } from "../component/Icons";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Icons />
		</>
	);
};
