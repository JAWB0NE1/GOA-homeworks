function concatenateAndPush(array1, array2, value) {
    const concatenatedArray = array1.concat(array2);
    concatenatedArray.push(value);
    return concatenatedArray;
}