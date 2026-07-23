const { Router } = require('express');
const indexRouter = Router();
const messages = require('../db')
const { getMessageById } = require('../controller/messageController')


indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages, title: 'Home Page'} )
})

indexRouter.get('/new', (req, res) => {
    res.render('new-message', { title: 'Add New Message' })
})

indexRouter.get('/message/:id', getMessageById);

indexRouter.post('/new', (req, res) => {
    const text = req.body.message;
    const user = req.body.author;
    let messageID = messages.length + 1;
    messages.push({id: messageID, text: text, user: user, date: new Date()});
    res.redirect('/');
})

module.exports = indexRouter;