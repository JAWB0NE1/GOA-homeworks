const books = {
    "მეტამორფოზა": "ფრანც კაფკა",
    "ოსტატი და მარგარიტა": "მიხეილ ბულგაკოვი",
    "ალქიმიკოსი": "პაულო კოელიო"
};

const bookTitles = [];
for (let key in books) {
    bookTitles.push(key);
}

console.log(bookTitles);