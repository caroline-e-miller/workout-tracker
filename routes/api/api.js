const router = require("express").Router();
const Workout = require("../../models/workout.js");

// create new workout
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// put new exerices into workout
router.post("/api/workout/bulk", ({ body }, res) => {
    Workout.insertMany(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// view workout weight
router.get("/api/workout", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// view workout duration
router.get("/api/workout", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;