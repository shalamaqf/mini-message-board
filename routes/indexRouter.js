const { Router } = require('express');
const indexRouter = Router();
const messages = require('../db')
const { getMessageById, postMessage, getHomePage } = require('../controller/messageController')


indexRouter.get('/', getHomePage);

indexRouter.get('/new', (req, res) => {
    res.render('new-message', { title: 'Add New Message' })
})

indexRouter.get('/message/:id', getMessageById);

indexRouter.post('/new', postMessage);

module.exports = indexRouter;