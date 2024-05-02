const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getScores);
router.get('/hour', controller.getTopHour);
router.get('/day', controller.getTopDay);
router.get('/month', controller.getTopMonth);
router.get('/alltime', controller.getTopAllTime);
router.post('/addscore', controller.addScore);



module.exports = router;