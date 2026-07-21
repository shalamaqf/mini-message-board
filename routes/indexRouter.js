const { Router } = require('express');
const indexRouter = Router();

const messages = [
    {
        text: "Hi, there!",
        user: "Amando",
        date: new Date()
    },
    {
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
    messages.push({text: text, user: user, date: new Date()});
    res.redirect('/');
})

module.exports = indexRouter;