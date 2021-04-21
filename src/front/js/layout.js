import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Landing } from "./pages/landingpage_view";
import injectContext from "./store/appContext";

import { Landingpage } from "./component/landingpage";
import { Login } from "./component/login";

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
						<Landing />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
