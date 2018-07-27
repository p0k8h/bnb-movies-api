export default (sequelize, DataTypes) => {
  const Show = sequelize.define("show", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    theatre_id: {
      type: DataTypes.INTEGER
    },
    movie_id: {
      type: DataTypes.INTEGER
      // FK
    },
    show_date: {
      type: DataTypes.DATE
    },
    show_timings: {
      type: DataTypes.DATE
    }
  });
  return Show;
};
