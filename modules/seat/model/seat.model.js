export default (sequelize, DataTypes) => {
  const Seat = sequelize.define("seat", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    show_id: {
      type: DataTypes.INTEGER
      // FK
    },
    seat_status: {
      type: DataTypes.ENUM,
      values: ["Booked", "Available"]
    },
    booking_id: {
      type: DataTypes.INTEGER
      // FK
    },
    theatre_id: {
      type: DataTypes.INTEGER
      // FK
    }
  });
  return Seat;
};
