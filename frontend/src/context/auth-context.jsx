import React, { useState, createContext } from "react";

// Create Context Object
export const AuthContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AuthContextProvider = (props) => {
	const [auth, setAuth] = useState("Test");
	return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};
