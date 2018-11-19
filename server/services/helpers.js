// Helpers: String manipulations
const stripPunctuation = str => str.replace(/[!\.,]/g, '');
const getWords = str => str.split(' ');

// Helpers: JSON response
const buildStopWordJson = (matchedWord) => ({
    matchedWord,
    value: matchedWord,
    type: 'stop word'
});
const buildDateWordJson = (matchedWord, value) => ({
    matchedWord,
    value,
    type: 'date'
});
const buildUnknownWordJson = (matchedWord) => ({
    matchedWord,
    value: matchedWord.toLowerCase(),
    type: 'unknown'
});

module.exports = {
    stripPunctuation,
    getWords,
    buildStopWordJson,
    buildDateWordJson,
    buildUnknownWordJson
};
