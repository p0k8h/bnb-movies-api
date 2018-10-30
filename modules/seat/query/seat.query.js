import shortid from "shortid";
import SeatModel from "../model/seat.model";

export function getSeats(params) {
  return new Promise(function(resolve, reject) {
    SeatModel.find(params)
      .then(function(seats) {
        resolve({
          data: seats
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function postSeat(params) {
  return new Promise(function(resolve, reject) {

    SeatModel.update(
      { movieID: params.movieID, cinemaID: params.movieID },
      { $addToSet: { selectedSeats: [...params.selectedSeats] }, show_time },
      { upsert: true, setDefaultsOnInsert: true },
      function(err, data) {
        console.log("=-=-=", err, data);
      }
    );
  });
}
