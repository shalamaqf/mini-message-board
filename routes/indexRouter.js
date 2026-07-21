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

module.exports = indexRouter;