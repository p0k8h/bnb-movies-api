import shortid from 'shortid';
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
    let posterPath = `public/${shortid.generate()}${moviePoster}`;
    file.mv(posterPath, function(err) {
      let movie = new MovieModel(
        Object.assign(params, { poster_link: `http://localhost:3001/${posterPath}` })
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

export function putMovie(params) {
  let { moviePoster, file, movieID } = params;

  return new Promise(function(resolve, reject) {
    let posterPath = `public/${moviePoster}`;
    file.mv(posterPath, function(err) {

      MovieModel.findByIdAndUpdate(
        { _id: movieID },
        Object.assign(params, { poster_link: posterPath }),
        { new: true }
      )
        .then(movie => resolve({ data: movie }))
        .catch(err => reject({ message: err }));
    });
  });
}
