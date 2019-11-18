var express = require('express');
var router = express.Router();
var devicesCtrl = require('./../controllers/devices_controller');

router.get('/', devicesCtrl.getAllDevices);
router.get('/:id', devicesCtrl.getDevice);

router.post('/create', devicesCtrl.createDevice);
router.put('/update/:id', devicesCtrl.updateDevice);
router.delete('/delete/:id', devicesCtrl.deteleDevice);

module.exports = router;
