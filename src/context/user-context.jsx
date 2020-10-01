import { createContext } from "react";

// Create Context Object
export const UserContext = createContext({
	id: "guest",
	firstName: "Elon",
	lastName: "Musk",
	groups: ["Staff"],
});
