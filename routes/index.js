const express = require("express");
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((response) => {
      res.render("movies", { movies: response });
    })
    .catch((err) => console.log(err));
});

// Single movie GET with back to homepage link

router.get("/movie/:id", (req, res) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((response) => {
      res.render("more", { movies: response });
    })
    .catch((err) => console.log(err));
});

//
module.exports = router;
