import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Icons } from "../component/Icons";
import { Register } from "./register";
import { Landing } from "../component/landing";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Landing />
			<Icons />
			<Register />
		</>
	);
};
