import bodyParser from "body-parser";
import expressValidator from "express-validator";
import fileUpload from "express-fileupload";

export default (app, config, path, env) => {
  app.set("port", config.app.port);
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
