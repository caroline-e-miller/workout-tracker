const express = require("express");
const mongoose = require("mongoose");
const compression = require('compression');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(compression());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify: false
});


app.use(require("./routes/index.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});