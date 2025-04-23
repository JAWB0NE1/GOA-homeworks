const sportsClub = {
    clubName: "დინამო თბილისი",
    sportType: "ფეხბურთი",
    foundedYear: 1925,
    achievements: {
      title1: "UEFA-ის თასი 1981",
      title2: "საბჭოთა კავშირის ჩემპიონატი 1964",
      title3: "საქართველოს ჩემპიონატი 1990"
    }
  };
  console.log("ობიექტის თვისებები:", Object.keys(sportsClub));
  console.log("ობიექტის მნიშვნელობები:", Object.values(sportsClub));
  if ("sponsors" in sportsClub) {
    console.log("sponsors ველი არსებობს.");
  } else {
    console.log("sponsors ველი არ არსებობს.");
  }
  const updatedSportsClub = { ...sportsClub, stadiumCapacity: 55000 };
  console.log("განახლებული ობიექტი:", updatedSportsClub);
  Object.freeze(updatedSportsClub);
  updatedSportsClub.foundedYear = 1930;
  console.log("დაფუძნების წელი (ცვლილების მცდელობის შემდეგ):", updatedSportsClub.foundedYear);
  if (Object.isFrozen(updatedSportsClub)) {
    console.log("ობიექტი გაყინულია.");
  } else {
    console.log("ობიექტი არ არის გაყინული.");
  }
  