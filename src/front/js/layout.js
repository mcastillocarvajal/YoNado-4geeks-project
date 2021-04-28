import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Cards } from "./pages/card";
import { Perfil } from "./pages/perfil";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardContainer } from "./pages/cardContainer";
import { WarmUp } from "./pages/warmUp";
import { Exercises } from "./pages/exercises";
import { Breathing } from "./pages/breathing";
import { Mistakes } from "./pages/mistakes";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/cardContainer">
						<CardContainer />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
