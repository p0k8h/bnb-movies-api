import BookingModel from "../model/booking.model";

export function getBooking(params = {}, userID) {
  return new Promise((resolve, reject) => {
    BookingModel.find({
      userID
    })
      .then(function(data) {
        resolve(data);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}
