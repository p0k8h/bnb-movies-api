import bodyParser from "body-parser";
import expressValidator from "express-validator";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import chalk from 'chalk'

const morganMiddleware = morgan(function(tokens, req, res) {
  return [
    // "\n\n\n",
    // chalk.hex("#ff4757").bold("🍄  Morgan --> "),
    chalk.hex("#34ace0").bold(tokens.method(req, res)),
    chalk.hex("#ffb142").bold(tokens.status(req, res)),
    chalk.hex("#ff5252").bold(tokens.url(req, res)),
    chalk.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
    // chalk.hex("#f78fb3").bold("@ " + tokens.date(req, res)),
    // chalk.yellow(tokens["remote-addr"](req, res)),
    // chalk.hex("#fffa65").bold("from " + tokens.referrer(req, res)),
    // chalk.hex("#1e90ff")(tokens["user-agent"](req, res)),
    // "\n\n\n"
  ].join(" ");
});

export default (app, config, path, env) => {
  app.set("port", config.app.port);
  app.use(morganMiddleware);
  app.use(fileUpload());
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(
    expressValidator({
      customValidators: {
        isImage: function(value, filename) {
          let extension = path.extname(filename).toLowerCase();
          switch (extension) {
            case ".jpg":
              return ".jpg";
            case ".jpeg":
              return ".jpeg";
            case ".png":
              return ".png";
            default:
              return false;
          }
        }
      }
    })
  );
};
