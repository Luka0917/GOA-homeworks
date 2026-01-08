export const items = Array.from({ length: 20 }, (_, i) => {
  const categories = ["tech", "food", "books", "clothes"];
  return {
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 10,
    category: categories[i % categories.length]
  };
});