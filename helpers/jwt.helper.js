import jwt from "jsonwebtoken";
import moment from "moment";
import _ from "lodash";

const JWT_SECRET = process.env.JWT_SECRET || "xyz123";

export function generateToken(user) {
  let payload = {
    sub: "bnb",
    user: _.pick(user, ["role", "_id", "email"]),
    iat: moment().unix(),
    exp: moment()
      .add(7, "day")
      .unix()
  };

  return jwt.sign(payload, JWT_SECRET);
}

export function decodeToken(token) {
  if (token) {
    let decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  }
  return null;
}

export function getToken(headers) {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(" ");
    return parted[0] === "Bearer" && parted.length === 2 ? parted[1] : null;
  }
  return null;
}
