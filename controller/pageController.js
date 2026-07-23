const messages = require('../db');

function getHomePage(req, res) {
    res.render('index', { messages: messages, title: 'Home Page'} );
}

function getAddNewMessagePage(req, res) {
    res.render('new-message', { title: 'Add New Message' });
}

module.exports = { getHomePage, getAddNewMessagePage };