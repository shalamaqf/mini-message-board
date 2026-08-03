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