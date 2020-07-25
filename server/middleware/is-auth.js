const jwt = require("jsonwebtoken");
const Member = require("../models/member");

// ---------------
// Member Decoding
// ---------------

module.exports = {
	// ------------------------------------------------------------------
	// The purpose of this method is to take in a Member token (stored in
	// a header), and return a Member object as the "Authenticated Member"
	// ------------------------------------------------------------------
	tradeTokenForMember: async (header) => {
		const authHeader = header;
		if (!authHeader) {
			console.log("is-auth : 1 : No Auth Header");
			return null;
		}
		const token = authHeader.split(" ")[1];
		if (!token || token === "") {
			console.log("is-auth : 2 : No Token Attached");
			return null;
		}
		let decodedToken;
		try {
			decodedToken = jwt.verify(token, "supercalifragilisticexpialidocious");
		} catch (err) {
			console.log("is-auth : 3 : JWT Decryption Failed");
			console.log(err);
			return null;
		}
		if (!decodedToken) {
			console.log("is-auth : 4 : Decoded Token is Empty");
			return null;
		}

		return decodedToken.member;
	},
	// ------------------------------------------------------------------
	//  This function verifies that the Member is the current active
	//  member stored in the global context
	// ------------------------------------------------------------------
	authenticated: (next) => (root, args, context, info) => {
		// ------------------------------------------------------------------
		// * There needs to be a way to verify that the token from the user
		// Belongs to the current user who's data is trying to be accessed
		// ------------------------------------------------------------------
		if (!context.currentMember) {
			console.log("Context: " + context);
			throw new Error(
				`Unauthenticated! context : ${context} \n \n \n ${JSON.stringify(
					context
				)} `
			);
		}

		return next(root, args, context, info);
	},

	// ------------------------------------------------------------------
	// This function validates a Member's authorization level and grants
	//  access to restricted areas
	// ------------------------------------------------------------------
	validateRole: (role) => (next) => (root, args, context, info) => {
		if (context.currentMember.memberType !== role) {
			console.log("Context: " + context);
			console.log("Role: " + role);
			throw new Error(`Unauthorized! ${JSON.stringify(context)}`);
		}

		return next(root, args, context, info);
	},
};
