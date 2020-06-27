import React from "react";

export default React.createContext({
    token: null,
    memberID: null,
	login: () => {},
	logout: () => {},
});
