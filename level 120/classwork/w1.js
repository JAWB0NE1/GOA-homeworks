const book = { title: 'JavaScript', pages: 350 };
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}
const languages = ['JavaScript', 'Python', 'Go'];
for (let lang of languages) {
  console.log(lang);
}