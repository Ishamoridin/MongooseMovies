require("./db/connection");
const yargs = require(`yargs`);
const mongoose = require(`mongoose`);
const { connect } = require(`./db/connection`);
const { createMovie, readMovies, updateMovie, deleteMovie, createShow, readShows, updateShow, deleteShow } = require(`./movies/function`)

async function app(yargsinput) {
    
    if (yargsinput.movie){
        if (yargsinput.create){
        console.log("Attempting create");
        const newMovie = {
            title: yargsinput.title,
            actor: yargsinput.actor,
            director: yargsinput.director,
            rating: yargsinput.rating,
        }
        await createMovie(newMovie);
        console.log(`Creating new movie entry: `); console.table({newMovie}, ["title", "actor", "director", "rating"])
        //C
        }
        else if (yargsinput.read) {
            console.log("Reading")
            const findFilter = {};
            // let resultsTable = []
            if (yargsinput.rating){findFilter.rating = yargsinput.rating}
            if (yargsinput.director){findFilter.director = yargsinput.director}
            if (yargsinput.actor){findFilter.actor = yargsinput.actor}
            if (yargsinput.title){findFilter.title = yargsinput.title}
            results = await readMovies(findFilter);
            // for (i=0;i<results.length;i++){resultsTable.push({
            //     title: results[i].title,
            //     actor: results[i].actor,
            //     director: results[i].director,
            //     rating: results[i].rating
            // })}
            // console.table(resultsTable)
            console.table(JSON.parse(JSON.stringify(results)), ["title", "actor", "director", "rating"])
            //R
        }
        else if (yargsinput.update) {
            console.log("Updating");
            if (!yargsinput.title){console.log("Title required to update entry")}
            else {
                const findFilter = {}; findFilter.title = yargsinput.title;
                const updatedMovie = {}; updatedMovie.title = yargsinput.title;
                if (yargsinput.rating){updatedMovie.rating = yargsinput.rating};
                if (yargsinput.director){updatedMovie.director = yargsinput.director};
                if (yargsinput.actor){updatedMovie.actor = yargsinput.actor};
                await updateMovie(findFilter, updatedMovie);
                console.log(`Updated entry for: `, updatedMovie)
            }
            //U
        }
        else if (yargsinput.delete) {
            console.log("Deleting")
            const findFilter = {}; findFilter.title = yargsinput.title;
            if (yargsinput.rating){findFilter.rating = yargsinput.rating};
            if (yargsinput.director){findFilter.director = yargsinput.director};
            if (yargsinput.actor){findFilter.actor = yargsinput.actor};
            const results = await deleteMovie(findFilter);
            console.log(`Deleted the following entry:`)
            console.table(results, ["title", "actor", "director", "rating"])
            //D
        }
        else {
            console.log("Invalid command")
        }
    }
    else if (yargsinput.tv){
        if (yargsinput.create){
        console.log("Attempting create");
        const newShow = {
            title: yargsinput.title,
            actor: yargsinput.actor,
            producer: yargsinput.producer,
            rating: yargsinput.rating,
        }
        await createShow(newShow);
        console.log(`Creating new TVshow entry: `); console.table({newShow}, ["title", "actor", "producer", "rating"])
        //C
        }
        else if (yargsinput.read) {
            console.log("Reading")
            const findFilter = {};
            if (yargsinput.rating){findFilter.rating = yargsinput.rating}
            if (yargsinput.producer){findFilter.producer = yargsinput.producer}
            if (yargsinput.actor){findFilter.actor = yargsinput.actor}
            if (yargsinput.title){findFilter.title = yargsinput.title}
            results = await readShows(findFilter);
            console.table(JSON.parse(JSON.stringify(results)), ["title", "actor", "producer", "rating"])
            //R
        }
        else if (yargsinput.update) {
            console.log("Updating");
            if (!yargsinput.title){console.log("Title required to update entry")}
            else {
                const findFilter = {}; findFilter.title = yargsinput.title;
                const updatedShow = {}; updatedShow.title = yargsinput.title;
                if (yargsinput.rating){updatedShow.rating = yargsinput.rating};
                if (yargsinput.producer){updatedShow.producer = yargsinput.producer};
                if (yargsinput.actor){updatedShow.actor = yargsinput.actor};
                await updateShow(findFilter, updatedShow);
                console.log(`Updated entry for: `, updatedShow)
            }
            //U
        }
        else if (yargsinput.delete) {
            console.log("Deleting")
            const findFilter = {}; findFilter.title = yargsinput.title;
            if (yargsinput.rating){findFilter.rating = yargsinput.rating};
            if (yargsinput.producer){findFilter.producer = yargsinput.producer};
            if (yargsinput.actor){findFilter.actor = yargsinput.actor};
            const results = await deleteShow(findFilter);
            console.log(`Deleted the following entry:`)
            console.table(results, ["title", "actor", "producer", "rating"])
            //D
        }

    }
    try {
        await mongoose.disconnect();
        console.log("Connection Terminating")
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);