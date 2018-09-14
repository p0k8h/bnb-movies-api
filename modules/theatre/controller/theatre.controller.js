import _ from "lodash";
import {
  getTheatres as getTheatresQ,
  postTheatre as postTheatreQ,
  getTheatreByID as getTheatreByIDQ,
  updateTheatreByID as updateTheatreByIDQ,
  deleteTheatreByID as deleteTheatreByIDQ
} from "../query/theatre.query";

export function getTheatreByID(req, res, next) {
  let theatreID = req.params.theatreID;

  getTheatreByIDQ(theatreID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function getTheatres(req, res, next) {
  let params = _.pick(req.body, []);

  getTheatresQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      re.status(400).send(err);
    });
}

export function postTheatre(req, res, next) {

  req.checkBody("theatre_name", "theatre_name must be inserted!").notEmpty();
  req.checkBody("theatre_address", "theatre_address must be inserted!").notEmpty();

  let errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  let params = _.pick(req.body, ["theatre_name", "theatre_address"]);

  postTheatreQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function updateTheatreByID(req, res, next) {
  let theatreID = req.params.theatreID;

  let params = _.pick(req.body, ["theatre_name", "theatre_address"]);

  updateTheatreByIDQ(params, theatreID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function deleteTheatreByID(req, res, next) {
  let theatreID = req.params.theatreID;

  deleteTheatreByIDQ(theatreID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
