function checkType(value) {
    return (value !== Object(value)) ? "primitive" : "non-primitive";
}