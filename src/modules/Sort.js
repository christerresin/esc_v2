export class Sort {
    constructor(sortByObj) {
        this.sortByObj = {
            byHighRating: sortByObj.byHighRating,
            byLowRating: sortByObj.byLowRating,
            byCharA: sortByObj.byCharA,
            byCharZ: sortByObj.byCharZ
        }
    }

    sortArray(array) {
        let sortedArray = array;
        // Sort challenges on rating low-to-high
        if (this.sortByObj.byLowRating === true) {
            function compare(a, b) {
                if (a.rating < b.rating) {
                    return -1;
                }
                if (a.rating > b.rating) {
                    return 1;
                }
                return 0;
            }
            return sortedArray.sort(compare);
        }
        // Sort challenges on rating high-to-low
        if (this.sortByObj.byHighRating === true) {
            function compare(a, b) {
                if (a.rating < b.rating) {
                    console.log(a.rating)
                    console.log(b.rating)
                    return 1;
                }
                if (a.rating > b.rating) {
                    return -1;
                }
                return 0;
            }
            return sortedArray.sort(compare);
        }
        // Sort challenges by first chars in title a-to-z
        if (this.sortByObj.byCharA === true) {
            function compare(a, b) {
                if (a.title.substr(0, a.title.indexOf(' ')) < b.title.substr(0, b.title.indexOf(' '))) {
                    return -1;
                }
                if (a.title.substr(0, a.title.indexOf(' ')) > b.title.substr(0, b.title.indexOf(' '))) {
                    return 1;
                }
                return 0;
            }
            return sortedArray.sort(compare);
        }
        // Sort challenges by first chars in title z-to-a
        if (this.sortByObj.byCharZ === true) {
            function compare(a, b) {
                if (a.title.substr(0, a.title.indexOf(' ')) < b.title.substr(0, b.title.indexOf(' '))) {
                    return 1;
                }
                if (a.title.substr(0, a.title.indexOf(' ')) > b.title.substr(0, b.title.indexOf(' '))) {
                    return -1;
                }
                return 0;
            }
            return sortedArray.sort(compare);
        }

        return sortedArray;
    }
}