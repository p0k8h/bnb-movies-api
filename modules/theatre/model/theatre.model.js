export default (sequelize, DataTypes) => {
  const Theatre = sequelize.define("theatre", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    movie_id: {
      type: DataTypes.STRING
      // FK
    },
    movie_release_date: {
      type: DataTypes.DATE
    },
    theatre_name: {
      type: DataTypes.STRING
    },
    theatre_address: {
      type: DataTypes.STRING
    }
  });

  return Theatre;
};
