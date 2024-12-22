import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({ message: "Access Denied" });
  }
  try {
    jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = authToken;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
}
