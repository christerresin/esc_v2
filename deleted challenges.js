<<<<<<< HEAD
// DOM Selectors
const challengesList = document.querySelector('.challenges-list');


=======
// Render function
const renderChallenges = function (arr) {

    // DOM Selectors
    const challengesList = document.querySelector('.challenges-list');
    const filterTextBar = document.querySelector('.filterTextBar');


    
    // Check that input is array with values
    if (arr === undefined || arr.length < 1) {
        let noChallenges = document.createElement('h3');
        // create new className in CSS and change code to add created className
        noChallenges.classList.add('challenge-title');
        noChallenges.innerHTML = "No matching challenges";

        challengesList.appendChild(noChallenges);

    } else {

        // Creates array of labels to be rendered as filter options
        let labelsArray = [];
        let textFilter = ''

        // Filters obj
        let filters = {
            byOnline: true,
            byOnsite: true,
            byLabel: false,
            byRating: true,
            byText: true,
            labelsFilters: ['bash'],
            minRatingFilter: 0,
            maxRatingFilter: 5,
            textFilter: ''
        };

        //EventListeners
        const filterTextBar = document.querySelector('.filterTextBar');
        filterTextBar.addEventListener('keydown', () => {
        textFilter = filterTextBar.value;
        console.log(textFilter)
        filterArray(arr, filters, textFilter);
        })


        arr.forEach(obj => {
            obj.labels.forEach(label => {
                if(!labelsArray.includes(label)) {
                    labelsArray.push(label);
                }
            });
        });

        // Loops over all filtered objs in arr to render elements on page
        filterArray(arr, filters, textFilter).forEach(obj => {
            // Create elements for challenge card
            let challengesItem = document.createElement('li');
            challengesItem.classList.add('challenges-item');

            let challengesPicture = document.createElement('img')
            challengesPicture.classList.add('challenge-picture');
            challengesPicture.src=obj.image;

            let challengeTitle = document.createElement('h3');
            challengeTitle.classList.add('challenge-title');
            challengeTitle.innerHTML = obj.title;

            let challengeMeta = document.createElement('div');
            challengeMeta.classList.add('challenge-meta');

            let challengeRating = document.createElement('ul');
            challengeRating.classList.add('challenge-rating');

            // Create elements for rating stars
            for(let i = 0; i < Math.floor(obj.rating); i++) {
                let challengeRatingStar = document.createElement('li');
                challengeRatingStar.classList.add('challenge-rating-star');
                challengeRatingStar.classList.add('on');
                challengeRating.appendChild(challengeRatingStar);
            };

            for(let i = Math.floor(obj.rating); i < 5; i++) {
                let challengeRatingStar = document.createElement('li');
                challengeRatingStar.classList.add('challenge-rating-star');
                challengeRatingStar.classList.add('off');
                challengeRating.appendChild(challengeRatingStar);
            };

            let challengeSize = document.createElement('small');
            challengeSize.classList.add('challenge-size');
            challengeSize.innerHTML = `${obj.minParticipants}-${obj.maxParticipants} participants`;

            let challengeDescription = document.createElement('p');
            challengeDescription.classList.add('challenge-description');
            challengeDescription.innerHTML = obj.description

            let challengeCta = document.createElement('a');
            challengeCta.classList.add('challenge-cta');
            challengeCta.innerHTML = "Book the room";

            // Render/append on site
            challengesList.appendChild(challengesItem);
            challengesItem.appendChild(challengesPicture);
            challengesItem.appendChild(challengeTitle);
            challengesItem.appendChild(challengeMeta)
            challengeMeta.appendChild(challengeRating);
            challengeMeta.appendChild(challengeSize);
            challengesItem.appendChild(challengeDescription);
            challengesItem.appendChild(challengeCta);
                        
        });
    };
};
>>>>>>> 112b6bc34e64233a6169b29deed2e148b96489d3


<<<<<<< HEAD
let filterArray = function(array) {

    let newArray = [];
    let filteredArray = [];

    if (filters.byOnline) {
=======
let filterArray = function (array, filtersObj, str) {

    let newArray = [];
    let filteredArray = [];
    
    if (filtersObj.byOnline) {
>>>>>>> 112b6bc34e64233a6169b29deed2e148b96489d3
        filteredArray = array.filter(obj => {
                return obj.type === 'online';
            })
            // Using spread to "create"/concat a new array with all values
        newArray = [...newArray, ...filteredArray];
    }

    if (filtersObj.byOnsite) {
        filteredArray = array.filter(obj => {
                return obj.type === 'onsite';
            })
            // Using spread to "create"/concat a new array with all values
        newArray = [...newArray, ...filteredArray];
    }

    if (filtersObj.byLabel) {
        newArray = newArray.filter(obj => {
<<<<<<< HEAD
            for (let i = 0; i < labelsFilters.length; i++) {
                return obj.labels.includes(labelsFilters[i]);
=======
            for(let i = 0; i < filtersObj.labelsFilters.length; i++) {
                return obj.labels.includes(filtersObj.labelsFilters[i]);
>>>>>>> 112b6bc34e64233a6169b29deed2e148b96489d3
            }
        })
    }

    if (filtersObj.byRating) {
        newArray = newArray.filter(obj => {
<<<<<<< HEAD
            if (obj.rating >= minRatingFilter && obj.rating <= maxRatingFilter) {
=======
            if(obj.rating >= filtersObj.minRatingFilter && obj.rating <= filtersObj.maxRatingFilter) {
>>>>>>> 112b6bc34e64233a6169b29deed2e148b96489d3
                return obj;
            }
        });
    }

    if (filtersObj.byText) {
        newArray = newArray.filter(obj => {
            // returns obj with title or description that includes the value from textFilter
            return obj.description.toUpperCase().includes(str.toUpperCase()) || obj.title.toUpperCase().includes(str.toUpperCase());
        });
    }

    // BESTEST unit test in JS, console.log!
    console.log(newArray);
    console.log('here' + str)
    return newArray;
};




let data = DataRetriever();
// challengesData();
ChallengeGrid(data.challenges);
// renderChallenges(data.challenges)