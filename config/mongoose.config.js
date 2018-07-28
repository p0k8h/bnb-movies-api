import mongoose from "mongoose";
import chalk from "chalk";

export default config => {
  mongoose.connect(
    config.mongodb.MONGODB_URI,
    config.mongodb.options
  );
  mongoose.connection.on("error", () => {
    console.log(
      "%s MongoDB connection error. Please make sure MongoDB is running.",
      chalk.red("✗")
    );
    process.exit();
  });
};
