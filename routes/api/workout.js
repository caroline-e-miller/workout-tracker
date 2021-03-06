const router = require("express").Router();
const Workout = require("../../models/workout.js");

// POST: /api/workout
// create new workout
router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// PUT: /api/workouts/:id
// put new exerices into workout
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

// GET: /api/workout/range
// view all workouts
router.get("/workouts/range", ({ body }, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// GET: /api/workout
router.get("/workouts", ({ body }, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// get one workout
router.get("/workouts/:id", (req, res) => {
    Workout.findOne(
        {
            _id: req.params.id
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

// GET: /api/workout
// view workout duration
// router.get("/workouts", (req, res) => {
//     Workout.find({})
//         // .sort({ duration: `${duration}` })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;