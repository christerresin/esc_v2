// DOM Selectors
const challengesList = document.querySelector('.challenges-list');

// Render function
const renderChallenges = function (arr) {

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

        arr.map(obj => {
            obj.labels.forEach(label => {
                if(!labelsArray.includes(label)) {
                    labelsArray.push(label);
                }
            });
        });

        // OOP Challenge class
        class Challenge {
            constructor(data) {
                this.image = data.image;
                this.title = data.title;
                this.rating = data.rating;
                this.minParticipants = data.minParticipants;
                this.maxParticipants = data.maxParticipants;
                this.description = data.description;
            }
            render() {
                    // Create elements for challenge card
                let challengesItem = document.createElement('li');
                challengesItem.classList.add('challenges-item');

                let challengesPicture = document.createElement('img')
                challengesPicture.classList.add('challenge-picture');
                challengesPicture.src=this.image;

                let challengeTitle = document.createElement('h3');
                challengeTitle.classList.add('challenge-title');
                challengeTitle.innerHTML = this.title;

                let challengeMeta = document.createElement('div');
                challengeMeta.classList.add('challenge-meta');

                let challengeRating = document.createElement('ul');
                challengeRating.classList.add('challenge-rating');

                // Create elements for rating stars
                for(let i = 0; i < Math.floor(this.rating); i++) {
                    let challengeRatingStar = document.createElement('li');
                    challengeRatingStar.classList.add('challenge-rating-star');
                    challengeRatingStar.classList.add('on');
                    challengeRating.appendChild(challengeRatingStar);
            
                };

                for(let i = Math.floor(this.rating); i < 5; i++) {
                    let challengeRatingStar = document.createElement('li');
                    challengeRatingStar.classList.add('challenge-rating-star');
                    challengeRatingStar.classList.add('off');
                    challengeRating.appendChild(challengeRatingStar);
                };

                let challengeSize = document.createElement('small');
                challengeSize.classList.add('challenge-size');
                challengeSize.innerHTML = `${this.minParticipants}-${this.maxParticipants} participants`;

                let challengeDescription = document.createElement('p');
                challengeDescription.classList.add('challenge-description');
                challengeDescription.innerHTML = this.description

                let challengeCta = document.createElement('a');
                challengeCta.classList.add('challenge-cta');
                challengeCta.innerHTML = "Book the room";

                // Append elements to li element
                challengesItem.appendChild(challengesPicture);
                challengesItem.appendChild(challengeTitle);
                challengesItem.appendChild(challengeMeta)
                challengeMeta.appendChild(challengeRating);
                challengeMeta.appendChild(challengeSize);
                challengesItem.appendChild(challengeDescription);
                challengesItem.appendChild(challengeCta);

                return challengesItem;
            }
        }

        // Loops over all filtered objs in arr to render elements on page
        filterArray(arr).map(obj => {
            const challengeInstance = new Challenge(obj);
            const challengesItem = challengeInstance.render();      

            // Render/append on site
            challengesList.appendChild(challengesItem);             
        });
    };
};

// Filters obj
let filters = {
    byOnline: true,
    byOnsite: true,
    byLabel: false,
    byRating: false,
    byText: false
};

// Filter variables
let labelsFilters = ['bash'];
let minRatingFilter = 2;
let maxRatingFilter = 5;
let textFilter = 'try';

let filterArray = function (array) {

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
            for(let i = 0; i < labelsFilters.length; i++) {
                return obj.labels.includes(labelsFilters[i]);
            }
        })
    }

    if (filters.byRating) {
        newArray = newArray.filter(obj => {
            if(obj.rating >= minRatingFilter && obj.rating <= maxRatingFilter) {
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


let challengesData = async () => {
    let apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        renderChallenges(data.challenges);

    } catch (error){
        console.log(error);
    }

};

challengesData();