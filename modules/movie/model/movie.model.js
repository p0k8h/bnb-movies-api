export default (sequelize, DataTypes) => {
  const Movie = sequelize.define("movie", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    movie_name: {
      type: DataTypes.STRING
    },
    movie_description: {
      type: DataTypes.TEXT
    }
  });

  return Movie;
};
