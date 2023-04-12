const express = require('express');
const apiRoutes = require('./routes/apiPath');
const htmlRoutes = require('./routes/htmlPath');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Zach's Note Taker App listening on: ${PORT}`);
});