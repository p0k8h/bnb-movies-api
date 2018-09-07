import fs from "fs";
import path from "path";

const rootPath = path.normalize(__dirname + "/../");

const app = {
  PATH: rootPath,
  host: "localhost",
  port: process.env.PORT || 3001,
  env_mode: "dev",
  baseURL: "/api/v1"
};

const mongodb = {
  MONGODB_URI: "mongodb://parwat:Note123@ds249372.mlab.com:49372/bnb-movies",
  options: {
    useNewUrlParser: true
  }
};

export { app, mongodb };
