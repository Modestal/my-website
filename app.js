const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set(path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use('/', routes)
app.listen(process.env.PORT || 8000, () => {
    console.log('listening at port 8000')
});