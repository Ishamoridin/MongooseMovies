const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    },
    director: {
        type: String,
        default: "Not specified",
    },
    rating: {
        type: Number,
        default: 2.5,
        min: 0,
        max: 5,
    }
});

const tvShowSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not Specified",
    },
    producer: {
        type: String,
        default: "Not Specified",
    },
    rating: {
        type: Number,
        default: 2.5,
        min: 0,
        max: 5,
    }
})

const MovieCollection = mongoose.model("Movies", movieSchema);
const TVShowCollection = mongoose.model("TVShows", tvShowSchema);

module.exports = { MovieCollection, TVShowCollection };