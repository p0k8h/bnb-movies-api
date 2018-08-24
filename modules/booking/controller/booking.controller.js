import _ from "lodash";

import bookingQuery from "../query/booking.query";

export function getBooking(req, res, next) {
  let userID = req.user._id;
  let params = _.pick(req.body, []);
  bookingQuery
    .getBooking(params, userID)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
