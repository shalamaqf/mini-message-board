const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows; 
}

async function insertMessage(text, username) {
    await pool.query("INSERT INTO messages (text, username, date) VALUES ($1, $2, CURRENT_DATE);", [text, username]);
}

async function searchMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1;", [id]);
    return rows[0];
}

module.exports = {
    getAllMessages,
    insertMessage,
    searchMessage
}