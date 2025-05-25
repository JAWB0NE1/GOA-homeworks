// გლობალური ცვლადი არის ცვლადი, რომელიც განისაზღვრება ფუნქციის გარეთ და ხელმისაწვდომია კოდის ნებისმიერ ნაწილში.
let score = 0;

function increaseScore() {
  score += 10;
}

increaseScore();
console.log(score);