const hotel = {
    hotelName: "Luxury Inn",
    stars: 5,
    location: "თბილისი, საქართველო",
    guestReviews: {
      review1: "საუკეთესო მომსახურება და სუფთა ოთახები!",
      review2: "შესანიშნავი სასტუმრო საოცარი ხედებით.",
      review3: "ცოტა ძვირი, მაგრამ ღირს."
    }
  };
  console.log("ობიექტის თვისებები და მნიშვნელობები:");
  Object.entries(hotel).forEach(([key, value]) => {
    console.log(`${key}:`, value);
  });
  console.log("გააჩნია თუ არა spa ველი:", hotel.hasOwnProperty("spa"));
  const updatedHotel = { ...hotel, roomsCount: 120 };
  console.log("განახლებული ობიექტი:", updatedHotel);
  Object.freeze(updatedHotel);
  updatedHotel.stars = 4;
  console.log("რეიტინგი (ცვლილების მცდელობის შემდეგ):", updatedHotel.stars);
  console.log("ობიექტი გაყინულია:", Object.isFrozen(updatedHotel));
  