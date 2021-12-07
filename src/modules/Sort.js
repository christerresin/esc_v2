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
        // sort challenges by ratin high-to-low
        if (this.sortByObj.byHighRating === true) {
            sortedArray = [];
            array.forEach(challenge => {
                if(challenge.rating >= 5) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating < 5 && challenge.rating >= 4) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating < 4 && challenge.rating >= 3) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating < 3 && challenge.rating >= 2) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating < 2 && challenge.rating >= 1) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating < 1 && challenge.rating >= 0) {
                    sortedArray.push(challenge);
                }
            });
        }
        // Sort challenges on rating low-to-high
        if (this.sortByObj.byLowRating === true) {
            sortedArray = [];
            array.forEach(challenge => {
                if (challenge.rating >= 0 && challenge.rating <= 1) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating > 1 && challenge.rating <= 2) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating > 2 && challenge.rating <= 3) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating > 3 && challenge.rating <= 4) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if (challenge.rating > 4 && challenge.rating < 5) {
                    sortedArray.push(challenge);
                }
            });
            array.forEach(challenge => {
                if(challenge.rating >= 5) {
                    sortedArray.push(challenge);
                }
            });
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