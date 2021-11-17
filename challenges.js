// DOM Selectors
const challengesList = document.querySelector('.challenges-list');



// Filters obj
let filters = {
    byOnline: true,
    byOnsite: true,
    byLabel: false,
    byRating: true,
    byText: false
};

// Filter variables
let labelsFilters = ['bash'];
let minRatingFilter = 0;
let maxRatingFilter = 5;
let textFilter = 'linux';

let filterArray = function(array) {

    let newArray = [];
    let filteredArray = [];

    if (filters.byOnline) {
        filteredArray = array.filter(obj => {
                return obj.type === 'online';
            })
            // Using spread to "create"/concat a new array with all values
        newArray = [...newArray, ...filteredArray];
    }

    if (filters.byOnsite) {
        filteredArray = array.filter(obj => {
                return obj.type === 'onsite';
            })
            // Using spread to "create"/concat a new array with all values
        newArray = [...newArray, ...filteredArray];
    }

    if (filters.byLabel) {
        newArray = newArray.filter(obj => {
            for (let i = 0; i < labelsFilters.length; i++) {
                return obj.labels.includes(labelsFilters[i]);
            }
        })
    }

    if (filters.byRating) {
        newArray = newArray.filter(obj => {
            if (obj.rating >= minRatingFilter && obj.rating <= maxRatingFilter) {
                return obj;
            }
        });
    }

    if (filters.byText) {
        newArray = newArray.filter(obj => {
            // returns obj with title or description that includes the value from textFilter
            return obj.description.toUpperCase().includes(textFilter.toUpperCase()) || obj.title.toUpperCase().includes(textFilter.toUpperCase());
        });
    }

    console.log(newArray);
    return newArray;
};




let data = DataRetriever();
// challengesData();
ChallengeGrid(data.challenges);
// renderChallenges(data.challenges)