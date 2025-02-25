function area(length, width) {
    return length * width;
}
var length = parsefloat(prompt("სიმაღლე:"));
var width = parsefloat(prompt("სიგანე:"));
var rectanglarea = area(length, width);
alert("მოცულობა არის: " + rectanglarea);
