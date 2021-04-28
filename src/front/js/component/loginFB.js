import React from "react";
import FacebookLogin from "react-facebook-login";
import "../../styles/login.scss";

export const LoginFB = () => {
	const responseFacebook = response => {
		console.log(response);
		console.log(">>>>>>TOKEN", response.accessToken);
		console.log(">>>>>>NAME", response.name);
	};

	return (
		<>
			<FacebookLogin
				appId="879098049313561"
				autoLoad={false}
				fields="name,email,picture"
				// onClick={componentClicked}
				callback={responseFacebook}
				textButton=""
				icon={
					<button className="btn text-white" id="fbicon">
						Inicia sesión con Facebook
					</button>
				}
				cssClass="fblogin"
			/>
		</>
	);
};
