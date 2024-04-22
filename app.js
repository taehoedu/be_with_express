const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "reactapp/build")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/reactapp/build/index.html"));

});

app.listen(80);