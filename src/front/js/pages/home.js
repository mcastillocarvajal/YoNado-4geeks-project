import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Icons } from "../component/Icons";
import { Register } from "./register";
import { Perfil } from "./perfil";
import { Landing } from "../component/landing";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Landing />
			<Icons />
			<Register />
			<Perfil />
		</>
	);
};
