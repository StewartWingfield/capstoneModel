const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  let header = req.get("Authorization");
  // header = "Bearer aspdfgujohaspfughaufg"
  // signToken = ["Bearer", "a;sduljghasdgasg"]
  let signToken;
  if (header) {
    signToken = header.split(" ")[1];
  }

  if (signToken) {
    try {
      let notSignedToken = jwt.verify(signToken, process.env.JWT_SECRET);
      req.userToken = notSignedToken;
      next();
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(500).json({ msg: "not authorized" });
  }
};

module.exports = {
  verifyJwt,
};
