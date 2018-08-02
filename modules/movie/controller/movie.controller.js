import movieQuery from "../query/movie.query";

export function getMovies(req, res) {}

export function postMovies(req, res) {
    req.checkBody("movie_name", "movie_name must be entered.").notEmpty();
    req.checkBody("movie_description", "movie_description must be entered.").notEmpty();
    req.checkBody("amount", "pair must be entered.").notEmpty();
  
    let errors = req.validationErrors();
  
    if (errors) return res.status(400).send(errors);
  
}
