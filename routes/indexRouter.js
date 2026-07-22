const { Router } = require('express');
const { randomUUID } = require('node:crypto');
const indexRouter = Router();

const messages = [
    {
        id: randomUUID(),
        text: "Hi, there!",
        user: "Amando",
        date: new Date()
    },
    {
        id: randomUUID(),
        text: "Hello World!",
        user: "Charles",
        date: new Date()
    }
]

indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages} )
})

indexRouter.get('/new', (req, res) => {
    res.render('new-message')
})

indexRouter.post('/new', (req, res) => {
    const text = req.body.message;
    const user = req.body.author;
    let messageID = randomUUID();
    messages.push({id: messageID, text: text, user: user, date: new Date()});
    res.redirect('/');
})

module.exports = indexRouter;