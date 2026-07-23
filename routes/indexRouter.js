const { Router } = require('express');
const indexRouter = Router();
const { getMessageById, postMessage } = require('../controller/messageController');
const { getHomePage, getAddNewMessagePage } = require('../controller/pageController');


indexRouter.get('/', getHomePage);
indexRouter.get('/new', getAddNewMessagePage);
indexRouter.get('/message/:id', getMessageById);
indexRouter.post('/new', postMessage);

module.exports = indexRouter;