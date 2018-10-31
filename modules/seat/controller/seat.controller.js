import { pick, assign } from "lodash";
import {
  getSeats as getSeatsQ,
  postSeat as postSeatQ
} from "../query/seat.query";

export function getSeats(req, res) {
  let params = pick(req.body, ["movieID", "cinemaID", "show_time"]);

  getSeatsQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function postSeat(req, res) {
  let params = pick(req.body, [
    "cinemaID",
    "movieID",
    "selectedSeats",
    "show_time"
  ]);

  postSeatQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
