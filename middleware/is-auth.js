const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const authHeader = req.get("Authorization");
    if (!authHeader) {
        console.log("1");
		req.isAuth = false;
		return next();
	}
	const token = authHeader.split(" ")[1];
    if (!token || token === "") {
        console.log("2");
		req.isAuth = false;
		return next();
	}
	let decodedToken;
	try {
        decodedToken = jwt.verify(token, 'supercalifragilisticexpialidocious');
    } catch (err) {
        console.log(err);
		req.isAuth = false;
		return next();
	}
    if (!decodedToken) {
        console.log("4");
		req.isAuth = false;
		return next();
	}
    req.isAuth = true;
	req.memberId = decodedToken.memberId;
	next();
};
