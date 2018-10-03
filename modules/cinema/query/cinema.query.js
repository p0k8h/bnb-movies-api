import shortid from 'shortid';
import CinemaModel from "../model/cinema.model";

export function getcinemas(params = {}) {
  return new Promise(function(resolve, reject) {
    CinemaModel.find(params)
      .then(function(cinemas) {
        resolve({
          data: cinemas
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function getcinemaByID(cinemaID) {
  return new Promise(function(resolve, reject) {
    CinemaModel.findById(cinemaID)
      .then(function(cinema) {
        resolve({
          data: cinema
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function postcinema(params) {
  let { cinemaPoster, file } = params;

  return new Promise(function(resolve, reject) {
    let posterPath = `public/${shortid.generate()}${cinemaPoster}`;
    file.mv(posterPath, function(err) {
      let cinema = new CinemaModel(
        Object.assign(params, { poster_link: `http://localhost:3001/${posterPath}` })
      );

      cinema.save(function(err, cinema) {
        if (err) {
          return reject({
            message: err
          });
        } else {
          resolve({
            data: cinema
          });
        }
      });
    });
  });
}

export function updatecinemaByID(params, cinemaID) {
  return new Promise(function(resolve, reject) {
    CinemaModel.findByIdAndUpdate(cinemaID, { $set: params }, { new: true })
      .then(function(cinema) {
        if (!cinema) {
          return resolve({
            message: "cinema not found!"
          });
        } else {
          return resolve({
            data: cinema
          });
        }
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function deletecinemaByID(cinemaID) {
  return new Promise(function(resolve, reject) {
    CinemaModel.findByIdAndRemove(cinemaID)
      .then(function(cinema) {
        resolve({
          data: cinema
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}
