import { pick as _pick } from "lodash";
import { getMovies, postMovies } from "../query/movie.query";

export function getMovies(req, res) {}

export function postMovies(req, res) {
  req.checkBody("movie_name", "movie_name must be entered.").notEmpty();
  req
    .checkBody("movie_description", "movie_description must be entered.")
    .notEmpty();

  const errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  const reqBody = _pick(req.body, ["movie_name", "movie_description"]);

  postMovies(reqBody)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
}
