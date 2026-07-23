const { Router } = require('express');
const indexRouter = Router();
const messages = require('../db');


indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages, title: 'Home Page'} )
})

indexRouter.get('/new', (req, res) => {
    res.render('new-message', { title: 'Add New Message' })
})

indexRouter.get('/message/:id', (req, res) => {
    const targetId = Number(req.params.id);
    const message = messages.find(message => message.id === targetId);

    if (!message) {
        return res.status(404).render('message-not-found', { title: `Message's Not Found`})
    }

    res.render('message-details', { message: message, title: `Message's Details`});
})

indexRouter.post('/new', (req, res) => {
    const text = req.body.message;
    const user = req.body.author;
    let messageID = messages.length + 1;
    messages.push({id: messageID, text: text, user: user, date: new Date()});
    res.redirect('/');
})

module.exports = indexRouter;