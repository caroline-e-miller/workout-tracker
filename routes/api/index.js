// root route
const router = require('express').Router();
const workoutRoutes = require('./workout');

// /api/*
router.use('/', workoutRoutes);

module.exports = router;