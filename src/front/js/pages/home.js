import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Icons } from "../component/Icons";
import { Register } from "../pages/register";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <>{/* <Icons />
			<Register /> */}</>;
};
