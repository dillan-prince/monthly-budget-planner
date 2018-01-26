const accountController = require('../../controllers/accountController');
const requireLogin = require('../../middlewares/requireLogin');

module.exports = (router) => {
  router.get('/accounts', requireLogin, accountController.get_accounts);
};
