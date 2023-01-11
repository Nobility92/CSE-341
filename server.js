var express = require('express');
var app = express();
const port = process.env.port || 8080;


app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Server is runninng on port ${port}`);
});