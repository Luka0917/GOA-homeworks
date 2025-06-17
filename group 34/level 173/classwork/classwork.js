// 7kyu

// https://www.codewars.com/kata/536c00e21da4dc0a0700128b

function getVillainName(birthday){
  const m = [
    "The Evil", "The Vile", "The Cruel", "The Trashy",
    "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious",
    "The Twirling", "The Orange", "The Terrifying", "The Awkward"
  ];
  const d = [
    "Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin",
    "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"
  ];
  const month = birthday.getMonth();
  const date = birthday.getDate();
  const lastDigit = date % 10;
  return `${m[month]} ${d[lastDigit]}`;
}