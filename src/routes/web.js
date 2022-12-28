const express = require('express');
const router = express.Router();
const {getHomepage, getABC, getHoidanit} = require('../controllers/homeController')


router.get('/', getHomepage);

router.get('/hoidanit', getHoidanit);
router.get('/abc', getABC);
module.exports = router;