import _ from "lodash";
import { pick as _pick } from "lodash";
import {
  getMovies as getMoviesQ,
  postMovie as postMovieQ
} from "../query/movie.query";

export function getMovies(req, res) {
  let params = _.pick(req.body, []);

  getMoviesQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      re.status(400).send(err);
    });
}

export function postMovie(req, res, next) {
  req.checkBody("name", "name must be entered.").notEmpty();
  req.checkBody("description", "description must be entered.").notEmpty();
  req.checkBody("cinemas", "cinemas must be entered!").notEmpty();

  let file = req.files["poster"];
  let moviePoster = req.files["poster"] ? req.files["poster"].name : null;

  req.checkBody("poster", "Movie poster must be entered!").isImage(moviePoster);

  const errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  const params = _pick(req.body, [
    "name",
    "description",
    "poster",
    "release_date",
    "run_time",
    "director",
    "trailer_link",
    "cast"
  ]);

  postMovieQ(_.assign(params, { moviePoster, file }))
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
}
