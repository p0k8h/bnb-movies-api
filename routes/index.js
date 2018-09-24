import userRoutes from "../modules/user/controller/user.route";
import cinemaRoutes from "../modules/cinema/controller/cinema.route";
// import bookingRoutes from '../modules/booking/controller/booking.route'
import movieRoutes from "../modules/movie/controller/movie.route";

import authRoutes from "../modules/auth/auth.route";

import config from "../config";

let BASE_URL = config.app.baseURL;

export default function(app) {
  app.use(`${BASE_URL}/users`, userRoutes);
  app.use(`${BASE_URL}/cinemas`, cinemaRoutes);
  // app.use(`${BASE_URL}/bookings`, bookingRoutes);
  app.use(`${BASE_URL}/movies`, movieRoutes);
  app.use(`${BASE_URL}/auth`, authRoutes);
}
