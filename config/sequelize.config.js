import Sequelize from "sequelize";

import BookingModel from "../modules/booking/model/booking.model";
import MovieModel from "../modules/movie/model/movie.model";
import SeatModel from "../modules/seat/model/seat.model";
import ShowModel from "../modules/show/model/show.model";
import TheatreModel from "../modules/theatre/model/theatre.model";

const sequelize = new Sequelize("bnb-movie", "root", "stack", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false
});

const Booking = BookingModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);
const Seat = SeatModel(sequelize, Sequelize);
const Show = ShowModel(sequelize, Sequelize);
const Theatre = TheatreModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully!");
  })
  .catch(err => {
    console.error("Unable to connect to the database: ", err);
  });
