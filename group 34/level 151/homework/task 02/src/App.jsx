import ProductList from "./ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Whole Milk (1 Gallon)",
      price: 3.49,
      instock: true
    },
    {
      id: 2,
      name: "Brown Eggs (12-count)",
      price: 2.79,
      instock: true
    },
    {
      id: 3,
      name: "White Bread (Loaf)",
      price: 1.99,
      instock: false
    },
    {
      id: 4,
      name: "Chicken Breast (1 lb)",
      price: 5.29,
      instock: true
    },
    {
      id: 5,
      name: "Apples (Fuji, 1 lb)",
      price: 1.89,
      instock: true
    },
    {
      id: 6,
      name: "Orange Juice (64 oz)",
      price: 4.29,
      instock: true
    },
    {
      id: 7,
      name: "Butter (Salted, 1 lb)",
      price: 3.99,
      instock: false
    },
    {
      id: 8,
      name: "Cereal (Corn Flakes)",
      price: 3.49,
      instock: true
    },
    {
      id: 9,
      name: "Pasta (Spaghetti, 1 lb)",
      price: 1.29,
      instock: true
    },
    {
      id: 10,
      name: "Bottled Water (24-pack)",
      price: 4.99,
      instock: true
    }
  ];

  return (
    <>
    <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-[repeat(5,250px)] grid-rows-[repeat(2,375px)] gap-5">
          <ProductList arr={products} />
        </div>
    </div>
    </>
  )
}
export default App