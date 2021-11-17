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
                        this.filters.byLabel = true;
                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);
                        // !! REMOVE ME LATER - test to display labels to filter
                        console.log(this.filters.labelsFilters)
                        this.rerender()
                    })
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
