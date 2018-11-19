const moment = require('moment');

const MealTimes = [
    {
        value: "morning",
        names: [
            "morning", "breakfast"
        ]
    },
    {
        value: "midday",
        names: [
            "midday", "mid day", "lunch"
        ]
    },
    {
        value: "evening",
        names: [
            "evening", "dinner", "supper"
        ]
    },
    {
        value: "anytime",
        names: [
            "anytime", "snack"
        ]
    }
];

const Dates = [
    {
        value: moment(),
        names: [
            "today"
        ]
    },
    {
        value: moment().add(-1, 'day').toDate(),
        names: [
            "yesterday"
        ]
    },
    {
        value: moment().add(1, 'day').toDate(),
        names: [
            "tomorrow"
        ]
    },
];


const findDateWord = (word) => {
    const matchesDateName = ({ names }, word) => names.filter(name => name === word);

    return Dates.find(date => matchesDateName(date, word).length > 0);
};

module.exports.MealTimes = MealTimes;
module.exports.Dates = Dates;
module.exports.findDateWord = findDateWord;
