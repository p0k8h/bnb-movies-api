export default (sequelize, DataTypes) => {
  const Theatre = sequelize.define("theatre", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING
      // FK
    },
    booking_date: {
      type: DataTypes.DATE
    },
    show_id: {
      type: DataTypes.INTEGER
    }
  });

  return Theatre;
};
