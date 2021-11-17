class DataRetriever {
    constructor() {
        this.challenges = null
    }
    async load() {
        const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
        if(!this.challenges) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.challenges = data.challenges
            } catch (error) {
                console.log(error)
            }    
        }

        return this.challenges;
    }
}

class Challenge {
    constructor(data) {
        this.title = data.title;
        this.rating = data.rating;
        this.image = data.image;
        this.description = data.description;
        this.minParticipants = data.minParticipants;
        this.maxParticipants = data.maxParticipants;
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

        // Render/append on site
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

class ChallengeGrid {
    constructor(retriever, container, filter) {
        this.retriever = retriever;
        this.container = container;
        this.filter = filter;
        this.challengeItems = [];
        this.filters = {
            byOnline: true,
            byOnsite: true,
            byLabel: false,
            byRating: false,
            byText: false,
            labelsFilters: [],
            minRatingFilter: 2,
            maxRatingFilter: 5,
            textFilter: ''
        };
        this.labelsArray = [];
    }

    async run() {
        this.challenges = await this.retriever.load();

        // Creates array of all labels in all challenges
        this.challenges.forEach(obj => {
            obj.labels.forEach(label => {
                if(!this.labelsArray.includes(label)) {
                    this.labelsArray.push(label);
                }
            });
        });
        
        this.render();
    }

    render() {
        const filterInstance = new Filter(this.filters);
        const challengeArray = filterInstance.filterArray(this.challenges)
        challengeArray.forEach(challengeData => {
        const challengeInstance = new Challenge(challengeData);
        const challengeItem = challengeInstance.render();
        this.container.appendChild(challengeItem);
        this.challengeItems.push(challengeData);
        })

        // Filter by text or char on desription and title
        const filterTextBar = document.querySelector('.filterTextBar');
        filterTextBar.addEventListener('keyup', () => {
            this.filters.byText = true;
            this.filters.textFilter = filterTextBar.value;
            this.rerender()
        })
        
    }
    rerender() {
        this.container.innerHTML = '';

        const filterInstance = new Filter(this.filters);
        const challengeArray = filterInstance.filterArray(this.challengeItems)
        challengeArray.forEach(challengeData => {
        const challengeInstance = new Challenge(challengeData);
        const challengeItem = challengeInstance.render()
        this.container.appendChild(challengeItem)
            
        })
    }
}

class Filter {
    constructor(filtersObj) {
        this.filters = filtersObj
    }
    filterArray(array) {
        let newArray = [];
        let filteredArray = [];
        
        if (this.filters.byOnline) {
            filteredArray = array.filter(obj => {
                return obj.type === 'online';
            })
            // Using spread to "create"/concat a new array with all values
            newArray = [...newArray, ...filteredArray];
        }
    
        if (this.filters.byOnsite) {
            filteredArray = array.filter(obj => {
                return obj.type === 'onsite';
            })
            // Using spread to "create"/concat a new array with all values
            newArray = [...newArray, ...filteredArray];
        }
    
        if (this.filters.byLabel) {
            newArray = newArray.filter(obj => {
                for(let i = 0; i < labelsFilters.length; i++) {
                    return obj.labels.includes(this.labelsFilters[i]);
                }
            })
        }
    
        if (this.filters.byRating) {
            newArray = newArray.filter(obj => {
                if(obj.rating >= this.filters.minRatingFilter && obj.rating <= this.filters.maxRatingFilter) {
                    return obj;
                }
            });
        }
    
        if (filters.byText) {
            newArray = newArray.filter(obj => {
                // returns obj with title or description that includes the value from textFilter
                return obj.description.toUpperCase().includes(this.filters.textFilter.toUpperCase()) || obj.title.toUpperCase().includes(this.filters.textFilter.toUpperCase());
            });
        }
    
        console.log(newArray);
        return newArray;    
    }
}

// Filters obj
let filters = {
    byOnline: true,
    byOnsite: true,
    byLabel: false,
    byRating: false,
    byText: true,
    labelsFilters: [],
    minRatingFilter: 2,
    maxRatingFilter: 5,
    textFilter: ''
};

// Filter variables
let labelsFilters = ['bash'];
let minRatingFilter = 2;
let maxRatingFilter = 5;
let textFilter = 'go';

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


const container = document.querySelector('.challenges-list');
const retriever = new DataRetriever();
const filter = new Filter()

const grid = new ChallengeGrid(retriever, container, filter);

grid.run()