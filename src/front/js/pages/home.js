import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Benefits } from "../component/benefits";
import { Register } from "../component/register";
import { Perfil } from "./perfil";
import { Landing } from "../component/landing";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Landing />
			<Benefits />
			<Register />
		</>
	);
};
