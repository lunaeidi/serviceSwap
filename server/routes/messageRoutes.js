const messageController = require('../controllers/messagesController')

module.exports= (app) => {
    app.get('/api/messages', messageController.index);
    app.post('/api/messages', messageController.create);
}