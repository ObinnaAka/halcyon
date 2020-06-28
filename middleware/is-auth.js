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
			console.log("1");
			return null;
		}
		const token = authHeader.split(" ")[1];
		if (!token || token === "") {
			console.log("2");
			return null;
		}
		let decodedToken;
		try {
			decodedToken = jwt.verify(token, "supercalifragilisticexpialidocious");
		} catch (err) {
			console.log(err);
			return null;
		}
		if (!decodedToken) {
			console.log("4");
			return null;
		}

		return decodedToken.member;
	},
	// ------------------------------------------------------------------
	//  This function verifies that the Member is the current active
	//  member stored in the global context
	// ------------------------------------------------------------------
	authenticated: (next) => (root, args, context, info) => {
		if (!context.currentMember) {
			throw new Error(`Unauthenticated!`);
		}

		return next(root, args, context, info);
	},

	// ------------------------------------------------------------------
	// This function validates a Member's authorization level and grants
	//  access to restricted areas
	// ------------------------------------------------------------------
	validateRole: (role) => (next) => (root, args, context, info) => {
		if (context.currentMember.memberType !== role) {
			console.log(role);
			throw new Error(`Unauthorized!`);
		}

		return next(root, args, context, info);
	},
};

// module.exports = (req, res, next) => {
// 	const authHeader = req.headers.authorization;
// 	if (!authHeader) {
// 		console.log("1");
// 		req.isAuth = false;
// 		return next();
// 	}
// 	const token = authHeader.split(" ")[1];
// 	if (!token || token === "") {
// 		console.log("2");
// 		req.isAuth = false;
// 		return next();
// 	}
// 	let decodedToken;
// 	try {
// 		decodedToken = jwt.verify(token, "supercalifragilisticexpialidocious");
// 	} catch (err) {
// 		console.log(err);
// 		req.isAuth = false;
// 		return next();
// 	}
// 	if (!decodedToken) {
// 		console.log("4");
// 		req.isAuth = false;
// 		return next();
// 	}

// 	req.isAuth = true;
// 	req.memberId = decodedToken.memberId;
// 	next();
// };
