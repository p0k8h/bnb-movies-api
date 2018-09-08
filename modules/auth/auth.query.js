import UserModel from "../user/model/user.model";
import { generateToken } from "../../helpers/jwt.helper";

export function login(params) {
  let { email, password } = params;
  return new Promise((resolve, reject) => {
    UserModel.findOne(
      {
        email
      },
      function(err, user) {
        if (!user) {
          return reject({
            message: "Authenticated failed. User not found!"
          });
        } else {
          user.verifyPassword(password, function(err, isMatch) {
            if (err) {
              return reject({
                message: "Authentication failed. Wrong password!"
              });
            } else {
              let token = generateToken(user);
              return resolve({ user, token });
            }
          });
        }
      }
    );
  });
}
