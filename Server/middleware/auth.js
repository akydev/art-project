// Importing the jsonwebtoken library to verify JWT tokens
const jwt = require("jsonwebtoken");

// Middleware to verify the authenticity of the JWT token in requests
const authMiddleware = (req, res, next) => {
  // Extracting the authorization header from the request
  const authHeader = req.headers.authorization;

  // If the authorization header is not present, respond with a 401 Unauthorized error
  if (!authHeader) {
    return res.status(401).json({ msg: "Unauthorized request!" });
  }

  // Extracting the token from the 'Authorization' header
  // The format of the header is usually "Bearer <token>", so we split by space and take the second part
  const token = authHeader.split(" ")[1];

  // If the token is not found, respond with a 401 Unauthorized error
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied!" });
  }

  try {
    // Verifying the token using the secret key (here, it's "secret")
    // jwt.verify() decodes the token and checks its validity
    const decodedToken = jwt.verify(token, "secret");

    // If the token is valid, attach the decoded user info to the request object
    req.user = decodedToken;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If the token is not valid or expired, return a 401 Unauthorized error
    return res.status(401).json({ msg: "Token is not valid!" });
  }
};

// Exporting the middleware function to be used in other parts of the app (e.g., in route protection)
module.exports = authMiddleware;
