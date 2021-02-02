const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.home);

/* GET detail page */
router.get('/detail', indexController.detail);

// retorno del estado
router.get('/callback', indexController.callback);

router.post('/notifications', indexController.notifications)


// post comprar
router.post('/comprar', indexController.comprar);

module.exports = router;
