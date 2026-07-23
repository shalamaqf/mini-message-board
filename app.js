const express = require('express');
const app = express();
const PORT = 3000;
const path = require("node:path");
const indexRouter = require('./routes/indexRouter');


// set ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set assets path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// app middleware to parse form data to req.body
app.use(express.urlencoded({ extended: true }));


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