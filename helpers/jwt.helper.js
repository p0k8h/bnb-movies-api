import jwt from "jsonwebtoken";
import moment from "moment";

const JWT_SECRET = process.env.JWT_SECRET || "xyz123";

export function generateToken(user) {
  let payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(7, "day")
      .unix()
  };

  return jwt.sign(payload, JWT_SECRET);
}

export function decodeToken(headers) {
  let token = getToken(headers);
  if (token) {
    let decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  }
  return null;
}

export function getToken(headers) {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(" ");
    if (parted[0] === "Bearer" && parted.length === 2) return parted[1];
    return null;
  }
  return null;
}
