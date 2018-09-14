import MovieModel from "../model/movie.model";

export function getMovies(params) {
  return new Promise(function(resolve, reject) {
    MovieModel.find(params)
      .then(function(movies) {
        resolve({
          data: movies
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function postMovie(params) {
  let moviePoster = params.moviePoster;
  return new Promise(function(resolve, reject) {
    if (moviePoster) {
      moviePoster.mv(`/images/${moviePoster}`)
    }
    let movie = new MovieModel(params);

    movie.save(function(err, movie) {
      if (err) {
        return reject({
          message: err
        });
      } else {
        resolve({
          data: movie
        });
      }
    });
  });
}
