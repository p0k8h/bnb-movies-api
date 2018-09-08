import _ from "lodash";

import { login as loginQ } from "./auth.query";

export function login(req, res, next) {
  req.checkBody("email", "email must be entered!").notEmpty();
  req.checkBody("password", "password must be entered!").notEmpty();

  let errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  let params = _.pick(req.body, ["email", "password"]);

  loginQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
