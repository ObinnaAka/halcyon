import React, { createContext } from "react";

const AuthContext = createContext({
	auth: { token: null, member: null },
	setAuth: () => {},
	// login: (token, member, tokenExpiration) => {
	// 	setAuth({
	// 		token: token,
	// 		member: member,
	// 	});
	// },
	// logout: () => {
	// 	setAuth({
	// 		token: null,
	// 		member: null,
	// 	});
	// },
});

export default AuthContext;
