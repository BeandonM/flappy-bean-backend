const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getScores);
router.get('/hour', controller.getTopHour);

module.exports = router;