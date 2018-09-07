import _ from "lodash";
import {
  signupUser as signupUserQ,
  updateUser as updateUserQ,
  getUserByID as getUserByIDQ,
  updatePassword as updatePasswordQ,
  forgotPassword as forgotPasswordQ,
  resetPassword as resetPasswordQ
} from "../query/user.query";

export function signupUser(req, res, next) {
  req.checkBody("email", "movie_name must be entered!").notEmpty();
  req.checkBody("password", "password must be inserted!").notEmpty();
  req.checkBody("first_name", "first_name must be inserted!").notEmpty();
  req.checkBody("last_name", "last_name must be inserted!").notEmpty();
  req.checkBody("phone", "phone must be inserted!").notEmpty();

  let errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  let params = _.pick(req.body, [
    "email",
    "password",
    "first_name",
    "last_name",
    "phone"
  ]);

  signupUserQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function updateUser(req, res, next) {
  let params = _.pick(req.body, [
    "first_name",
    "last_name",
    "phone",
    "address"
  ]);

  updateUserQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function getUserByID(req, res, next) {
  let userID = req.user._id;

  let params = _.assign(_.pick(req.body, []), { userID });

  getUserByIDQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
