import shortid from "shortid";
import SeatModel from "../model/seat.model";

export function getSeats(params) {
  // let { movieID, cinemaID, show_time } = params;
  console.log(',.,', params)
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
  let { movieID, cinemaID, selectedSeats, show_time } = params;
  return new Promise(function(resolve, reject) {
    let query = { movieID, cinemaID, show_time };
    let update = { selectedSeats };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };

    SeatModel.findOneAndUpdate(query, { $addToSet: update }, options)
      .then(function(data) {
        resolve({
          data
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}
