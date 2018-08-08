import _ from "lodash";
import {
  signupUser,
  updateUser,
  updatePassword,
  forgotPassword,
  resetPassword
} from "../query/user.query";

export function signupUser(req, res, next) {
  req.checkBody("email", "movie_name must be entered!").notEmpty();
  req.checkBody("password", "password must be inserted!").notEmpty();

  let errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  let userParams = _.pick(req.body, ["email", "password"]);

  signupUser(userParams)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function updateUser(req, res, next) {
  let userParams = _.pick(req.body, [
    "first_name",
    "last_name",
    "phone",
    "address"
  ]);

  updateUser(userParams)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
