const messages = require('../db');

function getMessageById(req, res) {
    const targetId = Number(req.params.id);
    const message = messages.find(message => message.id === targetId);

    if (!message) {
        return res.status(404).render('message-not-found', { title: `Message's Not Found`})
    }

    res.render('message-details', { message: message, title: `Message's Details`});
}

module.exports = { getMessageById };