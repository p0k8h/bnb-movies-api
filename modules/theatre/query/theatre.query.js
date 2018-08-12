import TheatreModel from "../model/theatre.model";

export function getTheatres(params) {
  return new Promise(function(resolve, reject) {
    TheatreModel.find(params)
      .then(function(theatres) {
        resolve({
          data: theatres
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function getTheatreByID(params) {
  return new Promise(function(resolve, reject) {
    TheatreModel.findById(params.theatreID)
      .then(function(theatre) {
        resolve({
          data: theatre
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function postTheatre(params) {
  return new Promise(function(resolve, reject) {
    let theatre = new TheatreModel(params);

    theatre.save(function(err, theatre) {
      if (err) {
        return reject({
          message: err
        });
      } else {
        resolve({
          data: theatre
        });
      }
    });
  });
}

export function updateTheatreByID(params) {
  return new Promise(function(resolve, reject) {
    TheatreModel.findByIdAndUpdate(
      params.theatreID,
      { $et: params },
      { new: true }
    )
      .then(function(theatre) {
        if (!theatre) {
          return resolve({
            message: "Theatre not found!"
          });
        } else {
          return resolve({
            data: theatre
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

export function deleteTheatreByID(params) {
  return new Promise(function(resolve, reject) {
    TheatreModel.findByIdAndRemove(params.theatreID)
      .then(function(theatre) {
        resolve({
          data: theatre
        });
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}
