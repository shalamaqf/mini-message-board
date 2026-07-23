const messages = require('../db');

function getHomePage(req, res) {
    res.render('index', { messages: messages, title: 'Home Page'} );
}

function getAddNewMessagePage(req, res) {
    res.render('new-message', { title: 'Add New Message' });
}

function getMessageById(req, res) {
    const targetId = Number(req.params.id);
    const message = messages.find(message => message.id === targetId);

    if (!message) {
        return res.status(404).render('message-not-found', { title: `Message's Not Found`})
    }

    res.render('message-details', { message: message, title: `Message's Details`});
}

function postMessage(req, res) {
    const text = req.body.message;
    const user = req.body.author;
    let messageID = messages.length + 1;
    messages.push({id: messageID, text: text, user: user, date: new Date()});
    res.redirect('/');
}

module.exports = 
{   getMessageById, 
    postMessage, 
    getHomePage, 
    getAddNewMessagePage };