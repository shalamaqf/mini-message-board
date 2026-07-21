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