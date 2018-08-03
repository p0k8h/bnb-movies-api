import MovieModel from "../model/movie.model";

export function getMovies(params) {}

export function postMovies(params) {

    const movie = new MovieModel(params)
    movie.save((err, data) => {
        if (err) return 
    })
}
