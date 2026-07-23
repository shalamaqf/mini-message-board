const { Router } = require('express');
const indexRouter = Router();
const messages = require('../db')
const { getMessageById, 
        postMessage, 
        getHomePage, 
        getAddNewMessagePage } = require('../controller/messageController')


indexRouter.get('/', getHomePage);
indexRouter.get('/new', getAddNewMessagePage);
indexRouter.get('/message/:id', getMessageById);
indexRouter.post('/new', postMessage);

module.exports = indexRouter;