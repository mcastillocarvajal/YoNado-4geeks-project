import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
import { Perfil } from "./pages/perfil";
import { Breathing } from "./pages/breathing";
import { Mistakes } from "./pages/mistakes";
import { WarmUp } from "./pages/warmUp";
import { Exercises } from "./pages/exercises";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { Register } from "./component/register";
import { PrivateRoute } from "./component/privateRoute";
import { ForgotPass } from "./component/forgotPass";
import { NewPassword } from "./component/resetPass";
import { Login } from "./component/login";
import { Favorites } from "./component/Favorites";

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
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/forgotpassword">
						<ForgotPass />
					</Route>
					<Route exact path="/resetpassword/DyhsHSAI46sdal">
						<NewPassword />
					</Route>
					<PrivateRoute exact path="/ejercicios" component={Exercises} token={store.token} />
					<PrivateRoute exact path="/respiración" component={Breathing} token={store.token} />
					<PrivateRoute exact path="/calentamiento" component={WarmUp} token={store.token} />
					<PrivateRoute exact path="/errores" component={Mistakes} token={store.token} />
					<PrivateRoute exact path="/perfil" component={Perfil} token={store.token} />
					<PrivateRoute exact path="/favorites" component={Favorites} token={store.token} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
