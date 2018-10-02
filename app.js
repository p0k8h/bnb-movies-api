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
app.use("/public", express.static(__dirname + '/public'));

mongooseConfig(config);
expressConfig(app, config, path, env);

routes(app);

app.listen(app.get("port"), () => {
  console.log(
    `%s  Serving API at http://${config.app.host}:%d in %s mode\n`,
    chalk.green("✅"),
    app.get("port"),
    env
  );
  console.log("PRESS CTRL+C to stop\n");
});
