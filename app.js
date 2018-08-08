import express from "express";
import cors from "cors";
import path from "path";

import monggoseConfig from "./config/mongoose.config";
import expressConfig from "./config/express.config";
import config from "./config";

const env = process.env.NODE_ENV || "dev";

const app = express();
app.use(cors());

monggoseConfig(config);
expressConfig(app, config, path, env);

app.listen(3000, () => {
  console.log("server listeniong");
});
