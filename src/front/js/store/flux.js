const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user: [],
			favorites: [],
			activities: []
		},
		actions: {
			getSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},
			Login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", opts);
					if (resp.status != 200) {
						alert("Email o contraseña inválidos");
						return false;
					}
					const data = await resp.json();
					sessionStorage.setItem("token", data.access_token);
					console.log(">>>>LOGIN TOKEN: ", data.access_token);
					console.log(">>>>LOGIN USER: ", data.user);
					console.log(">>>>LOGIN FAVORITES: ", data.user.favorites);
					console.log(">>>>LOGIN ACTIVITIES: ", data.user.activities);
					setStore({
						token: data.access_token,
						user: data.user,
						favorites: data.favorites,
						activities: data.activities
					});
					return true;
				} catch (err) {
					console.error(">>>LOGIN ERROR", err);
				}
			},
			Logout: () => {
				sessionStorage.removeItem("token");
				setStore({
					token: null,
					user: [],
					favorites: [],
					activities: []
				});
			},
			Register: async (name, last_name, email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						last_name: last_name,
						email: email,
						password: password
					})
				};
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/register", opts);
					if (resp.status != 200) {
						return false;
					}
					const data = await resp.json();
					console.log(">>>>REGISTER DATA: ", data);
					return true;
				} catch (err) {
					console.error(">>>REGISTER ERROR", err);
				}
			}
		}
	};
};

export default getState;
