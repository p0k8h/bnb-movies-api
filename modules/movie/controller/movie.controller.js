import { pick, assign } from "lodash";
import {
  getMovies as getMoviesQ,
  postMovie as postMovieQ,
  putMovie as putMovieQ,
  deleteMovieByID as deleteMovieByIDQ
} from "../query/movie.query";

export function getMovies(req, res) {
  let params = pick(req.body, []);

  getMoviesQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function postMovie(req, res, next) {
  req.checkBody("name", "name must be entered.").notEmpty();
  req.checkBody("description", "description must be entered.").notEmpty();
  // req.checkBody("cinemas", "cinemas must be entered!").notEmpty();
  // req.checkBody("shows", "shows must be inserted").notEmpty();

  let file = req.files && req.files["poster"];
  let moviePoster = req.files && req.files["poster"] ? req.files["poster"].name : null;
  if (!moviePoster) {
    return res.status(400).send({"poster": "Please enter a movie poster"})
  }
  // req.checkBody("poster", "Movie poster must be entered!").isImage(moviePoster);

  const errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  const params = pick(req.body, [
    "name",
    "description",
    "poster",
    "release_date",
    "run_time",
    "director",
    "trailer_link",
    "cast",
    "cinemas",
    "shows",
    "price"
  ]);

  postMovieQ(assign(params, { moviePoster, file }))
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
}

export function putMovie(req, res, next) {

  let file = req.files && req.files["poster"];
  let moviePoster = req.files && req.files["poster"] ? req.files["poster"].name : null;

  req.checkBody("poster", "Movie poster must be entered!").isImage(moviePoster);

  const errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  let movieID = req.params.movieID;
  const params = pick(req.body, [
    "name",
    "description",
    "poster",
    "release_date",
    "run_time",
    "director",
    "trailer_link",
    "cast",
    "price"
  ]);

  putMovieQ(assign(params, { moviePoster, file, movieID }))
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
}

export function deleteMovieByID(req, res, next) {
  let movieID = req.params.movieID;

  deleteMovieByIDQ(movieID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}