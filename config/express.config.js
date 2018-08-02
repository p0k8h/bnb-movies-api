import bodyParser from "body-parser";
import expressValidator from "express-validator";

export default (app, config, path, env) => {
  app.set("port", config.app.port);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(expressValidator());
};
