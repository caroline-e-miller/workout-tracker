const router = require('express').Router();
const path = require('path');

router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (error) {
        res.status(400);
    }
});

router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;