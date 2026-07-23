const { Router } = require('express');
const indexRouter = Router();
const messages = require('../db')
const { getMessageById, postMessage } = require('../controller/messageController')


indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages, title: 'Home Page'} )
})

indexRouter.get('/new', (req, res) => {
    res.render('new-message', { title: 'Add New Message' })
})

indexRouter.get('/message/:id', getMessageById);

indexRouter.post('/new', postMessage);

module.exports = indexRouter;