const db = require("../db/queries");

async function getMessageById(req, res) {
    const targetId = Number(req.params.id);
    const message = await db.searchMessage(targetId);

    if (!message) {
        return res.status(404).render('message-not-found', { title: `Message's Not Found`})
    }

    res.render('message-details', { message: message, title: `Message's Details`});
}

async function postMessage(req, res) {
    const text = req.body.message;
    const user = req.body.author;
    await db.insertMessage(text, user);
    res.redirect('/');
}

module.exports = { getMessageById, postMessage };