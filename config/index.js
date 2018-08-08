let config;

const config_file =
  "./" + (process.env.NODE_ENV ? process.env.NODE_ENV : "dev") + ".env.config";

try {
  config = require(config_file);
} catch (err) {
  if (err.code && err.code === "MODULE_NOT_FOUND") {
    console.error(
      "No config file matching NODE_ENV = " +
        process.env.NODE_ENV +
        '. Requires "' +
        __dirname +
        "/" +
        process.env.NODE_ENV +
        'env.config.js"'
    );
    process.exit(1);
  } else {
    throw err;
  }
}

export default config;
