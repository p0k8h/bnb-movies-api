import _ from "lodash";
import {
  getTheatreByID,
  getTheatres,
  postTheatre,
  updateTheatreByID,
  deleteTheatreByID
} from "../query/theatre.query";

export function getTheatreByID(req, res, next) {
  let theatreID = req.params.theatreID;

  getTheatreByID(theatreID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function getTheatres(req, res, next) {
  let params = _.pick(req.body, []);

  getTheatres(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      re.status(400).send(err);
    });
}

export function postTheatre(req, res, next) {
  let params = _.pick(req.body, ["theatre_name", "theatre_address"]);

  postTheatre(params)
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

  updateTheatreByID(params, theatreID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function deleteTheatreByID(req, res, next) {
  let theatreID = req.params.theatreID;

  deleteTheatreByID(theatreID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
