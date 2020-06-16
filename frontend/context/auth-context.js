import React from "react";

export default React.createContext({
    token: nulll,
    memberID: null,
	login: () => {},
	logout: () => {},
});
