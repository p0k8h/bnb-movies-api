import fs from "fs";
import path from "path";

const rootPath = path.normalize(__dirname + "/../");

const app = {
  PATH: rootPath,
  host: "localhost",
  port: process.env.PORT || 9000,
  env_mode: "dev",
  baseURL: "/api/v1"
};

const DB_NAME = 'bnb-movies'

const mongodb = {
    MONGODB_URI = `mongodb://localhost${DB_NAME}`,
    options: {
        useMongoClient: true
    }
}

export {
    app,
    mongodb
}
