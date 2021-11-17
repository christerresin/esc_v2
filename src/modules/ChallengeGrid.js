import { Challenge } from './Challenge';
import { Filter } from './Filter';

export class ChallengeGrid {
    constructor(retriever, container) {
        this.retriever = retriever;
        this.container = container;
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

        // FILTERBOX
        // Filtr box - filter function
const filterButton = document.querySelector('.filter-cta');

filterButton.addEventListener('click', () => 
    {
        const filterBoard = document.querySelector('.filter-board');
        
        const filterMenu  = document.createElement('div');
        filterMenu.classList.add("filter-menu");
        filterBoard.appendChild(filterMenu);
        
        const filterBoxTitle = document.createElement('h3');
        filterBoxTitle.classList.add("filter-box-title");
        filterMenu.appendChild(filterBoxTitle);
        filterBoxTitle.innerHTML = "Filter challenges";

        const xButton = document.createElement('a');
        xButton.classList.add("x-button-style");
        const btnSpan = document.createElement('p');
        btnSpan.innerHTML = "&#10005;";
        xButton.appendChild(btnSpan);
        filterMenu.appendChild(xButton);

        const filtersToChoose = document.createElement('div');
        filtersToChoose.classList.add('choose-filter-box');
        filterMenu.appendChild(filtersToChoose);

        const filterType = document.createElement('div');
        filterType.classList.add("filter-by-type");
        filtersToChoose.appendChild(filterType);

        const filterTypeTitle = document.createElement('h4');
        filterTypeTitle.innerHTML = "By Type";
        filterType.appendChild(filterTypeTitle);

        const filterTypeList = document.createElement('ul');
        filterType.appendChild(filterTypeList);

        const filterListPoint1 = document.createElement('li');
        filterTypeList.appendChild(filterListPoint1);

        const filterTypeCheck1 = document.createElement('input');
        filterTypeCheck1.type = "checkbox";
        filterListPoint1.appendChild(filterTypeCheck1);

        const filterTypeText1 = document.createElement('label');
        filterTypeText1.innerHTML = "&nbspInclude online challenges";
        filterListPoint1.appendChild(filterTypeText1);

        const filterListPoint2 = document.createElement('li');
        filterTypeList.appendChild(filterListPoint2);

        const filterTypeCheck2 = document.createElement('input');
        filterTypeCheck2.type = "checkbox";
        filterListPoint2.appendChild(filterTypeCheck2);

        const filterTypeText2 = document.createElement('label');
        filterTypeText2.innerHTML = "&nbspInclude on-site challenges";
        filterListPoint2.appendChild(filterTypeText2);
        
        const filterRating = document.createElement('div');
        filterRating.classList.add("filter-by-rating");
        filtersToChoose.appendChild(filterRating);

        const filterRatingTitle = document.createElement('h4');
        filterRatingTitle.innerHTML = "By Rating";
        filterRating.appendChild(filterRatingTitle);

        const filterRatingList = document.createElement('ul');
        filterRating.appendChild(filterRatingList);


    const starsArray = [];

        for (let i = 0; i < 5; i++) {
            starsArray[i] = document.createElement('li');
            starsArray[i].classList.add("filter-rating-star");
            starsArray[i].classList.add("off");
            filterRatingList.appendChild(starsArray[i]); 
            starsArray.push();
        } 

        function starRating(starsArray) {
        const starLength = starsArray.length;

        starsArray.forEach((star) => {
            star.addEventListener('click', () =>  {
                let i = starsArray.indexOf(star);
                
                if (star.classList.contains("off")) {
                    for (i; i >= 0; --i) {
                        starsArray[i].classList.add("on");
                        starsArray[i].classList.remove("off");
                    }
                }
                else {
                    for (i; i < starLength; ++i) {
                        starsArray[i].classList.add("off");
                        starsArray[i].classList.remove("on");
                    } 
                }
            }); 
        }); }

        starRating(starsArray);
    
        // Label "to" between stars
        const filterStarLabel = document.createElement('li');
        filterStarLabel.innerHTML = "&nbspto&nbsp";
        filterStarLabel.style.textAlign = "center";
        filterStarLabel.style.padding = "0.5rem";
        filterRatingList.appendChild(filterStarLabel);

        for (let i = 0; i < 5; i++) {
            const filterRatingStar = document.createElement('li');
            filterRatingStar.classList.add('filter-rating-star');
            filterRatingStar.classList.add('on');
            filterRatingList.appendChild(filterRatingStar);
        }

        // Tag creation
        const filterTag = document.createElement('div');
        filterTag.classList.add("filter-by-tag");
        filtersToChoose.appendChild(filterTag);

        const filterTagTitle = document.createElement('h4');
        filterTagTitle.innerHTML = "By Tag";
        filterTag.appendChild(filterTagTitle);

        const filterTagLabels = document.createElement('div');
        filterTagLabels.classList.add("filter-by-tag-item");
        filterTag.appendChild(filterTagLabels);

        const filterTagItem = document.createElement('label');
        filterTagItem.innerHTML =  "Web";
        filterTagLabels.appendChild(filterTagItem);


        filterTagItem.addEventListener('click', () => 
            {   
                if (filterTagItem.style.backgroundColor == "white") {
                        filterTagItem.style.backgroundColor = "lightslategray";
                        filterTagItem.style.color = "white";
                        filterTagItem.style.borderColor = "lightslategray";
                        filters.byLabel = true;
                        
                }
                else {
                    filterTagItem.style.backgroundColor = "white";
                    filterTagItem.style.color = "gray";
                    filterTagItem.style.borderColor = "lightgray";
                    filters.byLabel = false;
                }
            }    
        );


        const filterSearchText = document.createElement('div');
        filterSearchText.classList.add("filter-search-text");
        filterMenu.appendChild(filterSearchText);

        const filterSearchTextTitle = document.createElement('h4');
        filterSearchTextTitle.innerHTML = "Or type to search for keyword";
        filterSearchText.appendChild(filterSearchTextTitle);

        const searchText = document.createElement('input');
        searchText.type = "text";
        searchText.classList.add('filter-search-input');
        searchText.placeholder = "Start typing to filter";
        searchText.addEventListener('keyup', () => {
            this.filters.byText = true;
            this.filters.textFilter = searchText.value;
            this.rerender()
        });
        filterSearchText.appendChild(searchText);
        
        
        
        filterListPoint1.addEventListener('click', () => {
            if (!filters.byOnline) {
                filters.byOnline = true;
                filterArray(arr);
            }
            else {
                filters.byOnline = false;
            }
        });

        filterListPoint2.addEventListener('click', () => {
            if (!filters.byOnsite) {
                filters.byOnsite = true;
            }
            else {
                filters.byOnsite = false;
            }
        });

        let filters = {
            byOnline: false,
            byOnsite: false,
            byLabel: false,
            byRating: false,
            byText: false
        }

        
        filterButton.style.display = 'none'; 
        
        xButton.addEventListener('click',() => 
            {
                filterButton.style.display = 'block';
                filterBoard.removeChild(filterMenu);
            }
        );
    }
);


        // FILTERBOX



        // Creates array of all labels in all challenges
        this.challenges.forEach(obj => {
            obj.labels.forEach(label => {
                if(!this.labelsArray.includes(label)) {
                    this.labelsArray.push(label);
                    const labelButton = document.createElement('span');
                    labelButton.style.height = '50px';
                    labelButton.style.marginRight = '10px'
                    labelButton.innerText = label;
                    const labelsEl = document.querySelector('.labels');
                    labelsEl.appendChild(labelButton);
                    labelButton.addEventListener('click', (event) => {
                        const value = event.target.innerText;
                        const index = this.filters.labelsFilters.indexOf(value);
                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);
                        this.filters.labelsFilters > 0 ? this.filters.byLabel = true : this.filters.byLabel = false;

                        // !! REMOVE ME LATER - test to display labels to filter
                        this.rerender()
                    })
                }
            });
        });
        
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
