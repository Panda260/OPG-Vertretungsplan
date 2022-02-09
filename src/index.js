const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/plan', (req, res) => {

    let pluginName = req.query.plugin;

    //read the json file output.txt
    let plugins = fs.readFileSync('output.txt', 'utf-8');
    res.sendFile(path.join(__dirname + '/../output.txt'));

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));

});
const port = 805;

app.listen(port, () => console.log(`Listening on port ${port}`));