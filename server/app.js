const express = require('express');

const app = express();
const router = express.Router();

const dataIdentifiers = require('./models/Identifier');
const { MealTimes, Dates } = dataIdentifiers;
const ParserService = require('./services/Parser');

app.use(router);

router.get('/', function (req, res) {
    res.send('Parse It!');
});

//Fulfill endpoint to list Identifiers & Stop Words
router.use('/mealtimes', function (req, res) {
    res.json({ MealTimes });
});
router.use('/dates', function (req, res) {
    res.json({ Dates });
});

//Parse the query!
router.post('/parse', function (req, res) {
    const { query } = req.query;

    if (query) {
        const parser = new ParserService(query);

        res.json({ words: parser.parseWords() });
    } else {
        res.json({ message: `Unable to parse an empty query string: ${query}` });
    }
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
