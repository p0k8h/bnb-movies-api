import UserModel from "../modules/user/model/user.model";
import { getToken, decodeToken } from "../helpers/jwt.helper";

export default (req, res, next) => {
  let token = getToken(req.headers);

  if (token) {
    try {
      let decoded = decodeToken(token);
      req.user = decoded.user
      UserModel.findById(req.user._id)
        .then(user => {
          if (user) {
            if (!user.active_status)
              return res.status(401).json({
                message:
                  "Authentication failed, Your account has been disabled! Contact Admin"
              });
            else return next();
          } else {
            return res.status(400).json({
              message: "The user does not exist!"
            });
          }
        })
        .catch(err => res.status(500).json({ message: err }));
    } catch (error) {
      res.status(403).json({
        message: "Invalid Token!"
      });
    }
  } else {
    res.status(401).json({
      message: "UnAuthorized, No token provided!"
    });
  }
};
