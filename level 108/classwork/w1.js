let gv="globaluri cvladi";
//ეს შევქმენი გლობალური ცვლადი (მაღლა)
// ეს კიდე შევქმენი ფუნქცია რომელშიც შევქმენი კიდევ ერთი ცვლადი მაგრამ ამ ჯერად ლოკალური
function myFunction() {
    let lv="lokaluri";
    console.log(gv);
    console.log(lv);
}
//ფუნქციის შიგნით მივიღე წვდომა გლობალურ ცვლადზე console.logით
myFunction();
//და გამოვიძახე ფუნქცია
console.log(gv);