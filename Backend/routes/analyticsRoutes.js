const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { bloodGroupDetailsController } = require('../controllers/analyticsController');

const router = express.Router();

// routes

// GET ALL BLOOD GROUP DATA RECORDS || GET
router.get('/bloodGroups-data', authMiddleware, bloodGroupDetailsController)



module.exports = router;
