function countTruthiesAndFalsies(arr) {
    return arr.reduce((count, item) => {
        item ? count.truthy++ : count.falsy++;
        return count;
    }, { truthy: 0, falsy: 0 });
}