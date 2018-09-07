import express from "express";
import cors from "cors";
import path from "path";
import chalk from "chalk";

import mongooseConfig from "./config/mongoose.config";
import expressConfig from "./config/express.config";
import config from "./config";
import routes from "./routes";

const env = process.env.NODE_ENV || "dev";

const app = express();
app.use(cors());

mongooseConfig(config);
expressConfig(app, config, path, env);

express.Router().get("/", (req, res) => {
  res.json({
    message: "Welcome to the bnb movies API"
  });
});
routes(app);


app.listen(app.get("port"), () => {
  console.log(
    `%s  Serving APPI at http://${config.app.host}:%d in %s mode\n`,
    chalk.green("✅"),
    app.get("port"),
    env
  );
  console.log("PRESS CTRL+C to stop\n");
});
