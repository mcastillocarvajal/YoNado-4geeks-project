const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			register: false,
			user: [],
			userName: [],
			favorites: [],
			activities: [],
			fbemail: [],
			resetpassEmail: ""
		},
		actions: {
			getSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				const user = JSON.parse(localStorage.getItem("user"));
				const userName = JSON.parse(localStorage.getItem("userName"));
				const favorites = JSON.parse(localStorage.getItem("favorites"));
				const activities = JSON.parse(localStorage.getItem("activities"));
				const resetpassEmail = JSON.parse(localStorage.getItem("resetpassEmail"));
				if (token && token != "" && token != undefined) setStore({ token: token });
				if (user && user != "" && user != undefined) setStore({ user: user });
				if (userName && userName != "" && userName != undefined) setStore({ userName: userName });
				if (favorites && favorites != "" && favorites != undefined) setStore({ favorites: favorites });
				if (activities && activities != "" && activities != undefined) setStore({ activities: activities });
				if (resetpassEmail && resetpassEmail != "" && resetpassEmail != undefined)
					setStore({ resetpassEmail: resetpassEmail });
			},

			// >>>>>> LOGIN/LOGOUT/REGISTER

			Login: async (email, password) => {
				const store = getStore();
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
					const resp = await fetch(`${process.env.BACKEND_URL}/api/login`, opts);
					if (resp.status != 200) {
						alert("Correo o contraseña inválidos");
						return false;
					}
					const data = await resp.json();
					sessionStorage.setItem("token", data.access_token);
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("userName", JSON.stringify(data.user.name));
					localStorage.setItem("favorites", JSON.stringify(data.user.favorites));
					localStorage.setItem("activities", JSON.stringify(data.user.activities));
					setStore({
						token: data.access_token,
						user: data.user,
						userName: data.user.name,
						favorites: data.user.favorites,
						activities: data.user.activities,
						register: false
					});
					console.log(">>>>LOGIN TOKEN: ", store.token);
					console.log(">>>>LOGIN USER: ", store.user);
					console.log(">>>>LOGIN FAVORITES: ", store.favorites);
					console.log(">>>>LOGIN ACTIVITIES: ", store.activities);
					return true;
				} catch (err) {
					console.error(">>>LOGIN ERROR", err);
				}
			},
			Logout: () => {
				sessionStorage.removeItem("token");
				setStore({
					token: null
				});
			},
			Register: async (name, last_name, email, password) => {
				const store = getStore();
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
					const resp = await fetch(`${process.env.BACKEND_URL}/api/register`, opts);
					if (resp.status != 200) {
						return false;
					}
					const data = await resp.json();
					console.log(">>>>REGISTER DATA: ", data);
					setStore({ register: true });
					return true;
				} catch (err) {
					console.error(">>>REGISTER ERROR", err);
				}
			},

			// >>>>>>> ADD/DELETE FAVORITES

			addFavorite: async (title, description, link, user_id) => {
				const store = getStore();
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify({
						title: title,
						description: description,
						link: link,
						user_id: user_id
					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/favorite`, opts);
					const data = await resp.json();
					setStore({ favorites: [...store.favorites, data] });
					console.log(">>>>ADDFAVORITE", store.favorites);
				} catch (err) {
					console.error(">>>ADD FAVORITE ERROR", err);
				}
			},
			deleteFavorite: async (user_id, link) => {
				const store = getStore();
				const opts = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify({
						user_id: user_id,
						link: link
					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/delete_favorite`, opts);
					if (resp.status != 200) {
						alert("DELETE FAVORITE ERROR");
					}
					const filter = store.favorites.filter(item => item.link != link);
					setStore({ favorites: filter });
					console.log(">>>>DELETEFAVORITE ", store.favorites);
				} catch (err) {
					console.error(">>>DELETE FAVORITE ERROR", err);
				}
			},

			// >>>>>>> ADD/DELETE ACTIVITIES

			addActivity: async (exercise, distance, date, lapse, user_id, deleteNumber) => {
				const store = getStore();
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify({
						exercise: exercise,
						distance: distance,
						date: date,
						lapse: lapse,
						user_id: user_id,
						deleteNumber: deleteNumber
					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/activity`, opts);
					const data = await resp.json();
					setStore({ activities: [...store.activities, data] });
					console.log(">>>>ADDACTIVITY", store.activities);
				} catch (err) {
					console.error(">>>ADD ACTIVITY ERROR", err);
				}
			},
			deleteActivity: async deleteNumber => {
				const store = getStore();
				const opts = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify({
						deleteNumber: deleteNumber
					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/delete_activity`, opts);
					if (resp.status != 200) {
						alert("DELETE ACTIVITY ERROR");
					}
					const filter = store.activities.filter(item => item.deleteNumber != deleteNumber);
					setStore({ activities: filter });
					console.log(">>>>DELETEACTIVITY ", store.activities);
				} catch (err) {
					console.error(">>>DELETE ACTIVITY ERROR", err);
				}
			},

			// >>>>>>> RESET PASSWORD

			ResetPass: async email => {
				const store = getStore();
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email
					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/resetpassword`, opts);
					if (resp.status != 200) {
						alert("Correo inválido. Intente creando una cuenta!");
					}
					const data = await resp.json();
					localStorage.setItem("resetpassEmail", JSON.stringify(data.user.email));
					setStore({
						resetpassEmail: data.user.email
					});
					console.log(">>>>RESETPASS EMAIL: ", store.resetpassEmail);
				} catch (err) {
					console.error(">>>RESETPASS ERROR", err);
				}
			},

			NewPassword: async (email, password) => {
				const opts = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/password`, opts);
					if (resp.status != 200) {
						alert("Por favor intente de nuevo!");
					}
					const data = await resp.json();
					console.log(">>>>NEWPASSWORD ", data);
					setStore({
						resetpassEmail: ""
					});
					localStorage.removeItem("resetpassEmail");
				} catch (err) {
					console.error(">>>NEWPASSWORD ERROR", err);
				}
			},

			Facebook: (email, name, token) => {
				setStore({
					token: token,
					userName: name,
					fbemail: email
				});
			}

			// ↓↓↓ ADD MORE ACTIONS HERE ↓↓↓ (IF NEEDED)
		}
	};
};

export default getState;
