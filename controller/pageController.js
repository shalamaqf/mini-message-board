const db = require("../db/queries");

async function getHomePage(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', { messages, title: 'Home Page'} );
}

async function getAddNewMessagePage(req, res) {
    res.render('new-message', { title: 'Add New Message' });
}

module.exports = { getHomePage, getAddNewMessagePage };