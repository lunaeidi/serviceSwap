const usersController = require('../controllers/usersController')

module.exports= (app) => {
    app.get('/api/users', usersController.index);
    app.post('/api/users', (req,res) => usersController.create(req,res));
}