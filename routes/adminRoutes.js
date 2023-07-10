const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController } = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware');
// router object
const router = express.Router();

// routes

/// GET || DONAR LIST
router.get('/donar-list', authMiddleware, adminMiddleware, getDonarsListController);

/// GET || HOSPITAL LIST
router.get('/hospital-list', authMiddleware, adminMiddleware, getHospitalListController);

/// GET || ORGANISATION LIST
router.get('/org-list', authMiddleware, adminMiddleware,
    getOrgListController);

/*--------------------------------------------------------------*/
/// DELET || ODONAR
router.delete('/delete-donar/:id', authMiddleware, adminMiddleware, deleteDonarController);

/// DELETE || DONAR LIST
// export 
module.exports = router;