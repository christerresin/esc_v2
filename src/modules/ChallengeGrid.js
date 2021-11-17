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
