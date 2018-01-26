const requireLogin = require('../../middlewares/requireLogin');
const eventController = require('../../controllers/eventController');

module.exports = (router) => {
  router.post('/event', requireLogin, eventController.create_event);
};
