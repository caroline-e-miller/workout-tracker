const router = require("express").Router();
const Workout = require("../../models/workout.js");

// create new workout
// router.post("/workout", ({ body }, res) => {
//     Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// put new exerices into workout
// router.put("/workout:id", ({ body }, res) => {
//     Workout.insert(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// view all workouts
// router.get("/workout", (req, res) => {
//     Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// view workout weights
// router.get("/workout", (req, res) => {
//     Workout.find({})
//         .sort({ weight: `${weight}` })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// view workout duration
// router.get("/workout", (req, res) => {
//     Workout.find({})
//         .sort({ duration: `${duration}` })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// module.exports = router;