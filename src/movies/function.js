const {MovieCollection} = require("./model");
const {TVShowCollection} = require("./model")

async function createMovie(movieObject){
    try {
        const newMovie = await MovieCollection.create(movieObject);
        return newMovie

    } catch (error) {
        console.log(error)
    }
}

async function readMovies(movieFilter){
    try {
        const readResults = await MovieCollection.find(movieFilter);
        return readResults
    } catch (error) {
        console.log(error)
    }
}

async function updateMovie(movieFilter, movieObject){
    try {
        await MovieCollection.findOneAndUpdate(movieFilter, movieObject)
    } catch (error) {
        console.log(error)
    }
}

async function deleteMovie(movieFilter){
    try {
       const deletedMovie = await MovieCollection.findOneAndDelete(movieFilter);
       return deletedMovie
    } catch (error) {
        console.log(error)
    }

}

async function createShow(showObject){
    try {
        const newShow = await TVShowCollection.create(showObject);
        return newShow
    } catch (error) {
        console.log(error)
    }
}

async function readShows(showFilter){
    try {
        const readResults = await TVShowCollection.find(showFilter);
        return readResults
    } catch (error) {
        console.log(error)
    }
}

async function updateShow(showFilter, showObject){
    try {
        await TVShowCollection.findOneAndUpdate(showFilter, showObject)
    } catch (error) {
        console.log(error)
    }
}

async function deleteShow(showFilter){
    try {
        const deletedShow = await TVShowCollection.findOneAndDelete(showFilter);
        return deletedShow
    } catch (error) {
        console.log(error)
    }
}
module.exports = { createMovie, readMovies, updateMovie, deleteMovie, createShow, readShows, updateShow, deleteShow };