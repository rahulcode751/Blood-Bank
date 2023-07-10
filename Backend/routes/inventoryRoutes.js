const express = require('express');
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getInventoryHospitalController, getOrgnaisationForHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// routes
// ADD INVENTOR || post
router.post('/create-inventory', authMiddleware, createInventoryController)

// GET ALL BLOOD RECORDS || GET
router.get('/get-inventory', authMiddleware, getInventoryController)

// GET RECENT BLOOD RECORDS  || GET
router.get('/get-recent-inventory', authMiddleware, getRecentInventoryController)

// GET ALL HOSPITAL BLOOD RECORDS || GET
router.post('/get-inventory-hospital', authMiddleware, getInventoryHospitalController)

// GET ALL DONAR RECORDS || GET
router.get('/get-donars', authMiddleware, getDonarsController)

// GET ALL DONAR RECORDS || GET
router.get("/get-hospitals", authMiddleware, getHospitalController);

// GET ALL ORGANISATION RECORDS || GET
router.get("/get-organisations", authMiddleware, getOrgnaisationController);

// GET ALL ORGANISATION RECORDS || GET
router.get("/get-orgnaisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);

module.exports = router;
