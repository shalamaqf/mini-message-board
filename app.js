const express = require('express');
const app = express();
const PORT = 3000;
const path = require("node:path");

// set ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app middleware to parse form data to req.body
app.use(express.urlencoded({ extended: true }));


const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);
app.use((req, res, next) => {
    res.status(404).render('404', { title: `Page's Not Exist (404)` });
})


app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Listening to port ${PORT}`);
})