const Identifier = require('../models/Identifier');
const StopWord = require('../models/StopWord');

const {
    stripPunctuation,
    getWords,
    buildStopWordJson,
    buildDateWordJson,
    buildUnknownWordJson
} = require('./helpers');

class Parser {
    // Parse through and identify all StopWords & Identifiers
    constructor (query) {
        const sentence = stripPunctuation(query);
        this.words = getWords(sentence);
        this.parsed = [];
    }

    updateParsed (json) {
        this.parsed = [...this.parsed, json];
    }

    parseWords () {
        this.words.forEach(orignalWord => {
        const searchWord = orignalWord.toLowerCase();

        const foundDateName = Identifier.findDateWord(searchWord);
        const foundStopWord = StopWord.isStopWord(searchWord);

        if (foundStopWord) {
            this.updateParsed(buildStopWordJson(orignalWord));
        } else if (foundDateName) {
            const value = foundDateName.value.format('MM-DD-YYYY');

            this.updateParsed(buildDateWordJson(orignalWord, value));
        } else {
            this.updateParsed(buildUnknownWordJson(orignalWord));
        }
        });

        return this.parsed;
    }
}

module.exports = Parser;
