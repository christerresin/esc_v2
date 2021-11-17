class LabelsGathering {
    constructor(arr) {
        this.arr = arr;
    }
    var labArr = [];
    arr.forEach(obj => {
        obj.labels.forEach(label => {
            if (!labArr.includes(label)) {
                labArr.push(label);
            };
        });
    });
    return labArr;
}