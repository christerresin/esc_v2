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
            minRatingFilter: 0,
            maxRatingFilter: 5,
            textFilter: ''
        };
        this.labelsArray = [];
        this.minStarsArray = [];
        this.maxStarsArray = [];
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

        const filterButton = document.querySelector('.filter-cta');
        filterButton.addEventListener('click', () => 
        {
            filterButton.style.display = 'none'; 
            filterBoard.style.display = "block";
        }
    );

        const filterBoard = document.querySelector('.filter-board');
        filterBoard.style.display = 'none';
        
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
        xButton.addEventListener('click',() => 
            {
                filterButton.style.display = 'block';
                filterBoard.style.display = "none";
            }
        );

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
        filterListPoint1.addEventListener('change', () => {
            if (!this.filters.byOnline) {
                this.filters.byOnline = true;
                this.rerender()
            }
            else {
                this.filters.byOnline = false;
                this.rerender()
            }
        });

        const filterTypeCheck1 = document.createElement('input');
        filterTypeCheck1.type = "checkbox";
        filterTypeCheck1.checked = true
        filterListPoint1.appendChild(filterTypeCheck1);

        const filterTypeText1 = document.createElement('label');
        filterTypeText1.innerHTML = "&nbspInclude online challenges";
        filterListPoint1.appendChild(filterTypeText1);

        const filterListPoint2 = document.createElement('li');
        filterTypeList.appendChild(filterListPoint2);
        filterListPoint2.addEventListener('change', () => {
            if (!this.filters.byOnsite) {
                this.filters.byOnsite = true;
                this.rerender()
            }
            else {
                this.filters.byOnsite = false;
                this.rerender()
            }
        });

        const filterTypeCheck2 = document.createElement('input');
        filterTypeCheck2.type = "checkbox";
        filterTypeCheck2.checked = true
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

        function createStars(starsArr) {
            for (let i = 0; i < 5; i++) {
                starsArr[i] = document.createElement('li');
                starsArr[i].classList.add("filter-rating-star");
                starsArr[i].classList.add("off");
                filterRatingList.appendChild(starsArr[i]); 
                starsArr.push();  
            } 
        }

        // let rate = this.filters.byRating;

        // function starRating(starsArr) {
        //     const starLength = starsArr.length;
        //     rate = true;
        //     starsArr.forEach((star) => {
        //         star.addEventListener('click', () =>  {
        //             let i = starsArr.indexOf(star);  
        //             if (star.classList.contains("off")) {
        //                 for (i; i >= 0; --i) {
        //                     starsArr[i].classList.add("on");
        //                     starsArr[i].classList.remove("off");
        //                 }
        //             }
        //             else {           
        //                 i+=1;        
        //                 for (i; i < starLength; ++i) {
        //                     starsArr[i].classList.add("off");
        //                     starsArr[i].classList.remove("on");
        //                 } 
        //             }  
        //         }) 
        //     })         
        // }             

        // MinRatingStars creation and eventListener
        // const starsArray = [];
        // createStars(starsArray);
        // starRating(starsArray);

        createStars(this.minStarsArray);

        this.minStarsArray.forEach(star => {
            star.addEventListener('click', () => {
                let i = this.minStarsArray.indexOf(star);
                let clickedStar = i + 1;

                // if(clickedStar === i + 1 && this.filters.minRatingFilter === i + 1) {
                //     clickedStar = this.minStarsArray.indexOf(star);
                //     console.log(this.minStarsArray.indexOf(star));
                // }

                if(star.classList.contains('off')) {
                    for (i; i >= 0; i--) {
                        this.minStarsArray[i].classList.add('on');
                        this.minStarsArray[i].classList.remove('off');
                    }
                } else {
                    clickedStar--
                    for (i; i < this.minStarsArray.length; ++i) {
                        this.minStarsArray[i].classList.add('off')
                        this.minStarsArray[i].classList.remove('on')
                    }
                }
                this.filters.minRatingFilter = clickedStar;
                this.filters.byRating = true;
                this.rerender()
            })
        })
        
        // Label "to" between stars
        const filterStarLabel = document.createElement('li');
        filterStarLabel.innerHTML = "&nbspto&nbsp";
        filterStarLabel.style.textAlign = "center";
        filterStarLabel.style.padding = "0.5rem";
        filterRatingList.appendChild(filterStarLabel);

        createStars(this.maxStarsArray);
        
        this.maxStarsArray.forEach(star => {
            star.addEventListener('click', () => {
                let i = this.maxStarsArray.indexOf(star);
                let clickedStar = i + 1;
                if(star.classList.contains('off')) {
                    for (i; i >= 0; i--) {
                        this.maxStarsArray[i].classList.add('on');
                        this.maxStarsArray[i].classList.remove('off');
                    }
                } else {
                    i+=1;
                    for (i; i < this.maxStarsArray.length; ++i) {
                        this.maxStarsArray[i].classList.add('off')
                        this.maxStarsArray[i].classList.remove('on')
                    }
                }
                this.filters.maxRatingFilter = clickedStar;
                this.filters.byRating = true;
                this.rerender()
            })
        })
        // MaxRatingStars creation
        // const starsArray2 = [];
        // createStars(starsArray2);
        // starRating(starsArray2);

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

        // Creates array of all labels in all challenges
        this.challenges.forEach(obj => {
            obj.labels.forEach(label => {
                if(!this.labelsArray.includes(label)) {
                    this.labelsArray.push(label);
                    const filterTagItem = document.createElement('label');
                    filterTagItem.innerHTML = label;
                    filterTagItem.style.backgroundColor = 'white';
                    filterTagLabels.appendChild(filterTagItem);
                    filterTagItem.addEventListener('click', (event) => {
                        // Label selected conditional
                        if (filterTagItem.style.backgroundColor == "white") {
                            filterTagItem.style.backgroundColor = "lightslategray";
                            filterTagItem.style.color = "white";
                            filterTagItem.style.borderColor = "lightslategray";                          
                        } else {
                            filterTagItem.style.backgroundColor = "white";
                            filterTagItem.style.color = "gray";
                            filterTagItem.style.borderColor = "lightgray";
                        }

                        const value = event.target.innerText;
                        const index = this.filters.labelsFilters.indexOf(value);
                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);
                        this.filters.labelsFilters.length > 0 ? this.filters.byLabel = true : this.filters.byLabel = false;
                        
                        this.rerender()
                    })
                }
            });
        });



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
    }

    rerender() {
        // Clear the DOM
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
