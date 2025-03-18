const cinema = {
    cinemaName: "Silver Screen",
    moviesCount: 10,
    location: "თბილისი, საქართველო",
    movieReviews: {
      review1: "ფილმების ხარისხი და განრიგი შესანიშნავია.",
      review2: "სერვისი კარგი, მაგრამ ბილეთები ცოტა ძვირია.",
      review3: "კომფორტული სავარძლები და თანამედროვე ტექნოლოგიები."
    }
  };
  console.log("ობიექტის თვისებები და მნიშვნელობები:");
  Object.entries(cinema).forEach(([key, value]) => {
    console.log(`${key}:`, value);
  });
  console.log("გააჩნია თუ არა vipSeats ველი:", cinema.hasOwnProperty("vipSeats"));
  const updatedCinema = { ...cinema, ticketPrice: 15 };
  console.log("განახლებული ობიექტი:", updatedCinema);
  Object.freeze(updatedCinema);
  updatedCinema.moviesCount = 12;
  console.log("ფილმების რაოდენობა (ცვლილების მცდელობის შემდეგ):", updatedCinema.moviesCount);
  console.log("ობიექტი გაყინულია:", Object.isFrozen(updatedCinema));
  