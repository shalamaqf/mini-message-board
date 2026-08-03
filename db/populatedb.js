const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text TEXT,
        user VARCHAR ( 255 ),
        date DATE
    );

    INSERT INTO messages (text, user, date)
    VALUES
        ('Hi, there!', 'Amando', CURRENT_DATE),
        ('Hello World!', 'Charles', CURRENT_DATE);
`;

// load env variables
require("dotenv").config();

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();