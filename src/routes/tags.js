const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/tags');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);

module.exports = router;
