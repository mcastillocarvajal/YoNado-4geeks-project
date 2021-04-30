import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
import { Perfil } from "./pages/perfil";
import { CardContainer } from "./pages/cardContainer";
import { Breathing } from "./pages/breathing";
import { Mistakes } from "./pages/mistakes";
import { WarmUp } from "./pages/warmUp";
import { Exercises } from "./pages/exercises";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Register } from "./component/register";
import { PrivateRoute } from "./component/privateRoute";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

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
					{/* <PrivateRoute exact path="/ejercicios" component={Exercises} token={store.token} /> */}
					<Route exact path="/ejercicios">
						<Navbar />
						<Exercises />
					</Route>
					<Route exact path="/respiración">
						<Navbar />
						<Breathing />
					</Route>
					<Route exact path="/calentamiento">
						<Navbar />
						<WarmUp />
					</Route>
					<Route exact path="/errores">
						<Navbar />
						<Mistakes />
					</Route>
					<Route exact path="/perfil">
						<Perfil />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
