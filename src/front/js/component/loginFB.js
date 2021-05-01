import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

export const LoginFB = () => {
	const { store, actions } = useContext(Context);
	const responseFacebook = response => {
		console.log(response);
		console.log(">>>>>>TOKEN", response.accessToken);
		console.log(">>>>>>NAME", response.name);
		console.log(">>>>>>EMAIL", response.email);
		actions.Facebook(response.email, response.name, response.accessToken);
	};

	return (
		<>
			<FacebookLogin
				appId="879098049313561"
				autoLoad={false}
				fields="name,email,picture"
				// onClick={handleFacebook}
				callback={responseFacebook}
				textButton="&nbsp;Inicia sesión con Facebook"
				icon={<i className="fab fa-facebook-square" />}
				cssClass="fblogin"
			/>
		</>
	);
};
