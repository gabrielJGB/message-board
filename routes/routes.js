const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router(); 

router.get('/',controller.index);
router.post('/',controller.message_create_post);

module.exports = router;