const jwt = require("jsonwebtoken");
const Member = require("../models/member");

export async function authenticateUser(token: string): Promise<Member> {}

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
