export class Filter {
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
                return this.filters.labelsFilters.every(label => obj.labels.includes(label));
            })
        }
    
        if (this.filters.byRating) {
            newArray = newArray.filter(obj => {
                if(obj.rating >= this.filters.minRatingFilter && obj.rating <= this.filters.maxRatingFilter) {
                    return obj;
                }
            });
        }
    
        if (this.filters.byText) {
            newArray = newArray.filter(obj => {
                // returns obj with title or description that includes the value from textFilter
                return obj.description.toUpperCase().includes(this.filters.textFilter.toUpperCase()) || obj.title.toUpperCase().includes(this.filters.textFilter.toUpperCase());
            });
        }

        // This shuffle is fluff, just for you Richard :)
        //const shuffledArray = newArray.sort((a, b) => 0.5 - Math.random());
        const shuffledArray = newArray.sort((a, b) => b.rating - a.rating);
        return shuffledArray;    
    }
}
