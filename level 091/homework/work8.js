function getStringLengths(arrayOfStrings) {
    const lengths = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        lengths.push(arrayOfStrings[i].length);
    }
    return lengths;
}