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
  let { moviePoster, file } = params;

  return new Promise(function(resolve, reject) {
    let posterPath = `images/${moviePoster}`;
    file.mv(posterPath, function(err) {
      let movie = new MovieModel(
        Object.assign(params, { poster_link: posterPath })
      );

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
  });
}
