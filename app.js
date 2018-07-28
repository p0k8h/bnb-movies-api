import express from "express";
import cors from "cors";

const config = require("./config");
const env = process.env.NODE_ENV || "dev";

const app = express();
app.use(cors());

require("./config/mongoose.config")(config);

require("./config/express.config")(app, config, path, env);

app.listen(3000, () => {
  console.log("server listeniong");
});
