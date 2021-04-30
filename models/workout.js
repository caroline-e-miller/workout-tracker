const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date(),
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is Required",
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;