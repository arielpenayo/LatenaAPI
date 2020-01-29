const admin = require('../controllers/admin');
const users = require('../controllers/users');
const reports = require('../controllers/reports');



module.exports = function(router) 
  {   
    //reports
    router.get('/reports', reports.findAll);
    router.get('/reports/:id', reports.findByPk);
    router.post('/reports-filter', reports.findAllByFilter);
    router.post('/reports', reports.create);
    router.put('/reports/:id', reports.update);
    router.delete('/reports/:id', reports.delete);

    // admin
    router.get('/admin', admin.findAll);
    router.get('/admin/:id', admin.findByPk);
    router.post('/admin-filter', admin.findAllByFilter);
    router.post('/admin', admin.create);
    router.put('/admin/:id', admin.update);
    router.delete('/admin/:id', admin.delete);

    //users
    router.get('/users', users.findAll);
    router.get('/users/:id', users.findByPk);
    router.post('/users-filter', users.findAllByFilter);
    router.post('/users', users.create);
    router.put('/users/:id', users.update);
    router.delete('/users/:id', users.delete);


    return router;
};