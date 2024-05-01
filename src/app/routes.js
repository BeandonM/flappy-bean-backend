const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getScores);
router.get('/hour', controller.getTopHour);
router.get('/day', controller.getTopDay);
router.get('/month', controller.getTopDay);
router.get('/alltime', controller.getTopAllTime);



module.exports = router;