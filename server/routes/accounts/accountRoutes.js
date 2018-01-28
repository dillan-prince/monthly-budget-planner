const accountController = require('../../controllers/accountController');
const requireLogin = require('../../middlewares/requireLogin');

module.exports = (router) => {
  router.get('/accounts', requireLogin, accountController.get_accounts);
  router.get('/accounts/:accountId', requireLogin, accountController.get_account);
  router.post('/accounts', requireLogin, accountController.insert_account);
  router.put('/accounts', requireLogin, accountController.update_account);
};
