import userRoutes from "../modules/user/controller/user.route";
// import theatreRoutes from "../modules/theatre/controller/theatre.route";
// import bookingRoutes from '../modules/booking/controller/booking.controller'

import config from "../config";

let BASE_URL = config.app.baseURL;

export default function(app) {
  app.use(`${BASE_URL}/users`, userRoutes);
  // app.use(`${BASE_URL}/theatres`, theatreRoutes);
  // app.use(`${BASE_URL}/bookings`, bookingRoutes);

}
